module.exports = {
  title: 'Consento',
  tagline: 'Data privacy for humans, by humans.',
  url: 'https://consento.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/consento/cc-by-nc-nd/logo/favicon.ico',
  organizationName: 'consento-org', // Usually your GitHub org/user name.
  projectName: 'consento-org.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Consento',
      logo: {
        alt: 'Consento Logo',
        src: 'img/consento/cc-by-nc-nd/logo/consento-with-text.png',
      },
      items: [
        {to: 'about', label: 'About', position: 'right'},
        {to: 'docs/overview', label: 'Documentation', position: 'right'},
        {to: 'usecases', label: 'Use cases', position: 'right'},
        {to: 'team', label: 'Team', position: 'right'},
        {to: 'blog', label: 'Blog', position: 'right'},
        {to: 'download', label: 'Download', position: 'right', className: 'navbar__button'}
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Keybase',
              href: 'https://keybase.io/team/consento',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/consentoorg',
            },
          ],
        },
        {
          title: 'Develop',
          items: [
            { label: 'Github Repository', href: 'https://github.com/consento-org/', },
            { label: 'Keybase Chat', href: 'https://keybase.io/team/consento' },
            { label: 'Building Blocks', to: 'docs/time' },
            { label: 'Documentation', to: 'docs/overview' },
          ],
        },
        {
          title: 'About',
          items: [
            { label: 'Team', to: 'team', },
            { label: 'About', to: 'about', },
            { label: 'Supporters', to: 'supporters', },
            { label: 'Use cases', to: 'usecases', },
            ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Consento - All rights reserved - <a href="/credits">Credits</a> - <a href="/privacy-policy">Privacy Policy</a>`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/consento-org/consento-org.github.io/edit/main/',
        },

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
       
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          path: 'docs',
          editUrl: 'https://github.com/consento-org/consento-org.github.io/tree/webpage-documentation',
          routeBasePath: 'docs',
          remarkPlugins: [],
          rehypePlugins: [],
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        
      },
    ],
  ],
};
