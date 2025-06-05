// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

const organizationName = "valuit-official";
const projectName = "valuit-docs";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BlockRidge',
  tagline: 'Redefining Investment Banking with Blockchain',
  favicon: 'img/favicon-150x150.png',

  // Set the production url of your site here
  url: `https://docs.valuit.com/`,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: `/`,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: `${organizationName}`, // Usually your GitHub org/user name.
  projectName: `${projectName}`, // Usually your repo name.

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
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
        },
        blog: {
          path: 'blog',
          routeBasePath: 'blog',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
          `https://github.com/${organizationName}/${projectName}/tree/main/`,
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-NEXHNHZ7C5', // Replace with your actual tracking ID
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      algolia: {
        appId: 'KE3SYNCEAB',
        apiKey: 'f5c8e4402c3ff7c1074617cf9270d0d6',
        indexName: 'valuit'
      },

      // Replace with your project's social card
      image: 'img/socials/logo_dark.png',
      navbar: {
        logo: {
          alt: 'BlockRidge Logo',
          src: 'img/BlockRidge_light_logo.svg',
          srcDark: 'img/BlockRidge_dark_logo.svg',
          href: 'https://valuit.com/',
          target: '_self',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          { href: 'https://valuit.com/blog/', label: 'Blog', position: 'left' },
          {
            type: 'html',
            value: "<div class='divider'></div>"
          },
          {
            type: 'dropdown',
            label: 'Resources',
            position: 'left',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/valuit-official',
              },
              {
                label: 'FAQs',
                href: 'https://valuit.com/faqs/',
              },
            ]
          },
          {
            href: 'https://github.com/valuit-official/valuit-docs',
            label: 'GitHub',
            position: 'right',
          }
        ],
      },
      footer: {
        links: [
          {
            title: 'ABOUT US',
            items: [
              {
                label: 'Our Story',
                to: 'https://valuit.com/our-story',
              },
              {
                label: 'Team',
                to: 'https://valuit.com/team',
              },
              {
                label: 'Partners',
                to: 'https://valuit.com/partners',
              },
            ],
          },
          {
            title: 'SOLUTIONS',
            items: [
              {
                label: 'Tokenization',
                to: 'https://valuit.com/tokenization',
              },
              {
                label: 'Share Capital Management',
                to: 'https://valuit.com/share-capital-management/',
              },
              {
                label: 'Consulting and Advisory',
                to: 'https://valuit.com/consulting-and-advisory/',
              },
            ]
          },
          {
            title: 'USE CASES',
            items: [
              {
                label: 'Real Esate',
                to: 'https://valuit.com/real-estate',
              },
              {
                label: 'Funds & Equities',
                to: 'https://valuit.com/funds-equities',
              },
              {
                label: 'Debt Financing',
                to: 'https://valuit.com/debt-financing',
              },
              {
                label: 'Decentralized Finance',
                to: 'https://valuit.com/decentralized-finance',
              },
            ]
          },
          {
            title: 'CUSTOMERS',
            items: [
              {
                label: 'Testimonials',
                href: 'https://valuit.com/testimonials',
              }
            ],
          }
        ],


        copyright: `
        <div class="row footer-first-row">
          <div>
            <p class='first-title' style="margin-bottom: 30px">NEED HELP?</small>

            <div style="display: flex; gap: 30px">
              <div>
                <p class='second-title mb-0'>CALL US DIRECTLY</small>
                <p class="second-title-text" style="margin-bottom: 44px">+1 718 713 8417</p>
              </div>

              <div>
                <p class='second-title mb-0'>CALL US DIRECTLY</small>
                <p class="second-title-text" style="margin-bottom: 44px">info@valuit.com</p>
              </div>
            </div>

          </div>
        </div>

        <div class="row footer-second-row">
          <div class="col-md-4 address-box">
            <p class='footer-address-title'>BlockRidge NEW YORK OFFICE</p>
            <p class='footer-address-subtitle'>100 Quentin Roosevelt Blvd, Suite: 503, Garden City, New York, 11530</p>
          </div>
          <div class="col-md-4 address-box">
            <p class='footer-address-title'>BlockRidge LITHUANIA OFFICE</p>
            <p class='footer-address-subtitle'>Zalgirio g.88-101, Vilnius, Lithuania, 09301</p>
          </div>
          <div class="col-md-4 address-box">
            <p class='footer-address-title'>BlockRidge DUBAI OFFICE</p>
            <p class='footer-address-subtitle'>22B St - Emirates Towers - Trade Centre 2 - Dubai - United Arab Emirates</p>
          </div>
        </div>
        
        <div class="footer-last-row">
          <img src="/img/logo_dark.png" class="footer-logo" alt="BlockRidge"/>
          <span class="order-3">© ${new Date().getFullYear()} BlockRidge. All Right Reserved</span>
          <div class="d-flex gap-3">
            <a href="https://x.com/BlockRidge__">
              <img src="/img/socials/x-twitter-brands-solid.svg" class="social-img" alt="BlockRidge"/>
            </a>
            <a href="https://www.instagram.com/blockridge_/">
              <img src="/img/socials/instagram-brands-solid.svg" class="social-img" alt="BlockRidge"/>
            </a>
            <a href="https://www.instagram.com/blockridge_/">
              <img src="/img/socials/instagram-brands-solid.svg" class="social-img" alt="BlockRidge"/>
            </a>
            <a href="https://www.linkedin.com/company/blockridge/">
              <img src="/img/socials/linkedin-brands-solid.svg" class="social-img" alt="BlockRidge"/>
            </a>
          </div>
        </div>`,
      },
      prism: {
        theme: prismThemes.dracula,
        darkTheme: prismThemes.dracula,
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: {start: 'highlight-start', end: 'highlight-end'},
          },
          {
            className: 'code-block-error-line',
            line: 'This will error',
          },
        ]
      },
      plugins: [
        [
          '@docusaurus/plugin-sitemap',
          {
            changefreq: 'daily',
            priority: 0.5,
          },
        ],
      ]
    }),
    
};

export default config;
