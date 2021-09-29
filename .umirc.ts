import { defineConfig } from 'dumi';

export default defineConfig({
  base: '/zan-design-mobile/',
  publicPath: '/zan-design-mobile/',
  title: 'Zan Design Mobile',
  favicon:
    'https://camo.githubusercontent.com/8a7a519ecabad2cd3e46ea5ad7cb16e440a76ead7abb8470ee4c52b2021e0c67/68747470733a2f2f696d672e797a63646e2e636e2f76616e742f6c6f676f2e706e67',
  logo: 'https://camo.githubusercontent.com/8a7a519ecabad2cd3e46ea5ad7cb16e440a76ead7abb8470ee4c52b2021e0c67/68747470733a2f2f696d672e797a63646e2e636e2f76616e742f6c6f676f2e706e67',
  outputPath: 'docs-dist',
  mode: 'site',
  locales: [
    ['en', 'English'],
    ['zh', '中文'],
  ],
  navs: {
    en: [
      {
        title: 'Guide',
        path: '/guide',
      },
      {
        title: 'Components',
        path: '/components',
      },
      {
        title: 'Releases',
        path: 'https://github.com/tastecloud/zan-design-mobile/releases',
      },
      {
        title: 'GitHub',
        path: 'https://github.com/tastecloud/zan-design-mobile',
      },
    ],
    zh: [
      {
        title: '指南',
        path: '/zh/guide',
      },
      {
        title: '组件',
        path: '/zh/components',
      },
      {
        title: '发布日志',
        path: 'https://github.com/tastecloud/zan-design-mobile/releases',
      },
      {
        title: 'GitHub',
        path: 'https://github.com/tastecloud/zan-design-mobile',
      },
    ],
  },
  menus: {
    '/': [
      {
        title: 'Home',
        path: 'index',
      },
    ],
    '/zh': [
      {
        title: '首页',
        path: 'index',
      },
    ],
    '/guide': [
      {
        title: 'Quick Start',
        path: '/guide/quick-start',
      },
    ],
    '/zh/guide': [
      {
        title: '快速上手',
        path: '/zh/guide/quick-start',
      },
    ],
  },
  themeConfig: {
    carrier: 'Mobile',
  },
  webpack5: {},
  dynamicImport: {},
  exportStatic: {},
  // more config: https://d.umijs.org/config
});
