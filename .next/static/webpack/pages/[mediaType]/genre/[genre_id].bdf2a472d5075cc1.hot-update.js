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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GenreNav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction GenreNav(param) {\n    let { genresData , featuredData , mediaType , genre_id  } = param;\n    _s();\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    console.log(mediaType);\n    console.log(genresData);\n    console.log(featuredData);\n    function findGenre(e) {\n        let correctGenre;\n        // console.log(e.target.innerText)\n        genresData.genres.find((genre)=>{\n            correctGenre = genre.name === e.target.innerText;\n            // return genre.name === e.target.innerText\n            genresData.filter();\n        });\n        console.log(correctGenre);\n    }\n    setTimeout(()=>{\n        setActive(true);\n    }, 50);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: \"genre-nav  \".concat(active ? \"active\" : \"\", \" flex mt-[120px] mb-[50px] px-[25px] justify-center flex-wrap\"),\n        children: genresData.genres.map((genres)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    onClick: findGenre,\n                    href: \"\",\n                    className: \"\".concat(router.pathname === \"/\" ? \"active\" : \"\", \" \"),\n                    children: genres.name\n                }, void 0, false, {\n                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/GenreNav.js\",\n                    lineNumber: 36,\n                    columnNumber: 13\n                }, this)\n            }, genres.id, false, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/GenreNav.js\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/GenreNav.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(GenreNav, \"c8LLMscGuM1hB5tKl6q8aVkKW9A=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = GenreNav;\nvar _c;\n$RefreshReg$(_c, \"GenreNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9VSS9HZW5yZU5hdi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNZO0FBQ2I7QUFDSztBQUlsQixTQUFTSSxTQUFTLEtBQStDO1FBQS9DLEVBQUNDLFdBQVUsRUFBRUMsYUFBWSxFQUFFQyxVQUFTLEVBQUVDLFNBQVEsRUFBQyxHQUEvQzs7SUFDakMsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU1RLFNBQVNWLHNEQUFTQTtJQUMxQlcsUUFBUUMsSUFBSU47SUFDWkssUUFBUUMsSUFBSVI7SUFDWk8sUUFBUUMsSUFBSVA7SUFFWixTQUFTUSxVQUFVQyxDQUFDO1FBQ2xCLElBQUlDO1FBQ0osa0NBQWtDO1FBRWxDWCxXQUFXWSxPQUFPQyxLQUFLQyxDQUFBQTtZQUNyQkgsZUFBZUcsTUFBTUMsU0FBU0wsRUFBRU0sT0FBT0M7WUFDdkMsMkNBQTJDO1lBQzNDakIsV0FBV2tCO1FBQ2I7UUFDRlgsUUFBUUMsSUFBSUc7SUFDWjtJQUVFUSxXQUFXO1FBQ1RkLFVBQVU7SUFDWixHQUFFO0lBRUYscUJBQ0UsOERBQUNlO1FBQUdDLFdBQVcsY0FBcUMsT0FBdkJqQixTQUFTLFdBQVcsSUFBRztrQkFDbERKLFdBQVdZLE9BQU9VLElBQUlWLENBQUFBO1lBQ3BCLHFCQUNJLDhEQUFDVzswQkFDRCw0RUFBQzVCLGtEQUFJQTtvQkFBRTZCLFNBQVdmO29CQUFXZ0IsTUFBTztvQkFBR0osV0FBVyxHQUEyQyxPQUF4Q2YsT0FBT29CLGFBQWEsTUFBTSxXQUFXLElBQUc7OEJBQzFGZCxPQUFPRzs7Ozs7O2VBRkNILE9BQU9lOzs7OztRQU8xQjs7Ozs7O0FBR0o7R0FyQ3dCNUI7O1FBRVBILGtEQUFTQTs7O0tBRkZHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL1VJL0dlbnJlTmF2LmpzPzg5M2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyLCB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2VucmVOYXYoe2dlbnJlc0RhdGEsIGZlYXR1cmVkRGF0YSwgbWVkaWFUeXBlLCBnZW5yZV9pZH0pIHtcbmNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5jb25zb2xlLmxvZyhtZWRpYVR5cGUpXG5jb25zb2xlLmxvZyhnZW5yZXNEYXRhKVxuY29uc29sZS5sb2coZmVhdHVyZWREYXRhKVxuXG5mdW5jdGlvbiBmaW5kR2VucmUoZSl7XG4gIGxldCBjb3JyZWN0R2VucmVcbiAgLy8gY29uc29sZS5sb2coZS50YXJnZXQuaW5uZXJUZXh0KVxuXG4gIGdlbnJlc0RhdGEuZ2VucmVzLmZpbmQoZ2VucmUgPT4ge1xuICAgIGNvcnJlY3RHZW5yZSA9IGdlbnJlLm5hbWUgPT09IGUudGFyZ2V0LmlubmVyVGV4dFxuICAgIC8vIHJldHVybiBnZW5yZS5uYW1lID09PSBlLnRhcmdldC5pbm5lclRleHRcbiAgICBnZW5yZXNEYXRhLmZpbHRlcigpXG4gIH0pXG5jb25zb2xlLmxvZyhjb3JyZWN0R2VucmUpXG59XG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgc2V0QWN0aXZlKHRydWUpXG4gIH0sNTApXG5cbiAgcmV0dXJuIChcbiAgICA8dWwgY2xhc3NOYW1lPXtgZ2VucmUtbmF2ICAke2FjdGl2ZSA/IFwiYWN0aXZlXCIgOiAnJ30gZmxleCBtdC1bMTIwcHhdIG1iLVs1MHB4XSBweC1bMjVweF0ganVzdGlmeS1jZW50ZXIgZmxleC13cmFwYH0+XG4gICAgeyBnZW5yZXNEYXRhLmdlbnJlcy5tYXAoZ2VucmVzID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaSBrZXkgPSB7Z2VucmVzLmlkfT5cbiAgICAgICAgICAgIDxMaW5rICBvbkNsaWNrID0ge2ZpbmRHZW5yZX0gaHJlZj17YGB9IGNsYXNzTmFtZT17YCR7cm91dGVyLnBhdGhuYW1lID09PSBcIi9cIiA/IFwiYWN0aXZlXCIgOiBcIlwifSBgfT5cbiAgICAgICAgICAgICAge2dlbnJlcy5uYW1lfVxuICAgICAgICAgICAgICB7LyogJHttZWRpYVR5cGV9L2dlbnJlLyR7Z2VucmVfaWR9ICovfVxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIClcbiAgICB9KX1cbiAgICA8L3VsPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VSb3V0ZXIiLCJnc2FwIiwidXNlU3RhdGUiLCJHZW5yZU5hdiIsImdlbnJlc0RhdGEiLCJmZWF0dXJlZERhdGEiLCJtZWRpYVR5cGUiLCJnZW5yZV9pZCIsImFjdGl2ZSIsInNldEFjdGl2ZSIsInJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJmaW5kR2VucmUiLCJlIiwiY29ycmVjdEdlbnJlIiwiZ2VucmVzIiwiZmluZCIsImdlbnJlIiwibmFtZSIsInRhcmdldCIsImlubmVyVGV4dCIsImZpbHRlciIsInNldFRpbWVvdXQiLCJ1bCIsImNsYXNzTmFtZSIsIm1hcCIsImxpIiwib25DbGljayIsImhyZWYiLCJwYXRobmFtZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./UI/GenreNav.js\n"));

/***/ })

});