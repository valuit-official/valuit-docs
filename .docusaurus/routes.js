import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '5de'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'a89'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'a60'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'fb7'),
            routes: [
              {
                path: '/$VAL - Coming Soon/functionality',
                component: ComponentCreator('/$VAL - Coming Soon/functionality', '3db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/$VAL - Coming Soon/what-is-$val',
                component: ComponentCreator('/$VAL - Coming Soon/what-is-$val', 'e45'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/DeFi - Coming Soon/what-is-valux',
                component: ComponentCreator('/DeFi - Coming Soon/what-is-valux', '913'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Getting Started/navigating-our-docs',
                component: ComponentCreator('/Getting Started/navigating-our-docs', '277'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Getting Started/What is Tokenization/step-by-step',
                component: ComponentCreator('/Getting Started/What is Tokenization/step-by-step', 'bca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Getting Started/What is Tokenization/the-basics',
                component: ComponentCreator('/Getting Started/What is Tokenization/the-basics', 'd3f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Getting Started/What is Tokenization/top-industries',
                component: ComponentCreator('/Getting Started/What is Tokenization/top-industries', 'ead'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Glossary/blockchain-and-tokenization',
                component: ComponentCreator('/Glossary/blockchain-and-tokenization', 'e86'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Glossary/financial-and-regulatory',
                component: ComponentCreator('/Glossary/financial-and-regulatory', 'a68'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Glossary/key-terms',
                component: ComponentCreator('/Glossary/key-terms', '398'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/intro',
                component: ComponentCreator('/intro', '9fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Smart Contracts/The Basics/erc-20',
                component: ComponentCreator('/Smart Contracts/The Basics/erc-20', 'b34'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Smart Contracts/The Basics/erc-3643',
                component: ComponentCreator('/Smart Contracts/The Basics/erc-3643', '510'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Smart Contracts/The Basics/how-it-works',
                component: ComponentCreator('/Smart Contracts/The Basics/how-it-works', 'c76'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Smart Contracts/Valuit Library/identity-register-contract',
                component: ComponentCreator('/Smart Contracts/Valuit Library/identity-register-contract', 'ff4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Smart Contracts/Valuit Library/list-of-contracts',
                component: ComponentCreator('/Smart Contracts/Valuit Library/list-of-contracts', 'd8a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Smart Contracts/Valuit Library/overview',
                component: ComponentCreator('/Smart Contracts/Valuit Library/overview', '91f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Smart Contracts/Valuit Library/token-contract',
                component: ComponentCreator('/Smart Contracts/Valuit Library/token-contract', 'f98'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Smart Contracts/Valuit Library/token-factory-contract',
                component: ComponentCreator('/Smart Contracts/Valuit Library/token-factory-contract', '738'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Tokenization/Asset Owner Info/asset-onboarding',
                component: ComponentCreator('/Tokenization/Asset Owner Info/asset-onboarding', '8ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Tokenization/Asset Owner Info/asset-tokenomics',
                component: ComponentCreator('/Tokenization/Asset Owner Info/asset-tokenomics', 'a05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Tokenization/Asset Owner Info/commercial-asset-onboarding',
                component: ComponentCreator('/Tokenization/Asset Owner Info/commercial-asset-onboarding', 'e85'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Tokenization/Asset Owner Info/maintenance-down-time',
                component: ComponentCreator('/Tokenization/Asset Owner Info/maintenance-down-time', '2fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Tokenization/Asset Owner Info/problems-and-solutions',
                component: ComponentCreator('/Tokenization/Asset Owner Info/problems-and-solutions', '3c9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Tokenization/Asset Owner Info/secondary-markets',
                component: ComponentCreator('/Tokenization/Asset Owner Info/secondary-markets', '879'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Tokenization/Asset Owner Info/securities-listing-compliance',
                component: ComponentCreator('/Tokenization/Asset Owner Info/securities-listing-compliance', 'c2b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Tokenization/Asset Owner Info/services',
                component: ComponentCreator('/Tokenization/Asset Owner Info/services', 'b01'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Tokenization/Asset Owner Info/technical-asset-requirements',
                component: ComponentCreator('/Tokenization/Asset Owner Info/technical-asset-requirements', 'a7e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Tokenization/Asset Owner Info/third-party-integrations',
                component: ComponentCreator('/Tokenization/Asset Owner Info/third-party-integrations', '184'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Tokenization/Investor Info/ecosystem',
                component: ComponentCreator('/Tokenization/Investor Info/ecosystem', 'e83'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Tokenization/Investor Info/investor-onboarding',
                component: ComponentCreator('/Tokenization/Investor Info/investor-onboarding', 'bd1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Tokenization/Investor Info/problems-and-solutions',
                component: ComponentCreator('/Tokenization/Investor Info/problems-and-solutions', '1ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Tokenization/Investor Info/services',
                component: ComponentCreator('/Tokenization/Investor Info/services', '4d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Tokenization/Investor Info/sourcing-deal-flow',
                component: ComponentCreator('/Tokenization/Investor Info/sourcing-deal-flow', 'de5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Tokenization/what-is-valuit',
                component: ComponentCreator('/Tokenization/what-is-valuit', '3d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
