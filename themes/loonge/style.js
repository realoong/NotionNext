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

    .loonge-hero-grid {
      min-height: 600px;
      display: grid;
      grid-template-columns: minmax(0, 1.05fr) minmax(360px, 0.95fr);
      gap: clamp(50px, 8vw, 128px);
      align-items: center;
      padding-block: 64px;
    }

    .loonge-hero-copy h1 {
      margin: 0;
      color: var(--loonge-ink);
      font-size: clamp(5rem, 9vw, 9rem);
      line-height: 0.92;
      font-weight: 820;
      letter-spacing: -0.085em;
    }

    .dark .loonge-hero-copy h1 {
      color: #fff;
    }

    .loonge-hero-line {
      margin-top: 28px;
      color: var(--loonge-ink);
      font-size: clamp(1.55rem, 3vw, 2.7rem);
      line-height: 1.1;
      font-weight: 660;
      letter-spacing: -0.045em;
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
    .dark .loonge-direction p,
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
      min-height: 490px;
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
      position: relative;
      z-index: 1;
      width: calc(100% - 56px);
      height: calc(100% - 56px);
      max-height: none;
      margin: 28px 28px 0;
      object-fit: cover;
      object-position: center 28%;
      /* Keep the photo rectangular so it sits cleanly inside the pale card.
       * Only the four corners are softened; the image itself is not oval-cropped. */
      border-radius: 24px;
      filter: grayscale(1) contrast(1.04);
      transform: scale(1.14);
      transform-origin: center center;
    }

    .loonge-section {
      padding-block: clamp(76px, 9vw, 132px);
      border-bottom: 1px solid var(--loonge-line);
    }

    .dark .loonge-section {
      border-color: var(--loonge-dark-line);
    }

    .loonge-section-heading {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      gap: 32px;
      margin-bottom: 48px;
    }

    .loonge-section-heading h2 {
      margin: 0;
      color: var(--loonge-ink);
      font-size: clamp(2rem, 3.5vw, 3.3rem);
      line-height: 1.08;
      font-weight: 760;
      letter-spacing: -0.055em;
    }

    .dark .loonge-section-heading h2,
    .dark .loonge-direction h3,
    .dark .loonge-exploration-item h3,
    .dark .loonge-featured h3,
    .dark .loonge-project-row h3,
    .dark .loonge-latest-row h3 {
      color: #fff;
    }

    .loonge-section-heading p {
      margin-top: 12px;
      color: var(--loonge-muted);
      line-height: 1.7;
    }

    .loonge-index,
    .loonge-number,
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
    .loonge-project-row svg,
    .loonge-latest-row svg {
      transition: transform 180ms ease;
    }

    .loonge-text-link:hover svg,
    .loonge-project-row:hover svg,
    .loonge-latest-row:hover svg {
      transform: translateX(4px);
    }

    .loonge-directions {
      padding-block: 54px 70px;
    }

    .loonge-directions-grid {
      display: grid;
      grid-template-columns: 0.75fr repeat(3, 1fr);
      gap: 0;
      align-items: start;
    }

    .loonge-directions-grid > .loonge-section-heading {
      margin: 0;
      padding-right: 36px;
    }

    .loonge-direction {
      min-height: 190px;
      padding: 0 36px;
      border-left: 1px solid var(--loonge-line);
    }

    .dark .loonge-direction {
      border-color: var(--loonge-dark-line);
    }

    .loonge-number {
      margin-bottom: 24px;
      font-size: 2.5rem;
      line-height: 1;
    }

    .loonge-direction h3,
    .loonge-exploration-item h3,
    .loonge-project-row h3 {
      color: var(--loonge-ink);
      font-size: 1.18rem;
      font-weight: 700;
      line-height: 1.35;
    }

    .loonge-direction p,
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

    .loonge-exploration-item {
      position: relative;
      min-height: 220px;
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

    .loonge-featured-empty {
      display: grid;
      grid-template-columns: 1.25fr 1fr;
      gap: 48px;
      align-items: center;
    }

    .loonge-projects {
      padding-block: 84px;
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
      margin-bottom: 30px;
    }

    .loonge-life-copy > p {
      margin-bottom: 44px;
      color: var(--loonge-muted);
      font-size: 1.05rem;
      line-height: 2;
    }

    .loonge-life-image {
      height: clamp(320px, 36vw, 500px);
      overflow: hidden;
      border-radius: 12px;
      background: var(--loonge-soft);
    }

    .loonge-latest-grid {
      display: grid;
      grid-template-columns: minmax(250px, 0.58fr) minmax(0, 1.75fr);
      gap: clamp(44px, 7vw, 100px);
    }

    .loonge-latest-grid > .loonge-section-heading {
      display: block;
      margin: 0;
    }

    .loonge-latest-grid > .loonge-section-heading .loonge-text-link {
      margin-top: 34px;
    }

    .loonge-latest-list {
      border-top: 1px solid var(--loonge-line);
    }

    .dark .loonge-latest-list,
    .dark .loonge-latest-row {
      border-color: var(--loonge-dark-line);
    }

    .loonge-latest-row {
      display: grid;
      grid-template-columns: 130px 90px 1fr 24px;
      gap: 28px;
      align-items: center;
      min-height: 86px;
      border-bottom: 1px solid var(--loonge-line);
    }

    .loonge-latest-row > span {
      color: var(--loonge-muted);
      font-size: 0.88rem;
    }

    .loonge-latest-row > span:nth-child(2) {
      color: var(--loonge-blue);
    }

    .loonge-latest-row h3 {
      color: var(--loonge-ink);
      font-size: 1rem;
      font-weight: 580;
    }

    .loonge-latest-empty {
      min-height: 180px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
      padding: 30px 0;
      color: var(--loonge-muted);
      border-bottom: 1px solid var(--loonge-line);
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
        gap: 44px;
      }

      .loonge-portrait-frame {
        min-height: 420px;
      }

      .loonge-directions-grid {
        grid-template-columns: 1fr 1fr;
        row-gap: 44px;
      }

      .loonge-directions-grid > .loonge-section-heading {
        grid-column: 1 / -1;
      }

      .loonge-direction:nth-child(2) {
        border-left: 0;
        padding-left: 0;
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
        padding-block: 54px 0;
      }

      .loonge-hero-copy h1 {
        font-size: clamp(4.6rem, 24vw, 7rem);
      }

      .loonge-hero-line {
        font-size: clamp(1.45rem, 7vw, 2.1rem);
      }

      .loonge-portrait-frame {
        min-height: 390px;
        border-radius: 12px 12px 0 0;
      }

      .loonge-portrait {
        width: 100%;
        height: 100%;
        margin: 0;
        transform: scale(1.08);
      }

      .loonge-actions {
        flex-wrap: wrap;
      }

      .loonge-button {
        min-width: 138px;
        flex: 1;
      }

      .loonge-section {
        padding-block: 72px;
      }

      .loonge-section-heading {
        display: block;
        margin-bottom: 36px;
      }

      .loonge-section-heading > .loonge-text-link {
        margin-top: 22px;
      }

      .loonge-directions-grid {
        display: block;
      }

      .loonge-direction {
        display: block;
        min-height: 0;
        padding: 30px 0;
        border-left: 0;
        border-top: 1px solid var(--loonge-line);
      }

      .dark .loonge-direction {
        border-color: var(--loonge-dark-line);
      }

      .loonge-number {
        margin-bottom: 16px;
        font-size: 2rem;
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
        border-bottom: 1px solid var(--loonge-line);
      }

      .dark .loonge-exploration-item {
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
      .loonge-life-grid,
      .loonge-latest-grid {
        grid-template-columns: 1fr;
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

      .loonge-latest-grid {
        gap: 40px;
      }

      .loonge-latest-row {
        grid-template-columns: 1fr auto;
        gap: 8px 20px;
        padding-block: 22px;
      }

      .loonge-latest-row > span:first-child {
        grid-column: 1;
      }

      .loonge-latest-row > span:nth-child(2) {
        grid-column: 2;
      }

      .loonge-latest-row h3 {
        grid-column: 1;
        grid-row: 2;
      }

      .loonge-latest-row svg {
        grid-column: 2;
        grid-row: 2;
      }

      .loonge-latest-empty {
        align-items: flex-start;
        flex-direction: column;
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
