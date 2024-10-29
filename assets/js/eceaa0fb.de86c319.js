"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1466],{4061:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(4848),i=n(8453);const a={sidebar_position:2},o="List of Contracts",c={id:"Smart Contracts/Valuit Library/list-of-contracts",title:"List of Contracts",description:"- Token Factory Contract",source:"@site/docs/Smart Contracts/Valuit Library/list-of-contracts.md",sourceDirName:"Smart Contracts/Valuit Library",slug:"/Smart Contracts/Valuit Library/list-of-contracts",permalink:"/valuit-docs/Smart Contracts/Valuit Library/list-of-contracts",draft:!1,unlisted:!1,editUrl:"https://github.com/valuit-official/valuit-docs/tree/main/docs/Smart Contracts/Valuit Library/list-of-contracts.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/valuit-docs/Smart Contracts/Valuit Library/overview"},next:{title:"Token Factory Contract",permalink:"/valuit-docs/Smart Contracts/Valuit Library/token-factory-contract"}},s={},l=[{value:"Token Factory Contract",id:"token-factory-contract",level:2},{value:"Token Contract",id:"token-contract",level:2},{value:"Identity Registry Contract",id:"identity-registry-contract",level:2},{value:"Identity Registry Storage Contract",id:"identity-registry-storage-contract",level:2},{value:"Modular Compliance Contract",id:"modular-compliance-contract",level:2},{value:"Claim Topics Registry Contract",id:"claim-topics-registry-contract",level:2},{value:"Trusted Issuer Registry Contract",id:"trusted-issuer-registry-contract",level:2},{value:"Identity Contract",id:"identity-contract",level:2},{value:"Identity Factory Contract",id:"identity-factory-contract",level:2},{value:"Implementation Authority",id:"implementation-authority",level:2},{value:"Agent Manager Contract",id:"agent-manager-contract",level:2},{value:"Owner Manager Contract",id:"owner-manager-contract",level:2},{value:"ERC20 Wrapper Contract",id:"erc20-wrapper-contract",level:2}];function d(t){const e={h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,i.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"list-of-contracts",children:"List of Contracts"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Token Factory Contract"}),"\n",(0,r.jsx)(e.li,{children:"Token Contract"}),"\n",(0,r.jsx)(e.li,{children:"Identity Registry Contract"}),"\n",(0,r.jsx)(e.li,{children:"Identity Registry Storage Contract"}),"\n",(0,r.jsx)(e.li,{children:"Modular Compliance Contract"}),"\n",(0,r.jsx)(e.li,{children:"Claim Topics Registry Contract"}),"\n",(0,r.jsx)(e.li,{children:"Trusted Issuer Registry Contract"}),"\n",(0,r.jsx)(e.li,{children:"Identity Contract"}),"\n",(0,r.jsx)(e.li,{children:"Identity Factory Contract"}),"\n",(0,r.jsx)(e.li,{children:"Implementation Authority"}),"\n",(0,r.jsx)(e.li,{children:"Agent Manager Contract"}),"\n",(0,r.jsx)(e.li,{children:"Owner Manager Contract"}),"\n",(0,r.jsx)(e.li,{children:"ERC20 Wrapper Contract"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"token-factory-contract",children:"Token Factory Contract"}),"\n",(0,r.jsx)(e.p,{children:"Token Factory contract allows issuers to easily deploy security tokens without technical knowledge, using a user-friendly web interface to fill in required fields and create tokens."}),"\n",(0,r.jsx)(e.h2,{id:"token-contract",children:"Token Contract"}),"\n",(0,r.jsx)(e.p,{children:"Token contract manages the core functionalities of the security tokens, including minting, burning, and transferring tokens. It ensures compliance by embedding transfer rules and controlling token actions like freezing and forced transfers."}),"\n",(0,r.jsx)(e.h2,{id:"identity-registry-contract",children:"Identity Registry Contract"}),"\n",(0,r.jsx)(e.p,{children:"Identity Registry contract links wallet addresses to on-chain identities and country codes, ensuring that only verified identities can hold and transfer tokens. This contract helps enforce compliance with regulatory requirements."}),"\n",(0,r.jsx)(e.h2,{id:"identity-registry-storage-contract",children:"Identity Registry Storage Contract"}),"\n",(0,r.jsx)(e.p,{children:"The Identity Registry Storage contract stores the identity data used by the Identity Registry, maintaining a dynamic whitelist of verified identities and their associated attributes, such as country codes and claim statuses."}),"\n",(0,r.jsx)(e.h2,{id:"modular-compliance-contract",children:"Modular Compliance Contract"}),"\n",(0,r.jsx)(e.p,{children:"Compliance contract provides a framework for defining and enforcing compliance rules on token transfers. It allows customization of rules to meet various regulatory requirements and can be updated or extended as needed."}),"\n",(0,r.jsx)(e.h2,{id:"claim-topics-registry-contract",children:"Claim Topics Registry Contract"}),"\n",(0,r.jsx)(e.p,{children:"Claim Topics Registry maintains a registry of claim topics, specific attributes, or credentials required for identity verification. Only identities with the necessary claims can hold and transfer tokens."}),"\n",(0,r.jsx)(e.h2,{id:"trusted-issuer-registry-contract",children:"Trusted Issuer Registry Contract"}),"\n",(0,r.jsx)(e.p,{children:"Trusted Issuer Registry contract keeps a list of trusted issuers authorized to verify identities and issue claims. Only identities verified by trusted parties can interact with the tokens."}),"\n",(0,r.jsx)(e.h2,{id:"identity-contract",children:"Identity Contract"}),"\n",(0,r.jsx)(e.p,{children:"The identity contract represents the on-chain identity of a user, containing verified claims and other identity attributes. It interacts with the Identity Registry to validate identity-related conditions for token transfers"}),"\n",(0,r.jsx)(e.h2,{id:"identity-factory-contract",children:"Identity Factory Contract"}),"\n",(0,r.jsx)(e.p,{children:"Identity Factory contract facilitates the creation of new on-chain identities, streamlining the process for users and issuers to generate and manage their identities on the blockchain."}),"\n",(0,r.jsx)(e.h2,{id:"implementation-authority",children:"Implementation Authority"}),"\n",(0,r.jsx)(e.p,{children:"Implementation Authority contract governs the upgradeability of the contracts, allowing for improvements and updates to be implemented while maintaining security and compliance."}),"\n",(0,r.jsx)(e.h2,{id:"agent-manager-contract",children:"Agent Manager Contract"}),"\n",(0,r.jsx)(e.p,{children:"Agent Manager contract manages the roles and permissions of agents who are authorized to perform actions on behalf of the token issuer, such as adding or removing identities from the registry."}),"\n",(0,r.jsx)(e.h2,{id:"owner-manager-contract",children:"Owner Manager Contract"}),"\n",(0,r.jsx)(e.p,{children:"The owner-manager contract handles ownership and administrative control over the ERC3643 contracts, enabling the owner to appoint agents and manage other critical aspects of the system."}),"\n",(0,r.jsx)(e.h2,{id:"erc20-wrapper-contract",children:"ERC20 Wrapper Contract"}),"\n",(0,r.jsx)(e.p,{children:"Wrapper contract provides a way to wrap and unwrap ERC3643 tokens, allowing for flexibility with other token standards and systems, thus enhancing the functionality and flexibility of the ERC3643 tokens"})]})}function h(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(d,{...t})}):d(t)}},8453:(t,e,n)=>{n.d(e,{R:()=>o,x:()=>c});var r=n(6540);const i={},a=r.createContext(i);function o(t){const e=r.useContext(a);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:o(t.components),r.createElement(a.Provider,{value:e},t.children)}}}]);