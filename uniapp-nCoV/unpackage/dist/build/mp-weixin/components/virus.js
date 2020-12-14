(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/virus"],{"0fa3":function(t,n,e){"use strict";e.r(n);var u=e("118b"),a=e("e3e2");for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);e("a3df");var c,i=e("f0c5"),o=Object(i["a"])(a["default"],u["b"],u["c"],!1,null,"1a09e771",null,!1,u["a"],c);n["default"]=o.exports},"118b":function(t,n,e){"use strict";var u;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return u}));var a=function(){var t=this,n=t.$createElement;t._self._c},r=[]},"27b8":function(t,n,e){},7038:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{data:[],recommendListr:[],loading:!1}},created:function(){this.getData()},methods:{getData:function(){var n=this;t.request({method:"GET",url:"http://121.42.14.221:3002/WikiList",success:function(t){n.data=t.data.result.slice(1)}}),t.request({method:"GET",url:"http://121.42.14.221:3002/fanghu",success:function(t){setTimeout((function(){n.loading=!0}),500),n.recommendListr=t.data}})}}};n.default=e}).call(this,e("543d")["default"])},a3df:function(t,n,e){"use strict";var u=e("27b8"),a=e.n(u);a.a},e3e2:function(t,n,e){"use strict";e.r(n);var u=e("7038"),a=e.n(u);for(var r in u)"default"!==r&&function(t){e.d(n,t,(function(){return u[t]}))}(r);n["default"]=a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/virus-create-component',
    {
        'components/virus-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("0fa3"))
        })
    },
    [['components/virus-create-component']]
]);
