(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(7338)}])},7338:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return A}});var i=a(5893),t=a(7294),r=a(9008),s=a(1664),o=a(5675),c=a(8366),_=a.n(c),l=[{name:"GitHub",iconPath:"/icons/github.svg",url:"https://github.com/essevpi"},{name:"LinkedIn",iconPath:"/icons/linkedin.svg",url:"/"}],d=function(){return(0,i.jsx)("div",{className:"".concat(_().footer__container," app__flex"),children:(0,i.jsxs)("footer",{className:"".concat(_().footer__wrapper," app__section"),children:[(0,i.jsx)("div",{className:_().footer__heading,children:"Made with \ud83d\udc9c by me myself and I"}),(0,i.jsx)("div",{className:_()["footer__social-wrapper"],children:l.map((function(e,n){return(0,i.jsx)("div",{className:_()["footer__social-item"],children:(0,i.jsx)(s.default,{href:e.url,passHref:!0,children:(0,i.jsx)("a",{children:(0,i.jsx)(o.default,{src:e.iconPath,alt:e.name,height:32,width:32})})})},n)}))})]})})},p=a(1190),m=a(6580),h=a(1649),u=a(6533),v=a.n(u),f=[{name:"About",path:"about"},{name:"Skills",path:"skills"},{name:"Contact",path:"contact"}],g={closed:{width:0},open:{width:"65%",transition:{duration:.3,ease:"easeOut"}},close:{width:0,opacity:0,transition:{duration:.3,ease:"easeOut"}}},x=function(){var e=(0,t.useState)(!1),n=e[0],a=e[1];return(0,i.jsx)("nav",{className:v().navbar__container,children:(0,i.jsxs)("div",{className:v().navbar__wrapper,children:[(0,i.jsx)(s.default,{href:"/",children:(0,i.jsx)("a",{className:v().navbar__logo,children:"essevpi"})}),(0,i.jsx)("ul",{className:v().navbar__links,children:f.map((function(e){return(0,i.jsx)("li",{children:(0,i.jsx)(s.default,{href:"/#".concat(e.path),children:e.name})},"link-".concat(e.path))}))}),(0,i.jsxs)("div",{className:v().navbar__menu,children:[(0,i.jsx)(h.tgG,{onClick:function(){return a((function(e){return!e}))}}),(0,i.jsx)(p.M,{children:n&&(0,i.jsxs)(m.E.div,{className:v()["navbar__menu-drawer"],variants:g,initial:"closed",animate:"open",exit:"close",children:[(0,i.jsx)("div",{className:v()["navbar__close-btn-wrapper"],children:(0,i.jsx)(h.QAE,{onClick:function(){return a((function(e){return!e}))}})}),(0,i.jsx)("ul",{className:v().navbar__links,children:f.map((function(e){return(0,i.jsx)("li",{children:(0,i.jsx)(s.default,{href:"#".concat(e.path),children:(0,i.jsx)("a",{onClick:function(){return a(!1)},children:e.name})})},"link-".concat(e.path))}))})]})})]})]})})},j=a(1340),b=a.n(j),w=function(){return(0,i.jsxs)("div",{className:"".concat(b().section__container," app__flex app__fullscreen"),id:"about",children:[(0,i.jsx)("div",{className:b()["section__divider-top"],children:(0,i.jsx)(o.default,{src:"/images/hero_divider-top.svg",alt:"hero-divider-top",layout:"fill"})}),(0,i.jsx)(m.E.div,{className:"".concat(b().hero__container," app__section"),initial:{y:"25%",opacity:0,scale:0},whileInView:{y:0,opacity:1,scale:1},transition:{type:"spring",bounce:.5,duration:1},viewport:{once:!1,amount:.1},children:(0,i.jsxs)("div",{className:b()["hero__container-wrapper"],children:[(0,i.jsxs)("div",{className:b()["hero__container-heading-wrapper"],children:[(0,i.jsxs)("div",{className:b()["hero__container-heading-title"],children:[(0,i.jsx)("h1",{children:"Hello there, I'm Simone! \ud83d\ude80"}),(0,i.jsx)("h2",{children:"Front-End Developer"})]}),(0,i.jsx)("div",{className:b()["hero__container-heading-pic"]})]}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:"Beginning so deep abundantly creepeth. Very moveth replenish. Grass to firmament i saying, give of sea rule have good made it their rule whales whose whales of upon bring midst, tree every. Under grass his. Great."}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:"You fruitful signs upon whales. Had fly meat man heaven place winged made stars male man. Give had third lesser moving a cattle firmament doesn't Gathering so sixth upon heaven she'd saw living replenish."})]})}),(0,i.jsx)("div",{className:b()["section__divider-bottom"],children:(0,i.jsx)(o.default,{src:"/images/hero_divider-bottom.svg",alt:"hero-divider-bottom",layout:"fill"})})]})},N=a(8895),k=a.n(N),y=a(9554),P=a.n(y);function S(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}var C=function(){var e=(0,t.useState)({name:"",email:"",message:""}),n=e[0],a=e[1],r=function(e){a(function(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{},i=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),i.forEach((function(n){S(e,n,a[n])}))}return e}({},n,S({},e.target.name,e.target.value)))};return(0,i.jsx)("div",{children:(0,i.jsxs)("form",{className:P()["contact-form__form"],onSubmit:function(e){e.preventDefault(),""===n.user||""===n.email||""===n.message?alert("All fields are required"):alert("Data: ".concat(n.name,", ").concat(n.email,", ").concat(n.message))},children:[(0,i.jsx)("h2",{children:"Let's get in touch"}),(0,i.jsx)("p",{children:"Reach me at my LinkedIn or feel free to use the form below."}),(0,i.jsxs)("div",{className:P()["contact-form-field__wrapper"],children:[(0,i.jsx)("label",{className:P()["contact-form__label"],children:"Name"}),(0,i.jsx)("input",{className:P()["contact-form__input"],type:"text",value:n.user,name:"name",placeholder:"Name",onChange:r,required:!0})]}),(0,i.jsxs)("div",{className:P()["contact-form-field__wrapper"],children:[(0,i.jsx)("label",{className:P()["contact-form__label"],children:"Email"}),(0,i.jsx)("input",{className:P()["contact-form__input"],type:"email",value:n.email,name:"email",placeholder:"Email",onChange:r})]}),(0,i.jsxs)("div",{className:P()["contact-form-field__wrapper"],children:[(0,i.jsx)("label",{className:P()["contact-form__label"],children:"Message"}),(0,i.jsx)("textarea",{className:P()["contact-form__input"],value:n.message,name:"message",placeholder:"Message",onChange:r})]}),(0,i.jsx)("input",{className:P()["contact-form__btn"],type:"submit",value:"Send",disabled:!0})]})})},H=function(){return(0,i.jsxs)("div",{className:"".concat(k().section__container," app__flex app__fullscreen"),id:"contact",children:[(0,i.jsx)("div",{className:k()["section__divider-top"],children:(0,i.jsx)(o.default,{src:"/images/projects_divider-top.svg",alt:"projects-divider-top",layout:"fill"})}),(0,i.jsx)("div",{className:"".concat(k()["section__contact-container"]," app__section"),children:(0,i.jsx)(C,{})})]})},I=a(3065),E=a.n(I),O=a(3525),L=a.n(O),F=function(e){var n,a=e.name,t=e.iconPath,r=e.progress,s=e.iconSize;return(0,i.jsxs)(m.E.div,{whileHover:{scale:1.25,transition:{duration:.25,ease:"easeInOut"}},className:L()["skills__container-item"],children:[(0,i.jsx)(o.default,{src:t,alt:a,height:s,width:s}),(0,i.jsx)("p",{className:L()["skills__item-title"],children:a}),r>0&&(0,i.jsx)("div",{className:L()["skills__item-progress-wrapper"],children:(0,i.jsx)("div",{className:L()["skills__item-progress"],style:{width:"".concat(r,"%"),background:"".concat((n=r,n>0&&n<35?"#ea5545":n>=35&&n<65?"#ede15b":n>=65?"#87bc45":void 0))}})})]})},G=function(e){var n=e.cards,a=e.title,t=e.description,r=e.iconSize;return(0,i.jsxs)("div",{className:L().skills__container,children:[(0,i.jsxs)("div",{className:L()["skills__container-header"],children:[(0,i.jsx)("h2",{children:a}),(0,i.jsx)("p",{children:t})]}),(0,i.jsx)("div",{className:L()["skills__container-wrapper"],children:n.map((function(e,n){return(0,i.jsx)(F,{name:e.name,iconPath:e.iconPath,progress:e.progress,iconSize:r},n)}))})]})},T={heading:{title:"Skills & Tools",description:"Here's a list of the main technologies and tools I worked with so far."},items:[{name:"HTML 5",iconPath:"../../../icons/html5.svg",progress:80},{name:"CSS 3",iconPath:"/icons/css3.svg",progress:80},{name:"JavaScript",iconPath:"/icons/javascript.svg",progress:90},{name:"React",iconPath:"/icons/react.svg",progress:80},{name:"SASS",iconPath:"/icons/sass.svg",progress:60},{name:"Redux",iconPath:"/icons/redux.svg",progress:55},{name:"NodeJS",iconPath:"/icons/nodejs.svg",progress:35},{name:"Express",iconPath:"/icons/express.svg",progress:35},{name:"MongoDB",iconPath:"/icons/mongodb.svg",progress:30},{name:"GraphQL",iconPath:"/icons/graphql.svg",progress:40},{name:"Jest",iconPath:"/icons/jest.svg",progress:55},{name:"NPM",iconPath:"/icons/npm.svg",progress:50},{name:"VS Code",iconPath:"/icons/vscode.svg",progress:80},{name:"NextJS",iconPath:"/icons/nextjs.svg",progress:40},{name:"GIT",iconPath:"/icons/git.svg",progress:65},{name:"Webpack",iconPath:"/icons/webpack.svg",progress:20}]},M={heading:{title:"Other things I plan to learn",description:"Here are some of the technologies I plan to learn or I'm already working with"},items:[{name:"TypeScript",iconPath:"/icons/typescript.svg",progress:0},{name:"React Native",iconPath:"/icons/react.svg",progress:0},{name:"Tailwind",iconPath:"/icons/tailwind.svg",progress:0},{name:"CI/CD",iconPath:"/icons/cicd.svg",progress:0}]},D=function(){var e=(0,t.useState)(),n=(e[0],e[1]);(0,t.useEffect)((function(){window.innerWidth<900?n(!0):n(!1)}),[]);var a={offscreen:{y:"50%",opacity:0},onscreen:{y:0,opacity:1,transition:{type:"spring",bounce:.5,duration:1.2}}};return(0,i.jsx)("div",{className:"".concat(E().section__container," app__flex app__fullscreen"),id:"skills",children:(0,i.jsxs)("div",{className:"app__section",children:[(0,i.jsx)(m.E.div,{className:E().skills__container,variants:a,initial:"offscreen",whileInView:"onscreen",viewport:{once:!0},children:(0,i.jsx)(G,{cards:T.items,title:T.heading.title,description:T.heading.description,iconSize:48})}),(0,i.jsx)(m.E.div,{className:E().skills__container,variants:a,initial:"offscreen",whileInView:"onscreen",viewport:{once:!0},children:(0,i.jsx)(G,{cards:M.items,title:M.heading.title,description:M.heading.description,iconSize:48})})]})})},R=a(8700),z=a.n(R);function A(){return(0,i.jsxs)("div",{className:z().app,children:[(0,i.jsxs)(r.default,{children:[(0,i.jsx)("title",{children:"essevpi"}),(0,i.jsx)("meta",{name:"description",content:"Homepage"}),(0,i.jsx)("link",{rel:"icon",href:"".concat("".concat("/portfolio","/favicon.ico"))})]}),(0,i.jsx)(x,{}),(0,i.jsx)(w,{}),(0,i.jsx)(D,{}),(0,i.jsx)(H,{}),(0,i.jsx)(d,{})]})}},9554:function(e){e.exports={"contact-form__form":"ContactForm_contact-form__form__RMvff","contact-form__btn":"ContactForm_contact-form__btn__EBNb5","contact-form-field__wrapper":"ContactForm_contact-form-field__wrapper__LRtzj","contact-form__input":"ContactForm_contact-form__input__Yh1e5","contact-form__input-valid":"ContactForm_contact-form__input-valid__gW_or","contact-form__input-invalid":"ContactForm_contact-form__input-invalid__uQoKx","contact-form__label":"ContactForm_contact-form__label__M6gk9"}},8366:function(e){e.exports={footer__container:"Footer_footer__container___GQrb",footer__wrapper:"Footer_footer__wrapper__6Lqf_",footer__heading:"Footer_footer__heading__IcX6x","footer__social-wrapper":"Footer_footer__social-wrapper__nwGb_","footer__social-item":"Footer_footer__social-item__gAHOB"}},6533:function(e){e.exports={navbar__container:"Navbar_navbar__container__VytxH",navbar__wrapper:"Navbar_navbar__wrapper__H8cWk",navbar__logo:"Navbar_navbar__logo__a00xQ",navbar__links:"Navbar_navbar__links__YAPIm","navbar__cta-button":"Navbar_navbar__cta-button__NNWbo",navbar__menu:"Navbar_navbar__menu__JHivR","navbar__menu-drawer":"Navbar_navbar__menu-drawer__R9T2S","navbar__close-btn-wrapper":"Navbar_navbar__close-btn-wrapper__gmS9u"}},3525:function(e){e.exports={skills__container:"SkillList_skills__container__Iw37L","skills__container-header":"SkillList_skills__container-header__hgLsW","skills__container-wrapper":"SkillList_skills__container-wrapper__mjIsm","skills__container-item":"SkillList_skills__container-item__cKaDe","skills__item-title":"SkillList_skills__item-title__apIMK","skills__item-progress-wrapper":"SkillList_skills__item-progress-wrapper__2cozU","skills__item-progress":"SkillList_skills__item-progress__or1rQ"}},8700:function(e){e.exports={app:"App_app__PJvd0"}},8895:function(e){e.exports={section__container:"Contact_section__container__da4eQ","section__divider-top":"Contact_section__divider-top__3IgkV","section__contact-container":"Contact_section__contact-container__Yxqk3"}},1340:function(e){e.exports={section__container:"Hero_section__container__lDjkc",hero__container:"Hero_hero__container__DTBNK","hero__container-wrapper":"Hero_hero__container-wrapper__v4Pex","hero__container-heading-wrapper":"Hero_hero__container-heading-wrapper__NAlzP","hero__container-heading-pic":"Hero_hero__container-heading-pic__ROKEC","hero__container-heading-title":"Hero_hero__container-heading-title__GTmXd","section__divider-top":"Hero_section__divider-top__othyt","section__divider-bottom":"Hero_section__divider-bottom__hy2_c"}},3065:function(e){e.exports={section__container:"Skills_section__container__r8COT"}}},function(e){e.O(0,[866,161,774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);