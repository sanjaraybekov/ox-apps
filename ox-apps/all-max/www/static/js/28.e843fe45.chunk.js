(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{401:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(6),c=function(e){return function(t){t({type:a.i.SET_PRODUCT,product:e})}}},402:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(44),c=n(38),r=n(69),i=n(12),o=n(5);function u(e,t,n,l,s,d){if(l(!0),n)Object(r.a)(t,e.data.stock.id,n).then((function(n){s(Object(c.a)(e,t,n[0].id)),window.toast({product:e,message:"success"}),l(!1)})).catch((function(n){var c,r;401===(null===(c=n.response)||void 0===c?void 0:c.status)?u(e,t,null,l,s,d):a.toast.error((null===(r=n.response)||void 0===r?void 0:r.data.message)||n.response.data,{position:"top-left"});l(!1)}));else{var m=d.find((function(t){return t.data.variation.id===e.data.variation.id}));m?e.data.stock.count-(parseInt(m.count)+t)<0?(a.toast.error(o.b.t("amount-balance"),{position:"top-left"}),l(!1)):(m.count=parseInt(m.count)+t,m.sum=m.count*Object(i.e)(m.data),s(Object(c.a)(m,m.count)),window.toast({product:e,message:"success"}),l(!1)):(s(Object(c.a)(e,t)),window.toast({product:e,message:"success"}),l(!1))}}},464:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));var a=n(6),c=function(e){return function(t){var n={newPrice:e.newPrice,oldPrice:e.oldPrice,stock:{id:e.stock.id},variation:{name:e.variation.name,productProperties:e.variation.productProperties.filter((function(e){return e.value.length>0})),images:e.variation.images,id:e.variation.id}};t({type:a.j.ADD_TO_COMPARE,newProduct:n})}},r=function(e){return function(t){var n=e;t({type:a.j.REMOVE_FROM_COMPARE,newProduct:n})}},i=function(){return function(e){e({type:a.j.RESET_COMPARE})}}},639:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return L}));var a=n(24),c=n.n(a),r=n(11),i=n.n(r),o=n(13),u=n.n(o),l=n(3),s=n.n(l),d=n(8),m=n.n(d),p=n(0),f=n.n(p),v=n(56),b=n(1),E=n(464),O=n(51),j=n(68),h=n(2),y=n(26),w=n(402),g=n(42),k=n(32),N=n(401),P=n(4),I=n.n(P),C=n(5);var S=Object(b.b)((function(e){return{settings:e.marketData.settings}}))((function(e){var t,n=Object(b.d)((function(e){return e.cartlist})).cart,a=e.product,c=e.onAddToCart,r=e.deleteProduct,i=e.haveSupplier,o=void 0!==i&&i,u=Object(b.d)((function(e){return e.user.tokenData})).token,l=Object(b.c)(),d=Object(p.useState)(!1),m=s()(d,2),v=m[0],E=m[1],j=Object(p.useState)(),P=s()(j,1)[0],S=Object(b.d)((function(e){return e.choosenProducts})).productList,x=Object(b.d)((function(e){return e.comparisonProducts})).productListCompare,_=S.find((function(e){return e.stock.id===(null===a||void 0===a?void 0:a.stock.id)})),D=x.find((function(e){var t,n;return(null===e||void 0===e||null===(t=e.stock)||void 0===t?void 0:t.id)===(null===a||void 0===a||null===(n=a.stock)||void 0===n?void 0:n.id)})),L=n.find((function(e){return e.data.stock.id===(null===a||void 0===a?void 0:a.stock.id)}));Object(p.useEffect)((function(){if(o&&e.suppliers){var t=e.suppliers.find((function(e){return e.id===(null===a||void 0===a?void 0:a.stock.supplier)}));P(t)}}),[o,e.suppliers]);var R=null===a||void 0===a||null===(t=a.variation)||void 0===t?void 0:t.images[0];return a?f.a.createElement("div",{className:"compare-card-one"},f.a.createElement("div",{className:"product-header"},a.discount>0?f.a.createElement(h.b,{to:"/products/".concat(a.variation.id),className:"discount"},f.a.createElement("span",{className:"text"},"-",(100-100*a.newPrice/a.oldPrice).toFixed(0),"%")):null,f.a.createElement("div",{className:"header-buttons"},I.a.config.compare?f.a.createElement("button",{className:"".concat(D?"have-compare":""),onClick:function(){r(a)}},f.a.createElement("img",{src:I.a.config.icons.deleteIcon,alt:"compare"})):null,f.a.createElement("button",{className:"".concat(_?"have-choosen":""),onClick:function(){l(Object(N.a)(a))}},f.a.createElement("img",{src:I.a.config.icons.favourites,alt:"favourites"})),v?f.a.createElement("button",{className:"cart-btn"},f.a.createElement(g.a,null)):f.a.createElement("button",{className:"".concat(L?"have-cart":""),onClick:function(){E(!0),Object(O.g)(a.variation.id).then((function(e){1===e.variations.length?Object(w.a)(e,1,u,E,l,n):(c(e,1),E(!1))})).catch((function(e){console.error(e)}))}},f.a.createElement("img",{src:I.a.config.icons.cart,alt:"cart"}))),f.a.createElement(h.b,{to:"/product/".concat(a.variation.id),className:"w-100"},f.a.createElement(k.a,{image:R,largeSize:"300x_",mediumSize:"150x_",smallSize:"150x_",alt:a.name}))),f.a.createElement("div",{className:"body-product"},f.a.createElement("h6",{className:"title-product"},f.a.createElement(h.b,{to:"/product/"+a.variation.id},Object(C.c)(a.variation.name))),f.a.createElement("div",{className:"price-product"},f.a.createElement("span",{className:"price-new"},Object(y.formatterCurrency)(a.newPrice)),a.discount?f.a.createElement("span",{className:"price-old"},f.a.createElement("del",null,Object(y.formatterCurrency)(a.oldPrice))):null))):null})),x=n(12);function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function L(){var e=Object(p.useState)(),t=s()(e,2),n=t[0],a=t[1],r=Object(p.useState)(),i=s()(r,2),o=i[0],l=i[1],d=Object(p.useState)(!0),h=s()(d,2),y=h[0],w=h[1],g=Object(p.useState)([]),k=s()(g,2),N=k[0],P=k[1],C=Object(b.c)(),_=Object(b.d)((function(e){return e.comparisonProducts})).productListCompare,L=window.addEventListener("scroll",(function(){var e=document.querySelector(".compare-product-list"),t=document.querySelector(".sticky-top");e&&t&&(window.scrollY>140?(e.classList.add("fixed"),t.classList.add("fixed")):(e.classList.remove("fixed"),t.classList.remove("fixed")))}));function R(){return(R=u()(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.b)(Object(x.h)(_)).then((function(e){var t=e.reduce((function(e,t){var n=Object.values(t)[0][0];if(!n)return C(Object(E.b)(_.find((function(e){return e.variation.id===parseInt(Object.keys(t)[0])})))),e;var a=e.findIndex((function(e){return e.id===(null===n||void 0===n?void 0:n.id)}));return a<0?e.push(D(D({},n),{},{productIds:[Object.keys(t)[0]]})):e[a].productIds.push(Object.keys(t)[0]),e}),[]);l(t),w(!1)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(){return(A=u()(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.productIds.forEach((function(e){C(Object(E.b)(_.find((function(t){return t.variation.id===parseInt(e)}))))}));case 2:l(o.filter((function(e){return e.id!==t.id})));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e){var t=n.productIds.filter((function(t){return parseInt(t)!==e.variation.id}));C(Object(E.b)(e)),a(D(D({},n),{},{productIds:t}))}function T(){C(Object(E.a)()),Object(x.h)(_)&&(P([]),l([]))}Object(p.useEffect)((function(){return Object(x.h)(_)?function(){R.apply(this,arguments)}():w(!1),function(){window.removeEventListener("scroll",L)}}),[x.h]),Object(p.useEffect)((function(){o&&(a(o[0]),Object(x.j)())}),[o,l]),Object(p.useEffect)((function(){if(n){var e=[];n.productIds.forEach((function(t){var n,a=null===(n=_.find((function(e){var n;return(null===e||void 0===e||null===(n=e.variation)||void 0===n?void 0:n.id)===parseInt(t)})))||void 0===n?void 0:n.variation.productProperties;a&&e.push.apply(e,c()(a))})),P(e),n.productIds.length<1&&l(o.filter((function(e){return e.id!==n.id})))}}),[n]);var z=Object(v.a)().t;return y?f.a.createElement(j.a,null):f.a.createElement("div",{className:"compare-product-list"},f.a.createElement("div",{className:"container compare-product-list_body"},f.a.createElement("div",{className:"compare-product-list_header mt-3"},f.a.createElement("h3",null,z("compare-products"))),_.length>0?f.a.createElement(f.a.Fragment,null,f.a.createElement("div",{className:"tablist-clear"},f.a.createElement("ul",{className:"tab-list"},null===o||void 0===o?void 0:o.map((function(e){return f.a.createElement("li",{className:"tab-item ".concat(e.id===n.id?"active":""),key:e.id},f.a.createElement("span",{onClick:function(){return a(e)}},e.name),f.a.createElement("button",{className:"btn-transparent",onClick:function(){return function(e){return A.apply(this,arguments)}(e)}},f.a.createElement("img",{src:I.a.config.icons.closer,alt:"delete"})))})),f.a.createElement("li",{className:"tab-item only-mobile"},f.a.createElement("span",{className:"clear-all",onClick:T},z("clear-all")))),f.a.createElement("button",{className:"clear-all only-desktop",onClick:T},z("clear-all"))),f.a.createElement("div",{className:"row p-0 m-0 mt-2 sticky-top"},f.a.createElement("div",{className:"container d-flex"},_.length>0?null===n||void 0===n?void 0:n.productIds.slice(0,4).map((function(e){var t=_.find((function(t){return t.variation.id===parseInt(e)}));return f.a.createElement("div",{key:null===t||void 0===t?void 0:t.id,className:"col-lg-3 col-md-4 col-6"},f.a.createElement(S,{product:t,deleteProduct:M}))})):null)),f.a.createElement("div",{className:"compare-property-list_header mt-3"},f.a.createElement("h3",null,z("all-characteristics"))),f.a.createElement("div",{className:"row"},null===n||void 0===n?void 0:n.productIds.slice(0,4).map((function(e){var t=_.find((function(t){return t.variation.id===parseInt(e)}));return f.a.createElement("div",{key:null===t||void 0===t?void 0:t.id,className:"col-lg-3 col-md-4 col-6"},f.a.createElement("ul",null,null===N||void 0===N?void 0:N.slice(0,4).map((function(e,n){var a,c;return f.a.createElement("li",{key:n},f.a.createElement("h4",null,e.name),f.a.createElement("p",null,(null===t||void 0===t||null===(a=t.variation)||void 0===a||null===(c=a.productProperties.find((function(t){return t.id===e.id})))||void 0===c?void 0:c.value)||f.a.createElement("span",null,z("\u043d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445"))))}))))})))):f.a.createElement("h3",{className:"empty"},z("empty"))))}}}]);
//# sourceMappingURL=28.e843fe45.chunk.js.map