(window.webpackJsonp=window.webpackJsonp||[]).push([[29,48],{423:function(_,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),n=t(1),c=t(143),u=t(62);function E(){var _=Object(u.a)().t;return r.a.createElement("div",{className:"main"},r.a.createElement(c.Helmet,null,r.a.createElement("title",null,_("nothing-found")," - 404 Page")),r.a.createElement("h1",{className:"d-none"},_("nothing-found")," - 404 Page"),r.a.createElement("div",{className:"error-content text-center",style:{backgroundImage:"url(".concat("","/assets/images/backgrounds/error-bg.jpg)")}},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"error-title"},"\u041e\u0448\u0438\u0431\u043a\u0430 404"),r.a.createElement("p",null,"\u0418\u0437\u0432\u0438\u043d\u0438\u0442\u0435, \u0442\u0430\u043a\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442."),r.a.createElement(n.b,{to:"",className:"btn btn-outline-primary-2 btn-minwidth-lg"},r.a.createElement("span",null,"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"),r.a.createElement("i",{className:"icon-long-arrow-right"})))))}e.default=r.a.memo(E)},495:function(_,e,t){"use strict";t.d(e,"a",(function(){return r}));var a=t(10);function r(_){return Object(a.a)("/pages/"+_,"GET")}},496:function(_,e,t){"use strict";t.d(e,"a",(function(){return n}));var a=t(0),r=t.n(a);function n(_){var e=_.page;return r.a.createElement("div",{className:"static-textes",dangerouslySetInnerHTML:{__html:e}})}},589:function(module,__webpack_exports__,__webpack_require__){"use strict";var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),react_redux__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),_api_staticPage__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(495),_components_features_loaders_loader__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(40),react_router_dom__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(16),_config_market__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(7),_config_market__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_config_market__WEBPACK_IMPORTED_MODULE_6__),_GenereteBody__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(496);function StaticPage(_ref){var menu=_ref.menu,_useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(!0),_useState2=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState,2),loading=_useState2[0],setLoading=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState4=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3,2),page=_useState4[0],setPage=_useState4[1],history=Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.g)();return menu||history.push("/404"),Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){setLoading(!0),Object(_api_staticPage__WEBPACK_IMPORTED_MODULE_3__.a)(menu.staticPage).then((function(_){setPage(_.content),setLoading(!1)})).catch((function(_){history.push("/404")}))}),[menu.id]),Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){var _page$split$;eval(null===(_page$split$=page.split("<script>")[1])||void 0===_page$split$?void 0:_page$split$.split("<\/script>")[0])})),loading?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_features_loaders_loader__WEBPACK_IMPORTED_MODULE_4__.a,null):react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"container container-static-page mt-5"},6===_config_market__WEBPACK_IMPORTED_MODULE_6___default.a.config.home?null:react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1",null,menu.name),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_GenereteBody__WEBPACK_IMPORTED_MODULE_7__.a,{page:page}))}var mapStateToProps=function(_,e){return{menu:_.menu.menuList.find((function(_){return _.slug===e.match.params.slug})),props:e}};__webpack_exports__.a=Object(react_redux__WEBPACK_IMPORTED_MODULE_2__.b)(mapStateToProps)(StaticPage)},653:function(_,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return E}));var a=t(0),r=t.n(a),n=t(16),c=t(589),u=t(423);function E(){return r.a.createElement(n.d,null,r.a.createElement(n.b,{path:"/page/:slug",component:c.a}),r.a.createElement(n.b,{component:u.default}))}}}]);
//# sourceMappingURL=29.5708f35c.chunk.js.map