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

/***/ "./UI/SideNav.js":
/*!***********************!*\
  !*** ./UI/SideNav.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SideNav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _HBOProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/HBOProvider */ \"./HBOProvider.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction SideNav() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const globalState = (0,_HBOProvider__WEBPACK_IMPORTED_MODULE_1__.useStateContext)();\n    const { setSideNav , sideNav  } = globalState;\n    const { genre_id  } = router.query;\n    console.log(router);\n    function closeSideNav() {\n        setSideNav(false);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"side-nav \".concat(sideNav ? \"side-nav__active\" : \"\", \" w-[350px]   fixed top-0 left-0 bg-black min-h-screen p-[50px] z-[11] translate-x-[-350px] transition duration-400 ease-in-out \"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"side-nav__close-btn h-[50px] absolute  left-[290px] top-0 w-[50px] text-2xl flex items-center justify-center cursor-pointer\",\n                onClick: closeSideNav,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                    className: \"fas fa-times\"\n                }, void 0, false, {\n                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-full absolute overflow-scroll\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"side-nav__main\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"\",\n                                onClick: closeSideNav,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/\",\n                                    className: \"\".concat(router.pathname === \"/\" ? \"active\" : \"\"),\n                                    children: \"Home\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                onClick: closeSideNav,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/tv\",\n                                    className: \"\".concat(router.asPath.slice(0, 3) === \"/tv\" ? \"active\" : \"\"),\n                                    children: \"Series\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                onClick: closeSideNav,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/movie\",\n                                    className: \"\".concat(router.asPath.slice(0, 6) === \"/movie\" ? \"active\" : \"\"),\n                                    children: \"Movies\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"side-nave__divider w-full bg-[rgb(80,80,80)] h-[2px] my-[20px]\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"side-nav__main w-[250px]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"/movie/genre/28\",\n                                    children: \"Action\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"/movie/genre/16\",\n                                    children: \"Animation\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"/movie/genre/35\",\n                                    children: \"Comedy\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"/movie/genre/80\",\n                                    children: \"Crime\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"/movie/genre/99\",\n                                    children: \"Documentaries\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"/movie/genre/18\",\n                                    children: \"Drama\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"/movie/genre/14\",\n                                    children: \"Fantasy\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                    lineNumber: 85,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                lineNumber: 84,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"/movie/genre/27\",\n                                    children: \"Horror\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                    lineNumber: 88,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                lineNumber: 87,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"/tv/genre/10766\",\n                                    children: \"International\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                    lineNumber: 91,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                lineNumber: 90,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"/movie/genre/10751\",\n                                    children: \"Kids & Family\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                    lineNumber: 94,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                lineNumber: 93,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"/movie/genre/10402\",\n                                    children: \"Music\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                    lineNumber: 98,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"/tv/genre/10763\",\n                                    children: \"News/Talk\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                    lineNumber: 101,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                lineNumber: 100,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"/tv/genre/10764\",\n                                    children: \"Reality\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                    lineNumber: 104,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                lineNumber: 103,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"/movie/genre/10749\",\n                                    children: \"Romance\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                    lineNumber: 107,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                lineNumber: 106,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"/movie/genre/9648\",\n                                    children: \"Suspence\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                    lineNumber: 111,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                lineNumber: 110,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_s(SideNav, \"N4q9F1JTi5HNW9jxLn3sgPLhvdA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _HBOProvider__WEBPACK_IMPORTED_MODULE_1__.useStateContext\n    ];\n});\n_c = SideNav;\nvar _c;\n$RefreshReg$(_c, \"SideNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7OzswQ0FFNUIsOERBQUNEO2dDQUFHSixXQUFVOzBDQUNaLDRFQUFDUztvQ0FBRUosTUFBSzs4Q0FBcUI7Ozs7Ozs7Ozs7OzBDQUcvQiw4REFBQ0Q7Z0NBQUdKLFdBQVU7MENBQ1osNEVBQUNTO29DQUFFSixNQUFLOzhDQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNeEM7R0FoSHdCaEI7O1FBQ1BELGtEQUFTQTtRQUNKRix5REFBZUE7OztLQUZiRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9VSS9TaWRlTmF2LmpzPzk3M2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGVDb250ZXh0IH0gZnJvbSBcIkAvSEJPUHJvdmlkZXJcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWRlTmF2KCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgZ2xvYmFsU3RhdGUgPSB1c2VTdGF0ZUNvbnRleHQoKTtcbiAgY29uc3QgeyBzZXRTaWRlTmF2LCBzaWRlTmF2IH0gPSBnbG9iYWxTdGF0ZTtcblxuICBjb25zdCB7Z2VucmVfaWR9ID0gcm91dGVyLnF1ZXJ5XG5cbmNvbnNvbGUubG9nKHJvdXRlcilcblxuICBmdW5jdGlvbiBjbG9zZVNpZGVOYXYoKSB7XG4gICAgc2V0U2lkZU5hdihmYWxzZSk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2BzaWRlLW5hdiAke1xuICAgICAgICBzaWRlTmF2ID8gXCJzaWRlLW5hdl9fYWN0aXZlXCIgOiBcIlwiXG4gICAgICB9IHctWzM1MHB4XSAgIGZpeGVkIHRvcC0wIGxlZnQtMCBiZy1ibGFjayBtaW4taC1zY3JlZW4gcC1bNTBweF0gei1bMTFdIHRyYW5zbGF0ZS14LVstMzUwcHhdIHRyYW5zaXRpb24gZHVyYXRpb24tNDAwIGVhc2UtaW4tb3V0IGB9XG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJzaWRlLW5hdl9fY2xvc2UtYnRuIGgtWzUwcHhdIGFic29sdXRlICBsZWZ0LVsyOTBweF0gdG9wLTAgdy1bNTBweF0gdGV4dC0yeGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICBvbkNsaWNrPXtjbG9zZVNpZGVOYXZ9XG4gICAgICA+XG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10aW1lc1wiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIGFic29sdXRlIG92ZXJmbG93LXNjcm9sbFwiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwic2lkZS1uYXZfX21haW5cIj5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiXCIgb25DbGljaz17Y2xvc2VTaWRlTmF2fT5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIGhyZWY9XCIvXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtyb3V0ZXIucGF0aG5hbWUgPT09IFwiL1wiID8gXCJhY3RpdmVcIiA6IFwiXCJ9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgSG9tZVxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpICBvbkNsaWNrPXtjbG9zZVNpZGVOYXZ9PlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgaHJlZj1cIi90dlwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgICAgICAgICAgcm91dGVyLmFzUGF0aC5zbGljZSgwLCAzKSA9PT0gXCIvdHZcIiA/IFwiYWN0aXZlXCIgOiBcIlwiXG4gICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTZXJpZXNcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSAgb25DbGljaz17Y2xvc2VTaWRlTmF2fT5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIGhyZWY9XCIvbW92aWVcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICAgICAgICAgIHJvdXRlci5hc1BhdGguc2xpY2UoMCwgNikgPT09IFwiL21vdmllXCIgPyBcImFjdGl2ZVwiIDogXCJcIlxuICAgICAgICAgICAgICB9YH1cblxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBNb3ZpZXNcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgXG4gICAgICAgIDwvdWw+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlLW5hdmVfX2RpdmlkZXIgdy1mdWxsIGJnLVtyZ2IoODAsODAsODApXSBoLVsycHhdIG15LVsyMHB4XVwiIC8+XG5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNpZGUtbmF2X19tYWluIHctWzI1MHB4XVwiPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIvbW92aWUvZ2VucmUvMjhcIj5BY3Rpb248L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICA8YSBocmVmPXtgL21vdmllL2dlbnJlLzE2YH0+QW5pbWF0aW9uPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIi9tb3ZpZS9nZW5yZS8zNVwiPkNvbWVkeTwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIvbW92aWUvZ2VucmUvODBcIj5DcmltZTwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIvbW92aWUvZ2VucmUvOTlcIj5Eb2N1bWVudGFyaWVzPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIi9tb3ZpZS9nZW5yZS8xOFwiPkRyYW1hPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIi9tb3ZpZS9nZW5yZS8xNFwiPkZhbnRhc3k8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiL21vdmllL2dlbnJlLzI3XCI+SG9ycm9yPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIi90di9nZW5yZS8xMDc2NlwiPkludGVybmF0aW9uYWw8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiL21vdmllL2dlbnJlLzEwNzUxXCI+S2lkcyAmIEZhbWlseTwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIi9tb3ZpZS9nZW5yZS8xMDQwMlwiPk11c2ljPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIi90di9nZW5yZS8xMDc2M1wiPk5ld3MvVGFsazwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIvdHYvZ2VucmUvMTA3NjRcIj5SZWFsaXR5PC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIi9tb3ZpZS9nZW5yZS8xMDc0OVwiPlJvbWFuY2U8L2E+XG4gICAgICAgICAgPC9saT5cbiAgXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIi9tb3ZpZS9nZW5yZS85NjQ4XCI+U3VzcGVuY2U8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlQ29udGV4dCIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJTaWRlTmF2Iiwicm91dGVyIiwiZ2xvYmFsU3RhdGUiLCJzZXRTaWRlTmF2Iiwic2lkZU5hdiIsImdlbnJlX2lkIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwiY2xvc2VTaWRlTmF2IiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsImkiLCJ1bCIsImxpIiwiaHJlZiIsInBhdGhuYW1lIiwiYXNQYXRoIiwic2xpY2UiLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./UI/SideNav.js\n"));

/***/ })

});