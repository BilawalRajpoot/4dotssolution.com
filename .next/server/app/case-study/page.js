(()=>{var e={};e.id=175,e.ids=[175],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},11949:(e,s,a)=>{"use strict";a.r(s),a.d(s,{GlobalError:()=>r.a,__next_app__:()=>j,originalPathname:()=>m,pages:()=>o,routeModule:()=>x,tree:()=>d});var i=a(50482),t=a(69108),l=a(62563),r=a.n(l),n=a(68300),c={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>n[e]);a.d(s,c);let d=["",{children:["case-study",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,8595)),"D:\\webfolio-nextjs\\app\\case-study\\page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,93384)),"D:\\webfolio-nextjs\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],o=["D:\\webfolio-nextjs\\app\\case-study\\page.js"],m="/case-study/page",j={require:a,loadChunk:()=>Promise.resolve()},x=new i.AppPageRouteModule({definition:{kind:t.x.APP_PAGE,page:"/case-study/page",pathname:"/case-study",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},13896:(e,s,a)=>{Promise.resolve().then(a.bind(a,32098)),Promise.resolve().then(a.bind(a,78624)),Promise.resolve().then(a.bind(a,3786)),Promise.resolve().then(a.bind(a,19955)),Promise.resolve().then(a.bind(a,34026)),Promise.resolve().then(a.bind(a,62873)),Promise.resolve().then(a.t.bind(a,31900,23)),Promise.resolve().then(a.t.bind(a,61476,23)),Promise.resolve().then(a.t.bind(a,12704,23)),Promise.resolve().then(a.bind(a,9089)),Promise.resolve().then(a.bind(a,58745)),Promise.resolve().then(a.bind(a,67559))},1240:(e,s,a)=>{"use strict";function i(){let e=document.querySelectorAll("[data-background]");e.length>0&&e.forEach(e=>{let s=e.dataset.background;e.style.backgroundImage=`url('${s}')`})}a.d(s,{Z:()=>i})},34026:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>n});var i=a(95344),t=a(3729),l=a(30885),r=a(1240);let n=function(){return(0,t.useLayoutEffect)(()=>{let e=l.p8.timeline();return e.fromTo(".header",{y:200},{y:0},"+=2.5"),e.fromTo(".header .container",{opacity:0,translateY:40},{opacity:1,translateY:0},"-=0"),()=>e.kill()},[]),(0,t.useEffect)(()=>{(0,r.Z)()},[]),i.jsx("div",{className:"page-header bg-img section-padding valign","data-background":"/assets/imgs/background/bg4.jpg","data-overlay-dark":"8",children:i.jsx("div",{className:"container pt-80",children:i.jsx("div",{className:"row",children:i.jsx("div",{className:"col-12",children:i.jsx("div",{className:"text-center",children:(0,i.jsxs)("h1",{className:"text-u ls1 fz-80",children:["Case  ",i.jsx("span",{className:"fw-200",children:"Study"})]})})})})})})}},62873:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>r});var i=a(95344);let t=()=>{let e;let s=document.querySelectorAll(".gallery"),a=document.querySelector(".filtering"),i=document.querySelectorAll(".filtering");if(s.length>=1&&s.forEach(s=>{e=new Isotope(s,{itemSelector:".items"})}),a){a.addEventListener("click",function(s){if(matchesSelector(s.target,"span")){var a=s.target.getAttribute("data-filter");e.arrange({filter:a})}});let s=e=>{e.addEventListener("click",s=>{matchesSelector(s.target,"span")&&(e.querySelector(".active").classList.remove("active"),s.target.classList.add("active"))})};for(var t=0,l=i.length;t<l;t++)s(i[t])}};var l=a(3729);let r=function(){return(0,l.useEffect)(()=>{t()},[]),(0,i.jsxs)("section",{className:"work-grid section-padding pb-0",children:[i.jsx("div",{className:"container",children:(0,i.jsxs)("div",{className:"row mb-80",children:[i.jsx("div",{className:"col-lg-4",children:(0,i.jsxs)("div",{className:"sec-head",children:[i.jsx("h6",{className:"sub-title main-color mb-10",children:"DISCOVER OUR CASES"}),i.jsx("h3",{children:"Latest Projects"})]})}),i.jsx("div",{className:"filtering col-lg-8 d-flex justify-content-end align-items-end",children:i.jsx("div",{children:(0,i.jsxs)("div",{className:"filter",children:[i.jsx("span",{"data-filter":"*",className:"active","data-count":"08",children:"All"}),i.jsx("span",{"data-filter":".design","data-count":"03",children:"Design"}),i.jsx("span",{"data-filter":".development","data-count":"02",children:"Development"}),i.jsx("span",{"data-filter":".marketing","data-count":"03",children:"Marketing"})]})})})]})}),i.jsx("div",{className:"container",children:(0,i.jsxs)("div",{className:"gallery row md-marg",children:[i.jsx("div",{className:"col-lg-4 col-md-6 items design",children:(0,i.jsxs)("div",{className:"item mb-50",children:[i.jsx("div",{className:"img",children:i.jsx("img",{src:"/assets/imgs/works/2/1.jpg",alt:""})}),(0,i.jsxs)("div",{className:"cont d-flex align-items-end mt-30",children:[(0,i.jsxs)("div",{children:[i.jsx("span",{className:"p-color mb-5 sub-title",children:"Web Design"}),i.jsx("h6",{children:"Figma Digital Agency"})]}),i.jsx("div",{className:"ml-auto",children:i.jsx("a",{href:"/project-details",children:i.jsx("span",{className:"ti-arrow-top-right"})})})]})]})}),i.jsx("div",{className:"col-lg-4 col-md-6 items marketing",children:(0,i.jsxs)("div",{className:"item mb-50",children:[i.jsx("div",{className:"img",children:i.jsx("img",{src:"/assets/imgs/works/2/2.jpg",alt:""})}),(0,i.jsxs)("div",{className:"cont d-flex align-items-end mt-30",children:[(0,i.jsxs)("div",{children:[i.jsx("span",{className:"p-color mb-5 sub-title",children:"Web Design"}),i.jsx("h6",{children:"Figma Digital Agency"})]}),i.jsx("div",{className:"ml-auto",children:i.jsx("a",{href:"/project-details",children:i.jsx("span",{className:"ti-arrow-top-right"})})})]})]})}),i.jsx("div",{className:"col-lg-4 col-md-6 items design",children:(0,i.jsxs)("div",{className:"item mb-50",children:[i.jsx("div",{className:"img",children:i.jsx("img",{src:"/assets/imgs/works/2/3.jpg",alt:""})}),(0,i.jsxs)("div",{className:"cont d-flex align-items-end mt-30",children:[(0,i.jsxs)("div",{children:[i.jsx("span",{className:"p-color mb-5 sub-title",children:"Web Design"}),i.jsx("h6",{children:"Figma Digital Agency"})]}),i.jsx("div",{className:"ml-auto",children:i.jsx("a",{href:"/project-details",children:i.jsx("span",{className:"ti-arrow-top-right"})})})]})]})}),i.jsx("div",{className:"col-lg-4 col-md-6 items development",children:(0,i.jsxs)("div",{className:"item mb-50",children:[i.jsx("div",{className:"img",children:i.jsx("img",{src:"/assets/imgs/works/2/4.jpg",alt:""})}),(0,i.jsxs)("div",{className:"cont d-flex align-items-end mt-30",children:[(0,i.jsxs)("div",{children:[i.jsx("span",{className:"p-color mb-5 sub-title",children:"Web Design"}),i.jsx("h6",{children:"Figma Digital Agency"})]}),i.jsx("div",{className:"ml-auto",children:i.jsx("a",{href:"/project-details",children:i.jsx("span",{className:"ti-arrow-top-right"})})})]})]})}),i.jsx("div",{className:"col-lg-4 col-md-6 items design",children:(0,i.jsxs)("div",{className:"item mb-50",children:[i.jsx("div",{className:"img",children:i.jsx("img",{src:"/assets/imgs/works/2/5.jpg",alt:""})}),(0,i.jsxs)("div",{className:"cont d-flex align-items-end mt-30",children:[(0,i.jsxs)("div",{children:[i.jsx("span",{className:"p-color mb-5 sub-title",children:"Web Design"}),i.jsx("h6",{children:"Figma Digital Agency"})]}),i.jsx("div",{className:"ml-auto",children:i.jsx("a",{href:"/project-details",children:i.jsx("span",{className:"ti-arrow-top-right"})})})]})]})}),i.jsx("div",{className:"col-lg-4 col-md-6 items marketing",children:(0,i.jsxs)("div",{className:"item mb-50",children:[i.jsx("div",{className:"img",children:i.jsx("img",{src:"/assets/imgs/works/2/6.jpg",alt:""})}),(0,i.jsxs)("div",{className:"cont d-flex align-items-end mt-30",children:[(0,i.jsxs)("div",{children:[i.jsx("span",{className:"p-color mb-5 sub-title",children:"Web Design"}),i.jsx("h6",{children:"Figma Digital Agency"})]}),i.jsx("div",{className:"ml-auto",children:i.jsx("a",{href:"/project-details",children:i.jsx("span",{className:"ti-arrow-top-right"})})})]})]})}),i.jsx("div",{className:"col-lg-4 col-md-6 items marketing",children:(0,i.jsxs)("div",{className:"item mb-50",children:[i.jsx("div",{className:"img",children:i.jsx("img",{src:"/assets/imgs/works/2/7.jpg",alt:""})}),(0,i.jsxs)("div",{className:"cont d-flex align-items-end mt-30",children:[(0,i.jsxs)("div",{children:[i.jsx("span",{className:"p-color mb-5 sub-title",children:"Web Design"}),i.jsx("h6",{children:"Figma Digital Agency"})]}),i.jsx("div",{className:"ml-auto",children:i.jsx("a",{href:"/project-details",children:i.jsx("span",{className:"ti-arrow-top-right"})})})]})]})}),i.jsx("div",{className:"col-lg-4 col-md-6 items development",children:(0,i.jsxs)("div",{className:"item mb-50",children:[i.jsx("div",{className:"img",children:i.jsx("img",{src:"/assets/imgs/works/2/8.jpg",alt:""})}),(0,i.jsxs)("div",{className:"cont d-flex align-items-end mt-30",children:[(0,i.jsxs)("div",{children:[i.jsx("span",{className:"p-color mb-5 sub-title",children:"Web Design"}),i.jsx("h6",{children:"Figma Digital Agency"})]}),i.jsx("div",{className:"ml-auto",children:i.jsx("a",{href:"/project-details",children:i.jsx("span",{className:"ti-arrow-top-right"})})})]})]})}),i.jsx("div",{className:"col-lg-4 col-md-6 items development",children:(0,i.jsxs)("div",{className:"item mb-50",children:[i.jsx("div",{className:"img",children:i.jsx("img",{src:"/assets/imgs/works/2/9.jpg",alt:""})}),(0,i.jsxs)("div",{className:"cont d-flex align-items-end mt-30",children:[(0,i.jsxs)("div",{children:[i.jsx("span",{className:"p-color mb-5 sub-title",children:"Web Design"}),i.jsx("h6",{children:"Figma Digital Agency"})]}),i.jsx("div",{className:"ml-auto",children:i.jsx("a",{href:"/project-details",children:i.jsx("span",{className:"ti-arrow-top-right"})})})]})]})})]})})]})}},8595:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>y,metadata:()=>b});var i=a(25036),t=a(255),l=a(62376),r=a(27415),n=a(71736);a(4808);var c=a(39495),d=a(38330),o=a(20156),m=a(95411),j=a(86843);let x=(0,j.createProxy)(String.raw`D:\webfolio-nextjs\components\p-grid\Header.jsx`),{__esModule:h,$$typeof:g}=x,p=x.default,v=(0,j.createProxy)(String.raw`D:\webfolio-nextjs\components\p-grid\Portfolio.jsx`),{__esModule:u,$$typeof:f}=v,N=v.default,b={title:"4DotsSolutions",icons:{icon:"/assets/imgs/favicon.ico",shortcut:"/assets/imgs/favicon.ico",other:(0,t.Z)(["/assets/css/plugins.css","/assets/css/style.css","https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap","https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap"])}};function y(){return(0,i.jsxs)("body",{children:[i.jsx(n.ZP,{}),i.jsx(r.ZP,{}),i.jsx(l.Z,{}),i.jsx(o.ZP,{darkTheme:!0}),i.jsx("div",{id:"smooth-wrapper",children:(0,i.jsxs)("div",{id:"smooth-content",children:[(0,i.jsxs)("main",{className:"main-bg o-hidden",children:[i.jsx(p,{}),i.jsx(N,{}),i.jsx(d.Z,{})]}),i.jsx(c.Z,{})]})}),i.jsx(m.default,{src:"/assets/js/ScrollTrigger.min.js",strategy:"beforeInteractive"}),i.jsx(m.default,{src:"/assets/js/ScrollSmoother.min.js",strategy:"beforeInteractive"}),i.jsx(m.default,{strategy:"beforeInteractive",src:"/assets/js/plugins.js"}),i.jsx(m.default,{strategy:"beforeInteractive",src:"/assets/js/TweenMax.min.js"}),i.jsx(m.default,{strategy:"beforeInteractive",src:"/assets/js/charming.min.js"}),i.jsx(m.default,{strategy:"beforeInteractive",src:"/assets/js/countdown.js"}),i.jsx(m.default,{strategy:"beforeInteractive",src:"/assets/js/gsap.min.js"}),i.jsx(m.default,{strategy:"beforeInteractive",src:"/assets/js/splitting.min.js"}),i.jsx(m.default,{strategy:"beforeInteractive",src:"/assets/js/isotope.pkgd.min.js"}),i.jsx(m.default,{strategy:"beforeInteractive",src:"/assets/js/imgReveal/imagesloaded.pkgd.min.js"}),i.jsx(m.default,{src:"/assets/js/scripts.js"})]})}},38330:(e,s,a)=>{"use strict";a.d(s,{Z:()=>l});var i=a(25036),t=a(16274);a(40002);let l=function(){let e=Array(6).fill(["Get In Touch"]).flat(),s=Array(6).fill(["Contact Us"]).flat();return(0,i.jsxs)("section",{className:"call-marq section-padding o-hidden",children:[i.jsx("div",{className:"main-marq lrg sub-bg pt-20 pb-20",children:(0,i.jsxs)("div",{className:"slide-har st1",children:[(0,i.jsxs)("div",{className:"box",children:[e.map((e,s)=>i.jsx("div",{className:"item",children:(0,i.jsxs)("h4",{className:"d-flex align-items-center",children:[i.jsx("span",{children:e}),i.jsx("span",{className:"icon-img-50 ml-40",children:i.jsx("img",{src:"/assets/imgs/star.png",alt:""})})]})},s)),e.map((e,s)=>i.jsx("div",{className:"item",children:(0,i.jsxs)("h4",{className:"d-flex align-items-center",children:[i.jsx("span",{children:e}),i.jsx("span",{className:"icon-img-50 ml-40",children:i.jsx("img",{src:"/assets/imgs/star.png",alt:""})})]})},s))]}),i.jsx("a",{href:"/page-contact",className:"overlay-link"})]})}),i.jsx("div",{className:"main-marq bord-item",children:(0,i.jsxs)("div",{className:"slide-har st2",children:[i.jsx("div",{className:"box",children:s.map((e,s)=>i.jsx("div",{className:"item",children:i.jsx("h4",{className:"d-flex align-items-center",children:i.jsx("span",{children:e})})},s))}),i.jsx("div",{className:"box",children:s.map((e,s)=>i.jsx("div",{className:"item",children:i.jsx("h4",{className:"d-flex align-items-center",children:i.jsx("span",{children:e})})},s))}),i.jsx(t.default,{href:"/page-contact",className:"overlay-link"})]})})]})}}};var s=require("../../webpack-runtime.js");s.C(e);var a=e=>s(s.s=e),i=s.X(0,[1638,7643,1609,6506,352,885,6309,942],()=>a(11949));module.exports=i})();