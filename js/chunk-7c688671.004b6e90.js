(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c688671"],{"014b":function(t,e,n){"use strict";var r=n("e53d"),o=n("07e3"),i=n("8e60"),s=n("63b6"),c=n("9138"),a=n("ebfd").KEY,u=n("294c"),f=n("dbdb"),l=n("45f2"),p=n("62a0"),d=n("5168"),h=n("ccb9"),v=n("6718"),b=n("47ee"),m=n("9003"),y=n("e4ae"),g=n("f772"),w=n("36c3"),x=n("1bc3"),O=n("aebd"),S=n("a159"),j=n("0395"),_=n("bf0b"),C=n("d9f6"),A=n("c3a1"),P=_.f,E=C.f,k=j.f,F=r.Symbol,N=r.JSON,T=N&&N.stringify,$="prototype",L=d("_hidden"),I=d("toPrimitive"),U={}.propertyIsEnumerable,R=f("symbol-registry"),B=f("symbols"),M=f("op-symbols"),z=Object[$],D="function"==typeof F,J=r.QObject,W=!J||!J[$]||!J[$].findChild,G=i&&u(function(){return 7!=S(E({},"a",{get:function(){return E(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=P(z,e);r&&delete z[e],E(t,e,n),r&&t!==z&&E(z,e,r)}:E,K=function(t){var e=B[t]=S(F[$]);return e._k=t,e},H=D&&"symbol"==typeof F.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof F},Y=function(t,e,n){return t===z&&Y(M,e,n),y(t),e=x(e,!0),y(n),o(B,e)?(n.enumerable?(o(t,L)&&t[L][e]&&(t[L][e]=!1),n=S(n,{enumerable:O(0,!1)})):(o(t,L)||E(t,L,O(1,{})),t[L][e]=!0),G(t,e,n)):E(t,e,n)},q=function(t,e){y(t);var n,r=b(e=w(e)),o=0,i=r.length;while(i>o)Y(t,n=r[o++],e[n]);return t},Q=function(t,e){return void 0===e?S(t):q(S(t),e)},X=function(t){var e=U.call(this,t=x(t,!0));return!(this===z&&o(B,t)&&!o(M,t))&&(!(e||!o(this,t)||!o(B,t)||o(this,L)&&this[L][t])||e)},V=function(t,e){if(t=w(t),e=x(e,!0),t!==z||!o(B,e)||o(M,e)){var n=P(t,e);return!n||!o(B,e)||o(t,L)&&t[L][e]||(n.enumerable=!0),n}},Z=function(t){var e,n=k(w(t)),r=[],i=0;while(n.length>i)o(B,e=n[i++])||e==L||e==a||r.push(e);return r},tt=function(t){var e,n=t===z,r=k(n?M:w(t)),i=[],s=0;while(r.length>s)!o(B,e=r[s++])||n&&!o(z,e)||i.push(B[e]);return i};D||(F=function(){if(this instanceof F)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===z&&e.call(M,n),o(this,L)&&o(this[L],t)&&(this[L][t]=!1),G(this,t,O(1,n))};return i&&W&&G(z,t,{configurable:!0,set:e}),K(t)},c(F[$],"toString",function(){return this._k}),_.f=V,C.f=Y,n("6abf").f=j.f=Z,n("355d").f=X,n("9aa9").f=tt,i&&!n("b8e3")&&c(z,"propertyIsEnumerable",X,!0),h.f=function(t){return K(d(t))}),s(s.G+s.W+s.F*!D,{Symbol:F});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)d(et[nt++]);for(var rt=A(d.store),ot=0;rt.length>ot;)v(rt[ot++]);s(s.S+s.F*!D,"Symbol",{for:function(t){return o(R,t+="")?R[t]:R[t]=F(t)},keyFor:function(t){if(!H(t))throw TypeError(t+" is not a symbol!");for(var e in R)if(R[e]===t)return e},useSetter:function(){W=!0},useSimple:function(){W=!1}}),s(s.S+s.F*!D,"Object",{create:Q,defineProperty:Y,defineProperties:q,getOwnPropertyDescriptor:V,getOwnPropertyNames:Z,getOwnPropertySymbols:tt}),N&&s(s.S+s.F*(!D||u(function(){var t=F();return"[null]"!=T([t])||"{}"!=T({a:t})||"{}"!=T(Object(t))})),"JSON",{stringify:function(t){var e,n,r=[t],o=1;while(arguments.length>o)r.push(arguments[o++]);if(n=e=r[1],(g(e)||void 0!==t)&&!H(t))return m(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!H(e))return e}),r[1]=e,T.apply(N,r)}}),F[$][I]||n("35e8")(F[$],I,F[$].valueOf),l(F,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},"0395":function(t,e,n){var r=n("36c3"),o=n("6abf").f,i={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(e){return s.slice()}};t.exports.f=function(t){return s&&"[object Window]"==i.call(t)?c(t):o(r(t))}},"07e3":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},"0fc9":function(t,e,n){var r=n("3a38"),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},1691:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},1788:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"media"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showAlbumArt,expression:"showAlbumArt"}],staticClass:"media-left"},[n("figure",{staticClass:"image",class:{"is-64x64":t.showArtist,"is-48x48":!t.showArtist}},[t.albumArt?n("PreloadedImage",{attrs:{src:t.albumArt,alt:"Album Art"}}):t._e()],1)]),n("div",{staticClass:"media-content"},[n("p",{staticClass:"is-size-4 has-text-white"},[t._v(t._s(t.trackName))]),n("p",{directives:[{name:"show",rawName:"v-show",value:t.showArtist,expression:"showArtist"}],staticClass:"is-size-6 has-text-white"},[t._v("\n      "+t._s(t.artistName)+"\n    ")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showSpotifyLogo,expression:"showSpotifyLogo"}],staticClass:"media-right"},[t._m(0)])])},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("figure",{staticClass:"image is-32x32"},[r("img",{attrs:{src:n("ed8a"),alt:"Spotify"}})])}],i=(n("7f7f"),n("bc3a"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[n("img",{directives:[{name:"show",rawName:"v-show",value:t.mountedSrc,expression:"mountedSrc"}],attrs:{src:t.mountedSrc}})])}),s=[],c={props:{src:{type:String}},data:function(){return{mountedSrc:null}},watch:{src:function(){this.load()}},mounted:function(){this.load()},methods:{load:function(){var t=this,e=new Image;e.onload=function(){t.mountedSrc=t.src},e.src=this.src}}},a=c,u=n("2877"),f=Object(u["a"])(a,i,s,!1,null,null,null),l=f.exports,p="https://api.spotify.com/v1/me/player/currently-playing",d={components:{PreloadedImage:l},props:{showArtist:{type:Boolean,default:!0},showAlbumArt:{type:Boolean,default:!0},showSpotifyLogo:{type:Boolean,default:!0},accessToken:{type:String,default:null}},data:function(){return{userPlayer:null}},computed:{trackName:function(){return this.userPlayer?this.userPlayer.item.name:null},artistName:function(){return this.userPlayer&&0!=this.userPlayer.item.artists.length?this.userPlayer.item.artists[0].name:null},albumArt:function(){return this.userPlayer&&0!=this.userPlayer.item.album.images.length?this.userPlayer.item.album.images[0].url:null}},mounted:function(){this.loadUserPlayer()},methods:{loadUserPlayer:function(){var t=this,e={Authorization:"Bearer ".concat(this.accessToken)};this.$http.get(p,{headers:e}).then(function(e){t.userPlayer=e.data,setTimeout(t.loadUserPlayer,5e3)})}}},h=d,v=(n("5aa4"),Object(u["a"])(h,r,o,!1,null,"1e2f0625",null));e["a"]=v.exports},"1bc3":function(t,e,n){var r=n("f772");t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},"1cde":function(t,e,n){"use strict";var r=n("e0a9"),o=n.n(r);o.a},"1ec9":function(t,e,n){var r=n("f772"),o=n("e53d").document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},"241e":function(t,e,n){var r=n("25eb");t.exports=function(t){return Object(r(t))}},"25eb":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},"268f":function(t,e,n){t.exports=n("fde4")},"294c":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"2bb7":function(t,e,n){"use strict";var r=n("b537"),o=n.n(r);o.a},"2d74":function(t,e,n){},"32a6":function(t,e,n){var r=n("241e"),o=n("c3a1");n("ce7e")("keys",function(){return function(t){return o(r(t))}})},"32fc":function(t,e,n){var r=n("e53d").document;t.exports=r&&r.documentElement},"335c":function(t,e,n){var r=n("6b4c");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},"355d":function(t,e){e.f={}.propertyIsEnumerable},"35e8":function(t,e,n){var r=n("d9f6"),o=n("aebd");t.exports=n("8e60")?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},"36c3":function(t,e,n){var r=n("335c"),o=n("25eb");t.exports=function(t){return r(o(t))}},"3a38":function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},"454f":function(t,e,n){n("46a7");var r=n("584a").Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},"45f2":function(t,e,n){var r=n("d9f6").f,o=n("07e3"),i=n("5168")("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},"46a7":function(t,e,n){var r=n("63b6");r(r.S+r.F*!n("8e60"),"Object",{defineProperty:n("d9f6").f})},"47ee":function(t,e,n){var r=n("c3a1"),o=n("9aa9"),i=n("355d");t.exports=function(t){var e=r(t),n=o.f;if(n){var s,c=n(t),a=i.f,u=0;while(c.length>u)a.call(t,s=c[u++])&&e.push(s)}return e}},5168:function(t,e,n){var r=n("dbdb")("wks"),o=n("62a0"),i=n("e53d").Symbol,s="function"==typeof i,c=t.exports=function(t){return r[t]||(r[t]=s&&i[t]||(s?i:o)("Symbol."+t))};c.store=r},5559:function(t,e,n){var r=n("dbdb")("keys"),o=n("62a0");t.exports=function(t){return r[t]||(r[t]=o(t))}},"584a":function(t,e){var n=t.exports={version:"2.6.5"};"number"==typeof __e&&(__e=n)},"5aa4":function(t,e,n){"use strict";var r=n("2d74"),o=n.n(r);o.a},"5b4e":function(t,e,n){var r=n("36c3"),o=n("b447"),i=n("0fc9");t.exports=function(t){return function(e,n,s){var c,a=r(e),u=o(a.length),f=i(s,u);if(t&&n!=n){while(u>f)if(c=a[f++],c!=c)return!0}else for(;u>f;f++)if((t||f in a)&&a[f]===n)return t||f||0;return!t&&-1}}},"622b":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("LandingHead",{staticClass:"is-light",attrs:{showLoginButton:!1}}),n("section",{staticClass:"section"},[n("div",{staticClass:"container"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column"},[n("p",{staticClass:"is-size-4 has-text-weight-semibold"},[t._v("Settings")]),n("hr"),n("div",{staticClass:"level is-mobile"},[t._m(0),n("div",{staticClass:"level-right"},[n("b-switch",{model:{value:t.settings.showSpotifyLogo,callback:function(e){t.$set(t.settings,"showSpotifyLogo",e)},expression:"settings.showSpotifyLogo"}})],1)]),n("div",{staticClass:"level is-mobile"},[t._m(1),n("div",{staticClass:"level-right"},[n("b-switch",{model:{value:t.settings.showAlbumArt,callback:function(e){t.$set(t.settings,"showAlbumArt",e)},expression:"settings.showAlbumArt"}})],1)]),n("div",{staticClass:"level is-mobile"},[t._m(2),n("div",{staticClass:"level-right"},[n("b-switch",{model:{value:t.settings.showArtist,callback:function(e){t.$set(t.settings,"showArtist",e)},expression:"settings.showArtist"}})],1)])]),n("div",{staticClass:"column"},[n("p",{staticClass:"is-size-4 has-text-weight-semibold"},[t._v("Preview")]),n("hr"),n("div",{staticClass:"preview"},[t._m(3),n("NowPlaying",{staticClass:"widget",attrs:{showAlbumArt:t.settings.showAlbumArt,showArtist:t.settings.showArtist,showSpotifyLogo:t.settings.showSpotifyLogo,accessToken:t.accessToken}})],1),n("p",{staticClass:"has-text-weight-semibold"},[t._v("Paste the following URL to a browser source:")]),n("textarea",{staticClass:"textarea",attrs:{readonly:""}},[t._v(t._s(t.browserSourceUrl))])])])])])],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"level-left"},[n("div",{staticClass:"level-item"},[n("p",[t._v("Show Spotify Logo")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"level-left"},[n("div",{staticClass:"level-item"},[n("p",[t._v("Show Album Art")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"level-left"},[n("div",{staticClass:"level-item"},[n("p",[t._v("Show Artist")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("figure",{staticClass:"screen image is-16by9"},[r("img",{attrs:{src:n("cebd"),alt:"Game Screen"}})])}],i=n("268f"),s=n.n(i),c=n("e265"),a=n.n(c),u=n("a4bb"),f=n.n(u),l=n("85f2"),p=n.n(l);function d(t,e,n){return e in t?p()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=f()(n);"function"===typeof a.a&&(r=r.concat(a()(n).filter(function(t){return s()(n,t).enumerable}))),r.forEach(function(e){d(t,e,n[e])})}return t}var v=n("72bf"),b=n.n(v),m=n("c6b6"),y=n("1788"),g={components:{LandingHead:m["a"],NowPlaying:y["a"]},computed:{accessToken:function(){var t=b.a.parse(this.$route.hash);return t["access_token"]},browserSourceUrl:function(){var t=this.$router.resolve({name:"nowPlaying"}),e="".concat(location.origin).concat(t.href),n=b.a.stringify(h({accessToken:this.accessToken},this.settings));return"".concat(e,"?").concat(n)}},data:function(){return{settings:{showSpotifyLogo:!0,showAlbumArt:!0,showArtist:!0}}}},w=g,x=(n("1cde"),n("2877")),O=Object(x["a"])(w,r,o,!1,null,"e8d57ed8",null);e["default"]=O.exports},"62a0":function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},"63b6":function(t,e,n){var r=n("e53d"),o=n("584a"),i=n("d864"),s=n("35e8"),c=n("07e3"),a="prototype",u=function(t,e,n){var f,l,p,d=t&u.F,h=t&u.G,v=t&u.S,b=t&u.P,m=t&u.B,y=t&u.W,g=h?o:o[e]||(o[e]={}),w=g[a],x=h?r:v?r[e]:(r[e]||{})[a];for(f in h&&(n=e),n)l=!d&&x&&void 0!==x[f],l&&c(g,f)||(p=l?x[f]:n[f],g[f]=h&&"function"!=typeof x[f]?n[f]:m&&l?i(p,r):y&&x[f]==p?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[a]=t[a],e}(p):b&&"function"==typeof p?i(Function.call,p):p,b&&((g.virtual||(g.virtual={}))[f]=p,t&u.R&&w&&!w[f]&&s(w,f,p)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},6453:function(t,e,n){"use strict";t.exports=(t=>encodeURIComponent(t).replace(/[!'()*]/g,t=>`%${t.charCodeAt(0).toString(16).toUpperCase()}`))},6718:function(t,e,n){var r=n("e53d"),o=n("584a"),i=n("b8e3"),s=n("ccb9"),c=n("d9f6").f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||c(e,t,{value:s.f(t)})}},"6abf":function(t,e,n){var r=n("e6f3"),o=n("1691").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},"6b30":function(t,e,n){t.exports=n.p+"img/spotify-logo.2b36f8ab.svg"},"6b4c":function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},"72bf":function(t,e,n){"use strict";const r=n("6453"),o=n("f234"),i=n("f32c");function s(t){switch(t.arrayFormat){case"index":return e=>(n,r)=>{const o=n.length;return void 0===r?n:null===r?[...n,[a(e,t),"[",o,"]"].join("")]:[...n,[a(e,t),"[",a(o,t),"]=",a(r,t)].join("")]};case"bracket":return e=>(n,r)=>{return void 0===r?n:null===r?[...n,[a(e,t),"[]"].join("")]:[...n,[a(e,t),"[]=",a(r,t)].join("")]};case"comma":return e=>(n,r,o)=>{return null===r||void 0===r||0===r.length?n:0===o?[[a(e,t),"=",a(r,t)].join("")]:[[n,a(r,t)].join(",")]};default:return e=>(n,r)=>{return void 0===r?n:null===r?[...n,a(e,t)]:[...n,[a(e,t),"=",a(r,t)].join("")]}}}function c(t){let e;switch(t.arrayFormat){case"index":return(t,n,r)=>{e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===r[t]&&(r[t]={}),r[t][e[1]]=n):r[t]=n};case"bracket":return(t,n,r)=>{e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==r[t]?r[t]=[].concat(r[t],n):r[t]=[n]:r[t]=n};case"comma":return(t,e,n)=>{const r="string"===typeof e&&e.split("").indexOf(",")>-1,o=r?e.split(","):e;n[t]=o};default:return(t,e,n)=>{void 0!==n[t]?n[t]=[].concat(n[t],e):n[t]=e}}}function a(t,e){return e.encode?e.strict?r(t):encodeURIComponent(t):t}function u(t,e){return e.decode?o(t):t}function f(t){return Array.isArray(t)?t.sort():"object"===typeof t?f(Object.keys(t)).sort((t,e)=>Number(t)-Number(e)).map(e=>t[e]):t}function l(t){const e=t.indexOf("#");return-1!==e&&(t=t.slice(0,e)),t}function p(t){t=l(t);const e=t.indexOf("?");return-1===e?"":t.slice(e+1)}function d(t,e){e=Object.assign({decode:!0,arrayFormat:"none"},e);const n=c(e),r=Object.create(null);if("string"!==typeof t)return r;if(t=t.trim().replace(/^[?#&]/,""),!t)return r;for(const o of t.split("&")){let[t,s]=i(o.replace(/\+/g," "),"=");s=void 0===s?null:u(s,e),n(u(t,e),s,r)}return Object.keys(r).sort().reduce((t,e)=>{const n=r[e];return Boolean(n)&&"object"===typeof n&&!Array.isArray(n)?t[e]=f(n):t[e]=n,t},Object.create(null))}e.extract=p,e.parse=d,e.stringify=((t,e)=>{if(!t)return"";e=Object.assign({encode:!0,strict:!0,arrayFormat:"none"},e);const n=s(e),r=Object.keys(t);return!1!==e.sort&&r.sort(e.sort),r.map(r=>{const o=t[r];return void 0===o?"":null===o?a(r,e):Array.isArray(o)?o.reduce(n(r),[]).join("&"):a(r,e)+"="+a(o,e)}).filter(t=>t.length>0).join("&")}),e.parseUrl=((t,e)=>{return{url:l(t).split("?")[0]||"",query:d(p(t),e)}})},"794b":function(t,e,n){t.exports=!n("8e60")&&!n("294c")(function(){return 7!=Object.defineProperty(n("1ec9")("div"),"a",{get:function(){return 7}}).a})},"79aa":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},"7e90":function(t,e,n){var r=n("d9f6"),o=n("e4ae"),i=n("c3a1");t.exports=n("8e60")?Object.defineProperties:function(t,e){o(t);var n,s=i(e),c=s.length,a=0;while(c>a)r.f(t,n=s[a++],e[n]);return t}},"7f7f":function(t,e,n){var r=n("86cc").f,o=Function.prototype,i=/^\s*function ([^ (]*)/,s="name";s in o||n("9e1e")&&r(o,s,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},"85f2":function(t,e,n){t.exports=n("454f")},"8aae":function(t,e,n){n("32a6"),t.exports=n("584a").Object.keys},"8e60":function(t,e,n){t.exports=!n("294c")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},9003:function(t,e,n){var r=n("6b4c");t.exports=Array.isArray||function(t){return"Array"==r(t)}},9138:function(t,e,n){t.exports=n("35e8")},"9aa9":function(t,e){e.f=Object.getOwnPropertySymbols},a159:function(t,e,n){var r=n("e4ae"),o=n("7e90"),i=n("1691"),s=n("5559")("IE_PROTO"),c=function(){},a="prototype",u=function(){var t,e=n("1ec9")("iframe"),r=i.length,o="<",s=">";e.style.display="none",n("32fc").appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(o+"script"+s+"document.F=Object"+o+"/script"+s),t.close(),u=t.F;while(r--)delete u[a][i[r]];return u()};t.exports=Object.create||function(t,e){var n;return null!==t?(c[a]=r(t),n=new c,c[a]=null,n[s]=t):n=u(),void 0===e?n:o(n,e)}},a4bb:function(t,e,n){t.exports=n("8aae")},aebd:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},b447:function(t,e,n){var r=n("3a38"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},b537:function(t,e,n){},b8e3:function(t,e){t.exports=!0},bf0b:function(t,e,n){var r=n("355d"),o=n("aebd"),i=n("36c3"),s=n("1bc3"),c=n("07e3"),a=n("794b"),u=Object.getOwnPropertyDescriptor;e.f=n("8e60")?u:function(t,e){if(t=i(t),e=s(e,!0),a)try{return u(t,e)}catch(n){}if(c(t,e))return o(!r.f.call(t,e),t[e])}},bf90:function(t,e,n){var r=n("36c3"),o=n("bf0b").f;n("ce7e")("getOwnPropertyDescriptor",function(){return function(t,e){return o(r(t),e)}})},c3a1:function(t,e,n){var r=n("e6f3"),o=n("1691");t.exports=Object.keys||function(t){return r(t,o)}},c6b6:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hero"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[n("div",{staticClass:"content"},[t._m(0),n("p",{staticClass:"is-size-3"},[t._v("Overlay for OBS & XSplit")]),n("p",{directives:[{name:"show",rawName:"v-show",value:t.showLoginButton,expression:"showLoginButton"}]},[n("a",{staticClass:"button is-success is-large is-rounded is-outlined",attrs:{href:t.loginUri}},[t._v("\n            Login with Spotify\n          ")])])])])])])},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"image spotify-logo"},[r("img",{attrs:{src:n("6b30"),alt:"Spotify Logo"}})])}],i={props:{showLoginButton:{type:Boolean,default:!0},loginUri:{type:String,default:null}}},s=i,c=(n("2bb7"),n("2877")),a=Object(c["a"])(s,r,o,!1,null,"0a41f9c1",null);e["a"]=a.exports},ccb9:function(t,e,n){e.f=n("5168")},ce7e:function(t,e,n){var r=n("63b6"),o=n("584a"),i=n("294c");t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],s={};s[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",s)}},cebd:function(t,e,n){t.exports=n.p+"img/sample-game-screen.4674858f.jpg"},d864:function(t,e,n){var r=n("79aa");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},d9f6:function(t,e,n){var r=n("e4ae"),o=n("794b"),i=n("1bc3"),s=Object.defineProperty;e.f=n("8e60")?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return s(t,e,n)}catch(c){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},dbdb:function(t,e,n){var r=n("584a"),o=n("e53d"),i="__core-js_shared__",s=o[i]||(o[i]={});(t.exports=function(t,e){return s[t]||(s[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n("b8e3")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},e0a9:function(t,e,n){},e265:function(t,e,n){t.exports=n("ed33")},e4ae:function(t,e,n){var r=n("f772");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},e53d:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},e6f3:function(t,e,n){var r=n("07e3"),o=n("36c3"),i=n("5b4e")(!1),s=n("5559")("IE_PROTO");t.exports=function(t,e){var n,c=o(t),a=0,u=[];for(n in c)n!=s&&r(c,n)&&u.push(n);while(e.length>a)r(c,n=e[a++])&&(~i(u,n)||u.push(n));return u}},ebfd:function(t,e,n){var r=n("62a0")("meta"),o=n("f772"),i=n("07e3"),s=n("d9f6").f,c=0,a=Object.isExtensible||function(){return!0},u=!n("294c")(function(){return a(Object.preventExtensions({}))}),f=function(t){s(t,r,{value:{i:"O"+ ++c,w:{}}})},l=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!a(t))return"F";if(!e)return"E";f(t)}return t[r].i},p=function(t,e){if(!i(t,r)){if(!a(t))return!0;if(!e)return!1;f(t)}return t[r].w},d=function(t){return u&&h.NEED&&a(t)&&!i(t,r)&&f(t),t},h=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:p,onFreeze:d}},ed33:function(t,e,n){n("014b"),t.exports=n("584a").Object.getOwnPropertySymbols},ed8a:function(t,e,n){t.exports=n.p+"img/spotify-logo-without-text.fc249917.svg"},f234:function(t,e,n){"use strict";var r="%[a-f0-9]{2}",o=new RegExp(r,"gi"),i=new RegExp("("+r+")+","gi");function s(t,e){try{return decodeURIComponent(t.join(""))}catch(o){}if(1===t.length)return t;e=e||1;var n=t.slice(0,e),r=t.slice(e);return Array.prototype.concat.call([],s(n),s(r))}function c(t){try{return decodeURIComponent(t)}catch(r){for(var e=t.match(o),n=1;n<e.length;n++)t=s(e,n).join(""),e=t.match(o);return t}}function a(t){var e={"%FE%FF":"��","%FF%FE":"��"},n=i.exec(t);while(n){try{e[n[0]]=decodeURIComponent(n[0])}catch(u){var r=c(n[0]);r!==n[0]&&(e[n[0]]=r)}n=i.exec(t)}e["%C2"]="�";for(var o=Object.keys(e),s=0;s<o.length;s++){var a=o[s];t=t.replace(new RegExp(a,"g"),e[a])}return t}t.exports=function(t){if("string"!==typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return a(t)}}},f32c:function(t,e,n){"use strict";t.exports=((t,e)=>{if("string"!==typeof t||"string"!==typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[t];const n=t.indexOf(e);return-1===n?[t]:[t.slice(0,n),t.slice(n+e.length)]})},f772:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},fde4:function(t,e,n){n("bf90");var r=n("584a").Object;t.exports=function(t,e){return r.getOwnPropertyDescriptor(t,e)}}}]);
//# sourceMappingURL=chunk-7c688671.004b6e90.js.map