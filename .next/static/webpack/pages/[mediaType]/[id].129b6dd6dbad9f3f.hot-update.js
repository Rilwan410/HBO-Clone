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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Account; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _HBOProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/HBOProvider */ \"./HBOProvider.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Account() {\n    _s();\n    const globalState = (0,_HBOProvider__WEBPACK_IMPORTED_MODULE_1__.useStateContext)();\n    const { accountOpen , setAccountOpen , watchlist , removeFromList  } = globalState;\n    function showWatchList() {\n        if (watchlist != null) {\n            return watchlist.map((video, index)=>{\n                console.log(video);\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"account__watch-watch-video relative w-[220px] h-[220px] mr-[20px] rounded-[6px] overflow-hidden\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: video.img,\n                            className: \"w-[220px] h-[220px] rounded-[6px] \"\n                        }, void 0, false, {\n                            fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                            lineNumber: 18,\n                            columnNumber: 7\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"account__watch-overlay absolute top-0 left-0 bg-[linear-gradient(328deg,rgba(94,158,255,1)0%,rgba(119,30,135,1)100%,rgba(60,38,135,1)100%,rgba(60,38,184,1)100%,rgba(0,0,0,1)100%)] w-full h-full transition-opacity duration-[.4s] ease-in-out flex justify-center items-center opacity-0 hover:opacity-90\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"account__watch-buttons flex gap-[15px] \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/\".concat(video.genre ? video.genre : \"movie\", \"/\").concat(video.id),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"account__watch-circle cursor-pointer w-[50px] h-[50px] rounded-[50%] border-white border-[3px] flex justify-center items-center \",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                className: \"fas fa-play\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                                                lineNumber: 23,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                                            lineNumber: 22,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                                        lineNumber: 21,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"account__watch-circle cursor-pointer w-[50px] h-[50px] rounded-[50%] border-white border-[3px] flex justify-center items-center \",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                            className: \"fas fa-times\",\n                                            onClick: removeFromList()\n                                        }, void 0, false, {\n                                            fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                                            lineNumber: 27,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                                        lineNumber: 26,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                                lineNumber: 20,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                            lineNumber: 19,\n                            columnNumber: 7\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                    lineNumber: 17,\n                    columnNumber: 7\n                }, this);\n            });\n        }\n    }\n    return(// account--active\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"account absolute \".concat(accountOpen ? \"account--active\" : \"\", \" top-0 right-0 h-[calc(100vh-60px)] mt-[60px] bg-[rgba(0,0,0,0.3)] flex backdrop-blur-[70px] translate-x-[100%] transition duration-400 ease-in-out overflow-scroll\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"account__details  p-[20px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"account__title  text-5xl mb-8\",\n                        children: \"My List\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"account__watch-list h-full  overflow-scroll  grid grid-cols-3 gap-[15px] gap-y-[30px] min-w-[550px] \",\n                        children: showWatchList()\n                    }, void 0, false, {\n                        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"account__menu min-w-[250px] bg-black w-[300px] h-screen p-[20px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"account__main\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"active\",\n                                href: \"/\",\n                                children: \"My List\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                                lineNumber: 55,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                            lineNumber: 54,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"side-nav__divider  w-full bg-[rgb(80,80,80)] h-[2px] my-[20px]\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"account__main\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"\",\n                                    href: \"/\",\n                                    children: \"Account\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"\",\n                                    href: \"/\",\n                                    children: \"Sign Out\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this));\n}\n_s(Account, \"51Rwk9KcVmyael3CdCnvQPJTKgw=\", false, function() {\n    return [\n        _HBOProvider__WEBPACK_IMPORTED_MODULE_1__.useStateContext\n    ];\n});\n_c = Account;\nvar _c;\n$RefreshReg$(_c, \"Account\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9VSS9BY2NvdW50LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ3RCO0FBQ0c7QUFHZCxTQUFTRzs7SUFDeEIsTUFBTUMsY0FBY0osNkRBQWVBO0lBQ25DLE1BQU0sRUFBQ0ssWUFBVyxFQUFFQyxlQUFjLEVBQUVDLFVBQVMsRUFBRUMsZUFBYyxFQUFDLEdBQUdKO0lBR2pFLFNBQVNLO1FBQ1AsSUFBSUYsYUFBYSxNQUFLO1lBQ3BCLE9BQU9BLFVBQVVHLElBQUksQ0FBQ0MsT0FBT0M7Z0JBQzNCQyxRQUFRQyxJQUFJSDtnQkFDZCxxQkFFRSw4REFBQ0k7b0JBQUlDLFdBQVU7O3NDQUNmLDhEQUFDQzs0QkFBSUMsS0FBS1AsTUFBTU07NEJBQUtELFdBQVU7Ozs7OztzQ0FDL0IsOERBQUNEOzRCQUFJQyxXQUFZO3NDQUNiLDRFQUFDRDtnQ0FBSUMsV0FBWTs7a0RBQ2YsOERBQUNkLGtEQUFJQTt3Q0FBQ2lCLE1BQVEsSUFBMENSLE9BQXRDQSxNQUFNUyxRQUFPVCxNQUFNUyxRQUFRLFNBQVEsS0FBWSxPQUFUVCxNQUFNVTtrREFDNUQsNEVBQUNOOzRDQUFJQyxXQUFZO3NEQUNiLDRFQUFDTTtnREFBRU4sV0FBWTs7Ozs7Ozs7Ozs7Ozs7OztrREFHbkIsOERBQUNEO3dDQUFJQyxXQUFZO2tEQUNiLDRFQUFDTTs0Q0FBRU4sV0FBWTs0Q0FBZU8sU0FBU2Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNckQ7UUFDRjtJQUVGO0lBRUUsT0FDRSxrQkFBa0I7a0JBQ2xCLDhEQUFDTztRQUFJQyxXQUFXLG9CQUF5RCxPQUFyQ1gsY0FBYyxvQkFBb0IsSUFBRzs7MEJBQ3ZFLDhEQUFDVTtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUFnQzs7Ozs7O2tDQUMvQyw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBR2RQOzs7Ozs7Ozs7Ozs7MEJBS0gsOERBQUNNO2dCQUFJQyxXQUFZOztrQ0FFZiw4REFBQ1E7d0JBQUdSLFdBQVk7a0NBQ1osNEVBQUNTO3NDQUNHLDRFQUFDQztnQ0FBRVYsV0FBVTtnQ0FBU0csTUFBSzswQ0FBSTs7Ozs7Ozs7Ozs7Ozs7OztrQ0FLdkMsOERBQUNKO3dCQUFJQyxXQUFZOzs7Ozs7a0NBRWpCLDhEQUFDUTt3QkFBR1IsV0FBWTs7MENBQ1osOERBQUNTOzBDQUNHLDRFQUFDQztvQ0FBRVYsV0FBVTtvQ0FBR0csTUFBSzs4Q0FBSTs7Ozs7Ozs7Ozs7MENBRTdCLDhEQUFDTTswQ0FDRyw0RUFBQ0M7b0NBQUVWLFdBQVU7b0NBQUdHLE1BQUs7OENBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3pDO0dBcEV3QmhCOztRQUNKSCx5REFBZUE7OztLQURYRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9VSS9BY2NvdW50LmpzP2YxMzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGVDb250ZXh0IH0gZnJvbSBcIkAvSEJPUHJvdmlkZXJcIjtcbmltcG9ydCB7IHY0IH0gZnJvbSBcInV1aWRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBY2NvdW50KCkge1xuY29uc3QgZ2xvYmFsU3RhdGUgPSB1c2VTdGF0ZUNvbnRleHQoKVxuY29uc3Qge2FjY291bnRPcGVuLCBzZXRBY2NvdW50T3Blbiwgd2F0Y2hsaXN0LCByZW1vdmVGcm9tTGlzdH0gPSBnbG9iYWxTdGF0ZVxuXG5cbmZ1bmN0aW9uIHNob3dXYXRjaExpc3QoKXtcbiAgaWYgKHdhdGNobGlzdCAhPSBudWxsKXtcbiAgICByZXR1cm4gd2F0Y2hsaXN0Lm1hcCgodmlkZW8sIGluZGV4KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyh2aWRlbylcbiAgICByZXR1cm4oXG4gICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudF9fd2F0Y2gtd2F0Y2gtdmlkZW8gcmVsYXRpdmUgdy1bMjIwcHhdIGgtWzIyMHB4XSBtci1bMjBweF0gcm91bmRlZC1bNnB4XSBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgIDxpbWcgc3JjPXt2aWRlby5pbWd9IGNsYXNzTmFtZT1cInctWzIyMHB4XSBoLVsyMjBweF0gcm91bmRlZC1bNnB4XSBcIiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImFjY291bnRfX3dhdGNoLW92ZXJsYXkgYWJzb2x1dGUgdG9wLTAgbGVmdC0wIGJnLVtsaW5lYXItZ3JhZGllbnQoMzI4ZGVnLHJnYmEoOTQsMTU4LDI1NSwxKTAlLHJnYmEoMTE5LDMwLDEzNSwxKTEwMCUscmdiYSg2MCwzOCwxMzUsMSkxMDAlLHJnYmEoNjAsMzgsMTg0LDEpMTAwJSxyZ2JhKDAsMCwwLDEpMTAwJSldIHctZnVsbCBoLWZ1bGwgdHJhbnNpdGlvbi1vcGFjaXR5IGR1cmF0aW9uLVsuNHNdIGVhc2UtaW4tb3V0IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG9wYWNpdHktMCBob3ZlcjpvcGFjaXR5LTkwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImFjY291bnRfX3dhdGNoLWJ1dHRvbnMgZmxleCBnYXAtWzE1cHhdIFwiPlxuICAgICAgICAgICAgPExpbmsgaHJlZiA9IHtgLyR7dmlkZW8uZ2VucmU/IHZpZGVvLmdlbnJlIDogJ21vdmllJ30vJHt2aWRlby5pZH1gfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImFjY291bnRfX3dhdGNoLWNpcmNsZSBjdXJzb3ItcG9pbnRlciB3LVs1MHB4XSBoLVs1MHB4XSByb3VuZGVkLVs1MCVdIGJvcmRlci13aGl0ZSBib3JkZXItWzNweF0gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWUgPSBcImZhcyBmYS1wbGF5XCIvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiYWNjb3VudF9fd2F0Y2gtY2lyY2xlIGN1cnNvci1wb2ludGVyIHctWzUwcHhdIGgtWzUwcHhdIHJvdW5kZWQtWzUwJV0gYm9yZGVyLXdoaXRlIGJvcmRlci1bM3B4XSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBcIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZSA9IFwiZmFzIGZhLXRpbWVzXCIgb25DbGljaz17cmVtb3ZlRnJvbUxpc3QoKX0vPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIClcbiAgICB9KVxuICB9XG5cbn1cblxuICByZXR1cm4gKFxuICAgIC8vIGFjY291bnQtLWFjdGl2ZVxuICAgIDxkaXYgY2xhc3NOYW1lPXtgYWNjb3VudCBhYnNvbHV0ZSAke2FjY291bnRPcGVuID8gXCJhY2NvdW50LS1hY3RpdmVcIiA6ICcnfSB0b3AtMCByaWdodC0wIGgtW2NhbGMoMTAwdmgtNjBweCldIG10LVs2MHB4XSBiZy1bcmdiYSgwLDAsMCwwLjMpXSBmbGV4IGJhY2tkcm9wLWJsdXItWzcwcHhdIHRyYW5zbGF0ZS14LVsxMDAlXSB0cmFuc2l0aW9uIGR1cmF0aW9uLTQwMCBlYXNlLWluLW91dCBvdmVyZmxvdy1zY3JvbGxgfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudF9fZGV0YWlscyAgcC1bMjBweF1cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50X190aXRsZSAgdGV4dC01eGwgbWItOFwiPk15IExpc3Q8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50X193YXRjaC1saXN0IGgtZnVsbCAgb3ZlcmZsb3ctc2Nyb2xsICBncmlkIGdyaWQtY29scy0zIGdhcC1bMTVweF0gZ2FwLXktWzMwcHhdIG1pbi13LVs1NTBweF0gXCI+XG4gICAgICAgXG5cbiAgICAgICAge3Nob3dXYXRjaExpc3QoKX1cbiAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiYWNjb3VudF9fbWVudSBtaW4tdy1bMjUwcHhdIGJnLWJsYWNrIHctWzMwMHB4XSBoLXNjcmVlbiBwLVsyMHB4XVwiPlxuXG4gICAgICAgIDx1bCBjbGFzc05hbWUgPSBcImFjY291bnRfX21haW5cIj5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJhY3RpdmVcIiBocmVmPVwiL1wiPk15IExpc3Q8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuXG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwic2lkZS1uYXZfX2RpdmlkZXIgIHctZnVsbCBiZy1bcmdiKDgwLDgwLDgwKV0gaC1bMnB4XSBteS1bMjBweF1cIi8+XG5cbiAgICAgICAgPHVsIGNsYXNzTmFtZSA9IFwiYWNjb3VudF9fbWFpblwiPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIlwiIGhyZWY9XCIvXCI+QWNjb3VudDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiXCIgaHJlZj1cIi9cIj5TaWduIE91dDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlQ29udGV4dCIsInY0IiwiTGluayIsIkFjY291bnQiLCJnbG9iYWxTdGF0ZSIsImFjY291bnRPcGVuIiwic2V0QWNjb3VudE9wZW4iLCJ3YXRjaGxpc3QiLCJyZW1vdmVGcm9tTGlzdCIsInNob3dXYXRjaExpc3QiLCJtYXAiLCJ2aWRlbyIsImluZGV4IiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImhyZWYiLCJnZW5yZSIsImlkIiwiaSIsIm9uQ2xpY2siLCJ1bCIsImxpIiwiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./UI/Account.js\n"));

/***/ })

});