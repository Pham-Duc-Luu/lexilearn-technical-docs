import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';
// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
import type * as Redocusaurus from 'redocusaurus';

const config: Config = {
  title: 'Lexilearn technical documentations',
  favicon: 'img/icon.svg',

  // Set the production url of your site here
  url: 'https://Pham-Duc-Luu.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/lexilearn-technical-docs',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Pham-Duc-Luu', // Usually your GitHub org/user name.
  projectName: 'lexilearn-technical-docs', // Usually your repo name.
  markdown: {
    mermaid: true,
  },

  trailingSlash: false, // optional but often recommended
  themes: ['@docusaurus/theme-mermaid', 'docusaurus-theme-openapi-docs'],
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'vi',
    locales: ['en', 'vi'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],

    // Redocusaurus config
    [
      'redocusaurus',
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          // Pass it a path to a local OpenAPI YAML file
          {
            // Redocusaurus will automatically bundle your spec into a single file during the build
            spec: 'static/swagger/openapi.json',
            route: 'docs/api/main-spring-boot',
          },
        ],
      },
    ] satisfies Redocusaurus.PresetEntry,
  ],

  plugins: [
    [
      '@graphql-markdown/docusaurus',
      /** @type {import('@graphql-markdown/types').ConfigOptions} */
      {
        schema: './schema/schema.graphql',
        rootPath: './docs', // docs will be generated under './docs/swapi' (rootPath/baseURL)
        baseURL: 'main-backend-service/graphql/🔍introspection',
        loaders: {
          GraphQLFileLoader: '@graphql-tools/graphql-file-loader', // local file schema
        },
        // Optional advanced settings
        prettify: true,
        customDirective: true,
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'lexilearn',
      logo: {
        alt: 'Lexi-logo',
        src: 'img/icon.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'docs',
        },

        // { to: '/blog', label: 'Blog', position: 'left' },
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['java', 'scala'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
