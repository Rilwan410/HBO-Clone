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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GenreNav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction GenreNav(param) {\n    let { genresData , featuredData , mediaType , genre_id  } = param;\n    _s();\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    console.log(mediaType);\n    console.log(genresData);\n    console.log(featuredData);\n    setTimeout(()=>{\n        setActive(true);\n    }, 50);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: \"genre-nav  \".concat(active ? \"active\" : \"\", \" flex mt-[120px] mb-[50px] px-[25px] justify-center flex-wrap\"),\n        children: genresData.genres.map((genres)=>{\n            let id = genres.id;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__.Link, {\n                    href: \"/\".concat(mediaType, \"/genre/\").concat(id),\n                    children: genres.name\n                }, void 0, false, {\n                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/GenreNav.js\",\n                    lineNumber: 34,\n                    columnNumber: 13\n                }, this)\n            }, genres.id, false, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/GenreNav.js\",\n                lineNumber: 33,\n                columnNumber: 11\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/GenreNav.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(GenreNav, \"c8LLMscGuM1hB5tKl6q8aVkKW9A=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = GenreNav;\nvar _c;\n$RefreshReg$(_c, \"GenreNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9VSS9HZW5yZU5hdi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErQjtBQUNTO0FBQ1o7QUFDSztBQUdsQixTQUFTSSxTQUFTLEtBS2hDO1FBTGdDLEVBQy9CQyxXQUFVLEVBQ1ZDLGFBQVksRUFDWkMsVUFBUyxFQUNUQyxTQUFRLEVBQ1QsR0FMZ0M7O0lBTS9CLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNUSxTQUFTVixzREFBU0E7SUFDeEJXLFFBQVFDLElBQUlOO0lBQ1pLLFFBQVFDLElBQUlSO0lBQ1pPLFFBQVFDLElBQUlQO0lBR1pRLFdBQVc7UUFDVEosVUFBVTtJQUNaLEdBQUc7SUFFSCxxQkFDRSw4REFBQ0s7UUFDQ0MsV0FBVyxjQUVWLE9BRENQLFNBQVMsV0FBVyxJQUNyQjtrQkFFQUosV0FBV1ksT0FBT0MsSUFBSSxDQUFDRDtZQUN0QixJQUFJRSxLQUFLRixPQUFPRTtZQUNoQixxQkFDRSw4REFBQ0M7MEJBQ0MsNEVBQUNwQiwyQ0FBSUE7b0JBRUhxQixNQUFNLElBQXVCRixPQUFuQlosV0FBVSxXQUFZLE9BQUhZOzhCQUk1QkYsT0FBT0s7Ozs7OztlQVBITCxPQUFPRTs7Ozs7UUFXcEI7Ozs7OztBQUdOO0dBeEN3QmY7O1FBT1BILGtEQUFTQTs7O0tBUEZHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL1VJL0dlbnJlTmF2LmpzPzg5M2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtMaW5rfSBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHZW5yZU5hdih7XG4gIGdlbnJlc0RhdGEsXG4gIGZlYXR1cmVkRGF0YSxcbiAgbWVkaWFUeXBlLFxuICBnZW5yZV9pZCxcbn0pIHtcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnNvbGUubG9nKG1lZGlhVHlwZSk7XG4gIGNvbnNvbGUubG9nKGdlbnJlc0RhdGEpO1xuICBjb25zb2xlLmxvZyhmZWF0dXJlZERhdGEpO1xuXG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgc2V0QWN0aXZlKHRydWUpO1xuICB9LCA1MCk7XG5cbiAgcmV0dXJuIChcbiAgICA8dWxcbiAgICAgIGNsYXNzTmFtZT17YGdlbnJlLW5hdiAgJHtcbiAgICAgICAgYWN0aXZlID8gXCJhY3RpdmVcIiA6IFwiXCJcbiAgICAgIH0gZmxleCBtdC1bMTIwcHhdIG1iLVs1MHB4XSBweC1bMjVweF0ganVzdGlmeS1jZW50ZXIgZmxleC13cmFwYH1cbiAgICA+XG4gICAgICB7Z2VucmVzRGF0YS5nZW5yZXMubWFwKChnZW5yZXMpID0+IHtcbiAgICAgICAgbGV0IGlkID0gZ2VucmVzLmlkXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGxpIGtleT17Z2VucmVzLmlkfT5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgaHJlZj17YC8ke21lZGlhVHlwZX0vZ2VucmUvJHtpZH1gfVxuICAgICAgICAgICAgICAvLyBjbGFzc05hbWU9e2Ake3JvdXRlci5wYXRobmFtZSA9PT0gXCIvXCIgPyBcImFjdGl2ZVwiIDogXCJcIn0gYH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtnZW5yZXMubmFtZX1cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC91bD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlUm91dGVyIiwiZ3NhcCIsInVzZVN0YXRlIiwiR2VucmVOYXYiLCJnZW5yZXNEYXRhIiwiZmVhdHVyZWREYXRhIiwibWVkaWFUeXBlIiwiZ2VucmVfaWQiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJyb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwic2V0VGltZW91dCIsInVsIiwiY2xhc3NOYW1lIiwiZ2VucmVzIiwibWFwIiwiaWQiLCJsaSIsImhyZWYiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./UI/GenreNav.js\n"));

/***/ })

});