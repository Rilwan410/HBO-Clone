"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[mediaType]/[id]",{

/***/ "./UI/Account.js":
/*!***********************!*\
  !*** ./UI/Account.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Account; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _HBOProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/HBOProvider */ \"./HBOProvider.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Account() {\n    _s();\n    const globalState = (0,_HBOProvider__WEBPACK_IMPORTED_MODULE_1__.useStateContext)();\n    const { accountOpen , setAccountOpen , watchlist , removeFromList  } = globalState;\n    function showWatchList() {\n        if (watchlist != null) {\n            return watchlist.map((video, index)=>{\n                console.log(video);\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"account__watch-watch-video relative w-[220px] h-[220px] mr-[20px] rounded-[6px] overflow-hidden\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: video.img,\n                            className: \"w-[220px] h-[220px] rounded-[6px] \"\n                        }, void 0, false, {\n                            fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                            lineNumber: 18,\n                            columnNumber: 7\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"account__watch-overlay absolute top-0 left-0 bg-[linear-gradient(328deg,rgba(94,158,255,1)0%,rgba(119,30,135,1)100%,rgba(60,38,135,1)100%,rgba(60,38,184,1)100%,rgba(0,0,0,1)100%)] w-full h-full transition-opacity duration-[.4s] ease-in-out flex justify-center items-center opacity-0 hover:opacity-90\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"account__watch-buttons flex gap-[15px] \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/\".concat(video.genre ? video.genre : \"movie\", \"/\").concat(video.id),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"account__watch-circle cursor-pointer w-[50px] h-[50px] rounded-[50%] border-white border-[3px] flex justify-center items-center \",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                className: \"fas fa-play\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                                                lineNumber: 23,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                                            lineNumber: 22,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                                        lineNumber: 21,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"account__watch-circle cursor-pointer w-[50px] h-[50px] rounded-[50%] border-white border-[3px] flex justify-center items-center \",\n                                        onClick: ()=>removeFromList(video.id),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                            className: \"fas fa-times\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                                            lineNumber: 27,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                                        lineNumber: 26,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                                lineNumber: 20,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                            lineNumber: 19,\n                            columnNumber: 7\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                    lineNumber: 17,\n                    columnNumber: 7\n                }, this);\n            });\n        }\n    }\n    return(// account--active\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"account absolute \".concat(accountOpen ? \"account--active\" : \"\", \" top-0 right-0 h-[calc(100vh-60px)] mt-[60px] bg-[rgba(0,0,0,0.3)] flex backdrop-blur-[70px] translate-x-[100%] transition duration-400 ease-in-out overflow-scroll\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"account__details  p-[20px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"account__title  text-5xl mb-8\",\n                        children: \"My List\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"account__watch-list  overflow-scroll  grid grid-cols-3 gap-y-[20px] min-w-[550px] \",\n                        children: showWatchList()\n                    }, void 0, false, {\n                        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"account__menu min-w-[250px] bg-black w-[300px] h-screen p-[20px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"account__main\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"active\",\n                                href: \"/\",\n                                children: \"My List\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                                lineNumber: 55,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                            lineNumber: 54,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"side-nav__divider  w-full bg-[rgb(80,80,80)] h-[2px] my-[20px]\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"account__main\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"\",\n                                    href: \"/\",\n                                    children: \"Account\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"\",\n                                    href: \"/\",\n                                    children: \"Sign Out\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this));\n}\n_s(Account, \"51Rwk9KcVmyael3CdCnvQPJTKgw=\", false, function() {\n    return [\n        _HBOProvider__WEBPACK_IMPORTED_MODULE_1__.useStateContext\n    ];\n});\n_c = Account;\nvar _c;\n$RefreshReg$(_c, \"Account\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9VSS9BY2NvdW50LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ3RCO0FBQ0c7QUFHZCxTQUFTRzs7SUFDeEIsTUFBTUMsY0FBY0osNkRBQWVBO0lBQ25DLE1BQU0sRUFBQ0ssWUFBVyxFQUFFQyxlQUFjLEVBQUVDLFVBQVMsRUFBRUMsZUFBYyxFQUFDLEdBQUdKO0lBR2pFLFNBQVNLO1FBQ1AsSUFBSUYsYUFBYSxNQUFLO1lBQ3BCLE9BQU9BLFVBQVVHLElBQUksQ0FBQ0MsT0FBT0M7Z0JBQzNCQyxRQUFRQyxJQUFJSDtnQkFDZCxxQkFFRSw4REFBQ0k7b0JBQUlDLFdBQVU7O3NDQUNmLDhEQUFDQzs0QkFBSUMsS0FBS1AsTUFBTU07NEJBQUtELFdBQVU7Ozs7OztzQ0FDL0IsOERBQUNEOzRCQUFJQyxXQUFZO3NDQUNiLDRFQUFDRDtnQ0FBSUMsV0FBWTs7a0RBQ2YsOERBQUNkLGtEQUFJQTt3Q0FBQ2lCLE1BQVEsSUFBMENSLE9BQXRDQSxNQUFNUyxRQUFPVCxNQUFNUyxRQUFRLFNBQVEsS0FBWSxPQUFUVCxNQUFNVTtrREFDNUQsNEVBQUNOOzRDQUFJQyxXQUFZO3NEQUNiLDRFQUFDTTtnREFBRU4sV0FBWTs7Ozs7Ozs7Ozs7Ozs7OztrREFHbkIsOERBQUNEO3dDQUFJQyxXQUFZO3dDQUFvSU8sU0FBUyxJQUFNZixlQUFlRyxNQUFNVTtrREFDckwsNEVBQUNDOzRDQUFFTixXQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTTdCO1FBQ0Y7SUFFRjtJQUVFLE9BQ0Usa0JBQWtCO2tCQUNsQiw4REFBQ0Q7UUFBSUMsV0FBVyxvQkFBeUQsT0FBckNYLGNBQWMsb0JBQW9CLElBQUc7OzBCQUN2RSw4REFBQ1U7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FBZ0M7Ozs7OztrQ0FDL0MsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUdkUDs7Ozs7Ozs7Ozs7OzBCQUtILDhEQUFDTTtnQkFBSUMsV0FBWTs7a0NBRWYsOERBQUNRO3dCQUFHUixXQUFZO2tDQUNaLDRFQUFDUztzQ0FDRyw0RUFBQ0M7Z0NBQUVWLFdBQVU7Z0NBQVNHLE1BQUs7MENBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBS3ZDLDhEQUFDSjt3QkFBSUMsV0FBWTs7Ozs7O2tDQUVqQiw4REFBQ1E7d0JBQUdSLFdBQVk7OzBDQUNaLDhEQUFDUzswQ0FDRyw0RUFBQ0M7b0NBQUVWLFdBQVU7b0NBQUdHLE1BQUs7OENBQUk7Ozs7Ozs7Ozs7OzBDQUU3Qiw4REFBQ007MENBQ0csNEVBQUNDO29DQUFFVixXQUFVO29DQUFHRyxNQUFLOzhDQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU96QztHQXBFd0JoQjs7UUFDSkgseURBQWVBOzs7S0FEWEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vVUkvQWNjb3VudC5qcz9mMTM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlQ29udGV4dCB9IGZyb20gXCJAL0hCT1Byb3ZpZGVyXCI7XG5pbXBvcnQgeyB2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWNjb3VudCgpIHtcbmNvbnN0IGdsb2JhbFN0YXRlID0gdXNlU3RhdGVDb250ZXh0KClcbmNvbnN0IHthY2NvdW50T3Blbiwgc2V0QWNjb3VudE9wZW4sIHdhdGNobGlzdCwgcmVtb3ZlRnJvbUxpc3R9ID0gZ2xvYmFsU3RhdGVcblxuXG5mdW5jdGlvbiBzaG93V2F0Y2hMaXN0KCl7XG4gIGlmICh3YXRjaGxpc3QgIT0gbnVsbCl7XG4gICAgcmV0dXJuIHdhdGNobGlzdC5tYXAoKHZpZGVvLCBpbmRleCkgPT4ge1xuICAgICAgY29uc29sZS5sb2codmlkZW8pXG4gICAgcmV0dXJuKFxuICAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY291bnRfX3dhdGNoLXdhdGNoLXZpZGVvIHJlbGF0aXZlIHctWzIyMHB4XSBoLVsyMjBweF0gbXItWzIwcHhdIHJvdW5kZWQtWzZweF0gb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICA8aW1nIHNyYz17dmlkZW8uaW1nfSBjbGFzc05hbWU9XCJ3LVsyMjBweF0gaC1bMjIwcHhdIHJvdW5kZWQtWzZweF0gXCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJhY2NvdW50X193YXRjaC1vdmVybGF5IGFic29sdXRlIHRvcC0wIGxlZnQtMCBiZy1bbGluZWFyLWdyYWRpZW50KDMyOGRlZyxyZ2JhKDk0LDE1OCwyNTUsMSkwJSxyZ2JhKDExOSwzMCwxMzUsMSkxMDAlLHJnYmEoNjAsMzgsMTM1LDEpMTAwJSxyZ2JhKDYwLDM4LDE4NCwxKTEwMCUscmdiYSgwLDAsMCwxKTEwMCUpXSB3LWZ1bGwgaC1mdWxsIHRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi1bLjRzXSBlYXNlLWluLW91dCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBvcGFjaXR5LTAgaG92ZXI6b3BhY2l0eS05MFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJhY2NvdW50X193YXRjaC1idXR0b25zIGZsZXggZ2FwLVsxNXB4XSBcIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWYgPSB7YC8ke3ZpZGVvLmdlbnJlPyB2aWRlby5nZW5yZSA6ICdtb3ZpZSd9LyR7dmlkZW8uaWR9YH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJhY2NvdW50X193YXRjaC1jaXJjbGUgY3Vyc29yLXBvaW50ZXIgdy1bNTBweF0gaC1bNTBweF0gcm91bmRlZC1bNTAlXSBib3JkZXItd2hpdGUgYm9yZGVyLVszcHhdIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIFwiPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lID0gXCJmYXMgZmEtcGxheVwiLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImFjY291bnRfX3dhdGNoLWNpcmNsZSBjdXJzb3ItcG9pbnRlciB3LVs1MHB4XSBoLVs1MHB4XSByb3VuZGVkLVs1MCVdIGJvcmRlci13aGl0ZSBib3JkZXItWzNweF0gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgXCIgIG9uQ2xpY2s9eygpID0+IHJlbW92ZUZyb21MaXN0KHZpZGVvLmlkKX0+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWUgPSBcImZhcyBmYS10aW1lc1wiLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICApXG4gICAgfSlcbiAgfVxuXG59XG5cbiAgcmV0dXJuIChcbiAgICAvLyBhY2NvdW50LS1hY3RpdmVcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGFjY291bnQgYWJzb2x1dGUgJHthY2NvdW50T3BlbiA/IFwiYWNjb3VudC0tYWN0aXZlXCIgOiAnJ30gdG9wLTAgcmlnaHQtMCBoLVtjYWxjKDEwMHZoLTYwcHgpXSBtdC1bNjBweF0gYmctW3JnYmEoMCwwLDAsMC4zKV0gZmxleCBiYWNrZHJvcC1ibHVyLVs3MHB4XSB0cmFuc2xhdGUteC1bMTAwJV0gdHJhbnNpdGlvbiBkdXJhdGlvbi00MDAgZWFzZS1pbi1vdXQgb3ZlcmZsb3ctc2Nyb2xsYH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY291bnRfX2RldGFpbHMgIHAtWzIwcHhdXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudF9fdGl0bGUgIHRleHQtNXhsIG1iLThcIj5NeSBMaXN0PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudF9fd2F0Y2gtbGlzdCAgb3ZlcmZsb3ctc2Nyb2xsICBncmlkIGdyaWQtY29scy0zIGdhcC15LVsyMHB4XSBtaW4tdy1bNTUwcHhdIFwiPlxuICAgICAgIFxuXG4gICAgICAgIHtzaG93V2F0Y2hMaXN0KCl9XG4gICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImFjY291bnRfX21lbnUgbWluLXctWzI1MHB4XSBiZy1ibGFjayB3LVszMDBweF0gaC1zY3JlZW4gcC1bMjBweF1cIj5cblxuICAgICAgICA8dWwgY2xhc3NOYW1lID0gXCJhY2NvdW50X19tYWluXCI+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYWN0aXZlXCIgaHJlZj1cIi9cIj5NeSBMaXN0PC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cblxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcInNpZGUtbmF2X19kaXZpZGVyICB3LWZ1bGwgYmctW3JnYig4MCw4MCw4MCldIGgtWzJweF0gbXktWzIwcHhdXCIvPlxuXG4gICAgICAgIDx1bCBjbGFzc05hbWUgPSBcImFjY291bnRfX21haW5cIj5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJcIiBocmVmPVwiL1wiPkFjY291bnQ8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIlwiIGhyZWY9XCIvXCI+U2lnbiBPdXQ8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZUNvbnRleHQiLCJ2NCIsIkxpbmsiLCJBY2NvdW50IiwiZ2xvYmFsU3RhdGUiLCJhY2NvdW50T3BlbiIsInNldEFjY291bnRPcGVuIiwid2F0Y2hsaXN0IiwicmVtb3ZlRnJvbUxpc3QiLCJzaG93V2F0Y2hMaXN0IiwibWFwIiwidmlkZW8iLCJpbmRleCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJocmVmIiwiZ2VucmUiLCJpZCIsImkiLCJvbkNsaWNrIiwidWwiLCJsaSIsImEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./UI/Account.js\n"));

/***/ })

});