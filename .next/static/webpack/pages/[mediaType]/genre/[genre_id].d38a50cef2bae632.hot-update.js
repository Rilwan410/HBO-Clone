"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[mediaType]/genre/[genre_id]",{

/***/ "./UI/GenreNav.js":
/*!************************!*\
  !*** ./UI/GenreNav.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GenreNav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction GenreNav(param) {\n    let { genresData , featuredData , mediaType , genre_id  } = param;\n    _s();\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    function findGenre(e) {\n        e.target.classList.add(\"hi\");\n    }\n    setTimeout(()=>{\n        setActive(true);\n    }, 50);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: \"genre-nav  \".concat(active ? \"active\" : \"\", \" flex mt-[120px] mb-[50px] px-[25px] justify-center flex-wrap\"),\n        children: genresData.genres.map((genres, index)=>{\n            let id = genres.id;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    className: \"hi\",\n                    onClick: findGenre,\n                    href: \"/\".concat(mediaType, \"/genre/\").concat(id),\n                    children: genres.name\n                }, void 0, false, {\n                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/GenreNav.js\",\n                    lineNumber: 35,\n                    columnNumber: 13\n                }, this)\n            }, genres.id, false, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/GenreNav.js\",\n                lineNumber: 34,\n                columnNumber: 11\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/GenreNav.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(GenreNav, \"c8LLMscGuM1hB5tKl6q8aVkKW9A=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = GenreNav;\nvar _c;\n$RefreshReg$(_c, \"GenreNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9VSS9HZW5yZU5hdi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNXO0FBQ1o7QUFDSztBQUdsQixTQUFTSSxTQUFTLEtBS2hDO1FBTGdDLEVBQy9CQyxXQUFVLEVBQ1ZDLGFBQVksRUFDWkMsVUFBUyxFQUNUQyxTQUFRLEVBQ1QsR0FMZ0M7O0lBTS9CLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNUSxTQUFTVixzREFBU0E7SUFFeEIsU0FBU1csVUFBVUMsQ0FBQztRQUNwQkEsRUFBRUMsT0FBT0MsVUFBVUMsSUFBSTtJQUN2QjtJQUdBQyxXQUFXO1FBQ1RQLFVBQVU7SUFDWixHQUFHO0lBRUgscUJBQ0UsOERBQUNRO1FBQ0NDLFdBQVcsY0FFVixPQURDVixTQUFTLFdBQVcsSUFDckI7a0JBRUFKLFdBQVdlLE9BQU9DLElBQUksQ0FBQ0QsUUFBUUU7WUFDOUIsSUFBSUMsS0FBS0gsT0FBT0c7WUFDaEIscUJBQ0UsOERBQUNDOzBCQUNDLDRFQUFDeEIsa0RBQUlBO29CQUNMbUIsV0FBWTtvQkFDWk0sU0FBV2I7b0JBQ1RjLE1BQU0sSUFBdUJILE9BQW5CaEIsV0FBVSxXQUFZLE9BQUhnQjs4QkFJNUJILE9BQU9POzs7Ozs7ZUFSSFAsT0FBT0c7Ozs7O1FBWXBCOzs7Ozs7QUFHTjtHQTFDd0JuQjs7UUFPUEgsa0RBQVNBOzs7S0FQRkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vVUkvR2VucmVOYXYuanM/ODkzZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHZW5yZU5hdih7XG4gIGdlbnJlc0RhdGEsXG4gIGZlYXR1cmVkRGF0YSxcbiAgbWVkaWFUeXBlLFxuICBnZW5yZV9pZCxcbn0pIHtcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTsgXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGZ1bmN0aW9uIGZpbmRHZW5yZShlKXtcbiAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnaGknKVxuICB9XG5cblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBzZXRBY3RpdmUodHJ1ZSk7XG4gIH0sIDUwKTtcblxuICByZXR1cm4gKFxuICAgIDx1bFxuICAgICAgY2xhc3NOYW1lPXtgZ2VucmUtbmF2ICAke1xuICAgICAgICBhY3RpdmUgPyBcImFjdGl2ZVwiIDogXCJcIlxuICAgICAgfSBmbGV4IG10LVsxMjBweF0gbWItWzUwcHhdIHB4LVsyNXB4XSBqdXN0aWZ5LWNlbnRlciBmbGV4LXdyYXBgfVxuICAgID5cbiAgICAgIHtnZW5yZXNEYXRhLmdlbnJlcy5tYXAoKGdlbnJlcywgaW5kZXgpID0+IHtcbiAgICAgICAgbGV0IGlkID0gZ2VucmVzLmlkXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGxpIGtleT17Z2VucmVzLmlkIH0+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gJ2hpJ1xuICAgICAgICAgICAgb25DbGljayA9IHtmaW5kR2VucmV9XG4gICAgICAgICAgICAgIGhyZWY9e2AvJHttZWRpYVR5cGV9L2dlbnJlLyR7aWR9YH1cbiAgICAgICAgICAgICAgLy8gY2xhc3NOYW1lPXtgJHtyb3V0ZXIucGF0aG5hbWUgPT09IFwiL1wiID8gXCJhY3RpdmVcIiA6IFwiXCJ9IGB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Z2VucmVzLm5hbWV9XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvdWw+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTGluayIsInVzZVJvdXRlciIsImdzYXAiLCJ1c2VTdGF0ZSIsIkdlbnJlTmF2IiwiZ2VucmVzRGF0YSIsImZlYXR1cmVkRGF0YSIsIm1lZGlhVHlwZSIsImdlbnJlX2lkIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwicm91dGVyIiwiZmluZEdlbnJlIiwiZSIsInRhcmdldCIsImNsYXNzTGlzdCIsImFkZCIsInNldFRpbWVvdXQiLCJ1bCIsImNsYXNzTmFtZSIsImdlbnJlcyIsIm1hcCIsImluZGV4IiwiaWQiLCJsaSIsIm9uQ2xpY2siLCJocmVmIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./UI/GenreNav.js\n"));

/***/ })

});