(function (e) {
   function t(t) {
      for (var r, s, a = t[0], c = t[1], u = t[2], l = 0, d = []; l < a.length; l++) s = a[l], Object.prototype.hasOwnProperty.call(o, s) && o[s] && d.push(o[s][0]), o[s] = 0;
      for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
      p && p(t);
      while (d.length) d.shift()();
      return i.push.apply(i, u || []), n()
   }

   function n() {
      for (var e, t = 0; t < i.length; t++) {
         for (var n = i[t], r = !0, s = 1; s < n.length; s++) {
            var a = n[s];
            0 !== o[a] && (r = !1)
         }
         r && (i.splice(t--, 1), e = c(c.s = n[0]))
      }
      return e
   }
   var r = {},
      s = {
         app: 0
      },
      o = {
         app: 0
      },
      i = [];

   function a(e) {
      return c.p + "js/" + ({} [e] || e) + "." + {
         "chunk-04ae94dc": "2e288596",
         "chunk-5e2de323": "b057986e",
         "chunk-6b3d82db": "6e953144",
         "chunk-d44b047e": "4894052f",
         "chunk-0c268cd6": "355f2eca",
         "chunk-10e6a05d": "4435971c",
         "chunk-1327c0a5": "4d245a9e",
         "chunk-1614e278": "22c61463",
         "chunk-17424664": "33a19826",
         "chunk-1cc7ac9e": "3fd00e9f",
         "chunk-24ca37e7": "e0b89dd3",
         "chunk-25536db6": "e4e6f832",
         "chunk-2d217c19": "07510075",
         "chunk-4c3acbd1": "285f57a1",
         "chunk-2c88a14c": "10722ccf",
         "chunk-31993bc3": "1521c3ce",
         "chunk-326eecf1": "6e3722c0",
         "chunk-33475c6a": "01ccc273",
         "chunk-335fac3a": "6c9a6076",
         "chunk-47037e3f": "c03e1537",
         "chunk-5864a772": "0cf29b8d",
         "chunk-114501fc": "b824e1ee",
         "chunk-592057bb": "3dacbf67",
         "chunk-65a4f00c": "cbe3a0d8",
         "chunk-68d2811e": "c5fc2564",
         "chunk-6620a91c": "5e75da1d",
         "chunk-6f69b07a": "10aea778",
         "chunk-b99289dc": "c26ea03a",
         "chunk-ad0b650e": "290e49ab",
         "chunk-70330e27": "130bb9ce",
         "chunk-795a29b7": "28a4a932",
         "chunk-918b36d2": "6ce39f2d",
         "chunk-987a3928": "3ecbc5f6",
         "chunk-a9464d02": "fadb78bc",
         "chunk-090d2b2e": "bd6241dd",
         "chunk-19beea7d": "8936fad2",
         "chunk-77687e4a": "de1e186d",
         "chunk-4fb07ccc": "c5723d15",
         "chunk-4fdf88b5": "6428e481",
         "chunk-8335e1f2": "552f5b5a",
         "chunk-cefa0c9c": "1479e0ee",
         "chunk-339c947c": "1576552c",
         "chunk-ad27a056": "ed303966",
         "chunk-bd2dd5a4": "121a11b7",
         "chunk-c01ed9d6": "ee431f17",
         "chunk-d3a65216": "99eb74fe",
         "chunk-f1eda6f2": "6025bd5c",
         "chunk-2d60332c": "06112a95",
         "chunk-83efadf4": "8aa04537",
         "chunk-d82e05ec": "87621793",
         "chunk-5f55a6db": "2a113611",
         "chunk-f7b852d4": "07726649"
      } [e] + ".js"
   }

   function c(t) {
      if (r[t]) return r[t].exports;
      var n = r[t] = {
         i: t,
         l: !1,
         exports: {}
      };
      return e[t].call(n.exports, n, n.exports, c), n.l = !0, n.exports
   }
   c.e = function (e) {
      var t = [],
         n = {
            "chunk-04ae94dc": 1,
            "chunk-5e2de323": 1,
            "chunk-6b3d82db": 1,
            "chunk-d44b047e": 1,
            "chunk-0c268cd6": 1,
            "chunk-10e6a05d": 1,
            "chunk-1327c0a5": 1,
            "chunk-1614e278": 1,
            "chunk-17424664": 1,
            "chunk-1cc7ac9e": 1,
            "chunk-24ca37e7": 1,
            "chunk-25536db6": 1,
            "chunk-4c3acbd1": 1,
            "chunk-2c88a14c": 1,
            "chunk-31993bc3": 1,
            "chunk-326eecf1": 1,
            "chunk-33475c6a": 1,
            "chunk-335fac3a": 1,
            "chunk-47037e3f": 1,
            "chunk-5864a772": 1,
            "chunk-114501fc": 1,
            "chunk-592057bb": 1,
            "chunk-65a4f00c": 1,
            "chunk-68d2811e": 1,
            "chunk-6620a91c": 1,
            "chunk-6f69b07a": 1,
            "chunk-b99289dc": 1,
            "chunk-ad0b650e": 1,
            "chunk-70330e27": 1,
            "chunk-795a29b7": 1,
            "chunk-918b36d2": 1,
            "chunk-987a3928": 1,
            "chunk-a9464d02": 1,
            "chunk-090d2b2e": 1,
            "chunk-19beea7d": 1,
            "chunk-77687e4a": 1,
            "chunk-4fb07ccc": 1,
            "chunk-4fdf88b5": 1,
            "chunk-8335e1f2": 1,
            "chunk-cefa0c9c": 1,
            "chunk-339c947c": 1,
            "chunk-ad27a056": 1,
            "chunk-bd2dd5a4": 1,
            "chunk-c01ed9d6": 1,
            "chunk-d3a65216": 1,
            "chunk-f1eda6f2": 1,
            "chunk-2d60332c": 1,
            "chunk-83efadf4": 1,
            "chunk-d82e05ec": 1,
            "chunk-5f55a6db": 1,
            "chunk-f7b852d4": 1
         };
      s[e] ? t.push(s[e]) : 0 !== s[e] && n[e] && t.push(s[e] = new Promise((function (t, n) {
         for (var r = "css/" + ({} [e] || e) + "." + {
               "chunk-04ae94dc": "751bacc9",
               "chunk-5e2de323": "5b60ad58",
               "chunk-6b3d82db": "da2722d6",
               "chunk-d44b047e": "5bcd8ac9",
               "chunk-0c268cd6": "b56f77a0",
               "chunk-10e6a05d": "0a76f51e",
               "chunk-1327c0a5": "1ccefcc6",
               "chunk-1614e278": "fcf6fcaa",
               "chunk-17424664": "d15e252c",
               "chunk-1cc7ac9e": "8ff6004c",
               "chunk-24ca37e7": "6124e894",
               "chunk-25536db6": "e7d9757d",
               "chunk-2d217c19": "31d6cfe0",
               "chunk-4c3acbd1": "bd5e7e1d",
               "chunk-2c88a14c": "11c87aaa",
               "chunk-31993bc3": "b8b7a1e8",
               "chunk-326eecf1": "81d1d967",
               "chunk-33475c6a": "5ddc1784",
               "chunk-335fac3a": "5f6f0db0",
               "chunk-47037e3f": "0a1bbec6",
               "chunk-5864a772": "159d724e",
               "chunk-114501fc": "9da1efeb",
               "chunk-592057bb": "3f9b1acf",
               "chunk-65a4f00c": "ff287f24",
               "chunk-68d2811e": "5da981df",
               "chunk-6620a91c": "d92cb907",
               "chunk-6f69b07a": "26f27519",
               "chunk-b99289dc": "786ccb45",
               "chunk-ad0b650e": "bd00e3c5",
               "chunk-70330e27": "f0c14e52",
               "chunk-795a29b7": "b32e7f33",
               "chunk-918b36d2": "90f121cf",
               "chunk-987a3928": "11d143b4",
               "chunk-a9464d02": "1575b881",
               "chunk-090d2b2e": "6e178ca9",
               "chunk-19beea7d": "4108e9db",
               "chunk-77687e4a": "6fe03fb8",
               "chunk-4fb07ccc": "10195929",
               "chunk-4fdf88b5": "d446c4a8",
               "chunk-8335e1f2": "ed09cd42",
               "chunk-cefa0c9c": "6d5459b7",
               "chunk-339c947c": "42e7fc65",
               "chunk-ad27a056": "1bf0f9b6",
               "chunk-bd2dd5a4": "93bcbdba",
               "chunk-c01ed9d6": "8ef47354",
               "chunk-d3a65216": "374868a0",
               "chunk-f1eda6f2": "3d29bee8",
               "chunk-2d60332c": "7d1fdccc",
               "chunk-83efadf4": "404596e5",
               "chunk-d82e05ec": "8fe807e0",
               "chunk-5f55a6db": "9efa7679",
               "chunk-f7b852d4": "78d72550"
            } [e] + ".css", o = c.p + r, i = document.getElementsByTagName("link"), a = 0; a < i.length; a++) {
            var u = i[a],
               l = u.getAttribute("data-href") || u.getAttribute("href");
            if ("stylesheet" === u.rel && (l === r || l === o)) return t()
         }
         var d = document.getElementsByTagName("style");
         for (a = 0; a < d.length; a++) {
            u = d[a], l = u.getAttribute("data-href");
            if (l === r || l === o) return t()
         }
         var p = document.createElement("link");
         p.rel = "stylesheet", p.type = "text/css", p.onload = t, p.onerror = function (t) {
            var r = t && t.target && t.target.src || o,
               i = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ")");
            i.code = "CSS_CHUNK_LOAD_FAILED", i.request = r, delete s[e], p.parentNode.removeChild(p), n(i)
         }, p.href = o;
         var f = document.getElementsByTagName("head")[0];
         f.appendChild(p)
      })).then((function () {
         s[e] = 0
      })));
      var r = o[e];
      if (0 !== r)
         if (r) t.push(r[2]);
         else {
            var i = new Promise((function (t, n) {
               r = o[e] = [t, n]
            }));
            t.push(r[2] = i);
            var u, l = document.createElement("script");
            l.charset = "utf-8", l.timeout = 120, c.nc && l.setAttribute("nonce", c.nc), l.src = a(e);
            var d = new Error;
            u = function (t) {
               l.onerror = l.onload = null, clearTimeout(p);
               var n = o[e];
               if (0 !== n) {
                  if (n) {
                     var r = t && ("load" === t.type ? "missing" : t.type),
                        s = t && t.target && t.target.src;
                     d.message = "Loading chunk " + e + " failed.\n(" + r + ": " + s + ")", d.name = "ChunkLoadError", d.type = r, d.request = s, n[1](d)
                  }
                  o[e] = void 0
               }
            };
            var p = setTimeout((function () {
               u({
                  type: "timeout",
                  target: l
               })
            }), 12e4);
            l.onerror = l.onload = u, document.head.appendChild(l)
         } return Promise.all(t)
   }, c.m = e, c.c = r, c.d = function (e, t, n) {
      c.o(e, t) || Object.defineProperty(e, t, {
         enumerable: !0,
         get: n
      })
   }, c.r = function (e) {
      "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
         value: "Module"
      }), Object.defineProperty(e, "__esModule", {
         value: !0
      })
   }, c.t = function (e, t) {
      if (1 & t && (e = c(e)), 8 & t) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (c.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
         }), 2 & t && "string" != typeof e)
         for (var r in e) c.d(n, r, function (t) {
            return e[t]
         }.bind(null, r));
      return n
   }, c.n = function (e) {
      var t = e && e.__esModule ? function () {
         return e["default"]
      } : function () {
         return e
      };
      return c.d(t, "a", t), t
   }, c.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
   }, c.p = "/", c.oe = function (e) {
      throw console.error(e), e
   };
   var u = window["webpackJsonp"] = window["webpackJsonp"] || [],
      l = u.push.bind(u);
   u.push = t, u = u.slice();
   for (var d = 0; d < u.length; d++) t(u[d]);
   var p = l;
   i.push([4, "chunk-vendors"]), n()
})({
   0: function (e, t) {},
   "0070": function (e, t, n) {},
   "01aa": function (e, t, n) {
      "use strict";
      n("bb28")
   },
   "034f": function (e, t, n) {
      "use strict";
      n("85ec")
   },
   "0356": function (e, t, n) {},
   "0483": function (e, t, n) {
      "use strict";
      n("69e6")
   },
   "0484": function (e, t, n) {
      e.exports = n.p + "img/no-requests.640c4d8f.svg"
   },
   "0764": function (e, t, n) {},
   "087e": function (e, t, n) {
      "use strict";
      var r = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("div", {
               staticClass: "ui-input-default"
            }, [e.noValidate ? n("div", [e.label ? n("label", {
               staticClass: "ui-label ui-input-default__label",
               attrs: {
                  for: "type-" + e.label
               }
            }, [e._v(e._s(e.label))]) : e._e(), n("div", {
               class: {
                  currency: "input-symbol-dollar"
               }
            }, [n("b-form-input", {
               staticClass: "ui-input-default__input",
               attrs: {
                  id: e.id ? e.id : "type-" + e.label,
                  type: e.type,
                  placeholder: e.placeholder,
                  value: e.value,
                  min: e.min,
                  max: e.max,
                  disabled: !!e.disabled && e.disabled,
                  readonly: e.readonly,
                  password: e.password
               },
               on: {
                  input: e.input
               }
            })], 1)]) : n("validation-provider", {
               attrs: {
                  name: e.label,
                  rules: "required"
               },
               scopedSlots: e._u([{
                  key: "default",
                  fn: function (t) {
                     return [e.label ? n("label", {
                        staticClass: "ui-label ui-input-default__label",
                        attrs: {
                           for: "type-" + e.label
                        }
                     }, [e._v(e._s(e.label))]) : e._e(), n("div", {
                        class: {
                           "input-symbol-dollar": e.currency
                        }
                     }, [n("b-form-input", {
                        staticClass: "ui-input-default__input",
                        class: {
                           "input-currency": e.currency
                        },
                        attrs: {
                           id: e.id ? e.id : "type-" + e.label,
                           type: e.type,
                           placeholder: e.placeholder,
                           value: e.value,
                           min: e.min,
                           max: e.max,
                           state: e.getValidationState(t),
                           disabled: !!e.disabled && e.disabled
                        },
                        on: {
                           input: e.input
                        }
                     })], 1), n("p", [e._v(e._s(e.hint))]), n("b-form-invalid-feedback", {
                        staticClass: "mt-1",
                        attrs: {
                           id: "input-1-live-feedback"
                        }
                     }, [e._v(e._s(t.errors[0]) + " ")])]
                  }
               }])
            }), e._t("default")], 2)
         },
         s = [],
         o = n("5530"),
         i = (n("a9e3"), n("7bb1")),
         a = n("4c93");
      Object(i["c"])("required", Object(o["a"])(Object(o["a"])({}, a["c"]), {}, {
         message: "This field is required"
      }));
      var c = {
            components: {
               ValidationProvider: i["b"]
            },
            name: "BaseInput",
            props: {
               type: String,
               placeholder: String,
               value: [String, Number, Date],
               label: String,
               propRules: String,
               hint: String,
               id: String,
               disabled: Boolean,
               min: String,
               max: String,
               noValidate: Boolean,
               currency: Boolean,
               readonly: Boolean,
               password: Boolean,
               email: Boolean
            },
            emits: ["input", "getInputValue"],
            data: function () {
               return {
                  inputValue: this.value
               }
            },
            computed: {},
            methods: {
               input: function (e) {
                  this.inputValue = e, this.$emit("input", e)
               },
               getInputValue: function () {
                  return this.inputValue
               },
               getValidationState: function (e) {
                  var t = e.dirty,
                     n = e.validated,
                     r = e.valid,
                     s = void 0 === r ? null : r,
                     o = e.errors;
                  return console.log(o[0]), t || n ? s : null
               }
            }
         },
         u = c,
         l = (n("6857"), n("2877")),
         d = Object(l["a"])(u, r, s, !1, null, "6212f74e", null);
      t["a"] = d.exports
   },
   "09ea": function (e, t, n) {
      "use strict";
      n("4c5b")
   },
   "0d0b": function (e, t, n) {
      "use strict";
      n("a324")
   },
   "0e28": function (e, t, n) {
      "use strict";
      n("4fc7")
   },
   "0e56": function (e, t, n) {
      "use strict";
      var r = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("section", {
               staticClass: "section section--footer"
            }, [n("div", {
               staticClass: "section__inner ui-flex-col ui-align-center"
            }, [n("img", {
               staticClass: "logo",
               attrs: {
                  src: e.logo
               }
            }), e._m(0), n("p", {
               staticClass: "text-center"
            }, [e._v(" © " + e._s((new Date).getFullYear()) + " Bizfluence ")])])])
         },
         s = [function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("div", {
               staticClass: "section__inner__content"
            }, [n("a", {
               staticClass: "footer-social footer-social--twitter",
               attrs: {
                  href: "https://twitter.com/BizfluenceApp",
                  target: "_blank"
               }
            }), n("a", {
               staticClass: "footer-social footer-social--fb",
               attrs: {
                  href: "https://www.facebook.com/bizfluenceapp/",
                  target: "_blank"
               }
            }), n("a", {
               staticClass: "footer-social footer-social--in",
               attrs: {
                  href: "https://www.linkedin.com/company/bizfluence-app",
                  target: "_blank"
               }
            })])
         }],
         o = n("b958"),
         i = n.n(o),
         a = {
            name: "SectionFooter",
            data: function () {
               return {
                  logo: i.a
               }
            }
         },
         c = a,
         u = (n("0d0b"), n("2877")),
         l = Object(u["a"])(c, r, s, !1, null, "57e0d5ea", null);
      t["a"] = l.exports
   },
   1: function (e, t) {},
   1043: function (e, t, n) {
      e.exports = n.p + "img/attachment-icon.275c953e.svg"
   },
   1222: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("b-dropdown-item", {
               staticClass: "no-margin no-padding",
               attrs: {
                  href: "#"
               }
            }, [n("div", {
               staticClass: "list-item-bold",
               class: e.internalIcon ? "greenText" : null
            }, [e.internalIcon ? n("span", {
               staticClass: "internalIcon",
               class: e.internalIcon
            }) : e.icon ? n("img", {
               staticClass: "list-item-bold__icon",
               attrs: {
                  src: e.icon ? e.icon : null
               }
            }) : e._e(), e._v(" " + e._s(e.name) + " ")])])
         },
         s = [],
         o = {
            name: "BaseListItemBold",
            props: {
               href: {
                  type: String
               },
               icon: {
                  type: String,
                  required: !1
               },
               internalIcon: {
                  required: !1
               },
               name: {
                  type: String,
                  required: !0
               }
            },
            mounted: function () {
               console.log(this.internalIcon)
            }
         },
         i = o,
         a = (n("ff09"), n("2877")),
         c = Object(a["a"])(i, r, s, !1, null, "4efe6f1c", null);
      t["default"] = c.exports
   },
   "123f": function (e, t, n) {
      "use strict";
      n.r(t);
      var r = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("div", {
               staticClass: "search-bar"
            }, [e.showArrowIcon ? n("span", {
               staticClass: "icon-ic-arrow-back arrow-icon",
               on: {
                  click: e.onImageClick
               }
            }) : e._e(), n("b-input-group", {
               staticClass: "base-search-wr"
            }, [e.showArrowIcon ? e._e() : n("b-input-group-prepend", {
               on: {
                  click: e.onImageClick
               }
            }, [n("span", {
               staticClass: "ui-icon"
            }, [n("svg", {
               attrs: {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  stroke: "currentColor"
               }
            }, [n("path", {
               attrs: {
                  d: "M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z",
                  stroke: "white",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
               }
            }), n("path", {
               attrs: {
                  d: "M14.0001 14.0016L11.1001 11.1016",
                  stroke: "white",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
               }
            })])])]), n("b-form-input", {
               ref: "input",
               staticClass: "base-search",
               attrs: {
                  size: "sm",
                  placeholder: e.placeholder,
                  disabled: e.disabled
               },
               on: {
                  focusin: e.onFocus,
                  focusout: e.onFocusOut
               },
               model: {
                  value: e.searchText,
                  callback: function (t) {
                     e.searchText = t
                  },
                  expression: "searchText"
               }
            })], 1)], 1)
         },
         s = [],
         o = {
            name: "BaseInputSearch",
            data: function () {
               return {
                  searchText: ""
               }
            },
            props: {
               placeholder: {
                  type: String,
                  required: !0
               },
               clearOnFocusOut: {
                  type: Boolean,
                  required: !0,
                  default: !1
               },
               showArrowIcon: {
                  type: Boolean,
                  default: !1
               },
               disabled: {
                  type: Boolean,
                  default: !1
               }
            },
            emits: ["input", "imageClick", "imageClickOut", "focusIn", "focusOut"],
            watch: {
               searchText: function () {
                  this.$emit("input", this.searchText)
               }
            },
            methods: {
               onImageClick: function () {
                  this.$emit("imageClick")
               },
               onImageClickOut: function () {
                  this.$emit("imageClickOut")
               },
               onFocus: function () {
                  this.$emit("focusIn")
               },
               onFocusOut: function () {
                  this.clearOnFocusOut && (this.searchText = ""), this.$emit("focusOut")
               }
            }
         },
         i = o,
         a = (n("7a2d"), n("2877")),
         c = Object(a["a"])(i, r, s, !1, null, "2940dd69", null);
      t["default"] = c.exports
   },
   "147f": function (e, t, n) {
      "use strict";
      n("0070")
   },
   1581: function (e, t, n) {
      e.exports = n.p + "img/id-card-line.a7a26438.svg"
   },
   "15df": function (e, t, n) {
      "use strict";
      n("f62f")
   },
   "162f": function (e, t, n) {},
   "16e7": function (e, t, n) {},
   "17c0": function (e, t, n) {
      "use strict";
      n("16e7")
   },
   "17ff": function (e, t, n) {
      "use strict";
      n.r(t);
      var r = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("BaseModal", {
               attrs: {
                  mount: e.show,
                  size: "s",
                  "no-close-on-backdrop": !0,
                  id: e.id,
                  hideFooter: "",
                  shortHeight: ""
               },
               on: {
                  hide: e.onHide,
                  onShow: e.onShow,
                  onClose: e.onHide
               },
               scopedSlots: e._u([{
                  key: "header",
                  fn: function () {
                     return [n("div", {
                        staticClass: "error__container__image"
                     }), n("button", {
                        staticClass: "ui-btn ui-btn__transparent header-close",
                        on: {
                           click: function (t) {
                              return e.onHide()
                           }
                        }
                     }, [n("span", {
                        staticClass: "icon-close",
                        style: {
                           marginRight: 0
                        }
                     })])]
                  },
                  proxy: !0
               }, {
                  key: "body",
                  fn: function () {
                     return [n("div", {
                        staticClass: "error"
                     }, [n("div", {
                        staticClass: "error__container"
                     }, [n("div", {
                        staticClass: "error__container__image",
                        class: "media-icon-" + e.modalMessageType
                     }, [n("span", {
                        class: "" + e.errorIcon
                     })]), n("div", {
                        staticClass: "error__container__content"
                     }, [e.generalError ? e._e() : n("div", {
                        staticClass: "error__container__text"
                     }, [e._v(" " + e._s("error" == e.modalMessageType ? "Upload Failed" : "Upload Complete") + " ")]), n("div", {
                        staticClass: "error__container__subtext"
                     }, [e._v(" " + e._s(e.modalMessage) + " ")])]), n("div", {
                        staticClass: "error__footer"
                     }, [e.generalError ? n("button", {
                        staticClass: "ui-btn ui-btn__primary",
                        on: {
                           click: function (t) {
                              return t.preventDefault(), e.onHide(t)
                           }
                        }
                     }, [e._v(" Okay ")]) : n("div", {
                        staticClass: "error__footer__content"
                     }, ["uploadError" == e.modalMessageType ? n("button", {
                        staticClass: "ui-btn ui-btn__primary",
                        on: {
                           click: e.upload
                        }
                     }, [e._v(" Try a different file ")]) : n("button", {
                        staticClass: "ui-btn ui-btn__primary",
                        on: {
                           click: e.upload
                        }
                     }, [e._v(" Try again ")]), n("a", {
                        staticClass: "ui-link media-error__footer__subtext",
                        attrs: {
                           href: "javascript:void(0)"
                        },
                        on: {
                           click: function (t) {
                              return t.preventDefault(), e.onHide(t)
                           }
                        }
                     }, [e._v(" Not now ")])])])])])]
                  },
                  proxy: !0
               }])
            })
         },
         s = [],
         o = n("7299"),
         i = {
            name: "ErrorModal",
            components: {
               BaseModal: o["default"]
            },
            props: {
               id: {
                  type: String,
                  required: !0
               },
               modalMessage: {
                  type: String,
                  required: !1
               },
               modalMessageType: {
                  type: String,
                  required: !1
               },
               generalError: {
                  type: Boolean,
                  default: !1
               }
            },
            data: function () {
               return {
                  show: !1
               }
            },
            computed: {
               errorIcon: function () {
                  return this.generalError ? "icon-exclamation-triangle" : "error" == this.modalMessageType ? "icon-upload-error" : "icon-upload-success"
               }
            },
            methods: {
               upload: function () {
                  this.$emit("uploadAnotherFile")
               },
               onHide: function () {
                  this.show = !1, this.$emit("close")
               },
               onShow: function () {
                  this.show = !0
               }
            }
         },
         a = i,
         c = (n("a06a"), n("2877")),
         u = Object(c["a"])(a, r, s, !1, null, "11249b31", null);
      t["default"] = u.exports
   },
   "186b": function (e, t, n) {},
   "19ed": function (e, t, n) {},
   "1ea6": function (e, t, n) {
      e.exports = n.p + "img/more-vertical-icon.59f56724.svg"
   },
   "1ee9": function (e, t, n) {},
   2: function (e, t) {},
   2144: function (e, t, n) {},
   "21b8": function (e, t, n) {},
   "226d": function (e, t, n) {},
   "22ce": function (e, t, n) {
      "use strict";
      n("d68c")
   },
   2404: function (e, t, n) {
      "use strict";
      n("a78d")
   },
   2452: function (e, t, n) {
      e.exports = n.p + "img/icon.3814fda2.svg"
   },
   2483: function (e, t, n) {
      "use strict";
      n("5c4c")
   },
   "24c6": function (e, t, n) {
      e.exports = n.p + "img/ic-arrow-back.d62a4193.svg"
   },
   2840: function (e, t, n) {
      "use strict";
      n("30c4")
   },
   "287c": function (e, t, n) {},
   "292e": function (e, t, n) {
      e.exports = n.p + "img/requests-icon.4d5ab1f1.svg"
   },
   "296b": function (e, t, n) {
      "use strict";
      n("b0de")
   },
   "298d": function (e, t, n) {
      "use strict";
      n("4d4f")
   },
   "29b2": function (e, t, n) {
      "use strict";
      var r, s = n("daa8"),
         o = n("5132"),
         i = n.n(o);
      t["a"] = function (e, t) {
         return r || (r = new i.a({
            debug: !0,
            connection: Object(s["a"])("https://temp-api.bizfluenceapp.com/", {
               query: "token=" + t,
               transports: ["websocket"]
            }),
            vuex: {
               store: e,
               actionPrefix: "SOCKET_",
               mutationPrefix: "SOCKET_"
            }
         })), r
      }
   },
   "2b9f": function (e, t, n) {},
   "2db6": function (e, t, n) {
      e.exports = n.p + "media/vid-desktop.ef974b6f.mp4"
   },
   "2dcc": function (e, t, n) {},
   "2de5": function (e, t, n) {},
   "2eea": function (e, t, n) {
      e.exports = n.p + "img/manage-chats-icon.7789755f.svg"
   },
   "2f78": function (e, t, n) {
      "use strict";
      n("ef95")
   },
   3: function (e, t) {},
   "30c4": function (e, t, n) {},
   3140: function (e, t, n) {
      "use strict";
      n("c7e5")
   },
   "32aa": function (e, t, n) {},
   "37b9": function (e, t, n) {
      "use strict";
      var r = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("div", {
               staticClass: "ar"
            }, [n("div", {
               staticClass: "ar-content",
               class: {
                  ar__blur: e.isUploading
               }
            }, [n("div", {
               staticClass: "ar-recorder"
            }, [n("icon-button", {
               staticClass: "ar-icon ar-icon__lg",
               class: {
                  "ar-icon--rec": e.isRecording,
                  "ar-icon--pulse": e.isRecording && e.volume > .02
               },
               attrs: {
                  name: e.iconButtonType
               },
               nativeOn: {
                  click: function (t) {
                     return e.toggleRecorder(t)
                  }
               }
            })], 1)])])
         },
         s = [],
         o = (n("a9e3"), n("a434"), n("73b8")),
         i = n("d4ec"),
         a = n("bee2"),
         c = (n("159b"), n("fb6a"), n("cfc3"), n("9a8c"), n("a975"), n("735e"), n("c1ac"), n("d139"), n("3a7b"), n("d5d6"), n("82f8"), n("e91f"), n("60bd"), n("5f96"), n("3280"), n("3fcc"), n("ca91"), n("25a1"), n("cd26"), n("3c5d"), n("2954"), n("649e"), n("219c"), n("170b"), n("b39a"), n("72f7"), n("d3b7"), n("b680"), n("fd87"), n("2b3d"), n("3ca3"), n("ddb0"), n("8b09"), n("db3f")),
         u = function () {
            function e(t) {
               Object(i["a"])(this, e), this.bitRate = t.bitRate, this.sampleRate = t.sampleRate, this.dataBuffer = [], this.encoder = new c["Mp3Encoder"](1, this.sampleRate, this.bitRate)
            }
            return Object(a["a"])(e, [{
               key: "encode",
               value: function (e) {
                  for (var t = 1152, n = this._convertBuffer(e), r = n.length, s = 0; r >= 0; s += t) {
                     var o = n.subarray(s, s + t),
                        i = this.encoder.encodeBuffer(o);
                     this.dataBuffer.push(new Int8Array(i)), r -= t
                  }
               }
            }, {
               key: "finish",
               value: function () {
                  this.dataBuffer.push(this.encoder.flush());
                  var e = new Blob(this.dataBuffer, {
                     type: "audio/mp3"
                  });
                  return this.dataBuffer = [], {
                     id: Date.now(),
                     blob: e,
                     url: URL.createObjectURL(e)
                  }
               }
            }, {
               key: "_floatTo16BitPCM",
               value: function (e, t) {
                  for (var n = 0; n < e.length; n++) {
                     var r = Math.max(-1, Math.min(1, e[n]));
                     t[n] = r < 0 ? 32768 * r : 32767 * r
                  }
               }
            }, {
               key: "_convertBuffer",
               value: function (e) {
                  var t = new Float32Array(e),
                     n = new Int16Array(e.length);
                  return this._floatTo16BitPCM(t, n), n
               }
            }]), e
         }(),
         l = (n("c19f"), n("4a9b"), function () {
            function e(t) {
               Object(i["a"])(this, e), this.bufferSize = t.bufferSize || 4096, this.sampleRate = t.sampleRate, this.samples = t.samples
            }
            return Object(a["a"])(e, [{
               key: "finish",
               value: function () {
                  this._joinSamples();
                  var e = new ArrayBuffer(44 + 2 * this.samples.length),
                     t = new DataView(e);
                  this._writeString(t, 0, "RIFF"), t.setUint32(4, 36 + 2 * this.samples.length, !0), this._writeString(t, 8, "WAVE"), this._writeString(t, 12, "fmt "), t.setUint32(16, 16, !0), t.setUint16(20, 1, !0), t.setUint16(22, 1, !0), t.setUint32(24, this.sampleRate, !0), t.setUint32(28, 4 * this.sampleRate, !0), t.setUint16(32, 4, !0), t.setUint16(34, 16, !0), this._writeString(t, 36, "data"), t.setUint32(40, 2 * this.samples.length, !0), this._floatTo16BitPCM(t, 44, this.samples);
                  var n = new Blob([t], {
                     type: "audio/wav"
                  });
                  return {
                     id: Date.now(),
                     blob: n,
                     url: URL.createObjectURL(n)
                  }
               }
            }, {
               key: "_floatTo16BitPCM",
               value: function (e, t, n) {
                  for (var r = 0; r < n.length; r++, t += 2) {
                     var s = Math.max(-1, Math.min(1, n[r]));
                     e.setInt16(t, s < 0 ? 32768 * s : 32767 * s, !0)
                  }
               }
            }, {
               key: "_joinSamples",
               value: function () {
                  for (var e = this.samples.length * this.bufferSize, t = new Float64Array(e), n = 0, r = 0; r < this.samples.length; r++) {
                     var s = this.samples[r];
                     t.set(s, n), n += s.length
                  }
                  this.samples = t
               }
            }, {
               key: "_writeString",
               value: function (e, t, n) {
                  for (var r = 0; r < n.length; r++) e.setUint8(t + r, n.charCodeAt(r))
               }
            }]), e
         }()),
         d = n("8d97"),
         p = function () {
            function e() {
               var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
               Object(i["a"])(this, e), this.beforeRecording = t.beforeRecording, this.pauseRecording = t.pauseRecording, this.afterRecording = t.afterRecording, this.micFailed = t.micFailed, this.format = t.format, this.encoderOptions = {
                  bitRate: t.bitRate,
                  sampleRate: t.sampleRate
               }, this.bufferSize = 4096, this.records = [], this.isPause = !1, this.isRecording = !1, this.duration = 0, this.volume = 0, this.wavSamples = [], this._duration = 0
            }
            return Object(a["a"])(e, [{
               key: "start",
               value: function () {
                  var e = {
                     video: !1,
                     audio: {
                        channelCount: 1,
                        echoCancellation: !1
                     }
                  };
                  this.beforeRecording && this.beforeRecording("start recording"), navigator.mediaDevices.getUserMedia(e).then(this._micCaptured.bind(this)).catch(this._micError.bind(this)), this.isPause = !1, this.isRecording = !0, this._isMp3() && !this.lameEncoder && (this.lameEncoder = new u(this.encoderOptions))
               }
            }, {
               key: "stop",
               value: function () {
                  this.stream.getTracks().forEach((function (e) {
                     return e.stop()
                  })), this.input.disconnect(), this.processor.disconnect(), this.context.close();
                  var e = null;
                  if (this._isMp3()) e = this.lameEncoder.finish();
                  else {
                     var t = new l({
                        bufferSize: this.bufferSize,
                        sampleRate: this.encoderOptions.sampleRate,
                        samples: this.wavSamples
                     });
                     e = t.finish(), this.wavSamples = []
                  }
                  e.duration = Object(d["b"])(this.duration), this.records.push(e), this._duration = 0, this.duration = 0, this.isPause = !1, this.isRecording = !1, this.afterRecording && this.afterRecording(e)
               }
            }, {
               key: "pause",
               value: function () {
                  this.stream.getTracks().forEach((function (e) {
                     return e.stop()
                  })), this.input.disconnect(), this.processor.disconnect(), this._duration = this.duration, this.isPause = !0, this.pauseRecording && this.pauseRecording("pause recording")
               }
            }, {
               key: "recordList",
               value: function () {
                  return this.records
               }
            }, {
               key: "lastRecord",
               value: function () {
                  return this.records.slice(-1).pop()
               }
            }, {
               key: "_micCaptured",
               value: function (e) {
                  var t = this;
                  this.context = new(window.AudioContext || window.webkitAudioContext), this.duration = this._duration, this.input = this.context.createMediaStreamSource(e), this.processor = this.context.createScriptProcessor(this.bufferSize, 1, 1), this.stream = e, this.processor.onaudioprocess = function (e) {
                     var n = e.inputBuffer.getChannelData(0),
                        r = 0;
                     t._isMp3() ? t.lameEncoder.encode(n) : t.wavSamples.push(new Float32Array(n));
                     for (var s = 0; s < n.length; ++s) r += n[s] * n[s];
                     t.duration = parseFloat(t._duration) + parseFloat(t.context.currentTime.toFixed(2)), t.volume = Math.sqrt(r / n.length).toFixed(2)
                  }, this.input.connect(this.processor), this.processor.connect(this.context.destination)
               }
            }, {
               key: "_micError",
               value: function (e) {
                  this.micFailed && this.micFailed(e)
               }
            }, {
               key: "_isMp3",
               value: function () {
                  return "mp3" === this.format.toLowerCase()
               }
            }]), e
         }(),
         f = {
            props: {
               time: {
                  type: Number
               },
               format: {
                  type: String
               },
               bitRate: {
                  type: Number,
                  default: 128
               },
               sampleRate: {
                  type: Number,
                  default: 44100
               },
               showDownloadButton: {
                  type: Boolean,
                  default: !0
               },
               showUploadButton: {
                  type: Boolean,
                  default: !0
               },
               isUploading: {
                  type: Boolean,
                  default: !1
               },
               micFailed: {
                  type: Function
               },
               beforeRecording: {
                  type: Function
               },
               pauseRecording: {
                  type: Function
               },
               afterRecording: {
                  type: Function
               },
               failedUpload: {
                  type: Function
               },
               beforeUpload: {
                  type: Function
               },
               successfulUpload: {
                  type: Function
               },
               selectRecord: {
                  type: Function
               }
            },
            data: function () {
               return {
                  recorder: this._initRecorder(),
                  recordList: [],
                  selected: {},
                  uploadStatus: null
               }
            },
            components: {
               IconButton: o["a"]
            },
            mounted: function () {},
            beforeDestroy: function () {
               this.stopRecorder()
            },
            methods: {
               toggleRecorder: function () {
                  !this.isRecording || this.isRecording && this.isPause ? this.recorder.start() : this.stopRecorder(), this.$emit("toggleRecord")
               },
               stopRecorder: function () {
                  this.isRecording && (this.recorder.stop(), this.recordList = this.recorder.recordList(), this.$emit("recordingReady", this.recordList[0]))
               },
               removeRecord: function (e) {
                  this.recordList.splice(e, 1), this.$set(this.selected, "url", null), this.$eventBus.$emit("remove-record")
               },
               _initRecorder: function () {
                  return new p({
                     beforeRecording: this.beforeRecording,
                     afterRecording: this.afterRecording,
                     pauseRecording: this.pauseRecording,
                     micFailed: this.micFailed,
                     bitRate: this.bitRate,
                     sampleRate: this.sampleRate,
                     format: this.format
                  })
               }
            },
            computed: {
               iconButtonType: function () {
                  return this.isRecording && this.isPause ? "mic" : this.isRecording ? "stop" : "mic"
               },
               isPause: function () {
                  return this.recorder.isPause
               },
               isRecording: function () {
                  return this.recorder.isRecording
               },
               recordedTime: function () {
                  return this.time && this.recorder.duration >= 60 * this.time && this.stopRecorder(), Object(d["b"])(this.recorder.duration)
               },
               volume: function () {
                  return parseFloat(this.recorder.volume)
               }
            }
         },
         m = f,
         g = (n("fa80"), n("2877")),
         h = Object(g["a"])(m, r, s, !1, null, "bb661476", null);
      t["a"] = h.exports
   },
   "3f90": function (e, t, n) {
      "use strict";
      n.d(t, "c", (function () {
         return c
      })), n.d(t, "a", (function () {
         return m
      })), n.d(t, "b", (function () {
         return g
      }));
      var r = n("5530"),
         s = (n("d81d"), n("fb6a"), n("99af"), n("4de4"), n("07ac"), n("caad"), n("2532"), n("2ef0")),
         o = n("c1df"),
         i = n.n(o),
         a = function (e) {
            return Object(s["groupBy"])(e, "post.id")
         },
         c = function (e) {
            return e.map((function (e) {
               return Object(r["a"])({
                  activity: Object(s["omit"])(e, "post")
               }, e.post)
            }))
         },
         u = function (e) {
            var t = Object(s["groupBy"])(e, "profile.id"),
               n = [];
            for (var o in t) {
               var i, a = t[o].length > 1 ? null === (i = t[o]) || void 0 === i ? void 0 : i.slice(-(t[o].length - 1)).map((function (e) {
                     return e.post.id
                  })) : [],
                  c = t[o][0],
                  u = Object(r["a"])(Object(r["a"])({}, c), {}, {
                     earlierPosts: a,
                     active: !0
                  });
               n.push(u)
            }
            return n.concat(e.filter((function (e) {
               return !e.active
            })))
         },
         l = function (e) {
            var t = e.filter((function (e) {
                  return "comment" === e.type || "reaction" === e.type
               })),
               n = Object(s["groupBy"])(t, "profile.id"),
               r = {};
            for (var o in n) r[o] = n[o][0];
            var i = Object.values(r).map((function (e) {
                  return e.id
               })),
               a = t.filter((function (e) {
                  return !i.includes(e.id)
               })).map((function (e) {
                  return e.id
               }));
            return e.filter((function (e) {
               return !a.includes(e.id)
            }))
         },
         d = function (e) {
            e = l(e);
            var t = a(e),
               n = {};
            for (var s in t) n[s] = Object(r["a"])({}, t[s][0]);
            var o = Object.values(n),
               c = u(o.filter((function (e) {
                  return "publish" === e.type
               }))),
               d = o.filter((function (e) {
                  return "publish" !== e.type
               })).map((function (e) {
                  return Object(r["a"])(Object(r["a"])({}, e), {}, {
                     active: !0
                  })
               }));
            return d.concat(c).sort((function (e, t) {
               return i()(t.publishedAt) - i()(e.publishedAt)
            }))
         },
         p = function (e) {
            e = l(e);
            var t = a(e),
               n = {};
            for (var s in t) n[s] = Object(r["a"])({}, t[s][0]);
            var o = Object.values(n);
            return o.map((function (e) {
               return Object(r["a"])(Object(r["a"])({}, e), {}, {
                  active: !0
               })
            })).sort((function (e, t) {
               return i()(t.publishedAt) - i()(e.publishedAt)
            }))
         },
         f = function (e, t) {
            var n = t.slice(-100).map((function (e) {
               return e.id
            }));
            return e = e.filter((function (e) {
               return !n.includes(e.post.id)
            })), e
         },
         m = function (e, t) {
            var n = e.filter((function (e) {
                  return !e.post.isPinned
               })),
               r = f(n, t),
               s = r.sort((function (e, t) {
                  return i()(t.publishedAt) - i()(e.publishedAt)
               })),
               o = d(s);
            return c(o)
         },
         g = function (e, t) {
            var n = f(e, t),
               r = p(n.sort((function (e, t) {
                  return i()(t.publishedAt) - i()(e.publishedAt)
               })));
            return c(r)
         }
   },
   4: function (e, t, n) {
      e.exports = n("56d7")
   },
   "41bf": function (e, t, n) {},
   4305: function (e, t, n) {
      e.exports = n.p + "img/logo-nav.aa94c777.svg"
   },
   4324: function (e, t, n) {},
   4360: function (e, t, n) {
      "use strict";
      var r = n("2f62"),
         s = n("2b0e"),
         o = n("2909"),
         i = (n("b0c0"), n("a4d3"), n("e01a"), n("c740"), n("a434"), n("99af"), {
            setProfile: function (e, t) {
               var n = t.profileId,
                  r = t.userId,
                  s = t.onboarded,
                  o = t.profileType,
                  i = t.email,
                  a = t.name,
                  c = t.username,
                  u = t.title,
                  l = t.subtitle,
                  d = t.location,
                  p = t.description,
                  f = t.picture,
                  m = t.banner,
                  g = t.city,
                  h = t.posts,
                  v = t.badges,
                  b = t.abouts,
                  w = t.works,
                  k = t.educations,
                  _ = t.projects,
                  C = t.products,
                  y = t.services,
                  x = t.galleries,
                  P = t.faqs,
                  I = t.socialLinks,
                  j = t.meta,
                  M = t.handle,
                  R = t.recentPosts,
                  O = t.postsCount,
                  A = t.commentsReceivedCount,
                  S = t.postsLikesReceivedCount,
                  T = t.commentsLikesReceivedCount,
                  F = t.followersCount,
                  L = t.personalFollowingCount,
                  $ = t.role,
                  B = t.darkModeWeb,
                  U = t.hasOnboardingAnswers,
                  D = t.onboardingLevel,
                  N = t.points,
                  E = t.emailConfirmed,
                  q = t.questionsPost,
                  z = t.profilePost,
                  H = t.inviteLinkClicked,
                  G = t.invitePoints,
                  W = t.invitesAccepted,
                  V = t.invitesSent,
                  Y = t.totalConversions,
                  J = t.filters,
                  K = t.selectedFilter;
               e.profileId = n, e.userId = r, e.profileType = o, e.onboarded = s, e.onboardingLevel = D, e.hasOnboardingAnswers = U, e.darkModeWeb = B, e.filters = J, e.email = i, e.badges = v, e.name = a, e.username = c, e.title = u, e.subtitle = l, e.location = d, e.city = g, e.description = p, e.picture = f, e.banner = m, e.counts.posts = h, e.abouts = b, e.works = w, e.educations = k, e.projects = _, e.products = C, e.services = y, e.galleries = x, e.faqs = P, e.socialLinks = I, e.meta = j, e.handle = M, e.recentPosts = R, e.counts.posts = O, e.counts.commentsReceivedCount = A, e.counts.postsLikesReceivedCount = S, e.counts.commentsLikesReceivedCount = T, e.counts.followers = F, e.counts.followings = L, e.role = $, e.points = N, e.emailConfirmed = E, e.fetched = !0, e.questionsPost = null === q || void 0 === q ? void 0 : q.id, e.profilePost = null === z || void 0 === z ? void 0 : z.id, e.inviteLinkClicked = H, e.invitePoints = G, e.invitesAccepted = W, e.invitesSent = V, e.totalConversions = Y, e.selectedFilter = K
            },
            resetProfile: function (e) {
               var t = {
                  emailConfirmed: !1,
                  userId: null,
                  profileId: null,
                  fetched: !1,
                  onboarded: !1,
                  email: null,
                  profileType: null,
                  name: null,
                  username: null,
                  title: null,
                  subtitle: null,
                  badges: [],
                  location: null,
                  city: null,
                  networkJoinedCount: null,
                  description: null,
                  picture: null,
                  banner: null,
                  counts: {
                     posts: null,
                     followers: null,
                     followings: null,
                     commentsReceivedCount: null,
                     postsLikesReceivedCount: null,
                     commentsLikesReceivedCount: null
                  },
                  abouts: [],
                  works: [],
                  educations: [],
                  projects: [],
                  products: [],
                  services: [],
                  galleries: [],
                  certifications: [],
                  faqs: [],
                  circles: [],
                  socialLinks: null,
                  points: 0,
                  questionsPost: null,
                  profilePost: null,
                  inviteLinkClicked: null,
                  invitePoints: null,
                  invitesAccepted: null,
                  invitesSent: null,
                  totalConversions: null,
                  selectedFilter: ""
               };
               e.filters = t.filters, e.profileId = t.profileId, e.userId = t.userId, e.profileType = t.profileType, e.onboarded = t.onboarded, e.onboardingLevel = t.onboardingLevel, e.hasOnboardingAnswers = t.hasOnboardingAnswers, e.darkModeWeb = t.darkModeWeb, e.email = t.email, e.name = t.name, e.username = t.username, e.title = t.title, e.subtitle = t.subtitle, e.badges = t.badges, e.location = t.location, e.city = t.city, e.networkJoinedCount = t.networkJoinedCount, e.description = t.description, e.picture = t.picture, e.banner = t.banner, e.counts = t.counts, e.abouts = t.abouts, e.works = t.works, e.educations = t.educations, e.projects = t.projects, e.products = t.products, e.services = t.services, e.galleries = t.galleries, e.faqs = t.faqs, e.socialLinks = t.socialLinks, e.emailConfirmed = t.emailConfirmed, e.fetched = !1, e.isNetworkAdmin = !1, e.questionsPost = t.questionsPost, e.profilePost = t.profilePost, e.inviteLinkClicked = t.inviteLinkClicked, e.invitePoints = t.invitePoints, e.invitesAccepted = t.invitesAccepted, e.invitesSent = t.invitesSent, e.totalConversions = t.totalConversions, e.selectedFilter = t.selectedFilter
            },
            SOCKET_updatePointsCount: function (e, t) {
               e.points = t.count
            },
            setProfileId: function (e, t) {
               e.profileId = t
            },
            setOnboarded: function (e, t) {
               e.onboarded = t
            },
            setSelectedFilter: function (e, t) {
               e.selectedFilter = t
            },
            setCity: function (e, t) {
               e.city = t
            },
            setNetworkJoinedCount: function (e, t) {
               e.networkJoinedCount = t
            },
            setScore: function (e, t) {
               e.points = e.points + t.value.pointValue
            },
            updateProfile: function (e, t) {
               console.log("🚀 ~ file: mutations.js ~ line 59 ~ updateProfile ~ payload", t);
               var n = t.title,
                  r = t.subtitle,
                  s = t.description,
                  o = t.city,
                  i = t.socialLinks,
                  a = t.meta,
                  c = t.picture,
                  u = t.banner,
                  l = t.darkModeWeb,
                  d = t.selectedFilter;
               e.title = n, e.subtitle = r, e.description = s, e.city = o, e.socialLinks = i, e.meta = a, e.picture = c, e.banner = u, e.darkModeWeb = l, e.selectedFilter = d
            },
            addAbout: function (e, t) {
               var n = t.id,
                  r = t.title,
                  s = t.content,
                  o = t.order,
                  i = {
                     id: n,
                     title: r,
                     content: s,
                     order: o
                  };
               e.abouts.push(i)
            },
            updateAbout: function (e, t) {
               var n = t.id,
                  r = t.title,
                  o = t.content,
                  i = t.order,
                  a = {
                     id: n,
                     title: r,
                     content: o,
                     order: i
                  },
                  c = e.abouts.findIndex((function (e) {
                     return e.id === n
                  }));
               s["default"].set(e.abouts, c, a), console.log(e.abouts[c])
            },
            removeAbout: function (e, t) {
               var n = t,
                  r = e.abouts.findIndex((function (e) {
                     return e.id === n
                  }));
               e.abouts.splice(r, 1)
            },
            updateAboutList: function (e, t) {
               e.abouts = t
            },
            addWork: function (e, t) {
               var n = t.id,
                  r = t.title,
                  s = t.company,
                  o = t.startDate,
                  i = t.endDate,
                  a = t.location,
                  c = t.website,
                  u = t.city,
                  l = t.companyLogo,
                  d = t.genericLogo,
                  p = t.isCurrent,
                  f = t.description,
                  m = {
                     id: n,
                     title: r,
                     company: s,
                     city: u,
                     startDate: o,
                     endDate: i,
                     location: a,
                     website: c,
                     companyLogo: l,
                     genericLogo: d,
                     isCurrent: p,
                     description: f
                  };
               console.log("NEW Work: ", m), e.works.push(m)
            },
            updateWork: function (e, t) {
               var n = t.id,
                  r = t.title,
                  o = t.company,
                  i = t.startDate,
                  a = t.city,
                  c = t.endDate,
                  u = t.location,
                  l = t.website,
                  d = t.companyLogo,
                  p = t.genericLogo,
                  f = t.isCurrent,
                  m = t.description,
                  g = {
                     id: n,
                     title: r,
                     company: o,
                     startDate: i,
                     city: a,
                     endDate: c,
                     location: u,
                     website: l,
                     companyLogo: d,
                     genericLogo: p,
                     isCurrent: f,
                     description: m
                  };
               console.log("NEW Work: ", g);
               var h = e.works.findIndex((function (e) {
                  return e.id === n
               }));
               console.log(h), s["default"].set(e.works, h, g), console.log(e.works[h])
            },
            removeWork: function (e, t) {
               var n = t,
                  r = e.works.findIndex((function (e) {
                     return e.id === n
                  }));
               e.works.splice(r, 1)
            },
            addEducation: function (e, t) {
               var n = t.id,
                  r = t.institution,
                  s = t.degree,
                  o = t.studyArea,
                  i = t.startYear,
                  a = t.endYear,
                  c = t.location,
                  u = t.website,
                  l = t.logo,
                  d = t.isCurrent,
                  p = t.genericLogo,
                  f = t.description,
                  m = {
                     id: n,
                     institution: r,
                     degree: s,
                     studyArea: o,
                     startYear: i,
                     endYear: a,
                     location: c,
                     website: u,
                     logo: l,
                     isCurrent: d,
                     genericLogo: p,
                     description: f
                  };
               console.log("NEW Education: ", m), e.educations.push(m)
            },
            updateEducation: function (e, t) {
               var n = t.id,
                  r = t.institution,
                  o = t.degree,
                  i = t.studyArea,
                  a = t.startYear,
                  c = t.endYear,
                  u = t.location,
                  l = t.website,
                  d = t.logo,
                  p = t.isCurrent,
                  f = t.genericLogo,
                  m = t.description,
                  g = {
                     id: n,
                     institution: r,
                     degree: o,
                     studyArea: i,
                     startYear: a,
                     endYear: c,
                     location: u,
                     website: l,
                     logo: d,
                     isCurrent: p,
                     genericLogo: f,
                     description: m
                  };
               console.log("NEW Education: ", g);
               var h = e.educations.findIndex((function (e) {
                  return e.id === n
               }));
               console.log(h), s["default"].set(e.educations, h, g), console.log(e.educations[h])
            },
            removeEducation: function (e, t) {
               var n = t,
                  r = e.educations.findIndex((function (e) {
                     return e.id === n
                  }));
               e.educations.splice(r, 1)
            },
            addProject: function (e, t) {
               var n = t.id,
                  r = t.title,
                  s = t.description,
                  o = t.shortDescription,
                  i = t.media,
                  a = t.highlights,
                  c = t.featuredMedia,
                  u = {
                     id: n,
                     title: r,
                     description: s,
                     shortDescription: o,
                     highlights: a,
                     media: i,
                     featuredMedia: c
                  };
               console.log("NEW Project: ", u), e.projects.push(u)
            },
            updateProject: function (e, t) {
               var n = t.id,
                  r = t.title,
                  o = t.description,
                  i = t.shortDescription,
                  a = t.profileId,
                  c = t.media,
                  u = t.highlights,
                  l = t.featuredMedia,
                  d = {
                     id: n,
                     title: r,
                     description: o,
                     shortDescription: i,
                     profileId: a,
                     highlights: u,
                     media: c,
                     featuredMedia: l
                  },
                  p = e.projects.findIndex((function (e) {
                     return e.id === n
                  }));
               console.log(p), s["default"].set(e.projects, p, d)
            },
            removeProject: function (e, t) {
               var n = t,
                  r = e.projects.findIndex((function (e) {
                     return e.id === n
                  }));
               e.projects.splice(r, 1)
            },
            updateProjectsList: function (e, t) {
               e.projects = t
            },
            addGallery: function (e, t) {
               var n = t.id,
                  r = t.title,
                  s = t.media,
                  o = t.featuredMedia,
                  i = t.description,
                  a = {
                     id: n,
                     title: r,
                     media: s,
                     featuredMedia: o,
                     description: i
                  };
               console.log("NEW Gallery: ", a), e.galleries.push(a)
            },
            updateGallery: function (e, t) {
               var n = t.id,
                  r = t.title,
                  o = t.media,
                  i = t.featuredMedia,
                  a = t.description,
                  c = {
                     id: n,
                     title: r,
                     media: o,
                     featuredMedia: i,
                     description: a
                  },
                  u = e.galleries.findIndex((function (e) {
                     return e.id === n
                  }));
               console.log(u), s["default"].set(e.galleries, u, c)
            },
            removeGallery: function (e, t) {
               var n = t,
                  r = e.galleries.findIndex((function (e) {
                     return e.id === n
                  }));
               e.galleries.splice(r, 1)
            },
            addProduct: function (e, t) {
               var n = t.id,
                  r = t.title,
                  s = t.description,
                  o = t.shortDescription,
                  i = t.price,
                  a = t.fixedPrice,
                  c = t.sku,
                  u = t.media,
                  l = t.featuredMedia,
                  d = t.highlights,
                  p = {
                     id: n,
                     title: r,
                     description: s,
                     shortDescription: o,
                     price: i,
                     fixedPrice: a,
                     sku: c,
                     media: u,
                     featuredMedia: l,
                     highlights: d
                  };
               console.log("NEW Product: ", p), e.products.push(p)
            },
            updateProduct: function (e, t) {
               var n = t.id,
                  r = t.title,
                  o = t.description,
                  i = t.shortDescription,
                  a = t.price,
                  c = t.fixedPrice,
                  u = t.sku,
                  l = t.media,
                  d = t.featuredMedia,
                  p = t.highlights,
                  f = {
                     id: n,
                     title: r,
                     description: o,
                     shortDescription: i,
                     price: a,
                     fixedPrice: c,
                     sku: u,
                     media: l,
                     featuredMedia: d,
                     highlights: p
                  },
                  m = e.products.findIndex((function (e) {
                     return e.id === n
                  }));
               console.log(m), s["default"].set(e.products, m, f)
            },
            removeProduct: function (e, t) {
               var n = t,
                  r = e.products.findIndex((function (e) {
                     return e.id === n
                  }));
               e.products.splice(r, 1)
            },
            updateProductsList: function (e, t) {
               e.products = t
            },
            addService: function (e, t) {
               var n = t.id,
                  r = t.title,
                  s = t.shortDescription,
                  o = t.description,
                  i = t.fixedPrice,
                  a = t.price,
                  c = t.sku,
                  u = t.media,
                  l = t.featuredMedia,
                  d = t.highlights,
                  p = {
                     id: n,
                     title: r,
                     shortDescription: s,
                     description: o,
                     price: a,
                     fixedPrice: i,
                     sku: c,
                     media: u,
                     featuredMedia: l,
                     highlights: d
                  };
               console.log("NEW Service: ", p), e.services.push(p)
            },
            updateService: function (e, t) {
               var n = t.id,
                  r = t.title,
                  o = t.description,
                  i = t.shortDescription,
                  a = t.price,
                  c = t.fixedPrice,
                  u = t.sku,
                  l = t.media,
                  d = t.featuredMedia,
                  p = t.highlights,
                  f = {
                     id: n,
                     title: r,
                     description: o,
                     shortDescription: i,
                     fixedPrice: c,
                     price: a,
                     sku: u,
                     media: l,
                     featuredMedia: d,
                     highlights: p
                  },
                  m = e.services.findIndex((function (e) {
                     return e.id === n
                  }));
               console.log(m), s["default"].set(e.services, m, f)
            },
            removeService: function (e, t) {
               var n = t,
                  r = e.services.findIndex((function (e) {
                     return e.id === n
                  }));
               e.services.splice(r, 1)
            },
            updateServicesList: function (e, t) {
               e.services = t
            },
            addProfileCount: function (e, t) {
               e.counts[t] += 1
            },
            removeProfileCount: function (e, t) {
               e.counts[t] -= 1
            },
            setUserFollowList: function (e, t) {
               e.userFollowMembersList = [].concat(Object(o["a"])(e.userFollowMembersList), Object(o["a"])(t))
            },
            setSearchUserFollowList: function (e, t) {
               e.userFollowMembersList = t
            },
            updateUserFollowList: function (e, t) {
               var n = e.userFollowMembersList.findIndex((function (e) {
                     return e.profile.id === t.profileId
                  })),
                  r = e.userFollowMembersList[n];
               r.iAmFollowingProfile = t.status
            },
            removeUserFollowList: function (e, t) {
               var n = e.userFollowMembersList.findIndex((function (e) {
                  return e.profile.id === t.profileId
               }));
               e.userFollowMembersList.splice(n, 1)
            },
            resetUserFollowMemberList: function (e) {
               e.userFollowMembersList = []
            },
            verifyEmail: function (e) {
               e.emailConfirmed = !0
            },
            setNetworkAdmin: function (e, t) {
               e.isNetworkAdmin = t
            },
            setInvitesSent: function (e, t) {
               e.invitesSent = e.invitesSent + t.value.inviteSuccess.length
            }
         }),
         a = n("ade3"),
         c = n("1da1"),
         u = (n("96cf"), n("4de4"), n("159b"), n("841c"), n("ac1f"), n("7db5")),
         l = (n("d3b7"), n("a9e3"), n("d81d"), n("cb29"), n("fb6a"), n("d442")),
         d = n.n(l),
         p = function (e, t, n, r, s, o, i, a, c) {
            return new Promise((function (u, l) {
               var d = new XMLHttpRequest;
               d.open("post", "".concat("https://temp-api.bizfluenceapp.com/", "upload-video")), d.setRequestHeader("Content-Type", "application/octet-stream"), d.setRequestHeader("X-Chunk-Id", t), d.setRequestHeader("X-Content-Id", s), d.setRequestHeader("x-thumb", o), d.setRequestHeader("X-Chunk-Size", e.size), d.setRequestHeader("X-Content-Length", n.size), d.setRequestHeader("X-Content-Name", n.name), d.setRequestHeader("X-Chunks-Quantity", r), d.setRequestHeader("x-width", a), d.setRequestHeader("X-height", c), d.setRequestHeader("Authorization", "Bearer ".concat(i)), d.onreadystatechange = function () {
                  if (4 === d.readyState && 200 === d.status) {
                     var e = JSON.parse(d.response);
                     console.log(e), u(e)
                  }
               }, d.onerror = l, d.send(e)
            }))
         };

      function f(e, t, n, r, s, o, i, a, c) {
         return m.apply(this, arguments)
      }

      function m() {
         return m = Object(c["a"])(regeneratorRuntime.mark((function e(t, n, r, s, o, i, a, c, u) {
            var l, d, m, g;
            return regeneratorRuntime.wrap((function (e) {
               while (1) switch (e.prev = e.next) {
                  case 0:
                     return l = s.pop(), d = l * o, m = t.slice(d, d + o), e.prev = 3, e.next = 6, p(m, l, t, n, i, a, r, c, u);
                  case 6:
                     if (g = e.sent, "completed" !== g.status) {
                        e.next = 12;
                        break
                     }
                     return console.log(g), e.abrupt("return", g.file);
                  case 12:
                     return e.next = 14, f(t, n, r, s, o, i, a, c, u);
                  case 14:
                     return e.abrupt("return", e.sent);
                  case 15:
                     e.next = 21;
                     break;
                  case 17:
                     e.prev = 17, e.t0 = e["catch"](3), s.push(l), console.error(e.t0);
                  case 21:
                  case "end":
                     return e.stop()
               }
            }), e, null, [
               [3, 17]
            ])
         }))), m.apply(this, arguments)
      }
      var g = function () {
            var e = Object(c["a"])(regeneratorRuntime.mark((function e(t, n, r, s, o, i) {
               var a, c, u, l, p, m;
               return regeneratorRuntime.wrap((function (e) {
                  while (1) switch (e.prev = e.next) {
                     case 0:
                        return a = Number("104857600"), c = Math.ceil(t.size / a), u = new Array(c).fill().map((function (e, t) {
                           return t
                        })).reverse(), l = (new Date).getTime(), p = d()({
                           filename: t.name,
                           user: s,
                           time: l
                        }), console.log(p, l), e.next = 8, f(t, c, r, u, a, p, n, o, i);
                     case 8:
                        return m = e.sent, e.abrupt("return", m);
                     case 10:
                     case "end":
                        return e.stop()
                  }
               }), e)
            })));
            return function (t, n, r, s, o, i) {
               return e.apply(this, arguments)
            }
         }(),
         h = n("a9cc"),
         v = {
            fetchProfile: function (e) {
               return Object(c["a"])(regeneratorRuntime.mark((function t() {
                  var n, r, s, o, i, a, c, l, d, p, f, m, g, h, v, b, w, k, _, C, y, x, P, I, j, M, R, O, A, S, T, F, L, $, B, U, D, N, E, q, z, H, G, W, V, Y, J, K, Q, Z;
                  return regeneratorRuntime.wrap((function (t) {
                     while (1) switch (t.prev = t.next) {
                        case 0:
                           return n = e.rootGetters["auth/getUserAuthToken"], console.log("🚀 ~ file: actions.js ~ line 6 ~ fetchProfile ~ token", n), t.next = 4, u["a"].get("/profiles/personal");
                        case 4:
                           r = t.sent, s = r.data, o = s.id, i = s.userId, a = s.onboarded, c = s.profileType, l = s.socialLinks, d = s.picture, p = s.banner, f = s.city, m = s.badges, g = s.abouts, h = s.works, v = s.educations, b = s.description, w = s.subtitle, k = s.title, _ = s.projects, C = s.products, y = s.services, x = s.galleries, P = s.faqs, I = s.meta, j = s.handle, M = s.recentPosts, R = s.postsCount, O = s.commentsReceivedCount, A = s.postsLikesReceivedCount, S = s.commentsLikesReceivedCount, T = s.followersCount, F = s.businessFollowingCount, L = s.personalFollowingCount, $ = s.role, B = s.darkModeWeb, U = s.email, D = s.hasOnboardingAnswers, N = s.onboardingLevel, E = s.points, q = s.emailConfirmed, z = s.profilePost, H = s.questionsPost, G = s.inviteLinkClicked, W = s.invitePoints, V = s.invitesAccepted, Y = s.invitesSent, J = s.totalConversions, K = s.filters, Q = s.selectedFilter, Z = {
                              profileId: o,
                              userId: i,
                              onboarded: a,
                              profileType: c,
                              socialLinks: l,
                              title: k,
                              subtitle: w,
                              description: b,
                              picture: d,
                              banner: p,
                              city: f,
                              badges: m,
                              abouts: g,
                              works: h,
                              educations: v,
                              projects: _,
                              products: C,
                              services: y,
                              galleries: x,
                              faqs: P,
                              meta: I,
                              handle: j,
                              recentPosts: M,
                              postsCount: R,
                              commentsReceivedCount: O,
                              postsLikesReceivedCount: A,
                              commentsLikesReceivedCount: S,
                              followersCount: T,
                              businessFollowingCount: F,
                              personalFollowingCount: L,
                              role: $,
                              darkModeWeb: B,
                              email: U,
                              hasOnboardingAnswers: D,
                              onboardingLevel: N,
                              points: E,
                              emailConfirmed: q,
                              profilePost: z,
                              questionsPost: H,
                              inviteLinkClicked: G,
                              invitePoints: W,
                              invitesAccepted: V,
                              invitesSent: Y,
                              totalConversions: J,
                              filters: K,
                              selectedFilter: Q
                           }, e.commit("gamification/setScore", Z.points, {
                              root: !0
                           }), document.documentElement.setAttribute("data-theme", B ? "ui-dark-mode" : ""), e.commit("setProfile", Z);
                        case 11:
                        case "end":
                           return t.stop()
                     }
                  }), t)
               })))()
            },
            editProfile: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i, a, c, l, d, p, f, m, g, h, v;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = t.firstName, s = t.lastName, o = t.subtitle, i = t.description, a = t.cityId, c = t.socialLinks, l = t.meta, d = t.pictureId, p = t.bannerId, f = t.selectedFilter, m = {
                              subtitle: o,
                              description: i,
                              cityId: a,
                              socialLinks: c,
                              meta: l,
                              picture: d,
                              banner: p,
                              selectedFilter: f
                           }, r && s && (g = r + " " + s, m.title = g), console.log(m.picture), n.prev = 4, n.next = 7, u["a"].put("/profiles/personal", m);
                        case 7:
                           h = n.sent, v = h.data, console.log("🚀 ~ file: actions.js ~ line 118 ~ editProfile ~ result", v), e.commit("updateProfile", v), n.next = 16;
                           break;
                        case 13:
                           n.prev = 13, n.t0 = n["catch"](4), console.log(n.t0.response);
                        case 16:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [4, 13]
                  ])
               })))()
            },
            setDarkMode: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i, a, c;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = e.rootGetters["auth/getUserAuthToken"], s = t.darkModeWeb, o = {
                              darkModeWeb: s
                           }, i = {
                              headers: {
                                 Authorization: "Bearer ".concat(r)
                              }
                           }, n.prev = 4, n.next = 7, u["a"].put("/profiles/personal", o, i);
                        case 7:
                           a = n.sent, c = a.data, e.commit("updateProfile", c), n.next = 15;
                           break;
                        case 12:
                           n.prev = 12, n.t0 = n["catch"](4), console.log(n.t0.response);
                        case 15:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [4, 12]
                  ])
               })))()
            },
            uploadImage: function (e, t) {
               var n = this;
               return Object(c["a"])(regeneratorRuntime.mark((function r() {
                  var s, o, i, a, c, l, d, p;
                  return regeneratorRuntime.wrap((function (r) {
                     while (1) switch (r.prev = r.next) {
                        case 0:
                           if (s = e.rootGetters["auth/getUserAuthToken"], o = t.newFile, console.log(o), i = {
                                 headers: {
                                    Authorization: "Bearer ".concat(s),
                                    "Content-Type": "multipart/form-data"
                                 }
                              }, r.prev = 4, "video/" !== o.type.substr(0, 6)) {
                              r.next = 18;
                              break
                           }
                           return r.next = 8, Object(h["c"])(o);
                        case 8:
                           return a = r.sent, console.log(a), console.log("Uploading large video"), r.next = 13, g(o.file, t.thumbId, s, n.getters["profile/getProfileEmail"], a.width, a.height);
                        case 13:
                           return c = r.sent, console.log(c), r.abrupt("return", c._id);
                        case 18:
                           return l = new FormData, l.append("files", o.file || o), l.append("data", JSON.stringify({})), r.next = 23, u["a"].post("/upload/", l, i);
                        case 23:
                           return d = r.sent, p = d.data, console.log(p[0].id), r.abrupt("return", p[0].id);
                        case 27:
                           r.next = 32;
                           break;
                        case 29:
                           r.prev = 29, r.t0 = r["catch"](4), console.log(r.t0);
                        case 32:
                        case "end":
                           return r.stop()
                     }
                  }), r, null, [
                     [4, 29]
                  ])
               })))()
            },
            createAbout: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i, a, c, l, d, p;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = e.getters.getProfileId, s = e.rootGetters["auth/getUserAuthToken"], o = t.title, i = t.content, a = e.getters.getProfileAbouts, c = a.length + 1, l = {
                              profileId: r,
                              title: o,
                              content: i,
                              order: c
                           }, d = {
                              headers: {
                                 Authorization: "Bearer ".concat(s)
                              }
                           }, n.prev = 7, n.next = 10, u["a"].post("/profiles/abouts", l, d);
                        case 10:
                           p = n.sent, e.commit("addAbout", p.data), n.next = 17;
                           break;
                        case 14:
                           n.prev = 14, n.t0 = n["catch"](7), console.log(n.t0.message);
                        case 17:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [7, 14]
                  ])
               })))()
            },
            editAbout: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i, a, c, l, d;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = t.id, s = t.title, o = t.content, i = t.order, a = e.rootGetters["auth/getUserAuthToken"], c = {
                              title: s,
                              content: o,
                              order: i
                           }, l = {
                              headers: {
                                 Authorization: "Bearer ".concat(a)
                              }
                           }, n.prev = 4, n.next = 7, u["a"].put("/profiles/abouts/".concat(r), c, l);
                        case 7:
                           d = n.sent, e.commit("updateAbout", d.data), n.next = 14;
                           break;
                        case 11:
                           n.prev = 11, n.t0 = n["catch"](4), console.log(n.t0);
                        case 14:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [4, 11]
                  ])
               })))()
            },
            deleteAbout: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = t.id, s = e.rootGetters["auth/getUserAuthToken"], o = {
                              headers: {
                                 Authorization: "Bearer ".concat(s)
                              }
                           }, n.prev = 3, e.commit("removeAbout", r), n.next = 7, u["a"].delete("/profiles/abouts/".concat(r), o);
                        case 7:
                           n.next = 12;
                           break;
                        case 9:
                           n.prev = 9, n.t0 = n["catch"](3), console.log(n.t0.message);
                        case 12:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [3, 9]
                  ])
               })))()
            },
            editAboutList: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i, a, c, l;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           for (r = e.rootGetters["auth/getUserAuthToken"], s = t, o = [], i = 0; i < s.length; i++) a = s[i], a.order = i + 1;
                           return c = s.filter((function (e) {
                              return null !== e.content
                           })), c.forEach((function (e) {
                              o.push({
                                 id: e.id,
                                 order: e.order
                              })
                           })), l = {
                              headers: {
                                 Authorization: "Bearer ".concat(r)
                              }
                           }, n.prev = 7, n.next = 10, u["a"].post("/profiles/abouts/order", {
                              abouts: o
                           }, l);
                        case 10:
                           e.commit("updateAboutList", c), n.next = 16;
                           break;
                        case 13:
                           n.prev = 13, n.t0 = n["catch"](7), console.log(n.t0.message);
                        case 16:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [7, 13]
                  ])
               })))()
            },
            createWork: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i, a, c, l, d, p, f, m, g, h, v, b;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = e.rootGetters["auth/getUserAuthToken"], s = t.title, o = t.company, i = t.startDate, a = t.location, c = t.website, l = t.cityId, d = t.companyLogo, p = t.isCurrent, f = t.genericLogo, m = t.description, g = t.endDate, p && (g = null), h = {
                              title: s,
                              company: o,
                              startDate: i,
                              endDate: g,
                              city: l,
                              location: a,
                              website: c,
                              companyLogo: d,
                              isCurrent: p,
                              genericLogo: f,
                              description: m
                           }, console.log("🚀 ~ file: actions.js ~ line 316 ~ createWork ~ requestBody", h), v = {
                              headers: {
                                 Authorization: "Bearer ".concat(r)
                              }
                           }, n.prev = 7, n.next = 10, u["a"].post("/profiles/works", h, v);
                        case 10:
                           b = n.sent, console.log("🚀 ~ file: actions.js ~ line 380 ~ createWork ~ response.data", b.data), e.commit("addWork", b.data), n.next = 18;
                           break;
                        case 15:
                           n.prev = 15, n.t0 = n["catch"](7), console.log(n.t0);
                        case 18:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [7, 15]
                  ])
               })))()
            },
            editWork: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i, a, c, l, d, p, f, m, g, h, v, b, w;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = e.rootGetters["auth/getUserAuthToken"], s = t.id, o = t.title, i = t.company, a = t.startDate, c = t.location, l = t.cityId, d = t.website, p = t.companyLogo, f = t.isCurrent, m = t.genericLogo, g = t.description, h = t.endDate, f && (h = null), v = {
                              title: o,
                              company: i,
                              startDate: a,
                              city: l,
                              endDate: h,
                              location: c,
                              website: d,
                              companyLogo: p,
                              isCurrent: f,
                              genericLogo: m,
                              description: g
                           }, b = {
                              headers: {
                                 Authorization: "Bearer ".concat(r)
                              }
                           }, n.prev = 6, n.next = 9, u["a"].put("/profiles/works/".concat(s), v, b);
                        case 9:
                           w = n.sent, e.commit("updateWork", w.data), n.next = 16;
                           break;
                        case 13:
                           n.prev = 13, n.t0 = n["catch"](6), console.log(n.t0.response);
                        case 16:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [6, 13]
                  ])
               })))()
            },
            deleteWork: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = t.id, s = e.rootGetters["auth/getUserAuthToken"], console.log("🚀 ~ file: actions.js ~ line 367 ~ deleteWork ~ token", s), o = {
                              headers: {
                                 Authorization: "Bearer ".concat(s)
                              }
                           }, n.prev = 4, e.commit("removeWork", r), n.next = 8, u["a"].delete("/profiles/works/".concat(r), o);
                        case 8:
                           n.next = 13;
                           break;
                        case 10:
                           n.prev = 10, n.t0 = n["catch"](4), console.log(n.t0.response);
                        case 13:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [4, 10]
                  ])
               })))()
            },
            createProject: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i, a, c, l, d, p, f;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = t.title, s = t.description, o = t.shortDescription, i = t.media, a = t.highlights, a = a.filter((function (e) {
                              return null !== e.content
                           })), c = e.getters.getProfileId, l = e.rootGetters["auth/getUserAuthToken"], d = {
                              headers: {
                                 Authorization: "Bearer ".concat(l)
                              }
                           }, p = {
                              title: r,
                              description: s,
                              shortDescription: o,
                              profileId: c,
                              media: i,
                              highlights: a
                           }, n.prev = 7, n.next = 10, u["a"].post("/profiles/projects", p, d);
                        case 10:
                           f = n.sent, console.log(f.data), e.commit("addProject", f.data), n.next = 18;
                           break;
                        case 15:
                           n.prev = 15, n.t0 = n["catch"](7), console.log(n.t0.response);
                        case 18:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [7, 15]
                  ])
               })))()
            },
            editProject: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i, a, c, l, d, p, f, m;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = t.id, s = t.title, o = t.description, i = t.shortDescription, a = t.media, c = t.highlights, c = c.filter((function (e) {
                              return null !== e.content
                           })), l = e.getters.getProfileId, d = e.rootGetters["auth/getUserAuthToken"], p = {
                              headers: {
                                 Authorization: "Bearer ".concat(d)
                              }
                           }, f = {
                              id: r,
                              title: s,
                              description: o,
                              shortDescription: i,
                              profileId: l,
                              media: a,
                              highlights: c
                           }, n.prev = 7, n.next = 10, u["a"].put("/profiles/projects/".concat(r), f, p);
                        case 10:
                           m = n.sent, console.log(m.data), e.commit("updateProject", m.data), n.next = 18;
                           break;
                        case 15:
                           n.prev = 15, n.t0 = n["catch"](7), console.log(n.t0.response);
                        case 18:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [7, 15]
                  ])
               })))()
            },
            deleteProject: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = t.id, s = e.rootGetters["auth/getUserAuthToken"], o = {
                              headers: {
                                 Authorization: "Bearer ".concat(s)
                              }
                           }, n.prev = 3, e.commit("removeProject", r), n.next = 7, u["a"].delete("/profiles/projects/".concat(r), o);
                        case 7:
                           n.next = 12;
                           break;
                        case 9:
                           n.prev = 9, n.t0 = n["catch"](3), console.log(n.t0);
                        case 12:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [3, 9]
                  ])
               })))()
            },
            createEducation: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i, a, c, l, d, p, f, m, g, h, v, b;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = e.rootGetters["auth/getUserAuthToken"], s = t.institution, o = t.degree, i = t.studyArea, a = t.startYear, c = t.location, l = t.website, d = t.logo, p = t.isCurrent, f = t.genericLogo, m = t.description, g = t.endYear, p && (g = null), h = {
                              institution: s,
                              degree: o,
                              studyArea: i,
                              startYear: a,
                              endYear: g,
                              location: c,
                              website: l,
                              logo: d,
                              isCurrent: p,
                              genericLogo: f,
                              description: m
                           }, v = {
                              headers: {
                                 Authorization: "Bearer ".concat(r)
                              }
                           }, n.prev = 6, n.next = 9, u["a"].post("/profiles/educations", h, v);
                        case 9:
                           b = n.sent, e.commit("addEducation", b.data), n.next = 16;
                           break;
                        case 13:
                           n.prev = 13, n.t0 = n["catch"](6), console.log(n.t0);
                        case 16:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [6, 13]
                  ])
               })))()
            },
            editEducation: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i, a, c, l, d, p, f, m, g, h, v, b, w;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = e.rootGetters["auth/getUserAuthToken"], s = t.id, o = t.institution, i = t.degree, a = t.studyArea, c = t.startYear, l = t.location, d = t.website, p = t.logo, f = t.isCurrent, m = t.genericLogo, g = t.description, h = t.endYear, f && (h = null), v = {
                              id: s,
                              institution: o,
                              degree: i,
                              studyArea: a,
                              startYear: c,
                              endYear: h,
                              location: l,
                              website: d,
                              logo: p,
                              isCurrent: f,
                              genericLogo: m,
                              description: g
                           }, b = {
                              headers: {
                                 Authorization: "Bearer ".concat(r)
                              }
                           }, n.prev = 6, n.next = 9, u["a"].put("/profiles/educations/".concat(s), v, b);
                        case 9:
                           w = n.sent, e.commit("updateEducation", w.data), n.next = 16;
                           break;
                        case 13:
                           n.prev = 13, n.t0 = n["catch"](6), console.log(n.t0.response);
                        case 16:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [6, 13]
                  ])
               })))()
            },
            deleteEducation: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = t.id, s = e.rootGetters["auth/getUserAuthToken"], o = {
                              headers: {
                                 Authorization: "Bearer ".concat(s)
                              }
                           }, n.prev = 3, e.commit("removeEducation", r), n.next = 7, u["a"].delete("/profiles/educations/".concat(r), o);
                        case 7:
                           n.next = 12;
                           break;
                        case 9:
                           n.prev = 9, n.t0 = n["catch"](3), console.log(n.t0);
                        case 12:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [3, 9]
                  ])
               })))()
            },
            createGallery: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i, a, c, l, d;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = t.title, s = t.media, o = t.description, i = e.getters.getProfileId, a = e.rootGetters["auth/getUserAuthToken"], c = {
                              profileId: i,
                              title: r,
                              media: s,
                              description: o
                           }, console.log(c.media), l = {
                              headers: {
                                 Authorization: "Bearer ".concat(a)
                              }
                           }, n.prev = 6, n.next = 9, u["a"].post("/profiles/galleries", c, l);
                        case 9:
                           d = n.sent, console.log(d.data), e.commit("addGallery", d.data), n.next = 17;
                           break;
                        case 14:
                           n.prev = 14, n.t0 = n["catch"](6), console.log(n.t0.response);
                        case 17:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [6, 14]
                  ])
               })))()
            },
            editGallery: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i, a, c, l, d, p;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = t.id, s = t.title, o = t.media, i = t.description, a = e.getters.getProfileId, c = e.rootGetters["auth/getUserAuthToken"], l = {
                              profileId: a,
                              title: s,
                              media: o,
                              description: i
                           }, console.log(l.media), d = {
                              headers: {
                                 Authorization: "Bearer ".concat(c)
                              }
                           }, n.prev = 6, n.next = 9, u["a"].put("/profiles/galleries/".concat(r), l, d);
                        case 9:
                           p = n.sent, console.log(p.data), e.commit("updateGallery", p.data), n.next = 17;
                           break;
                        case 14:
                           n.prev = 14, n.t0 = n["catch"](6), console.log(n.t0.response);
                        case 17:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [6, 14]
                  ])
               })))()
            },
            deleteGallery: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = t.id, s = e.rootGetters["auth/getUserAuthToken"], o = {
                              headers: {
                                 Authorization: "Bearer ".concat(s)
                              }
                           }, n.prev = 3, e.commit("removeGallery", r), n.next = 7, u["a"].delete("/profiles/galleries/".concat(r), o);
                        case 7:
                           n.next = 12;
                           break;
                        case 9:
                           n.prev = 9, n.t0 = n["catch"](3), console.log(n.t0);
                        case 12:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [3, 9]
                  ])
               })))()
            },
            createProduct: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i, a, c, l, d, p, f, m, g;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = t.title, s = t.shortDescription, o = t.price, i = t.fixedPrice, a = t.sku, c = t.media, l = t.highlights, l = l.filter((function (e) {
                              return null !== e.content
                           })), d = e.getters.getProfileId, p = e.rootGetters["auth/getUserAuthToken"], f = {
                              headers: {
                                 Authorization: "Bearer ".concat(p)
                              }
                           }, m = {
                              title: r,
                              shortDescription: s,
                              price: o,
                              fixedPrice: i,
                              sku: a,
                              profileId: d,
                              media: c,
                              highlights: l
                           }, n.prev = 7, n.next = 10, u["a"].post("/profiles/products", m, f);
                        case 10:
                           g = n.sent, console.log(g.data), e.commit("addProduct", g.data), n.next = 18;
                           break;
                        case 15:
                           n.prev = 15, n.t0 = n["catch"](7), console.log(n.t0.response);
                        case 18:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [7, 15]
                  ])
               })))()
            },
            editProduct: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i, a, c, l, d, p, f, m, g, h, v;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = t.id, s = t.title, o = t.shortDescription, i = t.description, a = t.price, c = t.fixedPrice, l = t.sku, d = t.media, p = t.highlights, p = p.filter((function (e) {
                              return null !== e.content
                           })), f = e.getters.getProfileId, m = e.rootGetters["auth/getUserAuthToken"], g = {
                              headers: {
                                 Authorization: "Bearer ".concat(m)
                              }
                           }, h = {
                              id: r,
                              title: s,
                              shortDescription: o,
                              description: i,
                              fixedPrice: c,
                              price: a,
                              sku: l,
                              profileId: f,
                              media: d,
                              highlights: p
                           }, n.prev = 7, n.next = 10, u["a"].put("/profiles/products/".concat(r), h, g);
                        case 10:
                           v = n.sent, console.log(v.data), e.commit("updateProduct", v.data), n.next = 18;
                           break;
                        case 15:
                           n.prev = 15, n.t0 = n["catch"](7), console.log(n.t0.response);
                        case 18:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [7, 15]
                  ])
               })))()
            },
            deleteProduct: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = t.id, s = e.rootGetters["auth/getUserAuthToken"], o = {
                              headers: {
                                 Authorization: "Bearer ".concat(s)
                              }
                           }, n.prev = 3, e.commit("removeProduct", r), n.next = 7, u["a"].delete("/profiles/products/".concat(r), o);
                        case 7:
                           n.next = 12;
                           break;
                        case 9:
                           n.prev = 9, n.t0 = n["catch"](3), console.log(n.t0.message);
                        case 12:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [3, 9]
                  ])
               })))()
            },
            createService: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i, a, c, l, d, p, f, m, g, h;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = t.title, s = t.shortDescription, o = t.description, i = t.fixedPrice, a = t.price, c = t.sku, l = t.media, d = t.highlights, d = d.filter((function (e) {
                              return null !== e.content
                           })), p = e.getters.getProfileId, f = e.rootGetters["auth/getUserAuthToken"], m = {
                              headers: {
                                 Authorization: "Bearer ".concat(f)
                              }
                           }, g = {
                              title: r,
                              shortDescription: s,
                              description: o,
                              fixedPrice: i,
                              price: a,
                              sku: c,
                              profileId: p,
                              media: l,
                              highlights: d
                           }, n.prev = 7, n.next = 10, u["a"].post("/profiles/services", g, m);
                        case 10:
                           h = n.sent, console.log(h.data), e.commit("addService", h.data), n.next = 18;
                           break;
                        case 15:
                           n.prev = 15, n.t0 = n["catch"](7), console.log(n.t0.response);
                        case 18:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [7, 15]
                  ])
               })))()
            },
            editService: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i, a, c, l, d, p, f, m, g, h, v;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = t.id, s = t.title, o = t.shortDescription, i = t.description, a = t.price, c = t.fixedPrice, l = t.sku, d = t.media, p = t.highlights, p = p.filter((function (e) {
                              return null !== e.content
                           })), f = e.getters.getProfileId, m = e.rootGetters["auth/getUserAuthToken"], g = {
                              headers: {
                                 Authorization: "Bearer ".concat(m)
                              }
                           }, h = {
                              id: r,
                              title: s,
                              shortDescription: o,
                              description: i,
                              price: a,
                              fixedPrice: c,
                              sku: l,
                              profileId: f,
                              media: d,
                              highlights: p
                           }, n.prev = 7, n.next = 10, u["a"].put("/profiles/services/".concat(r), h, g);
                        case 10:
                           v = n.sent, console.log(v.data), e.commit("updateService", v.data), n.next = 18;
                           break;
                        case 15:
                           n.prev = 15, n.t0 = n["catch"](7), console.log(n.t0.response);
                        case 18:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [7, 15]
                  ])
               })))()
            },
            deleteService: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = t.id, s = e.rootGetters["auth/getUserAuthToken"], o = {
                              headers: {
                                 Authorization: "Bearer ".concat(s)
                              }
                           }, n.prev = 3, e.commit("removeService", r), n.next = 7, u["a"].delete("/profiles/services/".concat(r), o);
                        case 7:
                           n.next = 12;
                           break;
                        case 9:
                           n.prev = 9, n.t0 = n["catch"](3), console.log(n.t0.message);
                        case 12:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [3, 9]
                  ])
               })))()
            },
            reorderList: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i, c, l, d, p;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           for (r = e.rootGetters["auth/getUserAuthToken"], s = t.array, o = t.field, i = o.toLowerCase(), c = [], l = 0; l < s.length; l++) d = s[l], d.order = l + 1;
                           return s.forEach((function (e) {
                              c.push({
                                 id: e.id,
                                 order: e.order
                              })
                           })), p = {
                              headers: {
                                 Authorization: "Bearer ".concat(r)
                              }
                           }, n.prev = 7, e.commit("update".concat(o, "List"), s), n.next = 11, u["a"].post("/profiles/".concat(i, "/order"), Object(a["a"])({}, i, c), p);
                        case 11:
                           n.next = 16;
                           break;
                        case 13:
                           n.prev = 13, n.t0 = n["catch"](7), console.log(n.t0.message);
                        case 16:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [7, 13]
                  ])
               })))()
            },
            addMyProfileCount: function (e) {
               e.commit("addProfileCount", "followings")
            },
            removeMyProfileCount: function (e) {
               e.commit("removeProfileCount", "followings")
            },
            getUserFollowers: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           if (n.prev = 0, !t.search) {
                              n.next = 7;
                              break
                           }
                           return r = {
                              params: {
                                 search: t.search
                              }
                           }, n.next = 5, e.commit("resetUserFollowMemberList");
                        case 5:
                           n.next = 8;
                           break;
                        case 7:
                           r = {
                              params: {
                                 page: t.page
                              }
                           };
                        case 8:
                           return n.next = 10, u["a"].get("/profiles/".concat(t.profileId, "/followers"), r);
                        case 10:
                           return s = n.sent, t.search ? e.commit("setSearchUserFollowList", s.data) : e.commit("setUserFollowList", s.data), n.abrupt("return", s.data);
                        case 15:
                           return n.prev = 15, n.t0 = n["catch"](0), console.log(n.t0), n.abrupt("return", {
                              response: n.t0,
                              succes: !1
                           });
                        case 19:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [0, 15]
                  ])
               })))()
            },
            getUserFollowings: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           if (n.prev = 0, !t.search) {
                              n.next = 7;
                              break
                           }
                           return r = {
                              params: {
                                 search: t.search
                              }
                           }, n.next = 5, e.commit("resetUserFollowMemberList");
                        case 5:
                           n.next = 8;
                           break;
                        case 7:
                           r = {
                              params: {
                                 page: t.page
                              }
                           };
                        case 8:
                           return n.next = 10, u["a"].get("/profiles/".concat(t.profileId, "/following"), r);
                        case 10:
                           return s = n.sent, t.search ? e.commit("setSearchUserFollowList", s.data) : e.commit("setUserFollowList", s.data), n.abrupt("return", s.data);
                        case 15:
                           return n.prev = 15, n.t0 = n["catch"](0), console.log(n.t0), n.abrupt("return", {
                              response: n.t0,
                              succes: !1
                           });
                        case 19:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [0, 15]
                  ])
               })))()
            },
            removeUserFollower: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function e() {
                  var n;
                  return regeneratorRuntime.wrap((function (e) {
                     while (1) switch (e.prev = e.next) {
                        case 0:
                           return e.prev = 0, e.next = 3, u["a"].delete("/profiles/followers/".concat(t.profileId));
                        case 3:
                           return n = e.sent, e.abrupt("return", n.data);
                        case 7:
                           return e.prev = 7, e.t0 = e["catch"](0), console.log(e.t0), e.abrupt("return", {
                              response: e.t0,
                              succes: !1
                           });
                        case 11:
                        case "end":
                           return e.stop()
                     }
                  }), e, null, [
                     [0, 7]
                  ])
               })))()
            },
            postOnboardingStepData: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i, a, c, l;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = e.rootGetters["auth/getUserAuthToken"], s = t.stepName, o = t.stepValue, i = {
                              name: s,
                              value: o
                           }, a = {
                              headers: {
                                 Authorization: "Bearer ".concat(r)
                              }
                           }, n.prev = 4, n.next = 7, u["a"].post("profiles/onboarding-step", i, a);
                        case 7:
                           c = n.sent, l = c.data, console.log(l), n.next = 15;
                           break;
                        case 12:
                           n.prev = 12, n.t0 = n["catch"](4), console.log(null === n.t0 || void 0 === n.t0 ? void 0 : n.t0.response);
                        case 15:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [4, 12]
                  ])
               })))()
            },
            getProfileOnboardingAnswers: function (e) {
               return Object(c["a"])(regeneratorRuntime.mark((function t() {
                  var n, r, s, o;
                  return regeneratorRuntime.wrap((function (t) {
                     while (1) switch (t.prev = t.next) {
                        case 0:
                           return n = e.rootGetters["auth/getUserAuthToken"], r = {
                              headers: {
                                 Authorization: "Bearer ".concat(n)
                              }
                           }, t.prev = 2, t.next = 5, u["a"].get("/profiles/onboarding-answers", r);
                        case 5:
                           return s = t.sent, o = s.data, t.abrupt("return", o);
                        case 10:
                           t.prev = 10, t.t0 = t["catch"](2), console.log(t.t0.response);
                        case 13:
                        case "end":
                           return t.stop()
                     }
                  }), t, null, [
                     [2, 10]
                  ])
               })))()
            },
            fetchIsNetworkAdmin: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return n.prev = 0, n.next = 3, u["a"].get("/main/is-network-admin", t);
                        case 3:
                           return r = n.sent, s = r.data, e.commit("setNetworkAdmin", s), n.abrupt("return", s);
                        case 9:
                           n.prev = 9, n.t0 = n["catch"](0), console.log(n.t0);
                        case 12:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [0, 9]
                  ])
               })))()
            }
         },
         b = {
            getProfile: function (e) {
               return console.log("GET PROFILE "), console.log(e), e
            },
            getProfileType: function (e) {
               return e.profileType
            },
            getProfileName: function (e) {
               return e.name
            },
            getUserId: function (e) {
               return e.userId
            },
            getProfileId: function (e) {
               return e.profileId
            },
            getProfileOnboarded: function (e) {
               return e.onboarded
            },
            getProfileHasOnboardingAnswers: function (e) {
               return e.hasOnboardingAnswers
            },
            getProfileUserName: function (e) {
               return e.username
            },
            getProfileEmail: function (e) {
               return e.email
            },
            getProfileTitle: function (e) {
               return e.title
            },
            getProfileSubtitle: function (e) {
               return e.subtitle
            },
            getProfileLocation: function (e) {
               return e.location
            },
            getProfileCity: function (e) {
               return e.city
            },
            getProfileNetworks: function (e) {
               return e.networkJoinedCount
            },
            getProfileDescription: function (e) {
               return e.description
            },
            getProfileCounts: function (e) {
               return e.counts
            },
            getProfilePicture: function (e) {
               return e.picture
            },
            getFullProfilePicture: function (e) {
               return e.picture.url
            },
            getProfileBanner: function (e) {
               return e.banner
            },
            getProfilePictureUrl: function (e) {
               var t, n = e.picture;
               return n ? null !== (t = n.formats) && void 0 !== t && t.thumbnail ? n.formats.thumbnail.url : n.url : null
            },
            getProfileAbouts: function (e) {
               var t = Object(o["a"])(e.abouts);
               return t.sort((function (e, t) {
                  return e.order - t.order
               })), t
            },
            getProfileWorks: function (e) {
               var t = Object(o["a"])(e.works);
               return t.sort((function (e, t) {
                  return new Date(t.startDate) - new Date(e.startDate)
               })), t
            },
            getProfileEducations: function (e) {
               var t = Object(o["a"])(e.educations);
               return t.sort((function (e, t) {
                  return t.startYear - e.startYear
               })), t
            },
            getProfileProjects: function (e) {
               return e.projects
            },
            getProfileProducts: function (e) {
               return e.products
            },
            getProfileServices: function (e) {
               return e.services
            },
            getProfileGalleries: function (e) {
               return e.galleries
            },
            getProfileFaqs: function (e) {
               return e.faqs
            },
            getProfileCertifications: function (e) {
               return e.certifications
            },
            getProfileRecentPosts: function (e) {
               return e.recentPosts
            },
            getProfileCircles: function (e) {
               return e.circles
            },
            getProfileFetched: function (e) {
               return e.fetched
            },
            getProfileMeta: function (e) {
               return e.meta
            },
            getProfileHandle: function (e) {
               return e.handle
            },
            getProfileRole: function (e) {
               return e.role
            },
            getUserFollowMemberList: function (e) {
               return e.userFollowMembersList
            },
            getOnboarded: function (e) {
               return e.onboarded
            },
            getOnboardingLevel: function (e) {
               return e.onboardingLevel
            },
            getScore: function (e) {
               return e.points
            },
            getEmailConfirmation: function (e) {
               return e.emailConfirmed
            },
            getIsNetworkAdmin: function (e) {
               return e.isNetworkAdmin
            },
            getProfilePost: function (e) {
               return e.profilePost
            },
            getQuestionsPost: function (e) {
               return e.questionsPost
            },
            getInviteLinkedClicked: function (e) {
               return e.inviteLinkClicked
            },
            getInvitePoints: function (e) {
               return e.invitePoints
            },
            getInvitesAccepted: function (e) {
               return e.invitesAccepted
            },
            getInvitesSent: function (e) {
               return e.invitesSent
            },
            getTotalConversions: function (e) {
               return e.totalConversions
            },
            getSelectedFilter: function (e) {
               return e.selectedFilter
            },
            getInviteLeftPoints: function (e) {
               var t = e.totalConversions;
               return t < 5 ? 5 - t : t < 25 ? 25 - t : 50 - t
            },
            getInviteMessage: function (e) {
               var t = e.totalConversions;
               return t < 5 ? "to earn a shirt or hat" : t < 25 ? "to join a vip network" : "to earn the ambassador badge"
            }
         },
         w = {
            namespaced: !0,
            state: function () {
               return {
                  userId: null,
                  emailConfirmed: !1,
                  profileId: null,
                  fetched: !1,
                  onboarded: !1,
                  onboardingLevel: null,
                  hasOnboardingAnswers: null,
                  email: null,
                  profileType: null,
                  name: null,
                  username: null,
                  title: null,
                  subtitle: null,
                  location: null,
                  city: null,
                  networkJoinedCount: null,
                  description: null,
                  picture: null,
                  banner: null,
                  badges: [],
                  counts: {
                     posts: null,
                     followers: null,
                     followings: null,
                     commentsReceivedCount: null,
                     postsLikesReceivedCount: null,
                     commentsLikesReceivedCount: null
                  },
                  abouts: [],
                  works: [],
                  educations: [],
                  projects: [],
                  products: [],
                  services: [],
                  galleries: [],
                  certifications: [],
                  faqs: [],
                  circles: [],
                  socialLinks: null,
                  meta: {
                     expertise: null,
                     languages: null,
                     industries: null,
                     locations: null,
                     id: null
                  },
                  handle: "",
                  recentPosts: [],
                  role: null,
                  userFollowMembersList: [],
                  points: null,
                  isNetworkAdmin: !1,
                  profilePost: null,
                  questionsPost: null,
                  inviteLinkClicked: null,
                  invitePoints: null,
                  invitesAccepted: null,
                  invitesSent: null,
                  totalConversions: null,
                  selectedFilter: ""
               }
            },
            mutations: i,
            actions: v,
            getters: b
         },
         k = n("53ca"),
         _ = n("5530"),
         C = (n("caad"), n("2532"), n("7db0"), n("b64b"), n("2ef0")),
         y = {
            setMainFeed: function (e, t) {
               null === e.mainFeedPosts && (e.mainFeedPosts = []), e.mainFeedPosts = [].concat(Object(o["a"])(e.mainFeedPosts), Object(o["a"])(t.posts)), e.count = t.totalCount
            },
            setPinnedPosts: function (e, t) {
               null === e.pinnedPosts && (e.pinnedPosts = []), e.pinnedPosts = Object(o["a"])(t.posts)
            },
            resetMainFeed: function (e) {
               e.pinnedPosts = [], e.mainFeedPosts = [], e.count = 0, e.mainFeedPage = 1
            },
            setNetworkPosts: function (e, t) {
               var n;
               null === e.networkPosts && (e.networkPosts = []), (n = e.networkPosts).push.apply(n, Object(o["a"])(t.posts))
            },
            resetNetworkPosts: function (e) {
               e.networkPosts = []
            },
            resetPinnedPosts: function (e) {
               e.pinnedPosts = null
            },
            setUserPosts: function (e, t) {
               var n;
               null === e.userPosts && (e.userPosts = []), (n = e.userPosts).push.apply(n, Object(o["a"])(t.posts))
            },
            resetUserPosts: function (e) {
               e.userPosts = []
            },
            setBookmarkPosts: function (e, t) {
               var n;
               null === e.bookmarkedPosts && (e.bookmarkedPosts = []), (n = e.bookmarkedPosts).push.apply(n, Object(o["a"])(t.posts))
            },
            resetBookmarkPosts: function (e) {
               e.bookmarkedPosts = []
            },
            setSinglePost: function (e, t) {
               e.singlePost = t
            },
            resetSinglePost: function (e) {
               e.singlePost = []
            },
            setActiveFeed: function (e, t) {
               e.activePosts = t
            },
            addPost: function (e, t) {
               t.status.includes("published") && this._vm.$moment(t.publishedAt).isBefore(this._vm.$moment()) && x(e).unshift(Object(_["a"])(Object(_["a"])({}, t), {}, {
                  active: !0
               }))
            },
            editPost: function (e, t) {
               var n = Object(_["a"])({}, t);
               console.log(n);
               var r = x(e).findIndex((function (e) {
                  return n.id === e.id
               }));
               if (r >= 0) s["default"].set(x(e), r, n);
               else {
                  var o = e.pinnedPosts.findIndex((function (e) {
                     return n.id === e.id
                  }));
                  s["default"].set(e.pinnedPosts, o, n)
               }
            },
            removePost: function (e, t) {
               var n = t,
                  r = x(e).findIndex((function (e) {
                     return e.id === n
                  }));
               if (r >= 0) x(e).splice(r, 1);
               else {
                  var s = e.pinnedPosts.findIndex((function (e) {
                     return n === e.id
                  }));
                  e.pinnedPosts.splice(s, 1)
               }
            },
            upvotePost: function (e, t) {
               var n = t.postId,
                  r = x(e).findIndex((function (e) {
                     return e.id === n
                  }));
               if (r >= 0) x(e)[r].upvoted = !0, x(e)[r].upvotesCount = t.voteCounts.upvotesCount;
               else {
                  var s = e.pinnedPosts.findIndex((function (e) {
                     return n === e.id
                  }));
                  e.pinnedPosts[s].upvoted = !0, e.pinnedPosts[s].upvotesCount = t.voteCounts.upvotesCount
               }
            },
            downvotePost: function (e, t) {
               var n = t.postId,
                  r = x(e).findIndex((function (e) {
                     return e.id === n
                  }));
               if (r >= 0) x(e)[r].downvoted = !0, x(e)[r].downvotesCount = t.voteCounts.downvotesCount;
               else {
                  var s = e.pinnedPosts.findIndex((function (e) {
                     return n === e.id
                  }));
                  e.pinnedPosts[s].downvoted = !0, e.pinnedPosts[s].downvotesCount = t.voteCounts.downvotesCount
               }
            },
            changePostVote: function (e, t) {
               var n, r = t.postId,
                  s = x(e).findIndex((function (e) {
                     return e.id === r
                  }));
               if (s >= 0) n = x(e)[s];
               else {
                  var o = e.pinnedPosts.findIndex((function (e) {
                     return r === e.id
                  }));
                  n = e.pinnedPosts[o]
               }
               n.upvotesCount = t.upvotesCount, n.downvotesCount = t.downvotesCount, "upvote" == t.type ? (n.upvoted = !0, n.downvoted = !1) : (n.downvoted = !0, n.upvoted = !1)
            },
            deletePostVote: function (e, t) {
               var n = t.postId,
                  r = x(e).findIndex((function (e) {
                     return e.id === n
                  }));
               if (r >= 0) x(e)[r].upvoted = !1, x(e)[r].downvoted = !1, x(e)[r].upvotesCount = t.voteCounts.upvotesCount, x(e)[r].downvotesCount = t.voteCounts.downvotesCount;
               else {
                  var s = e.pinnedPosts.findIndex((function (e) {
                     return n === e.id
                  }));
                  e.pinnedPosts[s].upvoted = !1, e.pinnedPosts[s].downvoted = !1, e.pinnedPosts[s].upvotesCount = t.voteCounts.upvotesCount, e.pinnedPosts[s].downvotesCount = t.voteCounts.downvotesCount
               }
            },
            listReactions: function (e, t) {
               e.reactionLists = t.filter((function (e) {
                  return !0 === e.active
               }))
            },
            updateReactions: function (e, t) {
               var n = t.postId,
                  r = x(e).findIndex((function (e) {
                     return e.id === n
                  }));
               if (r >= 0) x(e)[r].reactions = t.reactions, t.reacted ? s["default"].set(x(e)[r], "reacted", t.reacted) : x(e)[r].reacted = null;
               else {
                  var o = e.pinnedPosts.findIndex((function (e) {
                     return n === e.id
                  }));
                  e.pinnedPosts[o].reactions = t.reactions, t.reacted ? s["default"].set(e.pinnedPosts[o], "reacted", t.reacted) : e.pinnedPosts[o].reacted = null
               }
            },
            bookmarkPost: function (e, t) {
               var n = t.postId,
                  r = x(e).findIndex((function (e) {
                     return e.id === n
                  }));
               if (r >= 0) x(e)[r].bookmarked = !0, x(e)[r].bookmarksCount = t.bookmarksCount;
               else {
                  var s = e.pinnedPosts.findIndex((function (e) {
                     return n === e.id
                  }));
                  e.pinnedPosts[s].bookmarked = !0, e.pinnedPosts[s].bookmarksCount = t.bookmarksCount
               }
            },
            deletePostBookmark: function (e, t) {
               var n = t.postId,
                  r = x(e).findIndex((function (e) {
                     return e.id === n
                  }));
               if (r >= 0) x(e)[r].bookmarked = !1, x(e)[r].bookmarksCount = t.bookmarksCount, "bookmarked" === e.activePosts && x(e).splice(r, 1);
               else {
                  var s = e.pinnedPosts.findIndex((function (e) {
                     return n === e.id
                  }));
                  e.pinnedPosts[s].bookmarked = !1, e.pinnedPosts[s].bookmarksCount = t.bookmarksCount, "bookmarked" === e.activePosts && e.pinnedPosts.splice(s, 1)
               }
            },
            followPost: function (e, t) {
               var n = t.postId,
                  r = x(e).findIndex((function (e) {
                     return e.id === n
                  }));
               if (r >= 0) x(e)[r].followed = !0, x(e)[r].followers = t.followers;
               else {
                  var s = e.pinnedPosts.findIndex((function (e) {
                     return n === e.id
                  }));
                  e.pinnedPosts[s].followed = !0, e.pinnedPosts[s].followers = t.followers
               }
            },
            unfollowPost: function (e, t) {
               var n = t.postId,
                  r = x(e).findIndex((function (e) {
                     return e.id === n
                  }));
               if (r >= 0) x(e)[r].followed = !1, x(e)[r].followers = t.followers;
               else {
                  var s = e.pinnedPosts.findIndex((function (e) {
                     return n === e.id
                  }));
                  e.pinnedPosts[s].followed = !1, e.pinnedPosts[s].followers = t.followers
               }
            },
            appendPostComments: function (e, t) {
               var n, r = t.postId,
                  s = x(e),
                  i = s.find((function (e) {
                     return e.id === r
                  })) || e.pinnedPosts.find((function (e) {
                     return e.id === r
                  }));
               (i.fetchedComments = !0, i.comments) ? (n = i.comments).push.apply(n, Object(o["a"])(t.comments)): i.comments = t.comments;
               i.comments = Object(C["uniqBy"])(i.comments, "id")
            },
            resetPostComments: function (e, t) {
               var n = t.postId,
                  r = x(e),
                  s = r.find((function (e) {
                     return e.id === n
                  })) || e.pinnedPosts.find((function (e) {
                     return e.id === n
                  }));
               s.comments = []
            },
            addCommentToResource: function (e, t) {
               var n = t.postId,
                  r = x(e),
                  s = r.find((function (e) {
                     return e.id === n
                  })) || e.pinnedPosts.find((function (e) {
                     return e.id === n
                  }));
               if ("posts" === t.resourceType) s.comments ? (s.comments.unshift(t.comment), s.topLevelCommentsNumber++) : s.comments = [t.comment];
               else {
                  var o = t.resourceId,
                     i = s.comments.find((function (e) {
                        return e.id === o
                     }));
                  i.replies ? (console.log("🚀 ~ file: mutations.js ~ line 369 ~ addCommentToResource ~ comment.replies", "BEFORE: ", i.replies), console.log("🚀 ~ file: mutations.js ~ line 371 ~ addCommentToResource ~ payload.comment", t.comment), i.replies.push(t.comment), i.repliesCount++, console.log("🚀 ~ file: mutations.js ~ line 369 ~ addCommentToResource ~ comment.replies", "After: ", i.replies)) : i.replies = [t.comment]
               }
               s.commentsNumber += 1
            },
            addMoreRepliesToComment: function (e, t) {
               var n, r = t.postId,
                  s = t.commentId,
                  i = t.replies,
                  a = x(e),
                  c = a.find((function (e) {
                     return e.id === r
                  })) || e.pinnedPosts.find((function (e) {
                     return e.id === r
                  }));
               console.log("🚀 ~ file: mutations.js ~ line 345 ~ addMoreRepliesToComment ~ post", c);
               var u = c.comments.find((function (e) {
                  return e.id === s
               }));
               console.log("🚀 ~ file: mutations.js ~ line 348 ~ addMoreRepliesToComment ~ comment", u), u.replies ? (n = u.replies).push.apply(n, Object(o["a"])(i)) : u.replies = i, console.log(u.replies)
            },
            upvoteComment: function (e, t) {
               var n = t.postId,
                  r = t.commentId,
                  s = I(e, n),
                  o = s.findIndex((function (e) {
                     return e.id === n
                  }));
               if (t.parentComment) {
                  var i = s[o].comments.findIndex((function (e) {
                        return e.id === t.parentComment.id
                     })),
                     a = s[o].comments[i].replies.findIndex((function (e) {
                        return e.id === r
                     }));
                  s[o].comments[i].replies[a].upvoted = !0, s[o].comments[i].replies[a].upvotesCount = t.voteCounts.upvotesCount
               } else {
                  var c = s[o].comments.findIndex((function (e) {
                     return e.id === r
                  }));
                  s[o].comments[c].upvoted = !0, s[o].comments[c].upvotesCount = t.voteCounts.upvotesCount
               }
            },
            downvoteComment: function (e, t) {
               var n = t.postId,
                  r = t.commentId,
                  s = I(e, n),
                  o = s.findIndex((function (e) {
                     return e.id === n
                  }));
               if (t.parentComment) {
                  var i = s[o].comments.findIndex((function (e) {
                        return e.id === t.parentComment.id
                     })),
                     a = s[o].comments[i].replies.findIndex((function (e) {
                        return e.id === r
                     }));
                  s[o].comments[i].replies[a].downvoted = !0, s[o].comments[i].replies[a].downvotesCount = t.voteCounts.downvotesCount
               } else {
                  var c = s[o].comments.findIndex((function (e) {
                     return e.id === r
                  }));
                  s[o].comments[c].downvoted = !0, s[o].comments[c].downvotesCount = t.voteCounts.downvotesCount
               }
            },
            deleteCommentVote: function (e, t) {
               var n = t.postId,
                  r = t.commentId,
                  s = I(e, n),
                  o = s.findIndex((function (e) {
                     return e.id === n
                  }));
               if (t.parentComment) {
                  var i = s[o].comments.findIndex((function (e) {
                        return e.id === t.parentComment.id
                     })),
                     a = s[o].comments[i].replies.findIndex((function (e) {
                        return e.id === r
                     }));
                  s[o].comments[i].replies[a].upvoted = !1, s[o].comments[i].replies[a].downvoted = !1, s[o].comments[i].replies[a].upvotesCount = t.voteCounts.upvotesCount, s[o].comments[i].replies[a].downvotesCount = t.voteCounts.downvotesCount
               } else {
                  var c = s[o].comments.findIndex((function (e) {
                     return e.id === r
                  }));
                  s[o].comments[c].upvoted = !1, s[o].comments[c].downvoted = !1, s[o].comments[c].upvotesCount = t.voteCounts.upvotesCount, s[o].comments[c].downvotesCount = t.voteCounts.downvotesCount
               }
            },
            updateComment: function (e, t) {
               console.log("🚀 ~ file: mutations.js ~ line 556 ~ updateComment ~ payload", t);
               var n, r = t.id,
                  o = t.post;
               n = o ? o.id ? o.id : o : t.parentComment.post;
               var i = I(e, n),
                  a = i.find((function (e) {
                     return e.id === n
                  }));
               if (t.parentComment) {
                  var c = "string" === typeof t.parentComment ? t.parentComment : t.parentComment.id,
                     u = a.comments.find((function (e) {
                        return e.id === c
                     })),
                     l = u.replies.findIndex((function (e) {
                        return e.id === r
                     }));
                  console.log(u.replies[l]), s["default"].set(u.replies, l, t)
               } else {
                  var d = a.comments.findIndex((function (e) {
                     return e.id === r
                  }));
                  s["default"].set(a.comments, d, t)
               }
            },
            deleteComment: function (e, t) {
               var n;
               console.log("🚀 ~ file: mutations.js ~ line 589 ~ deleteComment ~ payload", t, "POST: ", o);
               var r = t.post;
               n = r ? r.id ? r.id : r : t.parentComment.post, console.log("🚀 ~ file: mutations.js ~ line 606 ~ deleteComment ~ postId", n);
               var s = t.id,
                  o = x(e).find((function (e) {
                     return e.id === n
                  })) || e.pinnedPosts.find((function (e) {
                     return e.id === n
                  }));
               if (t.parentComment) {
                  var i = "string" === typeof t.parentComment ? t.parentComment : t.parentComment.id,
                     a = o.comments.find((function (e) {
                        return e.id === i
                     }));
                  console.log("🚀 ~ file: mutations.js ~ line 604 ~ deleteComment ~ parentComment", a);
                  var c = a.replies.findIndex((function (e) {
                     return e.id === s
                  }));
                  console.log("🚀 ~ file: mutations.js ~ line 608 ~ deleteComment ~ replyIndex", c), a.replies.splice(c, 1)
               } else {
                  console.log("🚀 ~ file: mutations.js ~ line 612 ~ deleteComment ~ getActivePosts(state)[postIndex]", o);
                  var u = o.comments.findIndex((function (e) {
                     return e.id === s
                  }));
                  o.comments.splice(u, 1), o.topLevelCommentsNumber--, o.commentsNumber--, console.log("🚀 ~ file: mutations.js ~ line 621 ~ deleteComment ~ post", o)
               }
            },
            changeModalIndex: function (e, t) {
               e.modalIndex = t
            },
            changeSlideIndex: function (e, t) {
               e.slideIndex = t
            },
            setFeedPage: function (e, t) {
               console.log("2"), console.log(t), t.increment < 1 ? (console.log("2a"), e[t.feedType || P(e)] = 1) : (console.log("2b"), e[t.feedType || P(e)] += t.increment)
            },
            resetFeedPage: function (e, t) {
               e[P(e, t)] = 1
            },
            updateInfiniteId: function (e) {
               e.infiniteId += 1
            },
            removePostsByBlockedUser: function (e, t) {
               var n = t.id;
               e.mainFeedPosts = e.mainFeedPosts.filter((function (e) {
                  return e.profile.id !== n
               })), e.networkPosts = e.networkPosts.filter((function (e) {
                  return e.profile.id !== n
               }))
            },
            updateActiveFilters: function (e, t) {
               e.activeFilters = Object(_["a"])(Object(_["a"])({}, e.activeFilters), t);
               for (var n = Object.keys(e.activeFilters), r = 0; r < n.length; r++) {
                  var o = n[r],
                     i = e.activeFilters[o];
                  (0 == i || Array.isArray(i) && 0 == e.activeFilters[o].length) && s["default"].delete(e.activeFilters, o)
               }
            },
            clearActiveFilters: function (e) {
               e.activeFilters = []
            },
            removeActiveFilters: function (e, t) {
               if (console.log(t), e.activeFilters[t]) s["default"].delete(e.activeFilters, t);
               else
                  for (var n = Object.keys(e.activeFilters), r = 0; r < n.length; r++) {
                     var o = n[r],
                        i = e.activeFilters[o];
                     if (Array.isArray(i) && i.includes(t)) {
                        var c = i.indexOf(t);
                        e.activeFilters[o].splice(c, 1), e.activeFilters = Object(_["a"])(Object(_["a"])({}, e.activeFilters), {}, Object(a["a"])({}, o, e.activeFilters[o]))
                     } else "object" === Object(k["a"])(i[0]) && (e.activeFilters[o] = e.activeFilters[o].filter((function (e) {
                        return e.id !== t
                     })));
                     0 == e.activeFilters[o].length && s["default"].delete(e.activeFilters, o)
                  }
            },
            setLastPostDate: function (e, t) {
               e.lastPostDate = t
            }
         };

      function x(e) {
         switch (e.activePosts) {
            case "bookmarked":
               return e.bookmarkedPosts;
            case "network":
               return e.networkPosts;
            case "user":
               return e.userPosts;
            case "mainFeed":
               return e.mainFeedPosts;
            case "singlePost":
               return e.singlePost;
            case "activeFilter":
               return e.filterFeedPosts;
            default:
               return e.mainFeedPosts
         }
      }

      function P(e, t) {
         if (t) return t;
         switch (e.activePosts) {
            case "bookmarked":
               return "bookmarkedPage";
            case "network":
               return "networkPage";
            case "user":
               return "userPage";
            case "mainFeed":
               return "mainFeedPage";
            case "singlePost":
               return e.singlePost;
            default:
               return "mainFeedPage"
         }
      }

      function I(e, t) {
         var n = x(e).findIndex((function (e) {
            return e.id === t
         }));
         return n >= 0 ? x(e) : e.pinnedPosts
      }
      var j = n("3f90"),
         M = {
            fetchFeed: function (e, t) {
               var n = this;
               return Object(c["a"])(regeneratorRuntime.mark((function r() {
                  var s, i, a, c, l, d, p, f, m;
                  return regeneratorRuntime.wrap((function (r) {
                     while (1) switch (r.prev = r.next) {
                        case 0:
                           return s = t.page, i = t.limit, a = t.filter, c = e.getters["getFeedsPosts"], l = (new Date).toLocaleDateString() === new Date(a.date).toLocaleDateString(), d = {
                              page: s,
                              limit: i,
                              postDate: c.length ? n._vm.$moment(e.getters["getLastPostDate"]).format() : l ? n._vm.$moment().format("YYYY-MM-DDTHH:mm:ssZ") : n._vm.$moment(a.date).endOf("day").format("YYYY-MM-DDTHH:mm:ssZ"),
                              filter: a.type
                           }, p = {
                              params: d
                           }, r.prev = 5, 1 === s && e.dispatch("fetchPinnedPost"), r.next = 9, u["a"].get("/activities/default", p);
                        case 9:
                           return f = r.sent, e.commit("setLastPostDate", f.data[f.data.length - 1].publishedAt), m = {
                              posts: Object(j["a"])(Object(o["a"])(f.data), c)
                           }, e.commit("setMainFeed", m), r.abrupt("return", m);
                        case 16:
                           return r.prev = 16, r.t0 = r["catch"](5), console.log(r.t0.response), r.abrupt("return", !1);
                        case 20:
                        case "end":
                           return r.stop()
                     }
                  }), r, null, [
                     [5, 16]
                  ])
               })))()
            },
            fetchPinnedPost: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, i;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           if (s = {
                                 page: 1,
                                 limit: 20
                              }, n.prev = 1, !t) {
                              n.next = 8;
                              break
                           }
                           return n.next = 5, u["a"].get("/posts/".concat(t, "/pinned"));
                        case 5:
                           i = n.sent, n.next = 11;
                           break;
                        case 8:
                           return n.next = 10, u["a"].post("/feed/pinned", s);
                        case 10:
                           i = n.sent;
                        case 11:
                           r = {
                              posts: Object(o["a"])(i.data)
                           }, e.commit("setPinnedPosts", r), n.next = 18;
                           break;
                        case 15:
                           n.prev = 15, n.t0 = n["catch"](1), e.commit("setPinnedPosts", []);
                        case 18:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [1, 15]
                  ])
               })))()
            },
            fetchUserPosts: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, i, a, c, l;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = t.slug, s = t.page ? t.page : 1, i = e.rootGetters["auth/getUserAuthToken"], a = {
                              headers: {
                                 Authorization: "Bearer ".concat(i)
                              }
                           }, console.log("/posts/profile/".concat(r, "?page=").concat(s)), n.next = 7, u["a"].get("/posts/profile/".concat(r, "?page=").concat(s), a);
                        case 7:
                           return c = n.sent, l = {
                              posts: Object(o["a"])(c.data)
                           }, e.commit("setUserPosts", l), n.abrupt("return", l);
                        case 11:
                        case "end":
                           return n.stop()
                     }
                  }), n)
               })))()
            },
            fetchNetworkPosts: function (e, t) {
               var n = this;
               return Object(c["a"])(regeneratorRuntime.mark((function r() {
                  var s, o, i, a, c, l, d, p;
                  return regeneratorRuntime.wrap((function (r) {
                     while (1) switch (r.prev = r.next) {
                        case 0:
                           if (s = e.rootGetters["auth/getAuthStatus"], o = t.network, i = t.page, a = t.limit, c = e.getters["getFeedsPosts"], l = c.length ? n._vm.$moment(e.getters["getLastPostDate"]) : n._vm.$moment(), r.prev = 4, 1 !== i) {
                              r.next = 8;
                              break
                           }
                           return r.next = 8, e.dispatch("fetchPinnedPost", o.id ? o.id : null);
                        case 8:
                           if (!s) {
                              r.next = 14;
                              break
                           }
                           return r.next = 11, u["a"].get("/activities/hub/".concat(o.id, "?page=").concat(i, "&limit=").concat(a));
                        case 11:
                           d = r.sent, r.next = 17;
                           break;
                        case 14:
                           return r.next = 16, u["a"].get("/activities/hub/".concat(o.id, "/public?page=").concat(i, "&limit=").concat(a, "&postDate=").concat(l));
                        case 16:
                           d = r.sent;
                        case 17:
                           return e.commit("setLastPostDate", d.data[d.data.length - 1].publishedAt), p = {
                              posts: Object(j["b"])(d.data, e.getters["getFeedsPosts"])
                           }, e.commit("setNetworkPosts", p), r.abrupt("return", p);
                        case 23:
                           return r.prev = 23, r.t0 = r["catch"](4), console.log(r.t0.response), r.abrupt("return", !1);
                        case 27:
                        case "end":
                           return r.stop()
                     }
                  }), r, null, [
                     [4, 23]
                  ])
               })))()
            },
            fetchBookmarkedPosts: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, i, a;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = e.rootGetters["auth/getUserAuthToken"], s = {
                              headers: {
                                 Authorization: "Bearer ".concat(r)
                              }
                           }, n.prev = 2, console.log(), n.next = 6, u["a"].get("/posts/bookmarked?page=" + t.page, s);
                        case 6:
                           return i = n.sent, a = {
                              posts: Object(o["a"])(i.data)
                           }, e.commit("setBookmarkPosts", a), n.abrupt("return", a);
                        case 12:
                           return n.prev = 12, n.t0 = n["catch"](2), n.abrupt("return", {
                              response: n.t0,
                              succes: !1
                           });
                        case 15:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [2, 12]
                  ])
               })))()
            },
            createPost: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i, a, c, l, d, p, f, m, g, h, v, b, w, k, _, C, y, x, P;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = e.rootGetters["auth/getUserAuthToken"], s = e.rootGetters["profile/getProfileId"], o = t.title, i = t.content, a = t.networkId, c = t.interests, l = t.media, d = t.mainFeed, p = t.status, f = t.scheduledPost, m = t.linkPreview, g = t.lang, h = t.postType, v = t.networkDetails, b = t.isAnnouncement, w = t.kind, k = {
                              headers: {
                                 Authorization: "Bearer ".concat(r)
                              }
                           }, _ = "60dd9984fea235f5fd29309c", C = t.communityId || _, y = {
                              title: o,
                              content: i,
                              profileId: s,
                              communityId: C,
                              networkId: a,
                              interests: c,
                              media: l,
                              mainFeed: d,
                              status: p,
                              scheduledPost: f,
                              linkPreview: m,
                              lang: g,
                              postType: h,
                              networkDetails: v,
                              isAnnouncement: b,
                              kind: w
                           }, console.log(y), n.prev = 8, n.next = 11, u["a"].post("/posts", y, k);
                        case 11:
                           return x = n.sent, P = x.data, console.log("🧘🏾‍♂️ Added Post: ", P), e.commit("addPost", P), e.commit("gamification/setPointValue", {
                              value: P
                           }, {
                              root: !0
                           }), e.commit("profile/setScore", {
                              value: P
                           }, {
                              root: !0
                           }), n.abrupt("return", {
                              result: P,
                              success: !0
                           });
                        case 20:
                           return n.prev = 20, n.t0 = n["catch"](8), console.log(n.t0), n.abrupt("return", {
                              result: n.t0,
                              success: !1
                           });
                        case 24:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [8, 20]
                  ])
               })))()
            },
            updatePost: function (e, t) {
               var n = this;
               return Object(c["a"])(regeneratorRuntime.mark((function r() {
                  var s, o, i, a, c, l, d, p, f, m, g, h, v, b, w, k, C, y, x, P, I, j, M;
                  return regeneratorRuntime.wrap((function (r) {
                     while (1) switch (r.prev = r.next) {
                        case 0:
                           return s = e.rootGetters["auth/getUserAuthToken"], o = e.rootGetters["profile/getProfileId"], i = t.id, a = t.title, c = t.content, l = t.networkId, d = t.interests, p = t.media, f = t.mainFeed, m = t.status, g = t.scheduledPost, h = t.linkPreview, v = t.publishedAt, b = t.lang, w = t.postType, k = t.networkDetails, C = t.activity, y = {
                              headers: {
                                 Authorization: "Bearer ".concat(s)
                              }
                           }, x = "60dd9984fea235f5fd29309c", P = t.communityId || x, I = {
                              title: a,
                              content: c,
                              profileId: o,
                              communityId: P,
                              networkId: l,
                              interests: d,
                              media: p,
                              mainFeed: f,
                              status: m,
                              scheduledPost: g,
                              linkPreview: h,
                              lang: b,
                              publishedAt: v,
                              postType: w,
                              networkDetails: k
                           }, r.prev = 7, r.next = 10, u["a"].put("/posts/".concat(i), I, y);
                        case 10:
                           return j = r.sent, M = j.data, "published" !== M[0].status || n._vm.$moment(M[0].publishedAt).isAfter(n._vm.$moment()) || e.commit("editPost", Object(_["a"])(Object(_["a"])({}, M[0]), {}, {
                              activity: C
                           })), r.abrupt("return", M);
                        case 16:
                           r.prev = 16, r.t0 = r["catch"](7), console.log(r.t0.message);
                        case 19:
                        case "end":
                           return r.stop()
                     }
                  }), r, null, [
                     [7, 16]
                  ])
               })))()
            },
            deletePost: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           if (r = t.id, s = e.rootGetters["auth/getUserAuthToken"], o = {
                                 headers: {
                                    Authorization: "Bearer ".concat(s)
                                 }
                              }, n.prev = 3, "Super Admin" !== t.role) {
                              n.next = 10;
                              break
                           }
                           return n.next = 7, u["a"].delete("/admin/posts/".concat(r), o);
                        case 7:
                           i = n.sent, n.next = 15;
                           break;
                        case 10:
                           return n.next = 12, u["a"].delete("/posts/".concat(r), o);
                        case 12:
                           i = n.sent, e.commit("gamification/setPointValue", {
                              value: i.data
                           }, {
                              root: !0
                           }), e.commit("profile/setScore", {
                              value: i.data
                           }, {
                              root: !0
                           });
                        case 15:
                           return e.commit("removePost", r), n.abrupt("return", "Successfully deleted this post");
                        case 19:
                           return n.prev = 19, n.t0 = n["catch"](3), console.log(n.t0.message), n.abrupt("return", "Failed to delete this post");
                        case 23:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [3, 19]
                  ])
               })))()
            },
            sharePostOnFeed: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i, a, c, l;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = t.postId, s = t.networkId, o = t.shareDescription, i = {
                              postId: r,
                              networkId: s,
                              shareDescription: o
                           }, n.next = 4, u["a"].post("/posts/share", i);
                        case 4:
                           a = n.sent, c = Object(j["c"])([a.data])[0], l = c.profile.id === e.rootGetters["profile/getProfileId"], e.commit("addPost", Object(_["a"])(Object(_["a"])({}, c), {}, {
                              my: l
                           }));
                        case 8:
                        case "end":
                           return n.stop()
                     }
                  }), n)
               })))()
            },
            votePost: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i, a;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = e.rootGetters["auth/getUserAuthToken"], s = {
                              headers: {
                                 Authorization: "Bearer ".concat(r)
                              }
                           }, o = {
                              type: t.type
                           }, n.prev = 3, n.next = 6, u["a"].post("/posts/".concat(t.post.id, "/votes"), o, s);
                        case 6:
                           return i = n.sent, a = i.data, e.commit("upvote" == t.type ? "upvotePost" : "downvotePost", {
                              postId: t.post.id,
                              voteCounts: a
                           }), e.commit("gamification/setPointValue", {
                              value: a
                           }, {
                              root: !0
                           }), e.commit("profile/setScore", {
                              value: a
                           }, {
                              root: !0
                           }), n.abrupt("return", {
                              response: a,
                              success: !0
                           });
                        case 14:
                           return n.prev = 14, n.t0 = n["catch"](3), console.log(n.t0.message), n.abrupt("return", {
                              response: n.t0,
                              message: "Sorry, your vote was not posted... Please try again later.",
                              success: !1
                           });
                        case 18:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [3, 14]
                  ])
               })))()
            },
            deletePostVote: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = e.rootGetters["auth/getUserAuthToken"], s = {
                              headers: {
                                 Authorization: "Bearer ".concat(r)
                              }
                           }, n.prev = 2, n.next = 5, u["a"].delete("/posts/".concat(t.post.id, "/votes"), s);
                        case 5:
                           return o = n.sent, i = o.data, e.commit("deletePostVote", {
                              postId: t.post.id,
                              voteCounts: i
                           }), e.commit("gamification/setPointValue", {
                              value: o.data
                           }, {
                              root: !0
                           }), e.commit("profile/setScore", {
                              value: o.data
                           }, {
                              root: !0
                           }), n.abrupt("return", {
                              response: i,
                              success: !0
                           });
                        case 13:
                           return n.prev = 13, n.t0 = n["catch"](2), console.log(n.t0.message), n.abrupt("return", {
                              response: n.t0,
                              message: "Sorry, your vote was not deleted... Please try again later.",
                              success: !1
                           });
                        case 17:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [2, 13]
                  ])
               })))()
            },
            changePostVote: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i, a;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = e.rootGetters["auth/getUserAuthToken"], s = {
                              headers: {
                                 Authorization: "Bearer ".concat(r)
                              }
                           }, o = {
                              type: t.type
                           }, n.prev = 3, n.next = 6, u["a"].delete("/posts/".concat(t.post.id, "/votes"), s);
                        case 6:
                           return n.next = 8, u["a"].post("/posts/".concat(t.post.id, "/votes"), o, s);
                        case 8:
                           return i = n.sent, a = i.data, console.log(a), e.commit("changePostVote", {
                              postId: t.post.id,
                              downvotesCount: a.downvotesCount,
                              upvotesCount: a.upvotesCount,
                              type: t.type
                           }), e.commit("gamification/setPointValue", {
                              value: a
                           }, {
                              root: !0
                           }), e.commit("profile/setScore", {
                              value: a
                           }, {
                              root: !0
                           }), console.log(a), n.abrupt("return", {
                              response: a,
                              success: !0
                           });
                        case 18:
                           return n.prev = 18, n.t0 = n["catch"](3), console.log(n.t0.message), n.abrupt("return", {
                              response: n.t0,
                              message: "Sorry, your vote was not changed... Please try again later.",
                              success: !1
                           });
                        case 22:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [3, 18]
                  ])
               })))()
            },
            getPostVote: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function e() {
                  var n, r;
                  return regeneratorRuntime.wrap((function (e) {
                     while (1) switch (e.prev = e.next) {
                        case 0:
                           return e.prev = 0, e.next = 3, u["a"].get("/posts/".concat(t.postId, "/votes?type=upvote&page=").concat(t.page));
                        case 3:
                           return n = e.sent, r = n.data, e.abrupt("return", r);
                        case 8:
                           e.prev = 8, e.t0 = e["catch"](0), console.log(e.t0.message);
                        case 11:
                        case "end":
                           return e.stop()
                     }
                  }), e, null, [
                     [0, 8]
                  ])
               })))()
            },
            reactList: function (e) {
               return Object(c["a"])(regeneratorRuntime.mark((function t() {
                  var n, r;
                  return regeneratorRuntime.wrap((function (t) {
                     while (1) switch (t.prev = t.next) {
                        case 0:
                           return n = {
                              headers: {
                                 Authorization: ""
                              }
                           }, t.prev = 1, t.next = 4, u["a"].get("/reactions/public", n);
                        case 4:
                           r = t.sent, e.commit("listReactions", r.data), t.next = 11;
                           break;
                        case 8:
                           return t.prev = 8, t.t0 = t["catch"](1), t.abrupt("return", {
                              response: t.t0,
                              succes: !1
                           });
                        case 11:
                        case "end":
                           return t.stop()
                     }
                  }), t, null, [
                     [1, 8]
                  ])
               })))()
            },
            reactToPost: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = e.rootGetters["auth/getUserAuthToken"], s = {
                              headers: {
                                 Authorization: "Bearer ".concat(r)
                              }
                           }, o = {
                              reactionId: t.reactionId
                           }, console.log("trying reaction"), n.prev = 4, n.next = 7, u["a"].post("/posts/".concat(t.postId, "/reactions"), o, s);
                        case 7:
                           return i = n.sent, e.commit("updateReactions", {
                              postId: t.postId,
                              reactions: i.data.reactions,
                              reacted: i.data.reacted
                           }), e.commit("gamification/setPointValue", {
                              value: i.data
                           }, {
                              root: !0
                           }), e.commit("profile/setScore", {
                              value: i.data
                           }, {
                              root: !0
                           }), n.abrupt("return", {
                              response: i.data,
                              success: !0
                           });
                        case 14:
                           return n.prev = 14, n.t0 = n["catch"](4), n.abrupt("return", {
                              response: n.t0,
                              message: "sorry, we didn't capture your reaction",
                              success: !1
                           });
                        case 17:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [4, 14]
                  ])
               })))()
            },
            getPostListRectionList: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function e() {
                  var n;
                  return regeneratorRuntime.wrap((function (e) {
                     while (1) switch (e.prev = e.next) {
                        case 0:
                           return console.log("trying reaction", t), e.prev = 1, e.next = 4, u["a"].get("/posts/upvotes-reactions/".concat(t.postId, "?type=").concat(t.type, "&page=").concat(t.page));
                        case 4:
                           return n = e.sent, console.log("response.stats", n.data.data), e.abrupt("return", n.data.data);
                        case 9:
                           return e.prev = 9, e.t0 = e["catch"](1), e.abrupt("return", {
                              response: e.t0,
                              succes: !1
                           });
                        case 12:
                        case "end":
                           return e.stop()
                     }
                  }), e, null, [
                     [1, 9]
                  ])
               })))()
            },
            getPostRectionList: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function e() {
                  var n;
                  return regeneratorRuntime.wrap((function (e) {
                     while (1) switch (e.prev = e.next) {
                        case 0:
                           return console.log("trying reaction", t), e.prev = 1, e.next = 4, u["a"].get("/posts/".concat(t.postId, "/reactions?page=").concat(t.page));
                        case 4:
                           return n = e.sent, console.log(n.data), e.abrupt("return", n.data);
                        case 9:
                           return e.prev = 9, e.t0 = e["catch"](1), console.log(e.t0.message), e.abrupt("return", {
                              response: e.t0,
                              succes: !1
                           });
                        case 13:
                        case "end":
                           return e.stop()
                     }
                  }), e, null, [
                     [1, 9]
                  ])
               })))()
            },
            deletePostReaction: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = e.rootGetters["auth/getUserAuthToken"], s = {
                              headers: {
                                 Authorization: "Bearer ".concat(r)
                              }
                           }, n.prev = 2, n.next = 5, u["a"].delete("/posts/".concat(t.postId, "/reactions"), s);
                        case 5:
                           o = n.sent, e.commit("updateReactions", {
                              postId: t.postId,
                              reactions: o.data.reactions
                           }), e.commit("gamification/setPointValue", {
                              value: o.data
                           }, {
                              root: !0
                           }), e.commit("profile/setScore", {
                              value: o.data
                           }, {
                              root: !0
                           }), n.next = 15;
                           break;
                        case 11:
                           return n.prev = 11, n.t0 = n["catch"](2), console.log(n.t0.message), n.abrupt("return", {
                              response: n.t0,
                              message: "There seems to be a problem, we were unable to remove your reaction.",
                              succes: !1
                           });
                        case 15:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [2, 11]
                  ])
               })))()
            },
            bookmarkPost: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i, a;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = e.rootGetters["auth/getUserAuthToken"], s = {
                              headers: {
                                 Authorization: "Bearer ".concat(r)
                              }
                           }, o = {}, n.prev = 3, n.next = 6, u["a"].post("/posts/".concat(t.post.id, "/bookmarks"), o, s);
                        case 6:
                           i = n.sent, a = i.data, e.commit("bookmarkPost", {
                              postId: t.post.id,
                              bookmarksCount: a.bookmarksCount
                           }), n.next = 15;
                           break;
                        case 11:
                           return n.prev = 11, n.t0 = n["catch"](3), console.log(n.t0.message), n.abrupt("return", {
                              response: n.t0,
                              message: "Something went wrong, this post was not marked.",
                              success: !1
                           });
                        case 15:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [3, 11]
                  ])
               })))()
            },
            deletePostBookmark: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = e.rootGetters["auth/getUserAuthToken"], s = {
                              headers: {
                                 Authorization: "Bearer ".concat(r)
                              }
                           }, n.prev = 2, n.next = 5, u["a"].delete("/posts/".concat(t.post.id, "/bookmarks"), s);
                        case 5:
                           o = n.sent, i = o.data, e.commit("deletePostBookmark", {
                              postId: t.post.id,
                              bookmarksCount: i.bookmarksCount
                           }), n.next = 14;
                           break;
                        case 10:
                           return n.prev = 10, n.t0 = n["catch"](2), console.log(n.t0.message), n.abrupt("return", {
                              response: n.t0,
                              message: "The bookmark you selected was not deleted, please try again later.",
                              success: !1
                           });
                        case 14:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [2, 10]
                  ])
               })))()
            },
            followPost: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i, a;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = e.rootGetters["auth/getUserAuthToken"], s = {
                              headers: {
                                 Authorization: "Bearer ".concat(r)
                              }
                           }, o = {}, n.prev = 3, n.next = 6, u["a"].post("/posts/".concat(t.post.id, "/followers"), o, s);
                        case 6:
                           i = n.sent, a = i.data, console.log("followed post: ", a), e.commit("followPost", {
                              postId: t.post.id,
                              followers: a.followers
                           }), n.next = 16;
                           break;
                        case 12:
                           return n.prev = 12, n.t0 = n["catch"](3), console.log(n.t0.message), n.abrupt("return", {
                              response: n.t0,
                              message: "An error has occured, your follow has failed.",
                              success: !1
                           });
                        case 16:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [3, 12]
                  ])
               })))()
            },
            unfollowPost: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = e.rootGetters["auth/getUserAuthToken"], s = {
                              headers: {
                                 Authorization: "Bearer ".concat(r)
                              }
                           }, n.prev = 2, n.next = 5, u["a"].delete("/posts/".concat(t.post.id, "/followers"), s);
                        case 5:
                           o = n.sent, i = o.data, console.log("unfollowed post: ", i), e.commit("unfollowPost", {
                              postId: t.post.id,
                              followers: i.followers
                           }), n.next = 15;
                           break;
                        case 11:
                           return n.prev = 11, n.t0 = n["catch"](2), console.log(n.t0.message), n.abrupt("return", {
                              response: n.t0,
                              message: "An error has occured, your unfollow has failed.",
                              success: !1
                           });
                        case 15:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [2, 11]
                  ])
               })))()
            },
            getPostComments: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i, a, c;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = e.rootGetters["auth/getUserAuthToken"], s = t.post, o = t.page, i = {
                              headers: {
                                 Authorization: "Bearer ".concat(r)
                              },
                              params: {
                                 replies: 2,
                                 limit: 10,
                                 page: o || 1
                              }
                           }, n.prev = 3, n.next = 6, u["a"].get("/posts/".concat(s.id, "/comments"), i);
                        case 6:
                           a = n.sent, c = a.data, console.log("got comments on post: ", c), o && 1 !== o || e.commit("resetPostComments", {
                              postId: s.id,
                              comments: []
                           }), e.commit("appendPostComments", {
                              postId: s.id,
                              comments: c
                           }), n.next = 16;
                           break;
                        case 13:
                           n.prev = 13, n.t0 = n["catch"](3), console.log(n.t0.message);
                        case 16:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [3, 13]
                  ])
               })))()
            },
            getLikeCommentMemberLists: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function e() {
                  var n, r;
                  return regeneratorRuntime.wrap((function (e) {
                     while (1) switch (e.prev = e.next) {
                        case 0:
                           return e.prev = 0, e.next = 3, u["a"].get("/comments/upvotes/".concat(t.commentId, "?page=").concat(t.page));
                        case 3:
                           return n = e.sent, r = n.data.data, console.log("get Like comment members list: ", r), e.abrupt("return", r);
                        case 9:
                           e.prev = 9, e.t0 = e["catch"](0), console.log(e.t0.message);
                        case 12:
                        case "end":
                           return e.stop()
                     }
                  }), e, null, [
                     [0, 9]
                  ])
               })))()
            },
            fetchRepliesByComment: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i, a, c, l, d, p, f;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = e.commit, s = e.rootGetters, o = s["auth/getUserAuthToken"], i = t.postId, a = t.commentId, c = t.offset, l = 5, d = {
                              headers: {
                                 Authorization: "Bearer ".concat(o)
                              }
                           }, n.prev = 5, n.next = 8, u["a"].get("/comments/".concat(a, "/replies?offset=").concat(c, "&limit=").concat(l), d);
                        case 8:
                           p = n.sent, f = p.data, console.log("got replies on comment: ", f), r("addMoreRepliesToComment", {
                              replies: f,
                              commentId: a,
                              postId: i
                           }), n.next = 17;
                           break;
                        case 14:
                           n.prev = 14, n.t0 = n["catch"](5), console.log(n.t0.message);
                        case 17:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [5, 14]
                  ])
               })))()
            },
            updateComment: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i, a, c, l, d, p;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return console.log("🚀 ~ file: actions.js ~ line 768 ~ updateComment ~ payload", t), r = t.id, s = t.content, o = t.post, i = t.parentComment, a = e.rootGetters["auth/getUserAuthToken"], c = {
                              headers: {
                                 Authorization: "Bearer ".concat(a)
                              }
                           }, l = {
                              content: s
                           }, n.prev = 5, n.next = 8, u["a"].put("comments/".concat(r), l, c);
                        case 8:
                           d = n.sent, p = d.data, e.commit("updateComment", Object(_["a"])(Object(_["a"])({}, p), {}, {
                              post: o,
                              parentComment: i
                           })), n.next = 17;
                           break;
                        case 13:
                           return n.prev = 13, n.t0 = n["catch"](5), console.log(n.t0), n.abrupt("return", {
                              response: n.t0,
                              message: "Update has failed please reload the page.",
                              success: !1
                           });
                        case 17:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [5, 13]
                  ])
               })))()
            },
            deleteComment: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = e.rootGetters["auth/getUserAuthToken"], s = {
                              headers: {
                                 Authorization: "Bearer ".concat(r)
                              }
                           }, n.prev = 2, n.next = 5, u["a"].delete("comments/".concat(t.id), s);
                        case 5:
                           o = n.sent, e.commit("deleteComment", t), e.commit("gamification/setPointValue", {
                              value: o.data
                           }, {
                              root: !0
                           }), e.commit("profile/setScore", {
                              value: o.data
                           }, {
                              root: !0
                           }), n.next = 15;
                           break;
                        case 11:
                           return n.prev = 11, n.t0 = n["catch"](2), console.log(n.t0), n.abrupt("return", {
                              response: n.t0,
                              succes: !1
                           });
                        case 15:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [2, 11]
                  ])
               })))()
            },
            submitComment: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i, a;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = e.rootGetters["auth/getUserAuthToken"], s = {
                              headers: {
                                 Authorization: "Bearer ".concat(r)
                              }
                           }, o = {
                              resourceId: t.resource.id,
                              resourceType: t.resourceType,
                              content: t.content,
                              media: t.media,
                              lang: "en"
                           }, n.prev = 3, n.next = 6, u["a"].post("/comments", o, s);
                        case 6:
                           return i = n.sent, a = i.data, e.commit("addCommentToResource", {
                              postId: t.post.id,
                              resourceType: t.resourceType,
                              resourceId: t.resource.id,
                              comment: a
                           }), e.commit("gamification/setPointValue", {
                              value: a
                           }, {
                              root: !0
                           }), e.commit("profile/setScore", {
                              value: a
                           }, {
                              root: !0
                           }), n.abrupt("return", {
                              response: a,
                              success: !0
                           });
                        case 14:
                           return n.prev = 14, n.t0 = n["catch"](3), console.log(n.t0.response), n.abrupt("return", {
                              response: n.t0,
                              message: "An error has occured please try again later.",
                              success: !1
                           });
                        case 18:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [3, 14]
                  ])
               })))()
            },
            voteComment: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i, a;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = e.rootGetters["auth/getUserAuthToken"], s = {
                              headers: {
                                 Authorization: "Bearer ".concat(r)
                              }
                           }, o = {
                              type: t.type
                           }, n.prev = 3, n.next = 6, u["a"].post("/comments/".concat(t.comment.id, "/votes"), o, s);
                        case 6:
                           i = n.sent, a = i.data, e.commit("upvote" === t.type ? "upvoteComment" : "downvoteComment", {
                              postId: t.post.id,
                              commentId: t.comment.id,
                              parentComment: t.parentComment,
                              voteCounts: a
                           }), n.next = 14;
                           break;
                        case 11:
                           throw n.prev = 11, n.t0 = n["catch"](3), new Error("An error has occured, please try again later.");
                        case 14:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [3, 11]
                  ])
               })))()
            },
            deleteCommentVote: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = e.rootGetters["auth/getUserAuthToken"], s = {
                              headers: {
                                 Authorization: "Bearer ".concat(r)
                              }
                           }, n.prev = 2, n.next = 5, u["a"].delete("/comments/".concat(t.comment.id, "/votes"), s);
                        case 5:
                           o = n.sent, i = o.data, e.commit("deleteCommentVote", {
                              postId: t.post.id,
                              commentId: t.comment.id,
                              parentComment: t.parentComment,
                              voteCounts: i
                           }), e.commit("gamification/setPointValue", {
                              value: o.data
                           }, {
                              root: !0
                           }), e.commit("profile/setScore", {
                              value: o.data
                           }, {
                              root: !0
                           }), n.next = 16;
                           break;
                        case 12:
                           return n.prev = 12, n.t0 = n["catch"](2), console.log(n.t0.message), n.abrupt("return", {
                              response: n.t0,
                              message: "An error has occured, please try again later.",
                              success: !1
                           });
                        case 16:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [2, 12]
                  ])
               })))()
            },
            getSlugForProfileId: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = e.rootGetters["auth/getUserAuthToken"], s = {
                              headers: {
                                 Authorization: "Bearer ".concat(r)
                              }
                           }, o = {
                              ids: [t]
                           }, n.prev = 3, n.next = 6, u["a"].post("/profiles/slugs", o, s);
                        case 6:
                           if (i = n.sent, 0 !== i.data.length) {
                              n.next = 9;
                              break
                           }
                           return n.abrupt("return", "");
                        case 9:
                           return n.abrupt("return", i.data[0].handle);
                        case 12:
                           return n.prev = 12, n.t0 = n["catch"](3), console.log(n.t0.message), n.abrupt("return", "");
                        case 16:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [3, 12]
                  ])
               })))()
            },
            resetFeedPage: function (e) {
               var t = e.commit;
               t("resetMainFeed"), t("resetFeedPage", "mainFeedPage")
            },
            incrementMainFeedPage: function (e) {
               var t = e.commit;
               t("setFeedPage", {
                  increment: 1,
                  feedType: "mainFeedPage"
               })
            },
            refreshMainFeed: function (e) {
               var t = e.commit;
               t("resetMainFeed"), t("resetFeedPage", "mainFeedPage"), t("updateInfiniteId")
            },
            report: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i, c;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return s = e.rootGetters["auth/getUserAuthToken"], o = {
                              headers: {
                                 Authorization: "Bearer ".concat(s)
                              }
                           }, r = {
                              type: t.type
                           }, Object(a["a"])(r, t.type, t.id), Object(a["a"])(r, "title", "".concat(t.type, " report")), Object(a["a"])(r, "description", t.description), i = r, n.prev = 3, n.next = 6, u["a"].post("/tickets", i, o);
                        case 6:
                           if (c = n.sent, console.log(c), !c.data) {
                              n.next = 12;
                              break
                           }
                           return n.abrupt("return", !0);
                        case 12:
                           return n.abrupt("return", !1);
                        case 13:
                           n.next = 18;
                           break;
                        case 15:
                           return n.prev = 15, n.t0 = n["catch"](3), n.abrupt("return", {
                              response: n.t0,
                              succes: !1
                           });
                        case 18:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [3, 15]
                  ])
               })))()
            },
            saveActiveFilter: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function e() {
                  var n;
                  return regeneratorRuntime.wrap((function (e) {
                     while (1) switch (e.prev = e.next) {
                        case 0:
                           return e.prev = 0, t.activeFilters.data.name && delete t.activeFilters.data.name, t.activeFilters.data.usersLists && delete t.activeFilters.data.usersLists, t.activeFilters.data.selectFilterValue && delete t.activeFilters.data.selectFilterValue, t.activeFilters.data.selectFilterToggle && delete t.activeFilters.data.selectFilterToggle, e.next = 7, u["a"].post("/feed/manage-filter", t.activeFilters);
                        case 7:
                           n = e.sent, console.log(n), n.data, e.next = 15;
                           break;
                        case 12:
                           return e.prev = 12, e.t0 = e["catch"](0), e.abrupt("return", {
                              response: e.t0,
                              succes: !1
                           });
                        case 15:
                        case "end":
                           return e.stop()
                     }
                  }), e, null, [
                     [0, 12]
                  ])
               })))()
            },
            deleteFilter: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function e() {
                  var n;
                  return regeneratorRuntime.wrap((function (e) {
                     while (1) switch (e.prev = e.next) {
                        case 0:
                           return e.prev = 0, e.next = 3, u["a"].put("/feed/delete-filter", t);
                        case 3:
                           n = e.sent, console.log(n), n.data, e.next = 11;
                           break;
                        case 8:
                           return e.prev = 8, e.t0 = e["catch"](0), e.abrupt("return", {
                              response: e.t0,
                              succes: !1
                           });
                        case 11:
                        case "end":
                           return e.stop()
                     }
                  }), e, null, [
                     [0, 8]
                  ])
               })))()
            },
            fetchFeedsWithActiveFilters: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, i, a;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return n.prev = 0, r = t.activeFilters.unreads, t.activeFilters.data && t.activeFilters.data.name && delete t.activeFilters.data.name, s = Object(C["omit"])(t.activeFilters, ["unreads", "usersLists"]), n.next = 6, u["a"].post("/feed/filter?unreads=".concat(!!r, "&page=").concat(t.page), s);
                        case 6:
                           return i = n.sent, a = {
                              posts: Object(o["a"])(i.data)
                           }, e.commit("setMainFeed", a), n.abrupt("return", a);
                        case 12:
                           return n.prev = 12, n.t0 = n["catch"](0), n.abrupt("return", {
                              response: n.t0,
                              succes: !1
                           });
                        case 15:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [0, 12]
                  ])
               })))()
            },
            getUserFollowings: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function e() {
                  var n, r;
                  return regeneratorRuntime.wrap((function (e) {
                     while (1) switch (e.prev = e.next) {
                        case 0:
                           return e.prev = 0, n = t.search ? {
                              params: {
                                 search: t.search,
                                 page: 1,
                                 limit: 20
                              }
                           } : {
                              params: {
                                 page: 1,
                                 limit: 20
                              }
                           }, e.next = 4, u["a"].get("/profiles/".concat(t.profileId, "/following"), n);
                        case 4:
                           return r = e.sent, e.abrupt("return", r.data);
                        case 8:
                           return e.prev = 8, e.t0 = e["catch"](0), console.log(e.t0), e.abrupt("return", {
                              response: e.t0,
                              succes: !1
                           });
                        case 12:
                        case "end":
                           return e.stop()
                     }
                  }), e, null, [
                     [0, 8]
                  ])
               })))()
            },
            getTrendingPosts: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function e() {
                  var n, r;
                  return regeneratorRuntime.wrap((function (e) {
                     while (1) switch (e.prev = e.next) {
                        case 0:
                           return n = t.hubId ? {
                              params: {
                                 hubId: t.hubId,
                                 type: t.type
                              }
                           } : {
                              params: {
                                 type: t.type
                              }
                           }, e.next = 3, u["a"].get("/stats/active-posts", n);
                        case 3:
                           return r = e.sent, e.abrupt("return", r.data);
                        case 5:
                        case "end":
                           return e.stop()
                     }
                  }), e)
               })))()
            },
            getTopPointsEarner: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function e() {
                  var n;
                  return regeneratorRuntime.wrap((function (e) {
                     while (1) switch (e.prev = e.next) {
                        case 0:
                           return e.next = 2, u["a"].get("/stats/top-users?type=".concat(t.type));
                        case 2:
                           return n = e.sent, e.abrupt("return", n.data);
                        case 4:
                        case "end":
                           return e.stop()
                     }
                  }), e)
               })))()
            }
         },
         R = (n("a15b"), {
            getLanguagesList: function (e) {
               return e.languages
            },
            getFeeds: function (e) {
               return e
            },
            getFeedsPosts: function (e) {
               return O(e)
            },
            getPinnedPosts: function (e) {
               return e.pinnedPosts
            },
            getFocusedPosts: function (e) {
               var t = e.posts,
                  n = e.myNetworks,
                  r = [];
               return r = t.filter((function (e) {
                  return n.find((function (t) {
                     return e.network.id === t.id
                  }))
               })), r
            },
            getFilteredNetworks: function (e) {
               return e.feedFilters.filteredNetworks
            },
            getCustomPosts: function (e) {
               var t = e.posts,
                  n = e.filteredNetworks,
                  r = e.customFilterInclusion,
                  s = [];
               return s = t.filter((function (e) {
                  return r ? n.find((function (t) {
                     return e.network.id === t.id
                  })) : !n.find((function (t) {
                     return e.network.id === t.id
                  }))
               })), s
            },
            getFeedFilterType: function (e) {
               return e.feedFilters.type
            },
            getFeedFilterInclusion: function (e) {
               return e.feedFilters.customFilterInclusion
            },
            getUserFeedFilters: function (e) {
               return e.feedFilters.userFeedFilters
            },
            getFeedsCount: function (e) {
               return e.count
            },
            getPostForModal: function (e) {
               return e.posts[e.modalIndex]
            },
            getSlideNumberForModal: function (e) {
               return e.slideIndex
            },
            getSinglePost: function (e) {
               return e.singlePost[0]
            },
            getFeedPage: function (e) {
               return e[A(e)]
            },
            getUserFilterSelected: function (e) {
               return e.feedFilters.selectedUserFilter
            },
            getReactionList: function (e) {
               return e.reactionLists
            },
            getInfiniteId: function (e) {
               return e.infiniteId
            },
            getActivePostsName: function (e) {
               return e.activePosts
            },
            getFilters: function (e) {
               return e.filters
            },
            getFilterId: function (e) {
               return e.filters.join()
            },
            getActiveFilters: function (e) {
               return e.activeFilters
            },
            getNetworkAvailable: function (e) {
               return e.networkAvailable
            },
            getFilterFeedPosts: function (e) {
               return e.filterFeedPosts
            },
            getLastPostDate: function (e) {
               return e.lastPostDate
            }
         });

      function O(e) {
         switch (e.activePosts) {
            case "bookmarked":
               return e.bookmarkedPosts;
            case "network":
               return e.networkPosts;
            case "activeFilters":
               return e.activeFilters;
            case "user":
               return e.userPosts;
            default:
               return e.mainFeedPosts
         }
      }

      function A(e) {
         switch (e.activePosts) {
            case "bookmarked":
               return "bookmarkedPage";
            case "network":
               return "networkPage";
            case "user":
               return "userPage";
            case "mainFeed":
               return "mainFeedPage";
            case "singlePost":
               return e.singlePost;
            default:
               return "mainFeedPage"
         }
      }
      var S = {
            namespaced: !0,
            state: function () {
               return {
                  lastPostDate: "",
                  activePosts: "mainFeed",
                  networkPosts: [],
                  userPosts: [],
                  bookmarkedPosts: [],
                  pinnedPosts: null,
                  mainFeedPosts: [],
                  filterFeedPosts: [],
                  singlePost: [],
                  count: 0,
                  slideIndex: 0,
                  modalIndex: 0,
                  myNetworks: [],
                  reactionLists: [],
                  mainFeedPage: 1,
                  networkPage: 1,
                  userPage: 1,
                  bookmarkedPage: 1,
                  filters: [],
                  activeFilters: {},
                  networkAvailable: [],
                  infiniteId: 1,
                  languages: [{
                     name: "Afrikaans",
                     id: "AF"
                  }, {
                     name: "Albanian",
                     id: "SQ"
                  }, {
                     name: "Amharic",
                     id: "AM"
                  }, {
                     name: "Arabic",
                     id: "AR"
                  }, {
                     name: "Armenian",
                     id: "HY"
                  }, {
                     name: "Azerbaijani",
                     id: "AZ"
                  }, {
                     name: "Basque",
                     id: "EU"
                  }, {
                     name: "Belarusian",
                     id: "BE"
                  }, {
                     name: "Bengali",
                     id: "BN"
                  }, {
                     name: "Bosnian",
                     id: "BS"
                  }, {
                     name: "Bulgarian",
                     id: "BG"
                  }, {
                     name: "Catalan",
                     id: "CA"
                  }, {
                     name: "Cebuano",
                     id: "CEB"
                  }, {
                     name: "Chinese",
                     id: "ZH"
                  }, {
                     name: "Corsican",
                     id: "CO"
                  }, {
                     name: "Croatian",
                     id: "HR"
                  }, {
                     name: "Czech",
                     id: "CS"
                  }, {
                     name: "Danish",
                     id: "DA"
                  }, {
                     name: "Dutch",
                     id: "NL"
                  }, {
                     name: "English",
                     id: "EN"
                  }, {
                     name: "Esperanto",
                     id: "EO"
                  }, {
                     name: "Estonian",
                     id: "ET"
                  }, {
                     name: "Finnish",
                     id: "FI"
                  }, {
                     name: "French",
                     id: "FR"
                  }, {
                     name: "Frisian",
                     id: "FY"
                  }, {
                     name: "Galician",
                     id: "GL"
                  }, {
                     name: "Georgian",
                     id: "KA"
                  }, {
                     name: "German",
                     id: "DE"
                  }, {
                     name: "Greek",
                     id: "EL"
                  }, {
                     name: "Gujarati",
                     id: "GU"
                  }, {
                     name: "Haitian Creole",
                     id: "HT"
                  }, {
                     name: "Hausa",
                     id: "HA"
                  }, {
                     name: "Hawaiian",
                     id: "HAW"
                  }, {
                     name: "Hebrew",
                     id: "HE"
                  }, {
                     name: "Hindi",
                     id: "HI"
                  }, {
                     name: "Hmong",
                     id: "HMN"
                  }, {
                     name: "Hungarian",
                     id: "HU"
                  }, {
                     name: "Icelandic",
                     id: "IS"
                  }, {
                     name: "Igbo",
                     id: "IG"
                  }, {
                     name: "Indonesian",
                     id: "ID"
                  }, {
                     name: "Irish",
                     id: "GA"
                  }, {
                     name: "Italian",
                     id: "IT"
                  }, {
                     name: "Japanese",
                     id: "JA"
                  }, {
                     name: "Javanese",
                     id: "JV"
                  }, {
                     name: "Kannada",
                     id: "KN"
                  }, {
                     name: "Kazakh",
                     id: "KK"
                  }, {
                     name: "Khmer",
                     id: "KM"
                  }, {
                     name: "Kinyarwanda",
                     id: "NW"
                  }, {
                     name: "Korean",
                     id: "KO"
                  }, {
                     name: "Kurdish",
                     id: "KU"
                  }, {
                     name: "Kyrgyz",
                     id: "KY"
                  }, {
                     name: "Lao",
                     id: "LO"
                  }, {
                     name: "Latvian",
                     id: "LV"
                  }, {
                     name: "Lithuanian",
                     id: "LT"
                  }, {
                     name: "Luxembourgish",
                     id: "LB"
                  }, {
                     name: "Macedonian",
                     id: "MK"
                  }, {
                     name: "Malagasy",
                     id: "MG"
                  }, {
                     name: "Malay",
                     id: "MS"
                  }, {
                     name: "Malayalam",
                     id: "ML"
                  }, {
                     name: "Maltese",
                     id: "MT"
                  }, {
                     name: "Maori",
                     id: "MI"
                  }, {
                     name: "Marathi",
                     id: "MR"
                  }, {
                     name: "Mongolian",
                     id: "MN"
                  }, {
                     name: "Myanmar",
                     id: "MY"
                  }, {
                     name: "Nepali",
                     id: "NE"
                  }, {
                     name: "Norwegian",
                     id: "NO"
                  }, {
                     name: "Nyanja",
                     id: "NY"
                  }, {
                     name: "Odia",
                     id: "OR"
                  }, {
                     name: "Pashto",
                     id: "PS"
                  }, {
                     name: "Persian",
                     id: "FA"
                  }, {
                     name: "Polish",
                     id: "PL"
                  }, {
                     name: "Portuguese",
                     id: "PT"
                  }, {
                     name: "Punjabi",
                     id: "PA"
                  }, {
                     name: "Romanian",
                     id: "RO"
                  }, {
                     name: "Russian",
                     id: "RU"
                  }, {
                     name: "Samoan",
                     id: "SM"
                  }, {
                     name: "Scots Gaelic",
                     id: "GD"
                  }, {
                     name: "Serbian",
                     id: "SR"
                  }, {
                     name: "Sesotho",
                     id: "ST"
                  }, {
                     name: "Shona",
                     id: "SN"
                  }, {
                     name: "Sindhi",
                     id: "SD"
                  }, {
                     name: "Sinhala",
                     id: "SI"
                  }, {
                     name: "Slovak",
                     id: "SK"
                  }, {
                     name: "Slovenian",
                     id: "SL"
                  }, {
                     name: "Somali",
                     id: "SO"
                  }, {
                     name: "Spanish",
                     id: "ES"
                  }, {
                     name: "Sundanese",
                     id: "SU"
                  }, {
                     name: "Swahili",
                     id: "SW"
                  }, {
                     name: "Swedish",
                     id: "SV"
                  }, {
                     name: "Tagalog",
                     id: "TL"
                  }, {
                     name: "Tajik",
                     id: "TG"
                  }, {
                     name: "Tamil",
                     id: "TA"
                  }, {
                     name: "Tatar",
                     id: "TT"
                  }, {
                     name: "Telugu",
                     id: "TE"
                  }, {
                     name: "Thai",
                     id: "TH"
                  }, {
                     name: "Turkish",
                     id: "TR"
                  }, {
                     name: "Turkmen",
                     id: "TK"
                  }, {
                     name: "Ukrainian",
                     id: "UK"
                  }, {
                     name: "Urdu",
                     id: "UR"
                  }, {
                     name: "Uyghur",
                     id: "UG"
                  }, {
                     name: "Uzbek",
                     id: "UZ"
                  }, {
                     name: "Vietnamese",
                     id: "VI"
                  }, {
                     name: "Welsh",
                     id: "CY"
                  }, {
                     name: "Xhosa",
                     id: "XH"
                  }, {
                     name: "Yiddish",
                     id: "YI"
                  }, {
                     name: "Yoruba",
                     id: "UO"
                  }, {
                     name: "Zulu",
                     id: "ZU"
                  }],
                  feedFilters: {
                     settings: {
                        startDate: null,
                        endDate: null,
                        minFollowers: null,
                        minLikes: null,
                        minComments: null,
                        blockedProfiles: !1,
                        blockedNetworks: !1,
                        users: null,
                        excludeUsers: null,
                        globalTags: null,
                        excludeGlobalTags: null
                     },
                     type: "communityFeed",
                     filteredNetworks: [],
                     allNetworks: [],
                     customFilterInclusion: !0,
                     communities: ["60dd9984fea235f5fd29309c"],
                     userFeedFilters: [],
                     isUserFilterSelected: !1,
                     selectedUserFilter: -1
                  }
               }
            },
            mutations: y,
            actions: M,
            getters: R
         },
         T = {
            createUser: function (e, t) {
               console.log(t);
               var n = t.user,
                  r = t.password,
                  s = n.id,
                  o = n.email;
               console.log(r, o, s), e.user.id = s, e.user.email = o, e.user.password = r
            },
            setEmail: function (e, t) {
               e.user.email = t
            },
            setUserWithoutAuth: function (e, t) {
               var n = t.email,
                  r = t.password;
               e.user.email = n, e.user.password = r
            },
            loginUser: function (e, t) {
               var n = t.token,
                  r = t.streamToken,
                  o = t.user,
                  i = t.password,
                  a = o.id,
                  c = o.email;
               e.authToken = n, e.streamToken = r, e.user.id = a, e.user.email = c, e.user.password = i, e.passwordReset = !1, s["default"].$cookies.set("authToken", n), s["default"].$cookies.set("streamToken", r)
            },
            passwordReset: function (e) {
               var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
               e.passwordReset = t
            },
            setAuthToken: function (e, t) {
               e.authToken = t
            },
            setStreamToken: function (e, t) {
               e.streamToken = t
            },
            setAuth: function (e, t) {
               e.isAuth = t
            },
            signOut: function (e) {
               e.user.email = null, e.user.id = null, e.authToken = null, e.streamToken = null, e.passwordReset = !1, s["default"].$cookies.remove("authToken"), s["default"].$cookies.remove("streamToken"), localStorage.clear()
            },
            addStep: function (e, t) {
               e.stepper.step += t
            },
            setStep: function (e, t) {
               e.stepper.step = t
            }
         },
         F = (n("25f0"), n("4fad"), n("498a2"), {
            registerUser: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, o, i, a, c, l, d, p, f, m;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = t.name, o = t.email, i = t.password, a = t.ref, c = t.refSource, l = t.network, d = t.phone, a || (a = s["default"].$cookies.get("ref")), c || (c = s["default"].$cookies.get("refSource")), d || (d = s["default"].$cookies.get("phone")), console.log("🚀 ~ file: actions.js ~ line 6 ~ registerUser ~ ref", a, c, l, d), p = {
                              name: r,
                              email: o,
                              password: i,
                              ref: a,
                              refSource: c,
                              network: l,
                              phone: d,
                              link: !0
                           }, n.prev = 6, n.next = 9, u["a"].post("/newauth/create", p);
                        case 9:
                           f = n.sent, m = Object(_["a"])(Object(_["a"])({}, f.data), {}, {
                              password: i
                           }), console.log(m), e.commit("createUser", m), n.next = 19;
                           break;
                        case 15:
                           throw n.prev = 15, n.t0 = n["catch"](6), console.log(n.t0.response), n.t0;
                        case 19:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [6, 15]
                  ])
               })))()
            },
            storeEmail: function (e, t) {
               var n = e.commit,
                  r = t;
               n("setEmail", r)
            },
            storeUserWithoutAuth: function (e, t) {
               var n = e.commit;
               n("setUserWithoutAuth", t)
            },
            signInUser: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, o, i, a, c, l, d;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = t.email, o = t.password, i = t.auth, a = {
                              username: r,
                              password: o
                           }, c = s["default"].$cookies.get("regiteredNetworks"), c && (c = JSON.parse(c), a.networksToJoin = c), s["default"].$cookies.remove("regiteredNetworks"), n.prev = 5, n.next = 8, u["a"].post("/newauth", a);
                        case 8:
                           l = n.sent, d = l.data, e.commit("loginUser", Object(_["a"])(Object(_["a"])({}, d), {}, {
                              password: o
                           })), console.log("🚀 ~ file: actions.js ~ line 16 ~ registerUser ~ result", d), e.dispatch("setOnboardedFromLogin", d), e.dispatch("setCityFromLogin", d), e.dispatch("setNetworkJoinedFromLogin", d), e.dispatch("feeds/refreshMainFeed", null, {
                              root: !0
                           }), i && (console.log("🚀 ~ file: actions.js ~ line 53 ~ signInUser ~ password", o), e.dispatch("login")), n.next = 23;
                           break;
                        case 19:
                           throw n.prev = 19, n.t0 = n["catch"](5), console.log(n.t0.response), n.t0;
                        case 23:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [5, 19]
                  ])
               })))()
            },
            setProfileIdFromLogin: function (e, t) {
               var n = t.user.profile,
                  r = n.id,
                  s = r;
               e.commit("profile/setProfileId", s, {
                  root: !0
               })
            },
            setOnboardedFromLogin: function (e, t) {
               var n = e.commit,
                  r = t.user.profile.onboarded;
               n("profile/setOnboarded", r, {
                  root: !0
               })
            },
            setCityFromLogin: function (e, t) {
               var n, r = e.commit,
                  s = null !== (n = t.user.profile.city) && void 0 !== n ? n : null;
               r("profile/setCity", s, {
                  root: !0
               })
            },
            setNetworkJoinedFromLogin: function (e, t) {
               var n, r = e.commit,
                  s = null !== (n = t.user.profile.networksCount) && void 0 !== n ? n : null;
               r("profile/setNetworkJoinedCount", s, {
                  root: !0
               })
            },
            setProfileFromLogin: function (e, t) {
               var n = t.user.profile,
                  r = n.id,
                  s = n.userId,
                  o = n.onboarded,
                  i = n.profileType,
                  a = n.socialLinks,
                  c = n.picture,
                  u = n.banner,
                  l = n.city,
                  d = n.abouts,
                  p = n.works,
                  f = n.educations,
                  m = n.description,
                  g = n.subtitle,
                  h = n.title,
                  v = n.projects,
                  b = n.products,
                  w = n.services,
                  k = n.galleries,
                  _ = n.faqs,
                  C = {
                     profileId: r,
                     onboarded: o,
                     userId: s,
                     profileType: i,
                     socialLinks: a,
                     title: h,
                     subtitle: g,
                     description: m,
                     picture: c,
                     banner: u,
                     city: l,
                     abouts: d,
                     works: p,
                     educations: f,
                     projects: v,
                     products: b,
                     services: w,
                     galleries: k,
                     faqs: _
                  };
               e.commit("profile/setProfile", C, {
                  root: !0
               })
            },
            confirmEmail: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i, a, c;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = e.commit, s = t.email, o = t.code, i = {
                              email: s,
                              code: o.toString()
                           }, n.prev = 3, n.next = 6, u["a"].post("/email/confirm", i);
                        case 6:
                           return a = n.sent, c = a.data, r("profile/verifyEmail", c), n.abrupt("return", !0);
                        case 12:
                           throw n.prev = 12, n.t0 = n["catch"](3), console.log(n.t0.response), n.t0;
                        case 16:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [3, 12]
                  ])
               })))()
            },
            confirmEmailLink: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = e.commit, s = t.token, n.prev = 2, n.next = 5, u["a"].post("/newauth/confirm-email/".concat(s), {});
                        case 5:
                           return o = n.sent, i = o.data, r("profile/verifyEmail", i), console.log(i), n.abrupt("return", {
                              success: !0
                           });
                        case 12:
                           return n.prev = 12, n.t0 = n["catch"](2), console.log(n.t0.response), n.abrupt("return", {
                              success: !1,
                              data: n.t0.response.data
                           });
                        case 16:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [2, 12]
                  ])
               })))()
            },
            forgotPassword: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function e() {
                  var n, r, s, o;
                  return regeneratorRuntime.wrap((function (e) {
                     while (1) switch (e.prev = e.next) {
                        case 0:
                           return n = t, r = {
                              email: n
                           }, e.prev = 2, e.next = 5, u["a"].post("/user/password/forgot", r);
                        case 5:
                           if (s = e.sent, o = s.data, !o) {
                              e.next = 9;
                              break
                           }
                           return e.abrupt("return", !0);
                        case 9:
                           return e.abrupt("return", !1);
                        case 12:
                           throw e.prev = 12, e.t0 = e["catch"](2), console.log(e.t0.response), e.t0;
                        case 16:
                        case "end":
                           return e.stop()
                     }
                  }), e, null, [
                     [2, 12]
                  ])
               })))()
            },
            resetPassword: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = e.commit, s = t, n.prev = 2, n.next = 5, u["a"].post("/user/password/reset", s);
                        case 5:
                           o = n.sent, i = o.data, i.success && r("passwordReset", !0), n.next = 14;
                           break;
                        case 10:
                           throw n.prev = 10, n.t0 = n["catch"](2), console.log(n.t0.response), n.t0;
                        case 14:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [2, 10]
                  ])
               })))()
            },
            togglePasswordReset: function (e, t) {
               var n = e.commit;
               n("passwordReset", t)
            },
            storeAuthToken: function (e, t) {
               var n = e.commit;
               n("setAuthToken", t)
            },
            storeStreamToken: function (e, t) {
               var n = e.commit;
               n("setStreamToken", t)
            },
            login: function (e) {
               e.commit("setAuth", !0)
            },
            logout: function (e) {
               e.commit("signOut"), e.commit("post/resetMyNetwork", null, {
                  root: !0
               }), e.commit("profile/resetProfile", null, {
                  root: !0
               }), e.commit("chat/resetChat", null, {
                  root: !0
               }), e.commit("setAuth", !1), document.documentElement.setAttribute("data-theme", "")
            },
            resendConfirmEmail: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function e() {
                  var n, r, s;
                  return regeneratorRuntime.wrap((function (e) {
                     while (1) switch (e.prev = e.next) {
                        case 0:
                           return n = t, r = {
                              email: n,
                              link: !0
                           }, e.prev = 2, e.next = 5, u["a"].post("/email/resend-code", r);
                        case 5:
                           return s = e.sent, e.abrupt("return", s.data);
                        case 9:
                           e.prev = 9, e.t0 = e["catch"](2), console.log(e.t0.response);
                        case 12:
                        case "end":
                           return e.stop()
                     }
                  }), e, null, [
                     [2, 9]
                  ])
               })))()
            },
            checkEmailConfirmed: function (e) {
               return Object(c["a"])(regeneratorRuntime.mark((function t() {
                  var n;
                  return regeneratorRuntime.wrap((function (t) {
                     while (1) switch (t.prev = t.next) {
                        case 0:
                           return t.prev = 0, t.next = 3, u["a"].get("/newauth/check-email-confirmation");
                        case 3:
                           return n = t.sent, console.log(n.data), n.data.confirmed && e.commit("profile/verifyEmail"), t.abrupt("return", n.data.confirmed);
                        case 9:
                           t.prev = 9, t.t0 = t["catch"](0), console.log(t.t0.response);
                        case 12:
                        case "end":
                           return t.stop()
                     }
                  }), t, null, [
                     [0, 9]
                  ])
               })))()
            },
            stepperDecrement: function (e) {
               var t = e.commit;
               t("addStep", -1)
            },
            stepperIncrement: function (e) {
               var t = e.commit;
               t("addStep", 1)
            },
            stepperConfig: function (e) {
               var t = e.commit,
                  n = e.rootGetters;
               t("setStep", 1);
               var r = n["profile/getProfileSubtitle"];
               console.log("🚀 ~ file: actions.js ~ line 165 ~ stepperConfig ~ rootGetters['profile/getProfileSubtitle']", n["profile/getProfileSubtitle"]);
               var s = n["profile/getProfileCity"],
                  o = n["profile/getProfilePicture"],
                  i = n["profile/getProfileDescription"];
               t("setStep", r ? i ? o ? s ? 5 : 4 : 3 : 2 : 1)
            },
            answerQuestions: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i, a;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = {
                              answers: []
                           }, Object.entries(t).forEach((function (e) {
                              if (e[1].trim()) {
                                 var t = {};
                                 t.question = e[0], t.answer = e[1], r.answers.push(t)
                              }
                           })), console.log(r), s = e.getters["getUserAuthToken"], o = {
                              headers: {
                                 Authorization: "Bearer ".concat(s)
                              }
                           }, n.next = 7, u["a"].post("/profiles/onboarding-questions", r, o);
                        case 7:
                           i = n.sent, a = i.data.onboarded, e.commit("profile/setOnboarded", a), console.log(i);
                        case 11:
                        case "end":
                           return n.stop()
                     }
                  }), n)
               })))()
            },
            shareTracker: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function e() {
                  var n, r, s, o, i;
                  return regeneratorRuntime.wrap((function (e) {
                     while (1) switch (e.prev = e.next) {
                        case 0:
                           return n = t.handle, r = t.type, s = t.postId, o = {
                              handle: n,
                              type: r,
                              postId: s
                           }, e.prev = 2, e.next = 5, u["a"].post("/share", o);
                        case 5:
                           return i = e.sent, e.abrupt("return", i);
                        case 9:
                           throw e.prev = 9, e.t0 = e["catch"](2), console.log(e.t0.response), e.t0;
                        case 13:
                        case "end":
                           return e.stop()
                     }
                  }), e, null, [
                     [2, 9]
                  ])
               })))()
            },
            registerSignUp: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function e() {
                  var n, r, s, o, i;
                  return regeneratorRuntime.wrap((function (e) {
                     while (1) switch (e.prev = e.next) {
                        case 0:
                           return n = t.email, r = t.token, s = t.networkId, o = {
                              email: n,
                              hubsJoined: [s],
                              hubsInvited: r ? [r] : []
                           }, e.prev = 2, e.next = 5, u["a"].post("/pending-signups", o);
                        case 5:
                           return i = e.sent, e.abrupt("return", i.data);
                        case 9:
                           e.prev = 9, e.t0 = e["catch"](2), console.log(e.t0);
                        case 12:
                        case "end":
                           return e.stop()
                     }
                  }), e, null, [
                     [2, 9]
                  ])
               })))()
            }
         }),
         L = {
            getUserId: function (e) {
               return e.user.id
            },
            getUserEmail: function (e) {
               return e.user.email
            },
            getUserPassword: function (e) {
               return e.user.password
            },
            getUserAuthToken: function (e) {
               return e.authToken
            },
            getUserStreamToken: function (e) {
               return e.streamToken
            },
            getAuthStatus: function (e) {
               return e.isAuth
            },
            getCompleteProfileStep: function (e) {
               return e.stepper.step
            },
            getPasswordReset: function (e) {
               return e.passwordReset
            }
         },
         $ = {
            namespaced: !0,
            state: function () {
               return {
                  authToken: null,
                  streamToken: null,
                  isAuth: !1,
                  passwordReset: !1,
                  user: {
                     id: null,
                     email: null,
                     password: null
                  },
                  stepper: {
                     step: 1
                  }
               }
            },
            mutations: T,
            actions: F,
            getters: L
         },
         B = {
            setNetworks: function (e, t) {
               e.networks = [].concat(Object(o["a"])(e.networks), Object(o["a"])(t))
            },
            updateInterests: function (e, t) {
               e.interests = t
            },
            addToSelectedInterests: function (e, t) {
               e.selectedInterests.push(t)
            },
            removeFromSelectedInterests: function (e, t) {
               var n = t,
                  r = e.selectedInterests.findIndex((function (e) {
                     return e.title === n
                  }));
               e.selectedInterests.splice(r, 1)
            },
            clearSelectedInterests: function (e) {
               e.selectedInterests = []
            },
            clearNetworkInterests: function (e) {
               e.selectedInterests = e.selectedInterests.filter((function (e) {
                  return !e.network
               }))
            },
            updateUserListForMention: function (e, t) {
               e.userMentionList = t
            },
            clearUserList: function (e) {
               e.userMentionList = []
            },
            resetMyNetwork: function (e) {
               e.networks = []
            },
            updateNetworkNotification: function (e, t) {
               var n = e.networks.findIndex((function (e) {
                  return e.id === t.id
               }));
               n >= 0 && (e.networks[n].notifyMe = t.notifyMe)
            }
         },
         U = {
            getTypeList: function (e) {
               return e.type
            },
            getUserNetworks: function (e) {
               return e.networks
            },
            getAvailableNetworkInterestsForPost: function (e) {
               return e.selectedInterests.length > 0 && e.interests.network ? e.interests.network.filter((function (t) {
                  return -1 === e.selectedInterests.findIndex((function (e) {
                     return e.id === t.id
                  }))
               })) : e.interests.network
            },
            getAvailableGlobalInterestsForPost: function (e) {
               var t = e.interests.community ? e.interests.community.concat(e.interests.global) : e.interests.global;
               return e.selectedInterests.length > 0 && t ? t.filter((function (t) {
                  return -1 === e.selectedInterests.findIndex((function (e) {
                     return e.id === t.id
                  }))
               })) : t
            },
            getSelectedInterests: function (e) {
               return e.selectedInterests
            },
            getUserListForMention: function (e) {
               return e.userMentionList
            }
         },
         D = {
            setNetworks: function (e, t) {
               e.commit("setNetworks", t)
            },
            fetchInterests: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = e.rootGetters["auth/getUserAuthToken"], s = {
                              headers: {
                                 Authorization: "Bearer ".concat(r)
                              }
                           }, o = t ? "/interests?network=".concat(t) : "/interests", n.prev = 3, n.next = 6, u["a"].get(o, s);
                        case 6:
                           i = n.sent, e.commit("updateInterests", i.data), n.next = 13;
                           break;
                        case 10:
                           n.prev = 10, n.t0 = n["catch"](3), console.log(n.t0);
                        case 13:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [3, 10]
                  ])
               })))()
            },
            fetchUserListForMention: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return "" === t && (t = "a"), r = e.rootGetters["auth/getUserAuthToken"], s = {
                              headers: {
                                 Authorization: "Bearer ".concat(r)
                              }
                           }, n.prev = 3, n.next = 6, u["a"].get("/v2/profiles/search?text=" + t, s);
                        case 6:
                           return o = n.sent, e.commit("updateUserListForMention", o.data), i = o.data, n.abrupt("return", i);
                        case 12:
                           n.prev = 12, n.t0 = n["catch"](3), console.log(n.t0);
                        case 15:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [3, 12]
                  ])
               })))()
            },
            searchPosts: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function e() {
                  var n;
                  return regeneratorRuntime.wrap((function (e) {
                     while (1) switch (e.prev = e.next) {
                        case 0:
                           return e.prev = 0, e.next = 3, u["a"].get("/posts/search?text=" + t.searchText);
                        case 3:
                           return n = e.sent, e.abrupt("return", n.data);
                        case 7:
                           e.prev = 7, e.t0 = e["catch"](0), console.log(e.t0);
                        case 10:
                        case "end":
                           return e.stop()
                     }
                  }), e, null, [
                     [0, 7]
                  ])
               })))()
            },
            searchProfiles: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function e() {
                  var n;
                  return regeneratorRuntime.wrap((function (e) {
                     while (1) switch (e.prev = e.next) {
                        case 0:
                           return e.prev = 0, e.next = 3, u["a"].get("/v2/profiles/search?text=" + t.searchText);
                        case 3:
                           return n = e.sent, e.abrupt("return", n.data);
                        case 7:
                           e.prev = 7, e.t0 = e["catch"](0), console.log(e.t0);
                        case 10:
                        case "end":
                           return e.stop()
                     }
                  }), e, null, [
                     [0, 7]
                  ])
               })))()
            }
         },
         N = {
            namespaced: !0,
            state: function () {
               return {
                  networks: [],
                  interests: {
                     community: [],
                     global: [],
                     network: []
                  },
                  selectedInterests: [],
                  userMentionList: [],
                  type: [{
                     id: 0,
                     type: "expertise",
                     title: "Expertise",
                     icon: "icon-expertise"
                  }, {
                     id: 1,
                     type: "question",
                     title: "Question",
                     icon: "icon-question"
                  }, {
                     id: 2,
                     type: "job",
                     title: "Job",
                     icon: "icon-job"
                  }, {
                     id: 3,
                     type: "journey",
                     title: "Journey",
                     icon: "icon-journey"
                  }, {
                     id: 4,
                     type: "achievement",
                     title: "Achievement",
                     icon: "icon-achievement"
                  }, {
                     id: 5,
                     type: "deal",
                     title: "Deal",
                     icon: "icon-deal"
                  }, {
                     id: 6,
                     type: "meeting",
                     title: "Meeting",
                     icon: "icon-meeting"
                  }, {
                     id: 7,
                     type: "event",
                     title: "Event",
                     icon: "icon-event"
                  }, {
                     id: 8,
                     type: "blog",
                     title: "Blog",
                     icon: "icon-blog"
                  }, {
                     id: 9,
                     type: "podcast",
                     title: "Podcast",
                     icon: "icon-podcast"
                  }, {
                     id: 10,
                     type: "support",
                     title: "Bizfluence Support",
                     icon: "icon-support"
                  }, {
                     id: 11,
                     type: "milestone",
                     title: "Milestone",
                     icon: "icon-milestone"
                  }]
               }
            },
            mutations: B,
            actions: D,
            getters: U
         },
         E = {
            setScreenWidth: function (e, t) {
               e.screenWidth = t
            },
            setNetworksByCommunity: function (e, t) {
               var n = t;
               e.networksByCommunity = [].concat(Object(o["a"])(e.networksByCommunity), Object(o["a"])(n))
            },
            setNetworkCommunity: function (e, t) {
               var n = t.networkId,
                  r = e.networksByCommunity.findIndex((function (e) {
                     return e.id === n
                  }));
               e.networksByCommunity[r].joined = t.isJoined
            },
            resetnetworksByCommunity: function (e) {
               e.networksByCommunity = []
            },
            resetMyNetworks: function (e) {
               e.myNetworks = []
            },
            setMyNetworks: function (e, t) {
               e.myNetworks = t
            },
            appendMyNetworks: function (e, t) {
               e.myNetworks = [].concat(Object(o["a"])(e.myNetworks), Object(o["a"])(t))
            },
            setHubAttribs: function (e, t) {
               e.hubAttribs = t
            },
            setAllNetworkCategories: function (e, t) {
               e.allNetworkCategories = t
            },
            setMyNetworkInvites: function (e, t) {
               e.myNetworkInvites = t
            },
            setMyNetworkRequests: function (e, t) {
               e.myNetworkRequests = t
            },
            setMyOutgoingPendingInvites: function (e, t) {
               e.myOutgoingPendingInvites = t
            },
            setMyJoinRequests: function (e, t) {
               e.myJoinRequests = t
            },
            setNetworkCategories: function (e, t) {
               e.networkCategories = t
            }
         },
         q = {
            fetchNetworksByCommunity: function (e) {
               var t = arguments;
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i, a, c, l, d;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = e.commit, s = t.length > 1 && void 0 !== t[1] ? t[1] : {}, n.prev = 2, i = {
                              params: {
                                 page: s.page,
                                 limit: 10
                              }
                           }, a = "60dd9984fea235f5fd29309c", c = null !== (o = s.communityId) && void 0 !== o ? o : a, n.next = 8, u["a"].get("/communities/".concat(c, "/networks"), i);
                        case 8:
                           return l = n.sent, d = l.data, r("setNetworksByCommunity", d), n.abrupt("return", d);
                        case 14:
                           return n.prev = 14, n.t0 = n["catch"](2), console.log(n.t0), n.abrupt("return", !1);
                        case 18:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [2, 14]
                  ])
               })))()
            },
            joinNetwork: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function e() {
                  var n;
                  return regeneratorRuntime.wrap((function (e) {
                     while (1) switch (e.prev = e.next) {
                        case 0:
                           return e.prev = 0, e.next = 3, u["a"].post("/networks/join", t);
                        case 3:
                           return n = e.sent, e.abrupt("return", n.data);
                        case 7:
                           return e.prev = 7, e.t0 = e["catch"](0), console.log(e.t0), e.abrupt("return", !1);
                        case 11:
                        case "end":
                           return e.stop()
                     }
                  }), e, null, [
                     [0, 7]
                  ])
               })))()
            },
            leaveNetwork: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function e() {
                  var n;
                  return regeneratorRuntime.wrap((function (e) {
                     while (1) switch (e.prev = e.next) {
                        case 0:
                           return e.prev = 0, e.next = 3, u["a"].delete("/networks/".concat(t.networkId, "/leave"));
                        case 3:
                           return n = e.sent, e.abrupt("return", n.data);
                        case 7:
                           return e.prev = 7, e.t0 = e["catch"](0), console.log(e.t0), e.abrupt("return", !1);
                        case 11:
                        case "end":
                           return e.stop()
                     }
                  }), e, null, [
                     [0, 7]
                  ])
               })))()
            },
            searchNetworks: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = {
                              params: {
                                 text: t.text
                              }
                           }, n.next = 3, u["a"].get("/networks/search", r);
                        case 3:
                           s = n.sent, e.commit("resetnetworksByCommunity"), e.commit("setNetworksByCommunity", s.data);
                        case 6:
                        case "end":
                           return n.stop()
                     }
                  }), n)
               })))()
            },
            joinMultipleNetworks: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i, a, c;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = t.networks, console.log("🚀 ~ file: actions.js ~ line 67 ~ joinMultipleNetworks ~  networks", r, Object(k["a"])(r)), s = e.rootGetters["auth/getUserAuthToken"], o = {
                              headers: {
                                 Authorization: "Bearer ".concat(s)
                              }
                           }, i = {
                              networks: r
                           }, n.prev = 5, n.next = 8, u["a"].post("/networks/multiple", i, o);
                        case 8:
                           return a = n.sent, c = a.data, n.abrupt("return", c);
                        case 13:
                           return n.prev = 13, n.t0 = n["catch"](5), console.log(n.t0.response), n.abrupt("return", !1);
                        case 17:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [5, 13]
                  ])
               })))()
            },
            fetchHubsBySearch: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function e() {
                  var n, r;
                  return regeneratorRuntime.wrap((function (e) {
                     while (1) switch (e.prev = e.next) {
                        case 0:
                           return n = {
                              params: {
                                 page: t.page,
                                 limit: 20,
                                 text: t.text,
                                 sortOrder: t.sortOrder,
                                 sortField: t.sortField
                              }
                           }, e.next = 3, u["a"].get("/hubs/search", n);
                        case 3:
                           if (r = e.sent, !r.data.length) {
                              e.next = 6;
                              break
                           }
                           return e.abrupt("return", [r.data]);
                        case 6:
                           return e.abrupt("return", "");
                        case 7:
                        case "end":
                           return e.stop()
                     }
                  }), e)
               })))()
            },
            fetchNetworkAttribs: function (e) {
               return Object(c["a"])(regeneratorRuntime.mark((function t() {
                  var n;
                  return regeneratorRuntime.wrap((function (t) {
                     while (1) switch (t.prev = t.next) {
                        case 0:
                           return t.prev = 0, t.next = 3, u["a"].get("/hubs/discover");
                        case 3:
                           return n = t.sent, e.commit("setHubAttribs", n.data), t.abrupt("return", n.data);
                        case 8:
                           throw t.prev = 8, t.t0 = t["catch"](0), console.log(t.t0.response), t.t0;
                        case 12:
                        case "end":
                           return t.stop()
                     }
                  }), t, null, [
                     [0, 8]
                  ])
               })))()
            },
            fetchHubsByAttribs: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function e() {
                  var n, r, s;
                  return regeneratorRuntime.wrap((function (e) {
                     while (1) switch (e.prev = e.next) {
                        case 0:
                           return e.prev = 0, n = {
                              params: {
                                 page: t.page,
                                 limit: 10
                              }
                           }, r = t.categoryId, e.next = 5, u["a"].get("/hubs/attribute/".concat(r), n);
                        case 5:
                           if (s = e.sent, !s.data.length) {
                              e.next = 8;
                              break
                           }
                           return e.abrupt("return", [s.data]);
                        case 8:
                           return e.abrupt("return", "");
                        case 11:
                           throw e.prev = 11, e.t0 = e["catch"](0), console.log(e.t0.response), e.t0;
                        case 15:
                        case "end":
                           return e.stop()
                     }
                  }), e, null, [
                     [0, 11]
                  ])
               })))()
            },
            fetchHubsByCategories: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function e() {
                  var n, r, s;
                  return regeneratorRuntime.wrap((function (e) {
                     while (1) switch (e.prev = e.next) {
                        case 0:
                           return e.prev = 0, n = {
                              params: {
                                 page: t.page,
                                 limit: 10
                              }
                           }, r = t.categoryId, e.next = 5, u["a"].get("/hubs/category/".concat(r), n);
                        case 5:
                           if (s = e.sent, !s.data.length) {
                              e.next = 8;
                              break
                           }
                           return e.abrupt("return", [s.data]);
                        case 8:
                           return e.abrupt("return", "");
                        case 11:
                           throw e.prev = 11, e.t0 = e["catch"](0), console.log(e.t0.response), e.t0;
                        case 15:
                        case "end":
                           return e.stop()
                     }
                  }), e, null, [
                     [0, 11]
                  ])
               })))()
            },
            fetchNetworkCategories: function (e) {
               return Object(c["a"])(regeneratorRuntime.mark((function t() {
                  var n;
                  return regeneratorRuntime.wrap((function (t) {
                     while (1) switch (t.prev = t.next) {
                        case 0:
                           return t.prev = 0, t.next = 3, u["a"].get("/network-categories/my");
                        case 3:
                           n = t.sent, e.commit("setNetworkCategories", n.data), t.next = 11;
                           break;
                        case 7:
                           throw t.prev = 7, t.t0 = t["catch"](0), console.log(t.t0.response), t.t0;
                        case 11:
                        case "end":
                           return t.stop()
                     }
                  }), t, null, [
                     [0, 7]
                  ])
               })))()
            },
            getMyNetworks: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i, a, c;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return n.prev = 0, r = t.sortField, s = t.sortOrder, o = t.categories, i = t.text, a = {
                              params: {
                                 sortField: r,
                                 sortOrder: s,
                                 categories: o,
                                 text: i
                              }
                           }, n.next = 5, u["a"].get("/networks/personal/", a);
                        case 5:
                           return c = n.sent, e.commit("setMyNetworks", c.data), n.abrupt("return", c.data);
                        case 10:
                           throw n.prev = 10, n.t0 = n["catch"](0), console.log(n.t0.response), n.t0;
                        case 14:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [0, 10]
                  ])
               })))()
            },
            searchMyNetworks: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return n.prev = 0, r = t.text, s = {
                              params: {
                                 text: r
                              }
                           }, n.next = 5, u["a"].get("/networks/search/my/", s);
                        case 5:
                           o = n.sent, e.commit("resetMyNetworks"), e.commit("setMyNetworks", o.data), n.next = 14;
                           break;
                        case 10:
                           throw n.prev = 10, n.t0 = n["catch"](0), console.log(n.t0.response), n.t0;
                        case 14:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [0, 10]
                  ])
               })))()
            },
            getNetworkInviteList: function () {
               return Object(c["a"])(regeneratorRuntime.mark((function e() {
                  var t, n;
                  return regeneratorRuntime.wrap((function (e) {
                     while (1) switch (e.prev = e.next) {
                        case 0:
                           return t = {
                              params: {
                                 page: 1,
                                 limit: 200
                              }
                           }, e.next = 3, u["a"].get("/networks/can-invite", t);
                        case 3:
                           return n = e.sent, console.log(n.data), e.abrupt("return", n.data);
                        case 6:
                        case "end":
                           return e.stop()
                     }
                  }), e)
               })))()
            },
            inviteNetworkMember: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function e() {
                  var n;
                  return regeneratorRuntime.wrap((function (e) {
                     while (1) switch (e.prev = e.next) {
                        case 0:
                           return e.next = 2, u["a"].post("/networks/invites-multiple", t);
                        case 2:
                           return n = e.sent, e.abrupt("return", n.data);
                        case 4:
                        case "end":
                           return e.stop()
                     }
                  }), e)
               })))()
            },
            fetchMyNetworkInvites: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function e() {
                  var n, r, s;
                  return regeneratorRuntime.wrap((function (e) {
                     while (1) switch (e.prev = e.next) {
                        case 0:
                           return n = {
                              params: {
                                 page: t.page,
                                 limit: 20
                              }
                           }, e.next = 3, u["a"].get("/networks/my-invites", n);
                        case 3:
                           if (r = e.sent, s = r.data, !s) {
                              e.next = 7;
                              break
                           }
                           return e.abrupt("return", s.map((function (e) {
                              return {
                                 text: "<b>".concat(e.admin.name, "</b> invited you to join @[").concat(e.network.name, "]{hubs/").concat(e.network.slug, "} network"),
                                 avatar: e.user.url,
                                 createdAt: e.createdAt,
                                 status: e.status,
                                 networkId: e.network.id,
                                 requestId: e.id
                              }
                           })));
                        case 7:
                           return e.abrupt("return", s);
                        case 8:
                        case "end":
                           return e.stop()
                     }
                  }), e)
               })))()
            },
            fetchMyRequests: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function e() {
                  var n, r, s;
                  return regeneratorRuntime.wrap((function (e) {
                     while (1) switch (e.prev = e.next) {
                        case 0:
                           return n = {
                              params: {
                                 page: t.page,
                                 limit: 20
                              }
                           }, e.next = 3, u["a"].get("/networks/my-requests", n);
                        case 3:
                           if (r = e.sent, s = r.data, !s) {
                              e.next = 7;
                              break
                           }
                           return e.abrupt("return", s.map((function (e) {
                              return {
                                 text: "pending" == e.status ? "<b>".concat(e.network.name, "</b> network") : "<b>".concat(e.network.name, "</b> network @[").concat(e.status.charAt(0).toUpperCase() + e.status.substring(1), "]{data.network.slug} your request"),
                                 avatar: e.user.url,
                                 createdAt: e.createdAt,
                                 status: e.status
                              }
                           })));
                        case 7:
                           return e.abrupt("return", s);
                        case 8:
                        case "end":
                           return e.stop()
                     }
                  }), e)
               })))()
            },
            fetchJoinRequests: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function e() {
                  var n, r, s;
                  return regeneratorRuntime.wrap((function (e) {
                     while (1) switch (e.prev = e.next) {
                        case 0:
                           return n = {
                              params: {
                                 page: t.page,
                                 limit: 20
                              }
                           }, e.next = 3, u["a"].get("/networks/join-requests", n);
                        case 3:
                           if (r = e.sent, s = r.data, !s) {
                              e.next = 7;
                              break
                           }
                           return e.abrupt("return", s.map((function (e) {
                              return {
                                 text: "<b>".concat(e.profile.title, "</b> requested to join @[").concat(e.network.name, "]{networks/").concat(e.network.slug, "} network"),
                                 avatar: e.profile.url,
                                 createdAt: e.createdAt,
                                 status: e.status,
                                 requestId: e.id,
                                 slug: e.network.slug
                              }
                           })));
                        case 7:
                           return e.abrupt("return", s);
                        case 8:
                        case "end":
                           return e.stop()
                     }
                  }), e)
               })))()
            },
            fetchMyOutgoingInvites: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function e() {
                  var n, r, s;
                  return regeneratorRuntime.wrap((function (e) {
                     while (1) switch (e.prev = e.next) {
                        case 0:
                           return n = {
                              params: {
                                 page: t.page,
                                 limit: 20
                              }
                           }, e.next = 3, u["a"].get("/networks/my-outgoing-invites", n);
                        case 3:
                           if (r = e.sent, s = r.data, !s) {
                              e.next = 7;
                              break
                           }
                           return e.abrupt("return", s.map((function (e) {
                              return {
                                 text: "You invited <b>".concat(e.user.name, "</b> to @[").concat(e.network.name, "]{hubs/").concat(e.network.slug, "} network"),
                                 avatar: e.user.picture.url,
                                 createdAt: e.createdAt,
                                 status: e.status
                              }
                           })));
                        case 7:
                           return e.abrupt("return", s);
                        case 8:
                        case "end":
                           return e.stop()
                     }
                  }), e)
               })))()
            },
            networkInvitesRequests: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function e() {
                  var n;
                  return regeneratorRuntime.wrap((function (e) {
                     while (1) switch (e.prev = e.next) {
                        case 0:
                           return e.next = 2, u["a"].post("/networks/requests", t);
                        case 2:
                           return n = e.sent, e.abrupt("return", n.data);
                        case 4:
                        case "end":
                           return e.stop()
                     }
                  }), e)
               })))()
            },
            manageMyJoinRequests: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return n.next = 2, u["a"].put("/networks/".concat(t.networkId, "/invites"), {
                              type: t.type
                           });
                        case 2:
                           return r = n.sent, e.dispatch("syncAfterNetworkChange"), n.abrupt("return", r.data);
                        case 5:
                        case "end":
                           return n.stop()
                     }
                  }), n)
               })))()
            },
            syncAfterNetworkChange: function (e) {
               return Object(c["a"])(regeneratorRuntime.mark((function t() {
                  return regeneratorRuntime.wrap((function (t) {
                     while (1) switch (t.prev = t.next) {
                        case 0:
                           return e.commit("post/resetMyNetwork", null, {
                              root: !0
                           }), e.commit("feeds/resetPinnedPosts", null, {
                              root: !0
                           }), t.next = 4, e.dispatch("networks/getMyNetworks", null, {
                              root: !0
                           });
                        case 4:
                        case "end":
                           return t.stop()
                     }
                  }), t)
               })))()
            },
            clearAllUnread: function () {
               return Object(c["a"])(regeneratorRuntime.mark((function e() {
                  return regeneratorRuntime.wrap((function (e) {
                     while (1) switch (e.prev = e.next) {
                        case 0:
                           return e.prev = 0, e.next = 3, u["a"].delete("/posts/unread");
                        case 3:
                           e.next = 8;
                           break;
                        case 5:
                           e.prev = 5, e.t0 = e["catch"](0), console.log(e.t0.response);
                        case 8:
                        case "end":
                           return e.stop()
                     }
                  }), e, null, [
                     [0, 5]
                  ])
               })))()
            },
            getInviteCounts: function () {
               return Object(c["a"])(regeneratorRuntime.mark((function e() {
                  var t;
                  return regeneratorRuntime.wrap((function (e) {
                     while (1) switch (e.prev = e.next) {
                        case 0:
                           return e.next = 2, u["a"].get("/networks/invites-requests-count");
                        case 2:
                           return t = e.sent, e.abrupt("return", t.data);
                        case 4:
                        case "end":
                           return e.stop()
                     }
                  }), e)
               })))()
            },
            getAllNetworkCategories: function (e) {
               return Object(c["a"])(regeneratorRuntime.mark((function t() {
                  var n;
                  return regeneratorRuntime.wrap((function (t) {
                     while (1) switch (t.prev = t.next) {
                        case 0:
                           return t.next = 2, u["a"].get("/network-categories");
                        case 2:
                           n = t.sent, e.commit("setAllNetworkCategories", n.data);
                        case 4:
                        case "end":
                           return t.stop()
                     }
                  }), t)
               })))()
            },
            joinByToken: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function e() {
                  var n, r;
                  return regeneratorRuntime.wrap((function (e) {
                     while (1) switch (e.prev = e.next) {
                        case 0:
                           return n = t.token, e.next = 3, u["a"].post("/networks/join-by-token", {
                              token: n
                           });
                        case 3:
                           return r = e.sent, e.abrupt("return", r.data);
                        case 5:
                        case "end":
                           return e.stop()
                     }
                  }), e)
               })))()
            },
            getLongToken: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function e() {
                  var n, r;
                  return regeneratorRuntime.wrap((function (e) {
                     while (1) switch (e.prev = e.next) {
                        case 0:
                           return n = t.token, e.prev = 1, e.next = 4, u["a"].get("network-invites/decode/".concat(n));
                        case 4:
                           return r = e.sent, e.abrupt("return", r.data);
                        case 8:
                           e.prev = 8, e.t0 = e["catch"](1), console.log(e.t0);
                        case 11:
                        case "end":
                           return e.stop()
                     }
                  }), e, null, [
                     [1, 8]
                  ])
               })))()
            },
            getInvitationDetails: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function e() {
                  var n, r;
                  return regeneratorRuntime.wrap((function (e) {
                     while (1) switch (e.prev = e.next) {
                        case 0:
                           return n = t.token, e.prev = 1, e.next = 4, u["a"].get("/network-invites/".concat(n));
                        case 4:
                           return r = e.sent, e.abrupt("return", {
                              hasPendingRequest: r.data.hasPendingRequest,
                              joined: r.data.joined,
                              inviterDetails: r.data.whoInvited,
                              networkDetails: Object(_["a"])(Object(_["a"])({}, r.data.network), {}, {
                                 randomMembers: r.data.randomMembers || []
                              }),
                              recentPosts: r.data.recentPosts || []
                           });
                        case 8:
                           e.prev = 8, e.t0 = e["catch"](1), console.log(e.t0);
                        case 11:
                        case "end":
                           return e.stop()
                     }
                  }), e, null, [
                     [1, 8]
                  ])
               })))()
            }
         },
         z = {
            getNetworksByCommunity: function (e) {
               return e.networksByCommunity.filter((function (e) {
                  return "public" == e.visibility
               }))
            },
            getMobileScreenWidth: function (e) {
               return e.screenWidth < 991
            },
            getHubAttribs: function (e) {
               return e.hubAttribs
            },
            getHubCategories: function (e) {
               return e.hubAttribs["categories"]
            },
            getMyNetworks: function (e) {
               return e.myNetworks
            },
            getMyNetworkInvites: function (e) {
               return e.myNetworkInvites
            },
            getmyNetworkRequests: function (e) {
               return e.myNetworkRequests
            },
            getMyOutgoingPendingInvites: function (e) {
               return e.myOutgoingPendingInvites
            },
            getMyJoinRequests: function (e) {
               return e.myJoinRequests
            },
            getNetworkTypes: function (e) {
               return e.networkTypes
            },
            getNetworkCategories: function (e) {
               return e.networkCategories
            }
         },
         H = {
            namespaced: !0,
            state: function () {
               return {
                  myNetworks: [],
                  networksByCommunity: [],
                  hubAttribs: [],
                  networkCategories: [],
                  screenWidth: null,
                  myNetworkInvites: [],
                  myOutgoingPendingInvites: [],
                  myJoinRequests: [],
                  myNetworkequests: [],
                  allNetworkcategories: [],
                  networkTypes: ["General", "Friends", "Team", "Local", "Influencers", "Companies", "Industries", "Communities"]
               }
            },
            mutations: E,
            actions: q,
            getters: z
         },
         G = {
            setProfile: function (e, t) {
               var n = t.profileId,
                  r = t.userId,
                  s = t.onboarded,
                  o = t.hasOnboardingAnswers,
                  i = t.profileType,
                  a = t.email,
                  c = t.name,
                  u = t.username,
                  l = t.title,
                  d = t.subtitle,
                  p = t.location,
                  f = t.description,
                  m = t.picture,
                  g = t.badges,
                  h = t.banner,
                  v = t.city,
                  b = t.posts,
                  w = t.followers,
                  k = t.followings,
                  _ = t.abouts,
                  C = t.works,
                  y = t.educations,
                  x = t.projects,
                  P = t.products,
                  I = t.services,
                  j = t.galleries,
                  M = t.faqs,
                  R = t.socialLinks,
                  O = t.meta,
                  A = t.recentPosts,
                  S = t.handle,
                  T = t.followed,
                  F = t.notifyMe,
                  L = t.postsCount,
                  $ = t.commentsReceivedCount,
                  B = t.postsLikesReceivedCount,
                  U = t.commentsLikesReceivedCount,
                  D = t.followersCount,
                  N = t.personalFollowingCount,
                  E = t.points;
               e.profileId = n, e.userId = r, e.profileType = i, e.onboarded = s, e.hasOnboardingAnswers = o, e.email = a, e.name = c, e.username = u, e.title = l, e.subtitle = d, e.location = p, e.city = v, e.description = f, e.picture = m, e.badges = g, e.banner = h, e.counts.posts = b, e.counts.followers = w, e.counts.followings = k, e.abouts = _, e.works = C, e.educations = y, e.projects = x, e.products = P, e.services = I, e.galleries = j, e.faqs = M, e.socialLinks = R, e.meta = O, e.recentPosts = A, e.handle = S, e.followed = T, e.counts.posts = L, e.counts.commentsReceivedCount = $, e.counts.postsLikesReceivedCount = B, e.counts.commentsLikesReceivedCount = U, e.counts.followers = D, e.counts.followings = N, e.notifyMe = F, e.fetched = !0, e.points = E
            },
            resetProfile: function (e) {
               var t = {
                  userId: null,
                  profileId: null,
                  fetched: !1,
                  onboarded: !1,
                  email: null,
                  profileType: null,
                  name: null,
                  username: null,
                  title: null,
                  subtitle: null,
                  location: null,
                  city: null,
                  description: null,
                  picture: null,
                  banner: null,
                  counts: {
                     posts: null,
                     followers: null,
                     followings: null,
                     commentsReceivedCount: null,
                     postsLikesReceivedCount: null,
                     commentsLikesReceivedCount: null
                  },
                  abouts: [],
                  works: [],
                  educations: [],
                  projects: [],
                  products: [],
                  services: [],
                  galleries: [],
                  certifications: [],
                  faqs: [],
                  circles: [],
                  socialLinks: null,
                  recentPosts: [],
                  followed: !1,
                  notifyMe: !1,
                  points: null
               };
               e.profileId = t.profileId, e.userId = t.userId, e.profileType = t.profileType, e.onboarded = t.onboarded, e.email = t.email, e.name = t.name, e.username = t.username, e.title = t.title, e.subtitle = t.subtitle, e.location = t.location, e.city = t.city, e.description = t.description, e.picture = t.picture, e.banner = t.banner, e.counts.posts = t.posts, e.counts.followers = t.followers, e.counts.followings = t.followings, e.abouts = t.abouts, e.works = t.works, e.educations = t.educations, e.projects = t.projects, e.products = t.products, e.services = t.services, e.galleries = t.galleries, e.faqs = t.faqs, e.socialLinks = t.socialLinks, e.recentPosts = t.recentPosts, e.followed = t.followed, e.notifyMe = t.notifyMe, e.fetched = t.points
            },
            setProfileId: function (e, t) {
               e.profileId = t
            },
            setProfileSlug: function (e, t) {
               e.handle = t
            },
            updateFollowStatus: function (e, t) {
               e.followed = t
            },
            addProfileCount: function (e, t) {
               e.counts[t] += 1
            },
            removeProfileCount: function (e, t) {
               e.counts[t] -= 1
            }
         },
         W = (n("5319"), n("1276"), n("a18c")),
         V = {
            fetchProfile: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i, a, c, l, d, p, f, m, g, h, v, b, w, k, _, C, y, x, P, I, j, M, R, O, A, S, T, F, L, $, B, U, D, N, E, q, z, H, G, V, Y, J, K;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           if (r = e.rootGetters["auth/getUserAuthToken"], !r) {
                              n.next = 34;
                              break
                           }
                           return o = {
                              headers: {
                                 Authorization: "Bearer ".concat(r)
                              }
                           }, n.prev = 3, n.next = 6, u["a"].get("/profiles/" + t, o);
                        case 6:
                           s = n.sent, console.log("🚀 ~ file: actions.js ~ line 16 ~ fetchProfile ~ with token", r), n.next = 32;
                           break;
                        case 10:
                           if (n.prev = 10, n.t0 = n["catch"](3), i = n.t0.response.status, console.log(i), 404 !== i) {
                              n.next = 19;
                              break
                           }
                           return n.next = 17, W["a"].replace({
                              path: "/user-not-found"
                           });
                        case 17:
                           n.next = 31;
                           break;
                        case 19:
                           if (401 !== i && 403 !== i) {
                              n.next = 24;
                              break
                           }
                           return n.next = 22, W["a"].replace({
                              path: "/content-restricted"
                           });
                        case 22:
                           n.next = 31;
                           break;
                        case 24:
                           if (400 !== i) {
                              n.next = 31;
                              break
                           }
                           for (a = n.t0.response.data.message, c = a.split(" "), l = "", d = "", p = 0; p < c.length; p++) "ProfileId:" === c[p] && (console.log("UserID found"), d = c[p + 1]), "title:" === c[p] && (l = c[p + 1]);
                           return n.abrupt("return", {
                              success: !1,
                              message: "This user was deactivated.",
                              status: 400,
                              title: l,
                              userId: d
                           });
                        case 31:
                           return n.abrupt("return");
                        case 32:
                           n.next = 50;
                           break;
                        case 34:
                           return n.prev = 34, n.next = 37, u["a"].get("/profiles/public/" + t);
                        case 37:
                           s = n.sent, n.next = 50;
                           break;
                        case 40:
                           if (n.prev = 40, n.t1 = n["catch"](34), f = n.t1.response.status, 404 !== f) {
                              n.next = 48;
                              break
                           }
                           return n.next = 46, W["a"].push({
                              path: "/notfound"
                           });
                        case 46:
                           n.next = 49;
                           break;
                        case 48:
                        case 49:
                           return n.abrupt("return");
                        case 50:
                           return m = s.data, console.log("🚀 ~ file: actions.js ~ line 45 ~ fetchProfile ~ result", m), g = m.id, h = m.userId, v = m.onboarded, b = m.hasAnswers, w = m.profileType, k = m.socialLinks, _ = m.picture, C = m.badges, y = m.banner, x = m.city, P = m.abouts, I = m.works, j = m.educations, M = m.description, R = m.subtitle, O = m.title, A = m.projects, S = m.products, T = m.services, F = m.galleries, L = m.faqs, $ = m.meta, B = m.recentPosts, U = m.handle, D = m.followed, N = m.notifyMe, E = m.postsCount, q = m.commentsReceivedCount, z = m.postsLikesReceivedCount, H = m.commentsLikesReceivedCount, G = m.followersCount, V = m.businessFollowingCount, Y = m.personalFollowingCount, J = m.points, K = {
                              profileId: g,
                              userId: h,
                              onboarded: v,
                              hasOnboardingAnswers: b,
                              profileType: w,
                              socialLinks: k,
                              title: O,
                              subtitle: R,
                              description: M,
                              picture: _,
                              badges: C,
                              banner: y,
                              city: x,
                              abouts: P,
                              works: I,
                              educations: j,
                              projects: A,
                              products: S,
                              services: T,
                              galleries: F,
                              faqs: L,
                              meta: $,
                              recentPosts: B,
                              handle: U,
                              followed: D,
                              notifyMe: N,
                              postsCount: E,
                              commentsReceivedCount: q,
                              postsLikesReceivedCount: z,
                              commentsLikesReceivedCount: H,
                              followersCount: G,
                              businessFollowingCount: V,
                              personalFollowingCount: Y,
                              points: J
                           }, console.log(K), e.commit("setProfile", K), n.abrupt("return", K);
                        case 57:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [3, 10],
                     [34, 40]
                  ])
               })))()
            },
            followUser: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = e.rootGetters["auth/getUserAuthToken"], s = {
                              headers: {
                                 Authorization: "Bearer ".concat(r)
                              }
                           }, n.prev = 2, n.next = 5, u["a"].post("/users/follow", t, s);
                        case 5:
                           return n.abrupt("return", {
                              success: !0
                           });
                        case 8:
                           return n.prev = 8, n.t0 = n["catch"](2), n.abrupt("return", {
                              success: !1,
                              message: n.t0.response.data.message
                           });
                        case 11:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [2, 8]
                  ])
               })))()
            },
            fetchOnboardingAnswers: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i, a;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           if (r = e.rootGetters["auth/getUserAuthToken"], !r) {
                              n.next = 17;
                              break
                           }
                           return o = {
                              headers: {
                                 Authorization: "Bearer ".concat(r)
                              }
                           }, n.prev = 3, n.next = 6, u["a"].get("/profiles/onboarding-answers/" + t, o);
                        case 6:
                           return s = n.sent, console.log("🚀 ~ file: actions.js ~ line 16 ~ fetchOnboardingAnswers ~ with token", r), i = s.data, n.abrupt("return", i);
                        case 12:
                           return n.prev = 12, n.t0 = n["catch"](3), a = n.t0.response.status, console.log(a), n.abrupt("return");
                        case 17:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [3, 12]
                  ])
               })))()
            },
            addUserProfileCount: function (e) {
               e.commit("addProfileCount", "followers"), e.commit("updateFollowStatus", !0)
            },
            removeUserProfileCount: function (e) {
               e.commit("removeProfileCount", "followers"), e.commit("updateFollowStatus", !1)
            },
            unfollowUser: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = e.rootGetters["auth/getUserAuthToken"], s = {
                              headers: {
                                 Authorization: "Bearer ".concat(r)
                              }
                           }, n.prev = 2, n.next = 5, u["a"].delete("/users/follow/" + t.profileId, s);
                        case 5:
                           return o = n.sent, n.abrupt("return", o.data);
                        case 9:
                           return n.prev = 9, n.t0 = n["catch"](2), n.abrupt("return", {
                              response: n.t0,
                              succes: !1
                           });
                        case 12:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [2, 9]
                  ])
               })))()
            },
            getFollower: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function e() {
                  var n, r;
                  return regeneratorRuntime.wrap((function (e) {
                     while (1) switch (e.prev = e.next) {
                        case 0:
                           return e.prev = 0, e.next = 3, u["a"].get("/users/follow?page=" + t.page);
                        case 3:
                           return n = e.sent, r = n.data, e.abrupt("return", r);
                        case 8:
                           return e.prev = 8, e.t0 = e["catch"](0), e.abrupt("return", {
                              response: e.t0,
                              succes: !1
                           });
                        case 11:
                        case "end":
                           return e.stop()
                     }
                  }), e, null, [
                     [0, 8]
                  ])
               })))()
            },
            removeUser: function (e, t) {
               var n = t.id,
                  r = t.type,
                  s = e.rootGetters["auth/getUserAuthToken"],
                  o = {
                     headers: {
                        Authorization: "Bearer ".concat(s)
                     }
                  };
               ("suspend" === r || "deactivate" === r || "full" === r) && u["a"].post("url", o, n)
            },
            notificationSettingToggle: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function e() {
                  var n, r;
                  return regeneratorRuntime.wrap((function (e) {
                     while (1) switch (e.prev = e.next) {
                        case 0:
                           return e.prev = 0, e.next = 3, u["a"].put("/v2/user/notification-arrays", t);
                        case 3:
                           return n = e.sent, r = n.data, e.abrupt("return", r);
                        case 8:
                           e.prev = 8, e.t0 = e["catch"](0), console.log(e.t0);
                        case 11:
                        case "end":
                           return e.stop()
                     }
                  }), e, null, [
                     [0, 8]
                  ])
               })))()
            }
         },
         Y = {
            getProfile: function (e) {
               return e
            },
            getProfileType: function (e) {
               return e.profileType
            },
            getProfileName: function (e) {
               return e.name
            },
            getProfileId: function (e) {
               return e.profileId
            },
            getProfileOnboarded: function (e) {
               return e.onboarded
            },
            getProfileHasOnboardingAnswers: function (e) {
               return e.hasOnboardingAnswers
            },
            getProfileUserName: function (e) {
               return e.username
            },
            getProfileEmail: function (e) {
               return e.email
            },
            getProfileTitle: function (e) {
               return e.title
            },
            getProfileSubtitle: function (e) {
               return e.subtitle
            },
            getProfileLocation: function (e) {
               return e.location
            },
            getProfileCity: function (e) {
               return e.city
            },
            getProfileDescription: function (e) {
               return e.description
            },
            getProfileCounts: function (e) {
               return e.counts
            },
            getProfilePicture: function (e) {
               return e.picture
            },
            getFullProfilePicture: function (e) {
               return e.picture.url
            },
            getProfileBanner: function (e) {
               return e.banner
            },
            getProfilePictureUrl: function (e) {
               var t, n = e.picture;
               return n ? null !== (t = n.formats) && void 0 !== t && t.thumbnail ? n.formats.thumbnail.url : n.url : null
            },
            getProfileAbouts: function (e) {
               var t = Object(o["a"])(e.abouts);
               return t.sort((function (e, t) {
                  return e.order - t.order
               })), t
            },
            getProfileWorks: function (e) {
               var t = Object(o["a"])(e.works);
               return t.sort((function (e, t) {
                  return new Date(t.startDate) - new Date(e.startDate)
               })), t
            },
            getProfileEducations: function (e) {
               var t = Object(o["a"])(e.educations);
               return t.sort((function (e, t) {
                  return t.startYear - e.startYear
               })), t
            },
            getProfileProjects: function (e) {
               return e.projects
            },
            getProfileProducts: function (e) {
               return e.products
            },
            getProfileServices: function (e) {
               return e.services
            },
            getProfileRecentPosts: function (e) {
               return e.recentPosts
            },
            getProfileGalleries: function (e) {
               return e.galleries
            },
            getProfileFaqs: function (e) {
               return e.faqs
            },
            getProfileCertifications: function (e) {
               return e.certifications
            },
            getProfileCircles: function (e) {
               return e.circles
            },
            getProfileFetched: function (e) {
               return e.fetched
            },
            getProfileMeta: function (e) {
               return e.meta
            },
            getProfileHandle: function (e) {
               return e.handle
            }
         },
         J = {
            namespaced: !0,
            state: function () {
               return {
                  userId: null,
                  profileId: null,
                  fetched: !1,
                  onboarded: !1,
                  hasOnboardingAnswers: !1,
                  email: null,
                  profileType: null,
                  name: null,
                  username: null,
                  title: null,
                  subtitle: null,
                  location: null,
                  city: null,
                  description: null,
                  picture: null,
                  banner: null,
                  counts: {
                     posts: null,
                     followers: null,
                     followings: null,
                     commentsReceivedCount: null,
                     postsLikesReceivedCount: null,
                     commentsLikesReceivedCount: null
                  },
                  abouts: [],
                  works: [],
                  educations: [],
                  projects: [],
                  products: [],
                  services: [],
                  galleries: [],
                  certifications: [],
                  faqs: [],
                  circles: [],
                  socialLinks: null,
                  meta: {
                     expertise: null,
                     languages: null,
                     industries: null,
                     locations: null,
                     id: null
                  },
                  queryStatus: null,
                  recentPosts: [],
                  count: 0,
                  handle: null,
                  followed: !1,
                  notifyMe: null,
                  points: 0
               }
            },
            mutations: G,
            actions: V,
            getters: Y
         },
         K = {
            setPreview: function (e, t) {
               console.log("mutating state " + t), e.newNetworkPreview = Object(_["a"])(Object(_["a"])({}, e.newNetworkPreview), t)
            },
            setNetwork: function (e, t) {
               e.network = t
            },
            resetNetwork: function (e) {
               e.network = {}
            },
            resetNetworkState: function (e) {
               e.network = {}, e.posts = [], e.count = 0, e.allMembersPage = 1, e.allMembers = [], e.newMembers = [], e.admins = [], e.members = [], e.memberSearchResults = []
            },
            setNetworkMembers: function (e, t) {
               e.members = t
            },
            setNetworkMembersPaginated: function (e, t) {
               var n;
               e.members && e.members.length > 0 ? (n = e.members).push.apply(n, Object(o["a"])(t)) : e.members = t
            },
            setNetworkMembersSearch: function (e, t) {
               e.memberSearchResults = t
            },
            setNetworkMembersSearchPaginated: function (e, t) {
               var n;
               e.memberSearchResults && e.memberSearchResults.length > 0 ? (n = e.memberSearchResults).push.apply(n, Object(o["a"])(t)) : e.memberSearchResults = t
            },
            setNetworkAllMembersPaginated: function (e, t) {
               var n;
               (e.allMembersPage++, e.allMembers && e.allMembers.length > 0) ? (n = e.allMembers).push.apply(n, Object(o["a"])(t)): e.allMembers = t
            },
            resetNetworkMembers: function (e) {
               e.members = []
            },
            setNetworkAdmins: function (e, t) {
               e.admins = t
            },
            resetNetworkMembersSearchResults: function (e) {
               e.memberSearchResults = []
            },
            setNetworkJoined: function (e, t) {
               e.network.joined = t
            },
            updateNetworkNotification: function (e, t) {
               e.network.notifyMe = t.notifyMe
            },
            setAnnouncementsPosts: function (e, t) {
               e.announcementsPosts = t
            }
         },
         Q = {
            getNewNetworkPreview: function (e) {
               return console.log("getting " + e.newNetworkPreview), e.newNetworkPreview
            },
            getNetwork: function (e) {
               return e.network
            },
            getPosts: function (e) {
               return e.posts
            },
            getMembers: function (e) {
               return e.members
            },
            getAdmins: function (e) {
               return e.admins
            },
            getAllMembers: function (e) {
               return e.allMembers
            },
            getNewMembers: function (e) {
               return e.newMembers
            },
            geMembersSearchResults: function (e) {
               return e.memberSearchResults
            },
            getAnnouncementsPosts: function (e) {
               return e.announcementsPosts
            }
         },
         Z = {
            preview: function (e, t) {
               console.log("In action " + t), e.commit("setPreview", t)
            },
            getNetworkBySlug: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           if (r = t.communitySlug, s = t.networkSlug, n.prev = 1, !r) {
                              n.next = 8;
                              break
                           }
                           return n.next = 5, u["a"].get("networks/".concat(r, "/").concat(s));
                        case 5:
                           o = n.sent, n.next = 11;
                           break;
                        case 8:
                           return n.next = 10, u["a"].get("/hubs/".concat(s));
                        case 10:
                           o = n.sent;
                        case 11:
                           return e.commit("setNetwork", o.data), n.abrupt("return", o.data);
                        case 15:
                           return n.prev = 15, n.t0 = n["catch"](1), console.log(n.t0.response), n.abrupt("return", {
                              response: n.t0,
                              success: !1
                           });
                        case 19:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [1, 15]
                  ])
               })))()
            },
            getNetworkMembers: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = t.networkSlug, n.prev = 1, s = {
                              params: {
                                 limit: 10,
                                 page: 1
                              }
                           }, n.next = 5, u["a"].get("/hubs/".concat(r, "/members"), s);
                        case 5:
                           o = n.sent, e.commit("setNetworkMembers", o.data), n.next = 13;
                           break;
                        case 9:
                           return n.prev = 9, n.t0 = n["catch"](1), console.log(n.t0.response), n.abrupt("return", {
                              response: n.t0,
                              success: !1
                           });
                        case 13:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [1, 9]
                  ])
               })))()
            },
            getNetworkMembersPaginated: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i, a;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = t.page, s = t.networkSlug, o = t.text, i = {
                              params: {
                                 limit: 10,
                                 page: r,
                                 text: o
                              }
                           }, n.prev = 2, n.next = 5, u["a"].get("/hubs/".concat(s, "/members"), i);
                        case 5:
                           return a = n.sent, e.commit("setNetworkAllMembersPaginated", a.data), n.abrupt("return", a.data);
                        case 10:
                           return n.prev = 10, n.t0 = n["catch"](2), console.log(n.t0.response), n.abrupt("return", {
                              response: n.t0,
                              success: !1
                           });
                        case 14:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [2, 10]
                  ])
               })))()
            },
            getNetworkAdmins: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = t, n.prev = 1, n.next = 4, u["a"].get("/networks/".concat(r, "/admins"));
                        case 4:
                           s = n.sent, console.log(s.data), e.commit("setNetworkAdmins", s.data), n.next = 13;
                           break;
                        case 9:
                           return n.prev = 9, n.t0 = n["catch"](1), console.log(n.t0.response), n.abrupt("return", {
                              response: n.t0,
                              success: !1
                           });
                        case 13:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [1, 9]
                  ])
               })))()
            },
            searchNetworkMembers: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = t.networkId, s = t.text, n.prev = 1, o = {
                              params: {
                                 limit: 10,
                                 page: 1,
                                 text: s
                              }
                           }, n.next = 5, u["a"].get("/networks/".concat(r, "/members/search"), o);
                        case 5:
                           return i = n.sent, console.log(i.data), e.commit("setNetworkMembersSearch", i.data), n.abrupt("return", i.data);
                        case 11:
                           return n.prev = 11, n.t0 = n["catch"](1), console.log(n.t0.response), n.abrupt("return", {
                              response: n.t0,
                              success: !1
                           });
                        case 15:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [1, 11]
                  ])
               })))()
            },
            updateNetwork: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = t.networkId, console.log("IN ACTION"), console.log(t), n.prev = 3, s = Object(_["a"])({}, t), n.next = 7, u["a"].put("/hubs/".concat(r), s);
                        case 7:
                           return o = n.sent, console.log("TRYIN"), console.log(o.data), e.commit("setNetwork", o.data), n.abrupt("return", o.data);
                        case 14:
                           return n.prev = 14, n.t0 = n["catch"](3), console.log("IN THE CATCH"), console.log(n.t0.response), n.abrupt("return", {
                              response: n.t0,
                              success: !1
                           });
                        case 19:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [3, 14]
                  ])
               })))()
            },
            getAnnouncements: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = t.networkId, n.prev = 1, n.next = 4, u["a"].get("/posts/announcements/?networkId=".concat(r, "&kind=networkAnnouncement"));
                        case 4:
                           return s = n.sent, e.commit("setAnnouncementsPosts", s.data), n.abrupt("return", s.data);
                        case 9:
                           return n.prev = 9, n.t0 = n["catch"](1), console.log(n.t0.response), n.abrupt("return", {
                              response: n.t0,
                              success: !1
                           });
                        case 13:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [1, 9]
                  ])
               })))()
            },
            addAdmin: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function e() {
                  var n, r;
                  return regeneratorRuntime.wrap((function (e) {
                     while (1) switch (e.prev = e.next) {
                        case 0:
                           return n = Object(_["a"])({}, t), e.prev = 1, e.next = 4, u["a"].post("/networks/admins", n);
                        case 4:
                           return r = e.sent, e.abrupt("return", r.data);
                        case 8:
                           return e.prev = 8, e.t0 = e["catch"](1), console.log(e.t0.response), e.abrupt("return", {
                              response: e.t0,
                              success: !1
                           });
                        case 12:
                        case "end":
                           return e.stop()
                     }
                  }), e, null, [
                     [1, 8]
                  ])
               })))()
            },
            removeAdmin: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function e() {
                  var n, r;
                  return regeneratorRuntime.wrap((function (e) {
                     while (1) switch (e.prev = e.next) {
                        case 0:
                           return n = Object(_["a"])({}, t), e.prev = 1, e.next = 4, u["a"].post("/networks/admins/delete", n);
                        case 4:
                           return r = e.sent, e.abrupt("return", r.data);
                        case 8:
                           return e.prev = 8, e.t0 = e["catch"](1), console.log(e.t0.response), e.abrupt("return", {
                              response: e.t0,
                              success: !1
                           });
                        case 12:
                        case "end":
                           return e.stop()
                     }
                  }), e, null, [
                     [1, 8]
                  ])
               })))()
            },
            assignAsPublisher: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function e() {
                  var n;
                  return regeneratorRuntime.wrap((function (e) {
                     while (1) switch (e.prev = e.next) {
                        case 0:
                           return n = Object(_["a"])({}, t), e.next = 3, u["a"].post("/networks/change-publisher", n);
                        case 3:
                        case "end":
                           return e.stop()
                     }
                  }), e)
               })))()
            },
            removeMember: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function e() {
                  var n, r;
                  return regeneratorRuntime.wrap((function (e) {
                     while (1) switch (e.prev = e.next) {
                        case 0:
                           return n = Object(_["a"])({}, t), e.prev = 1, e.next = 4, u["a"].post("/networks/users/block", n);
                        case 4:
                           return r = e.sent, e.abrupt("return", r.data);
                        case 8:
                           return e.prev = 8, e.t0 = e["catch"](1), console.log(e.t0.response), e.abrupt("return", {
                              response: e.t0,
                              success: !1
                           });
                        case 12:
                        case "end":
                           return e.stop()
                     }
                  }), e, null, [
                     [1, 8]
                  ])
               })))()
            },
            pinNetwork: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function e() {
                  var n;
                  return regeneratorRuntime.wrap((function (e) {
                     while (1) switch (e.prev = e.next) {
                        case 0:
                           return n = Object(_["a"])({}, t), e.next = 3, u["a"].post("/profiles/network/pin", n);
                        case 3:
                        case "end":
                           return e.stop()
                     }
                  }), e)
               })))()
            },
            unpinNetwork: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function e() {
                  var n;
                  return regeneratorRuntime.wrap((function (e) {
                     while (1) switch (e.prev = e.next) {
                        case 0:
                           return n = Object(_["a"])({}, t), e.next = 3, u["a"].post("/profiles/network/unpin", n);
                        case 3:
                        case "end":
                           return e.stop()
                     }
                  }), e)
               })))()
            },
            getJoinToken: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function e() {
                  var n, r;
                  return regeneratorRuntime.wrap((function (e) {
                     while (1) switch (e.prev = e.next) {
                        case 0:
                           return n = t.networkId, e.prev = 1, e.next = 4, u["a"].get("/network-invites/".concat(n, "/link"));
                        case 4:
                           return r = e.sent, e.abrupt("return", r.data);
                        case 8:
                           return e.prev = 8, e.t0 = e["catch"](1), console.log(e.t0.response), e.abrupt("return", {
                              response: e.t0,
                              success: !1
                           });
                        case 12:
                        case "end":
                           return e.stop()
                     }
                  }), e, null, [
                     [1, 8]
                  ])
               })))()
            }
         },
         X = {
            namespaced: !0,
            state: function () {
               return {
                  network: {},
                  posts: [],
                  count: 0,
                  allMembersPage: 1,
                  allMembers: [],
                  newMembers: [],
                  admins: [],
                  members: [],
                  announcementsPosts: [],
                  memberSearchResults: [],
                  newNetworkPreview: {
                     name: "",
                     public: !0,
                     chat: null,
                     post: null,
                     category: null,
                     join: null,
                     joinDisabled: null,
                     adminInviteOnly: null,
                     description: "",
                     banner: null
                  }
               }
            },
            mutations: K,
            getters: Q,
            actions: Z
         },
         ee = {
            updateBlocks: function (e, t) {
               null === e.blocks && (e.blocks = []), e.blocks = t
            },
            unblockUser: function (e, t) {
               var n = e.blocks.findIndex((function (e) {
                  return e.id === t
               }));
               e.blocks.splice(n, 1)
            },
            blockUser: function (e, t) {
               e.blocks.unshift(t)
            },
            resetBlocks: function (e) {
               e.blocks = []
            },
            updateSettings: function (e, t) {
               e.settings = t
            },
            updateGlobalSettings: function (e, t) {
               e.globalSettings = t
            },
            addScheduledPost: function (e, t) {
               e.userPostsByScheduled = [].concat(Object(o["a"])(e.userPostsByScheduled), [t])
            },
            setScheduledPost: function (e, t) {
               t.length && (e.userPostsByScheduled = t)
            },
            addDraftPost: function (e, t) {
               e.userPostsByDraft = [].concat(Object(o["a"])(e.userPostsByDraft), Object(o["a"])(t)).sort((function (e, t) {
                  return s["default"].$moment(t.updatedAt) - s["default"].$moment(e.updatedAt)
               }))
            },
            updateScheduledPost: function (e, t) {
               var n = e.userPostsByScheduled.findIndex((function (e) {
                  return e.id === t.id
               }));
               e.userPostsByScheduled[n] = t
            },
            updateDraftPost: function (e, t) {
               var n = e.userPostsByDraft.findIndex((function (e) {
                  return e.id === t.id
               }));
               e.userPostsByDraft[n] = t
            },
            removeSchedulePost: function (e, t) {
               var n = e.userPostsByScheduled.findIndex((function (e) {
                  return e.id === t.postId
               }));
               e.userPostsByScheduled.splice(n, 1)
            },
            removeDraftPost: function (e, t) {
               var n = e.userPostsByDraft.findIndex((function (e) {
                  return e.id === t.postId
               }));
               e.userPostsByDraft.splice(n, 1)
            },
            resetPosts: function (e) {
               e.userPostsByDraft = [], e.userPostsByScheduled = []
            }
         },
         te = {
            getBlockedList: function (e) {
               return e.blocks
            },
            getSettings: function (e) {
               return e.settings
            },
            getGlobalSettings: function (e) {
               return e.globalSettings
            },
            getDraftPosts: function (e) {
               return e.userPostsByDraft
            },
            getSchedulePosts: function (e) {
               return e.userPostsByScheduled
            }
         },
         ne = {
            fetchBlocks: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = e.rootGetters["auth/getUserAuthToken"], s = {
                              headers: {
                                 Authorization: "Bearer ".concat(r)
                              }
                           }, n.next = 4, u["a"].get("/users/blocks?page=" + t.page, s);
                        case 4:
                           o = n.sent, i = o.data, console.log(i), e.commit("updateBlocks", i);
                        case 8:
                        case "end":
                           return n.stop()
                     }
                  }), n)
               })))()
            },
            blockUser: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i, a;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = e.rootGetters["auth/getUserAuthToken"], s = {
                              headers: {
                                 Authorization: "Bearer ".concat(r)
                              }
                           }, o = {
                              profileId: t
                           }, n.next = 5, u["a"].post("/users/block-profile", o, s);
                        case 5:
                           i = n.sent, a = i.data, a && (e.commit("blockUser", a), e.commit("feeds/removePostsByBlockedUser", {
                              id: t
                           }, {
                              root: !0
                           }));
                        case 8:
                        case "end":
                           return n.stop()
                     }
                  }), n)
               })))()
            },
            unblockUser: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = e.rootGetters["auth/getUserAuthToken"], s = {
                              headers: {
                                 Authorization: "Bearer ".concat(r)
                              }
                           }, n.prev = 2, n.next = 5, u["a"].delete("users/blocks/" + t, s);
                        case 5:
                           return o = n.sent, i = o.data, console.log(i), n.abrupt("return", !(!i || !i.success));
                        case 11:
                           return n.prev = 11, n.t0 = n["catch"](2), n.abrupt("return", {
                              response: n.t0,
                              succes: !1
                           });
                        case 14:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [2, 11]
                  ])
               })))()
            },
            fetchNotificationSettings: function (e) {
               return Object(c["a"])(regeneratorRuntime.mark((function t() {
                  var n, r, s;
                  return regeneratorRuntime.wrap((function (t) {
                     while (1) switch (t.prev = t.next) {
                        case 0:
                           return n = e.rootGetters["auth/getUserAuthToken"], r = {
                              headers: {
                                 Authorization: "Bearer ".concat(n)
                              }
                           }, t.next = 4, u["a"].get("/user/notification-settings", r);
                        case 4:
                           s = t.sent, e.commit("updateSettings", s.data);
                        case 6:
                        case "end":
                           return t.stop()
                     }
                  }), t)
               })))()
            },
            fetchGlobalSettings: function (e) {
               return Object(c["a"])(regeneratorRuntime.mark((function t() {
                  var n, r, s;
                  return regeneratorRuntime.wrap((function (t) {
                     while (1) switch (t.prev = t.next) {
                        case 0:
                           return n = e.rootGetters["auth/getUserAuthToken"], r = {
                              headers: {
                                 Authorization: "Bearer ".concat(n)
                              }
                           }, t.next = 4, u["a"].get("/user/global-notifications-settings", r);
                        case 4:
                           s = t.sent, e.commit("updateGlobalSettings", s.data);
                        case 6:
                        case "end":
                           return t.stop()
                     }
                  }), t)
               })))()
            },
            updateNotificationSettings: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = e.rootGetters["auth/getUserAuthToken"], s = {
                              headers: {
                                 Authorization: "Bearer ".concat(r)
                              }
                           }, n.prev = 2, n.next = 5, u["a"].put("/v2/user/notification-settings", t, s);
                        case 5:
                           return o = n.sent, e.commit("updateSettings", o.data), n.abrupt("return", {
                              response: o,
                              success: !0
                           });
                        case 10:
                           return n.prev = 10, n.t0 = n["catch"](2), n.abrupt("return", {
                              response: n.t0,
                              succes: !1
                           });
                        case 13:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [2, 10]
                  ])
               })))()
            },
            updateGlobalNotificationSettings: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = e.rootGetters["auth/getUserAuthToken"], s = {
                              headers: {
                                 Authorization: "Bearer ".concat(r)
                              }
                           }, n.prev = 2, n.next = 5, u["a"].put("/v2/user/notification-global-settings", t, s);
                        case 5:
                           return o = n.sent, e.commit("updateSettings", o.data), n.abrupt("return", {
                              response: o,
                              success: !0
                           });
                        case 10:
                           return n.prev = 10, n.t0 = n["catch"](2), n.abrupt("return", {
                              response: n.t0,
                              succes: !1
                           });
                        case 13:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [2, 10]
                  ])
               })))()
            },
            fetchScheduledPosts: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = t.page ? t.page : 1, n.next = 3, u["a"].get("/posts/scheduled/my?page=".concat(r, "&limit=20}"));
                        case 3:
                           return s = n.sent, o = s.data, e.commit("setScheduledPost", o), n.abrupt("return", o);
                        case 7:
                        case "end":
                           return n.stop()
                     }
                  }), n)
               })))()
            },
            fetchPostByStatus: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = t.status, s = t.page ? t.page : 1, n.next = 4, u["a"].get("/posts/my?page=".concat(s, "&limit=20&status=").concat(r));
                        case 4:
                           return o = n.sent, i = o.data, "scheduled" == r && e.commit("setScheduledPost", i), "draft" == r && e.commit("addDraftPost", i), n.abrupt("return", i);
                        case 9:
                        case "end":
                           return n.stop()
                     }
                  }), n)
               })))()
            },
            deletePost: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = t.id, n.prev = 1, n.next = 4, u["a"].delete("/posts/".concat(r));
                        case 4:
                           s = n.sent, e.commit("gamification/setPointValue", {
                              value: s.data
                           }, {
                              root: !0
                           }), e.commit("profile/setScore", {
                              value: s.data
                           }, {
                              root: !0
                           }), n.next = 12;
                           break;
                        case 9:
                           return n.prev = 9, n.t0 = n["catch"](1), n.abrupt("return", {
                              response: n.t0,
                              message: "Delete failed, please try again later.",
                              succes: !1
                           });
                        case 12:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [1, 9]
                  ])
               })))()
            }
         },
         re = {
            namespaced: !0,
            state: function () {
               return {
                  blocks: [],
                  settings: null,
                  globalSettings: {},
                  userPostsByDraft: [],
                  userPostsByScheduled: []
               }
            },
            mutations: ee,
            actions: ne,
            getters: te
         },
         se = {
            getNotifications: function (e) {
               return e.notifications
            },
            getPage: function (e) {
               return e.page
            },
            getFilters: function (e) {
               return e.filters
            },
            getFilterId: function (e) {
               return e.filters.join()
            },
            getActiveFilters: function (e) {
               return e.activeFilters
            },
            onlyUnread: function (e) {
               return e.unread
            },
            getNewNotificationCount: function (e) {
               return e.newNotificationCount
            },
            getNewMessageCount: function (e) {
               return e.newMessageCount
            },
            hasNewPosts: function (e) {
               return e.newPosts
            },
            getNewNotificationsTimeout: function (e) {
               return e.newNotificationsTimeout
            }
         },
         oe = {
            getNotificationsCount: function (e) {
               return Object(c["a"])(regeneratorRuntime.mark((function t() {
                  var n, r;
                  return regeneratorRuntime.wrap((function (t) {
                     while (1) switch (t.prev = t.next) {
                        case 0:
                           return n = "/notifications/new-count", t.prev = 1, t.next = 4, u["a"].get(n);
                        case 4:
                           r = t.sent, e.commit("updateNotificationCount", r.data), t.next = 11;
                           break;
                        case 8:
                           t.prev = 8, t.t0 = t["catch"](1), console.error(t.t0);
                        case 11:
                        case "end":
                           return t.stop()
                     }
                  }), t, null, [
                     [1, 8]
                  ])
               })))()
            },
            fetchNotifications: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i, a, c, l, d;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = e.rootGetters["auth/getUserAuthToken"], s = {
                              headers: {
                                 Authorization: "Bearer ".concat(r)
                              }
                           }, console.log("🥁Fetching notifications page number ".concat(t)), o = e.getters["getActiveFilters"], i = e.getters["onlyUnread"], a = "/notifications?page=".concat(t, "&clearCount=true"), o && (c = o.map((function (e) {
                              return e.type
                           })), a += "&type=".concat(c)), i && (a += "&status=new"), n.next = 10, u["a"].get(a, s);
                        case 10:
                           return l = n.sent, d = l.data, e.commit("updateNotificationCount", 0), e.commit("updateNotifications", d), n.abrupt("return", d);
                        case 15:
                        case "end":
                           return n.stop()
                     }
                  }), n)
               })))()
            },
            changeReadStatus: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = e.rootGetters["auth/getUserAuthToken"], s = {
                              headers: {
                                 Authorization: "Bearer ".concat(r)
                              }
                           }, o = {
                              ids: [t.id],
                              status: t.status
                           }, n.prev = 3, n.next = 6, u["a"].post("/notifications/status", o, s);
                        case 6:
                           i = n.sent, e.commit("changeReadStatus", {
                              id: t.id,
                              status: t.status
                           }), console.log(i), n.next = 15;
                           break;
                        case 11:
                           return n.prev = 11, n.t0 = n["catch"](3), console.log(n.t0), n.abrupt("return", {
                              response: n.t0,
                              succes: !1
                           });
                        case 15:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [3, 11]
                  ])
               })))()
            },
            changeAllStatus: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = e.rootGetters["auth/getUserAuthToken"], s = {
                              headers: {
                                 Authorization: "Bearer ".concat(r)
                              }
                           }, o = {
                              status: t.status
                           }, n.prev = 3, n.next = 6, u["a"].put("/notifications/status/all", o, s);
                        case 6:
                           n.next = 12;
                           break;
                        case 8:
                           return n.prev = 8, n.t0 = n["catch"](3), console.log(n.t0), n.abrupt("return", {
                              response: n.t0,
                              succes: !1
                           });
                        case 12:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [3, 8]
                  ])
               })))()
            },
            deleteNotification: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = e.rootGetters["auth/getUserAuthToken"], s = {
                              headers: {
                                 Authorization: "Bearer ".concat(r)
                              }
                           }, n.prev = 2, n.next = 5, u["a"].delete("/notifications/".concat(t.id), s);
                        case 5:
                           e.commit("deleteNotification", t), n.next = 12;
                           break;
                        case 8:
                           return n.prev = 8, n.t0 = n["catch"](2), console.log(n.t0), n.abrupt("return", {
                              response: n.t0,
                              succes: !1
                           });
                        case 12:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [2, 8]
                  ])
               })))()
            }
         },
         ie = {
            updateNotifications: function (e, t) {
               var n;
               null == e.notifications && (e.notifications = []), (n = e.notifications).push.apply(n, Object(o["a"])(t))
            },
            loadNewNotifications: function (e, t) {
               var n;
               null == e.notifications && (e.notifications = []), (n = e.notifications).unshift.apply(n, Object(o["a"])(t))
            },
            updatePage: function (e, t) {
               t.increment < 1 ? e.page = 1 : e.page += t.increment
            },
            resetNotifications: function (e) {
               e.notifications = [], e.page = 1
            },
            updateFilters: function (e, t) {
               e.filters = t
            },
            updateActiveFilters: function (e, t) {
               e.activeFilters = t
            },
            removeActiveFilters: function (e, t) {
               var n = e.activeFilters.findIndex((function (e) {
                  return e.title == t.title
               }));
               e.activeFilters.splice(n, 1)
            },
            updateOnlyUnread: function (e, t) {
               e.unread = t.active
            },
            changeReadStatus: function (e, t) {
               var n = t.id,
                  r = e.notifications.findIndex((function (e) {
                     return n === e._id
                  })),
                  o = e.notifications[r];
               o.read = "read" === t.status, console.log(o), s["default"].set(e.notifications, r, o)
            },
            deleteNotification: function (e, t) {
               var n = t.id,
                  r = e.notifications.findIndex((function (e) {
                     return n === e._id
                  }));
               e.notifications.splice(r, 1)
            },
            updateNotificationCount: function (e, t) {
               e.newNotificationCount = t.count
            },
            setNewNotificationsTimeout: function (e, t) {
               console.log(t), e.newNotificationsTimeout = t
            }
         },
         ae = {
            namespaced: !0,
            state: function () {
               return {
                  notifications: [],
                  page: 1,
                  unread: !1,
                  filters: [],
                  activeFilters: [],
                  newNotificationCount: 0,
                  newMessageCount: 0,
                  newPosts: !1,
                  newNotificationsTimeout: null
               }
            },
            getters: se,
            actions: oe,
            mutations: ie
         },
         ce = {
            setSuspendedUsers: function (e, t) {
               e.suspendedUsers = t
            },
            setDeactivatedUsers: function (e, t) {
               e.deactivatedUsers = t
            }
         },
         ue = {
            deactivateUser: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           if ("Super Admin" === t.role || "Moderator" === t.role) {
                              n.next = 2;
                              break
                           }
                           return n.abrupt("return", {
                              success: !1
                           });
                        case 2:
                           return r = e.rootGetters["auth/getUserAuthToken"], s = {
                              headers: {
                                 Authorization: "Bearer ".concat(r)
                              }
                           }, n.prev = 4, o = "Super Admin" === t.role ? "/admin/user/".concat(t.id, "/deactivate") : "/moderator/user/".concat(t.id, "/deactivate"), n.next = 8, u["a"].put(o, s);
                        case 8:
                           return n.abrupt("return", {
                              success: !0
                           });
                        case 11:
                           return n.prev = 11, n.t0 = n["catch"](4), n.abrupt("return", {
                              response: n.t0,
                              succes: !1
                           });
                        case 14:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [4, 11]
                  ])
               })))()
            },
            deleteUser: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           if ("Super Admin" === t.role) {
                              n.next = 2;
                              break
                           }
                           return n.abrupt("return", {
                              success: !1
                           });
                        case 2:
                           return r = e.rootGetters["auth/getUserAuthToken"], s = {
                              headers: {
                                 Authorization: "Bearer ".concat(r)
                              }
                           }, n.prev = 4, n.next = 7, u["a"].delete("/admin/user/".concat(t.id), s);
                        case 7:
                           return n.abrupt("return", {
                              success: !0
                           });
                        case 10:
                           return n.prev = 10, n.t0 = n["catch"](4), n.abrupt("return", {
                              response: n.t0,
                              succes: !1
                           });
                        case 13:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [4, 10]
                  ])
               })))()
            },
            suspendUser: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           if (console.log("Admin/action line 44"), console.log(t), "Super Admin" === t.role || "Suspend Moderator" === t.role) {
                              n.next = 5;
                              break
                           }
                           return console.log("not super admin"), n.abrupt("return", {
                              success: !1
                           });
                        case 5:
                           return r = e.rootGetters["auth/getUserAuthToken"], s = {
                              headers: {
                                 Authorization: "Bearer ".concat(r)
                              }
                           }, n.prev = 7, o = "Super Admin" === t.role ? "/admin/user/".concat(t.id, "/suspend") : "/moderator/user/".concat(t.id, "/suspend"), n.next = 11, u["a"].put(o, s);
                        case 11:
                           return n.abrupt("return", {
                              success: !0
                           });
                        case 14:
                           return n.prev = 14, n.t0 = n["catch"](7), n.abrupt("return", {
                              response: n.t0,
                              succes: !1
                           });
                        case 17:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [7, 14]
                  ])
               })))()
            },
            activateUser: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           if ("Super Admin" === t.role || "Suspend Moderator" === t.role) {
                              n.next = 2;
                              break
                           }
                           return n.abrupt("return");
                        case 2:
                           return r = e.rootGetters["auth/getUserAuthToken"], s = {
                              headers: {
                                 Authorization: "Bearer ".concat(r)
                              }
                           }, n.prev = 4, o = "Super Admin" === t.role ? "/admin/user/".concat(t.id, "/activate") : "/moderator/user/".concat(t.id, "/activate"), n.next = 8, u["a"].put(o, s);
                        case 8:
                           i = n.sent, console.log(i), n.next = 15;
                           break;
                        case 12:
                           return n.prev = 12, n.t0 = n["catch"](4), n.abrupt("return", {
                              response: n.t0,
                              succes: !1
                           });
                        case 15:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [4, 12]
                  ])
               })))()
            },
            unsuspendUser: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           if ("Super Admin" === t.role || "Suspend Moderator" === t.role) {
                              n.next = 2;
                              break
                           }
                           return n.abrupt("return");
                        case 2:
                           return r = e.rootGetters["auth/getUserAuthToken"], s = {
                              headers: {
                                 Authorization: "Bearer ".concat(r)
                              }
                           }, n.prev = 4, o = "Super Admin" === t.role ? "/admin/user/".concat(t.id, "/unsuspend") : "/moderator/user/".concat(t.id, "/unsuspend"), n.next = 8, u["a"].put(o, s);
                        case 8:
                           i = n.sent, console.log(i), n.next = 15;
                           break;
                        case 12:
                           return n.prev = 12, n.t0 = n["catch"](4), n.abrupt("return", {
                              response: n.t0,
                              succes: !1
                           });
                        case 15:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [4, 12]
                  ])
               })))()
            },
            fetchSuspendedUsers: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           if ("Super Admin" === t.role || "Suspend Moderator" === t.role) {
                              n.next = 2;
                              break
                           }
                           return n.abrupt("return");
                        case 2:
                           return r = e.rootGetters["auth/getUserAuthToken"], s = {
                              headers: {
                                 Authorization: "Bearer ".concat(r)
                              }
                           }, n.prev = 4, n.next = 7, u["a"].get("/admin/suspended", s);
                        case 7:
                           o = n.sent, e.commit("setSuspendedUsers", o.data), n.next = 14;
                           break;
                        case 11:
                           return n.prev = 11, n.t0 = n["catch"](4), n.abrupt("return", {
                              response: n.t0,
                              succes: !1
                           });
                        case 14:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [4, 11]
                  ])
               })))()
            },
            fetchDeactivatedUsers: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           if ("Super Admin" === t.role || "Suspend Moderator" === t.role) {
                              n.next = 2;
                              break
                           }
                           return n.abrupt("return");
                        case 2:
                           return r = e.rootGetters["auth/getUserAuthToken"], s = {
                              headers: {
                                 Authorization: "Bearer ".concat(r)
                              }
                           }, n.prev = 4, n.next = 7, u["a"].get("/admin/deactivated", s);
                        case 7:
                           o = n.sent, e.commit("setDeactivatedUsers", o.data), n.next = 14;
                           break;
                        case 11:
                           return n.prev = 11, n.t0 = n["catch"](4), n.abrupt("return", {
                              response: n.t0,
                              succes: !1
                           });
                        case 14:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [4, 11]
                  ])
               })))()
            },
            changePinnedStatus: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = e.rootGetters["auth/getUserAuthToken"], s = {
                              headers: {
                                 Authorization: "Bearer ".concat(r)
                              }
                           }, o = {
                              isPinned: t.isPinned
                           }, n.prev = 3, i = "Super Admin" !== t.role ? "/posts/".concat(t.postId) : "/admin/posts/".concat(t.postId), n.next = 7, u["a"].put(i, o, s);
                        case 7:
                           return n.abrupt("return", {
                              success: !0
                           });
                        case 10:
                           return n.prev = 10, n.t0 = n["catch"](3), n.abrupt("return", {
                              response: n.t0,
                              succes: !1
                           });
                        case 13:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [3, 10]
                  ])
               })))()
            }
         },
         le = {
            getSuspendedUsers: function (e) {
               return e.suspendedUsers
            },
            getDeactivatedUsers: function (e) {
               return e.deactivatedUsers
            }
         },
         de = {
            namespaced: !0,
            state: function () {
               return {
                  deactivatedUsers: [],
                  suspendedUsers: []
               }
            },
            mutations: ce,
            actions: ue,
            getters: le
         },
         pe = {
            setPendingInvites: function (e, t) {
               console.log("🚀 ~ file: mutations.js ~ line 3 ~ setPendingInvites ~ payload", t), e.pendingInvites = Object(o["a"])(t)
            },
            setJoinedInvites: function (e, t) {
               e.joinedInvites = Object(o["a"])(t)
            },
            addNewInvites: function (e, t) {
               var n = t.inviteSuccess,
                  r = n.map((function (e) {
                     return {
                        data: e
                     }
                  }));
               e.pendingInvites = [].concat(Object(o["a"])(e.pendingInvites), Object(o["a"])(r))
            }
         },
         fe = {
            getPendingInvites: function (e) {
               return e.pendingInvites
            },
            getJoinedInvites: function (e) {
               return e.joinedInvites
            }
         },
         me = {
            fetchPendingInvites: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = e.rootGetters["auth/getUserAuthToken"], s = t.page, o = {
                              headers: {
                                 Authorization: "Bearer ".concat(r)
                              },
                              params: {
                                 limit: 20,
                                 page: s
                              }
                           }, n.prev = 3, n.next = 6, u["a"].get("/invites/pending", o);
                        case 6:
                           return i = n.sent, n.abrupt("return", i.data);
                        case 10:
                           n.prev = 10, n.t0 = n["catch"](3), console.log(null === n.t0 || void 0 === n.t0 ? void 0 : n.t0.response);
                        case 13:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [3, 10]
                  ])
               })))()
            },
            fetchJoinedInvites: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i, a, c;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = e.rootGetters["auth/getUserAuthToken"], s = t.page, o = t.welcome, i = t.limit, a = {
                              headers: {
                                 Authorization: "Bearer ".concat(r)
                              },
                              params: {
                                 limit: i,
                                 page: s,
                                 welcome: o
                              }
                           }, n.prev = 3, n.next = 6, u["a"].get("/conversions/my", a);
                        case 6:
                           return c = n.sent, n.abrupt("return", c.data);
                        case 10:
                           n.prev = 10, n.t0 = n["catch"](3), console.log(null === n.t0 || void 0 === n.t0 ? void 0 : n.t0.response);
                        case 13:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [3, 10]
                  ])
               })))()
            },
            sendNewInvites: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i, a, c, l;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = e.rootGetters["auth/getUserAuthToken"], s = t.emails, o = t.message, i = t.phones, a = {
                              headers: {
                                 Authorization: "Bearer ".concat(r)
                              }
                           }, c = {
                              emails: s,
                              phones: i,
                              text: o
                           }, n.prev = 4, n.next = 7, u["a"].post("/invites", c, a);
                        case 7:
                           return l = n.sent, e.commit("addNewInvites", l.data), e.commit("gamification/setPointValue", {
                              value: l.data
                           }, {
                              root: !0
                           }), e.commit("profile/setScore", {
                              value: l.data
                           }, {
                              root: !0
                           }), e.commit("profile/setInvitesSent", {
                              value: l.data
                           }, {
                              root: !0
                           }), n.abrupt("return", l.data);
                        case 15:
                           return n.prev = 15, n.t0 = n["catch"](4), console.log(n.t0.response), n.abrupt("return", {
                              response: n.t0,
                              message: "An error has occured please try again later.",
                              success: !1
                           });
                        case 19:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [4, 15]
                  ])
               })))()
            }
         },
         ge = {
            namespaced: !0,
            state: function () {
               return {
                  pendingInvites: [],
                  joinedInvites: []
               }
            },
            mutations: pe,
            getters: fe,
            actions: me
         },
         he = n("b85c"),
         ve = {
            resetChat: function (e) {
               e.conversationsPage = 1, e.conversationSearchText = "", e.conversations = [], e.floatingConversations = [], e.unreadCount = 0, e.requestsCount = 0, e.mainConversation = {}, e.mainConversationMessages = [], e.usersOnlineStatus = {}
            },
            incrementConversationsPage: function (e) {
               e.conversationsPage++
            },
            appendConversations: function (e, t) {
               var n, r = Object(he["a"])(t);
               try {
                  var s = function () {
                     var t = n.value,
                        r = e.conversations.findIndex((function (e) {
                           return e._id == t._id
                        })); - 1 === r && e.conversations.push(t)
                  };
                  for (r.s(); !(n = r.n()).done;) s()
               } catch (o) {
                  r.e(o)
               } finally {
                  r.f()
               }
            },
            setUsersOnlineStatus: function (e) {
               var t, n = Object(he["a"])(e.conversations);
               try {
                  for (n.s(); !(t = n.n()).done;) {
                     var r = t.value;
                     "personal" === r.type && (e.usersOnlineStatus[r.user.id] = r.user.status)
                  }
               } catch (s) {
                  n.e(s)
               } finally {
                  n.f()
               }
            },
            SOCKET_userOnline: function (e, t) {
               e.usersOnlineStatus = Object(_["a"])(Object(_["a"])({}, e.usersOnlineStatus), {}, Object(a["a"])({}, t.profileId, !0))
            },
            SOCKET_userOffline: function (e, t) {
               e.usersOnlineStatus = Object(_["a"])(Object(_["a"])({}, e.usersOnlineStatus), {}, Object(a["a"])({}, t.profileId, !1))
            },
            resetConversations: function (e) {
               e.conversationsPage = 1, e.conversations = []
            },
            removeConversations: function (e, t) {
               var n, r = Object(he["a"])(t);
               try {
                  var s = function () {
                     var t = n.value,
                        r = e.conversations.findIndex((function (e) {
                           return e._id == t
                        })); - 1 !== r && e.conversations.splice(r, 1);
                     var s = e.floatingConversations.findIndex((function (e) {
                        return e._id == t
                     })); - 1 !== s && e.floatingConversations.splice(s, 1)
                  };
                  for (r.s(); !(n = r.n()).done;) s()
               } catch (o) {
                  r.e(o)
               } finally {
                  r.f()
               }
            },
            appendFloatingConversation: function (e, t) {
               var n = t.conversation,
                  r = t.isOpen,
                  s = e.floatingConversations.findIndex((function (e) {
                     return n._id ? e._id == n._id : e.windowId == n.windowId
                  })); - 1 === s && e.floatingConversations.push(Object(_["a"])(Object(_["a"])({}, n), {}, {
                  isOpen: r,
                  messages: [],
                  usersTyping: {}
               }))
            },
            appendFloatingConversationMessages: function (e, t) {
               var n = t.conversation,
                  r = t.messages,
                  s = e.floatingConversations.findIndex((function (e) {
                     return e._id == n._id
                  })); - 1 !== s && (e.floatingConversations[s].messages = [].concat(Object(o["a"])(e.floatingConversations[s].messages), Object(o["a"])(r)))
            },
            removeFloatingConversation: function (e, t) {
               var n = e.floatingConversations.findIndex((function (e) {
                  return e._id == t._id
               })); - 1 !== n && e.floatingConversations.splice(n, 1)
            },
            removeMessageFromFloating: function (e, t) {
               var n = e.floatingConversations.findIndex((function (e) {
                  return e._id == t.conversationId
               }));
               if (-1 !== n) {
                  var r = e.floatingConversations[n].messages.findIndex((function (e) {
                     return e._id == t.messageId
                  })); - 1 !== r && (e.floatingConversations[n].messages[r].content = "Message Deleted", e.floatingConversations[n].messages[r].deleted = !0)
               }
            },
            removeMessageFromMain: function (e, t) {
               var n = e.mainConversationMessages.findIndex((function (e) {
                  return e._id == t.messageId
               })); - 1 !== n && (e.mainConversationMessages[n].content = "Message Deleted", e.mainConversationMessages[n].deleted = !0)
            },
            editMessageInFloating: function (e, t) {
               var n = e.floatingConversations.findIndex((function (e) {
                  return e._id == t.conversationId
               }));
               if (-1 !== n) {
                  var r = e.floatingConversations[n].messages.findIndex((function (e) {
                     return e._id == t.messageId
                  })); - 1 !== r && (e.floatingConversations[n].messages[r].content = t.content, e.floatingConversations[n].messages[r].edited = !0)
               }
            },
            editMessageInMain: function (e, t) {
               var n = e.mainConversationMessages.findIndex((function (e) {
                  return e._id == t.messageId
               })); - 1 !== n && (e.mainConversationMessages[n].content = t.content, e.mainConversationMessages[n].edited = !0)
            },
            toggleFloatingConversation: function (e, t) {
               var n = t.conversation,
                  r = t.isOpen,
                  s = e.floatingConversations.findIndex((function (e) {
                     return e._id == n._id
                  }));
               e.floatingConversations[s].isOpen = void 0 === r ? !e.floatingConversations[s].isOpen : r
            },
            setConversationRequest: function (e, t) {
               var n = t.conversationId,
                  r = t.isRequest,
                  s = e.floatingConversations.find((function (e) {
                     return e._id === n
                  })),
                  o = e.conversations.find((function (e) {
                     return e._id === n
                  }));
               o && (o.request = r), s && (s.request = r)
            },
            setMainConversation: function (e, t) {
               t && (t.usersTyping = {}, e.mainConversation = t)
            },
            setMainConversationMessages: function (e, t) {
               e.mainConversationMessages = t
            },
            appendToMainConversationMessages: function (e, t) {
               e.mainConversationMessages = [].concat(Object(o["a"])(e.mainConversationMessages), Object(o["a"])(t))
            },
            pushToMainConversationMessages: function (e, t) {
               e.mainConversationMessages = [].concat(Object(o["a"])(e.mainConversationMessages), [t])
            },
            pushToFloatingConversationMessages: function (e, t) {
               var n = e.mainConversation,
                  r = e.floatingConversations.find((function (e) {
                     return e._id === t.chatId
                  })),
                  s = e.conversations.find((function (e) {
                     return e._id === t.chatId
                  }));
               s && (s.lastMessage = t.message), r && r.messages.push(t.message), r && r.isOpen || t.chatId === n._id || s && (s.unreadMessages = s.unreadMessages + 1)
            },
            replaceFloatingConversationByWindowId: function (e, t) {
               var n = t.conversation,
                  r = t.windowId,
                  s = e.floatingConversations.findIndex((function (e) {
                     return e.windowId == r
                  }));
               e.floatingConversations.splice(s, 1, n)
            },
            setUserTypingInConversation: function (e, t) {
               var n = e.mainConversation,
                  r = e.floatingConversations.find((function (e) {
                     return e._id === t.chatId
                  }));
               r && (r.usersTyping[t.userId] = t.isTyping), t.chatId === n._id && (n.usersTyping[t.userId] = t.isTyping)
            },
            setUnreadCount: function (e, t) {
               var n = t.count;
               e.unreadCount = n
            },
            setRequestsCount: function (e, t) {
               var n = t.count;
               e.requestsCount = n
            },
            setMessagesRead: function (e, t) {
               var n = e.conversations.find((function (e) {
                     return e._id === t._id
                  })),
                  r = e.floatingConversations.find((function (e) {
                     return e._id === t._id
                  }));
               n && (n.unreadMessages = 0, n._id === e.mainConversation._id && e.mainConversationMessages.forEach((function (e) {
                  return e.read = !0
               }))), r && (r.unreadMessages = 0, r.messages.forEach((function (e) {
                  return e.read = !0
               })))
            },
            setConversationSearchText: function (e, t) {
               e.conversationSearchText = t.text
            },
            setConversationFilters: function (e, t) {
               e.conversationFilters = t
            }
         },
         be = {
            getConversations: function (e) {
               return Object(c["a"])(regeneratorRuntime.mark((function t() {
                  var n, r, s;
                  return regeneratorRuntime.wrap((function (t) {
                     while (1) switch (t.prev = t.next) {
                        case 0:
                           return t.prev = 0, n = e.state.conversationsPage, t.next = 4, u["a"].get("/chat/my", {
                              params: {
                                 page: n,
                                 limit: 20
                              }
                           });
                        case 4:
                           return r = t.sent, s = r.data, e.commit("appendConversations", s), s.length > 0 && e.commit("incrementConversationsPage"), e.commit("setUsersOnlineStatus"), t.abrupt("return", s);
                        case 12:
                           throw t.prev = 12, t.t0 = t["catch"](0), console.log(t.t0.response), t.t0;
                        case 16:
                        case "end":
                           return t.stop()
                     }
                  }), t, null, [
                     [0, 12]
                  ])
               })))()
            },
            searchConversationsWithoutAppending: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function e() {
                  var n, r, s;
                  return regeneratorRuntime.wrap((function (e) {
                     while (1) switch (e.prev = e.next) {
                        case 0:
                           return e.prev = 0, n = t.text, e.next = 4, u["a"].get("/chat/search", {
                              params: {
                                 text: n
                              }
                           });
                        case 4:
                           return r = e.sent, s = r.data, e.abrupt("return", s);
                        case 9:
                           throw e.prev = 9, e.t0 = e["catch"](0), console.log(e.t0.response), e.t0;
                        case 13:
                        case "end":
                           return e.stop()
                     }
                  }), e, null, [
                     [0, 9]
                  ])
               })))()
            },
            getChatByNetworkId: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function e() {
                  var n, r, s;
                  return regeneratorRuntime.wrap((function (e) {
                     while (1) switch (e.prev = e.next) {
                        case 0:
                           return e.prev = 0, n = t.networkId, e.next = 4, u["a"].get("/chat/network/".concat(n));
                        case 4:
                           return r = e.sent, s = r.data, e.abrupt("return", s);
                        case 9:
                           throw e.prev = 9, e.t0 = e["catch"](0), console.log(e.t0.response), e.t0;
                        case 13:
                        case "end":
                           return e.stop()
                     }
                  }), e, null, [
                     [0, 9]
                  ])
               })))()
            },
            searchConversations: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return n.prev = 0, r = t.text, n.next = 4, u["a"].get("/chat/search", {
                              params: {
                                 text: r
                              }
                           });
                        case 4:
                           return s = n.sent, o = s.data, e.commit("resetConversations"), e.commit("appendConversations", o), n.abrupt("return", o);
                        case 11:
                           throw n.prev = 11, n.t0 = n["catch"](0), console.log(n.t0.response), n.t0;
                        case 15:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [0, 11]
                  ])
               })))()
            },
            resetConversations: function (e) {
               try {
                  e.commit("resetConversations")
               } catch (t) {
                  throw console.log(t.response), t
               }
            },
            startConversation: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i, a;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return n.prev = 0, r = t.message, s = t.profileId, o = t.businessProfile, n.next = 4, u["a"].post("/chat/personal", {
                              message: r,
                              profileId: s,
                              businessProfile: o
                           });
                        case 4:
                           return i = n.sent, a = i.data, e.commit("appendConversations", [a]), n.abrupt("return", a);
                        case 10:
                           throw n.prev = 10, n.t0 = n["catch"](0), console.log(n.t0.response), n.t0;
                        case 14:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [0, 10]
                  ])
               })))()
            },
            deleteConversation: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return n.prev = 0, r = t.conversationId, n.next = 4, u["a"].put("/chat/".concat(r, "/delete"));
                        case 4:
                           return s = n.sent, o = s.data, e.commit("removeConversations", [r]), e.commit("removeFloatingConversation", {
                              _id: r
                           }), n.abrupt("return", o);
                        case 11:
                           throw n.prev = 11, n.t0 = n["catch"](0), console.log(n.t0.response), n.t0;
                        case 15:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [0, 11]
                  ])
               })))()
            },
            deleteConversationAndBlock: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return n.prev = 0, r = t.conversationId, n.next = 4, u["a"].put("/chat/".concat(r, "/block"));
                        case 4:
                           return s = n.sent, o = s.data, e.commit("removeConversations", [r]), e.commit("removeFloatingConversation", {
                              _id: r
                           }), n.abrupt("return", o);
                        case 11:
                           throw n.prev = 11, n.t0 = n["catch"](0), console.log(n.t0.response), n.t0;
                        case 15:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [0, 11]
                  ])
               })))()
            },
            deleteConversationAndMessages: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return n.prev = 0, r = t.conversationId, n.next = 4, u["a"].put("/chat/".concat(r, "/delete/messages"));
                        case 4:
                           return s = n.sent, o = s.data, e.commit("removeConversations", [r]), e.commit("removeFloatingConversation", {
                              _id: r
                           }), n.abrupt("return", o);
                        case 11:
                           throw n.prev = 11, n.t0 = n["catch"](0), console.log(n.t0.response), n.t0;
                        case 15:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [0, 11]
                  ])
               })))()
            },
            deleteMessage: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return n.prev = 0, r = t.conversationId, s = t.messageId, n.next = 4, u["a"].put("/chat/message/".concat(s, "/delete"));
                        case 4:
                           return o = n.sent, i = o.data, e.commit("removeMessageFromMain", {
                              conversationId: r,
                              messageId: s
                           }), e.commit("removeMessageFromFloating", {
                              conversationId: r,
                              messageId: s
                           }), n.abrupt("return", i);
                        case 11:
                           throw n.prev = 11, n.t0 = n["catch"](0), console.log(n.t0.response), n.t0;
                        case 15:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [0, 11]
                  ])
               })))()
            },
            getPersonalConversation: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function e() {
                  var n, r, s;
                  return regeneratorRuntime.wrap((function (e) {
                     while (1) switch (e.prev = e.next) {
                        case 0:
                           return e.prev = 0, n = t.profileId, e.next = 4, u["a"].get("/chat/personal/".concat(n));
                        case 4:
                           return r = e.sent, s = r.data, e.abrupt("return", s);
                        case 9:
                           throw e.prev = 9, e.t0 = e["catch"](0), console.log(e.t0.response), e.t0;
                        case 13:
                        case "end":
                           return e.stop()
                     }
                  }), e, null, [
                     [0, 9]
                  ])
               })))()
            },
            fetchConversationMessages: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function e() {
                  var n, r, s, o, i, a;
                  return regeneratorRuntime.wrap((function (e) {
                     while (1) switch (e.prev = e.next) {
                        case 0:
                           return e.prev = 0, n = t.conversationId, r = t.date, s = t.direction, o = t.limit, e.next = 4, u["a"].get("/chat/".concat(n, "/messages"), {
                              params: {
                                 date: r,
                                 direction: s,
                                 limit: o
                              }
                           });
                        case 4:
                           return i = e.sent, a = i.data, e.abrupt("return", a);
                        case 9:
                           throw e.prev = 9, e.t0 = e["catch"](0), console.log(e.t0.response), e.t0;
                        case 13:
                        case "end":
                           return e.stop()
                     }
                  }), e, null, [
                     [0, 9]
                  ])
               })))()
            },
            sendMessage: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function e() {
                  var n, r, s, o, i, a;
                  return regeneratorRuntime.wrap((function (e) {
                     while (1) switch (e.prev = e.next) {
                        case 0:
                           return e.prev = 0, n = t.conversationId, r = t.message, s = t.media, o = t.parentMessage, e.next = 4, u["a"].post("/chat/".concat(n, "/message"), {
                              message: r,
                              media: s,
                              parentMessage: o
                           });
                        case 4:
                           return i = e.sent, a = i.data, e.abrupt("return", a);
                        case 9:
                           throw e.prev = 9, e.t0 = e["catch"](0), console.log(e.t0.response), e.t0;
                        case 13:
                        case "end":
                           return e.stop()
                     }
                  }), e, null, [
                     [0, 9]
                  ])
               })))()
            },
            editMessage: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i, a;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return n.prev = 0, r = t.conversationId, s = t.messageId, o = t.content, n.next = 4, u["a"].put("/chat/message/".concat(s), {
                              content: o
                           });
                        case 4:
                           return i = n.sent, a = i.data, e.commit("editMessageInMain", {
                              conversationId: r,
                              messageId: s,
                              content: o
                           }), e.commit("editMessageInFloating", {
                              conversationId: r,
                              messageId: s,
                              content: o
                           }), n.abrupt("return", a);
                        case 11:
                           throw n.prev = 11, n.t0 = n["catch"](0), console.log(n.t0.response), n.t0;
                        case 15:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [0, 11]
                  ])
               })))()
            },
            selectMainConversation: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = e.state.conversations.find((function (e) {
                              return e._id === t._id
                           })), e.commit("setMainConversation", r), n.next = 4, e.dispatch("visitChat", {
                              conversation: t
                           });
                        case 4:
                        case "end":
                           return n.stop()
                     }
                  }), n)
               })))()
            },
            fetchMainConversationMessages: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return n.prev = 0, r = t.date, s = t.direction, n.next = 4, e.dispatch("fetchConversationMessages", {
                              conversationId: e.state.mainConversation._id,
                              date: r,
                              limit: 30,
                              direction: s || "desc"
                           });
                        case 4:
                           return o = n.sent, e.commit("appendToMainConversationMessages", o), n.abrupt("return", o);
                        case 9:
                           return n.prev = 9, n.t0 = n["catch"](0), console.log(n.t0), n.abrupt("return", !1);
                        case 13:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [0, 9]
                  ])
               })))()
            },
            fetchFloatingConversationMessages: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return n.prev = 0, r = t.conversation, s = t.date, o = t.direction, n.next = 4, e.dispatch("fetchConversationMessages", {
                              conversationId: r._id,
                              date: s,
                              limit: 30,
                              direction: o || "desc"
                           });
                        case 4:
                           return i = n.sent, e.commit("appendFloatingConversationMessages", {
                              conversation: r,
                              messages: i
                           }), n.abrupt("return", i);
                        case 9:
                           return n.prev = 9, n.t0 = n["catch"](0), console.log(n.t0), n.abrupt("return", !1);
                        case 13:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [0, 9]
                  ])
               })))()
            },
            manageConversationRequest: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return n.prev = 0, r = t.conversationId, s = t.type, n.next = 4, u["a"].post("/chat/".concat(r, "/request/").concat(s));
                        case 4:
                           "accept" === s ? e.commit("setConversationRequest", {
                              conversationId: r,
                              isRequest: !1
                           }) : "reject" === s && e.commit("removeConversations", [r]), e.dispatch("getTotalUnread"), n.next = 12;
                           break;
                        case 8:
                           throw n.prev = 8, n.t0 = n["catch"](0), console.log(n.t0.response), n.t0;
                        case 12:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [0, 8]
                  ])
               })))()
            },
            getActiveConversations: function (e) {
               return Object(c["a"])(regeneratorRuntime.mark((function t() {
                  var n, r, s;
                  return regeneratorRuntime.wrap((function (t) {
                     while (1) switch (t.prev = t.next) {
                        case 0:
                           return t.prev = 0, t.next = 3, u["a"].get("/chat/active");
                        case 3:
                           for (s in n = t.sent, r = n.data, r) e.commit("appendFloatingConversation", {
                              conversation: r[s],
                              isOpen: !1
                           });
                           t.next = 12;
                           break;
                        case 8:
                           throw t.prev = 8, t.t0 = t["catch"](0), console.log(t.t0.response), t.t0;
                        case 12:
                        case "end":
                           return t.stop()
                     }
                  }), t, null, [
                     [0, 8]
                  ])
               })))()
            },
            getTotalUnread: function (e) {
               return Object(c["a"])(regeneratorRuntime.mark((function t() {
                  var n, r;
                  return regeneratorRuntime.wrap((function (t) {
                     while (1) switch (t.prev = t.next) {
                        case 0:
                           return t.prev = 0, t.next = 3, u["a"].get("/chat/total-unread");
                        case 3:
                           return n = t.sent, r = n.data, e.commit("setUnreadCount", {
                              count: r.totalPersonalCount
                           }), e.commit("setRequestsCount", {
                              count: r.requestsCount
                           }), t.abrupt("return", r);
                        case 10:
                           throw t.prev = 10, t.t0 = t["catch"](0), console.log(t.t0.response), t.t0;
                        case 14:
                        case "end":
                           return t.stop()
                     }
                  }), t, null, [
                     [0, 10]
                  ])
               })))()
            },
            setConversationActive: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           if (n.prev = 0, r = t.conversation, s = t.isActive, s ? e.commit("appendFloatingConversation", {
                                 conversation: r,
                                 isOpen: !0
                              }) : e.commit("removeFloatingConversation", r), !r._id) {
                              n.next = 7;
                              break
                           }
                           return o = s ? "activate" : "deactivate", n.next = 7, Object(u["a"])("/chat/".concat(r._id, "/").concat(o), {
                              method: s ? "post" : "put"
                           });
                        case 7:
                           n.next = 13;
                           break;
                        case 9:
                           throw n.prev = 9, n.t0 = n["catch"](0), console.log(n.t0.response), n.t0;
                        case 13:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [0, 9]
                  ])
               })))()
            },
            notifyTyping: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function e() {
                  var n, r;
                  return regeneratorRuntime.wrap((function (e) {
                     while (1) switch (e.prev = e.next) {
                        case 0:
                           if (e.prev = 0, n = t.conversationId, r = t.isTyping, !n) {
                              e.next = 5;
                              break
                           }
                           return e.next = 5, u["a"].put("/chat/".concat(n, "/typing/").concat(r ? "start" : "stop"));
                        case 5:
                           e.next = 11;
                           break;
                        case 7:
                           throw e.prev = 7, e.t0 = e["catch"](0), console.log(e.t0.response), e.t0;
                        case 11:
                        case "end":
                           return e.stop()
                     }
                  }), e, null, [
                     [0, 7]
                  ])
               })))()
            },
            setTypingInChat: function (e, t) {
               e.commit("setUserTypingInConversation", t)
            },
            setConversationRequest: function (e, t) {
               var n = t.conversationId,
                  r = t.type;
               "accept" === r ? e.commit("setConversationRequest", {
                  conversationId: n,
                  isRequest: !1
               }) : "reject" === r && e.commit("removeConversations", [n])
            },
            setUnreadCount: function (e, t) {
               var n = t.count;
               e.commit("setUnreadCount", {
                  count: n
               })
            },
            openFloatingConversation: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           e.commit("appendFloatingConversation", t);
                        case 1:
                        case "end":
                           return n.stop()
                     }
                  }), n)
               })))()
            },
            replaceFloatingConversationByWindowId: function (e, t) {
               e.commit("replaceFloatingConversationByWindowId", t)
            },
            closeFloatingConversation: function (e, t) {
               e.commit("removeFloatingConversation", t)
            },
            toggleFloatingConversation: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           if (r = t.conversation, s = t.isOpen, o = e.state.floatingConversations.findIndex((function (e) {
                                 return e._id === r._id
                              })), -1 === o) {
                              n.next = 10;
                              break
                           }
                           if (e.commit("toggleFloatingConversation", t), !s) {
                              n.next = 7;
                              break
                           }
                           return n.next = 7, e.dispatch("visitChat", {
                              conversation: r
                           });
                        case 7:
                           return n.abrupt("return", !0);
                        case 10:
                           return n.abrupt("return", !1);
                        case 11:
                        case "end":
                           return n.stop()
                     }
                  }), n)
               })))()
            },
            resetMainConversation: function (e) {
               e.commit("setMainConversationMessages", []), e.commit("setMainConversation", {})
            },
            addToMainConversationMessages: function (e, t) {
               e.commit("pushToMainConversationMessages", t)
            },
            addToFloatingConversationMessages: function (e, t) {
               e.commit("pushToFloatingConversationMessages", t)
            },
            receiveMessage: function (e, t) {
               var n = t.chatId,
                  r = t.message,
                  s = e.state.mainConversation;
               e.commit("pushToFloatingConversationMessages", t), s._id && n === s._id && e.commit("pushToMainConversationMessages", r)
            },
            addConversations: function (e, t) {
               e.commit("appendConversations", t)
            },
            visitChat: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           if (n.prev = 0, r = t.conversation, !r._id) {
                              n.next = 10;
                              break
                           }
                           return n.next = 5, Object(u["a"])("/chat/".concat(r._id, "/visit"), {
                              method: "put"
                           });
                        case 5:
                           return s = n.sent, o = s.data, e.commit("setMessagesRead", r), e.dispatch("getTotalUnread"), n.abrupt("return", o);
                        case 10:
                           n.next = 16;
                           break;
                        case 12:
                           throw n.prev = 12, n.t0 = n["catch"](0), console.log(n.t0.response), n.t0;
                        case 16:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [0, 12]
                  ])
               })))()
            },
            fetchUserListForMention: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function e() {
                  var n, r;
                  return regeneratorRuntime.wrap((function (e) {
                     while (1) switch (e.prev = e.next) {
                        case 0:
                           return e.prev = 0, e.next = 3, u["a"].get("/networks/".concat(t.networkId, "/members/search?text=").concat(t.search));
                        case 3:
                           return n = e.sent, r = n.data, e.abrupt("return", r);
                        case 8:
                           throw e.prev = 8, e.t0 = e["catch"](0), console.log(e.t0.response), e.t0;
                        case 12:
                        case "end":
                           return e.stop()
                     }
                  }), e, null, [
                     [0, 8]
                  ])
               })))()
            },
            deleteMessageAdmin: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return n.prev = 0, r = t.conversationId, s = t.messageId, n.next = 4, u["a"].delete("/chat/message/".concat(s, "/admin"));
                        case 4:
                           return o = n.sent, i = o.data, e.commit("removeMessageFromMain", {
                              conversationId: r,
                              messageId: s
                           }), e.commit("removeMessageFromFloating", {
                              conversationId: r,
                              messageId: s
                           }), n.abrupt("return", i);
                        case 11:
                           throw n.prev = 11, n.t0 = n["catch"](0), console.log(n.t0.response), n.t0;
                        case 15:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [0, 11]
                  ])
               })))()
            }
         },
         we = {
            getUserId: function (e) {
               return e.user.id
            },
            getConversations: function (e) {
               return e.conversations
            },
            getMainConversation: function (e) {
               return e.mainConversation
            },
            getFloatingConversations: function (e) {
               return e.floatingConversations
            },
            getNewConversations: function (e) {
               return e.newConversations
            },
            getMainConversationMessages: function (e) {
               return e.mainConversationMessages
            },
            getRequests: function (e) {
               return e.requests
            },
            getUnreadCount: function (e) {
               return e.unreadCount
            },
            getRequestsCount: function (e) {
               return e.requestsCount
            },
            getUsersOnlineStatus: function (e) {
               return e.usersOnlineStatus
            },
            getConversationFilters: function (e) {
               return e.conversationFilters
            }
         },
         ke = {
            namespaced: !0,
            state: function () {
               return {
                  conversationsPage: 1,
                  conversationSearchText: "",
                  conversations: [],
                  floatingConversations: [],
                  conversationFilters: {
                     personal: !0,
                     network: !0,
                     group: !0
                  },
                  unreadCount: 0,
                  requestsCount: 0,
                  mainConversation: {},
                  mainConversationMessages: [],
                  usersOnlineStatus: {}
               }
            },
            mutations: ve,
            actions: be,
            getters: we
         },
         _e = {
            setPointValue: function (e, t) {
               var n = "pointValue" in t.value;
               e.pointValue = n ? t.value.pointValue : 0
            },
            setScore: function (e, t) {
               e.score = t
            }
         },
         Ce = {
            resetPoints: function (e) {
               e.commit("setPointValue", {
                  value: {
                     value: 0
                  }
               })
            }
         },
         ye = {
            getPoints: function (e) {
               return e.pointValue
            },
            getScore: function (e) {
               return console.log("in gamification"), e.score
            }
         },
         xe = {
            namespaced: !0,
            state: function () {
               return {
                  pointValue: 0
               }
            },
            mutations: _e,
            actions: Ce,
            getters: ye
         },
         Pe = {
            setLinkPreview: function (e, t) {
               console.log("MUTATION"), e.url = t.domain, e.title = t.title, e.description = t.description, e.img = t.img, e.isRemoved = t.isRemoved
            }
         },
         Ie = {
            getLinkPreview: function (e) {
               var t = {};
               return t.url = e.url, t.img = e.img, t.title = e.title, t.description = e.description, t.isRemoved = e.isRemoved, t
            }
         },
         je = {
            fetchLinkPreview: function (e, t) {
               console.log("LIGHTS CAMARA ACTION"), e.commit("setLinkPreview", t)
            }
         },
         Me = {
            state: function () {
               return {
                  url: "",
                  img: null,
                  title: "",
                  description: "",
                  isRemoved: !1
               }
            },
            actions: je,
            getters: Ie,
            mutations: Pe
         },
         Re = {
            reportBug: function (e, t) {
               return Object(c["a"])(regeneratorRuntime.mark((function n() {
                  var r, s, o, i;
                  return regeneratorRuntime.wrap((function (n) {
                     while (1) switch (n.prev = n.next) {
                        case 0:
                           return r = e.rootGetters["auth/getUserAuthToken"], s = {
                              headers: {
                                 Authorization: "Bearer ".concat(r)
                              }
                           }, o = {
                              type: "support",
                              title: "bug report",
                              description: t.description
                           }, n.prev = 3, n.next = 6, u["a"].post("/tickets", o, s);
                        case 6:
                           if (i = n.sent, console.log(i), !i.data) {
                              n.next = 12;
                              break
                           }
                           return n.abrupt("return", !0);
                        case 12:
                           return n.abrupt("return", !1);
                        case 13:
                           n.next = 18;
                           break;
                        case 15:
                           return n.prev = 15, n.t0 = n["catch"](3), n.abrupt("return", {
                              response: n.t0,
                              succes: !1
                           });
                        case 18:
                        case "end":
                           return n.stop()
                     }
                  }), n, null, [
                     [3, 15]
                  ])
               })))()
            }
         },
         Oe = {
            namespaced: !0,
            state: function () {
               return {
                  tickets: []
               }
            },
            actions: Re
         };
      s["default"].use(r["a"]);
      var Ae = new r["a"].Store({
         modules: {
            profile: w,
            feeds: S,
            auth: $,
            post: N,
            networks: H,
            user: J,
            network: X,
            settings: re,
            notifications: ae,
            admin: de,
            invites: ge,
            chat: ke,
            gamification: xe,
            linkPreview: Me,
            support: Oe
         }
      });
      t["a"] = Ae
   },
   "43fc": function (e, t, n) {
      "use strict";
      n("ef6a")
   },
   4546: function (e, t, n) {},
   "454b": function (e, t, n) {
      "use strict";
      var r = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("b-dropdown", {
               ref: "dropdown",
               staticClass: "base-dropdown",
               class: e.classDropdown,
               attrs: {
                  block: "",
                  text: e.text,
                  "menu-class": "base-dropdown__menu",
                  "toggle-class": e.classToggle,
                  right: e.right,
                  "no-caret": e.disabled,
                  disabled: e.disabled
               },
               scopedSlots: e._u([{
                  key: "dropdown-header",
                  fn: function () {
                     return [e._t("dropdown-header")]
                  },
                  proxy: !0
               }, e.customText ? {
                  key: "button-content",
                  fn: function () {
                     return [e._t("button-content")]
                  },
                  proxy: !0
               } : null], null, !0)
            }, [e._t("default")], 2)
         },
         s = [],
         o = {
            name: "BaseDropdown",
            props: {
               text: {
                  type: String
               },
               classDropdown: {
                  type: String
               },
               classToggle: {
                  type: String
               },
               right: {
                  type: Boolean
               },
               noCaret: {
                  type: Boolean
               },
               customText: {
                  type: Boolean
               },
               disabled: {
                  type: Boolean
               }
            },
            methods: {
               show: function () {
                  this.$refs.dropdown.show()
               },
               hide: function () {
                  this.$refs.dropdown.hide()
               }
            }
         },
         i = o,
         a = (n("bcfa"), n("2877")),
         c = Object(a["a"])(i, r, s, !1, null, null, null);
      t["a"] = c.exports
   },
   4678: function (e, t, n) {
      var r = {
         "./af": "2bfb",
         "./af.js": "2bfb",
         "./ar": "8e73",
         "./ar-dz": "a356",
         "./ar-dz.js": "a356",
         "./ar-kw": "423e",
         "./ar-kw.js": "423e",
         "./ar-ly": "1cfd",
         "./ar-ly.js": "1cfd",
         "./ar-ma": "0a84",
         "./ar-ma.js": "0a84",
         "./ar-sa": "8230",
         "./ar-sa.js": "8230",
         "./ar-tn": "6d83",
         "./ar-tn.js": "6d83",
         "./ar.js": "8e73",
         "./az": "485c",
         "./az.js": "485c",
         "./be": "1fc1",
         "./be.js": "1fc1",
         "./bg": "84aa",
         "./bg.js": "84aa",
         "./bm": "a7fa",
         "./bm.js": "a7fa",
         "./bn": "9043",
         "./bn-bd": "9686",
         "./bn-bd.js": "9686",
         "./bn.js": "9043",
         "./bo": "d26a",
         "./bo.js": "d26a",
         "./br": "6887",
         "./br.js": "6887",
         "./bs": "2554",
         "./bs.js": "2554",
         "./ca": "d716",
         "./ca.js": "d716",
         "./cs": "3c0d",
         "./cs.js": "3c0d",
         "./cv": "03ec",
         "./cv.js": "03ec",
         "./cy": "9797",
         "./cy.js": "9797",
         "./da": "0f14",
         "./da.js": "0f14",
         "./de": "b469",
         "./de-at": "b3eb",
         "./de-at.js": "b3eb",
         "./de-ch": "bb71",
         "./de-ch.js": "bb71",
         "./de.js": "b469",
         "./dv": "598a",
         "./dv.js": "598a",
         "./el": "8d47",
         "./el.js": "8d47",
         "./en-au": "0e6b",
         "./en-au.js": "0e6b",
         "./en-ca": "3886",
         "./en-ca.js": "3886",
         "./en-gb": "39a6",
         "./en-gb.js": "39a6",
         "./en-ie": "e1d3",
         "./en-ie.js": "e1d3",
         "./en-il": "7333",
         "./en-il.js": "7333",
         "./en-in": "ec2e",
         "./en-in.js": "ec2e",
         "./en-nz": "6f50",
         "./en-nz.js": "6f50",
         "./en-sg": "b7e9",
         "./en-sg.js": "b7e9",
         "./eo": "65db",
         "./eo.js": "65db",
         "./es": "898b",
         "./es-do": "0a3c",
         "./es-do.js": "0a3c",
         "./es-mx": "b5b7",
         "./es-mx.js": "b5b7",
         "./es-us": "55c9",
         "./es-us.js": "55c9",
         "./es.js": "898b",
         "./et": "ec18",
         "./et.js": "ec18",
         "./eu": "0ff2",
         "./eu.js": "0ff2",
         "./fa": "8df4",
         "./fa.js": "8df4",
         "./fi": "81e9",
         "./fi.js": "81e9",
         "./fil": "d69a",
         "./fil.js": "d69a",
         "./fo": "0721",
         "./fo.js": "0721",
         "./fr": "9f26",
         "./fr-ca": "d9f8",
         "./fr-ca.js": "d9f8",
         "./fr-ch": "0e49",
         "./fr-ch.js": "0e49",
         "./fr.js": "9f26",
         "./fy": "7118",
         "./fy.js": "7118",
         "./ga": "5120",
         "./ga.js": "5120",
         "./gd": "f6b4",
         "./gd.js": "f6b4",
         "./gl": "8840",
         "./gl.js": "8840",
         "./gom-deva": "aaf2",
         "./gom-deva.js": "aaf2",
         "./gom-latn": "0caa",
         "./gom-latn.js": "0caa",
         "./gu": "e0c5",
         "./gu.js": "e0c5",
         "./he": "c7aa",
         "./he.js": "c7aa",
         "./hi": "dc4d",
         "./hi.js": "dc4d",
         "./hr": "4ba9",
         "./hr.js": "4ba9",
         "./hu": "5b14",
         "./hu.js": "5b14",
         "./hy-am": "d6b6",
         "./hy-am.js": "d6b6",
         "./id": "5038",
         "./id.js": "5038",
         "./is": "0558",
         "./is.js": "0558",
         "./it": "6e98",
         "./it-ch": "6f12",
         "./it-ch.js": "6f12",
         "./it.js": "6e98",
         "./ja": "079e",
         "./ja.js": "079e",
         "./jv": "b540",
         "./jv.js": "b540",
         "./ka": "201b",
         "./ka.js": "201b",
         "./kk": "6d79",
         "./kk.js": "6d79",
         "./km": "e81d",
         "./km.js": "e81d",
         "./kn": "3e92",
         "./kn.js": "3e92",
         "./ko": "22f8",
         "./ko.js": "22f8",
         "./ku": "2421",
         "./ku.js": "2421",
         "./ky": "9609",
         "./ky.js": "9609",
         "./lb": "440c",
         "./lb.js": "440c",
         "./lo": "b29d",
         "./lo.js": "b29d",
         "./lt": "26f9",
         "./lt.js": "26f9",
         "./lv": "b97c",
         "./lv.js": "b97c",
         "./me": "293c",
         "./me.js": "293c",
         "./mi": "688b",
         "./mi.js": "688b",
         "./mk": "6909",
         "./mk.js": "6909",
         "./ml": "02fb",
         "./ml.js": "02fb",
         "./mn": "958b",
         "./mn.js": "958b",
         "./mr": "39bd",
         "./mr.js": "39bd",
         "./ms": "ebe4",
         "./ms-my": "6403",
         "./ms-my.js": "6403",
         "./ms.js": "ebe4",
         "./mt": "1b45",
         "./mt.js": "1b45",
         "./my": "8689",
         "./my.js": "8689",
         "./nb": "6ce3",
         "./nb.js": "6ce3",
         "./ne": "3a39",
         "./ne.js": "3a39",
         "./nl": "facd",
         "./nl-be": "db29",
         "./nl-be.js": "db29",
         "./nl.js": "facd",
         "./nn": "b84c",
         "./nn.js": "b84c",
         "./oc-lnc": "167b",
         "./oc-lnc.js": "167b",
         "./pa-in": "f3ff",
         "./pa-in.js": "f3ff",
         "./pl": "8d57",
         "./pl.js": "8d57",
         "./pt": "f260",
         "./pt-br": "d2d4",
         "./pt-br.js": "d2d4",
         "./pt.js": "f260",
         "./ro": "972c",
         "./ro.js": "972c",
         "./ru": "957c",
         "./ru.js": "957c",
         "./sd": "6784",
         "./sd.js": "6784",
         "./se": "ffff",
         "./se.js": "ffff",
         "./si": "eda5",
         "./si.js": "eda5",
         "./sk": "7be6",
         "./sk.js": "7be6",
         "./sl": "8155",
         "./sl.js": "8155",
         "./sq": "c8f3",
         "./sq.js": "c8f3",
         "./sr": "cf1e",
         "./sr-cyrl": "13e9",
         "./sr-cyrl.js": "13e9",
         "./sr.js": "cf1e",
         "./ss": "52bd",
         "./ss.js": "52bd",
         "./sv": "5fbd",
         "./sv.js": "5fbd",
         "./sw": "74dc",
         "./sw.js": "74dc",
         "./ta": "3de5",
         "./ta.js": "3de5",
         "./te": "5cbb",
         "./te.js": "5cbb",
         "./tet": "576c",
         "./tet.js": "576c",
         "./tg": "3b1b",
         "./tg.js": "3b1b",
         "./th": "10e8",
         "./th.js": "10e8",
         "./tk": "5aff",
         "./tk.js": "5aff",
         "./tl-ph": "0f38",
         "./tl-ph.js": "0f38",
         "./tlh": "cf755",
         "./tlh.js": "cf755",
         "./tr": "0e81",
         "./tr.js": "0e81",
         "./tzl": "cf51",
         "./tzl.js": "cf51",
         "./tzm": "c109",
         "./tzm-latn": "b53d",
         "./tzm-latn.js": "b53d",
         "./tzm.js": "c109",
         "./ug-cn": "6117",
         "./ug-cn.js": "6117",
         "./uk": "ada2",
         "./uk.js": "ada2",
         "./ur": "5294",
         "./ur.js": "5294",
         "./uz": "2e8c",
         "./uz-latn": "010e",
         "./uz-latn.js": "010e",
         "./uz.js": "2e8c",
         "./vi": "2921",
         "./vi.js": "2921",
         "./x-pseudo": "fd7e",
         "./x-pseudo.js": "fd7e",
         "./yo": "7f33",
         "./yo.js": "7f33",
         "./zh-cn": "5c3a",
         "./zh-cn.js": "5c3a",
         "./zh-hk": "49ab",
         "./zh-hk.js": "49ab",
         "./zh-mo": "3a6c",
         "./zh-mo.js": "3a6c",
         "./zh-tw": "90ea",
         "./zh-tw.js": "90ea"
      };

      function s(e) {
         var t = o(e);
         return n(t)
      }

      function o(e) {
         if (!n.o(r, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw t.code = "MODULE_NOT_FOUND", t
         }
         return r[e]
      }
      s.keys = function () {
         return Object.keys(r)
      }, s.resolve = o, e.exports = s, s.id = "4678"
   },
   "475a": function (e, t, n) {
      "use strict";
      n("226d")
   },
   4997: function (e, t, n) {
      "use strict";
      n("f5aa")
   },
   "49d0": function (e, t, n) {
      "use strict";
      n("d1a6")
   },
   "4a0d": function (e, t, n) {
      e.exports = n.p + "img/auto-replies-icon.9adae06a.svg"
   },
   "4bcc": function (e, t, n) {
      e.exports = n.p + "img/ic-btn-chevron.92e61d57.svg"
   },
   "4c2e": function (e, t, n) {
      "use strict";
      n("162f")
   },
   "4c5b": function (e, t, n) {},
   "4d4f": function (e, t, n) {},
   "4fc7": function (e, t, n) {},
   "4fe5": function (e, t, n) {
      "use strict";
      n("8af8")
   },
   5: function (e, t) {},
   "502a": function (e, t, n) {},
   "522f": function (e, t, n) {
      e.exports = n.p + "img/default-network-icon.8934786e.svg"
   },
   "529c": function (e, t, n) {
      "use strict";
      n("2dcc")
   },
   "52f1": function (e, t, n) {},
   "52f3": function (e, t, n) {
      "use strict";
      n("21b8")
   },
   5321: function (e, t, n) {},
   5455: function (e, t, n) {
      e.exports = n.p + "img/ic-btn-add.cebb099f.svg"
   },
   "563b": function (e, t, n) {
      e.exports = n.p + "img/reply-icon.9f5b5f94.svg"
   },
   "56d7": function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("1da1"),
         s = (n("e260"), n("e6cf"), n("cca6"), n("a79d"), n("96cf"), n("2b0e")),
         o = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("div", {
               attrs: {
                  id: "app"
               }
            }, [e.showOverlay ? n("div", [n("DownloadApp", {
               on: {
                  close: e.closeOverlay
               }
            })], 1) : n("div", [e.isIndexRoute ? n("Landing") : e.isIndexInviteRoute ? n("LandingInvite") : e.isIndexHowItRoute ? n("HowItWorks", {
               on: {
                  signup: function (t) {
                     return e.$router.push({
                        path: "/signup"
                     })
                  }
               }
            }) : e.isAuthRoute ? n("Onboard") : e.isEmailVerificationRoute ? n("div", [n("router-view")], 1) : n("UiWrapper", [n("Navbar", {
               on: {
                  onLogoClicked: e.onLogoClicked
               }
            }), n("UiWrapperMain", {
               ref: "main-wrapper",
               scopedSlots: e._u([!e.isIndexInviteRoute && e.isAuth ? {
                  key: "n-sidebar",
                  fn: function () {
                     return [n("div", {
                        staticClass: "ui-sidebar"
                     }, [n("button", {
                        staticClass: "ui-sidebar__btn",
                        class: {
                           active: e.sidebar,
                           "ui-hide": e.editMode
                        },
                        on: {
                           click: function (t) {
                              e.sidebar = !e.sidebar
                           }
                        }
                     }, [n("span", {
                        staticClass: "icon icon-select-arrow-bottom",
                        class: {
                           show: e.sidebar
                        }
                     })]), n("main-sidebar", {
                        attrs: {
                           "class-sidebar": {
                              show: e.sidebar
                           }
                        },
                        on: {
                           switchEditSidebar: function (t) {
                              return e.hideSidebarBtn(t)
                           }
                        }
                     })], 1)]
                  },
                  proxy: !0
               } : null, {
                  key: "n-msg-sidebar",
                  fn: function () {
                     return [!e.isIndexInviteRoute && e.isAuth ? n("MessagingMain") : e._e()]
                  },
                  proxy: !0
               }], null, !0)
            }, [n("NewPostModal"), n("ReportModal"), n("OnboardModal"), n("QuestionsModal"), n("transition", {
               attrs: {
                  "enter-active-class": "animate__animated animate__fadeIn animate__faster",
                  "leave-active-class": "animate__animated animate__fadeOut animate__faster",
                  mode: "out-in"
               }
            }, [n("router-view", {
               staticClass: "main-routes"
            })], 1)], 1)], 1)], 1)])
         },
         i = [],
         a = (n("d3b7"), n("3ca3"), n("ddb0"), n("5319"), n("ac1f"), n("9029")),
         c = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("div", {
               staticClass: "download-app"
            }, [n("div", {
               staticClass: "download-app__content ui-align-center"
            }, [n("span", {
               staticClass: "download-app__app-logo"
            }, [n("img", {
               attrs: {
                  src: e.logo,
                  alt: "app logo"
               }
            })]), n("h1", {
               staticClass: "download-app__title"
            }, [e._v("Enjoy The Bizfluence App Experience")]), n("div", {
               staticClass: "download-app__stars ui-align-center"
            }, [n("svg", {
               staticClass: "icon-star",
               attrs: {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 20 20",
                  fill: "currentColor",
                  "stroke-width": "1",
                  stroke: "currentColor"
               }
            }, [n("path", {
               attrs: {
                  d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
               }
            })]), n("svg", {
               staticClass: "icon-star",
               attrs: {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 20 20",
                  fill: "currentColor",
                  "stroke-width": "1",
                  stroke: "currentColor"
               }
            }, [n("path", {
               attrs: {
                  d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
               }
            })]), n("svg", {
               staticClass: "icon-star",
               attrs: {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 20 20",
                  fill: "currentColor",
                  "stroke-width": "1",
                  stroke: "currentColor"
               }
            }, [n("path", {
               attrs: {
                  d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
               }
            })]), n("svg", {
               staticClass: "icon-star",
               attrs: {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 20 20",
                  fill: "currentColor",
                  "stroke-width": "1",
                  stroke: "currentColor"
               }
            }, [n("path", {
               attrs: {
                  d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
               }
            })]), n("svg", {
               staticClass: "icon-star",
               attrs: {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 20 20",
                  fill: "currentColor",
                  "stroke-width": "1",
                  stroke: "currentColor"
               }
            }, [n("path", {
               attrs: {
                  d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
               }
            })])]), n("div", {
               staticClass: "download-app__row"
            }, [n("span", {
               staticClass: "download-app__row__logo"
            }, [n("img", {
               attrs: {
                  src: e.logo,
                  alt: "app logo"
               }
            })]), n("p", [e._v("Bizfluence App")]), n("button", {
               staticClass: "ui-btn",
               on: {
                  click: e.goToMobileApp
               }
            }, [e._v("Open App")])]), n("div", {
               staticClass: "download-app__row"
            }, [n("span", {
               staticClass: "download-app__row__logo"
            }, [n("svg", {
               staticClass: "icon",
               attrs: {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "black",
                  "stroke-width": "2"
               }
            }, [n("path", {
               attrs: {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  d: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
               }
            })])]), n("p", [e._v("Browser")]), n("button", {
               staticClass: "ui-btn ui-btn__transparent",
               on: {
                  click: function (t) {
                     return e.$emit("close")
                  }
               }
            }, [e._v("Continue")])])])])
         },
         u = [],
         l = n("2452"),
         d = n.n(l),
         p = {
            name: "DownloadApp",
            data: function () {
               return {
                  logo: d.a
               }
            },
            methods: {
               goToMobileApp: function () {
                  var e = "https://bizfluence.app.link",
                     t = this.$router.currentRoute.path,
                     n = [/profiles/, /hubs/, /posts/],
                     r = n.some((function (e) {
                        return e.test(t)
                     })),
                     s = r ? "".concat(e).concat(t) : e;
                  console.log("link ".concat(s)), window.location.replace(s)
               }
            }
         },
         f = p,
         m = (n("ff10"), n("2877")),
         g = Object(m["a"])(f, c, u, !1, null, "e51ed68a", null),
         h = g.exports,
         v = function () {
            return Promise.all([n.e("chunk-68d2811e"), n.e("chunk-25536db6"), n.e("chunk-b99289dc"), n.e("chunk-6620a91c"), n.e("chunk-ad0b650e")]).then(n.bind(null, "1808"))
         },
         b = function () {
            return n.e("chunk-ad27a056").then(n.bind(null, "8e6a"))
         },
         w = function () {
            return n.e("chunk-d3a65216").then(n.bind(null, "4429"))
         },
         k = function () {
            return n.e("chunk-33475c6a").then(n.bind(null, "99ed"))
         },
         _ = function () {
            return Promise.all([n.e("chunk-a9464d02"), n.e("chunk-339c947c")]).then(n.bind(null, "7407"))
         },
         C = function () {
            return n.e("chunk-1327c0a5").then(n.bind(null, "e800"))
         },
         y = function () {
            return n.e("chunk-31993bc3").then(n.bind(null, "79fa"))
         },
         x = function () {
            return n.e("chunk-918b36d2").then(n.bind(null, "4ea1"))
         },
         P = function () {
            return n.e("chunk-b99289dc").then(n.bind(null, "dfb9"))
         },
         I = function () {
            return n.e("chunk-10e6a05d").then(n.bind(null, "bede"))
         },
         j = function () {
            return Promise.all([n.e("chunk-a9464d02"), n.e("chunk-090d2b2e"), n.e("chunk-68d2811e"), n.e("chunk-19beea7d"), n.e("chunk-4fb07ccc")]).then(n.bind(null, "1f6a"))
         },
         M = function () {
            return Promise.resolve().then(n.bind(null, "580f"))
         },
         R = function () {
            return n.e("chunk-c01ed9d6").then(n.bind(null, "ca20"))
         },
         O = {
            components: {
               DownloadApp: h,
               MainSidebar: P,
               HowItWorks: M,
               LandingInvite: j,
               UiWrapperMain: w,
               UiWrapper: b,
               Navbar: v,
               Onboard: k,
               NewPostModal: _,
               OnboardModal: y,
               QuestionsModal: x,
               MessagingMain: C,
               Landing: I,
               ReportModal: R
            },
            data: function () {
               return {
                  sidebar: !0,
                  editMode: !1,
                  showOverlay: a["isMobileOnly"]
               }
            },
            created: function () {
               var e = this;
               return Object(r["a"])(regeneratorRuntime.mark((function t() {
                  return regeneratorRuntime.wrap((function (t) {
                     while (1) switch (t.prev = t.next) {
                        case 0:
                           console.log("App component created"), document.documentElement.setAttribute("data-theme", e.$store.state.profile.darkModeWeb ? "ui-dark-mode" : ""), e.$eventBus.$on("SERVER_ERROR", (function (t) {
                              e.$bvToast.toast(t, {
                                 autoHideDelay: 2e3,
                                 noCloseButton: !0,
                                 variant: "danger",
                                 toaster: "b-toaster-top-center"
                              })
                           })), e.$store.dispatch("feeds/reactList"), e.isAuth && e.$store.dispatch("notifications/getNotificationsCount");
                        case 5:
                        case "end":
                           return t.stop()
                     }
                  }), t)
               })))()
            },
            updated: function () {
               console.log(this.$route.query), this.$route.query.onboardModal && (this.$bvModal.show("onboard-modal"), this.$router.replace({
                  "query.onboardModal": null
               }))
            },
            computed: {
               isAuth: function () {
                  return this.$store.getters["auth/getAuthStatus"]
               },
               isIndexRoute: function () {
                  return "index" === this.$route.meta.type
               },
               isIndexInviteRoute: function () {
                  return "index2" === this.$route.meta.type
               },
               isIndexHowItRoute: function () {
                  return "index3" === this.$route.meta.type
               },
               isAuthRoute: function () {
                  return "auth" === this.$route.meta.type
               },
               isEmailVerificationRoute: function () {
                  return "emailVerification" === this.$route.meta.type
               }
            },
            methods: {
               closeOverlay: function () {
                  this.showOverlay = !1
               },
               onLogoClicked: function () {
                  try {
                     window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth"
                     })
                  } catch (e) {
                     console.log(e)
                  }
               },
               hideSidebarBtn: function () {
                  this.editMode = !this.editMode
               }
            }
         },
         A = O,
         S = (n("034f"), n("5c64"), Object(m["a"])(A, o, i, !1, null, null, null)),
         T = S.exports,
         F = n("a18c"),
         L = n("4360"),
         $ = n("2b27"),
         B = n.n($),
         U = n("2ead"),
         D = n.n(U),
         N = n("8019"),
         E = n.n(N),
         q = n("cc46"),
         z = n.n(q),
         H = n("986e"),
         G = n("0ec9"),
         W = n.n(G),
         V = n("29b2"),
         Y = n("a9cc"),
         J = (n("f9e3"), n("2dd8"), n("f27b"), n("b1e0")),
         K = n("5f5b"),
         Q = (n("13ea"), n("7212")),
         Z = n.n(Q),
         X = n("3f08"),
         ee = n("bd8c"),
         te = n.n(ee),
         ne = n("a584"),
         re = n("9aa5"),
         se = n.n(re),
         oe = n("e37d"),
         ie = n("ecee"),
         ae = n("c074"),
         ce = n("f2d1"),
         ue = n("d4f2"),
         le = n.n(ue),
         de = n("4eb5"),
         pe = n.n(de),
         fe = (n("a7a3"), n("77ed"), n("8a39")),
         me = n("1ddb"),
         ge = n("688d");
      s["default"].use(ne["a"], {
         config: {
            id: "G-HJ3PYLJK8M"
         }
      }, F["a"]), s["default"].use(te.a), s["default"].use(X["a"]), s["default"].directive("linkified", se.a), s["default"].use(oe["a"]), ie["c"].add(ae["a"], ce["d"], ce["a"], ce["b"], ae["b"], ce["e"], ce["c"], ae["c"]), pe.a.config.autoSetContainer = !0, s["default"].use(pe.a), fe["a"]({
         Vue: s["default"],
         dsn: "https://39620c3e3bd0475ebc6e270382bfde0f@o1014161.ingest.sentry.io/5979427",
         integrations: [new ge["a"].BrowserTracing({
            routingInstrumentation: me["a"](F["a"]),
            tracingOrigins: ["bizfluenceapp.com", "staging-dev.bizfluenceapp.com", /^\//]
         })],
         environment: "production",
         tracesSampleRate: 1
      }), s["default"].use(K["a"]), s["default"].use(J["a"]), s["default"].use(Z.a), s["default"].use(le.a), s["default"].config.productionTip = !1, s["default"].use(B.a);
      var he = {
         allowedTags: [],
         allowedAttributes: {}
      };
      s["default"].use(W.a, he), s["default"].$cookies.config("30d", "/", ".bizfluenceapp.com"), console.log("Using ".concat("production", " Cookies")), s["default"].$cookies.config("30d", "/", ".bizfluenceapp.com"), console.log = function () {}, console.log("Using ".concat("production", " Cookies")), s["default"].use(D.a), s["default"].use(E.a), s["default"].component("v-otp-input", z.a);
      var ve = function () {
         var e = Object(r["a"])(regeneratorRuntime.mark((function e() {
            var t;
            return regeneratorRuntime.wrap((function (e) {
               while (1) switch (e.prev = e.next) {
                  case 0:
                     if (t = s["default"].$cookies.isKey("authToken") ? s["default"].$cookies.get("authToken") : "", console.log("Auth load"), !t) {
                        e.next = 13;
                        break
                     }
                     if (!Object(Y["d"])(t)) {
                        e.next = 6;
                        break
                     }
                     return L["a"].dispatch("auth/logout"), e.abrupt("return");
                  case 6:
                     return L["a"].dispatch("auth/storeAuthToken", t), s["default"].use(Object(V["a"])(L["a"], t)), e.next = 10, L["a"].dispatch("profile/fetchProfile");
                  case 10:
                     L["a"].dispatch("auth/login"), e.next = 14;
                     break;
                  case 13:
                     return e.abrupt("return");
                  case 14:
                  case "end":
                     return e.stop()
               }
            }), e)
         })));
         return function () {
            return e.apply(this, arguments)
         }
      }();
      s["default"].prototype.$pointValue = "A", s["default"].prototype.$errorModalData = {}, s["default"].prototype.$toastData = {}, s["default"].prototype.$eventBus = H["a"], ve().then((function () {
         new s["default"]({
            router: F["a"],
            store: L["a"],
            render: function (e) {
               return e(T)
            }
         }).$mount("#app")
      }))
   },
   5742: function (e, t, n) {
      e.exports = n.p + "img/img-sec-3.c6f811c1.gif"
   },
   "580f": function (e, t, n) {
      "use strict";
      n.r(t);
      var r = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("div", {
               staticClass: "ui-landing"
            }, [n("div", {
               staticClass: "how-it-works ui-flex-col"
            }, [n("navbar", {
               on: {
                  signup: function (t) {
                     return e.$router.push({
                        path: "/signup"
                     })
                  },
                  signin: function (t) {
                     return e.$router.push({
                        path: "/login"
                     })
                  }
               }
            }), n("section", {
               staticClass: "section__inner section-1"
            }, [n("div", {
               staticClass: "section__inner__content"
            }, [n("div", {
               staticClass: "sec-image"
            }, [n("img", {
               attrs: {
                  src: e.img1
               }
            })]), e._m(0), n("div", {
               staticClass: "sec-content-2"
            }, [n("button", {
               staticClass: "ui-btn",
               on: {
                  click: function (t) {
                     return e.$emit("signup")
                  }
               }
            }, [e._v("Start Now")])])])]), n("section", {
               staticClass: "section__inner section-2"
            }, [n("div", {
               staticClass: "section__inner__content"
            }, [e._m(1), n("div", {
               staticClass: "sec-content-2"
            }, [n("p", [e._v("Easily reach your audience.")]), n("p", [e._v("Filter your networks by language and geographic location.")]), n("p", [e._v("Live chats for each network audience.")]), n("button", {
               staticClass: "ui-btn",
               on: {
                  click: function (t) {
                     return e.$emit("signup")
                  }
               }
            }, [e._v("Start Connecting")])]), n("div", {
               staticClass: "sec-image"
            }, [n("video", {
               staticClass: "vid-sec2",
               attrs: {
                  autoPlay: "",
                  muted: "",
                  loop: ""
               },
               domProps: {
                  muted: !0
               }
            }, [n("source", {
               attrs: {
                  src: e.img2,
                  type: "video/mp4"
               }
            }), e._v(" Not Supported ")])])])]), n("section", {
               staticClass: "section__inner section-3"
            }, [n("div", {
               staticClass: "section__inner__content"
            }, [n("h1", [e._v("Interact And Earn")]), n("div", {
               staticClass: "flex-content"
            }, [n("div", {
               staticClass: "recent-data"
            }, [n("img", {
               attrs: {
                  src: e.img3
               }
            })]), n("p", [e._v("Start engaging with your networks and watch your Biz Points stack up.")])]), n("p", [e._v("You’ll receive Biz Points for sharing links, inviting new users, commenting, posting and much more. Biz Points are redeemable for a variety of rewards including Bizfluence wearables and merch.")]), n("button", {
               staticClass: "ui-btn",
               on: {
                  click: function (t) {
                     return e.$emit("signup")
                  }
               }
            }, [e._v("Start Earning")])])]), n("section", {
               staticClass: "section__inner section-4"
            }, [n("div", {
               staticClass: "section__inner__content"
            }, [e._m(2), n("div", {
               staticClass: "sec-content-2"
            }, [n("button", {
               staticClass: "ui-btn",
               on: {
                  click: function (t) {
                     return e.$emit("signup")
                  }
               }
            }, [e._v("Start Connecting")])]), n("div", {
               staticClass: "sec-image"
            }, [n("video", {
               staticClass: "vid-sec4",
               attrs: {
                  autoPlay: "",
                  muted: "",
                  loop: ""
               },
               domProps: {
                  muted: !0
               }
            }, [n("source", {
               attrs: {
                  src: e.img4,
                  type: "video/mp4"
               }
            }), e._v(" Not Supported ")])])])]), n("section", {
               staticClass: "section__inner section-5"
            }, [n("div", {
               staticClass: "section__inner__content"
            }, [n("div", {
               staticClass: "sec-content-1"
            }), n("div", {
               staticClass: "sec-content-2"
            }, [e._m(3), n("p", [e._v(" Bizfluence has aggressive policies against scammers and spammers. Easily block users so you can’t see them and they can’t see you. All profile transactions are verified and bots are not tolerated. Features like Request To Chat help keep you safe. ")]), n("button", {
               staticClass: "ui-btn",
               on: {
                  click: function (t) {
                     return e.$emit("signup")
                  }
               }
            }, [e._v("Get Started")])])])])], 1), n("SectionFooter")], 1)
         },
         s = [function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("div", {
               staticClass: "sec-content-1"
            }, [n("div", {
               staticClass: "step-row"
            }, [n("span", {
               staticClass: "step-row__num"
            }, [e._v("1")]), e._v("Sign Up")]), n("div", {
               staticClass: "step-row"
            }, [n("span", {
               staticClass: "step-row__num"
            }, [e._v("2")]), e._v("Complete Your Profile")]), n("div", {
               staticClass: "step-row"
            }, [n("span", {
               staticClass: "step-row__num"
            }, [e._v("3")]), e._v("Answer Some Questions")]), n("div", {
               staticClass: "step-row"
            }, [n("span", {
               staticClass: "step-row__num"
            }, [e._v("4")]), e._v("Explore Hubs")])])
         }, function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("div", {
               staticClass: "sec-content-1"
            }, [n("h1", [e._v("Hub "), n("br"), e._v("Features")]), n("p", [e._v("Build your own content feed with the hubs that pertain to your business.")])])
         }, function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("div", {
               staticClass: "sec-content-1"
            }, [n("h1", [e._v("Customize"), n("br"), e._v(" Your Experience")]), n("p", [e._v("Manage notifications, control how often you’re notified, and select your preference for light or dark mode. Plus, you’ll also have access to our desktop version at "), n("a", {
               attrs: {
                  href: "bizfluenceapp.com",
                  target: "_blank"
               }
            }, [e._v("bizfluenceapp.com")])])])
         }, function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("h1", [e._v("Worry-Free"), n("br"), e._v(" Networking")])
         }],
         o = n("0e56"),
         i = n("b8d0"),
         a = n("d302"),
         c = n.n(a),
         u = n("73d0"),
         l = n.n(u),
         d = n("5742"),
         p = n.n(d),
         f = n("2db6"),
         m = n.n(f),
         g = {
            name: "HowItWorks",
            components: {
               Navbar: i["a"],
               SectionFooter: o["a"]
            },
            data: function () {
               return {
                  img1: c.a,
                  img2: l.a,
                  img3: p.a,
                  img4: m.a
               }
            }
         },
         h = g,
         v = (n("dacc"), n("2877")),
         b = Object(v["a"])(h, r, s, !1, null, "7d6bad80", null);
      t["default"] = b.exports
   },
   "5a0e": function (e, t, n) {
      "use strict";
      n("2144")
   },
   "5c4c": function (e, t, n) {},
   "5c64": function (e, t, n) {
      "use strict";
      n("d32a")
   },
   "5ca0": function (e, t, n) {
      "use strict";
      n("502a")
   },
   "5e04": function (e, t, n) {
      "use strict";
      n("5321")
   },
   6: function (e, t) {},
   6339: function (e, t, n) {},
   "643f": function (e, t, n) {},
   6477: function (e, t, n) {
      "use strict";
      n("a49b")
   },
   "664c": function (e, t, n) {
      e.exports = n.p + "img/send-icon.26b13345.svg"
   },
   6705: function (e, t, n) {
      "use strict";
      n("f4d9")
   },
   6857: function (e, t, n) {
      "use strict";
      n("2de5")
   },
   "68d3": function (e, t, n) {
      "use strict";
      n("7157")
   },
   "69a9": function (e, t, n) {},
   "69e6": function (e, t, n) {},
   "6b0a": function (e, t, n) {},
   "6b48": function (e, t, n) {
      e.exports = n.p + "img/power-icon.9b0662c9.svg"
   },
   "6bf6": function (e, t, n) {
      "use strict";
      n("32aa")
   },
   "6c7a": function (e, t, n) {
      "use strict";
      n("1ee9")
   },
   "6d53": function (e, t, n) {},
   "6f39": function (e, t, n) {
      "use strict";
      n("4324")
   },
   7157: function (e, t, n) {},
   7299: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = function () {
            var e, t = this,
               n = t.$createElement,
               r = t._self._c || n;
            return t.mount ? r("b-modal", {
               staticClass: "base-modal",
               attrs: {
                  id: t.id,
                  size: t.size,
                  centered: "",
                  scrollable: t.scrollable,
                  "dialog-class": t.modalDialogClass,
                  "content-class": (e = {
                     shortHeight: t.shortHeight,
                     "new-post": t.newPost
                  }, e[t.modalContentClass] = t.modalContentClass, e),
                  "no-close-on-backdrop": t.noCloseOnBackdrop,
                  "body-class": t.modalBodyClass,
                  "footer-class": t.modalFooterClass,
                  "hide-footer": t.hideFooter,
                  "header-class": t.modalHeaderClass,
                  "hide-header": t.hideHeader,
                  "ok-title": t.okTitle
               },
               on: {
                  show: function (e) {
                     return t.$emit("onShow")
                  },
                  hide: t.onHide,
                  ok: function (e) {
                     return t.$emit("ok")
                  },
                  shown: function (e) {
                     return t.$emit("shown")
                  }
               },
               scopedSlots: t._u([{
                  key: "modal-header",
                  fn: function (e) {
                     var n, s = e.close;
                     return [t._t("header", [r("div", {
                        staticClass: "ui-flex ui-align-center"
                     }, [t.showBack ? r("button", {
                        staticClass: "ui-btn ui-btn__back",
                        on: {
                           click: function (e) {
                              return t.$emit("goBack")
                           }
                        }
                     }, [r("span", {
                        staticClass: "icon-ic-arrow-back"
                     })]) : t._e(), r("h5", {
                        staticClass: "ui-model-title"
                     }, [t._v(t._s(t.title))])]), r("button", {
                        staticClass: "ui-btn ui-btn__close",
                        class: (n = {}, n[t.buttonCloseClass] = t.buttonCloseClass, n),
                        on: {
                           click: function (e) {
                              return t.closeModal(s)
                           }
                        }
                     }, [r("span", {
                        staticClass: "icon-ic-modal-close"
                     })])], {
                        close: s
                     })]
                  }
               }, {
                  key: "modal-footer",
                  fn: function (e) {
                     var n = e.close,
                        r = e.ok;
                     return [t._t("footer", null, {
                        save: r,
                        cancel: n
                     })]
                  }
               }], null, !0)
            }, [t._t("body")], 2) : t._e()
         },
         s = [],
         o = {
            name: "BaseModal",
            data: function () {
               return {}
            },
            mounted: function () {},
            props: {
               id: {
                  type: String,
                  required: !0
               },
               size: {
                  type: String,
                  default: "xs"
               },
               title: {
                  type: String
               },
               scrollable: {
                  type: Boolean
               },
               noCaret: {
                  type: Boolean
               },
               shortHeight: {
                  type: Boolean,
                  default: !1
               },
               showBack: {
                  type: Boolean,
                  default: !1
               },
               mount: {
                  type: Boolean,
                  default: !1
               },
               newPost: {
                  type: Boolean,
                  default: !1
               },
               noCloseOnBackdrop: {
                  type: Boolean,
                  default: !0
               },
               modalBodyClass: {
                  type: String
               },
               modalFooterClass: {
                  type: String
               },
               modalHeaderClass: {
                  type: String
               },
               modalContentClass: {
                  type: String
               },
               modalDialogClass: {
                  type: String
               },
               hideFooter: {
                  type: Boolean,
                  default: !1
               },
               hideHeader: {
                  type: Boolean,
                  default: !1
               },
               buttonCloseClass: {
                  type: String
               },
               okTitle: {
                  type: String
               }
            },
            emits: ["onClose", "onShow", "hide", "ok", "shown"],
            methods: {
               closeModal: function (e) {
                  this.$emit("onClose", e)
               },
               onHide: function (e) {
                  this.$emit("hide", e)
               }
            }
         },
         i = o,
         a = (n("6f39"), n("2877")),
         c = Object(a["a"])(i, r, s, !1, null, null, null);
      t["default"] = c.exports
   },
   "73a1": function (e, t, n) {
      "use strict";
      var r = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("div", [e.conversation.request ? n("div", {
               staticClass: "request-wrapper d-flex flex-column align-items-center p-3"
            }, [e.conversation.lastMessage.userId === e.$store.getters["profile/getProfileId"] ? [n("p", {
               staticClass: "mb-3"
            }, [e._v("This is a conversation request, " + e._s(e.conversation.user.title) + " must accept it to continue this conversation.")])] : [n("p", {
               staticClass: "mb-3"
            }, [e._v("This is a conversation request, accept to start chatting with " + e._s(e.conversation.user.title))]), n("div", {
               staticClass: "d-flex flex-row"
            }, [n("button", {
               staticClass: "ui-btn mx-2",
               on: {
                  click: e.acceptRequest
               }
            }, [e._v("Accept")]), n("button", {
               staticClass: "ui-btn__outline mx-2",
               on: {
                  click: e.rejectRequest
               }
            }, [e._v("Reject")])])]], 2) : n("div", {
               staticClass: "d-flex flex-column"
            }, [e.parentMessage ? n("div", {
               staticClass: "reply-wrapper"
            }, [n("div", {
               staticClass: "reply-message"
            }, [n("span", {
               staticClass: "reply-author"
            }, [e._v(e._s(e.parentMessage.my ? "You" : e.parentMessage.user.title))]), n("parse-chat", {
               attrs: {
                  content: e.parentMessage.content,
                  linkified: ""
               }
            })], 1), n("div", {
               staticClass: "remove-parent"
            }, [n("span", {
               staticClass: "icon-ic-modal-close",
               on: {
                  click: e.clearParentMessage
               }
            })])]) : e._e(), e.files.length ? n("div", {
               staticClass: "attachments-wrapper"
            }, e._l(e.files, (function (t, r) {
               return n("div", {
                  key: t.id,
                  staticClass: "upload-img__box"
               }, [t.uploading ? n("div", {
                  staticClass: "upload-img__img-loading"
               }, [n("b-skeleton", {
                  staticClass: "upload-img__img-skeleton"
               }), n("b-progress", {
                  staticClass: "upload-img__img-progress",
                  attrs: {
                     "show-progress": "",
                     solid: "",
                     max: "100"
                  }
               }, [n("b-progress-bar", {
                  staticClass: "upload-img__img-progress-bar",
                  attrs: {
                     value: t.progress
                  }
               }, [n("span", [n("strong", [e._v(" " + e._s(t.progress) + "% ")])])])], 1)], 1) : ["video" === e.fileType(t.file) ? n("div", {
                  staticClass: "video-container"
               }, [n("b-embed", {
                  key: t.file.id,
                  staticClass: "upload-img__img p-0",
                  attrs: {
                     type: "video",
                     controls: "",
                     poster: e.videoPoster(t.file),
                     aspect: "0"
                  }
               }, [n("source", {
                  key: t.file.id,
                  attrs: {
                     src: t.file.url
                  }
               })]), n("button", {
                  staticClass: "ui-btn ui-btn__rounded gallery-btn-delete",
                  on: {
                     click: function (t) {
                        return t.preventDefault(), e.removeImage(r)
                     }
                  }
               }, [n("span", {
                  staticClass: "icon-close"
               })])], 1) : "image" === e.fileType(t.file) ? n("div", {
                  staticClass: "upload-img__img",
                  style: {
                     "background-image": "url('" + t.file.url + "')"
                  }
               }, [n("button", {
                  staticClass: "ui-btn ui-btn__rounded gallery-btn-delete",
                  on: {
                     click: function (t) {
                        return t.preventDefault(), e.removeImage(r)
                     }
                  }
               }, [n("span", {
                  staticClass: "icon-close"
               })])]) : "doc" === e.fileType(t.file) ? n("div", {
                  staticClass: "upload-img__img"
               }, [e._v(" " + e._s(t.file.name) + " "), n("button", {
                  staticClass: "ui-btn ui-btn__rounded gallery-btn-delete",
                  on: {
                     click: function (t) {
                        return t.preventDefault(), e.removeImage(r)
                     }
                  }
               }, [n("span", {
                  staticClass: "icon-close"
               })])]) : e._e()]], 2)
            })), 0) : e._e(), n("div", {
               staticClass: "chat-new ui-flex"
            }, [n("div", {
               staticClass: "chat-new__actions ui-flex"
            }, [n("file-upload", {
               ref: "upload",
               staticClass: "upload-img__new upload__new--img",
               attrs: {
                  for: "img-upload-" + e.conversation._id,
                  "input-id": "img-upload-" + e.conversation._id,
                  extensions: e.attachmentParams.extensions,
                  accept: e.attachmentParams.accept,
                  multiple: e.attachmentParams.multiple,
                  directory: e.attachmentParams.directory,
                  thread: e.attachmentParams.thread,
                  drop: e.attachmentParams.drop,
                  "drop-directory": e.attachmentParams.dropDirectory,
                  "add-index": e.attachmentParams.addIndex
               },
               on: {
                  "input-file": e.inputFile,
                  "input-filter": e.inputFilter
               }
            }, [n("base-icon-button", {
               attrs: {
                  icon: e.attachmentIcon,
                  width: 16,
                  isImg: ""
               }
            })], 1), e.audioNote ? n("div", {
               staticClass: "remove-audio-note",
               on: {
                  click: e.clearAudioNote
               }
            }, [n("base-icon-button", {
               attrs: {
                  icon: e.deleteIcon,
                  width: 16,
                  isImg: ""
               }
            })], 1) : n("audio-recorder", {
               ref: "audioRecorder",
               attrs: {
                  filename: "Recording",
                  format: "wav",
                  time: 5,
                  "bit-rate": 192
               },
               on: {
                  toggleRecord: e.onRecorderToggle,
                  recordingReady: e.onRecordingReady
               }
            })], 1), n("div", {
               staticClass: "ui-flex ui-flex-grow chat-new__input-wr ui-relative"
            }, [e.isRecording || e.audioNote ? n("div", {
               staticClass: "ui-flex-grow ui-relative"
            }, [e.audioNote ? n("div", {
               staticClass: "ui-flex ui-flex-grow align-items-center"
            }, [n("audio-player", {
               staticClass: "ui-flex-grow compose-min-width",
               attrs: {
                  record: e.audioNote
               }
            })], 1) : n("div", {
               staticClass: "ui-flex-grow compose-min-width chat-new__input ui-relative"
            }, [e._v(" " + e._s(e.recordedTime) + " ")])]) : n("textarea", {
               directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: e.message,
                  expression: "message"
               }],
               ref: "chatInput",
               staticClass: "ui-flex-grow chat-new__input compose-min-width ui-relative",
               style: e.computedStyles,
               attrs: {
                  placeholder: "Write a message",
                  rows: "1"
               },
               domProps: {
                  value: e.message
               },
               on: {
                  input: [function (t) {
                     t.target.composing || (e.message = t.target.value)
                  }, e.handleInput],
                  keydown: function (t) {
                     return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : (t.preventDefault(), t.ctrlKey || t.shiftKey || t.altKey || t.metaKey ? null : e.sendMessage(t))
                  },
                  keyup: function (t) {
                     return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : t.shiftKey ? (t.preventDefault(), e.handleShiftEnter(t)) : null
                  },
                  paste: e.onPaste
               }
            }), n("button", {
               staticClass: "ui-btn chat-new__send",
               attrs: {
                  disabled: !e.message.length && !e.audioNote && !e.isRecording && !e.media.length || e.isSending
               },
               on: {
                  click: e.sendMessage
               }
            }, [n("img", {
               attrs: {
                  src: e.sendIcon,
                  alt: "Send",
                  width: "18",
                  height: "18"
               }
            })])])])]), n("error-modal", {
               ref: "showErrorModal",
               attrs: {
                  id: "error-modal-chat-" + e.conversation._id,
                  modalMessage: e.modalMessage,
                  modalMessageType: e.modalMessageType,
                  generalError: e.generalError
               },
               on: {
                  uploadAnotherFile: e.uploadFile
               }
            })], 1)
         },
         s = [],
         o = n("1da1"),
         i = (n("2b3d"), n("d3b7"), n("3ca3"), n("ddb0"), n("b0c0"), n("a434"), n("96cf"), n("2ef0")),
         a = n("f367"),
         c = n("1043"),
         u = n.n(c),
         l = n("664c"),
         d = n.n(l),
         p = n("6b48"),
         f = n.n(p),
         m = n("f69e"),
         g = n.n(m),
         h = n("8019"),
         v = n.n(h),
         b = n("708e"),
         w = n("17ff"),
         k = n("37b9"),
         _ = n("c382"),
         C = {
            name: "ChatNew",
            components: {
               BaseIconButton: a["default"],
               FileUpload: v.a,
               ErrorModal: w["default"],
               AudioRecorder: k["a"],
               AudioPlayer: _["a"]
            },
            props: {
               placeholder: String,
               conversation: Object,
               parentMessage: Object,
               clearParentMessage: Function
            },
            data: function () {
               return {
                  attachmentIcon: u.a,
                  powerIcon: f.a,
                  deleteIcon: g.a,
                  sendIcon: d.a,
                  isSending: !1,
                  typing: !1,
                  skipTypingNotification: !1,
                  message: "",
                  height: "auto",
                  modalMessageType: "",
                  generalError: !1,
                  minSize: 1024,
                  modalMessage: "",
                  files: [],
                  media: [],
                  replacedData: [],
                  uploading: !1,
                  attachmentParams: {
                     extensions: "gif,jpg,jpeg,png,webp,mp4,mkv,avi,.pdf,.doc,.docx",
                     accept: "image/png,image/gif,image/jpeg,image/webp, video/mp4,video/x-m4v,video/*,.pdf,.doc,.docx",
                     minSize: 1024,
                     size: 209715200,
                     videoSize: 1048576e3,
                     multiple: !1,
                     directory: !1,
                     drop: !1,
                     dropDirectory: !1,
                     createDirectory: !1,
                     addIndex: !1,
                     thread: 3
                  },
                  isRecording: !1,
                  audioNote: null
               }
            },
            filters: {
               truncate: function (e, t) {
                  return e.substring(0, Math.min(t, e.length)) + (t < e.length ? "..." : "")
               }
            },
            computed: {
               isOpen: function () {
                  return this.conversation.isOpen
               },
               computedStyles: function () {
                  return {
                     height: this.height
                  }
               },
               recordedTime: function () {
                  return this.$refs.audioRecorder.recordedTime
               }
            },
            watch: {
               isOpen: function (e) {
                  e && this.$nextTick(this.focusOnInput)
               },
               parentMessage: function (e) {
                  e && this.$nextTick(this.focusOnInput)
               },
               message: function () {
                  this.$nextTick(this.resize)
               }
            },
            methods: {
               resize: function () {
                  var e = this,
                     t = this.$refs.chatInput;
                  this.height = "auto", this.$nextTick((function () {
                     var n = t.scrollHeight,
                        r = n + "px";
                     e.height = "".concat(r)
                  }))
               },
               handleShiftEnter: function () {
                  this.message += "\n"
               },
               sendMessage: function () {
                  var e = this;
                  return Object(o["a"])(regeneratorRuntime.mark((function t() {
                     var n, r, s, o, i, a;
                     return regeneratorRuntime.wrap((function (t) {
                        while (1) switch (t.prev = t.next) {
                           case 0:
                              if (n = e.message, r = e.media, s = e.parentMessage, e.isSending = !0, t.prev = 2, e.isRecording && (e.$refs.audioRecorder.stopRecorder(), e.audioNote = e.$refs.audioRecorder.recordList[0]), !e.audioNote) {
                                 t.next = 10;
                                 break
                              }
                              return t.next = 7, e.$store.dispatch("profile/uploadImage", {
                                 newFile: e.audioNote.blob
                              });
                           case 7:
                              o = t.sent, r.push({
                                 file: o,
                                 order: 1
                              }), n = "Audio Note";
                           case 10:
                              if (!e.conversation.isNew) {
                                 t.next = 20;
                                 break
                              }
                              return t.next = 13, e.$store.dispatch("chat/startConversation", {
                                 message: n,
                                 media: r,
                                 profileId: e.conversation.user.id,
                                 businessProfile: !1
                              });
                           case 13:
                              return i = t.sent, i.messages = [], i.isOpen = !0, t.next = 18, e.$store.dispatch("chat/replaceFloatingConversationByWindowId", {
                                 conversation: i,
                                 windowId: e.conversation.windowId
                              });
                           case 18:
                              t.next = 25;
                              break;
                           case 20:
                              a = e.conversation._id, e.$store.dispatch("chat/sendMessage", {
                                 conversationId: a,
                                 message: n,
                                 media: r,
                                 parentMessage: s ? s._id : null
                              }), e.typing = !1, e.skipTypingNotification = !0, e.$store.dispatch("chat/notifyTyping", {
                                 conversationId: a,
                                 isTyping: !1
                              });
                           case 25:
                              e.message = "", e.clearParentMessage(), e.clearAudioNote(), e.resetMedia(), t.next = 35;
                              break;
                           case 31:
                              throw t.prev = 31, t.t0 = t["catch"](2), console.log(t.t0.response), t.t0;
                           case 35:
                              e.isSending = !1;
                           case 36:
                           case "end":
                              return t.stop()
                        }
                     }), t, null, [
                        [2, 31]
                     ])
                  })))()
               },
               acceptRequest: function () {
                  var e = this;
                  return Object(o["a"])(regeneratorRuntime.mark((function t() {
                     var n;
                     return regeneratorRuntime.wrap((function (t) {
                        while (1) switch (t.prev = t.next) {
                           case 0:
                              return n = e.conversation._id, t.next = 3, e.$store.dispatch("chat/manageConversationRequest", {
                                 conversationId: n,
                                 type: "accept"
                              });
                           case 3:
                           case "end":
                              return t.stop()
                        }
                     }), t)
                  })))()
               },
               rejectRequest: function () {
                  var e = this;
                  return Object(o["a"])(regeneratorRuntime.mark((function t() {
                     var n;
                     return regeneratorRuntime.wrap((function (t) {
                        while (1) switch (t.prev = t.next) {
                           case 0:
                              return n = e.conversation._id, t.next = 3, e.$store.dispatch("chat/manageConversationRequest", {
                                 conversationId: n,
                                 type: "reject"
                              });
                           case 3:
                           case "end":
                              return t.stop()
                        }
                     }), t)
                  })))()
               },
               focusOnInput: function () {
                  this.$refs.chatInput.focus()
               },
               handleInput: Object(i["debounce"])((function () {
                  if (this.skipTypingNotification) this.skipTypingNotification = !1;
                  else if (!this.conversation.isNew) {
                     var e = this.conversation._id;
                     this.typing = !this.typing, this.$store.dispatch("chat/notifyTyping", {
                        conversationId: e,
                        isTyping: this.typing
                     })
                  }
               }), 3e3, {
                  leading: !0
               }),
               uploadFile: function () {
                  this.$refs.upload[0].click()
               },
               fileType: function (e) {
                  var t = e.file.type;
                  return "image/" === t.substr(0, 6) ? "image" : "video/" === t.substr(0, 6) ? "video" : "doc"
               },
               inputFile: function (e, t) {
                  var n = this;
                  return Object(o["a"])(regeneratorRuntime.mark((function r() {
                     var s, o, i, a, c, u, l, d, p;
                     return regeneratorRuntime.wrap((function (r) {
                        while (1) switch (r.prev = r.next) {
                           case 0:
                              if (!e || t) {
                                 r.next = 30;
                                 break
                              }
                              if (n.uploading || (n.uploading = !0), !(e.size >= 0 && e.size < n.attachmentParams.videoSize)) {
                                 r.next = 30;
                                 break
                              }
                              return s = n.media.length + 1, o = n.files.push({
                                 file: null,
                                 order: s,
                                 uploading: !0,
                                 progress: 0
                              }), i = 500, a = setInterval((function () {
                                 n.files[o - 1].progress < 90 ? n.files[o - 1].progress += 10 : n.files[o - 1].progress < 99 && (n.files[o - 1].progress += 3, i = 1e3)
                              }), i), n.media.push({
                                 file: null,
                                 order: s
                              }), r.next = 10, n.$store.dispatch("profile/uploadImage", {
                                 newFile: e
                              });
                           case 10:
                              if (c = r.sent, u = e.file ? e : {
                                    file: e
                                 }, l = n.fileType(u), u.blob = "", d = window.URL || window.webkitURL, d && (u.blob = d.createObjectURL(u.file)), u.url = u.blob, "video" === l) {
                                 r.next = 24;
                                 break
                              }
                              n.media[o - 1].file = c, n.files[o - 1].file = u, n.files[o - 1].progress = 100, setTimeout((function () {
                                 n.files[o - 1].uploading = !1, clearInterval(a)
                              }), 1e3), r.next = 29;
                              break;
                           case 24:
                              return r.next = 26, Object(b["a"])(u.blob, {
                                 quality: .6
                              });
                           case 26:
                              p = r.sent, u.poster = p[1].blob, setTimeout((function () {
                                 n.media[o - 1].file = c, n.files[o - 1].file = u, n.files[o - 1].progress = 100, setTimeout((function () {
                                    n.files[o - 1].uploading = !1, clearInterval(a)
                                 }), 1e3)
                              }), 2e3);
                           case 29:
                              n.uploading && (n.uploading = !1);
                           case 30:
                           case "end":
                              return r.stop()
                        }
                     }), r)
                  })))()
               },
               inputFilter: function (e, t, n) {
                  var r = this;
                  return Object(o["a"])(regeneratorRuntime.mark((function s() {
                     return regeneratorRuntime.wrap((function (s) {
                        while (1) switch (s.prev = s.next) {
                           case 0:
                              if (!e || t) {
                                 s.next = 11;
                                 break
                              }
                              if (!(e.size >= 0 && e.size > r.attachmentParams.videoSize)) {
                                 s.next = 6;
                                 break
                              }
                              return r.modalMessageType = "error", r.modalMessage = "Upload is too large, it can't be more than 1GB", r.$nextTick((function () {
                                 r.$refs.showErrorModal.onShow(), r.$nextTick((function () {
                                    r.$bvModal.show("error-modal")
                                 }))
                              })), s.abrupt("return", n());
                           case 6:
                              if (r.$refs.showErrorModal.onHide(), !/(\/|^)(Thumbs\.db|desktop\.ini|\..+)$/.test(e.name)) {
                                 s.next = 9;
                                 break
                              }
                              return s.abrupt("return", n());
                           case 9:
                              if (!/\.(php5?|html?|jsx?)$/i.test(e.name)) {
                                 s.next = 11;
                                 break
                              }
                              return s.abrupt("return", n());
                           case 11:
                           case "end":
                              return s.stop()
                        }
                     }), s)
                  })))()
               },
               onPaste: function (e) {
                  var t = this;
                  return Object(o["a"])(regeneratorRuntime.mark((function n() {
                     var r, s, o, i;
                     return regeneratorRuntime.wrap((function (n) {
                        while (1) switch (n.prev = n.next) {
                           case 0:
                              s = e.clipboardData.items[0], "file" === s.kind ? (e.preventDefault(), o = s.getAsFile()) : "file" === (null === (r = e.clipboardData.items[1]) || void 0 === r ? void 0 : r.kind) && (i = e.clipboardData.items[1], e.preventDefault(), o = i.getAsFile()), o && t.inputFile(o, null);
                           case 3:
                           case "end":
                              return n.stop()
                        }
                     }), n)
                  })))()
               },
               removeImage: function (e) {
                  this.files.splice(e, 1), this.media.splice(e, 1)
               },
               resetMedia: function () {
                  this.files = [], this.media = []
               },
               onRecorderToggle: function () {
                  this.isRecording = !this.isRecording
               },
               onRecordingReady: function (e) {
                  this.audioNote = e
               },
               clearAudioNote: function () {
                  this.audioNote = null
               }
            }
         },
         y = C,
         x = (n("49d0"), n("2877")),
         P = Object(x["a"])(y, r, s, !1, null, "cc910518", null);
      t["a"] = P.exports
   },
   "73b8": function (e, t, n) {
      "use strict";
      var r = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("div", {
               domProps: {
                  innerHTML: e._s(e.icons[e.name])
               }
            })
         },
         s = [],
         o = {
            props: {
               name: {
                  type: String
               }
            },
            data: function () {
               return {
                  icons: {
                     download: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z"/><path fill="none" d="M0 0h24v24H0z"/></svg>',
                     mic: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
                     pause: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
                     play: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
                     save: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/></svg>',
                     stop: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 6h12v12H6z"/></svg>',
                     volume: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/><path d="M0 0h24v24H0z" fill="none"/></svg>'
                  }
               }
            }
         },
         i = o,
         a = n("2877"),
         c = Object(a["a"])(i, r, s, !1, null, null, null);
      t["a"] = c.exports
   },
   "73d0": function (e, t, n) {
      e.exports = n.p + "media/vid-hubs-scrolling.b104c281.mp4"
   },
   7468: function (e, t, n) {
      "use strict";
      n("41bf")
   },
   "764a": function (e, t, n) {
      e.exports = n.p + "img/default-network-graphic.49dafe2c.svg"
   },
   7775: function (e, t, n) {
      e.exports = n.p + "img/ic-btn-edit.5a0a468b.svg"
   },
   "77f0": function (e, t, n) {
      e.exports = n.p + "img/ic-onboard-profile.8fcbc5a7.svg"
   },
   "7a2d": function (e, t, n) {
      "use strict";
      n("6339")
   },
   "7bcc": function (e, t, n) {},
   "7c45": function (e, t, n) {
      "use strict";
      var r = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("div", [n("div", {
               ref: "image",
               class: e.isLoaded ? "ui-block " + e.imageClass : "ui-hide",
               style: {
                  height: e.height,
                  "max-height": "578px"
               }
            }), n("blur-hash-canvas", {
               class: e.isLoaded ? "ui-hide" : "ui-block " + e.imageClass,
               attrs: {
                  hash: e.blurhash ? e.blurhash : "LdHfL}oJR$WBKnfi%3ofT0kCM{ay",
                  transitionDuration: "500"
               }
            })], 1)
         },
         s = [],
         o = (n("a9e3"), {
            components: {},
            props: {
               src: {
                  type: Object,
                  required: !0
               },
               blurhash: {
                  type: String,
                  required: !1,
                  default: "LdHfL}oJR$WBKnfi%3ofT0kCM{ay"
               },
               imageClass: {
                  type: String,
                  required: !1,
                  default: null
               },
               height: {
                  type: Number,
                  required: !1
               }
            },
            data: function () {
               return {
                  isLoaded: !1
               }
            },
            mounted: function () {
               var e = this,
                  t = document.createElement("img");
               t.src = this.src.url, t.addEventListener("load", (function () {
                  e.isLoaded = !0
               })), t = "", this.$refs.image.style.backgroundImage = "url(".concat(this.src.url, ")"), this.height && (this.$refs.image.style.height = "".concat(this.height, "px"))
            }
         }),
         i = o,
         a = n("2877"),
         c = Object(a["a"])(i, r, s, !1, null, null, null);
      t["a"] = c.exports
   },
   "7cdb": function (e, t, n) {},
   "7d7b": function (e, t, n) {
      e.exports = n.p + "img/active-status-icon.c0bfc3c9.svg"
   },
   "7db5": function (e, t, n) {
      "use strict";
      var r = n("5530"),
         s = (n("d3b7"), n("caad"), n("2532"), n("7db0"), n("99af"), n("bc3a")),
         o = n.n(s),
         i = n("4360"),
         a = n("986e"),
         c = [{
            path: "/admin/user/{id}",
            method: "delete",
            message: "deleting this user"
         }, {
            path: "/link-preview",
            method: "post",
            message: "getting a link preview for this link",
            hide: !1
         }, {
            path: "/users/blocks",
            method: "get",
            message: "getting the users you've blocked"
         }, {
            path: "/users/blocks/{id}",
            method: "delete",
            message: "unblocking this user"
         }, {
            path: "/users/follow",
            method: "post",
            message: "following this user"
         }, {
            path: "/users/follow/{id}",
            method: "delete",
            message: "unfollowing this user"
         }, {
            path: "/users/follow",
            method: "get",
            message: "getting the users you've followed"
         }, {
            path: "/users/block-profile",
            method: "post",
            message: "blocking this user"
         }, {
            path: "/admin/suspended",
            method: "get",
            message: "retrieving the suspended users"
         }, {
            path: "/admin/user/{id}/unsuspend",
            method: "put",
            message: "unsuspending this user"
         }, {
            path: "/moderator/user/{id}/unsuspend",
            method: "put",
            message: "unsuspending this user"
         }, {
            path: "/moderator/user/{id}/suspend",
            method: "put",
            message: "suspending this user"
         }, {
            path: "/admin/user/{id}/suspend",
            method: "put",
            message: "suspending this user"
         }, {
            path: "/admin/user/{id}/deactivate",
            method: "put",
            message: "deactivating this user"
         }, {
            path: "/admin/user/{id}/activate",
            method: "put",
            message: "activating this user"
         }, {
            path: "/admin/deactivated",
            method: "get",
            message: "deactivating this user"
         }, {
            path: "/moderator/user/{id}/deactivate",
            method: "put",
            message: "deactivating this user"
         }, {
            path: "/moderator/user/{id}/activate",
            method: "put",
            message: "activating this user"
         }, {
            path: "/profiles/verify/{id}/verify",
            method: "put",
            message: "verifying this profile"
         }, {
            path: "/profiles/verify/{id}/unverify",
            method: "put",
            message: "unverifying this profile"
         }, {
            path: "/profiles/slugs",
            method: "post",
            message: "changing your profile handle"
         }, {
            path: "/profiles/{id}",
            method: "put",
            message: "updating your profile"
         }, {
            path: "/profiles/{id}/followers",
            method: "get",
            message: "getting this profile's followers"
         }, {
            path: "/profiles/{id}/following",
            method: "get",
            message: "getting who this profile is following"
         }, {
            path: "/profiles/followers/{id}",
            method: "delete",
            message: "deleting your profile"
         }, {
            path: "/v2/profiles/search",
            method: "get",
            message: "getting profile search results"
         }, {
            path: "/profiles/personal",
            method: "get",
            message: "grtting your profile"
         }, {
            path: "/profiles/personal/banner",
            method: "put",
            message: "updating your profile banner"
         }, {
            path: "/profiles/personal/picture",
            method: "put",
            message: "updating your profile picture"
         }, {
            path: "/profiles/personal",
            method: "put",
            message: "updating your profile"
         }, {
            path: "/profiles/abouts",
            method: "post",
            message: "adding this about section"
         }, {
            path: "/profiles/abouts/{id}",
            method: "put",
            message: "updating this about section"
         }, {
            path: "/profiles/abouts/{id}",
            method: "delete",
            message: "deleting this about section"
         }, {
            path: "/profiles/abouts/order",
            method: "post",
            message: "updating your about list order"
         }, {
            path: "/profiles/works",
            method: "post",
            message: "adding work experience"
         }, {
            path: "/profiles/works/{id}",
            method: "put",
            message: "updating this work experience"
         }, {
            path: "/profiles/works/{id}",
            method: "delete",
            message: "deleting this work experience"
         }, {
            path: "/profiles/projects",
            method: "post",
            message: "adding this project"
         }, {
            path: "/profiles/projects/{id}",
            method: "put",
            message: "updating this project"
         }, {
            path: "/profiles/projects/{id}",
            method: "delete",
            message: "deleting this project"
         }, {
            path: "/profiles/projects/{id}",
            method: "get",
            message: "getting this project"
         }, {
            path: "/profiles/projects/order",
            method: "post",
            message: "updating your projects list order"
         }, {
            path: "/profiles/products",
            method: "post",
            message: "adding this product"
         }, {
            path: "/profiles/products/{id}",
            method: "delete",
            message: "deleting this product"
         }, {
            path: "/profiles/products/{id}",
            method: "put",
            message: "updating this product"
         }, {
            path: "/profiles/products/{id}",
            method: "get",
            message: "getting this product"
         }, {
            path: "/profiles/products/order",
            method: "post",
            message: "updating your products list order"
         }, {
            path: "/profiles/services",
            method: "post",
            message: "adding this service"
         }, {
            path: "/profiles/services/{id}",
            method: "put",
            message: "updating this service"
         }, {
            path: "/profiles/services/{id}",
            method: "delete",
            message: "deleting your service"
         }, {
            path: "/profiles/services/{id}",
            method: "get",
            message: "getting this service"
         }, {
            path: "/profiles/services/order",
            method: "post",
            message: "updating your services list"
         }, {
            path: "/profiles/galleries",
            method: "post",
            message: "adding this gallery"
         }, {
            path: "/profiles/galleries/{id}",
            method: "put",
            message: "updating this gallery"
         }, {
            path: "/profiles/galleries/{id}",
            method: "get",
            message: "getting this gallery"
         }, {
            path: "/profiles/galleries/{id}",
            method: "delete",
            message: "deleting this gallery"
         }, {
            path: "/profiles/galleries/order",
            method: "post",
            message: "updating your galleries list order"
         }, {
            path: "/profiles/faqs",
            method: "post",
            message: "adding this faq"
         }, {
            path: "/profiles/faqs/{id}",
            method: "put",
            message: "updating this faq"
         }, {
            path: "/profiles/faqs/{id}",
            method: "delete",
            message: "deleting this faq"
         }, {
            path: "/profiles/faqs/order",
            method: "post",
            message: "updating your faqs list order"
         }, {
            path: "/profiles/educations/{id}",
            method: "delete",
            message: "deleting this education item"
         }, {
            path: "/profiles/educations",
            method: "post",
            message: "adding this education item"
         }, {
            path: "/profiles/educations/{id}",
            method: "put",
            message: "updating this education item"
         }, {
            path: "/user/password/forgot",
            method: "post",
            message: "requesting a new password for your account"
         }, {
            path: "/user/password/reset",
            method: "post",
            message: "resetting your password"
         }, {
            path: "/v2/user/notification-settings",
            method: "put",
            message: "updating your notification settings"
         }, {
            path: "/email/confirm",
            method: "post",
            message: "confirming you email address"
         }, {
            path: "/email/resend-code",
            method: "post",
            message: "sending you a new confirmation code"
         }, {
            path: "/user/notification-settings",
            method: "get",
            message: "getting your notification settings"
         }, {
            path: "/user/global-notifications-settings",
            method: "put",
            message: "updating your notification settings"
         }, {
            path: "/user/global-notifications-settings",
            method: "get",
            message: "getting your notification settings"
         }, {
            path: "/v2//user/notification-arrays",
            method: "put",
            message: "updating your notification settings"
         }, {
            path: "/posts",
            method: "post",
            message: "publishing this post"
         }, {
            path: "/uploads/posts",
            method: "post",
            message: "uploadwith the file uploading"
         }, {
            path: "/posts/{id}/followers",
            method: "post",
            message: "following this post"
         }, {
            path: "/posts/{id}/followers",
            method: "delete",
            message: "unfollowing this post"
         }, {
            path: "/posts/{id}",
            method: "delete",
            message: "deleting this post"
         }, {
            path: "/posts/{id}",
            method: "get",
            message: "getting this post"
         }, {
            path: "/posts/{id}",
            method: "put",
            message: "updating this post"
         }, {
            path: "/admin/posts/{id}",
            method: "put",
            message: "updating this post"
         }, {
            path: "/admin/posts/{id}",
            method: "delete",
            message: "deleting this post"
         }, {
            path: "/posts/search",
            method: "get",
            message: "getting post search results"
         }, {
            path: "/posts/public/{id}",
            method: "get",
            message: "getting this post"
         }, {
            path: "/posts/my",
            method: "get",
            message: "getting your posts"
         }, {
            path: "/posts/upvotes-reactions/{id}",
            method: "get",
            message: "getting this post's upvotes and reactions"
         }, {
            path: "/v2/posts/search",
            method: "get",
            message: "getting post search results"
         }, {
            path: "/posts/{id}/reports",
            method: "post",
            message: "reporting this post"
         }, {
            path: "/posts/{id}/votes",
            method: "post",
            message: "adding your vote"
         }, {
            path: "/posts/{id}/votes",
            method: "delete",
            message: "removing your vote"
         }, {
            path: "/posts/{id}/votes",
            method: "get",
            message: "getting this post's votes"
         }, {
            path: "/posts/{id}/reactions",
            method: "post",
            message: "adding your reaction"
         }, {
            path: "/posts/{id}/reactions",
            method: "delete",
            message: "removing your reaction"
         }, {
            path: "/posts/{id}/reactions",
            method: "get",
            message: "getting the reactions for this post"
         }, {
            path: "/posts/{id}/bookmarks",
            method: "post",
            message: "bookmarking this post"
         }, {
            path: "/posts/{id}/bookmarks",
            method: "delete",
            message: "removing this post from you bookmarks"
         }, {
            path: "/posts/bookmarked",
            method: "get",
            message: "getting your bookmarked posts"
         }, {
            path: "/comments",
            method: "post",
            message: "publishing your comment"
         }, {
            path: "/comments/{id}/reactions",
            method: "delete",
            message: "removing your reaction on this comment"
         }, {
            path: "/comments/{id}/reactions",
            method: "post",
            message: "adding your reaction on this comment"
         }, {
            path: "/comments/{id}",
            method: "delete",
            message: "deleting your comment"
         }, {
            path: "/comments/{id}/votes",
            method: "get",
            message: "getting this comment's votes"
         }, {
            path: "/comments/{id}/votes",
            method: "delete",
            message: "removing your vote on this comment."
         }, {
            path: "/comments/{id}",
            method: "put",
            message: "updating this comment"
         }, {
            path: "/comments/{id}/votes",
            method: "post",
            message: "voting on this comment"
         }, {
            path: "/posts/{{post_id}}/comments",
            method: "get",
            message: "getting comments for this post"
         }, {
            path: "/comments/{id}/replies",
            method: "get",
            message: "getting replies for this comment"
         }, {
            path: "/comments/upvotes/{id}",
            method: "get",
            message: "getting comment's upvotes"
         }, {
            path: "/feed",
            method: "get",
            message: "getting your feed"
         }, {
            path: "/feed/simple/{id}",
            method: "get",
            message: "getting your feed"
         }, {
            path: "/feed/simple",
            method: "post",
            message: "adding a new filtered feed"
         }, {
            path: "/reactions/public",
            method: "get",
            message: "getting the reactions on this post"
         }, {
            path: "/networks/join",
            method: "post",
            message: "joining you to this network"
         }, {
            path: "/networks/public",
            method: "get",
            message: "getting public networks"
         }, {
            path: "/networks/personal",
            method: "get",
            message: "getting your networks"
         }, {
            path: "/networks/search",
            method: "get",
            message: "getting network search results"
         }, {
            path: "/communities/{id}/networks",
            method: "get",
            message: "getting the networks for this community"
         }, {
            path: "/networks/{id}/members",
            method: "get",
            message: "getting this network's members"
         }, {
            path: "/networks/my",
            method: "get",
            message: "getting your networks"
         }, {
            path: "/networks/{id}/leave",
            method: "delete",
            message: "leaving this network"
         }, {
            path: "/networks/multiple",
            method: "post",
            message: "joining you to these networks"
         }, {
            path: "/interests",
            method: "get",
            message: "getting interests"
         }, {
            path: "/filters",
            method: "post",
            message: "adding a new feed filter"
         }, {
            path: "/filters/{id}",
            method: "delete",
            message: "deleting this feed filter"
         }, {
            path: "/filters",
            method: "get",
            message: "getting your feed filters"
         }, {
            path: "/filters/{id}",
            method: "put",
            message: "updating this feed filter"
         }, {
            path: "/countries/get",
            method: "get",
            message: "getting the list of countries"
         }, {
            path: "/cities",
            method: "get",
            message: "getting the list of cities"
         }, {
            path: "/cities",
            method: "post",
            message: "adding your city"
         }, {
            path: "/notifications",
            method: "get",
            message: "getting your notifications"
         }, {
            path: "/notifications/{id}",
            method: "delete",
            message: "deleting this notifications"
         }, {
            path: "/notifications/status",
            method: "post",
            message: "changing the status for this notification"
         }, {
            path: "/notifications/unread-count",
            method: "get",
            message: "getting the count of your unread notifications",
            hide: !0
         }, {
            path: "/notifications/status/all",
            method: "put",
            message: "changing the status of your notifications"
         }, {
            path: "/invites",
            method: "post",
            message: "inviting your invite"
         }, {
            path: "/invites/pending",
            method: "get",
            message: "getting your pending invites"
         }, {
            path: "/invites/joined",
            method: "get",
            message: "getting invites that have been accepted"
         }, {
            path: "/profiles/onboarding-questions",
            method: "post",
            message: "submitting you answers"
         }, {
            path: "/profiles/onboarding-answers",
            method: "get",
            message: "getting this profile's questions and answers"
         }, {
            path: "/profiles/onboarding-step",
            method: "post",
            message: "completing this onboarding step"
         }, {
            path: "/newauth",
            method: "post",
            message: "logging you in"
         }, {
            path: "/newauth/create",
            method: "post",
            message: "creating your account"
         }, {
            path: "/newauth/resend-code",
            method: "post",
            message: "resending you the confirmation link"
         }, {
            path: "/newauth/confirm-email/{id}",
            method: "post",
            message: "confirming your email"
         }, {
            path: "/newauth/check-email-confirmation",
            method: "get",
            message: "checking your email confirmation status"
         }, {
            path: "/chat/my",
            method: "get",
            message: "getting your chats",
            hide: !0
         }, {
            path: "/chat/personal",
            method: "post",
            message: "adding a new chat"
         }, {
            path: "/chat/{id}/message",
            method: "post",
            message: "adding this message"
         }, {
            path: "/chat/{id}/messages",
            method: "get",
            message: "getting the messages for this chat"
         }, {
            path: "/chat/{id}/request/",
            method: "post",
            message: "sending a new message request"
         }, {
            path: "/chat/message/{id}/delete",
            method: "put",
            message: "deleting this message"
         }, {
            path: "/chat/{id}/delete",
            method: "put",
            message: "deleting this chat"
         }, {
            path: "/chat/{id}/block",
            method: "put",
            message: "blocking this chat"
         }, {
            path: "/chat/{id}/delete/messages",
            method: "put",
            message: "deleting this chat's messages"
         }, {
            path: "/chat/personal/{id}",
            method: "get",
            message: "getting this chat"
         }, {
            path: "/chat/{id}/thread/{id}",
            method: "get",
            message: "getting this thread"
         }, {
            path: "/chat/{id}/message/{id}",
            method: "get",
            message: "getting this message"
         }, {
            path: "/chat/{id}",
            method: "get",
            message: "getting this chat"
         }, {
            path: "/chat/search",
            method: "get",
            message: "getting the chat search results"
         }, {
            path: "/chat/{id}/visit",
            method: "put",
            message: "changing the messages status for this chat",
            hide: !0
         }, {
            path: "/chat/total-unread",
            method: "get",
            message: "getting your unread messages count",
            hide: !0
         }, {
            path: "/chat/{id}/typing",
            method: "put",
            message: "updating your chat",
            hide: !0
         }, {
            path: "/chat/{id}/activate",
            method: "post",
            message: "updating this chat's status",
            hide: !0
         }, {
            path: "/chat/active",
            method: "get",
            message: "getting your active chats",
            hide: !0
         }, {
            path: "/chat/{id}/deactivate",
            method: "put",
            message: "updating your chat's status",
            hide: !0
         }, {
            path: "/link-preview",
            method: "post",
            message: "getting a link preview for this link",
            hide: !0
         }],
         u = c,
         l = n("a9cc"),
         d = n("a18c"),
         p = "https://temp-api.bizfluenceapp.com/",
         f = "Sorry, there seems to be an issue ",
         m = ". If this persists, please contact support@bizfluenceapp.com.",
         g = o.a.create({
            baseURL: p
         });
      g.interceptors.request.use((function (e) {
         var t = i["a"].getters["auth/getUserAuthToken"];
         if (t && !Object(l["d"])(t)) e.headers.common = {
            Authorization: "Bearer ".concat(t),
            Accept: "application/json"
         };
         else if (t && Object(l["d"])(t)) {
            var n = o.a.CancelToken;
            return Object(r["a"])(Object(r["a"])({}, e), {}, {
               cancelToken: new n((function (e) {
                  return e("token is expired")
               }))
            })
         }
         return e
      }), (function (e) {
         return Promise.reject(e)
      })), g.interceptors.response.use((function (e) {
         return e
      }), (function (e) {
         var t;
         if (null === (t = e.message) || void 0 === t || !t.includes("token is expired")) {
            var n = e.config,
               r = /[a-f0-9]{24}/gi,
               s = n.url.replaceAll(r, "{id}"),
               o = s.indexOf("?");
            s = s.substring(0, -1 !== o ? o : s.length);
            var c = u.find((function (e) {
                  return e.path == s && e.method == n.method
               })),
               l = c ? "".concat(f).concat(c.message).concat(m) : "".concat(f).concat(m);
            return c && c.hide || a["a"].$emit("SERVER_ERROR", l), Promise.reject(e)
         }
         var p = i["a"].getters["auth/getAuthStatus"];
         if (p) {
            i["a"].dispatch("auth/logout");
            var g = d["a"].currentRoute.path;
            d["a"].push("/login?redirect=".concat(g))
         }
      }));
      t["a"] = g
   },
   "7db8": function (e, t, n) {
      "use strict";
      n("d217")
   },
   "7e11": function (e, t, n) {
      "use strict";
      n("7cdb")
   },
   "7e8f": function (e, t, n) {
      "use strict";
      var r = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("div", {
               staticClass: "ui-profile-more ui-card",
               class: !0 === e.fromProfile ? "ui-fromProfile-more" : "ui-fromLanding-points"
            }, [n("div", {
               staticClass: "ui-profile-more__info-wr"
            }, [n("div", {
               staticClass: "ui-profile-more__info"
            }, [n("div", {
               staticClass: "ui-profile-more__info-t1"
            }, [e._v(" " + e._s(e.profile.counts.posts || 0) + " ")]), n("label", {
               staticClass: "ui-profile-more__info-t2"
            }, [e._v("Posts")])]), n("div", {
               class: e.followingClass,
               on: {
                  click: function (t) {
                     return e.showFollowingModal("followers")
                  }
               }
            }, [n("div", {
               staticClass: "ui-profile-more__info-t1"
            }, [e._v(" " + e._s(e.profile.counts.followers || 0) + " ")]), n("label", {
               staticClass: "ui-profile-more__info-t2"
            }, [e._v("Followers")])]), n("div", {
               class: e.followingClass,
               on: {
                  click: function (t) {
                     return e.showFollowingModal("following")
                  }
               }
            }, [n("div", {
               staticClass: "ui-profile-more__info-t1 "
            }, [e._v(" " + e._s(e.profile.counts.followings || 0) + " ")]), n("label", {
               staticClass: "ui-profile-more__info-t2"
            }, [e._v("Following")])]), n("div", {
               staticClass: "ui-profile-more__info"
            }, [n("div", {
               staticClass: "ui-profile-more__info-t1"
            }, [e._v(e._s(e.profile.points))]), n("label", {
               staticClass: "ui-profile-more__info-t2"
            }, [e._v("Score")])])]), n("user-follower-list-modal", {
               ref: "showFollowerListModal",
               attrs: {
                  isOwn: e.isOwn,
                  currentProfileId: e.profile.profileId || "",
                  type: e.followType,
                  title: "Following"
               }
            })], 1)
         },
         s = [],
         o = n("d2b3"),
         i = {
            name: "ProfileCountsMeta",
            props: {
               fromProfile: {
                  type: Boolean
               },
               isOwn: {
                  type: Boolean,
                  default: !1
               }
            },
            data: function () {
               return {
                  followType: "",
                  followingClass: {
                     "ui-profile-more__info": !0,
                     clickable: this.isAuth
                  }
               }
            },
            components: {
               UserFollowerListModal: o["a"]
            },
            computed: {
               profile: function () {
                  return this.$store.getters[this.storeNameSpace + "getProfile"]
               },
               storeNameSpace: function () {
                  return this.isOwn ? "profile/" : "user/"
               },
               isAuth: function () {
                  return this.$store.getters["auth/getAuthStatus"]
               }
            },
            methods: {
               showFollowingModal: function (e) {
                  var t = this;
                  this.isAuth && (this.followType = e, this.$nextTick((function () {
                     t.$refs.showFollowerListModal.toggleModal(!0), t.$nextTick((function () {
                        t.$bvModal.show("user-follower-modal")
                     }))
                  })))
               }
            }
         },
         a = i,
         c = (n("d30a"), n("2877")),
         u = Object(c["a"])(a, r, s, !1, null, "7ba59040", null);
      t["a"] = u.exports
   },
   "7f75": function (e, t, n) {
      e.exports = n.p + "img/filter-list-icon.d4504a99.svg"
   },
   "80b2": function (e, t, n) {},
   8409: function (e, t, n) {
      "use strict";
      var r = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("div", {
               staticClass: "base-textarea"
            }, [e.noValidate ? n("div", [e.label ? n("label", {
               staticClass: "base-textarea__label",
               attrs: {
                  for: "type-" + e.label
               }
            }, [e._v(e._s(e.label))]) : e._e(), n("b-form-textarea", {
               staticClass: "base-textarea__input",
               attrs: {
                  id: e.id ? e.id : "type-" + e.label,
                  placeholder: e.placeholder,
                  rows: e.rows,
                  "max-rows": e.maxrows,
                  maxlength: e.maxlength,
                  value: e.value,
                  "no-resize": e.noResize
               },
               on: {
                  input: e.input
               }
            })], 1) : n("validation-provider", {
               attrs: {
                  name: e.label || e.name,
                  rules: "required-text-area"
               },
               scopedSlots: e._u([{
                  key: "default",
                  fn: function (t) {
                     return [e.label ? n("label", {
                        staticClass: "base-textarea__label",
                        attrs: {
                           for: "type-" + e.label
                        }
                     }, [e._v(e._s(e.label))]) : e._e(), n("b-form-textarea", {
                        staticClass: "base-textarea__input",
                        attrs: {
                           id: e.id ? e.id : "type-" + e.label,
                           placeholder: e.placeholder,
                           rows: e.rows,
                           "max-rows": e.maxrows,
                           maxlength: e.maxlength,
                           value: e.value,
                           "no-resize": e.noResize,
                           state: e.getValidationState(t)
                        },
                        on: {
                           input: e.input
                        }
                     }), n("b-form-invalid-feedback", {
                        staticClass: "mt-1",
                        attrs: {
                           id: "input-1-live-feedback"
                        }
                     }, [e._v(e._s(t.errors[0]))])]
                  }
               }])
            }), e._t("default")], 2)
         },
         s = [],
         o = n("5530"),
         i = n("7bb1"),
         a = n("4c93");
      Object(i["c"])("required-text-area", Object(o["a"])(Object(o["a"])({}, a["c"]), {}, {
         message: function (e) {
            return "work-title" === e ? "Hmm… we bet you have great job title" : "profile-desc" === e ? "Hmm… how are you going to network if you don’t tell us what you do?" : "This field is required"
         }
      }));
      var c = {
            name: "BaseTextarea",
            props: {
               label: String,
               name: String,
               placeholder: String,
               rows: String,
               maxrows: String,
               value: String,
               id: String,
               maxlength: String,
               noValidate: Boolean,
               noResize: Boolean
            },
            components: {
               ValidationProvider: i["b"]
            },
            methods: {
               input: function (e) {
                  this.$emit("input", e)
               },
               getValidationState: function (e) {
                  var t = e.dirty,
                     n = e.validated,
                     r = e.valid,
                     s = void 0 === r ? null : r;
                  return t || n ? s : null
               }
            }
         },
         u = c,
         l = (n("6bf6"), n("2877")),
         d = Object(l["a"])(u, r, s, !1, null, "6208c9fb", null);
      t["a"] = d.exports
   },
   "850c": function (e, t, n) {},
   8594: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("div", {
               staticClass: "messaging-history"
            }, [n("MessageFilter"), n("b-tabs", {
               attrs: {
                  justified: "",
                  "nav-class": "m-0",
                  "active-nav-item-class": "messaging-navbar-tab-active"
               },
               model: {
                  value: e.tabIndex,
                  callback: function (t) {
                     e.tabIndex = t
                  },
                  expression: "tabIndex"
               }
            }, [n("b-tab", {
               attrs: {
                  active: "",
                  "title-link-class": "messaging-navbar-tab"
               },
               scopedSlots: e._u([{
                  key: "title",
                  fn: function () {
                     return [n("span", [e._v("All Chats")])]
                  },
                  proxy: !0
               }])
            }, [e.conversations.length || e.loadingConversations ? n("div", {
               attrs: {
                  id: "conversations-list"
               }
            }, e._l(e.conversations, (function (t) {
               return n("div", {
                  key: t._id
               }, ["personal" === t.type && e.conversationFilters.personal ? n("MessagingeHistoryItem", {
                  attrs: {
                     conversation: t,
                     fullscreen: e.isMain
                  }
               }) : e._e(), "group" === t.type && e.conversationFilters.group ? n("MessagingHistoryItemGroup", {
                  attrs: {
                     conversation: t,
                     fullscreen: e.isMain
                  }
               }) : e._e(), "network" === t.type && e.conversationFilters.network ? n("MessagingHistoryItemNetwork", {
                  attrs: {
                     conversation: t,
                     fullscreen: e.isMain
                  }
               }) : e._e()], 1)
            })), 0) : e._e(), e.conversations.length || e.loadingConversations ? e._e() : n("div", {
               staticClass: "empty-container"
            }, [n("img", {
               attrs: {
                  src: e.noRequestsGraphic,
                  alt: ""
               }
            }), n("p", [e._v("You don't have any chats yet")]), n("span", {
               staticClass: "empty-link",
               on: {
                  click: e.composeMessage
               }
            }, [e._v("Start a new one")])]), n("InfiniteLoading", {
               ref: "conversationsLoader",
               attrs: {
                  spinner: "waveDots"
               },
               on: {
                  infinite: e.infiniteHandler
               }
            }, [n("div", {
               attrs: {
                  slot: "no-results"
               },
               slot: "no-results"
            }), n("div", {
               attrs: {
                  slot: "no-more"
               },
               slot: "no-more"
            })])], 1), n("b-tab", {
               attrs: {
                  "title-link-class": "messaging-navbar-tab"
               },
               scopedSlots: e._u([{
                  key: "title",
                  fn: function () {
                     return [n("span", [e._v("Message Requests")]), e.requestsCount ? n("span", {
                        staticClass: "badge__count"
                     }, [e._v(e._s(e.requestsCount))]) : e._e()]
                  },
                  proxy: !0
               }])
            }, [n("div", {
               staticClass: "helper-text"
            }, [e._v(" Open a request to get info about who's messaging you. They won't know that you've seen it until you reply. ")]), e.requests.length ? n("b-tabs", {
               attrs: {
                  "nav-class": "my-2",
                  pills: "",
                  "active-nav-item-class": "requests-active-tab",
                  small: "",
                  align: "center"
               }
            }, [n("b-tab", {
               attrs: {
                  title: "Incoming",
                  active: ""
               }
            }, [e.incomingRequests.length ? n("div", {
               attrs: {
                  id: "incoming-requests-list"
               }
            }, [e._l(e.incomingRequests, (function (t) {
               return n("div", {
                  key: t._id
               }, ["personal" === t.type ? n("MessagingeHistoryItem", {
                  attrs: {
                     conversation: t,
                     fullscreen: e.isMain
                  }
               }) : e._e(), "network" === t.type ? n("MessagingHistoryItemNetwork", {
                  attrs: {
                     conversation: t,
                     fullscreen: e.isMain
                  }
               }) : e._e(), "group" === t.type ? n("MessagingHistoryItemGroup", {
                  attrs: {
                     conversation: t,
                     fullscreen: e.isMain
                  }
               }) : e._e()], 1)
            })), n("InfiniteLoading", {
               attrs: {
                  spinner: "waveDots"
               },
               on: {
                  infinite: e.infiniteHandler
               }
            }, [n("div", {
               attrs: {
                  slot: "no-results"
               },
               slot: "no-results"
            }), n("div", {
               attrs: {
                  slot: "no-more"
               },
               slot: "no-more"
            })])], 2) : n("div", {
               staticClass: "empty-container"
            }, [n("img", {
               attrs: {
                  src: e.noRequestsGraphic,
                  alt: ""
               }
            }), n("p", [e._v("You don't have any message requests")]), n("span", {
               staticClass: "empty-link",
               on: {
                  click: e.goToMessages
               }
            }, [e._v("Go to chats")])])]), n("b-tab", {
               attrs: {
                  title: "Sent"
               }
            }, [e.sentRequests.length ? n("div", {
               attrs: {
                  id: "sent-requests-list"
               }
            }, e._l(e.sentRequests, (function (t) {
               return n("div", {
                  key: t._id
               }, ["personal" === t.type ? n("MessagingeHistoryItem", {
                  attrs: {
                     conversation: t,
                     fullscreen: e.isMain
                  }
               }) : e._e(), "network" === t.type ? n("MessagingHistoryItemNetwork", {
                  attrs: {
                     conversation: t,
                     fullscreen: e.isMain
                  }
               }) : e._e(), "group" === t.type ? n("MessagingHistoryItemGroup", {
                  attrs: {
                     conversation: t,
                     fullscreen: e.isMain
                  }
               }) : e._e()], 1)
            })), 0) : n("div", {
               staticClass: "empty-container"
            }, [n("img", {
               attrs: {
                  src: e.noRequestsGraphic,
                  alt: ""
               }
            }), n("p", [e._v("You don't have any sent requests")]), n("span", {
               staticClass: "empty-link",
               on: {
                  click: e.goToMessages
               }
            }, [e._v("Go to chats")])]), n("InfiniteLoading", {
               attrs: {
                  spinner: "waveDots"
               },
               on: {
                  infinite: e.infiniteHandler
               }
            }, [n("div", {
               attrs: {
                  slot: "no-results"
               },
               slot: "no-results"
            }), n("div", {
               attrs: {
                  slot: "no-more"
               },
               slot: "no-more"
            })])], 1)], 1) : n("div", {
               staticClass: "empty-container"
            }, [n("img", {
               attrs: {
                  src: e.noRequestsGraphic,
                  alt: ""
               }
            }), n("p", [e._v("You don't have any message requests")]), n("span", {
               staticClass: "empty-link",
               on: {
                  click: e.goToMessages
               }
            }, [e._v("Go to chats")])])], 1)], 1)], 1)
         },
         s = [],
         o = n("1da1"),
         i = (n("96cf"), n("4de4"), n("d3b7"), n("25f0"), function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("div", {
               staticClass: "messaging-filter"
            }, [n("div", {
               staticClass: "search-bar"
            }, [n("span", {
               staticClass: "icon-ic-navbar-search search-bar__icon"
            }), n("base-input", {
               staticClass: "search-bar__input",
               attrs: {
                  "no-validate": "",
                  placeholder: "Search"
               },
               on: {
                  input: e.handleInput
               },
               model: {
                  value: e.conversationSearchText,
                  callback: function (t) {
                     e.conversationSearchText = t
                  },
                  expression: "conversationSearchText"
               }
            }), n("base-icon-button", {
               directives: [{
                  name: "b-modal",
                  rawName: "v-b-modal",
                  value: "chats-filter-modal",
                  expression: "'chats-filter-modal'"
               }],
               staticClass: "search-bar__button",
               attrs: {
                  icon: e.filterListIcon,
                  width: 18,
                  isImg: ""
               }
            })], 1)])
         }),
         a = [],
         c = n("5530"),
         u = n("2ef0"),
         l = n("2f62"),
         d = n("087e"),
         p = n("f367"),
         f = n("7f75"),
         m = n.n(f),
         g = {
            name: "MessagingFilter",
            components: {
               BaseIconButton: p["default"],
               BaseInput: d["a"]
            },
            data: function () {
               return {
                  filterListIcon: m.a,
                  text: null
               }
            },
            computed: Object(c["a"])(Object(c["a"])({}, Object(l["c"])(["chat"])), {}, {
               conversationSearchText: {
                  set: function (e) {
                     this.$store.commit("chat/setConversationSearchText", {
                        text: e
                     })
                  },
                  get: function () {
                     return this.chat.conversationSearchText
                  }
               }
            }),
            methods: {
               handleInput: Object(u["debounce"])((function () {
                  this.conversationSearchText ? this.$store.dispatch("chat/searchConversations", {
                     text: this.conversationSearchText
                  }) : (this.$store.dispatch("chat/resetConversations"), this.$parent.$refs.conversationsLoader.stateChanger.reset(), this.$parent.infiniteHandler())
               }), 500)
            }
         },
         h = g,
         v = (n("43fc"), n("2877")),
         b = Object(v["a"])(h, i, a, !1, null, "026b613c", null),
         w = b.exports,
         k = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("div", {
               staticClass: "messaging-history-item",
               class: {
                  unread: e.messagingUnread
               },
               on: {
                  click: e.handleItemClick
               }
            }, [n("div", {
               staticClass: "m-img"
            }, [n("img", {
               staticClass: "user-image",
               attrs: {
                  src: e.conversation.user.picture ? e.conversation.user.picture.formats && e.conversation.user.picture.formats.thumbnail ? e.conversation.user.picture.formats.thumbnail.url : e.conversation.user.picture.url : ""
               }
            }), e.conversation.unreadMessages ? n("div", {
               staticClass: "badge__count"
            }, [e._v(" " + e._s(e.greaterThanMaxCount ? "+9" : e.conversation.unreadMessages) + " ")]) : e._e(), e.userOnline ? n("span", {
               staticClass: "user-status user-status--online"
            }) : e._e()]), n("div", {
               staticClass: "m-msg"
            }, [n("div", {
               staticClass: "m-content"
            }, [n("span", {
               staticClass: "m-msg__user"
            }, [e._v(" " + e._s(e.conversation.user.title) + " ")]), n("span", {
               staticClass: "m-msg__content",
               domProps: {
                  innerHTML: e._s(e.lastMessageContent)
               }
            })])]), n("div", {
               staticClass: "m-msg__right"
            }, [n("div", {
               staticClass: "m-info"
            }, [n("span", {
               staticClass: "m-info__text"
            }, [e._v(" " + e._s(e._f("moment")(e.conversation.lastMessage.createdAt, "from", "now")) + " ")])]), n("div", {
               staticClass: "m-extra"
            }, [n("base-icon-dropdown", {
               ref: "chatOptions",
               staticClass: "options-dropdown-button",
               attrs: {
                  "no-caret": "",
                  right: ""
               },
               on: {
                  click: e.handleOptionsClick
               },
               scopedSlots: e._u([{
                  key: "icon",
                  fn: function () {
                     return [n("base-icon-button", {
                        attrs: {
                           icon: e.moreIcon,
                           width: 16,
                           isImg: ""
                        }
                     })]
                  },
                  proxy: !0
               }])
            }, [n("base-list-item-default", {
               attrs: {
                  button: "",
                  icon: e.deleteIcon,
                  isImg: ""
               },
               on: {
                  click: e.deleteConversation
               }
            }, [e._v(" Delete chat ")])], 1)], 1)])])
         },
         _ = [],
         C = (n("99af"), n("2ca0"), n("b65d")),
         y = n("8f1b"),
         x = n("7d7b"),
         P = n.n(x),
         I = n("4a0d"),
         j = n.n(I),
         M = n("292e"),
         R = n.n(M),
         O = n("2eea"),
         A = n.n(O),
         S = n("1ea6"),
         T = n.n(S),
         F = n("f69e"),
         L = n.n(F);
      n("5319"), n("ac1f");

      function $(e) {
         var t = e.replace(/(?:\r\n|\r|\n)/g, "<br/>"),
            n = /@\[([^\]]*)]\{([^}]*)\}/gi;
         return t = t.replace(n, "$1"), t
      }
      var B = {
            name: "MessagingHistoryItem",
            components: {
               BaseIconButton: p["default"],
               BaseIconDropdown: C["a"],
               BaseListItemDefault: y["a"]
            },
            props: {
               messagingUnread: Boolean,
               conversation: Object,
               fullscreen: Boolean
            },
            data: function () {
               return {
                  activeStatusIcon: P.a,
                  autoRepliesIcon: j.a,
                  requestsIcon: R.a,
                  manageChatsIcon: A.a,
                  moreIcon: T.a,
                  deleteIcon: L.a
               }
            },
            computed: {
               lastMessageContent: function () {
                  var e = this.conversation.lastMessage.userId === this.myProfileId ? "You: " : "",
                     t = this.$options.filters.truncate($(this.$sanitize(this.conversation.lastMessage.content)), 20);
                  return "".concat(e).concat(t)
               },
               myProfileId: function () {
                  return this.$store.getters["profile/getProfileId"]
               },
               greaterThanMaxCount: function () {
                  return this.conversation.unreadMessages > 9
               },
               userOnline: function () {
                  return this.$store.getters["chat/getUsersOnlineStatus"][this.conversation.user.id]
               }
            },
            mounted: function () {},
            filters: {
               truncate: function (e, t) {
                  return e.substring(0, Math.min(t, e.length)) + (t < e.length ? "..." : "")
               }
            },
            methods: {
               handleOptionsClick: function () {},
               deleteConversation: function () {
                  var e = this;
                  return Object(o["a"])(regeneratorRuntime.mark((function t() {
                     return regeneratorRuntime.wrap((function (t) {
                        while (1) switch (t.prev = t.next) {
                           case 0:
                              return t.next = 2, e.$store.dispatch("chat/deleteConversation", {
                                 conversationId: e.conversation._id
                              });
                           case 2:
                           case "end":
                              return t.stop()
                        }
                     }), t)
                  })))()
               },
               handleItemClick: function () {
                  this.fullscreen ? this.selectConversation(this.$route.path.startsWith("/m-messaging")) : this.floatingConversation()
               },
               selectConversation: function (e) {
                  var t = this;
                  return Object(o["a"])(regeneratorRuntime.mark((function n() {
                     return regeneratorRuntime.wrap((function (n) {
                        while (1) switch (n.prev = n.next) {
                           case 0:
                              return n.next = 2, t.$store.dispatch("chat/resetMainConversation");
                           case 2:
                              return t.$router.push("/".concat(e ? "m-" : "", "messaging/").concat(t.conversation._id)), n.next = 5, t.$store.dispatch("chat/selectMainConversation", t.conversation);
                           case 5:
                              e && t.$bvModal.show("viewChat");
                           case 6:
                           case "end":
                              return n.stop()
                        }
                     }), n)
                  })))()
               },
               floatingConversation: function () {
                  var e = this;
                  return Object(o["a"])(regeneratorRuntime.mark((function t() {
                     return regeneratorRuntime.wrap((function (t) {
                        while (1) switch (t.prev = t.next) {
                           case 0:
                              return t.next = 2, e.$store.dispatch("chat/setConversationActive", {
                                 conversation: e.conversation,
                                 isActive: !0
                              });
                           case 2:
                              return t.next = 4, e.$store.dispatch("chat/toggleFloatingConversation", {
                                 conversation: e.conversation,
                                 isOpen: !0
                              });
                           case 4:
                           case "end":
                              return t.stop()
                        }
                     }), t)
                  })))()
               }
            }
         },
         U = B,
         D = (n("2404"), Object(v["a"])(U, k, _, !1, null, "56d81a79", null)),
         N = D.exports,
         E = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("div", {
               staticClass: "messaging-history-item",
               class: {
                  unread: e.messagingUnread
               },
               on: {
                  click: e.handleItemClick
               }
            }, [n("div", {
               staticClass: "m-img m-img--network"
            }, [n("img", {
               staticClass: "user-image",
               attrs: {
                  src: e.conversation.network.banner ? e.conversation.network.banner.url : e.defaultNetworkIcon
               }
            }), e.conversation.unreadMessages ? n("div", {
               staticClass: "badge__count"
            }, [e._v(" " + e._s(e.greaterThanMaxCount ? "+9" : e.conversation.unreadMessages) + " ")]) : e._e()]), n("div", {
               staticClass: "m-msg"
            }, [n("div", {
               staticClass: "m-content"
            }, [n("span", {
               staticClass: "m-msg__user"
            }, [e._v(" " + e._s(e.conversation.network.name) + " ")]), n("span", {
               staticClass: "m-msg__content",
               domProps: {
                  innerHTML: e._s(e.lastMessageContent)
               }
            })])]), n("div", {
               staticClass: "m-msg__right"
            }, [n("div", {
               staticClass: "m-info"
            }, [n("span", {
               staticClass: "m-info__text"
            }, [e._v(" " + e._s(e._f("moment")(e.conversation.lastMessage.createdAt, "from", "now")) + " ")])]), e._m(0)])])
         },
         q = [function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("div", {
               staticClass: "m-extra"
            }, [n("span", {
               staticClass: "icon-ic-networks"
            })])
         }],
         z = n("522f"),
         H = n.n(z),
         G = {
            name: "MessagingHistoryItemNetwork",
            props: {
               messagingUnread: Boolean,
               conversation: Object,
               fullscreen: Boolean
            },
            computed: {
               lastMessageContent: function () {
                  var e = this.conversation.lastMessage.userId === this.myProfileId ? "You: " : "",
                     t = this.$options.filters.truncate($(this.$sanitize(this.conversation.lastMessage.content)), 20);
                  return "".concat(e).concat(t)
               },
               myProfileId: function () {
                  return this.$store.getters["profile/getProfileId"]
               },
               greaterThanMaxCount: function () {
                  return this.conversation.unreadMessages > 9
               }
            },
            data: function () {
               return {
                  defaultNetworkIcon: H.a
               }
            },
            filters: {
               truncate: function (e, t) {
                  return e.substring(0, Math.min(t, e.length)) + (t < e.length ? "..." : "")
               }
            },
            methods: {
               handleOptionsClick: function () {},
               deleteConversation: function () {
                  var e = this;
                  return Object(o["a"])(regeneratorRuntime.mark((function t() {
                     return regeneratorRuntime.wrap((function (t) {
                        while (1) switch (t.prev = t.next) {
                           case 0:
                              return t.next = 2, e.$store.dispatch("chat/deleteConversation", {
                                 conversationId: e.conversation._id
                              });
                           case 2:
                           case "end":
                              return t.stop()
                        }
                     }), t)
                  })))()
               },
               handleItemClick: function () {
                  this.fullscreen ? this.selectConversation(this.$route.path.startsWith("/m-messaging")) : this.floatingConversation()
               },
               selectConversation: function (e) {
                  var t = this;
                  return Object(o["a"])(regeneratorRuntime.mark((function n() {
                     return regeneratorRuntime.wrap((function (n) {
                        while (1) switch (n.prev = n.next) {
                           case 0:
                              return n.next = 2, t.$store.dispatch("chat/resetMainConversation");
                           case 2:
                              return t.$router.push("/".concat(e ? "m-" : "", "messaging/").concat(t.conversation._id)), n.next = 5, t.$store.dispatch("chat/selectMainConversation", t.conversation);
                           case 5:
                              e && t.$bvModal.show("viewChat");
                           case 6:
                           case "end":
                              return n.stop()
                        }
                     }), n)
                  })))()
               },
               floatingConversation: function () {
                  var e = this;
                  return Object(o["a"])(regeneratorRuntime.mark((function t() {
                     return regeneratorRuntime.wrap((function (t) {
                        while (1) switch (t.prev = t.next) {
                           case 0:
                              return t.next = 2, e.$store.dispatch("chat/setConversationActive", {
                                 conversation: e.conversation,
                                 isActive: !0
                              });
                           case 2:
                              return t.next = 4, e.$store.dispatch("chat/toggleFloatingConversation", {
                                 conversation: e.conversation,
                                 isOpen: !0
                              });
                           case 4:
                           case "end":
                              return t.stop()
                        }
                     }), t)
                  })))()
               }
            }
         },
         W = G,
         V = (n("b36c"), Object(v["a"])(W, E, q, !1, null, "5a7f64ce", null)),
         Y = V.exports,
         J = function () {
            var e = this,
               t = e.$createElement;
            e._self._c;
            return e._m(0)
         },
         K = [function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("div", {
               staticClass: "messaging-history-item"
            }, [n("div", {
               staticClass: "m-img m-img--group"
            }, [n("img", {
               staticClass: "user-image",
               attrs: {
                  src: "https://bizfluence-media.nyc3.cdn.digitaloceanspaces.com/9f683c62d2136a2cbd2a147ef97d6cea.jpg"
               }
            }), n("img", {
               staticClass: "user-image",
               attrs: {
                  src: "https://bizfluence-media.nyc3.cdn.digitaloceanspaces.com/949d2dbaf9af78300b4a4b9c645efba9.jpg"
               }
            })]), n("div", {
               staticClass: "m-msg"
            }, [n("div", {
               staticClass: "m-content"
            }, [n("span", {
               staticClass: "m-msg__user"
            }, [e._v(" Team Work ")]), n("span", {
               staticClass: "m-msg__content"
            }, [e._v(" You: let’s start working ")])]), n("div", {
               staticClass: "m-info"
            }, [n("span", {
               staticClass: "m-info__text"
            }, [e._v(" 12:50 PM ")])])]), n("div", {
               staticClass: "m-extra"
            }, [n("span", {
               staticClass: "icon-ic-like"
            })])])
         }],
         Q = {
            name: "MessagingHistoryItemGroup",
            props: {
               messagingUnread: Boolean
            }
         },
         Z = Q,
         X = Object(v["a"])(Z, J, K, !1, null, null, null),
         ee = X.exports,
         te = n("0484"),
         ne = n.n(te),
         re = n("8c0a"),
         se = n.n(re),
         oe = n("e166"),
         ie = n.n(oe),
         ae = {
            name: "MessagingHistory",
            props: {
               isMain: {
                  type: Boolean,
                  default: !1
               }
            },
            components: {
               MessagingeHistoryItem: N,
               MessagingHistoryItemGroup: ee,
               MessagingHistoryItemNetwork: Y,
               MessageFilter: w,
               InfiniteLoading: ie.a
            },
            data: function () {
               return {
                  noRequestsGraphic: ne.a,
                  activeStatusIcon: P.a,
                  autoRepliesIcon: j.a,
                  requestsIcon: R.a,
                  manageChatsIcon: A.a,
                  fullscreenIcon: se.a,
                  tabIndex: 0,
                  preventClose: !1,
                  loadingConversations: !0
               }
            },
            mounted: function () {
               this.$store.getters["chat/getConversations"] || this.$store.dispatch("chat/getConversations")
            },
            computed: {
               conversations: function () {
                  var e = this;
                  return this.$store.getters["chat/getConversations"].filter((function (e) {
                     return !e.request && void 0 !== e.lastMessage
                  })).sort((function (t, n) {
                     return e.$moment(n.lastMessage.createdAt).unix() - e.$moment(t.lastMessage.createdAt).unix()
                  }))
               },
               requests: function () {
                  return this.$store.getters["chat/getConversations"].filter((function (e) {
                     return e.request
                  }))
               },
               incomingRequests: function () {
                  var e = this;
                  return this.$store.getters["chat/getConversations"].filter((function (t) {
                     return t.request && void 0 !== t.lastMessage && t.lastMessage.userId !== e.$store.getters["profile/getProfileId"]
                  }))
               },
               sentRequests: function () {
                  var e = this;
                  return this.$store.getters["chat/getConversations"].filter((function (t) {
                     return t.request && void 0 !== t.lastMessage && t.lastMessage.userId === e.$store.getters["profile/getProfileId"]
                  }))
               },
               requestsCount: function () {
                  return this.$store.getters["chat/getRequestsCount"]
               },
               conversationFilters: function () {
                  return this.$store.getters["chat/getConversationFilters"]
               }
            },
            methods: {
               goToMessages: function () {
                  this.tabIndex = 0
               },
               composeMessage: function () {
                  this.$store.dispatch("chat/openFloatingConversation", {
                     conversation: {
                        windowId: Math.random().toString(36).substring(2, 15),
                        user: null,
                        isNew: !0,
                        type: "personal"
                     },
                     isOpen: !0
                  })
               },
               infiniteHandler: function (e) {
                  var t = this;
                  return Object(o["a"])(regeneratorRuntime.mark((function n() {
                     var r;
                     return regeneratorRuntime.wrap((function (n) {
                        while (1) switch (n.prev = n.next) {
                           case 0:
                              return t.loadingConversations = !0, n.next = 3, t.$store.dispatch("chat/getConversations");
                           case 3:
                              r = n.sent, t.loadingConversations = !1, e && (0 === r.length ? e.complete() : e.loaded());
                           case 6:
                           case "end":
                              return n.stop()
                        }
                     }), n)
                  })))()
               }
            }
         },
         ce = ae,
         ue = (n("8763"), n("cf8d"), Object(v["a"])(ce, r, s, !1, null, "c44ddc98", null));
      t["default"] = ue.exports
   },
   "85ec": function (e, t, n) {},
   "861e": function (e, t, n) {
      "use strict";
      n("80b2")
   },
   8763: function (e, t, n) {
      "use strict";
      n("a4a6")
   },
   "898b0": function (e, t, n) {},
   "8af8": function (e, t, n) {},
   "8b0e": function (e, t, n) {},
   "8c0a": function (e, t, n) {
      e.exports = n.p + "img/fullscreen-icon.49c32fb5.svg"
   },
   "8c37": function (e, t, n) {},
   "8d22": function (e, t, n) {},
   "8d97": function (e, t, n) {
      "use strict";
      n.d(t, "a", (function () {
         return r
      })), n.d(t, "b", (function () {
         return s
      }));
      n("466d"), n("ac1f");

      function r(e, t) {
         var n = t.getBoundingClientRect().width,
            r = e.target.getBoundingClientRect().left,
            s = (e.clientX - r) / n;
         try {
            if (!e.target.className.match(/^ar\-line\-control/)) return
         } catch (o) {
            return
         }
         return s = s < 0 ? 0 : s, s = s > 1 ? 1 : s, s
      }

      function s(e) {
         return new Date(1e3 * e).toISOString().substr(14, 5)
      }
   },
   "8e47": function (e, t, n) {
      "use strict";
      n("cf38")
   },
   "8f1b": function (e, t, n) {
      "use strict";
      var r = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return e.button ? n("b-dropdown-item-button", {
               staticClass: "no-margin no-padding",
               attrs: {
                  "active-class": "//"
               },
               on: {
                  click: e.onClick
               }
            }, [n("div", {
               staticClass: "list-item-default",
               class: {
                  "list-item-no-padding": !e.icon
               }
            }, [e.icon ? n("div", {
               staticClass: "list-item-default__icon-wr"
            }, [e.isImg ? n("img", {
               attrs: {
                  src: e.icon,
                  alt: ""
               }
            }) : n("span", {
               staticClass: "list-item-default__icon",
               class: e.icon
            })]) : e._e(), e._v(" " + e._s(e.text) + " "), e._t("default"), e.count && e.count > 0 ? n("div", {
               staticClass: "badge__count"
            }, [e._v(e._s(e.count))]) : e._e()], 2)]) : this.useHref() ? n("b-dropdown-item", {
               staticClass: "no-margin no-padding list-item",
               attrs: {
                  "active-class": "active-row",
                  href: e.to,
                  target: "_blank",
                  rel: "noopener noreferrer"
               }
            }, [n("div", {
               staticClass: "list-item-default",
               class: {
                  "list-item-no-padding": !e.icon
               }
            }, [e.icon ? n("div", {
               staticClass: "list-item-default__icon-wr"
            }, [e.isImg ? n("img", {
               attrs: {
                  src: e.icon,
                  alt: ""
               }
            }) : n("span", {
               staticClass: "list-item-default__icon",
               class: e.icon
            })]) : e._e(), e._v(" " + e._s(e.text) + " "), e._t("default")], 2)]) : n("b-dropdown-item", {
               staticClass: "no-margin no-padding list-item",
               attrs: {
                  "active-class": "active-row",
                  to: e.to
               }
            }, [n("div", {
               staticClass: "list-item-default",
               class: {
                  "list-item-no-padding": !e.icon
               }
            }, [e.icon ? n("div", {
               staticClass: "list-item-default__icon-wr"
            }, [e.isImg ? n("img", {
               attrs: {
                  src: e.icon,
                  alt: ""
               }
            }) : n("span", {
               staticClass: "list-item-default__icon",
               class: e.icon
            })]) : e._e(), e._v(" " + e._s(e.text) + " "), e._t("default")], 2)])
         },
         s = [],
         o = (n("a9e3"), n("caad"), n("2532"), {
            name: "BaseListItemDefault",
            emits: ["click"],
            props: {
               to: {
                  type: String
               },
               icon: {
                  type: String
               },
               text: {
                  type: String
               },
               button: {
                  type: Boolean
               },
               noIcon: {
                  type: Boolean
               },
               isImg: {
                  type: Boolean
               },
               count: {
                  type: Number
               }
            },
            methods: {
               onClick: function () {
                  console.log("base clicked"), this.$emit("click")
               },
               useHref: function () {
                  var e;
                  return !(null === (e = this.to) || void 0 === e || !e.includes("http"))
               }
            }
         }),
         i = o,
         a = (n("6477"), n("2877")),
         c = Object(a["a"])(i, r, s, !1, null, "5051594c", null);
      t["a"] = c.exports
   },
   9134: function (e, t, n) {
      "use strict";
      n("acf2")
   },
   9542: function (e, t, n) {
      "use strict";
      n("b89a")
   },
   "986e": function (e, t, n) {
      "use strict";
      var r = n("2b0e");
      t["a"] = new r["default"]
   },
   "9c2b": function (e, t, n) {
      "use strict";
      n("69a9")
   },
   "9d25": function (e, t, n) {
      "use strict";
      n("6b0a")
   },
   "9e7d": function (e, t, n) {
      "use strict";
      n("186b")
   },
   a06a: function (e, t, n) {
      "use strict";
      n("643f")
   },
   a18c: function (e, t, n) {
      "use strict";
      var r = n("2909"),
         s = n("5530"),
         o = (n("b0c0"), n("d3b7"), n("3ca3"), n("ddb0"), n("99af"), n("25eb"), n("a9e3"), n("9129"), n("2b0e")),
         i = n("8c4f"),
         a = n("580f"),
         c = function () {
            return n.e("chunk-10e6a05d").then(n.bind(null, "bede"))
         },
         u = function () {
            return Promise.all([n.e("chunk-a9464d02"), n.e("chunk-090d2b2e"), n.e("chunk-68d2811e"), n.e("chunk-19beea7d"), n.e("chunk-4fb07ccc")]).then(n.bind(null, "1f6a"))
         },
         l = function () {
            return n.e("chunk-17424664").then(n.bind(null, "e92a"))
         },
         d = function () {
            return n.e("chunk-f1eda6f2").then(n.bind(null, "31c0"))
         },
         p = function () {
            return n.e("chunk-1614e278").then(n.bind(null, "1cde"))
         },
         f = function () {
            return n.e("chunk-987a3928").then(n.bind(null, "155d"))
         },
         m = function () {
            return n.e("chunk-47037e3f").then(n.bind(null, "630f"))
         },
         g = function () {
            return n.e("chunk-24ca37e7").then(n.bind(null, "3142"))
         },
         h = function () {
            return n.e("chunk-bd2dd5a4").then(n.bind(null, "3a31"))
         },
         v = function () {
            return n.e("chunk-70330e27").then(n.bind(null, "0e3e"))
         },
         b = function () {
            return n.e("chunk-335fac3a").then(n.bind(null, "a7ed"))
         },
         w = function () {
            return n.e("chunk-2c88a14c").then(n.bind(null, "7818"))
         },
         k = [{
            path: "/",
            name: "Landing",
            component: c,
            meta: {
               type: "index",
               requiresAuth: !1,
               minimumOnboardingLevel: 0,
               allowWithoutAuth: !0
            }
         }, {
            path: "/invite-page/:token",
            name: "LandingInvite",
            props: !0,
            component: u,
            meta: {
               type: "index2",
               requiresAuth: !1,
               minimumOnboardingLevel: 0,
               allowWithoutAuth: !0
            }
         }, {
            path: "/invite-page/",
            name: "LandingInvite",
            props: !0,
            component: u,
            meta: {
               type: "index2",
               requiresAuth: !1,
               minimumOnboardingLevel: 0,
               allowWithoutAuth: !0
            }
         }, {
            path: "/invites/:token",
            name: "LandingInvite",
            props: !0,
            component: u,
            meta: {
               type: "index2",
               requiresAuth: !1,
               minimumOnboardingLevel: 0,
               allowWithoutAuth: !0
            }
         }, {
            path: "/invites/",
            name: "LandingInvite",
            props: !0,
            component: u,
            meta: {
               type: "index2",
               requiresAuth: !1,
               minimumOnboardingLevel: 0,
               allowWithoutAuth: !0
            }
         }, {
            path: "/how-it-works",
            name: "HowItWorks",
            component: a["default"],
            meta: {
               type: "index3",
               requiresAuth: !1,
               minimumOnboardingLevel: 0,
               allowWithoutAuth: !0
            }
         }, {
            path: "/login",
            name: "Login",
            component: l,
            props: !0,
            meta: {
               type: "auth",
               requiresAuth: !1,
               minimumOnboardingLevel: 0,
               allowWithoutAuth: !0
            }
         }, {
            path: "/forgot-password",
            name: "ForgotPassword",
            component: h,
            props: !0,
            meta: {
               type: "auth",
               requiresAuth: !1,
               minimumOnboardingLevel: 0
            },
            beforeEnter: function (e, t, n) {
               "Login" === t.name ? n() : n("/")
            }
         }, {
            path: "/forgot-password/:routeEmail",
            name: "ForgotPasswordWithEmail",
            component: h,
            props: !0,
            meta: {
               type: "auth",
               requiresAuth: !1,
               minimumOnboardingLevel: 0
            }
         }, {
            path: "/reset",
            query: {
               name: "code"
            },
            name: "CreateNewPw",
            component: v,
            props: !0,
            meta: {
               type: "auth",
               requiresAuth: !1,
               minimumOnboardingLevel: 0
            }
         }, {
            path: "/reset-success",
            query: {
               name: "code"
            },
            name: "PasswordResetSuccess",
            component: b,
            props: !0,
            meta: {
               type: "auth",
               requiresAuth: !1,
               minimumOnboardingLevel: 0
            },
            beforeEnter: function (e, t, n) {
               "CreateNewPw" === t.name ? n() : n("/")
            }
         }, {
            path: "/signup",
            name: "SignUp",
            component: d,
            props: !0,
            meta: {
               type: "auth",
               requiresAuth: !1,
               minimumOnboardingLevel: 0
            }
         }, {
            path: "/verify-email",
            name: "VerifyEmail",
            component: f,
            props: !0,
            meta: {
               type: "auth",
               requiresAuth: !1,
               minimumOnboardingLevel: 0
            },
            beforeEnter: function (e, t, n) {
               "Login" === t.name || "SignUp" === t.name ? n() : n("/")
            }
         }, {
            path: "/email/verify/:token",
            name: "EmailVerification",
            component: w,
            props: !0,
            meta: {
               type: "emailVerification",
               allowWithoutAuth: !0,
               requiresAuth: !1,
               minimumOnboardingLevel: 0
            }
         }, {
            path: "/onboarding/step1",
            name: "OnboardingInstructions",
            component: p,
            props: !0,
            meta: {
               type: "auth",
               requiresAuth: !1,
               minimumOnboardingLevel: 0
            }
         }, {
            path: "/account-created",
            name: "AccountCreated",
            component: m,
            props: !0,
            meta: {
               type: "auth",
               requiresAuth: !1,
               minimumOnboardingLevel: 0
            },
            beforeEnter: function (e, t, n) {
               "VerifyEmail" === t.name || "Login" === t.name ? n() : n("/")
            }
         }, {
            path: "/complete-profile",
            name: "completeProfile",
            component: g,
            props: !0,
            meta: {
               type: "auth",
               requiresAuth: !0,
               minimumOnboardingLevel: 0
            },
            beforeEnter: function (e, t, n) {
               console.log("From: ", t), "Login" === t.name || "AccountCreated" === t.name || "OnboardingInstructions" === t.name || "Home" === t.name || "Feed" === t.name || "EmailVerification" === t.name || "/" === t.path ? n() : n("/")
            }
         }, {
            path: "/complete-profile-test",
            name: "completeProfileTest",
            component: g,
            props: !0,
            meta: {
               type: "auth",
               requiresAuth: !0,
               minimumOnboardingLevel: 1
            }
         }],
         _ = k,
         C = n("4360"),
         y = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("div", {
               staticClass: "error-user-not-found__container"
            }, [e.isSuperAdmin ? n("manage-user-button", {
               attrs: {
                  isSuperAdmin: e.isSuperAdmin,
                  targetUser: e.targetUser
               }
            }) : e._e(), n("div", {
               staticClass: "error-user-not-found__card"
            }, [n("img", {
               attrs: {
                  src: e.notFound
               }
            }), n("h1", [e._v("Sorry this user was not found")])])], 1)
         },
         x = [],
         P = n("b6ab"),
         I = n.n(P),
         j = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("div", [n("base-dropdown", {
               attrs: {
                  text: "Delete",
                  "class-dropdown": "delete-button superAdmin-btn",
                  "custom-text": ""
               },
               scopedSlots: e._u([{
                  key: "button-content",
                  fn: function () {
                     return [n("span", {
                        staticClass: "delete-btn__text "
                     }, [n("span", {
                        staticClass: "icon-remove"
                     }), e._v(" Delete")])]
                  },
                  proxy: !0
               }, {
                  key: "default",
                  fn: function () {
                     return [n("base-list-item-bold", {
                        attrs: {
                           id: "delete-suspend",
                           name: "Suspend"
                        },
                        nativeOn: {
                           click: function (t) {
                              return e.showDeleteWarningModal("suspend")
                           }
                        }
                     }), e.isSuperAdmin ? n("base-list-item-bold", {
                        attrs: {
                           id: "delete-deactivate",
                           name: "Deactivate"
                        },
                        nativeOn: {
                           click: function (t) {
                              return e.showDeleteWarningModal("deactivate")
                           }
                        }
                     }) : e._e(), e.isSuperAdmin ? n("base-list-item-bold", {
                        staticStyle: {
                           color: "red !important"
                        },
                        attrs: {
                           id: "delete-full",
                           name: "Full delete"
                        },
                        nativeOn: {
                           click: function (t) {
                              return e.showDeleteWarningModal("full-delete")
                           }
                        }
                     }) : e._e()]
                  },
                  proxy: !0
               }])
            }), n("base-warning-modal", {
               attrs: {
                  id: "delete-user-warning-modal",
                  message: "Are you sure you would like to " + e.deleteType + " " + e.targetUser.title + "?"
               },
               on: {
                  ok: e.deleteProfile
               }
            })], 1)
         },
         M = [],
         R = n("1da1"),
         O = (n("96cf"), n("454b")),
         A = n("1222"),
         S = n("e832"),
         T = {
            components: {
               BaseListItemBold: A["default"],
               BaseDropdown: O["a"],
               BaseWarningModal: S["a"]
            },
            props: {
               isSuperAdmin: {
                  type: Boolean
               },
               targetUser: {
                  type: Object
               }
            },
            data: function () {
               return {
                  deleteType: ""
               }
            },
            computed: {
               profile: function () {
                  return this.$store.getters["user/getProfile"]
               },
               role: function () {
                  return this.$store.getters["profile/getProfileRole"]
               }
            },
            methods: {
               showDeleteWarningModal: function (e) {
                  var t = this;
                  this.deleteType = e, this.$nextTick((function () {
                     t.$bvModal.show("delete-user-warning-modal")
                  }))
               },
               deleteProfile: function () {
                  var e = this;
                  return Object(R["a"])(regeneratorRuntime.mark((function t() {
                     var n, r, s;
                     return regeneratorRuntime.wrap((function (t) {
                        while (1) switch (t.prev = t.next) {
                           case 0:
                              if (console.log("😜" + e.deleteType), n = "", r = "", s = e.deleteType, "suspend" !== s) {
                                 t.next = 11;
                                 break
                              }
                              return t.next = 7, e.$store.dispatch("admin/suspendUser", {
                                 id: e.profile.userId,
                                 role: e.role
                              });
                           case 7:
                              n = t.sent, r = n.success ? "Successfully suspended ".concat(e.targetUser.title) : "Was unable to suspend ".concat(e.targetUser.title), t.next = 23;
                              break;
                           case 11:
                              if ("deactivate" !== s) {
                                 t.next = 18;
                                 break
                              }
                              return t.next = 14, e.$store.dispatch("admin/deactivateUser", {
                                 id: e.profile.userId,
                                 role: e.role
                              });
                           case 14:
                              n = t.sent, r = n.success ? "Successfully deactivated ".concat(e.targetUser.title) : "Was unable to deactivate ".concat(e.targetUser.title), t.next = 23;
                              break;
                           case 18:
                              if ("full-delete" !== s) {
                                 t.next = 23;
                                 break
                              }
                              return t.next = 21, e.$store.dispatch("admin/deleteUser", {
                                 id: e.profile.userId,
                                 role: e.role
                              });
                           case 21:
                              n = t.sent, r = n.success ? "Successfully deleted ".concat(e.targetUser.title) : "Was unable to delete ".concat(e.targetUser.title);
                           case 23:
                              e.$bvToast.toast(r, {
                                 autoHideDelay: 2e3,
                                 noCloseButton: !0,
                                 toaster: "b-toaster-top-center"
                              });
                           case 24:
                           case "end":
                              return t.stop()
                        }
                     }), t)
                  })))()
               }
            }
         },
         F = T,
         L = (n("52f3"), n("2877")),
         $ = Object(L["a"])(F, j, M, !1, null, "40b9860e", null),
         B = $.exports,
         U = {
            name: "NotFound",
            components: {
               ManageUserButton: B
            },
            props: {
               targetUser: {
                  type: Object
               }
            },
            data: function () {
               return {
                  notFound: I.a,
                  isSuperAdmin: null
               }
            },
            mounted: function () {
               console.log("MOUNTED!!"), console.log(this.targetUser.targetUser);
               var e = this.$store.getters["profile/getProfileRole"];
               console.log(e), this.isSuperAdmin = "Super Admin" === e, console.log(this.isSuperAdmin)
            }
         },
         D = U,
         N = (n("9542"), Object(L["a"])(D, y, x, !1, null, "5b24c19b", null)),
         E = N.exports,
         q = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return e.deactivated ? n("div", [n("not-found", {
               attrs: {
                  targetUser: e.targetUser
               }
            })], 1) : n("div", {
               staticClass: "ui-wrapper-profile"
            }, [n("div", {
               staticClass: "ui-wrapper-profile__left"
            }, [n("ProfileHeader", {
               attrs: {
                  isOwn: this.isProfileOwner,
                  targetUser: e.targetUser
               }
            })], 1), n("div", {
               staticClass: "ui-wrapper-profile__main"
            }, [n("div", {
               staticClass: "ui-wrapper-profile__main-left"
            }, [e.fetched ? n("b-tabs", {
               attrs: {
                  "content-class": "mt-0"
               }
            }, [n("b-tab", {
               attrs: {
                  title: "Overview",
                  active: ""
               }
            }, [n("div", {
               staticClass: "ui-wrapper-profile__main__overview"
            }, [n("AboutOverview", {
               attrs: {
                  isOwn: this.isProfileOwner
               }
            }), n("ProfileActivity", {
               attrs: {
                  profileId: e.profileId,
                  title: e.title.split(" ")[0]
               }
            }), n("ProfileReviews", {
               staticClass: "ui-hide"
            })], 1)]), e.checkIfTabPresent(e.abouts) ? n("b-tab", {
               ref: "aboutTab",
               attrs: {
                  title: "About"
               }
            }, [n("AboutTab", {
               attrs: {
                  isOwn: this.isProfileOwner
               }
            })], 1) : e._e()], 1) : n("div", [n("b-skeleton", {
               staticClass: "loading-tab"
            }), n("div", {
               staticClass: "ui-wrapper-profile__main__overview"
            }, [n("AboutOverview"), n("RecentPostsOverview"), n("ProfileReviews", {
               staticClass: "ui-hide"
            }), n("ProfileCloseCircles")], 1)], 1)], 1), n("div", {
               staticClass: "ui-wrapper-profile__main-right ui-hide-mobile"
            }, [n("div", {
               staticStyle: {
                  height: "55px"
               }
            }), n("ProfileCountsMeta", {
               attrs: {
                  "is-own": this.isProfileOwner,
                  fromProfile: !0,
                  score: e.score
               }
            })], 1)]), n("add-new-tab-modal", {
               ref: "add-new-tab-modal",
               on: {
                  tabAdded: e.onTabAdded
               }
            })], 1)
         },
         z = [],
         H = (n("4de4"), function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("div", {
               staticClass: "ui-profile-header"
            }, [n("div", {
               staticClass: "ui-profile-header__cover",
               style: e.profileBanner
            }), n("div", {
               staticClass: "ui-profile-header__user"
            }, [n("div", {
               staticClass: "user-image"
            }, [e.profilePicture ? n("div", {
               staticClass: "questions-icon-wrapper"
            }, [n("img", {
               staticClass: "user-image__img",
               attrs: {
                  src: e.profilePicture.url,
                  alt: "user"
               }
            }), e.showQuestionsIcon ? n("base-icon-button", {
               staticClass: "user-info-1__address questions-icon",
               attrs: {
                  icon: "icon-user-address"
               },
               on: {
                  iconClicked: e.handleModalQuestionsClicked
               }
            }) : e._e()], 1) : n("b-skeleton", {
               staticClass: "user-image__img",
               attrs: {
                  type: "avatar"
               }
            })], 1), this.profile.socialLinks ? n("div", {
               staticClass: "user-social"
            }, e._l(this.profile.socialLinks, (function (t, r) {
               return n("div", {
                  key: r
               }, [e.hasSocialLink(t.name) ? n("base-icon-button", {
                  staticClass: "user-social__btn",
                  attrs: {
                     icon: e.iconName(t.name)
                  },
                  on: {
                     iconClicked: function (n) {
                        return e.goToSocialLink(t.name)
                     }
                  }
               }) : e._e()], 1)
            })), 0) : e._e(), n("div", {
               staticClass: "user-info-1"
            }, [n("div", {
               staticClass: "ui-flex-col ui-align-center"
            }, [e.profile.title ? n("div", [n("h1", {
               staticClass: "user-info-1__t1"
            }, [e._v(" " + e._s(e.profile.title) + " ")]), n("div", e._l(e.profile.badges, (function (t, r) {
               return n("span", {
                  key: r,
                  staticClass: "user-info-1__label",
                  style: {
                     background: t.badge.color
                  }
               }, [e._v(" " + e._s(t.badge.text))])
            })), 0)]) : n("b-skeleton", {
               staticClass: "user-info-1__t1 user-info-1__t1-loading"
            })], 1), e.profileSubtitle ? n("p", {
               staticClass: "user-info-1__t2"
            }, [e._v(" " + e._s(e.profileSubtitle) + " ")]) : n("b-skeleton", {
               staticClass: "user-info-1__t2 user-info-1__t2-loading"
            })], 1), e.profileLocation ? n("div", {
               staticClass: "user-info-2"
            }, [n("div", {
               staticClass: "user-info-2__t1"
            }, [n("svg", {
               staticClass: "ui-icon",
               attrs: {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  "stroke-width": "2"
               }
            }, [n("path", {
               attrs: {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
               }
            }), n("path", {
               attrs: {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
               }
            })]), e._v(" " + e._s(e.profileLocation) + " ")]), n("div", {
               staticClass: "user-info-2__follow"
            }, [n("div", {
               staticClass: "user-info-2__follow--r",
               on: {
                  click: function (t) {
                     return e.showFollowingModal("followers")
                  }
               }
            }, [n("span", {
               staticClass: "ui-number"
            }, [e._v(e._s(e.profile.counts.followers || "0"))]), e._v(" Followers")]), n("hr"), n("div", {
               staticClass: "user-info-2__follow--l",
               on: {
                  click: function (t) {
                     return e.showFollowingModal("following")
                  }
               }
            }, [n("span", {
               staticClass: "ui-number"
            }, [e._v(e._s(e.profile.counts.followings || "0"))]), e._v(" Following")])])]) : n("b-skeleton", {
               staticClass: "actions-loading"
            }), e.profile.fetched ? n("div", {
               staticClass: "user-action"
            }, [!e.isOwn & e.isAuth ? n("button", {
               staticClass: "ui-btn ui-btn__outline user-action__send-message",
               on: {
                  click: e.onMessageClicked
               }
            }, [n("svg", {
               staticClass: "btn-icon",
               attrs: {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  "stroke-width": "2"
               }
            }, [n("path", {
               attrs: {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
               }
            })]), e._v(" Message ")]) : e._e(), !e.isOwn & e.isAuth ? n("button", {
               staticClass: "ui-btn ui-btn__outline",
               class: e.profile.followed ? "" : "user-action__follow",
               on: {
                  click: function (t) {
                     return t.preventDefault(), e.toggleFollow(t)
                  }
               }
            }, [n("svg", {
               staticClass: "btn-icon",
               attrs: {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  "stroke-width": "2"
               }
            }, [n("path", {
               attrs: {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
               }
            })]), e._v(" " + e._s(e.profile.followed ? "Unfollow" : "Follow") + " ")]) : e._e(), !e.isOwn & e.profile.followed ? n("button", {
               staticClass: "ui-btn ui-btn__outline user-action__notify",
               on: {
                  click: function (t) {
                     return e.setNotification()
                  }
               }
            }, [e.loader ? n("b-spinner", {
               attrs: {
                  small: "",
                  label: "loader"
               }
            }) : [n("span", {
               class: e.profile.notifyMe ? "icon-notification-fill-on" : "icon-notification-off"
            })]], 2) : e._e(), e.isOwn ? n("button", {
               staticClass: "ui-btn ui-btn__outline user-action__edit-profile",
               on: {
                  click: e.showEditProfileModal
               }
            }, [n("svg", {
               staticClass: "btn-icon",
               attrs: {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  "stroke-width": "2"
               }
            }, [n("path", {
               attrs: {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
               }
            })]), e._v(" Edit Profile ")]) : e._e(), e.isSuperAdmin || e.isModerator ? n("manage-user-button", {
               attrs: {
                  isSuperAdmin: e.isSuperAdmin,
                  targetUser: e.targetUser
               }
            }) : e._e(), e.isOwn && e.show ? n("edit-profile-modal", {
               ref: "editProfileModal",
               attrs: {
                  editProfile: e.profile
               },
               on: {
                  onClose: function (t) {
                     e.show = !1
                  }
               }
            }) : e._e()], 1) : e._e(), n("schedule-post-modal", {
               ref: "sharePostModal",
               attrs: {
                  id: "join-notification-post",
                  "modal-data": e.modalData
               },
               on: {
                  postStatus: e.setNotification
               }
            })], 1), n("user-follower-list-modal", {
               ref: "showFollowerListModal",
               attrs: {
                  isOwn: e.isOwn,
                  currentProfileId: e.profile.profileId || "",
                  type: e.followType,
                  title: "Following"
               }
            })], 1)
         }),
         G = [],
         W = (n("7db0"), n("9911"), n("25f0"), n("1581")),
         V = n.n(W),
         Y = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return e.show ? n("base-modal", {
               staticClass: "edit-profile edit-modal",
               attrs: {
                  id: "edit-profile-modal",
                  title: e.modalTitle,
                  scrollable: "",
                  mount: e.show,
                  "show-back": e.showBack,
                  shortHeight: "status" === e.mode,
                  size: "lg"
               },
               on: {
                  onClose: e.closeModal,
                  goBack: e.goBack
               },
               scopedSlots: e._u(["status" === e.mode ? {
                  key: "footer",
                  fn: function () {
                     return [n("div", {
                        staticClass: "modal-footer__left"
                     }, [n("button", {
                        staticClass: "\n          ui-btn ui-btn__outline ui-btn__transparent--add\n          ui-flex ui-justify-center ui-align-center\n        "
                     }, [n("span", {
                        staticClass: "icon-plus"
                     }), n("span", {
                        staticClass: "footer-btn--text"
                     }, [e._v("Add More Status")])])]), n("div", {
                        staticClass: "modal-footer__right"
                     }, [n("button", {
                        staticClass: "ui-btn",
                        on: {
                           click: function (t) {
                              return t.preventDefault(), e.onStatusSave(e.save)
                           }
                        }
                     }, [e._v("Save")])])]
                  },
                  proxy: !0
               } : {
                  key: "footer",
                  fn: function (t) {
                     var r = t.save;
                     return [n("div", {
                        staticClass: "modal-footer__right"
                     }, ["meta" === e.mode ? n("button", {
                        staticClass: "ui-btn",
                        on: {
                           click: function (t) {
                              return t.preventDefault(), e.onMetaSave(r)
                           }
                        }
                     }, [e._v(" Save ")]) : n("button", {
                        staticClass: "ui-btn",
                        on: {
                           click: function (t) {
                              return t.preventDefault(), e.onProfileSave(r)
                           }
                        }
                     }, [e.loading ? n("b-spinner", {
                        attrs: {
                           small: "",
                           label: "loader"
                        }
                     }) : [e._v(" Save ")]], 2)])]
                  }
               }], null, !0)
            }, [n("template", {
               slot: "body"
            }, [n("validation-observer", {
               ref: "observer"
            }, ["status" === e.mode ? n("edit-status") : "meta" === e.mode ? n("edit-meta") : n("b-form", {
               staticClass: "ui-form",
               on: {
                  submit: function (e) {
                     e.preventDefault()
                  }
               }
            }, [n("div", {
               staticClass: "\n            ui-form__row ui-form__row-single\n            edit-profile__profile-banner\n          "
            }, [n("div", {
               staticClass: "edit-profile__profile-banner-img",
               style: {
                  "background-image": "url(" + e.profileBanner.url + ")"
               }
            }, [n("file-upload", {
               ref: "upload",
               staticClass: "edit-profile__profile-banner-upload",
               attrs: {
                  for: "img-upload",
                  "input-id": "banner",
                  extensions: e.uploadParams.extensions,
                  accept: e.uploadParams.accept,
                  multiple: e.uploadParams.multiple,
                  directory: e.uploadParams.directory,
                  thread: e.uploadParams.thread,
                  drop: e.uploadParams.drop,
                  "drop-directory": e.uploadParams.dropDirectory,
                  "add-index": e.uploadParams.addIndex
               },
               on: {
                  "input-file": e.inputBannerFile,
                  "input-filter": e.inputFilter
               }
            }, [n("base-icon-button", {
               staticClass: "edit-profile__profile-banner-upload--btn",
               attrs: {
                  icon: "icon-edit-outline"
               }
            })], 1)], 1), n("p", {
               staticClass: "edit-profile__profile-banner-hint"
            }, [e._v(" Recommended size 1500px by 395px ")])]), n("div", {
               staticClass: "edit-profile__profile-img ui-form__row ui-form__row-single"
            }, [n("div", {
               staticClass: "user-image"
            }, [n("img", {
               staticClass: "user-image__img",
               attrs: {
                  src: e.profilePicture.url,
                  alt: "user"
               }
            }), n("file-upload", {
               ref: "upload",
               staticClass: "user-image__upload",
               attrs: {
                  for: "img-upload",
                  "input-id": "picture",
                  extensions: e.uploadParams.extensions,
                  accept: e.uploadParams.accept,
                  multiple: e.uploadParams.multiple,
                  directory: e.uploadParams.directory,
                  thread: e.uploadParams.thread,
                  drop: e.uploadParams.drop,
                  "drop-directory": e.uploadParams.dropDirectory,
                  "add-index": e.uploadParams.addIndex
               },
               on: {
                  "input-file": e.inputPictureFile,
                  "input-filter": e.inputFilter
               }
            }, [n("base-icon-button", {
               staticClass: "user-image__upload--btn",
               attrs: {
                  icon: "icon-edit-outline",
                  alt: "upload"
               }
            })], 1)], 1)]), n("div", {
               staticClass: "ui-form__row"
            }, [n("base-input", {
               attrs: {
                  label: "First Name",
                  type: "text",
                  placeholder: "First name",
                  value: e.profile.firstName
               },
               on: {
                  input: function (t) {
                     return e.profile.firstName = t
                  }
               }
            }), n("base-input", {
               attrs: {
                  label: "Last Name",
                  type: "text",
                  placeholder: "Last name",
                  value: e.profile.lastName
               },
               on: {
                  input: function (t) {
                     return e.profile.lastName = t
                  }
               }
            })], 1), n("div", {
               staticClass: "ui-form__row ui-form__row-single"
            }, [n("base-input", {
               attrs: {
                  label: "Public Tagline",
                  type: "text",
                  placeholder: "Public Tagline",
                  value: e.profile.subtitle
               },
               on: {
                  input: function (t) {
                     return e.profile.subtitle = t
                  }
               }
            })], 1), n("div", {
               staticClass: "ui-form__row ui-form__row-single"
            }, [n("base-textarea", {
               attrs: {
                  label: "Description",
                  type: "text",
                  placeholder: "Description",
                  value: e.profile.description
               },
               on: {
                  input: function (t) {
                     return e.profile.description = t
                  }
               }
            })], 1), n("div", {
               ref: "status-meta-div",
               staticClass: "ui-form__row"
            }, [n("base-city-auto-suggest", {
               attrs: {
                  label: "City & State:",
                  placeholder: "Enter City",
                  name: "City",
                  value: e.profile.city.name + ", " + e.profile.city.admin,
                  includeState: ""
               },
               on: {
                  selected: e.onCitySelected,
                  inputQuery: function (t) {
                     return e.profile.city.name = t
                  }
               }
            }), n("base-input", {
               attrs: {
                  label: "Country:",
                  type: "text",
                  placeholder: "Country",
                  value: e.profile.country,
                  "no-validate": "",
                  readonly: ""
               },
               on: {
                  input: function (t) {
                     return e.profile.country = t
                  }
               }
            })], 1), n("h5", {
               staticClass: "ui-model-title social-title"
            }, [e._v("Link Social Sites:")]), n("div", {
               staticClass: "ui-form__row edit-profile__tab-manager"
            }, [n("div", {
               staticClass: "edit-profile__tab-manager-left"
            }, e._l(e.profile.socialLinks, (function (t, r) {
               return n("div", {
                  key: r,
                  staticClass: "ui-flex social-sites"
               }, [n("span", {
                  staticClass: "social-sites__icon",
                  class: e.getIconClass(t)
               }), n("p", {
                  staticClass: "ui-flex-grow social-sites__text"
               }, [e._v(e._s(t.name))]), t.link || t.showInput ? [n("div", {
                  staticClass: "social-sites__action"
               }, [n("b-input-group", {
                  staticClass: "social-sites-group"
               }, [n("div", {
                  ref: "socialAppend",
                  refInFor: !0,
                  staticClass: "social-sites-group__prepend ui-hide-mobile "
               }, [e._v(" " + e._s(t.url) + " ")]), n("base-input", {
                  ref: t.name + "-input",
                  refInFor: !0,
                  staticClass: "social-sites-group__input",
                  attrs: {
                     "no-validate": "",
                     id: t.name + "-input",
                     placeholder: "Enter your " + t.name + " Profile Handle",
                     value: t.link,
                     "clear-on-focus-out": !0
                  },
                  on: {
                     input: function (e) {
                        return t.link = e
                     },
                     focusIn: function (t) {
                        return e.onFocus(r)
                     },
                     focusOut: function (t) {
                        return e.onFocusOut(r)
                     }
                  }
               })], 1)], 1), n("base-icon-button", {
                  attrs: {
                     icon: "icon-close social-sites__close size10"
                  },
                  on: {
                     iconClicked: function (n) {
                        return e.removeSocialLink(t)
                     }
                  }
               })] : t.showInput ? e._e() : [n("div", {
                  staticClass: "social-sites__action"
               }, [n("button", {
                  staticClass: "ui-btn social-sites__btn",
                  on: {
                     click: function (n) {
                        return e.showSocialInput(t, !0)
                     }
                  }
               }, [e._v(" Add Link ")])])]], 2)
            })), 0)])])], 1)], 1)], 2) : e._e()
         },
         J = [],
         K = n("b85c"),
         Q = (n("a4d3"), n("e01a"), n("1276"), n("ac1f"), n("159b"), n("2b3d"), n("caad"), n("2532"), n("7299")),
         Z = n("b8dc"),
         X = n("5455"),
         ee = n.n(X),
         te = n("f367"),
         ne = n("7bb1"),
         re = n("8019"),
         se = n.n(re),
         oe = n("c048"),
         ie = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("b-form", {
               staticClass: "ui-form"
            }, [n("div", {
               staticClass: "ui-form__row"
            }, [n("base-input", {
               attrs: {
                  label: "Status: 1",
                  type: "text",
                  placeholder: "Available",
                  "no-validate": ""
               }
            }, [n("base-icon-button", {
               staticClass: "btn-right",
               attrs: {
                  icon: "icon-remove"
               }
            })], 1), n("base-input", {
               attrs: {
                  label: "Status: 2",
                  type: "text",
                  placeholder: "",
                  "no-validate": ""
               }
            }, [n("base-icon-button", {
               staticClass: "btn-right",
               attrs: {
                  icon: "icon-remove"
               }
            })], 1), n("base-input", {
               attrs: {
                  label: "Status: 3",
                  type: "text",
                  placeholder: "",
                  "no-validate": ""
               }
            }, [n("base-icon-button", {
               staticClass: "btn-right",
               attrs: {
                  icon: "icon-remove"
               }
            })], 1), n("base-input", {
               attrs: {
                  label: "Status: 4",
                  type: "text",
                  placeholder: "",
                  "no-validate": ""
               }
            }, [n("base-icon-button", {
               staticClass: "btn-right",
               attrs: {
                  icon: "icon-remove"
               }
            })], 1), n("base-input", {
               attrs: {
                  label: "Status: 4",
                  type: "text",
                  placeholder: "",
                  "no-validate": ""
               }
            }, [n("base-icon-button", {
               staticClass: "btn-right",
               attrs: {
                  icon: "icon-remove"
               }
            })], 1)], 1)])
         },
         ae = [],
         ce = {
            name: "EditStatusModal",
            components: {
               BaseIconButton: te["default"],
               BaseInput: Z["a"]
            },
            props: ["statuses"]
         },
         ue = ce,
         le = Object(L["a"])(ue, ie, ae, !1, null, "33e83272", null),
         de = le.exports,
         pe = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("b-form", {
               staticClass: "ui-form"
            }, [n("div", {
               staticClass: "ui-form__row ui-form__row-single"
            }, [n("base-input-tags", {
               attrs: {
                  label: "Languages",
                  placeholder: "Add languages"
               }
            }), n("base-input-tags", {
               attrs: {
                  label: "Locations"
               }
            }), n("base-input-tags", {
               attrs: {
                  label: "Industries"
               }
            }), n("base-input-tags", {
               attrs: {
                  label: "Expertise"
               }
            }), n("base-input-tags", {
               attrs: {
                  label: "Project size"
               }
            })], 1)])
         },
         fe = [],
         me = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("div", {
               staticClass: "ui-input-default"
            }, [e.label ? n("label", {
               staticClass: "ui-label ui-input-default__label",
               attrs: {
                  for: "type-" + e.label
               }
            }, [e._v(e._s(e.label))]) : e._e(), n("b-form-tags", {
               staticClass: "ui-input-default__input",
               attrs: {
                  id: e.id ? e.id : "type-" + e.label,
                  type: e.type,
                  placeholder: e.placeholder,
                  value: e.value,
                  disabled: !!e.disabled && e.disabled
               }
            }), n("p", [e._v(e._s(e.hint))])], 1)
         },
         ge = [],
         he = {
            name: "BaseInputTags",
            props: ["type", "placeholder", "value", "label", "propRules", "hint", "id", "disabled"]
         },
         ve = he,
         be = (n("4fe5"), Object(L["a"])(ve, me, ge, !1, null, "532c0120", null)),
         we = be.exports,
         ke = {
            name: "EditMetaModal",
            components: {
               BaseInputTags: we
            }
         },
         _e = ke,
         Ce = Object(L["a"])(_e, pe, fe, !1, null, "6e944ce8", null),
         ye = Ce.exports,
         xe = n("8409"),
         Pe = {
            name: "EditProfileModal",
            props: ["editProfile"],
            emits: ["onClose"],
            components: {
               BaseIconButton: te["default"],
               BaseInput: Z["a"],
               BaseModal: Q["default"],
               FileUpload: se.a,
               ValidationObserver: ne["a"],
               BaseCityAutoSuggest: oe["a"],
               EditStatus: de,
               EditMeta: ye,
               BaseTextarea: xe["a"]
            },
            data: function () {
               return {
                  focusedInput: !1,
                  loading: !1,
                  ic_add: ee.a,
                  className: "icon-linkedin",
                  show: !1,
                  profilePicture: {
                     url: "https://upload.wikimedia.org/wikipedia/commons/9/98/Margot_Robbie_at_Somerset_House_in_2013_%28cropped%29.jpg"
                  },
                  profileBanner: {
                     url: "https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/1zOkDwmsAOFnEgiOAjzvvO/c11366aec74958f0ae5d0aceab1a9e29/Facebook-Covers-Article_Image-FB.png"
                  },
                  mode: "edit",
                  profile: {
                     firstName: null,
                     lastName: null,
                     description: null,
                     picture: null,
                     pictureId: null,
                     banner: null,
                     bannerId: null,
                     currentPosition: null,
                     cityId: null,
                     city: {
                        name: null,
                        admin: null
                     },
                     country: null,
                     socialLinks: [{
                        name: "LinkedIn",
                        link: null,
                        showInput: !1,
                        className: "icon-linkedin",
                        url: "https://www.linkedin.com/in/"
                     }, {
                        name: "Github",
                        link: null,
                        showInput: !1,
                        className: "icon-github",
                        url: "https://github.com/"
                     }, {
                        name: "Facebook",
                        link: null,
                        showInput: !1,
                        className: "icon-fb",
                        url: "https://www.facebook.com/"
                     }, {
                        name: "Twitter",
                        link: null,
                        showInput: !1,
                        className: "icon-twitter",
                        url: "https://www.twitter.com/"
                     }, {
                        name: "YouTube",
                        link: null,
                        showInput: !1,
                        className: "icon-youtube",
                        url: "https://www.youtube.com/"
                     }, {
                        name: "Instagram",
                        link: null,
                        showInput: !1,
                        className: "icon-instagram",
                        url: "https://www.instagram.com/"
                     }, {
                        name: "TikTok",
                        link: null,
                        showInput: !1,
                        className: "icon-tiktok",
                        url: "https://www.tiktok.com/"
                     }, {
                        name: "Snapchat",
                        link: null,
                        showInput: !1,
                        className: "icon-snapchat",
                        url: "https://www.snapchat.com/"
                     }, {
                        name: "Reddit",
                        link: null,
                        showInput: !1,
                        className: "icon-reddit",
                        url: "https://www.reddit.com/"
                     }, {
                        name: "Pinterest",
                        link: null,
                        showInput: !1,
                        className: "icon-pinterest",
                        url: "https://www.pinterest.com/"
                     }],
                     meta: {
                        expertise: [],
                        locations: {
                           type: "country|city|region",
                           locations: []
                        },
                        industries: [],
                        languages: []
                     }
                  },
                  uploadParams: {
                     extensions: "gif,jpg,jpeg,png,webp",
                     accept: "image/png,image/gif,image/jpeg,image/webp",
                     minSize: 1024,
                     size: 10485760,
                     multiple: !1,
                     directory: !1,
                     drop: !0,
                     dropDirectory: !1,
                     createDirectory: !1,
                     addIndex: !1,
                     thread: 3
                  }
               }
            },
            computed: {
               showBack: function () {
                  return "edit" !== this.mode
               },
               modalTitle: function () {
                  return "edit" === this.mode ? "Edit Public Profile" : "status" === this.mode ? "Edit Status" : "Edit Meta"
               }
            },
            watch: {
               loading: function (e) {
                  console.log(e)
               }
            },
            mounted: function () {
               var e = this;
               if (console.log(this.loading), this.editProfile) {
                  var t, n, r, o, i = this.editProfile,
                     a = i.title,
                     c = i.subtitle,
                     u = i.description,
                     l = i.picture,
                     d = i.banner,
                     p = i.city,
                     f = i.socialLinks,
                     m = i.meta,
                     g = i.currentPosition;
                  a && (t = a.split(" ")[0], n = a.split(" ")[1]), "undefined" != typeof l ? (console.log("🚀 ~ file: EditProfileModal.vue ~ line 569 ~ mounted ~ picture", l), r = l.id, this.profilePicture = l) : (l = null, r = null), "undefined" != typeof d ? (o = d.id, this.profileBanner = d) : (d = null, o = null), console.log("🚀 ~ file: EditProfileModal.vue ~ line 357 ~ mounted ~ pictureId", r), this.profile = Object(s["a"])(Object(s["a"])({}, this.profile), {}, {
                     firstName: t,
                     lastName: n,
                     picture: l,
                     pictureId: r,
                     banner: d,
                     bannerId: o,
                     subtitle: c,
                     description: u,
                     currentPosition: g,
                     meta: m || {
                        expertise: [],
                        locations: {
                           type: "country|city|region",
                           locations: []
                        },
                        industries: [],
                        languages: []
                     }
                  }), p && (this.profile.city = p), p.country && (this.profile.country = p.country.name), f && f.forEach((function (t) {
                     var n = e.profile.socialLinks.find((function (e) {
                        return t.name === e.name
                     }));
                     n.link = t.link
                  }))
               }
            },
            methods: {
               onFocus: function (e) {
                  this.$refs.socialAppend[e].classList.add("input-border")
               },
               onFocusOut: function (e) {
                  this.$refs.socialAppend[e].classList.remove("input-border")
               },
               inputPictureFile: function (e, t) {
                  var n = this;
                  return Object(R["a"])(regeneratorRuntime.mark((function r() {
                     var s;
                     return regeneratorRuntime.wrap((function (r) {
                        while (1) switch (r.prev = r.next) {
                           case 0:
                              if (!e || t) {
                                 r.next = 6;
                                 break
                              }
                              return n.profilePicture = e, r.next = 4, n.$store.dispatch("profile/uploadImage", {
                                 newFile: e
                              });
                           case 4:
                              s = r.sent, n.profile.pictureId = s;
                           case 6:
                           case "end":
                              return r.stop()
                        }
                     }), r)
                  })))()
               },
               inputBannerFile: function (e, t) {
                  var n = this;
                  return Object(R["a"])(regeneratorRuntime.mark((function r() {
                     var s;
                     return regeneratorRuntime.wrap((function (r) {
                        while (1) switch (r.prev = r.next) {
                           case 0:
                              if (!e || t) {
                                 r.next = 6;
                                 break
                              }
                              return n.profileBanner = e, r.next = 4, n.$store.dispatch("profile/uploadImage", {
                                 newFile: e
                              });
                           case 4:
                              s = r.sent, n.profile.bannerId = s;
                           case 6:
                           case "end":
                              return r.stop()
                        }
                     }), r)
                  })))()
               },
               inputFilter: function (e, t, n) {
                  var r = this;
                  if (e && !t) {
                     if (/(\/|^)(Thumbs\.db|desktop\.ini|\..+)$/.test(e.name)) return n();
                     if (/\.(php5?|html?|jsx?)$/i.test(e.name)) return n();
                     if (e && "" === e.error && e.file && (!t || e.file !== t.file)) {
                        e.blob = "";
                        var s = window.URL || window.webkitURL;
                        s && (e.blob = s.createObjectURL(e.file)), e.url = "", e.blob && "image/" === e.type.substr(0, 6) && (e.url = e.blob)
                     }
                     if (e && "" === e.error && "image/" === e.type.substr(0, 6) && e.blob && (!t || e.blob !== t.blob)) {
                        e.error = "image parsing";
                        var o = new Image;
                        o.onload = function () {
                           r.$refs.upload.update(e, {
                              error: "",
                              height: o.height,
                              width: o.width
                           })
                        }, o.onerror = function () {
                           r.$refs.upload.update(e, {
                              error: "parsing image size"
                           })
                        }, o.src = e.blob
                     }
                  }
               },
               getIconClass: function (e) {
                  return e.className
               },
               onCitySelected: function (e) {
                  this.$set(this.profile, "country", e.countryName), this.$set(this.profile.city, "name", e.cityName), this.profile.cityId = e.cityId, console.log("🚀 ~ file: EditProfileModal.vue ~ line 514 ~ onCitySelected ~ this.profile.cityId", this.profile.cityId)
               },
               toggleModal: function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                  this.show = e
               },
               changeMode: function (e) {
                  this.mode = e
               },
               closeModal: function (e) {
                  this.toggleModal(!1), console.log("Unmounted"), e(), this.$emit("onClose")
               },
               showSocialInput: function (e, t) {
                  e.showInput = t
               },
               removeSocialLink: function (e) {
                  e.link = null, e.showInput = !1
               },
               goBack: function () {
                  var e = this;
                  this.mode = "edit", this.$nextTick((function () {
                     e.$nextTick((function () {
                        e.$refs["status-meta-div"].scrollIntoView({
                           behavior: "smooth"
                        })
                     }))
                  }))
               },
               onMetaSave: function () {
                  return Object(R["a"])(regeneratorRuntime.mark((function e() {
                     return regeneratorRuntime.wrap((function (e) {
                        while (1) switch (e.prev = e.next) {
                           case 0:
                           case "end":
                              return e.stop()
                        }
                     }), e)
                  })))()
               },
               onStatusSave: function () {
                  return Object(R["a"])(regeneratorRuntime.mark((function e() {
                     return regeneratorRuntime.wrap((function (e) {
                        while (1) switch (e.prev = e.next) {
                           case 0:
                           case "end":
                              return e.stop()
                        }
                     }), e)
                  })))()
               },
               fixSocialLinks: function () {
                  var e, t = Object(K["a"])(this.profile.socialLinks);
                  try {
                     for (t.s(); !(e = t.n()).done;) {
                        var n = e.value,
                           r = n.url;
                        if (n.link) {
                           var s = n.link.includes(r);
                           s || (n.link = "".concat(r).concat(n.link))
                        }
                     }
                  } catch (o) {
                     t.e(o)
                  } finally {
                     t.f()
                  }
               },
               onProfileSave: function (e) {
                  var t = this;
                  return Object(R["a"])(regeneratorRuntime.mark((function n() {
                     return regeneratorRuntime.wrap((function (n) {
                        while (1) switch (n.prev = n.next) {
                           case 0:
                              return t.loading = !0, n.abrupt("return", t.$refs.observer.validate().then(function () {
                                 var n = Object(R["a"])(regeneratorRuntime.mark((function n(r) {
                                    return regeneratorRuntime.wrap((function (n) {
                                       while (1) switch (n.prev = n.next) {
                                          case 0:
                                             if (t.fixSocialLinks(), r) {
                                                n.next = 4;
                                                break
                                             }
                                             return t.loading = !1, n.abrupt("return", !1);
                                          case 4:
                                             return n.next = 6, t.$store.dispatch("profile/editProfile", t.profile);
                                          case 6:
                                             return t.closeModal(e), n.abrupt("return", !0);
                                          case 8:
                                          case "end":
                                             return n.stop()
                                       }
                                    }), n)
                                 })));
                                 return function (e) {
                                    return n.apply(this, arguments)
                                 }
                              }()));
                           case 2:
                           case "end":
                              return n.stop()
                        }
                     }), n)
                  })))()
               }
            }
         },
         Ie = Pe,
         je = (n("e3d9"), n("298d"), Object(L["a"])(Ie, Y, J, !1, null, "a9a96c54", null)),
         Me = je.exports,
         Re = n("b00d"),
         Oe = n("d2b3"),
         Ae = {
            name: "ProfileHeader",
            components: {
               BaseIconButton: te["default"],
               EditProfileModal: Me,
               SchedulePostModal: Re["default"],
               ManageUserButton: B,
               UserFollowerListModal: Oe["a"]
            },
            props: {
               isOwn: {
                  type: Boolean,
                  default: !1
               },
               targetUser: {
                  type: Object
               }
            },
            data: function () {
               return {
                  idCardLine: V.a,
                  show: !1,
                  img: {
                     url: "https://referralguidestorage.blob.core.windows.net/webcontent/fallback/avatarFallback.png"
                  },
                  deleteType: "",
                  loader: !1,
                  modalData: {},
                  followType: ""
               }
            },
            computed: {
               isAuth: function () {
                  return this.$store.getters["auth/getAuthStatus"]
               },
               storeNameSpace: function () {
                  return this.isOwn ? "profile/" : "user/"
               },
               profile: function () {
                  return this.$store.getters[this.storeNameSpace + "getProfile"]
               },
               profilePicture: function () {
                  var e = this.$store.getters[this.storeNameSpace + "getProfilePicture"];
                  return this.profile.fetched ? e || this.img : null
               },
               profileBanner: function () {
                  var e = this.$store.getters[this.storeNameSpace + "getProfileBanner"];
                  return e ? (console.log("Banner Found"), {
                     backgroundImage: "url(".concat(e.url, ")")
                  }) : {
                     background: "#212121"
                  }
               },
               profileSubtitle: function () {
                  return this.profile.fetched ? this.profile.subtitle || "No Job Title Found" : null
               },
               profileLocation: function () {
                  if (this.profile.fetched) {
                     if (this.profile.city) {
                        var e = this.profile.city.name,
                           t = this.profile.city.country.name,
                           n = "".concat(e, ", ").concat(t);
                        return n
                     }
                     return "No Location Found"
                  }
                  return null
               },
               role: function () {
                  return this.$store.getters["profile/getProfileRole"]
               },
               isSuperAdmin: function () {
                  return console.log("CHECKING IF SUPER ADMIN"), console.log(this.role), "Super Admin" === this.role
               },
               isModerator: function () {
                  return "Suspend Moderator" === this.role
               },
               isUserOnboarded: function () {
                  return this.$store.getters["profile/getProfileOnboarded"]
               },
               hasOnboardingAnswers: function () {
                  return this.$store.getters[this.storeNameSpace + "getProfileHasOnboardingAnswers"]
               },
               showQuestionsIcon: function () {
                  return this.isOwn || this.hasOnboardingAnswers
               }
            },
            methods: {
               showFollowingModal: function (e) {
                  var t = this;
                  this.isAuth && (this.followType = e, this.$nextTick((function () {
                     t.$refs.showFollowerListModal.toggleModal(!0), t.$nextTick((function () {
                        t.$bvModal.show("user-follower-modal")
                     }))
                  })))
               },
               iconName: function (e) {
                  return "Facebook" == e ? "icon-fb" : "icon-".concat(e.toLowerCase())
               },
               setNotification: function () {
                  var e = this;
                  return Object(R["a"])(regeneratorRuntime.mark((function t() {
                     var n;
                     return regeneratorRuntime.wrap((function (t) {
                        while (1) switch (t.prev = t.next) {
                           case 0:
                              return t.prev = 0, e.loader = !0, t.next = 4, e.$store.dispatch("user/notificationSettingToggle", {
                                 setting: "postPublish",
                                 type: "profiles",
                                 action: e.profile.notifyMe ? "remove" : "add",
                                 value: e.profile.profileId
                              });
                           case 4:
                              n = t.sent, n && (e.profile.notifyMe = !e.profile.notifyMe), t.next = 11;
                              break;
                           case 8:
                              throw t.prev = 8, t.t0 = t["catch"](0), t.t0.response.data.message;
                           case 11:
                              return t.prev = 11, e.loader = !1, t.finish(11);
                           case 14:
                           case "end":
                              return t.stop()
                        }
                     }), t, null, [
                        [0, 8, 11, 14]
                     ])
                  })))()
               },
               showEditProfileModal: function () {
                  var e = this;
                  this.show = !0, this.$nextTick((function () {
                     e.$refs.editProfileModal.toggleModal(!0), e.$nextTick((function () {
                        e.$bvModal.show("edit-profile-modal")
                     }))
                  }))
               },
               showProfileQuestions: function () {
                  this.$bvModal.show("questions-modal")
               },
               hasSocialLink: function (e) {
                  var t = this.profile.socialLinks;
                  return t.some((function (t) {
                     return t.name === e
                  }))
               },
               goToSocialLink: function (e) {
                  var t = this.profile.socialLinks,
                     n = t.find((function (t) {
                        return t.name === e
                     }));
                  window.open("".concat(n.link), "_blank")
               },
               toggleFollow: function () {
                  var e = this;
                  return Object(R["a"])(regeneratorRuntime.mark((function t() {
                     var n;
                     return regeneratorRuntime.wrap((function (t) {
                        while (1) switch (t.prev = t.next) {
                           case 0:
                              if (e.isUserOnboarded) {
                                 t.next = 3;
                                 break
                              }
                              return e.$bvModal.show("onboard-modal"), t.abrupt("return");
                           case 3:
                              if (!e.profile.followed) {
                                 t.next = 13;
                                 break
                              }
                              return t.next = 6, e.$store.dispatch("user/unfollowUser", {
                                 profileId: e.profile.profileId
                              });
                           case 6:
                              return t.next = 8, e.$store.dispatch("profile/removeMyProfileCount");
                           case 8:
                              return t.next = 10, e.$store.dispatch("user/removeUserProfileCount");
                           case 10:
                              e.profile.notifyMe = !1, t.next = 21;
                              break;
                           case 13:
                              return t.next = 15, e.$store.dispatch("user/followUser", {
                                 profileId: e.profile.profileId
                              });
                           case 15:
                              return n = t.sent, t.next = 18, e.$store.dispatch("user/addUserProfileCount");
                           case 18:
                              return t.next = 20, e.$store.dispatch("profile/addMyProfileCount");
                           case 20:
                              n && (e.modalData = {
                                 actionType: "enableNotification",
                                 titleText: "Enable Notification?",
                                 subtitleText: "Would you like to be notified when ".concat(e.profile.title, " posts?")
                              }, e.$root.$emit("bv::show::modal", "join-notification-post"));
                           case 21:
                           case "end":
                              return t.stop()
                        }
                     }), t)
                  })))()
               },
               onMessageClicked: function () {
                  var e = this;
                  return Object(R["a"])(regeneratorRuntime.mark((function t() {
                     var n;
                     return regeneratorRuntime.wrap((function (t) {
                        while (1) switch (t.prev = t.next) {
                           case 0:
                              if (e.isUserOnboarded) {
                                 t.next = 3;
                                 break
                              }
                              return e.$bvModal.show("onboard-modal"), t.abrupt("return");
                           case 3:
                              return t.next = 5, e.$store.dispatch("chat/getPersonalConversation", {
                                 profileId: e.profile.profileId
                              });
                           case 5:
                              n = t.sent, e.$store.dispatch("chat/openFloatingConversation", {
                                 conversation: n._id ? n : {
                                    windowId: Math.random().toString(36).substring(2, 15),
                                    user: {
                                       id: e.profile.profileId,
                                       badges: e.profile.badges,
                                       picture: e.profile.picture,
                                       title: e.profile.title,
                                       userId: e.profile.userId
                                    },
                                    isNew: !0,
                                    type: "personal"
                                 },
                                 isOpen: !0
                              });
                           case 7:
                           case "end":
                              return t.stop()
                        }
                     }), t)
                  })))()
               },
               deleteProfile: function () {
                  var e = this;
                  return Object(R["a"])(regeneratorRuntime.mark((function t() {
                     var n, r, s;
                     return regeneratorRuntime.wrap((function (t) {
                        while (1) switch (t.prev = t.next) {
                           case 0:
                              if (console.log("😜" + e.deleteType), n = "", r = "", s = e.deleteType, "suspend" !== s) {
                                 t.next = 11;
                                 break
                              }
                              return t.next = 7, e.$store.dispatch("admin/suspendUser", {
                                 id: e.profile.userId,
                                 role: e.role
                              });
                           case 7:
                              n = t.sent, r = n.success ? "Successfully suspended ".concat(e.profile.title) : "Was unable to suspend ".concat(e.profile.title), t.next = 23;
                              break;
                           case 11:
                              if ("deactivate" !== s) {
                                 t.next = 18;
                                 break
                              }
                              return t.next = 14, e.$store.dispatch("admin/deactivateUser", {
                                 id: e.profile.userId,
                                 role: e.role
                              });
                           case 14:
                              n = t.sent, r = n.success ? "Successfully deactivated ".concat(e.profile.title) : "Was unable to deactivate ".concat(e.profile.title), t.next = 23;
                              break;
                           case 18:
                              if ("full-delete" !== s) {
                                 t.next = 23;
                                 break
                              }
                              return t.next = 21, e.$store.dispatch("admin/deleteUser", {
                                 id: e.profile.userId,
                                 role: e.role
                              });
                           case 21:
                              n = t.sent, r = n.success ? "Successfully deleted ".concat(e.profile.title) : "Was unable to delete ".concat(e.profile.title);
                           case 23:
                              e.$bvToast.toast(r, {
                                 autoHideDelay: 2e3,
                                 noCloseButton: !0,
                                 toaster: "b-toaster-top-center"
                              });
                           case 24:
                           case "end":
                              return t.stop()
                        }
                     }), t)
                  })))()
               },
               showDeleteWarningModal: function (e) {
                  var t = this;
                  this.deleteType = e, this.$nextTick((function () {
                     t.$bvModal.show("delete-user-warning-modal")
                  }))
               },
               handleModalQuestionsClicked: function () {
                  console.log("Modal Questions clicked"), this.$bvModal.show("questions-modal")
               }
            }
         },
         Se = Ae,
         Te = (n("7e11"), Object(L["a"])(Se, H, G, !1, null, "dd1a8498", null)),
         Fe = Te.exports,
         Le = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("div", {
               staticClass: "ui-profile-about ui-card"
            }, [e.computedDescription ? [n("div", {
               staticClass: "ui-card__top"
            }, [n("h4", {
               staticClass: "ui-profile-about__t1"
            }, [e._v("About " + e._s(e.firstName))])]), n("p", {
               directives: [{
                  name: "linkified",
                  rawName: "v-linkified"
               }],
               staticClass: "ui-profile-about__t2"
            }, [e._v(e._s(e.description))])] : [e.loading ? [n("b-skeleton", {
               staticClass: "ui-profile-about__t1--loading"
            }), n("b-skeleton", {
               staticClass: "ui-profile-about__t1--loading ui-profile-about__t1--loading--2"
            }), n("b-skeleton", {
               staticClass: "ui-profile-about__t2 ui-profile-about__t2--loading"
            }), n("b-skeleton", {
               staticClass: "ui-profile-about__t2 ui-profile-about__t2--loading"
            }), n("b-skeleton", {
               staticClass: "\n            ui-profile-about__t2\n            ui-profile-about__t2--loading\n            ui-profile-about__t2--loading--last\n          "
            })] : [n("div", {
               staticClass: "ui-card__top"
            }, [n("h6", {
               staticClass: "ui-profile-about__t1"
            }, [e._v("About " + e._s(e.firstName))])]), e._m(0)]]], 2)
         },
         $e = [function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("div", {
               staticClass: "ui-profile-about__none-container"
            }, [n("p", {
               staticClass: "ui-profile-about__none"
            }, [e._v(" You have no "), n("span", {
               staticClass: "field"
            }, [e._v("Description")]), e._v(" yet ")])])
         }],
         Be = {
            name: "AboutOverview",
            components: {},
            props: {
               isOwn: {
                  type: Boolean,
                  default: !1
               }
            },
            data: function () {
               return {
                  loading: !0
               }
            },
            computed: {
               storeNamespace: function () {
                  return this.isOwn ? "profile/" : "user/"
               },
               firstName: function () {
                  var e = this.profileTitle;
                  if (e) {
                     var t = e.split(" ")[0];
                     return t
                  }
                  return "Margot Robbie"
               },
               about: function () {
                  var e = this.$store.getters[this.storeNamespace + "getProfileAbouts"];
                  return e.sort((function (e, t) {
                     return e.order < t.order ? -1 : e.order > t.order ? 1 : 0
                  })), console.log(e), e[0].content
               },
               description: function () {
                  return this.$store.getters[this.storeNamespace + "getProfileDescription"]
               },
               profileTitle: function () {
                  return this.$store.getters[this.storeNamespace + "getProfileTitle"]
               },
               computedDescription: function () {
                  return this.profileTitle && this.description ? (this.toggleLoading(!1), console.log("1"), this.description) : this.profileTitle && !this.description ? (this.toggleLoading(!1), console.log("2"), null) : (console.log("3"), null)
               }
            },
            methods: {
               toggleLoading: function (e) {
                  this.loading = e
               }
            }
         },
         Ue = Be,
         De = (n("5a0e"), Object(L["a"])(Ue, Le, $e, !1, null, "00b82f30", null)),
         Ne = De.exports,
         Ee = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("div", {
               staticClass: "ui-profile-recent ui-card"
            }, [e.computedPosts || e.loading ? e._e() : [e.isOwn ? n("button", {
               staticClass: "ui-btn ui-btn__outline ui-btn__card-add"
            }, [e._v(" Add now ")]) : e._e()], e.computedPosts ? [n("div", {
               staticClass: "ui-card__top"
            }, [n("h4", {
               staticClass: "ui-profile-recent__t1"
            }, [e._v("Recent Posts")]), n("div", [e.isAuth ? n("a", {
               staticClass: "ui-link ui-hide-mobile",
               on: {
                  click: function (t) {
                     return t.preventDefault(), e.showAllUserPosts(t)
                  }
               }
            }, [e._v("All Content")]) : e._e()])]), n("div", {
               staticClass: "ui-profile-recent__posts"
            }, [e.posts.length > 0 ? n("ProfilePostBlock", {
               attrs: {
                  post: e.posts[0]
               }
            }) : e._e(), e.posts.length > 1 ? n("ProfilePostBlock", {
               attrs: {
                  post: e.posts[1]
               }
            }) : e._e(), e.posts.length > 2 ? n("ProfilePostBlock", {
               attrs: {
                  post: e.posts[2]
               }
            }) : e._e()], 1), e.isAuth ? n("a", {
               staticClass: "ui-link ui-hide-none-mobile",
               on: {
                  click: function (t) {
                     return t.preventDefault(), e.showAllUserPosts(t)
                  }
               }
            }, [e._v("All Content")]) : e._e()] : [e.loading ? [n("div", {
               staticClass: "ui-card__top"
            }, [n("b-skeleton", {
               staticClass: "ui-profile-recent__t1--loading"
            }), n("b-skeleton", {
               staticClass: "ui-profile-recent__t1--loading ui-profile-recent__t1--loading--2"
            })], 1), n("div", {
               staticClass: "ui-profile-recent__posts"
            }, [n("ProfilePostBlock", {
               attrs: {
                  loading: ""
               }
            }), n("ProfilePostBlock", {
               attrs: {
                  loading: ""
               }
            }), n("ProfilePostBlock", {
               attrs: {
                  loading: ""
               }
            })], 1)] : [e._m(0), e._m(1)]]], 2)
         },
         qe = [function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("div", {
               staticClass: "ui-card__top"
            }, [n("h4", {
               staticClass: "ui-profile-recent__t1"
            }, [e._v("Recent Posts")])])
         }, function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("div", {
               staticClass: "ui-profile-recent__none-container"
            }, [n("p", {
               staticClass: "ui-profile-recent__none"
            }, [e._v(" You have no "), n("span", {
               staticClass: "field"
            }, [e._v("Posts")]), e._v(" yet ")])])
         }],
         ze = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("div", {
               staticClass: "ui-post-block"
            }, [e.loading ? n("b-skeleton-img", {
               staticClass: "ui-post-block__img"
            }) : e._e(), e.loading ? [n("b-skeleton", {
               staticClass: "ui-post-block__t1 ui-post-block__t1--loading"
            }), n("b-skeleton", {
               staticClass: "ui-post-block__t2 ui-post-block__t2--loading"
            })] : [n("div", {
               staticClass: "ui-post-block__t1",
               domProps: {
                  innerHTML: e._s(e.getDisplayContent(e.post.content))
               }
            }), n("div", {
               staticClass: "ui-post-block__view-post"
            }, [n("span", {
               staticClass: "ui-post-block__view-post--link",
               on: {
                  click: function (t) {
                     return t.preventDefault(), e.onViewPost(e.post)
                  }
               }
            }, [e._v("View Post")])]), n("div", {
               staticClass: "ui-post-block__t2"
            }, [e._v(" " + e._s(e._f("moment")(e.post.createdAt, "from", "now")) + " ")])]], 2)
         },
         He = [],
         Ge = n("be02"),
         We = {
            name: "ProfilePostBlock",
            props: {
               loading: Boolean,
               post: {}
            },
            methods: {
               getDisplayContent: function (e) {
                  return Object(Ge["a"])(this.$sanitize(e))
               },
               onViewPost: function (e) {
                  this.$router.push("/posts/".concat(e.slug))
               }
            }
         },
         Ve = We,
         Ye = (n("15df"), Object(L["a"])(Ve, ze, He, !1, null, "1d6a07af", null)),
         Je = Ye.exports,
         Ke = {
            name: "RecentPostsOverview",
            props: {
               isOwn: {
                  type: Boolean,
                  default: !1
               }
            },
            components: {
               ProfilePostBlock: Je
            },
            data: function () {
               return {
                  loading: !0
               }
            },
            computed: {
               isAuth: function () {
                  return this.$store.getters["auth/getAuthStatus"]
               },
               storeNamespace: function () {
                  return this.isOwn ? "profile/" : "user/"
               },
               posts: function () {
                  return this.$store.getters[this.storeNamespace + "getProfileRecentPosts"]
               },
               profileTitle: function () {
                  return this.$store.getters[this.storeNamespace + "getProfileTitle"]
               },
               computedPosts: function () {
                  return this.profileTitle && this.posts ? (this.toggleLoading(!1), console.log("1"), this.posts) : this.profileTitle && !this.posts ? (this.toggleLoading(!1), console.log("2"), null) : (console.log("3"), null)
               }
            },
            methods: {
               toggleLoading: function (e) {
                  this.loading = e
               },
               showAllUserPosts: function () {
                  var e = this.$store.getters[this.storeNamespace + "getProfileHandle"],
                     t = "/".concat(e, "/posts");
                  this.$router.push({
                     path: t
                  })
               }
            }
         },
         Qe = Ke,
         Ze = (n("bf53"), Object(L["a"])(Qe, Ee, qe, !1, null, "6b874988", null)),
         Xe = Ze.exports,
         et = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("div", {
               staticClass: "ui-profile-circles ui-card"
            }, [e.computedCircles || e.loading ? e._e() : [n("button", {
               staticClass: "ui-btn ui-btn__outline ui-btn__card-add"
            }, [e._v(" Join now ")])], e.computedCircles ? [n("div", {
               staticClass: "ui-card__top"
            }, [n("h2", {
               staticClass: "ui-profile-circles__t1 ui-hide-mobile"
            }, [e._v(" " + e._s(e.firstName) + "'s Bizfluence Close Circle ")]), n("h2", {
               staticClass: "ui-profile-circles__t1 ui-hide-none-mobile"
            }, [e._v(" " + e._s(e.firstName) + "'s Circle ")]), n("div", [n("b-dropdown", {
               staticClass: "sort-btn",
               attrs: {
                  split: "",
                  text: "Most Messaged",
                  right: ""
               }
            }, [n("b-dropdown-item", {
               attrs: {
                  href: "#"
               }
            }, [e._v("Action")]), n("b-dropdown-item", {
               attrs: {
                  href: "#"
               }
            }, [e._v("Another action")]), n("b-dropdown-item", {
               attrs: {
                  href: "#"
               }
            }, [e._v("Something else here...")])], 1), n("a", {
               staticClass: "ui-link ui-hide-mobile"
            }, [e._v("All Biz Contacts")])], 1)]), n("div", {
               staticClass: "ui-profile-circles__wr"
            }, e._l(6, (function (e) {
               return n("base-profile-circle", {
                  key: e,
                  attrs: {
                     name: "Annette Black",
                     avatar: "https://www.oneplanetnetwork.org/sites/default/files/profile-leena.jpg"
                  }
               })
            })), 1), n("a", {
               staticClass: "ui-link ui-hide-none-mobile"
            }, [e._v("All Biz Contacts")])] : [e.loading ? [n("div", {
               staticClass: "ui-card__top"
            }, [n("b-skeleton", {
               staticClass: "ui-profile-circles__t1--loading"
            }), n("b-skeleton", {
               staticClass: "ui-profile-circles__t1--loading ui-profile-recent__t1--loading--2"
            })], 1), n("div", {
               staticClass: "ui-profile-circles__wr ui-profile-circles__wr--loading"
            }, e._l(6, (function (e) {
               return n("base-profile-circle", {
                  key: e,
                  attrs: {
                     loading: ""
                  }
               })
            })), 1)] : [n("h2", {
               staticClass: "ui-profile-circles__t1"
            }, [e._v(" " + e._s(e.firstName) + "'s Bizfluence Close Circle ")]), n("h2", {
               staticClass: "ui-profile-circles__t1 ui-hide-none-mobile"
            }, [e._v(" " + e._s(e.firstName) + "'s Circle ")]), e._m(0)]]], 2)
         },
         tt = [function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("div", {
               staticClass: "ui-profile-circles__wr"
            }, [n("div", {
               staticClass: "ui-profile-circles__none-container"
            }, [n("p", {
               staticClass: "ui-profile-circles__none"
            }, [e._v(" You have no close "), n("span", {
               staticClass: "field"
            }, [e._v("Circles")]), e._v(" yet ")])])])
         }],
         nt = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return e.loading ? n("div", {
               staticClass: "ui-profile-circle"
            }, [n("b-skeleton", {
               staticClass: "ui-profile-circle__img",
               attrs: {
                  type: "avatar",
                  src: e.avatar
               }
            }), n("b-skeleton", {
               staticClass: "loading-text"
            })], 1) : n("div", {
               staticClass: "ui-profile-circle"
            }, [n("img", {
               staticClass: "ui-profile-circle__img",
               attrs: {
                  src: e.avatar
               }
            }), n("p", [e._v(e._s(e.name))])])
         },
         rt = [],
         st = {
            name: "BaseProfileCircle",
            props: {
               name: {
                  type: String,
                  required: !1
               },
               avatar: {
                  type: String,
                  required: !1
               },
               loading: {
                  type: Boolean,
                  required: !1
               }
            }
         },
         ot = st,
         it = (n("6c7a"), Object(L["a"])(ot, nt, rt, !1, null, "196ec44a", null)),
         at = it.exports,
         ct = {
            name: "ProfileCloseCircles",
            components: {
               BaseProfileCircle: at
            },
            data: function () {
               return {
                  loading: !0
               }
            },
            computed: {
               circles: function () {
                  return this.$store.getters["profile/getProfileCircles"]
               },
               profileTitle: function () {
                  return this.$store.getters["profile/getProfileTitle"]
               },
               firstName: function () {
                  var e = this.profileTitle;
                  if (e) {
                     var t = e.split(" ")[0];
                     return t
                  }
                  return "Margot Robbie"
               },
               circlesNotEmpty: function () {
                  return 0 !== this.circles.length
               },
               computedCircles: function () {
                  return this.profileTitle && this.circlesNotEmpty ? (this.toggleLoading(!1), console.log("1"), this.circles) : this.profileTitle && !this.circlesNotEmpty ? (this.toggleLoading(!1), console.log("2"), null) : (console.log("3"), null)
               }
            },
            methods: {
               toggleLoading: function (e) {
                  this.loading = e
               }
            }
         },
         ut = ct,
         lt = (n("0483"), Object(L["a"])(ut, et, tt, !1, null, "44c6bce6", null)),
         dt = lt.exports,
         pt = n("7e8f"),
         ft = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("div", {
               staticClass: "ui-card ui-profile-personal ui-profile-about"
            }, [n("div", {
               staticClass: "ui-card__top"
            }, [n("h1", {
               staticClass: "ui-card__title"
            }, [e._v("About - " + e._s(e.profileTitle))]), e.isOwn ? n("button", {
               staticClass: "ui-btn ui-btn__outline",
               on: {
                  click: e.showModal
               }
            }, [e._v(" Manage About ")]) : e._e()]), n("list-about-modal", {
               ref: "aboutModal",
               attrs: {
                  "ic-close": e.ic_close,
                  "ic-edit": e.ic_edit,
                  "ic-back": e.ic_back,
                  fetchedAbouts: e.abouts
               }
            }), n("b-modal", {
               attrs: {
                  size: "lg",
                  centered: "",
                  scrollable: ""
               },
               scopedSlots: e._u([{
                  key: "modal-header",
                  fn: function (t) {
                     var r = t.close;
                     return [n("h5", {
                        staticClass: "ui-model-title"
                     }, [e._v("About")]), n("button", {
                        staticClass: "ui-btn ui-btn__close",
                        on: {
                           click: function (e) {
                              return r()
                           }
                        }
                     }, [n("span", {
                        staticClass: "icon-ic-modal-close"
                     })])]
                  }
               }, {
                  key: "modal-footer",
                  fn: function (t) {
                     var r = t.ok,
                        s = t.cancel;
                     return [n("div", {
                        staticClass: "modal-footer__left"
                     }), n("div", {
                        staticClass: "modal-footer__right"
                     }, [n("button", {
                        staticClass: "ui-btn ui-btn__transparent",
                        on: {
                           click: function (e) {
                              return s()
                           }
                        }
                     }, [e._v(" Cancel ")]), n("button", {
                        staticClass: "ui-btn",
                        on: {
                           click: function (e) {
                              return r()
                           }
                        }
                     }, [e._v("Save")])])]
                  }
               }])
            }, [n("div", {
               staticClass: "ui-profile-editor"
            }, [n("label", {
               staticClass: "ui-label"
            }, [e._v("Bio")]), [n("vue-editor", {
               staticClass: "vue-editor",
               model: {
                  value: e.content,
                  callback: function (t) {
                     e.content = t
                  },
                  expression: "content"
               }
            })]], 2)]), n("div", {
               staticClass: "ui-profile-about__wr"
            }, e._l(e.abouts, (function (t, r) {
               return n("div", {
                  key: t.id,
                  staticClass: "ui-profile-about__block"
               }, [t.content ? n("div", {
                  staticClass: "about-container"
               }, [n("h1", [e._v(e._s(t.title))]), n("div", {
                  staticClass: "about-text",
                  domProps: {
                     innerHTML: e._s(t.content)
                  }
               }), r < e.abouts.length - 1 ? n("hr", {
                  staticClass: "about-dash",
                  attrs: {
                     align: "left"
                  }
               }) : n("div", {
                  staticStyle: {
                     "padding-bottom": "16px"
                  }
               })]) : e._e()])
            })), 0)], 1)
         },
         mt = [],
         gt = n("c627"),
         ht = n.n(gt),
         vt = n("7775"),
         bt = n.n(vt),
         wt = n("24c6"),
         kt = n.n(wt),
         _t = n("5873"),
         Ct = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return e.show ? n("b-modal", {
               ref: "modal-about",
               attrs: {
                  id: "modal-about",
                  size: "lg",
                  centered: "",
                  scrollable: "",
                  "no-close-on-backdrop": ""
               },
               scopedSlots: e._u(["list" === e.mode ? {
                  key: "modal-header",
                  fn: function (t) {
                     var r = t.close;
                     return [n("div", {
                        staticClass: "ui-flex align-items-center"
                     }, [n("button", {
                        staticClass: "ui-btn ui-btn__back",
                        on: {
                           click: function (e) {
                              return r()
                           }
                        }
                     }, [n("img", {
                        attrs: {
                           src: e.icBack
                        }
                     })]), n("h5", {
                        staticClass: "ui-model-title"
                     }, [e._v("About")])]), n("button", {
                        staticClass: "ui-btn ui-btn__close",
                        on: {
                           click: function (t) {
                              return e.closeModal(r)
                           }
                        }
                     }, [n("img", {
                        attrs: {
                           src: e.icClose
                        }
                     })])]
                  }
               } : {
                  key: "modal-header",
                  fn: function (t) {
                     var r = t.close;
                     return [n("div", {
                        staticClass: "ui-flex align-items-center"
                     }, [n("button", {
                        staticClass: "ui-btn ui-btn__back",
                        on: {
                           click: function () {
                              return e.mode = "list"
                           }
                        }
                     }, [n("img", {
                        attrs: {
                           src: e.icBack
                        }
                     })]), n("h5", {
                        staticClass: "ui-model-title"
                     }, [e._v("Go back")])]), n("button", {
                        staticClass: "ui-btn ui-btn__close",
                        on: {
                           click: function (t) {
                              return e.closeModal(r)
                           }
                        }
                     }, [n("img", {
                        attrs: {
                           src: e.icClose
                        }
                     })])]
                  }
               }, "list" === e.mode ? {
                  key: "modal-footer",
                  fn: function (t) {
                     var r = t.close;
                     return [n("div", {
                        staticClass: "modal-footer__right"
                     }, [n("button", {
                        staticClass: "ui-btn",
                        on: {
                           click: function (t) {
                              return e.saveListOrder(r)
                           }
                        }
                     }, [e._v(" Done ")])])]
                  }
               } : {
                  key: "modal-footer",
                  fn: function (t) {
                     var r = t.close;
                     return [n("div", {
                        staticClass: "modal-footer__right"
                     }, [n("button", {
                        staticClass: "ui-btn ui-btn__transparent",
                        on: {
                           click: function (t) {
                              return e.closeModal(r)
                           }
                        }
                     }, [e._v(" Cancel ")]), n("button", {
                        staticClass: "ui-btn",
                        on: {
                           click: function (t) {
                              return e.submitAbout(r)
                           }
                        }
                     }, [e.loader ? n("b-spinner", {
                        attrs: {
                           small: "",
                           label: "loader"
                        }
                     }) : [e._v(" Save ")]], 2)])]
                  }
               }], null, !0)
            }, ["list" === e.mode ? n("div", [n("draggable", {
               key: e.abouts.length,
               on: {
                  start: function (t) {
                     e.drag = !0
                  },
                  end: function (t) {
                     e.drag = !1
                  }
               },
               model: {
                  value: e.abouts,
                  callback: function (t) {
                     e.abouts = t
                  },
                  expression: "abouts"
               }
            }, e._l(e.abouts, (function (t) {
               return n("div", {
                  key: t.id
               }, [n("div", {
                  staticClass: "ui-profile-about__block2",
                  class: {
                     inactive: !t.content
                  }
               }, [n("div", {
                  staticClass: "about-draggable"
               }), n("div", {
                  staticClass: "flex-grow-1 about-child"
               }, [n("div", {
                  staticClass: "about-title"
               }, [e._v(e._s(t.title))]), t.content ? n("div", {
                  staticClass: "about-desc",
                  domProps: {
                     innerHTML: e._s(t.content)
                  }
               }) : n("div", {
                  staticClass: "about-desc-inactive"
               }, [e._v(" Fill this to add it to your about ")])]), n("div", {
                  staticClass: "about-action"
               }, [n("button", {
                  staticClass: "ui-btn ui-btn__transparent ui-btn__transparent--edit",
                  on: {
                     click: function (n) {
                        return e.editAbout(t)
                     }
                  }
               }, [n("img", {
                  attrs: {
                     src: e.icEdit
                  }
               }), e._v("Edit ")])])])])
            })), 0)], 1) : n("edit-about-mode", {
               ref: "editAbout",
               attrs: {
                  selectedAbout: e.selectedAbout
               }
            })], 1) : e._e()
         },
         yt = [],
         xt = n("b76a"),
         Pt = n.n(xt),
         It = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("div", {
               staticClass: "ui-profile-editor"
            }, [n("label", {
               staticClass: "ui-label"
            }, [e._v(e._s(e.about.title))]), [n("vue-editor", {
               staticClass: "vue-editor",
               model: {
                  value: e.about.content,
                  callback: function (t) {
                     e.$set(e.about, "content", t)
                  },
                  expression: "about.content"
               }
            })]], 2)
         },
         jt = [],
         Mt = {
            props: ["selectedAbout"],
            components: {
               VueEditor: _t["a"]
            },
            data: function () {
               return {
                  about: {
                     id: null,
                     title: null,
                     content: null
                  },
                  editorToolbar: [
                     [{
                        color: "red"
                     }]
                  ],
                  mode: "add"
               }
            },
            created: function () {
               this.selectedAbout ? this.selectedAbout.content ? (this.about = {
                  id: this.selectedAbout.id,
                  title: this.selectedAbout.title,
                  content: this.selectedAbout.content
               }, this.mode = "edit") : this.about.title = this.selectedAbout.title || "General" : this.about.title = "General"
            },
            methods: {
               submitForm: function () {
                  var e = this;
                  return Object(R["a"])(regeneratorRuntime.mark((function t() {
                     return regeneratorRuntime.wrap((function (t) {
                        while (1) switch (t.prev = t.next) {
                           case 0:
                              if ("add" !== e.mode) {
                                 t.next = 5;
                                 break
                              }
                              return t.next = 3, e.$store.dispatch("profile/createAbout", e.about);
                           case 3:
                              t.next = 12;
                              break;
                           case 5:
                              if (!e.about.content) {
                                 t.next = 10;
                                 break
                              }
                              return t.next = 8, e.$store.dispatch("profile/editAbout", e.about);
                           case 8:
                              t.next = 12;
                              break;
                           case 10:
                              return t.next = 12, e.$store.dispatch("profile/deleteAbout", e.about);
                           case 12:
                              return t.abrupt("return", !0);
                           case 13:
                           case "end":
                              return t.stop()
                        }
                     }), t)
                  })))()
               }
            }
         },
         Rt = Mt,
         Ot = (n("5ca0"), Object(L["a"])(Rt, It, jt, !1, null, "46376ee4", null)),
         At = Ot.exports,
         St = {
            props: ["icClose", "icBack", "icEdit"],
            name: "ListAboutModal",
            components: {
               draggable: Pt.a,
               EditAboutMode: At
            },
            data: function () {
               return {
                  loader: !1,
                  show: !1,
                  aboutTitles: ["General", "Summary", "History", "What I Do", "Who I Work With", "My Reputation", "My Story", "Mission", "Values"],
                  mode: "list",
                  selectedAbout: null,
                  tempList: [],
                  listUpdated: !1
               }
            },
            created: function () {
               this.tempList = this.$store.getters["profile/getProfileAbouts"]
            },
            computed: {
               fetchedAbouts: function () {
                  return this.$store.getters["profile/getProfileAbouts"]
               },
               abouts: {
                  get: function () {
                     var e = this,
                        t = [];
                     return this.aboutTitles.forEach((function (n) {
                        var r = e.fetchedAbouts.find((function (e) {
                           return e.title === n
                        }));
                        "undefined" != typeof r ? t.push(r) : t.push({
                           title: n,
                           content: null,
                           order: 1 / 0
                        })
                     })), t.sort((function (e, t) {
                        return e.order - t.order
                     })), t
                  },
                  set: function (e) {
                     var t = this;
                     return Object(R["a"])(regeneratorRuntime.mark((function n() {
                        return regeneratorRuntime.wrap((function (n) {
                           while (1) switch (n.prev = n.next) {
                              case 0:
                                 return t.listUpdated = !0, n.next = 3, t.$store.dispatch("profile/editAboutList", e);
                              case 3:
                              case "end":
                                 return n.stop()
                           }
                        }), n)
                     })))()
                  }
               }
            },
            methods: {
               toggleModal: function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                  console.log("Showing Modal: ", e), this.show = e
               },
               editAbout: function (e) {
                  this.$refs["modal-about"].$refs.body.scrollTo({
                     top: 0,
                     behavior: "smooth"
                  }), this.selectedAbout = e, this.mode = "edit"
               },
               closeModal: function (e) {
                  e(), this.toggleModal(!1), this.mode = "list", this.listUpdated = !1
               },
               saveListOrder: function (e) {
                  e(), this.toggleModal(!1)
               },
               submitAbout: function () {
                  var e = this;
                  return Object(R["a"])(regeneratorRuntime.mark((function t() {
                     return regeneratorRuntime.wrap((function (t) {
                        while (1) switch (t.prev = t.next) {
                           case 0:
                              return e.loader = !0, t.prev = 1, t.next = 4, e.$refs.editAbout.submitForm();
                           case 4:
                              e.mode = "list", t.next = 10;
                              break;
                           case 7:
                              t.prev = 7, t.t0 = t["catch"](1), console.log(t.t0.message);
                           case 10:
                              return t.prev = 10, e.loader = !1, t.finish(10);
                           case 13:
                           case "end":
                              return t.stop()
                        }
                     }), t, null, [
                        [1, 7, 10, 13]
                     ])
                  })))()
               }
            }
         },
         Tt = St,
         Ft = (n("beff"), Object(L["a"])(Tt, Ct, yt, !1, null, "4ebac041", null)),
         Lt = Ft.exports,
         $t = {
            name: "AboutTab",
            components: {
               ListAboutModal: Lt,
               VueEditor: _t["a"]
            },
            props: {
               isOwn: {
                  type: Boolean,
                  default: !1
               }
            },
            data: function () {
               return {
                  ic_close: ht.a,
                  ic_edit: bt.a,
                  ic_back: kt.a,
                  content: "<p>Professor Nissenbaum was the Director of the Leo T. Kissam Memorial\n            Library and Maloney Library and Professor of Law with Fordham Law\n            from 2004 to 2016. During this time he has taught the courses Trusts\n            and Wills, and Decedents Estates while serving on various faculty\n            committees.</p>"
               }
            },
            computed: {
               storeNameSpace: function () {
                  return this.isOwn ? "profile/" : "user/"
               },
               abouts: function () {
                  return this.$store.getters[this.storeNameSpace + "getProfileAbouts"]
               },
               profileTitle: function () {
                  return this.$store.getters[this.storeNameSpace + "getProfileTitle"]
               }
            },
            methods: {
               showModal: function () {
                  var e = this;
                  this.$refs.aboutModal.toggleModal(!0), this.$nextTick((function () {
                     e.$bvModal.show("modal-about")
                  }))
               }
            }
         },
         Bt = $t,
         Ut = (n("5e04"), Object(L["a"])(Bt, ft, mt, !1, null, "37cd515b", null)),
         Dt = Ut.exports,
         Nt = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("div", {
               staticClass: "ui-profile-review ui-card"
            }, [n("div", {
               staticClass: "ui-card__top"
            }, [n("h4", {
               staticClass: "ui-profile-review__t1"
            }, [e._v("Review")]), n("div", {
               staticClass: "ui-profile-review__rate"
            }, [n("p", {
               staticClass: "ui-profile-review__t2"
            }, [e._v(e._s(e.value))]), n("b-form-rating", {
               staticClass: "review-rate-stars",
               attrs: {
                  readonly: ""
               },
               model: {
                  value: e.value,
                  callback: function (t) {
                     e.value = t
                  },
                  expression: "value"
               }
            })], 1)]), n("hr", {
               staticClass: "ui-border"
            }), n("div", {
               staticClass: "review-wr"
            }, [n("div", {
               staticClass: "review-item"
            }, [e._m(0), n("div", {
               staticClass: "review-name"
            }, [e._v("Cody Fisher")]), n("div", {
               staticClass: "review-title"
            }, [e._v("Chief Executive Officer at Spectrum.Life")]), n("div", {
               staticClass: "review-rate"
            }, [e._v(" 4"), n("b-icon", {
               staticClass: "review-rate__star",
               attrs: {
                  icon: "star-fill",
                  "aria-hidden": "true"
               }
            })], 1), n("div", {
               staticClass: "review-msg"
            }, [e._v(" This company is a very powerful IT company. They have awesome talent and are experts in programming and design... ")])])]), n("a", {
               staticClass: "ui-link"
            }, [e._v("All Reviews")])])
         },
         Et = [function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("div", {
               staticClass: "review-img"
            }, [n("img", {
               staticClass: "review-img__img",
               attrs: {
                  src: "https://i.pinimg.com/originals/73/16/f5/7316f550de9ca0045e3d8d98a5bb5e44.png",
                  alt: "user"
               }
            })])
         }],
         qt = {
            name: "ProfileReviews",
            data: function () {
               return {
                  value: 2.56
               }
            }
         },
         zt = qt,
         Ht = (n("529c"), Object(L["a"])(zt, Nt, Et, !1, null, "7b642044", null)),
         Gt = Ht.exports,
         Wt = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return e.show ? n("base-modal", {
               ref: "add-new-tab-modal",
               attrs: {
                  id: "add-new-tab-modal",
                  title: e.modalTitle,
                  scrollable: "",
                  size: "lg",
                  mount: e.show,
                  showBack: "add" === e.mode,
                  "no-close-on-backdrop": ""
               },
               on: {
                  onClose: e.closeModal,
                  goBack: e.goBack
               },
               scopedSlots: e._u(["list" === e.mode ? {
                  key: "body",
                  fn: function () {
                     return [e.checkAllTabsAdded ? n("div", {
                        staticClass: "ui-profile-about__none-container"
                     }, [n("p", {
                        staticClass: "ui-profile-about__none"
                     }, [e._v(" All "), n("span", {
                        staticClass: "field"
                     }, [e._v("Tabs")]), e._v(" have been added. ")])]) : n("div", {
                        staticClass: "new-tab-item__wr"
                     }, [e.checkIfTabPresent(e.products) ? e._e() : n("add-new-tab-item", {
                        attrs: {
                           icon: "icon-cart",
                           title: "Products"
                        },
                        on: {
                           select: function (t) {
                              return e.onSelect("product")
                           }
                        }
                     }), e.checkIfTabPresent(e.galleries) ? e._e() : n("add-new-tab-item", {
                        attrs: {
                           icon: "icon-picture",
                           title: "Gallery"
                        },
                        on: {
                           select: function (t) {
                              return e.onSelect("gallery")
                           }
                        }
                     }), e.checkIfTabPresent(e.educations) ? e._e() : n("add-new-tab-item", {
                        attrs: {
                           icon: "icon-education",
                           title: "Education"
                        },
                        on: {
                           select: function (t) {
                              return e.onSelect("education")
                           }
                        }
                     }), e.checkIfTabPresent(e.works) ? e._e() : n("add-new-tab-item", {
                        attrs: {
                           icon: "icon-work",
                           title: "Work Experience"
                        },
                        on: {
                           select: function (t) {
                              return e.onSelect("experience")
                           }
                        }
                     }), e.checkIfTabPresent(e.abouts) ? e._e() : n("add-new-tab-item", {
                        attrs: {
                           icon: "icon-user",
                           title: "About"
                        },
                        on: {
                           select: function (t) {
                              return e.onSelect("about")
                           }
                        }
                     }), e.checkIfTabPresent(e.projects) ? e._e() : n("add-new-tab-item", {
                        attrs: {
                           icon: "icon-todo",
                           title: "Projects"
                        },
                        on: {
                           select: function (t) {
                              return e.onSelect("project")
                           }
                        }
                     }), e.checkIfTabPresent(e.services) ? e._e() : n("add-new-tab-item", {
                        attrs: {
                           icon: "icon-services",
                           title: "Services"
                        },
                        on: {
                           select: function (t) {
                              return e.onSelect("service")
                           }
                        }
                     })], 1)]
                  },
                  proxy: !0
               } : {
                  key: "body",
                  fn: function () {
                     return ["about" === e.selectedTab ? n("EditAboutMode", {
                        ref: "aboutForm",
                        attrs: {
                           mode: e.mode
                        }
                     }) : e._e(), "experience" === e.selectedTab ? n("EditExperienceMode", {
                        ref: "experienceForm",
                        attrs: {
                           mode: e.mode
                        }
                     }) : e._e(), "education" === e.selectedTab ? n("EditEducationMode", {
                        ref: "educationForm",
                        attrs: {
                           mode: e.mode
                        }
                     }) : e._e(), "gallery" === e.selectedTab ? n("EditGalleryMode", {
                        ref: "galleryForm",
                        attrs: {
                           mode: e.mode,
                           "ic-add": e.icons.icAdd,
                           "ic-delete": e.icons.icDelete
                        }
                     }) : e._e(), "product" === e.selectedTab ? n("EditProductMode", {
                        ref: "productForm",
                        attrs: {
                           mode: e.mode,
                           "ic-add": e.icons.icAdd,
                           "ic-delete": e.icons.icDelete
                        }
                     }) : e._e(), "project" === e.selectedTab ? n("EditProjectsMode", {
                        ref: "projectForm",
                        attrs: {
                           mode: e.mode,
                           "ic-add": e.icons.icAdd,
                           "ic-delete": e.icons.icDelete
                        }
                     }) : e._e(), "service" === e.selectedTab ? n("EditServiceMode", {
                        ref: "serviceForm",
                        attrs: {
                           mode: e.mode,
                           "ic-add": e.icons.icAdd,
                           "ic-delete": e.icons.icDelete
                        }
                     }) : e._e()]
                  },
                  proxy: !0
               }, {
                  key: "footer",
                  fn: function (t) {
                     var r = t.cancel,
                        s = t.save;
                     return [n("div", {
                        staticClass: "modal-footer__right"
                     }, [n("button", {
                        staticClass: "ui-btn ui-btn__transparent",
                        on: {
                           click: function (t) {
                              return e.closeModal(r)
                           }
                        }
                     }, [e._v(" Cancel ")]), "add" === e.mode ? n("button", {
                        staticClass: "ui-btn",
                        on: {
                           click: function (t) {
                              return t.preventDefault(), e.submitForm(s)
                           }
                        }
                     }, [e.loader ? n("b-spinner", {
                        attrs: {
                           small: "",
                           label: "loader"
                        }
                     }) : [e._v(" Save ")]], 2) : e._e()])]
                  }
               }], null, !0)
            }) : e._e()
         },
         Vt = [],
         Yt = (n("fb6a"), function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("button", {
               staticClass: "new-tab-item",
               on: {
                  click: e.onSelect,
                  blur: function (t) {
                     return e.$emit("onBlur", t)
                  }
               }
            }, [n("div", {
               staticClass: "new-tab-item__img"
            }, [n("span", {
               class: e.icon
            })]), n("h1", {
               staticClass: "new-tab-item__title"
            }, [e._v(e._s(e.title))]), n("p", {
               staticClass: "new-tab-item__desc"
            }, [e._v(e._s(e.description))])])
         }),
         Jt = [],
         Kt = {
            name: "AddNewTabItem",
            emits: ["select"],
            props: {
               id: {
                  type: String
               },
               icon: {
                  type: String
               },
               title: {
                  type: String
               },
               description: {
                  type: String
               }
            },
            methods: {
               onSelect: function () {
                  this.$emit("select")
               }
            }
         },
         Qt = Kt,
         Zt = (n("9c2b"), Object(L["a"])(Qt, Yt, Jt, !1, null, "05738188", null)),
         Xt = Zt.exports,
         en = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("validation-observer", {
               ref: "observer"
            }, [n("b-form", {
               staticClass: "ui-profile-experience__edit",
               on: {
                  submit: function (t) {
                     return t.preventDefault(), e.submitForm(t)
                  }
               }
            }, [n("div", {
               staticClass: "ui-profile-experience__edit-form-grid--full"
            }, [n("BaseLogoAutoSuggest", {
               attrs: {
                  value: e.work.company,
                  label: "Company Name",
                  placeholder: "Enter Company name",
                  name: "Work"
               },
               on: {
                  selected: e.onCompanySelected,
                  inputQuery: function (t) {
                     return e.work.company = t
                  }
               }
            })], 1), n("div", {
               staticClass: "ui-profile-experience__edit-form-grid--full mb-0"
            }, [n("BaseInputWithLogo", {
               attrs: {
                  label: "Company Website",
                  type: "text",
                  placeholder: "Ex: Google.com",
                  logo: e.logoSrc,
                  value: e.work.website
               },
               on: {
                  input: function (t) {
                     return e.work.website = t
                  }
               }
            })], 1), n("div", {
               staticClass: "ui-profile-experience__edit-form-grid mb-4 mt-4"
            }, [n("b-form-checkbox", {
               staticClass: "experience-year-checkbox",
               on: {
                  change: e.onLogoCheckboxClicked
               },
               model: {
                  value: e.manualUpload,
                  callback: function (t) {
                     e.manualUpload = t
                  },
                  expression: "manualUpload"
               }
            }, [e._v(" Upload your own logo ")])], 1), n("div", {
               staticClass: "ui-profile-experience__edit-form-grid--full mt-2"
            }, [e.manualUpload ? n("base-logo-uploader", {
               attrs: {
                  customLogo: e.customLogo
               },
               on: {
                  inputLogo: e.onLogoUpload
               }
            }) : e._e()], 1), n("div", {
               staticClass: "ui-profile-experience__edit-form-grid"
            }, [n("BaseInput", {
               attrs: {
                  label: "Job Position",
                  type: "text",
                  placeholder: "Job Position",
                  value: e.work.title
               },
               on: {
                  input: function (t) {
                     return e.work.title = t
                  }
               }
            }), n("base-city-auto-suggest", {
               attrs: {
                  label: "Location:",
                  placeholder: "Location",
                  name: "City",
                  value: e.work.city && e.work.city.name ? e.work.city.name + ", " + e.work.city.admin : null,
                  includeState: ""
               },
               on: {
                  selected: e.onLocationSelected,
                  inputQuery: function (t) {
                     return e.work.city.name = t
                  }
               }
            }), n("BaseInput", {
               attrs: {
                  label: "Start Date",
                  type: "date",
                  placeholder: "Start Date",
                  min: "1920-01-02",
                  max: e.maxStartDate,
                  value: e.work.startDate
               },
               on: {
                  input: function (t) {
                     return e.work.startDate = t
                  }
               }
            }), n("BaseInput", {
               attrs: {
                  label: "End Date",
                  type: e.inputType,
                  placeholder: "End Date",
                  min: e.work.startDate || "1920-01-02",
                  max: "2050-01-02",
                  value: e.work.endDate,
                  disabled: e.work.isCurrent || !e.work.startDate
               },
               on: {
                  input: function (t) {
                     return e.work.endDate = t
                  }
               }
            }, [n("b-form-checkbox", {
               staticClass: "experience-year-checkbox",
               on: {
                  change: e.onYearCheckboxClicked
               },
               model: {
                  value: e.work.isCurrent,
                  callback: function (t) {
                     e.$set(e.work, "isCurrent", t)
                  },
                  expression: "work.isCurrent"
               }
            }, [e._v(" Currently working here ")])], 1)], 1), n("div", {
               staticClass: "ui-profile-experience__edit-description"
            }, [n("BaseTextArea", {
               attrs: {
                  label: "Description",
                  placeholder: "Enter something...",
                  rows: "3",
                  maxrows: "6",
                  value: e.work.description,
                  "no-validate": ""
               },
               on: {
                  input: function (t) {
                     return e.work.description = t
                  }
               }
            })], 1)])], 1)
         },
         tn = [],
         nn = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("div", {
               staticClass: "ui-input-default"
            }, [n("validation-provider", {
               attrs: {
                  name: e.label,
                  rules: "required"
               },
               scopedSlots: e._u([{
                  key: "default",
                  fn: function (t) {
                     return [n("label", {
                        staticClass: "ui-label ui-input-default__label",
                        attrs: {
                           for: "logoImg"
                        }
                     }, [e._v(e._s(e.label))]), n("div", {
                        staticClass: "logo-box__container"
                     }, [n("div", {
                        staticClass: "logo-box",
                        class: {
                           "logo-box--focused": e.focused
                        }
                     }, [n("img", {
                        staticClass: "logo-box__img",
                        attrs: {
                           src: e.logo
                        },
                        on: {
                           error: e.imgError,
                           load: e.imgLoad
                        }
                     })]), n("b-form-input", {
                        staticClass: "ui-input-default__input",
                        attrs: {
                           id: "logoImg",
                           type: e.type,
                           placeholder: e.placeholder,
                           value: e.value,
                           state: e.getValidationState(t)
                        },
                        on: {
                           input: e.input,
                           focus: e.onInputFocus,
                           blur: e.onInputBlur
                        }
                     })], 1), n("b-form-invalid-feedback", {
                        staticClass: "mt-1",
                        attrs: {
                           id: "input-1-live-feedback"
                        }
                     }, [e._v(e._s(t.errors[0]))])]
                  }
               }])
            }), e._t("default")], 2)
         },
         rn = [],
         sn = n("4c93");
      Object(ne["c"])("required", Object(s["a"])(Object(s["a"])({}, sn["c"]), {}, {
         message: "This field is required"
      }));
      var on = {
            components: {
               ValidationProvider: ne["b"]
            },
            name: "BaseInputWithLogo",
            props: ["type", "placeholder", "value", "label", "propRules", "logo"],
            emits: ["input", "imgError", "imgLoad"],
            data: function () {
               return {
                  focused: !1
               }
            },
            computed: {},
            methods: {
               input: function (e) {
                  this.$emit("input", e)
               },
               imgError: function (e) {
                  this.$emit("imgError", e)
               },
               imgLoad: function (e) {
                  this.$emit("imgLoad", e)
               },
               onInputFocus: function () {
                  this.focused = !0, console.log(this.focused)
               },
               onInputBlur: function () {
                  this.focused = !1
               },
               getValidationState: function (e) {
                  var t = e.dirty,
                     n = e.validated,
                     r = e.valid,
                     s = void 0 === r ? null : r;
                  return t || n ? s : null
               }
            }
         },
         an = on,
         cn = (n("2483"), Object(L["a"])(an, nn, rn, !1, null, "07761425", null)),
         un = cn.exports,
         ln = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("div", {
               staticClass: "logo-uploader"
            }, [n("div", {
               staticClass: "logo-uploader__label"
            }, [e._v(" Logo ")]), n("div", {
               staticClass: "logo-uploader__container"
            }, [e.logo ? n("div", {
               staticClass: "logo-uploader__container--img-box"
            }, [n("img", {
               staticClass: "logo-uploader__container--img",
               attrs: {
                  src: e.logo.url,
                  alt: "logo",
                  height: "52px",
                  width: "52px"
               }
            }), n("div", {
               staticClass: "logo-uploader__container--text-box"
            }, [n("div", {
               staticClass: "logo-uploader__container--text-name"
            }, [e._v(e._s(e.logo.name))]), n("div", {
               staticClass: "logo-uploader__container--text-complete"
            }, [e._v(" Upload complete ")])])]) : n("div", {
               staticClass: "logo-uploader__container-text"
            }, [e._v(" Upload your own logo here ")]), n("file-upload", {
               ref: "upload",
               staticClass: "upload-logo__new",
               attrs: {
                  for: "img-upload",
                  extensions: e.uploadParams.extensions,
                  accept: e.uploadParams.accept,
                  multiple: e.uploadParams.multiple,
                  directory: e.uploadParams.directory,
                  thread: e.uploadParams.thread,
                  drop: e.uploadParams.drop,
                  "drop-directory": e.uploadParams.dropDirectory,
                  "add-index": e.uploadParams.addIndex
               },
               on: {
                  "input-file": e.inputFile,
                  "input-filter": e.inputFilter
               }
            }, [n("button", {
               staticClass: "ui-btn ui-btn__outline logo-uploader__container-btn "
            }, [e._v(" Choose File ")])])], 1)])
         },
         dn = [],
         pn = {
            name: "BaseLogoUploader",
            components: {
               FileUpload: se.a
            },
            props: ["customLogo"],
            emits: ["inputLogo"],
            data: function () {
               return {
                  logo: this.customLogo || null,
                  uploadParams: {
                     extensions: "gif,jpg,jpeg,png,webp",
                     accept: "image/png,image/gif,image/jpeg,image/webp",
                     minSize: 1024,
                     size: 10485760,
                     multiple: !1,
                     directory: !1,
                     drop: !0,
                     dropDirectory: !1,
                     createDirectory: !1,
                     addIndex: !1,
                     thread: 3
                  }
               }
            },
            methods: {
               inputFile: function (e, t) {
                  var n = this;
                  return Object(R["a"])(regeneratorRuntime.mark((function r() {
                     var s;
                     return regeneratorRuntime.wrap((function (r) {
                        while (1) switch (r.prev = r.next) {
                           case 0:
                              if (!e || t) {
                                 r.next = 7;
                                 break
                              }
                              return console.log(e), n.logo = e, r.next = 5, n.$store.dispatch("profile/uploadImage", {
                                 newFile: e
                              });
                           case 5:
                              s = r.sent, n.$emit("inputLogo", s);
                           case 7:
                           case "end":
                              return r.stop()
                        }
                     }), r)
                  })))()
               },
               inputFilter: function (e, t, n) {
                  var r = this;
                  if (e && !t) {
                     if (/(\/|^)(Thumbs\.db|desktop\.ini|\..+)$/.test(e.name)) return n();
                     if (/\.(php5?|html?|jsx?)$/i.test(e.name)) return n();
                     if (e && "" === e.error && e.file && (!t || e.file !== t.file)) {
                        e.blob = "";
                        var s = window.URL || window.webkitURL;
                        s && (e.blob = s.createObjectURL(e.file)), e.url = "", e.blob && "image/" === e.type.substr(0, 6) && (e.url = e.blob, console.log(e.url))
                     }
                     if (e && "" === e.error && "image/" === e.type.substr(0, 6) && e.blob && (!t || e.blob !== t.blob)) {
                        e.error = "image parsing";
                        var o = new Image;
                        o.onload = function () {
                           r.$refs.upload.update(e, {
                              error: "",
                              height: o.height,
                              width: o.width
                           })
                        }, o.οnerrοr = function () {
                           r.$refs.upload.update(e, {
                              error: "parsing image size"
                           })
                        }, o.src = e.blob
                     }
                  }
               }
            }
         },
         fn = pn,
         mn = (n("7468"), Object(L["a"])(fn, ln, dn, !1, null, null, null)),
         gn = mn.exports,
         hn = n("ba68"),
         vn = n.n(hn),
         bn = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("div", {
               staticClass: "ui-autosuggest-default"
            }, [n("vue-autosuggest", {
               ref: "autoSuggest",
               attrs: {
                  inputProps: e.inputProps,
                  suggestions: e.suggestions,
                  getSuggestionValue: e.getSuggestionValue,
                  componentAttrIdAutosuggest: "logo-autosuggest"
               },
               on: {
                  input: e.fetchResults,
                  selected: e.onSelected
               },
               scopedSlots: e._u([{
                  key: "default",
                  fn: function (t) {
                     var r = t.suggestion;
                     return [n("div", {
                        staticStyle: {
                           display: "flex"
                        }
                     }, [n("img", {
                        style: {
                           display: "inline-block",
                           width: "28px",
                           height: "28px",
                           borderRadius: "15px",
                           marginRight: "10px"
                        },
                        attrs: {
                           src: r.item.logo
                        }
                     }), n("div", {
                        staticStyle: {
                           "{ display": "'flex', color: 'navyblue'}"
                        }
                     }, [e._v(" " + e._s(r.item.name) + " ")])])]
                  }
               }]),
               model: {
                  value: e.query,
                  callback: function (t) {
                     e.query = t
                  },
                  expression: "query"
               }
            }, [n("template", {
               slot: "before-input"
            }, [n("label", {
               attrs: {
                  for: e.inputProps.id
               }
            }, [e._v(e._s(e.label))])])], 2)], 1)
         },
         wn = [],
         kn = n("2831"),
         _n = n("bc3a"),
         Cn = n.n(_n),
         yn = {
            name: "BaseLogoAutoSuggest",
            components: {
               VueAutosuggest: kn["a"]
            },
            props: ["value", "label", "placeholder", "name"],
            emits: ["selected", "inputQuery"],
            created: function () {
               this.value && (console.log(this.value), this.query = this.value)
            },
            data: function () {
               return {
                  query: "",
                  selected: null,
                  timeout: null,
                  debounceMilliseconds: 250,
                  results: [],
                  suggestions: [],
                  fetchUrl: "https://autocomplete.clearbit.com/v1/companies/suggest?query=",
                  inputProps: {
                     id: "autosuggest__logo-input",
                     placeholder: this.placeholder,
                     class: "ui-autosuggest-default__input",
                     name: this.name
                  }
               }
            },
            methods: {
               fetchResults: function () {
                  var e = this,
                     t = this.query;
                  clearTimeout(this.timeout), this.timeout = setTimeout(Object(R["a"])(regeneratorRuntime.mark((function n() {
                     var r, s;
                     return regeneratorRuntime.wrap((function (n) {
                        while (1) switch (n.prev = n.next) {
                           case 0:
                              return e.suggestions = [], n.prev = 1, n.next = 4, Cn.a.get(e.fetchUrl + t);
                           case 4:
                              r = n.sent, s = r.data, s.length && e.suggestions.push({
                                 name: "companies",
                                 data: s
                              }), console.log(e.suggestions), e.$emit("inputQuery", t), n.next = 14;
                              break;
                           case 11:
                              n.prev = 11, n.t0 = n["catch"](1), console.log(n.t0.message);
                           case 14:
                           case "end":
                              return n.stop()
                        }
                     }), n, null, [
                        [1, 11]
                     ])
                  }))), this.debounceMilliseconds)
               },
               getSuggestionValue: function (e) {
                  return e.item.name
               },
               onSelected: function (e) {
                  e && (console.log(e), this.selected = e, this.$emit("selected", e.item))
               }
            }
         },
         xn = yn,
         Pn = (n("e924"), Object(L["a"])(xn, bn, wn, !1, null, null, null)),
         In = Pn.exports,
         jn = {
            components: {
               BaseInput: Z["a"],
               BaseInputWithLogo: un,
               BaseLogoUploader: gn,
               BaseTextArea: xe["a"],
               ValidationObserver: ne["a"],
               BaseLogoAutoSuggest: In,
               BaseCityAutoSuggest: oe["a"]
            },
            props: ["icAdd", "icClose", "icEdit", "icDelete", "icBack", "selectedWork", "mode"],
            watch: {},
            data: function () {
               return {
                  manualUpload: !1,
                  icLogoDisabled: vn.a,
                  inputType: "date",
                  cachedLogo: null,
                  work: {
                     startDate: null,
                     endDate: null,
                     location: null,
                     cityId: null,
                     city: {
                        name: null,
                        admin: null
                     },
                     title: null,
                     company: null,
                     img: null,
                     website: null,
                     description: null,
                     companyLogo: null,
                     isCurrent: !1,
                     genericLogo: !0
                  }
               }
            },
            created: function () {
               if ("edit" === this.mode) {
                  var e = this.selectedWork,
                     t = e.id,
                     n = e.startDate,
                     r = e.endDate,
                     s = e.location,
                     o = e.title,
                     i = e.company,
                     a = e.city,
                     c = e.img,
                     u = e.description,
                     l = e.website,
                     d = e.companyLogo,
                     p = e.isCurrent,
                     f = e.genericLogo;
                  console.log(this.selectedWork), this.work = {
                     id: t,
                     startDate: n,
                     endDate: r,
                     location: s,
                     title: o,
                     company: i,
                     img: c,
                     description: u,
                     website: l,
                     companyLogo: d,
                     isCurrent: p,
                     genericLogo: f,
                     cityId: null,
                     city: {
                        name: null,
                        admin: null
                     }
                  }, d && (this.cachedLogo = d), this.work.isCurrent && (this.inputType = "text", this.work.endDate = "Present"), this.work.genericLogo || (this.manualUpload = !0), a && (console.log("🚀 ~ file: EditExperienceMode.vue ~ line 239 ~ created ~ city", a), this.work.city = a, this.work.cityId = a.id)
               }
            },
            computed: {
               genericLogo: function () {
                  return this.work.genericLogo
               },
               logoSrc: function () {
                  return this.genericLogo && this.work.companyLogo ? this.work.companyLogo.url ? this.work.companyLogo.url : this.cachedLogo : this.icLogoDisabled
               },
               customLogo: function () {
                  return !this.work.genericLogo && this.work.companyLogo ? this.work.companyLogo : null
               },
               maxStartDate: function () {
                  var e = new Date,
                     t = e.getDate(),
                     n = e.getMonth() + 1,
                     r = e.getFullYear();
                  return t < 10 && (t = "0" + t), n < 10 && (n = "0" + n), e = r + "-" + n + "-" + t, e
               }
            },
            methods: {
               onLocationSelected: function (e) {
                  this.work.cityId = e.cityId
               },
               onCompanySelected: function (e) {
                  console.log(e), this.work.companyLogo = e.logo, this.cachedLogo = e.logo, this.work.company = e.name, this.work.website = e.domain
               },
               onYearCheckboxClicked: function (e) {
                  e ? (this.inputType = "text", this.work.endDate = "Present") : (this.inputType = "date", this.work.endDate = null)
               },
               onLogoCheckboxClicked: function (e) {
                  this.work.genericLogo = !e, e || (this.work.companyLogo = this.cachedLogo)
               },
               onLogoUpload: function (e) {
                  this.work.companyLogo = e
               },
               submitForm: function () {
                  var e = this;
                  return Object(R["a"])(regeneratorRuntime.mark((function t() {
                     return regeneratorRuntime.wrap((function (t) {
                        while (1) switch (t.prev = t.next) {
                           case 0:
                              return t.abrupt("return", e.$refs.observer.validate().then(function () {
                                 var t = Object(R["a"])(regeneratorRuntime.mark((function t(n) {
                                    return regeneratorRuntime.wrap((function (t) {
                                       while (1) switch (t.prev = t.next) {
                                          case 0:
                                             if (n) {
                                                t.next = 2;
                                                break
                                             }
                                             return t.abrupt("return", !1);
                                          case 2:
                                             if ("edit" !== e.mode) {
                                                t.next = 7;
                                                break
                                             }
                                             return t.next = 5, e.$store.dispatch("profile/editWork", e.work);
                                          case 5:
                                             t.next = 10;
                                             break;
                                          case 7:
                                             return console.log(e.work), t.next = 10, e.$store.dispatch("profile/createWork", e.work);
                                          case 10:
                                             return e.resetForm(), t.abrupt("return", !0);
                                          case 12:
                                          case "end":
                                             return t.stop()
                                       }
                                    }), t)
                                 })));
                                 return function (e) {
                                    return t.apply(this, arguments)
                                 }
                              }()));
                           case 1:
                           case "end":
                              return t.stop()
                        }
                     }), t)
                  })))()
               },
               resetForm: function () {
                  this.work = {
                     startDate: null,
                     endDate: null,
                     location: null,
                     title: null,
                     company: null,
                     img: null,
                     website: null,
                     description: null,
                     companyLogo: null,
                     isCurrent: !1,
                     genericLogo: !1
                  }, this.$refs.observer.reset()
               }
            }
         },
         Mn = jn,
         Rn = (n("c04a"), Object(L["a"])(Mn, en, tn, !1, null, null, null)),
         On = Rn.exports,
         An = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("validation-observer", {
               ref: "observer"
            }, [n("b-form", {
               staticClass: "ui-profile-education__edit"
            }, [n("div", {
               staticClass: "ui-profile-education__edit-form-grid--full"
            }, [n("BaseLogoAutoSuggest", {
               attrs: {
                  value: e.education.institution,
                  label: "Institution Name",
                  placeholder: "Enter Institution name",
                  name: "Education"
               },
               on: {
                  selected: e.onInstitutionSelected,
                  inputQuery: function (t) {
                     return e.education.institution = t
                  }
               }
            })], 1), n("div", {
               staticClass: "ui-profile-education__edit-form-grid--full mb-0"
            }, [n("BaseInputWithLogo", {
               attrs: {
                  label: "Institution Website",
                  type: "text",
                  placeholder: "Ex: harvard.edu",
                  logo: e.logoSrc,
                  value: e.education.website
               },
               on: {
                  input: function (t) {
                     return e.education.website = t
                  }
               }
            })], 1), n("div", {
               staticClass: "ui-profile-education__edit-form-grid mb-4 mt-4"
            }, [n("b-form-checkbox", {
               staticClass: "education-year-checkbox",
               on: {
                  change: e.onLogoCheckboxClicked
               },
               model: {
                  value: e.manualUpload,
                  callback: function (t) {
                     e.manualUpload = t
                  },
                  expression: "manualUpload"
               }
            }, [e._v(" Upload your own logo ")])], 1), n("div", {
               staticClass: "ui-profile-education__edit-form-grid--full mt-2"
            }, [e.manualUpload ? n("base-logo-uploader", {
               attrs: {
                  customLogo: e.customLogo
               },
               on: {
                  inputLogo: e.onLogoUpload
               }
            }) : e._e()], 1), n("div", {
               staticClass: "ui-profile-education__edit-form-grid"
            }, [n("BaseInput", {
               attrs: {
                  label: "Degree",
                  type: "text",
                  placeholder: "Degree",
                  value: e.education.degree
               },
               on: {
                  input: function (t) {
                     return e.education.degree = t
                  }
               }
            }), n("BaseInput", {
               attrs: {
                  label: "Field of study",
                  type: "text",
                  placeholder: "Field of study",
                  value: e.education.studyArea
               },
               on: {
                  input: function (t) {
                     return e.education.studyArea = t
                  }
               }
            }), n("BaseInput", {
               attrs: {
                  label: "Start Year",
                  type: "number",
                  placeholder: "Start Year",
                  value: e.education.startYear
               },
               on: {
                  input: function (t) {
                     return e.education.startYear = t
                  }
               }
            }), n("BaseInput", {
               attrs: {
                  label: "End Year",
                  type: e.inputType,
                  placeholder: "End Year",
                  value: e.education.endYear,
                  disabled: e.education.isCurrent
               },
               on: {
                  input: function (t) {
                     return e.education.endYear = t
                  }
               }
            }, [n("b-form-checkbox", {
               staticClass: "education-year-checkbox",
               on: {
                  change: e.onYearCheckboxClicked
               },
               model: {
                  value: e.education.isCurrent,
                  callback: function (t) {
                     e.$set(e.education, "isCurrent", t)
                  },
                  expression: "education.isCurrent"
               }
            }, [e._v(" Currently studying here ")])], 1)], 1), n("base-textarea", {
               staticClass: "ui-profile-education__edit-description",
               attrs: {
                  label: "Description",
                  placeholder: "Enter something...",
                  rows: "3",
                  maxrows: "6",
                  value: e.education.description,
                  "no-validate": ""
               },
               on: {
                  input: function (t) {
                     return e.education.description = t
                  }
               }
            })], 1)], 1)
         },
         Sn = [],
         Tn = n("f69e"),
         Fn = n.n(Tn),
         Ln = n("c216"),
         $n = n.n(Ln),
         Bn = {
            components: {
               BaseTextarea: xe["a"],
               BaseInput: Z["a"],
               BaseInputWithLogo: un,
               BaseLogoUploader: gn,
               ValidationObserver: ne["a"],
               BaseLogoAutoSuggest: In
            },
            props: ["selectedEducation", "mode"],
            watch: {
               selectedRadio: function (e) {
                  this.education.genericLogo = "clearbit" === e
               }
            },
            data: function () {
               return {
                  manualUpload: !1,
                  inputType: "number",
                  ic_delete: Fn.a,
                  ic_cloud_upload: $n.a,
                  selectedRadio: "clearbit",
                  cachedLogo: null,
                  icLogoDisabled: vn.a,
                  education: {
                     startYear: null,
                     endYear: null,
                     website: null,
                     studyArea: null,
                     degree: null,
                     institution: null,
                     description: null,
                     genericLogo: !0,
                     logo: null,
                     isCurrent: !1
                  }
               }
            },
            created: function () {
               if ("edit" === this.mode) {
                  var e = this.selectedEducation,
                     t = e.id,
                     n = e.startYear,
                     r = e.endYear,
                     s = e.studyArea,
                     o = e.degree,
                     i = e.institution,
                     a = e.description,
                     c = e.genericLogo,
                     u = e.website,
                     l = e.logo,
                     d = e.isCurrent;
                  this.education = {
                     id: t,
                     startYear: n,
                     endYear: r,
                     website: u,
                     studyArea: s,
                     degree: o,
                     institution: i,
                     description: a,
                     genericLogo: c,
                     logo: l,
                     isCurrent: d
                  }, this.education.isCurrent && (this.inputType = "text", this.education.endYear = "Present"), this.education.genericLogo || (this.manualUpload = !0)
               }
            },
            computed: {
               genericLogo: function () {
                  return this.education.genericLogo
               },
               logoSrc: function () {
                  return this.genericLogo && this.education.logo ? this.education.logo.url ? this.education.logo.url : this.education.logo : this.icLogoDisabled
               },
               customLogo: function () {
                  return !this.education.genericLogo && this.education.logo ? this.education.logo : null
               }
            },
            methods: {
               onInstitutionSelected: function (e) {
                  this.education.logo = e.logo, this.cachedLogo = e.logo, this.education.institution = e.name, this.education.website = e.domain
               },
               onCheckboxClicked: function (e) {
                  if (e) {
                     var t = (new Date).getFullYear();
                     this.education.endYear = t
                  } else this.education.endYear = null
               },
               onLogoCheckboxClicked: function (e) {
                  this.education.genericLogo = !e, e || (this.education.companyLogo = this.cachedLogo)
               },
               onLogoUpload: function (e) {
                  this.education.logo = e, console.log("Generic Logo: ", this.education.genericLogo)
               },
               submitForm: function () {
                  var e = this;
                  return Object(R["a"])(regeneratorRuntime.mark((function t() {
                     return regeneratorRuntime.wrap((function (t) {
                        while (1) switch (t.prev = t.next) {
                           case 0:
                              return t.abrupt("return", e.$refs.observer.validate().then(function () {
                                 var t = Object(R["a"])(regeneratorRuntime.mark((function t(n) {
                                    return regeneratorRuntime.wrap((function (t) {
                                       while (1) switch (t.prev = t.next) {
                                          case 0:
                                             if (n) {
                                                t.next = 2;
                                                break
                                             }
                                             return t.abrupt("return", !1);
                                          case 2:
                                             if ("edit" !== e.mode) {
                                                t.next = 7;
                                                break
                                             }
                                             return t.next = 5, e.$store.dispatch("profile/editEducation", e.education);
                                          case 5:
                                             t.next = 10;
                                             break;
                                          case 7:
                                             return console.log(e.education), t.next = 10, e.$store.dispatch("profile/createEducation", e.education);
                                          case 10:
                                             return e.resetForm(), t.abrupt("return", !0);
                                          case 12:
                                          case "end":
                                             return t.stop()
                                       }
                                    }), t)
                                 })));
                                 return function (e) {
                                    return t.apply(this, arguments)
                                 }
                              }()));
                           case 1:
                           case "end":
                              return t.stop()
                        }
                     }), t)
                  })))()
               },
               onYearCheckboxClicked: function (e) {
                  e ? (this.inputType = "text", this.education.endYear = "Present") : (this.inputType = "number", this.education.endYear = null)
               },
               resetForm: function () {
                  this.education = {
                     startYear: null,
                     endYear: null,
                     location: null,
                     studyArea: null,
                     degree: null,
                     institution: null,
                     field: null,
                     description: null,
                     genericLogo: !0,
                     logo: null,
                     isCurrent: !1
                  }, this.$refs.observer.reset()
               }
            }
         },
         Un = Bn,
         Dn = (n("4997"), Object(L["a"])(Un, An, Sn, !1, null, null, null)),
         Nn = Dn.exports,
         En = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("validation-observer", {
               ref: "observer"
            }, [n("b-form", {
               staticClass: "ui-profile-projects__edit",
               on: {
                  submit: function (t) {
                     return t.preventDefault(), e.submitForm(t)
                  }
               }
            }, [n("div", {
               staticClass: "ui-profile-projects__edit-form-grid"
            }, [n("BaseInput", {
               attrs: {
                  label: "Title",
                  type: "text",
                  placeholder: "Title",
                  value: e.project.title
               },
               on: {
                  input: function (t) {
                     return e.project.title = t
                  }
               }
            }), n("div", {
               staticClass: "upload-img"
            }, [n("label", {
               staticClass: "ui-label"
            }, [e._v("Images")]), n("draggable", {
               key: e.images.length,
               staticClass: "upload-img__wr",
               attrs: {
                  list: e.images
               },
               on: {
                  change: e.onImageListUpdate,
                  start: function (t) {
                     e.drag = !0
                  },
                  end: function (t) {
                     e.drag = !1
                  }
               }
            }, [e._l(e.images, (function (t, r) {
               return n("div", {
                  key: t.id,
                  staticClass: "upload-img__box"
               }, [t.loading ? n("div", {
                  staticClass: "upload-img__img-loading"
               }, [n("b-skeleton", {
                  staticClass: "upload-img__img-skeleton"
               }), n("b-progress", {
                  staticClass: "upload-img__img-progress",
                  attrs: {
                     "show-progress": "",
                     animated: "",
                     max: "100"
                  }
               }, [n("b-progress-bar", {
                  staticClass: "upload-img__img-progress-bar",
                  attrs: {
                     value: t.progress
                  }
               }, [n("span", [n("strong", [e._v(" " + e._s(t.progress) + "% ")])])])], 1)], 1) : n("div", {
                  staticClass: "upload-img__img",
                  style: {
                     "background-image": "url(" + t.file.url + ")"
                  }
               }, [n("button", {
                  staticClass: "ui-btn ui-btn__rounded gallery-btn-delete",
                  on: {
                     click: function (t) {
                        return t.preventDefault(), e.removeImage(r)
                     }
                  }
               }, [n("span", {
                  staticClass: "icon-remove"
               })]), n("edit-caption", {
                  ref: "caption-button-" + r,
                  refInFor: !0,
                  attrs: {
                     id: t.id,
                     caption: t.caption,
                     altText: t.altText
                  },
                  on: {
                     click: function (t) {
                        return e.captionClicked(r)
                     },
                     save: function (n) {
                        return e.onCaptionSave(n, r, t)
                     }
                  }
               })], 1)])
            })), n("div", {
               staticClass: "upload-img__input"
            }, [n("file-upload", {
               ref: "upload",
               staticClass: "upload-img__new d-flex flex-column justify-content-center align-items-center",
               attrs: {
                  for: "img-upload",
                  extensions: e.uploadParams.extensions,
                  accept: e.uploadParams.accept,
                  multiple: e.uploadParams.multiple,
                  directory: e.uploadParams.directory,
                  thread: e.uploadParams.thread,
                  drop: e.uploadParams.drop,
                  "drop-directory": e.uploadParams.dropDirectory,
                  "add-index": e.uploadParams.addIndex
               },
               on: {
                  "input-file": e.inputFile,
                  "input-filter": e.inputFilter
               }
            }, [n("img", {
               attrs: {
                  src: e.ic_cloud_upload,
                  alt: ""
               }
            }), n("div", {
               staticClass: "mt-2"
            }, [n("span", {
               staticClass: "upload-img__new--text"
            }, [e._v(" Drag & Drop Image ")])])])], 1)], 2)], 1)], 1), n("label", {
               staticClass: "ui-label ui-input-default__label features-label"
            }, [e._v("Features ")]), n("div", {
               staticClass: "ui-profile-projects__edit-form-grid--full mt-1 mb-3"
            }, e._l(e.project.highlights, (function (t, r) {
               return n("div", {
                  key: "project-feature-" + r,
                  staticClass: "feature-container"
               }, [n("BaseInput", {
                  attrs: {
                     id: e.project.id ? "project-" + e.project.id + "-feature-" + r : "project-feature-" + r,
                     type: "text",
                     placeholder: "Add Features here ",
                     value: t.content,
                     "no-validate": ""
                  },
                  on: {
                     input: function (e) {
                        return t.content = e
                     }
                  }
               }), n("img", {
                  staticClass: "feature-delete",
                  attrs: {
                     src: e.icDelete
                  },
                  on: {
                     click: function (t) {
                        return t.preventDefault(), e.removeFeature(r)
                     }
                  }
               })], 1)
            })), 0), n("button", {
               staticClass: "ui-btn ui-btn__transparent ui-btn__transparent--edit btn__add-more",
               on: {
                  click: function (t) {
                     return t.preventDefault(), e.addFeature(t)
                  }
               }
            }, [n("img", {
               attrs: {
                  src: e.icAdd
               }
            }), e._v("Add More ")]), n("div", {
               staticClass: "ui-profile-experience__edit-description"
            }, [n("base-textarea", {
               staticClass: "mb-4",
               attrs: {
                  label: "Summary",
                  placeholder: "Enter a short Description...",
                  rows: "3",
                  maxrows: "3",
                  value: e.project.shortDescription
               },
               on: {
                  input: function (t) {
                     return e.project.shortDescription = t
                  }
               }
            }), n("base-textarea", {
               attrs: {
                  label: "Description",
                  placeholder: "Enter something...",
                  rows: "6",
                  maxrows: "6",
                  value: e.project.description,
                  "no-validate": ""
               },
               on: {
                  input: function (t) {
                     return e.project.description = t
                  }
               }
            })], 1)])], 1)
         },
         qn = [],
         zn = (n("a434"), function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("div", [n("button", {
               staticClass: "ui-btn ui-btn__rounded edit-caption-inline__btn-edit",
               on: {
                  click: function (t) {
                     return t.preventDefault(), e.showCaptionBox(t)
                  }
               }
            }, [n("span", {
               staticClass: "icon-edit-outline"
            })]), e.show ? n("div", {
               staticClass: "edit-caption-inline"
            }, [n("b-tabs", {
               attrs: {
                  "content-class": "mt-0",
                  "nav-class": "tab-list"
               }
            }, [n("b-tab", {
               attrs: {
                  title: "Caption",
                  active: ""
               }
            }, [n("div", {
               staticClass: "tab-body"
            }, [n("base-textarea", {
               attrs: {
                  value: e.vCaption,
                  id: "img_caption--" + e.id,
                  placeholder: "Caption",
                  "no-validate": ""
               },
               on: {
                  input: function (t) {
                     return e.vCaption = t
                  }
               }
            })], 1)]), n("b-tab", {
               attrs: {
                  title: "Alt text"
               }
            }, [n("div", {
               staticClass: "tab-body"
            }, [n("base-input", {
               attrs: {
                  value: e.vAltText,
                  id: "img_altText--" + e.id,
                  placeholder: "Alt text",
                  "no-validate": ""
               },
               on: {
                  input: function (t) {
                     return e.vAltText = t
                  }
               }
            })], 1)])], 1), n("div", {
               staticClass: "ui-text-right"
            }, [n("button", {
               staticClass: "ui-btn ui-btn__outline",
               on: {
                  click: function (t) {
                     return t.preventDefault(), e.closeCaptionBox(t)
                  }
               }
            }, [e._v(" Cancel ")]), n("button", {
               staticClass: "ui-btn",
               on: {
                  click: function (t) {
                     return t.preventDefault(), e.onSave(t)
                  }
               }
            }, [e._v("Save")])])], 1) : e._e()])
         }),
         Hn = [],
         Gn = {
            name: "EditCaption",
            components: {
               BaseTextarea: xe["a"],
               BaseInput: Z["a"]
            },
            props: ["id", "caption", "altText"],
            emits: ["save"],
            data: function () {
               return {
                  show: !1,
                  vCaption: null,
                  vAltText: null
               }
            },
            mounted: function () {
               this.caption && (this.vCaption = this.caption), this.altText && (this.vAltText = this.altText)
            },
            methods: {
               showCaptionBox: function () {
                  this.show = !0, this.$emit("click")
               },
               closeCaptionBox: function () {
                  this.show = !1
               },
               onSave: function () {
                  this.$emit("save", {
                     caption: this.vCaption,
                     altText: this.vAltText
                  }), this.closeCaptionBox()
               }
            }
         },
         Wn = Gn,
         Vn = (n("9d25"), Object(L["a"])(Wn, zn, Hn, !1, null, null, null)),
         Yn = Vn.exports,
         Jn = {
            components: {
               EditCaption: Yn,
               BaseTextarea: xe["a"],
               BaseInput: Z["a"],
               FileUpload: se.a,
               ValidationObserver: ne["a"],
               draggable: Pt.a
            },
            props: ["selectedProject", "mode", "icAdd", "icDelete"],
            data: function () {
               return {
                  ic_cloud_upload: $n.a,
                  project: {
                     id: null,
                     title: null,
                     description: null,
                     shortDescription: null,
                     image: null,
                     media: [],
                     featuredMedia: null,
                     highlights: [{
                        content: null
                     }]
                  },
                  images: [],
                  uploadParams: {
                     extensions: "gif,jpg,jpeg,png,webp",
                     accept: "image/png,image/gif,image/jpeg,image/webp",
                     minSize: 1024,
                     size: 10485760,
                     multiple: !0,
                     directory: !1,
                     drop: !0,
                     dropDirectory: !0,
                     createDirectory: !1,
                     addIndex: !1,
                     thread: 3
                  }
               }
            },
            created: function () {
               var e = this;
               if ("edit" === this.mode) {
                  var t = this.selectedProject,
                     n = t.id,
                     r = t.title,
                     s = t.description,
                     o = t.shortDescription,
                     i = t.image,
                     a = t.media,
                     c = t.featuredMedia,
                     u = t.highlights;
                  a.forEach((function (t) {
                     e.images.push({
                        id: t.file.id,
                        file: {
                           url: t.file.url
                        },
                        order: t.order,
                        caption: t.caption,
                        altText: t.altText,
                        loading: !1
                     })
                  })), this.project = {
                     id: n,
                     title: r,
                     description: s,
                     shortDescription: o,
                     image: i,
                     media: a || [],
                     featuredMedia: c,
                     highlights: u || [{
                        content: null
                     }]
                  }
               }
            },
            methods: {
               inputFile: function (e, t) {
                  var n = this;
                  return Object(R["a"])(regeneratorRuntime.mark((function r() {
                     var s, o, i, a, c;
                     return regeneratorRuntime.wrap((function (r) {
                        while (1) switch (r.prev = r.next) {
                           case 0:
                              if (console.log(e), !e || t) {
                                 r.next = 14;
                                 break
                              }
                              return s = n.project.media.length + 1, o = n.images.push({
                                 file: null,
                                 order: s,
                                 loading: !0,
                                 caption: null,
                                 altText: null,
                                 progress: 0
                              }), i = 500, a = setInterval((function () {
                                 n.images[o - 1].progress < 90 ? n.images[o - 1].progress += 10 : n.images[o - 1].progress < 99 && (n.images[o - 1].progress += 3, i = 1e3)
                              }), i), n.project.media.push({
                                 file: null,
                                 order: s,
                                 altText: e.file.name
                              }), r.next = 9, n.$store.dispatch("profile/uploadImage", {
                                 newFile: e
                              });
                           case 9:
                              c = r.sent, n.project.media[o - 1].file = c, n.images[o - 1].file = e, n.images[o - 1].loading = !1, setTimeout((function () {
                                 n.images[o - 1].loading = !1, clearInterval(a)
                              }), 1e3);
                           case 14:
                           case "end":
                              return r.stop()
                        }
                     }), r)
                  })))()
               },
               inputFilter: function (e, t, n) {
                  var r = this;
                  if (e && !t) {
                     if (/(\/|^)(Thumbs\.db|desktop\.ini|\..+)$/.test(e.name)) return n();
                     if (/\.(php5?|html?|jsx?)$/i.test(e.name)) return n();
                     if (e && "" === e.error && e.file && (!t || e.file !== t.file)) {
                        e.blob = "";
                        var s = window.URL || window.webkitURL;
                        s && (e.blob = s.createObjectURL(e.file)), e.url = "", e.blob && "image/" === e.type.substr(0, 6) && (e.url = e.blob, console.log(e.url))
                     }
                     if (e && "" === e.error && "image/" === e.type.substr(0, 6) && e.blob && (!t || e.blob !== t.blob)) {
                        e.error = "image parsing";
                        var o = new Image;
                        o.onload = function () {
                           r.$refs.upload.update(e, {
                              error: "",
                              height: o.height,
                              width: o.width
                           })
                        }, o.οnerrοr = function () {
                           r.$refs.upload.update(e, {
                              error: "parsing image size"
                           })
                        }, o.src = e.blob
                     }
                  }
               },
               addFeature: function () {
                  this.project.highlights.push({
                     content: null
                  })
               },
               removeFeature: function (e) {
                  0 === e ? this.project.highlights[e].content = null : this.project.highlights.splice(e, 1)
               },
               removeImage: function (e) {
                  this.images.splice(e, 1), this.project.media.splice(e, 1), 0 === e && (this.project.featuredMedia = this.project.media[0])
               },
               onImageListUpdate: function (e) {
                  console.log(e), e.moved && this.mediaMover(e.moved)
               },
               mediaMover: function (e) {
                  var t = e.newIndex,
                     n = e.oldIndex,
                     r = e.element;
                  console.log(r), this.project.media.splice(t, 0, this.project.media.splice(n, 1)[0])
               },
               sorter: function (e) {
                  this.project.media.sort((function (t, n) {
                     return t.order <= e.order ? (console.log("A Moved"), -1) : n.order <= e.order ? (console.log("B Moved"), 1) : (console.log("Nothing"), 0)
                  }))
               },
               captionClicked: function (e) {
                  for (var t = 0; t < this.images.length; t++) t !== e && this.$refs["caption-button-".concat(t)][0].closeCaptionBox()
               },
               onCaptionSave: function (e, t, n) {
                  var r = e.caption,
                     s = e.altText;
                  n.caption = r, this.project.media[t].caption = r, s && (n.altText = s, this.project.media[t].altText = s)
               },
               submitForm: function () {
                  var e = this;
                  return Object(R["a"])(regeneratorRuntime.mark((function t() {
                     return regeneratorRuntime.wrap((function (t) {
                        while (1) switch (t.prev = t.next) {
                           case 0:
                              return t.abrupt("return", e.$refs.observer.validate().then(function () {
                                 var t = Object(R["a"])(regeneratorRuntime.mark((function t(n) {
                                    return regeneratorRuntime.wrap((function (t) {
                                       while (1) switch (t.prev = t.next) {
                                          case 0:
                                             if (n) {
                                                t.next = 2;
                                                break
                                             }
                                             return t.abrupt("return", !1);
                                          case 2:
                                             if ("edit" !== e.mode) {
                                                t.next = 8;
                                                break
                                             }
                                             return e.project.featuredMedia = e.project.media[0], t.next = 6, e.$store.dispatch("profile/editProject", e.project);
                                          case 6:
                                             t.next = 11;
                                             break;
                                          case 8:
                                             return e.project.featuredMedia = e.project.media[0], t.next = 11, e.$store.dispatch("profile/createProject", e.project);
                                          case 11:
                                             return e.resetForm(), t.abrupt("return", !0);
                                          case 13:
                                          case "end":
                                             return t.stop()
                                       }
                                    }), t)
                                 })));
                                 return function (e) {
                                    return t.apply(this, arguments)
                                 }
                              }()));
                           case 1:
                           case "end":
                              return t.stop()
                        }
                     }), t)
                  })))()
               },
               resetForm: function () {
                  this.project = {
                     id: null,
                     description: null,
                     shortDescription: null,
                     media: [],
                     featuredMedia: null,
                     features: [{
                        content: null
                     }, {
                        content: null
                     }]
                  }, this.$refs.observer.reset()
               }
            }
         },
         Kn = Jn,
         Qn = (n("09ea"), Object(L["a"])(Kn, En, qn, !1, null, null, null)),
         Zn = Qn.exports,
         Xn = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("validation-observer", {
               ref: "observer"
            }, [n("b-form", {
               staticClass: "ui-profile-gallery__edit",
               on: {
                  submit: function (t) {
                     return t.preventDefault(), e.submitForm(t)
                  }
               }
            }, [n("div", {
               staticClass: "ui-profile-gallery__edit-form-grid"
            }, [n("BaseInput", {
               attrs: {
                  label: "Gallery Name",
                  type: "text",
                  placeholder: "Gallery Name",
                  value: e.gallery.title
               },
               on: {
                  input: function (t) {
                     return e.gallery.title = t
                  }
               }
            }), n("div", {
               staticClass: "ui-profile-gallery__edit-form-grid"
            }), n("div", {
               staticClass: "upload-img"
            }, [n("div", {
               staticClass: "ui-label uploaded-images__label"
            }, [e._v("Add Images")]), n("draggable", {
               key: e.images.length,
               staticClass: "upload-img__wr",
               attrs: {
                  list: e.images
               },
               on: {
                  change: e.onImageListUpdate,
                  start: function (t) {
                     e.drag = !0
                  },
                  end: function (t) {
                     e.drag = !1
                  }
               }
            }, [e._l(e.images, (function (t, r) {
               return n("div", {
                  key: t.id,
                  staticClass: "upload-img__box"
               }, [t.loading ? n("div", {
                  staticClass: "upload-img__img-loading"
               }, [n("b-skeleton", {
                  staticClass: "upload-img__img-skeleton"
               }), n("b-progress", {
                  staticClass: "upload-img__img-progress",
                  attrs: {
                     "show-progress": "",
                     animated: "",
                     max: "100"
                  }
               }, [n("b-progress-bar", {
                  staticClass: "upload-img__img-progress-bar",
                  attrs: {
                     value: t.progress
                  }
               }, [n("span", [n("strong", [e._v(" " + e._s(t.progress) + "% ")])])])], 1)], 1) : n("div", {
                  staticClass: "upload-img__img",
                  style: {
                     "background-image": "url(" + t.file.url + ")"
                  }
               }, [n("button", {
                  staticClass: "ui-btn ui-btn__rounded gallery-btn-delete",
                  on: {
                     click: function (t) {
                        return t.preventDefault(), e.removeImage(r)
                     }
                  }
               }, [n("span", {
                  staticClass: "icon-remove"
               })]), n("edit-caption", {
                  ref: "caption-button-" + r,
                  refInFor: !0,
                  attrs: {
                     id: t.id,
                     caption: t.caption,
                     altText: t.altText
                  },
                  on: {
                     click: function (t) {
                        return e.captionClicked(r)
                     },
                     save: function (n) {
                        return e.onCaptionSave(n, r, t)
                     }
                  }
               })], 1)])
            })), n("div", {
               staticClass: "upload-img__input"
            }, [n("file-upload", {
               ref: "upload",
               staticClass: "upload-img__new d-flex flex-column justify-content-center align-items-center",
               attrs: {
                  for: "img-upload",
                  extensions: e.uploadParams.extensions,
                  accept: e.uploadParams.accept,
                  multiple: e.uploadParams.multiple,
                  directory: e.uploadParams.directory,
                  thread: e.uploadParams.thread,
                  drop: e.uploadParams.drop,
                  "drop-directory": e.uploadParams.dropDirectory,
                  "add-index": e.uploadParams.addIndex
               },
               on: {
                  "input-file": e.inputFile,
                  "input-filter": e.inputFilter
               }
            }, [n("img", {
               attrs: {
                  src: e.ic_cloud_upload,
                  alt: ""
               }
            }), n("div", {
               staticClass: "mt-2"
            }, [n("span", {
               staticClass: "upload-img__new--text"
            }, [e._v(" Drag & Drop Image ")])])])], 1)], 2)], 1)], 1), n("BaseTextArea", {
               staticClass: "ui-profile-gallery__edit-description",
               attrs: {
                  label: "Description",
                  placeholder: "Enter something...",
                  rows: "6",
                  maxrows: "6",
                  value: e.gallery.description
               },
               on: {
                  input: function (t) {
                     return e.gallery.description = t
                  }
               }
            })], 1)], 1)
         },
         er = [],
         tr = {
            components: {
               EditCaption: Yn,
               BaseInput: Z["a"],
               BaseTextArea: xe["a"],
               ValidationObserver: ne["a"],
               FileUpload: se.a,
               draggable: Pt.a
            },
            props: ["icAdd", "icClose", "icEdit", "icDelete", "icBack", "selectedGallery", "mode"],
            data: function () {
               return {
                  ic_cloud_upload: $n.a,
                  gallery: {
                     id: null,
                     title: null,
                     media: [],
                     featuredMedia: null,
                     description: null
                  },
                  images: [],
                  uploadParams: {
                     extensions: "gif,jpg,jpeg,png,webp",
                     accept: "image/png,image/gif,image/jpeg,image/webp",
                     minSize: 1024,
                     size: 10485760,
                     multiple: !0,
                     directory: !1,
                     drop: !0,
                     dropDirectory: !0,
                     createDirectory: !1,
                     addIndex: !1,
                     thread: 3
                  }
               }
            },
            created: function () {
               var e = this;
               if ("edit" === this.mode) {
                  var t = this.selectedGallery,
                     n = t.id,
                     r = t.title,
                     s = t.media,
                     o = t.featuredMedia,
                     i = t.description;
                  s.forEach((function (t) {
                     e.images.push({
                        id: t.file.id,
                        file: {
                           url: t.file.url
                        },
                        caption: t.caption,
                        altText: t.altText,
                        order: t.order,
                        loading: !1
                     })
                  })), this.gallery = {
                     id: n,
                     title: r,
                     media: s || [],
                     featuredMedia: o,
                     description: i
                  }
               }
            },
            methods: {
               inputFile: function (e, t) {
                  var n = this;
                  return Object(R["a"])(regeneratorRuntime.mark((function r() {
                     var s, o, i, a, c;
                     return regeneratorRuntime.wrap((function (r) {
                        while (1) switch (r.prev = r.next) {
                           case 0:
                              if (!e || t) {
                                 r.next = 13;
                                 break
                              }
                              return s = n.gallery.media.length + 1, o = n.images.push({
                                 file: null,
                                 order: s,
                                 loading: !0,
                                 caption: null,
                                 altText: null,
                                 progress: 0
                              }), i = 500, a = setInterval((function () {
                                 n.images[o - 1].progress < 90 ? n.images[o - 1].progress += 10 : n.images[o - 1].progress < 99 && (n.images[o - 1].progress += 3, i = 1e3)
                              }), i), n.gallery.media.push({
                                 file: null,
                                 order: s,
                                 altText: e.file.name
                              }), r.next = 8, n.$store.dispatch("profile/uploadImage", {
                                 newFile: e
                              });
                           case 8:
                              c = r.sent, n.gallery.media[o - 1].file = c, n.images[o - 1].file = e, n.images[o - 1].loading = !1, setTimeout((function () {
                                 n.images[o - 1].loading = !1, clearInterval(a)
                              }), 1e3);
                           case 13:
                           case "end":
                              return r.stop()
                        }
                     }), r)
                  })))()
               },
               inputFilter: function (e, t, n) {
                  var r = this;
                  if (e && !t) {
                     if (/(\/|^)(Thumbs\.db|desktop\.ini|\..+)$/.test(e.name)) return n();
                     if (/\.(php5?|html?|jsx?)$/i.test(e.name)) return n();
                     if (e && "" === e.error && e.file && (!t || e.file !== t.file)) {
                        e.blob = "";
                        var s = window.URL || window.webkitURL;
                        s && (e.blob = s.createObjectURL(e.file)), e.url = "", e.blob && "image/" === e.type.substr(0, 6) && (e.url = e.blob, console.log(e.url))
                     }
                     if (e && "" === e.error && "image/" === e.type.substr(0, 6) && e.blob && (!t || e.blob !== t.blob)) {
                        e.error = "image parsing";
                        var o = new Image;
                        o.onload = function () {
                           r.$refs.upload.update(e, {
                              error: "",
                              height: o.height,
                              width: o.width
                           })
                        }, o.οnerrοr = function () {
                           r.$refs.upload.update(e, {
                              error: "parsing image size"
                           })
                        }, o.src = e.blob
                     }
                  }
               },
               removeImage: function (e) {
                  this.images.splice(e, 1), this.gallery.media.splice(e, 1), 0 === e && (this.gallery.featuredMedia = this.gallery.media[0])
               },
               onImageListUpdate: function (e) {
                  console.log(e), e.moved && this.mediaMover(e.moved)
               },
               mediaMover: function (e) {
                  var t = e.newIndex,
                     n = e.oldIndex,
                     r = e.element;
                  console.log(r), this.gallery.media.splice(t, 0, this.gallery.media.splice(n, 1)[0])
               },
               sorter: function (e) {
                  this.gallery.media.sort((function (t, n) {
                     return t.order <= e.order ? (console.log("A Moved"), -1) : n.order <= e.order ? (console.log("B Moved"), 1) : (console.log("Nothing"), 0)
                  }))
               },
               captionClicked: function (e) {
                  for (var t = 0; t < this.images.length; t++) t !== e && this.$refs["caption-button-".concat(t)][0].closeCaptionBox()
               },
               onCaptionSave: function (e, t, n) {
                  var r = e.caption,
                     s = e.altText;
                  n.caption = r, this.gallery.media[t].caption = r, s && (n.altText = s, this.gallery.media[t].altText = s)
               },
               submitForm: function () {
                  var e = this;
                  return Object(R["a"])(regeneratorRuntime.mark((function t() {
                     return regeneratorRuntime.wrap((function (t) {
                        while (1) switch (t.prev = t.next) {
                           case 0:
                              return t.abrupt("return", e.$refs.observer.validate().then(function () {
                                 var t = Object(R["a"])(regeneratorRuntime.mark((function t(n) {
                                    return regeneratorRuntime.wrap((function (t) {
                                       while (1) switch (t.prev = t.next) {
                                          case 0:
                                             if (n) {
                                                t.next = 3;
                                                break
                                             }
                                             return console.log("Form invalid"), t.abrupt("return", !1);
                                          case 3:
                                             if ("edit" !== e.mode) {
                                                t.next = 9;
                                                break
                                             }
                                             return e.gallery.featuredMedia = e.gallery.media[0], t.next = 7, e.$store.dispatch("profile/editGallery", e.gallery);
                                          case 7:
                                             t.next = 12;
                                             break;
                                          case 9:
                                             return e.gallery.featuredMedia = e.gallery.media[0], t.next = 12, e.$store.dispatch("profile/createGallery", e.gallery);
                                          case 12:
                                             return e.resetForm(), t.abrupt("return", !0);
                                          case 14:
                                          case "end":
                                             return t.stop()
                                       }
                                    }), t)
                                 })));
                                 return function (e) {
                                    return t.apply(this, arguments)
                                 }
                              }()));
                           case 1:
                           case "end":
                              return t.stop()
                        }
                     }), t)
                  })))()
               },
               resetForm: function () {
                  this.gallery = {
                     id: null,
                     title: null,
                     media: [],
                     featuredMedia: null,
                     description: null
                  }, this.images = [], this.$refs.observer.reset(), console.log("Form Reseted")
               }
            }
         },
         nr = tr,
         rr = Object(L["a"])(nr, Xn, er, !1, null, null, null),
         sr = rr.exports,
         or = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("validation-observer", {
               ref: "observer"
            }, [n("b-form", {
               staticClass: "ui-profile-products__edit",
               on: {
                  submit: function (t) {
                     return t.preventDefault(), e.submitForm(t)
                  }
               }
            }, [n("div", {
               staticClass: "ui-profile-products__edit-form-grid--full"
            }, [n("BaseInput", {
               attrs: {
                  label: "Name",
                  type: "text",
                  placeholder: "Product Name",
                  value: e.product.title
               },
               on: {
                  input: function (t) {
                     return e.product.title = t
                  }
               }
            })], 1), n("div", {
               staticClass: "ui-profile-products__edit-form-grid"
            }, [n("BaseInputCurrency", {
               attrs: {
                  label: e.priceLabel,
                  type: "number",
                  placeholder: e.priceLabel,
                  value: e.product.price,
                  currency: ""
               },
               on: {
                  input: function (t) {
                     return e.product.price = t
                  }
               }
            }, [n("b-form-checkbox", {
               staticClass: "product-price-checkbox",
               model: {
                  value: e.product.fixedPrice,
                  callback: function (t) {
                     e.$set(e.product, "fixedPrice", t)
                  },
                  expression: "product.fixedPrice"
               }
            }, [e._v(" Fixed Price ")])], 1), n("BaseInput", {
               attrs: {
                  label: "SKU",
                  type: "text",
                  placeholder: "Stock-keeping unit ",
                  value: e.product.sku,
                  "no-validate": ""
               },
               on: {
                  input: function (t) {
                     return e.product.sku = t
                  }
               }
            })], 1), n("div", {
               staticClass: "ui-profile-products__edit-form-grid--full"
            }, [n("div", {
               staticClass: "upload-img"
            }, [n("label", {
               staticClass: "ui-label mb-2"
            }, [e._v("Add Images")]), n("draggable", {
               key: e.images.length,
               staticClass: "upload-img__wr",
               attrs: {
                  list: e.images
               },
               on: {
                  change: e.onImageListUpdate,
                  start: function (t) {
                     e.drag = !0
                  },
                  end: function (t) {
                     e.drag = !1
                  }
               }
            }, [e._l(e.images, (function (t, r) {
               return n("div", {
                  key: t.id,
                  staticClass: "upload-img__box"
               }, [t.loading ? n("div", {
                  staticClass: "upload-img__img-loading"
               }, [n("b-skeleton", {
                  staticClass: "upload-img__img-skeleton"
               }), n("b-progress", {
                  staticClass: "upload-img__img-progress",
                  attrs: {
                     "show-progress": "",
                     animated: "",
                     max: "100"
                  }
               }, [n("b-progress-bar", {
                  staticClass: "upload-img__img-progress-bar",
                  attrs: {
                     value: t.progress
                  }
               }, [n("span", [n("strong", [e._v(" " + e._s(t.progress) + "% ")])])])], 1)], 1) : n("div", {
                  staticClass: "upload-img__img",
                  style: {
                     "background-image": "url(" + t.file.url + ")"
                  }
               }, [n("button", {
                  staticClass: "ui-btn ui-btn__rounded gallery-btn-delete",
                  on: {
                     click: function (t) {
                        return t.preventDefault(), e.removeImage(r)
                     }
                  }
               }, [n("span", {
                  staticClass: "icon-remove"
               })]), n("edit-caption", {
                  ref: "caption-button-" + r,
                  refInFor: !0,
                  attrs: {
                     id: t.id,
                     caption: t.caption,
                     altText: t.altText
                  },
                  on: {
                     click: function (t) {
                        return e.captionClicked(r)
                     },
                     save: function (n) {
                        return e.onCaptionSave(n, r, t)
                     }
                  }
               })], 1)])
            })), n("div", {
               staticClass: "upload-img__input"
            }, [n("file-upload", {
               ref: "upload",
               staticClass: "upload-img__new d-flex flex-column justify-content-center align-items-center",
               attrs: {
                  for: "img-upload",
                  extensions: e.uploadParams.extensions,
                  accept: e.uploadParams.accept,
                  multiple: e.uploadParams.multiple,
                  directory: e.uploadParams.directory,
                  thread: e.uploadParams.thread,
                  drop: e.uploadParams.drop,
                  "drop-directory": e.uploadParams.dropDirectory,
                  "add-index": e.uploadParams.addIndex
               },
               on: {
                  "input-file": e.inputFile,
                  "input-filter": e.inputFilter
               }
            }, [n("img", {
               attrs: {
                  src: e.ic_cloud_upload,
                  alt: ""
               }
            }), n("div", {
               staticClass: "mt-2"
            }, [n("span", {
               staticClass: "upload-img__new--text"
            }, [e._v(" Drag & Drop Images ")])])])], 1)], 2)], 1)]), n("label", {
               staticClass: "ui-label ui-input-default__label features-label"
            }, [e._v("Features ")]), n("div", {
               staticClass: "ui-profile-products__edit-form-grid--full mt-1 mb-3"
            }, e._l(e.product.highlights, (function (t, r) {
               return n("div", {
                  key: "product-feature-" + r,
                  staticClass: "feature-container"
               }, [n("BaseInput", {
                  attrs: {
                     id: e.product.id ? "product-" + e.product.id + "-feature-" + r : "product-feature-" + r,
                     type: "text",
                     placeholder: "Add Features here ",
                     value: t.content,
                     "no-validate": ""
                  },
                  on: {
                     input: function (e) {
                        return t.content = e
                     }
                  }
               }), n("img", {
                  staticClass: "feature-delete",
                  attrs: {
                     src: e.icDelete
                  },
                  on: {
                     click: function (t) {
                        return t.preventDefault(), e.removeFeature(r)
                     }
                  }
               })], 1)
            })), 0), n("button", {
               staticClass: "ui-btn ui-btn__transparent ui-btn__transparent--edit btn__add-more",
               on: {
                  click: function (t) {
                     return t.preventDefault(), e.addFeature(t)
                  }
               }
            }, [n("img", {
               attrs: {
                  src: e.icAdd
               }
            }), e._v("Add More ")]), n("div", {
               staticClass: "ui-profile-products__edit-description"
            }, [n("BaseTextArea", {
               attrs: {
                  label: "Summary",
                  placeholder: "Enter something...",
                  rows: "3",
                  maxrows: "6",
                  value: e.product.shortDescription
               },
               on: {
                  input: function (t) {
                     return e.product.shortDescription = t
                  }
               }
            })], 1), n("div", {
               staticClass: "ui-profile-products__edit-description"
            }, [n("BaseTextArea", {
               attrs: {
                  label: "Description",
                  placeholder: "Enter something...",
                  rows: "6",
                  maxrows: "6",
                  value: e.product.description,
                  "no-validate": ""
               },
               on: {
                  input: function (t) {
                     return e.product.description = t
                  }
               }
            })], 1)])], 1)
         },
         ir = [],
         ar = n("087e"),
         cr = {
            components: {
               EditCaption: Yn,
               BaseInput: Z["a"],
               BaseTextArea: xe["a"],
               ValidationObserver: ne["a"],
               FileUpload: se.a,
               draggable: Pt.a,
               BaseInputCurrency: ar["a"]
            },
            props: ["icAdd", "icClose", "icEdit", "icDelete", "icBack", "selectedProduct", "mode"],
            data: function () {
               return {
                  ic_cloud_upload: $n.a,
                  product: {
                     id: null,
                     title: null,
                     image: null,
                     shortDescription: null,
                     description: null,
                     price: null,
                     fixedPrice: !1,
                     sku: null,
                     media: [],
                     featuredMedia: null,
                     highlights: [{
                        content: null
                     }]
                  },
                  images: [],
                  uploadParams: {
                     extensions: "gif,jpg,jpeg,png,webp",
                     accept: "image/png,image/gif,image/jpeg,image/webp",
                     minSize: 1024,
                     size: 10485760,
                     multiple: !0,
                     directory: !1,
                     drop: !0,
                     dropDirectory: !0,
                     createDirectory: !1,
                     addIndex: !1,
                     thread: 3
                  }
               }
            },
            created: function () {
               var e = this;
               if ("edit" === this.mode) {
                  var t = this.selectedProduct,
                     n = t.id,
                     r = t.title,
                     s = t.shortDescription,
                     o = t.description,
                     i = t.media,
                     a = t.fixedPrice,
                     c = t.featuredMedia,
                     u = t.highlights,
                     l = t.price,
                     d = t.sku;
                  i.forEach((function (t) {
                     e.images.push({
                        id: t.file.id,
                        file: {
                           url: t.file.url
                        },
                        order: t.order,
                        caption: t.caption,
                        altText: t.altText,
                        loading: !1
                     })
                  })), this.product = {
                     id: n,
                     title: r,
                     shortDescription: s,
                     description: o,
                     media: i || [],
                     featuredMedia: c,
                     highlights: u || [{
                        content: null
                     }],
                     price: l,
                     fixedPrice: a,
                     sku: d
                  }, this.mode = "edit"
               }
            },
            computed: {
               priceLabel: function () {
                  var e = this.product.fixedPrice ? "Price" : "Starting Price";
                  return e
               },
               productMedia: function () {
                  return this.product.media
               }
            },
            methods: {
               inputFile: function (e, t) {
                  var n = this;
                  return Object(R["a"])(regeneratorRuntime.mark((function r() {
                     var s, o, i, a, c;
                     return regeneratorRuntime.wrap((function (r) {
                        while (1) switch (r.prev = r.next) {
                           case 0:
                              if (!e || t) {
                                 r.next = 13;
                                 break
                              }
                              return s = n.product.media.length + 1, o = n.images.push({
                                 file: null,
                                 order: s,
                                 loading: !0,
                                 caption: null,
                                 altText: null,
                                 progress: 0
                              }), i = 500, a = setInterval((function () {
                                 n.images[o - 1].progress < 90 ? n.images[o - 1].progress += 10 : n.images[o - 1].progress < 99 && (n.images[o - 1].progress += 3, i = 1e3)
                              }), i), n.product.media.push({
                                 file: null,
                                 order: s,
                                 altText: e.file.name
                              }), r.next = 8, n.$store.dispatch("profile/uploadImage", {
                                 newFile: e
                              });
                           case 8:
                              c = r.sent, n.product.media[o - 1].file = c, n.images[o - 1].file = e, n.images[o - 1].progress = 100, setTimeout((function () {
                                 n.images[o - 1].loading = !1, clearInterval(a)
                              }), 1e3);
                           case 13:
                           case "end":
                              return r.stop()
                        }
                     }), r)
                  })))()
               },
               inputFilter: function (e, t, n) {
                  var r = this;
                  if (e && !t) {
                     if (/(\/|^)(Thumbs\.db|desktop\.ini|\..+)$/.test(e.name)) return n();
                     if (/\.(php5?|html?|jsx?)$/i.test(e.name)) return n();
                     if (e && "" === e.error && e.file && (!t || e.file !== t.file)) {
                        e.blob = "";
                        var s = window.URL || window.webkitURL;
                        s && (e.blob = s.createObjectURL(e.file)), e.url = "", e.blob && "image/" === e.type.substr(0, 6) && (e.url = e.blob)
                     }
                     if (e && "" === e.error && "image/" === e.type.substr(0, 6) && e.blob && (!t || e.blob !== t.blob)) {
                        e.error = "image parsing";
                        var o = new Image;
                        o.onload = function () {
                           r.$refs.upload.update(e, {
                              error: "",
                              height: o.height,
                              width: o.width
                           })
                        }, o.οnerrοr = function () {
                           r.$refs.upload.update(e, {
                              error: "parsing image size"
                           })
                        }, o.src = e.blob
                     }
                  }
               },
               onImageListUpdate: function (e) {
                  console.log(e), e.moved && (this.mediaMover(e.moved), console.log("Images = ", this.images), console.log("Media =", this.product.media))
               },
               mediaMover: function (e) {
                  var t = e.newIndex,
                     n = e.oldIndex;
                  console.log(t), this.product.media.splice(t, 0, this.product.media.splice(n, 1)[0])
               },
               sorter: function (e) {
                  this.product.media.sort((function (t, n) {
                     return t.order < e.order ? (console.log("A Moved"), -1) : n.order < e.order ? (console.log("B Moved"), 1) : (console.log("Nothing"), 0)
                  }))
               },
               addFeature: function () {
                  this.product.highlights.push({
                     content: null
                  })
               },
               removeFeature: function (e) {
                  0 === e ? this.product.highlights[e].content = null : this.product.highlights.splice(e, 1)
               },
               removeImage: function (e) {
                  this.images.splice(e, 1), this.product.media.splice(e, 1), 0 === e && (this.product.featuredMedia = this.product.media[0])
               },
               onFixedPriceCheckboxClicked: function (e) {
                  console.log(e)
               },
               captionClicked: function (e) {
                  for (var t = 0; t < this.images.length; t++) t !== e && this.$refs["caption-button-".concat(t)][0].closeCaptionBox()
               },
               onCaptionSave: function (e, t, n) {
                  var r = e.caption,
                     s = e.altText;
                  n.caption = r, this.product.media[t].caption = r, s && (n.altText = s, this.product.media[t].altText = s)
               },
               submitForm: function () {
                  var e = this;
                  return Object(R["a"])(regeneratorRuntime.mark((function t() {
                     return regeneratorRuntime.wrap((function (t) {
                        while (1) switch (t.prev = t.next) {
                           case 0:
                              return t.abrupt("return", e.$refs.observer.validate().then(function () {
                                 var t = Object(R["a"])(regeneratorRuntime.mark((function t(n) {
                                    return regeneratorRuntime.wrap((function (t) {
                                       while (1) switch (t.prev = t.next) {
                                          case 0:
                                             if (n) {
                                                t.next = 2;
                                                break
                                             }
                                             return t.abrupt("return", !1);
                                          case 2:
                                             if (e.product.featuredMedia = e.product.media[0], "edit" !== e.mode) {
                                                t.next = 9;
                                                break
                                             }
                                             return console.log(e.product.media), t.next = 7, e.$store.dispatch("profile/editProduct", e.product);
                                          case 7:
                                             t.next = 11;
                                             break;
                                          case 9:
                                             return t.next = 11, e.$store.dispatch("profile/createProduct", e.product);
                                          case 11:
                                             return e.resetForm(), t.abrupt("return", !0);
                                          case 13:
                                          case "end":
                                             return t.stop()
                                       }
                                    }), t)
                                 })));
                                 return function (e) {
                                    return t.apply(this, arguments)
                                 }
                              }()));
                           case 1:
                           case "end":
                              return t.stop()
                        }
                     }), t)
                  })))()
               },
               resetForm: function () {
                  this.product = {
                     id: null,
                     title: null,
                     shortDescription: null,
                     price: null,
                     sku: null,
                     media: [],
                     featuredMedia: null,
                     highlights: [{
                        content: null
                     }]
                  }, this.images = [], this.$refs.observer.reset(), console.log("Form Reseted")
               }
            }
         },
         ur = cr,
         lr = (n("2840"), Object(L["a"])(ur, or, ir, !1, null, null, null)),
         dr = lr.exports,
         pr = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("validation-observer", {
               ref: "observer"
            }, [n("b-form", {
               staticClass: "ui-profile-services__edit",
               on: {
                  submit: function (t) {
                     return t.preventDefault(), e.submitForm(t)
                  }
               }
            }, [n("div", {
               staticClass: "ui-profile-services__edit-form-grid--full"
            }, [n("BaseInput", {
               attrs: {
                  label: "Name",
                  type: "text",
                  placeholder: "Service Name",
                  value: e.service.title
               },
               on: {
                  input: function (t) {
                     return e.service.title = t
                  }
               }
            })], 1), n("div", {
               staticClass: "ui-profile-services__edit-form-grid"
            }, [n("BaseInputCurrency", {
               attrs: {
                  label: e.priceLabel,
                  type: "number",
                  placeholder: e.priceLabel,
                  value: e.service.price,
                  currency: ""
               },
               on: {
                  input: function (t) {
                     return e.service.price = t
                  }
               }
            }, [n("b-form-checkbox", {
               staticClass: "service-price-checkbox",
               model: {
                  value: e.service.fixedPrice,
                  callback: function (t) {
                     e.$set(e.service, "fixedPrice", t)
                  },
                  expression: "service.fixedPrice"
               }
            }, [e._v(" Fixed Price ")])], 1), n("BaseInput", {
               attrs: {
                  label: "SKU",
                  type: "text",
                  placeholder: "Stock-keeping unit ",
                  value: e.service.sku,
                  "no-validate": ""
               },
               on: {
                  input: function (t) {
                     return e.service.sku = t
                  }
               }
            })], 1), n("div", {
               staticClass: "ui-profile-services__edit-form-grid--full"
            }, [n("div", {
               staticClass: "upload-img"
            }, [n("label", {
               staticClass: "ui-label mb-2"
            }, [e._v("Add Images:")]), n("draggable", {
               key: e.images.length,
               staticClass: "upload-img__wr",
               attrs: {
                  list: e.images
               },
               on: {
                  change: e.onImageListUpdate,
                  start: function (t) {
                     e.drag = !0
                  },
                  end: function (t) {
                     e.drag = !1
                  }
               }
            }, [e._l(e.images, (function (t, r) {
               return n("div", {
                  key: t.id,
                  staticClass: "upload-img__box"
               }, [t.loading ? n("div", {
                  staticClass: "upload-img__img-loading"
               }, [n("b-skeleton", {
                  staticClass: "upload-img__img-skeleton"
               }), n("b-progress", {
                  staticClass: "upload-img__img-progress",
                  attrs: {
                     "show-progress": "",
                     animated: "",
                     max: "100"
                  }
               }, [n("b-progress-bar", {
                  staticClass: "upload-img__img-progress-bar",
                  attrs: {
                     value: t.progress
                  }
               }, [n("span", [n("strong", [e._v(" " + e._s(t.progress) + "% ")])])])], 1)], 1) : n("div", {
                  staticClass: "upload-img__img",
                  style: {
                     "background-image": "url(" + t.file.url + ")"
                  }
               }, [n("button", {
                  staticClass: "ui-btn ui-btn__rounded gallery-btn-delete",
                  on: {
                     click: function (t) {
                        return t.preventDefault(), e.removeImage(r)
                     }
                  }
               }, [n("span", {
                  staticClass: "icon-remove"
               })]), n("edit-caption", {
                  ref: "caption-button-" + r,
                  refInFor: !0,
                  attrs: {
                     id: t.id,
                     caption: t.caption,
                     altText: t.altText
                  },
                  on: {
                     click: function (t) {
                        return e.captionClicked(r)
                     },
                     save: function (n) {
                        return e.onCaptionSave(n, r, t)
                     }
                  }
               })], 1)])
            })), n("div", {
               staticClass: "upload-img__input"
            }, [n("file-upload", {
               ref: "upload",
               staticClass: "upload-img__new d-flex flex-column justify-content-center align-items-center",
               attrs: {
                  for: "img-upload",
                  extensions: e.uploadParams.extensions,
                  accept: e.uploadParams.accept,
                  multiple: e.uploadParams.multiple,
                  directory: e.uploadParams.directory,
                  thread: e.uploadParams.thread,
                  drop: e.uploadParams.drop,
                  "drop-directory": e.uploadParams.dropDirectory,
                  "add-index": e.uploadParams.addIndex
               },
               on: {
                  "input-file": e.inputFile,
                  "input-filter": e.inputFilter
               }
            }, [n("img", {
               attrs: {
                  src: e.ic_cloud_upload,
                  alt: ""
               }
            }), n("div", {
               staticClass: "mt-2"
            }, [n("span", {
               staticClass: "upload-img__new--text"
            }, [e._v(" Drag & Drop Image ")])])])], 1)], 2)], 1)]), n("label", {
               staticClass: "ui-label ui-input-default__label features-label"
            }, [e._v("Features ")]), n("div", {
               staticClass: "ui-profile-products__edit-form-grid--full mt-1 mb-3"
            }, e._l(e.service.highlights, (function (t, r) {
               return n("div", {
                  key: "service-feature-" + r,
                  staticClass: "feature-container"
               }, [n("BaseInput", {
                  attrs: {
                     id: e.service.id ? "service-" + e.service.id + "-feature-" + r : "service-feature-" + r,
                     type: "text",
                     placeholder: "Add Features here ",
                     value: t.content,
                     "no-validate": ""
                  },
                  on: {
                     input: function (e) {
                        return t.content = e
                     }
                  }
               }), n("img", {
                  staticClass: "feature-delete",
                  attrs: {
                     src: e.icDelete
                  },
                  on: {
                     click: function (t) {
                        return t.preventDefault(), e.removeFeature(r)
                     }
                  }
               })], 1)
            })), 0), n("button", {
               staticClass: "ui-btn ui-btn__transparent ui-btn__transparent--edit btn__add-more",
               on: {
                  click: function (t) {
                     return t.preventDefault(), e.addFeature(t)
                  }
               }
            }, [n("img", {
               attrs: {
                  src: e.icAdd
               }
            }), e._v("Add More ")]), n("div", {
               staticClass: "ui-profile-services__edit-description"
            }, [n("BaseTextArea", {
               attrs: {
                  label: "Summary",
                  placeholder: "Enter something...",
                  rows: "3",
                  maxrows: "6",
                  value: e.service.shortDescription
               },
               on: {
                  input: function (t) {
                     return e.service.shortDescription = t
                  }
               }
            })], 1), n("div", {
               staticClass: "ui-profile-services__edit-description"
            }, [n("BaseTextArea", {
               attrs: {
                  label: "Description",
                  placeholder: "Enter something...",
                  rows: "6",
                  maxrows: "6",
                  value: e.service.description,
                  "no-validate": ""
               },
               on: {
                  input: function (t) {
                     return e.service.description = t
                  }
               }
            })], 1)])], 1)
         },
         fr = [],
         mr = {
            components: {
               EditCaption: Yn,
               BaseInput: Z["a"],
               BaseTextArea: xe["a"],
               ValidationObserver: ne["a"],
               FileUpload: se.a,
               draggable: Pt.a,
               BaseInputCurrency: ar["a"]
            },
            props: ["icAdd", "icClose", "icEdit", "icDelete", "icBack", "selectedService", "mode"],
            data: function () {
               return {
                  ic_cloud_upload: $n.a,
                  service: {
                     id: null,
                     title: null,
                     image: null,
                     shortDescription: null,
                     description: null,
                     price: null,
                     fixedPrice: !1,
                     sku: null,
                     media: [],
                     featuredMedia: null,
                     highlights: [{
                        content: null
                     }]
                  },
                  images: [],
                  uploadParams: {
                     extensions: "gif,jpg,jpeg,png,webp",
                     accept: "image/png,image/gif,image/jpeg,image/webp",
                     minSize: 1024,
                     size: 10485760,
                     multiple: !0,
                     directory: !1,
                     drop: !0,
                     dropDirectory: !0,
                     createDirectory: !1,
                     addIndex: !1,
                     thread: 3
                  }
               }
            },
            created: function () {
               var e = this;
               if (console.log("mode = ", this.mode), "edit" === this.mode) {
                  var t = this.selectedService,
                     n = t.id,
                     r = t.title,
                     s = t.shortDescription,
                     o = t.description,
                     i = t.media,
                     a = t.featuredMedia,
                     c = t.highlights,
                     u = t.price,
                     l = t.fixedPrice,
                     d = t.sku;
                  i.forEach((function (t) {
                     e.images.push({
                        id: t.file.id,
                        file: {
                           url: t.file.url
                        },
                        order: t.order,
                        caption: t.caption,
                        altText: t.altText,
                        loading: !1
                     })
                  })), this.service = {
                     id: n,
                     title: r,
                     shortDescription: s,
                     description: o,
                     media: i || [],
                     featuredMedia: a,
                     highlights: c || [{
                        content: null
                     }],
                     price: u,
                     fixedPrice: l,
                     sku: d
                  }, this.mode = "edit"
               }
            },
            computed: {
               priceLabel: function () {
                  var e = this.service.fixedPrice ? "Price" : "Starting Price";
                  return e
               }
            },
            methods: {
               inputFile: function (e, t) {
                  var n = this;
                  return Object(R["a"])(regeneratorRuntime.mark((function r() {
                     var s, o, i, a, c;
                     return regeneratorRuntime.wrap((function (r) {
                        while (1) switch (r.prev = r.next) {
                           case 0:
                              if (!e || t) {
                                 r.next = 13;
                                 break
                              }
                              return s = n.service.media.length + 1, o = n.images.push({
                                 file: null,
                                 order: s,
                                 loading: !0,
                                 caption: null,
                                 altText: null,
                                 progress: 0
                              }), i = 500, a = setInterval((function () {
                                 n.images[o - 1].progress < 90 ? n.images[o - 1].progress += 10 : n.images[o - 1].progress < 99 && (n.images[o - 1].progress += 3, i = 1e3)
                              }), i), n.service.media.push({
                                 file: null,
                                 order: s,
                                 altText: e.file.name
                              }), r.next = 8, n.$store.dispatch("profile/uploadImage", {
                                 newFile: e
                              });
                           case 8:
                              c = r.sent, n.service.media[o - 1].file = c, n.images[o - 1].file = e, n.images[o - 1].loading = !1, setTimeout((function () {
                                 n.images[o - 1].loading = !1, clearInterval(a)
                              }), 1e3);
                           case 13:
                           case "end":
                              return r.stop()
                        }
                     }), r)
                  })))()
               },
               inputFilter: function (e, t, n) {
                  var r = this;
                  if (e && !t) {
                     if (/(\/|^)(Thumbs\.db|desktop\.ini|\..+)$/.test(e.name)) return n();
                     if (/\.(php5?|html?|jsx?)$/i.test(e.name)) return n();
                     if (e && "" === e.error && e.file && (!t || e.file !== t.file)) {
                        e.blob = "";
                        var s = window.URL || window.webkitURL;
                        s && (e.blob = s.createObjectURL(e.file)), e.url = "", e.blob && "image/" === e.type.substr(0, 6) && (e.url = e.blob, console.log(e.url))
                     }
                     if (e && "" === e.error && "image/" === e.type.substr(0, 6) && e.blob && (!t || e.blob !== t.blob)) {
                        e.error = "image parsing";
                        var o = new Image;
                        o.onload = function () {
                           r.$refs.upload.update(e, {
                              error: "",
                              height: o.height,
                              width: o.width
                           })
                        }, o.οnerrοr = function () {
                           r.$refs.upload.update(e, {
                              error: "parsing image size"
                           })
                        }, o.src = e.blob
                     }
                  }
               },
               addFeature: function () {
                  this.service.highlights.push({
                     content: null
                  })
               },
               removeFeature: function (e) {
                  0 === e ? this.service.highlights[e].content = null : this.service.highlights.splice(e, 1)
               },
               removeImage: function (e) {
                  this.images.splice(e, 1), this.service.media.splice(e, 1), console.log(e), 0 === e && (this.service.featuredMedia = this.service.media[0])
               },
               onImageListUpdate: function (e) {
                  console.log(e), e.moved && this.mediaMover(e.moved)
               },
               mediaMover: function (e) {
                  var t = e.newIndex,
                     n = e.oldIndex,
                     r = e.element;
                  console.log(r), this.service.media.splice(t, 0, this.service.media.splice(n, 1)[0])
               },
               sorter: function (e) {
                  this.service.media.sort((function (t, n) {
                     return t.order <= e.order ? (console.log("A Moved"), -1) : n.order <= e.order ? (console.log("B Moved"), 1) : (console.log("Nothing"), 0)
                  }))
               },
               captionClicked: function (e) {
                  for (var t = 0; t < this.images.length; t++) t !== e && this.$refs["caption-button-".concat(t)][0].closeCaptionBox()
               },
               onCaptionSave: function (e, t, n) {
                  var r = e.caption,
                     s = e.altText;
                  n.caption = r, this.service.media[t].caption = r, s && (n.altText = s, this.service.media[t].altText = s)
               },
               submitForm: function () {
                  var e = this;
                  return Object(R["a"])(regeneratorRuntime.mark((function t() {
                     return regeneratorRuntime.wrap((function (t) {
                        while (1) switch (t.prev = t.next) {
                           case 0:
                              return t.abrupt("return", e.$refs.observer.validate().then(function () {
                                 var t = Object(R["a"])(regeneratorRuntime.mark((function t(n) {
                                    return regeneratorRuntime.wrap((function (t) {
                                       while (1) switch (t.prev = t.next) {
                                          case 0:
                                             if (n) {
                                                t.next = 2;
                                                break
                                             }
                                             return t.abrupt("return", !1);
                                          case 2:
                                             if ("edit" !== e.mode) {
                                                t.next = 8;
                                                break
                                             }
                                             return e.service.featuredMedia = e.service.media[0], t.next = 6, e.$store.dispatch("profile/editService", e.service);
                                          case 6:
                                             t.next = 11;
                                             break;
                                          case 8:
                                             return e.service.featuredMedia = e.service.media[0], t.next = 11, e.$store.dispatch("profile/createService", e.service);
                                          case 11:
                                             return e.resetForm(), t.abrupt("return", !0);
                                          case 13:
                                          case "end":
                                             return t.stop()
                                       }
                                    }), t)
                                 })));
                                 return function (e) {
                                    return t.apply(this, arguments)
                                 }
                              }()));
                           case 1:
                           case "end":
                              return t.stop()
                        }
                     }), t)
                  })))()
               },
               resetForm: function () {
                  this.service = {
                     id: null,
                     title: null,
                     image: null,
                     shortDescription: null,
                     description: null,
                     price: null,
                     sku: null,
                     media: [],
                     featuredMedia: null,
                     highlights: [{
                        content: null
                     }]
                  }, this.$refs.observer.reset()
               }
            }
         },
         gr = mr,
         hr = (n("ee54"), Object(L["a"])(gr, pr, fr, !1, null, null, null)),
         vr = hr.exports,
         br = n("4bcc"),
         wr = n.n(br),
         kr = n("2f62"),
         _r = {
            name: "AddNewTabModal",
            emits: ["tabAdded"],
            components: {
               AddNewTabItem: Xt,
               BaseModal: Q["default"],
               EditAboutMode: At,
               EditExperienceMode: On,
               EditEducationMode: Nn,
               EditProjectsMode: Zn,
               EditGalleryMode: sr,
               EditProductMode: dr,
               EditServiceMode: vr
            },
            data: function () {
               return {
                  show: !1,
                  selectedTab: null,
                  mode: "list",
                  loader: !1,
                  icons: {
                     icMore: wr.a,
                     icClose: close,
                     icEdit: bt.a,
                     icDelete: Fn.a,
                     icAdd: ee.a,
                     icBack: kt.a
                  }
               }
            },
            computed: Object(s["a"])(Object(s["a"])({}, Object(kr["b"])("profile", {
               abouts: "getProfileAbouts",
               works: "getProfileWorks",
               educations: "getProfileEducations",
               projects: "getProfileProjects",
               products: "getProfileProducts",
               services: "getProfileServices",
               galleries: "getProfileGalleries",
               fetched: "getProfileFetched"
            })), {}, {
               emptyTabsCount: function () {
                  var e = [this.abouts, this.works, this.educations, this.projects, this.products, this.services, this.galleries],
                     t = e.filter((function (e) {
                        return 0 === e.length
                     }));
                  return console.log("🚀 ~ file: AddNewTabModal.vue ~ line 339 ~ emptyTabsCount ~ filteredList.length", t.length), t.length
               },
               checkAllTabsAdded: function () {
                  return 0 === this.emptyTabsCount
               },
               mapTabsToString: function () {
                  var e = {
                     abouts: this.abouts,
                     works: this.works,
                     educations: this.educations,
                     projects: this.projects,
                     products: this.products,
                     services: this.services,
                     galleries: this.galleries,
                     certifications: this.certifications
                  };
                  return [e, e.keys()]
               },
               modalTitle: function () {
                  if (this.selectedTab && "add" === this.mode) {
                     if ("about" === this.selectedTab) return "Add General About";
                     var e = this.capitalize(this.selectedTab);
                     return "Add ".concat(e)
                  }
                  return "Add New Tab"
               }
            }),
            methods: {
               toggleModal: function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                  this.show = e
               },
               goBack: function () {
                  this.selectedTab = null, this.mode = "list"
               },
               checkIfTabPresent: function (e) {
                  return 0 !== e.length
               },
               closeModal: function (e) {
                  this.toggleModal(!1), e()
               },
               onSelect: function (e) {
                  this.selectedTab = e, this.mode = "add", console.log("🚀 ~ file: AddNewTabModal.vue ~ line 158 ~ onSelect ~ this.selectedTab", this.selectedTab)
               },
               capitalize: function (e) {
                  return "string" !== typeof e ? "" : e.charAt(0).toUpperCase() + e.slice(1)
               },
               onNext: function () {
                  this.mode = "add", this.$refs["add-new-tab-modal"].$children[0].$refs.body.scrollTo({
                     top: 0,
                     behavior: "smooth"
                  })
               },
               submitForm: function (e) {
                  var t = this;
                  return Object(R["a"])(regeneratorRuntime.mark((function n() {
                     var r, s;
                     return regeneratorRuntime.wrap((function (n) {
                        while (1) switch (n.prev = n.next) {
                           case 0:
                              return t.loader = !0, n.prev = 1, r = "".concat(t.selectedTab, "Form"), n.next = 5, t.$refs[r].submitForm();
                           case 5:
                              s = n.sent, s && (t.mode = "list", t.$emit("tabAdded", t.selectedTab), t.selectedTab = null, e()), n.next = 12;
                              break;
                           case 9:
                              n.prev = 9, n.t0 = n["catch"](1), console.log(n.t0.message);
                           case 12:
                              return n.prev = 12, t.loader = !1, n.finish(12);
                           case 15:
                           case "end":
                              return n.stop()
                        }
                     }), n, null, [
                        [1, 9, 12, 15]
                     ])
                  })))()
               }
            }
         },
         Cr = _r,
         yr = (n("7db8"), Object(L["a"])(Cr, Wt, Vt, !1, null, "f4c17320", null)),
         xr = yr.exports,
         Pr = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("div", {
               staticClass: "profile-activity-wrapper"
            }, [n("h4", {
               staticClass: "title"
            }, [e._v(e._s(e.title) + "'s Activity ")]), n("div", {
               staticClass: "filter-container"
            }, e._l(Object.keys(e.activitiyTypes), (function (t) {
               return n("button", {
                  key: t,
                  staticClass: "filter-btn",
                  class: e.selected === e.activitiyTypes[t] ? "filter-btn-selected" : "",
                  on: {
                     click: function (n) {
                        return e.onSelect(e.activitiyTypes[t])
                     }
                  }
               }, [e._v(" " + e._s(t) + " ")])
            })), 0), n("div", {
               staticClass: "activity-container"
            }, [n("div", [e._l(e.activities, (function (e) {
               return n("div", {
                  key: e.activity.id
               }, [n("feed-item", {
                  attrs: {
                     "network-feed": !1,
                     post: e
                  }
               })], 1)
            })), n("infinite-loading", {
               attrs: {
                  identifier: e.infiniteId
               },
               on: {
                  infinite: e.infiniteHandler
               },
               scopedSlots: e._u([{
                  key: "spinner",
                  fn: function () {
                     return e._l(10, (function (e) {
                        return n("div", {
                           key: e
                        }, [n("feed-item-skeleton")], 1)
                     }))
                  },
                  proxy: !0
               }])
            }, [n("div", {
               attrs: {
                  slot: "no-results"
               },
               slot: "no-results"
            }), n("div", {
               attrs: {
                  slot: "no-more"
               },
               slot: "no-more"
            })])], 2)])])
         },
         Ir = [],
         jr = n("e166"),
         Mr = n.n(jr),
         Rr = n("7db5"),
         Or = n("3f90"),
         Ar = function () {
            return n.e("chunk-0c268cd6").then(n.bind(null, "14c0"))
         },
         Sr = function () {
            return Promise.all([n.e("chunk-a9464d02"), n.e("chunk-090d2b2e"), n.e("chunk-68d2811e"), n.e("chunk-19beea7d"), n.e("chunk-8335e1f2")]).then(n.bind(null, "a508"))
         },
         Tr = {
            name: "ProfileActivity",
            components: {
               InfiniteLoading: Mr.a,
               FeedItemSkeleton: Ar,
               FeedItem: Sr
            },
            props: {
               profileId: {
                  type: String,
                  required: !0
               },
               title: {
                  type: String,
                  required: !0
               }
            },
            data: function () {
               return {
                  selected: "",
                  activitiyTypes: {
                     All: "",
                     Posts: "publish",
                     Comments: "comment",
                     Reactions: "reaction",
                     Shares: "share"
                  },
                  lastActivityDate: "",
                  infiniteId: 1
               }
            },
            mounted: function () {
               this.$store.commit("feeds/setActiveFeed", "user")
            },
            computed: {
               activities: function () {
                  var e = this.$store.getters["feeds/getFeedsPosts"];
                  return e
               }
            },
            methods: {
               onSelect: function (e) {
                  this.selected = e, this.$store.commit("feeds/resetUserPosts"), this.lastActivityDate = "", this.infiniteId += 1
               },
               infiniteHandler: function (e) {
                  var t = this;
                  return Object(R["a"])(regeneratorRuntime.mark((function n() {
                     var r, s;
                     return regeneratorRuntime.wrap((function (n) {
                        while (1) switch (n.prev = n.next) {
                           case 0:
                              return r = {
                                 params: {
                                    limit: 50,
                                    postDate: t.lastActivityDate,
                                    activityType: t.selected
                                 }
                              }, n.next = 3, Rr["a"].get("/activities/profile/".concat(t.profileId), r);
                           case 3:
                              s = n.sent, s.data.length ? (t.lastActivityDate = s.data[s.data.length - 1].publishedAt, t.$store.commit("feeds/setUserPosts", {
                                 posts: Object(Or["c"])(s.data)
                              }), e.loaded()) : e.complete();
                           case 5:
                           case "end":
                              return n.stop()
                        }
                     }), n)
                  })))()
               }
            }
         },
         Fr = Tr,
         Lr = (n("d572"), Object(L["a"])(Fr, Pr, Ir, !1, null, "2b609d7e", null)),
         $r = Lr.exports,
         Br = {
            name: "ProfilePersonal",
            props: ["username"],
            data: function () {
               return {
                  score: 0,
                  deactivated: !1,
                  targetUser: null
               }
            },
            components: {
               ProfileActivity: $r,
               ProfileHeader: Fe,
               AboutOverview: Ne,
               RecentPostsOverview: Xe,
               ProfileCloseCircles: dt,
               ProfileCountsMeta: pt["a"],
               AboutTab: Dt,
               ProfileReviews: Gt,
               AddNewTabModal: xr,
               NotFound: E
            },
            mounted: function () {
               var e = this;
               return Object(R["a"])(regeneratorRuntime.mark((function t() {
                  var n, r, s, o;
                  return regeneratorRuntime.wrap((function (t) {
                     while (1) switch (t.prev = t.next) {
                        case 0:
                           if (n = e.$store.getters["user/getProfileHandle"], e.username !== n && (e.$store.commit("feeds/resetUserPosts"), e.$store.commit("feeds/resetFeedPage", "userPage")), e.isProfileOwner) {
                              t.next = 12;
                              break
                           }
                           return t.next = 5, e.$store.dispatch("user/fetchProfile", e.username);
                        case 5:
                           r = t.sent, s = e.$store.getters["user/getProfile"], e.score = s.points, e.targetUser = r, 400 === r.status && (e.deactivated = !0), t.next = 14;
                           break;
                        case 12:
                           o = e.$store.getters["profile/getProfile"], e.score = o.points;
                        case 14:
                           if (e.fetched) {
                              t.next = 17;
                              break
                           }
                           return t.next = 17, e.$store.dispatch("profile/fetchProfile");
                        case 17:
                        case "end":
                           return t.stop()
                     }
                  }), t)
               })))()
            },
            watch: {
               username: function () {
                  var e = Object(R["a"])(regeneratorRuntime.mark((function e() {
                     return regeneratorRuntime.wrap((function (e) {
                        while (1) switch (e.prev = e.next) {
                           case 0:
                              if (this.isProfileOwner) {
                                 e.next = 3;
                                 break
                              }
                              return e.next = 3, this.$store.dispatch("user/fetchProfile", this.username);
                           case 3:
                              this.$store.commit("feeds/resetUserPosts");
                           case 4:
                           case "end":
                              return e.stop()
                        }
                     }), e, this)
                  })));

                  function t() {
                     return e.apply(this, arguments)
                  }
                  return t
               }()
            },
            destroyed: function () {
               this.$store.commit("user/resetProfile")
            },
            computed: {
               title: function () {
                  return this.isProfileOwner ? this.$store.getters["profile/getProfileTitle"] : this.$store.getters["user/getProfileTitle"]
               },
               profileId: function () {
                  return this.isProfileOwner ? this.$store.getters["profile/getProfileId"] : this.$store.getters["user/getProfileId"]
               },
               abouts: function () {
                  return this.isProfileOwner ? this.$store.getters["profile/getProfileAbouts"] : this.$store.getters["user/getProfileAbouts"]
               },
               works: function () {
                  return this.isProfileOwner ? this.$store.getters["profile/getProfileWorks"] : this.$store.getters["user/getProfileWorks"]
               },
               educations: function () {
                  return this.isProfileOwner ? this.$store.getters["profile/getProfileEducations"] : this.$store.getters["user/getProfileEducations"]
               },
               projects: function () {
                  return this.isProfileOwner ? this.$store.getters["profile/getProfileProjects"] : this.$store.getters["user/getProfileProjects"]
               },
               products: function () {
                  return this.isProfileOwner ? this.$store.getters["profile/getProfileProducts"] : this.$store.getters["user/getProfileProducts"]
               },
               services: function () {
                  return this.isProfileOwner ? this.$store.getters["profile/getProfileServices"] : this.$store.getters["user/getProfileServices"]
               },
               galleries: function () {
                  return this.isProfileOwner ? this.$store.getters["profile/getProfileGalleries"] : this.$store.getters["user/getProfileGalleries"]
               },
               fetched: function () {
                  return this.isProfileOwner ? this.$store.getters["profile/getProfileFetched"] : this.$store.getters["user/getProfileFetched"]
               },
               isProfileOwner: function () {
                  return !this.username || this.username === this.$store.getters["profile/getProfile"].handle
               },
               tabsCount: function () {
                  var e = [this.abouts, this.works, this.educations, this.projects, this.products, this.services, this.galleries],
                     t = e.filter((function (e) {
                        return e.length > 0
                     }));
                  return t.length
               },
               emptyTabsCount: function () {
                  var e = [this.abouts, this.works, this.educations, this.projects, this.products, this.services, this.galleries],
                     t = e.filter((function (e) {
                        return 0 === e.length
                     }));
                  return console.log("🚀 ~ file: AddNewTabModal.vue ~ line 339 ~ emptyTabsCount ~ filteredList.length", t.length), t.length
               },
               checkAllTabsAdded: function () {
                  return 0 === this.emptyTabsCount
               }
            },
            methods: {
               checkIfTabPresent: function (e) {
                  return this.fetched ? 0 !== e.length : "loading"
               },
               onTabAdded: function (e) {
                  var t = "".concat(e, "Tab");
                  console.log(t), this.$refs[t].activate()
               },
               showAddNewTabModal: function () {
                  var e = this;
                  this.isProfileOwner && (this.$refs["add-new-tab-modal"].toggleModal(!0), this.$nextTick((function () {
                     e.$bvModal.show("add-new-tab-modal")
                  })))
               }
            }
         },
         Ur = Br,
         Dr = (n("8e47"), Object(L["a"])(Ur, q, z, !1, null, "39b2a32a", null)),
         Nr = Dr.exports,
         Er = n("58ca"),
         qr = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("div", {
               staticClass: "ui-flex ui-flex-col ui-messaging-mobile"
            }, [n("div", {
               staticClass: "ui-messaging-mobile__nav"
            }, [n("div", {
               staticClass: "messaging-title-header"
            }, [n("h2", {
               staticClass: "messaging-title-header__text"
            }, [e._v("Messaging")]), n("base-icon-button", {
               staticClass: "messaging-title-header__button--more ui-hide-mobile",
               attrs: {
                  icon: "icon-ic-more"
               }
            })], 1)]), n("MessagingHistory", {
               attrs: {
                  isMain: ""
               }
            }), n("MobileChatWindow"), n("MobileChatSettings")], 1)
         },
         zr = [],
         Hr = n("8594"),
         Gr = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return e.mainConversation._id ? n("base-modal", {
               staticClass: "mobile-chat-window",
               attrs: {
                  id: "viewChat",
                  mount: !!e.mainConversation._id,
                  "hide-footer": "",
                  scrollable: "",
                  "modal-dialog-class": "mobile-chat-modal",
                  "modal-content-class": "mobile-chat-modal-content",
                  "modal-body-class": "mobile-chat-modal-body",
                  "modal-header-class": "mobile-chat-modal-header",
                  "no-close-on-backdrop": ""
               },
               scopedSlots: e._u([{
                  key: "header",
                  fn: function () {
                     return [e.mainConversation._id ? n("div", {
                        staticClass: "messaging-title-header"
                     }, [n("base-icon-button", {
                        staticClass: "messaging-title-header__button",
                        attrs: {
                           icon: "icon-ic-arrow-back"
                        },
                        on: {
                           iconClicked: e.close
                        }
                     }), "personal" === e.mainConversation.type ? n("h2", {
                        staticClass: "messaging-title-header__text"
                     }, [e._v(e._s(e.mainConversation.user.title))]) : e._e(), "network" === e.mainConversation.type ? n("h2", {
                        staticClass: "messaging-title-header__text"
                     }, [e._v(e._s(e.mainConversation.network.name))]) : e._e()], 1) : e._e()]
                  },
                  proxy: !0
               }, {
                  key: "body",
                  fn: function () {
                     return [n("div", {
                        staticClass: "messaging-content"
                     }, [n("div", {
                        staticClass: "messaging-content__body"
                     }, [e.mainConversation._id ? n("ChatContent", {
                        key: e.mainConversation._id,
                        staticClass: "messaging-content__messages",
                        attrs: {
                           isMain: "",
                           setParentMessage: e.setParentMessage,
                           conversation: e.mainConversation
                        }
                     }) : e._e(), n("div", {
                        staticClass: "messaging-content__new"
                     }, [e.mainConversation._id ? n("ChatNew", {
                        attrs: {
                           parentMessage: e.parentMessage,
                           conversation: e.mainConversation,
                           clearParentMessage: e.clearParentMessage
                        }
                     }) : e._e()], 1)], 1)])]
                  },
                  proxy: !0
               }], null, !1, 3314834356)
            }) : e._e()
         },
         Wr = [],
         Vr = n("f593"),
         Yr = n("73a1"),
         Jr = {
            name: "MobileChatWindow",
            components: {
               ChatNew: Yr["a"],
               ChatContent: Vr["a"],
               BaseIconButton: te["default"],
               BaseModal: Q["default"]
            },
            data: function () {
               return {
                  show: !0,
                  parentMessage: null
               }
            },
            computed: {
               mainConversation: function () {
                  return this.$store.getters["chat/getMainConversation"]
               }
            },
            methods: {
               close: function () {
                  var e = this;
                  return Object(R["a"])(regeneratorRuntime.mark((function t() {
                     return regeneratorRuntime.wrap((function (t) {
                        while (1) switch (t.prev = t.next) {
                           case 0:
                              return t.next = 2, e.$store.dispatch("chat/resetMainConversation");
                           case 2:
                              e.$router.push("/m-messaging"), e.$bvModal.hide("viewMobileChat");
                           case 4:
                           case "end":
                              return t.stop()
                        }
                     }), t)
                  })))()
               },
               setParentMessage: function (e) {
                  this.parentMessage = e
               },
               clearParentMessage: function () {
                  this.parentMessage = null
               }
            }
         },
         Kr = Jr,
         Qr = (n("475a"), Object(L["a"])(Kr, Gr, Wr, !1, null, null, null)),
         Zr = Qr.exports,
         Xr = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return e.show ? n("base-modal", {
               staticClass: "mobile-chat-window",
               attrs: {
                  id: "viewChatSettings",
                  mount: e.show,
                  "hide-footer": "",
                  scrollable: "",
                  "modal-dialog-class": "mobile-chat-modal",
                  "modal-content-class": "mobile-chat-modal-content",
                  "modal-body-class": "mobile-chat-modal-body",
                  "modal-header-class": "mobile-chat-modal-header",
                  "no-close-on-backdrop": ""
               },
               scopedSlots: e._u([{
                  key: "header",
                  fn: function () {
                     return [n("div", {
                        staticClass: "messaging-title-header"
                     }, [n("base-icon-button", {
                        staticClass: "messaging-title-header__button",
                        attrs: {
                           icon: "icon-ic-arrow-back"
                        }
                     }), n("h2", {
                        staticClass: "messaging-title-header__text"
                     }, [e._v("More")])], 1)]
                  },
                  proxy: !0
               }, {
                  key: "body",
                  fn: function () {
                     return [n("div", {
                        staticClass: "mobile-chat-settings"
                     }, [n("div", {
                        staticClass: "mobile-chat-settings__user"
                     }, [n("div", {
                        staticClass: "mobile-chat-settings__user-img"
                     }, [n("img", {
                        staticClass: "user-image clickable",
                        attrs: {
                           src: "https://bizfluence-media.nyc3.cdn.digitaloceanspaces.com/22435ddca948a59ae353427251c6dac9.jpg"
                        }
                     })]), n("div", [n("div", {
                        staticClass: "mobile-chat-settings__user-title"
                     }, [n("p", {
                        staticClass: "user-name clickable"
                     }, [e._v(" Monica Wallace ")]), n("label", {
                        staticClass: "user-badge",
                        staticStyle: {
                           "background-color": "#0A1B57"
                        }
                     }, [e._v("Founder")])]), n("p", {
                        staticClass: "mobile-chat-settings__user-desc"
                     }, [e._v(" Founder of Tesla Industries ")])])]), n("ul", {
                        staticClass: "mobile-chat-settings__list"
                     }, [n("li", {
                        staticClass: "ui-btn__transparent"
                     }, [n("span", {
                        staticClass: "icon-block"
                     }), e._v(" View profile ")]), n("li", {
                        staticClass: "ui-btn__transparent"
                     }, [n("span", {
                        staticClass: "icon-ic-like"
                     }), e._v(" Mute chat ")]), n("li", {
                        staticClass: "ui-btn__transparent"
                     }, [n("span", {
                        staticClass: "icon-ic-like"
                     }), e._v(" Delete chat ")]), n("li", {
                        staticClass: "ui-btn__transparent"
                     }, [n("span", {
                        staticClass: "icon-ic-like"
                     }), e._v(" Block Person ")])])])]
                  },
                  proxy: !0
               }], null, !1, 1808018930)
            }) : e._e()
         },
         es = [],
         ts = {
            name: "MobileChatSettings",
            components: {
               BaseModal: Q["default"],
               BaseIconButton: te["default"]
            },
            data: function () {
               return {
                  show: !0
               }
            }
         },
         ns = ts,
         rs = (n("147f"), Object(L["a"])(ns, Xr, es, !1, null, "58c66e2e", null)),
         ss = rs.exports,
         os = {
            name: "MessagingMobile",
            components: {
               MobileChatSettings: ss,
               MobileChatWindow: Zr,
               BaseIconButton: te["default"],
               MessagingHistory: Hr["default"]
            }
         },
         is = os,
         as = (n("17c0"), Object(L["a"])(is, qr, zr, !1, null, "7b3b165a", null)),
         cs = as.exports,
         us = n("a9cc");
      ["push", "replace"].forEach((function (e) {
         var t = i["a"].prototype[e];
         i["a"].prototype[e] = function (e) {
            return t.call(this, e).catch((function (e) {
               e.name
            }))
         }
      })), o["default"].use(i["a"]), o["default"].use(Er["a"]);
      var ls = function () {
            return Promise.all([n.e("chunk-04ae94dc"), n.e("chunk-d44b047e")]).then(n.bind(null, "4787"))
         },
         ds = function () {
            return n.e("chunk-795a29b7").then(n.bind(null, "ad4d"))
         },
         ps = function () {
            return Promise.all([n.e("chunk-a9464d02"), n.e("chunk-090d2b2e"), n.e("chunk-68d2811e"), n.e("chunk-19beea7d"), n.e("chunk-4fdf88b5")]).then(n.bind(null, "b921"))
         },
         fs = function () {
            return Promise.all([n.e("chunk-5864a772"), n.e("chunk-114501fc")]).then(n.bind(null, "04f6"))
         },
         ms = function () {
            return n.e("chunk-65a4f00c").then(n.bind(null, "2678"))
         },
         gs = function () {
            return n.e("chunk-326eecf1").then(n.bind(null, "fda7"))
         },
         hs = function () {
            return Promise.all([n.e("chunk-a9464d02"), n.e("chunk-090d2b2e"), n.e("chunk-68d2811e"), n.e("chunk-19beea7d"), n.e("chunk-cefa0c9c")]).then(n.bind(null, "caeb"))
         },
         vs = function () {
            return Promise.all([n.e("chunk-04ae94dc"), n.e("chunk-5e2de323")]).then(n.bind(null, "5036"))
         },
         bs = function () {
            return Promise.all([n.e("chunk-04ae94dc"), n.e("chunk-6b3d82db")]).then(n.bind(null, "024a"))
         },
         ws = function () {
            return n.e("chunk-592057bb").then(n.bind(null, "26d3"))
         },
         ks = function () {
            return Promise.all([n.e("chunk-a9464d02"), n.e("chunk-090d2b2e"), n.e("chunk-19beea7d"), n.e("chunk-77687e4a")]).then(n.bind(null, "1f84"))
         },
         _s = function () {
            return n.e("chunk-1cc7ac9e").then(n.bind(null, "3530"))
         },
         Cs = function () {
            return Promise.all([n.e("chunk-68d2811e"), n.e("chunk-25536db6"), n.e("chunk-6620a91c"), n.e("chunk-6f69b07a")]).then(n.bind(null, "cd61"))
         },
         ys = function () {
            return Promise.all([n.e("chunk-25536db6"), n.e("chunk-2d217c19"), n.e("chunk-4c3acbd1")]).then(n.bind(null, "36b2"))
         },
         xs = new i["a"]({
            mode: "history",
            scrollBehavior: function (e, t, n) {
               return n ? new Promise((function (e) {
                  setTimeout((function () {
                     e(Object(s["a"])(Object(s["a"])({}, n), {}, {
                        behavior: "smooth"
                     }))
                  }), 500)
               })) : {
                  x: 0,
                  y: 0
               }
            },
            routes: [].concat(Object(r["a"])(_), [{
               path: "/profile-personal",
               name: "ProfilePersonal",
               component: Nr,
               meta: {
                  requiresAuth: !0,
                  minimumOnboardingLevel: 2
               }
            }, {
               path: "/profiles/:username",
               name: "ProfilePersonalWithUsername",
               component: Nr,
               props: !0,
               meta: {
                  requiresAuth: !1,
                  allowWithoutAuth: !0,
                  minimumOnboardingLevel: 0
               }
            }, {
               path: "/feed",
               name: "Feed",
               component: ls,
               meta: {
                  requiresAuth: !0,
                  minimumOnboardingLevel: 2
               }
            }, {
               path: "/hubs/discover",
               name: "Networks",
               component: ds,
               meta: {
                  requiresAuth: !0,
                  requiresOnboarding: !0
               }
            }, {
               path: "/hubs/discover/search",
               name: "Networks",
               component: ds,
               meta: {
                  requiresAuth: !0,
                  requiresOnboarding: !0
               }
            }, {
               path: "/hubs/discover?category=(//*)",
               name: "Networks",
               component: ds,
               meta: {
                  requiresAuth: !0,
                  requiresOnboarding: !0
               }
            }, {
               path: "/messaging",
               name: "Messaging",
               component: ms,
               meta: {
                  requiresAuth: !0,
                  requiresOnboarding: !0
               }
            }, {
               path: "/messaging/:conversationId",
               name: "Conversation",
               component: ms,
               meta: {
                  requiresAuth: !0,
                  requiresOnboarding: !0
               }
            }, {
               path: "/m-messaging",
               name: "MessagingMobile",
               component: cs,
               meta: {
                  requiresAuth: !0,
                  requiresOnboarding: !0
               }
            }, {
               path: "/m-messaging/:conversationId",
               name: "MobileConversation",
               component: cs,
               meta: {
                  requiresAuth: !0,
                  requiresOnboarding: !0
               }
            }, {
               path: "/user-not-found",
               name: "User Not Found",
               component: E,
               meta: {
                  requiresAuth: !1,
                  allowWithoutAuth: !0,
                  minimumOnboardingLevel: 0
               }
            }, {
               path: "/content-restricted",
               name: "Content Restricted",
               meta: {
                  allowWithoutAuth: !0,
                  minimumOnboardingLevel: 0
               }
            }, {
               path: "/post-not-found",
               name: "Post Not Found",
               meta: {
                  allowWithoutAuth: !0,
                  minimumOnboardingLevel: 0
               }
            }, {
               path: "/hubs/:communitySlug/:networkSlug",
               name: "Network",
               props: !0,
               component: ps,
               meta: {
                  requiresAuth: !0,
                  requiresOnboarding: !0
               }
            }, {
               path: "/hubs/:networkSlug",
               name: "Network",
               props: !0,
               component: ps,
               meta: {
                  requiresAuth: !1,
                  requiresOnboarding: !1,
                  allowWithoutAuth: !0
               }
            }, {
               path: "/network-hub",
               name: "NetworkHub",
               component: fs,
               meta: {
                  requiresAuth: !0,
                  requiresOnboarding: !0,
                  minimumOnboardingLevel: 2
               }
            }, {
               path: "/posts/:postSlug",
               name: "Post",
               props: !0,
               component: hs,
               meta: {
                  requiresAuth: !1,
                  allowWithoutAuth: !0,
                  minimumOnboardingLevel: 0
               }
            }, {
               path: "/:slug/posts",
               name: "UserPosts",
               props: !0,
               component: vs,
               meta: {
                  requiresAuth: !0,
                  minimumOnboardingLevel: 0,
                  requiresOnboarding: !0
               }
            }, {
               path: "/notifications",
               name: "Notifications",
               props: !0,
               component: gs,
               meta: {
                  requiresAuth: !0,
                  minimumOnboardingLevel: 2
               }
            }, {
               path: "/bookmarked",
               name: "BookmarkedPosts",
               component: bs,
               meta: {
                  requiresAuth: !0,
                  minimumOnboardingLevel: 2
               }
            }, {
               path: "/settings",
               name: "Settings",
               component: ws,
               meta: {
                  requiresAuth: !0,
                  minimumOnboardingLevel: 2
               }
            }, {
               path: "/schedule-posts",
               name: "SchedulePosts",
               component: ks,
               meta: {
                  requiresAuth: !0,
                  minimumOnboardingLevel: 2,
                  requiresOnboarding: !0
               }
            }, {
               path: "/draft-posts",
               name: "DraftPosts",
               component: ks,
               meta: {
                  requiresAuth: !0,
                  minimumOnboardingLevel: 2,
                  requiresOnboarding: !0
               }
            }, {
               path: "/invite-center",
               name: "InviteCenter",
               component: Cs,
               meta: {
                  requiresAuth: !0,
                  minimumOnboardingLevel: 2
               }
            }, {
               path: "/hub-invites/:initialIndex?",
               name: "InviteNetworkManager",
               props: function (e) {
                  var t = Number.parseInt(e.params.initialIndex);
                  return Number.isNaN(t) ? 0 : {
                     initialIndex: t
                  }
               },
               component: ys,
               meta: {
                  requiresAuth: !0,
                  minimumOnboardingLevel: 2
               }
            }, {
               path: "/admin",
               name: "Admin",
               component: _s,
               meta: {
                  requiresAuth: !0,
                  minimumOnboardingLevel: 2
               }
            }, {
               path: "/join/:type/:handle/:phone(\\+?\\d{7,})?",
               name: "Join",
               props: !0,
               redirect: function (e) {
                  var t = e.params,
                     n = t.type,
                     r = t.handle,
                     s = t.phone;
                  return {
                     path: "/invites",
                     query: {
                        ref: r,
                        refSource: n,
                        phone: s || null
                     }
                  }
               }
            }, {
               path: "/join/:type/:handle/:networkHandle",
               name: "Join",
               props: !0,
               redirect: function (e) {
                  var t = e.params,
                     n = e.query,
                     r = t.type,
                     s = t.handle,
                     o = t.networkHandle,
                     i = n.t,
                     a = C["a"].getters["auth/getAuthStatus"];
                  return a && o ? {
                     path: "/feed",
                     query: {
                        "join-network": o,
                        t: i
                     }
                  } : {
                     path: "/",
                     query: {
                        ref: s,
                        refSource: r,
                        network: o,
                        t: i
                     }
                  }
               }
            }, {
               path: "*",
               redirect: "/"
            }])
         });
      xs.beforeEach((function (e, t, n) {
         var r, s, i, a;
         a = o["default"].$cookies.isKey("authToken") ? o["default"].$cookies.get("authToken") : "", console.log("Auth load"), a && Object(us["d"])(a) && C["a"].dispatch("auth/logout");
         var c = C["a"].getters["auth/getAuthStatus"],
            u = C["a"].getters["profile/getProfileOnboarded"],
            l = null !== (r = C["a"].getters["profile/getOnboardingLevel"]) && void 0 !== r ? r : 0,
            d = e.meta.requiresAuth,
            p = e.meta.requiresOnboarding,
            f = null !== (s = e.meta.allowWithoutAuth) && void 0 !== s && s,
            m = null !== (i = e.meta.minimumOnboardingLevel) && void 0 !== i ? i : 1;
         if (console.log("Route: ".concat(e.name, ", isOnboarded: ").concat(u, ", Current Onboardlevel = ").concat(l, ", Minimum: ").concat(m, ", isAuth: ").concat(c, ", RequiresAuth: ").concat(d, ", AllowWithoutAuth: ").concat(f)), f)("/" === e.path || "/login" === e.path || "index2" === e.meta.type && !e.params.token) && c ? n("/feed") : n();
         else if (d && !c) {
            var g = e.path;
            n(g ? "/login?redirect=".concat(g) : "/login")
         } else !d && c ? n("/feed") : p && !u ? n({
            path: "/feed",
            query: {
               onboardModal: !0
            }
         }) : l >= m ? n() : n("/complete-profile")
      }));
      t["a"] = xs
   },
   a324: function (e, t, n) {},
   a49b: function (e, t, n) {},
   a4a6: function (e, t, n) {},
   a6d9: function (e, t, n) {},
   a78d: function (e, t, n) {},
   a9cc: function (e, t, n) {
      "use strict";
      (function (e) {
         n.d(t, "a", (function () {
            return o
         })), n.d(t, "c", (function () {
            return i
         })), n.d(t, "b", (function () {
            return a
         })), n.d(t, "d", (function () {
            return c
         }));
         var r = n("1da1"),
            s = (n("d3b7"), n("466d"), n("ac1f"), n("5319"), n("fb6a"), n("1276"), n("a15b"), n("d81d"), n("25f0"), n("96cf"), n("7db5")),
            o = function () {
               var e = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
                  var n, r, o;
                  return regeneratorRuntime.wrap((function (e) {
                     while (1) switch (e.prev = e.next) {
                        case 0:
                           return n = {
                              url: t
                           }, r = null, e.prev = 2, e.next = 5, s["a"].post("/link-preview?", n);
                        case 5:
                           return o = e.sent, r = o.data, r.display = !0, r.success = !0, e.abrupt("return", r);
                        case 12:
                           return e.prev = 12, e.t0 = e["catch"](2), r = {
                              success: !1
                           }, e.abrupt("return", r);
                        case 16:
                        case "end":
                           return e.stop()
                     }
                  }), e, null, [
                     [2, 12]
                  ])
               })));
               return function (t) {
                  return e.apply(this, arguments)
               }
            }(),
            i = function () {
               var e = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
                  return regeneratorRuntime.wrap((function (e) {
                     while (1) switch (e.prev = e.next) {
                        case 0:
                           return e.abrupt("return", new Promise((function (e) {
                              var n = document.createElement("video"),
                                 r = document.createElement("source");
                              r.src = t.blob, n.appendChild(r), n.onloadedmetadata = function (t) {
                                 e({
                                    width: t.target.videoWidth,
                                    height: t.target.videoHeight
                                 })
                              }
                           })));
                        case 1:
                        case "end":
                           return e.stop()
                     }
                  }), e)
               })));
               return function (t) {
                  return e.apply(this, arguments)
               }
            }(),
            a = function (e) {
               var t, n, r, s = e;
               s.match(/^rgb/) ? (s = s.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/), t = s[1], n = s[2], r = s[3]) : (s = +("0x" + s.slice(1).replace(s.length < 5 && /./g, "$&$&")), t = s >> 16, n = s >> 8 & 255, r = 255 & s);
               var o = Math.sqrt(t * t * .299 + n * n * .587 + r * r * .114);
               return o > 127.5 ? "#000000" : "#ffffff"
            },
            c = function (t) {
               var n = t.split(".")[1],
                  r = n.replace(/-/g, "+").replace(/_/g, "/"),
                  s = decodeURIComponent(e.from(r, "base64").toString("ascii").split("").map((function (e) {
                     return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
                  })).join(""));
               return s = JSON.parse(s), s.exp < Date.now() / 1e3
            }
      }).call(this, n("b639").Buffer)
   },
   acf2: function (e, t, n) {},
   b00d: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("base-modal", {
               ref: "schedule-modal",
               attrs: {
                  id: e.id,
                  shortHeight: "",
                  mount: !0,
                  modalContentClass: "schedule-post",
                  size: "md",
                  "no-close-on-backdrop": !1
               },
               on: {
                  onShow: e.getScheduleDate,
                  onHide: e.onHide,
                  ok: e.onConfirm
               },
               scopedSlots: e._u([{
                  key: "header",
                  fn: function () {
                     return [n("div", {
                        staticClass: "schedule-modal__header"
                     }, [e._v(e._s(e.modalData.titleText))]), n("button", {
                        staticClass: "ui-btn ui-btn__close",
                        on: {
                           click: function (t) {
                              return e.closeModal()
                           }
                        }
                     }, [n("span", {
                        staticClass: "icon-ic-modal-close"
                     })])]
                  },
                  proxy: !0
               }, {
                  key: "body",
                  fn: function () {
                     return [n("div", {
                        staticClass: "schedule-post__content"
                     }, [n("p", {
                        class: {
                           "p-subtitle": e.allowButton
                        }
                     }, [e._v(" " + e._s(e.modalData.subtitleText))]), e.showDate ? n("div", {
                        staticClass: "schedule-post__content--flex"
                     }, [n("base-input", {
                        staticClass: "date-input",
                        attrs: {
                           type: "date",
                           value: e._f("moment")(e.scheduleDate, "YYYY-MM-DD"),
                           min: e.minStartDate,
                           "no-validate": "",
                           id: "ui-date-input"
                        },
                        on: {
                           input: function (t) {
                              return e.scheduledPostDate = t
                           }
                        }
                     }), n("base-input", {
                        staticClass: "date-input",
                        attrs: {
                           type: "time",
                           locale: "en",
                           value: e._f("moment")(e.scheduleDate, "HH:mm"),
                           "no-validate": "",
                           id: "ui-time-input"
                        },
                        on: {
                           input: function (t) {
                              return e.scheduledPostTime = t
                           }
                        }
                     })], 1) : e._e(), n("p", {
                        class: {
                           "p-description": e.allowButton
                        }
                     }, [e._v(e._s(e.modalData.description))])])]
                  },
                  proxy: !0
               }, {
                  key: "footer",
                  fn: function () {
                     return [n("div", {
                        staticClass: "footer-wr"
                     }, [e.allowButton ? n("div", {
                        staticClass: "modal-footer__right"
                     }, [n("button", {
                        staticClass: "ui-btn ui-btn__outline",
                        on: {
                           click: function (t) {
                              return e.closeModal()
                           }
                        }
                     }, [e._v(" Don't Open ")]), n("button", {
                        staticClass: "ui-btn",
                        on: {
                           click: function (t) {
                              return t.preventDefault(), e.onConfirm()
                           }
                        }
                     }, [
                        [e._v(" Open ")]
                     ], 2)]) : n("div", {
                        staticClass: "modal-footer__right"
                     }, [n("button", {
                        staticClass: "ui-btn ui-btn__outline",
                        on: {
                           click: function (t) {
                              return e.closeModal()
                           }
                        }
                     }, [e._v(" " + e._s("enableNotification" == e.modalData.actionType ? "Not now" : "showNetworkError" == e.modalData.actionType ? "Okay" : "Cancel") + " ")]), "showNetworkError" != e.modalData.actionType ? n("button", {
                        staticClass: "ui-btn save",
                        on: {
                           click: function (t) {
                              return t.preventDefault(), e.onConfirm()
                           }
                        }
                     }, [
                        [e._v(" " + e._s("enableNotification" == e.modalData.actionType ? "Notify me" : "Save") + " ")]
                     ], 2) : e._e()])])]
                  },
                  proxy: !0
               }])
            })
         },
         s = [],
         o = (n("99af"), n("7299")),
         i = n("c627"),
         a = n.n(i),
         c = n("b8dc"),
         u = {
            name: "SchedulePostModal",
            components: {
               BaseModal: o["default"],
               BaseInput: c["a"]
            },
            props: {
               id: {
                  type: String,
                  required: !0
               },
               showDate: {
                  type: Boolean,
                  required: !1
               },
               modalData: {
                  type: Object,
                  required: !0
               },
               scheduledDate: {
                  type: String
               },
               allowButton: {
                  type: Boolean
               },
               description: {
                  type: String
               }
            },
            data: function () {
               return {
                  scheduledPostDate: "",
                  scheduledPostTime: "",
                  ic_close: a.a,
                  scheduleDate: this.scheduledDate ? this.scheduledDate : new Date
               }
            },
            computed: {
               minStartDate: function () {
                  var e = new Date,
                     t = e.getDate(),
                     n = e.getMonth() + 1,
                     r = e.getFullYear();
                  return t < 10 && (t = "0" + t), n < 10 && (n = "0" + n), e = r + "-" + n + "-" + t, e
               }
            },
            methods: {
               onHide: function () {
                  this.$root.$emit("bv::hide::modal", this.id), this.$emit("close")
               },
               getScheduleDate: function () {
                  this.scheduleDate = this.scheduledDate ? this.scheduledDate : new Date
               },
               onConfirm: function () {
                  if (this.showDate) {
                     var e = this.scheduledPostDate ? this.scheduledPostDate : this.$moment(this.scheduledDate).format("YYYY-MM-DD"),
                        t = this.scheduledPostTime ? this.scheduledPostTime : this.$moment(this.scheduledDate).format("hh:mm:ss"),
                        n = "".concat(e, " ").concat(t);
                     this.$emit("scheduledPost", this.$moment(n).format())
                  }
                  this.$emit("postStatus", this.modalData.actionType), this.$root.$emit("bv::hide::modal", this.id)
               },
               closeModal: function () {
                  this.$root.$emit("bv::hide::modal", "new-post-modal"), this.$root.$emit("bv::hide::modal", this.id), this.$emit("close")
               }
            }
         },
         l = u,
         d = (n("4c2e"), n("2877")),
         p = Object(d["a"])(l, r, s, !1, null, "fe9e3270", null);
      t["default"] = p.exports
   },
   b0de: function (e, t, n) {},
   b36c: function (e, t, n) {
      "use strict";
      n("8d22")
   },
   b3ac: function (e, t, n) {},
   b65d: function (e, t, n) {
      "use strict";
      var r = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("b-dropdown", {
               staticClass: "base-icon-dropdown",
               class: e.classDropdown,
               attrs: {
                  block: "",
                  "menu-class": "base-dropdown__menu",
                  "toggle-class": "ui-btn ui-btn__rounded ui-btn__transparent",
                  right: e.right,
                  "no-caret": e.noCaret
               },
               scopedSlots: e._u([{
                  key: "button-content",
                  fn: function () {
                     return [e._t("icon", [n("span", {
                        staticClass: "icon-ic-more",
                        style: {
                           color: e.iconColor
                        }
                     })])]
                  },
                  proxy: !0
               }], null, !0)
            }, [e._t("default")], 2)
         },
         s = [],
         o = {
            name: "BaseIconDropdown",
            data: function () {
               return {}
            },
            props: {
               classDropdown: {
                  type: String
               },
               classToggle: {
                  type: String
               },
               right: {
                  type: Boolean
               },
               noCaret: {
                  type: Boolean
               },
               iconColor: {
                  type: String,
                  required: !1
               }
            }
         },
         i = o,
         a = (n("68d3"), n("2877")),
         c = Object(a["a"])(i, r, s, !1, null, null, null);
      t["a"] = c.exports
   },
   b6ab: function (e, t, n) {
      e.exports = n.p + "img/user-not-found.27499c49.svg"
   },
   b89a: function (e, t, n) {},
   b8d0: function (e, t, n) {
      "use strict";
      var r = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("div", {
               staticClass: "ui-wrapper-navbar"
            }, [n("div", {
               staticClass: "ui-wrapper-navbar__inner"
            }, [n("span", {
               staticClass: "navbar-logo__span"
            }, [n("img", {
               staticClass: "navbar-logo",
               attrs: {
                  src: e.logo,
                  alt: "logo"
               },
               on: {
                  click: function (t) {
                     return e.$router.push("/feed")
                  }
               }
            })]), e.isAuth ? e._e() : n("div", [n("button", {
               staticClass: "ui-btn",
               on: {
                  click: function (t) {
                     return e.$emit("signup")
                  }
               }
            }, [e._v("Sign Up")]), n("button", {
               staticClass: "ui-btn ui-btn__outline",
               on: {
                  click: function (t) {
                     return e.$emit("signin")
                  }
               }
            }, [e._v("Login")])])])])
         },
         s = [],
         o = n("4305"),
         i = n.n(o),
         a = {
            name: "Navbar",
            data: function () {
               return {
                  logo: i.a
               }
            },
            computed: {
               isAuth: function () {
                  return this.$store.getters["auth/getAuthStatus"]
               }
            }
         },
         c = a,
         u = (n("296b"), n("2877")),
         l = Object(u["a"])(c, r, s, !1, null, "4031e0bf", null);
      t["a"] = l.exports
   },
   b8dc: function (e, t, n) {
      "use strict";
      var r = function () {
            var e, t, n = this,
               r = n.$createElement,
               s = n._self._c || r;
            return s("div", {
               staticClass: "ui-input-default"
            }, ["time" == n.type ? s("div", [s("b-input-group", [s("b-form-input", {
               staticClass: "ui-input-default__input",
               attrs: {
                  id: "ui-time-input-" + n.id,
                  value: n.context.formatted,
                  type: "text",
                  placeholder: "HH:mm",
                  hour12: ""
               }
            }), s("b-input-group-append", [s("b-form-timepicker", {
               staticClass: "ui-input-default__time",
               attrs: {
                  value: n.value,
                  "button-only": "",
                  "button-variant": "ui-time-picker",
                  right: "",
                  hour12: "",
                  locale: "en"
               },
               on: {
                  context: n.onContext,
                  input: n.input
               }
            })], 1)], 1)], 1) : n.noValidate ? s("div", [s("div", {
               class: {
                  "ui-input-default__label--container": n.subLabel
               }
            }, [n.label ? s("label", {
               staticClass: "ui-label ui-input-default__label",
               class: (e = {}, e[n.labelClass] = n.labelClass, e),
               attrs: {
                  for: "type-" + n.label
               }
            }, [n._v(n._s(n.label))]) : n._e(), n.subLabel ? s("div", {
               class: (t = {}, t[n.subLabelClass] = n.subLabelClass, t)
            }, [n._v(" " + n._s(n.subLabel) + " ")]) : n._e()]), s("div", {
               class: {
                  currency: "input-symbol-dollar"
               }
            }, [s("b-form-input", {
               staticClass: "ui-input-default__input",
               attrs: {
                  id: n.id ? n.id : "type-" + n.label,
                  type: n.type,
                  placeholder: n.placeholder,
                  value: n.value,
                  min: n.min,
                  max: n.max,
                  disabled: !!n.disabled && n.disabled,
                  readonly: n.readonly,
                  password: n.password
               },
               on: {
                  input: n.input,
                  focus: n.focus
               }
            })], 1)]) : s("validation-provider", {
               attrs: {
                  name: n.vid,
                  rules: n.rulesObject,
                  mode: n.veeMode
               },
               scopedSlots: n._u([{
                  key: "default",
                  fn: function (e) {
                     var t, r;
                     return [s("div", {
                        class: {
                           "ui-input-default__label--container": n.subLabel
                        }
                     }, [n.label ? s("label", {
                        staticClass: "ui-label ui-input-default__label",
                        class: (t = {}, t[n.labelClass] = n.labelClass, t),
                        attrs: {
                           for: "type-" + n.label
                        }
                     }, [n._v(n._s(n.label))]) : n._e(), n.subLabel ? s("div", {
                        class: (r = {}, r[n.subLabelClass] = n.subLabelClass, r)
                     }, [n._v(" " + n._s(n.subLabel) + " ")]) : n._e()]), s("div", {
                        staticClass: "ui-input-default__input--wrapper"
                     }, [s("b-form-input", {
                        staticClass: "ui-input-default__input",
                        class: n.password || n.confirmPassword ? "ui-input-default__input--password" : null,
                        attrs: {
                           id: n.id ? n.id : "type-" + n.label,
                           type: n.type,
                           placeholder: n.placeholder,
                           value: n.value,
                           min: n.min,
                           max: n.max,
                           readonly: n.readonly,
                           state: n.getValidationState(e),
                           disabled: !!n.disabled && n.disabled
                        },
                        on: {
                           input: n.input,
                           focus: n.focus
                        }
                     }), s("b-form-invalid-feedback", {
                        staticClass: "mt-2",
                        class: {
                           "password-error": n.password
                        },
                        attrs: {
                           id: "input-1-live-feedback"
                        }
                     }, [n._v(n._s(e.errors[0]) + " ")]), n.password || n.confirmPassword ? [n.showPassword ? s("b-icon-eye-fill", {
                        staticClass: "password-eye",
                        on: {
                           click: function (e) {
                              return n.$emit("toggleShowPassword")
                           }
                        }
                     }) : s("b-icon-eye-slash-fill", {
                        staticClass: "password-eye",
                        on: {
                           click: function (e) {
                              return n.$emit("toggleShowPassword")
                           }
                        }
                     })] : n._e()], 2)]
                  }
               }])
            }), n._t("default")], 2)
         },
         s = [],
         o = n("5530"),
         i = (n("4d63"), n("ac1f"), n("25f0"), n("a9e3"), n("7bb1")),
         a = n("4c93");
      Object(i["c"])("required", Object(o["a"])(Object(o["a"])({}, a["c"]), {}, {
         message: function (e) {
            return console.log(e), "profile-country" === e ? "Select a city to populate this field" : "This field is required"
         }
      })), Object(i["c"])("email", Object(o["a"])(Object(o["a"])({}, a["a"]), {}, {
         message: "Please enter a valid email"
      })), Object(i["c"])("url", {
         validate: function (e) {
            var t = new RegExp("^(http(s?):\\/\\/)((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.@~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i");
            return !!t.test(e)
         },
         message: "Please enter a valid HTTP/S URL"
      }), Object(i["c"])("confirmPassword", {
         params: ["target"],
         validate: function (e, t) {
            var n = t.target;
            return e === n
         },
         message: "Password confirmation does not match"
      }), Object(i["c"])("password", {
         validate: function (e) {
            var t = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).*$/);
            return !!t.test(e)
         },
         message: "Password should contain atleast 1 lowercase, 1 uppercase, 1 special character and 1 number"
      }), Object(i["c"])("min", Object(o["a"])(Object(o["a"])({}, a["b"]), {}, {
         message: "Password should atleast be of 8 characters"
      })), Object(i["c"])("fullName", {
         validate: function (e) {
            var t = new RegExp(/^[a-zA-Z]{2,50}(?: [a-zA-Z]{2,50})+$/);
            return !!t.test(e) && e.length >= 3
         },
         message: "Must use first name and last name (each at least 2 characters)"
      });
      var c = {
            components: {
               ValidationProvider: i["b"]
            },
            name: "BaseInput",
            props: {
               type: String,
               placeholder: String,
               value: [String, Number, Date],
               label: String,
               labelClass: String,
               propRules: String,
               hint: String,
               id: String,
               disabled: Boolean,
               min: String,
               max: String,
               mode: String,
               noValidate: Boolean,
               currency: Boolean,
               readonly: Boolean,
               password: Boolean,
               email: Boolean,
               confirmPassword: Boolean,
               isUrl: Boolean,
               showPassword: Boolean,
               fullName: Boolean,
               subLabel: String,
               subLabelClass: String,
               noPasswordValidation: Boolean
            },
            emits: ["input", "getInputValue", "toggleShowPassword"],
            data: function () {
               return {
                  inputValue: this.value,
                  context: ""
               }
            },
            computed: {
               rulesObject: function () {
                  return {
                     required: !0,
                     email: this.email,
                     confirmPassword: !!this.confirmPassword && "@password",
                     url: this.isUrl,
                     password: this.password && !this.noPasswordValidation,
                     min: this.password && !this.noPasswordValidation ? 8 : 0,
                     fullName: this.fullName
                  }
               },
               vid: function () {
                  return this.label ? this.label.toLowerCase() : ""
               },
               veeMode: function () {
                  return this.mode ? this.mode : "aggressive"
               }
            },
            methods: {
               input: function (e) {
                  this.inputValue = e, this.$emit("input", e)
               },
               focus: function () {
                  this.$emit("focus")
               },
               getInputValue: function () {
                  return this.inputValue
               },
               getValidationState: function (e) {
                  var t = e.dirty,
                     n = e.validated,
                     r = e.valid,
                     s = void 0 === r ? null : r;
                  return t || n ? s : null
               },
               onContext: function (e) {
                  this.context = e
               }
            }
         },
         u = c,
         l = (n("0e28"), n("e1af"), n("2877")),
         d = Object(l["a"])(u, r, s, !1, null, "7562f7c9", null);
      t["a"] = d.exports
   },
   b958: function (e, t, n) {
      e.exports = n.p + "img/logo-nav.5bea692c.svg"
   },
   ba68: function (e, t, n) {
      e.exports = n.p + "img/ic-logo-disabled.37ddab41.svg"
   },
   bb28: function (e, t, n) {},
   bcfa: function (e, t, n) {
      "use strict";
      n("0764")
   },
   be02: function (e, t, n) {
      "use strict";
      n.d(t, "a", (function () {
         return r
      }));
      n("5319"), n("ac1f");

      function r(e) {
         var t = e.replace(/(?:\r\n|\r|\n)/g, "<br/>"),
            n = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/gi;
         t = t.replace(n, "<a class='link' href='$1' target='_blank'>$1</a>");
         var r = /(^|[^/])(www\.[\S]+(\b|$))/gim;
         t = t.replace(r, ' <a class="link" href="https://$2" target="_blank">$2</a>');
         var s = /@\[([^\]]*)]\{([^}]*)\}/gi;
         return t = t.replace(s, '<button class="mention" data-id="$2">$1</button>'), t
      }
   },
   beff: function (e, t, n) {
      "use strict";
      n("a6d9")
   },
   bf53: function (e, t, n) {
      "use strict";
      n("19ed")
   },
   c048: function (e, t, n) {
      "use strict";
      var r = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("div", {
               staticClass: "ui-autosuggest-default"
            }, [n("validation-provider", {
               attrs: {
                  name: "query",
                  rules: "required-city"
               },
               scopedSlots: e._u([{
                  key: "default",
                  fn: function (t) {
                     var r, s;
                     return [n("b-form-group", {
                        staticClass: "city-select__form-group",
                        attrs: {
                           state: e.getValidationState(t)
                        }
                     }, [n("vue-autosuggest", {
                        ref: "autoSuggest",
                        attrs: {
                           inputProps: e.inputProps,
                           suggestions: e.suggestions,
                           getSuggestionValue: e.getSuggestionValue,
                           "component-attr-id-autosuggest": "city-autosuggest"
                        },
                        on: {
                           input: e.fetchResults,
                           selected: e.onSelected,
                           blur: e.onFocusOut,
                           keydown: function (t) {
                              return !t.type.indexOf("key") && e._k(t.keyCode, "delete", [8, 46], t.key, ["Backspace", "Delete", "Del"]) ? null : e.onKeyDown(t)
                           }
                        },
                        scopedSlots: e._u([{
                           key: "default",
                           fn: function (t) {
                              var r = t.suggestion;
                              return [n("div", {
                                 staticStyle: {
                                    display: "flex"
                                 }
                              }, [n("div", {
                                 staticStyle: {
                                    "{ display": "'flex', color: 'navyblue'}"
                                 }
                              }, [e._v(" " + e._s(e.includeState ? r.item.name + ", " + r.item.admin : r.item.name) + " ")])])]
                           }
                        }], null, !0),
                        model: {
                           value: e.query,
                           callback: function (t) {
                              e.query = t
                           },
                           expression: "query"
                        }
                     }, [n("template", {
                        slot: "before-input"
                     }, [n("div", {
                        class: {
                           "city-label__container": e.subLabel
                        }
                     }, [n("label", {
                        class: (r = {}, r[e.labelClass] = e.labelClass, r),
                        attrs: {
                           for: e.inputProps.id
                        }
                     }, [e._v(e._s(e.label))]), e.subLabel ? n("div", {
                        class: (s = {}, s[e.subLabelClass] = e.subLabelClass, s)
                     }, [e._v(" " + e._s(e.subLabel) + " ")]) : e._e()])])], 2)], 1), n("b-form-invalid-feedback", {
                        staticClass: "city-select-error",
                        attrs: {
                           id: "input-1-live-feedback"
                        }
                     }, [e._v(" " + e._s(t.errors[0]) + " ")]), e.notFoundError && e.getValidationState(t) ? n("div", {
                        staticClass: "city-not-found-error",
                        attrs: {
                           id: "input-1-live-feedback"
                        }
                     }, [e._v(" Please select a city from the dropdown ")]) : e._e()]
                  }
               }])
            })], 1)
         },
         s = [],
         o = n("1da1"),
         i = n("5530"),
         a = (n("96cf"), n("b0c0"), n("99af"), n("7bb1")),
         c = n("2831"),
         u = n("7db5"),
         l = n("4c93");
      Object(a["c"])("required-city", Object(i["a"])(Object(i["a"])({}, l["c"]), {}, {
         message: "Selecting your city helps us find Bizfluencers in the same vicinity who you can network with."
      }));
      var d = {
            name: "BaseCityAutoSuggest",
            components: {
               VueAutosuggest: c["a"],
               ValidationProvider: a["b"]
            },
            props: {
               value: String,
               label: String,
               labelClass: String,
               placeholder: String,
               name: String,
               autocomplete: String,
               inputClass: String,
               includeState: Boolean,
               subLabel: String,
               subLabelClass: String
            },
            emits: ["selected", "inputQuery", "onNotFoundError"],
            created: function () {
               this.value && (this.query = this.value, this.selectionDone = !0)
            },
            data: function () {
               return {
                  query: null,
                  selected: null,
                  selectionDone: !1,
                  timeout: null,
                  debounceMilliseconds: 50,
                  results: [],
                  suggestions: [],
                  fetchUrl: "/cities?name_contains=",
                  inputProps: {
                     id: "autosuggest__city-input",
                     placeholder: this.placeholder,
                     class: ["ui-autosuggest-default__input", this.inputClass],
                     name: this.name,
                     autocomplete: this.autocomplete || "city-name-of-user"
                  },
                  notFoundError: !1
               }
            },
            computed: {
               authToken: function () {
                  return this.$store.getters["auth/getUserAuthToken"]
               }
            },
            methods: {
               getInputProps: function (e) {
                  return Object(i["a"])(Object(i["a"])({}, this.inputProps), {}, {
                     state: this.getValidationState(e)
                  })
               },
               fetchResults: function () {
                  var e = this,
                     t = this.query;
                  if (t) {
                     var n = {
                        headers: {
                           Authorization: "Bearer ".concat(this.authToken)
                        }
                     };
                     clearTimeout(this.timeout), this.timeout = setTimeout(Object(o["a"])(regeneratorRuntime.mark((function r() {
                        var s, o;
                        return regeneratorRuntime.wrap((function (r) {
                           while (1) switch (r.prev = r.next) {
                              case 0:
                                 return e.suggestions = [], r.prev = 1, r.next = 4, u["a"].get(e.fetchUrl + t, n);
                              case 4:
                                 s = r.sent, o = s.data, o.length > 0 ? (e.suggestions.push({
                                    name: "cities",
                                    data: o
                                 }), e.notFoundError && (e.notFoundError = !1, e.$emit("onNotFoundError", !1))) : (e.notFoundError = !0, e.$emit("onNotFoundError", !0)), e.$emit("inputQuery", t), r.next = 13;
                                 break;
                              case 10:
                                 r.prev = 10, r.t0 = r["catch"](1), console.log(r.t0.response);
                              case 13:
                              case "end":
                                 return r.stop()
                           }
                        }), r, null, [
                           [1, 10]
                        ])
                     }))), this.debounceMilliseconds)
                  } else this.suggestions = []
               },
               getSuggestionValue: function (e) {
                  var t = e.item.name,
                     n = e.item.admin;
                  return this.includeState ? "".concat(t, ", ").concat(n) : t
               },
               onSelected: function (e) {
                  if (e) {
                     this.selectionDone = !0, this.selected = e;
                     var t = {
                        cityName: e.item.name,
                        cityId: e.item.id,
                        stateName: e.item.admin,
                        countryName: e.item.country.name,
                        countryId: e.item.country.id
                     };
                     this.query = this.getSuggestionValue(e), this.notFoundError = !1, this.$emit("selected", t)
                  }
               },
               onFocusOut: function () {
                  var e = this;
                  setTimeout((function () {
                     e.selected || e.selectionDone || (e.notFoundError = !0, e.query = null)
                  }), 100)
               },
               onKeyDown: function () {
                  this.selectionDone && (this.$emit("inputQuery", null), this.query = null, this.selectionDone = !1, this.notFoundError = !1, this.$emit("onNotFoundError", this.notFoundError), this.suggestions = [], this.selected = null)
               },
               getValidationState: function (e) {
                  var t = e.dirty,
                     n = e.validated,
                     r = e.valid,
                     s = void 0 === r ? null : r;
                  return t || n ? s : null
               },
               setQueryValueUnchecked: function (e) {
                  this.query = e, this.selectionDone = !0
               }
            }
         },
         p = d,
         f = (n("9134"), n("2877")),
         m = Object(f["a"])(p, r, s, !1, null, null, null);
      t["a"] = m.exports
   },
   c04a: function (e, t, n) {
      "use strict";
      n("8c37")
   },
   c216: function (e, t, n) {
      e.exports = n.p + "img/ic-cloud-upload.5cf961ac.svg"
   },
   c382: function (e, t, n) {
      "use strict";
      var r = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("div", {
               staticClass: "ar-player"
            }, [n("div", {
               staticClass: "ar-player-bar"
            }, [n("div", {
               staticClass: "ar-player-actions"
            }, [n("icon-button", {
               staticClass: "ar-icon ar-icon__lg ar-player__play",
               class: {
                  "ar-player__play--active": e.isPlaying
               },
               attrs: {
                  name: e.playBtnIcon
               },
               nativeOn: {
                  click: function (t) {
                     return e.playback(t)
                  }
               }
            })], 1), n("div", {
               staticClass: "ar-player__time"
            }, [e._v(e._s(e.isPlaying ? e.playedTime : e.duration))]), n("line-control", {
               staticClass: "ar-player__progress",
               attrs: {
                  "ref-id": "progress",
                  percentage: e.progress
               },
               on: {
                  "change-linehead": e._onUpdateProgress
               }
            })], 1), n("audio", {
               attrs: {
                  id: e.playerUniqId,
                  src: e.audioSource
               }
            })])
         },
         s = [],
         o = n("73b8"),
         i = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("div", {
               ref: e.refId,
               staticClass: "ar-line-control",
               on: {
                  mousedown: e.onMouseDown
               }
            }, [n("div", {
               staticClass: "ar-line-control__head",
               style: e.calculateSize
            })])
         },
         a = [],
         c = (n("a9e3"), n("99af"), n("8d97")),
         u = {
            props: {
               refId: {
                  type: String
               },
               eventName: {
                  type: String
               },
               percentage: {
                  type: Number,
                  default: 0
               },
               rowDirection: {
                  type: Boolean,
                  default: !0
               }
            },
            methods: {
               onMouseDown: function (e) {
                  var t = Object(c["a"])(e, this.$refs[this.refId]);
                  this.$emit("change-linehead", t), document.addEventListener("mousemove", this.onMouseMove), document.addEventListener("mouseup", this.onMouseUp)
               },
               onMouseUp: function (e) {
                  document.removeEventListener("mouseup", this.onMouseUp), document.removeEventListener("mousemove", this.onMouseMove);
                  var t = Object(c["a"])(e, this.$refs[this.refId]);
                  this.$emit("change-linehead", t)
               },
               onMouseMove: function (e) {
                  var t = Object(c["a"])(e, this.$refs[this.refId]);
                  this.$emit("change-linehead", t)
               }
            },
            computed: {
               calculateSize: function () {
                  var e = this.percentage < 1 ? 100 * this.percentage : this.percentage;
                  return "".concat(this.rowDirection ? "width" : "height", ": ").concat(e, "%")
               }
            }
         },
         l = u,
         d = (n("2f78"), n("2877")),
         p = Object(d["a"])(l, i, a, !1, null, null, null),
         f = p.exports,
         m = {
            props: {
               src: {
                  type: String
               },
               record: {
                  type: Object
               },
               filename: {
                  type: String
               }
            },
            data: function () {
               return {
                  isPlaying: !1,
                  duration: Object(c["b"])(0),
                  playedTime: Object(c["b"])(0),
                  progress: 0
               }
            },
            components: {
               IconButton: o["a"],
               LineControl: f
            },
            mounted: function () {
               var e = this;
               this.player = document.getElementById(this.playerUniqId), this.player.addEventListener("ended", (function () {
                  e.isPlaying = !1
               })), this.player.addEventListener("loadeddata", (function () {
                  e._resetProgress(), e.duration = Object(c["b"])(e.player.duration)
               })), this.player.addEventListener("timeupdate", this._onTimeUpdate), this.$eventBus.$on("remove-record", (function () {
                  e._resetProgress()
               }))
            },
            computed: {
               audioSource: function () {
                  var e = this.src || this.record.url;
                  return e || this._resetProgress(), e
               },
               playBtnIcon: function () {
                  return this.isPlaying ? "pause" : "play"
               },
               playerUniqId: function () {
                  return "audio-player".concat(this._uid)
               }
            },
            methods: {
               playback: function () {
                  var e = this;
                  this.audioSource && (this.isPlaying ? this.player.pause() : setTimeout((function () {
                     e.player.play()
                  }), 0), this.isPlaying = !this.isPlaying)
               },
               _resetProgress: function () {
                  this.isPlaying && this.player.pause(), this.duration = Object(c["b"])(0), this.playedTime = Object(c["b"])(0), this.progress = 0, this.isPlaying = !1
               },
               _onTimeUpdate: function () {
                  this.playedTime = Object(c["b"])(this.player.currentTime), this.progress = this.player.currentTime / this.player.duration * 100
               },
               _onUpdateProgress: function (e) {
                  e && (this.player.currentTime = e * this.player.duration)
               },
               _onChangeVolume: function (e) {
                  e && (this.player.volume = e)
               }
            }
         },
         g = m,
         h = (n("861e"), Object(d["a"])(g, r, s, !1, null, null, null));
      t["a"] = h.exports
   },
   c627: function (e, t, n) {
      e.exports = n.p + "img/ic-modal-close.8d175532.svg"
   },
   c761: function (e, t, n) {
      "use strict";
      n("8b0e")
   },
   c7e5: function (e, t, n) {},
   cd57: function (e, t, n) {},
   cf38: function (e, t, n) {},
   cf8d: function (e, t, n) {
      "use strict";
      n("7bcc")
   },
   cfd2: function (e, t, n) {},
   d0bd: function (e, t, n) {
      e.exports = n.p + "img/user-badge-1.b3955e82.svg"
   },
   d1a6: function (e, t, n) {},
   d217: function (e, t, n) {},
   d2b3: function (e, t, n) {
      "use strict";
      var r = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("base-modal", {
               attrs: {
                  id: "user-follower-modal",
                  "no-close-on-backdrop": !1,
                  modalContentClass: "user-follower",
                  title: e.getTitle,
                  size: "md",
                  mount: e.show,
                  modalDialogClass: "user-follower-dialog",
                  hideFooter: !0,
                  scrollable: ""
               },
               on: {
                  hide: e.onHide,
                  onShow: e.onShow,
                  onClose: e.onHide
               },
               scopedSlots: e._u([{
                  key: "body",
                  fn: function () {
                     return [n("div", {
                        staticClass: "user-follower__body"
                     }, [n("div", {
                        staticClass: "user-follower__title"
                     }, [n("base-input-search", {
                        staticClass: "user-follower-search",
                        attrs: {
                           placeholder: "Search",
                           "clear-on-focus-out": !1
                        },
                        on: {
                           input: e.onSearchInputChange
                        }
                     })], 1), e._l(e.getMembersLists, (function (t) {
                        return n("div", {
                           key: t.id,
                           staticClass: "user-follower__content"
                        }, [n("user-list", {
                           attrs: {
                              type: e.type,
                              isOwn: e.isOwn,
                              userMemberList: t
                           },
                           on: {
                              close: e.onHide
                           }
                        })], 1)
                     })), n("infinite-loading", {
                        ref: "InfiniteLoading",
                        attrs: {
                           identifier: e.infiniteId,
                           spinner: ""
                        },
                        on: {
                           infinite: e.infiniteHandler
                        }
                     }, [n("div", {
                        attrs: {
                           slot: "no-more"
                        },
                        slot: "no-more"
                     })])], 2)]
                  },
                  proxy: !0
               }])
            })
         },
         s = [],
         o = n("1da1"),
         i = (n("96cf"), n("7299")),
         a = n("e166"),
         c = n.n(a),
         u = n("123f"),
         l = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("div", {
               staticClass: "user-list"
            }, [n("div", {
               staticClass: "user-list-profile-img",
               on: {
                  click: function (t) {
                     return e.redirectToUserProfile(e.userMemberList.profile.handle)
                  }
               }
            }, [n("img", {
               staticClass: "user-image clickable",
               attrs: {
                  src: e.userMemberList.profile.picture ? e.userMemberList.profile.picture.formats && e.userMemberList.profile.picture.formats.thumbnail ? e.userMemberList.profile.picture.formats.thumbnail.url : e.userMemberList.profile.picture.url : e.defaultAvatarImage
               }
            })]), n("div", {
               staticClass: "user-list__body"
            }, [n("div", {
               staticClass: "user-list__title"
            }, [n("div", {
               staticClass: "clickable",
               on: {
                  click: function (t) {
                     return e.redirectToUserProfile(e.userMemberList.profile.handle)
                  }
               }
            }, [e._v(" " + e._s(e.userMemberList.profile.title) + " ")]), e.userMemberList.iAmFollowingProfile || e.profile.profileId === e.userMemberList.profile.id ? e._e() : n("span", {
               staticClass: "ui-onboard-link clickable",
               on: {
                  click: function (t) {
                     return e.onFollow(e.userMemberList.profile.id)
                  }
               }
            }, [e._v(e._s(e.isOwn ? "Follow" : "Also follow") + " ")])]), e.profile.profileId !== e.userMemberList.profile.id ? n("div", {
               staticClass: "user-list__action"
            }, ["followers" == e.type && e.userMemberList.iAmFollowingProfile || e.userMemberList.iAmFollowingProfile && !e.isOwn ? n("button", {
               staticClass: "user-list-button",
               on: {
                  click: function (t) {
                     return e.toggleFollow(e.userMemberList.profile.id, e.userMemberList.iAmFollowingProfile)
                  }
               }
            }, [e._v(" " + e._s(e.userMemberList.iAmFollowingProfile ? "Unfollow" : e.removeText) + " ")]) : "following" == e.type && e.isOwn ? n("button", {
               staticClass: "user-list-button",
               on: {
                  click: function (t) {
                     return e.onUserUnfollow(e.userMemberList.profile.id)
                  }
               }
            }, [e._v(" Unfollow ")]) : e._e(), e.userMemberList.iAmFollowingProfile ? n("button", {
               staticClass: "user-list-notify-button",
               on: {
                  click: function (t) {
                     return e.setNotification()
                  }
               }
            }, [e.loader ? n("b-spinner", {
               attrs: {
                  small: "",
                  label: "loader"
               }
            }) : [n("span", {
               class: e.userMemberList.notifyMe ? "icon-notification-fill-on" : "icon-notification-off"
            })]], 2) : e._e()]) : e._e()]), e.showModal ? n("schedule-post-modal", {
               ref: "sharePostModal",
               attrs: {
                  id: "join-notification-user-" + e.userMemberList.profile.id,
                  "modal-data": e.modalData
               },
               on: {
                  postStatus: e.setNotification
               }
            }) : e._e()], 1)
         },
         d = [],
         p = n("b00d"),
         f = {
            name: "UserList",
            components: {
               SchedulePostModal: p["default"]
            },
            props: {
               type: {
                  type: String,
                  required: !0
               },
               isOwn: {
                  type: Boolean,
                  default: !1
               },
               userMemberList: {
                  type: Object,
                  required: !0,
                  default: function () {}
               }
            },
            data: function () {
               return {
                  searchText: "",
                  removeText: "Remove",
                  loader: !1,
                  defaultAvatarImage: "https://referralguidestorage.blob.core.windows.net/webcontent/fallback/avatarFallback.png",
                  showModal: !1,
                  modalData: {}
               }
            },
            computed: {
               profile: function () {
                  return this.$store.getters["profile/getProfile"]
               }
            },
            mounted: function () {},
            methods: {
               setNotification: function () {
                  var e = this;
                  return Object(o["a"])(regeneratorRuntime.mark((function t() {
                     var n;
                     return regeneratorRuntime.wrap((function (t) {
                        while (1) switch (t.prev = t.next) {
                           case 0:
                              return t.prev = 0, e.loader = !0, t.next = 4, e.$store.dispatch("user/notificationSettingToggle", {
                                 setting: "postPublish",
                                 type: "profiles",
                                 action: e.userMemberList.notifyMe ? "remove" : "add",
                                 value: e.userMemberList.profile.id
                              });
                           case 4:
                              n = t.sent, n && (e.userMemberList.notifyMe = !e.userMemberList.notifyMe), t.next = 11;
                              break;
                           case 8:
                              throw t.prev = 8, t.t0 = t["catch"](0), t.t0.response.data.message;
                           case 11:
                              return t.prev = 11, e.loader = !1, t.finish(11);
                           case 14:
                           case "end":
                              return t.stop()
                        }
                     }), t, null, [
                        [0, 8, 11, 14]
                     ])
                  })))()
               },
               redirectToUserProfile: function (e) {
                  this.$router.push({
                     path: "/profiles/" + e
                  }), this.$emit("close")
               },
               toggleFollow: function (e, t) {
                  var n = this;
                  return Object(o["a"])(regeneratorRuntime.mark((function r() {
                     return regeneratorRuntime.wrap((function (r) {
                        while (1) switch (r.prev = r.next) {
                           case 0:
                              if (!t) {
                                 r.next = 5;
                                 break
                              }
                              return r.next = 3, n.onUnFollow(e);
                           case 3:
                              r.next = 7;
                              break;
                           case 5:
                              return r.next = 7, n.onRemoved(e);
                           case 7:
                           case "end":
                              return r.stop()
                        }
                     }), r)
                  })))()
               },
               onFollow: function (e) {
                  var t = this;
                  return Object(o["a"])(regeneratorRuntime.mark((function n() {
                     return regeneratorRuntime.wrap((function (n) {
                        while (1) switch (n.prev = n.next) {
                           case 0:
                              return n.next = 2, t.$store.dispatch("user/followUser", {
                                 profileId: e
                              });
                           case 2:
                              t.showModal = !0, t.modalData = {
                                 actionType: "enableNotification",
                                 titleText: "Enable Notification?",
                                 subtitleText: "Would you like to be notified when ".concat(t.userMemberList.profile.title, " posts?")
                              }, t.$nextTick((function () {
                                 t.$bvModal.show("join-notification-user-".concat(t.userMemberList.profile.id))
                              })), t.$store.dispatch("profile/addMyProfileCount"), t.$store.commit("profile/updateUserFollowList", {
                                 profileId: e,
                                 status: !0
                              });
                           case 7:
                           case "end":
                              return n.stop()
                        }
                     }), n)
                  })))()
               },
               onUnFollow: function (e) {
                  var t = this;
                  return Object(o["a"])(regeneratorRuntime.mark((function n() {
                     return regeneratorRuntime.wrap((function (n) {
                        while (1) switch (n.prev = n.next) {
                           case 0:
                              return n.next = 2, t.$store.dispatch("user/unfollowUser", {
                                 profileId: e
                              });
                           case 2:
                              t.userMemberList.notifyMe = !1, t.$store.dispatch("profile/removeMyProfileCount"), t.$store.commit("profile/updateUserFollowList", {
                                 profileId: e,
                                 status: !1
                              });
                           case 5:
                           case "end":
                              return n.stop()
                        }
                     }), n)
                  })))()
               },
               onRemoved: function (e) {
                  var t = this;
                  return Object(o["a"])(regeneratorRuntime.mark((function n() {
                     return regeneratorRuntime.wrap((function (n) {
                        while (1) switch (n.prev = n.next) {
                           case 0:
                              return n.next = 2, t.$store.dispatch("profile/removeUserFollower", {
                                 profileId: e
                              });
                           case 2:
                              t.$store.dispatch("profile/removeMyProfileCount"), t.removeText = "Removed";
                           case 4:
                           case "end":
                              return n.stop()
                        }
                     }), n)
                  })))()
               },
               onUserUnfollow: function (e) {
                  var t = this;
                  return Object(o["a"])(regeneratorRuntime.mark((function n() {
                     return regeneratorRuntime.wrap((function (n) {
                        while (1) switch (n.prev = n.next) {
                           case 0:
                              return n.next = 2, t.onUnFollow(e);
                           case 2:
                              t.$store.commit("profile/removeUserFollowList", {
                                 profileId: e
                              }), t.userMemberList.notifyMe = !1;
                           case 4:
                           case "end":
                              return n.stop()
                        }
                     }), n)
                  })))()
               }
            }
         },
         m = f,
         g = (n("6705"), n("2877")),
         h = Object(g["a"])(m, l, d, !1, null, "a4aa7c3e", null),
         v = h.exports,
         b = {
            name: "UserFollowerListModal",
            components: {
               BaseModal: i["default"],
               InfiniteLoading: c.a,
               BaseInputSearch: u["default"],
               UserList: v
            },
            props: {
               type: {
                  type: String,
                  required: !0
               },
               currentProfileId: {
                  type: String,
                  required: !0
               },
               isOwn: {
                  type: Boolean,
                  default: !1
               }
            },
            data: function () {
               return {
                  followerPage: 1,
                  show: !1,
                  userMemberLists: [],
                  infiniteId: new Date,
                  searchText: "",
                  removeText: "Remove",
                  loader: !1
               }
            },
            watch: {
               currentProfileId: function (e) {
                  return e
               }
            },
            computed: {
               getMembersLists: function () {
                  return this.$store.getters["profile/getUserFollowMemberList"]
               },
               getTitle: function () {
                  return "followers" == this.type ? "Followers" : "Following"
               },
               profile: function () {
                  return this.$store.getters["profile/getProfile"]
               }
            },
            mounted: function () {},
            methods: {
               onShow: function () {
                  this.show = !0
               },
               toggleModal: function () {
                  var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                  this.show = e, this.$store.commit("profile/resetUserFollowMemberList"), this.followerPage = 1
               },
               onHide: function () {
                  this.show = !1, this.$emit("close")
               },
               infiniteHandler: function (e) {
                  var t = this;
                  this.getMemberLists().then((function (n) {
                     n.length ? (t.followerPage += 1, e.loaded()) : e.complete()
                  }))
               },
               getMemberLists: function () {
                  var e = this;
                  return Object(o["a"])(regeneratorRuntime.mark((function t() {
                     return regeneratorRuntime.wrap((function (t) {
                        while (1) switch (t.prev = t.next) {
                           case 0:
                              if ("followers" != e.type) {
                                 t.next = 6;
                                 break
                              }
                              return t.next = 3, e.$store.dispatch("profile/getUserFollowers", {
                                 page: e.followerPage,
                                 profileId: e.currentProfileId,
                                 search: e.searchText
                              });
                           case 3:
                              return t.abrupt("return", t.sent);
                           case 6:
                              return t.next = 8, e.$store.dispatch("profile/getUserFollowings", {
                                 page: e.followerPage,
                                 profileId: e.currentProfileId,
                                 search: e.searchText
                              });
                           case 8:
                              return t.abrupt("return", t.sent);
                           case 9:
                           case "end":
                              return t.stop()
                        }
                     }), t)
                  })))()
               },
               onSearchInputChange: function (e) {
                  var t = this;
                  return Object(o["a"])(regeneratorRuntime.mark((function n() {
                     return regeneratorRuntime.wrap((function (n) {
                        while (1) switch (n.prev = n.next) {
                           case 0:
                              return t.searchText = e, t.followerPage = 1, n.next = 4, t.$store.commit("profile/resetUserFollowMemberList");
                           case 4:
                              return n.next = 6, t.getMemberLists();
                           case 6:
                           case "end":
                              return n.stop()
                        }
                     }), n)
                  })))()
               }
            }
         },
         w = b,
         k = (n("9e7d"), Object(g["a"])(w, r, s, !1, null, "dda3aabe", null));
      t["a"] = k.exports
   },
   d302: function (e, t, n) {
      e.exports = n.p + "img/img-sec-1.a2241773.jpg"
   },
   d30a: function (e, t, n) {
      "use strict";
      n("cd57")
   },
   d32a: function (e, t, n) {},
   d572: function (e, t, n) {
      "use strict";
      n("0356")
   },
   d68c: function (e, t, n) {},
   dacc: function (e, t, n) {
      "use strict";
      n("6d53")
   },
   dbd7: function (e, t, n) {},
   e1af: function (e, t, n) {
      "use strict";
      n("cfd2")
   },
   e29e: function (e, t, n) {},
   e3d9: function (e, t, n) {
      "use strict";
      n("898b0")
   },
   e832: function (e, t, n) {
      "use strict";
      var r = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("BaseModal", {
               attrs: {
                  mount: !0,
                  size: "sm",
                  "no-close-on-backdrop": !0,
                  id: e.id
               },
               on: {
                  ok: function (t) {
                     return e.$emit("ok")
                  }
               },
               scopedSlots: e._u([{
                  key: "header",
                  fn: function () {
                     return [n("p", {
                        staticClass: "warning-modal-header"
                     }, [e._v("Warning")])]
                  },
                  proxy: !0
               }, {
                  key: "body",
                  fn: function () {
                     return [n("div", {
                        staticClass: "warning-modal-body"
                     }, [e._v(" " + e._s(e.message) + " ")])]
                  },
                  proxy: !0
               }])
            })
         },
         s = [],
         o = n("7299"),
         i = {
            name: "BaseWarningModal",
            components: {
               BaseModal: o["default"]
            },
            props: {
               message: {
                  type: String,
                  required: !1,
                  default: "Are you sure you would like to proceed"
               },
               id: String
            }
         },
         a = i,
         c = (n("fa8f"), n("2877")),
         u = Object(c["a"])(a, r, s, !1, null, "72c105be", null);
      t["a"] = u.exports
   },
   e924: function (e, t, n) {
      "use strict";
      n("dbd7")
   },
   e9aa: function (e, t, n) {
      e.exports = n.p + "img/edit-icon.291b1837.svg"
   },
   eb8e: function (e, t, n) {
      "use strict";
      n("e29e")
   },
   ee54: function (e, t, n) {
      "use strict";
      n("b3ac")
   },
   ef6a: function (e, t, n) {},
   ef95: function (e, t, n) {},
   f1bc: function (e, t, n) {
      "use strict";
      n("52f1")
   },
   f27b: function (e, t, n) {},
   f367: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("button", {
               staticClass: "ui-btn ui-btn__rounded ui-btn__transparent",
               on: {
                  click: function (t) {
                     return t.preventDefault(), e.$emit("iconClicked")
                  }
               }
            }, [e.isImg ? n("img", {
               style: e.width ? "width: " + e.width + "px" : "",
               attrs: {
                  src: e.icon,
                  alt: ""
               }
            }) : n("span", {
               class: e.icon + " " + (e.active ? "active" : "")
            })])
         },
         s = [],
         o = (n("a9e3"), {
            name: "BaseIconButton",
            emits: ["iconClicked"],
            props: {
               icon: {
                  type: String,
                  required: !0
               },
               active: {
                  type: Boolean,
                  required: !1
               },
               isImg: {
                  type: Boolean,
                  required: !1
               },
               width: {
                  type: Number,
                  required: !1
               }
            }
         }),
         i = o,
         a = (n("01aa"), n("2877")),
         c = Object(a["a"])(i, r, s, !1, null, "553e5d05", null);
      t["default"] = c.exports
   },
   f4d9: function (e, t, n) {},
   f593: function (e, t, n) {
      "use strict";
      var r = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("div", {
               ref: "messages-wrapper",
               staticClass: "chat-content",
               on: {
                  "&scroll": function (t) {
                     return e.handleScroll(t)
                  }
               }
            }, ["personal" === e.conversation.type ? n("ChatDetailHeader", {
               attrs: {
                  conversation: e.conversation
               }
            }) : e._e(), "group" === e.conversation.type ? n("ChatDetailHeaderGroup", {
               attrs: {
                  conversation: e.conversation
               }
            }) : e._e(), "network" === e.conversation.type ? n("ChatDetailHeaderNetwork", {
               attrs: {
                  conversation: e.conversation
               }
            }) : e._e(), e._l(e.messageGroups, (function (t, r) {
               return n("div", {
                  key: r
               }, [n("div", {
                  staticClass: "messaging-content__start-time"
               }, [e._v(e._s(e._f("moment")([r, "X"], "MMM Do YY")))]), e._l(e.sortMessagesByTime(t), (function (t) {
                  return n("div", {
                     key: t._id,
                     ref: "message-" + t._id,
                     refInFor: !0
                  }, [t.my ? n("MessagingSent", {
                     attrs: {
                        setParentMessage: e.setParentMessage,
                        message: t
                     }
                  }) : n("MessagingReceived", {
                     attrs: {
                        setParentMessage: e.setParentMessage,
                        "is-private-chat": "personal" === e.conversation.type,
                        message: t
                     }
                  })], 1)
               }))], 2)
            })), e.conversation.isNew ? e._e() : n("InfiniteLoading", {
               attrs: {
                  direction: "bottom",
                  spinner: "waveDots"
               },
               on: {
                  infinite: e.infiniteHandlerBottom
               }
            }, [n("div", {
               attrs: {
                  slot: "no-results"
               },
               slot: "no-results"
            }), n("div", {
               attrs: {
                  slot: "no-more"
               },
               slot: "no-more"
            })]), e._l(e.conversation.usersTyping, (function (t, r) {
               return n("div", {
                  key: r
               }, [r !== e.myUserId && t ? n("div", {
                  staticClass: "typing-wrapper"
               }, [n("div", {
                  staticClass: "dot-flashing"
               })]) : e._e()])
            }))], 2)
         },
         s = [],
         o = n("3835"),
         i = (n("4fad"), n("7db0"), n("2ef0")),
         a = n("e166"),
         c = n.n(a),
         u = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("div", {
               staticClass: "messaging-sent",
               class: {
                  deleted: e.message.deleted
               }
            }, [n("div", {
               staticClass: "content-wrapper"
            }, [n("div", {
               staticClass: "m-action"
            }, [n("div", {
               staticClass: "m-action__buttons"
            }, [e.message.deleted ? e._e() : n("base-icon-dropdown", {
               ref: "messageOptions",
               staticClass: "options-dropdown-button",
               attrs: {
                  "no-caret": "",
                  right: ""
               },
               on: {
                  click: e.handleOptionsClick
               },
               scopedSlots: e._u([{
                  key: "icon",
                  fn: function () {
                     return [n("base-icon-button", {
                        attrs: {
                           icon: e.moreIcon,
                           width: 16,
                           isImg: ""
                        }
                     })]
                  },
                  proxy: !0
               }], null, !1, 1682421866)
            }, [n("base-list-item-default", {
               attrs: {
                  button: "",
                  icon: e.editIcon,
                  isImg: ""
               },
               on: {
                  click: e.editMessage
               }
            }, [e._v(" Edit message ")]), n("base-list-item-default", {
               attrs: {
                  button: "",
                  icon: e.deleteIcon,
                  isImg: ""
               },
               on: {
                  click: e.deleteMessage
               }
            }, [e._v(" Delete message ")]), e.isSuperAdmin ? n("base-list-item-default", {
               attrs: {
                  button: "",
                  icon: e.deleteIcon,
                  isImg: ""
               },
               on: {
                  click: e.deleteMessageAdmin
               }
            }, [e._v(" Delete message (Superuser) ")]) : e._e()], 1), n("base-icon-button", {
               attrs: {
                  icon: e.replyIcon,
                  width: 16,
                  isImg: ""
               },
               on: {
                  iconClicked: function (t) {
                     return e.setParentMessage(e.message)
                  }
               }
            })], 1), n("span", {
               staticClass: "m-info__text"
            }, [e.message.edited ? n("span", [e._v("Edited ")]) : e._e(), e.message.edited ? n("span", {
               staticClass: "actions-separetor"
            }, [e._v("·")]) : e._e(), e._v(" " + e._s(e._f("moment")(e.message.createdAt, "hh:mm")) + " ")])]), n("div", {
               staticClass: "m-msg"
            }, [n("div", {
               staticClass: "m-msg__content"
            }, [e.message.parentMessage ? n("div", {
               staticClass: "parent-message-wrapper",
               on: {
                  click: e.scrollToMessage
               }
            }, [n("span", {
               staticClass: "reply-author"
            }, [e._v(e._s(e.message.parentMessage.user.id === e.myProfileId ? "You" : e.message.parentMessage.user.title))]), n("span", {
               staticClass: "reply-content"
            }, [e._v(e._s(e.message.parentMessage.content))])]) : e._e(), e.isEditing ? n("div", {
               staticClass: "content-edit"
            }, [n("textarea", {
               directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: e.editedMessage,
                  expression: "editedMessage"
               }],
               domProps: {
                  value: e.editedMessage
               },
               on: {
                  input: function (t) {
                     t.target.composing || (e.editedMessage = t.target.value)
                  }
               }
            }), e._v(" "), n("div", [n("a", {
               on: {
                  click: e.saveEdit
               }
            }, [e._v("Save")]), n("span", {
               staticClass: "actions-separetor"
            }, [e._v("·")]), n("a", {
               on: {
                  click: e.cancelEdit
               }
            }, [e._v("Cancel")])])]) : n("div", {
               directives: [{
                  name: "linkified",
                  rawName: "v-linkified"
               }],
               domProps: {
                  innerHTML: e._s(e.message.content)
               }
            }), e.message.files && e.message.files.length ? n("div", {
               staticClass: "d-flex"
            }, e._l(e.message.files, (function (t, r) {
               return n("div", {
                  key: t.file._id
               }, ["video" === e.fileType(t.file) ? n("div", {
                  staticClass: "preview-attachment__box"
               }, [n("div", {
                  staticClass: "video-container",
                  on: {
                     click: function (t) {
                        return e.openModal(r)
                     }
                  }
               }, [n("b-embed", {
                  key: t.file.id,
                  staticClass: "preview-attachment__img p-0",
                  attrs: {
                     type: "video",
                     controls: "",
                     poster: e.videoPoster(t.file),
                     aspect: "0"
                  }
               }, [n("source", {
                  key: t.file.id,
                  attrs: {
                     src: t.file.url
                  }
               })]), e.isEditing ? n("button", {
                  staticClass: "ui-btn ui-btn__rounded gallery-btn-delete",
                  on: {
                     click: function (t) {
                        return t.preventDefault(), e.removeImage(r)
                     }
                  }
               }, [n("span", {
                  staticClass: "icon-close"
               })]) : e._e()], 1)]) : "image" === e.fileType(t.file) ? n("div", {
                  staticClass: "preview-attachment__box"
               }, [n("div", {
                  staticClass: "preview-attachment__img",
                  style: {
                     "background-image": "url('" + t.file.url + "')"
                  },
                  on: {
                     click: function (t) {
                        return e.openModal(r)
                     }
                  }
               }, [e.isEditing ? n("button", {
                  staticClass: "ui-btn ui-btn__rounded gallery-btn-delete",
                  on: {
                     click: function (t) {
                        return t.preventDefault(), e.removeImage(r)
                     }
                  }
               }, [n("span", {
                  staticClass: "icon-close"
               })]) : e._e()])]) : "audio" === e.fileType(t.file) ? n("div", [n("audio-player", {
                  staticClass: "ui-flex-grow",
                  style: {
                     width: "200px",
                     marginTop: "8px"
                  },
                  attrs: {
                     record: t.file
                  }
               }), e.isEditing ? n("button", {
                  staticClass: "ui-btn ui-btn__rounded gallery-btn-delete",
                  on: {
                     click: function (t) {
                        return t.preventDefault(), e.removeImage(r)
                     }
                  }
               }, [n("span", {
                  staticClass: "icon-close"
               })]) : e._e()], 1) : n("div", {
                  staticClass: "preview-attachment__box"
               }, [n("a", {
                  staticClass: "preview-attachment__img",
                  attrs: {
                     href: "https://" + t.file.url,
                     target: "_blank"
                  }
               }, [e._v(" " + e._s(t.file.name) + " "), e.isEditing ? n("button", {
                  staticClass: "ui-btn ui-btn__rounded gallery-btn-delete",
                  on: {
                     click: function (t) {
                        return t.preventDefault(), e.removeImage(r)
                     }
                  }
               }, [n("span", {
                  staticClass: "icon-close"
               })]) : e._e()])])])
            })), 0) : e._e()])])]), e.showModal ? n("ModalViewAttachment", {
               attrs: {
                  message: e.message,
                  slideIndex: e.modalSlideIndex
               }
            }) : e._e()], 1)
         },
         l = [],
         d = n("1da1"),
         p = (n("96cf"), n("f367")),
         f = n("b65d"),
         m = n("8f1b"),
         g = n("563b"),
         h = n.n(g),
         v = n("e9aa"),
         b = n.n(v),
         w = n("1ea6"),
         k = n.n(w),
         _ = n("f69e"),
         C = n.n(_),
         y = n("c382"),
         x = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("b-modal", {
               ref: "viewModal",
               attrs: {
                  "content-class": "chat-modal",
                  id: "modal-view-attachment-" + e.message._id,
                  size: "xl",
                  centered: "",
                  "hide-footer": "",
                  "dialog-class": "chat-attachments-dialog"
               },
               scopedSlots: e._u([{
                  key: "modal-header",
                  fn: function (e) {
                     var t = e.close;
                     return [n("button", {
                        staticClass: "close",
                        on: {
                           click: function (e) {
                              return t()
                           }
                        }
                     }, [n("span", {
                        staticClass: "icon-ic-modal-close"
                     })])]
                  }
               }])
            }, [n("b-row", {
               staticClass: "img-view-wr",
               attrs: {
                  "align-h": "center"
               }
            }, [n("b-col", {
               staticClass: "img-view-wr__content"
            }, [e.message ? n("slider", {
               attrs: {
                  animation: "fade",
                  autoplay: !1,
                  value: e.slideIndex,
                  height: "100%",
                  width: "100%",
                  speed: 1e3,
                  stopOnHover: !0,
                  "control-btn": 1 !== e.message.files.length,
                  indicators: 1 != e.message.files.length && "center"
               },
               on: {
                  change: e.pause
               }
            }, e._l(e.message.files, (function (t) {
               return n("slider-item", {
                  key: t.id
               }, [t.file && t.file.mime ? n("div", [t.file.mime.includes("image") ? n("blur-hash-img", {
                  attrs: {
                     src: t.file,
                     blurhash: t.file.blurHash,
                     imageClass: "img-view-wr__slides",
                     height: 517
                  }
               }) : n("b-embed", {
                  attrs: {
                     type: "video",
                     allowfullscreen: "",
                     controls: "",
                     aspect: "1by1",
                     controlsList: "nodownload"
                  },
                  on: {
                     canplay: e.updatePaused,
                     playing: e.updatePaused,
                     pause: e.updatePaused
                  }
               }, [n("source", {
                  attrs: {
                     src: t.file.url
                  }
               })])], 1) : e._e()])
            })), 1) : e._e()], 1)], 1)], 1)
         },
         P = [],
         I = n("d0bd"),
         j = n.n(I),
         M = n("c627"),
         R = n.n(M),
         O = n("cd9a"),
         A = n("7c45"),
         S = {
            name: "ModalViewAttachment",
            components: {
               Slider: O["a"],
               SliderItem: O["b"],
               BlurHashImg: A["a"]
            },
            props: ["message", "slideIndex"],
            data: function () {
               return {
                  ic_badge1: j.a,
                  ic_close: R.a,
                  videoElement: null
               }
            },
            methods: {
               pause: function () {
                  this.videoElement && this.videoElement.pause()
               }
            }
         },
         T = S,
         F = (n("f1bc"), n("2877")),
         L = Object(F["a"])(T, x, P, !1, null, "53a3b9d6", null),
         $ = L.exports,
         B = {
            name: "MessagingSent",
            components: {
               BaseIconButton: p["default"],
               BaseIconDropdown: f["a"],
               BaseListItemDefault: m["a"],
               AudioPlayer: y["a"],
               ModalViewAttachment: $
            },
            data: function () {
               return {
                  replyIcon: h.a,
                  editIcon: b.a,
                  moreIcon: k.a,
                  deleteIcon: C.a,
                  editedMessage: "",
                  isEditing: !1,
                  showModal: !1,
                  modalSlideIndex: 0
               }
            },
            props: {
               message: Object,
               setParentMessage: Function
            },
            computed: {
               myProfileId: function () {
                  return this.$store.getters["profile/getProfileId"]
               },
               role: function () {
                  return this.$store.getters["profile/getProfileRole"]
               },
               isSuperAdmin: function () {
                  return "Super Admin" === this.role
               }
            },
            methods: {
               openModal: function (e) {
                  var t = this;
                  this.showModal = !0, this.modalSlideIndex = e, this.$nextTick((function () {
                     t.$bvModal.show("modal-view-attachment-".concat(t.message._id))
                  }))
               },
               editMessage: function () {
                  this.isEditing = !0, this.editedMessage = this.message.content
               },
               cancelEdit: function () {
                  this.isEditing = !1
               },
               saveEdit: function () {
                  var e = this;
                  return Object(d["a"])(regeneratorRuntime.mark((function t() {
                     return regeneratorRuntime.wrap((function (t) {
                        while (1) switch (t.prev = t.next) {
                           case 0:
                              return t.next = 2, e.$store.dispatch("chat/editMessage", {
                                 conversationId: e.$parent.conversation._id,
                                 messageId: e.message._id,
                                 content: e.editedMessage
                              });
                           case 2:
                              e.isEditing = !1, e.editedMessage = "";
                           case 4:
                           case "end":
                              return t.stop()
                        }
                     }), t)
                  })))()
               },
               scrollToMessage: function () {
                  this.$parent.scrollToMessage(this.message.parentMessage._id)
               },
               handleOptionsClick: function () {
                  console.log("clicked options menu")
               },
               fileType: function (e) {
                  return "image/" === e.mime.substr(0, 6) ? "image" : "video/" === e.mime.substr(0, 6) ? "video" : "audio/" === e.mime.substr(0, 6) ? "audio" : "doc"
               },
               deleteMessage: function () {
                  var e = this;
                  return Object(d["a"])(regeneratorRuntime.mark((function t() {
                     return regeneratorRuntime.wrap((function (t) {
                        while (1) switch (t.prev = t.next) {
                           case 0:
                              return t.next = 2, e.$store.dispatch("chat/deleteMessage", {
                                 conversationId: e.$parent.conversation._id,
                                 messageId: e.message._id
                              });
                           case 2:
                           case "end":
                              return t.stop()
                        }
                     }), t)
                  })))()
               },
               deleteMessageAdmin: function () {
                  var e = this;
                  return Object(d["a"])(regeneratorRuntime.mark((function t() {
                     return regeneratorRuntime.wrap((function (t) {
                        while (1) switch (t.prev = t.next) {
                           case 0:
                              return t.next = 2, e.$store.dispatch("chat/deleteMessageAdmin", {
                                 conversationId: e.$parent.conversation._id,
                                 messageId: e.message._id
                              });
                           case 2:
                           case "end":
                              return t.stop()
                        }
                     }), t)
                  })))()
               }
            }
         },
         U = B,
         D = (n("22ce"), Object(F["a"])(U, u, l, !1, null, "68ba0eb8", null)),
         N = D.exports,
         E = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("div", {
               staticClass: "messaging-received"
            }, [e.isPrivateChat ? e._e() : n("div", {
               directives: [{
                  name: "tooltip",
                  rawName: "v-tooltip",
                  value: {
                     content: e.message.user.title,
                     placement: "top-center"
                  },
                  expression: "{\n      content: message.user.title,\n      placement: 'top-center'\n    }"
               }],
               staticClass: "m-img clickable",
               on: {
                  click: e.goToProfile
               }
            }, [n("img", {
               staticClass: "user-image",
               attrs: {
                  src: e.message.user.picture.formats && e.message.user.picture.formats.thumbnial ? e.message.user.picture.formats.thumbnia.url : e.message.user.picture.url
               }
            })]), n("div", {
               staticClass: "content-wrapper"
            }, [n("div", {
               staticClass: "m-msg"
            }, [n("span", {
               staticClass: "m-msg__content"
            }, [e.message.parentMessage ? n("div", {
               staticClass: "parent-message-wrapper",
               on: {
                  click: e.scrollToMessage
               }
            }, [n("span", {
               staticClass: "reply-author"
            }, [e._v(e._s(e.message.parentMessage.user.id === e.myProfileId ? "You" : e.message.parentMessage.user.title))]), n("span", {
               staticClass: "reply-content"
            }, [e._v(e._s(e.message.parentMessage.content))])]) : e._e(), n("div", {
               directives: [{
                  name: "linkified",
                  rawName: "v-linkified"
               }],
               domProps: {
                  innerHTML: e._s(e.message.content)
               }
            }), e.message.files && e.message.files.length ? n("div", {
               staticClass: "d-flex"
            }, e._l(e.message.files, (function (t, r) {
               return n("div", {
                  key: t.file._id
               }, ["video" === e.fileType(t.file) ? n("div", {
                  staticClass: "preview-attachment__box"
               }, [n("div", {
                  staticClass: "video-container",
                  on: {
                     click: function (t) {
                        return e.openModal(r)
                     }
                  }
               }, [n("b-embed", {
                  key: t.file.id,
                  staticClass: "preview-attachment__img p-0",
                  attrs: {
                     type: "video",
                     controls: "",
                     poster: e.videoPoster(t.file),
                     aspect: "0"
                  }
               }, [n("source", {
                  key: t.file.id,
                  attrs: {
                     src: t.file.url
                  }
               })]), e.isEditing ? n("button", {
                  staticClass: "ui-btn ui-btn__rounded gallery-btn-delete",
                  on: {
                     click: function (t) {
                        return t.preventDefault(), e.removeImage(r)
                     }
                  }
               }, [n("span", {
                  staticClass: "icon-close"
               })]) : e._e()], 1)]) : "image" === e.fileType(t.file) ? n("div", {
                  staticClass: "preview-attachment__box"
               }, [n("div", {
                  staticClass: "preview-attachment__img",
                  style: {
                     "background-image": "url('" + t.file.url + "')"
                  },
                  on: {
                     click: function (t) {
                        return e.openModal(r)
                     }
                  }
               }, [e.isEditing ? n("button", {
                  staticClass: "ui-btn ui-btn__rounded gallery-btn-delete",
                  on: {
                     click: function (t) {
                        return t.preventDefault(), e.removeImage(r)
                     }
                  }
               }, [n("span", {
                  staticClass: "icon-close"
               })]) : e._e()])]) : "audio" === e.fileType(t.file) ? n("div", [n("audio-player", {
                  staticClass: "ui-flex-grow",
                  style: {
                     width: "200px",
                     marginTop: "8px"
                  },
                  attrs: {
                     record: t.file
                  }
               }), e.isEditing ? n("button", {
                  staticClass: "ui-btn ui-btn__rounded gallery-btn-delete",
                  on: {
                     click: function (t) {
                        return t.preventDefault(), e.removeImage(r)
                     }
                  }
               }, [n("span", {
                  staticClass: "icon-close"
               })]) : e._e()], 1) : n("div", {
                  staticClass: "preview-attachment__box"
               }, [n("a", {
                  staticClass: "preview-attachment__img",
                  attrs: {
                     href: t.file.url,
                     target: "_blank"
                  }
               }, [e._v(" " + e._s(t.file.name) + " "), e.isEditing ? n("button", {
                  staticClass: "ui-btn ui-btn__rounded gallery-btn-delete",
                  on: {
                     click: function (t) {
                        return t.preventDefault(), e.removeImage(r)
                     }
                  }
               }, [n("span", {
                  staticClass: "icon-close"
               })]) : e._e()])])])
            })), 0) : e._e()])]), n("div", {
               staticClass: "m-action"
            }, [n("div", {
               staticClass: "m-action__buttons"
            }, [n("base-icon-button", {
               attrs: {
                  icon: e.replyIcon,
                  width: 16,
                  isImg: ""
               },
               on: {
                  iconClicked: function (t) {
                     return e.setParentMessage(e.message)
                  }
               }
            }), !e.message.deleted && e.isSuperAdmin ? n("base-icon-dropdown", {
               ref: "messageOptions",
               staticClass: "options-dropdown-button",
               attrs: {
                  "no-caret": "",
                  right: ""
               },
               on: {
                  click: e.handleOptionsClick
               },
               scopedSlots: e._u([{
                  key: "icon",
                  fn: function () {
                     return [n("base-icon-button", {
                        attrs: {
                           icon: e.moreIcon,
                           width: 16,
                           isImg: ""
                        }
                     })]
                  },
                  proxy: !0
               }], null, !1, 1682421866)
            }, [e.isSuperAdmin ? n("base-list-item-default", {
               attrs: {
                  button: "",
                  icon: e.deleteIcon,
                  isImg: ""
               },
               on: {
                  click: e.deleteMessageAdmin
               }
            }, [e._v(" Delete message (Superuser) ")]) : e._e()], 1) : e._e()], 1), n("span", {
               staticClass: "m-info__text"
            }, [e._v(" " + e._s(e._f("moment")(e.message.createdAt, "hh:mm")) + " ")])])]), n("div", {
               staticClass: "m-info"
            }), e.showModal ? n("ModalViewAttachment", {
               attrs: {
                  message: e.message,
                  slideIndex: e.modalSlideIndex
               }
            }) : e._e()], 1)
         },
         q = [],
         z = {
            name: "MessagingReceived",
            components: {
               BaseIconButton: p["default"],
               BaseIconDropdown: f["a"],
               BaseListItemDefault: m["a"],
               AudioPlayer: y["a"],
               ModalViewAttachment: $
            },
            data: function () {
               return {
                  replyIcon: h.a,
                  moreIcon: k.a,
                  deleteIcon: C.a,
                  showModal: !1,
                  modalSlideIndex: 0
               }
            },
            props: {
               isPrivateChat: Boolean,
               isTyping: Boolean,
               message: Object,
               setParentMessage: Function
            },
            computed: {
               myProfileId: function () {
                  return this.$store.getters["profile/getProfileId"]
               },
               role: function () {
                  return this.$store.getters["profile/getProfileRole"]
               },
               isSuperAdmin: function () {
                  return "Super Admin" === this.role
               }
            },
            methods: {
               openModal: function (e) {
                  var t = this;
                  this.showModal = !0, this.modalSlideIndex = e, this.$nextTick((function () {
                     t.$bvModal.show("modal-view-attachment-".concat(t.message._id))
                  }))
               },
               scrollToMessage: function () {
                  this.$parent.scrollToMessage(this.message.parentMessage._id)
               },
               fileType: function (e) {
                  return "image/" === e.mime.substr(0, 6) ? "image" : "video/" === e.mime.substr(0, 6) ? "video" : "audio/" === e.mime.substr(0, 6) ? "audio" : "doc"
               },
               goToProfile: function () {
                  this.$router.push({
                     path: "/profiles/".concat(this.message.user.handle)
                  })
               },
               handleOptionsClick: function () {
                  console.log("clicked options menu")
               },
               deleteMessageAdmin: function () {
                  var e = this;
                  return Object(d["a"])(regeneratorRuntime.mark((function t() {
                     return regeneratorRuntime.wrap((function (t) {
                        while (1) switch (t.prev = t.next) {
                           case 0:
                              return t.next = 2, e.$store.dispatch("chat/deleteMessageAdmin", {
                                 conversationId: e.$parent.conversation._id,
                                 messageId: e.message._id
                              });
                           case 2:
                           case "end":
                              return t.stop()
                        }
                     }), t)
                  })))()
               }
            }
         },
         H = z,
         G = (n("eb8e"), Object(F["a"])(H, E, q, !1, null, "63179342", null)),
         W = G.exports,
         V = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("div", {
               staticClass: "chat-detail-header__user",
               on: {
                  click: e.goToProfile
               }
            }, [n("div", {
               staticClass: "chat-detail-header__user-img"
            }, [n("img", {
               staticClass: "user-image clickable",
               attrs: {
                  src: e.conversation.user.picture ? e.conversation.user.picture.formats && e.conversation.user.picture.formats.thumbnial ? e.conversation.user.picture.formats.thumbnial.url : e.conversation.user.picture.url : e.userIcon
               }
            }), e.userOnline ? n("span", {
               staticClass: "user-status user-status--online"
            }) : e._e()]), n("div", [n("div", {
               staticClass: "chat-detail-header__user-title"
            }, [n("p", {
               staticClass: "user-name clickable"
            }, [e._v(" " + e._s(e.conversation.user.title) + " ")]), e._l(e.conversation.user.badges, (function (t) {
               return n("label", {
                  key: t._id,
                  staticClass: "user-badge",
                  staticStyle: {
                     "background-color": "#0A1B57"
                  }
               }, [e._v(e._s(t.title))])
            }))], 2), n("p", {
               staticClass: "chat-detail-header__user-desc"
            }, [e._v(" " + e._s(e.conversation.user.subtitle) + " ")])])])
         },
         Y = [],
         J = n("77f0"),
         K = n.n(J),
         Q = {
            name: "ChatDetailHeader",
            props: {
               conversation: Object
            },
            data: function () {
               return {
                  userIcon: K.a
               }
            },
            computed: {
               userOnline: function () {
                  return this.$store.getters["chat/getUsersOnlineStatus"][this.conversation.user.id]
               }
            },
            methods: {
               goToProfile: function () {
                  this.$router.push({
                     path: "/profiles/".concat(this.conversation.user.handle)
                  })
               }
            }
         },
         Z = Q,
         X = (n("3140"), Object(F["a"])(Z, V, Y, !1, null, "25e2c296", null)),
         ee = X.exports,
         te = function () {
            var e = this,
               t = e.$createElement;
            e._self._c;
            return e._m(0)
         },
         ne = [function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("div", {
               staticClass: "chat-detail-header__user"
            }, [n("div", {
               staticClass: "chat-detail-header__user-img chat-detail-header__user-img--group"
            }, [n("img", {
               staticClass: "user-image",
               attrs: {
                  src: "https://bizfluence-media.nyc3.cdn.digitaloceanspaces.com/9f683c62d2136a2cbd2a147ef97d6cea.jpg"
               }
            }), n("img", {
               staticClass: "user-image",
               attrs: {
                  src: "https://bizfluence-media.nyc3.cdn.digitaloceanspaces.com/949d2dbaf9af78300b4a4b9c645efba9.jpg"
               }
            })]), n("div", [n("div", {
               staticClass: "chat-detail-header__user-title"
            }, [n("p", {
               staticClass: "user-name clickable"
            }, [e._v(" Team Work ")])]), n("p", {
               staticClass: "chat-detail-header__user-desc"
            }, [e._v(" 03 Members ")])])])
         }],
         re = {
            name: "ChatDetailHeaderGroup"
         },
         se = re,
         oe = Object(F["a"])(se, te, ne, !1, null, null, null),
         ie = oe.exports,
         ae = function () {
            var e = this,
               t = e.$createElement,
               n = e._self._c || t;
            return n("div", {
               staticClass: "chat-detail-header__user"
            }, [n("div", {
               staticClass: "chat-detail-header__user-img chat-detail-header__user-img--network"
            }, [n("img", {
               staticClass: "user-image",
               attrs: {
                  src: e.conversation.network.banner ? e.conversation.network.banner.url : e.defaultNetworkGraphic
               }
            })]), n("div", [n("div", {
               staticClass: "chat-detail-header__user-title"
            }, [n("p", {
               staticClass: "user-name clickable"
            }, [e._v(" " + e._s(e.conversation.network.name) + " ")])])])])
         },
         ce = [],
         ue = n("764a"),
         le = n.n(ue),
         de = {
            name: "ChatDetailHeaderNetwork",
            props: {
               conversation: Object
            },
            data: function () {
               return {
                  defaultNetworkGraphic: le.a
               }
            }
         },
         pe = de,
         fe = Object(F["a"])(pe, ae, ce, !1, null, null, null),
         me = fe.exports,
         ge = {
            name: "ChatContent",
            props: {
               isMain: Boolean,
               conversation: Object,
               setParentMessage: Function
            },
            components: {
               ChatDetailHeaderGroup: ie,
               ChatDetailHeaderNetwork: me,
               ChatDetailHeader: ee,
               MessagingSent: N,
               MessagingReceived: W,
               InfiniteLoading: c.a
            },
            data: function () {
               return {
                  topLoading: !1,
                  topComplete: !1,
                  topPreventScroll: !1
               }
            },
            computed: {
               myUserId: function () {
                  return this.$store.getters["profile/getProfileId"]
               },
               allMessages: function () {
                  return this.isMain ? this.$store.getters["chat/getMainConversationMessages"] : this.conversation.messages
               },
               messageGroups: function () {
                  var e = this;
                  return Object(i["groupBy"])(this.allMessages, (function (t) {
                     return e.$moment(t.createdAt).startOf("day").unix()
                  }))
               },
               isOpen: function () {
                  return this.conversation.isOpen
               },
               messagesLength: function () {
                  return this.allMessages.length
               },
               hasUserTyping: function () {
                  if (this.conversation.usersTyping) return !1;
                  for (var e = 0, t = Object.entries(this.conversation.usersTyping); e < t.length; e++) {
                     var n = Object(o["a"])(t[e], 2),
                        r = n[0],
                        s = n[1];
                     if (r !== this.myUserId && s) return !0
                  }
                  return !1
               }
            },
            watch: {
               isOpen: function (e) {
                  e && this.$nextTick(this.scrollToFirstUnread)
               },
               messagesLength: function () {
                  (this.isOpen || this.isMain) && this.$nextTick(this.scrollToFirstUnread)
               }
            },
            updated: function () {},
            created: function () {
               var e = this;
               this.unsubscribe = this.$store.subscribe((function (t) {
                  "chat/setUserTypingInConversation" === t.type && t.payload.chatId === e.conversation._id && e.$forceUpdate()
               }))
            },
            beforeDestroy: function () {
               this.unsubscribe()
            },
            methods: {
               sortMessagesByTime: function (e) {
                  var t = this;
                  return e.sort((function (e, n) {
                     return t.$moment(e.createdAt).unix() - t.$moment(n.createdAt).unix()
                  }))
               },
               scrollToFirstUnread: function () {
                  this.$store.dispatch("chat/visitChat", {
                     conversation: this.conversation
                  });
                  var e = this.sortMessagesByTime(this.allMessages),
                     t = e.find((function (e) {
                        return !e.read && !e.my
                     })),
                     n = this.$refs["messages-wrapper"];
                  if (this.topPreventScroll) {
                     var r = this.$refs["message-".concat(this.topPreventScroll)][0];
                     return n.scrollTo({
                        top: r.offsetTop - 100,
                        behavior: "smooth"
                     }), void(this.topPreventScroll = !1)
                  }
                  if (t) {
                     var s = this.$refs["message-".concat(t._id)][0];
                     n.scrollTo({
                        top: s.offsetTop - 100,
                        behavior: "smooth"
                     })
                  } else this.scrollToBottom()
               },
               scrollToBottom: function () {
                  var e = this.$refs["messages-wrapper"];
                  e.scrollTop = null === e || void 0 === e ? void 0 : e.scrollHeight
               },
               handleScroll: function (e) {
                  e.target.scrollTop <= 100 && Object(i["debounce"])((function () {
                     this.infiniteHandlerTop()
                  }), 100)
               },
               infiniteHandlerTop: function () {
                  var e = this;
                  if (!this.conversation.isNew && this.allMessages.length && !this.topLoading && !this.topComplete) {
                     var t = this.sortMessagesByTime(this.allMessages),
                        n = t[0];
                     this.topLoading = !0, this.topPreventScroll = n._id, this.$store.dispatch("chat/fetch".concat(this.isMain ? "Main" : "Floating", "ConversationMessages"), {
                        conversation: this.conversation,
                        date: n ? n.createdAt : null
                     }).then((function (t) {
                        t && t.length ? e.topLoading = !1 : (e.topLoading = !1, e.topComplete = !0)
                     }))
                  }
               },
               infiniteHandlerBottom: function (e) {
                  var t = this;
                  if (!this.conversation.isNew) {
                     var n = this.sortMessagesByTime(this.allMessages),
                        r = n[n.length - 1];
                     this.$store.dispatch("chat/fetch".concat(this.isMain ? "Main" : "Floating", "ConversationMessages"), {
                        conversation: this.conversation,
                        date: r ? r.createdAt : null,
                        direction: r ? "asc" : "desc"
                     }).then((function (n) {
                        n && n.length ? (r || t.scrollToBottom(), e.loaded()) : e.complete()
                     }))
                  }
               },
               scrollToMessage: function (e) {
                  var t = this.$refs["messages-wrapper"];
                  if (this.$refs["message-".concat(e)]) {
                     var n = this.$refs["message-".concat(e)][0];
                     t.scrollTo({
                        top: n.offsetTop - 100,
                        behavior: "smooth"
                     })
                  } else console.log("message not in view, going to message")
               }
            }
         },
         he = ge,
         ve = (n("c761"), Object(F["a"])(he, r, s, !1, null, "597d1570", null));
      t["a"] = ve.exports
   },
   f5aa: function (e, t, n) {},
   f62f: function (e, t, n) {},
   f69e: function (e, t, n) {
      e.exports = n.p + "img/ic-btn-delete.c7c90f6a.svg"
   },
   fa80: function (e, t, n) {
      "use strict";
      n("287c")
   },
   fa8f: function (e, t, n) {
      "use strict";
      n("850c")
   },
   ff09: function (e, t, n) {
      "use strict";
      n("4546")
   },
   ff10: function (e, t, n) {
      "use strict";
      n("2b9f")
   }
});