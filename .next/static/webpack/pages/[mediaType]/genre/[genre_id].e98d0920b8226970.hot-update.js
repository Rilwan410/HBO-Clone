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

/***/ "./UI/Account.js":
/*!***********************!*\
  !*** ./UI/Account.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Account; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _HBOProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/HBOProvider */ \"./HBOProvider.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Account() {\n    _s();\n    const globalState = (0,_HBOProvider__WEBPACK_IMPORTED_MODULE_1__.useStateContext)();\n    const { accountOpen , setAccountOpen , watchlist , removeFromList  } = globalState;\n    function showWatchList() {\n        if (watchlist != null) {\n            return watchlist.map((video, index)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"account__watch-watch-video relative w-[220px] h-[220px] mr-[20px] rounded-[6px] overflow-hidden\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: video.img,\n                            className: \"w-[220px] h-[220px] rounded-[6px] \"\n                        }, void 0, false, {\n                            fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                            lineNumber: 17,\n                            columnNumber: 7\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"account__watch-overlay absolute top-0 left-0 bg-[linear-gradient(328deg,rgba(94,158,255,1)0%,rgba(119,30,135,1)100%,rgba(60,38,135,1)100%,rgba(60,38,184,1)100%,rgba(0,0,0,1)100%)] w-full h-full transition-opacity duration-[.4s] ease-in-out flex justify-center items-center opacity-0 hover:opacity-90\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"account__watch-buttons flex gap-[15px] \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/\".concat(video.genre ? video.genre : \"movie\", \"/\").concat(video.id),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"account__watch-circle cursor-pointer w-[50px] h-[50px] rounded-[50%] border-white border-[3px] flex justify-center items-center \",\n                                            onClick: ()=>setAccountOpen(false),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                className: \"fas fa-play\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                                                lineNumber: 22,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                                            lineNumber: 21,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                                        lineNumber: 20,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"account__watch-circle cursor-pointer w-[50px] h-[50px] rounded-[50%] border-white border-[3px] flex justify-center items-center \",\n                                        onClick: ()=>removeFromList(video.id),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                            className: \"fas fa-times\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                                            lineNumber: 26,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                                        lineNumber: 25,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                                lineNumber: 19,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                            lineNumber: 18,\n                            columnNumber: 7\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                    lineNumber: 16,\n                    columnNumber: 7\n                }, this);\n            });\n        }\n    }\n    return(// account--active\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"account absolute \".concat(accountOpen ? \"account--active\" : \"\", \" top-0 right-0 h-[calc(100vh-60px)] mt-[60px] bg-[rgba(0,0,0,0.3)] flex backdrop-blur-[70px] translate-x-[100%] transition duration-400 ease-in-out overflow-scroll\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"account__details  p-[20px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"account__title  text-5xl mb-8\",\n                        children: \"My List\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"account__watch-list  overflow-scroll  grid grid-cols-3 lg:gap-x-[0px] gap-y-[20px] min-w-[550px] sm:gap-x-[40px] \",\n                        children: showWatchList()\n                    }, void 0, false, {\n                        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"account__menu min-w-[250px]  bg-black w-[300px] h-[100vh] p-[20px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"account__main\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"active\",\n                                href: \"/\",\n                                children: \"My List\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                                lineNumber: 54,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"side-nav__divider  w-full bg-[rgb(80,80,80)] h-[2px] my-[20px]\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"account__main\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"\",\n                                    href: \"/login\",\n                                    children: \"Account\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"\",\n                                    href: \"/create\",\n                                    children: \"Sign Out\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/Account.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this));\n}\n_s(Account, \"51Rwk9KcVmyael3CdCnvQPJTKgw=\", false, function() {\n    return [\n        _HBOProvider__WEBPACK_IMPORTED_MODULE_1__.useStateContext\n    ];\n});\n_c = Account;\nvar _c;\n$RefreshReg$(_c, \"Account\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9VSS9BY2NvdW50LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ3RCO0FBQ0c7QUFHZCxTQUFTRzs7SUFDeEIsTUFBTUMsY0FBY0osNkRBQWVBO0lBQ25DLE1BQU0sRUFBQ0ssWUFBVyxFQUFFQyxlQUFjLEVBQUVDLFVBQVMsRUFBRUMsZUFBYyxFQUFDLEdBQUdKO0lBR2pFLFNBQVNLO1FBQ1AsSUFBSUYsYUFBYSxNQUFLO1lBQ3BCLE9BQU9BLFVBQVVHLElBQUksQ0FBQ0MsT0FBT0M7Z0JBQzdCLHFCQUVFLDhEQUFDQztvQkFBSUMsV0FBVTs7c0NBQ2YsOERBQUNDOzRCQUFJQyxLQUFLTCxNQUFNSTs0QkFBS0QsV0FBVTs7Ozs7O3NDQUMvQiw4REFBQ0Q7NEJBQUlDLFdBQVk7c0NBQ2IsNEVBQUNEO2dDQUFJQyxXQUFZOztrREFDZiw4REFBQ1osa0RBQUlBO3dDQUFDZSxNQUFRLElBQTBDTixPQUF0Q0EsTUFBTU8sUUFBT1AsTUFBTU8sUUFBUSxTQUFRLEtBQVksT0FBVFAsTUFBTVE7a0RBQzVELDRFQUFDTjs0Q0FBSUMsV0FBWTs0Q0FBbUlNLFNBQVcsSUFBTWQsZUFBZTtzREFDaEwsNEVBQUNlO2dEQUFFUCxXQUFZOzs7Ozs7Ozs7Ozs7Ozs7O2tEQUduQiw4REFBQ0Q7d0NBQUlDLFdBQVk7d0NBQW9JTSxTQUFTLElBQU1aLGVBQWVHLE1BQU1RO2tEQUNyTCw0RUFBQ0U7NENBQUVQLFdBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNN0I7UUFDRjtJQUVGO0lBRUUsT0FDRSxrQkFBa0I7a0JBQ2xCLDhEQUFDRDtRQUFJQyxXQUFXLG9CQUF5RCxPQUFyQ1QsY0FBYyxvQkFBb0IsSUFBRzs7MEJBQ3ZFLDhEQUFDUTtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUFnQzs7Ozs7O2tDQUMvQyw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBR2RMOzs7Ozs7Ozs7Ozs7MEJBS0gsOERBQUNJO2dCQUFJQyxXQUFZOztrQ0FFZiw4REFBQ1E7d0JBQUdSLFdBQVk7a0NBQ1osNEVBQUNTO3NDQUNHLDRFQUFDQztnQ0FBRVYsV0FBVTtnQ0FBU0csTUFBSzswQ0FBSTs7Ozs7Ozs7Ozs7Ozs7OztrQ0FLdkMsOERBQUNKO3dCQUFJQyxXQUFZOzs7Ozs7a0NBRWpCLDhEQUFDUTt3QkFBR1IsV0FBWTs7MENBQ1osOERBQUNTOzBDQUNHLDRFQUFDQztvQ0FBRVYsV0FBVTtvQ0FBR0csTUFBSzs4Q0FBUzs7Ozs7Ozs7Ozs7MENBRWxDLDhEQUFDTTswQ0FDRyw0RUFBQ0M7b0NBQUVWLFdBQVU7b0NBQUdHLE1BQUs7OENBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTy9DO0dBbkV3QmQ7O1FBQ0pILHlEQUFlQTs7O0tBRFhHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL1VJL0FjY291bnQuanM/ZjEzNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZUNvbnRleHQgfSBmcm9tIFwiQC9IQk9Qcm92aWRlclwiO1xuaW1wb3J0IHsgdjQgfSBmcm9tIFwidXVpZFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFjY291bnQoKSB7XG5jb25zdCBnbG9iYWxTdGF0ZSA9IHVzZVN0YXRlQ29udGV4dCgpXG5jb25zdCB7YWNjb3VudE9wZW4sIHNldEFjY291bnRPcGVuLCB3YXRjaGxpc3QsIHJlbW92ZUZyb21MaXN0fSA9IGdsb2JhbFN0YXRlXG5cblxuZnVuY3Rpb24gc2hvd1dhdGNoTGlzdCgpe1xuICBpZiAod2F0Y2hsaXN0ICE9IG51bGwpe1xuICAgIHJldHVybiB3YXRjaGxpc3QubWFwKCh2aWRlbywgaW5kZXgpID0+IHtcbiAgICByZXR1cm4oXG4gICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudF9fd2F0Y2gtd2F0Y2gtdmlkZW8gcmVsYXRpdmUgdy1bMjIwcHhdIGgtWzIyMHB4XSBtci1bMjBweF0gcm91bmRlZC1bNnB4XSBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgIDxpbWcgc3JjPXt2aWRlby5pbWd9IGNsYXNzTmFtZT1cInctWzIyMHB4XSBoLVsyMjBweF0gcm91bmRlZC1bNnB4XSBcIiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImFjY291bnRfX3dhdGNoLW92ZXJsYXkgYWJzb2x1dGUgdG9wLTAgbGVmdC0wIGJnLVtsaW5lYXItZ3JhZGllbnQoMzI4ZGVnLHJnYmEoOTQsMTU4LDI1NSwxKTAlLHJnYmEoMTE5LDMwLDEzNSwxKTEwMCUscmdiYSg2MCwzOCwxMzUsMSkxMDAlLHJnYmEoNjAsMzgsMTg0LDEpMTAwJSxyZ2JhKDAsMCwwLDEpMTAwJSldIHctZnVsbCBoLWZ1bGwgdHJhbnNpdGlvbi1vcGFjaXR5IGR1cmF0aW9uLVsuNHNdIGVhc2UtaW4tb3V0IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG9wYWNpdHktMCBob3ZlcjpvcGFjaXR5LTkwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImFjY291bnRfX3dhdGNoLWJ1dHRvbnMgZmxleCBnYXAtWzE1cHhdIFwiPlxuICAgICAgICAgICAgPExpbmsgaHJlZiA9IHtgLyR7dmlkZW8uZ2VucmU/IHZpZGVvLmdlbnJlIDogJ21vdmllJ30vJHt2aWRlby5pZH1gfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImFjY291bnRfX3dhdGNoLWNpcmNsZSBjdXJzb3ItcG9pbnRlciB3LVs1MHB4XSBoLVs1MHB4XSByb3VuZGVkLVs1MCVdIGJvcmRlci13aGl0ZSBib3JkZXItWzNweF0gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgXCIgb25DbGljayA9IHsoKSA9PiBzZXRBY2NvdW50T3BlbihmYWxzZSl9PlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lID0gXCJmYXMgZmEtcGxheVwiLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImFjY291bnRfX3dhdGNoLWNpcmNsZSBjdXJzb3ItcG9pbnRlciB3LVs1MHB4XSBoLVs1MHB4XSByb3VuZGVkLVs1MCVdIGJvcmRlci13aGl0ZSBib3JkZXItWzNweF0gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgXCIgIG9uQ2xpY2s9eygpID0+IHJlbW92ZUZyb21MaXN0KHZpZGVvLmlkKX0+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWUgPSBcImZhcyBmYS10aW1lc1wiLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICApXG4gICAgfSlcbiAgfVxuXG59XG5cbiAgcmV0dXJuIChcbiAgICAvLyBhY2NvdW50LS1hY3RpdmVcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGFjY291bnQgYWJzb2x1dGUgJHthY2NvdW50T3BlbiA/IFwiYWNjb3VudC0tYWN0aXZlXCIgOiAnJ30gdG9wLTAgcmlnaHQtMCBoLVtjYWxjKDEwMHZoLTYwcHgpXSBtdC1bNjBweF0gYmctW3JnYmEoMCwwLDAsMC4zKV0gZmxleCBiYWNrZHJvcC1ibHVyLVs3MHB4XSB0cmFuc2xhdGUteC1bMTAwJV0gdHJhbnNpdGlvbiBkdXJhdGlvbi00MDAgZWFzZS1pbi1vdXQgb3ZlcmZsb3ctc2Nyb2xsYH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY291bnRfX2RldGFpbHMgIHAtWzIwcHhdXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudF9fdGl0bGUgIHRleHQtNXhsIG1iLThcIj5NeSBMaXN0PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudF9fd2F0Y2gtbGlzdCAgb3ZlcmZsb3ctc2Nyb2xsICBncmlkIGdyaWQtY29scy0zIGxnOmdhcC14LVswcHhdIGdhcC15LVsyMHB4XSBtaW4tdy1bNTUwcHhdIHNtOmdhcC14LVs0MHB4XSBcIj5cbiAgICAgICBcblxuICAgICAgICB7c2hvd1dhdGNoTGlzdCgpfVxuICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJhY2NvdW50X19tZW51IG1pbi13LVsyNTBweF0gIGJnLWJsYWNrIHctWzMwMHB4XSBoLVsxMDB2aF0gcC1bMjBweF1cIj5cblxuICAgICAgICA8dWwgY2xhc3NOYW1lID0gXCJhY2NvdW50X19tYWluXCI+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYWN0aXZlXCIgaHJlZj1cIi9cIj5NeSBMaXN0PC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cblxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcInNpZGUtbmF2X19kaXZpZGVyICB3LWZ1bGwgYmctW3JnYig4MCw4MCw4MCldIGgtWzJweF0gbXktWzIwcHhdXCIvPlxuXG4gICAgICAgIDx1bCBjbGFzc05hbWUgPSBcImFjY291bnRfX21haW5cIj5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJcIiBocmVmPVwiL2xvZ2luXCI+QWNjb3VudDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiXCIgaHJlZj1cIi9jcmVhdGVcIj5TaWduIE91dDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlQ29udGV4dCIsInY0IiwiTGluayIsIkFjY291bnQiLCJnbG9iYWxTdGF0ZSIsImFjY291bnRPcGVuIiwic2V0QWNjb3VudE9wZW4iLCJ3YXRjaGxpc3QiLCJyZW1vdmVGcm9tTGlzdCIsInNob3dXYXRjaExpc3QiLCJtYXAiLCJ2aWRlbyIsImluZGV4IiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiaHJlZiIsImdlbnJlIiwiaWQiLCJvbkNsaWNrIiwiaSIsInVsIiwibGkiLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./UI/Account.js\n"));

/***/ })

});