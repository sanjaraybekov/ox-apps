(window.webpackJsonp=window.webpackJsonp||[]).push([[33,49],{421:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(1),r=a(142),m=a(66);function i(){var e=Object(m.a)().t;return l.a.createElement("div",{className:"main"},l.a.createElement(r.Helmet,null,l.a.createElement("title",null,e("nothing-found")," - 404 Page")),l.a.createElement("h1",{className:"d-none"},e("nothing-found")," - 404 Page"),l.a.createElement("div",{className:"error-content text-center",style:{backgroundImage:"url(".concat("","/assets/images/backgrounds/error-bg.jpg)")}},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"error-title"},"\u041e\u0448\u0438\u0431\u043a\u0430 404"),l.a.createElement("p",null,"\u0418\u0437\u0432\u0438\u043d\u0438\u0442\u0435, \u0442\u0430\u043a\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442."),l.a.createElement(c.b,{to:"",className:"btn btn-outline-primary-2 btn-minwidth-lg"},l.a.createElement("span",null,"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"),l.a.createElement("i",{className:"icon-long-arrow-right"})))))}t.default=l.a.memo(i)},500:function(e,t,a){"use strict";var n=a(0),l=a.n(n),c=a(1),r=a(40),m=a(15),i=a(24);t.a=function(e){var t=e.post,a=new Date(t.createdTime);return l.a.createElement("article",{className:"entry"},l.a.createElement("figure",{className:"entry-media"},l.a.createElement("div",{className:"lazy-overlay bg-3"},l.a.createElement(c.b,{to:"blog/".concat(t.id)},l.a.createElement(r.LazyLoadImage,{src:Object(m.c)(t.image),alt:"post",width:100,threshold:300,effect:"blur"})))),l.a.createElement("div",{className:"entry-body text-center"},l.a.createElement("div",{className:"entry-meta"},l.a.createElement(c.b,{to:"blog/".concat(t.id)},a.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"2-digit",timeZone:"UTC"}))),l.a.createElement("h3",{className:"entry-title"},l.a.createElement("a",{href:"".concat("","/blog/").concat(t.id)},t.title)),l.a.createElement("div",{className:"entry-content"},l.a.createElement("p",{className:"pl-1 pr-1",dangerouslySetInnerHTML:{__html:Object(i.sliceByWord)(Object(i.extractTextFromHTML)(t.text),0,20)}}),l.a.createElement("a",{href:"".concat("","/blog/").concat(t.id),className:"read-more"},"Read More"))))}},666:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return h}));var n=a(0),l=a.n(n),c=a(16),r=a(421),m=a(142),i=a(2);function s(e){var t=e.title,a=e.subTitle;return l.a.createElement("div",{className:"page-header text-center",style:{backgroundImage:"url(".concat("","/assets/images/page-header-bg.jpg)")}},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"page-title"},t,l.a.createElement("span",null,a))))}var o=l.a.memo(s),d=a(68),E=a(500);function u(){var e=Object(i.d)((function(e){return e.any.blogs}));return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.Helmet,null,l.a.createElement("title",null,"Molla React eCommerce Template | Blog Grid 3 Cols")),l.a.createElement("h1",{className:"d-none"},"Molla React eCommerce Template - Blog Grid 3 Cols"),l.a.createElement("div",{className:"main"},l.a.createElement(o,{title:"Blog Grid 3 Columns",subTitle:"Blog"}),l.a.createElement("div",{className:"page-content"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"entry-container max-col-3","data-layout":"fitRows"},e?e.map((function(e,t){return l.a.createElement("div",{className:"entry-item lifestyle shopping col-sm-6 col-lg-4"},l.a.createElement(E.a,{post:e,key:t}))})):l.a.createElement(d.a,null))))))}var g=a(4),b=a.n(g),N=a(1),y=a(40),f=a(440),v=a(15);function p(e){var t=Object(i.d)((function(e){return e.any.blogs})),a=parseInt(e.match.params.id),c=Object(n.useState)({}),r=b()(c,2),s=r[0],o=r[1];Object(n.useEffect)((function(){o(t.find((function(e){return e.id===a})))}),[]);var d=new Date(s.createdTime);return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.Helmet,null,l.a.createElement("title",null,s.title)),l.a.createElement("h1",{className:"d-none"},s.title),l.a.createElement("div",{className:"main single-2"},l.a.createElement("div",{className:"page-content"},l.a.createElement("figure",{className:"entry-media"},l.a.createElement("div",{className:"lazy-overlay bg-3"}),l.a.createElement(y.LazyLoadImage,{src:Object(v.c)(s.image),alt:"blog",width:100,height:400,effect:"blur"})),l.a.createElement("div",{className:"container"},l.a.createElement("article",{className:"entry single-entry entry-fullwidth"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-11"},l.a.createElement("div",{className:"entry-body"},l.a.createElement("div",{className:"entry-meta"},l.a.createElement(N.b,{to:"#"},d.toLocaleDateString("ru-RU",{year:"numeric",month:"short",day:"numeric",timeZone:"UTC"}))),l.a.createElement("h2",{className:"entry-title entry-title-big"},s.title),l.a.createElement("div",{className:"entry-content editor-content",dangerouslySetInnerHTML:{__html:s.text}}))),l.a.createElement("div",{className:"col-lg-1 order-lg-first mb-2 mb-lg-0"},l.a.createElement(f.a,{offsetTop:80,className:"sticky-content"},l.a.createElement("div",{className:"social-icons social-icons-colored social-icons-vertical"},l.a.createElement(N.b,{to:"#",className:"social-icon social-facebook",title:"Facebook",target:"_blank"},l.a.createElement("i",{className:"icon-facebook-f"})),l.a.createElement(N.b,{to:"#",className:"social-icon social-twitter",title:"Twitter",target:"_blank"},l.a.createElement("i",{className:"icon-twitter"})),l.a.createElement(N.b,{to:"#",className:"social-icon social-pinterest",title:"Pinterest",target:"_blank"},l.a.createElement("i",{className:"icon-pinterest"})),l.a.createElement(N.b,{to:"#",className:"social-icon social-linkedin",title:"Linkedin",target:"_blank"},l.a.createElement("i",{className:"icon-linkedin"})))))))))))}function h(){return l.a.createElement(c.d,null,l.a.createElement(c.b,{exact:!0,path:"/blog",component:u}),l.a.createElement(c.b,{exact:!0,path:"/blog/:id",component:p}),l.a.createElement(c.b,{component:r.default}))}}}]);
//# sourceMappingURL=33.16381e43.chunk.js.map