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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GenreNav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction GenreNav(param) {\n    let { genresData , featuredData , mediaType , genre_id  } = param;\n    _s();\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    console.log(mediaType);\n    console.log(genresData);\n    console.log(featuredData);\n    function findGenre(e) {\n        console.log(e.target.innerText);\n        featuredData.find();\n    }\n    setTimeout(()=>{\n        setActive(true);\n    }, 50);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: \"genre-nav  \".concat(active ? \"active\" : \"\", \" flex mt-[120px] mb-[50px] px-[25px] justify-center flex-wrap\"),\n        children: genresData.genres.map((genres)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    onClick: findGenre,\n                    href: \"\",\n                    className: \"\".concat(router.pathname === \"/\" ? \"active\" : \"\", \" \"),\n                    children: genres.name\n                }, void 0, false, {\n                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/GenreNav.js\",\n                    lineNumber: 30,\n                    columnNumber: 13\n                }, this)\n            }, genres.id, false, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/GenreNav.js\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/GenreNav.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(GenreNav, \"c8LLMscGuM1hB5tKl6q8aVkKW9A=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = GenreNav;\nvar _c;\n$RefreshReg$(_c, \"GenreNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9VSS9HZW5yZU5hdi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNZO0FBQ2I7QUFDSztBQUlsQixTQUFTSSxTQUFTLEtBQStDO1FBQS9DLEVBQUNDLFdBQVUsRUFBRUMsYUFBWSxFQUFFQyxVQUFTLEVBQUVDLFNBQVEsRUFBQyxHQUEvQzs7SUFDakMsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU1RLFNBQVNWLHNEQUFTQTtJQUMxQlcsUUFBUUMsSUFBSU47SUFDWkssUUFBUUMsSUFBSVI7SUFDWk8sUUFBUUMsSUFBSVA7SUFFWixTQUFTUSxVQUFVQyxDQUFDO1FBQ2xCSCxRQUFRQyxJQUFJRSxFQUFFQyxPQUFPQztRQUNyQlgsYUFBYVk7SUFFZjtJQUVFQyxXQUFXO1FBQ1RULFVBQVU7SUFDWixHQUFFO0lBRUYscUJBQ0UsOERBQUNVO1FBQUdDLFdBQVcsY0FBcUMsT0FBdkJaLFNBQVMsV0FBVyxJQUFHO2tCQUNsREosV0FBV2lCLE9BQU9DLElBQUlELENBQUFBO1lBQ3BCLHFCQUNJLDhEQUFDRTswQkFDRCw0RUFBQ3hCLGtEQUFJQTtvQkFBRXlCLFNBQVdYO29CQUFXWSxNQUFPO29CQUFHTCxXQUFXLEdBQTJDLE9BQXhDVixPQUFPZ0IsYUFBYSxNQUFNLFdBQVcsSUFBRzs4QkFDMUZMLE9BQU9NOzs7Ozs7ZUFGQ04sT0FBT087Ozs7O1FBTzFCOzs7Ozs7QUFHSjtHQS9Cd0J6Qjs7UUFFUEgsa0RBQVNBOzs7S0FGRkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vVUkvR2VucmVOYXYuanM/ODkzZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIsIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHZW5yZU5hdih7Z2VucmVzRGF0YSwgZmVhdHVyZWREYXRhLCBtZWRpYVR5cGUsIGdlbnJlX2lkfSkge1xuY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbmNvbnNvbGUubG9nKG1lZGlhVHlwZSlcbmNvbnNvbGUubG9nKGdlbnJlc0RhdGEpXG5jb25zb2xlLmxvZyhmZWF0dXJlZERhdGEpXG5cbmZ1bmN0aW9uIGZpbmRHZW5yZShlKXtcbiAgY29uc29sZS5sb2coZS50YXJnZXQuaW5uZXJUZXh0KVxuICBmZWF0dXJlZERhdGEuZmluZCgpXG5cbn1cblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBzZXRBY3RpdmUodHJ1ZSlcbiAgfSw1MClcblxuICByZXR1cm4gKFxuICAgIDx1bCBjbGFzc05hbWU9e2BnZW5yZS1uYXYgICR7YWN0aXZlID8gXCJhY3RpdmVcIiA6ICcnfSBmbGV4IG10LVsxMjBweF0gbWItWzUwcHhdIHB4LVsyNXB4XSBqdXN0aWZ5LWNlbnRlciBmbGV4LXdyYXBgfT5cbiAgICB7IGdlbnJlc0RhdGEuZ2VucmVzLm1hcChnZW5yZXMgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpIGtleSA9IHtnZW5yZXMuaWR9PlxuICAgICAgICAgICAgPExpbmsgIG9uQ2xpY2sgPSB7ZmluZEdlbnJlfSBocmVmPXtgYH0gY2xhc3NOYW1lPXtgJHtyb3V0ZXIucGF0aG5hbWUgPT09IFwiL1wiID8gXCJhY3RpdmVcIiA6IFwiXCJ9IGB9PlxuICAgICAgICAgICAgICB7Z2VucmVzLm5hbWV9XG4gICAgICAgICAgICAgIHsvKiAke21lZGlhVHlwZX0vZ2VucmUvJHtnZW5yZV9pZH0gKi99XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKVxuICAgIH0pfVxuICAgIDwvdWw+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTGluayIsInVzZVJvdXRlciIsImdzYXAiLCJ1c2VTdGF0ZSIsIkdlbnJlTmF2IiwiZ2VucmVzRGF0YSIsImZlYXR1cmVkRGF0YSIsIm1lZGlhVHlwZSIsImdlbnJlX2lkIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwicm91dGVyIiwiY29uc29sZSIsImxvZyIsImZpbmRHZW5yZSIsImUiLCJ0YXJnZXQiLCJpbm5lclRleHQiLCJmaW5kIiwic2V0VGltZW91dCIsInVsIiwiY2xhc3NOYW1lIiwiZ2VucmVzIiwibWFwIiwibGkiLCJvbkNsaWNrIiwiaHJlZiIsInBhdGhuYW1lIiwibmFtZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./UI/GenreNav.js\n"));

/***/ })

});