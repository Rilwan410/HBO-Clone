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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GenreNav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction GenreNav(param) {\n    let { genresData , featuredData , mediaType , genre_id  } = param;\n    _s();\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    console.log(mediaType);\n    console.log(genresData);\n    console.log(featuredData);\n    function findGenre(e) {\n        let correctGenre;\n        // console.log(e.target.innerText)\n        genresData.genres.find((genre)=>{\n            correctGenre = genre.name === e.target.innerText;\n            return genresData.genres.filter((item)=>{\n                console.log();\n                return item.name === correctGenre;\n            });\n        });\n        // genresData.filter(item => {\n        //   console.log(item.genre.name === correctGenre)\n        //   item.genre.name === correctGenre\n        // })\n        console.log(correctGenre);\n    }\n    setTimeout(()=>{\n        setActive(true);\n    }, 50);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: \"genre-nav  \".concat(active ? \"active\" : \"\", \" flex mt-[120px] mb-[50px] px-[25px] justify-center flex-wrap\"),\n        children: genresData.genres.map((genres)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    onClick: findGenre,\n                    href: \"/\",\n                    className: \"\".concat(router.pathname === \"/\" ? \"active\" : \"\", \" \"),\n                    children: genres.name\n                }, void 0, false, {\n                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/GenreNav.js\",\n                    lineNumber: 49,\n                    columnNumber: 13\n                }, this)\n            }, genres.id, false, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/GenreNav.js\",\n                lineNumber: 48,\n                columnNumber: 11\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/GenreNav.js\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_s(GenreNav, \"c8LLMscGuM1hB5tKl6q8aVkKW9A=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = GenreNav;\nvar _c;\n$RefreshReg$(_c, \"GenreNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9VSS9HZW5yZU5hdi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNXO0FBQ1o7QUFDSztBQUVsQixTQUFTSSxTQUFTLEtBS2hDO1FBTGdDLEVBQy9CQyxXQUFVLEVBQ1ZDLGFBQVksRUFDWkMsVUFBUyxFQUNUQyxTQUFRLEVBQ1QsR0FMZ0M7O0lBTS9CLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNUSxTQUFTVixzREFBU0E7SUFDeEJXLFFBQVFDLElBQUlOO0lBQ1pLLFFBQVFDLElBQUlSO0lBQ1pPLFFBQVFDLElBQUlQO0lBRVosU0FBU1EsVUFBVUMsQ0FBQztRQUNsQixJQUFJQztRQUNKLGtDQUFrQztRQUNsQ1gsV0FBV1ksT0FBT0MsS0FBSyxDQUFDQztZQUN0QkgsZUFBZUcsTUFBTUMsU0FBU0wsRUFBRU0sT0FBT0M7WUFDdkMsT0FBT2pCLFdBQVdZLE9BQU9NLE9BQU9DLENBQUFBO2dCQUM5QlosUUFBUUM7Z0JBQ1IsT0FBT1csS0FBS0osU0FBU0o7WUFDdkI7UUFDRjtRQUVBLDhCQUE4QjtRQUM5QixrREFBa0Q7UUFDbEQscUNBQXFDO1FBQ3JDLEtBQUs7UUFDTEosUUFBUUMsSUFBSUc7SUFDZDtJQUVBUyxXQUFXO1FBQ1RmLFVBQVU7SUFDWixHQUFHO0lBRUgscUJBQ0UsOERBQUNnQjtRQUNDQyxXQUFXLGNBRVYsT0FEQ2xCLFNBQVMsV0FBVyxJQUNyQjtrQkFFQUosV0FBV1ksT0FBT1csSUFBSSxDQUFDWDtZQUN0QixxQkFDRSw4REFBQ1k7MEJBQ0MsNEVBQUM3QixrREFBSUE7b0JBQ0g4QixTQUFTaEI7b0JBQ1RpQixNQUFPO29CQUNQSixXQUFXLEdBQTJDLE9BQXhDaEIsT0FBT3FCLGFBQWEsTUFBTSxXQUFXLElBQUc7OEJBRXJEZixPQUFPRzs7Ozs7O2VBTkhILE9BQU9nQjs7Ozs7UUFXcEI7Ozs7OztBQUdOO0dBeER3QjdCOztRQU9QSCxrREFBU0E7OztLQVBGRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9VSS9HZW5yZU5hdi5qcz84OTNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHZW5yZU5hdih7XG4gIGdlbnJlc0RhdGEsXG4gIGZlYXR1cmVkRGF0YSxcbiAgbWVkaWFUeXBlLFxuICBnZW5yZV9pZCxcbn0pIHtcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnNvbGUubG9nKG1lZGlhVHlwZSk7XG4gIGNvbnNvbGUubG9nKGdlbnJlc0RhdGEpO1xuICBjb25zb2xlLmxvZyhmZWF0dXJlZERhdGEpO1xuXG4gIGZ1bmN0aW9uIGZpbmRHZW5yZShlKSB7XG4gICAgbGV0IGNvcnJlY3RHZW5yZTtcbiAgICAvLyBjb25zb2xlLmxvZyhlLnRhcmdldC5pbm5lclRleHQpXG4gICAgZ2VucmVzRGF0YS5nZW5yZXMuZmluZCgoZ2VucmUpID0+IHtcbiAgICAgIGNvcnJlY3RHZW5yZSA9IGdlbnJlLm5hbWUgPT09IGUudGFyZ2V0LmlubmVyVGV4dDtcbiAgICAgIHJldHVybiBnZW5yZXNEYXRhLmdlbnJlcy5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKClcbiAgICAgICAgcmV0dXJuIGl0ZW0ubmFtZSA9PT0gY29ycmVjdEdlbnJlXG4gICAgICB9KVxuICAgIH0pO1xuXG4gICAgLy8gZ2VucmVzRGF0YS5maWx0ZXIoaXRlbSA9PiB7XG4gICAgLy8gICBjb25zb2xlLmxvZyhpdGVtLmdlbnJlLm5hbWUgPT09IGNvcnJlY3RHZW5yZSlcbiAgICAvLyAgIGl0ZW0uZ2VucmUubmFtZSA9PT0gY29ycmVjdEdlbnJlXG4gICAgLy8gfSlcbiAgICBjb25zb2xlLmxvZyhjb3JyZWN0R2VucmUpO1xuICB9XG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgc2V0QWN0aXZlKHRydWUpO1xuICB9LCA1MCk7XG5cbiAgcmV0dXJuIChcbiAgICA8dWxcbiAgICAgIGNsYXNzTmFtZT17YGdlbnJlLW5hdiAgJHtcbiAgICAgICAgYWN0aXZlID8gXCJhY3RpdmVcIiA6IFwiXCJcbiAgICAgIH0gZmxleCBtdC1bMTIwcHhdIG1iLVs1MHB4XSBweC1bMjVweF0ganVzdGlmeS1jZW50ZXIgZmxleC13cmFwYH1cbiAgICA+XG4gICAgICB7Z2VucmVzRGF0YS5nZW5yZXMubWFwKChnZW5yZXMpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8bGkga2V5PXtnZW5yZXMuaWR9PlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgb25DbGljaz17ZmluZEdlbnJlfVxuICAgICAgICAgICAgICBocmVmPXtgL2B9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cm91dGVyLnBhdGhuYW1lID09PSBcIi9cIiA/IFwiYWN0aXZlXCIgOiBcIlwifSBgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Z2VucmVzLm5hbWV9XG4gICAgICAgICAgICAgIHsvKiAke21lZGlhVHlwZX0vZ2VucmUvJHtnZW5yZV9pZH0gKi99XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvdWw+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTGluayIsInVzZVJvdXRlciIsImdzYXAiLCJ1c2VTdGF0ZSIsIkdlbnJlTmF2IiwiZ2VucmVzRGF0YSIsImZlYXR1cmVkRGF0YSIsIm1lZGlhVHlwZSIsImdlbnJlX2lkIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwicm91dGVyIiwiY29uc29sZSIsImxvZyIsImZpbmRHZW5yZSIsImUiLCJjb3JyZWN0R2VucmUiLCJnZW5yZXMiLCJmaW5kIiwiZ2VucmUiLCJuYW1lIiwidGFyZ2V0IiwiaW5uZXJUZXh0IiwiZmlsdGVyIiwiaXRlbSIsInNldFRpbWVvdXQiLCJ1bCIsImNsYXNzTmFtZSIsIm1hcCIsImxpIiwib25DbGljayIsImhyZWYiLCJwYXRobmFtZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./UI/GenreNav.js\n"));

/***/ })

});