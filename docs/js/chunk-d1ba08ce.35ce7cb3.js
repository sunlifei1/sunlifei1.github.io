(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d1ba08ce"],{8578:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("van-nav-bar",{attrs:{title:"设置","left-text":"返回","left-arrow":""},on:{"click-left":t.back}}),a("van-cell-group",{staticClass:"mt-10"},[a("van-cell",{attrs:{title:"账号id",value:"888888"}}),a("van-cell",{attrs:{isLink:"",title:"登录密码",value:"未设置"}}),a("van-cell",{attrs:{isLink:"",title:"安全密码",value:"未设置"}})],1),a("div",{staticClass:"logout f16 flex fcc bg-fff fixed w100pc",on:{click:t.logout}},[a("p",{staticClass:"blue"},[t._v("退出登录")])])],1)},c=[],i={methods:{back(){history.back()},async logout(){let t="/logout";await this.$axios.post(t);this.$store.commit("updateLogin",!1),this.$store.commit("updateUsername",""),this.$store.commit("updateToken",""),this.$router.push("/my")}}},l=i,o=(a("e5cb"),a("2877")),n=Object(o["a"])(l,s,c,!1,null,"2781b0f0",null);e["default"]=n.exports},d46c:function(t,e,a){},e5cb:function(t,e,a){"use strict";var s=a("d46c"),c=a.n(s);c.a}}]);
//# sourceMappingURL=chunk-d1ba08ce.35ce7cb3.js.map