import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Southampton Robotics Outreach',
  tagline: 'The University of Southampton society that runs outreach events',
  favicon: 'img/favicon.ico',

  url: 'https://roboticsoutreach.org',
  baseUrl: '/',

  organizationName: 'roboticsoutreach',
  projectName: 'website-next',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en-GB',
    locales: ['en-GB'],
  },

  plugins: [
    [
      '@docusaurus/plugin-content-pages',
      {
        path: 'src/pages',
        routeBasePath: '/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'kb',
        path: 'kb',
        routeBasePath: 'kb',
        sidebarPath: './kb/sidebars.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'blog',
        routeBasePath: 'blog',
        path: './blog',
      },
    ],
  ],

  themes: ['@docusaurus/theme-classic'],

  themeConfig: {
    announcementBar: {
      id: 'new_site',
      content:
        'This website is <a href="/blog/2025/04/19/new-website">new</a>! We would love to know your thoughts, or if you think anything is missing.',
      backgroundColor: '#fafbfc',
      textColor: '#091E42',
      isCloseable: false,
    },
    navbar: {
      title: 'Southampton Robotics Outreach',
      logo: {
        alt: 'SRO Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'blog',
          label: 'Blog',
        },
        {
          type: 'doc',
          label: 'Knowledgebase',
          docId: 'index',
          docsPluginId: 'kb',
        },
        {
          to: 'contact',
          label: 'Contact Us',
        },
        {
          href: 'https://susu.org/groups/student-robotics-southampton',
          label: 'Join SRO',
          position: 'right',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Southampton Robotics Outreach. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
