import { themeConsoleStyle } from '@/lib/themeConsoleStyle'
import CONFIG from './config'

export const Style = () => (
  <style jsx global>{`
    :root {
      --loonge-blue: #0b57f0;
      --loonge-blue-hover: #0847c7;
      --loonge-ink: #111318;
      --loonge-muted: #667085;
      --loonge-line: #e3e7ed;
      --loonge-soft: #f1f5fb;
      --loonge-dark: #0b0d12;
      --loonge-dark-soft: #141821;
      --loonge-dark-line: #292f3a;
      --loonge-display-font:
        'Iowan Old Style', 'Baskerville', 'Baskerville Old Face', Georgia,
        'Times New Roman', serif;
    }

    html {
      scroll-behavior: smooth;
      scroll-padding-top: 78px;
    }

    body {
      background: #fff;
    }

    .dark body {
      background: var(--loonge-dark);
    }

    #theme-loonge {
      letter-spacing: -0.01em;
    }

    #theme-loonge .container,
    #theme-loonge .loonge-container {
      width: min(100% - 40px, 1320px);
      margin-inline: auto;
    }

    #theme-loonge .bg-primary {
      background-color: var(--loonge-blue);
    }

    .loonge-header {
      position: sticky;
      top: 0;
      z-index: 50;
      width: 100%;
      background: rgba(255, 255, 255, 0.93);
      border-bottom: 1px solid var(--loonge-line);
      backdrop-filter: blur(16px);
    }

    .dark .loonge-header {
      background: rgba(11, 13, 18, 0.9);
      border-color: var(--loonge-dark-line);
    }

    .loonge-header-inner {
      height: 76px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .loonge-brand,
    .loonge-footer-brand {
      color: var(--loonge-ink);
      font-size: 1.55rem;
      font-weight: 750;
      letter-spacing: -0.04em;
    }

    .dark .loonge-brand,
    .dark .loonge-footer-brand {
      color: #fff;
    }

    .loonge-nav {
      display: flex;
      align-items: center;
      gap: clamp(22px, 3vw, 48px);
      font-size: 0.95rem;
      font-weight: 520;
    }

    .loonge-nav a {
      position: relative;
      padding-block: 27px;
      color: var(--loonge-ink);
      transition: color 180ms ease;
    }

    .dark .loonge-nav a {
      color: #e8ebf0;
    }

    .loonge-nav a:hover,
    .loonge-nav a.active {
      color: var(--loonge-blue);
    }

    .loonge-nav a.active::after {
      content: '';
      position: absolute;
      inset: auto 0 0;
      height: 2px;
      background: var(--loonge-blue);
    }

    .loonge-theme-button {
      width: 34px;
      height: 34px;
      display: grid;
      place-items: center;
      color: inherit;
    }

    .loonge-menu-button,
    .loonge-mobile-nav {
      display: none;
    }

    .loonge-hero {
      border-bottom: 1px solid var(--loonge-line);
    }

    .dark .loonge-hero {
      border-color: var(--loonge-dark-line);
    }

    .loonge-exploration-status {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      color: var(--loonge-blue);
      font-size: 0.78rem;
      white-space: nowrap;
    }

    .loonge-status-dot {
      width: 6px;
      height: 6px;
      flex: 0 0 auto;
      border-radius: 50%;
      background: currentColor;
    }

    .loonge-hero-grid {
      min-height: auto;
      display: grid;
      grid-template-columns: minmax(0, 1.05fr) minmax(360px, 0.95fr);
      column-gap: clamp(50px, 8vw, 128px);
      row-gap: 24px;
      align-items: center;
      padding-block: 24px 20px;
    }

    .loonge-hero-copy h1 {
      margin: 0;
      color: var(--loonge-ink);
      font-size: clamp(5rem, 9vw, 9rem);
      line-height: 0.92;
      font-family: var(--loonge-display-font);
      font-weight: 700;
      letter-spacing: -0.045em;
    }

    .dark .loonge-hero-copy h1 {
      color: #fff;
    }

    .loonge-hero-line {
      margin-top: 28px;
      color: var(--loonge-ink);
      font-size: clamp(1.55rem, 3vw, 2.7rem);
      line-height: 1.1;
      font-family: var(--loonge-display-font);
      font-weight: 600;
      letter-spacing: -0.03em;
    }

    .dark .loonge-hero-line {
      color: #f4f6fa;
    }

    .loonge-hero-copy > p {
      max-width: 660px;
      margin-top: 26px;
      color: var(--loonge-muted);
      font-size: 1.1rem;
      line-height: 1.85;
    }

    .dark .loonge-hero-copy > p,
    .dark .loonge-section-heading p,
    .dark .loonge-exploration-item p,
    .dark .loonge-project-row p,
    .dark .loonge-life-copy > p,
    .dark .loonge-featured-copy p {
      color: #9aa3b2;
    }

    .loonge-actions {
      display: flex;
      gap: 16px;
      margin-top: 34px;
    }

    .loonge-button {
      min-width: 150px;
      height: 54px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding-inline: 26px;
      border-radius: 7px;
      border: 1px solid transparent;
      font-size: 0.98rem;
      font-weight: 620;
      transition:
        transform 180ms ease,
        background 180ms ease,
        border-color 180ms ease;
    }

    .loonge-button:hover {
      transform: translateY(-2px);
    }

    .loonge-button-primary {
      color: #fff;
      background: var(--loonge-blue);
    }

    .loonge-button-primary:hover {
      background: var(--loonge-blue-hover);
    }

    .loonge-button-secondary {
      color: var(--loonge-ink);
      border-color: #cfd5de;
      background: transparent;
    }

    .dark .loonge-button-secondary {
      color: #fff;
      border-color: #3a414d;
    }

    .loonge-portrait-frame {
      position: relative;
      /* Keep the hero card proportional as the desktop viewport grows. */
      min-height: 0;
      aspect-ratio: 1.14 / 1;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      overflow: hidden;
      border-radius: 18px;
      background: linear-gradient(145deg, #eef3fa 0%, #dfe8f5 100%);
    }

    .dark .loonge-portrait-frame {
      background: linear-gradient(145deg, #171c26 0%, #222b3a 100%);
    }

    .loonge-portrait-shape {
      position: absolute;
      inset: -25% auto auto -18%;
      width: 58%;
      aspect-ratio: 1;
      transform: rotate(45deg);
      background: rgba(11, 87, 240, 0.09);
    }

    .loonge-portrait {
      position: absolute;
      inset: 0;
      z-index: 1;
      width: 100%;
      height: 100%;
      margin: 0;
      object-fit: cover;
      object-position: center 28%;
      /* Use the same rounded corners as the card while covering every edge. */
      border-radius: inherit;
      filter: grayscale(1) contrast(1.04);
    }

    .loonge-hero-modules {
      grid-column: 1 / -1;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      border-top: 1px solid var(--loonge-line);
    }

    .dark .loonge-hero-modules {
      border-color: var(--loonge-dark-line);
    }

    .loonge-hero-module {
      position: relative;
      min-height: 76px;
      padding: 16px 30px 10px;
      border-left: 1px solid var(--loonge-line);
      transition: background 180ms ease;
    }

    .loonge-hero-module:first-child {
      padding-left: 0;
      border-left: 0;
    }

    .dark .loonge-hero-module {
      border-color: var(--loonge-dark-line);
    }

    .loonge-hero-module:hover {
      background: rgba(11, 87, 240, 0.05);
    }

    .dark .loonge-hero-module:hover {
      background: rgba(92, 139, 255, 0.08);
    }

    .loonge-hero-module-meta {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: var(--loonge-blue);
      font-size: 0.76rem;
      font-weight: 700;
    }

    .loonge-hero-module-meta svg {
      opacity: 0.48;
      transition:
        opacity 180ms ease,
        transform 180ms ease;
    }

    .loonge-hero-module:hover .loonge-hero-module-meta svg {
      opacity: 1;
      transform: translateX(4px);
    }

    .loonge-hero-module h2 {
      margin-top: 7px;
      color: var(--loonge-ink);
      font-size: 0.98rem;
      font-weight: 700;
      line-height: 1.25;
      letter-spacing: -0.02em;
    }

    .dark .loonge-hero-module h2 {
      color: #fff;
    }

    .loonge-hero-module p {
      margin-top: 4px;
      color: var(--loonge-muted);
      font-size: 0.78rem;
      line-height: 1.5;
    }

    .loonge-section {
      padding-block: clamp(42px, 4.5vw, 68px);
      border-bottom: 1px solid var(--loonge-line);
    }

    .loonge-about-article .notion-asset-wrapper-image {
      display: none;
    }

    .dark .loonge-section {
      border-color: var(--loonge-dark-line);
    }

    .loonge-section-heading {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      gap: 32px;
      margin-bottom: 32px;
    }

    .loonge-section-heading h2 {
      margin: 0;
      color: var(--loonge-ink);
      font-size: clamp(2rem, 3.5vw, 3.3rem);
      line-height: 1.08;
      font-weight: 760;
      letter-spacing: -0.055em;
    }

    .loonge-section-heading-title {
      display: inline-block;
      color: inherit;
    }

    .loonge-section-heading-title:hover h2 {
      color: var(--loonge-blue);
    }

    .dark .loonge-section-heading h2,
    .dark .loonge-exploration-item h3,
    .dark .loonge-featured h3,
    .dark .loonge-project-row h3 {
      color: #fff;
    }

    .loonge-section-heading p {
      margin-top: 12px;
      color: var(--loonge-muted);
      line-height: 1.7;
    }

    .loonge-index,
    .loonge-track-number,
    .loonge-meta {
      color: var(--loonge-blue);
      font-weight: 700;
    }

    .loonge-index {
      margin-bottom: 12px;
      font-size: 1rem;
      letter-spacing: 0;
    }

    .loonge-text-link {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      color: var(--loonge-blue);
      font-size: 0.94rem;
      font-weight: 620;
    }

    .loonge-text-link svg,
    .loonge-project-row svg {
      transition: transform 180ms ease;
    }

    .loonge-text-link:hover svg,
    .loonge-project-row:hover svg {
      transform: translateX(4px);
    }

    .loonge-exploration-item h3,
    .loonge-project-row h3 {
      color: var(--loonge-ink);
      font-size: 1.18rem;
      font-weight: 700;
      line-height: 1.35;
    }

    .loonge-exploration-item p,
    .loonge-project-row p {
      margin-top: 14px;
      color: var(--loonge-muted);
      line-height: 1.75;
    }

    .loonge-exploration-track {
      position: relative;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 48px;
      padding-top: 28px;
      border-top: 1px solid var(--loonge-blue);
    }

    .loonge-exploration {
      padding-block: 48px 56px;
      background: #fafbfd;
    }

    .dark .loonge-exploration {
      background: #0e1117;
    }

    .loonge-exploration-item {
      position: relative;
      min-height: 220px;
      padding: 22px 24px 26px;
      background: #fff;
      border: 1px solid var(--loonge-line);
      border-top: 0;
      border-radius: 0 0 12px 12px;
      transition:
        border-color 180ms ease,
        transform 180ms ease;
    }

    .loonge-exploration-item:hover {
      border-color: #c6d1e0;
      transform: translateY(-2px);
    }

    .dark .loonge-exploration-item {
      background: var(--loonge-dark-soft);
      border-color: var(--loonge-dark-line);
    }

    .dark .loonge-exploration-item:hover {
      border-color: #465369;
    }

    .loonge-exploration-item::before {
      content: '';
      position: absolute;
      top: -35px;
      left: 0;
      width: 13px;
      height: 13px;
      border-radius: 50%;
      background: var(--loonge-blue);
      box-shadow: 0 0 0 5px #fff;
    }

    .dark .loonge-exploration-item::before {
      box-shadow: 0 0 0 5px var(--loonge-dark);
    }

    .loonge-track-number {
      margin-bottom: 28px;
      font-size: 0.85rem;
    }

    .loonge-exploration-item p {
      max-width: 360px;
      min-height: 82px;
    }

    .loonge-exploration-status {
      margin-top: 20px;
    }

    .loonge-featured-section {
      background: #fafbfd;
    }

    .dark .loonge-featured-section {
      background: #0e1117;
    }

    .loonge-featured {
      display: grid;
      grid-template-columns: minmax(0, 1.75fr) minmax(320px, 0.85fr);
      gap: 42px;
    }

    .loonge-featured-lead {
      display: grid;
      grid-template-columns: 1.2fr 0.95fr;
      min-height: 390px;
      background: #fff;
      border: 1px solid var(--loonge-line);
    }

    .dark .loonge-featured-lead {
      background: var(--loonge-dark-soft);
      border-color: var(--loonge-dark-line);
    }

    .loonge-featured-image {
      min-height: 340px;
      overflow: hidden;
      background: var(--loonge-soft);
    }

    .loonge-featured-art {
      width: 100%;
      height: 100%;
      min-height: 320px;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      padding: 28px;
      color: var(--loonge-blue);
      background:
        linear-gradient(
          135deg,
          transparent 0 48%,
          rgba(11, 87, 240, 0.12) 48% 52%,
          transparent 52%
        ),
        #eaf1fb;
      font-size: 4rem;
      font-weight: 800;
      letter-spacing: -0.06em;
    }

    .dark .loonge-featured-art {
      background:
        linear-gradient(
          135deg,
          transparent 0 48%,
          rgba(92, 139, 255, 0.18) 48% 52%,
          transparent 52%
        ),
        #182131;
    }

    .loonge-featured-copy {
      display: flex;
      flex-direction: column;
      padding: 36px;
    }

    .loonge-featured h3,
    .loonge-featured-empty h3 {
      margin-top: 14px;
      color: var(--loonge-ink);
      font-size: clamp(1.45rem, 2.1vw, 2rem);
      line-height: 1.22;
      font-weight: 730;
      letter-spacing: -0.035em;
    }

    .loonge-featured-copy p,
    .loonge-featured-empty p {
      margin-top: 18px;
      color: var(--loonge-muted);
      line-height: 1.8;
    }

    .loonge-post-foot {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      margin-top: auto;
      padding-top: 30px;
      color: var(--loonge-muted);
      font-size: 0.86rem;
    }

    .loonge-featured-list {
      border-top: 1px solid var(--loonge-line);
    }

    .dark .loonge-featured-list,
    .dark .loonge-featured-row {
      border-color: var(--loonge-dark-line);
    }

    .loonge-featured-row {
      display: flex;
      gap: 22px;
      padding-block: 26px;
      border-bottom: 1px solid var(--loonge-line);
    }

    .loonge-featured-thumb {
      width: 116px;
      height: 88px;
      flex: 0 0 auto;
      display: grid;
      place-items: center;
      overflow: hidden;
      color: var(--loonge-blue);
      background: var(--loonge-soft);
      font-size: 2rem;
      font-weight: 760;
    }

    .dark .loonge-featured-thumb {
      background: #1a2230;
    }

    .loonge-featured-row h3 {
      margin-top: 8px;
      font-size: 1.08rem;
    }

    .loonge-featured-row-description {
      display: -webkit-box;
      overflow: hidden;
      margin-top: 8px;
      color: var(--loonge-muted);
      line-height: 1.55;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }

    .loonge-featured-empty {
      display: grid;
      grid-template-columns: 1.25fr 1fr;
      gap: 48px;
      align-items: center;
    }

    .loonge-projects {
      padding-block: 52px 60px;
    }

    .loonge-project-list {
      border-top: 1px solid var(--loonge-line);
    }

    .dark .loonge-project-list,
    .dark .loonge-project-row {
      border-color: var(--loonge-dark-line);
    }

    .loonge-project-row {
      display: grid;
      grid-template-columns: 62px 0.7fr 1.35fr 24px;
      gap: 30px;
      align-items: center;
      min-height: 92px;
      border-bottom: 1px solid var(--loonge-line);
    }

    .loonge-project-mark {
      color: var(--loonge-blue);
      font-size: 0.8rem;
      font-weight: 700;
    }

    .loonge-project-row p {
      margin: 0;
    }

    .loonge-life-grid {
      display: grid;
      grid-template-columns: minmax(240px, 0.6fr) minmax(0, 1.75fr);
      gap: clamp(44px, 7vw, 100px);
      align-items: center;
    }

    .loonge-life-copy .loonge-section-heading {
      margin-bottom: 24px;
    }

    .loonge-life-copy > p {
      margin-bottom: 0;
      color: var(--loonge-muted);
      font-size: 1.05rem;
      line-height: 2;
    }

    .loonge-life-image {
      display: block;
      height: clamp(320px, 36vw, 500px);
      overflow: hidden;
      border-radius: 12px;
      background: var(--loonge-soft);
    }

    .loonge-archive-page,
    .loonge-directory-page {
      padding-block: clamp(58px, 7vw, 96px) clamp(72px, 9vw, 128px);
    }

    .loonge-archive-intro,
    .loonge-directory-intro {
      max-width: 720px;
      padding-bottom: 42px;
    }

    .loonge-archive-intro h1,
    .loonge-directory-intro h1 {
      margin-top: 10px;
      color: var(--loonge-ink);
      font-family: var(--loonge-display-font);
      font-size: clamp(3.8rem, 8vw, 7rem);
      line-height: 0.98;
      letter-spacing: -0.06em;
    }

    .dark .loonge-archive-intro h1,
    .dark .loonge-directory-intro h1 {
      color: #fff;
    }

    .loonge-archive-intro p,
    .loonge-directory-intro p {
      max-width: 640px;
      margin-top: 22px;
      color: var(--loonge-muted);
      font-size: 1.08rem;
      line-height: 1.85;
    }

    .loonge-directory-intro .loonge-text-link {
      margin-top: 26px;
    }

    .loonge-archive-toolbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
      padding-block: 18px;
      border-top: 1px solid var(--loonge-line);
      border-bottom: 1px solid var(--loonge-line);
    }

    .loonge-archive-filters {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .loonge-archive-filters button {
      padding: 8px 14px;
      color: var(--loonge-muted);
      border: 1px solid transparent;
      border-radius: 999px;
      background: transparent;
      font-size: 0.86rem;
      cursor: pointer;
      transition:
        color 180ms ease,
        background 180ms ease,
        border-color 180ms ease;
    }

    .loonge-archive-filters button:hover,
    .loonge-archive-filters button.active {
      color: var(--loonge-blue);
      border-color: #c9d8f8;
      background: #eef4ff;
    }

    .dark .loonge-archive-filters button:hover,
    .dark .loonge-archive-filters button.active {
      border-color: #314a7c;
      background: #18233a;
    }

    .loonge-archive-count {
      flex: 0 0 auto;
      color: var(--loonge-muted);
      font-size: 0.86rem;
    }

    .loonge-archive-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 28px;
      padding-top: 32px;
    }

    .loonge-archive-card {
      overflow: hidden;
      border: 1px solid var(--loonge-line);
      background: #fff;
      transition:
        border-color 180ms ease,
        transform 180ms ease,
        box-shadow 180ms ease;
    }

    .loonge-archive-card:hover {
      border-color: #c6d1e0;
      box-shadow: 0 12px 30px rgba(17, 19, 24, 0.07);
      transform: translateY(-3px);
    }

    .dark .loonge-archive-card {
      border-color: var(--loonge-dark-line);
      background: var(--loonge-dark-soft);
    }

    .loonge-archive-card-cover {
      display: grid;
      place-items: center;
      height: 168px;
      overflow: hidden;
      color: var(--loonge-blue);
      background: var(--loonge-soft);
      font-family: var(--loonge-display-font);
      font-size: 3.2rem;
      font-weight: 700;
    }

    .dark .loonge-archive-card-cover {
      background: #1b2535;
    }

    .loonge-archive-card-body {
      padding: 20px 22px 22px;
    }

    .loonge-archive-card-meta {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      color: var(--loonge-blue);
      font-size: 0.78rem;
      font-weight: 650;
    }

    .loonge-archive-card-meta time {
      color: var(--loonge-muted);
      font-weight: 450;
    }

    .loonge-archive-card h2 {
      margin-top: 12px;
      color: var(--loonge-ink);
      font-size: 1.2rem;
      line-height: 1.35;
      font-weight: 700;
    }

    .dark .loonge-archive-card h2 {
      color: #fff;
    }

    .loonge-archive-card h2 a:hover {
      color: var(--loonge-blue);
    }

    .loonge-archive-card p {
      display: -webkit-box;
      overflow: hidden;
      margin-top: 10px;
      color: var(--loonge-muted);
      line-height: 1.7;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
    }

    .loonge-archive-card-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 7px;
      margin-top: 16px;
    }

    .loonge-archive-card-tags span {
      padding: 4px 8px;
      color: var(--loonge-muted);
      border: 1px solid var(--loonge-line);
      border-radius: 999px;
      font-size: 0.72rem;
      line-height: 1.2;
    }

    .dark .loonge-archive-card-tags span {
      border-color: var(--loonge-dark-line);
    }

    .loonge-archive-empty,
    .loonge-directory-note {
      margin-top: 32px;
      padding: 26px;
      color: var(--loonge-muted);
      border: 1px dashed var(--loonge-line);
      background: var(--loonge-soft);
    }

    .loonge-directory-list {
      border-top: 1px solid var(--loonge-line);
    }

    .loonge-directory-item {
      display: grid;
      grid-template-columns: 72px minmax(0, 1fr) 28px;
      gap: 30px;
      align-items: start;
      padding: 28px 0;
      border-bottom: 1px solid var(--loonge-line);
    }

    .loonge-directory-item:hover .loonge-directory-arrow {
      color: var(--loonge-blue);
      transform: translateX(4px);
    }

    .loonge-directory-number {
      padding-top: 4px;
      color: var(--loonge-blue);
      font-size: 0.9rem;
      font-weight: 700;
    }

    .loonge-directory-item-heading {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      gap: 20px;
    }

    .loonge-directory-item h2 {
      color: var(--loonge-ink);
      font-size: clamp(1.25rem, 2vw, 1.7rem);
      line-height: 1.3;
      font-weight: 730;
    }

    .dark .loonge-directory-item h2 {
      color: #fff;
    }

    .loonge-directory-item-heading > span {
      flex: 0 0 auto;
      color: var(--loonge-muted);
      font-size: 0.82rem;
    }

    .loonge-directory-main > p {
      max-width: 760px;
      margin-top: 10px;
      color: var(--loonge-muted);
      line-height: 1.75;
    }

    .loonge-directory-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 16px;
    }

    .loonge-directory-tags span {
      padding: 4px 9px;
      color: var(--loonge-muted);
      border: 1px solid var(--loonge-line);
      border-radius: 999px;
      font-size: 0.75rem;
    }

    .loonge-directory-arrow {
      width: 24px;
      height: 24px;
      display: grid;
      place-items: center;
      color: var(--loonge-muted);
      transition:
        color 180ms ease,
        transform 180ms ease;
    }

    .loonge-directory-arrow svg {
      width: 20px;
      height: 20px;
    }

    .loonge-exploration-pill {
      display: inline-flex;
      align-items: center;
      gap: 7px;
    }

    .loonge-exploration-pill i {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--loonge-blue);
    }

    .loonge-about-page,
    .loonge-life-page {
      padding-block: clamp(72px, 9vw, 132px);
    }

    .loonge-about-page {
      min-height: calc(100vh - 76px);
      display: flex;
      align-items: center;
      padding-block: 10px 42px;
    }

    .loonge-about-layout {
      display: grid;
      grid-template-columns: minmax(280px, 0.72fr) minmax(0, 1.28fr);
      grid-template-areas:
        'intro focus'
        'belief closing';
      column-gap: clamp(44px, 7vw, 108px);
      row-gap: 26px;
      align-items: start;
    }

    .loonge-about-intro,
    .loonge-life-page-intro {
      max-width: 760px;
      padding-bottom: clamp(60px, 8vw, 108px);
      border-bottom: 1px solid var(--loonge-line);
    }

    .loonge-about-intro {
      grid-area: intro;
      max-width: none;
      padding: 0;
      border: 0;
    }

    .loonge-about-intro h1,
    .loonge-life-page-intro h1 {
      margin: 12px 0 28px;
      color: var(--loonge-ink);
      font-size: clamp(3.1rem, 7vw, 6.7rem);
      line-height: 0.98;
      font-weight: 760;
      letter-spacing: -0.075em;
    }

    .loonge-about-intro h1 {
      margin: 8px 0 18px;
      font-size: clamp(3.6rem, 5.5vw, 5.6rem);
    }

    .dark .loonge-about-intro h1,
    .dark .loonge-life-page-intro h1 {
      color: #fff;
    }

    .loonge-about-intro p,
    .loonge-life-page-intro p,
    .loonge-about-closing p {
      max-width: 680px;
      margin-top: 18px;
      color: var(--loonge-muted);
      font-size: 1.08rem;
      line-height: 1.95;
    }

    .loonge-about-intro p {
      margin-top: 12px;
      font-size: 0.95rem;
      line-height: 1.65;
    }

    .loonge-about-intro .loonge-about-lead {
      margin-top: 0;
      color: var(--loonge-ink);
      font-size: clamp(1.15rem, 1.7vw, 1.55rem);
      line-height: 1.4;
      font-weight: 620;
    }

    .dark .loonge-about-intro .loonge-about-lead {
      color: #fff;
    }

    .loonge-about-section {
      padding-block: clamp(58px, 7vw, 96px);
      border-bottom: 1px solid var(--loonge-line);
    }

    .loonge-about-focus {
      grid-area: focus;
      padding: 0;
      border: 0;
    }

    .dark .loonge-about-section,
    .dark .loonge-about-intro,
    .dark .loonge-life-page-intro {
      border-color: var(--loonge-dark-line);
    }

    .loonge-about-section > h2,
    .loonge-about-belief h2 {
      margin: 0 0 38px;
      color: var(--loonge-ink);
      font-size: clamp(2rem, 4vw, 3.4rem);
      line-height: 1.08;
      font-weight: 760;
      letter-spacing: -0.06em;
    }

    .loonge-about-focus > h2,
    .loonge-about-belief h2 {
      margin-bottom: 20px;
      font-size: clamp(1.65rem, 2.4vw, 2.45rem);
    }

    .dark .loonge-about-section > h2,
    .dark .loonge-about-belief h2,
    .dark .loonge-about-card h3,
    .dark .loonge-life-entry-card h2 {
      color: #fff;
    }

    .loonge-about-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 0 64px;
      border-top: 1px solid var(--loonge-line);
    }

    .loonge-about-focus .loonge-about-grid {
      gap: 0 28px;
    }

    .dark .loonge-about-grid {
      border-color: var(--loonge-dark-line);
    }

    .loonge-about-card {
      min-height: 228px;
      padding: 28px 0 34px;
      border-bottom: 1px solid var(--loonge-line);
    }

    .loonge-about-focus .loonge-about-card {
      min-height: 0;
      padding: 16px 0 18px;
    }

    .dark .loonge-about-card {
      border-color: var(--loonge-dark-line);
    }

    .loonge-about-card-number,
    .loonge-life-entry-meta {
      color: var(--loonge-blue);
      font-size: 0.78rem;
      font-weight: 720;
      letter-spacing: 0.02em;
    }

    .loonge-about-card h3 {
      margin-top: 30px;
      color: var(--loonge-ink);
      font-size: 1.25rem;
      font-weight: 700;
    }

    .loonge-about-focus .loonge-about-card h3 {
      margin-top: 16px;
      font-size: 1rem;
    }

    .loonge-about-card p,
    .loonge-about-belief-copy p {
      margin-top: 14px;
      color: var(--loonge-muted);
      line-height: 1.85;
    }

    .loonge-about-focus .loonge-about-card p {
      margin-top: 8px;
      font-size: 0.86rem;
      line-height: 1.55;
    }

    .loonge-about-belief {
      grid-area: belief;
      display: block;
      padding-block: 20px 0;
      border-top: 1px solid var(--loonge-line);
      border-bottom: 0;
    }

    .loonge-about-belief h2 {
      margin-top: 12px;
      margin-bottom: 0;
    }

    .loonge-about-belief-copy {
      padding-top: 12px;
    }

    .loonge-about-belief-copy p {
      margin-top: 0;
      margin-bottom: 22px;
      font-size: clamp(1.25rem, 2.3vw, 1.8rem);
      line-height: 1.65;
      color: var(--loonge-ink);
    }

    .loonge-about-belief-copy {
      padding-top: 0;
      margin-top: 12px;
    }

    .loonge-about-belief-copy p {
      margin-bottom: 10px;
      font-size: 1rem;
      line-height: 1.55;
    }

    .dark .loonge-about-belief-copy p {
      color: #fff;
    }

    .loonge-about-closing {
      grid-area: closing;
      padding-top: clamp(58px, 7vw, 96px);
    }

    .loonge-about-layout > .loonge-about-closing {
      padding-top: 20px;
      border-top: 1px solid var(--loonge-line);
    }

    .loonge-about-closing p:first-child {
      margin-top: 0;
      color: var(--loonge-ink);
      font-size: clamp(1.25rem, 2.4vw, 1.85rem);
      line-height: 1.7;
    }

    .loonge-about-layout > .loonge-about-closing p:first-child {
      font-size: 1rem;
      line-height: 1.55;
    }

    .loonge-about-layout > .loonge-about-closing p {
      margin-top: 10px;
    }

    .dark .loonge-about-closing p:first-child {
      color: #fff;
    }

    .loonge-about-closing .loonge-text-link {
      margin-top: 20px;
    }

    .loonge-life-page-intro {
      max-width: 900px;
    }

    .loonge-life-page-intro p {
      margin-top: 0;
    }

    .loonge-life-timeline {
      position: relative;
      max-width: 980px;
      padding-block: 72px 28px;
    }

    .loonge-life-timeline::before {
      content: '';
      position: absolute;
      top: 72px;
      bottom: 28px;
      left: 156px;
      width: 1px;
      background: var(--loonge-line);
    }

    .dark .loonge-life-timeline::before {
      background: var(--loonge-dark-line);
    }

    .loonge-life-entry {
      position: relative;
      display: grid;
      grid-template-columns: 130px minmax(0, 1fr);
      gap: 54px;
      padding-bottom: 56px;
    }

    .loonge-life-entry-date {
      position: relative;
      padding-top: 6px;
      color: var(--loonge-muted);
      font-size: 0.84rem;
      text-align: right;
      white-space: nowrap;
    }

    .loonge-life-entry-date i {
      position: absolute;
      top: 7px;
      right: -32px;
      width: 9px;
      height: 9px;
      border: 3px solid #fff;
      border-radius: 50%;
      background: var(--loonge-blue);
      box-shadow: 0 0 0 1px var(--loonge-blue);
    }

    .dark .loonge-life-entry-date i {
      border-color: var(--loonge-dark);
    }

    .loonge-life-entry-card {
      padding: 0 0 42px;
      border-bottom: 1px solid var(--loonge-line);
    }

    .dark .loonge-life-entry-card {
      border-color: var(--loonge-dark-line);
    }

    .loonge-life-entry-card h2 {
      margin-top: 15px;
      color: var(--loonge-ink);
      font-size: clamp(1.45rem, 2.5vw, 2.1rem);
      line-height: 1.25;
      font-weight: 720;
      letter-spacing: -0.04em;
    }

    .loonge-life-entry-card h2 a:hover {
      color: var(--loonge-blue);
    }

    .loonge-life-entry-card > p {
      max-width: 680px;
      margin-top: 12px;
      color: var(--loonge-muted);
      line-height: 1.85;
      white-space: pre-line;
    }

    .loonge-life-entry-card > .loonge-text-link {
      margin-top: 24px;
    }

    .loonge-life-entry-media {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 10px;
      margin-top: 18px;
    }

    .loonge-life-entry-media:has(> :only-child) {
      grid-template-columns: 1fr;
    }

    .loonge-life-entry-image,
    .loonge-life-entry-video {
      display: block;
      width: 100%;
      max-height: 560px;
      overflow: hidden;
      border-radius: 12px;
      background: var(--loonge-soft);
      object-fit: cover;
    }

    .loonge-life-entry-media > .loonge-life-entry-image,
    .loonge-life-entry-media > .loonge-life-entry-video {
      aspect-ratio: 4 / 3;
    }

    .loonge-life-entry-media:has(> :only-child) > .loonge-life-entry-image,
    .loonge-life-entry-media:has(> :only-child) > .loonge-life-entry-video {
      aspect-ratio: auto;
      max-height: 560px;
    }

    .loonge-life-entry-card > .loonge-life-entry-image,
    .loonge-life-entry-card > .loonge-life-entry-video {
      margin-top: 18px;
    }

    .loonge-life-entry-image {
      height: auto;
    }

    .loonge-life-entry-video {
      aspect-ratio: 16 / 9;
    }

    .loonge-life-empty {
      margin-left: 184px;
      padding: 42px;
      border: 1px solid var(--loonge-line);
      border-radius: 12px;
      background: var(--loonge-soft);
    }

    .dark .loonge-life-empty {
      border-color: var(--loonge-dark-line);
      background: var(--loonge-dark-soft);
    }

    .loonge-life-empty strong {
      color: var(--loonge-ink);
      font-size: 1.2rem;
    }

    .dark .loonge-life-empty strong {
      color: #fff;
    }

    .loonge-life-empty p {
      margin-top: 10px;
      color: var(--loonge-muted);
    }

    .loonge-footer {
      background: #f6f8fb;
      border-top: 1px solid var(--loonge-line);
    }

    .dark .loonge-footer {
      background: #0e1117;
      border-color: var(--loonge-dark-line);
    }

    .loonge-footer-grid {
      min-height: 190px;
      display: grid;
      grid-template-columns: 1fr 1.4fr auto;
      gap: 42px;
      align-items: center;
    }

    .loonge-footer-grid p {
      margin-top: 10px;
      color: var(--loonge-muted);
    }

    .loonge-footer nav {
      display: flex;
      justify-content: center;
      gap: clamp(24px, 4vw, 58px);
    }

    .loonge-footer nav a:hover {
      color: var(--loonge-blue);
    }

    .loonge-copyright {
      display: flex;
      align-items: center;
      gap: 10px;
      color: var(--loonge-muted);
      font-size: 0.82rem;
    }

    @media (max-width: 1024px) {
      .loonge-hero-grid {
        min-height: auto;
        grid-template-columns: 1fr 0.8fr;
        column-gap: 44px;
        row-gap: 24px;
      }

      .loonge-portrait-frame {
        min-height: 0;
        aspect-ratio: 1.14 / 1;
      }

      .loonge-featured {
        grid-template-columns: 1fr;
      }

      .loonge-featured-list {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;
        border-top: 0;
      }

      .loonge-project-row {
        grid-template-columns: 50px 0.75fr 1.1fr 24px;
      }

      .loonge-footer-grid {
        grid-template-columns: 1fr 1fr;
      }

      .loonge-copyright {
        grid-column: 1 / -1;
      }
    }

    @media (max-width: 767px) {
      #theme-loonge .container,
      #theme-loonge .loonge-container {
        width: min(100% - 32px, 1320px);
      }

      .loonge-header-inner {
        height: 66px;
      }

      .loonge-nav {
        display: none;
      }

      .loonge-menu-button {
        width: 42px;
        height: 42px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 7px;
      }

      .loonge-menu-button span {
        width: 22px;
        height: 1.5px;
        background: currentColor;
      }

      .loonge-mobile-nav {
        display: grid;
        grid-template-rows: repeat(6, 0fr);
        max-height: 0;
        overflow: hidden;
        opacity: 0;
        padding-inline: 16px;
        background: #fff;
        pointer-events: none;
        transition:
          max-height 220ms ease,
          opacity 220ms ease,
          padding 220ms ease;
        visibility: hidden;
      }

      .dark .loonge-mobile-nav {
        background: var(--loonge-dark);
      }

      .loonge-mobile-nav > * {
        min-height: 0;
        overflow: hidden;
      }

      .loonge-mobile-nav.open {
        grid-template-rows: repeat(6, 1fr);
        max-height: 400px;
        opacity: 1;
        padding-block: 8px 18px;
        border-bottom: 1px solid var(--loonge-line);
        pointer-events: auto;
        visibility: visible;
      }

      .dark .loonge-mobile-nav.open {
        border-color: var(--loonge-dark-line);
      }

      .loonge-mobile-nav a {
        padding: 11px 0;
        font-weight: 580;
      }

      .loonge-hero-grid {
        grid-template-columns: 1fr;
        padding-block: 40px 0;
      }

      .loonge-hero-copy h1 {
        font-size: clamp(4.6rem, 24vw, 7rem);
      }

      .loonge-hero-line {
        font-size: clamp(1.45rem, 7vw, 2.1rem);
      }

      .loonge-hero-modules {
        grid-template-columns: 1fr;
      }

      .loonge-hero-module,
      .loonge-hero-module:first-child {
        min-height: 0;
        padding: 15px 28px 15px 0;
        border-top: 1px solid var(--loonge-line);
        border-left: 0;
      }

      .dark .loonge-hero-module,
      .dark .loonge-hero-module:first-child {
        border-color: var(--loonge-dark-line);
      }

      .loonge-hero-module:first-child {
        border-top: 0;
      }

      .loonge-hero-module-meta {
        font-size: 0.72rem;
      }

      .loonge-hero-module h2 {
        font-size: 0.96rem;
      }

      .loonge-hero-module p {
        font-size: 0.76rem;
      }

      .loonge-portrait-frame {
        min-height: 390px;
        aspect-ratio: auto;
        border-radius: 12px 12px 0 0;
      }

      .loonge-portrait {
        width: 100%;
        height: 100%;
        margin: 0;
        transform: none;
      }

      .loonge-actions {
        flex-wrap: wrap;
      }

      .loonge-button {
        min-width: 138px;
        flex: 1;
      }

      .loonge-section {
        padding-block: 42px;
      }

      .loonge-exploration {
        padding-block: 40px 46px;
      }

      .loonge-section-heading {
        display: block;
        margin-bottom: 28px;
      }

      .loonge-section-heading > .loonge-text-link {
        margin-top: 22px;
      }

      .loonge-exploration-track {
        grid-template-columns: 1fr;
        gap: 0;
        padding: 0;
        border-top-color: var(--loonge-line);
      }

      .loonge-exploration-item {
        min-height: 0;
        padding: 30px 0;
        background: transparent;
        border-inline: 0;
        border-radius: 0;
        border-bottom: 1px solid var(--loonge-line);
        transform: none;
      }

      .dark .loonge-exploration-item {
        border-color: var(--loonge-dark-line);
      }

      .loonge-exploration-item:hover {
        border-color: var(--loonge-line);
        transform: none;
      }

      .dark .loonge-exploration-item:hover {
        border-color: var(--loonge-dark-line);
      }

      .loonge-exploration-item::before {
        display: none;
      }

      .loonge-exploration-item p {
        min-height: 0;
        margin-bottom: 20px;
      }

      .loonge-track-number {
        margin-bottom: 16px;
      }

      .loonge-featured-lead,
      .loonge-featured-empty,
      .loonge-life-grid {
        grid-template-columns: 1fr;
      }

      .loonge-about-page,
      .loonge-life-page {
        padding-block: 58px 72px;
      }

      .loonge-about-page {
        display: block;
      }

      .loonge-about-layout {
        grid-template-columns: 1fr;
        grid-template-areas:
          'intro'
          'focus'
          'belief'
          'closing';
        row-gap: 0;
      }

      .loonge-about-intro,
      .loonge-life-page-intro {
        padding-bottom: 58px;
      }

      .loonge-about-intro h1,
      .loonge-life-page-intro h1 {
        font-size: clamp(3.3rem, 17vw, 5.2rem);
      }

      .loonge-about-intro p,
      .loonge-life-page-intro p,
      .loonge-about-closing p {
        font-size: 1rem;
        line-height: 1.85;
      }

      .loonge-about-grid {
        grid-template-columns: 1fr;
        gap: 0;
      }

      .loonge-about-focus {
        padding-block: 58px;
        border-bottom: 1px solid var(--loonge-line);
      }

      .loonge-about-card {
        min-height: 0;
      }

      .loonge-about-belief {
        grid-template-columns: 1fr;
        gap: 20px;
        padding-block: 58px;
        border-top: 0;
        border-bottom: 1px solid var(--loonge-line);
      }

      .loonge-about-belief h2 {
        margin-top: 10px;
      }

      .loonge-about-belief-copy {
        padding-top: 0;
      }

      .loonge-about-layout > .loonge-about-closing {
        padding-top: 58px;
        border-top: 0;
      }

      .loonge-life-timeline {
        padding-top: 50px;
      }

      .loonge-life-timeline::before {
        top: 50px;
        left: 8px;
        bottom: 28px;
      }

      .loonge-life-entry {
        display: block;
        padding-left: 32px;
        padding-bottom: 42px;
      }

      .loonge-life-entry-date {
        padding-top: 0;
        text-align: left;
      }

      .loonge-life-entry-date i {
        top: 2px;
        left: -28px;
        right: auto;
      }

      .loonge-life-entry-card {
        padding-top: 18px;
        padding-bottom: 30px;
      }

      .loonge-life-empty {
        margin-left: 32px;
        padding: 28px;
      }

      .loonge-featured-image,
      .loonge-featured-art {
        min-height: 250px;
      }

      .loonge-featured-copy {
        min-height: 320px;
        padding: 28px;
      }

      .loonge-featured-list {
        grid-template-columns: 1fr;
        gap: 0;
      }

      .loonge-project-row {
        grid-template-columns: 42px 1fr 24px;
        gap: 16px;
        padding-block: 24px;
      }

      .loonge-project-row p {
        grid-column: 2 / -1;
        grid-row: 2;
      }

      .loonge-project-row svg {
        grid-column: 3;
        grid-row: 1;
      }

      .loonge-life-image {
        height: 330px;
        order: -1;
      }

      .loonge-archive-page,
      .loonge-directory-page {
        padding-block: 52px 72px;
      }

      .loonge-archive-intro,
      .loonge-directory-intro {
        padding-bottom: 32px;
      }

      .loonge-archive-intro h1,
      .loonge-directory-intro h1 {
        font-size: clamp(3.5rem, 18vw, 5.4rem);
      }

      .loonge-archive-intro p,
      .loonge-directory-intro p {
        font-size: 1rem;
      }

      .loonge-archive-toolbar {
        display: block;
      }

      .loonge-archive-count {
        display: block;
        margin-top: 12px;
      }

      .loonge-archive-grid {
        grid-template-columns: 1fr;
        gap: 20px;
        padding-top: 24px;
      }

      .loonge-archive-card-cover {
        height: 190px;
      }

      .loonge-directory-item {
        grid-template-columns: 42px minmax(0, 1fr) 24px;
        gap: 14px;
        padding-block: 24px;
      }

      .loonge-directory-item-heading {
        display: block;
      }

      .loonge-directory-item-heading > span {
        display: inline-flex;
        margin-top: 9px;
      }

      .loonge-footer-grid {
        min-height: 270px;
        grid-template-columns: 1fr;
        gap: 28px;
        padding-block: 44px;
      }

      .loonge-footer nav {
        justify-content: flex-start;
        flex-wrap: wrap;
      }

      .loonge-copyright {
        grid-column: auto;
        flex-wrap: wrap;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      html {
        scroll-behavior: auto;
      }

      #theme-loonge *,
      #theme-loonge *::before,
      #theme-loonge *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        scroll-behavior: auto !important;
        transition-duration: 0.01ms !important;
      }
    }

    ${themeConsoleStyle('loonge', CONFIG)}
  `}</style>
)
