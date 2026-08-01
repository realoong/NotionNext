# Notion 图片反代加速

Notion 上传的图片会先访问 `www.notion.so/image/...`，再跳转到带签名的素材地址。直接让浏览器访问 Notion，缓存命中率不稳定，也看不到自己站点 Cloudflare 的 `CF-Cache-Status: HIT`。更稳的做法是给 Notion 素材单独准备一个 Cloudflare Worker 反代域名，例如：

```text
NEXT_PUBLIC_NOTION_HOST=https://cdn.example.com
```

这样 NotionNext 会把 Notion 内置图片映射到你的 CDN 域名，`yarn start` 和 `yarn export` 都可以使用。

## 适用场景

- 文章里大量使用 Notion 上传图片。
- 想让图片命中自己 Cloudflare 账号的缓存。
- 不想压缩图片，也不想先把图片搬到 R2、OSS 或本地图床。
- 静态部署和动态部署都要兼容。

如果站点访问量很大，建议直接使用 Workers Paid。Worker 免费版有每日请求数限制，而且每张图片请求都会执行一次 Worker。

## 准备域名

1. 在 Cloudflare 托管你的主域名。
2. 准备一个素材域名，例如 `cdn.example.com`。
3. 不要手动给这个域名加普通 DNS 解析；`wrangler deploy` 使用 Custom Domain 时会绑定到 Worker。

如果已经有同名 DNS 记录，先确认它不是生产业务入口，再删除或改名，避免 Worker 绑定失败。

## 创建 Cloudflare API Token

推荐从头像菜单进入：

```text
My Profile -> API Tokens -> Create Token
```

不要只在 Account 页面创建“Write all resources” token。那个权限覆盖资源写入，但可能缺少 Wrangler 部署时需要的用户成员读取权限。

最小权限：

```text
User -> Memberships -> Read
User -> User Details -> Read
Account -> Workers Scripts -> Edit
Zone -> Workers Routes -> Edit
Zone -> DNS -> Edit
```

资源范围选择你的账号和域名所在 zone。

## 部署 Worker

仓库内置了最小 Worker：

```text
cloudflare/notion-image-proxy/
```

复制示例配置：

```bash
cd cloudflare/notion-image-proxy
cp wrangler.toml.example wrangler.toml
```

把 `cdn.example.com` 改成你的 CDN 域名：

```toml
routes = [
  { pattern = "cdn.example.com", custom_domain = true }
]
```

部署：

```bash
npx wrangler deploy
```

成功后会看到类似输出：

```text
Deployed notion-image-proxy triggers
  cdn.example.com (custom domain)
```

## 配置 NotionNext

动态部署、静态导出都只需要加一个环境变量：

```text
NEXT_PUBLIC_NOTION_HOST=https://cdn.example.com
```

常见平台位置：

| 平台 | 配置位置 |
| --- | --- |
| Vercel | Project Settings -> Environment Variables |
| Cloudflare Pages | Settings -> Variables and Secrets |
| Docker / VPS | `.env` 或容器环境变量 |
| 本地预览 | PowerShell 中设置环境变量后启动 |

本地 PowerShell 示例：

```powershell
$env:NEXT_PUBLIC_NOTION_HOST='https://cdn.example.com'
$env:ENABLE_CACHE='false'
yarn dev -p 3002
```

`ENABLE_CACHE=false` 只建议本地验证时使用，避免旧的 Notion 数据缓存让页面继续输出 `www.notion.so`。

## 验证缓存

打开一张 Notion 图片，或直接用命令行请求：

```bash
curl -I "https://cdn.example.com/images/page-cover/gradients_11.jpg"
```

第一次通常是：

```text
CF-Cache-Status: MISS
X-Notion-Image-Proxy-Cache: MISS
```

第二次应该变成：

```text
CF-Cache-Status: HIT
X-Notion-Image-Proxy-Cache: HIT
```

如果 Chrome DevTools 显示 `200 OK（来自内存缓存）`，说明这次请求没有真正打到 Cloudflare。此时看到的 `CF-Cache-Status: MISS` 可能只是浏览器缓存保存的旧响应头。验证时勾选 Network 面板里的 `Disable cache`，或者用 `curl -I` 连续请求同一个 URL。

## 常见坑

### Custom Domain 不能写路径

错误配置：

```toml
routes = [
  { pattern = "cdn.example.com/image/*", custom_domain = true }
]
```

Wrangler 会报：

```text
Wildcard operators (*) are not allowed in Custom Domains
Paths are not allowed in Custom Domains
```

正确配置：

```toml
routes = [
  { pattern = "cdn.example.com", custom_domain = true }
]
```

Worker 代码内部只放行 `/image/` 和 `/images/`。

### Write all resources 仍然不够

如果看到：

```text
missing User->Memberships->Read
Authentication error [code: 10000]
```

重新从 `My Profile -> API Tokens` 创建 token，并补上：

```text
User -> Memberships -> Read
```

### 页面仍然输出 www.notion.so

排查顺序：

1. 确认环境变量名是 `NEXT_PUBLIC_NOTION_HOST`。
2. 重启构建或开发服务。
3. 本地验证时临时设置 `ENABLE_CACHE=false`。
4. 重新打开页面，搜索页面 HTML 中是否还有 `www.notion.so/image`。

### 图片一直显示 MISS

先确认是不是浏览器内存缓存。DevTools 里如果显示：

```text
200 OK（来自内存缓存）
```

这不是 Cloudflare MISS。用 `curl -I` 连续请求同一条完整图片 URL 更准确。

### Notion 返回 User does not have access

`prod-files-secure` 图片必须经过 Notion 的签名跳转。Worker 里需要让 `fetch` 正常跟随跳转，并保留 Cloudflare 的 `cf.cacheEverything` 配置；只解码原始 S3 地址会返回 403。

## 上线建议

Worker 免费版适合测试和小站。图片多、PV 高的站点建议开 Workers Paid，因为每张图片请求都会算一次 Worker request。当前方案不做压缩、不落 R2，成本和维护量最低；只有当 Worker 请求量或回源压力明显变高时，再考虑把热门图片持久化到 R2。
