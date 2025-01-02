(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    783: function (e, t, l) {
      Promise.resolve().then(l.bind(l, 4348)),
        Promise.resolve().then(l.t.bind(l, 4742, 23)),
        Promise.resolve().then(l.t.bind(l, 4209, 23)),
        Promise.resolve().then(l.t.bind(l, 7960, 23)),
        Promise.resolve().then(l.t.bind(l, 4168, 23)),
        Promise.resolve().then(l.t.bind(l, 5345, 23));
    },
    4348: function (e, t, l) {
      "use strict";
      var s = l(7437),
        n = l(3145),
        r = l(2265),
        o = l(7648),
        a = l(7323);
      t.default = () => {
        let [e, t] = (0, r.useState)(!1);
        return (0, s.jsx)("nav", {
          className:
            "w-full h-[4.5rem] px-3 sm:h-24 sm:px-8 md:px-10 xl:px-32 py-4 sm:py-5 bg-black/60 fixed top-0 z-[2000] flex items-center backdrop-blur-2xl",
          children: (0, s.jsxs)("div", {
            className:
              "flex justify-between items-center max-w-7xl mx-auto w-full",
            children: [
              (0, s.jsx)("div", {
                className: "flex justify-start items-center gap-2.5",
                children: (0, s.jsx)(n.default, {
                  src: "/new-logo.svg",
                  alt: "OpMentis Logo",
                  width: 5200,
                  height: 1500,
                  priority: !0,
                  className: "w-auto h-[80px]",
                }),
              }),
              (0, s.jsx)("div", {
                className: "xl:hidden",
                children: (0, s.jsx)("button", {
                  onClick: () => t(!e),
                  className: "text-white focus:outline-none",
                  children: (0, s.jsx)("svg", {
                    className: "w-8 h-8",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, s.jsx)("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: e ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16",
                    }),
                  }),
                }),
              }),
              (0, s.jsxs)("div", {
                className: "".concat(
                  e ? "flex" : "hidden",
                  " xl:flex flex-col xl:flex-row justify-between items-center gap-3 xl:gap-8 absolute xl:static top-[4.5rem] sm:top-24 left-0 w-full xl:w-auto bg-black/95 xl:bg-transparent p-4 xl:p-0 border-t border-gray-800 xl:border-0"
                ),
                children: [
                  (0, s.jsx)(o.default, {
                    href: "#desci",
                    className:
                      "text-white flex flex-col w-full text-base font-bold leading-normal cursor-pointer hover:text-gray-300",
                    onClick: () => t(!1),
                    children: "DeSci",
                  }),
                  (0, s.jsx)(o.default, {
                    href: "https://docs.oraculumai.org",
                    className:
                      "text-white flex flex-col w-full text-base font-bold leading-normal cursor-pointer hover:text-gray-300",
                    onClick: () => t(!1),
                    children: "Documentation",
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "flex flex-row xl:flex-row items-center justify-center w-full space-x-2 xl:space-x-2 mt-2 xl:mt-0",
                    children: (0, s.jsx)(a.Z, {
                      href: "https://app.oraculumai.org",
                      className: "text-sm px-4 py-2 whitespace-nowrap w-auto",
                      children: "Staking $ORC",
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
    7323: function (e, t, l) {
      "use strict";
      var s = l(7437);
      l(2265);
      var n = l(1994),
        r = l(7648);
      t.Z = (e) => {
        let { children: t, className: l, href: o, ...a } = e,
          i = (0, s.jsx)("button", {
            className: (0, n.Z)(
              "relative inline-flex items-center justify-center rounded-md px-6 py-3 text-lg font-robo font-normal text-white transition-transform duration-300",
              l,
              "bg-gradient-to-r from-orange-500 to-pink-500"
            ),
            ...a,
            children: t,
          });
        return o
          ? (0, s.jsx)(r.default, {
              href: o,
              target: "_blank",
              rel: "noreferrer",
              children: i,
            })
          : i;
      };
    },
    7960: function () {},
    4742: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__Inter_d65c78', '__Inter_Fallback_d65c78'",
          fontStyle: "normal",
        },
        className: "__className_d65c78",
      };
    },
    4209: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__Roboto_Flex_f67556', '__Roboto_Flex_Fallback_f67556'",
          fontStyle: "normal",
        },
        className: "__className_f67556",
        variable: "__variable_f67556",
      };
    },
    4168: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__Oswald_b4457d', '__Oswald_Fallback_b4457d'",
          fontStyle: "normal",
        },
        className: "__className_b4457d",
      };
    },
  },
  function (e) {
    e.O(0, [500, 587, 391, 661, 971, 117, 744], function () {
      return e((e.s = 783));
    }),
      (_N_E = e.O());
  },
]);
