// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BlockTrade Support',
  tagline: 'Your home to BlockTrade Roblox Corporation Support.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://antoniw.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/blocktrade-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'blocktrade-corporation-roblox', // Usually your GitHub org/user name.
  projectName: 'blocktrade-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'BlockTrade Roblox',
        logo: {
          alt: 'BlockTrade Logo',
          src: 'img/logo.svg',
        },
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentations',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Roblox group',
                href: 'https://www.roblox.com/communities/13314843/BlockTrade-Corporation#!/about',
              },
              {
                label: 'Discord group',
                href: 'https://discord.gg/mCNuHhzvqD',
              },
              {
                label: 'Official TikTok page',
                href: 'https://www.tiktok.com/@blocktrade_corporation',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Documentations',
                to: '/docs/intro',
              },
              {
                label: 'GitHub (link not active yet, it will redirect you to home page).',
                href: 'https://github.com/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} BlockTrade Roblox. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
