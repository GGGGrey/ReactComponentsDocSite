// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const path = require('path');
const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;
const { version: componentVersion } = require(path.relative(__dirname, '../packages/components/package.json'));
const isProd = process.env.NODE_ENV === 'production';
const baseUrl = isProd ? '/ReactComponentsDocSite/' : '/';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '业务组件文档',
  url: `https://GGGGrey.github.io${baseUrl}`,
  baseUrl,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: true,

  // 自定义的字段
  customFields: {
    // demo 的 github 文件源前缀
    demoSourceUrl: 'https://gitlab.meitu.com/app/oa/officing/website',
    // codeSandbox package.json 配置，目前只支持 dependencies 和 devDependencies
    codeSandboxPacakgeConfig: {
      dependencies: {
        react: '^17.0.2',
        'react-dom': '^17.0.2',
        antd: '4.21.3',
        classnames: '2.3.1',
        'react-antd-business-components': componentVersion,
      },
      devDependencies: {
        less: '^4.1.3',
        'less-loader': '^7.3.0',
      },
    },
  },

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'GGGGrey', // Usually your GitHub org/user name.
  projectName: 'ReactComponentsDocSite', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs/components',
          routeBasePath: 'components',
          sidebarPath: require.resolve('./componentsSidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://gitlab.meitu.com/app/oa/officing/website',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://gitlab.meitu.com/app/oa/officing/website',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    [
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'utils',
        path: 'docs/utils',
        routeBasePath: 'utils',
        editUrl: 'https://gitlab.meitu.com/app/oa/officing/website',
        sidebarPath: require.resolve('./utilsSidebars.js'),
      }),
    ],
    './plugins/less',
    './plugins/alias',
    './plugins/mdx',
    './plugins/tsdoc',
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '业务组件文档',
        logo: {
          alt: '组件文档 Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            to: '/components/intro',
            label: '组件',
            position: 'left',
          },
          {
            to: '/utils/intro',
            label: 'Utils',
            position: 'left',
          },
          { to: '/blog', label: '博客', position: 'right' },
          {
            href: 'https://github.com/GGGGrey/ReactComponentsDocSite',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: true,
      },
      // algolia: {
      //   appId: 'HXVGA2AMP0',
      //   apiKey: 'ae77e0e03a0c15f379d31ceb50706ac7',
      //   indexName: 'ReactComponentsDocSite',
      // },
      // 页脚不需要可以不配置
      footer: {
        style: 'dark',
        links: [
          {
            title: '学习',
            items: [
              {
                label: '组件介绍',
                to: '/components/intro',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '博客',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/GGGGrey/ReactComponentsDocSite',
              },
            ],
          },
        ],
        copyright: `版权所有 © ${new Date().getFullYear()} 业务组件文档, Inc. 此网站使用 Docusaurus 构建。`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;