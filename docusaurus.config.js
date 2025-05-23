// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NXD Documentation',
  tagline: 'documentation for NXD extensions and plugins',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://manuals.nx-designs.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'marcorensch', // Usually your GitHub org/user name.
  projectName: 'manuals', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Startseite direkt auf Docs setzen
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/marcorensch/nxd-manuals/tree/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
      'image-zoom'
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/nxd-social-card.jpg',
      navbar: {
        title: 'NXD Documentation',
        logo: {
          alt: 'NXD Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Manuals',
          },
          {
            href: 'https://github.com/marcorensch/nxd-manuals',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
              {
                label: 'Exposer',
                to: '/docs/category/exposer',
              },
              {
                label: 'Oriel',
                to: '/docs/category/oriel',
              },
            ],
          },
          {
            title: 'NXD | nx-designs',
            items: [
              {
                label: 'Homepage',
                href: 'https://www.nx-designs.ch',
              },
              {
                label: 'Extension Demos',
                href: 'https://demo.nx-designs.com',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/marcorensch/nxd-manuals',
              },
              {
                label: 'Buy me a coffee',
                href: 'https://buymeacoffee.com/nxdesigns',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} nx-designs, Inc. Built with Docusaurus.`,
      },
      prism: {
        lightTheme,
        darkTheme,
      },
      zoom: {
        selector: '.markdown > img',
        background: {
          light: 'rgba(255, 255, 255, 0.9)',
          dark: 'rgba(0, 0, 0, 0.9)'
        },
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
          margin: 100,
        }
      }
    }),
};

module.exports = config;
