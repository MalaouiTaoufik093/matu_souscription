(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[16,40],{526:function(e,t,a){"use strict";var c=a(5),n=a(3),r=a(0),l=a(6),o=a.n(l),s=a(35),i=a(44),d=function(e,t){var a={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(a[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(c=Object.getOwnPropertySymbols(e);n<c.length;n++)t.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(e,c[n])&&(a[c[n]]=e[c[n]])}return a},b=function(e){var t=e.prefixCls,a=e.className,l=e.hoverable,s=void 0===l||l,b=d(e,["prefixCls","className","hoverable"]);return r.createElement(i.a,null,(function(e){var l=(0,e.getPrefixCls)("card",t),i=o()("".concat(l,"-grid"),a,Object(c.a)({},"".concat(l,"-grid-hoverable"),s));return r.createElement("div",Object(n.a)({},b,{className:i}))}))},m=function(e,t){var a={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(a[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(c=Object.getOwnPropertySymbols(e);n<c.length;n++)t.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(e,c[n])&&(a[c[n]]=e[c[n]])}return a},j=function(e){return r.createElement(i.a,null,(function(t){var a=t.getPrefixCls,c=e.prefixCls,l=e.className,s=e.avatar,i=e.title,d=e.description,b=m(e,["prefixCls","className","avatar","title","description"]),j=a("card",c),h=o()("".concat(j,"-meta"),l),p=s?r.createElement("div",{className:"".concat(j,"-meta-avatar")},s):null,u=i?r.createElement("div",{className:"".concat(j,"-meta-title")},i):null,O=d?r.createElement("div",{className:"".concat(j,"-meta-description")},d):null,x=u||O?r.createElement("div",{className:"".concat(j,"-meta-detail")},u,O):null;return r.createElement("div",Object(n.a)({},b,{className:h}),p,x)}))},h=a(524),p=a(519),u=a(520),O=a(52),x=function(e,t){var a={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(a[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(c=Object.getOwnPropertySymbols(e);n<c.length;n++)t.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(e,c[n])&&(a[c[n]]=e[c[n]])}return a};var f=function(e){var t,a,l,d=r.useContext(i.b),m=d.getPrefixCls,j=d.direction,f=r.useContext(O.b),g=e.prefixCls,v=e.className,y=e.extra,E=e.headStyle,C=void 0===E?{}:E,N=e.bodyStyle,w=void 0===N?{}:N,F=e.title,S=e.loading,P=e.bordered,k=void 0===P||P,z=e.size,A=e.type,D=e.cover,B=e.actions,T=e.tabList,W=e.children,L=e.activeTabKey,M=e.defaultActiveTabKey,H=e.tabBarExtraContent,R=e.hoverable,K=e.tabProps,I=void 0===K?{}:K,$=x(e,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),V=m("card",g),J=0===w.padding||"0px"===w.padding?{padding:24}:void 0,G=r.createElement("div",{className:"".concat(V,"-loading-block")}),U=r.createElement("div",{className:"".concat(V,"-loading-content"),style:J},r.createElement(p.a,{gutter:8},r.createElement(u.a,{span:22},G)),r.createElement(p.a,{gutter:8},r.createElement(u.a,{span:8},G),r.createElement(u.a,{span:15},G)),r.createElement(p.a,{gutter:8},r.createElement(u.a,{span:6},G),r.createElement(u.a,{span:18},G)),r.createElement(p.a,{gutter:8},r.createElement(u.a,{span:13},G),r.createElement(u.a,{span:9},G)),r.createElement(p.a,{gutter:8},r.createElement(u.a,{span:4},G),r.createElement(u.a,{span:3},G),r.createElement(u.a,{span:16},G))),q=void 0!==L,Q=Object(n.a)(Object(n.a)({},I),(t={},Object(c.a)(t,q?"activeKey":"defaultActiveKey",q?L:M),Object(c.a)(t,"tabBarExtraContent",H),t)),X=T&&T.length?r.createElement(h.a,Object(n.a)({size:"large"},Q,{className:"".concat(V,"-head-tabs"),onChange:function(t){var a;null===(a=e.onTabChange)||void 0===a||a.call(e,t)}}),T.map((function(e){return r.createElement(h.a.TabPane,{tab:e.tab,disabled:e.disabled,key:e.key})}))):null;(F||y||X)&&(l=r.createElement("div",{className:"".concat(V,"-head"),style:C},r.createElement("div",{className:"".concat(V,"-head-wrapper")},F&&r.createElement("div",{className:"".concat(V,"-head-title")},F),y&&r.createElement("div",{className:"".concat(V,"-extra")},y)),X));var Y=D?r.createElement("div",{className:"".concat(V,"-cover")},D):null,Z=r.createElement("div",{className:"".concat(V,"-body"),style:w},S?U:W),_=B&&B.length?r.createElement("ul",{className:"".concat(V,"-actions")},function(e){return e.map((function(t,a){return r.createElement("li",{style:{width:"".concat(100/e.length,"%")},key:"action-".concat(a)},r.createElement("span",null,t))}))}(B)):null,ee=Object(s.a)($,["onTabChange"]),te=z||f,ae=o()(V,(a={},Object(c.a)(a,"".concat(V,"-loading"),S),Object(c.a)(a,"".concat(V,"-bordered"),k),Object(c.a)(a,"".concat(V,"-hoverable"),R),Object(c.a)(a,"".concat(V,"-contain-grid"),function(){var t;return r.Children.forEach(e.children,(function(e){e&&e.type&&e.type===b&&(t=!0)})),t}()),Object(c.a)(a,"".concat(V,"-contain-tabs"),T&&T.length),Object(c.a)(a,"".concat(V,"-").concat(te),te),Object(c.a)(a,"".concat(V,"-type-").concat(A),!!A),Object(c.a)(a,"".concat(V,"-rtl"),"rtl"===j),a),v);return r.createElement("div",Object(n.a)({},ee,{className:ae}),l,Y,Z,_)};f.Grid=b,f.Meta=j;t.a=f},528:function(e,t,a){"use strict";a.r(t);a(0);var c=a(1);t.default=({name:e,desc:t})=>Object(c.jsxs)("div",{className:"mb-3",children:[Object(c.jsxs)("span",{className:"font-weight-bold text-dark",children:[e,":"]}),Object(c.jsxs)("span",{className:"text-gray-light",children:[" ",t]})]})},536:function(e,t,a){"use strict";t.a={'code[class*="language-"]':{color:"#c5c8c6",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#c5c8c6",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em",background:"#1d1f21"},':not(pre) > code[class*="language-"]':{background:"#1d1f21",padding:".1em",borderRadius:".3em"},comment:{color:"#7C7C7C"},prolog:{color:"#7C7C7C"},doctype:{color:"#7C7C7C"},cdata:{color:"#7C7C7C"},punctuation:{color:"#c5c8c6"},".namespace":{Opacity:".7"},property:{color:"#96CBFE"},keyword:{color:"#96CBFE"},tag:{color:"#96CBFE"},"class-name":{color:"#FFFFB6",textDecoration:"underline"},boolean:{color:"#99CC99"},constant:{color:"#99CC99"},symbol:{color:"#f92672"},deleted:{color:"#f92672"},number:{color:"#FF73FD"},selector:{color:"#A8FF60"},"attr-name":{color:"#A8FF60"},string:{color:"#A8FF60"},char:{color:"#A8FF60"},builtin:{color:"#A8FF60"},inserted:{color:"#A8FF60"},variable:{color:"#C6C5FE"},operator:{color:"#EDEDED"},entity:{color:"#FFFFB6",cursor:"help"},url:{color:"#96CBFE"},".language-css .token.string":{color:"#87C38A"},".style .token.string":{color:"#87C38A"},atrule:{color:"#F9EE98"},"attr-value":{color:"#F9EE98"},function:{color:"#DAD085"},regex:{color:"#E9C062"},important:{color:"#fd971f",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}}},623:function(e,t,a){"use strict";var c=a(2),n=a(0),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M868 545.5L536.1 163a31.96 31.96 0 00-48.3 0L156 545.5a7.97 7.97 0 006 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"}}]},name:"arrow-up",theme:"outlined"},l=a(11),o=function(e,t){return n.createElement(l.a,Object(c.a)(Object(c.a)({},e),{},{ref:t,icon:r}))};o.displayName="ArrowUpOutlined";t.a=n.forwardRef(o)},624:function(e,t,a){"use strict";var c=a(2),n=a(0),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0048.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z"}}]},name:"arrow-down",theme:"outlined"},l=a(11),o=function(e,t){return n.createElement(l.a,Object(c.a)(Object(c.a)({},e),{},{ref:t,icon:r}))};o.displayName="ArrowDownOutlined";t.a=n.forwardRef(o)},713:function(e,t,a){"use strict";a(0);var c=a(526),n=a(623),r=a(624),l=a(1);t.a=({title:e,value:t,status:a,subtitle:o,prefix:s})=>Object(l.jsxs)(c.a,{children:[e&&Object(l.jsx)("h4",{className:"mb-0",children:e}),Object(l.jsxs)("div",{className:`${s?"d-flex":""} ${e?"mt-3":""}`,children:[s?Object(l.jsx)("div",{className:"mr-2",children:s}):null,Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"d-flex align-items-center",children:[Object(l.jsx)("h1",{className:"mb-0 font-weight-bold",children:t}),a?Object(l.jsxs)("span",{className:"font-size-md font-weight-bold ml-3 "+(0!==a&&a>0?"text-success":"text-danger"),children:[a,0!==a&&a>0?Object(l.jsx)(n.a,{}):Object(l.jsx)(r.a,{})]}):null]}),o&&Object(l.jsx)("div",{className:"text-gray-light mt-1",children:o})]})]})]})},917:function(e,t,a){"use strict";a.r(t);a(0);var c=a(713),n=a(528),r=a(3236),l=a(536),o=a(526),s=a(1);const i=()=>Object(s.jsx)("div",{style:{maxWidth:300},children:Object(s.jsx)(c.a,{title:"Sales",value:"$6,982",status:8.8,subtitle:"Compare to last year (2019)"})});t.default=()=>Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"StatisticWidget"}),Object(s.jsxs)("div",{className:"mt-4",children:[Object(s.jsx)(n.default,{name:"Location",desc:"src/components/shared-components/StatisticWidget.js"}),Object(s.jsx)(n.default,{name:"Description",desc:"Widget for display highlight data"}),Object(s.jsx)("div",{className:"mt-4",children:Object(s.jsxs)(o.a,{title:"Example",children:[Object(s.jsx)(i,{}),Object(s.jsx)("div",{className:"mt-4",children:Object(s.jsx)(r.a,{className:"hl-code",language:"jsx",style:l.a,children:'import React, { useState } from \'react\'\nimport StatisticWidget from \'components/shared-components/StatisticWidget\'\n\nexport default const Demo = () => {\n\treturn (\n\t\t<div style={{maxWidth: 300}}>\n\t\t\t<StatisticWidget \n\t\t\t\ttitle="Sales" \n\t\t\t\tvalue="$6,982"\n\t\t\t\tstatus={8.8}\n\t\t\t\tsubtitle="Compare to last year (2019)"\n\t\t\t/>\n\t\t</div>\n\t)\n}\n'})})]})}),Object(s.jsx)("h4",{className:"mt-4",children:"Props"}),Object(s.jsx)("div",{className:"api-container border-0 p-0",children:Object(s.jsxs)("table",{children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"Property"}),Object(s.jsx)("th",{children:"Description"}),Object(s.jsx)("th",{children:"Type"}),Object(s.jsx)("th",{children:"Default"})]})}),Object(s.jsxs)("tbody",{children:[Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"value"}),Object(s.jsx)("td",{children:"Display value"}),Object(s.jsx)("td",{children:"string | number"}),Object(s.jsx)("td",{})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"title"}),Object(s.jsx)("td",{children:"Display title"}),Object(s.jsx)("td",{children:"string | ReactNode"}),Object(s.jsx)("td",{})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"subtitle"}),Object(s.jsx)("td",{children:"Dispaly subtitle"}),Object(s.jsx)("td",{children:"string"}),Object(s.jsx)("td",{})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"prefix"}),Object(s.jsx)("td",{children:"Prefix content"}),Object(s.jsx)("td",{children:"ReactNode"}),Object(s.jsx)("td",{})]})]})]})})]})]})}}]);
//# sourceMappingURL=16.9ddb179a.chunk.js.map