(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{676:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),l=a(1),r=a(2),o=a(5);function s(){var e=Object(l.d)((function(e){return e.menu})).menuVertical,t=window.addEventListener("scroll",(function(){var e=document.querySelector(".all-categories");e&&(window.scrollY>140?e.classList.add("fixed"):e.classList.remove("fixed"))}));return Object(c.useEffect)((function(){return function(){window.removeEventListener("scroll",t)}}),[]),Object(c.useEffect)((function(){var e=document.querySelectorAll(".idElements");document.querySelectorAll(".anchor").forEach((function(t){t.addEventListener("click",(function(a){a.preventDefault(),e.forEach((function(e){t.href.includes(e.id)?(window.scrollTo(0,e.offsetTop+100),e.classList.add("text-primary")):e.classList.remove("text-primary")}))}))}))}),[window.location.hash]),e?n.a.createElement("div",{className:"all-categories"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 menu"},n.a.createElement("div",{className:"container d-flex align-items-center flex-wrap"},null===e||void 0===e?void 0:e.map((function(e,t){return n.a.createElement("a",{href:"/all-categories/#".concat(e.slug),key:t,className:"col-lg-3 col-md-4 anchor  col-6"},n.a.createElement("h4",{className:" menu-item d-flex"},e.image?n.a.createElement("img",{src:e.image.urls["100x_"],alt:e.image.originalName}):null,n.a.createElement("span",null,Object(o.c)(e.name))))})))),n.a.createElement("div",{className:"col-12 menus"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},e.map((function(e,t){return n.a.createElement(c.Fragment,{key:t},n.a.createElement(r.b,{id:e.slug,to:"/category/".concat(e.slug),className:"category-title idElements col-12"},Object(o.c)(e.name)),e.children.map((function(e,t){return n.a.createElement("div",{className:"col-6 row m-0 mb-2",key:t},n.a.createElement(r.b,{to:"/category/".concat(e.slug),className:"category-item",style:{minWidth:"100%"}},Object(o.c)(e.name)),n.a.createElement("div",{className:"col-12 p-0",style:{columnCount:"2"}},e.children.slice(0,22).map((function(e){return n.a.createElement(r.b,{className:"d-block",style:{color:"black"},to:e.slug},e.name)}))))})))}))))))):""}t.default=function(){return n.a.createElement(s,null)}}}]);
//# sourceMappingURL=40.da676d38.chunk.js.map