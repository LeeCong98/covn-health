(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/real"],{"4e2e":function(t,e,n){},"6ee1":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{loading:!1,newData:[]}},created:function(){this.getData()},methods:{getData:function(){var e=this;t.request({method:"GET",url:"http://121.42.14.221:3002/Timeline",success:function(t){setTimeout((function(){e.loading=!0}),500),e.newData=t.data}})}}};e.default=n}).call(this,n("543d")["default"])},c456:function(t,e,n){"use strict";n.r(e);var a=n("6ee1"),u=n.n(a);for(var c in a)"default"!==c&&function(t){n.d(e,t,(function(){return a[t]}))}(c);e["default"]=u.a},dcec:function(t,e,n){"use strict";n.r(e);var a=n("f346"),u=n("c456");for(var c in u)"default"!==c&&function(t){n.d(e,t,(function(){return u[t]}))}(c);n("f81e");var r,i=n("f0c5"),f=Object(i["a"])(u["default"],a["b"],a["c"],!1,null,"25046b3a",null,!1,a["a"],r);e["default"]=f.exports},f346:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return a}));var u=function(){var t=this,e=t.$createElement;t._self._c},c=[]},f81e:function(t,e,n){"use strict";var a=n("4e2e"),u=n.n(a);u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/real-create-component',
    {
        'components/real-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("dcec"))
        })
    },
    [['components/real-create-component']]
]);
