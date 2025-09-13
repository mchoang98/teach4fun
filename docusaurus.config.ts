import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
  title: "Dạy cho vui",
  tagline: "Trang web học tập vui nhộn",
  favicon: "img/logo.jpg",
  url: "https://teach4fun.web.app/",
  baseUrl: "/",
  organizationName: "mchoang98", // Your GitHub username/organization
  projectName: "day-cho-vui", // Your GitHub repo for this project
  themes: ['@docusaurus/theme-mermaid'],  // 👈 Thêm dòng này

  markdown: {
    mermaid: true, // 👈 Bật hỗ trợ mermaid trong Markdown/MDX
  },
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "vi",
    locales: ["vi", "en"],
    localeConfigs: {
      vi: {
        label: "Tiếng Việt",
      },
      en: {
        label: "English",
      },
    },
  },

  headTags: [
    {
      tagName: "meta",
      attributes: {
        name: "google-adsense-account",
        content: "ca-pub-5515746941686673",
      },
    },
  ],
  scripts: [
    {
      src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5515746941686673",
      async: true,
      crossorigin: "anonymous",
    },
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.ts"),
          editUrl: "https://github.com/mchoang98/day-cho-vui/tree/main/docs/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/mchoang98/day-cho-vui/tree/main/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Dạy cho vui",
      logo: {
        alt: "Logo của trang web",
        src: "img/logo.jpg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "pythonSidebar", // Changed to a specific sidebar for Python
          position: "left",
          label: "Python",
        },
        {
          type: "docSidebar",
          sidebarId: "webSidebar", // Changed to a specific sidebar for Python
          position: "left",
          label: "Web",
        },
        {
          type: "docSidebar",
          sidebarId: "sqlSidebar",
          position: "left",
          label: "SQL",
        },
        {
          type: "docSidebar",
          sidebarId: "gitSidebar",
          position: "left",
          label: "Git",
        },
        {
          to: "/blog",
          label: "Blog",
          position: "left",
        },
        {
          href: "https://github.com/mchoang98",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Michael.`,
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
