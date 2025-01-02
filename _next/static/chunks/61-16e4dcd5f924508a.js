(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [61],
  {
    5607: function (e, t, r) {
      var i = 0 / 0,
        o = /^\s+|\s+$/g,
        a = /^[-+]0x[0-9a-f]+$/i,
        s = /^0b[01]+$/i,
        l = /^0o[0-7]+$/i,
        u = parseInt,
        d = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
        c = "object" == typeof self && self && self.Object === Object && self,
        h = d || c || Function("return this")(),
        p = Object.prototype.toString,
        f = Math.max,
        m = Math.min,
        v = function () {
          return h.Date.now();
        };
      function y(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t);
      }
      function g(e) {
        if ("number" == typeof e) return e;
        if (
          "symbol" == typeof (t = e) ||
          (t && "object" == typeof t && "[object Symbol]" == p.call(t))
        )
          return i;
        if (y(e)) {
          var t,
            r = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = y(r) ? r + "" : r;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(o, "");
        var d = s.test(e);
        return d || l.test(e) ? u(e.slice(2), d ? 2 : 8) : a.test(e) ? i : +e;
      }
      e.exports = function (e, t, r) {
        var i,
          o,
          a,
          s,
          l,
          u,
          d = 0,
          c = !1,
          h = !1,
          p = !0;
        if ("function" != typeof e) throw TypeError("Expected a function");
        function b(t) {
          var r = i,
            a = o;
          return (i = o = void 0), (d = t), (s = e.apply(a, r));
        }
        function _(e) {
          var r = e - u,
            i = e - d;
          return void 0 === u || r >= t || r < 0 || (h && i >= a);
        }
        function w() {
          var e,
            r,
            i,
            o = v();
          if (_(o)) return T(o);
          l = setTimeout(
            w,
            ((e = o - u), (r = o - d), (i = t - e), h ? m(i, a - r) : i)
          );
        }
        function T(e) {
          return ((l = void 0), p && i) ? b(e) : ((i = o = void 0), s);
        }
        function x() {
          var e,
            r = v(),
            a = _(r);
          if (((i = arguments), (o = this), (u = r), a)) {
            if (void 0 === l)
              return (d = e = u), (l = setTimeout(w, t)), c ? b(e) : s;
            if (h) return (l = setTimeout(w, t)), b(u);
          }
          return void 0 === l && (l = setTimeout(w, t)), s;
        }
        return (
          (t = g(t) || 0),
          y(r) &&
            ((c = !!r.leading),
            (a = (h = "maxWait" in r) ? f(g(r.maxWait) || 0, t) : a),
            (p = "trailing" in r ? !!r.trailing : p)),
          (x.cancel = function () {
            void 0 !== l && clearTimeout(l), (d = 0), (i = u = o = l = void 0);
          }),
          (x.flush = function () {
            return void 0 === l ? s : T(v());
          }),
          x
        );
      };
    },
    3664: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = r(2265),
        o = {
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        };
      let a = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        s = (e, t) => {
          let r = (0, i.forwardRef)((r, s) => {
            let {
              color: l = "currentColor",
              size: u = 24,
              strokeWidth: d = 2,
              absoluteStrokeWidth: c,
              className: h = "",
              children: p,
              ...f
            } = r;
            return (0, i.createElement)(
              "svg",
              {
                ref: s,
                ...o,
                width: u,
                height: u,
                stroke: l,
                strokeWidth: c ? (24 * Number(d)) / Number(u) : d,
                className: ["lucide", "lucide-".concat(a(e)), h].join(" "),
                ...f,
              },
              [
                ...t.map((e) => {
                  let [t, r] = e;
                  return (0, i.createElement)(t, r);
                }),
                ...(Array.isArray(p) ? p : [p]),
              ]
            );
          });
          return (r.displayName = "".concat(e)), r;
        };
    },
    6858: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return i;
        },
      });
      let i = (0, r(3664).Z)("ArrowRight", [
        ["path", { d: "M5 12h14", key: "1ays0h" }],
        ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
      ]);
    },
    4972: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return i;
        },
      });
      let i = (0, r(3664).Z)("Brain", [
        [
          "path",
          {
            d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
            key: "l5xja",
          },
        ],
        [
          "path",
          {
            d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",
            key: "ep3f8r",
          },
        ],
        [
          "path",
          { d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4", key: "1p4c4q" },
        ],
        ["path", { d: "M17.599 6.5a3 3 0 0 0 .399-1.375", key: "tmeiqw" }],
        ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5", key: "105sqy" }],
        ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396", key: "ql3yin" }],
        ["path", { d: "M19.938 10.5a4 4 0 0 1 .585.396", key: "1qfode" }],
        ["path", { d: "M6 18a4 4 0 0 1-1.967-.516", key: "2e4loj" }],
        ["path", { d: "M19.967 17.484A4 4 0 0 1 18 18", key: "159ez6" }],
      ]);
    },
    9232: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return i;
        },
      });
      let i = (0, r(3664).Z)("Coins", [
        ["circle", { cx: "8", cy: "8", r: "6", key: "3yglwk" }],
        ["path", { d: "M18.09 10.37A6 6 0 1 1 10.34 18", key: "t5s6rm" }],
        ["path", { d: "M7 6h1v4", key: "1obek4" }],
        ["path", { d: "m16.71 13.88.7.71-2.82 2.82", key: "1rbuyh" }],
      ]);
    },
    6421: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return i;
        },
      });
      let i = (0, r(3664).Z)("Dna", [
        ["path", { d: "M2 15c6.667-6 13.333 0 20-6", key: "1pyr53" }],
        [
          "path",
          { d: "M9 22c1.798-1.998 2.518-3.995 2.807-5.993", key: "q3hbxp" },
        ],
        [
          "path",
          { d: "M15 2c-1.798 1.998-2.518 3.995-2.807 5.993", key: "80uv8i" },
        ],
        ["path", { d: "m17 6-2.5-2.5", key: "5cdfhj" }],
        ["path", { d: "m14 8-1-1", key: "15nbz5" }],
        ["path", { d: "m7 18 2.5 2.5", key: "16tu1a" }],
        ["path", { d: "m3.5 14.5.5.5", key: "hapbhd" }],
        ["path", { d: "m20 9 .5.5", key: "1n7z02" }],
        ["path", { d: "m6.5 12.5 1 1", key: "cs35ky" }],
        ["path", { d: "m16.5 10.5 1 1", key: "696xn5" }],
        ["path", { d: "m10 16 1.5 1.5", key: "11lckj" }],
      ]);
    },
    3506: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return i;
        },
      });
      let i = (0, r(3664).Z)("Microscope", [
        ["path", { d: "M6 18h8", key: "1borvv" }],
        ["path", { d: "M3 22h18", key: "8prr45" }],
        ["path", { d: "M14 22a7 7 0 1 0 0-14h-1", key: "1jwaiy" }],
        ["path", { d: "M9 14h2", key: "197e7h" }],
        [
          "path",
          { d: "M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z", key: "1bmzmy" },
        ],
        [
          "path",
          { d: "M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3", key: "1drr47" },
        ],
      ]);
    },
    257: function (e, t, r) {
      "use strict";
      var i, o;
      e.exports =
        (null == (i = r.g.process) ? void 0 : i.env) &&
        "object" == typeof (null == (o = r.g.process) ? void 0 : o.env)
          ? r.g.process
          : r(4227);
    },
    6434: function (e) {
      !(function () {
        var t = {
            675: function (e, t) {
              "use strict";
              (t.byteLength = function (e) {
                var t = u(e),
                  r = t[0],
                  i = t[1];
                return ((r + i) * 3) / 4 - i;
              }),
                (t.toByteArray = function (e) {
                  var t,
                    r,
                    a = u(e),
                    s = a[0],
                    l = a[1],
                    d = new o(((s + l) * 3) / 4 - l),
                    c = 0,
                    h = l > 0 ? s - 4 : s;
                  for (r = 0; r < h; r += 4)
                    (t =
                      (i[e.charCodeAt(r)] << 18) |
                      (i[e.charCodeAt(r + 1)] << 12) |
                      (i[e.charCodeAt(r + 2)] << 6) |
                      i[e.charCodeAt(r + 3)]),
                      (d[c++] = (t >> 16) & 255),
                      (d[c++] = (t >> 8) & 255),
                      (d[c++] = 255 & t);
                  return (
                    2 === l &&
                      ((t =
                        (i[e.charCodeAt(r)] << 2) |
                        (i[e.charCodeAt(r + 1)] >> 4)),
                      (d[c++] = 255 & t)),
                    1 === l &&
                      ((t =
                        (i[e.charCodeAt(r)] << 10) |
                        (i[e.charCodeAt(r + 1)] << 4) |
                        (i[e.charCodeAt(r + 2)] >> 2)),
                      (d[c++] = (t >> 8) & 255),
                      (d[c++] = 255 & t)),
                    d
                  );
                }),
                (t.fromByteArray = function (e) {
                  for (
                    var t, i = e.length, o = i % 3, a = [], s = 0, l = i - o;
                    s < l;
                    s += 16383
                  )
                    a.push(
                      (function (e, t, i) {
                        for (var o, a = [], s = t; s < i; s += 3)
                          a.push(
                            r[
                              ((o =
                                ((e[s] << 16) & 16711680) +
                                ((e[s + 1] << 8) & 65280) +
                                (255 & e[s + 2])) >>
                                18) &
                                63
                            ] +
                              r[(o >> 12) & 63] +
                              r[(o >> 6) & 63] +
                              r[63 & o]
                          );
                        return a.join("");
                      })(e, s, s + 16383 > l ? l : s + 16383)
                    );
                  return (
                    1 === o
                      ? a.push(r[(t = e[i - 1]) >> 2] + r[(t << 4) & 63] + "==")
                      : 2 === o &&
                        a.push(
                          r[(t = (e[i - 2] << 8) + e[i - 1]) >> 10] +
                            r[(t >> 4) & 63] +
                            r[(t << 2) & 63] +
                            "="
                        ),
                    a.join("")
                  );
                });
              for (
                var r = [],
                  i = [],
                  o = "undefined" != typeof Uint8Array ? Uint8Array : Array,
                  a =
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                  s = 0,
                  l = a.length;
                s < l;
                ++s
              )
                (r[s] = a[s]), (i[a.charCodeAt(s)] = s);
              function u(e) {
                var t = e.length;
                if (t % 4 > 0)
                  throw Error("Invalid string. Length must be a multiple of 4");
                var r = e.indexOf("=");
                -1 === r && (r = t);
                var i = r === t ? 0 : 4 - (r % 4);
                return [r, i];
              }
              (i["-".charCodeAt(0)] = 62), (i["_".charCodeAt(0)] = 63);
            },
            72: function (e, t, r) {
              "use strict";
              var i = r(675),
                o = r(783),
                a =
                  "function" == typeof Symbol && "function" == typeof Symbol.for
                    ? Symbol.for("nodejs.util.inspect.custom")
                    : null;
              function s(e) {
                if (e > 2147483647)
                  throw RangeError(
                    'The value "' + e + '" is invalid for option "size"'
                  );
                var t = new Uint8Array(e);
                return Object.setPrototypeOf(t, l.prototype), t;
              }
              function l(e, t, r) {
                if ("number" == typeof e) {
                  if ("string" == typeof t)
                    throw TypeError(
                      'The "string" argument must be of type string. Received type number'
                    );
                  return c(e);
                }
                return u(e, t, r);
              }
              function u(e, t, r) {
                if ("string" == typeof e)
                  return (function (e, t) {
                    if (
                      (("string" != typeof t || "" === t) && (t = "utf8"),
                      !l.isEncoding(t))
                    )
                      throw TypeError("Unknown encoding: " + t);
                    var r = 0 | f(e, t),
                      i = s(r),
                      o = i.write(e, t);
                    return o !== r && (i = i.slice(0, o)), i;
                  })(e, t);
                if (ArrayBuffer.isView(e)) return h(e);
                if (null == e)
                  throw TypeError(
                    "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                      typeof e
                  );
                if (
                  R(e, ArrayBuffer) ||
                  (e && R(e.buffer, ArrayBuffer)) ||
                  ("undefined" != typeof SharedArrayBuffer &&
                    (R(e, SharedArrayBuffer) ||
                      (e && R(e.buffer, SharedArrayBuffer))))
                )
                  return (function (e, t, r) {
                    var i;
                    if (t < 0 || e.byteLength < t)
                      throw RangeError('"offset" is outside of buffer bounds');
                    if (e.byteLength < t + (r || 0))
                      throw RangeError('"length" is outside of buffer bounds');
                    return (
                      Object.setPrototypeOf(
                        (i =
                          void 0 === t && void 0 === r
                            ? new Uint8Array(e)
                            : void 0 === r
                            ? new Uint8Array(e, t)
                            : new Uint8Array(e, t, r)),
                        l.prototype
                      ),
                      i
                    );
                  })(e, t, r);
                if ("number" == typeof e)
                  throw TypeError(
                    'The "value" argument must not be of type number. Received type number'
                  );
                var i = e.valueOf && e.valueOf();
                if (null != i && i !== e) return l.from(i, t, r);
                var o = (function (e) {
                  if (l.isBuffer(e)) {
                    var t,
                      r = 0 | p(e.length),
                      i = s(r);
                    return 0 === i.length || e.copy(i, 0, 0, r), i;
                  }
                  return void 0 !== e.length
                    ? "number" != typeof e.length || (t = e.length) != t
                      ? s(0)
                      : h(e)
                    : "Buffer" === e.type && Array.isArray(e.data)
                    ? h(e.data)
                    : void 0;
                })(e);
                if (o) return o;
                if (
                  "undefined" != typeof Symbol &&
                  null != Symbol.toPrimitive &&
                  "function" == typeof e[Symbol.toPrimitive]
                )
                  return l.from(e[Symbol.toPrimitive]("string"), t, r);
                throw TypeError(
                  "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                    typeof e
                );
              }
              function d(e) {
                if ("number" != typeof e)
                  throw TypeError('"size" argument must be of type number');
                if (e < 0)
                  throw RangeError(
                    'The value "' + e + '" is invalid for option "size"'
                  );
              }
              function c(e) {
                return d(e), s(e < 0 ? 0 : 0 | p(e));
              }
              function h(e) {
                for (
                  var t = e.length < 0 ? 0 : 0 | p(e.length), r = s(t), i = 0;
                  i < t;
                  i += 1
                )
                  r[i] = 255 & e[i];
                return r;
              }
              function p(e) {
                if (e >= 2147483647)
                  throw RangeError(
                    "Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes"
                  );
                return 0 | e;
              }
              function f(e, t) {
                if (l.isBuffer(e)) return e.length;
                if (ArrayBuffer.isView(e) || R(e, ArrayBuffer))
                  return e.byteLength;
                if ("string" != typeof e)
                  throw TypeError(
                    'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
                      typeof e
                  );
                var r = e.length,
                  i = arguments.length > 2 && !0 === arguments[2];
                if (!i && 0 === r) return 0;
                for (var o = !1; ; )
                  switch (t) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                      return r;
                    case "utf8":
                    case "utf-8":
                      return A(e).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return 2 * r;
                    case "hex":
                      return r >>> 1;
                    case "base64":
                      return P(e).length;
                    default:
                      if (o) return i ? -1 : A(e).length;
                      (t = ("" + t).toLowerCase()), (o = !0);
                  }
              }
              function m(e, t, r) {
                var o,
                  a,
                  s = !1;
                if (
                  ((void 0 === t || t < 0) && (t = 0),
                  t > this.length ||
                    ((void 0 === r || r > this.length) && (r = this.length),
                    r <= 0 || (r >>>= 0) <= (t >>>= 0)))
                )
                  return "";
                for (e || (e = "utf8"); ; )
                  switch (e) {
                    case "hex":
                      return (function (e, t, r) {
                        var i = e.length;
                        (!t || t < 0) && (t = 0),
                          (!r || r < 0 || r > i) && (r = i);
                        for (var o = "", a = t; a < r; ++a) o += L[e[a]];
                        return o;
                      })(this, t, r);
                    case "utf8":
                    case "utf-8":
                      return b(this, t, r);
                    case "ascii":
                      return (function (e, t, r) {
                        var i = "";
                        r = Math.min(e.length, r);
                        for (var o = t; o < r; ++o)
                          i += String.fromCharCode(127 & e[o]);
                        return i;
                      })(this, t, r);
                    case "latin1":
                    case "binary":
                      return (function (e, t, r) {
                        var i = "";
                        r = Math.min(e.length, r);
                        for (var o = t; o < r; ++o)
                          i += String.fromCharCode(e[o]);
                        return i;
                      })(this, t, r);
                    case "base64":
                      return (
                        (o = t),
                        (a = r),
                        0 === o && a === this.length
                          ? i.fromByteArray(this)
                          : i.fromByteArray(this.slice(o, a))
                      );
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return (function (e, t, r) {
                        for (
                          var i = e.slice(t, r), o = "", a = 0;
                          a < i.length;
                          a += 2
                        )
                          o += String.fromCharCode(i[a] + 256 * i[a + 1]);
                        return o;
                      })(this, t, r);
                    default:
                      if (s) throw TypeError("Unknown encoding: " + e);
                      (e = (e + "").toLowerCase()), (s = !0);
                  }
              }
              function v(e, t, r) {
                var i = e[t];
                (e[t] = e[r]), (e[r] = i);
              }
              function y(e, t, r, i, o) {
                var a;
                if (0 === e.length) return -1;
                if (
                  ("string" == typeof r
                    ? ((i = r), (r = 0))
                    : r > 2147483647
                    ? (r = 2147483647)
                    : r < -2147483648 && (r = -2147483648),
                  (a = r = +r) != a && (r = o ? 0 : e.length - 1),
                  r < 0 && (r = e.length + r),
                  r >= e.length)
                ) {
                  if (o) return -1;
                  r = e.length - 1;
                } else if (r < 0) {
                  if (!o) return -1;
                  r = 0;
                }
                if (("string" == typeof t && (t = l.from(t, i)), l.isBuffer(t)))
                  return 0 === t.length ? -1 : g(e, t, r, i, o);
                if ("number" == typeof t)
                  return ((t &= 255),
                  "function" == typeof Uint8Array.prototype.indexOf)
                    ? o
                      ? Uint8Array.prototype.indexOf.call(e, t, r)
                      : Uint8Array.prototype.lastIndexOf.call(e, t, r)
                    : g(e, [t], r, i, o);
                throw TypeError("val must be string, number or Buffer");
              }
              function g(e, t, r, i, o) {
                var a,
                  s = 1,
                  l = e.length,
                  u = t.length;
                if (
                  void 0 !== i &&
                  ("ucs2" === (i = String(i).toLowerCase()) ||
                    "ucs-2" === i ||
                    "utf16le" === i ||
                    "utf-16le" === i)
                ) {
                  if (e.length < 2 || t.length < 2) return -1;
                  (s = 2), (l /= 2), (u /= 2), (r /= 2);
                }
                function d(e, t) {
                  return 1 === s ? e[t] : e.readUInt16BE(t * s);
                }
                if (o) {
                  var c = -1;
                  for (a = r; a < l; a++)
                    if (d(e, a) === d(t, -1 === c ? 0 : a - c)) {
                      if ((-1 === c && (c = a), a - c + 1 === u)) return c * s;
                    } else -1 !== c && (a -= a - c), (c = -1);
                } else
                  for (r + u > l && (r = l - u), a = r; a >= 0; a--) {
                    for (var h = !0, p = 0; p < u; p++)
                      if (d(e, a + p) !== d(t, p)) {
                        h = !1;
                        break;
                      }
                    if (h) return a;
                  }
                return -1;
              }
              function b(e, t, r) {
                r = Math.min(e.length, r);
                for (var i = [], o = t; o < r; ) {
                  var a,
                    s,
                    l,
                    u,
                    d = e[o],
                    c = null,
                    h = d > 239 ? 4 : d > 223 ? 3 : d > 191 ? 2 : 1;
                  if (o + h <= r)
                    switch (h) {
                      case 1:
                        d < 128 && (c = d);
                        break;
                      case 2:
                        (192 & (a = e[o + 1])) == 128 &&
                          (u = ((31 & d) << 6) | (63 & a)) > 127 &&
                          (c = u);
                        break;
                      case 3:
                        (a = e[o + 1]),
                          (s = e[o + 2]),
                          (192 & a) == 128 &&
                            (192 & s) == 128 &&
                            (u =
                              ((15 & d) << 12) | ((63 & a) << 6) | (63 & s)) >
                              2047 &&
                            (u < 55296 || u > 57343) &&
                            (c = u);
                        break;
                      case 4:
                        (a = e[o + 1]),
                          (s = e[o + 2]),
                          (l = e[o + 3]),
                          (192 & a) == 128 &&
                            (192 & s) == 128 &&
                            (192 & l) == 128 &&
                            (u =
                              ((15 & d) << 18) |
                              ((63 & a) << 12) |
                              ((63 & s) << 6) |
                              (63 & l)) > 65535 &&
                            u < 1114112 &&
                            (c = u);
                    }
                  null === c
                    ? ((c = 65533), (h = 1))
                    : c > 65535 &&
                      ((c -= 65536),
                      i.push(((c >>> 10) & 1023) | 55296),
                      (c = 56320 | (1023 & c))),
                    i.push(c),
                    (o += h);
                }
                return (function (e) {
                  var t = e.length;
                  if (t <= 4096) return String.fromCharCode.apply(String, e);
                  for (var r = "", i = 0; i < t; )
                    r += String.fromCharCode.apply(
                      String,
                      e.slice(i, (i += 4096))
                    );
                  return r;
                })(i);
              }
              function _(e, t, r) {
                if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
                if (e + t > r)
                  throw RangeError("Trying to access beyond buffer length");
              }
              function w(e, t, r, i, o, a) {
                if (!l.isBuffer(e))
                  throw TypeError(
                    '"buffer" argument must be a Buffer instance'
                  );
                if (t > o || t < a)
                  throw RangeError('"value" argument is out of bounds');
                if (r + i > e.length) throw RangeError("Index out of range");
              }
              function T(e, t, r, i, o, a) {
                if (r + i > e.length || r < 0)
                  throw RangeError("Index out of range");
              }
              function x(e, t, r, i, a) {
                return (
                  (t = +t),
                  (r >>>= 0),
                  a ||
                    T(e, t, r, 4, 34028234663852886e22, -34028234663852886e22),
                  o.write(e, t, r, i, 23, 4),
                  r + 4
                );
              }
              function E(e, t, r, i, a) {
                return (
                  (t = +t),
                  (r >>>= 0),
                  a ||
                    T(
                      e,
                      t,
                      r,
                      8,
                      17976931348623157e292,
                      -17976931348623157e292
                    ),
                  o.write(e, t, r, i, 52, 8),
                  r + 8
                );
              }
              (t.Buffer = l),
                (t.SlowBuffer = function (e) {
                  return +e != e && (e = 0), l.alloc(+e);
                }),
                (t.INSPECT_MAX_BYTES = 50),
                (t.kMaxLength = 2147483647),
                (l.TYPED_ARRAY_SUPPORT = (function () {
                  try {
                    var e = new Uint8Array(1),
                      t = {
                        foo: function () {
                          return 42;
                        },
                      };
                    return (
                      Object.setPrototypeOf(t, Uint8Array.prototype),
                      Object.setPrototypeOf(e, t),
                      42 === e.foo()
                    );
                  } catch (e) {
                    return !1;
                  }
                })()),
                l.TYPED_ARRAY_SUPPORT ||
                  "undefined" == typeof console ||
                  "function" != typeof console.error ||
                  console.error(
                    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
                  ),
                Object.defineProperty(l.prototype, "parent", {
                  enumerable: !0,
                  get: function () {
                    if (l.isBuffer(this)) return this.buffer;
                  },
                }),
                Object.defineProperty(l.prototype, "offset", {
                  enumerable: !0,
                  get: function () {
                    if (l.isBuffer(this)) return this.byteOffset;
                  },
                }),
                (l.poolSize = 8192),
                (l.from = function (e, t, r) {
                  return u(e, t, r);
                }),
                Object.setPrototypeOf(l.prototype, Uint8Array.prototype),
                Object.setPrototypeOf(l, Uint8Array),
                (l.alloc = function (e, t, r) {
                  return (d(e), e <= 0)
                    ? s(e)
                    : void 0 !== t
                    ? "string" == typeof r
                      ? s(e).fill(t, r)
                      : s(e).fill(t)
                    : s(e);
                }),
                (l.allocUnsafe = function (e) {
                  return c(e);
                }),
                (l.allocUnsafeSlow = function (e) {
                  return c(e);
                }),
                (l.isBuffer = function (e) {
                  return null != e && !0 === e._isBuffer && e !== l.prototype;
                }),
                (l.compare = function (e, t) {
                  if (
                    (R(e, Uint8Array) &&
                      (e = l.from(e, e.offset, e.byteLength)),
                    R(t, Uint8Array) && (t = l.from(t, t.offset, t.byteLength)),
                    !l.isBuffer(e) || !l.isBuffer(t))
                  )
                    throw TypeError(
                      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
                    );
                  if (e === t) return 0;
                  for (
                    var r = e.length, i = t.length, o = 0, a = Math.min(r, i);
                    o < a;
                    ++o
                  )
                    if (e[o] !== t[o]) {
                      (r = e[o]), (i = t[o]);
                      break;
                    }
                  return r < i ? -1 : i < r ? 1 : 0;
                }),
                (l.isEncoding = function (e) {
                  switch (String(e).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return !0;
                    default:
                      return !1;
                  }
                }),
                (l.concat = function (e, t) {
                  if (!Array.isArray(e))
                    throw TypeError(
                      '"list" argument must be an Array of Buffers'
                    );
                  if (0 === e.length) return l.alloc(0);
                  if (void 0 === t)
                    for (r = 0, t = 0; r < e.length; ++r) t += e[r].length;
                  var r,
                    i = l.allocUnsafe(t),
                    o = 0;
                  for (r = 0; r < e.length; ++r) {
                    var a = e[r];
                    if ((R(a, Uint8Array) && (a = l.from(a)), !l.isBuffer(a)))
                      throw TypeError(
                        '"list" argument must be an Array of Buffers'
                      );
                    a.copy(i, o), (o += a.length);
                  }
                  return i;
                }),
                (l.byteLength = f),
                (l.prototype._isBuffer = !0),
                (l.prototype.swap16 = function () {
                  var e = this.length;
                  if (e % 2 != 0)
                    throw RangeError(
                      "Buffer size must be a multiple of 16-bits"
                    );
                  for (var t = 0; t < e; t += 2) v(this, t, t + 1);
                  return this;
                }),
                (l.prototype.swap32 = function () {
                  var e = this.length;
                  if (e % 4 != 0)
                    throw RangeError(
                      "Buffer size must be a multiple of 32-bits"
                    );
                  for (var t = 0; t < e; t += 4)
                    v(this, t, t + 3), v(this, t + 1, t + 2);
                  return this;
                }),
                (l.prototype.swap64 = function () {
                  var e = this.length;
                  if (e % 8 != 0)
                    throw RangeError(
                      "Buffer size must be a multiple of 64-bits"
                    );
                  for (var t = 0; t < e; t += 8)
                    v(this, t, t + 7),
                      v(this, t + 1, t + 6),
                      v(this, t + 2, t + 5),
                      v(this, t + 3, t + 4);
                  return this;
                }),
                (l.prototype.toString = function () {
                  var e = this.length;
                  return 0 === e
                    ? ""
                    : 0 == arguments.length
                    ? b(this, 0, e)
                    : m.apply(this, arguments);
                }),
                (l.prototype.toLocaleString = l.prototype.toString),
                (l.prototype.equals = function (e) {
                  if (!l.isBuffer(e))
                    throw TypeError("Argument must be a Buffer");
                  return this === e || 0 === l.compare(this, e);
                }),
                (l.prototype.inspect = function () {
                  var e = "",
                    r = t.INSPECT_MAX_BYTES;
                  return (
                    (e = this.toString("hex", 0, r)
                      .replace(/(.{2})/g, "$1 ")
                      .trim()),
                    this.length > r && (e += " ... "),
                    "<Buffer " + e + ">"
                  );
                }),
                a && (l.prototype[a] = l.prototype.inspect),
                (l.prototype.compare = function (e, t, r, i, o) {
                  if (
                    (R(e, Uint8Array) &&
                      (e = l.from(e, e.offset, e.byteLength)),
                    !l.isBuffer(e))
                  )
                    throw TypeError(
                      'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                        typeof e
                    );
                  if (
                    (void 0 === t && (t = 0),
                    void 0 === r && (r = e ? e.length : 0),
                    void 0 === i && (i = 0),
                    void 0 === o && (o = this.length),
                    t < 0 || r > e.length || i < 0 || o > this.length)
                  )
                    throw RangeError("out of range index");
                  if (i >= o && t >= r) return 0;
                  if (i >= o) return -1;
                  if (t >= r) return 1;
                  if (
                    ((t >>>= 0), (r >>>= 0), (i >>>= 0), (o >>>= 0), this === e)
                  )
                    return 0;
                  for (
                    var a = o - i,
                      s = r - t,
                      u = Math.min(a, s),
                      d = this.slice(i, o),
                      c = e.slice(t, r),
                      h = 0;
                    h < u;
                    ++h
                  )
                    if (d[h] !== c[h]) {
                      (a = d[h]), (s = c[h]);
                      break;
                    }
                  return a < s ? -1 : s < a ? 1 : 0;
                }),
                (l.prototype.includes = function (e, t, r) {
                  return -1 !== this.indexOf(e, t, r);
                }),
                (l.prototype.indexOf = function (e, t, r) {
                  return y(this, e, t, r, !0);
                }),
                (l.prototype.lastIndexOf = function (e, t, r) {
                  return y(this, e, t, r, !1);
                }),
                (l.prototype.write = function (e, t, r, i) {
                  if (void 0 === t) (i = "utf8"), (r = this.length), (t = 0);
                  else if (void 0 === r && "string" == typeof t)
                    (i = t), (r = this.length), (t = 0);
                  else if (isFinite(t))
                    (t >>>= 0),
                      isFinite(r)
                        ? ((r >>>= 0), void 0 === i && (i = "utf8"))
                        : ((i = r), (r = void 0));
                  else
                    throw Error(
                      "Buffer.write(string, encoding, offset[, length]) is no longer supported"
                    );
                  var o,
                    a,
                    s,
                    l,
                    u,
                    d,
                    c,
                    h,
                    p,
                    f,
                    m,
                    v,
                    y = this.length - t;
                  if (
                    ((void 0 === r || r > y) && (r = y),
                    (e.length > 0 && (r < 0 || t < 0)) || t > this.length)
                  )
                    throw RangeError("Attempt to write outside buffer bounds");
                  i || (i = "utf8");
                  for (var g = !1; ; )
                    switch (i) {
                      case "hex":
                        return (function (e, t, r, i) {
                          r = Number(r) || 0;
                          var o = e.length - r;
                          i ? (i = Number(i)) > o && (i = o) : (i = o);
                          var a = t.length;
                          i > a / 2 && (i = a / 2);
                          for (var s = 0; s < i; ++s) {
                            var l = parseInt(t.substr(2 * s, 2), 16);
                            if (l != l) break;
                            e[r + s] = l;
                          }
                          return s;
                        })(this, e, t, r);
                      case "utf8":
                      case "utf-8":
                        return (
                          (u = t), (d = r), D(A(e, this.length - u), this, u, d)
                        );
                      case "ascii":
                        return (c = t), (h = r), D(S(e), this, c, h);
                      case "latin1":
                      case "binary":
                        return (
                          (o = this),
                          (a = e),
                          (s = t),
                          (l = r),
                          D(S(a), o, s, l)
                        );
                      case "base64":
                        return (p = t), (f = r), D(P(e), this, p, f);
                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        return (
                          (m = t),
                          (v = r),
                          D(
                            (function (e, t) {
                              for (
                                var r, i, o = [], a = 0;
                                a < e.length && !((t -= 2) < 0);
                                ++a
                              )
                                (i = (r = e.charCodeAt(a)) >> 8),
                                  o.push(r % 256),
                                  o.push(i);
                              return o;
                            })(e, this.length - m),
                            this,
                            m,
                            v
                          )
                        );
                      default:
                        if (g) throw TypeError("Unknown encoding: " + i);
                        (i = ("" + i).toLowerCase()), (g = !0);
                    }
                }),
                (l.prototype.toJSON = function () {
                  return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0),
                  };
                }),
                (l.prototype.slice = function (e, t) {
                  var r = this.length;
                  (e = ~~e),
                    (t = void 0 === t ? r : ~~t),
                    e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
                    t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
                    t < e && (t = e);
                  var i = this.subarray(e, t);
                  return Object.setPrototypeOf(i, l.prototype), i;
                }),
                (l.prototype.readUIntLE = function (e, t, r) {
                  (e >>>= 0), (t >>>= 0), r || _(e, t, this.length);
                  for (var i = this[e], o = 1, a = 0; ++a < t && (o *= 256); )
                    i += this[e + a] * o;
                  return i;
                }),
                (l.prototype.readUIntBE = function (e, t, r) {
                  (e >>>= 0), (t >>>= 0), r || _(e, t, this.length);
                  for (var i = this[e + --t], o = 1; t > 0 && (o *= 256); )
                    i += this[e + --t] * o;
                  return i;
                }),
                (l.prototype.readUInt8 = function (e, t) {
                  return (e >>>= 0), t || _(e, 1, this.length), this[e];
                }),
                (l.prototype.readUInt16LE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || _(e, 2, this.length),
                    this[e] | (this[e + 1] << 8)
                  );
                }),
                (l.prototype.readUInt16BE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || _(e, 2, this.length),
                    (this[e] << 8) | this[e + 1]
                  );
                }),
                (l.prototype.readUInt32LE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || _(e, 4, this.length),
                    (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
                      16777216 * this[e + 3]
                  );
                }),
                (l.prototype.readUInt32BE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || _(e, 4, this.length),
                    16777216 * this[e] +
                      ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
                  );
                }),
                (l.prototype.readIntLE = function (e, t, r) {
                  (e >>>= 0), (t >>>= 0), r || _(e, t, this.length);
                  for (var i = this[e], o = 1, a = 0; ++a < t && (o *= 256); )
                    i += this[e + a] * o;
                  return i >= (o *= 128) && (i -= Math.pow(2, 8 * t)), i;
                }),
                (l.prototype.readIntBE = function (e, t, r) {
                  (e >>>= 0), (t >>>= 0), r || _(e, t, this.length);
                  for (
                    var i = t, o = 1, a = this[e + --i];
                    i > 0 && (o *= 256);

                  )
                    a += this[e + --i] * o;
                  return a >= (o *= 128) && (a -= Math.pow(2, 8 * t)), a;
                }),
                (l.prototype.readInt8 = function (e, t) {
                  return ((e >>>= 0), t || _(e, 1, this.length), 128 & this[e])
                    ? -((255 - this[e] + 1) * 1)
                    : this[e];
                }),
                (l.prototype.readInt16LE = function (e, t) {
                  (e >>>= 0), t || _(e, 2, this.length);
                  var r = this[e] | (this[e + 1] << 8);
                  return 32768 & r ? 4294901760 | r : r;
                }),
                (l.prototype.readInt16BE = function (e, t) {
                  (e >>>= 0), t || _(e, 2, this.length);
                  var r = this[e + 1] | (this[e] << 8);
                  return 32768 & r ? 4294901760 | r : r;
                }),
                (l.prototype.readInt32LE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || _(e, 4, this.length),
                    this[e] |
                      (this[e + 1] << 8) |
                      (this[e + 2] << 16) |
                      (this[e + 3] << 24)
                  );
                }),
                (l.prototype.readInt32BE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || _(e, 4, this.length),
                    (this[e] << 24) |
                      (this[e + 1] << 16) |
                      (this[e + 2] << 8) |
                      this[e + 3]
                  );
                }),
                (l.prototype.readFloatLE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || _(e, 4, this.length),
                    o.read(this, e, !0, 23, 4)
                  );
                }),
                (l.prototype.readFloatBE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || _(e, 4, this.length),
                    o.read(this, e, !1, 23, 4)
                  );
                }),
                (l.prototype.readDoubleLE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || _(e, 8, this.length),
                    o.read(this, e, !0, 52, 8)
                  );
                }),
                (l.prototype.readDoubleBE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || _(e, 8, this.length),
                    o.read(this, e, !1, 52, 8)
                  );
                }),
                (l.prototype.writeUIntLE = function (e, t, r, i) {
                  if (((e = +e), (t >>>= 0), (r >>>= 0), !i)) {
                    var o = Math.pow(2, 8 * r) - 1;
                    w(this, e, t, r, o, 0);
                  }
                  var a = 1,
                    s = 0;
                  for (this[t] = 255 & e; ++s < r && (a *= 256); )
                    this[t + s] = (e / a) & 255;
                  return t + r;
                }),
                (l.prototype.writeUIntBE = function (e, t, r, i) {
                  if (((e = +e), (t >>>= 0), (r >>>= 0), !i)) {
                    var o = Math.pow(2, 8 * r) - 1;
                    w(this, e, t, r, o, 0);
                  }
                  var a = r - 1,
                    s = 1;
                  for (this[t + a] = 255 & e; --a >= 0 && (s *= 256); )
                    this[t + a] = (e / s) & 255;
                  return t + r;
                }),
                (l.prototype.writeUInt8 = function (e, t, r) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    r || w(this, e, t, 1, 255, 0),
                    (this[t] = 255 & e),
                    t + 1
                  );
                }),
                (l.prototype.writeUInt16LE = function (e, t, r) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    r || w(this, e, t, 2, 65535, 0),
                    (this[t] = 255 & e),
                    (this[t + 1] = e >>> 8),
                    t + 2
                  );
                }),
                (l.prototype.writeUInt16BE = function (e, t, r) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    r || w(this, e, t, 2, 65535, 0),
                    (this[t] = e >>> 8),
                    (this[t + 1] = 255 & e),
                    t + 2
                  );
                }),
                (l.prototype.writeUInt32LE = function (e, t, r) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    r || w(this, e, t, 4, 4294967295, 0),
                    (this[t + 3] = e >>> 24),
                    (this[t + 2] = e >>> 16),
                    (this[t + 1] = e >>> 8),
                    (this[t] = 255 & e),
                    t + 4
                  );
                }),
                (l.prototype.writeUInt32BE = function (e, t, r) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    r || w(this, e, t, 4, 4294967295, 0),
                    (this[t] = e >>> 24),
                    (this[t + 1] = e >>> 16),
                    (this[t + 2] = e >>> 8),
                    (this[t + 3] = 255 & e),
                    t + 4
                  );
                }),
                (l.prototype.writeIntLE = function (e, t, r, i) {
                  if (((e = +e), (t >>>= 0), !i)) {
                    var o = Math.pow(2, 8 * r - 1);
                    w(this, e, t, r, o - 1, -o);
                  }
                  var a = 0,
                    s = 1,
                    l = 0;
                  for (this[t] = 255 & e; ++a < r && (s *= 256); )
                    e < 0 && 0 === l && 0 !== this[t + a - 1] && (l = 1),
                      (this[t + a] = (((e / s) >> 0) - l) & 255);
                  return t + r;
                }),
                (l.prototype.writeIntBE = function (e, t, r, i) {
                  if (((e = +e), (t >>>= 0), !i)) {
                    var o = Math.pow(2, 8 * r - 1);
                    w(this, e, t, r, o - 1, -o);
                  }
                  var a = r - 1,
                    s = 1,
                    l = 0;
                  for (this[t + a] = 255 & e; --a >= 0 && (s *= 256); )
                    e < 0 && 0 === l && 0 !== this[t + a + 1] && (l = 1),
                      (this[t + a] = (((e / s) >> 0) - l) & 255);
                  return t + r;
                }),
                (l.prototype.writeInt8 = function (e, t, r) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    r || w(this, e, t, 1, 127, -128),
                    e < 0 && (e = 255 + e + 1),
                    (this[t] = 255 & e),
                    t + 1
                  );
                }),
                (l.prototype.writeInt16LE = function (e, t, r) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    r || w(this, e, t, 2, 32767, -32768),
                    (this[t] = 255 & e),
                    (this[t + 1] = e >>> 8),
                    t + 2
                  );
                }),
                (l.prototype.writeInt16BE = function (e, t, r) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    r || w(this, e, t, 2, 32767, -32768),
                    (this[t] = e >>> 8),
                    (this[t + 1] = 255 & e),
                    t + 2
                  );
                }),
                (l.prototype.writeInt32LE = function (e, t, r) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    r || w(this, e, t, 4, 2147483647, -2147483648),
                    (this[t] = 255 & e),
                    (this[t + 1] = e >>> 8),
                    (this[t + 2] = e >>> 16),
                    (this[t + 3] = e >>> 24),
                    t + 4
                  );
                }),
                (l.prototype.writeInt32BE = function (e, t, r) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    r || w(this, e, t, 4, 2147483647, -2147483648),
                    e < 0 && (e = 4294967295 + e + 1),
                    (this[t] = e >>> 24),
                    (this[t + 1] = e >>> 16),
                    (this[t + 2] = e >>> 8),
                    (this[t + 3] = 255 & e),
                    t + 4
                  );
                }),
                (l.prototype.writeFloatLE = function (e, t, r) {
                  return x(this, e, t, !0, r);
                }),
                (l.prototype.writeFloatBE = function (e, t, r) {
                  return x(this, e, t, !1, r);
                }),
                (l.prototype.writeDoubleLE = function (e, t, r) {
                  return E(this, e, t, !0, r);
                }),
                (l.prototype.writeDoubleBE = function (e, t, r) {
                  return E(this, e, t, !1, r);
                }),
                (l.prototype.copy = function (e, t, r, i) {
                  if (!l.isBuffer(e))
                    throw TypeError("argument should be a Buffer");
                  if (
                    (r || (r = 0),
                    i || 0 === i || (i = this.length),
                    t >= e.length && (t = e.length),
                    t || (t = 0),
                    i > 0 && i < r && (i = r),
                    i === r || 0 === e.length || 0 === this.length)
                  )
                    return 0;
                  if (t < 0) throw RangeError("targetStart out of bounds");
                  if (r < 0 || r >= this.length)
                    throw RangeError("Index out of range");
                  if (i < 0) throw RangeError("sourceEnd out of bounds");
                  i > this.length && (i = this.length),
                    e.length - t < i - r && (i = e.length - t + r);
                  var o = i - r;
                  if (
                    this === e &&
                    "function" == typeof Uint8Array.prototype.copyWithin
                  )
                    this.copyWithin(t, r, i);
                  else if (this === e && r < t && t < i)
                    for (var a = o - 1; a >= 0; --a) e[a + t] = this[a + r];
                  else Uint8Array.prototype.set.call(e, this.subarray(r, i), t);
                  return o;
                }),
                (l.prototype.fill = function (e, t, r, i) {
                  if ("string" == typeof e) {
                    if (
                      ("string" == typeof t
                        ? ((i = t), (t = 0), (r = this.length))
                        : "string" == typeof r && ((i = r), (r = this.length)),
                      void 0 !== i && "string" != typeof i)
                    )
                      throw TypeError("encoding must be a string");
                    if ("string" == typeof i && !l.isEncoding(i))
                      throw TypeError("Unknown encoding: " + i);
                    if (1 === e.length) {
                      var o,
                        a = e.charCodeAt(0);
                      (("utf8" === i && a < 128) || "latin1" === i) && (e = a);
                    }
                  } else
                    "number" == typeof e
                      ? (e &= 255)
                      : "boolean" == typeof e && (e = Number(e));
                  if (t < 0 || this.length < t || this.length < r)
                    throw RangeError("Out of range index");
                  if (r <= t) return this;
                  if (
                    ((t >>>= 0),
                    (r = void 0 === r ? this.length : r >>> 0),
                    e || (e = 0),
                    "number" == typeof e)
                  )
                    for (o = t; o < r; ++o) this[o] = e;
                  else {
                    var s = l.isBuffer(e) ? e : l.from(e, i),
                      u = s.length;
                    if (0 === u)
                      throw TypeError(
                        'The value "' + e + '" is invalid for argument "value"'
                      );
                    for (o = 0; o < r - t; ++o) this[o + t] = s[o % u];
                  }
                  return this;
                });
              var k = /[^+/0-9A-Za-z-_]/g;
              function A(e, t) {
                t = t || 1 / 0;
                for (var r, i = e.length, o = null, a = [], s = 0; s < i; ++s) {
                  if ((r = e.charCodeAt(s)) > 55295 && r < 57344) {
                    if (!o) {
                      if (r > 56319 || s + 1 === i) {
                        (t -= 3) > -1 && a.push(239, 191, 189);
                        continue;
                      }
                      o = r;
                      continue;
                    }
                    if (r < 56320) {
                      (t -= 3) > -1 && a.push(239, 191, 189), (o = r);
                      continue;
                    }
                    r = (((o - 55296) << 10) | (r - 56320)) + 65536;
                  } else o && (t -= 3) > -1 && a.push(239, 191, 189);
                  if (((o = null), r < 128)) {
                    if ((t -= 1) < 0) break;
                    a.push(r);
                  } else if (r < 2048) {
                    if ((t -= 2) < 0) break;
                    a.push((r >> 6) | 192, (63 & r) | 128);
                  } else if (r < 65536) {
                    if ((t -= 3) < 0) break;
                    a.push(
                      (r >> 12) | 224,
                      ((r >> 6) & 63) | 128,
                      (63 & r) | 128
                    );
                  } else if (r < 1114112) {
                    if ((t -= 4) < 0) break;
                    a.push(
                      (r >> 18) | 240,
                      ((r >> 12) & 63) | 128,
                      ((r >> 6) & 63) | 128,
                      (63 & r) | 128
                    );
                  } else throw Error("Invalid code point");
                }
                return a;
              }
              function S(e) {
                for (var t = [], r = 0; r < e.length; ++r)
                  t.push(255 & e.charCodeAt(r));
                return t;
              }
              function P(e) {
                return i.toByteArray(
                  (function (e) {
                    if (
                      (e = (e = e.split("=")[0]).trim().replace(k, "")).length <
                      2
                    )
                      return "";
                    for (; e.length % 4 != 0; ) e += "=";
                    return e;
                  })(e)
                );
              }
              function D(e, t, r, i) {
                for (
                  var o = 0;
                  o < i && !(o + r >= t.length) && !(o >= e.length);
                  ++o
                )
                  t[o + r] = e[o];
                return o;
              }
              function R(e, t) {
                return (
                  e instanceof t ||
                  (null != e &&
                    null != e.constructor &&
                    null != e.constructor.name &&
                    e.constructor.name === t.name)
                );
              }
              var L = (function () {
                for (
                  var e = "0123456789abcdef", t = Array(256), r = 0;
                  r < 16;
                  ++r
                )
                  for (var i = 16 * r, o = 0; o < 16; ++o)
                    t[i + o] = e[r] + e[o];
                return t;
              })();
            },
            783: function (e, t) {
              (t.read = function (e, t, r, i, o) {
                var a,
                  s,
                  l = 8 * o - i - 1,
                  u = (1 << l) - 1,
                  d = u >> 1,
                  c = -7,
                  h = r ? o - 1 : 0,
                  p = r ? -1 : 1,
                  f = e[t + h];
                for (
                  h += p, a = f & ((1 << -c) - 1), f >>= -c, c += l;
                  c > 0;
                  a = 256 * a + e[t + h], h += p, c -= 8
                );
                for (
                  s = a & ((1 << -c) - 1), a >>= -c, c += i;
                  c > 0;
                  s = 256 * s + e[t + h], h += p, c -= 8
                );
                if (0 === a) a = 1 - d;
                else {
                  if (a === u) return s ? NaN : (1 / 0) * (f ? -1 : 1);
                  (s += Math.pow(2, i)), (a -= d);
                }
                return (f ? -1 : 1) * s * Math.pow(2, a - i);
              }),
                (t.write = function (e, t, r, i, o, a) {
                  var s,
                    l,
                    u,
                    d = 8 * a - o - 1,
                    c = (1 << d) - 1,
                    h = c >> 1,
                    p = 23 === o ? 5960464477539062e-23 : 0,
                    f = i ? 0 : a - 1,
                    m = i ? 1 : -1,
                    v = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
                  for (
                    isNaN((t = Math.abs(t))) || t === 1 / 0
                      ? ((l = isNaN(t) ? 1 : 0), (s = c))
                      : ((s = Math.floor(Math.log(t) / Math.LN2)),
                        t * (u = Math.pow(2, -s)) < 1 && (s--, (u *= 2)),
                        s + h >= 1
                          ? (t += p / u)
                          : (t += p * Math.pow(2, 1 - h)),
                        t * u >= 2 && (s++, (u /= 2)),
                        s + h >= c
                          ? ((l = 0), (s = c))
                          : s + h >= 1
                          ? ((l = (t * u - 1) * Math.pow(2, o)), (s += h))
                          : ((l = t * Math.pow(2, h - 1) * Math.pow(2, o)),
                            (s = 0)));
                    o >= 8;
                    e[r + f] = 255 & l, f += m, l /= 256, o -= 8
                  );
                  for (
                    s = (s << o) | l, d += o;
                    d > 0;
                    e[r + f] = 255 & s, f += m, s /= 256, d -= 8
                  );
                  e[r + f - m] |= 128 * v;
                });
            },
          },
          r = {};
        function i(e) {
          var o = r[e];
          if (void 0 !== o) return o.exports;
          var a = (r[e] = { exports: {} }),
            s = !0;
          try {
            t[e](a, a.exports, i), (s = !1);
          } finally {
            s && delete r[e];
          }
          return a.exports;
        }
        i.ab = "//";
        var o = i(72);
        e.exports = o;
      })();
    },
    4227: function (e) {
      !(function () {
        var t = {
            229: function (e) {
              var t,
                r,
                i,
                o = (e.exports = {});
              function a() {
                throw Error("setTimeout has not been defined");
              }
              function s() {
                throw Error("clearTimeout has not been defined");
              }
              function l(e) {
                if (t === setTimeout) return setTimeout(e, 0);
                if ((t === a || !t) && setTimeout)
                  return (t = setTimeout), setTimeout(e, 0);
                try {
                  return t(e, 0);
                } catch (r) {
                  try {
                    return t.call(null, e, 0);
                  } catch (r) {
                    return t.call(this, e, 0);
                  }
                }
              }
              !(function () {
                try {
                  t = "function" == typeof setTimeout ? setTimeout : a;
                } catch (e) {
                  t = a;
                }
                try {
                  r = "function" == typeof clearTimeout ? clearTimeout : s;
                } catch (e) {
                  r = s;
                }
              })();
              var u = [],
                d = !1,
                c = -1;
              function h() {
                d &&
                  i &&
                  ((d = !1),
                  i.length ? (u = i.concat(u)) : (c = -1),
                  u.length && p());
              }
              function p() {
                if (!d) {
                  var e = l(h);
                  d = !0;
                  for (var t = u.length; t; ) {
                    for (i = u, u = []; ++c < t; ) i && i[c].run();
                    (c = -1), (t = u.length);
                  }
                  (i = null),
                    (d = !1),
                    (function (e) {
                      if (r === clearTimeout) return clearTimeout(e);
                      if ((r === s || !r) && clearTimeout)
                        return (r = clearTimeout), clearTimeout(e);
                      try {
                        r(e);
                      } catch (t) {
                        try {
                          return r.call(null, e);
                        } catch (t) {
                          return r.call(this, e);
                        }
                      }
                    })(e);
                }
              }
              function f(e, t) {
                (this.fun = e), (this.array = t);
              }
              function m() {}
              (o.nextTick = function (e) {
                var t = Array(arguments.length - 1);
                if (arguments.length > 1)
                  for (var r = 1; r < arguments.length; r++)
                    t[r - 1] = arguments[r];
                u.push(new f(e, t)), 1 !== u.length || d || l(p);
              }),
                (f.prototype.run = function () {
                  this.fun.apply(null, this.array);
                }),
                (o.title = "browser"),
                (o.browser = !0),
                (o.env = {}),
                (o.argv = []),
                (o.version = ""),
                (o.versions = {}),
                (o.on = m),
                (o.addListener = m),
                (o.once = m),
                (o.off = m),
                (o.removeListener = m),
                (o.removeAllListeners = m),
                (o.emit = m),
                (o.prependListener = m),
                (o.prependOnceListener = m),
                (o.listeners = function (e) {
                  return [];
                }),
                (o.binding = function (e) {
                  throw Error("process.binding is not supported");
                }),
                (o.cwd = function () {
                  return "/";
                }),
                (o.chdir = function (e) {
                  throw Error("process.chdir is not supported");
                }),
                (o.umask = function () {
                  return 0;
                });
            },
          },
          r = {};
        function i(e) {
          var o = r[e];
          if (void 0 !== o) return o.exports;
          var a = (r[e] = { exports: {} }),
            s = !0;
          try {
            t[e](a, a.exports, i), (s = !1);
          } finally {
            s && delete r[e];
          }
          return a.exports;
        }
        i.ab = "//";
        var o = i(229);
        e.exports = o;
      })();
    },
    1523: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "BailoutToCSR", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let i = r(8993);
      function o(e) {
        let { reason: t, children: r } = e;
        if ("undefined" == typeof window) throw new i.BailoutToCSRError(t);
        return r;
      }
    },
    49: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "PreloadCss", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let i = r(7437),
        o = r(544);
      function a(e) {
        let { moduleIds: t } = e;
        if ("undefined" != typeof window) return null;
        let r = (0, o.getExpectedRequestStore)("next/dynamic css"),
          a = [];
        if (r.reactLoadableManifest && t) {
          let e = r.reactLoadableManifest;
          for (let r of t) {
            if (!e[r]) continue;
            let t = e[r].files.filter((e) => e.endsWith(".css"));
            a.push(...t);
          }
        }
        return 0 === a.length
          ? null
          : (0, i.jsx)(i.Fragment, {
              children: a.map((e) =>
                (0, i.jsx)(
                  "link",
                  {
                    precedence: "dynamic",
                    rel: "stylesheet",
                    href: r.assetPrefix + "/_next/" + encodeURI(e),
                    as: "style",
                  },
                  e
                )
              ),
            });
      }
    },
    8049: function (e, t, r) {
      "use strict";
      var i = r(4397);
      function o() {}
      function a() {}
      (a.resetWarningCache = o),
        (e.exports = function () {
          function e(e, t, r, o, a, s) {
            if (s !== i) {
              var l = Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((l.name = "Invariant Violation"), l);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var r = {
            array: e,
            bigint: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: a,
            resetWarningCache: o,
          };
          return (r.PropTypes = r), r;
        });
    },
    718: function (e, t, r) {
      e.exports = r(8049)();
    },
    4397: function (e) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    4264: function (e, t) {
      "use strict";
      var r = Symbol.for("react.element"),
        i =
          (Symbol.for("react.portal"),
          Symbol.for("react.fragment"),
          Symbol.for("react.strict_mode"),
          Symbol.for("react.profiler"),
          Symbol.for("react.provider"),
          Symbol.for("react.context"),
          Symbol.for("react.forward_ref"),
          Symbol.for("react.suspense"),
          Symbol.for("react.memo"),
          Symbol.for("react.lazy"),
          {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          }),
        o = Object.assign,
        a = {};
      function s(e, t, r) {
        (this.props = e),
          (this.context = t),
          (this.refs = a),
          (this.updater = r || i);
      }
      function l() {}
      function u(e, t, r) {
        (this.props = e),
          (this.context = t),
          (this.refs = a),
          (this.updater = r || i);
      }
      (s.prototype.isReactComponent = {}),
        (s.prototype.setState = function (e, t) {
          if ("object" != typeof e && "function" != typeof e && null != e)
            throw Error(
              "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
            );
          this.updater.enqueueSetState(this, e, t, "setState");
        }),
        (s.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        }),
        (l.prototype = s.prototype);
      var d = (u.prototype = new l());
      (d.constructor = u), o(d, s.prototype), (d.isPureReactComponent = !0);
      var c = Object.prototype.hasOwnProperty,
        h = { key: !0, ref: !0, __self: !0, __source: !0 };
      t.createElement = function (e, t, i) {
        var o,
          a = {},
          s = null,
          l = null;
        if (null != t)
          for (o in (void 0 !== t.ref && (l = t.ref),
          void 0 !== t.key && (s = "" + t.key),
          t))
            c.call(t, o) && !h.hasOwnProperty(o) && (a[o] = t[o]);
        var u = arguments.length - 2;
        if (1 === u) a.children = i;
        else if (1 < u) {
          for (var d = Array(u), p = 0; p < u; p++) d[p] = arguments[p + 2];
          a.children = d;
        }
        if (e && e.defaultProps)
          for (o in (u = e.defaultProps)) void 0 === a[o] && (a[o] = u[o]);
        return { $$typeof: r, type: e, key: s, ref: l, props: a, _owner: null };
      };
    },
    4746: function (e, t, r) {
      "use strict";
      e.exports = r(4264);
    },
    249: function (e, t, r) {
      "use strict";
      r.d(t, {
        vx: function () {
          return tN;
        },
        XE: function () {
          return tI;
        },
        Ig: function () {
          return tq;
        },
        cg: function () {
          return tD;
        },
        Mw: function () {
          return tV;
        },
        uI: function () {
          return tM;
        },
        D7: function () {
          return tF;
        },
        lo: function () {
          return tO;
        },
        Kh: function () {
          return ro;
        },
        UV: function () {
          return t6;
        },
        kX: function () {
          return t1;
        },
        PZ: function () {
          return tU;
        },
        oJ: function () {
          return rE;
        },
        cu: function () {
          return rs;
        },
        yh: function () {
          return re;
        },
        Uo: function () {
          return ra;
        },
        mn: function () {
          return t7;
        },
        Ei: function () {
          return rd;
        },
        X3: function () {
          return rq;
        },
        by: function () {
          return rR;
        },
        LS: function () {
          return rM;
        },
        RD: function () {
          return rO;
        },
        Nh: function () {
          return ru;
        },
        wY: function () {
          return rL;
        },
        Zj: function () {
          return rC;
        },
        j2: function () {
          return rV;
        },
        P7: function () {
          return t2;
        },
        cx: function () {
          return rF;
        },
        Lh: function () {
          return rA;
        },
        QE: function () {
          return rP;
        },
      });
      var i = Object.create,
        o = Object.defineProperty,
        a = Object.getOwnPropertyDescriptor,
        s = Object.getOwnPropertyNames,
        l = Object.getPrototypeOf,
        u = Object.prototype.hasOwnProperty,
        d = function (e, t) {
          return function () {
            return e && (t = e((e = 0))), t;
          };
        },
        c = function (e, t) {
          return function () {
            return t || e((t = { exports: {} }).exports, t), t.exports;
          };
        },
        h = function (e, t, r, i) {
          if ((t && "object" == typeof t) || "function" == typeof t)
            for (var l, d = s(t), c = 0, h = d.length; c < h; c++)
              (l = d[c]),
                u.call(e, l) ||
                  l === r ||
                  o(e, l, {
                    get: function (e) {
                      return t[e];
                    }.bind(null, l),
                    enumerable: !(i = a(t, l)) || i.enumerable,
                  });
          return e;
        },
        p = function (e, t, r) {
          return (
            (r = null != e ? i(l(e)) : {}),
            h(
              !t && e && e.__esModule
                ? r
                : o(r, "default", { value: e, enumerable: !0 }),
              e
            )
          );
        },
        f = c(function (e, t) {
          var r;
          "undefined" != typeof window
            ? (r = window)
            : "undefined" != typeof global
            ? (r = global)
            : "undefined" != typeof self
            ? (r = self)
            : (r = {}),
            (t.exports = r);
        });
      function m(e) {
        return e && "undefined" != typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      }
      var v = d(function () {}),
        y = c(function (e, t) {
          var r;
          v(),
            (r = function () {
              var e = function () {},
                t = "undefined",
                r =
                  ("undefined" == typeof window ? "undefined" : m(window)) !==
                    t &&
                  m(window.navigator) !== t &&
                  /Trident\/|MSIE /.test(window.navigator.userAgent),
                i = ["trace", "debug", "info", "warn", "error"];
              function o(e, t) {
                var r = e[t];
                if ("function" == typeof r.bind) return r.bind(e);
                try {
                  return Function.prototype.bind.call(r, e);
                } catch (t) {
                  return function () {
                    return Function.prototype.apply.apply(r, [e, arguments]);
                  };
                }
              }
              function a() {
                console.log &&
                  (console.log.apply
                    ? console.log.apply(console, arguments)
                    : Function.prototype.apply.apply(console.log, [
                        console,
                        arguments,
                      ])),
                  console.trace && console.trace();
              }
              function s(t, r) {
                for (var o = 0; o < i.length; o++) {
                  var a = i[o];
                  this[a] = o < t ? e : this.methodFactory(a, t, r);
                }
                this.log = this.debug;
              }
              function l(e, r, i) {
                return function () {
                  ("undefined" == typeof console ? "undefined" : m(console)) !==
                    t && (s.call(this, r, i), this[e].apply(this, arguments));
                };
              }
              function u(i, s, u) {
                var d;
                return (
                  "debug" === (d = i) && (d = "log"),
                  (("undefined" == typeof console
                    ? "undefined"
                    : m(console)) !== t &&
                    ("trace" === d && r
                      ? a
                      : void 0 !== console[d]
                      ? o(console, d)
                      : void 0 !== console.log
                      ? o(console, "log")
                      : e)) ||
                    l.apply(this, arguments)
                );
              }
              function d(e, r, o) {
                var a,
                  l = this;
                r = null == r ? "WARN" : r;
                var d = "loglevel";
                function c() {
                  var e;
                  if (
                    !(
                      ("undefined" == typeof window
                        ? "undefined"
                        : m(window)) === t || !d
                    )
                  ) {
                    try {
                      e = window.localStorage[d];
                    } catch (e) {}
                    if ((void 0 === e ? "undefined" : m(e)) === t)
                      try {
                        var r = window.document.cookie,
                          i = r.indexOf(encodeURIComponent(d) + "=");
                        -1 !== i && (e = /^([^;]+)/.exec(r.slice(i))[1]);
                      } catch (e) {}
                    return void 0 === l.levels[e] && (e = void 0), e;
                  }
                }
                "string" == typeof e
                  ? (d += ":" + e)
                  : (void 0 === e ? "undefined" : m(e)) === "symbol" &&
                    (d = void 0),
                  (l.name = e),
                  (l.levels = {
                    TRACE: 0,
                    DEBUG: 1,
                    INFO: 2,
                    WARN: 3,
                    ERROR: 4,
                    SILENT: 5,
                  }),
                  (l.methodFactory = o || u),
                  (l.getLevel = function () {
                    return a;
                  }),
                  (l.setLevel = function (r, o) {
                    if (
                      ("string" == typeof r &&
                        void 0 !== l.levels[r.toUpperCase()] &&
                        (r = l.levels[r.toUpperCase()]),
                      "number" == typeof r && r >= 0 && r <= l.levels.SILENT)
                    ) {
                      if (
                        ((a = r),
                        !1 !== o &&
                          (function (e) {
                            var r = (i[e] || "silent").toUpperCase();
                            if (
                              !(
                                ("undefined" == typeof window
                                  ? "undefined"
                                  : m(window)) === t || !d
                              )
                            ) {
                              try {
                                window.localStorage[d] = r;
                                return;
                              } catch (e) {}
                              try {
                                window.document.cookie =
                                  encodeURIComponent(d) + "=" + r + ";";
                              } catch (e) {}
                            }
                          })(r),
                        s.call(l, r, e),
                        ("undefined" == typeof console
                          ? "undefined"
                          : m(console)) === t && r < l.levels.SILENT)
                      )
                        return "No console available for logging";
                    } else
                      throw "log.setLevel() called with invalid level: " + r;
                  }),
                  (l.setDefaultLevel = function (e) {
                    (r = e), c() || l.setLevel(e, !1);
                  }),
                  (l.resetLevel = function () {
                    l.setLevel(r, !1),
                      (function () {
                        if (
                          !(
                            ("undefined" == typeof window
                              ? "undefined"
                              : m(window)) === t || !d
                          )
                        ) {
                          try {
                            window.localStorage.removeItem(d);
                            return;
                          } catch (e) {}
                          try {
                            window.document.cookie =
                              encodeURIComponent(d) +
                              "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
                          } catch (e) {}
                        }
                      })();
                  }),
                  (l.enableAll = function (e) {
                    l.setLevel(l.levels.TRACE, e);
                  }),
                  (l.disableAll = function (e) {
                    l.setLevel(l.levels.SILENT, e);
                  });
                var h = c();
                null == h && (h = r), l.setLevel(h, !1);
              }
              var c = new d(),
                h = {};
              c.getLogger = function (e) {
                if (
                  ((void 0 === e ? "undefined" : m(e)) !== "symbol" &&
                    "string" != typeof e) ||
                  "" === e
                )
                  throw TypeError(
                    "You must supply a name when creating a logger."
                  );
                var t = h[e];
                return (
                  t || (t = h[e] = new d(e, c.getLevel(), c.methodFactory)), t
                );
              };
              var p =
                ("undefined" == typeof window ? "undefined" : m(window)) !== t
                  ? window.log
                  : void 0;
              return (
                (c.noConflict = function () {
                  return (
                    ("undefined" == typeof window ? "undefined" : m(window)) !==
                      t &&
                      window.log === c &&
                      (window.log = p),
                    c
                  );
                }),
                (c.getLoggers = function () {
                  return h;
                }),
                (c.default = c),
                c
              );
            }),
            "function" == typeof define && define.amd
              ? define(r)
              : "object" == typeof t && t.exports
              ? (t.exports = r())
              : (e.log = r());
        });
      function g(e, t) {
        return null != t &&
          "undefined" != typeof Symbol &&
          t[Symbol.hasInstance]
          ? !!t[Symbol.hasInstance](e)
          : g(e, t);
      }
      var b = d(function () {
          b();
        }),
        _ = c(function (e) {
          var t,
            r = Object.prototype.hasOwnProperty;
          function i(e) {
            try {
              return decodeURIComponent(e.replace(/\+/g, " "));
            } catch (e) {
              return null;
            }
          }
          function o(e) {
            try {
              return encodeURIComponent(e);
            } catch (e) {
              return null;
            }
          }
          (e.stringify = function (e, i) {
            var a,
              s,
              l = [];
            for (s in ("string" != typeof (i = i || "") && (i = "?"), e))
              if (r.call(e, s)) {
                if (
                  (!(a = e[s]) &&
                    (null === a || a === t || isNaN(a)) &&
                    (a = ""),
                  (s = o(s)),
                  (a = o(a)),
                  null === s || null === a)
                )
                  continue;
                l.push(s + "=" + a);
              }
            return l.length ? i + l.join("&") : "";
          }),
            (e.parse = function (e) {
              for (
                var t, r = /([^=?#&]+)=?([^&]*)/g, o = {};
                (t = r.exec(e));

              ) {
                var a = i(t[1]),
                  s = i(t[2]);
                null === a || null === s || a in o || (o[a] = s);
              }
              return o;
            });
        }),
        w = c(function (e, t) {
          !(function (r) {
            var i = !1;
            if (
              ("function" == typeof define &&
                define.amd &&
                (define(r), (i = !0)),
              "object" == typeof e && ((t.exports = r()), (i = !0)),
              !i)
            ) {
              var o = window.Cookies,
                a = (window.Cookies = r());
              a.noConflict = function () {
                return (window.Cookies = o), a;
              };
            }
          })(function () {
            var e = function () {
              for (var e = 0, t = {}; e < arguments.length; e++) {
                var r = arguments[e];
                for (var i in r) t[i] = r[i];
              }
              return t;
            };
            return (function t(r) {
              function i(t, o, a) {
                var s;
                if ("undefined" != typeof document) {
                  if (arguments.length > 1) {
                    if (
                      "number" ==
                      typeof (a = e({ path: "/" }, i.defaults, a)).expires
                    ) {
                      var l = new Date();
                      l.setMilliseconds(
                        l.getMilliseconds() + 864e5 * a.expires
                      ),
                        (a.expires = l);
                    }
                    try {
                      (s = JSON.stringify(o)), /^[\{\[]/.test(s) && (o = s);
                    } catch (e) {}
                    return (
                      (o = r.write
                        ? r.write(o, t)
                        : encodeURIComponent(String(o)).replace(
                            /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                            decodeURIComponent
                          )),
                      (t = (t = (t = encodeURIComponent(String(t))).replace(
                        /%(23|24|26|2B|5E|60|7C)/g,
                        decodeURIComponent
                      )).replace(/[\(\)]/g, escape)),
                      (document.cookie = [
                        t,
                        "=",
                        o,
                        a.expires ? "; expires=" + a.expires.toUTCString() : "",
                        a.path ? "; path=" + a.path : "",
                        a.domain ? "; domain=" + a.domain : "",
                        a.secure ? "; secure" : "",
                      ].join(""))
                    );
                  }
                  t || (s = {});
                  for (
                    var u = document.cookie ? document.cookie.split("; ") : [],
                      d = /(%[0-9A-Z]{2})+/g,
                      c = 0;
                    c < u.length;
                    c++
                  ) {
                    var h = u[c].split("="),
                      p = h.slice(1).join("=");
                    '"' === p.charAt(0) && (p = p.slice(1, -1));
                    try {
                      var f = h[0].replace(d, decodeURIComponent);
                      if (
                        ((p = r.read
                          ? r.read(p, f)
                          : r(p, f) || p.replace(d, decodeURIComponent)),
                        this.json)
                      )
                        try {
                          p = JSON.parse(p);
                        } catch (e) {}
                      if (t === f) {
                        s = p;
                        break;
                      }
                      t || (s[f] = p);
                    } catch (e) {}
                  }
                  return s;
                }
              }
              return (
                (i.set = i),
                (i.get = function (e) {
                  return i.call(i, e);
                }),
                (i.getJSON = function () {
                  return i.apply({ json: !0 }, [].slice.call(arguments));
                }),
                (i.defaults = {}),
                (i.remove = function (t, r) {
                  i(t, "", e(r, { expires: -1 }));
                }),
                (i.withConverter = t),
                i
              );
            })(function () {});
          });
        }),
        T = c(function (e, t) {
          var r = Array.prototype.slice;
          t.exports = function (e, t) {
            for (("length" in e) || (e = [e]), e = r.call(e); e.length; ) {
              var i = e.shift(),
                o = t(i);
              if (o) return o;
              i.childNodes &&
                i.childNodes.length &&
                (e = r.call(i.childNodes).concat(e));
            }
          };
        }),
        x = c(function (e, t) {
          function r(e, t) {
            if (!g(this, r)) return new r(e, t);
            (this.data = e),
              (this.nodeValue = e),
              (this.length = e.length),
              (this.ownerDocument = t || null);
          }
          b(),
            (t.exports = r),
            (r.prototype.nodeType = 8),
            (r.prototype.nodeName = "#comment"),
            (r.prototype.toString = function () {
              return "[object Comment]";
            });
        }),
        E = c(function (e, t) {
          function r(e, t) {
            if (!g(this, r)) return new r(e);
            (this.data = e || ""),
              (this.length = this.data.length),
              (this.ownerDocument = t || null);
          }
          b(),
            (t.exports = r),
            (r.prototype.type = "DOMTextNode"),
            (r.prototype.nodeType = 3),
            (r.prototype.nodeName = "#text"),
            (r.prototype.toString = function () {
              return this.data;
            }),
            (r.prototype.replaceData = function (e, t, r) {
              var i = this.data,
                o = i.substring(0, e),
                a = i.substring(e + t, i.length);
              (this.data = o + r + a), (this.length = this.data.length);
            });
        }),
        k = c(function (e, t) {
          t.exports = function (e) {
            var t = this,
              r = e.type;
            e.target || (e.target = t), t.listeners || (t.listeners = {});
            var i = t.listeners[r];
            if (i)
              return i.forEach(function (r) {
                (e.currentTarget = t),
                  "function" == typeof r ? r(e) : r.handleEvent(e);
              });
            t.parentNode && t.parentNode.dispatchEvent(e);
          };
        }),
        A = c(function (e, t) {
          t.exports = function (e, t) {
            this.listeners || (this.listeners = {}),
              this.listeners[e] || (this.listeners[e] = []),
              -1 === this.listeners[e].indexOf(t) && this.listeners[e].push(t);
          };
        }),
        S = c(function (e, t) {
          t.exports = function (e, t) {
            if (this.listeners && this.listeners[e]) {
              var r = this.listeners[e],
                i = r.indexOf(t);
              -1 !== i && r.splice(i, 1);
            }
          };
        }),
        P = c(function (e, t) {
          v(),
            (t.exports = function e(t) {
              switch (t.nodeType) {
                case 3:
                  return o(t.data);
                case 8:
                  return "<!--" + t.data + "-->";
                default:
                  var a, s;
                  return (
                    (a = []),
                    (s = t.tagName),
                    "http://www.w3.org/1999/xhtml" === t.namespaceURI &&
                      (s = s.toLowerCase()),
                    a.push(
                      "<" +
                        s +
                        (function (e) {
                          var t = [];
                          for (var r in e)
                            (function (e, t) {
                              var r = m(e[t]);
                              return (
                                ("style" === t &&
                                  Object.keys(e.style).length > 0) ||
                                (e.hasOwnProperty(t) &&
                                  ("string" === r ||
                                    "boolean" === r ||
                                    "number" === r) &&
                                  "nodeName" !== t &&
                                  "className" !== t &&
                                  "tagName" !== t &&
                                  "textContent" !== t &&
                                  "innerText" !== t &&
                                  "namespaceURI" !== t &&
                                  "innerHTML" !== t)
                              );
                            })(e, r) && t.push({ name: r, value: e[r] });
                          for (var o in e._attributes)
                            for (var a in e._attributes[o]) {
                              var s = e._attributes[o][a],
                                l = (s.prefix ? s.prefix + ":" : "") + a;
                              t.push({ name: l, value: s.value });
                            }
                          return (
                            e.className &&
                              t.push({ name: "class", value: e.className }),
                            t.length ? i(t) : ""
                          );
                        })(t) +
                        (function (e) {
                          var t = e.dataset,
                            r = [];
                          for (var o in t)
                            r.push({ name: "data-" + o, value: t[o] });
                          return r.length ? i(r) : "";
                        })(t)
                    ),
                    r.indexOf(s) > -1
                      ? a.push(" />")
                      : (a.push(">"),
                        t.childNodes.length
                          ? a.push.apply(a, t.childNodes.map(e))
                          : t.textContent || t.innerText
                          ? a.push(o(t.textContent || t.innerText))
                          : t.innerHTML && a.push(t.innerHTML),
                        a.push("</" + s + ">")),
                    a.join("")
                  );
              }
            });
          var r = [
            "area",
            "base",
            "br",
            "col",
            "embed",
            "hr",
            "img",
            "input",
            "keygen",
            "link",
            "menuitem",
            "meta",
            "param",
            "source",
            "track",
            "wbr",
          ];
          function i(e) {
            var t = [];
            return (
              e.forEach(function (e) {
                var r = e.name,
                  i = e.value;
                "style" === r &&
                  (i = (function (e) {
                    if ("string" == typeof e) return e;
                    var t = "";
                    return (
                      Object.keys(e).forEach(function (r) {
                        var i = e[r];
                        (r = r.replace(/[A-Z]/g, function (e) {
                          return "-" + e.toLowerCase();
                        })),
                          (t += r + ":" + i + ";");
                      }),
                      t
                    );
                  })(i)),
                  t.push(r + '="' + o(i).replace(/"/g, "&quot;") + '"');
              }),
              t.length ? " " + t.join(" ") : ""
            );
          }
          function o(e) {
            var t = "";
            return (
              "string" == typeof e ? (t = e) : e && (t = e.toString()),
              t
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
            );
          }
        }),
        D = c(function (e, t) {
          b();
          var r = T(),
            i = k(),
            o = A(),
            a = S(),
            s = P(),
            l = "http://www.w3.org/1999/xhtml";
          function u(e, t, r) {
            if (!g(this, u)) return new u(e);
            var i = void 0 === r ? l : r || null;
            (this.tagName = i === l ? String(e).toUpperCase() : e),
              (this.nodeName = this.tagName),
              (this.className = ""),
              (this.dataset = {}),
              (this.childNodes = []),
              (this.parentNode = null),
              (this.style = {}),
              (this.ownerDocument = t || null),
              (this.namespaceURI = i),
              (this._attributes = {}),
              "INPUT" === this.tagName && (this.type = "text");
          }
          (t.exports = u),
            (u.prototype.type = "DOMElement"),
            (u.prototype.nodeType = 1),
            (u.prototype.appendChild = function (e) {
              return (
                e.parentNode && e.parentNode.removeChild(e),
                this.childNodes.push(e),
                (e.parentNode = this),
                e
              );
            }),
            (u.prototype.replaceChild = function (e, t) {
              e.parentNode && e.parentNode.removeChild(e);
              var r = this.childNodes.indexOf(t);
              return (
                (t.parentNode = null),
                (this.childNodes[r] = e),
                (e.parentNode = this),
                t
              );
            }),
            (u.prototype.removeChild = function (e) {
              var t = this.childNodes.indexOf(e);
              return this.childNodes.splice(t, 1), (e.parentNode = null), e;
            }),
            (u.prototype.insertBefore = function (e, t) {
              e.parentNode && e.parentNode.removeChild(e);
              var r = null == t ? -1 : this.childNodes.indexOf(t);
              return (
                r > -1
                  ? this.childNodes.splice(r, 0, e)
                  : this.childNodes.push(e),
                (e.parentNode = this),
                e
              );
            }),
            (u.prototype.setAttributeNS = function (e, t, r) {
              var i = null,
                o = t,
                a = t.indexOf(":");
              (a > -1 && ((i = t.substr(0, a)), (o = t.substr(a + 1))),
              "INPUT" === this.tagName && "type" === t)
                ? (this.type = r)
                : ((this._attributes[e] || (this._attributes[e] = {}))[o] = {
                    value: r,
                    prefix: i,
                  });
            }),
            (u.prototype.getAttributeNS = function (e, t) {
              var r = this._attributes[e],
                i = r && r[t] && r[t].value;
              return "INPUT" === this.tagName && "type" === t
                ? this.type
                : "string" != typeof i
                ? null
                : i;
            }),
            (u.prototype.removeAttributeNS = function (e, t) {
              var r = this._attributes[e];
              r && delete r[t];
            }),
            (u.prototype.hasAttributeNS = function (e, t) {
              var r = this._attributes[e];
              return !!r && t in r;
            }),
            (u.prototype.setAttribute = function (e, t) {
              return this.setAttributeNS(null, e, t);
            }),
            (u.prototype.getAttribute = function (e) {
              return this.getAttributeNS(null, e);
            }),
            (u.prototype.removeAttribute = function (e) {
              return this.removeAttributeNS(null, e);
            }),
            (u.prototype.hasAttribute = function (e) {
              return this.hasAttributeNS(null, e);
            }),
            (u.prototype.removeEventListener = a),
            (u.prototype.addEventListener = o),
            (u.prototype.dispatchEvent = i),
            (u.prototype.focus = function () {}),
            (u.prototype.toString = function () {
              return s(this);
            }),
            (u.prototype.getElementsByClassName = function (e) {
              var t = e.split(" "),
                i = [];
              return (
                r(this, function (e) {
                  if (1 === e.nodeType) {
                    var r = (e.className || "").split(" ");
                    t.every(function (e) {
                      return -1 !== r.indexOf(e);
                    }) && i.push(e);
                  }
                }),
                i
              );
            }),
            (u.prototype.getElementsByTagName = function (e) {
              e = e.toLowerCase();
              var t = [];
              return (
                r(this.childNodes, function (r) {
                  1 === r.nodeType &&
                    ("*" === e || r.tagName.toLowerCase() === e) &&
                    t.push(r);
                }),
                t
              );
            }),
            (u.prototype.contains = function (e) {
              return (
                r(this, function (t) {
                  return e === t;
                }) || !1
              );
            });
        }),
        R = c(function (e, t) {
          b();
          var r = D();
          function i(e) {
            if (!g(this, i)) return new i();
            (this.childNodes = []),
              (this.parentNode = null),
              (this.ownerDocument = e || null);
          }
          (t.exports = i),
            (i.prototype.type = "DocumentFragment"),
            (i.prototype.nodeType = 11),
            (i.prototype.nodeName = "#document-fragment"),
            (i.prototype.appendChild = r.prototype.appendChild),
            (i.prototype.replaceChild = r.prototype.replaceChild),
            (i.prototype.removeChild = r.prototype.removeChild),
            (i.prototype.toString = function () {
              return this.childNodes
                .map(function (e) {
                  return String(e);
                })
                .join("");
            });
        }),
        L = c(function (e, t) {
          function r(e) {}
          (t.exports = r),
            (r.prototype.initEvent = function (e, t, r) {
              (this.type = e), (this.bubbles = t), (this.cancelable = r);
            }),
            (r.prototype.preventDefault = function () {});
        }),
        C = c(function (e, t) {
          b();
          var r = T(),
            i = x(),
            o = E(),
            a = D(),
            s = R(),
            l = L(),
            u = k(),
            d = A(),
            c = S();
          function h() {
            if (!g(this, h)) return new h();
            (this.head = this.createElement("head")),
              (this.body = this.createElement("body")),
              (this.documentElement = this.createElement("html")),
              this.documentElement.appendChild(this.head),
              this.documentElement.appendChild(this.body),
              (this.childNodes = [this.documentElement]),
              (this.nodeType = 9);
          }
          t.exports = h;
          var p = h.prototype;
          (p.createTextNode = function (e) {
            return new o(e, this);
          }),
            (p.createElementNS = function (e, t) {
              return new a(t, this, null === e ? null : String(e));
            }),
            (p.createElement = function (e) {
              return new a(e, this);
            }),
            (p.createDocumentFragment = function () {
              return new s(this);
            }),
            (p.createEvent = function (e) {
              return new l(e);
            }),
            (p.createComment = function (e) {
              return new i(e, this);
            }),
            (p.getElementById = function (e) {
              return (
                (e = String(e)),
                r(this.childNodes, function (t) {
                  if (String(t.id) === e) return t;
                }) || null
              );
            }),
            (p.getElementsByClassName = a.prototype.getElementsByClassName),
            (p.getElementsByTagName = a.prototype.getElementsByTagName),
            (p.contains = a.prototype.contains),
            (p.removeEventListener = c),
            (p.addEventListener = d),
            (p.dispatchEvent = u);
        }),
        O = c(function (e, t) {
          var r = C();
          t.exports = new r();
        }),
        M = c(function (e, t) {
          var r,
            i =
              "undefined" != typeof global
                ? global
                : "undefined" != typeof window
                ? window
                : {},
            o = O();
          "undefined" != typeof document
            ? (r = document)
            : (r = i["__GLOBAL_DOCUMENT_CACHE@4"]) ||
              (r = i["__GLOBAL_DOCUMENT_CACHE@4"] = o),
            (t.exports = r);
        });
      function I(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, i = Array(t); r < t; r++) i[r] = e[r];
        return i;
      }
      function N(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != r) {
              var i,
                o,
                a = [],
                s = !0,
                l = !1;
              try {
                for (
                  r = r.call(e);
                  !(s = (i = r.next()).done) &&
                  (a.push(i.value), !(t && a.length === t));
                  s = !0
                );
              } catch (e) {
                (l = !0), (o = e);
              } finally {
                try {
                  s || null == r.return || r.return();
                } finally {
                  if (l) throw o;
                }
              }
              return a;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return I(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              if (
                ("Object" === r && e.constructor && (r = e.constructor.name),
                "Map" === r || "Set" === r)
              )
                return Array.from(r);
              if (
                "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              )
                return I(e, t);
            }
          })(e, t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var j = p(f()),
        B = function () {
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
            /[xy]/g,
            function (e) {
              var t = (16 * Math.random()) | 0;
              return ("x" === e ? t : (3 & t) | 8).toString(16);
            }
          );
        },
        U = function () {
          return (
            "000000" + ((2176782336 * Math.random()) << 0).toString(36)
          ).slice(-6);
        },
        q = function (e) {
          var t;
          if (e && void 0 !== e.nodeName)
            return e.muxId || (e.muxId = U()), e.muxId;
          try {
            t = document.querySelector(e);
          } catch (e) {}
          return (
            t && !t.muxId && (t.muxId = e), (null == t ? void 0 : t.muxId) || e
          );
        },
        V = function (e) {
          e && void 0 !== e.nodeName
            ? (e = q((t = e)))
            : (t = document.querySelector(e));
          var t,
            r = t && t.nodeName ? t.nodeName.toLowerCase() : "";
          return [t, e, r];
        },
        F = p(y()),
        H = F.default.methodFactory;
      (F.default.methodFactory = function (e, t, r) {
        var i = H(e, t, r);
        return function () {
          for (var e = ["[mux]"], t = 0; t < arguments.length; t++)
            e.push(arguments[t]);
          i.apply(void 0, e);
        };
      }),
        F.default.setLevel(F.default.getLevel());
      var W = F.default,
        z = p(f());
      function $() {
        return (
          "1" ===
          (z.default.doNotTrack ||
            (z.default.navigator && z.default.navigator.doNotTrack))
        );
      }
      var G = p(f()),
        K = {
          now: function () {
            var e = G.default.performance,
              t = e && e.timing,
              r = t && t.navigationStart;
            return Math.round(
              "number" == typeof r && "function" == typeof e.now
                ? r + e.now()
                : Date.now()
            );
          },
        };
      function Y(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function X(e, t) {
        if (!g(e, t)) throw TypeError("Cannot call a class as a function");
      }
      function Q(e, t) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function Z(e, t, r) {
        return t && Q(e.prototype, t), r && Q(e, r), e;
      }
      function J(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function ee(e, t) {
        return (ee =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function et(e) {
        return (et = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      b(), v();
      var er = function (e) {
          return ei(e)[0];
        },
        ei = function (e) {
          if ("string" != typeof e || "" === e) return ["localhost"];
          var t,
            r = (e.match(
              /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/
            ) || [])[4];
          return r && (t = (r.match(/[^\.]+\.[^\.]+$/) || [])[0]), [r, t];
        },
        en = p(f()),
        eo = {
          exists: function () {
            var e = en.default.performance;
            return void 0 !== (e && e.timing);
          },
          domContentLoadedEventEnd: function () {
            var e = en.default.performance,
              t = e && e.timing;
            return t && t.domContentLoadedEventEnd;
          },
          navigationStart: function () {
            var e = en.default.performance,
              t = e && e.timing;
            return t && t.navigationStart;
          },
        };
      function ea(e, t, r) {
        (r = void 0 === r ? 1 : r), (e[t] = e[t] || 0), (e[t] += r);
      }
      function es(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
              Object.getOwnPropertySymbols(r).filter(function (e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable;
              })
            )),
            i.forEach(function (t) {
              J(e, t, r[t]);
            });
        }
        return e;
      }
      function el(e, t) {
        return (
          (t = null != t ? t : {}),
          Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var i = Object.getOwnPropertySymbols(e);
                  r.push.apply(r, i);
                }
                return r;
              })(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              }),
          e
        );
      }
      var eu = ["x-request-id", "cf-ray", "x-amz-cf-id", "x-akamai-request-id"],
        ed = ["x-cdn", "content-type"].concat(eu);
      function ec(e) {
        var t = {};
        return (
          (e = e || "")
            .trim()
            .split(/[\r\n]+/)
            .forEach(function (e) {
              if (e) {
                var r = e.split(": "),
                  i = r.shift();
                i &&
                  (ed.indexOf(i.toLowerCase()) >= 0 ||
                    0 === i.toLowerCase().indexOf("x-litix-")) &&
                  (t[i] = r.join(": "));
              }
            }),
          t
        );
      }
      function eh(e) {
        if (e) {
          var t = eu.find(function (t) {
            return void 0 !== e[t];
          });
          return t ? e[t] : void 0;
        }
      }
      var ep = function (e) {
          var t = {};
          for (var r in e) {
            var i = e[r];
            -1 !== i["DATA-ID"].search("io.litix.data.") &&
              (t[i["DATA-ID"].replace("io.litix.data.", "")] = i.VALUE);
          }
          return t;
        },
        ef = function (e) {
          if (!e) return {};
          var t = eo.navigationStart(),
            r = e.loading,
            i = r ? r.start : e.trequest,
            o = r ? r.first : e.tfirst,
            a = r ? r.end : e.tload;
          return {
            bytesLoaded: e.total,
            requestStart: Math.round(t + i),
            responseStart: Math.round(t + o),
            responseEnd: Math.round(t + a),
          };
        },
        em = function (e) {
          if (!(!e || "function" != typeof e.getAllResponseHeaders))
            return ec(e.getAllResponseHeaders());
        },
        ev = function (e, t, r) {
          arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          var i = arguments.length > 4 ? arguments[4] : void 0,
            o = e.log,
            a = e.utils.secondsToMs,
            s = function (e) {
              var t,
                r = parseInt(i.version);
              return (
                1 === r &&
                  null !== e.programDateTime &&
                  (t = e.programDateTime),
                0 === r && null !== e.pdt && (t = e.pdt),
                t
              );
            };
          if (!eo.exists()) {
            o.warn("performance timing not supported. Not tracking HLS.js.");
            return;
          }
          var l = function (r, i) {
              return e.emit(t, r, i);
            },
            u = function (e, t) {
              var r = t.levels,
                i = t.audioTracks,
                o = t.url,
                a = t.stats,
                s = t.networkDetails,
                u = t.sessionData,
                d = {},
                c = {};
              r.forEach(function (e, t) {
                d[t] = {
                  width: e.width,
                  height: e.height,
                  bitrate: e.bitrate,
                  attrs: e.attrs,
                };
              }),
                i.forEach(function (e, t) {
                  c[t] = { name: e.name, language: e.lang, bitrate: e.bitrate };
                });
              var h = ef(a),
                p = h.bytesLoaded,
                f = h.requestStart,
                m = h.responseStart,
                v = h.responseEnd;
              l(
                "requestcompleted",
                el(es({}, ep(u)), {
                  request_event_type: e,
                  request_bytes_loaded: p,
                  request_start: f,
                  request_response_start: m,
                  request_response_end: v,
                  request_type: "manifest",
                  request_hostname: er(o),
                  request_response_headers: em(s),
                  request_rendition_lists: { media: d, audio: c, video: {} },
                })
              );
            };
          r.on(i.Events.MANIFEST_LOADED, u);
          var d = function (e, t) {
            var r = t.details,
              i = t.level,
              o = t.networkDetails,
              u = ef(t.stats),
              d = u.bytesLoaded,
              c = u.requestStart,
              h = u.responseStart,
              p = u.responseEnd,
              f = r.fragments[r.fragments.length - 1],
              m = s(f) + a(f.duration);
            l("requestcompleted", {
              request_event_type: e,
              request_bytes_loaded: d,
              request_start: c,
              request_response_start: h,
              request_response_end: p,
              request_current_level: i,
              request_type: "manifest",
              request_hostname: er(r.url),
              request_response_headers: em(o),
              video_holdback: r.holdBack && a(r.holdBack),
              video_part_holdback: r.partHoldBack && a(r.partHoldBack),
              video_part_target_duration: r.partTarget && a(r.partTarget),
              video_target_duration: r.targetduration && a(r.targetduration),
              video_source_is_live: r.live,
              player_manifest_newest_program_time: isNaN(m) ? void 0 : m,
            });
          };
          r.on(i.Events.LEVEL_LOADED, d);
          var c = function (e, t) {
            var r = t.details,
              i = t.networkDetails,
              o = ef(t.stats);
            l("requestcompleted", {
              request_event_type: e,
              request_bytes_loaded: o.bytesLoaded,
              request_start: o.requestStart,
              request_response_start: o.responseStart,
              request_response_end: o.responseEnd,
              request_type: "manifest",
              request_hostname: er(r.url),
              request_response_headers: em(i),
            });
          };
          r.on(i.Events.AUDIO_TRACK_LOADED, c);
          var h = function (e, t) {
            var i = t.stats,
              o = t.networkDetails,
              a = t.frag,
              s = ef((i = i || a.stats)),
              u = s.bytesLoaded,
              d = s.requestStart,
              c = s.responseStart,
              h = s.responseEnd,
              p = o ? em(o) : void 0,
              f = {
                request_event_type: e,
                request_bytes_loaded: u,
                request_start: d,
                request_response_start: c,
                request_response_end: h,
                request_hostname: o ? er(o.responseURL) : void 0,
                request_id: p ? eh(p) : void 0,
                request_response_headers: p,
                request_media_duration: a.duration,
                request_url: null == o ? void 0 : o.responseURL,
              };
            "main" === a.type
              ? ((f.request_type = "media"),
                (f.request_current_level = a.level),
                (f.request_video_width = (r.levels[a.level] || {}).width),
                (f.request_video_height = (r.levels[a.level] || {}).height),
                (f.request_labeled_bitrate = (r.levels[a.level] || {}).bitrate))
              : (f.request_type = a.type),
              l("requestcompleted", f);
          };
          r.on(i.Events.FRAG_LOADED, h);
          var p = function (e, t) {
            var r = t.frag,
              i = r.start;
            l("fragmentchange", {
              currentFragmentPDT: s(r),
              currentFragmentStart: a(i),
            });
          };
          r.on(i.Events.FRAG_CHANGED, p);
          var f = function (e, t) {
            var r,
              o = t.type,
              a = t.details,
              s = t.response,
              u = t.fatal,
              d = t.frag,
              c = t.networkDetails,
              h = (null == d ? void 0 : d.url) || t.url || "",
              p = c ? em(c) : void 0;
            (a === i.ErrorDetails.MANIFEST_LOAD_ERROR ||
              a === i.ErrorDetails.MANIFEST_LOAD_TIMEOUT ||
              a === i.ErrorDetails.FRAG_LOAD_ERROR ||
              a === i.ErrorDetails.FRAG_LOAD_TIMEOUT ||
              a === i.ErrorDetails.LEVEL_LOAD_ERROR ||
              a === i.ErrorDetails.LEVEL_LOAD_TIMEOUT ||
              a === i.ErrorDetails.AUDIO_TRACK_LOAD_ERROR ||
              a === i.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT ||
              a === i.ErrorDetails.SUBTITLE_LOAD_ERROR ||
              a === i.ErrorDetails.SUBTITLE_LOAD_TIMEOUT ||
              a === i.ErrorDetails.KEY_LOAD_ERROR ||
              a === i.ErrorDetails.KEY_LOAD_TIMEOUT) &&
              l("requestfailed", {
                request_error: a,
                request_url: h,
                request_hostname: er(h),
                request_id: p ? eh(p) : void 0,
                request_type:
                  a === i.ErrorDetails.FRAG_LOAD_ERROR ||
                  a === i.ErrorDetails.FRAG_LOAD_TIMEOUT
                    ? "media"
                    : a === i.ErrorDetails.AUDIO_TRACK_LOAD_ERROR ||
                      a === i.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT
                    ? "audio"
                    : a === i.ErrorDetails.SUBTITLE_LOAD_ERROR ||
                      a === i.ErrorDetails.SUBTITLE_LOAD_TIMEOUT
                    ? "subtitle"
                    : a === i.ErrorDetails.KEY_LOAD_ERROR ||
                      a === i.ErrorDetails.KEY_LOAD_TIMEOUT
                    ? "encryption"
                    : "manifest",
                request_error_code: null == s ? void 0 : s.code,
                request_error_text: null == s ? void 0 : s.text,
              }),
              u &&
                l("error", {
                  player_error_code: o,
                  player_error_message: a,
                  player_error_context:
                    "".concat(h ? "url: ".concat(h, "\n") : "") +
                    "".concat(
                      s && (s.code || s.text)
                        ? "response: ".concat(s.code, ", ").concat(s.text, "\n")
                        : ""
                    ) +
                    "".concat(
                      t.reason ? "failure reason: ".concat(t.reason, "\n") : ""
                    ) +
                    "".concat(t.level ? "level: ".concat(t.level, "\n") : "") +
                    "".concat(
                      t.parent
                        ? "parent stream controller: ".concat(t.parent, "\n")
                        : ""
                    ) +
                    "".concat(
                      t.buffer ? "buffer length: ".concat(t.buffer, "\n") : ""
                    ) +
                    "".concat(t.error ? "error: ".concat(t.error, "\n") : "") +
                    "".concat(t.event ? "event: ".concat(t.event, "\n") : "") +
                    "".concat(
                      t.err
                        ? "error message: ".concat(
                            null === (r = t.err) || void 0 === r
                              ? void 0
                              : r.message,
                            "\n"
                          )
                        : ""
                    ),
                });
          };
          r.on(i.Events.ERROR, f);
          var m = function (e, t) {
            var r = t.frag,
              i = (r && r._url) || "";
            l("requestcanceled", {
              request_event_type: e,
              request_url: i,
              request_type: "media",
              request_hostname: er(i),
            });
          };
          r.on(i.Events.FRAG_LOAD_EMERGENCY_ABORTED, m);
          var v = function (e, t) {
            var i = t.level,
              a = r.levels[i];
            if (a && a.attrs && a.attrs.BANDWIDTH) {
              var s,
                u = a.attrs.BANDWIDTH,
                d = parseFloat(a.attrs["FRAME-RATE"]);
              isNaN(d) || (s = d),
                u
                  ? l("renditionchange", {
                      video_source_fps: s,
                      video_source_bitrate: u,
                      video_source_width: a.width,
                      video_source_height: a.height,
                      video_source_rendition_name: a.name,
                      video_source_codec: null == a ? void 0 : a.videoCodec,
                    })
                  : o.warn(
                      "missing BANDWIDTH from HLS manifest parsed by HLS.js"
                    );
            }
          };
          r.on(i.Events.LEVEL_SWITCHED, v),
            (r._stopMuxMonitor = function () {
              r.off(i.Events.MANIFEST_LOADED, u),
                r.off(i.Events.LEVEL_LOADED, d),
                r.off(i.Events.AUDIO_TRACK_LOADED, c),
                r.off(i.Events.FRAG_LOADED, h),
                r.off(i.Events.FRAG_CHANGED, p),
                r.off(i.Events.ERROR, f),
                r.off(i.Events.FRAG_LOAD_EMERGENCY_ABORTED, m),
                r.off(i.Events.LEVEL_SWITCHED, v),
                r.off(i.Events.DESTROYING, r._stopMuxMonitor),
                delete r._stopMuxMonitor;
            }),
            r.on(i.Events.DESTROYING, r._stopMuxMonitor);
        },
        ey = function (e) {
          e && "function" == typeof e._stopMuxMonitor && e._stopMuxMonitor();
        },
        eg = function (e, t) {
          if (!e || !e.requestEndDate) return {};
          var r,
            i = er(e.url),
            o = e.url,
            a = e.bytesLoaded,
            s = new Date(e.requestStartDate).getTime(),
            l = new Date(e.firstByteDate).getTime(),
            u = new Date(e.requestEndDate).getTime(),
            d = isNaN(e.duration) ? 0 : e.duration,
            c =
              "function" == typeof t.getMetricsFor
                ? t.getMetricsFor(e.mediaType).HttpList
                : t.getDashMetrics().getHttpRequests(e.mediaType);
          c.length > 0 && (r = ec(c[c.length - 1]._responseHeaders || ""));
          var h = r ? eh(r) : void 0;
          return {
            requestStart: s,
            requestResponseStart: l,
            requestResponseEnd: u,
            requestBytesLoaded: a,
            requestResponseHeaders: r,
            requestMediaDuration: d,
            requestHostname: i,
            requestUrl: o,
            requestId: h,
          };
        },
        eb = function (e, t) {
          var r = t.getQualityFor(e),
            i = t.getCurrentTrackFor(e).bitrateList;
          return i
            ? {
                currentLevel: r,
                renditionWidth: i[r].width || null,
                renditionHeight: i[r].height || null,
                renditionBitrate: i[r].bandwidth,
              }
            : {};
        },
        e_ = function (e) {
          var t;
          return null === (t = e.match(/.*codecs\*?="(.*)"/)) || void 0 === t
            ? void 0
            : t[1];
        },
        ew = function (e) {
          try {
            var t, r;
            return null === (r = e.getVersion) ||
              void 0 === r ||
              null === (t = r.call(e)) ||
              void 0 === t
              ? void 0
              : t.split(".").map(function (e) {
                  return parseInt(e);
                })[0];
          } catch (e) {
            return !1;
          }
        },
        eT = function (e, t, r) {
          arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          var i = e.log;
          if (!r || !r.on) {
            i.warn("Invalid dash.js player reference. Monitoring blocked.");
            return;
          }
          var o = ew(r),
            a = function (r, i) {
              return e.emit(t, r, i);
            },
            s = function (e) {
              var t = e.type,
                r = (e.data || {}).url;
              a("requestcompleted", {
                request_event_type: t,
                request_start: 0,
                request_response_start: 0,
                request_response_end: 0,
                request_bytes_loaded: -1,
                request_type: "manifest",
                request_hostname: er(r),
                request_url: r,
              });
            };
          r.on("manifestLoaded", s);
          var l = {},
            u = function (e) {
              if ("function" != typeof e.getRequests) return null;
              var t = e.getRequests({ state: "executed" });
              return 0 === t.length ? null : t[t.length - 1];
            },
            d = function (e) {
              var t = e.type,
                i = e.chunk,
                o = e.request,
                s = (i || {}).mediaInfo || {},
                u = s.type,
                d = s.bitrateList,
                c = {};
              (d = d || []).forEach(function (e, t) {
                (c[t] = {}),
                  (c[t].width = e.width),
                  (c[t].height = e.height),
                  (c[t].bitrate = e.bandwidth),
                  (c[t].attrs = {});
              }),
                "video" === u
                  ? (l.video = c)
                  : "audio" === u
                  ? (l.audio = c)
                  : (l.media = c);
              var h = eg(o, r),
                p = h.requestStart,
                f = h.requestResponseStart,
                m = h.requestResponseEnd,
                v = h.requestResponseHeaders,
                y = h.requestMediaDuration,
                g = h.requestHostname,
                b = h.requestUrl;
              a("requestcompleted", {
                request_event_type: t,
                request_start: p,
                request_response_start: f,
                request_response_end: m,
                request_bytes_loaded: -1,
                request_type: u + "_init",
                request_response_headers: v,
                request_hostname: g,
                request_id: h.requestId,
                request_url: b,
                request_media_duration: y,
                request_rendition_lists: l,
              });
            };
          o >= 4
            ? r.on("initFragmentLoaded", d)
            : r.on("initFragmentLoaded", function (e) {
                var t = e.type,
                  r = e.fragmentModel,
                  i = e.chunk;
                d({ type: t, request: u(r), chunk: i });
              });
          var c = function (e) {
            var t = e.type,
              i = e.chunk,
              o = e.request,
              s = i || {},
              l = s.mediaInfo,
              u = s.start,
              d = (l || {}).type,
              c = eg(o, r),
              h = c.requestStart,
              p = c.requestResponseStart,
              f = c.requestResponseEnd,
              m = c.requestBytesLoaded,
              v = c.requestResponseHeaders,
              y = c.requestMediaDuration,
              g = c.requestHostname,
              b = c.requestUrl,
              _ = c.requestId,
              w = eb(d, r),
              T = w.currentLevel,
              x = w.renditionWidth,
              E = w.renditionHeight;
            a("requestcompleted", {
              request_event_type: t,
              request_start: h,
              request_response_start: p,
              request_response_end: f,
              request_bytes_loaded: m,
              request_type: d,
              request_response_headers: v,
              request_hostname: g,
              request_id: _,
              request_url: b,
              request_media_start_time: u,
              request_media_duration: y,
              request_current_level: T,
              request_labeled_bitrate: w.renditionBitrate,
              request_video_width: x,
              request_video_height: E,
            });
          };
          o >= 4
            ? r.on("mediaFragmentLoaded", c)
            : r.on("mediaFragmentLoaded", function (e) {
                var t = e.type,
                  r = e.fragmentModel,
                  i = e.chunk;
                c({ type: t, request: u(r), chunk: i });
              });
          var h = { video: void 0, audio: void 0, totalBitrate: void 0 },
            p = function () {
              if (h.video && "number" == typeof h.video.bitrate) {
                if (!(h.video.width && h.video.height)) {
                  i.warn(
                    "have bitrate info for video but missing width/height"
                  );
                  return;
                }
                var e = h.video.bitrate;
                if (
                  (h.audio &&
                    "number" == typeof h.audio.bitrate &&
                    (e += h.audio.bitrate),
                  e !== h.totalBitrate)
                )
                  return (
                    (h.totalBitrate = e),
                    {
                      video_source_bitrate: e,
                      video_source_height: h.video.height,
                      video_source_width: h.video.width,
                      video_source_codec: e_(h.video.codec),
                    }
                  );
              }
            },
            f = function (e, t, o) {
              if ("number" != typeof e.newQuality) {
                i.warn(
                  "missing evt.newQuality in qualityChangeRendered event",
                  e
                );
                return;
              }
              var s = e.mediaType;
              if ("audio" === s || "video" === s) {
                var l = r.getBitrateInfoListFor(s).find(function (t) {
                  return t.qualityIndex === e.newQuality;
                });
                if (!(l && "number" == typeof l.bitrate)) {
                  i.warn("missing bitrate info for ".concat(s));
                  return;
                }
                h[s] = el(es({}, l), { codec: r.getCurrentTrackFor(s).codec });
                var u = p();
                u && a("renditionchange", u);
              }
            };
          r.on("qualityChangeRendered", f);
          var m = function (e) {
            var t = e.request,
              r = e.mediaType;
            a("requestcanceled", {
              request_event_type: (t = t || {}).type + "_" + t.action,
              request_url: t.url,
              request_type: r,
              request_hostname: er(t.url),
            });
          };
          r.on("fragmentLoadingAbandoned", m);
          var v = function (e) {
            var t,
              r,
              i = e.error,
              o =
                (null == i || null === (t = i.data) || void 0 === t
                  ? void 0
                  : t.request) || {},
              s =
                (null == i || null === (r = i.data) || void 0 === r
                  ? void 0
                  : r.response) || {};
            (null == i ? void 0 : i.code) === 27 &&
              a("requestfailed", {
                request_error: o.type + "_" + o.action,
                request_url: o.url,
                request_hostname: er(o.url),
                request_type: o.mediaType,
                request_error_code: s.status,
                request_error_text: s.statusText,
              });
            var l =
              "".concat(null != o && o.url ? "url: ".concat(o.url, "\n") : "") +
              "".concat(
                (null != s && s.status) || (null != s && s.statusText)
                  ? "response: "
                      .concat(null == s ? void 0 : s.status, ", ")
                      .concat(null == s ? void 0 : s.statusText, "\n")
                  : ""
              );
            a("error", {
              player_error_code: null == i ? void 0 : i.code,
              player_error_message: null == i ? void 0 : i.message,
              player_error_context: l,
            });
          };
          r.on("error", v),
            (r._stopMuxMonitor = function () {
              r.off("manifestLoaded", s),
                r.off("initFragmentLoaded", d),
                r.off("mediaFragmentLoaded", c),
                r.off("qualityChangeRendered", f),
                r.off("error", v),
                r.off("fragmentLoadingAbandoned", m),
                delete r._stopMuxMonitor;
            });
        },
        ex = function (e) {
          e && "function" == typeof e._stopMuxMonitor && e._stopMuxMonitor();
        },
        eE = 0,
        ek = (function () {
          function e() {
            X(this, e), J(this, "_listeners", void 0);
          }
          return (
            Z(e, [
              {
                key: "on",
                value: function (e, t, r) {
                  return (
                    (t._eventEmitterGuid = t._eventEmitterGuid || ++eE),
                    (this._listeners = this._listeners || {}),
                    (this._listeners[e] = this._listeners[e] || []),
                    r && (t = t.bind(r)),
                    this._listeners[e].push(t),
                    t
                  );
                },
              },
              {
                key: "off",
                value: function (e, t) {
                  var r = this._listeners && this._listeners[e];
                  r &&
                    r.forEach(function (e, i) {
                      e._eventEmitterGuid === t._eventEmitterGuid &&
                        r.splice(i, 1);
                    });
                },
              },
              {
                key: "one",
                value: function (e, t, r) {
                  var i = this;
                  t._eventEmitterGuid = t._eventEmitterGuid || ++eE;
                  var o = function () {
                    i.off(e, o), t.apply(r || this, arguments);
                  };
                  (o._eventEmitterGuid = t._eventEmitterGuid), this.on(e, o);
                },
              },
              {
                key: "emit",
                value: function (e, t) {
                  var r = this;
                  if (this._listeners) {
                    t = t || {};
                    var i = this._listeners["before*"] || [],
                      o = this._listeners[e] || [],
                      a = this._listeners["after" + e] || [],
                      s = function (t, i) {
                        (t = t.slice()).forEach(function (t) {
                          t.call(r, { type: e }, i);
                        });
                      };
                    s(i, t), s(o, t), s(a, t);
                  }
                },
              },
            ]),
            e
          );
        })(),
        eA = p(f()),
        eS = (function () {
          function e(t) {
            var r = this;
            X(this, e),
              J(this, "_playbackHeartbeatInterval", void 0),
              J(this, "_playheadShouldBeProgressing", void 0),
              J(this, "pm", void 0),
              (this.pm = t),
              (this._playbackHeartbeatInterval = null),
              (this._playheadShouldBeProgressing = !1),
              t.on("playing", function () {
                r._playheadShouldBeProgressing = !0;
              }),
              t.on("play", this._startPlaybackHeartbeatInterval.bind(this)),
              t.on("playing", this._startPlaybackHeartbeatInterval.bind(this)),
              t.on(
                "adbreakstart",
                this._startPlaybackHeartbeatInterval.bind(this)
              ),
              t.on("adplay", this._startPlaybackHeartbeatInterval.bind(this)),
              t.on(
                "adplaying",
                this._startPlaybackHeartbeatInterval.bind(this)
              ),
              t.on(
                "devicewake",
                this._startPlaybackHeartbeatInterval.bind(this)
              ),
              t.on(
                "viewstart",
                this._startPlaybackHeartbeatInterval.bind(this)
              ),
              t.on(
                "rebufferstart",
                this._startPlaybackHeartbeatInterval.bind(this)
              ),
              t.on("pause", this._stopPlaybackHeartbeatInterval.bind(this)),
              t.on("ended", this._stopPlaybackHeartbeatInterval.bind(this)),
              t.on("viewend", this._stopPlaybackHeartbeatInterval.bind(this)),
              t.on("error", this._stopPlaybackHeartbeatInterval.bind(this)),
              t.on("aderror", this._stopPlaybackHeartbeatInterval.bind(this)),
              t.on("adpause", this._stopPlaybackHeartbeatInterval.bind(this)),
              t.on("adended", this._stopPlaybackHeartbeatInterval.bind(this)),
              t.on(
                "adbreakend",
                this._stopPlaybackHeartbeatInterval.bind(this)
              ),
              t.on("seeked", function () {
                t.data.player_is_paused
                  ? r._stopPlaybackHeartbeatInterval()
                  : r._startPlaybackHeartbeatInterval();
              }),
              t.on("timeupdate", function () {
                null !== r._playbackHeartbeatInterval &&
                  t.emit("playbackheartbeat");
              }),
              t.on("devicesleep", function (e, i) {
                null !== r._playbackHeartbeatInterval &&
                  (eA.default.clearInterval(r._playbackHeartbeatInterval),
                  t.emit("playbackheartbeatend", {
                    viewer_time: i.viewer_time,
                  }),
                  (r._playbackHeartbeatInterval = null));
              });
          }
          return (
            Z(e, [
              {
                key: "_startPlaybackHeartbeatInterval",
                value: function () {
                  var e = this;
                  null === this._playbackHeartbeatInterval &&
                    (this.pm.emit("playbackheartbeat"),
                    (this._playbackHeartbeatInterval = eA.default.setInterval(
                      function () {
                        e.pm.emit("playbackheartbeat");
                      },
                      this.pm.playbackHeartbeatTime
                    )));
                },
              },
              {
                key: "_stopPlaybackHeartbeatInterval",
                value: function () {
                  (this._playheadShouldBeProgressing = !1),
                    null !== this._playbackHeartbeatInterval &&
                      (eA.default.clearInterval(
                        this._playbackHeartbeatInterval
                      ),
                      this.pm.emit("playbackheartbeatend"),
                      (this._playbackHeartbeatInterval = null));
                },
              },
            ]),
            e
          );
        })(),
        eP = function e(t) {
          var r = this;
          X(this, e),
            J(this, "viewErrored", void 0),
            t.on("viewinit", function () {
              r.viewErrored = !1;
            }),
            t.on("error", function (e, i) {
              try {
                var o = t.errorTranslator({
                  player_error_code: i.player_error_code,
                  player_error_message: i.player_error_message,
                  player_error_context: i.player_error_context,
                  player_error_severity: i.player_error_severity,
                  player_error_business_exception:
                    i.player_error_business_exception,
                });
                o &&
                  ((t.data.player_error_code =
                    o.player_error_code || i.player_error_code),
                  (t.data.player_error_message =
                    o.player_error_message || i.player_error_message),
                  (t.data.player_error_context =
                    o.player_error_context || i.player_error_context),
                  (t.data.player_error_severity =
                    o.player_error_severity || i.player_error_severity),
                  (t.data.player_error_business_exception =
                    o.player_error_business_exception ||
                    i.player_error_business_exception),
                  (r.viewErrored = !0));
              } catch (e) {
                t.mux.log.warn("Exception in error translator callback.", e),
                  (r.viewErrored = !0);
              }
            }),
            t.on("aftererror", function () {
              var e, r, i, o, a;
              null === (e = t.data) ||
                void 0 === e ||
                delete e.player_error_code,
                null === (r = t.data) ||
                  void 0 === r ||
                  delete r.player_error_message,
                null === (i = t.data) ||
                  void 0 === i ||
                  delete i.player_error_context,
                null === (o = t.data) ||
                  void 0 === o ||
                  delete o.player_error_severity,
                null === (a = t.data) ||
                  void 0 === a ||
                  delete a.player_error_business_exception;
            });
        },
        eD = (function () {
          function e(t) {
            X(this, e),
              J(this, "_watchTimeTrackerLastCheckedTime", void 0),
              J(this, "pm", void 0),
              (this.pm = t),
              (this._watchTimeTrackerLastCheckedTime = null),
              t.on("playbackheartbeat", this._updateWatchTime.bind(this)),
              t.on(
                "playbackheartbeatend",
                this._clearWatchTimeState.bind(this)
              );
          }
          return (
            Z(e, [
              {
                key: "_updateWatchTime",
                value: function (e, t) {
                  var r = t.viewer_time;
                  null === this._watchTimeTrackerLastCheckedTime &&
                    (this._watchTimeTrackerLastCheckedTime = r),
                    ea(
                      this.pm.data,
                      "view_watch_time",
                      r - this._watchTimeTrackerLastCheckedTime
                    ),
                    (this._watchTimeTrackerLastCheckedTime = r);
                },
              },
              {
                key: "_clearWatchTimeState",
                value: function (e, t) {
                  this._updateWatchTime(e, t),
                    (this._watchTimeTrackerLastCheckedTime = null);
                },
              },
            ]),
            e
          );
        })(),
        eR = (function () {
          function e(t) {
            var r = this;
            X(this, e),
              J(this, "_playbackTimeTrackerLastPlayheadPosition", void 0),
              J(this, "_lastTime", void 0),
              J(this, "_isAdPlaying", void 0),
              J(this, "_callbackUpdatePlaybackTime", void 0),
              J(this, "pm", void 0),
              (this.pm = t),
              (this._playbackTimeTrackerLastPlayheadPosition = -1),
              (this._lastTime = K.now()),
              (this._isAdPlaying = !1),
              (this._callbackUpdatePlaybackTime = null);
            var i = this._startPlaybackTimeTracking.bind(this);
            t.on("playing", i), t.on("adplaying", i), t.on("seeked", i);
            var o = this._stopPlaybackTimeTracking.bind(this);
            t.on("playbackheartbeatend", o),
              t.on("seeking", o),
              t.on("adplaying", function () {
                r._isAdPlaying = !0;
              }),
              t.on("adended", function () {
                r._isAdPlaying = !1;
              }),
              t.on("adpause", function () {
                r._isAdPlaying = !1;
              }),
              t.on("adbreakstart", function () {
                r._isAdPlaying = !1;
              }),
              t.on("adbreakend", function () {
                r._isAdPlaying = !1;
              }),
              t.on("adplay", function () {
                r._isAdPlaying = !1;
              }),
              t.on("viewinit", function () {
                (r._playbackTimeTrackerLastPlayheadPosition = -1),
                  (r._lastTime = K.now()),
                  (r._isAdPlaying = !1),
                  (r._callbackUpdatePlaybackTime = null);
              });
          }
          return (
            Z(e, [
              {
                key: "_startPlaybackTimeTracking",
                value: function () {
                  null === this._callbackUpdatePlaybackTime &&
                    ((this._callbackUpdatePlaybackTime =
                      this._updatePlaybackTime.bind(this)),
                    (this._playbackTimeTrackerLastPlayheadPosition =
                      this.pm.data.player_playhead_time),
                    this.pm.on(
                      "playbackheartbeat",
                      this._callbackUpdatePlaybackTime
                    ));
                },
              },
              {
                key: "_stopPlaybackTimeTracking",
                value: function () {
                  this._callbackUpdatePlaybackTime &&
                    (this._updatePlaybackTime(),
                    this.pm.off(
                      "playbackheartbeat",
                      this._callbackUpdatePlaybackTime
                    ),
                    (this._callbackUpdatePlaybackTime = null),
                    (this._playbackTimeTrackerLastPlayheadPosition = -1));
                },
              },
              {
                key: "_updatePlaybackTime",
                value: function () {
                  var e = this.pm.data.player_playhead_time,
                    t = K.now(),
                    r = -1;
                  this._playbackTimeTrackerLastPlayheadPosition >= 0 &&
                  e > this._playbackTimeTrackerLastPlayheadPosition
                    ? (r = e - this._playbackTimeTrackerLastPlayheadPosition)
                    : this._isAdPlaying && (r = t - this._lastTime),
                    r > 0 &&
                      r <= 1e3 &&
                      ea(this.pm.data, "view_content_playback_time", r),
                    (this._playbackTimeTrackerLastPlayheadPosition = e),
                    (this._lastTime = t);
                },
              },
            ]),
            e
          );
        })(),
        eL = (function () {
          function e(t) {
            X(this, e), J(this, "pm", void 0), (this.pm = t);
            var r = this._updatePlayheadTime.bind(this);
            t.on("playbackheartbeat", r),
              t.on("playbackheartbeatend", r),
              t.on("timeupdate", r),
              t.on("destroy", function () {
                t.off("timeupdate", r);
              });
          }
          return (
            Z(e, [
              {
                key: "_updateMaxPlayheadPosition",
                value: function () {
                  this.pm.data.view_max_playhead_position =
                    void 0 === this.pm.data.view_max_playhead_position
                      ? this.pm.data.player_playhead_time
                      : Math.max(
                          this.pm.data.view_max_playhead_position,
                          this.pm.data.player_playhead_time
                        );
                },
              },
              {
                key: "_updatePlayheadTime",
                value: function (e, t) {
                  var r = this,
                    i = function () {
                      r.pm.currentFragmentPDT &&
                        r.pm.currentFragmentStart &&
                        (r.pm.data.player_program_time =
                          r.pm.currentFragmentPDT +
                          r.pm.data.player_playhead_time -
                          r.pm.currentFragmentStart);
                    };
                  if (t && t.player_playhead_time)
                    (this.pm.data.player_playhead_time =
                      t.player_playhead_time),
                      i(),
                      this._updateMaxPlayheadPosition();
                  else if (this.pm.getPlayheadTime) {
                    var o = this.pm.getPlayheadTime();
                    void 0 !== o &&
                      ((this.pm.data.player_playhead_time = o),
                      i(),
                      this._updateMaxPlayheadPosition());
                  }
                },
              },
            ]),
            e
          );
        })(),
        eC = function e(t) {
          if ((X(this, e), !t.disableRebufferTracking)) {
            var r,
              i = function (e, t) {
                o(t), (r = void 0);
              },
              o = function (e) {
                if (r) {
                  var i = e.viewer_time - r;
                  ea(t.data, "view_rebuffer_duration", i),
                    (r = e.viewer_time),
                    t.data.view_rebuffer_duration > 3e5 &&
                      (t.emit("viewend"),
                      t.send("viewend"),
                      t.mux.log.warn(
                        "Ending view after rebuffering for longer than ".concat(
                          3e5,
                          "ms, future events will be ignored unless a programchange or videochange occurs."
                        )
                      ));
                }
                t.data.view_watch_time >= 0 &&
                  t.data.view_rebuffer_count > 0 &&
                  ((t.data.view_rebuffer_frequency =
                    t.data.view_rebuffer_count / t.data.view_watch_time),
                  (t.data.view_rebuffer_percentage =
                    t.data.view_rebuffer_duration / t.data.view_watch_time));
              };
            t.on("playbackheartbeat", function (e, t) {
              return o(t);
            }),
              t.on("rebufferstart", function (e, o) {
                r ||
                  (ea(t.data, "view_rebuffer_count", 1),
                  (r = o.viewer_time),
                  t.one("rebufferend", i));
              }),
              t.on("viewinit", function () {
                (r = void 0), t.off("rebufferend", i);
              });
          }
        },
        eO = (function () {
          function e(t) {
            var r = this;
            X(this, e),
              J(this, "_lastCheckedTime", void 0),
              J(this, "_lastPlayheadTime", void 0),
              J(this, "_lastPlayheadTimeUpdatedTime", void 0),
              J(this, "_rebuffering", void 0),
              J(this, "pm", void 0),
              (this.pm = t),
              t.disableRebufferTracking ||
                t.disablePlayheadRebufferTracking ||
                ((this._lastCheckedTime = null),
                (this._lastPlayheadTime = null),
                (this._lastPlayheadTimeUpdatedTime = null),
                t.on("playbackheartbeat", this._checkIfRebuffering.bind(this)),
                t.on(
                  "playbackheartbeatend",
                  this._cleanupRebufferTracker.bind(this)
                ),
                t.on("seeking", function () {
                  r._cleanupRebufferTracker(null, { viewer_time: K.now() });
                }));
          }
          return (
            Z(e, [
              {
                key: "_checkIfRebuffering",
                value: function (e, t) {
                  if (
                    this.pm.seekingTracker.isSeeking ||
                    this.pm.adTracker.isAdBreak ||
                    !this.pm.playbackHeartbeat._playheadShouldBeProgressing
                  ) {
                    this._cleanupRebufferTracker(e, t);
                    return;
                  }
                  if (null === this._lastCheckedTime) {
                    this._prepareRebufferTrackerState(t.viewer_time);
                    return;
                  }
                  if (
                    this._lastPlayheadTime !== this.pm.data.player_playhead_time
                  ) {
                    this._cleanupRebufferTracker(e, t, !0);
                    return;
                  }
                  var r = t.viewer_time - this._lastPlayheadTimeUpdatedTime;
                  "number" == typeof this.pm.sustainedRebufferThreshold &&
                    r >= this.pm.sustainedRebufferThreshold &&
                    (this._rebuffering ||
                      ((this._rebuffering = !0),
                      this.pm.emit("rebufferstart", {
                        viewer_time: this._lastPlayheadTimeUpdatedTime,
                      }))),
                    (this._lastCheckedTime = t.viewer_time);
                },
              },
              {
                key: "_clearRebufferTrackerState",
                value: function () {
                  (this._lastCheckedTime = null),
                    (this._lastPlayheadTime = null),
                    (this._lastPlayheadTimeUpdatedTime = null);
                },
              },
              {
                key: "_prepareRebufferTrackerState",
                value: function (e) {
                  (this._lastCheckedTime = e),
                    (this._lastPlayheadTime =
                      this.pm.data.player_playhead_time),
                    (this._lastPlayheadTimeUpdatedTime = e);
                },
              },
              {
                key: "_cleanupRebufferTracker",
                value: function (e, t) {
                  var r =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2];
                  if (this._rebuffering)
                    (this._rebuffering = !1),
                      this.pm.emit("rebufferend", {
                        viewer_time: t.viewer_time,
                      });
                  else {
                    if (null === this._lastCheckedTime) return;
                    var i =
                        this.pm.data.player_playhead_time -
                        this._lastPlayheadTime,
                      o = t.viewer_time - this._lastPlayheadTimeUpdatedTime;
                    "number" == typeof this.pm.minimumRebufferDuration &&
                      i > 0 &&
                      o - i > this.pm.minimumRebufferDuration &&
                      ((this._lastCheckedTime = null),
                      this.pm.emit("rebufferstart", {
                        viewer_time: this._lastPlayheadTimeUpdatedTime,
                      }),
                      this.pm.emit("rebufferend", {
                        viewer_time: this._lastPlayheadTimeUpdatedTime + o - i,
                      }));
                  }
                  r
                    ? this._prepareRebufferTrackerState(t.viewer_time)
                    : this._clearRebufferTrackerState();
                },
              },
            ]),
            e
          );
        })(),
        eM = (function () {
          function e(t) {
            var r = this;
            X(this, e),
              J(this, "NAVIGATION_START", void 0),
              J(this, "pm", void 0),
              (this.pm = t),
              t.on("viewinit", function () {
                var e = t.data,
                  i = e.view_id;
                if (!e.view_program_changed) {
                  var o = function (e, o) {
                    var a = o.viewer_time;
                    "playing" === e.type &&
                    void 0 === t.data.view_time_to_first_frame
                      ? r.calculateTimeToFirstFrame(a || K.now(), i)
                      : "adplaying" === e.type &&
                        (void 0 === t.data.view_time_to_first_frame ||
                          r._inPrerollPosition()) &&
                        r.calculateTimeToFirstFrame(a || K.now(), i);
                  };
                  t.one("playing", o),
                    t.one("adplaying", o),
                    t.one("viewend", function () {
                      t.off("playing", o), t.off("adplaying", o);
                    });
                }
              });
          }
          return (
            Z(e, [
              {
                key: "_inPrerollPosition",
                value: function () {
                  return (
                    void 0 === this.pm.data.view_content_playback_time ||
                    this.pm.data.view_content_playback_time <= 1e3
                  );
                },
              },
              {
                key: "calculateTimeToFirstFrame",
                value: function (e, t) {
                  t === this.pm.data.view_id &&
                    (this.pm.watchTimeTracker._updateWatchTime(null, {
                      viewer_time: e,
                    }),
                    (this.pm.data.view_time_to_first_frame =
                      this.pm.data.view_watch_time),
                    (this.pm.data.player_autoplay_on ||
                      this.pm.data.video_is_autoplay) &&
                      this.NAVIGATION_START &&
                      (this.pm.data.view_aggregate_startup_time =
                        this.pm.data.view_start +
                        this.pm.data.view_watch_time -
                        this.NAVIGATION_START));
                },
              },
            ]),
            e
          );
        })(),
        eI = function e(t) {
          var r = this;
          X(this, e),
            J(this, "_lastPlayerHeight", void 0),
            J(this, "_lastPlayerWidth", void 0),
            J(this, "_lastPlayheadPosition", void 0),
            J(this, "_lastSourceHeight", void 0),
            J(this, "_lastSourceWidth", void 0),
            t.on("viewinit", function () {
              r._lastPlayheadPosition = -1;
            }),
            [
              "pause",
              "rebufferstart",
              "seeking",
              "error",
              "adbreakstart",
              "hb",
            ].forEach(function (e) {
              t.on(e, function () {
                if (
                  r._lastPlayheadPosition >= 0 &&
                  t.data.player_playhead_time >= 0 &&
                  r._lastPlayerWidth >= 0 &&
                  r._lastSourceWidth > 0 &&
                  r._lastPlayerHeight >= 0 &&
                  r._lastSourceHeight > 0
                ) {
                  var e = t.data.player_playhead_time - r._lastPlayheadPosition;
                  if (e < 0) {
                    r._lastPlayheadPosition = -1;
                    return;
                  }
                  var i = Math.min(
                      r._lastPlayerWidth / r._lastSourceWidth,
                      r._lastPlayerHeight / r._lastSourceHeight
                    ),
                    o = Math.max(0, i - 1),
                    a = Math.max(0, 1 - i);
                  (t.data.view_max_upscale_percentage = Math.max(
                    t.data.view_max_upscale_percentage || 0,
                    o
                  )),
                    (t.data.view_max_downscale_percentage = Math.max(
                      t.data.view_max_downscale_percentage || 0,
                      a
                    )),
                    ea(t.data, "view_total_content_playback_time", e),
                    ea(t.data, "view_total_upscaling", o * e),
                    ea(t.data, "view_total_downscaling", a * e);
                }
                r._lastPlayheadPosition = -1;
              });
            }),
            ["playing", "hb"].forEach(function (e) {
              t.on(e, function () {
                (r._lastPlayheadPosition = t.data.player_playhead_time),
                  (r._lastPlayerWidth = t.data.player_width),
                  (r._lastPlayerHeight = t.data.player_height),
                  (r._lastSourceWidth = t.data.video_source_width),
                  (r._lastSourceHeight = t.data.video_source_height);
              });
            });
        },
        eN = function e(t) {
          var r = this;
          X(this, e), J(this, "isSeeking", void 0), (this.isSeeking = !1);
          var i = -1,
            o = function () {
              var e = K.now(),
                o = (t.data.viewer_time || e) - (i || e);
              ea(t.data, "view_seek_duration", o),
                (t.data.view_max_seek_time = Math.max(
                  t.data.view_max_seek_time || 0,
                  o
                )),
                (r.isSeeking = !1),
                (i = -1);
            };
          t.on("seeking", function (e, a) {
            if (
              (Object.assign(t.data, a),
              r.isSeeking && a.viewer_time - i <= 2e3)
            ) {
              i = a.viewer_time;
              return;
            }
            r.isSeeking && o(),
              (r.isSeeking = !0),
              (i = a.viewer_time),
              ea(t.data, "view_seek_count", 1),
              t.send("seeking");
          }),
            t.on("seeked", function () {
              o();
            }),
            t.on("viewend", function () {
              r.isSeeking && (o(), t.send("seeked")),
                (r.isSeeking = !1),
                (i = -1);
            });
        },
        ej = function (e, t) {
          e.push(t),
            e.sort(function (e, t) {
              return e.viewer_time - t.viewer_time;
            });
        },
        eB = [
          "adbreakstart",
          "adrequest",
          "adresponse",
          "adplay",
          "adplaying",
          "adpause",
          "adended",
          "adbreakend",
          "aderror",
          "adclicked",
          "adskipped",
        ],
        eU = (function () {
          function e(t) {
            var r = this;
            X(this, e),
              J(this, "_adHasPlayed", void 0),
              J(this, "_adRequests", void 0),
              J(this, "_adResponses", void 0),
              J(this, "_currentAdRequestNumber", void 0),
              J(this, "_currentAdResponseNumber", void 0),
              J(this, "_prerollPlayTime", void 0),
              J(this, "_wouldBeNewAdPlay", void 0),
              J(this, "isAdBreak", void 0),
              J(this, "pm", void 0),
              (this.pm = t),
              t.on("viewinit", function () {
                (r.isAdBreak = !1),
                  (r._currentAdRequestNumber = 0),
                  (r._currentAdResponseNumber = 0),
                  (r._adRequests = []),
                  (r._adResponses = []),
                  (r._adHasPlayed = !1),
                  (r._wouldBeNewAdPlay = !0),
                  (r._prerollPlayTime = void 0);
              }),
              eB.forEach(function (e) {
                return t.on(e, r._updateAdData.bind(r));
              });
            var i = function () {
              r.isAdBreak = !1;
            };
            t.on("adbreakstart", function () {
              r.isAdBreak = !0;
            }),
              t.on("play", i),
              t.on("playing", i),
              t.on("viewend", i),
              t.on("adrequest", function (e, i) {
                (i = Object.assign(
                  {
                    ad_request_id:
                      "generatedAdRequestId" + r._currentAdRequestNumber++,
                  },
                  i
                )),
                  ej(r._adRequests, i),
                  ea(t.data, "view_ad_request_count"),
                  r.inPrerollPosition() &&
                    ((t.data.view_preroll_requested = !0),
                    r._adHasPlayed || ea(t.data, "view_preroll_request_count"));
              }),
              t.on("adresponse", function (e, i) {
                (i = Object.assign(
                  {
                    ad_request_id:
                      "generatedAdRequestId" + r._currentAdResponseNumber++,
                  },
                  i
                )),
                  ej(r._adResponses, i);
                var o = r.findAdRequest(i.ad_request_id);
                o &&
                  ea(
                    t.data,
                    "view_ad_request_time",
                    Math.max(0, i.viewer_time - o.viewer_time)
                  );
              }),
              t.on("adplay", function (e, i) {
                (r._adHasPlayed = !0),
                  r._wouldBeNewAdPlay &&
                    ((r._wouldBeNewAdPlay = !1),
                    ea(t.data, "view_ad_played_count")),
                  r.inPrerollPosition() &&
                    !t.data.view_preroll_played &&
                    ((t.data.view_preroll_played = !0),
                    r._adRequests.length > 0 &&
                      (t.data.view_preroll_request_time = Math.max(
                        0,
                        i.viewer_time - r._adRequests[0].viewer_time
                      )),
                    t.data.view_start &&
                      (t.data.view_startup_preroll_request_time = Math.max(
                        0,
                        i.viewer_time - t.data.view_start
                      )),
                    (r._prerollPlayTime = i.viewer_time));
              }),
              t.on("adplaying", function (e, i) {
                r.inPrerollPosition() &&
                  void 0 === t.data.view_preroll_load_time &&
                  void 0 !== r._prerollPlayTime &&
                  ((t.data.view_preroll_load_time =
                    i.viewer_time - r._prerollPlayTime),
                  (t.data.view_startup_preroll_load_time =
                    i.viewer_time - r._prerollPlayTime));
              }),
              t.on("adclicked", function (e, i) {
                r._wouldBeNewAdPlay || ea(t.data, "view_ad_clicked_count");
              }),
              t.on("adskipped", function (e, i) {
                r._wouldBeNewAdPlay || ea(t.data, "view_ad_skipped_count");
              }),
              t.on("adended", function () {
                r._wouldBeNewAdPlay = !0;
              }),
              t.on("aderror", function () {
                r._wouldBeNewAdPlay = !0;
              });
          }
          return (
            Z(e, [
              {
                key: "inPrerollPosition",
                value: function () {
                  return (
                    void 0 === this.pm.data.view_content_playback_time ||
                    this.pm.data.view_content_playback_time <= 1e3
                  );
                },
              },
              {
                key: "findAdRequest",
                value: function (e) {
                  for (var t = 0; t < this._adRequests.length; t++)
                    if (this._adRequests[t].ad_request_id === e)
                      return this._adRequests[t];
                },
              },
              {
                key: "_updateAdData",
                value: function (e, t) {
                  if (this.inPrerollPosition()) {
                    if (
                      !this.pm.data.view_preroll_ad_tag_hostname &&
                      t.ad_tag_url
                    ) {
                      var r = N(ei(t.ad_tag_url), 2),
                        i = r[0],
                        o = r[1];
                      (this.pm.data.view_preroll_ad_tag_domain = o),
                        (this.pm.data.view_preroll_ad_tag_hostname = i);
                    }
                    if (
                      !this.pm.data.view_preroll_ad_asset_hostname &&
                      t.ad_asset_url
                    ) {
                      var a = N(ei(t.ad_asset_url), 2),
                        s = a[0],
                        l = a[1];
                      (this.pm.data.view_preroll_ad_asset_domain = l),
                        (this.pm.data.view_preroll_ad_asset_hostname = s);
                    }
                  }
                  (this.pm.data.ad_asset_url =
                    null == t ? void 0 : t.ad_asset_url),
                    (this.pm.data.ad_tag_url =
                      null == t ? void 0 : t.ad_tag_url),
                    (this.pm.data.ad_creative_id =
                      null == t ? void 0 : t.ad_creative_id),
                    (this.pm.data.ad_id = null == t ? void 0 : t.ad_id),
                    (this.pm.data.ad_universal_id =
                      null == t ? void 0 : t.ad_universal_id);
                },
              },
            ]),
            e
          );
        })(),
        eq = p(f()),
        eV = function e(t) {
          X(this, e);
          var r,
            i,
            o = function () {
              t.disableRebufferTracking ||
                (ea(t.data, "view_waiting_rebuffer_count", 1),
                (r = K.now()),
                (i = eq.default.setInterval(function () {
                  if (r) {
                    var e = K.now();
                    ea(t.data, "view_waiting_rebuffer_duration", e - r),
                      (r = e);
                  }
                }, 250)));
            },
            a = function () {
              t.disableRebufferTracking ||
                (r &&
                  (ea(t.data, "view_waiting_rebuffer_duration", K.now() - r),
                  (r = !1),
                  eq.default.clearInterval(i)));
            },
            s = !1,
            l = function () {
              s = !0;
            },
            u = function () {
              (s = !1), a();
            };
          t.on("waiting", function () {
            s && o();
          }),
            t.on("playing", function () {
              a(), l();
            }),
            t.on("pause", u),
            t.on("seeking", u);
        },
        eF = function e(t) {
          var r = this;
          X(this, e), J(this, "lastWallClockTime", void 0);
          var i = function () {
              (r.lastWallClockTime = K.now()), t.on("before*", o);
            },
            o = function (e) {
              var i = K.now(),
                o = r.lastWallClockTime;
              (r.lastWallClockTime = i),
                i - o > 3e4 &&
                  (t.emit("devicesleep", { viewer_time: o }),
                  Object.assign(t.data, { viewer_time: o }),
                  t.send("devicesleep"),
                  t.emit("devicewake", { viewer_time: i }),
                  Object.assign(t.data, { viewer_time: i }),
                  t.send("devicewake"));
            };
          t.one("playbackheartbeat", i),
            t.on("playbackheartbeatend", function () {
              t.off("before*", o), t.one("playbackheartbeat", i);
            });
        },
        eH = p(f()),
        eW = p(_()),
        ez = p(w()),
        e$ = "muxData",
        eG = function () {
          var e;
          try {
            e = eW.default.parse(ez.default.get(e$) || "");
          } catch (t) {
            e = {};
          }
          return e;
        },
        eK = function (e) {
          try {
            ez.default.set(e$, eW.default.stringify(e), { expires: 365 });
          } catch (e) {}
        },
        eY = function () {
          var e = eG();
          return (
            (e.mux_viewer_id = e.mux_viewer_id || B()),
            (e.msn = e.msn || Math.random()),
            eK(e),
            { mux_viewer_id: e.mux_viewer_id, mux_sample_number: e.msn }
          );
        },
        eX = function () {
          var e = eG(),
            t = K.now();
          return (
            e.session_start &&
              ((e.sst = e.session_start), delete e.session_start),
            e.session_id && ((e.sid = e.session_id), delete e.session_id),
            e.session_expires &&
              ((e.sex = e.session_expires), delete e.session_expires),
            (!e.sex || e.sex < t) && ((e.sid = B()), (e.sst = t)),
            (e.sex = t + 15e5),
            eK(e),
            { session_id: e.sid, session_start: e.sst, session_expires: e.sex }
          );
        },
        eQ = p(f()),
        eZ = function () {
          var e;
          switch (eJ()) {
            case "cellular":
              e = "cellular";
              break;
            case "ethernet":
              e = "wired";
              break;
            case "wifi":
              e = "wifi";
              break;
            case void 0:
              break;
            default:
              e = "other";
          }
          return e;
        },
        eJ = function () {
          var e = eQ.default.navigator,
            t = e && (e.connection || e.mozConnection || e.webkitConnection);
          return t && t.type;
        };
      eZ.getConnectionFromAPI = eJ;
      var e0 = e2({
          a: "env",
          b: "beacon",
          c: "custom",
          d: "ad",
          e: "event",
          f: "experiment",
          i: "internal",
          m: "mux",
          n: "response",
          p: "player",
          q: "request",
          r: "retry",
          s: "session",
          t: "timestamp",
          u: "viewer",
          v: "video",
          w: "page",
          x: "view",
          y: "sub",
        }),
        e1 = e2({
          ad: "ad",
          ag: "aggregate",
          ap: "api",
          al: "application",
          ar: "architecture",
          as: "asset",
          au: "autoplay",
          av: "average",
          bi: "bitrate",
          br: "break",
          bw: "browser",
          by: "bytes",
          bz: "business",
          ca: "cached",
          cb: "cancel",
          cc: "codec",
          cd: "code",
          cg: "category",
          ch: "changed",
          ck: "clicked",
          cl: "canceled",
          cn: "config",
          co: "count",
          ce: "counter",
          cp: "complete",
          cr: "creative",
          ct: "content",
          cu: "current",
          cx: "connection",
          cz: "context",
          dg: "downscaling",
          dm: "domain",
          dn: "cdn",
          do: "downscale",
          dr: "drm",
          dp: "dropped",
          du: "duration",
          dv: "device",
          ec: "encoding",
          ed: "edge",
          en: "end",
          eg: "engine",
          em: "embed",
          er: "error",
          ep: "experiments",
          es: "errorcode",
          et: "errortext",
          ee: "event",
          ev: "events",
          ex: "expires",
          ez: "exception",
          fa: "failed",
          fi: "first",
          fm: "family",
          ft: "format",
          fp: "fps",
          fq: "frequency",
          fr: "frame",
          fs: "fullscreen",
          ha: "has",
          hb: "holdback",
          he: "headers",
          ho: "host",
          hn: "hostname",
          ht: "height",
          id: "id",
          ii: "init",
          in: "instance",
          ip: "ip",
          is: "is",
          ke: "key",
          la: "language",
          lb: "labeled",
          le: "level",
          li: "live",
          ld: "loaded",
          lo: "load",
          ls: "lists",
          lt: "latency",
          ma: "max",
          md: "media",
          me: "message",
          mf: "manifest",
          mi: "mime",
          ml: "midroll",
          mm: "min",
          mn: "manufacturer",
          mo: "model",
          mx: "mux",
          ne: "newest",
          nm: "name",
          no: "number",
          on: "on",
          os: "os",
          pa: "paused",
          pb: "playback",
          pd: "producer",
          pe: "percentage",
          pf: "played",
          pg: "program",
          ph: "playhead",
          pi: "plugin",
          pl: "preroll",
          pn: "playing",
          po: "poster",
          pr: "preload",
          ps: "position",
          pt: "part",
          py: "property",
          ra: "rate",
          rd: "requested",
          re: "rebuffer",
          rf: "rendition",
          rm: "remote",
          ro: "ratio",
          rp: "response",
          rq: "request",
          rs: "requests",
          sa: "sample",
          sd: "skipped",
          se: "session",
          sk: "seek",
          sm: "stream",
          so: "source",
          sq: "sequence",
          sr: "series",
          st: "start",
          su: "startup",
          sv: "server",
          sw: "software",
          sy: "severity",
          ta: "tag",
          tc: "tech",
          te: "text",
          tg: "target",
          th: "throughput",
          ti: "time",
          tl: "total",
          to: "to",
          tt: "title",
          ty: "type",
          ug: "upscaling",
          un: "universal",
          up: "upscale",
          ur: "url",
          us: "user",
          va: "variant",
          vd: "viewed",
          vi: "video",
          ve: "version",
          vw: "view",
          vr: "viewer",
          wd: "width",
          wa: "watch",
          wt: "waiting",
        });
      function e2(e) {
        var t = {};
        for (var r in e) e.hasOwnProperty(r) && (t[e[r]] = r);
        return t;
      }
      function e5(e) {
        var t = {},
          r = {};
        return (
          Object.keys(e).forEach(function (i) {
            var o = !1;
            if (e.hasOwnProperty(i) && void 0 !== e[i]) {
              var a = i.split("_"),
                s = a[0],
                l = e0[s];
              l ||
                (W.info("Data key word `" + a[0] + "` not expected in " + i),
                (l = s + "_")),
                a.splice(1).forEach(function (e) {
                  "url" === e && (o = !0),
                    e1[e]
                      ? (l += e1[e])
                      : Number(e) && Math.floor(Number(e)) === Number(e)
                      ? (l += e)
                      : (W.info(
                          "Data key word `" + e + "` not expected in " + i
                        ),
                        (l += "_" + e + "_"));
                }),
                o ? (r[l] = e[i]) : (t[l] = e[i]);
            }
          }),
          Object.assign(t, r)
        );
      }
      var e8 = p(f()),
        e4 = {
          maxBeaconSize: 300,
          maxQueueLength: 3600,
          baseTimeBetweenBeacons: 1e4,
          maxPayloadKBSize: 500,
        },
        e3 = ["hb", "requestcompleted", "requestfailed", "requestcanceled"],
        e6 = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          (this._beaconUrl = e || "https://img.litix.io"),
            (this._eventQueue = []),
            (this._postInFlight = !1),
            (this._failureCount = 0),
            (this._sendTimeout = !1),
            (this._options = Object.assign({}, e4, t));
        };
      (e6.prototype.queueEvent = function (e, t) {
        var r = Object.assign({}, t);
        return (
          (this._eventQueue.length <= this._options.maxQueueLength ||
            "eventrateexceeded" === e) &&
          (this._eventQueue.push(r),
          this._sendTimeout || this._startBeaconSending(),
          this._eventQueue.length <= this._options.maxQueueLength)
        );
      }),
        (e6.prototype.flushEvents = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (e && 1 === this._eventQueue.length) {
            this._eventQueue.pop();
            return;
          }
          this._eventQueue.length && this._sendBeaconQueue(),
            this._startBeaconSending();
        }),
        (e6.prototype.destroy = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          (this.destroyed = !0),
            e ? this._clearBeaconQueue() : this.flushEvents(),
            e8.default.clearTimeout(this._sendTimeout);
        }),
        (e6.prototype._clearBeaconQueue = function () {
          var e =
              this._eventQueue.length > this._options.maxBeaconSize
                ? this._eventQueue.length - this._options.maxBeaconSize
                : 0,
            t = this._eventQueue.slice(e);
          e > 0 &&
            Object.assign(
              t[t.length - 1],
              e5({ mux_view_message: "event queue truncated" })
            );
          var r = this._createPayload(t);
          e9(this._beaconUrl, r, !0, function () {});
        }),
        (e6.prototype._sendBeaconQueue = function () {
          var e = this;
          if (!this._postInFlight) {
            var t = this._eventQueue.slice(0, this._options.maxBeaconSize);
            (this._eventQueue = this._eventQueue.slice(
              this._options.maxBeaconSize
            )),
              (this._postInFlight = !0);
            var r = this._createPayload(t),
              i = K.now();
            e9(this._beaconUrl, r, !1, function (r, o) {
              o
                ? ((e._eventQueue = t.concat(e._eventQueue)),
                  (e._failureCount += 1),
                  W.info("Error sending beacon: " + o))
                : (e._failureCount = 0),
                (e._roundTripTime = K.now() - i),
                (e._postInFlight = !1);
            });
          }
        }),
        (e6.prototype._getNextBeaconTime = function () {
          if (!this._failureCount) return this._options.baseTimeBetweenBeacons;
          var e = Math.pow(2, this._failureCount - 1);
          return (
            (1 + (e *= Math.random())) * this._options.baseTimeBetweenBeacons
          );
        }),
        (e6.prototype._startBeaconSending = function () {
          var e = this;
          e8.default.clearTimeout(this._sendTimeout),
            this.destroyed ||
              (this._sendTimeout = e8.default.setTimeout(function () {
                e._eventQueue.length && e._sendBeaconQueue(),
                  e._startBeaconSending();
              }, this._getNextBeaconTime()));
        }),
        (e6.prototype._createPayload = function (e) {
          var t = this,
            r = { transmission_timestamp: Math.round(K.now()) };
          this._roundTripTime && (r.rtt_ms = Math.round(this._roundTripTime));
          var i,
            o,
            a,
            s = function () {
              a =
                (i = JSON.stringify({ metadata: r, events: o || e })).length /
                1024;
            },
            l = function () {
              return a <= t._options.maxPayloadKBSize;
            };
          return (
            s(),
            l() ||
              (W.info(
                "Payload size is too big (" +
                  a +
                  " kb). Removing unnecessary events."
              ),
              (o = e.filter(function (e) {
                return -1 === e3.indexOf(e.e);
              })),
              s()),
            l() ||
              (W.info(
                "Payload size still too big (" + a + " kb). Cropping fields.."
              ),
              o.forEach(function (e) {
                for (var t in e) {
                  var r = e[t];
                  "string" == typeof r &&
                    r.length > 51200 &&
                    (e[t] = r.substring(0, 51200));
                }
              }),
              s()),
            i
          );
        });
      var e9 = function (e, t, r, i) {
          if (
            r &&
            navigator &&
            navigator.sendBeacon &&
            navigator.sendBeacon(e, t)
          ) {
            i();
            return;
          }
          if (e8.default.fetch) {
            e8.default
              .fetch(e, {
                method: "POST",
                body: t,
                headers: { "Content-Type": "text/plain" },
                keepalive: t.length <= 57344,
              })
              .then(function (e) {
                return i(null, e.ok ? null : "Error");
              })
              .catch(function (e) {
                return i(null, e);
              });
            return;
          }
          if (e8.default.XMLHttpRequest) {
            var o = new e8.default.XMLHttpRequest();
            (o.onreadystatechange = function () {
              if (4 === o.readyState)
                return i(null, 200 !== o.status ? "error" : void 0);
            }),
              o.open("POST", e),
              o.setRequestHeader("Content-Type", "text/plain"),
              o.send(t);
            return;
          }
          i();
        },
        e7 = [
          "env_key",
          "view_id",
          "view_sequence_number",
          "player_sequence_number",
          "beacon_domain",
          "player_playhead_time",
          "viewer_time",
          "mux_api_version",
          "event",
          "video_id",
          "player_instance_id",
          "player_error_code",
          "player_error_message",
          "player_error_context",
          "player_error_severity",
          "player_error_business_exception",
        ],
        te = [
          "adplay",
          "adplaying",
          "adpause",
          "adfirstquartile",
          "admidpoint",
          "adthirdquartile",
          "adended",
          "adresponse",
          "adrequest",
        ],
        tt = ["ad_id", "ad_creative_id", "ad_universal_id"],
        tr = ["viewstart", "error", "ended", "viewend"],
        ti = (function () {
          function e(t, r) {
            var i,
              o,
              a,
              s,
              l,
              u,
              d,
              c,
              h,
              p,
              f,
              m,
              v,
              y,
              g,
              b,
              _,
              w,
              T,
              x =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
            X(this, e),
              J(this, "mux", void 0),
              J(this, "envKey", void 0),
              J(this, "options", void 0),
              J(this, "eventQueue", void 0),
              J(this, "sampleRate", void 0),
              J(this, "disableCookies", void 0),
              J(this, "respectDoNotTrack", void 0),
              J(this, "previousBeaconData", void 0),
              J(this, "lastEventTime", void 0),
              J(this, "rateLimited", void 0),
              J(this, "pageLevelData", void 0),
              J(this, "viewerData", void 0),
              (this.mux = t),
              (this.envKey = r),
              (this.options = x),
              (this.previousBeaconData = null),
              (this.lastEventTime = 0),
              (this.rateLimited = !1),
              (this.eventQueue = new e6(
                ((i = this.envKey),
                (a = (o = this.options).beaconCollectionDomain),
                (s = o.beaconDomain),
                a
                  ? "https://" + a
                  : (i = i || "inferred").match(/^[a-z0-9]+$/)
                  ? "https://" + i + "." + (s || "litix.io")
                  : "https://img.litix.io/a.gif")
              )),
              (this.sampleRate =
                null !== (_ = this.options.sampleRate) && void 0 !== _ ? _ : 1),
              (this.disableCookies =
                null !== (w = this.options.disableCookies) &&
                void 0 !== w &&
                w),
              (this.respectDoNotTrack =
                null !== (T = this.options.respectDoNotTrack) &&
                void 0 !== T &&
                T),
              (this.previousBeaconData = null),
              (this.lastEventTime = 0),
              (this.rateLimited = !1),
              (this.pageLevelData = {
                mux_api_version: this.mux.API_VERSION,
                mux_embed: this.mux.NAME,
                mux_embed_version: this.mux.VERSION,
                viewer_application_name:
                  null === (l = this.options.platform) || void 0 === l
                    ? void 0
                    : l.name,
                viewer_application_version:
                  null === (u = this.options.platform) || void 0 === u
                    ? void 0
                    : u.version,
                viewer_application_engine:
                  null === (d = this.options.platform) || void 0 === d
                    ? void 0
                    : d.layout,
                viewer_device_name:
                  null === (c = this.options.platform) || void 0 === c
                    ? void 0
                    : c.product,
                viewer_device_category: "",
                viewer_device_manufacturer:
                  null === (h = this.options.platform) || void 0 === h
                    ? void 0
                    : h.manufacturer,
                viewer_os_family:
                  null === (f = this.options.platform) ||
                  void 0 === f ||
                  null === (p = f.os) ||
                  void 0 === p
                    ? void 0
                    : p.family,
                viewer_os_architecture:
                  null === (v = this.options.platform) ||
                  void 0 === v ||
                  null === (m = v.os) ||
                  void 0 === m
                    ? void 0
                    : m.architecture,
                viewer_os_version:
                  null === (g = this.options.platform) ||
                  void 0 === g ||
                  null === (y = g.os) ||
                  void 0 === y
                    ? void 0
                    : y.version,
                viewer_connection_type: eZ(),
                page_url:
                  null === eH.default ||
                  void 0 === eH.default ||
                  null === (b = eH.default.location) ||
                  void 0 === b
                    ? void 0
                    : b.href,
              }),
              (this.viewerData = this.disableCookies ? {} : eY());
          }
          return (
            Z(e, [
              {
                key: "send",
                value: function (e, t) {
                  if (!(!e || !(null != t && t.view_id))) {
                    if (this.respectDoNotTrack && $())
                      return W.info(
                        "Not sending `" +
                          e +
                          "` because Do Not Track is enabled"
                      );
                    if (!t || "object" != typeof t)
                      return W.error(
                        "A data object was expected in send() but was not provided"
                      );
                    var r = this.disableCookies ? {} : eX(),
                      i = el(
                        es({}, this.pageLevelData, t, r, this.viewerData),
                        { event: e, env_key: this.envKey }
                      );
                    i.user_id &&
                      ((i.viewer_user_id = i.user_id), delete i.user_id);
                    var o,
                      a =
                        (null !== (o = i.mux_sample_number) && void 0 !== o
                          ? o
                          : 0) >= this.sampleRate,
                      s = e5(this._deduplicateBeaconData(e, i));
                    if (((this.lastEventTime = this.mux.utils.now()), a))
                      return W.info(
                        "Not sending event due to sample rate restriction",
                        e,
                        i,
                        s
                      );
                    if (
                      (this.envKey ||
                        W.info(
                          "Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL",
                          e,
                          i,
                          s
                        ),
                      !this.rateLimited)
                    ) {
                      if (
                        (W.info("Sending event", e, i, s),
                        (this.rateLimited = !this.eventQueue.queueEvent(e, s)),
                        this.mux.WINDOW_UNLOADING && "viewend" === e)
                      )
                        this.eventQueue.destroy(!0);
                      else if (
                        (this.mux.WINDOW_HIDDEN && "hb" === e
                          ? this.eventQueue.flushEvents(!0)
                          : tr.indexOf(e) >= 0 && this.eventQueue.flushEvents(),
                        this.rateLimited)
                      )
                        return (
                          (i.event = "eventrateexceeded"),
                          (s = e5(i)),
                          this.eventQueue.queueEvent(i.event, s),
                          W.error("Beaconing disabled due to rate limit.")
                        );
                    }
                  }
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.eventQueue.destroy(!1);
                },
              },
              {
                key: "_deduplicateBeaconData",
                value: function (e, t) {
                  var r = this,
                    i = {},
                    o = t.view_id;
                  if (
                    "-1" === o ||
                    "viewstart" === e ||
                    "viewend" === e ||
                    !this.previousBeaconData ||
                    this.mux.utils.now() - this.lastEventTime >= 6e5
                  )
                    (i = es({}, t)),
                      o && (this.previousBeaconData = i),
                      o && "viewend" === e && (this.previousBeaconData = null);
                  else {
                    var a = 0 === e.indexOf("request");
                    Object.entries(t).forEach(function (t) {
                      var o = N(t, 2),
                        s = o[0],
                        l = o[1];
                      r.previousBeaconData &&
                        (l !== r.previousBeaconData[s] ||
                          e7.indexOf(s) > -1 ||
                          r.objectHasChanged(
                            a,
                            s,
                            l,
                            r.previousBeaconData[s]
                          ) ||
                          r.eventRequiresKey(e, s)) &&
                        ((i[s] = l), (r.previousBeaconData[s] = l));
                    });
                  }
                  return i;
                },
              },
              {
                key: "objectHasChanged",
                value: function (e, t, r, i) {
                  return (
                    !!e &&
                    0 === t.indexOf("request_") &&
                    ("request_response_headers" === t ||
                      "object" != typeof r ||
                      "object" != typeof i ||
                      Object.keys(r || {}).length !==
                        Object.keys(i || {}).length)
                  );
                },
              },
              {
                key: "eventRequiresKey",
                value: function (e, t) {
                  return !!(
                    ("renditionchange" === e &&
                      0 === t.indexOf("video_source_")) ||
                    (tt.includes(t) && te.includes(e))
                  );
                },
              },
            ]),
            e
          );
        })(),
        tn = function e(t) {
          X(this, e);
          var r = 0,
            i = 0,
            o = 0,
            a = 0,
            s = 0,
            l = 0,
            u = 0;
          t.on("requestcompleted", function (e, l) {
            var u,
              d,
              c = l.request_start,
              h = l.request_response_start,
              p = l.request_response_end,
              f = l.request_bytes_loaded;
            if (
              (a++,
              h
                ? ((u = h - (null != c ? c : 0)), (d = (null != p ? p : 0) - h))
                : (d = (null != p ? p : 0) - (null != c ? c : 0)),
              d > 0 && f && f > 0)
            ) {
              var m = (f / d) * 8e3;
              s++,
                (i += f),
                (o += d),
                (t.data.view_min_request_throughput = Math.min(
                  t.data.view_min_request_throughput || 1 / 0,
                  m
                )),
                (t.data.view_average_request_throughput = (i / o) * 8e3),
                (t.data.view_request_count = a),
                u > 0 &&
                  ((r += u),
                  (t.data.view_max_request_latency = Math.max(
                    t.data.view_max_request_latency || 0,
                    u
                  )),
                  (t.data.view_average_request_latency = r / s));
            }
          }),
            t.on("requestfailed", function (e, r) {
              a++,
                l++,
                (t.data.view_request_count = a),
                (t.data.view_request_failed_count = l);
            }),
            t.on("requestcanceled", function (e, r) {
              a++,
                u++,
                (t.data.view_request_count = a),
                (t.data.view_request_canceled_count = u);
            });
        },
        to = function e(t) {
          var r = this;
          X(this, e),
            J(this, "_lastEventTime", void 0),
            t.on("before*", function (e, i) {
              var o = i.viewer_time,
                a = K.now(),
                s = r._lastEventTime;
              if (((r._lastEventTime = a), s && a - s > 36e5)) {
                var l = Object.keys(t.data).reduce(function (e, r) {
                  return 0 === r.indexOf("video_")
                    ? Object.assign(e, J({}, r, t.data[r]))
                    : e;
                }, {});
                t.mux.log.info(
                  "Received event after at least an hour inactivity, creating a new view"
                ),
                  t.emit("viewinit", Object.assign({ viewer_time: o }, l)),
                  t.playbackHeartbeat._playheadShouldBeProgressing &&
                    "play" !== e.type &&
                    "adbreakstart" !== e.type &&
                    (t.emit("play", { viewer_time: o }),
                    "playing" !== e.type &&
                      t.emit("playing", { viewer_time: o }));
              }
            });
        },
        ta = [
          "viewstart",
          "ended",
          "loadstart",
          "pause",
          "play",
          "playing",
          "ratechange",
          "waiting",
          "adplay",
          "adpause",
          "adended",
          "aderror",
          "adplaying",
          "adrequest",
          "adresponse",
          "adbreakstart",
          "adbreakend",
          "adfirstquartile",
          "admidpoint",
          "adthirdquartile",
          "rebufferstart",
          "rebufferend",
          "seeked",
          "error",
          "hb",
          "requestcompleted",
          "requestfailed",
          "requestcanceled",
          "renditionchange",
        ],
        ts = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && ee(e, t);
          })(i, e);
          var t,
            r =
              ((t = (function () {
                if (
                  "undefined" == typeof Reflect ||
                  !Reflect.construct ||
                  Reflect.construct.sham
                )
                  return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {})
                    ),
                    !0
                  );
                } catch (e) {
                  return !1;
                }
              })()),
              function () {
                var e,
                  r = et(i);
                return (
                  (e = t
                    ? Reflect.construct(r, arguments, et(this).constructor)
                    : r.apply(this, arguments)),
                  e && ("object" === m(e) || "function" == typeof e)
                    ? e
                    : Y(this)
                );
              });
          function i(e, t, o) {
            X(this, i),
              J(Y((a = r.call(this))), "DOM_CONTENT_LOADED_EVENT_END", void 0),
              J(Y(a), "NAVIGATION_START", void 0),
              J(Y(a), "_destroyed", void 0),
              J(Y(a), "_heartBeatTimeout", void 0),
              J(Y(a), "adTracker", void 0),
              J(Y(a), "dashjs", void 0),
              J(Y(a), "data", void 0),
              J(Y(a), "disablePlayheadRebufferTracking", void 0),
              J(Y(a), "disableRebufferTracking", void 0),
              J(Y(a), "errorTracker", void 0),
              J(Y(a), "errorTranslator", void 0),
              J(Y(a), "getAdData", void 0),
              J(Y(a), "getPlayheadTime", void 0),
              J(Y(a), "getStateData", void 0),
              J(Y(a), "hlsjs", void 0),
              J(Y(a), "id", void 0),
              J(Y(a), "longResumeTracker", void 0),
              J(Y(a), "minimumRebufferDuration", void 0),
              J(Y(a), "mux", void 0),
              J(Y(a), "oldEmit", void 0),
              J(Y(a), "playbackEventDispatcher", void 0),
              J(Y(a), "playbackHeartbeat", void 0),
              J(Y(a), "playbackHeartbeatTime", void 0),
              J(Y(a), "playheadTime", void 0),
              J(Y(a), "seekingTracker", void 0),
              J(Y(a), "sustainedRebufferThreshold", void 0),
              J(Y(a), "watchTimeTracker", void 0),
              J(Y(a), "currentFragmentPDT", void 0),
              J(Y(a), "currentFragmentStart", void 0),
              (a.DOM_CONTENT_LOADED_EVENT_END = eo.domContentLoadedEventEnd()),
              (a.NAVIGATION_START = eo.navigationStart()),
              (a.mux = e),
              (a.id = t),
              null != o &&
                o.beaconDomain &&
                a.mux.log.warn(
                  "The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`."
                ),
              ((o = Object.assign(
                {
                  debug: !1,
                  minimumRebufferDuration: 250,
                  sustainedRebufferThreshold: 1e3,
                  playbackHeartbeatTime: 25,
                  beaconDomain: "litix.io",
                  sampleRate: 1,
                  disableCookies: !1,
                  respectDoNotTrack: !1,
                  disableRebufferTracking: !1,
                  disablePlayheadRebufferTracking: !1,
                  errorTranslator: function (e) {
                    return e;
                  },
                },
                o
              )).data = o.data || {}),
              o.data.property_key &&
                ((o.data.env_key = o.data.property_key),
                delete o.data.property_key),
              W.setLevel(o.debug ? "debug" : "warn"),
              (a.getPlayheadTime = o.getPlayheadTime),
              (a.getStateData =
                o.getStateData ||
                function () {
                  return {};
                }),
              (a.getAdData = o.getAdData || function () {}),
              (a.minimumRebufferDuration = o.minimumRebufferDuration),
              (a.sustainedRebufferThreshold = o.sustainedRebufferThreshold),
              (a.playbackHeartbeatTime = o.playbackHeartbeatTime),
              (a.disableRebufferTracking = o.disableRebufferTracking),
              a.disableRebufferTracking &&
                a.mux.log.warn(
                  "Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."
                ),
              (a.disablePlayheadRebufferTracking =
                o.disablePlayheadRebufferTracking),
              (a.errorTranslator = o.errorTranslator),
              (a.playbackEventDispatcher = new ti(e, o.data.env_key, o)),
              (a.data = {
                player_instance_id: B(),
                mux_sample_rate: o.sampleRate,
                beacon_domain: o.beaconCollectionDomain || o.beaconDomain,
              }),
              (a.data.view_sequence_number = 1),
              (a.data.player_sequence_number = 1),
              (a.oldEmit = a.emit),
              (a.emit = function (e, t) {
                (t = Object.assign({ viewer_time: this.mux.utils.now() }, t)),
                  this.oldEmit(e, t);
              });
            var a,
              s = function () {
                void 0 === this.data.view_start &&
                  ((this.data.view_start = this.mux.utils.now()),
                  this.emit("viewstart"));
              }.bind(Y(a));
            a.on("viewinit", function (e, t) {
              this._resetVideoData(),
                this._resetViewData(),
                this._resetErrorData(),
                this._updateStateData(),
                Object.assign(this.data, t),
                this._initializeViewData(),
                this.one("play", s),
                this.one("adbreakstart", s);
            });
            var l = function (e) {
              this.emit("viewend"),
                this.send("viewend"),
                this.emit("viewinit", e);
            }.bind(Y(a));
            if (
              (a.on("videochange", function (e, t) {
                l(t);
              }),
              a.on("programchange", function (e, t) {
                this.data.player_is_paused &&
                  this.mux.log.warn(
                    "The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."
                  ),
                  l(Object.assign(t, { view_program_changed: !0 })),
                  s(),
                  this.emit("play"),
                  this.emit("playing");
              }),
              a.on("fragmentchange", function (e, t) {
                (this.currentFragmentPDT = t.currentFragmentPDT),
                  (this.currentFragmentStart = t.currentFragmentStart);
              }),
              a.on("destroy", a.destroy),
              "undefined" != typeof window &&
                "function" == typeof window.addEventListener &&
                "function" == typeof window.removeEventListener)
            ) {
              var u = function () {
                var e = void 0 !== a.data.view_start;
                (a.mux.WINDOW_HIDDEN = "hidden" === document.visibilityState),
                  e &&
                    a.mux.WINDOW_HIDDEN &&
                    (a.data.player_is_paused || a.emit("hb"));
              };
              window.addEventListener("visibilitychange", u, !1);
              var d = function (e) {
                e.persisted || a.destroy();
              };
              window.addEventListener("pagehide", d, !1),
                a.on("destroy", function () {
                  window.removeEventListener("visibilitychange", u),
                    window.removeEventListener("pagehide", d);
                });
            }
            return (
              a.on("playerready", function (e, t) {
                Object.assign(this.data, t);
              }),
              ta.forEach(function (e) {
                a.on(e, function (t, r) {
                  0 !== e.indexOf("ad") && this._updateStateData(),
                    Object.assign(this.data, r),
                    this._sanitizeData();
                }),
                  a.on("after" + e, function () {
                    ("error" !== e || this.errorTracker.viewErrored) &&
                      this.send(e);
                  });
              }),
              a.on("viewend", function (e, t) {
                Object.assign(a.data, t);
              }),
              a.one("playerready", function (e) {
                var t = this.mux.utils.now();
                this.data.player_init_time &&
                  (this.data.player_startup_time =
                    t - this.data.player_init_time),
                  !this.mux.PLAYER_TRACKED &&
                    this.NAVIGATION_START &&
                    ((this.mux.PLAYER_TRACKED = !0),
                    (this.data.player_init_time ||
                      this.DOM_CONTENT_LOADED_EVENT_END) &&
                      (this.data.page_load_time =
                        Math.min(
                          this.data.player_init_time || 1 / 0,
                          this.DOM_CONTENT_LOADED_EVENT_END || 1 / 0
                        ) - this.NAVIGATION_START)),
                  this.send("playerready"),
                  delete this.data.player_startup_time,
                  delete this.data.page_load_time;
              }),
              (a.longResumeTracker = new to(Y(a))),
              (a.errorTracker = new eP(Y(a))),
              new eF(Y(a)),
              (a.seekingTracker = new eN(Y(a))),
              (a.playheadTime = new eL(Y(a))),
              (a.playbackHeartbeat = new eS(Y(a))),
              new eI(Y(a)),
              (a.watchTimeTracker = new eD(Y(a))),
              new eR(Y(a)),
              (a.adTracker = new eU(Y(a))),
              new eO(Y(a)),
              new eC(Y(a)),
              new eM(Y(a)),
              new eV(Y(a)),
              new tn(Y(a)),
              o.hlsjs && a.addHLSJS(o),
              o.dashjs && a.addDashJS(o),
              a.emit("viewinit", o.data),
              a
            );
          }
          return (
            Z(i, [
              {
                key: "destroy",
                value: function () {
                  this._destroyed ||
                    ((this._destroyed = !0),
                    void 0 !== this.data.view_start &&
                      (this.emit("viewend"), this.send("viewend")),
                    this.playbackEventDispatcher.destroy(),
                    this.removeHLSJS(),
                    this.removeDashJS(),
                    window.clearTimeout(this._heartBeatTimeout));
                },
              },
              {
                key: "send",
                value: function (e) {
                  if (this.data.view_id) {
                    var t = Object.assign({}, this.data);
                    if (
                      (void 0 === t.video_source_is_live &&
                        (t.player_source_duration === 1 / 0 ||
                        t.video_source_duration === 1 / 0
                          ? (t.video_source_is_live = !0)
                          : (t.player_source_duration > 0 ||
                              t.video_source_duration > 0) &&
                            (t.video_source_is_live = !1)),
                      t.video_source_is_live ||
                        [
                          "player_program_time",
                          "player_manifest_newest_program_time",
                          "player_live_edge_program_time",
                          "player_program_time",
                          "video_holdback",
                          "video_part_holdback",
                          "video_target_duration",
                          "video_part_target_duration",
                        ].forEach(function (e) {
                          t[e] = void 0;
                        }),
                      (t.video_source_url =
                        t.video_source_url || t.player_source_url),
                      t.video_source_url)
                    ) {
                      var r = N(ei(t.video_source_url), 2),
                        i = r[0],
                        o = r[1];
                      (t.video_source_domain = o),
                        (t.video_source_hostname = i);
                    }
                    delete t.ad_request_id,
                      this.playbackEventDispatcher.send(e, t),
                      this.data.view_sequence_number++,
                      this.data.player_sequence_number++,
                      this._restartHeartBeat(),
                      "viewend" === e && delete this.data.view_id;
                  }
                },
              },
              {
                key: "_updateStateData",
                value: function () {
                  Object.assign(this.data, this.getStateData()),
                    this.playheadTime._updatePlayheadTime(),
                    this._sanitizeData();
                },
              },
              {
                key: "_sanitizeData",
                value: function () {
                  var e = this;
                  [
                    "player_width",
                    "player_height",
                    "video_source_width",
                    "video_source_height",
                    "player_playhead_time",
                    "video_source_bitrate",
                  ].forEach(function (t) {
                    var r = parseInt(e.data[t], 10);
                    e.data[t] = isNaN(r) ? void 0 : r;
                  }),
                    ["player_source_url", "video_source_url"].forEach(function (
                      t
                    ) {
                      if (e.data[t]) {
                        var r = e.data[t].toLowerCase();
                        (0 === r.indexOf("data:") ||
                          0 === r.indexOf("blob:")) &&
                          (e.data[t] = "MSE style URL");
                      }
                    });
                },
              },
              {
                key: "_resetVideoData",
                value: function () {
                  var e = this;
                  Object.keys(this.data).forEach(function (t) {
                    0 === t.indexOf("video_") && delete e.data[t];
                  });
                },
              },
              {
                key: "_resetViewData",
                value: function () {
                  var e = this;
                  Object.keys(this.data).forEach(function (t) {
                    0 === t.indexOf("view_") && delete e.data[t];
                  }),
                    (this.data.view_sequence_number = 1);
                },
              },
              {
                key: "_resetErrorData",
                value: function () {
                  delete this.data.player_error_code,
                    delete this.data.player_error_message,
                    delete this.data.player_error_context,
                    delete this.data.player_error_severity,
                    delete this.data.player_error_business_exception;
                },
              },
              {
                key: "_initializeViewData",
                value: function () {
                  var e = this,
                    t = (this.data.view_id = B()),
                    r = function () {
                      t === e.data.view_id &&
                        ea(e.data, "player_view_count", 1);
                    };
                  this.data.player_is_paused ? this.one("play", r) : r();
                },
              },
              {
                key: "_restartHeartBeat",
                value: function () {
                  var e = this;
                  window.clearTimeout(this._heartBeatTimeout),
                    (this._heartBeatTimeout = window.setTimeout(function () {
                      e.data.player_is_paused || e.emit("hb");
                    }, 1e4));
                },
              },
              {
                key: "addHLSJS",
                value: function (e) {
                  if (!e.hlsjs) {
                    this.mux.log.warn(
                      "You must pass a valid hlsjs instance in order to track it."
                    );
                    return;
                  }
                  if (this.hlsjs) {
                    this.mux.log.warn(
                      "An instance of HLS.js is already being monitored for this player."
                    );
                    return;
                  }
                  (this.hlsjs = e.hlsjs),
                    ev(this.mux, this.id, e.hlsjs, {}, e.Hls || window.Hls);
                },
              },
              {
                key: "removeHLSJS",
                value: function () {
                  this.hlsjs && (ey(this.hlsjs), (this.hlsjs = void 0));
                },
              },
              {
                key: "addDashJS",
                value: function (e) {
                  if (!e.dashjs) {
                    this.mux.log.warn(
                      "You must pass a valid dashjs instance in order to track it."
                    );
                    return;
                  }
                  if (this.dashjs) {
                    this.mux.log.warn(
                      "An instance of Dash.js is already being monitored for this player."
                    );
                    return;
                  }
                  (this.dashjs = e.dashjs), eT(this.mux, this.id, e.dashjs);
                },
              },
              {
                key: "removeDashJS",
                value: function () {
                  this.dashjs && (ex(this.dashjs), (this.dashjs = void 0));
                },
              },
            ]),
            i
          );
        })(ek);
      v();
      var tl,
        tu = p(M()),
        td = [
          "loadstart",
          "pause",
          "play",
          "playing",
          "seeking",
          "seeked",
          "timeupdate",
          "ratechange",
          "stalled",
          "waiting",
          "error",
          "ended",
        ],
        tc = {
          1: "MEDIA_ERR_ABORTED",
          2: "MEDIA_ERR_NETWORK",
          3: "MEDIA_ERR_DECODE",
          4: "MEDIA_ERR_SRC_NOT_SUPPORTED",
        },
        th = p(f());
      th.default && th.default.WeakMap && (tl = new WeakMap());
      var tp = {
          TARGET_DURATION: "#EXT-X-TARGETDURATION",
          PART_INF: "#EXT-X-PART-INF",
          SERVER_CONTROL: "#EXT-X-SERVER-CONTROL",
          INF: "#EXTINF",
          PROGRAM_DATE_TIME: "#EXT-X-PROGRAM-DATE-TIME",
          VERSION: "#EXT-X-VERSION",
          SESSION_DATA: "#EXT-X-SESSION-DATA",
        },
        tf = function (e) {
          return (
            (this.buffer = ""),
            (this.manifest = {
              segments: [],
              serverControl: {},
              sessionData: {},
            }),
            (this.currentUri = {}),
            this.process(e),
            this.manifest
          );
        };
      (tf.prototype.process = function (e) {
        var t;
        for (
          this.buffer += e, t = this.buffer.indexOf("\n");
          t > -1;
          t = this.buffer.indexOf("\n")
        )
          this.processLine(this.buffer.substring(0, t)),
            (this.buffer = this.buffer.substring(t + 1));
      }),
        (tf.prototype.processLine = function (e) {
          var t = e.indexOf(":"),
            r = tw(e, t),
            i = r[0],
            o = 2 === r.length ? ty(r[1]) : void 0;
          if ("#" !== i[0])
            (this.currentUri.uri = i),
              this.manifest.segments.push(this.currentUri),
              !this.manifest.targetDuration ||
                "duration" in this.currentUri ||
                (this.currentUri.duration = this.manifest.targetDuration),
              (this.currentUri = {});
          else
            switch (i) {
              case tp.TARGET_DURATION:
                if (!isFinite(o) || o < 0) return;
                (this.manifest.targetDuration = o), this.setHoldBack();
                break;
              case tp.PART_INF:
                tm(this.manifest, r),
                  this.manifest.partInf.partTarget &&
                    (this.manifest.partTargetDuration =
                      this.manifest.partInf.partTarget),
                  this.setHoldBack();
                break;
              case tp.SERVER_CONTROL:
                tm(this.manifest, r), this.setHoldBack();
                break;
              case tp.INF:
                0 === o
                  ? (this.currentUri.duration = 0.01)
                  : o > 0 && (this.currentUri.duration = o);
                break;
              case tp.PROGRAM_DATE_TIME:
                var a = new Date(o);
                this.manifest.dateTimeString ||
                  ((this.manifest.dateTimeString = o),
                  (this.manifest.dateTimeObject = a)),
                  (this.currentUri.dateTimeString = o),
                  (this.currentUri.dateTimeObject = a);
                break;
              case tp.VERSION:
                tm(this.manifest, r);
                break;
              case tp.SESSION_DATA:
                var s = ep(tT(r[1]));
                Object.assign(this.manifest.sessionData, s);
            }
        }),
        (tf.prototype.setHoldBack = function () {
          var e = this.manifest,
            t = e.serverControl,
            r = e.targetDuration,
            i = e.partTargetDuration;
          if (t) {
            var o = "holdBack",
              a = "partHoldBack",
              s = r && 3 * r,
              l = i && 2 * i;
            r && !t.hasOwnProperty(o) && (t[o] = s),
              s && t[o] < s && (t[o] = s),
              i && !t.hasOwnProperty(a) && (t[a] = 3 * i),
              i && t[a] < l && (t[a] = l);
          }
        });
      var tm = function (e, t) {
          var r,
            i = tv(t[0].replace("#EXT-X-", ""));
          t_(t[1])
            ? ((r = {}), (r = Object.assign(tb(t[1]), r)))
            : (r = ty(t[1])),
            (e[i] = r);
        },
        tv = function (e) {
          return e.toLowerCase().replace(/-(\w)/g, function (e) {
            return e[1].toUpperCase();
          });
        },
        ty = function (e) {
          if ("yes" === e.toLowerCase() || "no" === e.toLowerCase())
            return "yes" === e.toLowerCase();
          var t = -1 !== e.indexOf(":") ? e : parseFloat(e);
          return isNaN(t) ? e : t;
        },
        tg = function (e) {
          var t = {},
            r = e.split("=");
          return r.length > 1 && (t[tv(r[0])] = ty(r[1])), t;
        },
        tb = function (e) {
          for (var t = e.split(","), r = {}, i = 0; t.length > i; i++)
            r = Object.assign(tg(t[i]), r);
          return r;
        },
        t_ = function (e) {
          return e.indexOf("=") > -1;
        },
        tw = function (e, t) {
          return -1 === t ? [e] : [e.substring(0, t), e.substring(t + 1)];
        },
        tT = function (e) {
          var t = {};
          if (e) {
            var r = e.search(",");
            return (
              [e.slice(0, r), e.slice(r + 1)].forEach(function (e, r) {
                for (
                  var i = e.replace(/['"]+/g, "").split("="), o = 0;
                  o < i.length;
                  o++
                )
                  "DATA-ID" === i[o] && (t["DATA-ID"] = i[1 - o]),
                    "VALUE" === i[o] && (t.VALUE = i[1 - o]);
              }),
              { data: t }
            );
          }
        },
        tx = {
          safeCall: function (e, t, r, i) {
            var o = i;
            if (e && "function" == typeof e[t])
              try {
                o = e[t].apply(e, r);
              } catch (e) {
                W.info("safeCall error", e);
              }
            return o;
          },
          safeIncrement: ea,
          getComputedStyle: function (e, t) {
            var r;
            return e &&
              t &&
              th.default &&
              "function" == typeof th.default.getComputedStyle
              ? (tl && tl.has(e) && (r = tl.get(e)),
                r ||
                  ((r = th.default.getComputedStyle(e, null)),
                  tl && tl.set(e, r)),
                r.getPropertyValue(t))
              : "";
          },
          secondsToMs: function (e) {
            return Math.floor(1e3 * e);
          },
          assign: Object.assign,
          headersStringToObject: ec,
          cdnHeadersToRequestId: eh,
          extractHostnameAndDomain: ei,
          extractHostname: er,
          manifestParser: tf,
          generateShortID: U,
          generateUUID: B,
          now: K.now,
        },
        tE = {},
        tk = function (e) {
          var t = arguments;
          "string" == typeof e
            ? tk.hasOwnProperty(e)
              ? j.default.setTimeout(function () {
                  (t = Array.prototype.splice.call(t, 1)), tk[e].apply(null, t);
                }, 0)
              : W.warn("`" + e + "` is an unknown task")
            : "function" == typeof e
            ? j.default.setTimeout(function () {
                e(tk);
              }, 0)
            : W.warn("`" + e + "` is invalid.");
        },
        tA = {
          loaded: K.now(),
          NAME: "mux-embed",
          VERSION: "5.2.1",
          API_VERSION: "2.1",
          PLAYER_TRACKED: !1,
          monitor: function (e, t) {
            return (function (e, t, r) {
              var i = N(V(t), 3),
                o = i[0],
                a = i[1],
                s = i[2],
                l = e.log,
                u = e.utils.getComputedStyle,
                d = e.utils.secondsToMs;
              if (!o)
                return l.error(
                  "No element was found with the `" + a + "` query selector."
                );
              if ("video" !== s && "audio" !== s)
                return l.error(
                  "The element of `" + a + "` was not a media element."
                );
              o.mux &&
                (o.mux.destroy(),
                delete o.mux,
                l.warn(
                  "Already monitoring this video element, replacing existing event listeners"
                )),
                ((r = Object.assign({ automaticErrorTracking: !0 }, r)).data =
                  Object.assign(
                    {
                      player_software: "HTML5 Video Element",
                      player_mux_plugin_name: "VideoElementMonitor",
                      player_mux_plugin_version: e.VERSION,
                    },
                    r.data
                  )),
                (r.getPlayheadTime = function () {
                  return d(o.currentTime);
                }),
                (r.getStateData = function () {
                  var e,
                    t = this.hlsjs && this.hlsjs.url,
                    i =
                      this.dashjs &&
                      m("function" === this.dashjs.getSource) &&
                      this.dashjs.getSource(),
                    a = {
                      player_is_paused: o.paused,
                      player_playhead_time: d(o.currentTime),
                      player_width: parseInt(u(o, "width")),
                      player_height: parseInt(u(o, "height")),
                      player_autoplay_on: o.autoplay,
                      player_preload_on: o.preload,
                      player_language_code: o.lang,
                      player_is_fullscreen:
                        tu.default &&
                        !!(
                          tu.default.fullscreenElement ||
                          tu.default.webkitFullscreenElement ||
                          tu.default.mozFullScreenElement ||
                          tu.default.msFullscreenElement
                        ),
                      video_poster_url: o.poster,
                      video_source_url: t || i || o.currentSrc,
                      video_source_duration: d(o.duration),
                      video_source_height: o.videoHeight,
                      video_source_width: o.videoWidth,
                      view_dropped_frame_count:
                        null == o ||
                        null === (e = o.getVideoPlaybackQuality) ||
                        void 0 === e
                          ? void 0
                          : e.call(o).droppedVideoFrames,
                    },
                    s = r.getPlayheadTime();
                  if (o.getStartDate && s > 0) {
                    var l = o.getStartDate();
                    if (l && "function" == typeof l.getTime && l.getTime()) {
                      var c = l.getTime();
                      if (
                        ((a.player_program_time = c + s), o.seekable.length > 0)
                      ) {
                        var h = c + o.seekable.end(o.seekable.length - 1);
                        a.player_live_edge_program_time = h;
                      }
                    }
                  }
                  return a;
                }),
                (o.mux = o.mux || {}),
                (o.mux.deleted = !1),
                (o.mux.emit = function (t, r) {
                  e.emit(a, t, r);
                });
              var c = function () {
                l.error(
                  "The monitor for this video element has already been destroyed."
                );
              };
              (o.mux.destroy = function () {
                Object.keys(o.mux.listeners).forEach(function (e) {
                  o.removeEventListener(e, o.mux.listeners[e], !1);
                }),
                  delete o.mux.listeners,
                  (o.mux.destroy = c),
                  (o.mux.swapElement = c),
                  (o.mux.emit = c),
                  (o.mux.addHLSJS = c),
                  (o.mux.addDashJS = c),
                  (o.mux.removeHLSJS = c),
                  (o.mux.removeDashJS = c),
                  (o.mux.deleted = !0),
                  e.emit(a, "destroy");
              }),
                (o.mux.swapElement = function (t) {
                  var r = N(V(t), 3),
                    i = r[0],
                    a = r[1],
                    s = r[2];
                  return i
                    ? "video" !== s && "audio" !== s
                      ? e.log.error(
                          "The element of `" + a + "` was not a media element."
                        )
                      : void ((i.muxId = o.muxId),
                        delete o.muxId,
                        (i.mux = i.mux || {}),
                        (i.mux.listeners = Object.assign({}, o.mux.listeners)),
                        delete o.mux.listeners,
                        Object.keys(i.mux.listeners).forEach(function (e) {
                          o.removeEventListener(e, i.mux.listeners[e], !1),
                            i.addEventListener(e, i.mux.listeners[e], !1);
                        }),
                        (i.mux.swapElement = o.mux.swapElement),
                        (i.mux.destroy = o.mux.destroy),
                        delete o.mux,
                        (o = i))
                    : e.log.error(
                        "No element was found with the `" +
                          a +
                          "` query selector."
                      );
                }),
                (o.mux.addHLSJS = function (t) {
                  e.addHLSJS(a, t);
                }),
                (o.mux.addDashJS = function (t) {
                  e.addDashJS(a, t);
                }),
                (o.mux.removeHLSJS = function () {
                  e.removeHLSJS(a);
                }),
                (o.mux.removeDashJS = function () {
                  e.removeDashJS(a);
                }),
                e.init(a, r),
                e.emit(a, "playerready"),
                o.paused ||
                  (e.emit(a, "play"), o.readyState > 2 && e.emit(a, "playing")),
                (o.mux.listeners = {}),
                td.forEach(function (t) {
                  ("error" !== t || r.automaticErrorTracking) &&
                    ((o.mux.listeners[t] = function () {
                      var r = {};
                      if ("error" === t) {
                        if (!o.error || 1 === o.error.code) return;
                        (r.player_error_code = o.error.code),
                          (r.player_error_message =
                            tc[o.error.code] || o.error.message);
                      }
                      e.emit(a, t, r);
                    }),
                    o.addEventListener(t, o.mux.listeners[t], !1));
                });
            })(tk, e, t);
          },
          destroyMonitor: function (e) {
            var t = N(V(e), 1)[0];
            t && t.mux && "function" == typeof t.mux.destroy
              ? t.mux.destroy()
              : W.error(
                  "A video element monitor for `" +
                    e +
                    "` has not been initialized via `mux.monitor`."
                );
          },
          addHLSJS: function (e, t) {
            var r = q(e);
            tE[r]
              ? tE[r].addHLSJS(t)
              : W.error("A monitor for `" + r + "` has not been initialized.");
          },
          addDashJS: function (e, t) {
            var r = q(e);
            tE[r]
              ? tE[r].addDashJS(t)
              : W.error("A monitor for `" + r + "` has not been initialized.");
          },
          removeHLSJS: function (e) {
            var t = q(e);
            tE[t]
              ? tE[t].removeHLSJS()
              : W.error("A monitor for `" + t + "` has not been initialized.");
          },
          removeDashJS: function (e) {
            var t = q(e);
            tE[t]
              ? tE[t].removeDashJS()
              : W.error("A monitor for `" + t + "` has not been initialized.");
          },
          init: function (e, t) {
            $() &&
              t &&
              t.respectDoNotTrack &&
              W.info(
                "The browser's Do Not Track flag is enabled - Mux beaconing is disabled."
              );
            var r = q(e);
            tE[r] = new ts(tk, r, t);
          },
          emit: function (e, t, r) {
            var i = q(e);
            tE[i]
              ? (tE[i].emit(t, r), "destroy" === t && delete tE[i])
              : W.error("A monitor for `" + i + "` has not been initialized.");
          },
          checkDoNotTrack: $,
          log: W,
          utils: tx,
          events: {
            PLAYER_READY: "playerready",
            VIEW_INIT: "viewinit",
            VIDEO_CHANGE: "videochange",
            PLAY: "play",
            PAUSE: "pause",
            PLAYING: "playing",
            TIME_UPDATE: "timeupdate",
            SEEKING: "seeking",
            SEEKED: "seeked",
            REBUFFER_START: "rebufferstart",
            REBUFFER_END: "rebufferend",
            ERROR: "error",
            ENDED: "ended",
            RENDITION_CHANGE: "renditionchange",
            ORIENTATION_CHANGE: "orientationchange",
            AD_REQUEST: "adrequest",
            AD_RESPONSE: "adresponse",
            AD_BREAK_START: "adbreakstart",
            AD_PLAY: "adplay",
            AD_PLAYING: "adplaying",
            AD_PAUSE: "adpause",
            AD_FIRST_QUARTILE: "adfirstquartile",
            AD_MID_POINT: "admidpoint",
            AD_THIRD_QUARTILE: "adthirdquartile",
            AD_ENDED: "adended",
            AD_BREAK_END: "adbreakend",
            AD_ERROR: "aderror",
            REQUEST_COMPLETED: "requestcompleted",
            REQUEST_FAILED: "requestfailed",
            REQUEST_CANCELLED: "requestcanceled",
          },
          WINDOW_HIDDEN: !1,
          WINDOW_UNLOADING: !1,
        };
      Object.assign(tk, tA),
        void 0 !== j.default &&
          "function" == typeof j.default.addEventListener &&
          j.default.addEventListener(
            "pagehide",
            function (e) {
              e.persisted || (tk.WINDOW_UNLOADING = !0);
            },
            !1
          );
      var tS = r(303).ZP,
        tP = class e extends Error {
          constructor(t, r = e.MEDIA_ERR_CUSTOM, i, o) {
            var a;
            super(t),
              (this.name = "MediaError"),
              (this.code = r),
              (this.context = o),
              (this.fatal =
                null != i
                  ? i
                  : r >= e.MEDIA_ERR_NETWORK && r <= e.MEDIA_ERR_ENCRYPTED),
              this.message ||
                (this.message =
                  null != (a = e.defaultMessages[this.code]) ? a : "");
          }
        };
      (tP.MEDIA_ERR_ABORTED = 1),
        (tP.MEDIA_ERR_NETWORK = 2),
        (tP.MEDIA_ERR_DECODE = 3),
        (tP.MEDIA_ERR_SRC_NOT_SUPPORTED = 4),
        (tP.MEDIA_ERR_ENCRYPTED = 5),
        (tP.MEDIA_ERR_CUSTOM = 100),
        (tP.defaultMessages = {
          1: "You aborted the media playback",
          2: "A network error caused the media download to fail.",
          3: "A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",
          4: "An unsupported error occurred. The server or network failed, or your browser does not support this format.",
          5: "The media is encrypted and there are no keys to decrypt it.",
        });
      var tD = tP,
        tR = (e) => null == e,
        tL = (e, t) => !tR(t) && e in t,
        tC = { ANY: "any", MUTED: "muted" },
        tO = { ON_DEMAND: "on-demand", LIVE: "live", UNKNOWN: "unknown" },
        tM = { MSE: "mse", NATIVE: "native" },
        tI = { HEADER: "header", QUERY: "query", NONE: "none" },
        tN = Object.values(tI),
        tj = { M3U8: "application/vnd.apple.mpegurl", MP4: "video/mp4" },
        tB = { HLS: tj.M3U8 },
        tU = (Object.keys(tB), [...Object.values(tj), "hls", "HLS"]),
        tq = {
          upTo720p: "720p",
          upTo1080p: "1080p",
          upTo1440p: "1440p",
          upTo2160p: "2160p",
        },
        tV = {
          noLessThan480p: "480p",
          noLessThan540p: "540p",
          noLessThan720p: "720p",
          noLessThan1080p: "1080p",
          noLessThan1440p: "1440p",
          noLessThan2160p: "2160p",
        },
        tF = { DESCENDING: "desc" },
        tH = (e, t, r, i, o = e) => {
          o.addEventListener(t, r, i),
            e.addEventListener(
              "teardown",
              () => {
                o.removeEventListener(t, r);
              },
              { once: !0 }
            );
        },
        tW = (e) => {
          let t = e.indexOf("?");
          return t < 0 ? [e] : [e.slice(0, t), e.slice(t)];
        },
        tz = (e) => {
          let t = e.type;
          if (t) {
            let e = t.toUpperCase();
            return tL(e, tB) ? tB[e] : t;
          }
          let { src: r } = e;
          return r ? tK(r) : "";
        },
        t$ = (e) => ("VOD" === e ? tO.ON_DEMAND : tO.LIVE),
        tG = (e) =>
          "EVENT" === e
            ? Number.POSITIVE_INFINITY
            : "VOD" === e
            ? Number.NaN
            : 0,
        tK = (e) => {
          let t = "";
          try {
            t = new URL(e).pathname;
          } catch {
            console.error("invalid url");
          }
          let r = t.lastIndexOf(".");
          if (r < 0) return "";
          let i = t.slice(r + 1).toUpperCase();
          return tL(i, tj) ? tj[i] : "";
        },
        tY = Object.values(tC),
        tX = (e) =>
          "boolean" == typeof e || ("string" == typeof e && tY.includes(e)),
        tQ = (e, t, r) => {
          let { autoplay: i } = e,
            o = !1,
            a = !1,
            s = tX(i) ? i : !!i,
            l = () => {
              o ||
                tH(
                  t,
                  "playing",
                  () => {
                    o = !0;
                  },
                  { once: !0 }
                );
            };
          if (
            (l(),
            tH(
              t,
              "loadstart",
              () => {
                (o = !1), l(), tZ(t, s);
              },
              { once: !0 }
            ),
            tH(
              t,
              "loadstart",
              () => {
                r ||
                  (a =
                    e.streamType && e.streamType !== tO.UNKNOWN
                      ? e.streamType === tO.LIVE
                      : !Number.isFinite(t.duration)),
                  tZ(t, s);
              },
              { once: !0 }
            ),
            r &&
              r.once(tS.Events.LEVEL_LOADED, (t, r) => {
                var i;
                a =
                  e.streamType && e.streamType !== tO.UNKNOWN
                    ? e.streamType === tO.LIVE
                    : null != (i = r.details.live) && i;
              }),
            !s)
          ) {
            let i = () => {
              !a ||
                Number.isFinite(e.startTime) ||
                (null != r && r.liveSyncPosition
                  ? (t.currentTime = r.liveSyncPosition)
                  : Number.isFinite(t.seekable.end(0)) &&
                    (t.currentTime = t.seekable.end(0)));
            };
            r &&
              tH(
                t,
                "play",
                () => {
                  "metadata" === t.preload
                    ? r.once(tS.Events.LEVEL_UPDATED, i)
                    : i();
                },
                { once: !0 }
              );
          }
          return (e) => {
            o || tZ(t, (s = tX(e) ? e : !!e));
          };
        },
        tZ = (e, t) => {
          if (!t) return;
          let r = e.muted,
            i = () => (e.muted = r);
          switch (t) {
            case tC.ANY:
              e.play().catch(() => {
                (e.muted = !0), e.play().catch(i);
              });
              break;
            case tC.MUTED:
              (e.muted = !0), e.play().catch(i);
              break;
            default:
              e.play().catch(() => {});
          }
        },
        tJ = ({ preload: e, src: t }, r, i) => {
          let o = (e) => {
            null != e && ["", "none", "metadata", "auto"].includes(e)
              ? r.setAttribute("preload", e)
              : r.removeAttribute("preload");
          };
          if (!i) return o(e), o;
          let a = !1,
            s = !1,
            l = i.config.maxBufferLength,
            u = i.config.maxBufferSize,
            d = (e) => {
              o(e);
              let t = null != e ? e : r.preload;
              s ||
                "none" === t ||
                ("metadata" === t
                  ? ((i.config.maxBufferLength = 1),
                    (i.config.maxBufferSize = 1))
                  : ((i.config.maxBufferLength = l),
                    (i.config.maxBufferSize = u)),
                c());
            },
            c = () => {
              !a && t && ((a = !0), i.loadSource(t));
            };
          return (
            tH(
              r,
              "play",
              () => {
                (s = !0),
                  (i.config.maxBufferLength = l),
                  (i.config.maxBufferSize = u),
                  c();
              },
              { once: !0 }
            ),
            d(e),
            d
          );
        },
        t0 = (e) => ("time" in e ? e.time : e.startTime);
      function t1(e, t, r, i, o) {
        let a = document.createElement("track");
        return (
          (a.kind = t),
          (a.label = r),
          i && (a.srclang = i),
          o && (a.id = o),
          (a.track.mode = ["subtitles", "captions"].includes(t)
            ? "disabled"
            : "hidden"),
          a.setAttribute("data-removeondestroy", ""),
          e.append(a),
          a.track
        );
      }
      function t2(e, t) {
        let r = Array.prototype.find.call(
          e.querySelectorAll("track"),
          (e) => e.track === t
        );
        null == r || r.remove();
      }
      function t5(e, t, r) {
        var i;
        return null ==
          (i = Array.from(e.querySelectorAll("track")).find(
            (e) => e.track.label === t && e.track.kind === r
          ))
          ? void 0
          : i.track;
      }
      async function t8(e, t, r, i) {
        let o = t5(e, r, i);
        return (
          o ||
            (((o = t1(e, i, r)).mode = "hidden"),
            await new Promise((e) => setTimeout(() => e(void 0), 0))),
          "hidden" !== o.mode && (o.mode = "hidden"),
          [...t]
            .sort((e, t) => t0(t) - t0(e))
            .forEach((t) => {
              var r, a;
              let s = t.value,
                l = t0(t);
              if ("endTime" in t && null != t.endTime)
                null == o ||
                  o.addCue(
                    new VTTCue(
                      l,
                      t.endTime,
                      "chapters" === i
                        ? s
                        : JSON.stringify(null != s ? s : null)
                    )
                  );
              else {
                let t = Array.prototype.findIndex.call(
                    null == o ? void 0 : o.cues,
                    (e) => e.startTime >= l
                  ),
                  u = null == (r = null == o ? void 0 : o.cues) ? void 0 : r[t],
                  d = u
                    ? u.startTime
                    : Number.isFinite(e.duration)
                    ? e.duration
                    : Number.MAX_SAFE_INTEGER,
                  c =
                    null == (a = null == o ? void 0 : o.cues)
                      ? void 0
                      : a[t - 1];
                c && (c.endTime = l),
                  null == o ||
                    o.addCue(
                      new VTTCue(
                        l,
                        d,
                        "chapters" === i
                          ? s
                          : JSON.stringify(null != s ? s : null)
                      )
                    );
              }
            }),
          e.textTracks.dispatchEvent(
            new Event("change", { bubbles: !0, composed: !0 })
          ),
          o
        );
      }
      var t4 = "cuepoints",
        t3 = Object.freeze({ label: t4 });
      async function t6(e, t, r = t3) {
        return t8(e, t, r.label, "metadata");
      }
      var t9 = (e) => ({ time: e.startTime, value: JSON.parse(e.text) });
      function t7(e, t = { label: t4 }) {
        let r = t5(e, t.label, "metadata");
        return null != r && r.cues ? Array.from(r.cues, (e) => t9(e)) : [];
      }
      function re(e, t = { label: t4 }) {
        var r, i;
        let o = t5(e, t.label, "metadata");
        if (!(null != (r = null == o ? void 0 : o.activeCues) && r.length))
          return;
        if (1 === o.activeCues.length) return t9(o.activeCues[0]);
        let { currentTime: a } = e;
        return t9(
          Array.prototype.find.call(
            null != (i = o.activeCues) ? i : [],
            ({ startTime: e, endTime: t }) => e <= a && t > a
          ) || o.activeCues[0]
        );
      }
      async function rt(e, t = t3) {
        return new Promise((r) => {
          tH(e, "loadstart", async () => {
            let i = await t6(e, [], t);
            tH(
              e,
              "cuechange",
              () => {
                let t = re(e);
                if (t) {
                  let r = new CustomEvent("cuepointchange", {
                    composed: !0,
                    bubbles: !0,
                    detail: t,
                  });
                  e.dispatchEvent(r);
                }
              },
              {},
              i
            ),
              r(i);
          });
        });
      }
      var rr = "chapters",
        ri = Object.freeze({ label: rr }),
        rn = (e) => ({
          startTime: e.startTime,
          endTime: e.endTime,
          value: e.text,
        });
      async function ro(e, t, r = ri) {
        return t8(e, t, r.label, "chapters");
      }
      function ra(e, t = { label: rr }) {
        var r;
        let i = t5(e, t.label, "chapters");
        return null != (r = null == i ? void 0 : i.cues) && r.length
          ? Array.from(i.cues, (e) => rn(e))
          : [];
      }
      function rs(e, t = { label: rr }) {
        var r, i;
        let o = t5(e, t.label, "chapters");
        if (!(null != (r = null == o ? void 0 : o.activeCues) && r.length))
          return;
        if (1 === o.activeCues.length) return rn(o.activeCues[0]);
        let { currentTime: a } = e;
        return rn(
          Array.prototype.find.call(
            null != (i = o.activeCues) ? i : [],
            ({ startTime: e, endTime: t }) => e <= a && t > a
          ) || o.activeCues[0]
        );
      }
      async function rl(e, t = ri) {
        return new Promise((r) => {
          tH(e, "loadstart", async () => {
            let i = await ro(e, [], t);
            tH(
              e,
              "cuechange",
              () => {
                let t = rs(e);
                if (t) {
                  let r = new CustomEvent("chapterchange", {
                    composed: !0,
                    bubbles: !0,
                    detail: t,
                  });
                  e.dispatchEvent(r);
                }
              },
              {},
              i
            ),
              r(i);
          });
        });
      }
      function ru(e, t) {
        if (t) {
          let r = t.playingDate;
          if (null != r) return new Date(r.getTime() - 1e3 * e.currentTime);
        }
        return "function" == typeof e.getStartDate
          ? e.getStartDate()
          : new Date(NaN);
      }
      function rd(e, t) {
        return t && t.playingDate
          ? t.playingDate
          : new Date(
              "function" == typeof e.getStartDate
                ? e.getStartDate().getTime() + 1e3 * e.currentTime
                : NaN
            );
      }
      var rc,
        rh,
        rp,
        rf = async (e) =>
          fetch(e)
            .then((e) => e.text())
            .then((e) =>
              fetch(
                e
                  .split(
                    `
`
                  )
                  .find(
                    (e, t, r) => t && r[t - 1].startsWith("#EXT-X-STREAM-INF")
                  )
              )
                .then((e) => e.text())
                .then((e) =>
                  e.split(`
`)
                )
            ),
        rm = (e) => {
          var t, r, i;
          let o =
              null ==
              (r = (
                null !=
                (t = e.find((e) => e.startsWith("#EXT-X-PLAYLIST-TYPE")))
                  ? t
                  : ""
              ).split(":")[1])
                ? void 0
                : r.trim(),
            a = t$(o),
            s = tG(o),
            l;
          if (a === tO.LIVE) {
            let t = e.find((e) => e.startsWith("#EXT-X-PART-INF"));
            if (t) l = 2 * +t.split(":")[1].split("=")[1];
            else {
              let t = e.find((e) => e.startsWith("#EXT-X-TARGETDURATION")),
                r =
                  null == (i = null == t ? void 0 : t.split(":"))
                    ? void 0
                    : i[1];
              l = 3 * +(null != r ? r : 6);
            }
          }
          return { streamType: a, targetLiveWindow: s, liveEdgeStartOffset: l };
        },
        rv = async (e, t) =>
          t === tj.MP4
            ? {
                streamType: tO.ON_DEMAND,
                targetLiveWindow: Number.NaN,
                liveEdgeStartOffset: void 0,
              }
            : t === tj.M3U8
            ? rm(await rf(e))
            : (console.error(
                `Media type ${t} is an unrecognized or unsupported type for src ${e}.`
              ),
              {
                streamType: void 0,
                targetLiveWindow: void 0,
                liveEdgeStartOffset: void 0,
              }),
        ry = async (e, t, r = tz({ src: e })) => {
          var i, o, a;
          let {
            streamType: s,
            targetLiveWindow: l,
            liveEdgeStartOffset: u,
          } = await rv(e, r);
          ((null != (i = rw.get(t)) ? i : {}).liveEdgeStartOffset = u),
            ((null != (o = rw.get(t)) ? o : {}).targetLiveWindow = l),
            t.dispatchEvent(
              new CustomEvent("targetlivewindowchange", {
                composed: !0,
                bubbles: !0,
              })
            ),
            ((null != (a = rw.get(t)) ? a : {}).streamType = s),
            t.dispatchEvent(
              new CustomEvent("streamtypechange", { composed: !0, bubbles: !0 })
            );
        },
        rg = (e) => {
          var t;
          let r = e.type,
            i = t$(r),
            o = tG(r),
            a,
            s = !!(null != (t = e.partList) && t.length);
          return (
            i === tO.LIVE && (a = s ? 2 * e.partTarget : 3 * e.targetduration),
            {
              streamType: i,
              targetLiveWindow: o,
              liveEdgeStartOffset: a,
              lowLatency: s,
            }
          );
        },
        rb = (e, t, r) => {
          var i, o, a, s, l, u, d, c;
          let {
            streamType: h,
            targetLiveWindow: p,
            liveEdgeStartOffset: f,
            lowLatency: m,
          } = rg(e);
          if (h === tO.LIVE) {
            m
              ? ((r.config.backBufferLength =
                  null != (i = r.userConfig.backBufferLength) ? i : 4),
                (r.config.maxFragLookUpTolerance =
                  null != (o = r.userConfig.maxFragLookUpTolerance)
                    ? o
                    : 0.001),
                (r.config.abrBandWidthUpFactor =
                  null != (a = r.userConfig.abrBandWidthUpFactor)
                    ? a
                    : r.config.abrBandWidthFactor))
              : (r.config.backBufferLength =
                  null != (s = r.userConfig.backBufferLength) ? s : 8);
            let e = Object.freeze({
              get length() {
                return t.seekable.length;
              },
              start: (e) => t.seekable.start(e),
              end(e) {
                var i;
                return e > this.length || e < 0 || Number.isFinite(t.duration)
                  ? t.seekable.end(e)
                  : null != (i = r.liveSyncPosition)
                  ? i
                  : t.seekable.end(e);
              },
            });
            (null != (l = rw.get(t)) ? l : {}).seekable = e;
          }
          ((null != (u = rw.get(t)) ? u : {}).liveEdgeStartOffset = f),
            ((null != (d = rw.get(t)) ? d : {}).targetLiveWindow = p),
            t.dispatchEvent(
              new CustomEvent("targetlivewindowchange", {
                composed: !0,
                bubbles: !0,
              })
            ),
            ((null != (c = rw.get(t)) ? c : {}).streamType = h),
            t.dispatchEvent(
              new CustomEvent("streamtypechange", { composed: !0, bubbles: !0 })
            );
        },
        r_ =
          -1 !==
          (null !=
          (rh =
            null == (rc = null == globalThis ? void 0 : globalThis.navigator)
              ? void 0
              : rc.userAgent)
            ? rh
            : ""
          )
            .toLowerCase()
            .indexOf("android"),
        rw = new WeakMap(),
        rT = "mux.com",
        rx = null == (rp = tS.isSupported) ? void 0 : rp.call(tS),
        rE = () => tk.utils.now(),
        rk = tk.utils.generateUUID,
        rA = ({
          playbackId: e,
          customDomain: t = rT,
          maxResolution: r,
          minResolution: i,
          renditionOrder: o,
          programStartTime: a,
          programEndTime: s,
          tokens: { playback: l } = {},
          extraSourceParams: u = {},
        } = {}) => {
          if (!e) return;
          let [d, c = ""] = tW(e),
            h = new URL(`https://stream.${t}/${d}.m3u8${c}`);
          return (
            l || h.searchParams.has("token")
              ? (h.searchParams.forEach((e, t) => {
                  "token" != t && h.searchParams.delete(t);
                }),
                l && h.searchParams.set("token", l))
              : (r && h.searchParams.set("max_resolution", r),
                i &&
                  (h.searchParams.set("min_resolution", i),
                  r &&
                    +r.slice(0, -1) < +i.slice(0, -1) &&
                    console.error(
                      "minResolution must be <= maxResolution",
                      "minResolution",
                      i,
                      "maxResolution",
                      r
                    )),
                o && h.searchParams.set("rendition_order", o),
                a && h.searchParams.set("program_start_time", `${a}`),
                s && h.searchParams.set("program_end_time", `${s}`),
                Object.entries(u).forEach(([e, t]) => {
                  null != t && h.searchParams.set(e, t);
                })),
            h.toString()
          );
        },
        rS = (e) => {
          if (!e) return;
          let [t] = e.split("?");
          return t || void 0;
        },
        rP = (e) => {
          if (!e || !e.startsWith("https://stream.")) return;
          let [t] = new URL(e).pathname.slice(1).split(".m3u8");
          return t || void 0;
        },
        rD = (e) => {
          var t, r, i;
          return null != (t = null == e ? void 0 : e.metadata) && t.video_id
            ? e.metadata.video_id
            : rZ(e) &&
              null != (i = null != (r = rS(e.playbackId)) ? r : rP(e.src))
            ? i
            : e.src;
        },
        rR = (e) => {
          var t;
          return null == (t = rw.get(e)) ? void 0 : t.error;
        },
        rL = (e) => {
          var t, r;
          return null != (r = null == (t = rw.get(e)) ? void 0 : t.streamType)
            ? r
            : tO.UNKNOWN;
        },
        rC = (e) => {
          var t, r;
          return null !=
            (r = null == (t = rw.get(e)) ? void 0 : t.targetLiveWindow)
            ? r
            : Number.NaN;
        },
        rO = (e) => {
          var t, r;
          return null != (r = null == (t = rw.get(e)) ? void 0 : t.seekable)
            ? r
            : e.seekable;
        },
        rM = (e) => {
          var t;
          let r = null == (t = rw.get(e)) ? void 0 : t.liveEdgeStartOffset;
          if ("number" != typeof r) return Number.NaN;
          let i = rO(e);
          return i.length ? i.end(i.length - 1) - r : Number.NaN;
        },
        rI = 0.034,
        rN = (e, t, r = rI) => Math.abs(e - t) <= r,
        rj = (e, t, r = rI) => e > t || rN(e, t, r),
        rB = (e, t = rI) => e.paused && rj(e.currentTime, e.duration, t),
        rU = (e, t) => {
          var r, i, o;
          if (!t || !e.buffered.length) return;
          if (e.readyState > 2) return !1;
          let a =
            t.currentLevel >= 0
              ? null ==
                (i = null == (r = t.levels) ? void 0 : r[t.currentLevel])
                ? void 0
                : i.details
              : null == (o = t.levels.find((e) => !!e.details))
              ? void 0
              : o.details;
          if (!a || a.live) return;
          let { fragments: s } = a;
          if (!(null != s && s.length)) return;
          if (e.currentTime < e.duration - (a.targetduration + 0.5)) return !1;
          let l = s[s.length - 1];
          if (e.currentTime <= l.start) return !1;
          let u = l.start + l.duration / 2,
            d = e.buffered.start(e.buffered.length - 1),
            c = e.buffered.end(e.buffered.length - 1);
          return u > d && u < c;
        },
        rq = (e, t) =>
          e.ended || e.loop ? e.ended : !!(t && rU(e, t)) || rB(e),
        rV = (e, t, r) => {
          rF(t, r);
          let { metadata: i = {} } = e,
            { view_session_id: o = rk() } = i,
            a = rD(e);
          (i.view_session_id = o),
            (i.video_id = a),
            (e.metadata = i),
            rw.set(t, {});
          let s = rW(e, t),
            l = tJ(e, t, s);
          rJ(e, t, s), r0(e, t, s), rt(t), rl(t);
          let u = tQ(e, t, s);
          return { engine: s, setAutoplay: u, setPreload: l };
        },
        rF = (e, t) => {
          let r = null == t ? void 0 : t.engine;
          r && (r.detachMedia(), r.destroy()),
            null != e &&
              e.mux &&
              !e.mux.deleted &&
              (e.mux.destroy(), delete e.mux),
            e &&
              (e.removeAttribute("src"),
              e.load(),
              e.removeEventListener("error", r2),
              e.removeEventListener("error", r5),
              e.removeEventListener("durationchange", r1),
              rw.delete(e),
              e.dispatchEvent(new Event("teardown")));
        };
      function rH(e, t) {
        var r;
        let i = tz(e);
        if (i !== tj.M3U8) return !0;
        let o = !i || null == (r = t.canPlayType(i)) || r,
          { preferPlayback: a } = e,
          s = a === tM.MSE,
          l = a === tM.NATIVE;
        return o && (l || !(rx && (s || r_)));
      }
      var rW = (e, t) => {
          let {
              debug: r,
              streamType: i,
              startTime: o = -1,
              metadata: a,
              preferCmcd: s,
              _hlsConfig: l = {},
            } = e,
            u = tz(e) === tj.M3U8,
            d = rH(e, t);
          if (u && !d && rx) {
            let t = rz(i),
              u = r$(e);
            return new tS({
              debug: r,
              startPosition: o,
              cmcd:
                s !== tI.NONE
                  ? {
                      useHeaders: s === tI.HEADER,
                      sessionId: null == a ? void 0 : a.view_session_id,
                      contentId: null == a ? void 0 : a.video_id,
                    }
                  : void 0,
              xhrSetup: (e, t) => {
                var r, i;
                if (s && s !== tI.QUERY) return;
                let o = new URL(t);
                if (!o.searchParams.has("CMCD")) return;
                let a = (
                  null !=
                  (i =
                    null == (r = o.searchParams.get("CMCD"))
                      ? void 0
                      : r.split(","))
                    ? i
                    : []
                )
                  .filter((e) => e.startsWith("sid") || e.startsWith("cid"))
                  .join(",");
                o.searchParams.set("CMCD", a), e.open("GET", o);
              },
              backBufferLength: 30,
              renderTextTracksNatively: !1,
              liveDurationInfinity: !0,
              capLevelToPlayerSize: !0,
              capLevelOnFPSDrop: !0,
              ...t,
              ...u,
              ...l,
            });
          }
        },
        rz = (e) => (e === tO.LIVE ? { backBufferLength: 8 } : {}),
        r$ = (e) => {
          let { drmToken: t, src: r, playbackId: i = rP(r) } = e;
          return t && i
            ? {
                emeEnabled: !0,
                drmSystems: {
                  "com.apple.fps": {
                    licenseUrl: rX(e, "fairplay"),
                    serverCertificateUrl: rQ(e, "fairplay"),
                  },
                  "com.widevine.alpha": { licenseUrl: rX(e, "widevine") },
                  "com.microsoft.playready": { licenseUrl: rX(e, "playready") },
                },
                requestMediaKeySystemAccessFunc: (e, t) => (
                  "com.widevine.alpha" === e &&
                    (t = [
                      ...t.map((e) => {
                        var t;
                        let r =
                          null == (t = e.videoCapabilities)
                            ? void 0
                            : t.map((e) => ({
                                ...e,
                                robustness: "HW_SECURE_ALL",
                              }));
                        return { ...e, videoCapabilities: r };
                      }),
                      ...t,
                    ]),
                  navigator.requestMediaKeySystemAccess(e, t)
                ),
              }
            : {};
        },
        rG = async (e) => await (await fetch(e)).arrayBuffer(),
        rK = async (e, t) =>
          new Uint8Array(
            await (
              await fetch(t, {
                method: "POST",
                headers: { "Content-type": "application/octet-stream" },
                body: e,
              })
            ).arrayBuffer()
          ),
        rY = (e, t) => {
          tH(t, "encrypted", async (r) => {
            try {
              let i = r.initDataType;
              if ("skd" !== i) {
                console.error(
                  `Received unexpected initialization data type "${i}"`
                );
                return;
              }
              if (!t.mediaKeys) {
                let r = await (
                    await navigator.requestMediaKeySystemAccess(
                      "com.apple.fps",
                      [
                        {
                          initDataTypes: [i],
                          videoCapabilities: [
                            {
                              contentType: "application/vnd.apple.mpegurl",
                              robustness: "",
                            },
                          ],
                          distinctiveIdentifier: "not-allowed",
                          persistentState: "not-allowed",
                          sessionTypes: ["temporary"],
                        },
                      ]
                    )
                  ).createMediaKeys(),
                  o = await rG(rQ(e, "fairplay"));
                await r.setServerCertificate(o), await t.setMediaKeys(r);
              }
              let o = r.initData;
              if (null == o) {
                console.error(
                  `Could not start encrypted playback due to missing initData in ${r.type} event`
                );
                return;
              }
              let a = t.mediaKeys.createSession();
              a.generateRequest(i, o);
              let s = await new Promise((e) => {
                  a.addEventListener(
                    "message",
                    (t) => {
                      e(t.message);
                    },
                    { once: !0 }
                  );
                }),
                l = await rK(s, rX(e, "fairplay"));
              return await a.update(l), a;
            } catch (e) {
              console.error(
                `Could not start encrypted playback due to exception "${e}"`
              );
            }
          });
        },
        rX = ({ playbackId: e, drmToken: t, customDomain: r = rT }, i) =>
          `https://license.${
            r.toLocaleLowerCase().endsWith(rT) ? r : rT
          }/license/${i}/${e}?token=${t}`,
        rQ = ({ playbackId: e, drmToken: t, customDomain: r = rT }, i) =>
          `https://license.${
            r.toLocaleLowerCase().endsWith(rT) ? r : rT
          }/appcert/${i}/${e}?token=${t}`,
        rZ = ({ playbackId: e, src: t, customDomain: r }) => {
          if (e) return !0;
          if ("string" != typeof t) return !1;
          let i = new URL(
            t,
            null == window ? void 0 : window.location.href
          ).hostname.toLocaleLowerCase();
          return i.includes(rT) || (!!r && i.includes(r.toLocaleLowerCase()));
        },
        rJ = (e, t, r) => {
          var i;
          let { envKey: o, disableTracking: a } = e,
            s = rZ(e);
          if (!a && (o || s)) {
            let {
                playerInitTime: a,
                playerSoftwareName: s,
                playerSoftwareVersion: l,
                beaconCollectionDomain: u,
                debug: d,
                disableCookies: c,
              } = e,
              h = {
                ...e.metadata,
                video_title:
                  (null == (i = null == e ? void 0 : e.metadata)
                    ? void 0
                    : i.video_title) || void 0,
              };
            tk.monitor(t, {
              debug: d,
              beaconCollectionDomain: u,
              hlsjs: r,
              Hls: r ? tS : void 0,
              automaticErrorTracking: !1,
              errorTranslator: (t) =>
                "string" != typeof t.player_error_code &&
                ("function" == typeof e.errorTranslator
                  ? e.errorTranslator(t)
                  : t),
              disableCookies: c,
              data: {
                ...(o ? { env_key: o } : {}),
                player_software_name: s,
                player_software: s,
                player_software_version: l,
                player_init_time: a,
                ...h,
              },
            });
          }
        },
        r0 = (e, t, r) => {
          var i;
          let o = rH(e, t),
            { src: a } = e,
            s = () => {
              t.ended ||
                !rq(t, r) ||
                (rU(t, r)
                  ? (t.currentTime = t.buffered.end(t.buffered.length - 1))
                  : t.dispatchEvent(new Event("ended")));
            },
            l,
            u,
            d = () => {
              var e, r;
              let i = null == (e = rO(t)) ? void 0 : e.start(0),
                o = null == (r = rO(t)) ? void 0 : r.end(0);
              (u !== o || l !== i) &&
                t.dispatchEvent(
                  new CustomEvent("seekablechange", { composed: !0 })
                ),
                (l = i),
                (u = o);
            };
          if ((tH(t, "durationchange", d), t && o)) {
            let r = tz(e);
            if ("string" == typeof a) {
              let o = () => {
                if (rL(t) !== tO.LIVE || Number.isFinite(t.duration)) return;
                let e = setInterval(d, 1e3);
                t.addEventListener(
                  "teardown",
                  () => {
                    clearInterval(e);
                  },
                  { once: !0 }
                ),
                  tH(t, "durationchange", () => {
                    Number.isFinite(t.duration) && clearInterval(e);
                  });
              };
              if ("none" === t.preload) {
                let e = () => {
                    ry(a, t, r).then(o),
                      t.removeEventListener("loadedmetadata", i);
                  },
                  i = () => {
                    ry(a, t, r).then(o), t.removeEventListener("play", e);
                  };
                tH(t, "play", e, { once: !0 }),
                  tH(t, "loadedmetadata", i, { once: !0 });
              } else ry(a, t, r).then(o);
              e.drmToken && rY(e, t),
                t.setAttribute("src", a),
                e.startTime &&
                  (((null != (i = rw.get(t)) ? i : {}).startTime = e.startTime),
                  t.addEventListener("durationchange", r1, { once: !0 }));
            } else t.removeAttribute("src");
            t.addEventListener("error", r2),
              t.addEventListener("error", r5),
              t.addEventListener(
                "emptied",
                () => {
                  t.querySelectorAll("track[data-removeondestroy]").forEach(
                    (e) => {
                      e.remove();
                    }
                  );
                },
                { once: !0 }
              ),
              tH(t, "pause", s),
              tH(t, "seeked", s),
              tH(t, "play", () => {
                t.ended ||
                  (rj(t.currentTime, t.duration) &&
                    (t.currentTime = t.seekable.start(0)));
              });
          } else
            r && a
              ? (r.once(tS.Events.LEVEL_LOADED, (e, i) => {
                  rb(i.details, t, r),
                    d(),
                    rL(t) !== tO.LIVE ||
                      Number.isFinite(t.duration) ||
                      (r.on(tS.Events.LEVEL_UPDATED, d),
                      tH(t, "durationchange", () => {
                        Number.isFinite(t.duration) &&
                          r.off(tS.Events.LEVELS_UPDATED, d);
                      }));
                }),
                r.on(tS.Events.ERROR, (e, r) => {
                  let i = {
                      [tS.ErrorTypes.NETWORK_ERROR]: tD.MEDIA_ERR_NETWORK,
                      [tS.ErrorTypes.MEDIA_ERROR]: tD.MEDIA_ERR_DECODE,
                    },
                    o = new tD("", i[r.type]);
                  (o.fatal = r.fatal),
                    (o.data = r),
                    t.dispatchEvent(new CustomEvent("error", { detail: o }));
                }),
                t.addEventListener("error", r5),
                tH(t, "waiting", s),
                (function (e, t) {
                  var r;
                  if (!("videoTracks" in e)) return;
                  let i = new WeakMap();
                  t.on(tS.Events.MANIFEST_PARSED, function (t, r) {
                    l();
                    let o = e.addVideoTrack("main");
                    for (let [e, t] of ((o.selected = !0),
                    r.levels.entries())) {
                      let r = o.addRendition(
                        t.url[0],
                        t.width,
                        t.height,
                        t.videoCodec,
                        t.bitrate
                      );
                      i.set(t, `${e}`), (r.id = `${e}`);
                    }
                  }),
                    t.on(tS.Events.AUDIO_TRACKS_UPDATED, function (t, r) {
                      for (let t of (s(), r.audioTracks)) {
                        let r = t.default ? "main" : "alternative",
                          i = e.addAudioTrack(r, t.name, t.lang);
                        (i.id = `${t.id}`), t.default && (i.enabled = !0);
                      }
                    }),
                    e.audioTracks.addEventListener("change", () => {
                      var r;
                      let i = +(null ==
                        (r = [...e.audioTracks].find((e) => e.enabled))
                          ? void 0
                          : r.id),
                        o = t.audioTracks.map((e) => e.id);
                      i != t.audioTrack && o.includes(i) && (t.audioTrack = i);
                    }),
                    t.on(tS.Events.LEVELS_UPDATED, function (t, r) {
                      var o;
                      let a =
                        e.videoTracks[
                          null != (o = e.videoTracks.selectedIndex) ? o : 0
                        ];
                      if (!a) return;
                      let s = r.levels.map((e) => i.get(e));
                      for (let t of e.videoRenditions)
                        t.id && !s.includes(t.id) && a.removeRendition(t);
                    });
                  let o = (r) => {
                    let i = e.currentTime,
                      o = !1,
                      a = (e, t) => {
                        o || (o = !Number.isFinite(t.endOffset));
                      };
                    t.on(tS.Events.BUFFER_FLUSHING, a),
                      (t.nextLevel = r),
                      t.off(tS.Events.BUFFER_FLUSHING, a),
                      o ||
                        t.trigger(tS.Events.BUFFER_FLUSHING, {
                          startOffset: i + 10,
                          endOffset: 1 / 0,
                          type: "video",
                        });
                  };
                  null == (r = e.videoRenditions) ||
                    r.addEventListener("change", (e) => {
                      let r = e.target.selectedIndex;
                      r != t.nextLevel && o(r);
                    });
                  let a = () => {
                      for (let t of e.videoTracks) e.removeVideoTrack(t);
                    },
                    s = () => {
                      for (let t of e.audioTracks) e.removeAudioTrack(t);
                    },
                    l = () => {
                      a(), s();
                    };
                  t.once(tS.Events.DESTROYING, l);
                })(e, r),
                (function (e, t) {
                  t.on(
                    tS.Events.NON_NATIVE_TEXT_TRACKS_FOUND,
                    (r, { tracks: i }) => {
                      i.forEach((r) => {
                        var i;
                        let o =
                            null != (i = r.subtitleTrack)
                              ? i
                              : r.closedCaptions,
                          a = t.subtitleTracks.findIndex(
                            ({ lang: e, name: t, type: i }) =>
                              e == (null == o ? void 0 : o.lang) &&
                              t === r.label &&
                              i.toLowerCase() === r.kind
                          );
                        t1(
                          e,
                          r.kind,
                          r.label,
                          null == o ? void 0 : o.lang,
                          `${r.kind}${a}`
                        );
                      });
                    }
                  );
                  let r = () => {
                    var r;
                    if (!t.subtitleTracks.length) return;
                    let i = Array.from(e.textTracks).find(
                        (e) =>
                          e.id &&
                          "showing" === e.mode &&
                          ["subtitles", "captions"].includes(e.kind)
                      ),
                      o = `${
                        null == (r = t.subtitleTracks[t.subtitleTrack])
                          ? void 0
                          : r.type.toLowerCase()
                      }${t.subtitleTrack}`;
                    if (
                      i &&
                      (t.subtitleTrack < 0 || (null == i ? void 0 : i.id) !== o)
                    ) {
                      let e = t.subtitleTracks.findIndex(
                        ({ lang: e, name: t, type: r }) =>
                          e == i.language &&
                          t === i.label &&
                          r.toLowerCase() === i.kind
                      );
                      t.subtitleTrack = e;
                    }
                    i &&
                      (null == i ? void 0 : i.id) === o &&
                      i.cues &&
                      Array.from(i.cues).forEach((e) => {
                        i.addCue(e);
                      });
                  };
                  e.textTracks.addEventListener("change", r),
                    t.on(tS.Events.CUES_PARSED, (t, { track: r, cues: i }) => {
                      let o = e.textTracks.getTrackById(r);
                      if (!o) return;
                      let a = "disabled" === o.mode;
                      a && (o.mode = "hidden"),
                        i.forEach((e) => {
                          var t;
                          (null != (t = o.cues) && t.getCueById(e.id)) ||
                            o.addCue(e);
                        }),
                        a && (o.mode = "disabled");
                    }),
                    t.once(tS.Events.DESTROYING, () => {
                      e.textTracks.removeEventListener("change", r),
                        e
                          .querySelectorAll("track[data-removeondestroy]")
                          .forEach((e) => {
                            e.remove();
                          });
                    });
                  let i = () => {
                    Array.from(e.textTracks).forEach((t) => {
                      var r, i;
                      if (
                        !["subtitles", "caption"].includes(t.kind) &&
                        "thumbnails" === t.label
                      ) {
                        if (!(null != (r = t.cues) && r.length)) {
                          let t = e.querySelector('track[label="thumbnails"]'),
                            r =
                              null !=
                              (i = null == t ? void 0 : t.getAttribute("src"))
                                ? i
                                : "";
                          null == t || t.removeAttribute("src"),
                            setTimeout(() => {
                              null == t || t.setAttribute("src", r);
                            }, 0);
                        }
                        "hidden" !== t.mode && (t.mode = "hidden");
                      }
                    });
                  };
                  t.once(tS.Events.MANIFEST_LOADED, i),
                    t.once(tS.Events.MEDIA_ATTACHED, i);
                })(t, r),
                r.attachMedia(t))
              : console.error(
                  "It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software."
                );
        };
      function r1(e) {
        var t;
        let r = e.target,
          i = null == (t = rw.get(r)) ? void 0 : t.startTime;
        if (
          i &&
          (function (e, t, r) {
            t && r > t && (r = t);
            for (let t = 0; t < e.length; t++)
              if (e.start(t) <= r && e.end(t) >= r) return !0;
            return !1;
          })(r.seekable, r.duration, i)
        ) {
          let e = "auto" === r.preload;
          e && (r.preload = "none"),
            (r.currentTime = i),
            e && (r.preload = "auto");
        }
      }
      async function r2(e) {
        if (!e.isTrusted) return;
        e.stopImmediatePropagation();
        let t = e.target;
        if (!(null != t && t.error)) return;
        let { message: r, code: i } = t.error,
          o = new tD(r, i);
        if (t.src && (i !== tD.MEDIA_ERR_DECODE || void 0 !== i))
          try {
            let { status: e } = await fetch(t.src);
            o.data = { response: { code: e } };
          } catch {}
        t.dispatchEvent(new CustomEvent("error", { detail: o }));
      }
      function r5(e) {
        var t, r;
        if (!(e instanceof CustomEvent) || !(e.detail instanceof tD)) return;
        let i = e.target,
          o = e.detail;
        o &&
          o.fatal &&
          (((null != (t = rw.get(i)) ? t : {}).error = o),
          null == (r = i.mux) ||
            r.emit("error", {
              player_error_code: o.code,
              player_error_message: o.message,
              player_error_context: o.context,
            }));
      }
    },
    5293: function (e, t, r) {
      "use strict";
      r.d(t, {
        g7: function () {
          return s;
        },
      });
      var i = r(2265);
      function o(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t);
      }
      var a = r(7437),
        s = i.forwardRef((e, t) => {
          let { children: r, ...o } = e,
            s = i.Children.toArray(r),
            u = s.find(d);
          if (u) {
            let e = u.props.children,
              r = s.map((t) =>
                t !== u
                  ? t
                  : i.Children.count(e) > 1
                  ? i.Children.only(null)
                  : i.isValidElement(e)
                  ? e.props.children
                  : null
              );
            return (0, a.jsx)(l, {
              ...o,
              ref: t,
              children: i.isValidElement(e)
                ? i.cloneElement(e, void 0, r)
                : null,
            });
          }
          return (0, a.jsx)(l, { ...o, ref: t, children: r });
        });
      s.displayName = "Slot";
      var l = i.forwardRef((e, t) => {
        let { children: r, ...a } = e;
        if (i.isValidElement(r)) {
          let e, s;
          let l =
            (e = Object.getOwnPropertyDescriptor(r.props, "ref")?.get) &&
            "isReactWarning" in e &&
            e.isReactWarning
              ? r.ref
              : (e = Object.getOwnPropertyDescriptor(r, "ref")?.get) &&
                "isReactWarning" in e &&
                e.isReactWarning
              ? r.props.ref
              : r.props.ref || r.ref;
          return i.cloneElement(r, {
            ...(function (e, t) {
              let r = { ...t };
              for (let i in t) {
                let o = e[i],
                  a = t[i];
                /^on[A-Z]/.test(i)
                  ? o && a
                    ? (r[i] = (...e) => {
                        a(...e), o(...e);
                      })
                    : o && (r[i] = o)
                  : "style" === i
                  ? (r[i] = { ...o, ...a })
                  : "className" === i &&
                    (r[i] = [o, a].filter(Boolean).join(" "));
              }
              return { ...e, ...r };
            })(a, r.props),
            ref: t
              ? (function (...e) {
                  return (t) => {
                    let r = !1,
                      i = e.map((e) => {
                        let i = o(e, t);
                        return r || "function" != typeof i || (r = !0), i;
                      });
                    if (r)
                      return () => {
                        for (let t = 0; t < i.length; t++) {
                          let r = i[t];
                          "function" == typeof r ? r() : o(e[t], null);
                        }
                      };
                  };
                })(t, l)
              : l,
          });
        }
        return i.Children.count(r) > 1 ? i.Children.only(null) : null;
      });
      l.displayName = "SlotClone";
      var u = ({ children: e }) => (0, a.jsx)(a.Fragment, { children: e });
      function d(e) {
        return i.isValidElement(e) && e.type === u;
      }
    },
    3871: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return R;
        },
      });
      var i,
        o = r(2265),
        a = r(3598),
        s =
          "u" > typeof globalThis
            ? globalThis
            : "u" > typeof window
            ? window
            : "u" > typeof global
            ? global
            : "u" > typeof self
            ? self
            : {},
        l = {},
        u = {};
      ({
        get exports() {
          return l;
        },
        set exports(n) {
          l = n;
        },
      }).exports = (function () {
        if (i) return u;
        i = 1;
        var e = Symbol.for("react.element"),
          t = Symbol.for("react.fragment"),
          r = Object.prototype.hasOwnProperty,
          a =
            o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          s = { key: !0, ref: !0, __self: !0, __source: !0 };
        function l(t, i, o) {
          var l,
            u = {},
            d = null,
            c = null;
          for (l in (void 0 !== o && (d = "" + o),
          void 0 !== i.key && (d = "" + i.key),
          void 0 !== i.ref && (c = i.ref),
          i))
            r.call(i, l) && !s.hasOwnProperty(l) && (u[l] = i[l]);
          if (t && t.defaultProps)
            for (l in (i = t.defaultProps)) void 0 === u[l] && (u[l] = i[l]);
          return {
            $$typeof: e,
            type: t,
            key: d,
            ref: c,
            props: u,
            _owner: a.current,
          };
        }
        return (u.Fragment = t), (u.jsx = l), (u.jsxs = l), u;
      })();
      let d = l.jsx;
      var c = 0 / 0,
        h = /^\s+|\s+$/g,
        p = /^[-+]0x[0-9a-f]+$/i,
        f = /^0b[01]+$/i,
        m = /^0o[0-7]+$/i,
        v = parseInt,
        y = "object" == typeof s && s && s.Object === Object && s,
        g = "object" == typeof self && self && self.Object === Object && self,
        b = y || g || Function("return this")(),
        _ = Object.prototype.toString,
        w = Math.max,
        T = Math.min,
        x = function () {
          return b.Date.now();
        };
      function E(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t);
      }
      function k(e) {
        if ("number" == typeof e) return e;
        if (
          "symbol" == typeof (t = e) ||
          (t && "object" == typeof t && "[object Symbol]" == _.call(t))
        )
          return c;
        if (E(e)) {
          var t,
            r = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = E(r) ? r + "" : r;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(h, "");
        var i = f.test(e);
        return i || m.test(e) ? v(e.slice(2), i ? 2 : 8) : p.test(e) ? c : +e;
      }
      var A = function (e, t, r) {
        var i,
          o,
          a,
          s,
          l,
          u,
          d = 0,
          c = !1,
          h = !1,
          p = !0;
        if ("function" != typeof e) throw TypeError("Expected a function");
        function f(t) {
          var r = i,
            a = o;
          return (i = o = void 0), (d = t), (s = e.apply(a, r));
        }
        function m(e) {
          var r = e - u,
            i = e - d;
          return void 0 === u || r >= t || r < 0 || (h && i >= a);
        }
        function v() {
          var e,
            r,
            i,
            o = x();
          if (m(o)) return y(o);
          l = setTimeout(
            v,
            ((e = o - u), (r = o - d), (i = t - e), h ? T(i, a - r) : i)
          );
        }
        function y(e) {
          return (l = void 0), p && i ? f(e) : ((i = o = void 0), s);
        }
        function g() {
          var e,
            r = x(),
            a = m(r);
          if (((i = arguments), (o = this), (u = r), a)) {
            if (void 0 === l)
              return (d = e = u), (l = setTimeout(v, t)), c ? f(e) : s;
            if (h) return (l = setTimeout(v, t)), f(u);
          }
          return void 0 === l && (l = setTimeout(v, t)), s;
        }
        return (
          (t = k(t) || 0),
          E(r) &&
            ((c = !!r.leading),
            (a = (h = "maxWait" in r) ? w(k(r.maxWait) || 0, t) : a),
            (p = "trailing" in r ? !!r.trailing : p)),
          (g.cancel = function () {
            void 0 !== l && clearTimeout(l), (d = 0), (i = u = o = l = void 0);
          }),
          (g.flush = function () {
            return void 0 === l ? s : y(x());
          }),
          g
        );
      };
      let S = [],
        P = { width: "100%", height: "100%" },
        D = (0, o.forwardRef)(function (
          {
            className: e,
            children: t,
            debounceTime: r = 300,
            ignoreDimensions: i = S,
            parentSizeStyles: a,
            enableDebounceLeadingCall: s = !0,
            resizeObserverPolyfill: l,
            ...u
          },
          c
        ) {
          var h;
          let p = (0, o.useRef)(null),
            f = (0, o.useRef)(0),
            [m, v] = (0, o.useState)({ width: 0, height: 0, top: 0, left: 0 }),
            y = (0, o.useMemo)(() => {
              let e = Array.isArray(i) ? i : [i];
              return A(
                (t) => {
                  v((r) =>
                    Object.keys(r)
                      .filter((e) => r[e] !== t[e])
                      .every((t) => e.includes(t))
                      ? r
                      : t
                  );
                },
                r,
                { leading: s }
              );
            }, [r, s, i]);
          return (
            (0, o.useEffect)(() => {
              let e = new (l || window.ResizeObserver)((e) => {
                e.forEach((e) => {
                  let {
                    left: t,
                    top: r,
                    width: i,
                    height: o,
                  } = (null == e ? void 0 : e.contentRect) ?? {};
                  f.current = window.requestAnimationFrame(() => {
                    y({ width: i, height: o, top: r, left: t });
                  });
                });
              });
              return (
                p.current && e.observe(p.current),
                () => {
                  window.cancelAnimationFrame(f.current),
                    e.disconnect(),
                    y.cancel();
                }
              );
            }, [y, l]),
            d("div", {
              style: { ...P, ...a },
              ref:
                ((h = [c, p]),
                (e) => {
                  h.forEach((t) => {
                    "function" == typeof t
                      ? t(e)
                      : null != t && (t.current = e);
                  });
                }),
              className: e,
              ...u,
              children: t({ ...m, ref: p.current, resize: y }),
            })
          );
        }),
        R = (0, o.forwardRef)(
          (
            {
              scene: e,
              style: t,
              onMouseDown: r,
              onMouseUp: i,
              onMouseHover: s,
              onKeyDown: l,
              onKeyUp: u,
              onStart: c,
              onLookAt: h,
              onFollow: p,
              onWheel: f,
              onLoad: m,
              renderOnDemand: v = !0,
              ...y
            },
            g
          ) => {
            let b = (0, o.useRef)(null),
              [_, w] = (0, o.useState)(!0);
            return (
              (0, o.useEffect)(() => {
                let t;
                w(!0);
                let o = [
                  { name: "mouseDown", cb: r },
                  { name: "mouseUp", cb: i },
                  { name: "mouseHover", cb: s },
                  { name: "keyDown", cb: l },
                  { name: "keyUp", cb: u },
                  { name: "start", cb: c },
                  { name: "lookAt", cb: h },
                  { name: "follow", cb: p },
                  { name: "scroll", cb: f },
                ];
                return (
                  b.current &&
                    ((t = new a.M(b.current, { renderOnDemand: v })),
                    (async function () {
                      for (let r of (await t.load(e), o))
                        r.cb && t.addEventListener(r.name, r.cb);
                      w(!1), null == m || m(t);
                    })()),
                  () => {
                    for (let e of o)
                      e.cb && t.removeEventListener(e.name, e.cb);
                    t.dispose();
                  }
                );
              }, [e]),
              d(D, {
                ref: g,
                parentSizeStyles: t,
                debounceTime: 50,
                ...y,
                children: () =>
                  d("canvas", {
                    ref: b,
                    style: { display: _ ? "none" : "block" },
                  }),
              })
            );
          }
        );
    },
    535: function (e, t, r) {
      "use strict";
      r.d(t, {
        j: function () {
          return s;
        },
      });
      var i = r(1994);
      let o = (e) => ("boolean" == typeof e ? `${e}` : 0 === e ? "0" : e),
        a = i.W,
        s = (e, t) => (r) => {
          var i;
          if ((null == t ? void 0 : t.variants) == null)
            return a(
              e,
              null == r ? void 0 : r.class,
              null == r ? void 0 : r.className
            );
          let { variants: s, defaultVariants: l } = t,
            u = Object.keys(s).map((e) => {
              let t = null == r ? void 0 : r[e],
                i = null == l ? void 0 : l[e];
              if (null === t) return null;
              let a = o(t) || o(i);
              return s[e][a];
            }),
            d =
              r &&
              Object.entries(r).reduce((e, t) => {
                let [r, i] = t;
                return void 0 === i || (e[r] = i), e;
              }, {});
          return a(
            e,
            u,
            null == t
              ? void 0
              : null === (i = t.compoundVariants) || void 0 === i
              ? void 0
              : i.reduce((e, t) => {
                  let { class: r, className: i, ...o } = t;
                  return Object.entries(o).every((e) => {
                    let [t, r] = e;
                    return Array.isArray(r)
                      ? r.includes({ ...l, ...d }[t])
                      : { ...l, ...d }[t] === r;
                  })
                    ? [...e, r, i]
                    : e;
                }, []),
            null == r ? void 0 : r.class,
            null == r ? void 0 : r.className
          );
        };
    },
    9415: function (e, t, r) {
      "use strict";
      let i;
      function o(e) {
        return (
          null !== e && "object" == typeof e && "function" == typeof e.start
        );
      }
      r.d(t, {
        E: function () {
          return op;
        },
      });
      let a = (e) => Array.isArray(e);
      function s(e, t) {
        if (!Array.isArray(t)) return !1;
        let r = t.length;
        if (r !== e.length) return !1;
        for (let i = 0; i < r; i++) if (t[i] !== e[i]) return !1;
        return !0;
      }
      function l(e) {
        return "string" == typeof e || Array.isArray(e);
      }
      function u(e) {
        let t = [{}, {}];
        return (
          null == e ||
            e.values.forEach((e, r) => {
              (t[0][r] = e.get()), (t[1][r] = e.getVelocity());
            }),
          t
        );
      }
      function d(e, t, r, i) {
        if ("function" == typeof t) {
          let [o, a] = u(i);
          t = t(void 0 !== r ? r : e.custom, o, a);
        }
        if (
          ("string" == typeof t && (t = e.variants && e.variants[t]),
          "function" == typeof t)
        ) {
          let [o, a] = u(i);
          t = t(void 0 !== r ? r : e.custom, o, a);
        }
        return t;
      }
      function c(e, t, r) {
        let i = e.getProps();
        return d(i, t, void 0 !== r ? r : i.custom, e);
      }
      let h = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        p = ["initial", ...h],
        f = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        m = new Set(f),
        v = (e) => 1e3 * e,
        y = (e) => e / 1e3,
        g = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        b = (e) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === e ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        _ = { type: "keyframes", duration: 0.8 },
        w = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        T = (e, { keyframes: t }) =>
          t.length > 2
            ? _
            : m.has(e)
            ? e.startsWith("scale")
              ? b(t[1])
              : g
            : w;
      function x(e, t) {
        return e ? e[t] || e.default || e : void 0;
      }
      let E = { skipAnimations: !1, useManualTiming: !1 },
        k = { current: !1 },
        A = (e) => null !== e;
      function S(e, { repeat: t, repeatType: r = "loop" }, i) {
        let o = e.filter(A),
          a = t && "loop" !== r && t % 2 == 1 ? 0 : o.length - 1;
        return a && void 0 !== i ? i : o[a];
      }
      let P = (e) => e,
        D = [
          "read",
          "resolveKeyframes",
          "update",
          "preRender",
          "render",
          "postRender",
        ];
      function R(e, t) {
        let r = !1,
          i = !0,
          o = { delta: 0, timestamp: 0, isProcessing: !1 },
          a = () => (r = !0),
          s = D.reduce(
            (e, t) => (
              (e[t] = (function (e) {
                let t = new Set(),
                  r = new Set(),
                  i = !1,
                  o = !1,
                  a = new WeakSet(),
                  s = { delta: 0, timestamp: 0, isProcessing: !1 };
                function l(t) {
                  a.has(t) && (u.schedule(t), e()), t(s);
                }
                let u = {
                  schedule: (e, o = !1, s = !1) => {
                    let l = s && i ? t : r;
                    return o && a.add(e), l.has(e) || l.add(e), e;
                  },
                  cancel: (e) => {
                    r.delete(e), a.delete(e);
                  },
                  process: (e) => {
                    if (((s = e), i)) {
                      o = !0;
                      return;
                    }
                    (i = !0),
                      ([t, r] = [r, t]),
                      t.forEach(l),
                      t.clear(),
                      (i = !1),
                      o && ((o = !1), u.process(e));
                  },
                };
                return u;
              })(a)),
              e
            ),
            {}
          ),
          {
            read: l,
            resolveKeyframes: u,
            update: d,
            preRender: c,
            render: h,
            postRender: p,
          } = s,
          f = () => {
            let a = E.useManualTiming ? o.timestamp : performance.now();
            (r = !1),
              (o.delta = i
                ? 1e3 / 60
                : Math.max(Math.min(a - o.timestamp, 40), 1)),
              (o.timestamp = a),
              (o.isProcessing = !0),
              l.process(o),
              u.process(o),
              d.process(o),
              c.process(o),
              h.process(o),
              p.process(o),
              (o.isProcessing = !1),
              r && t && ((i = !1), e(f));
          },
          m = () => {
            (r = !0), (i = !0), o.isProcessing || e(f);
          };
        return {
          schedule: D.reduce((e, t) => {
            let i = s[t];
            return (
              (e[t] = (e, t = !1, o = !1) => (r || m(), i.schedule(e, t, o))), e
            );
          }, {}),
          cancel: (e) => {
            for (let t = 0; t < D.length; t++) s[D[t]].cancel(e);
          },
          state: o,
          steps: s,
        };
      }
      let {
          schedule: L,
          cancel: C,
          state: O,
          steps: M,
        } = R(
          "undefined" != typeof requestAnimationFrame
            ? requestAnimationFrame
            : P,
          !0
        ),
        I = (e, t, r) =>
          (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e;
      function N(e, t, r, i) {
        if (e === t && r === i) return P;
        let o = (t) =>
          (function (e, t, r, i, o) {
            let a, s;
            let l = 0;
            do (a = I((s = t + (r - t) / 2), i, o) - e) > 0 ? (r = s) : (t = s);
            while (Math.abs(a) > 1e-7 && ++l < 12);
            return s;
          })(t, 0, 1, e, r);
        return (e) => (0 === e || 1 === e ? e : I(o(e), t, i));
      }
      let j = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
        B = (e) => (t) => 1 - e(1 - t),
        U = N(0.33, 1.53, 0.69, 0.99),
        q = B(U),
        V = j(q),
        F = (e) =>
          (e *= 2) < 1 ? 0.5 * q(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
        H = (e) => 1 - Math.sin(Math.acos(e)),
        W = B(H),
        z = j(H),
        $ = (e) => /^0[^.\s]+$/u.test(e),
        G = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
        K = (e) => (t) => "string" == typeof t && t.startsWith(e),
        Y = K("--"),
        X = K("var(--"),
        Q = (e) => !!X(e) && Z.test(e.split("/*")[0].trim()),
        Z =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
        J = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
        ee = (e, t, r) => (r > t ? t : r < e ? e : r),
        et = {
          test: (e) => "number" == typeof e,
          parse: parseFloat,
          transform: (e) => e,
        },
        er = { ...et, transform: (e) => ee(0, 1, e) },
        ei = { ...et, default: 1 },
        en = (e) => ({
          test: (t) =>
            "string" == typeof t && t.endsWith(e) && 1 === t.split(" ").length,
          parse: parseFloat,
          transform: (t) => `${t}${e}`,
        }),
        eo = en("deg"),
        ea = en("%"),
        es = en("px"),
        el = en("vh"),
        eu = en("vw"),
        ed = {
          ...ea,
          parse: (e) => ea.parse(e) / 100,
          transform: (e) => ea.transform(100 * e),
        },
        ec = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
          "translateX",
          "translateY",
        ]),
        eh = (e) => e === et || e === es,
        ep = (e, t) => parseFloat(e.split(", ")[t]),
        ef =
          (e, t) =>
          (r, { transform: i }) => {
            if ("none" === i || !i) return 0;
            let o = i.match(/^matrix3d\((.+)\)$/u);
            if (o) return ep(o[1], t);
            {
              let t = i.match(/^matrix\((.+)\)$/u);
              return t ? ep(t[1], e) : 0;
            }
          },
        em = new Set(["x", "y", "z"]),
        ev = f.filter((e) => !em.has(e)),
        ey = {
          width: ({ x: e }, { paddingLeft: t = "0", paddingRight: r = "0" }) =>
            e.max - e.min - parseFloat(t) - parseFloat(r),
          height: ({ y: e }, { paddingTop: t = "0", paddingBottom: r = "0" }) =>
            e.max - e.min - parseFloat(t) - parseFloat(r),
          top: (e, { top: t }) => parseFloat(t),
          left: (e, { left: t }) => parseFloat(t),
          bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
          right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
          x: ef(4, 13),
          y: ef(5, 14),
        };
      (ey.translateX = ey.x), (ey.translateY = ey.y);
      let eg = (e) => (t) => t.test(e),
        eb = [
          et,
          es,
          ea,
          eo,
          eu,
          el,
          { test: (e) => "auto" === e, parse: (e) => e },
        ],
        e_ = (e) => eb.find(eg(e)),
        ew = new Set(),
        eT = !1,
        ex = !1;
      function eE() {
        if (ex) {
          let e = Array.from(ew).filter((e) => e.needsMeasurement),
            t = new Set(e.map((e) => e.element)),
            r = new Map();
          t.forEach((e) => {
            let t = (function (e) {
              let t = [];
              return (
                ev.forEach((r) => {
                  let i = e.getValue(r);
                  void 0 !== i &&
                    (t.push([r, i.get()]),
                    i.set(r.startsWith("scale") ? 1 : 0));
                }),
                t
              );
            })(e);
            t.length && (r.set(e, t), e.render());
          }),
            e.forEach((e) => e.measureInitialState()),
            t.forEach((e) => {
              e.render();
              let t = r.get(e);
              t &&
                t.forEach(([t, r]) => {
                  var i;
                  null === (i = e.getValue(t)) || void 0 === i || i.set(r);
                });
            }),
            e.forEach((e) => e.measureEndState()),
            e.forEach((e) => {
              void 0 !== e.suspendedScrollY &&
                window.scrollTo(0, e.suspendedScrollY);
            });
        }
        (ex = !1), (eT = !1), ew.forEach((e) => e.complete()), ew.clear();
      }
      function ek() {
        ew.forEach((e) => {
          e.readKeyframes(), e.needsMeasurement && (ex = !0);
        });
      }
      class eA {
        constructor(e, t, r, i, o, a = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...e]),
            (this.onComplete = t),
            (this.name = r),
            (this.motionValue = i),
            (this.element = o),
            (this.isAsync = a);
        }
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (ew.add(this),
                eT || ((eT = !0), L.read(ek), L.resolveKeyframes(eE)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: e,
            name: t,
            element: r,
            motionValue: i,
          } = this;
          for (let o = 0; o < e.length; o++)
            if (null === e[o]) {
              if (0 === o) {
                let o = null == i ? void 0 : i.get(),
                  a = e[e.length - 1];
                if (void 0 !== o) e[0] = o;
                else if (r && t) {
                  let i = r.readValue(t, a);
                  null != i && (e[0] = i);
                }
                void 0 === e[0] && (e[0] = a), i && void 0 === o && i.set(e[0]);
              } else e[o] = e[o - 1];
            }
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            ew.delete(this);
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), ew.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
      let eS = (e) => Math.round(1e5 * e) / 1e5,
        eP = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        eD =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        eR = (e, t) => (r) =>
          !!(
            ("string" == typeof r && eD.test(r) && r.startsWith(e)) ||
            (t && null != r && Object.prototype.hasOwnProperty.call(r, t))
          ),
        eL = (e, t, r) => (i) => {
          if ("string" != typeof i) return i;
          let [o, a, s, l] = i.match(eP);
          return {
            [e]: parseFloat(o),
            [t]: parseFloat(a),
            [r]: parseFloat(s),
            alpha: void 0 !== l ? parseFloat(l) : 1,
          };
        },
        eC = (e) => ee(0, 255, e),
        eO = { ...et, transform: (e) => Math.round(eC(e)) },
        eM = {
          test: eR("rgb", "red"),
          parse: eL("red", "green", "blue"),
          transform: ({ red: e, green: t, blue: r, alpha: i = 1 }) =>
            "rgba(" +
            eO.transform(e) +
            ", " +
            eO.transform(t) +
            ", " +
            eO.transform(r) +
            ", " +
            eS(er.transform(i)) +
            ")",
        },
        eI = {
          test: eR("#"),
          parse: function (e) {
            let t = "",
              r = "",
              i = "",
              o = "";
            return (
              e.length > 5
                ? ((t = e.substring(1, 3)),
                  (r = e.substring(3, 5)),
                  (i = e.substring(5, 7)),
                  (o = e.substring(7, 9)))
                : ((t = e.substring(1, 2)),
                  (r = e.substring(2, 3)),
                  (i = e.substring(3, 4)),
                  (o = e.substring(4, 5)),
                  (t += t),
                  (r += r),
                  (i += i),
                  (o += o)),
              {
                red: parseInt(t, 16),
                green: parseInt(r, 16),
                blue: parseInt(i, 16),
                alpha: o ? parseInt(o, 16) / 255 : 1,
              }
            );
          },
          transform: eM.transform,
        },
        eN = {
          test: eR("hsl", "hue"),
          parse: eL("hue", "saturation", "lightness"),
          transform: ({ hue: e, saturation: t, lightness: r, alpha: i = 1 }) =>
            "hsla(" +
            Math.round(e) +
            ", " +
            ea.transform(eS(t)) +
            ", " +
            ea.transform(eS(r)) +
            ", " +
            eS(er.transform(i)) +
            ")",
        },
        ej = {
          test: (e) => eM.test(e) || eI.test(e) || eN.test(e),
          parse: (e) =>
            eM.test(e) ? eM.parse(e) : eN.test(e) ? eN.parse(e) : eI.parse(e),
          transform: (e) =>
            "string" == typeof e
              ? e
              : e.hasOwnProperty("red")
              ? eM.transform(e)
              : eN.transform(e),
        },
        eB =
          /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        eU = "number",
        eq = "color",
        eV =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function eF(e) {
        let t = e.toString(),
          r = [],
          i = { color: [], number: [], var: [] },
          o = [],
          a = 0,
          s = t
            .replace(
              eV,
              (e) => (
                ej.test(e)
                  ? (i.color.push(a), o.push(eq), r.push(ej.parse(e)))
                  : e.startsWith("var(")
                  ? (i.var.push(a), o.push("var"), r.push(e))
                  : (i.number.push(a), o.push(eU), r.push(parseFloat(e))),
                ++a,
                "${}"
              )
            )
            .split("${}");
        return { values: r, split: s, indexes: i, types: o };
      }
      function eH(e) {
        return eF(e).values;
      }
      function eW(e) {
        let { split: t, types: r } = eF(e),
          i = t.length;
        return (e) => {
          let o = "";
          for (let a = 0; a < i; a++)
            if (((o += t[a]), void 0 !== e[a])) {
              let t = r[a];
              t === eU
                ? (o += eS(e[a]))
                : t === eq
                ? (o += ej.transform(e[a]))
                : (o += e[a]);
            }
          return o;
        };
      }
      let ez = (e) => ("number" == typeof e ? 0 : e),
        e$ = {
          test: function (e) {
            var t, r;
            return (
              isNaN(e) &&
              "string" == typeof e &&
              ((null === (t = e.match(eP)) || void 0 === t
                ? void 0
                : t.length) || 0) +
                ((null === (r = e.match(eB)) || void 0 === r
                  ? void 0
                  : r.length) || 0) >
                0
            );
          },
          parse: eH,
          createTransformer: eW,
          getAnimatableNone: function (e) {
            let t = eH(e);
            return eW(e)(t.map(ez));
          },
        },
        eG = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function eK(e) {
        let [t, r] = e.slice(0, -1).split("(");
        if ("drop-shadow" === t) return e;
        let [i] = r.match(eP) || [];
        if (!i) return e;
        let o = r.replace(i, ""),
          a = eG.has(t) ? 1 : 0;
        return i !== r && (a *= 100), t + "(" + a + o + ")";
      }
      let eY = /\b([a-z-]*)\(.*?\)/gu,
        eX = {
          ...e$,
          getAnimatableNone: (e) => {
            let t = e.match(eY);
            return t ? t.map(eK).join(" ") : e;
          },
        },
        eQ = { ...et, transform: Math.round },
        eZ = {
          borderWidth: es,
          borderTopWidth: es,
          borderRightWidth: es,
          borderBottomWidth: es,
          borderLeftWidth: es,
          borderRadius: es,
          radius: es,
          borderTopLeftRadius: es,
          borderTopRightRadius: es,
          borderBottomRightRadius: es,
          borderBottomLeftRadius: es,
          width: es,
          maxWidth: es,
          height: es,
          maxHeight: es,
          top: es,
          right: es,
          bottom: es,
          left: es,
          padding: es,
          paddingTop: es,
          paddingRight: es,
          paddingBottom: es,
          paddingLeft: es,
          margin: es,
          marginTop: es,
          marginRight: es,
          marginBottom: es,
          marginLeft: es,
          backgroundPositionX: es,
          backgroundPositionY: es,
          rotate: eo,
          rotateX: eo,
          rotateY: eo,
          rotateZ: eo,
          scale: ei,
          scaleX: ei,
          scaleY: ei,
          scaleZ: ei,
          skew: eo,
          skewX: eo,
          skewY: eo,
          distance: es,
          translateX: es,
          translateY: es,
          translateZ: es,
          x: es,
          y: es,
          z: es,
          perspective: es,
          transformPerspective: es,
          opacity: er,
          originX: ed,
          originY: ed,
          originZ: es,
          zIndex: eQ,
          size: es,
          fillOpacity: er,
          strokeOpacity: er,
          numOctaves: eQ,
        },
        eJ = {
          ...eZ,
          color: ej,
          backgroundColor: ej,
          outlineColor: ej,
          fill: ej,
          stroke: ej,
          borderColor: ej,
          borderTopColor: ej,
          borderRightColor: ej,
          borderBottomColor: ej,
          borderLeftColor: ej,
          filter: eX,
          WebkitFilter: eX,
        },
        e0 = (e) => eJ[e];
      function e1(e, t) {
        let r = e0(e);
        return (
          r !== eX && (r = e$),
          r.getAnimatableNone ? r.getAnimatableNone(t) : void 0
        );
      }
      let e2 = new Set(["auto", "none", "0"]);
      class e5 extends eA {
        constructor(e, t, r, i, o) {
          super(e, t, r, i, o, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: e, element: t, name: r } = this;
          if (!t || !t.current) return;
          super.readKeyframes();
          for (let r = 0; r < e.length; r++) {
            let i = e[r];
            if ("string" == typeof i && Q((i = i.trim()))) {
              let o = (function e(t, r, i = 1) {
                P(
                  i <= 4,
                  `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`
                );
                let [o, a] = (function (e) {
                  let t = J.exec(e);
                  if (!t) return [,];
                  let [, r, i, o] = t;
                  return [`--${null != r ? r : i}`, o];
                })(t);
                if (!o) return;
                let s = window.getComputedStyle(r).getPropertyValue(o);
                if (s) {
                  let e = s.trim();
                  return G(e) ? parseFloat(e) : e;
                }
                return Q(a) ? e(a, r, i + 1) : a;
              })(i, t.current);
              void 0 !== o && (e[r] = o),
                r === e.length - 1 && (this.finalKeyframe = i);
            }
          }
          if ((this.resolveNoneKeyframes(), !ec.has(r) || 2 !== e.length))
            return;
          let [i, o] = e,
            a = e_(i),
            s = e_(o);
          if (a !== s) {
            if (eh(a) && eh(s))
              for (let t = 0; t < e.length; t++) {
                let r = e[t];
                "string" == typeof r && (e[t] = parseFloat(r));
              }
            else this.needsMeasurement = !0;
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: e, name: t } = this,
            r = [];
          for (let t = 0; t < e.length; t++) {
            var i;
            ("number" == typeof (i = e[t])
              ? 0 === i
              : null === i || "none" === i || "0" === i || $(i)) && r.push(t);
          }
          r.length &&
            (function (e, t, r) {
              let i,
                o = 0;
              for (; o < e.length && !i; ) {
                let t = e[o];
                "string" == typeof t &&
                  !e2.has(t) &&
                  eF(t).values.length &&
                  (i = e[o]),
                  o++;
              }
              if (i && r) for (let o of t) e[o] = e1(r, i);
            })(e, r, t);
        }
        measureInitialState() {
          let { element: e, unresolvedKeyframes: t, name: r } = this;
          if (!e || !e.current) return;
          "height" === r && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = ey[r](
              e.measureViewportBox(),
              window.getComputedStyle(e.current)
            )),
            (t[0] = this.measuredOrigin);
          let i = t[t.length - 1];
          void 0 !== i && e.getValue(r, i).jump(i, !1);
        }
        measureEndState() {
          var e;
          let { element: t, name: r, unresolvedKeyframes: i } = this;
          if (!t || !t.current) return;
          let o = t.getValue(r);
          o && o.jump(this.measuredOrigin, !1);
          let a = i.length - 1,
            s = i[a];
          (i[a] = ey[r](
            t.measureViewportBox(),
            window.getComputedStyle(t.current)
          )),
            null !== s &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = s),
            (null === (e = this.removedTransforms) || void 0 === e
              ? void 0
              : e.length) &&
              this.removedTransforms.forEach(([e, r]) => {
                t.getValue(e).set(r);
              }),
            this.resolveNoneKeyframes();
        }
      }
      function e8(e) {
        return "function" == typeof e;
      }
      function e4() {
        i = void 0;
      }
      let e3 = {
          now: () => (
            void 0 === i &&
              e3.set(
                O.isProcessing || E.useManualTiming
                  ? O.timestamp
                  : performance.now()
              ),
            i
          ),
          set: (e) => {
            (i = e), queueMicrotask(e4);
          },
        },
        e6 = (e, t) =>
          "zIndex" !== t &&
          !!(
            "number" == typeof e ||
            Array.isArray(e) ||
            ("string" == typeof e &&
              (e$.test(e) || "0" === e) &&
              !e.startsWith("url("))
          );
      class e9 {
        constructor({
          autoplay: e = !0,
          delay: t = 0,
          type: r = "keyframes",
          repeat: i = 0,
          repeatDelay: o = 0,
          repeatType: a = "loop",
          ...s
        }) {
          (this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.createdAt = e3.now()),
            (this.options = {
              autoplay: e,
              delay: t,
              type: r,
              repeat: i,
              repeatDelay: o,
              repeatType: a,
              ...s,
            }),
            this.updateFinishedPromise();
        }
        calcStartTime() {
          return this.resolvedAt && this.resolvedAt - this.createdAt > 40
            ? this.resolvedAt
            : this.createdAt;
        }
        get resolved() {
          return (
            this._resolved || this.hasAttemptedResolve || (ek(), eE()),
            this._resolved
          );
        }
        onKeyframesResolved(e, t) {
          (this.resolvedAt = e3.now()), (this.hasAttemptedResolve = !0);
          let {
            name: r,
            type: i,
            velocity: o,
            delay: a,
            onComplete: s,
            onUpdate: l,
            isGenerator: u,
          } = this.options;
          if (
            !u &&
            !(function (e, t, r, i) {
              let o = e[0];
              if (null === o) return !1;
              if ("display" === t || "visibility" === t) return !0;
              let a = e[e.length - 1],
                s = e6(o, t),
                l = e6(a, t);
              return (
                P(
                  s === l,
                  `You are trying to animate ${t} from "${o}" to "${a}". ${o} is not an animatable value - to enable this animation set ${o} to a value animatable to ${a} via the \`style\` property.`
                ),
                !!s &&
                  !!l &&
                  ((function (e) {
                    let t = e[0];
                    if (1 === e.length) return !0;
                    for (let r = 0; r < e.length; r++)
                      if (e[r] !== t) return !0;
                  })(e) ||
                    (("spring" === r || e8(r)) && i))
              );
            })(e, r, i, o)
          ) {
            if (k.current || !a) {
              null == l || l(S(e, this.options, t)),
                null == s || s(),
                this.resolveFinishedPromise();
              return;
            }
            this.options.duration = 0;
          }
          let d = this.initPlayback(e, t);
          !1 !== d &&
            ((this._resolved = { keyframes: e, finalKeyframe: t, ...d }),
            this.onPostResolved());
        }
        onPostResolved() {}
        then(e, t) {
          return this.currentFinishedPromise.then(e, t);
        }
        flatten() {
          (this.options.type = "keyframes"), (this.options.ease = "linear");
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((e) => {
            this.resolveFinishedPromise = e;
          });
        }
      }
      let e7 = (e, t, r) => {
          let i = t - e;
          return 0 === i ? 1 : (r - e) / i;
        },
        te = (e, t, r = 10) => {
          let i = "",
            o = Math.max(Math.round(t / r), 2);
          for (let t = 0; t < o; t++) i += e(e7(0, o - 1, t)) + ", ";
          return `linear(${i.substring(0, i.length - 2)})`;
        };
      function tt(e, t, r) {
        var i, o;
        let a = Math.max(t - 5, 0);
        return (i = r - e(a)), (o = t - a) ? (1e3 / o) * i : 0;
      }
      let tr = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: 0.3,
        visualDuration: 0.3,
        restSpeed: { granular: 0.01, default: 2 },
        restDelta: { granular: 0.005, default: 0.5 },
        minDuration: 0.01,
        maxDuration: 10,
        minDamping: 0.05,
        maxDamping: 1,
      };
      function ti(e, t) {
        return e * Math.sqrt(1 - t * t);
      }
      function tn(e) {
        let t = 0,
          r = e.next(t);
        for (; !r.done && t < 2e4; ) (t += 50), (r = e.next(t));
        return t >= 2e4 ? 1 / 0 : t;
      }
      let to = ["duration", "bounce"],
        ta = ["stiffness", "damping", "mass"];
      function ts(e, t) {
        return t.some((t) => void 0 !== e[t]);
      }
      function tl(e = tr.visualDuration, t = tr.bounce) {
        let r;
        let i =
            "object" != typeof e
              ? { visualDuration: e, keyframes: [0, 1], bounce: t }
              : e,
          { restSpeed: o, restDelta: a } = i,
          s = i.keyframes[0],
          l = i.keyframes[i.keyframes.length - 1],
          u = { done: !1, value: s },
          {
            stiffness: d,
            damping: c,
            mass: h,
            duration: p,
            velocity: f,
            isResolvedFromDuration: m,
          } = (function (e) {
            let t = {
              velocity: tr.velocity,
              stiffness: tr.stiffness,
              damping: tr.damping,
              mass: tr.mass,
              isResolvedFromDuration: !1,
              ...e,
            };
            if (!ts(e, ta) && ts(e, to)) {
              if (e.visualDuration) {
                let r = (2 * Math.PI) / (1.2 * e.visualDuration),
                  i = r * r,
                  o = 2 * ee(0.05, 1, 1 - e.bounce) * Math.sqrt(i);
                t = { ...t, mass: tr.mass, stiffness: i, damping: o };
              } else {
                let r = (function ({
                  duration: e = tr.duration,
                  bounce: t = tr.bounce,
                  velocity: r = tr.velocity,
                  mass: i = tr.mass,
                }) {
                  let o, a;
                  P(
                    e <= v(tr.maxDuration),
                    "Spring duration must be 10 seconds or less"
                  );
                  let s = 1 - t;
                  (s = ee(tr.minDamping, tr.maxDamping, s)),
                    (e = ee(tr.minDuration, tr.maxDuration, y(e))),
                    s < 1
                      ? ((o = (t) => {
                          let i = t * s,
                            o = i * e;
                          return 0.001 - ((i - r) / ti(t, s)) * Math.exp(-o);
                        }),
                        (a = (t) => {
                          let i = t * s * e,
                            a = Math.pow(s, 2) * Math.pow(t, 2) * e,
                            l = ti(Math.pow(t, 2), s);
                          return (
                            ((i * r + r - a) *
                              Math.exp(-i) *
                              (-o(t) + 0.001 > 0 ? -1 : 1)) /
                            l
                          );
                        }))
                      : ((o = (t) =>
                          -0.001 + Math.exp(-t * e) * ((t - r) * e + 1)),
                        (a = (t) => e * e * (r - t) * Math.exp(-t * e)));
                  let l = (function (e, t, r) {
                    let i = r;
                    for (let r = 1; r < 12; r++) i -= e(i) / t(i);
                    return i;
                  })(o, a, 5 / e);
                  if (((e = v(e)), isNaN(l)))
                    return {
                      stiffness: tr.stiffness,
                      damping: tr.damping,
                      duration: e,
                    };
                  {
                    let t = Math.pow(l, 2) * i;
                    return {
                      stiffness: t,
                      damping: 2 * s * Math.sqrt(i * t),
                      duration: e,
                    };
                  }
                })(e);
                (t = { ...t, ...r, mass: tr.mass }).isResolvedFromDuration = !0;
              }
            }
            return t;
          })({ ...i, velocity: -y(i.velocity || 0) }),
          g = f || 0,
          b = c / (2 * Math.sqrt(d * h)),
          _ = l - s,
          w = y(Math.sqrt(d / h)),
          T = 5 > Math.abs(_);
        if (
          (o || (o = T ? tr.restSpeed.granular : tr.restSpeed.default),
          a || (a = T ? tr.restDelta.granular : tr.restDelta.default),
          b < 1)
        ) {
          let e = ti(w, b);
          r = (t) =>
            l -
            Math.exp(-b * w * t) *
              (((g + b * w * _) / e) * Math.sin(e * t) + _ * Math.cos(e * t));
        } else if (1 === b)
          r = (e) => l - Math.exp(-w * e) * (_ + (g + w * _) * e);
        else {
          let e = w * Math.sqrt(b * b - 1);
          r = (t) => {
            let r = Math.exp(-b * w * t),
              i = Math.min(e * t, 300);
            return (
              l -
              (r * ((g + b * w * _) * Math.sinh(i) + e * _ * Math.cosh(i))) / e
            );
          };
        }
        let x = {
          calculatedDuration: (m && p) || null,
          next: (e) => {
            let t = r(e);
            if (m) u.done = e >= p;
            else {
              let i = 0;
              b < 1 && (i = 0 === e ? v(g) : tt(r, e, t));
              let s = Math.abs(i) <= o,
                d = Math.abs(l - t) <= a;
              u.done = s && d;
            }
            return (u.value = u.done ? l : t), u;
          },
          toString: () => {
            let e = Math.min(tn(x), 2e4),
              t = te((t) => x.next(e * t).value, e, 30);
            return e + "ms " + t;
          },
        };
        return x;
      }
      function tu({
        keyframes: e,
        velocity: t = 0,
        power: r = 0.8,
        timeConstant: i = 325,
        bounceDamping: o = 10,
        bounceStiffness: a = 500,
        modifyTarget: s,
        min: l,
        max: u,
        restDelta: d = 0.5,
        restSpeed: c,
      }) {
        let h, p;
        let f = e[0],
          m = { done: !1, value: f },
          v = (e) => (void 0 !== l && e < l) || (void 0 !== u && e > u),
          y = (e) =>
            void 0 === l
              ? u
              : void 0 === u
              ? l
              : Math.abs(l - e) < Math.abs(u - e)
              ? l
              : u,
          g = r * t,
          b = f + g,
          _ = void 0 === s ? b : s(b);
        _ !== b && (g = _ - f);
        let w = (e) => -g * Math.exp(-e / i),
          T = (e) => _ + w(e),
          x = (e) => {
            let t = w(e),
              r = T(e);
            (m.done = Math.abs(t) <= d), (m.value = m.done ? _ : r);
          },
          E = (e) => {
            v(m.value) &&
              ((h = e),
              (p = tl({
                keyframes: [m.value, y(m.value)],
                velocity: tt(T, e, m.value),
                damping: o,
                stiffness: a,
                restDelta: d,
                restSpeed: c,
              })));
          };
        return (
          E(0),
          {
            calculatedDuration: null,
            next: (e) => {
              let t = !1;
              return (p || void 0 !== h || ((t = !0), x(e), E(e)),
              void 0 !== h && e >= h)
                ? p.next(e - h)
                : (t || x(e), m);
            },
          }
        );
      }
      let td = N(0.42, 0, 1, 1),
        tc = N(0, 0, 0.58, 1),
        th = N(0.42, 0, 0.58, 1),
        tp = (e) => Array.isArray(e) && "number" != typeof e[0],
        tf = (e) => Array.isArray(e) && "number" == typeof e[0],
        tm = {
          linear: P,
          easeIn: td,
          easeInOut: th,
          easeOut: tc,
          circIn: H,
          circInOut: z,
          circOut: W,
          backIn: q,
          backInOut: V,
          backOut: U,
          anticipate: F,
        },
        tv = (e) => {
          if (tf(e)) {
            P(
              4 === e.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [t, r, i, o] = e;
            return N(t, r, i, o);
          }
          return "string" == typeof e
            ? (P(void 0 !== tm[e], `Invalid easing type '${e}'`), tm[e])
            : e;
        },
        ty = (e, t) => (r) => t(e(r)),
        tg = (...e) => e.reduce(ty),
        tb = (e, t, r) => e + (t - e) * r;
      function t_(e, t, r) {
        return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6)
          ? e + (t - e) * 6 * r
          : r < 0.5
          ? t
          : r < 2 / 3
          ? e + (t - e) * (2 / 3 - r) * 6
          : e;
      }
      function tw(e, t) {
        return (r) => (r > 0 ? t : e);
      }
      let tT = (e, t, r) => {
          let i = e * e,
            o = r * (t * t - i) + i;
          return o < 0 ? 0 : Math.sqrt(o);
        },
        tx = [eI, eM, eN],
        tE = (e) => tx.find((t) => t.test(e));
      function tk(e) {
        let t = tE(e);
        if (
          (P(
            !!t,
            `'${e}' is not an animatable color. Use the equivalent color code instead.`
          ),
          !t)
        )
          return !1;
        let r = t.parse(e);
        return (
          t === eN &&
            (r = (function ({ hue: e, saturation: t, lightness: r, alpha: i }) {
              (e /= 360), (r /= 100);
              let o = 0,
                a = 0,
                s = 0;
              if ((t /= 100)) {
                let i = r < 0.5 ? r * (1 + t) : r + t - r * t,
                  l = 2 * r - i;
                (o = t_(l, i, e + 1 / 3)),
                  (a = t_(l, i, e)),
                  (s = t_(l, i, e - 1 / 3));
              } else o = a = s = r;
              return {
                red: Math.round(255 * o),
                green: Math.round(255 * a),
                blue: Math.round(255 * s),
                alpha: i,
              };
            })(r)),
          r
        );
      }
      let tA = (e, t) => {
          let r = tk(e),
            i = tk(t);
          if (!r || !i) return tw(e, t);
          let o = { ...r };
          return (e) => (
            (o.red = tT(r.red, i.red, e)),
            (o.green = tT(r.green, i.green, e)),
            (o.blue = tT(r.blue, i.blue, e)),
            (o.alpha = tb(r.alpha, i.alpha, e)),
            eM.transform(o)
          );
        },
        tS = new Set(["none", "hidden"]);
      function tP(e, t) {
        return (r) => tb(e, t, r);
      }
      function tD(e) {
        return "number" == typeof e
          ? tP
          : "string" == typeof e
          ? Q(e)
            ? tw
            : ej.test(e)
            ? tA
            : tC
          : Array.isArray(e)
          ? tR
          : "object" == typeof e
          ? ej.test(e)
            ? tA
            : tL
          : tw;
      }
      function tR(e, t) {
        let r = [...e],
          i = r.length,
          o = e.map((e, r) => tD(e)(e, t[r]));
        return (e) => {
          for (let t = 0; t < i; t++) r[t] = o[t](e);
          return r;
        };
      }
      function tL(e, t) {
        let r = { ...e, ...t },
          i = {};
        for (let o in r)
          void 0 !== e[o] && void 0 !== t[o] && (i[o] = tD(e[o])(e[o], t[o]));
        return (e) => {
          for (let t in i) r[t] = i[t](e);
          return r;
        };
      }
      let tC = (e, t) => {
        let r = e$.createTransformer(t),
          i = eF(e),
          o = eF(t);
        return i.indexes.var.length === o.indexes.var.length &&
          i.indexes.color.length === o.indexes.color.length &&
          i.indexes.number.length >= o.indexes.number.length
          ? (tS.has(e) && !o.values.length) || (tS.has(t) && !i.values.length)
            ? tS.has(e)
              ? (r) => (r <= 0 ? e : t)
              : (r) => (r >= 1 ? t : e)
            : tg(
                tR(
                  (function (e, t) {
                    var r;
                    let i = [],
                      o = { color: 0, var: 0, number: 0 };
                    for (let a = 0; a < t.values.length; a++) {
                      let s = t.types[a],
                        l = e.indexes[s][o[s]],
                        u = null !== (r = e.values[l]) && void 0 !== r ? r : 0;
                      (i[a] = u), o[s]++;
                    }
                    return i;
                  })(i, o),
                  o.values
                ),
                r
              )
          : (P(
              !0,
              `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
            ),
            tw(e, t));
      };
      function tO(e, t, r) {
        return "number" == typeof e &&
          "number" == typeof t &&
          "number" == typeof r
          ? tb(e, t, r)
          : tD(e)(e, t);
      }
      function tM({
        duration: e = 300,
        keyframes: t,
        times: r,
        ease: i = "easeInOut",
      }) {
        let o = tp(i) ? i.map(tv) : tv(i),
          a = { done: !1, value: t[0] },
          s = (function (e, t, { clamp: r = !0, ease: i, mixer: o } = {}) {
            let a = e.length;
            if (
              (P(
                a === t.length,
                "Both input and output ranges must be the same length"
              ),
              1 === a)
            )
              return () => t[0];
            if (2 === a && e[0] === e[1]) return () => t[1];
            e[0] > e[a - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
            let s = (function (e, t, r) {
                let i = [],
                  o = r || tO,
                  a = e.length - 1;
                for (let r = 0; r < a; r++) {
                  let a = o(e[r], e[r + 1]);
                  t && (a = tg(Array.isArray(t) ? t[r] || P : t, a)), i.push(a);
                }
                return i;
              })(t, i, o),
              l = s.length,
              u = (t) => {
                let r = 0;
                if (l > 1) for (; r < e.length - 2 && !(t < e[r + 1]); r++);
                let i = e7(e[r], e[r + 1], t);
                return s[r](i);
              };
            return r ? (t) => u(ee(e[0], e[a - 1], t)) : u;
          })(
            (r && r.length === t.length
              ? r
              : (function (e) {
                  let t = [0];
                  return (
                    (function (e, t) {
                      let r = e[e.length - 1];
                      for (let i = 1; i <= t; i++) {
                        let o = e7(0, t, i);
                        e.push(tb(r, 1, o));
                      }
                    })(t, e.length - 1),
                    t
                  );
                })(t)
            ).map((t) => t * e),
            t,
            {
              ease: Array.isArray(o)
                ? o
                : t.map(() => o || th).splice(0, t.length - 1),
            }
          );
        return {
          calculatedDuration: e,
          next: (t) => ((a.value = s(t)), (a.done = t >= e), a),
        };
      }
      let tI = (e) => {
          let t = ({ timestamp: t }) => e(t);
          return {
            start: () => L.update(t, !0),
            stop: () => C(t),
            now: () => (O.isProcessing ? O.timestamp : e3.now()),
          };
        },
        tN = { decay: tu, inertia: tu, tween: tM, keyframes: tM, spring: tl },
        tj = (e) => e / 100;
      class tB extends e9 {
        constructor(e) {
          super(e),
            (this.holdTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = "running"),
            (this.startTime = null),
            (this.state = "idle"),
            (this.stop = () => {
              if (
                (this.resolver.cancel(),
                (this.isStopped = !0),
                "idle" === this.state)
              )
                return;
              this.teardown();
              let { onStop: e } = this.options;
              e && e();
            });
          let {
              name: t,
              motionValue: r,
              element: i,
              keyframes: o,
            } = this.options,
            a = (null == i ? void 0 : i.KeyframeResolver) || eA;
          (this.resolver = new a(
            o,
            (e, t) => this.onKeyframesResolved(e, t),
            t,
            r,
            i
          )),
            this.resolver.scheduleResolve();
        }
        flatten() {
          super.flatten(),
            this._resolved &&
              Object.assign(
                this._resolved,
                this.initPlayback(this._resolved.keyframes)
              );
        }
        initPlayback(e) {
          let t, r;
          let {
              type: i = "keyframes",
              repeat: o = 0,
              repeatDelay: a = 0,
              repeatType: s,
              velocity: l = 0,
            } = this.options,
            u = e8(i) ? i : tN[i] || tM;
          u !== tM &&
            "number" != typeof e[0] &&
            ((t = tg(tj, tO(e[0], e[1]))), (e = [0, 100]));
          let d = u({ ...this.options, keyframes: e });
          "mirror" === s &&
            (r = u({
              ...this.options,
              keyframes: [...e].reverse(),
              velocity: -l,
            })),
            null === d.calculatedDuration && (d.calculatedDuration = tn(d));
          let { calculatedDuration: c } = d,
            h = c + a;
          return {
            generator: d,
            mirroredGenerator: r,
            mapPercentToKeyframes: t,
            calculatedDuration: c,
            resolvedDuration: h,
            totalDuration: h * (o + 1) - a,
          };
        }
        onPostResolved() {
          let { autoplay: e = !0 } = this.options;
          this.play(),
            "paused" !== this.pendingPlayState && e
              ? (this.state = this.pendingPlayState)
              : this.pause();
        }
        tick(e, t = !1) {
          let { resolved: r } = this;
          if (!r) {
            let { keyframes: e } = this.options;
            return { done: !0, value: e[e.length - 1] };
          }
          let {
            finalKeyframe: i,
            generator: o,
            mirroredGenerator: a,
            mapPercentToKeyframes: s,
            keyframes: l,
            calculatedDuration: u,
            totalDuration: d,
            resolvedDuration: c,
          } = r;
          if (null === this.startTime) return o.next(0);
          let {
            delay: h,
            repeat: p,
            repeatType: f,
            repeatDelay: m,
            onUpdate: v,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, e))
            : this.speed < 0 &&
              (this.startTime = Math.min(e - d / this.speed, this.startTime)),
            t
              ? (this.currentTime = e)
              : null !== this.holdTime
              ? (this.currentTime = this.holdTime)
              : (this.currentTime =
                  Math.round(e - this.startTime) * this.speed);
          let y = this.currentTime - h * (this.speed >= 0 ? 1 : -1),
            g = this.speed >= 0 ? y < 0 : y > d;
          (this.currentTime = Math.max(y, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = d);
          let b = this.currentTime,
            _ = o;
          if (p) {
            let e = Math.min(this.currentTime, d) / c,
              t = Math.floor(e),
              r = e % 1;
            !r && e >= 1 && (r = 1),
              1 === r && t--,
              (t = Math.min(t, p + 1)) % 2 &&
                ("reverse" === f
                  ? ((r = 1 - r), m && (r -= m / c))
                  : "mirror" === f && (_ = a)),
              (b = ee(0, 1, r) * c);
          }
          let w = g ? { done: !1, value: l[0] } : _.next(b);
          s && (w.value = s(w.value));
          let { done: T } = w;
          g ||
            null === u ||
            (T =
              this.speed >= 0 ? this.currentTime >= d : this.currentTime <= 0);
          let x =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && T));
          return (
            x && void 0 !== i && (w.value = S(l, this.options, i)),
            v && v(w.value),
            x && this.finish(),
            w
          );
        }
        get duration() {
          let { resolved: e } = this;
          return e ? y(e.calculatedDuration) : 0;
        }
        get time() {
          return y(this.currentTime);
        }
        set time(e) {
          (e = v(e)),
            (this.currentTime = e),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = e)
              : this.driver &&
                (this.startTime = this.driver.now() - e / this.speed);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(e) {
          let t = this.playbackSpeed !== e;
          (this.playbackSpeed = e), t && (this.time = y(this.currentTime));
        }
        play() {
          if (
            (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
          ) {
            this.pendingPlayState = "running";
            return;
          }
          if (this.isStopped) return;
          let { driver: e = tI, onPlay: t, startTime: r } = this.options;
          this.driver || (this.driver = e((e) => this.tick(e))), t && t();
          let i = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = i - this.holdTime)
            : this.startTime
            ? "finished" === this.state && (this.startTime = i)
            : (this.startTime = null != r ? r : this.calcStartTime()),
            "finished" === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
        }
        pause() {
          var e;
          if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
          }
          (this.state = "paused"),
            (this.holdTime =
              null !== (e = this.currentTime) && void 0 !== e ? e : 0);
        }
        complete() {
          "running" !== this.state && this.play(),
            (this.pendingPlayState = this.state = "finished"),
            (this.holdTime = null);
        }
        finish() {
          this.teardown(), (this.state = "finished");
          let { onComplete: e } = this.options;
          e && e();
        }
        cancel() {
          null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise();
        }
        teardown() {
          (this.state = "idle"),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel();
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(e) {
          return (this.startTime = 0), this.tick(e, !0);
        }
      }
      let tU = new Set(["opacity", "clipPath", "filter", "transform"]);
      function tq(e) {
        let t;
        return () => (void 0 === t && (t = e()), t);
      }
      let tV = { linearEasing: void 0 },
        tF = (function (e, t) {
          let r = tq(e);
          return () => {
            var e;
            return null !== (e = tV[t]) && void 0 !== e ? e : r();
          };
        })(() => {
          try {
            document
              .createElement("div")
              .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
          } catch (e) {
            return !1;
          }
          return !0;
        }, "linearEasing"),
        tH = ([e, t, r, i]) => `cubic-bezier(${e}, ${t}, ${r}, ${i})`,
        tW = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: tH([0, 0.65, 0.55, 1]),
          circOut: tH([0.55, 0, 1, 0.45]),
          backIn: tH([0.31, 0.01, 0.66, -0.59]),
          backOut: tH([0.33, 1.53, 0.69, 0.99]),
        };
      function tz(e, t) {
        (e.timeline = t), (e.onfinish = null);
      }
      let t$ = tq(() =>
          Object.hasOwnProperty.call(Element.prototype, "animate")
        ),
        tG = { anticipate: F, backInOut: V, circInOut: z };
      class tK extends e9 {
        constructor(e) {
          super(e);
          let {
            name: t,
            motionValue: r,
            element: i,
            keyframes: o,
          } = this.options;
          (this.resolver = new e5(
            o,
            (e, t) => this.onKeyframesResolved(e, t),
            t,
            r,
            i
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(e, t) {
          var r, i;
          let {
            duration: o = 300,
            times: a,
            ease: s,
            type: l,
            motionValue: u,
            name: d,
            startTime: c,
          } = this.options;
          if (!(null === (r = u.owner) || void 0 === r ? void 0 : r.current))
            return !1;
          if (
            ("string" == typeof s && tF() && s in tG && (s = tG[s]),
            e8((i = this.options).type) ||
              "spring" === i.type ||
              !(function e(t) {
                return !!(
                  ("function" == typeof t && tF()) ||
                  !t ||
                  ("string" == typeof t && (t in tW || tF())) ||
                  tf(t) ||
                  (Array.isArray(t) && t.every(e))
                );
              })(i.ease))
          ) {
            let {
                onComplete: t,
                onUpdate: r,
                motionValue: i,
                element: u,
                ...d
              } = this.options,
              c = (function (e, t) {
                let r = new tB({
                    ...t,
                    keyframes: e,
                    repeat: 0,
                    delay: 0,
                    isGenerator: !0,
                  }),
                  i = { done: !1, value: e[0] },
                  o = [],
                  a = 0;
                for (; !i.done && a < 2e4; )
                  o.push((i = r.sample(a)).value), (a += 10);
                return {
                  times: void 0,
                  keyframes: o,
                  duration: a - 10,
                  ease: "linear",
                };
              })(e, d);
            1 === (e = c.keyframes).length && (e[1] = e[0]),
              (o = c.duration),
              (a = c.times),
              (s = c.ease),
              (l = "keyframes");
          }
          let h = (function (
            e,
            t,
            r,
            {
              delay: i = 0,
              duration: o = 300,
              repeat: a = 0,
              repeatType: s = "loop",
              ease: l = "easeInOut",
              times: u,
            } = {}
          ) {
            let d = { [t]: r };
            u && (d.offset = u);
            let c = (function e(t, r) {
              if (t)
                return "function" == typeof t && tF()
                  ? te(t, r)
                  : tf(t)
                  ? tH(t)
                  : Array.isArray(t)
                  ? t.map((t) => e(t, r) || tW.easeOut)
                  : tW[t];
            })(l, o);
            return (
              Array.isArray(c) && (d.easing = c),
              e.animate(d, {
                delay: i,
                duration: o,
                easing: Array.isArray(c) ? "linear" : c,
                fill: "both",
                iterations: a + 1,
                direction: "reverse" === s ? "alternate" : "normal",
              })
            );
          })(u.owner.current, d, e, {
            ...this.options,
            duration: o,
            times: a,
            ease: s,
          });
          return (
            (h.startTime = null != c ? c : this.calcStartTime()),
            this.pendingTimeline
              ? (tz(h, this.pendingTimeline), (this.pendingTimeline = void 0))
              : (h.onfinish = () => {
                  let { onComplete: r } = this.options;
                  u.set(S(e, this.options, t)),
                    r && r(),
                    this.cancel(),
                    this.resolveFinishedPromise();
                }),
            {
              animation: h,
              duration: o,
              times: a,
              type: l,
              ease: s,
              keyframes: e,
            }
          );
        }
        get duration() {
          let { resolved: e } = this;
          if (!e) return 0;
          let { duration: t } = e;
          return y(t);
        }
        get time() {
          let { resolved: e } = this;
          if (!e) return 0;
          let { animation: t } = e;
          return y(t.currentTime || 0);
        }
        set time(e) {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: r } = t;
          r.currentTime = v(e);
        }
        get speed() {
          let { resolved: e } = this;
          if (!e) return 1;
          let { animation: t } = e;
          return t.playbackRate;
        }
        set speed(e) {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: r } = t;
          r.playbackRate = e;
        }
        get state() {
          let { resolved: e } = this;
          if (!e) return "idle";
          let { animation: t } = e;
          return t.playState;
        }
        get startTime() {
          let { resolved: e } = this;
          if (!e) return null;
          let { animation: t } = e;
          return t.startTime;
        }
        attachTimeline(e) {
          if (this._resolved) {
            let { resolved: t } = this;
            if (!t) return P;
            let { animation: r } = t;
            tz(r, e);
          } else this.pendingTimeline = e;
          return P;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: e } = this;
          if (!e) return;
          let { animation: t } = e;
          "finished" === t.playState && this.updateFinishedPromise(), t.play();
        }
        pause() {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: t } = e;
          t.pause();
        }
        stop() {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          this.resolveFinishedPromise(), this.updateFinishedPromise();
          let { resolved: e } = this;
          if (!e) return;
          let {
            animation: t,
            keyframes: r,
            duration: i,
            type: o,
            ease: a,
            times: s,
          } = e;
          if ("idle" === t.playState || "finished" === t.playState) return;
          if (this.time) {
            let {
                motionValue: e,
                onUpdate: t,
                onComplete: l,
                element: u,
                ...d
              } = this.options,
              c = new tB({
                ...d,
                keyframes: r,
                duration: i,
                type: o,
                ease: a,
                times: s,
                isGenerator: !0,
              }),
              h = v(this.time);
            e.setWithVelocity(c.sample(h - 10).value, c.sample(h).value, 10);
          }
          let { onStop: l } = this.options;
          l && l(), this.cancel();
        }
        complete() {
          let { resolved: e } = this;
          e && e.animation.finish();
        }
        cancel() {
          let { resolved: e } = this;
          e && e.animation.cancel();
        }
        static supports(e) {
          let {
            motionValue: t,
            name: r,
            repeatDelay: i,
            repeatType: o,
            damping: a,
            type: s,
          } = e;
          return (
            t$() &&
            r &&
            tU.has(r) &&
            t &&
            t.owner &&
            t.owner.current instanceof HTMLElement &&
            !t.owner.getProps().onUpdate &&
            !i &&
            "mirror" !== o &&
            0 !== a &&
            "inertia" !== s
          );
        }
      }
      let tY = tq(() => void 0 !== window.ScrollTimeline);
      class tX {
        constructor(e) {
          (this.stop = () => this.runAll("stop")),
            (this.animations = e.filter(Boolean));
        }
        then(e, t) {
          return Promise.all(this.animations).then(e).catch(t);
        }
        getAll(e) {
          return this.animations[0][e];
        }
        setAll(e, t) {
          for (let r = 0; r < this.animations.length; r++)
            this.animations[r][e] = t;
        }
        attachTimeline(e, t) {
          let r = this.animations.map((r) =>
            tY() && r.attachTimeline ? r.attachTimeline(e) : t(r)
          );
          return () => {
            r.forEach((e, t) => {
              e && e(), this.animations[t].stop();
            });
          };
        }
        get time() {
          return this.getAll("time");
        }
        set time(e) {
          this.setAll("time", e);
        }
        get speed() {
          return this.getAll("speed");
        }
        set speed(e) {
          this.setAll("speed", e);
        }
        get startTime() {
          return this.getAll("startTime");
        }
        get duration() {
          let e = 0;
          for (let t = 0; t < this.animations.length; t++)
            e = Math.max(e, this.animations[t].duration);
          return e;
        }
        runAll(e) {
          this.animations.forEach((t) => t[e]());
        }
        flatten() {
          this.runAll("flatten");
        }
        play() {
          this.runAll("play");
        }
        pause() {
          this.runAll("pause");
        }
        cancel() {
          this.runAll("cancel");
        }
        complete() {
          this.runAll("complete");
        }
      }
      let tQ =
          (e, t, r, i = {}, o, a) =>
          (s) => {
            let l = x(i, e) || {},
              u = l.delay || i.delay || 0,
              { elapsed: d = 0 } = i;
            d -= v(u);
            let c = {
              keyframes: Array.isArray(r) ? r : [null, r],
              ease: "easeOut",
              velocity: t.getVelocity(),
              ...l,
              delay: -d,
              onUpdate: (e) => {
                t.set(e), l.onUpdate && l.onUpdate(e);
              },
              onComplete: () => {
                s(), l.onComplete && l.onComplete();
              },
              name: e,
              motionValue: t,
              element: a ? void 0 : o,
            };
            !(function ({
              when: e,
              delay: t,
              delayChildren: r,
              staggerChildren: i,
              staggerDirection: o,
              repeat: a,
              repeatType: s,
              repeatDelay: l,
              from: u,
              elapsed: d,
              ...c
            }) {
              return !!Object.keys(c).length;
            })(l) && (c = { ...c, ...T(e, c) }),
              c.duration && (c.duration = v(c.duration)),
              c.repeatDelay && (c.repeatDelay = v(c.repeatDelay)),
              void 0 !== c.from && (c.keyframes[0] = c.from);
            let h = !1;
            if (
              ((!1 !== c.type && (0 !== c.duration || c.repeatDelay)) ||
                ((c.duration = 0), 0 !== c.delay || (h = !0)),
              (k.current || E.skipAnimations) &&
                ((h = !0), (c.duration = 0), (c.delay = 0)),
              h && !a && void 0 !== t.get())
            ) {
              let e = S(c.keyframes, l);
              if (void 0 !== e)
                return (
                  L.update(() => {
                    c.onUpdate(e), c.onComplete();
                  }),
                  new tX([])
                );
            }
            return !a && tK.supports(c) ? new tK(c) : new tB(c);
          },
        tZ = (e) => !!(e && "object" == typeof e && e.mix && e.toValue),
        tJ = (e) => (a(e) ? e[e.length - 1] || 0 : e);
      function t0(e, t) {
        -1 === e.indexOf(t) && e.push(t);
      }
      function t1(e, t) {
        let r = e.indexOf(t);
        r > -1 && e.splice(r, 1);
      }
      class t2 {
        constructor() {
          this.subscriptions = [];
        }
        add(e) {
          return t0(this.subscriptions, e), () => t1(this.subscriptions, e);
        }
        notify(e, t, r) {
          let i = this.subscriptions.length;
          if (i) {
            if (1 === i) this.subscriptions[0](e, t, r);
            else
              for (let o = 0; o < i; o++) {
                let i = this.subscriptions[o];
                i && i(e, t, r);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
      let t5 = (e) => !isNaN(parseFloat(e)),
        t8 = { current: void 0 };
      class t4 {
        constructor(e, t = {}) {
          (this.version = "11.15.0"),
            (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (e, t = !0) => {
              let r = e3.now();
              this.updatedAt !== r && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(e),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                t &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(e),
            (this.owner = t.owner);
        }
        setCurrent(e) {
          (this.current = e),
            (this.updatedAt = e3.now()),
            null === this.canTrackVelocity &&
              void 0 !== e &&
              (this.canTrackVelocity = t5(this.current));
        }
        setPrevFrameValue(e = this.current) {
          (this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(e) {
          return this.on("change", e);
        }
        on(e, t) {
          this.events[e] || (this.events[e] = new t2());
          let r = this.events[e].add(t);
          return "change" === e
            ? () => {
                r(),
                  L.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : r;
        }
        clearListeners() {
          for (let e in this.events) this.events[e].clear();
        }
        attach(e, t) {
          (this.passiveEffect = e), (this.stopPassiveEffect = t);
        }
        set(e, t = !0) {
          t && this.passiveEffect
            ? this.passiveEffect(e, this.updateAndNotify)
            : this.updateAndNotify(e, t);
        }
        setWithVelocity(e, t, r) {
          this.set(t),
            (this.prev = void 0),
            (this.prevFrameValue = e),
            (this.prevUpdatedAt = this.updatedAt - r);
        }
        jump(e, t = !0) {
          this.updateAndNotify(e),
            (this.prev = e),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            t && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return t8.current && t8.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          var e;
          let t = e3.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            t - this.updatedAt > 30
          )
            return 0;
          let r = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (
            (e = parseFloat(this.current) - parseFloat(this.prevFrameValue)),
            r ? (1e3 / r) * e : 0
          );
        }
        start(e) {
          return (
            this.stop(),
            new Promise((t) => {
              (this.hasAnimated = !0),
                (this.animation = e(t)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function t3(e, t) {
        return new t4(e, t);
      }
      let t6 = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
        t9 = "data-" + t6("framerAppearId"),
        t7 = (e) => !!(e && e.getVelocity);
      function re(e, t) {
        let r = e.getValue("willChange");
        if (t7(r) && r.add) return r.add(t);
      }
      function rt(e, t, { delay: r = 0, transitionOverride: i, type: o } = {}) {
        var a;
        let {
          transition: s = e.getDefaultTransition(),
          transitionEnd: l,
          ...u
        } = t;
        i && (s = i);
        let d = [],
          h = o && e.animationState && e.animationState.getState()[o];
        for (let t in u) {
          let i = e.getValue(
              t,
              null !== (a = e.latestValues[t]) && void 0 !== a ? a : null
            ),
            o = u[t];
          if (
            void 0 === o ||
            (h &&
              (function ({ protectedKeys: e, needsAnimating: t }, r) {
                let i = e.hasOwnProperty(r) && !0 !== t[r];
                return (t[r] = !1), i;
              })(h, t))
          )
            continue;
          let l = { delay: r, ...x(s || {}, t) },
            c = !1;
          if (window.MotionHandoffAnimation) {
            let r = e.props[t9];
            if (r) {
              let e = window.MotionHandoffAnimation(r, t, L);
              null !== e && ((l.startTime = e), (c = !0));
            }
          }
          re(e, t),
            i.start(
              tQ(
                t,
                i,
                o,
                e.shouldReduceMotion && m.has(t) ? { type: !1 } : l,
                e,
                c
              )
            );
          let p = i.animation;
          p && d.push(p);
        }
        return (
          l &&
            Promise.all(d).then(() => {
              L.update(() => {
                l &&
                  (function (e, t) {
                    let {
                      transitionEnd: r = {},
                      transition: i = {},
                      ...o
                    } = c(e, t) || {};
                    for (let t in (o = { ...o, ...r })) {
                      let r = tJ(o[t]);
                      e.hasValue(t)
                        ? e.getValue(t).set(r)
                        : e.addValue(t, t3(r));
                    }
                  })(e, l);
              });
            }),
          d
        );
      }
      function rr(e, t, r = {}) {
        var i;
        let o = c(
            e,
            t,
            "exit" === r.type
              ? null === (i = e.presenceContext) || void 0 === i
                ? void 0
                : i.custom
              : void 0
          ),
          { transition: a = e.getDefaultTransition() || {} } = o || {};
        r.transitionOverride && (a = r.transitionOverride);
        let s = o ? () => Promise.all(rt(e, o, r)) : () => Promise.resolve(),
          l =
            e.variantChildren && e.variantChildren.size
              ? (i = 0) => {
                  let {
                    delayChildren: o = 0,
                    staggerChildren: s,
                    staggerDirection: l,
                  } = a;
                  return (function (e, t, r = 0, i = 0, o = 1, a) {
                    let s = [],
                      l = (e.variantChildren.size - 1) * i,
                      u = 1 === o ? (e = 0) => e * i : (e = 0) => l - e * i;
                    return (
                      Array.from(e.variantChildren)
                        .sort(ri)
                        .forEach((e, i) => {
                          e.notify("AnimationStart", t),
                            s.push(
                              rr(e, t, { ...a, delay: r + u(i) }).then(() =>
                                e.notify("AnimationComplete", t)
                              )
                            );
                        }),
                      Promise.all(s)
                    );
                  })(e, t, o + i, s, l, r);
                }
              : () => Promise.resolve(),
          { when: u } = a;
        if (!u) return Promise.all([s(), l(r.delay)]);
        {
          let [e, t] = "beforeChildren" === u ? [s, l] : [l, s];
          return e().then(() => t());
        }
      }
      function ri(e, t) {
        return e.sortNodePosition(t);
      }
      let rn = p.length,
        ro = [...h].reverse(),
        ra = h.length;
      function rs(e = !1) {
        return {
          isActive: e,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      function rl() {
        return {
          animate: rs(!0),
          whileInView: rs(),
          whileHover: rs(),
          whileTap: rs(),
          whileDrag: rs(),
          whileFocus: rs(),
          exit: rs(),
        };
      }
      class ru {
        constructor(e) {
          (this.isMounted = !1), (this.node = e);
        }
        update() {}
      }
      class rd extends ru {
        constructor(e) {
          super(e),
            e.animationState ||
              (e.animationState = (function (e) {
                let t = (t) =>
                    Promise.all(
                      t.map(({ animation: t, options: r }) =>
                        (function (e, t, r = {}) {
                          let i;
                          if ((e.notify("AnimationStart", t), Array.isArray(t)))
                            i = Promise.all(t.map((t) => rr(e, t, r)));
                          else if ("string" == typeof t) i = rr(e, t, r);
                          else {
                            let o =
                              "function" == typeof t ? c(e, t, r.custom) : t;
                            i = Promise.all(rt(e, o, r));
                          }
                          return i.then(() => {
                            e.notify("AnimationComplete", t);
                          });
                        })(e, t, r)
                      )
                    ),
                  r = rl(),
                  i = !0,
                  u = (t) => (r, i) => {
                    var o;
                    let a = c(
                      e,
                      i,
                      "exit" === t
                        ? null === (o = e.presenceContext) || void 0 === o
                          ? void 0
                          : o.custom
                        : void 0
                    );
                    if (a) {
                      let { transition: e, transitionEnd: t, ...i } = a;
                      r = { ...r, ...i, ...t };
                    }
                    return r;
                  };
                function d(d) {
                  let { props: c } = e,
                    h =
                      (function e(t) {
                        if (!t) return;
                        if (!t.isControllingVariants) {
                          let r = (t.parent && e(t.parent)) || {};
                          return (
                            void 0 !== t.props.initial &&
                              (r.initial = t.props.initial),
                            r
                          );
                        }
                        let r = {};
                        for (let e = 0; e < rn; e++) {
                          let i = p[e],
                            o = t.props[i];
                          (l(o) || !1 === o) && (r[i] = o);
                        }
                        return r;
                      })(e.parent) || {},
                    f = [],
                    m = new Set(),
                    v = {},
                    y = 1 / 0;
                  for (let t = 0; t < ra; t++) {
                    var g;
                    let p = ro[t],
                      b = r[p],
                      _ = void 0 !== c[p] ? c[p] : h[p],
                      w = l(_),
                      T = p === d ? b.isActive : null;
                    !1 === T && (y = t);
                    let x = _ === h[p] && _ !== c[p] && w;
                    if (
                      (x && i && e.manuallyAnimateOnMount && (x = !1),
                      (b.protectedKeys = { ...v }),
                      (!b.isActive && null === T) ||
                        (!_ && !b.prevProp) ||
                        o(_) ||
                        "boolean" == typeof _)
                    )
                      continue;
                    let E =
                        ((g = b.prevProp),
                        "string" == typeof _
                          ? _ !== g
                          : !!Array.isArray(_) && !s(_, g)),
                      k =
                        E || (p === d && b.isActive && !x && w) || (t > y && w),
                      A = !1,
                      S = Array.isArray(_) ? _ : [_],
                      P = S.reduce(u(p), {});
                    !1 === T && (P = {});
                    let { prevResolvedValues: D = {} } = b,
                      R = { ...D, ...P },
                      L = (t) => {
                        (k = !0),
                          m.has(t) && ((A = !0), m.delete(t)),
                          (b.needsAnimating[t] = !0);
                        let r = e.getValue(t);
                        r && (r.liveStyle = !1);
                      };
                    for (let e in R) {
                      let t = P[e],
                        r = D[e];
                      if (!v.hasOwnProperty(e))
                        (a(t) && a(r) ? s(t, r) : t === r)
                          ? void 0 !== t && m.has(e)
                            ? L(e)
                            : (b.protectedKeys[e] = !0)
                          : null != t
                          ? L(e)
                          : m.add(e);
                    }
                    (b.prevProp = _),
                      (b.prevResolvedValues = P),
                      b.isActive && (v = { ...v, ...P }),
                      i && e.blockInitialAnimation && (k = !1);
                    let C = !(x && E) || A;
                    k &&
                      C &&
                      f.push(
                        ...S.map((e) => ({
                          animation: e,
                          options: { type: p },
                        }))
                      );
                  }
                  if (m.size) {
                    let t = {};
                    m.forEach((r) => {
                      let i = e.getBaseTarget(r),
                        o = e.getValue(r);
                      o && (o.liveStyle = !0), (t[r] = null != i ? i : null);
                    }),
                      f.push({ animation: t });
                  }
                  let b = !!f.length;
                  return (
                    i &&
                      (!1 === c.initial || c.initial === c.animate) &&
                      !e.manuallyAnimateOnMount &&
                      (b = !1),
                    (i = !1),
                    b ? t(f) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: d,
                  setActive: function (t, i) {
                    var o;
                    if (r[t].isActive === i) return Promise.resolve();
                    null === (o = e.variantChildren) ||
                      void 0 === o ||
                      o.forEach((e) => {
                        var r;
                        return null === (r = e.animationState) || void 0 === r
                          ? void 0
                          : r.setActive(t, i);
                      }),
                      (r[t].isActive = i);
                    let a = d(t);
                    for (let e in r) r[e].protectedKeys = {};
                    return a;
                  },
                  setAnimateFunction: function (r) {
                    t = r(e);
                  },
                  getState: () => r,
                  reset: () => {
                    (r = rl()), (i = !0);
                  },
                };
              })(e));
        }
        updateAnimationControlsSubscription() {
          let { animate: e } = this.node.getProps();
          o(e) && (this.unmountControls = e.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: e } = this.node.getProps(),
            { animate: t } = this.node.prevProps || {};
          e !== t && this.updateAnimationControlsSubscription();
        }
        unmount() {
          var e;
          this.node.animationState.reset(),
            null === (e = this.unmountControls) || void 0 === e || e.call(this);
        }
      }
      let rc = 0;
      class rh extends ru {
        constructor() {
          super(...arguments), (this.id = rc++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: e, onExitComplete: t } = this.node.presenceContext,
            { isPresent: r } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || e === r) return;
          let i = this.node.animationState.setActive("exit", !e);
          t && !e && i.then(() => t(this.id));
        }
        mount() {
          let { register: e } = this.node.presenceContext || {};
          e && (this.unmount = e(this.id));
        }
        unmount() {}
      }
      let rp = { x: !1, y: !1 };
      function rf(e, t) {
        let r = (function (e, t, r) {
            if (e instanceof Element) return [e];
            if ("string" == typeof e) {
              let t = document.querySelectorAll(e);
              return t ? Array.from(t) : [];
            }
            return Array.from(e);
          })(e),
          i = new AbortController();
        return [r, { passive: !0, ...t, signal: i.signal }, () => i.abort()];
      }
      function rm(e) {
        return (t) => {
          "touch" === t.pointerType || rp.x || rp.y || e(t);
        };
      }
      let rv = (e) =>
          "mouse" === e.pointerType
            ? "number" != typeof e.button || e.button <= 0
            : !1 !== e.isPrimary,
        ry = new WeakSet();
      function rg(e) {
        return (t) => {
          "Enter" === t.key && e(t);
        };
      }
      function rb(e, t) {
        e.dispatchEvent(
          new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 })
        );
      }
      let r_ = (e, t) => {
          let r = e.currentTarget;
          if (!r) return;
          let i = rg(() => {
            if (ry.has(r)) return;
            rb(r, "down");
            let e = rg(() => {
              rb(r, "up");
            });
            r.addEventListener("keyup", e, t),
              r.addEventListener("blur", () => rb(r, "cancel"), t);
          });
          r.addEventListener("keydown", i, t),
            r.addEventListener(
              "blur",
              () => r.removeEventListener("keydown", i),
              t
            );
        },
        rw = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
        rT = (e, t) => !!t && (e === t || rT(e, t.parentElement));
      function rx(e) {
        return rv(e) && !(rp.x || rp.y);
      }
      function rE(e) {
        return { point: { x: e.pageX, y: e.pageY } };
      }
      let rk = (e) => (t) => rv(t) && e(t, rE(t));
      function rA(e, t, r, i = { passive: !0 }) {
        return e.addEventListener(t, r, i), () => e.removeEventListener(t, r);
      }
      function rS(e, t, r, i) {
        return rA(e, t, rk(r), i);
      }
      let rP = (e, t) => Math.abs(e - t);
      class rD {
        constructor(
          e,
          t,
          {
            transformPagePoint: r,
            contextWindow: i,
            dragSnapToOrigin: o = !1,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              var e, t;
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let r = rC(this.lastMoveEventInfo, this.history),
                i = null !== this.startEvent,
                o =
                  ((e = r.offset),
                  (t = { x: 0, y: 0 }),
                  Math.sqrt(rP(e.x, t.x) ** 2 + rP(e.y, t.y) ** 2) >= 3);
              if (!i && !o) return;
              let { point: a } = r,
                { timestamp: s } = O;
              this.history.push({ ...a, timestamp: s });
              let { onStart: l, onMove: u } = this.handlers;
              i ||
                (l && l(this.lastMoveEvent, r),
                (this.startEvent = this.lastMoveEvent)),
                u && u(this.lastMoveEvent, r);
            }),
            (this.handlePointerMove = (e, t) => {
              (this.lastMoveEvent = e),
                (this.lastMoveEventInfo = rR(t, this.transformPagePoint)),
                L.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (e, t) => {
              this.end();
              let {
                onEnd: r,
                onSessionEnd: i,
                resumeAnimation: o,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && o && o(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let a = rC(
                "pointercancel" === e.type
                  ? this.lastMoveEventInfo
                  : rR(t, this.transformPagePoint),
                this.history
              );
              this.startEvent && r && r(e, a), i && i(e, a);
            }),
            !rv(e))
          )
            return;
          (this.dragSnapToOrigin = o),
            (this.handlers = t),
            (this.transformPagePoint = r),
            (this.contextWindow = i || window);
          let a = rR(rE(e), this.transformPagePoint),
            { point: s } = a,
            { timestamp: l } = O;
          this.history = [{ ...s, timestamp: l }];
          let { onSessionStart: u } = t;
          u && u(e, rC(a, this.history)),
            (this.removeListeners = tg(
              rS(this.contextWindow, "pointermove", this.handlePointerMove),
              rS(this.contextWindow, "pointerup", this.handlePointerUp),
              rS(this.contextWindow, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(e) {
          this.handlers = e;
        }
        end() {
          this.removeListeners && this.removeListeners(), C(this.updatePoint);
        }
      }
      function rR(e, t) {
        return t ? { point: t(e.point) } : e;
      }
      function rL(e, t) {
        return { x: e.x - t.x, y: e.y - t.y };
      }
      function rC({ point: e }, t) {
        return {
          point: e,
          delta: rL(e, rO(t)),
          offset: rL(e, t[0]),
          velocity: (function (e, t) {
            if (e.length < 2) return { x: 0, y: 0 };
            let r = e.length - 1,
              i = null,
              o = rO(e);
            for (
              ;
              r >= 0 && ((i = e[r]), !(o.timestamp - i.timestamp > v(0.1)));

            )
              r--;
            if (!i) return { x: 0, y: 0 };
            let a = y(o.timestamp - i.timestamp);
            if (0 === a) return { x: 0, y: 0 };
            let s = { x: (o.x - i.x) / a, y: (o.y - i.y) / a };
            return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
          })(t, 0),
        };
      }
      function rO(e) {
        return e[e.length - 1];
      }
      function rM(e) {
        return (
          e &&
          "object" == typeof e &&
          Object.prototype.hasOwnProperty.call(e, "current")
        );
      }
      function rI(e) {
        return e.max - e.min;
      }
      function rN(e, t, r, i = 0.5) {
        (e.origin = i),
          (e.originPoint = tb(t.min, t.max, e.origin)),
          (e.scale = rI(r) / rI(t)),
          (e.translate = tb(r.min, r.max, e.origin) - e.originPoint),
          ((e.scale >= 0.9999 && e.scale <= 1.0001) || isNaN(e.scale)) &&
            (e.scale = 1),
          ((e.translate >= -0.01 && e.translate <= 0.01) ||
            isNaN(e.translate)) &&
            (e.translate = 0);
      }
      function rj(e, t, r, i) {
        rN(e.x, t.x, r.x, i ? i.originX : void 0),
          rN(e.y, t.y, r.y, i ? i.originY : void 0);
      }
      function rB(e, t, r) {
        (e.min = r.min + t.min), (e.max = e.min + rI(t));
      }
      function rU(e, t, r) {
        (e.min = t.min - r.min), (e.max = e.min + rI(t));
      }
      function rq(e, t, r) {
        rU(e.x, t.x, r.x), rU(e.y, t.y, r.y);
      }
      function rV(e, t, r) {
        return {
          min: void 0 !== t ? e.min + t : void 0,
          max: void 0 !== r ? e.max + r - (e.max - e.min) : void 0,
        };
      }
      function rF(e, t) {
        let r = t.min - e.min,
          i = t.max - e.max;
        return (
          t.max - t.min < e.max - e.min && ([r, i] = [i, r]), { min: r, max: i }
        );
      }
      function rH(e, t, r) {
        return { min: rW(e, t), max: rW(e, r) };
      }
      function rW(e, t) {
        return "number" == typeof e ? e : e[t] || 0;
      }
      let rz = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        r$ = () => ({ x: rz(), y: rz() }),
        rG = () => ({ min: 0, max: 0 }),
        rK = () => ({ x: rG(), y: rG() });
      function rY(e) {
        return [e("x"), e("y")];
      }
      function rX({ top: e, left: t, right: r, bottom: i }) {
        return { x: { min: t, max: r }, y: { min: e, max: i } };
      }
      function rQ(e) {
        return void 0 === e || 1 === e;
      }
      function rZ({ scale: e, scaleX: t, scaleY: r }) {
        return !rQ(e) || !rQ(t) || !rQ(r);
      }
      function rJ(e) {
        return (
          rZ(e) ||
          r0(e) ||
          e.z ||
          e.rotate ||
          e.rotateX ||
          e.rotateY ||
          e.skewX ||
          e.skewY
        );
      }
      function r0(e) {
        var t, r;
        return ((t = e.x) && "0%" !== t) || ((r = e.y) && "0%" !== r);
      }
      function r1(e, t, r, i, o) {
        return void 0 !== o && (e = i + o * (e - i)), i + r * (e - i) + t;
      }
      function r2(e, t = 0, r = 1, i, o) {
        (e.min = r1(e.min, t, r, i, o)), (e.max = r1(e.max, t, r, i, o));
      }
      function r5(e, { x: t, y: r }) {
        r2(e.x, t.translate, t.scale, t.originPoint),
          r2(e.y, r.translate, r.scale, r.originPoint);
      }
      function r8(e, t) {
        (e.min = e.min + t), (e.max = e.max + t);
      }
      function r4(e, t, r, i, o = 0.5) {
        let a = tb(e.min, e.max, o);
        r2(e, t, r, a, i);
      }
      function r3(e, t) {
        r4(e.x, t.x, t.scaleX, t.scale, t.originX),
          r4(e.y, t.y, t.scaleY, t.scale, t.originY);
      }
      function r6(e, t) {
        return rX(
          (function (e, t) {
            if (!t) return e;
            let r = t({ x: e.left, y: e.top }),
              i = t({ x: e.right, y: e.bottom });
            return { top: r.y, left: r.x, bottom: i.y, right: i.x };
          })(e.getBoundingClientRect(), t)
        );
      }
      let r9 = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
        r7 = new WeakMap();
      class ie {
        constructor(e) {
          (this.openDragLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = rK()),
            (this.visualElement = e);
        }
        start(e, { snapToCursor: t = !1 } = {}) {
          let { presenceContext: r } = this.visualElement;
          if (r && !1 === r.isPresent) return;
          let { dragSnapToOrigin: i } = this.getProps();
          this.panSession = new rD(
            e,
            {
              onSessionStart: (e) => {
                let { dragSnapToOrigin: r } = this.getProps();
                r ? this.pauseAnimation() : this.stopAnimation(),
                  t && this.snapToCursor(rE(e).point);
              },
              onStart: (e, t) => {
                let {
                  drag: r,
                  dragPropagation: i,
                  onDragStart: o,
                } = this.getProps();
                if (
                  r &&
                  !i &&
                  (this.openDragLock && this.openDragLock(),
                  (this.openDragLock =
                    "x" === r || "y" === r
                      ? rp[r]
                        ? null
                        : ((rp[r] = !0),
                          () => {
                            rp[r] = !1;
                          })
                      : rp.x || rp.y
                      ? null
                      : ((rp.x = rp.y = !0),
                        () => {
                          rp.x = rp.y = !1;
                        })),
                  !this.openDragLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  rY((e) => {
                    let t = this.getAxisMotionValue(e).get() || 0;
                    if (ea.test(t)) {
                      let { projection: r } = this.visualElement;
                      if (r && r.layout) {
                        let i = r.layout.layoutBox[e];
                        if (i) {
                          let e = rI(i);
                          t = (parseFloat(t) / 100) * e;
                        }
                      }
                    }
                    this.originPoint[e] = t;
                  }),
                  o && L.postRender(() => o(e, t)),
                  re(this.visualElement, "transform");
                let { animationState: a } = this.visualElement;
                a && a.setActive("whileDrag", !0);
              },
              onMove: (e, t) => {
                let {
                  dragPropagation: r,
                  dragDirectionLock: i,
                  onDirectionLock: o,
                  onDrag: a,
                } = this.getProps();
                if (!r && !this.openDragLock) return;
                let { offset: s } = t;
                if (i && null === this.currentDirection) {
                  (this.currentDirection = (function (e, t = 10) {
                    let r = null;
                    return (
                      Math.abs(e.y) > t
                        ? (r = "y")
                        : Math.abs(e.x) > t && (r = "x"),
                      r
                    );
                  })(s)),
                    null !== this.currentDirection &&
                      o &&
                      o(this.currentDirection);
                  return;
                }
                this.updateAxis("x", t.point, s),
                  this.updateAxis("y", t.point, s),
                  this.visualElement.render(),
                  a && a(e, t);
              },
              onSessionEnd: (e, t) => this.stop(e, t),
              resumeAnimation: () =>
                rY((e) => {
                  var t;
                  return (
                    "paused" === this.getAnimationState(e) &&
                    (null === (t = this.getAxisMotionValue(e).animation) ||
                    void 0 === t
                      ? void 0
                      : t.play())
                  );
                }),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: i,
              contextWindow: r9(this.visualElement),
            }
          );
        }
        stop(e, t) {
          let r = this.isDragging;
          if ((this.cancel(), !r)) return;
          let { velocity: i } = t;
          this.startAnimation(i);
          let { onDragEnd: o } = this.getProps();
          o && L.postRender(() => o(e, t));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: e, animationState: t } = this.visualElement;
          e && (e.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: r } = this.getProps();
          !r &&
            this.openDragLock &&
            (this.openDragLock(), (this.openDragLock = null)),
            t && t.setActive("whileDrag", !1);
        }
        updateAxis(e, t, r) {
          let { drag: i } = this.getProps();
          if (!r || !it(e, i, this.currentDirection)) return;
          let o = this.getAxisMotionValue(e),
            a = this.originPoint[e] + r[e];
          this.constraints &&
            this.constraints[e] &&
            (a = (function (e, { min: t, max: r }, i) {
              return (
                void 0 !== t && e < t
                  ? (e = i ? tb(t, e, i.min) : Math.max(e, t))
                  : void 0 !== r &&
                    e > r &&
                    (e = i ? tb(r, e, i.max) : Math.min(e, r)),
                e
              );
            })(a, this.constraints[e], this.elastic[e])),
            o.set(a);
        }
        resolveConstraints() {
          var e;
          let { dragConstraints: t, dragElastic: r } = this.getProps(),
            i =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (e = this.visualElement.projection) || void 0 === e
                ? void 0
                : e.layout,
            o = this.constraints;
          t && rM(t)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : t && i
            ? (this.constraints = (function (
                e,
                { top: t, left: r, bottom: i, right: o }
              ) {
                return { x: rV(e.x, r, o), y: rV(e.y, t, i) };
              })(i.layoutBox, t))
            : (this.constraints = !1),
            (this.elastic = (function (e = 0.35) {
              return (
                !1 === e ? (e = 0) : !0 === e && (e = 0.35),
                { x: rH(e, "left", "right"), y: rH(e, "top", "bottom") }
              );
            })(r)),
            o !== this.constraints &&
              i &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              rY((e) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(e) &&
                  (this.constraints[e] = (function (e, t) {
                    let r = {};
                    return (
                      void 0 !== t.min && (r.min = t.min - e.min),
                      void 0 !== t.max && (r.max = t.max - e.min),
                      r
                    );
                  })(i.layoutBox[e], this.constraints[e]));
              });
        }
        resolveRefConstraints() {
          var e;
          let { dragConstraints: t, onMeasureDragConstraints: r } =
            this.getProps();
          if (!t || !rM(t)) return !1;
          let i = t.current;
          P(
            null !== i,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: o } = this.visualElement;
          if (!o || !o.layout) return !1;
          let a = (function (e, t, r) {
              let i = r6(e, r),
                { scroll: o } = t;
              return o && (r8(i.x, o.offset.x), r8(i.y, o.offset.y)), i;
            })(i, o.root, this.visualElement.getTransformPagePoint()),
            s = { x: rF((e = o.layout.layoutBox).x, a.x), y: rF(e.y, a.y) };
          if (r) {
            let e = r(
              (function ({ x: e, y: t }) {
                return { top: t.min, right: e.max, bottom: t.max, left: e.min };
              })(s)
            );
            (this.hasMutatedConstraints = !!e), e && (s = rX(e));
          }
          return s;
        }
        startAnimation(e) {
          let {
              drag: t,
              dragMomentum: r,
              dragElastic: i,
              dragTransition: o,
              dragSnapToOrigin: a,
              onDragTransitionEnd: s,
            } = this.getProps(),
            l = this.constraints || {};
          return Promise.all(
            rY((s) => {
              if (!it(s, t, this.currentDirection)) return;
              let u = (l && l[s]) || {};
              a && (u = { min: 0, max: 0 });
              let d = {
                type: "inertia",
                velocity: r ? e[s] : 0,
                bounceStiffness: i ? 200 : 1e6,
                bounceDamping: i ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...o,
                ...u,
              };
              return this.startAxisValueAnimation(s, d);
            })
          ).then(s);
        }
        startAxisValueAnimation(e, t) {
          let r = this.getAxisMotionValue(e);
          return (
            re(this.visualElement, e),
            r.start(tQ(e, r, 0, t, this.visualElement, !1))
          );
        }
        stopAnimation() {
          rY((e) => this.getAxisMotionValue(e).stop());
        }
        pauseAnimation() {
          rY((e) => {
            var t;
            return null === (t = this.getAxisMotionValue(e).animation) ||
              void 0 === t
              ? void 0
              : t.pause();
          });
        }
        getAnimationState(e) {
          var t;
          return null === (t = this.getAxisMotionValue(e).animation) ||
            void 0 === t
            ? void 0
            : t.state;
        }
        getAxisMotionValue(e) {
          let t = `_drag${e.toUpperCase()}`,
            r = this.visualElement.getProps();
          return (
            r[t] ||
            this.visualElement.getValue(
              e,
              (r.initial ? r.initial[e] : void 0) || 0
            )
          );
        }
        snapToCursor(e) {
          rY((t) => {
            let { drag: r } = this.getProps();
            if (!it(t, r, this.currentDirection)) return;
            let { projection: i } = this.visualElement,
              o = this.getAxisMotionValue(t);
            if (i && i.layout) {
              let { min: r, max: a } = i.layout.layoutBox[t];
              o.set(e[t] - tb(r, a, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: e, dragConstraints: t } = this.getProps(),
            { projection: r } = this.visualElement;
          if (!rM(t) || !r || !this.constraints) return;
          this.stopAnimation();
          let i = { x: 0, y: 0 };
          rY((e) => {
            let t = this.getAxisMotionValue(e);
            if (t && !1 !== this.constraints) {
              let r = t.get();
              i[e] = (function (e, t) {
                let r = 0.5,
                  i = rI(e),
                  o = rI(t);
                return (
                  o > i
                    ? (r = e7(t.min, t.max - i, e.min))
                    : i > o && (r = e7(e.min, e.max - o, t.min)),
                  ee(0, 1, r)
                );
              })({ min: r, max: r }, this.constraints[e]);
            }
          });
          let { transformTemplate: o } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = o ? o({}, "") : "none"),
            r.root && r.root.updateScroll(),
            r.updateLayout(),
            this.resolveConstraints(),
            rY((t) => {
              if (!it(t, e, null)) return;
              let r = this.getAxisMotionValue(t),
                { min: o, max: a } = this.constraints[t];
              r.set(tb(o, a, i[t]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          r7.set(this.visualElement, this);
          let e = rS(this.visualElement.current, "pointerdown", (e) => {
              let { drag: t, dragListener: r = !0 } = this.getProps();
              t && r && this.start(e);
            }),
            t = () => {
              let { dragConstraints: e } = this.getProps();
              rM(e) &&
                e.current &&
                (this.constraints = this.resolveRefConstraints());
            },
            { projection: r } = this.visualElement,
            i = r.addEventListener("measure", t);
          r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()),
            L.read(t);
          let o = rA(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            a = r.addEventListener(
              "didUpdate",
              ({ delta: e, hasLayoutChanged: t }) => {
                this.isDragging &&
                  t &&
                  (rY((t) => {
                    let r = this.getAxisMotionValue(t);
                    r &&
                      ((this.originPoint[t] += e[t].translate),
                      r.set(r.get() + e[t].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            o(), e(), i(), a && a();
          };
        }
        getProps() {
          let e = this.visualElement.getProps(),
            {
              drag: t = !1,
              dragDirectionLock: r = !1,
              dragPropagation: i = !1,
              dragConstraints: o = !1,
              dragElastic: a = 0.35,
              dragMomentum: s = !0,
            } = e;
          return {
            ...e,
            drag: t,
            dragDirectionLock: r,
            dragPropagation: i,
            dragConstraints: o,
            dragElastic: a,
            dragMomentum: s,
          };
        }
      }
      function it(e, t, r) {
        return (!0 === t || t === e) && (null === r || r === e);
      }
      class ir extends ru {
        constructor(e) {
          super(e),
            (this.removeGroupControls = P),
            (this.removeListeners = P),
            (this.controls = new ie(e));
        }
        mount() {
          let { dragControls: e } = this.node.getProps();
          e && (this.removeGroupControls = e.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || P);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let ii = (e) => (t, r) => {
        e && L.postRender(() => e(t, r));
      };
      class io extends ru {
        constructor() {
          super(...arguments), (this.removePointerDownListener = P);
        }
        onPointerDown(e) {
          this.session = new rD(e, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: r9(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: e,
            onPanStart: t,
            onPan: r,
            onPanEnd: i,
          } = this.node.getProps();
          return {
            onSessionStart: ii(e),
            onStart: ii(t),
            onMove: r,
            onEnd: (e, t) => {
              delete this.session, i && L.postRender(() => i(e, t));
            },
          };
        }
        mount() {
          this.removePointerDownListener = rS(
            this.node.current,
            "pointerdown",
            (e) => this.onPointerDown(e)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      }
      var ia,
        is,
        il,
        iu = r(7437),
        id = r(2265);
      let ic = (0, id.createContext)(null),
        ih = (0, id.createContext)({}),
        ip = (0, id.createContext)({}),
        im = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function iv(e, t) {
        return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
      }
      let iy = {
          correct: (e, t) => {
            if (!t.target) return e;
            if ("string" == typeof e) {
              if (!es.test(e)) return e;
              e = parseFloat(e);
            }
            let r = iv(e, t.target.x),
              i = iv(e, t.target.y);
            return `${r}% ${i}%`;
          },
        },
        ig = {},
        { schedule: ib, cancel: i_ } = R(queueMicrotask, !1);
      class iw extends id.Component {
        componentDidMount() {
          let {
              visualElement: e,
              layoutGroup: t,
              switchLayoutGroup: r,
              layoutId: i,
            } = this.props,
            { projection: o } = e;
          Object.assign(ig, ix),
            o &&
              (t.group && t.group.add(o),
              r && r.register && i && r.register(o),
              o.root.didUpdate(),
              o.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              o.setOptions({
                ...o.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (im.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(e) {
          let {
              layoutDependency: t,
              visualElement: r,
              drag: i,
              isPresent: o,
            } = this.props,
            a = r.projection;
          return (
            a &&
              ((a.isPresent = o),
              i || e.layoutDependency !== t || void 0 === t
                ? a.willUpdate()
                : this.safeToRemove(),
              e.isPresent === o ||
                (o
                  ? a.promote()
                  : a.relegate() ||
                    L.postRender(() => {
                      let e = a.getStack();
                      (e && e.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: e } = this.props.visualElement;
          e &&
            (e.root.didUpdate(),
            ib.postRender(() => {
              !e.currentAnimation && e.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: e,
              layoutGroup: t,
              switchLayoutGroup: r,
            } = this.props,
            { projection: i } = e;
          i &&
            (i.scheduleCheckAfterUnmount(),
            t && t.group && t.group.remove(i),
            r && r.deregister && r.deregister(i));
        }
        safeToRemove() {
          let { safeToRemove: e } = this.props;
          e && e();
        }
        render() {
          return null;
        }
      }
      function iT(e) {
        let [t, r] = (function () {
            let e = (0, id.useContext)(ic);
            if (null === e) return [!0, null];
            let { isPresent: t, onExitComplete: r, register: i } = e,
              o = (0, id.useId)();
            (0, id.useEffect)(() => i(o), []);
            let a = (0, id.useCallback)(() => r && r(o), [o, r]);
            return !t && r ? [!1, a] : [!0];
          })(),
          i = (0, id.useContext)(ih);
        return (0, iu.jsx)(iw, {
          ...e,
          layoutGroup: i,
          switchLayoutGroup: (0, id.useContext)(ip),
          isPresent: t,
          safeToRemove: r,
        });
      }
      let ix = {
          borderRadius: {
            ...iy,
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
            ],
          },
          borderTopLeftRadius: iy,
          borderTopRightRadius: iy,
          borderBottomLeftRadius: iy,
          borderBottomRightRadius: iy,
          boxShadow: {
            correct: (e, { treeScale: t, projectionDelta: r }) => {
              let i = e$.parse(e);
              if (i.length > 5) return e;
              let o = e$.createTransformer(e),
                a = "number" != typeof i[0] ? 1 : 0,
                s = r.x.scale * t.x,
                l = r.y.scale * t.y;
              (i[0 + a] /= s), (i[1 + a] /= l);
              let u = tb(s, l, 0.5);
              return (
                "number" == typeof i[2 + a] && (i[2 + a] /= u),
                "number" == typeof i[3 + a] && (i[3 + a] /= u),
                o(i)
              );
            },
          },
        },
        iE = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        ik = iE.length,
        iA = (e) => ("string" == typeof e ? parseFloat(e) : e),
        iS = (e) => "number" == typeof e || es.test(e);
      function iP(e, t) {
        return void 0 !== e[t] ? e[t] : e.borderRadius;
      }
      let iD = iL(0, 0.5, W),
        iR = iL(0.5, 0.95, P);
      function iL(e, t, r) {
        return (i) => (i < e ? 0 : i > t ? 1 : r(e7(e, t, i)));
      }
      function iC(e, t) {
        (e.min = t.min), (e.max = t.max);
      }
      function iO(e, t) {
        iC(e.x, t.x), iC(e.y, t.y);
      }
      function iM(e, t) {
        (e.translate = t.translate),
          (e.scale = t.scale),
          (e.originPoint = t.originPoint),
          (e.origin = t.origin);
      }
      function iI(e, t, r, i, o) {
        return (
          (e -= t),
          (e = i + (1 / r) * (e - i)),
          void 0 !== o && (e = i + (1 / o) * (e - i)),
          e
        );
      }
      function iN(e, t, [r, i, o], a, s) {
        !(function (e, t = 0, r = 1, i = 0.5, o, a = e, s = e) {
          if (
            (ea.test(t) &&
              ((t = parseFloat(t)), (t = tb(s.min, s.max, t / 100) - s.min)),
            "number" != typeof t)
          )
            return;
          let l = tb(a.min, a.max, i);
          e === a && (l -= t),
            (e.min = iI(e.min, t, r, l, o)),
            (e.max = iI(e.max, t, r, l, o));
        })(e, t[r], t[i], t[o], t.scale, a, s);
      }
      let ij = ["x", "scaleX", "originX"],
        iB = ["y", "scaleY", "originY"];
      function iU(e, t, r, i) {
        iN(e.x, t, ij, r ? r.x : void 0, i ? i.x : void 0),
          iN(e.y, t, iB, r ? r.y : void 0, i ? i.y : void 0);
      }
      function iq(e) {
        return 0 === e.translate && 1 === e.scale;
      }
      function iV(e) {
        return iq(e.x) && iq(e.y);
      }
      function iF(e, t) {
        return e.min === t.min && e.max === t.max;
      }
      function iH(e, t) {
        return (
          Math.round(e.min) === Math.round(t.min) &&
          Math.round(e.max) === Math.round(t.max)
        );
      }
      function iW(e, t) {
        return iH(e.x, t.x) && iH(e.y, t.y);
      }
      function iz(e) {
        return rI(e.x) / rI(e.y);
      }
      function i$(e, t) {
        return (
          e.translate === t.translate &&
          e.scale === t.scale &&
          e.originPoint === t.originPoint
        );
      }
      class iG {
        constructor() {
          this.members = [];
        }
        add(e) {
          t0(this.members, e), e.scheduleRender();
        }
        remove(e) {
          if (
            (t1(this.members, e),
            e === this.prevLead && (this.prevLead = void 0),
            e === this.lead)
          ) {
            let e = this.members[this.members.length - 1];
            e && this.promote(e);
          }
        }
        relegate(e) {
          let t;
          let r = this.members.findIndex((t) => e === t);
          if (0 === r) return !1;
          for (let e = r; e >= 0; e--) {
            let r = this.members[e];
            if (!1 !== r.isPresent) {
              t = r;
              break;
            }
          }
          return !!t && (this.promote(t), !0);
        }
        promote(e, t) {
          let r = this.lead;
          if (e !== r && ((this.prevLead = r), (this.lead = e), e.show(), r)) {
            r.instance && r.scheduleRender(),
              e.scheduleRender(),
              (e.resumeFrom = r),
              t && (e.resumeFrom.preserveOpacity = !0),
              r.snapshot &&
                ((e.snapshot = r.snapshot),
                (e.snapshot.latestValues =
                  r.animationValues || r.latestValues)),
              e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
            let { crossfade: i } = e.options;
            !1 === i && r.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((e) => {
            let { options: t, resumingFrom: r } = e;
            t.onExitComplete && t.onExitComplete(),
              r && r.options.onExitComplete && r.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((e) => {
            e.instance && e.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      let iK = (e, t) => e.depth - t.depth;
      class iY {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(e) {
          t0(this.children, e), (this.isDirty = !0);
        }
        remove(e) {
          t1(this.children, e), (this.isDirty = !0);
        }
        forEach(e) {
          this.isDirty && this.children.sort(iK),
            (this.isDirty = !1),
            this.children.forEach(e);
        }
      }
      function iX(e) {
        let t = t7(e) ? e.get() : e;
        return tZ(t) ? t.toValue() : t;
      }
      let iQ = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        },
        iZ = "undefined" != typeof window && void 0 !== window.MotionDebug,
        iJ = ["", "X", "Y", "Z"],
        i0 = { visibility: "hidden" },
        i1 = 0;
      function i2(e, t, r, i) {
        let { latestValues: o } = t;
        o[e] && ((r[e] = o[e]), t.setStaticValue(e, 0), i && (i[e] = 0));
      }
      function i5({
        attachResizeListener: e,
        defaultParent: t,
        measureScroll: r,
        checkIsScrollRoot: i,
        resetTransform: o,
      }) {
        return class {
          constructor(e = {}, r = null == t ? void 0 : t()) {
            (this.id = i1++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.hasCheckedOptimisedAppear = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.scheduleUpdate = () => this.update()),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  iZ &&
                    (iQ.totalNodes =
                      iQ.resolvedTargetDeltas =
                      iQ.recalculatedProjection =
                        0),
                  this.nodes.forEach(i3),
                  this.nodes.forEach(ni),
                  this.nodes.forEach(nn),
                  this.nodes.forEach(i6),
                  iZ && window.MotionDebug.record(iQ);
              }),
              (this.resolvedRelativeTargetAt = 0),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = e),
              (this.root = r ? r.root || r : this),
              (this.path = r ? [...r.path, r] : []),
              (this.parent = r),
              (this.depth = r ? r.depth + 1 : 0);
            for (let e = 0; e < this.path.length; e++)
              this.path[e].shouldResetTransform = !0;
            this.root === this && (this.nodes = new iY());
          }
          addEventListener(e, t) {
            return (
              this.eventHandlers.has(e) || this.eventHandlers.set(e, new t2()),
              this.eventHandlers.get(e).add(t)
            );
          }
          notifyListeners(e, ...t) {
            let r = this.eventHandlers.get(e);
            r && r.notify(...t);
          }
          hasListeners(e) {
            return this.eventHandlers.has(e);
          }
          mount(t, r = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = t instanceof SVGElement && "svg" !== t.tagName),
              (this.instance = t);
            let { layoutId: i, layout: o, visualElement: a } = this.options;
            if (
              (a && !a.current && a.mount(t),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              r && (o || i) && (this.isLayoutDirty = !0),
              e)
            ) {
              let r;
              let i = () => (this.root.updateBlockedByResize = !1);
              e(t, () => {
                (this.root.updateBlockedByResize = !0),
                  r && r(),
                  (r = (function (e, t) {
                    let r = e3.now(),
                      i = ({ timestamp: t }) => {
                        let o = t - r;
                        o >= 250 && (C(i), e(o - 250));
                      };
                    return L.read(i, !0), () => C(i);
                  })(i, 0)),
                  im.hasAnimatedSinceResize &&
                    ((im.hasAnimatedSinceResize = !1), this.nodes.forEach(nr));
              });
            }
            i && this.root.registerSharedNode(i, this),
              !1 !== this.options.animate &&
                a &&
                (i || o) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: e,
                    hasLayoutChanged: t,
                    hasRelativeTargetChanged: r,
                    layout: i,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let o =
                        this.options.transition ||
                        a.getDefaultTransition() ||
                        nd,
                      {
                        onLayoutAnimationStart: s,
                        onLayoutAnimationComplete: l,
                      } = a.getProps(),
                      u = !this.targetLayout || !iW(this.targetLayout, i) || r,
                      d = !t && r;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      d ||
                      (t && (u || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(e, d);
                      let t = { ...x(o, "layout"), onPlay: s, onComplete: l };
                      (a.shouldReduceMotion || this.options.layoutRoot) &&
                        ((t.delay = 0), (t.type = !1)),
                        this.startAnimation(t);
                    } else
                      t || nr(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = i;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let e = this.getStack();
            e && e.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              C(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(no),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: e } = this.options;
            return e && e.getProps().transformTemplate;
          }
          willUpdate(e = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (window.MotionCancelOptimisedAnimation &&
                !this.hasCheckedOptimisedAppear &&
                (function e(t) {
                  if (((t.hasCheckedOptimisedAppear = !0), t.root === t))
                    return;
                  let { visualElement: r } = t.options;
                  if (!r) return;
                  let i = r.props[t9];
                  if (window.MotionHasOptimisedAnimation(i, "transform")) {
                    let { layout: e, layoutId: r } = t.options;
                    window.MotionCancelOptimisedAnimation(
                      i,
                      "transform",
                      L,
                      !(e || r)
                    );
                  }
                  let { parent: o } = t;
                  o && !o.hasCheckedOptimisedAppear && e(o);
                })(this),
              this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let e = 0; e < this.path.length; e++) {
              let t = this.path[e];
              (t.shouldResetTransform = !0),
                t.updateScroll("snapshot"),
                t.options.layoutRoot && t.willUpdate(!1);
            }
            let { layoutId: t, layout: r } = this.options;
            if (void 0 === t && !r) return;
            let i = this.getTransformTemplate();
            (this.prevTransformTemplateValue = i
              ? i(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              e && this.notifyListeners("willUpdate");
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(i7);
              return;
            }
            this.isUpdating || this.nodes.forEach(ne),
              (this.isUpdating = !1),
              this.nodes.forEach(nt),
              this.nodes.forEach(i8),
              this.nodes.forEach(i4),
              this.clearAllSnapshots();
            let e = e3.now();
            (O.delta = ee(0, 1e3 / 60, e - O.timestamp)),
              (O.timestamp = e),
              (O.isProcessing = !0),
              M.update.process(O),
              M.preRender.process(O),
              M.render.process(O),
              (O.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), ib.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            this.nodes.forEach(i9), this.sharedNodes.forEach(na);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              L.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            L.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let e = 0; e < this.path.length; e++)
                this.path[e].updateScroll();
            let e = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = rK()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: t } = this.options;
            t &&
              t.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                e ? e.layoutBox : void 0
              );
          }
          updateScroll(e = "measure") {
            let t = !!(this.options.layoutScroll && this.instance);
            if (
              (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === e &&
                (t = !1),
              t)
            ) {
              let t = i(this.instance);
              this.scroll = {
                animationId: this.root.animationId,
                phase: e,
                isRoot: t,
                offset: r(this.instance),
                wasRoot: this.scroll ? this.scroll.isRoot : t,
              };
            }
          }
          resetTransform() {
            if (!o) return;
            let e =
                this.isLayoutDirty ||
                this.shouldResetTransform ||
                this.options.alwaysMeasureLayout,
              t = this.projectionDelta && !iV(this.projectionDelta),
              r = this.getTransformTemplate(),
              i = r ? r(this.latestValues, "") : void 0,
              a = i !== this.prevTransformTemplateValue;
            e &&
              (t || rJ(this.latestValues) || a) &&
              (o(this.instance, i),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(e = !0) {
            var t;
            let r = this.measurePageBox(),
              i = this.removeElementScroll(r);
            return (
              e && (i = this.removeTransform(i)),
              np((t = i).x),
              np(t.y),
              {
                animationId: this.root.animationId,
                measuredBox: r,
                layoutBox: i,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            var e;
            let { visualElement: t } = this.options;
            if (!t) return rK();
            let r = t.measureViewportBox();
            if (
              !(
                (null === (e = this.scroll) || void 0 === e
                  ? void 0
                  : e.wasRoot) || this.path.some(nm)
              )
            ) {
              let { scroll: e } = this.root;
              e && (r8(r.x, e.offset.x), r8(r.y, e.offset.y));
            }
            return r;
          }
          removeElementScroll(e) {
            var t;
            let r = rK();
            if (
              (iO(r, e),
              null === (t = this.scroll) || void 0 === t ? void 0 : t.wasRoot)
            )
              return r;
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t],
                { scroll: o, options: a } = i;
              i !== this.root &&
                o &&
                a.layoutScroll &&
                (o.wasRoot && iO(r, e),
                r8(r.x, o.offset.x),
                r8(r.y, o.offset.y));
            }
            return r;
          }
          applyTransform(e, t = !1) {
            let r = rK();
            iO(r, e);
            for (let e = 0; e < this.path.length; e++) {
              let i = this.path[e];
              !t &&
                i.options.layoutScroll &&
                i.scroll &&
                i !== i.root &&
                r3(r, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
                rJ(i.latestValues) && r3(r, i.latestValues);
            }
            return rJ(this.latestValues) && r3(r, this.latestValues), r;
          }
          removeTransform(e) {
            let t = rK();
            iO(t, e);
            for (let e = 0; e < this.path.length; e++) {
              let r = this.path[e];
              if (!r.instance || !rJ(r.latestValues)) continue;
              rZ(r.latestValues) && r.updateSnapshot();
              let i = rK();
              iO(i, r.measurePageBox()),
                iU(
                  t,
                  r.latestValues,
                  r.snapshot ? r.snapshot.layoutBox : void 0,
                  i
                );
            }
            return rJ(this.latestValues) && iU(t, this.latestValues), t;
          }
          setTargetDelta(e) {
            (this.targetDelta = e),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(e) {
            this.options = {
              ...this.options,
              ...e,
              crossfade: void 0 === e.crossfade || e.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !== O.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(e = !1) {
            var t, r, i, o;
            let a = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = a.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = a.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
            let s = !!this.resumingFrom || this !== a;
            if (
              !(
                e ||
                (s && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget ||
                this.root.updateBlockedByResize
              )
            )
              return;
            let { layout: l, layoutId: u } = this.options;
            if (this.layout && (l || u)) {
              if (
                ((this.resolvedRelativeTargetAt = O.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let e = this.getClosestProjectingParent();
                e && e.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = e),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = rK()),
                    (this.relativeTargetOrigin = rK()),
                    rq(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      e.layout.layoutBox
                    ),
                    iO(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = rK()), (this.targetWithTransforms = rK())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (r = this.target),
                      (i = this.relativeTarget),
                      (o = this.relativeParent.target),
                      rB(r.x, i.x, o.x),
                      rB(r.y, i.y, o.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : iO(this.target, this.layout.layoutBox),
                      r5(this.target, this.targetDelta))
                    : iO(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let e = this.getClosestProjectingParent();
                  e &&
                  !!e.resumingFrom == !!this.resumingFrom &&
                  !e.options.layoutScroll &&
                  e.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = e),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = rK()),
                      (this.relativeTargetOrigin = rK()),
                      rq(this.relativeTargetOrigin, this.target, e.target),
                      iO(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                iZ && iQ.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              rZ(this.parent.latestValues) ||
              r0(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var e;
            let t = this.getLead(),
              r = !!this.resumingFrom || this !== t,
              i = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty)) &&
                (i = !1),
              r &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (i = !1),
              this.resolvedRelativeTargetAt === O.timestamp && (i = !1),
              i)
            )
              return;
            let { layout: o, layoutId: a } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(o || a))
            )
              return;
            iO(this.layoutCorrected, this.layout.layoutBox);
            let s = this.treeScale.x,
              l = this.treeScale.y;
            !(function (e, t, r, i = !1) {
              let o, a;
              let s = r.length;
              if (s) {
                t.x = t.y = 1;
                for (let l = 0; l < s; l++) {
                  a = (o = r[l]).projectionDelta;
                  let { visualElement: s } = o.options;
                  (!s ||
                    !s.props.style ||
                    "contents" !== s.props.style.display) &&
                    (i &&
                      o.options.layoutScroll &&
                      o.scroll &&
                      o !== o.root &&
                      r3(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
                    a && ((t.x *= a.x.scale), (t.y *= a.y.scale), r5(e, a)),
                    i && rJ(o.latestValues) && r3(e, o.latestValues));
                }
                t.x < 1.0000000000001 && t.x > 0.999999999999 && (t.x = 1),
                  t.y < 1.0000000000001 && t.y > 0.999999999999 && (t.y = 1);
              }
            })(this.layoutCorrected, this.treeScale, this.path, r),
              t.layout &&
                !t.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((t.target = t.layout.layoutBox),
                (t.targetWithTransforms = rK()));
            let { target: u } = t;
            if (!u) {
              this.prevProjectionDelta &&
                (this.createProjectionDeltas(), this.scheduleRender());
              return;
            }
            this.projectionDelta && this.prevProjectionDelta
              ? (iM(this.prevProjectionDelta.x, this.projectionDelta.x),
                iM(this.prevProjectionDelta.y, this.projectionDelta.y))
              : this.createProjectionDeltas(),
              rj(
                this.projectionDelta,
                this.layoutCorrected,
                u,
                this.latestValues
              ),
              (this.treeScale.x === s &&
                this.treeScale.y === l &&
                i$(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                i$(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", u)),
              iZ && iQ.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(e = !0) {
            var t;
            if (
              (null === (t = this.options.visualElement) ||
                void 0 === t ||
                t.scheduleRender(),
              e)
            ) {
              let e = this.getStack();
              e && e.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          createProjectionDeltas() {
            (this.prevProjectionDelta = r$()),
              (this.projectionDelta = r$()),
              (this.projectionDeltaWithTransform = r$());
          }
          setAnimationOrigin(e, t = !1) {
            let r;
            let i = this.snapshot,
              o = i ? i.latestValues : {},
              a = { ...this.latestValues },
              s = r$();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !t);
            let l = rK(),
              u =
                (i ? i.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              d = this.getStack(),
              c = !d || d.members.length <= 1,
              h = !!(
                u &&
                !c &&
                !0 === this.options.crossfade &&
                !this.path.some(nu)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (t) => {
                let i = t / 1e3;
                if (
                  (ns(s.x, e.x, i),
                  ns(s.y, e.y, i),
                  this.setTargetDelta(s),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var d, p, f, m;
                  rq(
                    l,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                    (f = this.relativeTarget),
                    (m = this.relativeTargetOrigin),
                    nl(f.x, m.x, l.x, i),
                    nl(f.y, m.y, l.y, i),
                    r &&
                      ((d = this.relativeTarget),
                      (p = r),
                      iF(d.x, p.x) && iF(d.y, p.y)) &&
                      (this.isProjectionDirty = !1),
                    r || (r = rK()),
                    iO(r, this.relativeTarget);
                }
                u &&
                  ((this.animationValues = a),
                  (function (e, t, r, i, o, a) {
                    o
                      ? ((e.opacity = tb(
                          0,
                          void 0 !== r.opacity ? r.opacity : 1,
                          iD(i)
                        )),
                        (e.opacityExit = tb(
                          void 0 !== t.opacity ? t.opacity : 1,
                          0,
                          iR(i)
                        )))
                      : a &&
                        (e.opacity = tb(
                          void 0 !== t.opacity ? t.opacity : 1,
                          void 0 !== r.opacity ? r.opacity : 1,
                          i
                        ));
                    for (let o = 0; o < ik; o++) {
                      let a = `border${iE[o]}Radius`,
                        s = iP(t, a),
                        l = iP(r, a);
                      (void 0 !== s || void 0 !== l) &&
                        (s || (s = 0),
                        l || (l = 0),
                        0 === s || 0 === l || iS(s) === iS(l)
                          ? ((e[a] = Math.max(tb(iA(s), iA(l), i), 0)),
                            (ea.test(l) || ea.test(s)) && (e[a] += "%"))
                          : (e[a] = l));
                    }
                    (t.rotate || r.rotate) &&
                      (e.rotate = tb(t.rotate || 0, r.rotate || 0, i));
                  })(a, o, this.latestValues, i, h, c)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = i);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(e) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                (C(this.pendingAnimation), (this.pendingAnimation = void 0)),
              (this.pendingAnimation = L.update(() => {
                (im.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (e, t, r) {
                    let i = t7(0) ? 0 : t3(0);
                    return i.start(tQ("", i, 1e3, r)), i.animation;
                  })(0, 0, {
                    ...e,
                    onUpdate: (t) => {
                      this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t);
                    },
                    onComplete: () => {
                      e.onComplete && e.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let e = this.getStack();
            e && e.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let e = this.getLead(),
              {
                targetWithTransforms: t,
                target: r,
                layout: i,
                latestValues: o,
              } = e;
            if (t && r && i) {
              if (
                this !== e &&
                this.layout &&
                i &&
                nf(
                  this.options.animationType,
                  this.layout.layoutBox,
                  i.layoutBox
                )
              ) {
                r = this.target || rK();
                let t = rI(this.layout.layoutBox.x);
                (r.x.min = e.target.x.min), (r.x.max = r.x.min + t);
                let i = rI(this.layout.layoutBox.y);
                (r.y.min = e.target.y.min), (r.y.max = r.y.min + i);
              }
              iO(t, r),
                r3(t, o),
                rj(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  t,
                  o
                );
            }
          }
          registerSharedNode(e, t) {
            this.sharedNodes.has(e) || this.sharedNodes.set(e, new iG()),
              this.sharedNodes.get(e).add(t);
            let r = t.options.initialPromotionConfig;
            t.promote({
              transition: r ? r.transition : void 0,
              preserveFollowOpacity:
                r && r.shouldPreserveFollowOpacity
                  ? r.shouldPreserveFollowOpacity(t)
                  : void 0,
            });
          }
          isLead() {
            let e = this.getStack();
            return !e || e.lead === this;
          }
          getLead() {
            var e;
            let { layoutId: t } = this.options;
            return (
              (t &&
                (null === (e = this.getStack()) || void 0 === e
                  ? void 0
                  : e.lead)) ||
              this
            );
          }
          getPrevLead() {
            var e;
            let { layoutId: t } = this.options;
            return t
              ? null === (e = this.getStack()) || void 0 === e
                ? void 0
                : e.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: e } = this.options;
            if (e) return this.root.sharedNodes.get(e);
          }
          promote({
            needsReset: e,
            transition: t,
            preserveFollowOpacity: r,
          } = {}) {
            let i = this.getStack();
            i && i.promote(this, r),
              e && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              t && this.setOptions({ transition: t });
          }
          relegate() {
            let e = this.getStack();
            return !!e && e.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: e } = this.options;
            if (!e) return;
            let t = !1,
              { latestValues: r } = e;
            if (
              ((r.z ||
                r.rotate ||
                r.rotateX ||
                r.rotateY ||
                r.rotateZ ||
                r.skewX ||
                r.skewY) &&
                (t = !0),
              !t)
            )
              return;
            let i = {};
            r.z && i2("z", e, i, this.animationValues);
            for (let t = 0; t < iJ.length; t++)
              i2(`rotate${iJ[t]}`, e, i, this.animationValues),
                i2(`skew${iJ[t]}`, e, i, this.animationValues);
            for (let t in (e.render(), i))
              e.setStaticValue(t, i[t]),
                this.animationValues && (this.animationValues[t] = i[t]);
            e.scheduleRender();
          }
          getProjectionStyles(e) {
            var t, r;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return i0;
            let i = { visibility: "" },
              o = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (i.opacity = ""),
                (i.pointerEvents =
                  iX(null == e ? void 0 : e.pointerEvents) || ""),
                (i.transform = o ? o(this.latestValues, "") : "none"),
                i
              );
            let a = this.getLead();
            if (!this.projectionDelta || !this.layout || !a.target) {
              let t = {};
              return (
                this.options.layoutId &&
                  ((t.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (t.pointerEvents =
                    iX(null == e ? void 0 : e.pointerEvents) || "")),
                this.hasProjected &&
                  !rJ(this.latestValues) &&
                  ((t.transform = o ? o({}, "") : "none"),
                  (this.hasProjected = !1)),
                t
              );
            }
            let s = a.animationValues || a.latestValues;
            this.applyTransformsToTarget(),
              (i.transform = (function (e, t, r) {
                let i = "",
                  o = e.x.translate / t.x,
                  a = e.y.translate / t.y,
                  s = (null == r ? void 0 : r.z) || 0;
                if (
                  ((o || a || s) &&
                    (i = `translate3d(${o}px, ${a}px, ${s}px) `),
                  (1 !== t.x || 1 !== t.y) &&
                    (i += `scale(${1 / t.x}, ${1 / t.y}) `),
                  r)
                ) {
                  let {
                    transformPerspective: e,
                    rotate: t,
                    rotateX: o,
                    rotateY: a,
                    skewX: s,
                    skewY: l,
                  } = r;
                  e && (i = `perspective(${e}px) ${i}`),
                    t && (i += `rotate(${t}deg) `),
                    o && (i += `rotateX(${o}deg) `),
                    a && (i += `rotateY(${a}deg) `),
                    s && (i += `skewX(${s}deg) `),
                    l && (i += `skewY(${l}deg) `);
                }
                let l = e.x.scale * t.x,
                  u = e.y.scale * t.y;
                return (
                  (1 !== l || 1 !== u) && (i += `scale(${l}, ${u})`),
                  i || "none"
                );
              })(this.projectionDeltaWithTransform, this.treeScale, s)),
              o && (i.transform = o(s, i.transform));
            let { x: l, y: u } = this.projectionDelta;
            for (let e in ((i.transformOrigin = `${100 * l.origin}% ${
              100 * u.origin
            }% 0`),
            a.animationValues
              ? (i.opacity =
                  a === this
                    ? null !==
                        (r =
                          null !== (t = s.opacity) && void 0 !== t
                            ? t
                            : this.latestValues.opacity) && void 0 !== r
                      ? r
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : s.opacityExit)
              : (i.opacity =
                  a === this
                    ? void 0 !== s.opacity
                      ? s.opacity
                      : ""
                    : void 0 !== s.opacityExit
                    ? s.opacityExit
                    : 0),
            ig)) {
              if (void 0 === s[e]) continue;
              let { correct: t, applyTo: r } = ig[e],
                o = "none" === i.transform ? s[e] : t(s[e], a);
              if (r) {
                let e = r.length;
                for (let t = 0; t < e; t++) i[r[t]] = o;
              } else i[e] = o;
            }
            return (
              this.options.layoutId &&
                (i.pointerEvents =
                  a === this
                    ? iX(null == e ? void 0 : e.pointerEvents) || ""
                    : "none"),
              i
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((e) => {
              var t;
              return null === (t = e.currentAnimation) || void 0 === t
                ? void 0
                : t.stop();
            }),
              this.root.nodes.forEach(i7),
              this.root.sharedNodes.clear();
          }
        };
      }
      function i8(e) {
        e.updateLayout();
      }
      function i4(e) {
        var t;
        let r =
          (null === (t = e.resumeFrom) || void 0 === t ? void 0 : t.snapshot) ||
          e.snapshot;
        if (e.isLead() && e.layout && r && e.hasListeners("didUpdate")) {
          let { layoutBox: t, measuredBox: i } = e.layout,
            { animationType: o } = e.options,
            a = r.source !== e.layout.source;
          "size" === o
            ? rY((e) => {
                let i = a ? r.measuredBox[e] : r.layoutBox[e],
                  o = rI(i);
                (i.min = t[e].min), (i.max = i.min + o);
              })
            : nf(o, r.layoutBox, t) &&
              rY((i) => {
                let o = a ? r.measuredBox[i] : r.layoutBox[i],
                  s = rI(t[i]);
                (o.max = o.min + s),
                  e.relativeTarget &&
                    !e.currentAnimation &&
                    ((e.isProjectionDirty = !0),
                    (e.relativeTarget[i].max = e.relativeTarget[i].min + s));
              });
          let s = r$();
          rj(s, t, r.layoutBox);
          let l = r$();
          a
            ? rj(l, e.applyTransform(i, !0), r.measuredBox)
            : rj(l, t, r.layoutBox);
          let u = !iV(s),
            d = !1;
          if (!e.resumeFrom) {
            let i = e.getClosestProjectingParent();
            if (i && !i.resumeFrom) {
              let { snapshot: o, layout: a } = i;
              if (o && a) {
                let s = rK();
                rq(s, r.layoutBox, o.layoutBox);
                let l = rK();
                rq(l, t, a.layoutBox),
                  iW(s, l) || (d = !0),
                  i.options.layoutRoot &&
                    ((e.relativeTarget = l),
                    (e.relativeTargetOrigin = s),
                    (e.relativeParent = i));
              }
            }
          }
          e.notifyListeners("didUpdate", {
            layout: t,
            snapshot: r,
            delta: l,
            layoutDelta: s,
            hasLayoutChanged: u,
            hasRelativeTargetChanged: d,
          });
        } else if (e.isLead()) {
          let { onExitComplete: t } = e.options;
          t && t();
        }
        e.options.transition = void 0;
      }
      function i3(e) {
        iZ && iQ.totalNodes++,
          e.parent &&
            (e.isProjecting() ||
              (e.isProjectionDirty = e.parent.isProjectionDirty),
            e.isSharedProjectionDirty ||
              (e.isSharedProjectionDirty = !!(
                e.isProjectionDirty ||
                e.parent.isProjectionDirty ||
                e.parent.isSharedProjectionDirty
              )),
            e.isTransformDirty ||
              (e.isTransformDirty = e.parent.isTransformDirty));
      }
      function i6(e) {
        e.isProjectionDirty =
          e.isSharedProjectionDirty =
          e.isTransformDirty =
            !1;
      }
      function i9(e) {
        e.clearSnapshot();
      }
      function i7(e) {
        e.clearMeasurements();
      }
      function ne(e) {
        e.isLayoutDirty = !1;
      }
      function nt(e) {
        let { visualElement: t } = e.options;
        t &&
          t.getProps().onBeforeLayoutMeasure &&
          t.notify("BeforeLayoutMeasure"),
          e.resetTransform();
      }
      function nr(e) {
        e.finishAnimation(),
          (e.targetDelta = e.relativeTarget = e.target = void 0),
          (e.isProjectionDirty = !0);
      }
      function ni(e) {
        e.resolveTargetDelta();
      }
      function nn(e) {
        e.calcProjection();
      }
      function no(e) {
        e.resetSkewAndRotation();
      }
      function na(e) {
        e.removeLeadSnapshot();
      }
      function ns(e, t, r) {
        (e.translate = tb(t.translate, 0, r)),
          (e.scale = tb(t.scale, 1, r)),
          (e.origin = t.origin),
          (e.originPoint = t.originPoint);
      }
      function nl(e, t, r, i) {
        (e.min = tb(t.min, r.min, i)), (e.max = tb(t.max, r.max, i));
      }
      function nu(e) {
        return e.animationValues && void 0 !== e.animationValues.opacityExit;
      }
      let nd = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        nc = (e) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(e),
        nh = nc("applewebkit/") && !nc("chrome/") ? Math.round : P;
      function np(e) {
        (e.min = nh(e.min)), (e.max = nh(e.max));
      }
      function nf(e, t, r) {
        return (
          "position" === e ||
          ("preserve-aspect" === e && !(0.2 >= Math.abs(iz(t) - iz(r))))
        );
      }
      function nm(e) {
        var t;
        return (
          e !== e.root &&
          (null === (t = e.scroll) || void 0 === t ? void 0 : t.wasRoot)
        );
      }
      let nv = i5({
          attachResizeListener: (e, t) => rA(e, "resize", t),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        ny = { current: void 0 },
        ng = i5({
          measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
          defaultParent: () => {
            if (!ny.current) {
              let e = new nv({});
              e.mount(window),
                e.setOptions({ layoutScroll: !0 }),
                (ny.current = e);
            }
            return ny.current;
          },
          resetTransform: (e, t) => {
            e.style.transform = void 0 !== t ? t : "none";
          },
          checkIsScrollRoot: (e) =>
            "fixed" === window.getComputedStyle(e).position,
        });
      function nb(e, t, r) {
        let { props: i } = e;
        e.animationState &&
          i.whileHover &&
          e.animationState.setActive("whileHover", "Start" === r);
        let o = i["onHover" + r];
        o && L.postRender(() => o(t, rE(t)));
      }
      class n_ extends ru {
        mount() {
          let { current: e } = this.node;
          e &&
            (this.unmount = (function (e, t, r = {}) {
              let [i, o, a] = rf(e, r),
                s = rm((e) => {
                  let { target: r } = e,
                    i = t(e);
                  if (!i || !r) return;
                  let a = rm((e) => {
                    i(e), r.removeEventListener("pointerleave", a);
                  });
                  r.addEventListener("pointerleave", a, o);
                });
              return (
                i.forEach((e) => {
                  e.addEventListener("pointerenter", s, o);
                }),
                a
              );
            })(
              e,
              (e) => (nb(this.node, e, "Start"), (e) => nb(this.node, e, "End"))
            ));
        }
        unmount() {}
      }
      class nw extends ru {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let e = !1;
          try {
            e = this.node.current.matches(":focus-visible");
          } catch (t) {
            e = !0;
          }
          e &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = tg(
            rA(this.node.current, "focus", () => this.onFocus()),
            rA(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
      }
      function nT(e, t, r) {
        let { props: i } = e;
        e.animationState &&
          i.whileTap &&
          e.animationState.setActive("whileTap", "Start" === r);
        let o = i["onTap" + ("End" === r ? "" : r)];
        o && L.postRender(() => o(t, rE(t)));
      }
      class nx extends ru {
        mount() {
          let { current: e } = this.node;
          e &&
            (this.unmount = (function (e, t, r = {}) {
              let [i, o, a] = rf(e, r),
                s = (e) => {
                  let i = e.currentTarget;
                  if (!rx(e) || ry.has(i)) return;
                  ry.add(i);
                  let a = t(e),
                    s = (e, t) => {
                      window.removeEventListener("pointerup", l),
                        window.removeEventListener("pointercancel", u),
                        rx(e) &&
                          ry.has(i) &&
                          (ry.delete(i), a && a(e, { success: t }));
                    },
                    l = (e) => {
                      s(e, r.useGlobalTarget || rT(i, e.target));
                    },
                    u = (e) => {
                      s(e, !1);
                    };
                  window.addEventListener("pointerup", l, o),
                    window.addEventListener("pointercancel", u, o);
                };
              return (
                i.forEach((e) => {
                  rw.has(e.tagName) || -1 !== e.tabIndex || (e.tabIndex = 0),
                    (r.useGlobalTarget ? window : e).addEventListener(
                      "pointerdown",
                      s,
                      o
                    ),
                    e.addEventListener("focus", (e) => r_(e, o), o);
                }),
                a
              );
            })(
              e,
              (e) => (
                nT(this.node, e, "Start"),
                (e, { success: t }) => nT(this.node, e, t ? "End" : "Cancel")
              ),
              { useGlobalTarget: this.node.props.globalTapTarget }
            ));
        }
        unmount() {}
      }
      let nE = new WeakMap(),
        nk = new WeakMap(),
        nA = (e) => {
          let t = nE.get(e.target);
          t && t(e);
        },
        nS = (e) => {
          e.forEach(nA);
        },
        nP = { some: 0, all: 1 };
      class nD extends ru {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: e = {} } = this.node.getProps(),
            { root: t, margin: r, amount: i = "some", once: o } = e,
            a = {
              root: t ? t.current : void 0,
              rootMargin: r,
              threshold: "number" == typeof i ? i : nP[i],
            };
          return (function (e, t, r) {
            let i = (function ({ root: e, ...t }) {
              let r = e || document;
              nk.has(r) || nk.set(r, {});
              let i = nk.get(r),
                o = JSON.stringify(t);
              return (
                i[o] ||
                  (i[o] = new IntersectionObserver(nS, { root: e, ...t })),
                i[o]
              );
            })(t);
            return (
              nE.set(e, r),
              i.observe(e),
              () => {
                nE.delete(e), i.unobserve(e);
              }
            );
          })(this.node.current, a, (e) => {
            let { isIntersecting: t } = e;
            if (
              this.isInView === t ||
              ((this.isInView = t), o && !t && this.hasEnteredView)
            )
              return;
            t && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", t);
            let { onViewportEnter: r, onViewportLeave: i } =
                this.node.getProps(),
              a = t ? r : i;
            a && a(e);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: e, prevProps: t } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: e = {} }, { viewport: t = {} } = {}) {
              return (r) => e[r] !== t[r];
            })(e, t)
          ) && this.startObserver();
        }
        unmount() {}
      }
      let nR = (0, id.createContext)({
          transformPagePoint: (e) => e,
          isStatic: !1,
          reducedMotion: "never",
        }),
        nL = (0, id.createContext)({}),
        nC = "undefined" != typeof window,
        nO = nC ? id.useLayoutEffect : id.useEffect,
        nM = (0, id.createContext)({ strict: !1 });
      function nI(e) {
        return o(e.animate) || p.some((t) => l(e[t]));
      }
      function nN(e) {
        return !!(nI(e) || e.variants);
      }
      function nj(e) {
        return Array.isArray(e) ? e.join(" ") : e;
      }
      let nB = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        nU = {};
      for (let e in nB) nU[e] = { isEnabled: (t) => nB[e].some((e) => !!t[e]) };
      let nq = Symbol.for("motionComponentSymbol"),
        nV = [
          "animate",
          "circle",
          "defs",
          "desc",
          "ellipse",
          "g",
          "image",
          "line",
          "filter",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "rect",
          "stop",
          "switch",
          "symbol",
          "svg",
          "text",
          "tspan",
          "use",
          "view",
        ];
      function nF(e) {
        if ("string" != typeof e || e.includes("-"));
        else if (nV.indexOf(e) > -1 || /[A-Z]/u.test(e)) return !0;
        return !1;
      }
      function nH(e, { style: t, vars: r }, i, o) {
        for (let a in (Object.assign(e.style, t, o && o.getProjectionStyles(i)),
        r))
          e.style.setProperty(a, r[a]);
      }
      let nW = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function nz(e, t, r, i) {
        for (let r in (nH(e, t, void 0, i), t.attrs))
          e.setAttribute(nW.has(r) ? r : t6(r), t.attrs[r]);
      }
      function n$(e, { layout: t, layoutId: r }) {
        return (
          m.has(e) ||
          e.startsWith("origin") ||
          ((t || void 0 !== r) && (!!ig[e] || "opacity" === e))
        );
      }
      function nG(e, t, r) {
        var i;
        let { style: o } = e,
          a = {};
        for (let s in o)
          (t7(o[s]) ||
            (t.style && t7(t.style[s])) ||
            n$(s, e) ||
            (null === (i = null == r ? void 0 : r.getValue(s)) || void 0 === i
              ? void 0
              : i.liveStyle) !== void 0) &&
            (a[s] = o[s]);
        return a;
      }
      function nK(e, t, r) {
        let i = nG(e, t, r);
        for (let r in e)
          (t7(e[r]) || t7(t[r])) &&
            (i[
              -1 !== f.indexOf(r)
                ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
                : r
            ] = e[r]);
        return i;
      }
      let nY = (e) => (t, r) => {
          let i = (0, id.useContext)(nL),
            a = (0, id.useContext)(ic),
            s = () =>
              (function (
                {
                  scrapeMotionValuesFromProps: e,
                  createRenderState: t,
                  onMount: r,
                },
                i,
                a,
                s
              ) {
                let l = {
                  latestValues: (function (e, t, r, i) {
                    let a = {},
                      s = i(e, {});
                    for (let e in s) a[e] = iX(s[e]);
                    let { initial: l, animate: u } = e,
                      c = nI(e),
                      h = nN(e);
                    t &&
                      h &&
                      !c &&
                      !1 !== e.inherit &&
                      (void 0 === l && (l = t.initial),
                      void 0 === u && (u = t.animate));
                    let p = !!r && !1 === r.initial,
                      f = (p = p || !1 === l) ? u : l;
                    if (f && "boolean" != typeof f && !o(f)) {
                      let t = Array.isArray(f) ? f : [f];
                      for (let r = 0; r < t.length; r++) {
                        let i = d(e, t[r]);
                        if (i) {
                          let { transitionEnd: e, transition: t, ...r } = i;
                          for (let e in r) {
                            let t = r[e];
                            if (Array.isArray(t)) {
                              let e = p ? t.length - 1 : 0;
                              t = t[e];
                            }
                            null !== t && (a[e] = t);
                          }
                          for (let t in e) a[t] = e[t];
                        }
                      }
                    }
                    return a;
                  })(i, a, s, e),
                  renderState: t(),
                };
                return r && (l.mount = (e) => r(i, e, l)), l;
              })(e, t, i, a);
          return r
            ? s()
            : (function (e) {
                let t = (0, id.useRef)(null);
                return null === t.current && (t.current = e()), t.current;
              })(s);
        },
        nX = () => ({
          style: {},
          transform: {},
          transformOrigin: {},
          vars: {},
        }),
        nQ = () => ({ ...nX(), attrs: {} }),
        nZ = (e, t) => (t && "number" == typeof e ? t.transform(e) : e),
        nJ = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        n0 = f.length;
      function n1(e, t, r) {
        let { style: i, vars: o, transformOrigin: a } = e,
          s = !1,
          l = !1;
        for (let e in t) {
          let r = t[e];
          if (m.has(e)) {
            s = !0;
            continue;
          }
          if (Y(e)) {
            o[e] = r;
            continue;
          }
          {
            let t = nZ(r, eZ[e]);
            e.startsWith("origin") ? ((l = !0), (a[e] = t)) : (i[e] = t);
          }
        }
        if (
          (!t.transform &&
            (s || r
              ? (i.transform = (function (e, t, r) {
                  let i = "",
                    o = !0;
                  for (let a = 0; a < n0; a++) {
                    let s = f[a],
                      l = e[s];
                    if (void 0 === l) continue;
                    let u = !0;
                    if (
                      !(u =
                        "number" == typeof l
                          ? l === (s.startsWith("scale") ? 1 : 0)
                          : 0 === parseFloat(l)) ||
                      r
                    ) {
                      let e = nZ(l, eZ[s]);
                      if (!u) {
                        o = !1;
                        let t = nJ[s] || s;
                        i += `${t}(${e}) `;
                      }
                      r && (t[s] = e);
                    }
                  }
                  return (
                    (i = i.trim()),
                    r ? (i = r(t, o ? "" : i)) : o && (i = "none"),
                    i
                  );
                })(t, e.transform, r))
              : i.transform && (i.transform = "none")),
          l)
        ) {
          let { originX: e = "50%", originY: t = "50%", originZ: r = 0 } = a;
          i.transformOrigin = `${e} ${t} ${r}`;
        }
      }
      function n2(e, t, r) {
        return "string" == typeof e ? e : es.transform(t + r * e);
      }
      let n5 = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        n8 = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function n4(
        e,
        {
          attrX: t,
          attrY: r,
          attrScale: i,
          originX: o,
          originY: a,
          pathLength: s,
          pathSpacing: l = 1,
          pathOffset: u = 0,
          ...d
        },
        c,
        h
      ) {
        if ((n1(e, d, h), c)) {
          e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
          return;
        }
        (e.attrs = e.style), (e.style = {});
        let { attrs: p, style: f, dimensions: m } = e;
        p.transform && (m && (f.transform = p.transform), delete p.transform),
          m &&
            (void 0 !== o || void 0 !== a || f.transform) &&
            (f.transformOrigin = (function (e, t, r) {
              let i = n2(t, e.x, e.width),
                o = n2(r, e.y, e.height);
              return `${i} ${o}`;
            })(m, void 0 !== o ? o : 0.5, void 0 !== a ? a : 0.5)),
          void 0 !== t && (p.x = t),
          void 0 !== r && (p.y = r),
          void 0 !== i && (p.scale = i),
          void 0 !== s &&
            (function (e, t, r = 1, i = 0, o = !0) {
              e.pathLength = 1;
              let a = o ? n5 : n8;
              e[a.offset] = es.transform(-i);
              let s = es.transform(t),
                l = es.transform(r);
              e[a.array] = `${s} ${l}`;
            })(p, s, l, u, !1);
      }
      let n3 = (e) => "string" == typeof e && "svg" === e.toLowerCase(),
        n6 = {
          useVisualState: nY({
            scrapeMotionValuesFromProps: nK,
            createRenderState: nQ,
            onMount: (e, t, { renderState: r, latestValues: i }) => {
              L.read(() => {
                try {
                  r.dimensions =
                    "function" == typeof t.getBBox
                      ? t.getBBox()
                      : t.getBoundingClientRect();
                } catch (e) {
                  r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              }),
                L.render(() => {
                  n4(r, i, n3(t.tagName), e.transformTemplate), nz(t, r);
                });
            },
          }),
        },
        n9 = {
          useVisualState: nY({
            scrapeMotionValuesFromProps: nG,
            createRenderState: nX,
          }),
        };
      function n7(e, t, r) {
        for (let i in t) t7(t[i]) || n$(i, r) || (e[i] = t[i]);
      }
      let oe = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function ot(e) {
        return (
          e.startsWith("while") ||
          (e.startsWith("drag") && "draggable" !== e) ||
          e.startsWith("layout") ||
          e.startsWith("onTap") ||
          e.startsWith("onPan") ||
          e.startsWith("onLayout") ||
          oe.has(e)
        );
      }
      let or = (e) => !ot(e);
      try {
        (ia = require("@emotion/is-prop-valid").default) &&
          (or = (e) => (e.startsWith("on") ? !ot(e) : ia(e)));
      } catch (e) {}
      let oi = { current: null },
        on = { current: !1 },
        oo = new WeakMap(),
        oa = [...eb, ej, e$],
        os = (e) => oa.find(eg(e)),
        ol = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ];
      class ou {
        scrapeMotionValuesFromProps(e, t, r) {
          return {};
        }
        constructor(
          {
            parent: e,
            props: t,
            presenceContext: r,
            reducedMotionConfig: i,
            blockInitialAnimation: o,
            visualState: a,
          },
          s = {}
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = eA),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.renderScheduledAt = 0),
            (this.scheduleRender = () => {
              let e = e3.now();
              this.renderScheduledAt < e &&
                ((this.renderScheduledAt = e), L.render(this.render, !1, !0));
            });
          let { latestValues: l, renderState: u } = a;
          (this.latestValues = l),
            (this.baseTarget = { ...l }),
            (this.initialValues = t.initial ? { ...l } : {}),
            (this.renderState = u),
            (this.parent = e),
            (this.props = t),
            (this.presenceContext = r),
            (this.depth = e ? e.depth + 1 : 0),
            (this.reducedMotionConfig = i),
            (this.options = s),
            (this.blockInitialAnimation = !!o),
            (this.isControllingVariants = nI(t)),
            (this.isVariantNode = nN(t)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(e && e.current));
          let { willChange: d, ...c } = this.scrapeMotionValuesFromProps(
            t,
            {},
            this
          );
          for (let e in c) {
            let t = c[e];
            void 0 !== l[e] && t7(t) && t.set(l[e], !1);
          }
        }
        mount(e) {
          (this.current = e),
            oo.set(e, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(e),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
            on.current ||
              (function () {
                if (((on.current = !0), nC)) {
                  if (window.matchMedia) {
                    let e = window.matchMedia("(prefers-reduced-motion)"),
                      t = () => (oi.current = e.matches);
                    e.addListener(t), t();
                  } else oi.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || oi.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let e in (oo.delete(this.current),
          this.projection && this.projection.unmount(),
          C(this.notifyUpdate),
          C(this.render),
          this.valueSubscriptions.forEach((e) => e()),
          this.valueSubscriptions.clear(),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[e].clear();
          for (let e in this.features) {
            let t = this.features[e];
            t && (t.unmount(), (t.isMounted = !1));
          }
          this.current = null;
        }
        bindToMotionValue(e, t) {
          let r;
          this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
          let i = m.has(e),
            o = t.on("change", (t) => {
              (this.latestValues[e] = t),
                this.props.onUpdate && L.preRender(this.notifyUpdate),
                i && this.projection && (this.projection.isTransformDirty = !0);
            }),
            a = t.on("renderRequest", this.scheduleRender);
          window.MotionCheckAppearSync &&
            (r = window.MotionCheckAppearSync(this, e, t)),
            this.valueSubscriptions.set(e, () => {
              o(), a(), r && r(), t.owner && t.stop();
            });
        }
        sortNodePosition(e) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === e.type
            ? this.sortInstanceNodePosition(this.current, e.current)
            : 0;
        }
        updateFeatures() {
          let e = "animation";
          for (e in nU) {
            let t = nU[e];
            if (!t) continue;
            let { isEnabled: r, Feature: i } = t;
            if (
              (!this.features[e] &&
                i &&
                r(this.props) &&
                (this.features[e] = new i(this)),
              this.features[e])
            ) {
              let t = this.features[e];
              t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : rK();
        }
        getStaticValue(e) {
          return this.latestValues[e];
        }
        setStaticValue(e, t) {
          this.latestValues[e] = t;
        }
        update(e, t) {
          (e.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = e),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = t);
          for (let t = 0; t < ol.length; t++) {
            let r = ol[t];
            this.propEventSubscriptions[r] &&
              (this.propEventSubscriptions[r](),
              delete this.propEventSubscriptions[r]);
            let i = e["on" + r];
            i && (this.propEventSubscriptions[r] = this.on(r, i));
          }
          (this.prevMotionValues = (function (e, t, r) {
            for (let i in t) {
              let o = t[i],
                a = r[i];
              if (t7(o)) e.addValue(i, o);
              else if (t7(a)) e.addValue(i, t3(o, { owner: e }));
              else if (a !== o) {
                if (e.hasValue(i)) {
                  let t = e.getValue(i);
                  !0 === t.liveStyle ? t.jump(o) : t.hasAnimated || t.set(o);
                } else {
                  let t = e.getStaticValue(i);
                  e.addValue(i, t3(void 0 !== t ? t : o, { owner: e }));
                }
              }
            }
            for (let i in r) void 0 === t[i] && e.removeValue(i);
            return t;
          })(
            this,
            this.scrapeMotionValuesFromProps(e, this.prevProps, this),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(e) {
          return this.props.variants ? this.props.variants[e] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        addVariantChild(e) {
          let t = this.getClosestVariantNode();
          if (t)
            return (
              t.variantChildren && t.variantChildren.add(e),
              () => t.variantChildren.delete(e)
            );
        }
        addValue(e, t) {
          let r = this.values.get(e);
          t !== r &&
            (r && this.removeValue(e),
            this.bindToMotionValue(e, t),
            this.values.set(e, t),
            (this.latestValues[e] = t.get()));
        }
        removeValue(e) {
          this.values.delete(e);
          let t = this.valueSubscriptions.get(e);
          t && (t(), this.valueSubscriptions.delete(e)),
            delete this.latestValues[e],
            this.removeValueFromRenderState(e, this.renderState);
        }
        hasValue(e) {
          return this.values.has(e);
        }
        getValue(e, t) {
          if (this.props.values && this.props.values[e])
            return this.props.values[e];
          let r = this.values.get(e);
          return (
            void 0 === r &&
              void 0 !== t &&
              ((r = t3(null === t ? void 0 : t, { owner: this })),
              this.addValue(e, r)),
            r
          );
        }
        readValue(e, t) {
          var r;
          let i =
            void 0 === this.latestValues[e] && this.current
              ? null !== (r = this.getBaseTargetFromProps(this.props, e)) &&
                void 0 !== r
                ? r
                : this.readValueFromInstance(this.current, e, this.options)
              : this.latestValues[e];
          return (
            null != i &&
              ("string" == typeof i && (G(i) || $(i))
                ? (i = parseFloat(i))
                : !os(i) && e$.test(t) && (i = e1(e, t)),
              this.setBaseTarget(e, t7(i) ? i.get() : i)),
            t7(i) ? i.get() : i
          );
        }
        setBaseTarget(e, t) {
          this.baseTarget[e] = t;
        }
        getBaseTarget(e) {
          var t;
          let r;
          let { initial: i } = this.props;
          if ("string" == typeof i || "object" == typeof i) {
            let o = d(
              this.props,
              i,
              null === (t = this.presenceContext) || void 0 === t
                ? void 0
                : t.custom
            );
            o && (r = o[e]);
          }
          if (i && void 0 !== r) return r;
          let o = this.getBaseTargetFromProps(this.props, e);
          return void 0 === o || t7(o)
            ? void 0 !== this.initialValues[e] && void 0 === r
              ? void 0
              : this.baseTarget[e]
            : o;
        }
        on(e, t) {
          return (
            this.events[e] || (this.events[e] = new t2()), this.events[e].add(t)
          );
        }
        notify(e, ...t) {
          this.events[e] && this.events[e].notify(...t);
        }
      }
      class od extends ou {
        constructor() {
          super(...arguments), (this.KeyframeResolver = e5);
        }
        sortInstanceNodePosition(e, t) {
          return 2 & e.compareDocumentPosition(t) ? 1 : -1;
        }
        getBaseTargetFromProps(e, t) {
          return e.style ? e.style[t] : void 0;
        }
        removeValueFromRenderState(e, { vars: t, style: r }) {
          delete t[e], delete r[e];
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: e } = this.props;
          t7(e) &&
            (this.childSubscription = e.on("change", (e) => {
              this.current && (this.current.textContent = `${e}`);
            }));
        }
      }
      class oc extends od {
        constructor() {
          super(...arguments), (this.type = "html"), (this.renderInstance = nH);
        }
        readValueFromInstance(e, t) {
          if (m.has(t)) {
            let e = e0(t);
            return (e && e.default) || 0;
          }
          {
            let r = window.getComputedStyle(e),
              i = (Y(t) ? r.getPropertyValue(t) : r[t]) || 0;
            return "string" == typeof i ? i.trim() : i;
          }
        }
        measureInstanceViewportBox(e, { transformPagePoint: t }) {
          return r6(e, t);
        }
        build(e, t, r) {
          n1(e, t, r.transformTemplate);
        }
        scrapeMotionValuesFromProps(e, t, r) {
          return nG(e, t, r);
        }
      }
      class oh extends od {
        constructor() {
          super(...arguments),
            (this.type = "svg"),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = rK);
        }
        getBaseTargetFromProps(e, t) {
          return e[t];
        }
        readValueFromInstance(e, t) {
          if (m.has(t)) {
            let e = e0(t);
            return (e && e.default) || 0;
          }
          return (t = nW.has(t) ? t : t6(t)), e.getAttribute(t);
        }
        scrapeMotionValuesFromProps(e, t, r) {
          return nK(e, t, r);
        }
        build(e, t, r) {
          n4(e, t, this.isSVGTag, r.transformTemplate);
        }
        renderInstance(e, t, r, i) {
          nz(e, t, r, i);
        }
        mount(e) {
          (this.isSVGTag = n3(e.tagName)), super.mount(e);
        }
      }
      let op = (function (e) {
        if ("undefined" == typeof Proxy) return e;
        let t = new Map();
        return new Proxy((...t) => e(...t), {
          get: (r, i) =>
            "create" === i ? e : (t.has(i) || t.set(i, e(i)), t.get(i)),
        });
      })(
        ((is = {
          animation: { Feature: rd },
          exit: { Feature: rh },
          inView: { Feature: nD },
          tap: { Feature: nx },
          focus: { Feature: nw },
          hover: { Feature: n_ },
          pan: { Feature: io },
          drag: { Feature: ir, ProjectionNode: ng, MeasureLayout: iT },
          layout: { ProjectionNode: ng, MeasureLayout: iT },
        }),
        (il = (e, t) =>
          nF(e)
            ? new oh(t)
            : new oc(t, { allowProjection: e !== id.Fragment })),
        function (e, { forwardMotionProps: t } = { forwardMotionProps: !1 }) {
          return (function (e) {
            let {
              preloadedFeatures: t,
              createVisualElement: r,
              useRender: i,
              useVisualState: o,
              Component: a,
            } = e;
            t &&
              (function (e) {
                for (let t in e) nU[t] = { ...nU[t], ...e[t] };
              })(t);
            let s = (0, id.forwardRef)(function (e, t) {
              var s;
              let u;
              let d = {
                  ...(0, id.useContext)(nR),
                  ...e,
                  layoutId: (function (e) {
                    let { layoutId: t } = e,
                      r = (0, id.useContext)(ih).id;
                    return r && void 0 !== t ? r + "-" + t : t;
                  })(e),
                },
                { isStatic: c } = d,
                h = (function (e) {
                  let { initial: t, animate: r } = (function (e, t) {
                    if (nI(e)) {
                      let { initial: t, animate: r } = e;
                      return {
                        initial: !1 === t || l(t) ? t : void 0,
                        animate: l(r) ? r : void 0,
                      };
                    }
                    return !1 !== e.inherit ? t : {};
                  })(e, (0, id.useContext)(nL));
                  return (0, id.useMemo)(
                    () => ({ initial: t, animate: r }),
                    [nj(t), nj(r)]
                  );
                })(e),
                p = o(e, c);
              if (!c && nC) {
                (0, id.useContext)(nM).strict;
                let e = (function (e) {
                  let { drag: t, layout: r } = nU;
                  if (!t && !r) return {};
                  let i = { ...t, ...r };
                  return {
                    MeasureLayout:
                      (null == t ? void 0 : t.isEnabled(e)) ||
                      (null == r ? void 0 : r.isEnabled(e))
                        ? i.MeasureLayout
                        : void 0,
                    ProjectionNode: i.ProjectionNode,
                  };
                })(d);
                (u = e.MeasureLayout),
                  (h.visualElement = (function (e, t, r, i, o) {
                    var a, s;
                    let { visualElement: l } = (0, id.useContext)(nL),
                      u = (0, id.useContext)(nM),
                      d = (0, id.useContext)(ic),
                      c = (0, id.useContext)(nR).reducedMotion,
                      h = (0, id.useRef)(null);
                    (i = i || u.renderer),
                      !h.current &&
                        i &&
                        (h.current = i(e, {
                          visualState: t,
                          parent: l,
                          props: r,
                          presenceContext: d,
                          blockInitialAnimation: !!d && !1 === d.initial,
                          reducedMotionConfig: c,
                        }));
                    let p = h.current,
                      f = (0, id.useContext)(ip);
                    p &&
                      !p.projection &&
                      o &&
                      ("html" === p.type || "svg" === p.type) &&
                      (function (e, t, r, i) {
                        let {
                          layoutId: o,
                          layout: a,
                          drag: s,
                          dragConstraints: l,
                          layoutScroll: u,
                          layoutRoot: d,
                        } = t;
                        (e.projection = new r(
                          e.latestValues,
                          t["data-framer-portal-id"]
                            ? void 0
                            : (function e(t) {
                                if (t)
                                  return !1 !== t.options.allowProjection
                                    ? t.projection
                                    : e(t.parent);
                              })(e.parent)
                        )),
                          e.projection.setOptions({
                            layoutId: o,
                            layout: a,
                            alwaysMeasureLayout: !!s || (l && rM(l)),
                            visualElement: e,
                            animationType: "string" == typeof a ? a : "both",
                            initialPromotionConfig: i,
                            layoutScroll: u,
                            layoutRoot: d,
                          });
                      })(h.current, r, o, f);
                    let m = (0, id.useRef)(!1);
                    (0, id.useInsertionEffect)(() => {
                      p && m.current && p.update(r, d);
                    });
                    let v = r[t9],
                      y = (0, id.useRef)(
                        !!v &&
                          !(null === (a = window.MotionHandoffIsComplete) ||
                          void 0 === a
                            ? void 0
                            : a.call(window, v)) &&
                          (null === (s = window.MotionHasOptimisedAnimation) ||
                          void 0 === s
                            ? void 0
                            : s.call(window, v))
                      );
                    return (
                      nO(() => {
                        p &&
                          ((m.current = !0),
                          (window.MotionIsMounted = !0),
                          p.updateFeatures(),
                          ib.render(p.render),
                          y.current &&
                            p.animationState &&
                            p.animationState.animateChanges());
                      }),
                      (0, id.useEffect)(() => {
                        p &&
                          (!y.current &&
                            p.animationState &&
                            p.animationState.animateChanges(),
                          y.current &&
                            (queueMicrotask(() => {
                              var e;
                              null ===
                                (e = window.MotionHandoffMarkAsComplete) ||
                                void 0 === e ||
                                e.call(window, v);
                            }),
                            (y.current = !1)));
                      }),
                      p
                    );
                  })(a, p, d, r, e.ProjectionNode));
              }
              return (0, iu.jsxs)(nL.Provider, {
                value: h,
                children: [
                  u && h.visualElement
                    ? (0, iu.jsx)(u, { visualElement: h.visualElement, ...d })
                    : null,
                  i(
                    a,
                    e,
                    ((s = h.visualElement),
                    (0, id.useCallback)(
                      (e) => {
                        e && p.mount && p.mount(e),
                          s && (e ? s.mount(e) : s.unmount()),
                          t &&
                            ("function" == typeof t
                              ? t(e)
                              : rM(t) && (t.current = e));
                      },
                      [s]
                    )),
                    p,
                    c,
                    h.visualElement
                  ),
                ],
              });
            });
            return (s[nq] = a), s;
          })({
            ...(nF(e) ? n6 : n9),
            preloadedFeatures: is,
            useRender: (function (e = !1) {
              return (t, r, i, { latestValues: o }, a) => {
                let s = (
                    nF(t)
                      ? function (e, t, r, i) {
                          let o = (0, id.useMemo)(() => {
                            let r = nQ();
                            return (
                              n4(r, t, n3(i), e.transformTemplate),
                              { ...r.attrs, style: { ...r.style } }
                            );
                          }, [t]);
                          if (e.style) {
                            let t = {};
                            n7(t, e.style, e), (o.style = { ...t, ...o.style });
                          }
                          return o;
                        }
                      : function (e, t) {
                          let r = {},
                            i = (function (e, t) {
                              let r = e.style || {},
                                i = {};
                              return (
                                n7(i, r, e),
                                Object.assign(
                                  i,
                                  (function ({ transformTemplate: e }, t) {
                                    return (0, id.useMemo)(() => {
                                      let r = nX();
                                      return (
                                        n1(r, t, e),
                                        Object.assign({}, r.vars, r.style)
                                      );
                                    }, [t]);
                                  })(e, t)
                                ),
                                i
                              );
                            })(e, t);
                          return (
                            e.drag &&
                              !1 !== e.dragListener &&
                              ((r.draggable = !1),
                              (i.userSelect =
                                i.WebkitUserSelect =
                                i.WebkitTouchCallout =
                                  "none"),
                              (i.touchAction =
                                !0 === e.drag
                                  ? "none"
                                  : `pan-${"x" === e.drag ? "y" : "x"}`)),
                            void 0 === e.tabIndex &&
                              (e.onTap || e.onTapStart || e.whileTap) &&
                              (r.tabIndex = 0),
                            (r.style = i),
                            r
                          );
                        }
                  )(r, o, a, t),
                  l = (function (e, t, r) {
                    let i = {};
                    for (let o in e)
                      ("values" !== o || "object" != typeof e.values) &&
                        (or(o) ||
                          (!0 === r && ot(o)) ||
                          (!t && !ot(o)) ||
                          (e.draggable && o.startsWith("onDrag"))) &&
                        (i[o] = e[o]);
                    return i;
                  })(r, "string" == typeof t, e),
                  u = t !== id.Fragment ? { ...l, ...s, ref: i } : {},
                  { children: d } = r,
                  c = (0, id.useMemo)(() => (t7(d) ? d.get() : d), [d]);
                return (0, id.createElement)(t, { ...u, children: c });
              };
            })(t),
            createVisualElement: il,
            Component: e,
          });
        })
      );
    },
    6880: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return I;
        },
      });
      var i = {};
      r.r(i),
        r.d(i, {
          getPlaybackId: function () {
            return b;
          },
          getPosterURLFromPlaybackId: function () {
            return _;
          },
          transform: function () {
            return g;
          },
        });
      var o = {};
      r.r(o),
        r.d(o, {
          transform: function () {
            return D;
          },
        });
      var a = {};
      r.r(a),
        r.d(a, {
          transform: function () {
            return R;
          },
        });
      var s = {};
      r.r(s),
        r.d(s, {
          transform: function () {
            return L;
          },
        });
      var l = {};
      r.r(l),
        r.d(l, {
          transform: function () {
            return C;
          },
        });
      var u = {};
      r.r(u),
        r.d(u, {
          amazonS3: function () {
            return s;
          },
          backblaze: function () {
            return a;
          },
          cloudflareR2: function () {
            return l;
          },
          mux: function () {
            return i;
          },
          vercelBlob: function () {
            return o;
          },
        });
      var d = r(7437),
        c = r(2265),
        h = r(718),
        p = r(249),
        f = function () {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          let i = (0, c.useRef)(null);
          return (
            (0, c.useEffect)(() => {
              t.forEach((e) => {
                e &&
                  ("function" == typeof e
                    ? e(i.current)
                    : (e.current = i.current));
              });
            }, [t]),
            i
          );
        },
        m = (() => {
          try {
            return "0.11.2";
          } catch (e) {}
          return "UNKNOWN";
        })(),
        v = c.forwardRef((e, t) => {
          var r;
          let {
              playbackId: i,
              src: o,
              children: a,
              autoPlay: s,
              preload: l,
              ...u
            } = e,
            d = Object.fromEntries(
              Object.entries(u).filter((e) => {
                let [t] = e;
                return !Object.keys(v.propTypes).includes(t);
              })
            ),
            [h] = (0, c.useState)((0, p.oJ)()),
            [y, g] = (0, c.useState)(null != (r = (0, p.Lh)(e)) ? r : o),
            b = (0, c.useRef)(void 0),
            _ = f((0, c.useRef)(null), t);
          return (
            (0, c.useEffect)(() => {
              var t;
              g(null != (t = (0, p.Lh)(e)) ? t : o);
            }, [o, i]),
            (0, c.useEffect)(() => {
              let t = {
                  ...e,
                  src: y,
                  playerInitTime: h,
                  playerSoftwareName: "mux-video-react",
                  playerSoftwareVersion: m,
                  autoplay: s,
                },
                r = _.current;
              return (
                r && (b.current = (0, p.j2)(t, r, b.current)),
                () => {
                  (0, p.cx)(r, b.current), (r = void 0), (b.current = void 0);
                }
              );
            }, [y]),
            (0, c.useEffect)(() => {
              var e;
              null == (e = b.current) || e.setAutoplay(s);
            }, [s]),
            (0, c.useEffect)(() => {
              var e;
              null == (e = b.current) || e.setPreload(l);
            }, [l]),
            c.createElement("video", { ref: _, ...d }, a)
          );
        });
      v.propTypes = {
        _hlsConfig: h.any,
        beaconCollectionDomain: h.string,
        customDomain: h.string,
        debug: h.bool,
        disableCookies: h.bool,
        disableTracking: h.bool,
        envKey: h.string,
        errorTranslator: h.any,
        liveEdgeStart: h.number,
        maxResolution: h.oneOf(["720p", "1080p", "1440p", "2160p"]),
        metadata: h.any,
        minResolution: h.oneOf([
          "480p",
          "540p",
          "720p",
          "1080p",
          "1440p",
          "2160p",
        ]),
        playbackId: h.string,
        playerInitTime: h.number,
        preferCmcd: h.oneOf(Object.values(p.XE)),
        preferPlayback: h.oneOf(Object.values(p.uI)),
        programStartTime: h.number,
        programEndTime: h.number,
        renditionOrder: h.oneOf(["desc"]),
        startTime: h.number,
        streamType: h.oneOf(Object.values(p.lo)),
        targetLiveWindow: h.number,
        tokens: h.any,
        type: h.oneOf(p.PZ),
      };
      let y = "mux.com";
      function g(e, t) {
        let r = b(e);
        if (!r) return e;
        let i =
            e.providerMetadata?.mux?.thumbnailTime ??
            t?.thumbnailTime ??
            t?.startTime,
          o = {
            ...e,
            sources: [
              {
                src: `https://stream.${t?.customDomain ?? y}/${r}.m3u8`,
                type: "application/x-mpegURL",
              },
            ],
            poster: _(r, {
              thumbnailTime: i,
              customDomain: t?.customDomain,
              token: t?.tokens?.thumbnail,
            }),
          };
        return i >= 0 && (o.thumbnailTime = i), o;
      }
      function b(e) {
        let t = e.providerMetadata?.mux ?? e.externalIds;
        return t?.playbackId;
      }
      let _ = (
          e,
          { token: t, thumbnailTime: r, width: i, customDomain: o = y } = {}
        ) => {
          let a = null == t ? r : void 0,
            { aud: s } = (function (e) {
              let t = (e ?? "").split(".")[1];
              return t
                ? JSON.parse(
                    decodeURIComponent(
                      atob(t.replace(/-/g, "+").replace(/_/g, "/"))
                        .split("")
                        .map(function (e) {
                          return (
                            "%" +
                            ("00" + e.charCodeAt(0).toString(16)).slice(-2)
                          );
                        })
                        .join("")
                    )
                  )
                : {};
            })(t);
          if (!t || "t" === s)
            return `https://image.${o}/${e}/thumbnail.webp${(function (e) {
              let t = (function (e) {
                let t = {};
                for (let r in e) null != e[r] && (t[r] = e[r]);
                return new URLSearchParams(t);
              })(e).toString();
              return t ? "?" + t : "";
            })({ token: t, time: a, width: i })}`;
        },
        w = JSON.parse(
          r(257).env.NEXT_PUBLIC_DEV_VIDEO_OPTS ??
            '{"path":"/api/video","folder":"videos","provider":"mux"}' ??
            "{}"
        ),
        T = `${w.folder ?? "videos"}/`;
      function x(e) {
        return `<svg xmlns="http://www.w3.org/2000/svg"><filter id="b" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="20"/><feComponentTransfer><feFuncA type="discrete" tableValues="1 1"/></feComponentTransfer></filter><g filter="url(#b)"><image width="100%" height="100%" preserveAspectRatio="xMidYMid slice" href="${e}"/></g></svg>`.replace(
          /#/g,
          "%23"
        );
      }
      let E = (0, c.forwardRef)((e, t) => {
          let r,
            {
              style: i,
              className: o,
              children: a,
              asset: s,
              controls: l,
              poster: u,
              blurDataURL: h,
              onPlaying: p,
              onLoadStart: f,
              ...m
            } = e,
            y = c.Children.toArray(a).find(
              (e) =>
                "object" == typeof e && "type" in e && "poster" === e.props.slot
            );
          (0, c.isValidElement)(y) && ((u = ""), (h = void 0));
          let g = {},
            w = s ? b(s) : void 0,
            T = !0;
          if (
            (!w ||
              (null == s ? void 0 : s.status) !== "ready" ||
              ((m.src = void 0),
              (m.playbackId = w),
              !u ||
                (T = u !== _(w, m)) ||
                (r = ""
                  .concat(_(w, { ...m, width: 480 }), " 480w,")
                  .concat(_(w, { ...m, width: 640 }), " 640w,")
                  .concat(_(w, { ...m, width: 960 }), " 960w,")
                  .concat(_(w, { ...m, width: 1280 }), " 1280w,")
                  .concat(_(w, { ...m, width: 1600 }), " 1600w,")
                  .concat(_(w, { ...m }), " 1920w"))),
            h)
          ) {
            let e = !T && h === (null == s ? void 0 : s.blurDataURL),
              t = T && h !== (null == s ? void 0 : s.blurDataURL);
            (e || t) &&
              ((g.width = "100%"),
              (g.height = "100%"),
              (g.color = "transparent"),
              (g.backgroundSize = "cover"),
              (g.backgroundPosition = "center"),
              (g.backgroundRepeat = "no-repeat"),
              (g.backgroundImage =
                "url('data:image/svg+xml;charset=utf-8,".concat(x(h), "')")));
          }
          delete m.thumbnailTime;
          let [E, k] = (0, c.useState)(!1);
          return (0, d.jsxs)(d.Fragment, {
            children: [
              (0, d.jsx)("style", {
                children:
                  "\n        .next-video-bg {\n          width: 100%;\n          height: 100%;\n          display: grid;\n        }\n\n        .next-video-bg-video,\n        .next-video-bg-poster,\n        .next-video-bg-text {\n          grid-area: 1 / 1;\n          min-height: 0;\n        }\n\n        .next-video-bg-poster {\n          position: relative;\n          object-fit: cover;\n          pointer-events: none;\n          transition: opacity .25s;\n        }\n\n        .next-video-bg-poster[hidden] {\n          opacity: 0;\n        }\n\n        .next-video-bg-video {\n          object-fit: cover;\n        }\n\n        .next-video-bg-text {\n          position: relative;\n          display: grid;\n          place-content: center;\n          padding: 5% 5% 10%;\n        }\n        ",
              }),
              (0, d.jsxs)("div", {
                className: "".concat(
                  o ? "".concat(o, " ") : "",
                  "next-video-bg"
                ),
                style: { ...i },
                children: [
                  (0, d.jsx)(v, {
                    ref: t,
                    className: "next-video-bg-video",
                    onPlaying: (e) => {
                      null == p || p(e), k(!0);
                    },
                    onLoadStart: (e) => {
                      null == f || f(e), k(!1);
                    },
                    muted: !0,
                    autoPlay: !0,
                    loop: !0,
                    playsInline: !0,
                    ...m,
                  }),
                  u &&
                    (0, d.jsx)("img", {
                      className: "next-video-bg-poster",
                      src: T ? u : void 0,
                      srcSet: r,
                      style: g,
                      hidden: E,
                      decoding: "async",
                      "aria-hidden": "true",
                    }),
                  (0, d.jsx)("div", {
                    className: "next-video-bg-text",
                    children: a,
                  }),
                ],
              }),
            ],
          });
        }),
        k = (0, c.lazy)(() => r.e(20).then(r.bind(r, 8020))),
        A = (0, c.forwardRef)((e, t) => {
          let r,
            {
              style: i,
              children: o,
              asset: a,
              controls: s,
              poster: l,
              blurDataURL: u,
              ...h
            } = e,
            p = c.Children.toArray(o).find(
              (e) =>
                "object" == typeof e && "type" in e && "poster" === e.props.slot
            );
          (0, c.isValidElement)(p) && ((l = ""), (u = void 0));
          let f = {},
            m = a ? b(a) : void 0,
            v = !0;
          if (
            (!m ||
              (null == a ? void 0 : a.status) !== "ready" ||
              ((h.src = null),
              (h.playbackId = m),
              !l ||
                (v = l !== _(m, h)) ||
                (r = ""
                  .concat(_(m, { ...h, width: 480 }), " 480w,")
                  .concat(_(m, { ...h, width: 640 }), " 640w,")
                  .concat(_(m, { ...h, width: 960 }), " 960w,")
                  .concat(_(m, { ...h, width: 1280 }), " 1280w,")
                  .concat(_(m, { ...h, width: 1600 }), " 1600w,")
                  .concat(_(m, { ...h }), " 1920w"))),
            u)
          ) {
            let e = !v && u === (null == a ? void 0 : a.blurDataURL),
              t = v && u !== (null == a ? void 0 : a.blurDataURL);
            (e || t) &&
              ((f.width = "100%"),
              (f.height = "100%"),
              (f.color = "transparent"),
              (f.backgroundSize = "cover"),
              (f.backgroundPosition = "center"),
              (f.backgroundRepeat = "no-repeat"),
              (f.backgroundImage =
                "url('data:image/svg+xml;charset=utf-8,".concat(x(u), "')")));
          }
          return (
            l &&
              ((o = (0, d.jsxs)(d.Fragment, {
                children: [
                  o,
                  (0, d.jsx)("img", {
                    slot: "poster",
                    src: v ? l : void 0,
                    srcSet: r,
                    style: f,
                    decoding: "async",
                    "aria-hidden": "true",
                  }),
                ],
              })),
              (l = "")),
            (0, d.jsx)(c.Suspense, {
              fallback: null,
              children: (0, d.jsx)(k, {
                ref: t,
                style: { "--controls": !1 === s ? "none" : void 0, ...i },
                children: o,
                poster: l,
                ...h,
              }),
            })
          );
        });
      function S({ status: e, hidden: t }) {
        let r = "",
          i = "";
        switch (e) {
          case "error":
            (r = "Error"),
              (i =
                "An error occurred while uploading your video. Please check the CLI logs for more info.");
            break;
          case "sourced":
            (r = "Video is not processing"),
              (i =
                "Make sure to run next-video sync. The currently loaded video is the source file.");
            break;
          default:
            (r = "Upload in progress..."),
              (i =
                "Your video file is being uploaded. The currently loaded video is the source file.");
        }
        return (0, d.jsxs)(d.Fragment, {
          children: [
            (0, d.jsx)("style", {
              children: `
        .next-video-alert {
          position: absolute;
          inset: 1em;
          bottom: auto;
          padding: .75rem 1rem;
          border-radius: 1rem;
          color: hsl(0, 0%, 100%);
          background-color: hsl(240 10% 3.9% / .7);
          border: 1px solid hsl(240 3.7% 15.9%);
          transition: visibility 0s, opacity .25s;
          visibility: visible;
          opacity: 1;
        }

        .next-video-alert[hidden] {
          display: block;
          transition: visibility 1s, opacity 1s;
          visibility: hidden;
          opacity: 0;
        }

        .next-video-alert svg {
          position: absolute;
        }

        .next-video-alert h5 {
          line-height: 1;
          font-weight: 500;
          margin-bottom: 0.25rem;
          padding-left: 1.75rem;
          font-size: inherit;
        }

        .next-video-alert div {
          padding-left: 1.75rem;
          font-size: 0.875rem;
          line-height: 1.25rem;
        }
        `,
            }),
            (0, d.jsxs)("div", {
              role: "alert",
              className: `next-video-alert next-video-alert-${e}`,
              hidden: t,
              children: [
                "error" === e
                  ? (0, d.jsx)("svg", {
                      width: "15",
                      height: "15",
                      viewBox: "0 0 15 15",
                      fill: "none",
                      children: (0, d.jsx)("path", {
                        d: "M0.877075 7.49988C0.877075 3.84219 3.84222 0.877045 7.49991 0.877045C11.1576 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1575 0.877075 7.49988ZM7.49991 1.82704C4.36689 1.82704 1.82708 4.36686 1.82708 7.49988C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49988C13.1727 4.36686 10.6329 1.82704 7.49991 1.82704ZM9.85358 5.14644C10.0488 5.3417 10.0488 5.65829 9.85358 5.85355L8.20713 7.49999L9.85358 9.14644C10.0488 9.3417 10.0488 9.65829 9.85358 9.85355C9.65832 10.0488 9.34173 10.0488 9.14647 9.85355L7.50002 8.2071L5.85358 9.85355C5.65832 10.0488 5.34173 10.0488 5.14647 9.85355C4.95121 9.65829 4.95121 9.3417 5.14647 9.14644L6.79292 7.49999L5.14647 5.85355C4.95121 5.65829 4.95121 5.3417 5.14647 5.14644C5.34173 4.95118 5.65832 4.95118 5.85358 5.14644L7.50002 6.79289L9.14647 5.14644C9.34173 4.95118 9.65832 4.95118 9.85358 5.14644Z",
                        fill: "currentColor",
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                      }),
                    })
                  : (0, d.jsx)("svg", {
                      width: "15",
                      height: "15",
                      viewBox: "0 0 15 15",
                      fill: "none",
                      children: (0, d.jsx)("path", {
                        d: "M8.4449 0.608765C8.0183 -0.107015 6.9817 -0.107015 6.55509 0.608766L0.161178 11.3368C-0.275824 12.07 0.252503 13 1.10608 13H13.8939C14.7475 13 15.2758 12.07 14.8388 11.3368L8.4449 0.608765ZM7.4141 1.12073C7.45288 1.05566 7.54712 1.05566 7.5859 1.12073L13.9798 11.8488C14.0196 11.9154 13.9715 12 13.8939 12H1.10608C1.02849 12 0.980454 11.9154 1.02018 11.8488L7.4141 1.12073ZM6.8269 4.48611C6.81221 4.10423 7.11783 3.78663 7.5 3.78663C7.88217 3.78663 8.18778 4.10423 8.1731 4.48612L8.01921 8.48701C8.00848 8.766 7.7792 8.98664 7.5 8.98664C7.2208 8.98664 6.99151 8.766 6.98078 8.48701L6.8269 4.48611ZM8.24989 10.476C8.24989 10.8902 7.9141 11.226 7.49989 11.226C7.08567 11.226 6.74989 10.8902 6.74989 10.476C6.74989 10.0618 7.08567 9.72599 7.49989 9.72599C7.9141 9.72599 8.24989 10.0618 8.24989 10.476Z",
                        fill: "currentColor",
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                      }),
                    }),
                (0, d.jsx)("h5", { children: r }),
                (0, d.jsx)("div", { children: i }),
              ],
            }),
          ],
        });
      }
      async function P({ config: e, src: t, width: r, height: i }) {
        let o = `${e.path}?url=${encodeURIComponent(`${t}`)}`;
        return r && (o += `&w=${r}`), i && (o += `&h=${i}`), `${o}`;
      }
      function D(e) {
        let t = e.providerMetadata?.["vercel-blob"] ?? e.externalIds;
        if (!t) return e;
        let r = { src: t.url };
        return (
          t.contentType && (r.type = t.contentType), { ...e, sources: [r] }
        );
      }
      function R(e) {
        let t = e.providerMetadata?.backblaze;
        if (!t) return e;
        let r = new URL(t.endpoint);
        (r.hostname = `${t.bucket}.${r.hostname}`), (r.pathname = t.key);
        let i = { src: `${r}` };
        return { ...e, sources: [i] };
      }
      function L(e) {
        let t = e.providerMetadata?.["amazon-s3"];
        if (!t) return e;
        let r = new URL(t.endpoint);
        (r.hostname = `${t.bucket}.${r.hostname}`), (r.pathname = t.key);
        let i = { src: `${r}` };
        return { ...e, sources: [i] };
      }
      function C(e) {
        let t = e.providerMetadata?.["cloudflare-r2"];
        if (!t) return e;
        let r = new URL(t.bucketUrlPublic);
        r.pathname = t.key;
        let i = { src: `${r}` };
        return { ...e, sources: [i] };
      }
      let O = (0, c.forwardRef)((e, t) => {
        var r;
        let {
            as: i = A,
            loader: o = P,
            transform: a = M,
            className: s,
            style: l,
            src: u,
            width: h,
            height: p,
          } = e,
          [f, m] = (0, c.useState)("object" == typeof u ? u : void 0),
          [v, y] = (0, c.useState)(!1);
        "object" == typeof u && ((f = u), (u = void 0));
        let g = { src: u, width: h, height: p },
          b =
            ((r = (e) => m(e)),
            async (e) => {
              if ("string" == typeof g.src)
                try {
                  let t = await o({ ...g, config: w }),
                    i = await fetch(t, { signal: e }),
                    a = await i.json();
                  if (i.ok) r(a);
                  else {
                    let e = `[next-video] The request to ${i.url} failed. `;
                    throw (
                      ((e += `Did you configure the \`${w.path}\` route to handle video API requests?
`),
                      Error(e))
                    );
                  }
                } catch (t) {
                  e.aborted || console.error(t);
                }
            }),
          _ = null == f ? void 0 : f.status,
          x = (function (e) {
            if ("string" == typeof e)
              return e.split(/[#?]/)[0].split(".").pop()?.trim();
          })(u);
        !(function (e, t = 5e3) {
          let r = (0, c.useRef)(new AbortController());
          (0, c.useEffect)(
            () => (
              (r.current = new AbortController()),
              e(r.current.signal),
              () => {
                r.current.abort();
              }
            ),
            []
          ),
            (function (e, t) {
              let r = (0, c.useRef)();
              (0, c.useEffect)(() => {
                r.current = e;
              }),
                (0, c.useEffect)(() => {
                  let e = async () => {
                    await r.current?.();
                  };
                  if (null != t) {
                    let r = setInterval(e, t);
                    return () => clearInterval(r);
                  }
                }, [t]);
            })(
              (0, c.useCallback)(() => e(r.current.signal), []),
              t
            );
        })(
          b,
          "string" != typeof u ||
            "ready" == _ ||
            ["m3u8", "mpd"].includes(null != x ? x : "")
            ? null
            : 1e3
        );
        let E = (function (e, t) {
          var r, i, o, a, s, l, u;
          let { asset: d } = t,
            {
              controls: c = !0,
              as: h,
              className: p,
              style: f,
              src: m,
              poster: v,
              blurDataURL: y,
              loader: g,
              transform: b,
              ..._
            } = e,
            w = { src: m, controls: c, blurDataURL: y, ..._ };
          if (
            ("object" == typeof v
              ? ((w.poster = v.src),
                (null !== (r = w.blurDataURL) && void 0 !== r) ||
                  (w.blurDataURL = v.blurDataURL))
              : (w.poster = v),
            d)
          ) {
            if ("ready" === d.status) {
              (null !== (i = w.blurDataURL) && void 0 !== i) ||
                (w.blurDataURL = d.blurDataURL);
              let e = b(d, w);
              e &&
                ((w.src =
                  null === (a = e.sources) || void 0 === a
                    ? void 0
                    : null === (o = a[0]) || void 0 === o
                    ? void 0
                    : o.src),
                (null !== (s = w.poster) && void 0 !== s) ||
                  (w.poster = e.poster),
                (null !== (l = w.thumbnailTime) && void 0 !== l) ||
                  (w.thumbnailTime = e.thumbnailTime));
            } else
              w.src =
                ((u = d.originalFilePath),
                u?.startsWith(T) ? u?.replace(T, "_next-video/") : u);
          }
          return w;
        })({ ...e, transform: a, src: u }, { asset: f });
        return (
          !(
            ("function" == typeof i &&
              (() => {
                let e = Object.getPrototypeOf(i);
                return e.prototype && e.prototype.isReactComponent;
              })()) ||
            "function" == typeof i ||
            ("object" == typeof i &&
              "symbol" == typeof i.$$typeof &&
              ["react.memo", "react.forward_ref"].includes(
                i.$$typeof.description
              ))
          ) && console.warn("The `as` property is not a valid component:", i),
          (0, d.jsxs)("div", {
            className: "".concat(
              s ? "".concat(s, " ") : "",
              "next-video-container"
            ),
            style: l,
            children: [
              (0, d.jsx)("style", {
                children:
                  "\n        .next-video-container {\n          position: relative;\n          width: 100%;\n          aspect-ratio: 16 / 9;\n        }\n\n        [data-next-video] {\n          display: block;\n          position: relative;\n          width: 100%;\n          height: 100%;\n        }\n\n        [data-next-video] img {\n          object-fit: var(--media-object-fit, contain);\n          object-position: var(--media-object-position, center);\n        }\n        ",
              }),
              (0, d.jsx)(i, {
                ref: t,
                "data-next-video": null != _ ? _ : "",
                style: { width: h, height: p },
                asset: f,
                onPlaying: () => y(!0),
                onPause: () => y(!1),
                ...E,
              }),
              (0, d.jsx)(S, {
                hidden: !!(v || !_ || "ready" === _),
                status: _,
              }),
            ],
          })
        );
      });
      function M(e, t) {
        var r;
        let i = null !== (r = e.provider) && void 0 !== r ? r : w.provider;
        for (let [r, o] of Object.entries(u))
          if (r === i.replace(/[-_]([a-z])/g, (e, t) => t.toUpperCase()))
            return o.transform(e, t);
      }
      var I = (0, c.forwardRef)((e, t) =>
        (0, d.jsx)(O, { ref: t, as: E, thumbnailTime: 0, ...e })
      );
    },
    8819: function (e, t, r) {
      "use strict";
      r.d(t, {
        YD: function () {
          return d;
        },
      });
      var i = r(2265),
        o = Object.defineProperty,
        a = new Map(),
        s = new WeakMap(),
        l = 0,
        u = void 0;
      function d() {
        var e;
        let {
            threshold: t,
            delay: r,
            trackVisibility: o,
            rootMargin: d,
            root: c,
            triggerOnce: h,
            skip: p,
            initialInView: f,
            fallbackInView: m,
            onChange: v,
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {},
          [y, g] = i.useState(null),
          b = i.useRef(v),
          [_, w] = i.useState({ inView: !!f, entry: void 0 });
        (b.current = v),
          i.useEffect(() => {
            let e;
            if (!p && y)
              return (
                (e = (function (e, t) {
                  let r =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {},
                    i =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : u;
                  if (void 0 === window.IntersectionObserver && void 0 !== i) {
                    let o = e.getBoundingClientRect();
                    return (
                      t(i, {
                        isIntersecting: i,
                        target: e,
                        intersectionRatio:
                          "number" == typeof r.threshold ? r.threshold : 0,
                        time: 0,
                        boundingClientRect: o,
                        intersectionRect: o,
                        rootBounds: o,
                      }),
                      () => {}
                    );
                  }
                  let {
                      id: o,
                      observer: d,
                      elements: c,
                    } = (function (e) {
                      let t = Object.keys(e)
                          .sort()
                          .filter((t) => void 0 !== e[t])
                          .map((t) => {
                            var r;
                            return ""
                              .concat(t, "_")
                              .concat(
                                "root" === t
                                  ? (r = e.root)
                                    ? (s.has(r) ||
                                        ((l += 1), s.set(r, l.toString())),
                                      s.get(r))
                                    : "0"
                                  : e[t]
                              );
                          })
                          .toString(),
                        r = a.get(t);
                      if (!r) {
                        let i;
                        let o = new Map(),
                          s = new IntersectionObserver((t) => {
                            t.forEach((t) => {
                              var r;
                              let a =
                                t.isIntersecting &&
                                i.some((e) => t.intersectionRatio >= e);
                              e.trackVisibility &&
                                void 0 === t.isVisible &&
                                (t.isVisible = a),
                                null == (r = o.get(t.target)) ||
                                  r.forEach((e) => {
                                    e(a, t);
                                  });
                            });
                          }, e);
                        (i =
                          s.thresholds ||
                          (Array.isArray(e.threshold)
                            ? e.threshold
                            : [e.threshold || 0])),
                          (r = { id: t, observer: s, elements: o }),
                          a.set(t, r);
                      }
                      return r;
                    })(r),
                    h = c.get(e) || [];
                  return (
                    c.has(e) || c.set(e, h),
                    h.push(t),
                    d.observe(e),
                    function () {
                      h.splice(h.indexOf(t), 1),
                        0 === h.length && (c.delete(e), d.unobserve(e)),
                        0 === c.size && (d.disconnect(), a.delete(o));
                    }
                  );
                })(
                  y,
                  (t, r) => {
                    w({ inView: t, entry: r }),
                      b.current && b.current(t, r),
                      r.isIntersecting && h && e && (e(), (e = void 0));
                  },
                  {
                    root: c,
                    rootMargin: d,
                    threshold: t,
                    trackVisibility: o,
                    delay: r,
                  },
                  m
                )),
                () => {
                  e && e();
                }
              );
          }, [Array.isArray(t) ? t.toString() : t, y, c, d, h, p, o, m, r]);
        let T = null == (e = _.entry) ? void 0 : e.target,
          x = i.useRef(void 0);
        y ||
          !T ||
          h ||
          p ||
          x.current === T ||
          ((x.current = T), w({ inView: !!f, entry: void 0 }));
        let E = [g, _.inView, _.entry];
        return (E.ref = E[0]), (E.inView = E[1]), (E.entry = E[2]), E;
      }
      i.Component;
    },
    3335: function (e, t, r) {
      "use strict";
      r.d(t, {
        m6: function () {
          return X;
        },
      });
      let i = (e) => {
          let t = l(e),
            { conflictingClassGroups: r, conflictingClassGroupModifiers: i } =
              e;
          return {
            getClassGroupId: (e) => {
              let r = e.split("-");
              return (
                "" === r[0] && 1 !== r.length && r.shift(), o(r, t) || s(e)
              );
            },
            getConflictingClassGroupIds: (e, t) => {
              let o = r[e] || [];
              return t && i[e] ? [...o, ...i[e]] : o;
            },
          };
        },
        o = (e, t) => {
          if (0 === e.length) return t.classGroupId;
          let r = e[0],
            i = t.nextPart.get(r),
            a = i ? o(e.slice(1), i) : void 0;
          if (a) return a;
          if (0 === t.validators.length) return;
          let s = e.join("-");
          return t.validators.find(({ validator: e }) => e(s))?.classGroupId;
        },
        a = /^\[(.+)\]$/,
        s = (e) => {
          if (a.test(e)) {
            let t = a.exec(e)[1],
              r = t?.substring(0, t.indexOf(":"));
            if (r) return "arbitrary.." + r;
          }
        },
        l = (e) => {
          let { theme: t, prefix: r } = e,
            i = { nextPart: new Map(), validators: [] };
          return (
            h(Object.entries(e.classGroups), r).forEach(([e, r]) => {
              u(r, i, e, t);
            }),
            i
          );
        },
        u = (e, t, r, i) => {
          e.forEach((e) => {
            if ("string" == typeof e) {
              ("" === e ? t : d(t, e)).classGroupId = r;
              return;
            }
            if ("function" == typeof e) {
              if (c(e)) {
                u(e(i), t, r, i);
                return;
              }
              t.validators.push({ validator: e, classGroupId: r });
              return;
            }
            Object.entries(e).forEach(([e, o]) => {
              u(o, d(t, e), r, i);
            });
          });
        },
        d = (e, t) => {
          let r = e;
          return (
            t.split("-").forEach((e) => {
              r.nextPart.has(e) ||
                r.nextPart.set(e, { nextPart: new Map(), validators: [] }),
                (r = r.nextPart.get(e));
            }),
            r
          );
        },
        c = (e) => e.isThemeGetter,
        h = (e, t) =>
          t
            ? e.map(([e, r]) => [
                e,
                r.map((e) =>
                  "string" == typeof e
                    ? t + e
                    : "object" == typeof e
                    ? Object.fromEntries(
                        Object.entries(e).map(([e, r]) => [t + e, r])
                      )
                    : e
                ),
              ])
            : e,
        p = (e) => {
          if (e < 1) return { get: () => void 0, set: () => {} };
          let t = 0,
            r = new Map(),
            i = new Map(),
            o = (o, a) => {
              r.set(o, a), ++t > e && ((t = 0), (i = r), (r = new Map()));
            };
          return {
            get(e) {
              let t = r.get(e);
              return void 0 !== t
                ? t
                : void 0 !== (t = i.get(e))
                ? (o(e, t), t)
                : void 0;
            },
            set(e, t) {
              r.has(e) ? r.set(e, t) : o(e, t);
            },
          };
        },
        f = (e) => {
          let { separator: t, experimentalParseClassName: r } = e,
            i = 1 === t.length,
            o = t[0],
            a = t.length,
            s = (e) => {
              let r;
              let s = [],
                l = 0,
                u = 0;
              for (let d = 0; d < e.length; d++) {
                let c = e[d];
                if (0 === l) {
                  if (c === o && (i || e.slice(d, d + a) === t)) {
                    s.push(e.slice(u, d)), (u = d + a);
                    continue;
                  }
                  if ("/" === c) {
                    r = d;
                    continue;
                  }
                }
                "[" === c ? l++ : "]" === c && l--;
              }
              let d = 0 === s.length ? e : e.substring(u),
                c = d.startsWith("!"),
                h = c ? d.substring(1) : d;
              return {
                modifiers: s,
                hasImportantModifier: c,
                baseClassName: h,
                maybePostfixModifierPosition: r && r > u ? r - u : void 0,
              };
            };
          return r ? (e) => r({ className: e, parseClassName: s }) : s;
        },
        m = (e) => {
          if (e.length <= 1) return e;
          let t = [],
            r = [];
          return (
            e.forEach((e) => {
              "[" === e[0] ? (t.push(...r.sort(), e), (r = [])) : r.push(e);
            }),
            t.push(...r.sort()),
            t
          );
        },
        v = (e) => ({ cache: p(e.cacheSize), parseClassName: f(e), ...i(e) }),
        y = /\s+/,
        g = (e, t) => {
          let {
              parseClassName: r,
              getClassGroupId: i,
              getConflictingClassGroupIds: o,
            } = t,
            a = [],
            s = e.trim().split(y),
            l = "";
          for (let e = s.length - 1; e >= 0; e -= 1) {
            let t = s[e],
              {
                modifiers: u,
                hasImportantModifier: d,
                baseClassName: c,
                maybePostfixModifierPosition: h,
              } = r(t),
              p = !!h,
              f = i(p ? c.substring(0, h) : c);
            if (!f) {
              if (!p || !(f = i(c))) {
                l = t + (l.length > 0 ? " " + l : l);
                continue;
              }
              p = !1;
            }
            let v = m(u).join(":"),
              y = d ? v + "!" : v,
              g = y + f;
            if (a.includes(g)) continue;
            a.push(g);
            let b = o(f, p);
            for (let e = 0; e < b.length; ++e) {
              let t = b[e];
              a.push(y + t);
            }
            l = t + (l.length > 0 ? " " + l : l);
          }
          return l;
        };
      function b() {
        let e,
          t,
          r = 0,
          i = "";
        for (; r < arguments.length; )
          (e = arguments[r++]) && (t = _(e)) && (i && (i += " "), (i += t));
        return i;
      }
      let _ = (e) => {
          let t;
          if ("string" == typeof e) return e;
          let r = "";
          for (let i = 0; i < e.length; i++)
            e[i] && (t = _(e[i])) && (r && (r += " "), (r += t));
          return r;
        },
        w = (e) => {
          let t = (t) => t[e] || [];
          return (t.isThemeGetter = !0), t;
        },
        T = /^\[(?:([a-z-]+):)?(.+)\]$/i,
        x = /^\d+\/\d+$/,
        E = new Set(["px", "full", "screen"]),
        k = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        A =
          /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        S = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
        P = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
        D =
          /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
        R = (e) => C(e) || E.has(e) || x.test(e),
        L = (e) => z(e, "length", $),
        C = (e) => !!e && !Number.isNaN(Number(e)),
        O = (e) => z(e, "number", C),
        M = (e) => !!e && Number.isInteger(Number(e)),
        I = (e) => e.endsWith("%") && C(e.slice(0, -1)),
        N = (e) => T.test(e),
        j = (e) => k.test(e),
        B = new Set(["length", "size", "percentage"]),
        U = (e) => z(e, B, G),
        q = (e) => z(e, "position", G),
        V = new Set(["image", "url"]),
        F = (e) => z(e, V, Y),
        H = (e) => z(e, "", K),
        W = () => !0,
        z = (e, t, r) => {
          let i = T.exec(e);
          return (
            !!i &&
            (i[1] ? ("string" == typeof t ? i[1] === t : t.has(i[1])) : r(i[2]))
          );
        },
        $ = (e) => A.test(e) && !S.test(e),
        G = () => !1,
        K = (e) => P.test(e),
        Y = (e) => D.test(e),
        X = (function (e, ...t) {
          let r, i, o;
          let a = function (l) {
            return (
              (i = (r = v(t.reduce((e, t) => t(e), e()))).cache.get),
              (o = r.cache.set),
              (a = s),
              s(l)
            );
          };
          function s(e) {
            let t = i(e);
            if (t) return t;
            let a = g(e, r);
            return o(e, a), a;
          }
          return function () {
            return a(b.apply(null, arguments));
          };
        })(() => {
          let e = w("colors"),
            t = w("spacing"),
            r = w("blur"),
            i = w("brightness"),
            o = w("borderColor"),
            a = w("borderRadius"),
            s = w("borderSpacing"),
            l = w("borderWidth"),
            u = w("contrast"),
            d = w("grayscale"),
            c = w("hueRotate"),
            h = w("invert"),
            p = w("gap"),
            f = w("gradientColorStops"),
            m = w("gradientColorStopPositions"),
            v = w("inset"),
            y = w("margin"),
            g = w("opacity"),
            b = w("padding"),
            _ = w("saturate"),
            T = w("scale"),
            x = w("sepia"),
            E = w("skew"),
            k = w("space"),
            A = w("translate"),
            S = () => ["auto", "contain", "none"],
            P = () => ["auto", "hidden", "clip", "visible", "scroll"],
            D = () => ["auto", N, t],
            B = () => [N, t],
            V = () => ["", R, L],
            z = () => ["auto", C, N],
            $ = () => [
              "bottom",
              "center",
              "left",
              "left-bottom",
              "left-top",
              "right",
              "right-bottom",
              "right-top",
              "top",
            ],
            G = () => ["solid", "dashed", "dotted", "double", "none"],
            K = () => [
              "normal",
              "multiply",
              "screen",
              "overlay",
              "darken",
              "lighten",
              "color-dodge",
              "color-burn",
              "hard-light",
              "soft-light",
              "difference",
              "exclusion",
              "hue",
              "saturation",
              "color",
              "luminosity",
            ],
            Y = () => [
              "start",
              "end",
              "center",
              "between",
              "around",
              "evenly",
              "stretch",
            ],
            X = () => ["", "0", N],
            Q = () => [
              "auto",
              "avoid",
              "all",
              "avoid-page",
              "page",
              "left",
              "right",
              "column",
            ],
            Z = () => [C, N];
          return {
            cacheSize: 500,
            separator: ":",
            theme: {
              colors: [W],
              spacing: [R, L],
              blur: ["none", "", j, N],
              brightness: Z(),
              borderColor: [e],
              borderRadius: ["none", "", "full", j, N],
              borderSpacing: B(),
              borderWidth: V(),
              contrast: Z(),
              grayscale: X(),
              hueRotate: Z(),
              invert: X(),
              gap: B(),
              gradientColorStops: [e],
              gradientColorStopPositions: [I, L],
              inset: D(),
              margin: D(),
              opacity: Z(),
              padding: B(),
              saturate: Z(),
              scale: Z(),
              sepia: X(),
              skew: Z(),
              space: B(),
              translate: B(),
            },
            classGroups: {
              aspect: [{ aspect: ["auto", "square", "video", N] }],
              container: ["container"],
              columns: [{ columns: [j] }],
              "break-after": [{ "break-after": Q() }],
              "break-before": [{ "break-before": Q() }],
              "break-inside": [
                {
                  "break-inside": [
                    "auto",
                    "avoid",
                    "avoid-page",
                    "avoid-column",
                  ],
                },
              ],
              "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
              box: [{ box: ["border", "content"] }],
              display: [
                "block",
                "inline-block",
                "inline",
                "flex",
                "inline-flex",
                "table",
                "inline-table",
                "table-caption",
                "table-cell",
                "table-column",
                "table-column-group",
                "table-footer-group",
                "table-header-group",
                "table-row-group",
                "table-row",
                "flow-root",
                "grid",
                "inline-grid",
                "contents",
                "list-item",
                "hidden",
              ],
              float: [{ float: ["right", "left", "none", "start", "end"] }],
              clear: [
                { clear: ["left", "right", "both", "none", "start", "end"] },
              ],
              isolation: ["isolate", "isolation-auto"],
              "object-fit": [
                { object: ["contain", "cover", "fill", "none", "scale-down"] },
              ],
              "object-position": [{ object: [...$(), N] }],
              overflow: [{ overflow: P() }],
              "overflow-x": [{ "overflow-x": P() }],
              "overflow-y": [{ "overflow-y": P() }],
              overscroll: [{ overscroll: S() }],
              "overscroll-x": [{ "overscroll-x": S() }],
              "overscroll-y": [{ "overscroll-y": S() }],
              position: ["static", "fixed", "absolute", "relative", "sticky"],
              inset: [{ inset: [v] }],
              "inset-x": [{ "inset-x": [v] }],
              "inset-y": [{ "inset-y": [v] }],
              start: [{ start: [v] }],
              end: [{ end: [v] }],
              top: [{ top: [v] }],
              right: [{ right: [v] }],
              bottom: [{ bottom: [v] }],
              left: [{ left: [v] }],
              visibility: ["visible", "invisible", "collapse"],
              z: [{ z: ["auto", M, N] }],
              basis: [{ basis: D() }],
              "flex-direction": [
                { flex: ["row", "row-reverse", "col", "col-reverse"] },
              ],
              "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
              flex: [{ flex: ["1", "auto", "initial", "none", N] }],
              grow: [{ grow: X() }],
              shrink: [{ shrink: X() }],
              order: [{ order: ["first", "last", "none", M, N] }],
              "grid-cols": [{ "grid-cols": [W] }],
              "col-start-end": [{ col: ["auto", { span: ["full", M, N] }, N] }],
              "col-start": [{ "col-start": z() }],
              "col-end": [{ "col-end": z() }],
              "grid-rows": [{ "grid-rows": [W] }],
              "row-start-end": [{ row: ["auto", { span: [M, N] }, N] }],
              "row-start": [{ "row-start": z() }],
              "row-end": [{ "row-end": z() }],
              "grid-flow": [
                {
                  "grid-flow": [
                    "row",
                    "col",
                    "dense",
                    "row-dense",
                    "col-dense",
                  ],
                },
              ],
              "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", N] }],
              "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", N] }],
              gap: [{ gap: [p] }],
              "gap-x": [{ "gap-x": [p] }],
              "gap-y": [{ "gap-y": [p] }],
              "justify-content": [{ justify: ["normal", ...Y()] }],
              "justify-items": [
                { "justify-items": ["start", "end", "center", "stretch"] },
              ],
              "justify-self": [
                {
                  "justify-self": ["auto", "start", "end", "center", "stretch"],
                },
              ],
              "align-content": [{ content: ["normal", ...Y(), "baseline"] }],
              "align-items": [
                { items: ["start", "end", "center", "baseline", "stretch"] },
              ],
              "align-self": [
                {
                  self: [
                    "auto",
                    "start",
                    "end",
                    "center",
                    "stretch",
                    "baseline",
                  ],
                },
              ],
              "place-content": [{ "place-content": [...Y(), "baseline"] }],
              "place-items": [
                {
                  "place-items": [
                    "start",
                    "end",
                    "center",
                    "baseline",
                    "stretch",
                  ],
                },
              ],
              "place-self": [
                { "place-self": ["auto", "start", "end", "center", "stretch"] },
              ],
              p: [{ p: [b] }],
              px: [{ px: [b] }],
              py: [{ py: [b] }],
              ps: [{ ps: [b] }],
              pe: [{ pe: [b] }],
              pt: [{ pt: [b] }],
              pr: [{ pr: [b] }],
              pb: [{ pb: [b] }],
              pl: [{ pl: [b] }],
              m: [{ m: [y] }],
              mx: [{ mx: [y] }],
              my: [{ my: [y] }],
              ms: [{ ms: [y] }],
              me: [{ me: [y] }],
              mt: [{ mt: [y] }],
              mr: [{ mr: [y] }],
              mb: [{ mb: [y] }],
              ml: [{ ml: [y] }],
              "space-x": [{ "space-x": [k] }],
              "space-x-reverse": ["space-x-reverse"],
              "space-y": [{ "space-y": [k] }],
              "space-y-reverse": ["space-y-reverse"],
              w: [
                { w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", N, t] },
              ],
              "min-w": [{ "min-w": [N, t, "min", "max", "fit"] }],
              "max-w": [
                {
                  "max-w": [
                    N,
                    t,
                    "none",
                    "full",
                    "min",
                    "max",
                    "fit",
                    "prose",
                    { screen: [j] },
                    j,
                  ],
                },
              ],
              h: [
                { h: [N, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] },
              ],
              "min-h": [
                { "min-h": [N, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
              ],
              "max-h": [
                { "max-h": [N, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
              ],
              size: [{ size: [N, t, "auto", "min", "max", "fit"] }],
              "font-size": [{ text: ["base", j, L] }],
              "font-smoothing": ["antialiased", "subpixel-antialiased"],
              "font-style": ["italic", "not-italic"],
              "font-weight": [
                {
                  font: [
                    "thin",
                    "extralight",
                    "light",
                    "normal",
                    "medium",
                    "semibold",
                    "bold",
                    "extrabold",
                    "black",
                    O,
                  ],
                },
              ],
              "font-family": [{ font: [W] }],
              "fvn-normal": ["normal-nums"],
              "fvn-ordinal": ["ordinal"],
              "fvn-slashed-zero": ["slashed-zero"],
              "fvn-figure": ["lining-nums", "oldstyle-nums"],
              "fvn-spacing": ["proportional-nums", "tabular-nums"],
              "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
              tracking: [
                {
                  tracking: [
                    "tighter",
                    "tight",
                    "normal",
                    "wide",
                    "wider",
                    "widest",
                    N,
                  ],
                },
              ],
              "line-clamp": [{ "line-clamp": ["none", C, O] }],
              leading: [
                {
                  leading: [
                    "none",
                    "tight",
                    "snug",
                    "normal",
                    "relaxed",
                    "loose",
                    R,
                    N,
                  ],
                },
              ],
              "list-image": [{ "list-image": ["none", N] }],
              "list-style-type": [{ list: ["none", "disc", "decimal", N] }],
              "list-style-position": [{ list: ["inside", "outside"] }],
              "placeholder-color": [{ placeholder: [e] }],
              "placeholder-opacity": [{ "placeholder-opacity": [g] }],
              "text-alignment": [
                {
                  text: ["left", "center", "right", "justify", "start", "end"],
                },
              ],
              "text-color": [{ text: [e] }],
              "text-opacity": [{ "text-opacity": [g] }],
              "text-decoration": [
                "underline",
                "overline",
                "line-through",
                "no-underline",
              ],
              "text-decoration-style": [{ decoration: [...G(), "wavy"] }],
              "text-decoration-thickness": [
                { decoration: ["auto", "from-font", R, L] },
              ],
              "underline-offset": [{ "underline-offset": ["auto", R, N] }],
              "text-decoration-color": [{ decoration: [e] }],
              "text-transform": [
                "uppercase",
                "lowercase",
                "capitalize",
                "normal-case",
              ],
              "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
              "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
              indent: [{ indent: B() }],
              "vertical-align": [
                {
                  align: [
                    "baseline",
                    "top",
                    "middle",
                    "bottom",
                    "text-top",
                    "text-bottom",
                    "sub",
                    "super",
                    N,
                  ],
                },
              ],
              whitespace: [
                {
                  whitespace: [
                    "normal",
                    "nowrap",
                    "pre",
                    "pre-line",
                    "pre-wrap",
                    "break-spaces",
                  ],
                },
              ],
              break: [{ break: ["normal", "words", "all", "keep"] }],
              hyphens: [{ hyphens: ["none", "manual", "auto"] }],
              content: [{ content: ["none", N] }],
              "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
              "bg-clip": [
                { "bg-clip": ["border", "padding", "content", "text"] },
              ],
              "bg-opacity": [{ "bg-opacity": [g] }],
              "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
              "bg-position": [{ bg: [...$(), q] }],
              "bg-repeat": [
                {
                  bg: [
                    "no-repeat",
                    { repeat: ["", "x", "y", "round", "space"] },
                  ],
                },
              ],
              "bg-size": [{ bg: ["auto", "cover", "contain", U] }],
              "bg-image": [
                {
                  bg: [
                    "none",
                    {
                      "gradient-to": [
                        "t",
                        "tr",
                        "r",
                        "br",
                        "b",
                        "bl",
                        "l",
                        "tl",
                      ],
                    },
                    F,
                  ],
                },
              ],
              "bg-color": [{ bg: [e] }],
              "gradient-from-pos": [{ from: [m] }],
              "gradient-via-pos": [{ via: [m] }],
              "gradient-to-pos": [{ to: [m] }],
              "gradient-from": [{ from: [f] }],
              "gradient-via": [{ via: [f] }],
              "gradient-to": [{ to: [f] }],
              rounded: [{ rounded: [a] }],
              "rounded-s": [{ "rounded-s": [a] }],
              "rounded-e": [{ "rounded-e": [a] }],
              "rounded-t": [{ "rounded-t": [a] }],
              "rounded-r": [{ "rounded-r": [a] }],
              "rounded-b": [{ "rounded-b": [a] }],
              "rounded-l": [{ "rounded-l": [a] }],
              "rounded-ss": [{ "rounded-ss": [a] }],
              "rounded-se": [{ "rounded-se": [a] }],
              "rounded-ee": [{ "rounded-ee": [a] }],
              "rounded-es": [{ "rounded-es": [a] }],
              "rounded-tl": [{ "rounded-tl": [a] }],
              "rounded-tr": [{ "rounded-tr": [a] }],
              "rounded-br": [{ "rounded-br": [a] }],
              "rounded-bl": [{ "rounded-bl": [a] }],
              "border-w": [{ border: [l] }],
              "border-w-x": [{ "border-x": [l] }],
              "border-w-y": [{ "border-y": [l] }],
              "border-w-s": [{ "border-s": [l] }],
              "border-w-e": [{ "border-e": [l] }],
              "border-w-t": [{ "border-t": [l] }],
              "border-w-r": [{ "border-r": [l] }],
              "border-w-b": [{ "border-b": [l] }],
              "border-w-l": [{ "border-l": [l] }],
              "border-opacity": [{ "border-opacity": [g] }],
              "border-style": [{ border: [...G(), "hidden"] }],
              "divide-x": [{ "divide-x": [l] }],
              "divide-x-reverse": ["divide-x-reverse"],
              "divide-y": [{ "divide-y": [l] }],
              "divide-y-reverse": ["divide-y-reverse"],
              "divide-opacity": [{ "divide-opacity": [g] }],
              "divide-style": [{ divide: G() }],
              "border-color": [{ border: [o] }],
              "border-color-x": [{ "border-x": [o] }],
              "border-color-y": [{ "border-y": [o] }],
              "border-color-s": [{ "border-s": [o] }],
              "border-color-e": [{ "border-e": [o] }],
              "border-color-t": [{ "border-t": [o] }],
              "border-color-r": [{ "border-r": [o] }],
              "border-color-b": [{ "border-b": [o] }],
              "border-color-l": [{ "border-l": [o] }],
              "divide-color": [{ divide: [o] }],
              "outline-style": [{ outline: ["", ...G()] }],
              "outline-offset": [{ "outline-offset": [R, N] }],
              "outline-w": [{ outline: [R, L] }],
              "outline-color": [{ outline: [e] }],
              "ring-w": [{ ring: V() }],
              "ring-w-inset": ["ring-inset"],
              "ring-color": [{ ring: [e] }],
              "ring-opacity": [{ "ring-opacity": [g] }],
              "ring-offset-w": [{ "ring-offset": [R, L] }],
              "ring-offset-color": [{ "ring-offset": [e] }],
              shadow: [{ shadow: ["", "inner", "none", j, H] }],
              "shadow-color": [{ shadow: [W] }],
              opacity: [{ opacity: [g] }],
              "mix-blend": [
                { "mix-blend": [...K(), "plus-lighter", "plus-darker"] },
              ],
              "bg-blend": [{ "bg-blend": K() }],
              filter: [{ filter: ["", "none"] }],
              blur: [{ blur: [r] }],
              brightness: [{ brightness: [i] }],
              contrast: [{ contrast: [u] }],
              "drop-shadow": [{ "drop-shadow": ["", "none", j, N] }],
              grayscale: [{ grayscale: [d] }],
              "hue-rotate": [{ "hue-rotate": [c] }],
              invert: [{ invert: [h] }],
              saturate: [{ saturate: [_] }],
              sepia: [{ sepia: [x] }],
              "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
              "backdrop-blur": [{ "backdrop-blur": [r] }],
              "backdrop-brightness": [{ "backdrop-brightness": [i] }],
              "backdrop-contrast": [{ "backdrop-contrast": [u] }],
              "backdrop-grayscale": [{ "backdrop-grayscale": [d] }],
              "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
              "backdrop-invert": [{ "backdrop-invert": [h] }],
              "backdrop-opacity": [{ "backdrop-opacity": [g] }],
              "backdrop-saturate": [{ "backdrop-saturate": [_] }],
              "backdrop-sepia": [{ "backdrop-sepia": [x] }],
              "border-collapse": [{ border: ["collapse", "separate"] }],
              "border-spacing": [{ "border-spacing": [s] }],
              "border-spacing-x": [{ "border-spacing-x": [s] }],
              "border-spacing-y": [{ "border-spacing-y": [s] }],
              "table-layout": [{ table: ["auto", "fixed"] }],
              caption: [{ caption: ["top", "bottom"] }],
              transition: [
                {
                  transition: [
                    "none",
                    "all",
                    "",
                    "colors",
                    "opacity",
                    "shadow",
                    "transform",
                    N,
                  ],
                },
              ],
              duration: [{ duration: Z() }],
              ease: [{ ease: ["linear", "in", "out", "in-out", N] }],
              delay: [{ delay: Z() }],
              animate: [
                { animate: ["none", "spin", "ping", "pulse", "bounce", N] },
              ],
              transform: [{ transform: ["", "gpu", "none"] }],
              scale: [{ scale: [T] }],
              "scale-x": [{ "scale-x": [T] }],
              "scale-y": [{ "scale-y": [T] }],
              rotate: [{ rotate: [M, N] }],
              "translate-x": [{ "translate-x": [A] }],
              "translate-y": [{ "translate-y": [A] }],
              "skew-x": [{ "skew-x": [E] }],
              "skew-y": [{ "skew-y": [E] }],
              "transform-origin": [
                {
                  origin: [
                    "center",
                    "top",
                    "top-right",
                    "right",
                    "bottom-right",
                    "bottom",
                    "bottom-left",
                    "left",
                    "top-left",
                    N,
                  ],
                },
              ],
              accent: [{ accent: ["auto", e] }],
              appearance: [{ appearance: ["none", "auto"] }],
              cursor: [
                {
                  cursor: [
                    "auto",
                    "default",
                    "pointer",
                    "wait",
                    "text",
                    "move",
                    "help",
                    "not-allowed",
                    "none",
                    "context-menu",
                    "progress",
                    "cell",
                    "crosshair",
                    "vertical-text",
                    "alias",
                    "copy",
                    "no-drop",
                    "grab",
                    "grabbing",
                    "all-scroll",
                    "col-resize",
                    "row-resize",
                    "n-resize",
                    "e-resize",
                    "s-resize",
                    "w-resize",
                    "ne-resize",
                    "nw-resize",
                    "se-resize",
                    "sw-resize",
                    "ew-resize",
                    "ns-resize",
                    "nesw-resize",
                    "nwse-resize",
                    "zoom-in",
                    "zoom-out",
                    N,
                  ],
                },
              ],
              "caret-color": [{ caret: [e] }],
              "pointer-events": [{ "pointer-events": ["none", "auto"] }],
              resize: [{ resize: ["none", "y", "x", ""] }],
              "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
              "scroll-m": [{ "scroll-m": B() }],
              "scroll-mx": [{ "scroll-mx": B() }],
              "scroll-my": [{ "scroll-my": B() }],
              "scroll-ms": [{ "scroll-ms": B() }],
              "scroll-me": [{ "scroll-me": B() }],
              "scroll-mt": [{ "scroll-mt": B() }],
              "scroll-mr": [{ "scroll-mr": B() }],
              "scroll-mb": [{ "scroll-mb": B() }],
              "scroll-ml": [{ "scroll-ml": B() }],
              "scroll-p": [{ "scroll-p": B() }],
              "scroll-px": [{ "scroll-px": B() }],
              "scroll-py": [{ "scroll-py": B() }],
              "scroll-ps": [{ "scroll-ps": B() }],
              "scroll-pe": [{ "scroll-pe": B() }],
              "scroll-pt": [{ "scroll-pt": B() }],
              "scroll-pr": [{ "scroll-pr": B() }],
              "scroll-pb": [{ "scroll-pb": B() }],
              "scroll-pl": [{ "scroll-pl": B() }],
              "snap-align": [
                { snap: ["start", "end", "center", "align-none"] },
              ],
              "snap-stop": [{ snap: ["normal", "always"] }],
              "snap-type": [{ snap: ["none", "x", "y", "both"] }],
              "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
              touch: [{ touch: ["auto", "none", "manipulation"] }],
              "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
              "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
              "touch-pz": ["touch-pinch-zoom"],
              select: [{ select: ["none", "text", "all", "auto"] }],
              "will-change": [
                {
                  "will-change": ["auto", "scroll", "contents", "transform", N],
                },
              ],
              fill: [{ fill: [e, "none"] }],
              "stroke-w": [{ stroke: [R, L, O] }],
              stroke: [{ stroke: [e, "none"] }],
              sr: ["sr-only", "not-sr-only"],
              "forced-color-adjust": [
                { "forced-color-adjust": ["auto", "none"] },
              ],
            },
            conflictingClassGroups: {
              overflow: ["overflow-x", "overflow-y"],
              overscroll: ["overscroll-x", "overscroll-y"],
              inset: [
                "inset-x",
                "inset-y",
                "start",
                "end",
                "top",
                "right",
                "bottom",
                "left",
              ],
              "inset-x": ["right", "left"],
              "inset-y": ["top", "bottom"],
              flex: ["basis", "grow", "shrink"],
              gap: ["gap-x", "gap-y"],
              p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
              px: ["pr", "pl"],
              py: ["pt", "pb"],
              m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
              mx: ["mr", "ml"],
              my: ["mt", "mb"],
              size: ["w", "h"],
              "font-size": ["leading"],
              "fvn-normal": [
                "fvn-ordinal",
                "fvn-slashed-zero",
                "fvn-figure",
                "fvn-spacing",
                "fvn-fraction",
              ],
              "fvn-ordinal": ["fvn-normal"],
              "fvn-slashed-zero": ["fvn-normal"],
              "fvn-figure": ["fvn-normal"],
              "fvn-spacing": ["fvn-normal"],
              "fvn-fraction": ["fvn-normal"],
              "line-clamp": ["display", "overflow"],
              rounded: [
                "rounded-s",
                "rounded-e",
                "rounded-t",
                "rounded-r",
                "rounded-b",
                "rounded-l",
                "rounded-ss",
                "rounded-se",
                "rounded-ee",
                "rounded-es",
                "rounded-tl",
                "rounded-tr",
                "rounded-br",
                "rounded-bl",
              ],
              "rounded-s": ["rounded-ss", "rounded-es"],
              "rounded-e": ["rounded-se", "rounded-ee"],
              "rounded-t": ["rounded-tl", "rounded-tr"],
              "rounded-r": ["rounded-tr", "rounded-br"],
              "rounded-b": ["rounded-br", "rounded-bl"],
              "rounded-l": ["rounded-tl", "rounded-bl"],
              "border-spacing": ["border-spacing-x", "border-spacing-y"],
              "border-w": [
                "border-w-s",
                "border-w-e",
                "border-w-t",
                "border-w-r",
                "border-w-b",
                "border-w-l",
              ],
              "border-w-x": ["border-w-r", "border-w-l"],
              "border-w-y": ["border-w-t", "border-w-b"],
              "border-color": [
                "border-color-s",
                "border-color-e",
                "border-color-t",
                "border-color-r",
                "border-color-b",
                "border-color-l",
              ],
              "border-color-x": ["border-color-r", "border-color-l"],
              "border-color-y": ["border-color-t", "border-color-b"],
              "scroll-m": [
                "scroll-mx",
                "scroll-my",
                "scroll-ms",
                "scroll-me",
                "scroll-mt",
                "scroll-mr",
                "scroll-mb",
                "scroll-ml",
              ],
              "scroll-mx": ["scroll-mr", "scroll-ml"],
              "scroll-my": ["scroll-mt", "scroll-mb"],
              "scroll-p": [
                "scroll-px",
                "scroll-py",
                "scroll-ps",
                "scroll-pe",
                "scroll-pt",
                "scroll-pr",
                "scroll-pb",
                "scroll-pl",
              ],
              "scroll-px": ["scroll-pr", "scroll-pl"],
              "scroll-py": ["scroll-pt", "scroll-pb"],
              touch: ["touch-x", "touch-y", "touch-pz"],
              "touch-x": ["touch"],
              "touch-y": ["touch"],
              "touch-pz": ["touch"],
            },
            conflictingClassGroupModifiers: { "font-size": ["leading"] },
          };
        });
    },
    2694: function (e, t, r) {
      "use strict";
      r.d(t, {
        O_: function () {
          return l;
        },
        ac: function () {
          return s;
        },
      });
      var i = r(2265);
      r(5607);
      var o = "undefined" != typeof window ? i.useLayoutEffect : i.useEffect,
        a = "undefined" == typeof window;
      function s(
        e,
        { defaultValue: t = !1, initializeWithValue: r = !0 } = {}
      ) {
        let s = (e) => (a ? t : window.matchMedia(e).matches),
          [l, u] = (0, i.useState)(() => (r ? s(e) : t));
        function d() {
          u(s(e));
        }
        return (
          o(() => {
            let t = window.matchMedia(e);
            return (
              d(),
              t.addListener
                ? t.addListener(d)
                : t.addEventListener("change", d),
              () => {
                t.removeListener
                  ? t.removeListener(d)
                  : t.removeEventListener("change", d);
              }
            );
          }, [e]),
          l
        );
      }
      function l() {
        let [e, t] = (0, i.useState)(!1);
        return (
          (0, i.useEffect)(() => {
            t(!0);
          }, []),
          e
        );
      }
    },
  },
]);
