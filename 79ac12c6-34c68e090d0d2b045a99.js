(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"0a46":function(t,e,r){"use strict";r.d(e,"a",(function(){return M}));var o,n,i,a,c=r("wx14"),l=r("rePB"),s=r("wTIg"),b=r("q1tI"),u=r("39/b"),j=r.n(u),g=r("pW3x"),p=r.n(g),m=r("4brb"),d=r("IDcg"),f=r("WEdx"),O=r("wVUu"),h=r("McFA"),x=r("+IKJ"),y=r("qKvR");function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function w(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(Object(r),!0).forEach((function(e){Object(l.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var k=Object(s.a)("div",{target:"em9i7t20"})({width:"100%",height:"100%",backgroundColor:Object(x.c)(.5,h.j.text2),overflow:"auto",position:"fixed",top:0,left:0,zIndex:3,perspective:"1000px",transitionProperty:"opacity, visibility",transitionDuration:"150ms",transitionTimingFunction:"ease-in-out"},""),C=Object(s.a)("div",{target:"em9i7t21"})({marginBottom:24,borderRadius:4,boxShadow:O.a,backgroundColor:"white",overflow:"hidden",position:"absolute",transformOrigin:"25% 25%",transition:"transform 150ms ease-in-out",outline:"none"},""),P=Object(s.a)("h6",{target:"em9i7t22"})(h.k,{marginLeft:12,marginBottom:0,fontSize:13,fontWeight:600,color:h.j.text3},""),T=Object(s.a)("ul",{target:"em9i7t23"})({name:"12dbaiq",styles:"margin:0;margin-bottom:20px;"}),U=Object(s.a)("li",{target:"em9i7t24"})({name:"1covni",styles:"list-style:none;margin:2px;margin-left:3px;"}),D=Object(s.a)("a",{target:"em9i7t25"})({display:"block",height:"100%",padding:8,borderRadius:4,textDecoration:"none",backgroundColor:"transparent",transitionProperty:"color, background-color",transitionDuration:"150ms",transitionTimingFunction:"ease-in-out","@media (hover: hover)":{":hover":{backgroundColor:h.j.primaryLight,h4:{color:h.j.primary}}}},""),I=Object(s.a)("h4",{target:"em9i7t26"})({marginBottom:0,fontWeight:600,color:h.j.text1},""),R=Object(s.a)("nav",{target:"em9i7t27"})(((o={display:"flex",flexFlow:"row wrap",writingMode:"vertical-lr",margin:12,height:240,paddingTop:15})[h.i.md]={height:"auto",width:300},o),""),B=Object(s.a)("div",{target:"em9i7t28"})(((n={display:"block",width:220,writingMode:"horizontal-tb"})[h.i.md]={width:"100%"},n),""),S=(Object(s.a)("h4",{target:"em9i7t29"})({name:"159absb",styles:"margin-bottom:8px;font-weight:600;color:inherit;"}),Object(s.a)("p",{target:"em9i7t210"})({marginBottom:0,fontSize:14,lineHeight:1.5,color:h.j.text3,transition:"color 150ms ease-in-out"},""),Object(s.a)("nav",{target:"em9i7t211"})(((i={display:"flex",alignItems:"center",padding:"16px 24px",backgroundColor:h.j.background})[h.i.md]={display:"block"},i),"")),E=Object(s.a)("a",{target:"em9i7t212"})({color:h.j.text2,textDecoration:"none",":hover":{color:h.j.text3},":not(:last-child)":{marginRight:24}},""),F=Object(s.a)("div",{target:"em9i7t213"})(((a={display:"flex",marginLeft:"auto"})[h.i.md]={marginTop:8},a),""),z=Object(s.a)("a",{target:"em9i7t214"})({color:h.j.text2,":hover":{color:h.j.text3},":not(:last-child)":{marginRight:24},svg:w(w({},Object(x.b)(24)),{},{display:"block",fill:"currentColor"})},"");function M(t){var e=Object(b.useRef)(null),r=p()().width;j()("Escape",t.onClose),Object(b.useEffect)((function(){t.open&&setTimeout((function(){e.current.focus()}),150)}),[t.open]);var o=t.buttonRef.current,n=Object(b.useMemo)((function(){if(!o)return null;var t=o.getBoundingClientRect(),e=t.top,r=t.left;return{top:e+t.height+2,left:r}}),[o,r,t.open]);var i=Boolean(t.spectrumUrl||t.twitterUrl||t.youtubeUrl);return Object(y.jsx)(k,{onClick:function(e){e.target===e.currentTarget&&t.onClose()},style:{opacity:t.open?1:0,visibility:t.open?"visible":"hidden"}},Object(y.jsx)(C,{ref:e,tabIndex:-1,style:w(w({},n),{},{transform:!t.open&&"translate3d(0,-24px,-16px) rotate3d(1,0,0.1,8deg)"})},Object(y.jsx)(R,null,t.navCategories.map((function(t){var e=t[0],r=t[1];return Object(y.jsx)(B,{key:e},"undefined"!==e&&Object(y.jsx)(P,null,e),Object(y.jsx)(T,{key:e},r.map((function(t){return Object(y.jsx)(U,{key:t.url},Object(y.jsx)(D,{href:t.url,title:t.description},Object(y.jsx)(I,null,t.shortName||t.title)))}))))}))),(t.footerNavConfig||i)&&Object(y.jsx)(S,null,Object(y.jsx)(b.Fragment,null,t.footerNavConfig&&Object.entries(t.footerNavConfig).map((function(t){var e=t[0],r=t[1];return Object(y.jsx)(E,Object(c.a)({key:e},r),e)})),i&&Object(y.jsx)(F,null,t.spectrumUrl&&Object(y.jsx)(z,{href:t.spectrumUrl,title:"Spectrum",target:"_blank"},Object(y.jsx)(f.a,null)),t.twitterUrl&&Object(y.jsx)(z,{href:t.twitterUrl,title:"Twitter",target:"_blank"},Object(y.jsx)(m.IconTwitter,null)),t.youtubeUrl&&Object(y.jsx)(z,{href:t.youtubeUrl,title:"YouTube",target:"_blank"},Object(y.jsx)(d.IconYoutube,null)))))))}}}]);
//# sourceMappingURL=79ac12c6-34c68e090d0d2b045a99.js.map