"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[mediaType]",{

/***/ "./UI/GenreNav.js":
/*!************************!*\
  !*** ./UI/GenreNav.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GenreNav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction GenreNav(param) {\n    let { genresData , featuredData , mediaType , genre_id  } = param;\n    _s();\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    console.log(mediaType);\n    console.log(genresData);\n    console.log(featuredData);\n    function findGenre(e) {\n        let correctGenre;\n        // console.log(e.target.innerText)\n        genresData.genres.find((genre)=>{\n            correctGenre = genre.name === e.target.innerText;\n            return genresData.genres.filter((item)=>{});\n        });\n        // genresData.filter(item => {\n        //   console.log(item.genre.name === correctGenre)\n        //   item.genre.name === correctGenre\n        // })\n        console.log(correctGenre);\n    }\n    setTimeout(()=>{\n        setActive(true);\n    }, 50);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: \"genre-nav  \".concat(active ? \"active\" : \"\", \" flex mt-[120px] mb-[50px] px-[25px] justify-center flex-wrap\"),\n        children: genresData.genres.map((genres)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    onClick: findGenre,\n                    href: \"/\",\n                    className: \"\".concat(router.pathname === \"/\" ? \"active\" : \"\", \" \"),\n                    children: genres.name\n                }, void 0, false, {\n                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/GenreNav.js\",\n                    lineNumber: 48,\n                    columnNumber: 13\n                }, this)\n            }, genres.id, false, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/GenreNav.js\",\n                lineNumber: 47,\n                columnNumber: 11\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/GenreNav.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n_s(GenreNav, \"c8LLMscGuM1hB5tKl6q8aVkKW9A=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = GenreNav;\nvar _c;\n$RefreshReg$(_c, \"GenreNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9VSS9HZW5yZU5hdi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNXO0FBQ1o7QUFDSztBQUVsQixTQUFTSSxTQUFTLEtBS2hDO1FBTGdDLEVBQy9CQyxXQUFVLEVBQ1ZDLGFBQVksRUFDWkMsVUFBUyxFQUNUQyxTQUFRLEVBQ1QsR0FMZ0M7O0lBTS9CLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNUSxTQUFTVixzREFBU0E7SUFDeEJXLFFBQVFDLElBQUlOO0lBQ1pLLFFBQVFDLElBQUlSO0lBQ1pPLFFBQVFDLElBQUlQO0lBRVosU0FBU1EsVUFBVUMsQ0FBQztRQUNsQixJQUFJQztRQUNKLGtDQUFrQztRQUNsQ1gsV0FBV1ksT0FBT0MsS0FBSyxDQUFDQztZQUN0QkgsZUFBZUcsTUFBTUMsU0FBU0wsRUFBRU0sT0FBT0M7WUFDdkMsT0FBT2pCLFdBQVdZLE9BQU9NLE9BQU9DLENBQUFBLFFBRWhDO1FBQ0Y7UUFFQSw4QkFBOEI7UUFDOUIsa0RBQWtEO1FBQ2xELHFDQUFxQztRQUNyQyxLQUFLO1FBQ0xaLFFBQVFDLElBQUlHO0lBQ2Q7SUFFQVMsV0FBVztRQUNUZixVQUFVO0lBQ1osR0FBRztJQUVILHFCQUNFLDhEQUFDZ0I7UUFDQ0MsV0FBVyxjQUVWLE9BRENsQixTQUFTLFdBQVcsSUFDckI7a0JBRUFKLFdBQVdZLE9BQU9XLElBQUksQ0FBQ1g7WUFDdEIscUJBQ0UsOERBQUNZOzBCQUNDLDRFQUFDN0Isa0RBQUlBO29CQUNIOEIsU0FBU2hCO29CQUNUaUIsTUFBTztvQkFDUEosV0FBVyxHQUEyQyxPQUF4Q2hCLE9BQU9xQixhQUFhLE1BQU0sV0FBVyxJQUFHOzhCQUVyRGYsT0FBT0c7Ozs7OztlQU5ISCxPQUFPZ0I7Ozs7O1FBV3BCOzs7Ozs7QUFHTjtHQXZEd0I3Qjs7UUFPUEgsa0RBQVNBOzs7S0FQRkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vVUkvR2VucmVOYXYuanM/ODkzZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2VucmVOYXYoe1xuICBnZW5yZXNEYXRhLFxuICBmZWF0dXJlZERhdGEsXG4gIG1lZGlhVHlwZSxcbiAgZ2VucmVfaWQsXG59KSB7XG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zb2xlLmxvZyhtZWRpYVR5cGUpO1xuICBjb25zb2xlLmxvZyhnZW5yZXNEYXRhKTtcbiAgY29uc29sZS5sb2coZmVhdHVyZWREYXRhKTtcblxuICBmdW5jdGlvbiBmaW5kR2VucmUoZSkge1xuICAgIGxldCBjb3JyZWN0R2VucmU7XG4gICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQuaW5uZXJUZXh0KVxuICAgIGdlbnJlc0RhdGEuZ2VucmVzLmZpbmQoKGdlbnJlKSA9PiB7XG4gICAgICBjb3JyZWN0R2VucmUgPSBnZW5yZS5uYW1lID09PSBlLnRhcmdldC5pbm5lclRleHQ7XG4gICAgICByZXR1cm4gZ2VucmVzRGF0YS5nZW5yZXMuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICBcbiAgICAgIH0pXG4gICAgfSk7XG5cbiAgICAvLyBnZW5yZXNEYXRhLmZpbHRlcihpdGVtID0+IHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKGl0ZW0uZ2VucmUubmFtZSA9PT0gY29ycmVjdEdlbnJlKVxuICAgIC8vICAgaXRlbS5nZW5yZS5uYW1lID09PSBjb3JyZWN0R2VucmVcbiAgICAvLyB9KVxuICAgIGNvbnNvbGUubG9nKGNvcnJlY3RHZW5yZSk7XG4gIH1cblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBzZXRBY3RpdmUodHJ1ZSk7XG4gIH0sIDUwKTtcblxuICByZXR1cm4gKFxuICAgIDx1bFxuICAgICAgY2xhc3NOYW1lPXtgZ2VucmUtbmF2ICAke1xuICAgICAgICBhY3RpdmUgPyBcImFjdGl2ZVwiIDogXCJcIlxuICAgICAgfSBmbGV4IG10LVsxMjBweF0gbWItWzUwcHhdIHB4LVsyNXB4XSBqdXN0aWZ5LWNlbnRlciBmbGV4LXdyYXBgfVxuICAgID5cbiAgICAgIHtnZW5yZXNEYXRhLmdlbnJlcy5tYXAoKGdlbnJlcykgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxsaSBrZXk9e2dlbnJlcy5pZH0+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBvbkNsaWNrPXtmaW5kR2VucmV9XG4gICAgICAgICAgICAgIGhyZWY9e2AvYH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtyb3V0ZXIucGF0aG5hbWUgPT09IFwiL1wiID8gXCJhY3RpdmVcIiA6IFwiXCJ9IGB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtnZW5yZXMubmFtZX1cbiAgICAgICAgICAgICAgey8qICR7bWVkaWFUeXBlfS9nZW5yZS8ke2dlbnJlX2lkfSAqL31cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC91bD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlUm91dGVyIiwiZ3NhcCIsInVzZVN0YXRlIiwiR2VucmVOYXYiLCJnZW5yZXNEYXRhIiwiZmVhdHVyZWREYXRhIiwibWVkaWFUeXBlIiwiZ2VucmVfaWQiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJyb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwiZmluZEdlbnJlIiwiZSIsImNvcnJlY3RHZW5yZSIsImdlbnJlcyIsImZpbmQiLCJnZW5yZSIsIm5hbWUiLCJ0YXJnZXQiLCJpbm5lclRleHQiLCJmaWx0ZXIiLCJpdGVtIiwic2V0VGltZW91dCIsInVsIiwiY2xhc3NOYW1lIiwibWFwIiwibGkiLCJvbkNsaWNrIiwiaHJlZiIsInBhdGhuYW1lIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./UI/GenreNav.js\n"));

/***/ })

});