(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{404:function(e,t,n){"use strict";var a=n(0),c=n.n(a);t.a=function(){return c.a.createElement("div",{className:"div-shimmer"},c.a.createElement("picture",{className:"photo-shimmer"}))}},420:function(e,t,n){"use strict";var a=n(3),c=n.n(a),l=n(0),o=n.n(l),r=n(1),i=n(2),m=n(399),s=n(38),u=n(400),d=n(107),b=n(398),p=n(408);var f=function(e){var t=e.double,n=void 0===t||t,a=e.variations,r=e.collectionSize,i=void 0===r?"col-4 col-lg-3 col-md-3":r,f=a,v=Object(l.useState)({open:!1,product:{variation:{id:0}}}),E=c()(v,2),g=E[0],k=E[1];function y(e){k({open:!0,product:e})}return(a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return e&&e.reduce((function(e,n,a){return(a%t===0?e.push([n]):e[e.length-1].push(n))&&e}),[])}(a))?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"desktop-collection only-desktop"},a.slice(0,4).map((function(e,t){return o.a.createElement(l.Fragment,{key:t},e.map((function(e,t){return o.a.createElement("div",{className:"".concat(t%2===0&&window.innerWidth<560?"pl-0":""," ").concat(i),key:t},o.a.createElement(m.a,{product:e,type:"sidebar",onAddToCart:function(e){y(e)}}))})))}))),o.a.createElement("div",{className:"mobile-collection only-mobile"},o.a.createElement(d.a,{className:"splide",options:b.d},n?a.map((function(e,t){return o.a.createElement(d.b,{className:"double-product",key:t},e&&e.map((function(e,t){return o.a.createElement(l.Fragment,{key:t},o.a.createElement(m.a,{product:e,type:"sidebar",onAddToCart:function(e){y(e)}}))})))})):f.map((function(e,t){return o.a.createElement(d.b,{className:"double-product",key:t},o.a.createElement(m.a,{product:e,type:"sidebar",onAddToCart:function(e){y(e)}}))})))),o.a.createElement(u.a,{setModal:k,modal:g,addToCart:s.a})):o.a.createElement("div",{className:"pl-4"},o.a.createElement(p.a,{columns:3,option:b.d}))},v=n(5),E=n(56),g=n(410),k=n(32),y=n(4),h=n.n(y);t.a=function(e){var t=e.block,n=e.menuCol,a=e.bannerCol,m=e.collectionCol,s=e.collectionSize,u=e.doubleCollection,d=Object(r.d)((function(e){return e.menu})).menuList,b=Object(l.useState)(null===t||void 0===t?void 0:t.products),p=c()(b,1)[0],y=Object(l.useState)([]),N=c()(y,2),O=N[0],j=N[1],w=Object(E.a)().t;Object(l.useEffect)((function(){t&&d&&d.length>0&&t.menus.length>0&&j(t.menus.map((function(e){return e=d.find((function(t){return t.id===parseInt(e)}))})))}),[]);var C=null===t||void 0===t?void 0:t.dynamicCollectionBlock.find((function(e){return"banner"===e.name})),S=null===C||void 0===C?void 0:C.photos[0],_=null===C||void 0===C?void 0:C.photos[1];return t?o.a.createElement("div",{className:"block-banner-collection-wrapper"},o.a.createElement("div",{className:"block-banner-collection"},o.a.createElement("div",{className:"block-menus ".concat(n)},o.a.createElement("h3",{className:"title"},Object(v.c)(t.name)),O.length>0?o.a.createElement(o.a.Fragment,null,o.a.createElement("ul",{className:"block-menu-list"},O.slice(0,11).map((function(e,t){return e&&o.a.createElement("li",{className:"block-menu-item",key:t},o.a.createElement(i.b,{to:"/category/"+e.slug},Object(v.c)(e.name),o.a.createElement("img",{src:h.a.config.icons.rArrow,className:"d-none",alt:"menu"})))}))),o.a.createElement("div",{className:"under-menu-banner d-none"},o.a.createElement(k.a,{image:_,largeSize:"500x_",mediumSize:"300x_",smallSize:"50x_",alt:"banner"})),o.a.createElement("a",{href:t.footerTitle,className:"see-more d-none"},o.a.createElement("span",null,w("see-all")),o.a.createElement("img",{src:"/assets/images/vibo/arrow.png",alt:"arrow",width:"35",height:"20"}))):null),o.a.createElement("div",{className:"".concat(a," block-banner only-desktop")},o.a.createElement(i.b,{to:null===S||void 0===S?void 0:S.link},o.a.createElement(k.a,{image:S,largeSize:"500x_",mediumSize:"500x_",smallSize:"500x_",alt:"banner"}))),o.a.createElement("div",{className:"".concat(m," block-collection")},o.a.createElement(f,{double:u,variations:p,collectionSize:s}))),o.a.createElement("div",{className:"block-slider"},t.dynamicCollectionBlock.map((function(e,t){return"slide"===e.name&&o.a.createElement(g.a,{key:t,slider:e.photos,size:"original"})})))):""}},428:function(e,t,n){"use strict";var a=n(0),c=n.n(a),l=n(1),o=n(406);t.a=function(e){var t,n,a=e.block,r=e.position,i=Object(l.d)((function(e){return e.any.banners}))||[];return c.a.createElement("div",{className:"banners"},a?null===(t=a[0])||void 0===t||null===(n=t.photos)||void 0===n?void 0:n.map((function(e,t){return c.a.createElement(o.a,{item:e,key:t})})):i.filter((function(e){return e.position===r})).map((function(e,t){return c.a.createElement(o.a,{item:e,key:t,size:"800x_"})})))}},480:function(e,t,n){"use strict";var a=n(11),c=n.n(a),l=n(0),o=n.n(l),r=n(404),i=n(1),m=n(406),s=n(107),u=n(398);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t,n,a=e.position,c=e.setWidth,l=e.viewCount,d=Object(i.d)((function(e){return e.any.banners})).filter((function(e){return e.position===a})).sort((function(e,t){return e.sort-t.sort}));if(null!==(t=d)&&void 0!==t&&t.length||[1,2,3,4,5].map((function(e,t){return o.a.createElement(r.a,{key:t})})),c){d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c;return e.reduce((function(e,n,a){return(a%t===0?e.push([n]):e[e.length-1].push(n))&&e}),[])}(d)}return(null===(n=d)||void 0===n?void 0:n.length)>0&&o.a.createElement(s.a,{className:"brand-block w-100",options:b(b({},u.a),{},{gap:"10px",breakpoints:{560:{perPage:4.5},768:{perPage:5.5},991:{perPage:6.3},1100:{perPage:6.5},1920:{perPage:l||7}}})},d.map((function(e,t){return o.a.createElement(s.b,{key:t},c?e.map((function(e,t){return o.a.createElement(m.a,{item:e,key:t,size:"300x_"})})):o.a.createElement(m.a,{item:e,key:t,size:"800x_"}))})))}},508:function(e,t,n){"use strict";var a=n(0),c=n.n(a),l=n(2),o=n(5);t.a=function(e){var t=e.block;return t?t.dynamicCollectionBlock.map((function(e,t){var n,a;return c.a.createElement(l.b,{to:"/category/".concat(null===(n=e.photos[0])||void 0===n?void 0:n.link),key:t,className:"category-card"},c.a.createElement("img",{src:e.photos?null===(a=e.photos[0])||void 0===a?void 0:a.urls.original:"",alt:e.name}),c.a.createElement("span",null,Object(o.c)(e.name)))})):""}},659:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n.n(a),l=n(0),o=n.n(l),r=n(144),i=n(410),m=n(1),s=n(2),u=n(56),d=n(428),b=n(480),p=n(460),f=n(420),v=n(508);t.default=function(){var e,t,n,a=Object(m.d)((function(e){return e.marketData})),E=Object(m.d)((function(e){return e.blocks})).blocks,g=Object(l.useState)(!1),k=c()(g,2),y=k[0],h=k[1],N=Object(u.a)().t,O=null===a||void 0===a||null===(e=a.settings)||void 0===e?void 0:e.seoHtml,j=null===a||void 0===a||null===(t=a.settings)||void 0===t?void 0:t.styles,w=Object(l.useMemo)((function(){return{title:a.name,description:a.settings&&a.settings.description,keyword:a.settings&&a.settings.keyword,favicon:a.favicon}}),[]);if(!E)return"";var C=E.find((function(e){return"mini_block"===e.title})),S=E.find((function(e){return"best_offer"===e.title})),_=E.find((function(e){return"big_block"===e.title})),z=E.find((function(e){return"big_block_two"===e.title}));return o.a.createElement(o.a.Fragment,null,o.a.createElement(r.Helmet,null,o.a.createElement("title",null,w.title),o.a.createElement("meta",{name:"description",content:w.description}),o.a.createElement("meta",{name:"keywords",content:w.keyword}),o.a.createElement("meta",{name:"apple-mobile-web-app-title",content:w.title}),o.a.createElement("meta",{name:"application-name",content:w.title}),o.a.createElement("style",{dangerouslySetInnerHTML:{__html:j}})),o.a.createElement("h1",{className:"d-none"},w.title),o.a.createElement("div",{className:"home-page-ten"},o.a.createElement("div",{className:"container big-slider-container"},o.a.createElement(i.a,null)),o.a.createElement("div",{className:"container banners-container"},o.a.createElement(d.a,{position:"top"})),o.a.createElement("div",{className:"container brands-container"},o.a.createElement(b.a,{position:"center",setWidth:1})),(null===S||void 0===S||null===(n=S.products)||void 0===n?void 0:n.length)>0?o.a.createElement("div",{className:"container best-offer-container"},o.a.createElement(p.a,{collection:S,title:"best_offer"})):null,o.a.createElement("div",{className:"container menu-banner-collection"},o.a.createElement(f.a,{block:_,menuCol:"col-lg-3 col-12",bannerCol:"col-md-2 col-0",collectionCol:"col-lg-7 col-12",collectionSize:"col-4 col-lg-4 col-md-4 pr-0 mb-1",doubleCollection:!1})),o.a.createElement("div",{className:"container menu-banner-collection"},o.a.createElement(f.a,{block:z,menuCol:"col-lg-3 col-12",bannerCol:"col-md-2 col-0",collectionCol:"col-lg-7 col-12",collectionSize:"col-4 col-lg-4 col-md-4 pr-0 mb-1",doubleCollection:!1})),o.a.createElement("div",{className:"container box-category"},o.a.createElement("div",{className:"cards"},o.a.createElement(v.a,{block:C}))),o.a.createElement("div",{className:"container text-container"},o.a.createElement("div",{className:"mb-4"},o.a.createElement("div",{className:"before-footer-text ".concat(y?"active":""),dangerouslySetInnerHTML:{__html:O}}),o.a.createElement(s.b,{to:"#",className:"opener ".concat(y?"d-none":"d-inline-block"),onClick:function(){return h(!y)}},N("read-more"))))))}}}]);
//# sourceMappingURL=25.78b2faa9.chunk.js.map