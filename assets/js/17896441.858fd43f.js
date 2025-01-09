"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8401],{83071:(e,t,n)=>{n.d(t,{A:()=>p});n(63696);var s=n(12689),a=n(97404),i=n(13511),o=n(14422),l=n(99985),r=n(27963),c=n(83254),d=n(62540);function m(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const u={breadcrumbHomeIcon:"breadcrumbHomeIcon_sfvy"};function h(){const e=(0,c.Ay)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(l.A,{"aria-label":(0,r.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(m,{className:u.breadcrumbHomeIcon})})})}const b={breadcrumbsContainer:"breadcrumbsContainer_T5ub"};function x(e){let{children:t,href:n,isLast:s}=e;const a="breadcrumbs__link";return s?(0,d.jsx)("span",{className:a,itemProp:"name",children:t}):n?(0,d.jsx)(l.A,{className:a,href:n,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:t})}):(0,d.jsx)("span",{className:a,children:t})}function v(e){let{children:t,active:n,index:a,addMicrodata:i}=e;return(0,d.jsxs)("li",{...i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,s.A)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,d.jsx)("meta",{itemProp:"position",content:String(a+1)})]})}function p(){const e=(0,i.OF)(),t=(0,o.Dt)();return e?(0,d.jsx)("nav",{className:(0,s.A)(a.G.docs.docBreadcrumbs,b.breadcrumbsContainer),"aria-label":(0,r.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,d.jsx)(h,{}),e.map(((t,n)=>{const s=n===e.length-1,a="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,d.jsx)(v,{active:s,index:n,addMicrodata:!!a,children:(0,d.jsx)(x,{href:a,isLast:s,children:t.label})},n)}))]})}):null}},74568:(e,t,n)=>{n.r(t),n.d(t,{default:()=>F});var s=n(63696),a=n(49066),i=n(78225),o=n(62540);const l=s.createContext(null);function r(e){let{children:t,content:n}=e;const a=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,o.jsx)(l.Provider,{value:a,children:t})}function c(){const e=(0,s.useContext)(l);if(null===e)throw new i.dV("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:n}=c();return(0,o.jsx)(a.be,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var m=n(12689),u=n(7978),h=n(1696);function b(){const{metadata:e}=c();return(0,o.jsx)(h.A,{previous:e.previous,next:e.next})}var x=n(99657),v=n(73698),p=n(97404),g=n(63455),j=n(99847);function f(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,tags:a}=e,i=a.length>0,l=!!(t||n||s);return i||l?(0,o.jsxs)("footer",{className:(0,m.A)(p.G.docs.docFooter,"docusaurus-mt-lg"),children:[i&&(0,o.jsx)("div",{className:(0,m.A)("row margin-top--sm",p.G.docs.docFooterTagsRow),children:(0,o.jsx)("div",{className:"col",children:(0,o.jsx)(g.A,{tags:a})})}),l&&(0,o.jsx)(j.A,{className:(0,m.A)("margin-top--sm",p.G.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s})]}):null}var A=n(19695),_=n(50205),C=n(27963);const N={tocCollapsibleButton:"tocCollapsibleButton_iI2p",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_cHjC"};function L(e){let{collapsed:t,...n}=e;return(0,o.jsx)("button",{type:"button",...n,className:(0,m.A)("clean-btn",N.tocCollapsibleButton,!t&&N.tocCollapsibleButtonExpanded,n.className),children:(0,o.jsx)(C.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const T={tocCollapsible:"tocCollapsible_wXna",tocCollapsibleContent:"tocCollapsibleContent_vea0",tocCollapsibleExpanded:"tocCollapsibleExpanded_BbRn"};function k(e){let{toc:t,className:n,minHeadingLevel:s,maxHeadingLevel:a}=e;const{collapsed:i,toggleCollapsed:l}=(0,A.u)({initialState:!0});return(0,o.jsxs)("div",{className:(0,m.A)(T.tocCollapsible,!i&&T.tocCollapsibleExpanded,n),children:[(0,o.jsx)(L,{collapsed:i,onClick:l}),(0,o.jsx)(A.N,{lazy:!0,className:T.tocCollapsibleContent,collapsed:i,children:(0,o.jsx)(_.A,{toc:t,minHeadingLevel:s,maxHeadingLevel:a})})]})}const M={tocMobile:"tocMobile_Ojys"};function w(){const{toc:e,frontMatter:t}=c();return(0,o.jsx)(k,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,m.A)(p.G.docs.docTocMobile,M.tocMobile)})}var y=n(20535);function B(){const{toc:e,frontMatter:t}=c();return(0,o.jsx)(y.A,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:p.G.docs.docTocDesktop})}var I=n(87367),H=n(99473);function V(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return(0,o.jsxs)("div",{className:(0,m.A)(p.G.docs.docMarkdown,"markdown"),children:[n&&(0,o.jsx)("header",{children:(0,o.jsx)(I.A,{as:"h1",children:n})}),(0,o.jsx)(H.A,{children:t})]})}var G=n(83071),P=n(84571);const E={docItemContainer:"docItemContainer_tjFy",docItemCol:"docItemCol_Qr34"};function R(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,u.l)(),s=e.hide_table_of_contents,a=!s&&t.length>0;return{hidden:s,mobile:a?(0,o.jsx)(w,{}):void 0,desktop:!a||"desktop"!==n&&"ssr"!==n?void 0:(0,o.jsx)(B,{})}}(),{metadata:s}=c();return(0,o.jsxs)("div",{className:"row",children:[(0,o.jsxs)("div",{className:(0,m.A)("col",!n.hidden&&E.docItemCol),children:[(0,o.jsx)(P.A,{metadata:s}),(0,o.jsx)(x.A,{}),(0,o.jsxs)("div",{className:E.docItemContainer,children:[(0,o.jsxs)("article",{children:[(0,o.jsx)(G.A,{}),(0,o.jsx)(v.A,{}),n.mobile,(0,o.jsx)(V,{children:t}),(0,o.jsx)(f,{})]}),(0,o.jsx)(b,{})]})]}),n.desktop&&(0,o.jsx)("div",{className:"col col--3",children:n.desktop})]})}function F(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,o.jsx)(r,{content:e.content,children:(0,o.jsxs)(a.e3,{className:t,children:[(0,o.jsx)(d,{}),(0,o.jsx)(R,{children:(0,o.jsx)(n,{})})]})})}},1696:(e,t,n)=>{n.d(t,{A:()=>o});n(63696);var s=n(27963),a=n(6217),i=n(62540);function o(e){const{previous:t,next:n}=e;return(0,i.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,i.jsx)(a.A,{...t,subLabel:(0,i.jsx)(s.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,i.jsx)(a.A,{...n,subLabel:(0,i.jsx)(s.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},73698:(e,t,n)=>{n.d(t,{A:()=>r});n(63696);var s=n(12689),a=n(27963),i=n(97404),o=n(16658),l=n(62540);function r(e){let{className:t}=e;const n=(0,o.r)();return n.badge?(0,l.jsx)("span",{className:(0,s.A)(t,i.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(a.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}},99657:(e,t,n)=>{n.d(t,{A:()=>v});n(63696);var s=n(12689),a=n(14669),i=n(99985),o=n(27963),l=n(39294),r=n(97404),c=n(31599),d=n(16658),m=n(62540);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,m.jsx)(o.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,m.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,m.jsx)(o.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,m.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const t=u[e.versionMetadata.banner];return(0,m.jsx)(t,{...e})}function b(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,m.jsx)(o.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,m.jsx)("b",{children:(0,m.jsx)(i.A,{to:n,onClick:s,children:(0,m.jsx)(o.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function x(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:i}}=(0,a.A)(),{pluginId:o}=(0,l.vT)({failfast:!0}),{savePreferredVersionName:d}=(0,c.g1)(o),{latestDocSuggestion:u,latestVersionSuggestion:x}=(0,l.HW)(o),v=u??(p=x).docs.find((e=>e.id===p.mainDocId));var p;return(0,m.jsxs)("div",{className:(0,s.A)(t,r.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,m.jsx)("div",{children:(0,m.jsx)(h,{siteTitle:i,versionMetadata:n})}),(0,m.jsx)("div",{className:"margin-top--md",children:(0,m.jsx)(b,{versionLabel:x.label,to:v.path,onClick:()=>d(x.name)})})]})}function v(e){let{className:t}=e;const n=(0,d.r)();return n.banner?(0,m.jsx)(x,{className:t,versionMetadata:n}):null}},6217:(e,t,n)=>{n.d(t,{A:()=>o});n(63696);var s=n(12689),a=n(99985),i=n(62540);function o(e){const{permalink:t,title:n,subLabel:o,isNext:l}=e;return(0,i.jsxs)(a.A,{className:(0,s.A)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[o&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:o}),(0,i.jsx)("div",{className:"pagination-nav__label",children:n})]})}},20353:(e,t,n)=>{n.d(t,{A:()=>l});n(63696);var s=n(12689),a=n(99985);const i={tag:"tag_otG2",tagRegular:"tagRegular_s0E1",tagWithCount:"tagWithCount_PGyn"};var o=n(62540);function l(e){let{permalink:t,label:n,count:l,description:r}=e;return(0,o.jsxs)(a.A,{href:t,title:r,className:(0,s.A)(i.tag,l?i.tagWithCount:i.tagRegular),children:[n,l&&(0,o.jsx)("span",{children:l})]})}},63455:(e,t,n)=>{n.d(t,{A:()=>r});n(63696);var s=n(12689),a=n(27963),i=n(20353);const o={tags:"tags_Ow0B",tag:"tag_DFxh"};var l=n(62540);function r(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(a.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,s.A)(o.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,l.jsx)("li",{className:o.tag,children:(0,l.jsx)(i.A,{...e})},e.permalink)))})]})}}}]);