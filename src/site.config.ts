import type { SiteConfig } from '@types'

const config: SiteConfig = {
  // Absolute URL to the root of your published site, used for generating links and sitemaps.
  site: 'https://tohka.fyi',
  // The name of your site, used in the title and for SEO.
  title: 'tohka.fyi',
  // The description of your site, used for SEO and RSS feed.
  description:
    '今泉冬花の個人ブログ。写真（NIKON Z5II / iPhone）、建築や展示の記録、NAS・Astro などの技術メモを書いています。',
  // The author of the site, used in the footer, SEO, and RSS feed.
  author: '今泉冬花',
  // Keywords for SEO, used in the meta tags.
  tags: ['Astro', 'NIKON_Z5II', 'ポートレート撮影', 'スナップ撮影'],
  // Path to the image used for generating social media previews.
  // Needs to be a square JPEG file due to limitations of the social card generator.
  // Try https://squoosh.app/ to easily convert images to JPEG.
  socialCardAvatarImage: './src/content/avatar.jpg',
  // Font imported from @fontsource or elsewhere, used for the entire site.
  // To change this see src/styles/global.css and import a different font.
  font: 'Inter',
  // For pagination, the number of posts to display per page.
  pageSize: 5,
  // The navigation links to display in the header.
  navLinks: [
    // {
    //   name: 'Home',
    //   url: '/',
    // },
    {
      name: 'About',
      url: '/about/',
    },
    {
      name: 'Archive',
      url: '/posts/',
    },
  ],
  // The theming configuration for the site.
  themes: {
    // The theming mode. One of "single" | "select" | "light-dark-auto".
    mode: 'light-dark-auto',
    // The default theme identifier, used when themeMode is "select" or "light-dark-auto".
    // Make sure this is one of the themes listed in `themes` or "auto" for "light-dark-auto" mode.
    default: 'auto',
    // Shiki themes to bundle with the site.
    // https://expressive-code.com/guides/themes/#using-bundled-themes
    // These will be used to theme the entire site along with syntax highlighting.
    // To use light-dark-auto mode, only include a light and a dark theme in that order.
    // include: [
    //   'github-light',
    //   'github-dark',
    // ]
    // サイトの配色。Shiki テーマの色をトークン単位で差し替える。
    // 未指定のキー（blue/green/red 等）は Shiki テーマの値がそのまま使われる。
    overrides: {
      'rose-pine-dawn': {
        background: '#f7fafc',
        foreground: '#1f2a30',
        accent: '#468fb4',
        a: '#2e6e8e',
        hr: '#d7e7ef',
        h1: '#468fb4',
        h2: '#468fb4',
        h3: '#468fb4',
        h4: '#468fb4',
        h5: '#468fb4',
        h6: '#468fb4',
        li: '#1f2a30',
        italic: '#5e7480',
        muted: '#5e7480',
        // 指定色 #d3a48d は明るい背景で 2.1:1 しか出ないため、ライトだけ暗くしてある
        warm: '#9e6347',
      },
      // 夕方（ライトとダークの中間。暖色のトワイライト）
      'rose-pine': {
        background: '#2b2320',
        foreground: '#f2e8df',
        accent: '#d08a5f',
        a: '#e0a878',
        hr: '#4a3b33',
        h1: '#d08a5f',
        h2: '#d08a5f',
        h3: '#d08a5f',
        h4: '#d08a5f',
        h5: '#d08a5f',
        h6: '#d08a5f',
        li: '#f2e8df',
        italic: '#b8a394',
        muted: '#b8a394',
        warm: '#e0a878',
      },
      'rose-pine-moon': {
        background: '#12202a',
        foreground: '#e9f1f5',
        accent: '#8dbcd3',
        a: '#8dbcd3',
        hr: '#2a4050',
        h1: '#8dbcd3',
        h2: '#8dbcd3',
        h3: '#8dbcd3',
        h4: '#8dbcd3',
        h5: '#8dbcd3',
        h6: '#8dbcd3',
        li: '#e9f1f5',
        italic: '#9fb4c0',
        muted: '#9fb4c0',
        warm: '#d3a48d',
      },
    },
    include: [
      // 'andromeeda',
      // 'aurora-x',
      // 'ayu-dark',
      // 'catppuccin-frappe',
      // 'catppuccin-latte',
      // 'catppuccin-macchiato',
      // 'catppuccin-mocha',
      // 'dark-plus',
      // 'dracula',
      // 'dracula-soft',
      // 'everforest-dark',
      // 'everforest-light',
      // 'github-dark',
      // 'github-dark-default',
      // 'github-dark-dimmed',
      // 'github-dark-high-contrast',
      // 'github-light',
      // 'github-light-default',
      // 'github-light-high-contrast',
      // 'gruvbox-dark-hard',
      // 'gruvbox-dark-medium',
      // 'gruvbox-dark-soft',
      // 'gruvbox-light-hard',
      // 'gruvbox-light-medium',
      // 'gruvbox-light-soft',
      // 'houston',
      // 'kanagawa-dragon',
      // 'kanagawa-lotus',
      // 'kanagawa-wave',
      // 'laserwave',
      // 'light-plus',
      // 'material-theme',
      // 'material-theme-darker',
      // 'material-theme-lighter',
      // 'material-theme-ocean',
      // 'material-theme-palenight',
      // 'min-dark',
      // 'min-light',
      // 'monokai',
      // 'night-owl',
      // 'nord',
      // 'one-dark-pro',
      // 'one-light',
      // 'plastic',
      // 'poimandres',
      // 'red',
      // 'rose-pine',
      // [0]=日中(ライト) [1]=夕方 [2]=夜(ダーク) の順で意味づけしている
      'rose-pine-dawn',
      'rose-pine',
      'rose-pine-moon',
      // 'slack-dark',
      // 'slack-ochin',
      // 'snazzy-light',
      // 'solarized-dark',
      // 'solarized-light',
      // 'synthwave-84',
      // 'tokyo-night',
      // 'vesper',
      // 'vitesse-black',
      // 'vitesse-dark',
      // 'vitesse-light',
    ],
  },
  // Social links to display in the footer.
  socialLinks: {
    twitter: 'https://x.com/imaizumi_tohka',
    bluesky: 'https://bsky.app/profile/i-tohka.bsky.social',
    github: 'https://github.com/imaizumi-tohka',
    email: 'info@tohka.fyi',
    rss: true, // Set to true to include an RSS feed link in the footer
  },
  // Configuration for Giscus comments.
  // To set up Giscus, follow the instructions at https://giscus.app/
  // You'll need a GitHub repository with discussions enabled and the Giscus app installed.
  // Take the values from the generated script tag at https://giscus.app and fill them in here.
  // If you don't want to use Giscus, set this to undefined.
  giscus: {
    repo: 'imaizumi-tohka/tohka.fyi',
    repoId: 'R_kgDOPZkfdw',
    category: 'giscus',
    categoryId: 'DIC_kwDOPZkfd84Ct5j1',
    reactionsEnabled: true, // Enable reactions on post itself
  },
}

export default config
