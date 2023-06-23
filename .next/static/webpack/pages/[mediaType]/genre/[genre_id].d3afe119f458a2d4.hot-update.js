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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GenreNav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction GenreNav(param) {\n    let { genresData , featuredData , mediaType , genre_id  } = param;\n    _s();\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    function findGenre(e) {\n        console.log(e.target.closest(\".genre-nav\").childNodes.forEach((each)=>{\n            console.log(each.classList.value = \"\");\n        }));\n        e.target.classList.value = \"current\";\n    }\n    setTimeout(()=>{\n        setActive(true);\n    }, 50);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: \"genre-nav  \".concat(active ? \"active\" : \"\", \" flex mt-[120px] mb-[50px] px-[25px] justify-center flex-wrap\"),\n        children: genresData.genres.map((genres, index)=>{\n            let id = genres.id;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    className: \"hi\",\n                    onClick: findGenre,\n                    href: \"/\".concat(mediaType, \"/genre/\").concat(id),\n                    children: genres.name\n                }, void 0, false, {\n                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/GenreNav.js\",\n                    lineNumber: 37,\n                    columnNumber: 13\n                }, this)\n            }, genres.id, false, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/GenreNav.js\",\n                lineNumber: 36,\n                columnNumber: 11\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/GenreNav.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(GenreNav, \"c8LLMscGuM1hB5tKl6q8aVkKW9A=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = GenreNav;\nvar _c;\n$RefreshReg$(_c, \"GenreNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9VSS9HZW5yZU5hdi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNXO0FBQ1o7QUFDSztBQUVsQixTQUFTSSxTQUFTLEtBS2hDO1FBTGdDLEVBQy9CQyxXQUFVLEVBQ1ZDLGFBQVksRUFDWkMsVUFBUyxFQUNUQyxTQUFRLEVBQ1QsR0FMZ0M7O0lBTS9CLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNUSxTQUFTVixzREFBU0E7SUFFeEIsU0FBU1csVUFBVUMsQ0FBQztRQUNwQkMsUUFBUUMsSUFBSUYsRUFBRUcsT0FBT0MsUUFBUSxjQUFjQyxXQUFXQyxRQUFRQyxDQUFBQTtZQUM1RE4sUUFBUUMsSUFBSUssS0FBS0MsVUFBVUMsUUFBUTtRQUNyQztRQUVFVCxFQUFFRyxPQUFPSyxVQUFVQyxRQUFRO0lBQzdCO0lBRUFDLFdBQVc7UUFDVGIsVUFBVTtJQUNaLEdBQUc7SUFFSCxxQkFDRSw4REFBQ2M7UUFDQ0MsV0FBVyxjQUVWLE9BRENoQixTQUFTLFdBQVcsSUFDckI7a0JBRUFKLFdBQVdxQixPQUFPQyxJQUFJLENBQUNELFFBQVFFO1lBQzlCLElBQUlDLEtBQUtILE9BQU9HO1lBQ2hCLHFCQUNFLDhEQUFDQzswQkFDQyw0RUFBQzlCLGtEQUFJQTtvQkFDSHlCLFdBQVU7b0JBQ1ZNLFNBQVNuQjtvQkFDVG9CLE1BQU0sSUFBdUJILE9BQW5CdEIsV0FBVSxXQUFZLE9BQUhzQjs4QkFHNUJILE9BQU9POzs7Ozs7ZUFQSFAsT0FBT0c7Ozs7O1FBV3BCOzs7Ozs7QUFHTjtHQTVDd0J6Qjs7UUFPUEgsa0RBQVNBOzs7S0FQRkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vVUkvR2VucmVOYXYuanM/ODkzZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2VucmVOYXYoe1xuICBnZW5yZXNEYXRhLFxuICBmZWF0dXJlZERhdGEsXG4gIG1lZGlhVHlwZSxcbiAgZ2VucmVfaWQsXG59KSB7XG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGZ1bmN0aW9uIGZpbmRHZW5yZShlKSB7XG4gIGNvbnNvbGUubG9nKGUudGFyZ2V0LmNsb3Nlc3QoJy5nZW5yZS1uYXYnKS5jaGlsZE5vZGVzLmZvckVhY2goZWFjaCA9PiB7XG4gICAgY29uc29sZS5sb2coZWFjaC5jbGFzc0xpc3QudmFsdWUgPSAnJylcbiAgfSkpXG5cbiAgICBlLnRhcmdldC5jbGFzc0xpc3QudmFsdWUgPSBcImN1cnJlbnRcIjtcbiAgfVxuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHNldEFjdGl2ZSh0cnVlKTtcbiAgfSwgNTApO1xuXG4gIHJldHVybiAoXG4gICAgPHVsXG4gICAgICBjbGFzc05hbWU9e2BnZW5yZS1uYXYgICR7XG4gICAgICAgIGFjdGl2ZSA/IFwiYWN0aXZlXCIgOiBcIlwiXG4gICAgICB9IGZsZXggbXQtWzEyMHB4XSBtYi1bNTBweF0gcHgtWzI1cHhdIGp1c3RpZnktY2VudGVyIGZsZXgtd3JhcGB9XG4gICAgPlxuICAgICAge2dlbnJlc0RhdGEuZ2VucmVzLm1hcCgoZ2VucmVzLCBpbmRleCkgPT4ge1xuICAgICAgICBsZXQgaWQgPSBnZW5yZXMuaWQ7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGxpIGtleT17Z2VucmVzLmlkfT5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpXCJcbiAgICAgICAgICAgICAgb25DbGljaz17ZmluZEdlbnJlfVxuICAgICAgICAgICAgICBocmVmPXtgLyR7bWVkaWFUeXBlfS9nZW5yZS8ke2lkfWB9XG4gICAgICAgICAgICAgIC8vIGNsYXNzTmFtZT17YCR7cm91dGVyLnBhdGhuYW1lID09PSBcIi9cIiA/IFwiYWN0aXZlXCIgOiBcIlwifSBgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Z2VucmVzLm5hbWV9XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvdWw+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTGluayIsInVzZVJvdXRlciIsImdzYXAiLCJ1c2VTdGF0ZSIsIkdlbnJlTmF2IiwiZ2VucmVzRGF0YSIsImZlYXR1cmVkRGF0YSIsIm1lZGlhVHlwZSIsImdlbnJlX2lkIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwicm91dGVyIiwiZmluZEdlbnJlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJjbG9zZXN0IiwiY2hpbGROb2RlcyIsImZvckVhY2giLCJlYWNoIiwiY2xhc3NMaXN0IiwidmFsdWUiLCJzZXRUaW1lb3V0IiwidWwiLCJjbGFzc05hbWUiLCJnZW5yZXMiLCJtYXAiLCJpbmRleCIsImlkIiwibGkiLCJvbkNsaWNrIiwiaHJlZiIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./UI/GenreNav.js\n"));

/***/ })

});