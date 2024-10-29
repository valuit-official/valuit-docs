"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7437],{8772:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var t=s(4848),i=s(8453);const r={sidebar_position:3},a="ERC-3643",o={id:"Smart Contracts/The Basics/erc-3643",title:"ERC-3643",description:"The\xa0ERC-3643\xa0standard introduces a unique approach to security tokens, which are digital assets that represent ownership in real-world assets like company shares, real estate, or commodities. ERC-3643 is designed to make security tokens regulatory-compliant, enabling these tokens to function securely in heavily regulated industries.",source:"@site/docs/Smart Contracts/The Basics/erc-3643.md",sourceDirName:"Smart Contracts/The Basics",slug:"/Smart Contracts/The Basics/erc-3643",permalink:"/Smart Contracts/The Basics/erc-3643",draft:!1,unlisted:!1,editUrl:"https://github.com/valuit-official/valuit-docs/tree/main/docs/Smart Contracts/The Basics/erc-3643.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"ERC-20",permalink:"/Smart Contracts/The Basics/erc-20"},next:{title:"Overview",permalink:"/Smart Contracts/Valuit Library/overview"}},c={},l=[{value:"What is ERC-3643?",id:"what-is-erc-3643",level:3},{value:"How ERC-3643 Works",id:"how-erc-3643-works",level:3},{value:"Key Components of ERC-3643",id:"key-components-of-erc-3643",level:3},{value:"Security Tokens Explained",id:"security-tokens-explained",level:3},{value:"How ERC-3643 Differs from Other Token Standards",id:"how-erc-3643-differs-from-other-token-standards",level:3},{value:"Use Cases for ERC-3643 Security Tokens",id:"use-cases-for-erc-3643-security-tokens",level:3},{value:"Summary",id:"summary",level:3}];function d(e){const n={code:"code",h1:"h1",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"erc-3643",children:"ERC-3643"})}),"\n",(0,t.jsxs)(n.p,{children:["The\xa0",(0,t.jsx)(n.strong,{children:"ERC-3643"}),"\xa0standard introduces a unique approach to security tokens, which are digital assets that represent ownership in real-world assets like company shares, real estate, or commodities. ERC-3643 is designed to make security tokens regulatory-compliant, enabling these tokens to function securely in heavily regulated industries."]}),"\n",(0,t.jsx)(n.h3,{id:"what-is-erc-3643",children:"What is ERC-3643?"}),"\n",(0,t.jsxs)(n.p,{children:["ERC-3643 is a token standard developed on the Ethereum blockchain specifically for\xa0",(0,t.jsx)(n.strong,{children:"security tokens"}),". Unlike utility tokens, which grant users access to services, security tokens represent ownership in an asset or company and come with legal compliance requirements. ERC-3643 enables asset issuers to maintain regulatory compliance while still benefiting from the advantages of blockchain technology."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"\ud83d\udca1\n\nERC-3643 is unique among token standards for its emphasis on compliance, offering tools for security token issuers to manage access, conduct KYC/AML checks, and ensure regulatory adherence across jurisdictions.\n"})}),"\n",(0,t.jsx)(n.h3,{id:"how-erc-3643-works",children:"How ERC-3643 Works"}),"\n",(0,t.jsx)(n.p,{children:"ERC-3643 incorporates compliance features directly into the token\u2019s functionality, making it an ideal choice for issuing digital securities that need to meet regulatory requirements. The main features of ERC-3643 include:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"On-Chain Compliance"}),": ERC-3643 tokens integrate KYC (Know Your Customer) and AML (Anti-Money Laundering) checks, ensuring that only verified investors can hold or trade these tokens."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Access Control"}),": Issuers have the ability to control who can buy, hold, and transfer tokens based on compliance checks. If a user doesn\u2019t meet regulatory requirements, their transactions will be restricted."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Flexibility and Modularity"}),": ERC-3643 is adaptable, allowing asset issuers to configure the token\u2019s compliance rules to match legal requirements across different jurisdictions."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"\ud83d\udcd8\n\nIf a security token issued under ERC-3643 needs to be transferred, the contract will automatically verify the recipient\u2019s KYC status. Only if the recipient meets the regulatory criteria will the transfer go through, ensuring that all token holders are compliant.\n"})}),"\n",(0,t.jsx)(n.h3,{id:"key-components-of-erc-3643",children:"Key Components of ERC-3643"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Component"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Token Issuance Contract"})}),(0,t.jsx)(n.td,{children:"Manages the initial issuance of tokens and ensures compliance standards are met before distribution."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Transfer Control Contract"})}),(0,t.jsx)(n.td,{children:"Controls the transfer of tokens and enforces compliance checks for each transaction, ensuring secure transfers."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Verification Module"})}),(0,t.jsx)(n.td,{children:"Integrates KYC/AML verification to ensure all investors are vetted and meet regulatory requirements before trade."})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"security-tokens-explained",children:"Security Tokens Explained"}),"\n",(0,t.jsxs)(n.p,{children:["A\xa0",(0,t.jsx)(n.strong,{children:"security token"}),"\xa0is a digital asset representing ownership or stake in a real-world asset or company, such as equity, bonds, or real estate. Unlike traditional securities, security tokens can be traded digitally on a blockchain, allowing for faster and more secure transactions."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Benefits of Security Tokens"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Regulatory Compliance"}),": Security tokens follow legal guidelines, making them suitable for traditional investment markets."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Fractional Ownership"}),": Security tokens can represent fractions of an asset, making it accessible to a broader range of investors."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Improved Liquidity"}),": By digitizing assets, security tokens allow for faster transactions and access to secondary markets."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"\ud83d\udd11\n\nERC-3643 allows security tokens to operate within the boundaries of traditional finance regulations while benefiting from blockchain\u2019s efficiency and transparency.\n"})}),"\n",(0,t.jsx)(n.h3,{id:"how-erc-3643-differs-from-other-token-standards",children:"How ERC-3643 Differs from Other Token Standards"}),"\n",(0,t.jsx)(n.p,{children:"While ERC-20 is designed for utility tokens, ERC-3643 is created specifically for tokens that need to comply with financial regulations. Here\u2019s how ERC-3643 is different:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Compliance-Focused"}),": Unlike ERC-20 or ERC-721, ERC-3643 includes regulatory compliance as a core feature, providing built-in controls to restrict access based on investor verification."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Controlled Transferability"}),": ERC-3643 allows for restricted token transfers, which is critical for security tokens that may need to adhere to jurisdictional laws."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Enhanced Security"}),": By limiting transactions to verified users, ERC-3643 ensures that tokens are held and traded only by compliant parties, reducing the risk of illicit activity."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"\ud83d\udcd8\n\nERC-3643 is compatible with existing Ethereum wallets and infrastructure, allowing for easy integration and compatibility with Ethereum-based applications.\n"})}),"\n",(0,t.jsx)(n.h3,{id:"use-cases-for-erc-3643-security-tokens",children:"Use Cases for ERC-3643 Security Tokens"}),"\n",(0,t.jsx)(n.p,{children:"The ERC-3643 standard is ideal for businesses that want to tokenize regulated assets while staying compliant. Common use cases include:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Equity and Bonds"}),": Companies can issue tokenized equity or bonds, allowing investors to trade shares or bonds as digital assets."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Real Estate"}),": Property ownership can be represented as security tokens, enabling fractional ownership and increasing liquidity."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Commodities"}),": Commodities like gold or oil can be tokenized, providing investors with the flexibility to trade commodity-backed tokens."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Private Equity and Venture Capital"}),": Investment firms can use ERC-3643 to create digital representations of private equity shares, making them more accessible to a wider pool of investors."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"summary",children:"Summary"}),"\n",(0,t.jsx)(n.p,{children:"ERC-3643 provides a framework for issuing regulatory-compliant security tokens on the Ethereum blockchain, combining the benefits of blockchain technology with the necessary legal protections. By supporting on-chain compliance, restricted transferability, and modular configurations, ERC-3643 enables businesses to tokenize assets safely and efficiently, unlocking new avenues for investment while staying within regulatory boundaries."}),"\n",(0,t.jsx)(n.p,{children:"With ERC-3643, security tokens offer a bridge between traditional finance and blockchain, allowing for greater transparency, liquidity, and accessibility while meeting the standards of the financial industry."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var t=s(6540);const i={},r=t.createContext(i);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);