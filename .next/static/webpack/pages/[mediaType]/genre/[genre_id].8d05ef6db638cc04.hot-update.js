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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SideNav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _HBOProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/HBOProvider */ \"./HBOProvider.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction SideNav() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const globalState = (0,_HBOProvider__WEBPACK_IMPORTED_MODULE_1__.useStateContext)();\n    const { setSideNav , sideNav  } = globalState;\n    let { genre_id: id  } = router.query;\n    console.log(id);\n    function closeSideNav() {\n        setSideNav(false);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"side-nav \".concat(sideNav ? \"side-nav__active\" : \"\", \" w-[350px]   fixed top-0 left-0 bg-black min-h-screen p-[50px] z-[11] translate-x-[-350px] transition duration-400 ease-in-out \"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"side-nav__close-btn h-[50px] absolute  left-[290px] top-0 w-[50px] text-2xl flex items-center justify-center cursor-pointer\",\n                onClick: closeSideNav,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                    className: \"fas fa-times\"\n                }, void 0, false, {\n                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-full absolute overflow-scroll\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"side-nav__main\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"\",\n                                onClick: closeSideNav,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/\",\n                                    className: \"\".concat(router.pathname === \"/\" ? \"active\" : \"\"),\n                                    children: \"Home\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                onClick: closeSideNav,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/tv\",\n                                    className: \"\".concat(router.asPath.slice(0, 3) === \"/tv\" ? \"active\" : \"\"),\n                                    children: \"Series\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                onClick: closeSideNav,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/movie\",\n                                    className: \"\".concat(router.asPath.slice(0, 6) === \"/movie\" ? \"active\" : \"\"),\n                                    children: \"Movies\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"side-nave__divider w-full bg-[rgb(80,80,80)] h-[2px] my-[20px]\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"side-nav__main w-[250px]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"/movie/genre/28\",\n                                    className: \"\".concat(id == 28 ? \"active\" : \"\"),\n                                    children: \"Action\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"/movie/genre/16\",\n                                    className: \"\".concat(id == 16 ? \"active\" : \"\"),\n                                    children: \"Animation\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"/movie/genre/35\",\n                                    className: \"\".concat(id == 35 ? \"active\" : \"\"),\n                                    children: \"Comedy\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"/movie/genre/80\",\n                                    className: \"\".concat(id == 80 ? \"active\" : \"\"),\n                                    children: \"Crime\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"/movie/genre/99\",\n                                    className: \"\".concat(id == 99 ? \"active\" : \"\"),\n                                    children: \"Documentaries\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"/movie/genre/18\",\n                                    className: \"\".concat(id == 18 ? \"active\" : \"\"),\n                                    children: \"Drama\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"/movie/genre/14\",\n                                    className: \"\".concat(id == 14 ? \"active\" : \"\"),\n                                    children: \"Fantasy\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                    lineNumber: 85,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                lineNumber: 84,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"/movie/genre/27\",\n                                    className: \"\".concat(id == 27 ? \"active\" : \"\"),\n                                    children: \"Horror\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                    lineNumber: 88,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                lineNumber: 87,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"/tv/genre/10766\",\n                                    className: \"\".concat(id == 9648 ? \"active\" : \"\"),\n                                    children: \"International\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                    lineNumber: 91,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                lineNumber: 90,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"/movie/genre/10751\",\n                                    className: \"\".concat(id == 9648 ? \"active\" : \"\"),\n                                    children: \"Kids & Family\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                    lineNumber: 94,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                lineNumber: 93,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"/movie/genre/10402\",\n                                    className: \"\".concat(id == 9648 ? \"active\" : \"\"),\n                                    children: \"Music\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                    lineNumber: 98,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"/tv/genre/10763\",\n                                    className: \"\".concat(id == 9648 ? \"active\" : \"\"),\n                                    children: \"News/Talk\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                    lineNumber: 101,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                lineNumber: 100,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"/tv/genre/10764\",\n                                    className: \"\".concat(id == 9648 ? \"active\" : \"\"),\n                                    children: \"Reality\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                    lineNumber: 104,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                lineNumber: 103,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"/movie/genre/10749\",\n                                    className: \"\".concat(id == 10749 ? \"active\" : \"\"),\n                                    children: \"Romance\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                    lineNumber: 107,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                lineNumber: 106,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"/movie/genre/9648\",\n                                    className: \"\".concat(id == 9648 ? \"active\" : \"\"),\n                                    children: \"Suspence\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                    lineNumber: 111,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                                lineNumber: 110,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/SideNav.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_s(SideNav, \"N4q9F1JTi5HNW9jxLn3sgPLhvdA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _HBOProvider__WEBPACK_IMPORTED_MODULE_1__.useStateContext\n    ];\n});\n_c = SideNav;\nvar _c;\n$RefreshReg$(_c, \"SideNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RXJFLDhEQUFDVTtnQ0FBR0osV0FBVTswQ0FDWiw0RUFBQ1M7b0NBQUVKLE1BQUs7b0NBQWtCTCxXQUFXLEdBQTZCLE9BQTFCTixNQUFNLE9BQU8sV0FBVTs4Q0FBTTs7Ozs7Ozs7Ozs7MENBRXZFLDhEQUFDVTtnQ0FBR0osV0FBVTswQ0FDWiw0RUFBQ1M7b0NBQUVKLE1BQUs7b0NBQXFCTCxXQUFXLEdBQTZCLE9BQTFCTixNQUFNLE9BQU8sV0FBVTs4Q0FBTTs7Ozs7Ozs7Ozs7MENBRzFFLDhEQUFDVTtnQ0FBR0osV0FBVTswQ0FDWiw0RUFBQ1M7b0NBQUVKLE1BQUs7b0NBQXFCTCxXQUFXLEdBQTZCLE9BQTFCTixNQUFNLE9BQU8sV0FBVTs4Q0FBTTs7Ozs7Ozs7Ozs7MENBRTFFLDhEQUFDVTtnQ0FBR0osV0FBVTswQ0FDWiw0RUFBQ1M7b0NBQUVKLE1BQUs7b0NBQWlCTCxXQUFXLEdBQTZCLE9BQTFCTixNQUFNLE9BQU8sV0FBVTs4Q0FBTTs7Ozs7Ozs7Ozs7MENBRXRFLDhEQUFDVTtnQ0FBR0osV0FBVTswQ0FDWiw0RUFBQ1M7b0NBQUVKLE1BQUs7b0NBQWtCTCxXQUFXLEdBQTZCLE9BQTFCTixNQUFNLE9BQU8sV0FBVTs4Q0FBTTs7Ozs7Ozs7Ozs7MENBRXZFLDhEQUFDVTswQ0FDQyw0RUFBQ0s7b0NBQUVKLE1BQUs7b0NBQXFCTCxXQUFXLEdBQThCLE9BQTNCTixNQUFNLFFBQVEsV0FBVTs4Q0FBTTs7Ozs7Ozs7Ozs7MENBRzNFLDhEQUFDVTtnQ0FBR0osV0FBVTswQ0FDWiw0RUFBQ1M7b0NBQUVKLE1BQUs7b0NBQW9CTCxXQUFXLEdBQTZCLE9BQTFCTixNQUFNLE9BQU8sV0FBVTs4Q0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNcEY7R0FoSHdCTjs7UUFDUEQsa0RBQVNBO1FBQ0pGLHlEQUFlQTs7O0tBRmJHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL1VJL1NpZGVOYXYuanM/OTczZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZUNvbnRleHQgfSBmcm9tIFwiQC9IQk9Qcm92aWRlclwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZGVOYXYoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBnbG9iYWxTdGF0ZSA9IHVzZVN0YXRlQ29udGV4dCgpO1xuICBjb25zdCB7IHNldFNpZGVOYXYsIHNpZGVOYXYgfSA9IGdsb2JhbFN0YXRlO1xuXG4gIGxldCB7Z2VucmVfaWQ6aWR9ID0gcm91dGVyLnF1ZXJ5XG5cbmNvbnNvbGUubG9nKGlkKVxuXG4gIGZ1bmN0aW9uIGNsb3NlU2lkZU5hdigpIHtcbiAgICBzZXRTaWRlTmF2KGZhbHNlKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YHNpZGUtbmF2ICR7XG4gICAgICAgIHNpZGVOYXYgPyBcInNpZGUtbmF2X19hY3RpdmVcIiA6IFwiXCJcbiAgICAgIH0gdy1bMzUwcHhdICAgZml4ZWQgdG9wLTAgbGVmdC0wIGJnLWJsYWNrIG1pbi1oLXNjcmVlbiBwLVs1MHB4XSB6LVsxMV0gdHJhbnNsYXRlLXgtWy0zNTBweF0gdHJhbnNpdGlvbiBkdXJhdGlvbi00MDAgZWFzZS1pbi1vdXQgYH1cbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cInNpZGUtbmF2X19jbG9zZS1idG4gaC1bNTBweF0gYWJzb2x1dGUgIGxlZnQtWzI5MHB4XSB0b3AtMCB3LVs1MHB4XSB0ZXh0LTJ4bCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgIG9uQ2xpY2s9e2Nsb3NlU2lkZU5hdn1cbiAgICAgID5cbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRpbWVzXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgYWJzb2x1dGUgb3ZlcmZsb3ctc2Nyb2xsXCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJzaWRlLW5hdl9fbWFpblwiPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJcIiBvbkNsaWNrPXtjbG9zZVNpZGVOYXZ9PlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgaHJlZj1cIi9cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3JvdXRlci5wYXRobmFtZSA9PT0gXCIvXCIgPyBcImFjdGl2ZVwiIDogXCJcIn1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgIG9uQ2xpY2s9e2Nsb3NlU2lkZU5hdn0+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBocmVmPVwiL3R2XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgICAgICAgICByb3V0ZXIuYXNQYXRoLnNsaWNlKDAsIDMpID09PSBcIi90dlwiID8gXCJhY3RpdmVcIiA6IFwiXCJcbiAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFNlcmllc1xuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpICBvbkNsaWNrPXtjbG9zZVNpZGVOYXZ9PlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgaHJlZj1cIi9tb3ZpZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgICAgICAgICAgcm91dGVyLmFzUGF0aC5zbGljZSgwLCA2KSA9PT0gXCIvbW92aWVcIiA/IFwiYWN0aXZlXCIgOiBcIlwiXG4gICAgICAgICAgICAgIH1gfVxuXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIE1vdmllc1xuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICBcbiAgICAgICAgPC91bD5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGUtbmF2ZV9fZGl2aWRlciB3LWZ1bGwgYmctW3JnYig4MCw4MCw4MCldIGgtWzJweF0gbXktWzIwcHhdXCIgLz5cblxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwic2lkZS1uYXZfX21haW4gdy1bMjUwcHhdXCI+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIi9tb3ZpZS9nZW5yZS8yOFwiIGNsYXNzTmFtZT17YCR7aWQgPT0gMjggPyBcImFjdGl2ZVwiIDonJ31gfT5BY3Rpb248L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICA8YSBocmVmPXtgL21vdmllL2dlbnJlLzE2YH1jbGFzc05hbWU9e2Ake2lkID09IDE2ID8gXCJhY3RpdmVcIiA6Jyd9YH0+QW5pbWF0aW9uPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIi9tb3ZpZS9nZW5yZS8zNVwiY2xhc3NOYW1lPXtgJHtpZCA9PSAzNSA/IFwiYWN0aXZlXCIgOicnfWB9PkNvbWVkeTwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIvbW92aWUvZ2VucmUvODBcImNsYXNzTmFtZT17YCR7aWQgPT0gODAgPyBcImFjdGl2ZVwiIDonJ31gfT5DcmltZTwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIvbW92aWUvZ2VucmUvOTlcIiBjbGFzc05hbWU9e2Ake2lkID09IDk5ID8gXCJhY3RpdmVcIiA6Jyd9YH0+RG9jdW1lbnRhcmllczwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIvbW92aWUvZ2VucmUvMThcIiBjbGFzc05hbWU9e2Ake2lkID09IDE4ID8gXCJhY3RpdmVcIiA6Jyd9YH0+RHJhbWE8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiL21vdmllL2dlbnJlLzE0XCIgY2xhc3NOYW1lPXtgJHtpZCA9PSAxNCA/IFwiYWN0aXZlXCIgOicnfWB9PkZhbnRhc3k8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiL21vdmllL2dlbnJlLzI3XCIgY2xhc3NOYW1lPXtgJHtpZCA9PSAyNyA/IFwiYWN0aXZlXCIgOicnfWB9PkhvcnJvcjwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIvdHYvZ2VucmUvMTA3NjZcIiBjbGFzc05hbWU9e2Ake2lkID09IDk2NDggPyBcImFjdGl2ZVwiIDonJ31gfT5JbnRlcm5hdGlvbmFsPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIi9tb3ZpZS9nZW5yZS8xMDc1MVwiIGNsYXNzTmFtZT17YCR7aWQgPT0gOTY0OCA/IFwiYWN0aXZlXCIgOicnfWB9PktpZHMgJiBGYW1pbHk8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgIFxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIvbW92aWUvZ2VucmUvMTA0MDJcIiBjbGFzc05hbWU9e2Ake2lkID09IDk2NDggPyBcImFjdGl2ZVwiIDonJ31gfT5NdXNpYzwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIvdHYvZ2VucmUvMTA3NjNcImNsYXNzTmFtZT17YCR7aWQgPT0gOTY0OCA/IFwiYWN0aXZlXCIgOicnfWB9Pk5ld3MvVGFsazwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIvdHYvZ2VucmUvMTA3NjRcIiBjbGFzc05hbWU9e2Ake2lkID09IDk2NDggPyBcImFjdGl2ZVwiIDonJ31gfT5SZWFsaXR5PC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpID5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIvbW92aWUvZ2VucmUvMTA3NDlcIiBjbGFzc05hbWU9e2Ake2lkID09IDEwNzQ5ID8gXCJhY3RpdmVcIiA6Jyd9YH0+Um9tYW5jZTwvYT5cbiAgICAgICAgICA8L2xpPlxuICBcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiL21vdmllL2dlbnJlLzk2NDhcIiBjbGFzc05hbWU9e2Ake2lkID09IDk2NDggPyBcImFjdGl2ZVwiIDonJ31gfSA+U3VzcGVuY2U8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlQ29udGV4dCIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJTaWRlTmF2Iiwicm91dGVyIiwiZ2xvYmFsU3RhdGUiLCJzZXRTaWRlTmF2Iiwic2lkZU5hdiIsImdlbnJlX2lkIiwiaWQiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJjbG9zZVNpZGVOYXYiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiaSIsInVsIiwibGkiLCJocmVmIiwicGF0aG5hbWUiLCJhc1BhdGgiLCJzbGljZSIsImEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./UI/SideNav.js\n"));

/***/ })

});