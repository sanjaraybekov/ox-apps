(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{670:function(e,t,a){"use strict";a.r(t);var c=a(11),n=a.n(c),r=a(4),l=a.n(r),o=a(0),s=a.n(o),i=a(16),m=a(1),u=(a(33),a(32)),d=a(66),b=a(2),E=a(47),p=a(7),h=a.n(p),f=a(55),v=a.n(f),g=a(588),O=a(589),k=a.n(O),y=a(50),j={overlay:{background:"rgba(77,77,77,0.6)",zIndex:"10000"}};function N(e){var t=e.setQrModal,a=e.QrModal,c=e.QrCode,n=e.token,r=Object(d.a)().t,i=Object(o.useState)(0),m=l()(i,2),u=m[0],b=m[1];return Object(o.useEffect)((function(){Object(y.i)(n).then((function(e){var t;b(null===e||void 0===e||null===(t=e.wallet)||void 0===t?void 0:t.totalCash)}))}),[]),s.a.createElement(v.a,{isOpen:a,className:"modal-dialog cashback-modal",onRequestClose:function(){return t(!a)},style:j,id:"cashback-modal"},s.a.createElement("div",{className:"modal-content"},s.a.createElement("button",{className:"closer",onClick:function(){return t(!a)}},s.a.createElement("img",{src:"/assets/images/icons/closer.svg",alt:"closer"})),s.a.createElement("div",{className:"show-code"},s.a.createElement("h3",null,r("show_code")),s.a.createElement("h2",null,c)),c?s.a.createElement("div",{className:"qr_code"},s.a.createElement("div",{className:"qr"},s.a.createElement(g.a,{value:"".concat(c),style:{width:"100%",height:"100%"}})),s.a.createElement("div",{className:"br"},s.a.createElement(k.a,{value:"".concat(c),displayValue:!1,height:80}))):null,s.a.createElement("p",null,r("show_code_to_kassa")," ALLMAX"),s.a.createElement("div",{className:"usercard"},s.a.createElement("img",{src:"/assets/images/usercard_content.svg",alt:"card"}),s.a.createElement("p",null,r("your-balance")),s.a.createElement("h3",null,u||0," UZS"))))}function w(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,c)}return a}function _(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?w(Object(a),!0).forEach((function(t){n()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):w(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}t.default=function(e){var t=e.home,a=Object(b.d)((function(e){return e.cartlist.cart})),c=Object(b.d)((function(e){return e.user.tokenData})).token,n=Object(b.d)((function(e){return e.choosenProducts})).productList,r=Object(d.a)().t,p=Object(o.useState)(0),f=l()(p,2),v=(f[0],f[1],Object(o.useState)({transform:"translateY(0)"})),g=l()(v,2),O=g[0],k=(g[1],Object(i.g)()),j=Object(o.useState)(),w=l()(j,2),C=w[0],P=w[1],S=Object(o.useState)(1),q=l()(S,2),Q=q[0],D=q[1];var M=Object(o.useState)(!1),L=l()(M,2),x=L[0],A=L[1],J=h.a.config.icons;return s.a.createElement("div",{className:"mobile_btm_navbar_box",style:_(_({},O),{},{transition:"0.3s"})},s.a.createElement("ul",null,s.a.createElement(m.b,{to:u.c.path,onClick:function(){return D(1)}},s.a.createElement("li",{key:u.c.key,className:"".concat(1===Q?"active":"")},s.a.createElement("img",{className:"home",src:J.home,alt:"home"}),s.a.createElement("span",null,r(u.c.key)))),s.a.createElement(m.b,{to:"#",onClick:function(){document.querySelector("body").classList.add("mmenu-active"),D(2)}},s.a.createElement("li",{key:u.d.key,className:"".concat(2===Q?"active":"")},s.a.createElement("img",{src:J.category,alt:"category"}),s.a.createElement("span",null,r(u.d.key)))),h.a.config.QR_code?c?s.a.createElement("button",{className:"cashback",onClick:function(){A(!x),Object(y.h)(c).then((function(e){return P(e.code)})).catch((function(e){console.log(e)}))}},s.a.createElement("img",{src:h.a.config.icons.qr_code,alt:"qr_code"}),s.a.createElement("span",null,r("cashback2"))):s.a.createElement(m.b,{to:{pathname:u.e.path,state:{prevPathname:k.location.pathname}},className:"cashback"},s.a.createElement("img",{src:h.a.config.icons.qr_code,alt:"qr_code"}),s.a.createElement("span",null,r("cashback2"))):s.a.createElement(m.b,{to:"/choosen-products-list",className:"choosen-products-icon",onClick:function(){D(3)}},s.a.createElement("li",{className:"".concat(3===Q?"active":"")},s.a.createElement("div",{className:"counter-icon position-relative"},s.a.createElement("img",{src:J.favourites,alt:"favourites"}),n.length>0?s.a.createElement("span",{className:"cart-counte"},n.length):null),s.a.createElement("span",null,r("favourites")))),s.a.createElement(m.b,{to:c?"/checkout":u.a.path,onClick:function(){return D(4)}},s.a.createElement("li",{key:u.a.key,className:"".concat(4===Q?"active":"")},5===t?s.a.createElement("div",{className:"menu-cart-icon"},s.a.createElement("img",{src:J.cart,alt:"cart"}),s.a.createElement("span",{className:"cart-count"},Object(E.a)(a))):s.a.createElement("div",{className:"counter-icon position-relative"},s.a.createElement("img",{src:J.cart,alt:"cart"}),Object(E.a)(a)>0?s.a.createElement("span",{className:"cart-counte"},Object(E.a)(a)):null),s.a.createElement("span",null,r(u.a.key)))),s.a.createElement(m.b,{to:u.e.path,onClick:function(){return D(5)}},s.a.createElement("li",{key:u.e.key,className:"".concat(5===Q?"active":"")},s.a.createElement("img",{src:J.user,alt:"user"}),s.a.createElement("span",null,r(u.e.key))))),x?s.a.createElement(N,{setQrModal:A,QrModal:x,QrCode:C,token:c}):null)}}}]);
//# sourceMappingURL=42.0a71d083.chunk.js.map