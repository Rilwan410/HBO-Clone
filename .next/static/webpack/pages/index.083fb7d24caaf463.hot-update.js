"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./UI/FeaturedMedia.js":
/*!*****************************!*\
  !*** ./UI/FeaturedMedia.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FeaturedMedia; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _HBOProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/HBOProvider */ \"./HBOProvider.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction FeaturedMedia(param) {\n    let { type , title , location , mediaURL , genre , linkURL  } = param;\n    _s();\n    const globalState = (0,_HBOProvider__WEBPACK_IMPORTED_MODULE_1__.useStateContext)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    function hideButtons() {\n        if (type === \"front\") {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"feaured-media__buttons flex items-center mb-20\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"featured-media__play-btn bg-white text-black w-[50px] flex h-[50px] rounded-[50%] justify-center items-center mr-[20px] transition-[background] duration-300 ease-in-out hover:bg-[linear-gradient(328deg,rgba(94,158,255,1)0%,rgba(119,30,135,1)100%,rgba(60,38,255,1)0%,rgba(0,0,0,1)100%)] hover:text-white hover:cursor-pointer\",\n                        onClick: clickedPlay,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"fas fa-play\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                            lineNumber: 24,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                        lineNumber: 20,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"featured-media__info-btn bg-[gray] text-[.8rem] text-white font-bold w-[100px] h-[40px] flex justify-center items-center rounded-[20px] cursor-pointer\",\n                        onClick: clickedPlay,\n                        children: \"MORE INFO\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                        lineNumber: 26,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this);\n        } else if (type === \"genre\") {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"feaured-media__buttons flex items-center mb-10\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"featured-media__info-btn bg-[rgba(0,0,0,0.8)] hover:bg-[rgba(0,0,0,0.6)]  duration-[.3s] transition text-[.8rem] text-white font-bold w-[100px] h-[40px] flex justify-center items-center rounded-[20px] cursor-pointer\",\n                    onClick: clickedPlay,\n                    children: \"MORE INFO\"\n                }, void 0, false, {\n                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                    lineNumber: 38,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                lineNumber: 36,\n                columnNumber: 5\n            }, this);\n        } else return;\n    }\n    function clickedPlay() {\n        if (type === \"front\") {\n            router.push(\"/movie/460465\");\n        } else {\n            router.push(\"/\".concat(genre));\n        }\n    }\n    function showMedia() {\n        if (type === \"front\") {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                className: \"featured-media__video w-full h-full absolute z-1 scale-[2]\",\n                src: mediaURL,\n                allow: \"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\",\n                allowFullScreen: true\n            }, void 0, false, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                lineNumber: 56,\n                columnNumber: 9\n            }, this);\n        } else if (type === \"single\" || type === \"genre\") {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: mediaURL,\n                className: \" absolute opacity-95 w-full h-full \"\n            }, void 0, false, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                lineNumber: 65,\n                columnNumber: 9\n            }, this);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"featured-media bg-black w-full \".concat(type === \"front\" ? \"h-screen\" : type === \"genre\" ? \"min-h-[550px]\" : type === \"single\" ? \"min-h-[700px]\" : \"\", \" relative overflow-hidden\"),\n            children: [\n                showMedia(),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"featured-media__bg bg-[linear-gradient(180deg,rgba(94,158,255,0)60%,rgba(68,61,156,.8)100%)] absolute w-full h-full z-2 flex px-[50px] items-end transition-opacity duration-500 opacity-0 ease-in-out hover:opacity-100\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"featured-media__container \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"featured-media__title \".concat(type === \"genre\" ? \"text-[5rem]\" : \"text-[7rem]\", \" font-bold text-white mb-4 cursor-pointer\"),\n                                onClick: clickedPlay,\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                                lineNumber: 86,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"featured-media__playing  \".concat(type === \"genre\" ? \"text-[1rem]\" : \"text-[1.2rem]\", \" font-bold text-white mb-[.5rem]\"),\n                                children: \"NOW PLAYING\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                                lineNumber: 92,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"featured-media__location \".concat(type === \"genre\" ? \"text-[1rem]\" : \"text-[1.2rem]\", \" font-light text-white mb-8\"),\n                                children: location\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                                lineNumber: 95,\n                                columnNumber: 13\n                            }, this),\n                            hideButtons()\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                        lineNumber: 85,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n            lineNumber: 74,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(FeaturedMedia, \"d0KiCea01MT7i6bej8r2NQujYwI=\", false, function() {\n    return [\n        _HBOProvider__WEBPACK_IMPORTED_MODULE_1__.useStateContext,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = FeaturedMedia;\nvar _c;\n$RefreshReg$(_c, \"FeaturedMedia\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9VSS9GZWF0dXJlZE1lZGlhLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ1I7QUFFekIsU0FBU0UsY0FBYyxLQU9yQztRQVBxQyxFQUNwQ0MsS0FBSSxFQUNKQyxNQUFLLEVBQ0xDLFNBQVEsRUFDUkMsU0FBUSxFQUNSQyxNQUFLLEVBQ0xDLFFBQU8sRUFDUixHQVBxQzs7SUFRcEMsTUFBTUMsY0FBY1QsNkRBQWVBO0lBQ25DLE1BQU1VLFNBQVNULHNEQUFTQTtJQUcxQixTQUFTVTtRQUNQLElBQUdSLFNBQVMsU0FBUTtZQUNsQixxQkFDRSw4REFBQ1M7Z0JBQUlDLFdBQVU7O2tDQUNmLDhEQUFDRDt3QkFDQ0MsV0FBVTt3QkFDVkMsU0FBU0M7a0NBRVQsNEVBQUNDOzRCQUFFSCxXQUFVOzs7Ozs7Ozs7OztrQ0FFZiw4REFBQ0Q7d0JBQ0NDLFdBQVU7d0JBQ1ZDLFNBQVNDO2tDQUNWOzs7Ozs7Ozs7Ozs7UUFLTCxPQUFPLElBQUlaLFNBQVMsU0FBUztZQUM3QixxQkFDRSw4REFBQ1M7Z0JBQUlDLFdBQVU7MEJBRWYsNEVBQUNEO29CQUNDQyxXQUFVO29CQUNWQyxTQUFTQzs4QkFDVjs7Ozs7Ozs7Ozs7UUFLSCxPQUFPO0lBQ1Q7SUFFRSxTQUFTQTtRQUNULElBQUdaLFNBQVEsU0FBUztZQUFDTyxPQUFPTyxLQUFLO1FBQWdCLE9BQUs7WUFBQ1AsT0FBT08sS0FBSyxJQUFVLE9BQU5WO1FBQVE7SUFDL0U7SUFFQSxTQUFTVztRQUNQLElBQUlmLFNBQVMsU0FBUztZQUNwQixxQkFDRSw4REFBQ2dCO2dCQUNDTixXQUFVO2dCQUNWTyxLQUFLZDtnQkFDTGUsT0FBTTtnQkFDTkMsZUFBZTs7Ozs7O1FBR3JCLE9BQU8sSUFBSW5CLFNBQVMsWUFBWUEsU0FBUyxTQUFTO1lBQ2hELHFCQUNFLDhEQUFDb0I7Z0JBQ0NILEtBQUtkO2dCQUNMTyxXQUFVOzs7Ozs7UUFHaEI7SUFDRjtJQUNBLHFCQUNFO2tCQUNFLDRFQUFDRDtZQUNDQyxXQUFXLGtDQUdWLE9BRkNWLFNBQVMsVUFBVSxhQUFhQSxTQUFTLFVBQVcsa0JBQWtCQSxTQUFTLFdBQy9FLGtCQUFpQixJQUNsQjs7Z0JBR0FlOzhCQUdELDhEQUFDTjtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0Q7d0JBQUlDLFdBQVk7OzBDQUNmLDhEQUFDRDtnQ0FDQ0MsV0FBVyx5QkFBMkUsT0FBbERWLFNBQVMsVUFBVSxnQkFBZ0IsZUFBZTtnQ0FDdEZXLFNBQVNDOzBDQUVSWDs7Ozs7OzBDQUVILDhEQUFDUTtnQ0FBSUMsV0FBWSw0QkFBZ0YsT0FBbkRWLFNBQVMsVUFBVSxnQkFBZ0IsaUJBQWdCOzBDQUFtQzs7Ozs7OzBDQUdwSSw4REFBQ1M7Z0NBQUlDLFdBQVcsNEJBQWdGLE9BQW5EVixTQUFTLFVBQVUsZ0JBQWdCLGlCQUFnQjswQ0FDN0ZFOzs7Ozs7NEJBSUZNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWI7R0F0R3dCVDs7UUFRRkYseURBQWVBO1FBQ3BCQyxrREFBU0E7OztLQVRGQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9VSS9GZWF0dXJlZE1lZGlhLmpzPzBjZTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGVDb250ZXh0IH0gZnJvbSBcIkAvSEJPUHJvdmlkZXJcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGZWF0dXJlZE1lZGlhKHtcbiAgdHlwZSxcbiAgdGl0bGUsXG4gIGxvY2F0aW9uLFxuICBtZWRpYVVSTCxcbiAgZ2VucmUsXG4gIGxpbmtVUkwsXG59KSB7XG4gIGNvbnN0IGdsb2JhbFN0YXRlID0gdXNlU3RhdGVDb250ZXh0KCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cblxuZnVuY3Rpb24gaGlkZUJ1dHRvbnMoKXtcbiAgaWYodHlwZSA9PT0gJ2Zyb250Jyl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhdXJlZC1tZWRpYV9fYnV0dG9ucyBmbGV4IGl0ZW1zLWNlbnRlciBtYi0yMFwiPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJmZWF0dXJlZC1tZWRpYV9fcGxheS1idG4gYmctd2hpdGUgdGV4dC1ibGFjayB3LVs1MHB4XSBmbGV4IGgtWzUwcHhdIHJvdW5kZWQtWzUwJV0ganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG1yLVsyMHB4XSB0cmFuc2l0aW9uLVtiYWNrZ3JvdW5kXSBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgaG92ZXI6YmctW2xpbmVhci1ncmFkaWVudCgzMjhkZWcscmdiYSg5NCwxNTgsMjU1LDEpMCUscmdiYSgxMTksMzAsMTM1LDEpMTAwJSxyZ2JhKDYwLDM4LDI1NSwxKTAlLHJnYmEoMCwwLDAsMSkxMDAlKV0gaG92ZXI6dGV4dC13aGl0ZSBob3ZlcjpjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgIG9uQ2xpY2s9e2NsaWNrZWRQbGF5fVxuICAgICAgPlxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGxheVwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwiZmVhdHVyZWQtbWVkaWFfX2luZm8tYnRuIGJnLVtncmF5XSB0ZXh0LVsuOHJlbV0gdGV4dC13aGl0ZSBmb250LWJvbGQgdy1bMTAwcHhdIGgtWzQwcHhdIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHJvdW5kZWQtWzIwcHhdIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgb25DbGljaz17Y2xpY2tlZFBsYXl9XG4gICAgICA+XG4gICAgICAgIE1PUkUgSU5GT1xuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgKVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdnZW5yZScpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXVyZWQtbWVkaWFfX2J1dHRvbnMgZmxleCBpdGVtcy1jZW50ZXIgbWItMTBcIj5cbiAgICBcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJmZWF0dXJlZC1tZWRpYV9faW5mby1idG4gYmctW3JnYmEoMCwwLDAsMC44KV0gaG92ZXI6YmctW3JnYmEoMCwwLDAsMC42KV0gIGR1cmF0aW9uLVsuM3NdIHRyYW5zaXRpb24gdGV4dC1bLjhyZW1dIHRleHQtd2hpdGUgZm9udC1ib2xkIHctWzEwMHB4XSBoLVs0MHB4XSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciByb3VuZGVkLVsyMHB4XSBjdXJzb3ItcG9pbnRlclwiXG4gICAgICBvbkNsaWNrPXtjbGlja2VkUGxheX1cbiAgICA+XG4gICAgICBNT1JFIElORk9cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIClcbiAgfSBlbHNlIHJldHVybiBcbn1cblxuICBmdW5jdGlvbiBjbGlja2VkUGxheSgpIHtcbiAgaWYodHlwZSA9PT1cImZyb250XCIpIHtyb3V0ZXIucHVzaCgnL21vdmllLzQ2MDQ2NScpfWVsc2V7cm91dGVyLnB1c2goYC8ke2dlbnJlfWApfVxuICB9XG5cbiAgZnVuY3Rpb24gc2hvd01lZGlhKCkge1xuICAgIGlmICh0eXBlID09PSBcImZyb250XCIpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxpZnJhbWVcbiAgICAgICAgICBjbGFzc05hbWU9XCJmZWF0dXJlZC1tZWRpYV9fdmlkZW8gdy1mdWxsIGgtZnVsbCBhYnNvbHV0ZSB6LTEgc2NhbGUtWzJdXCJcbiAgICAgICAgICBzcmM9e21lZGlhVVJMfVxuICAgICAgICAgIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiXG4gICAgICAgICAgYWxsb3dGdWxsU2NyZWVuXG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJzaW5nbGVcIiB8fCB0eXBlID09PSBcImdlbnJlXCIpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e21lZGlhVVJMfVxuICAgICAgICAgIGNsYXNzTmFtZT1cIiBhYnNvbHV0ZSBvcGFjaXR5LTk1IHctZnVsbCBoLWZ1bGwgXCJcbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgZmVhdHVyZWQtbWVkaWEgYmctYmxhY2sgdy1mdWxsICR7XG4gICAgICAgICAgdHlwZSA9PT0gXCJmcm9udFwiID8gXCJoLXNjcmVlblwiIDogdHlwZSA9PT0gJ2dlbnJlJyA/ICBcIm1pbi1oLVs1NTBweF1cIiA6IHR5cGUgPT09IFwic2luZ2xlXCIgPyBcbiAgICAgICAgICAnbWluLWgtWzcwMHB4XSc6ICcnXG4gICAgICAgIH0gcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuYH1cbiAgICAgID5cbiAgICAgICAgey8qIE1lZGlhIFBsYXllciAqL31cbiAgICAgICAge3Nob3dNZWRpYSgpfVxuXG4gICAgICAgIHsvKiBGZWF0dXJlZCBNZWRpYSBEZXNjcmlwdGlvbiAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWF0dXJlZC1tZWRpYV9fYmcgYmctW2xpbmVhci1ncmFkaWVudCgxODBkZWcscmdiYSg5NCwxNTgsMjU1LDApNjAlLHJnYmEoNjgsNjEsMTU2LC44KTEwMCUpXSBhYnNvbHV0ZSB3LWZ1bGwgaC1mdWxsIHotMiBmbGV4IHB4LVs1MHB4XSBpdGVtcy1lbmQgdHJhbnNpdGlvbi1vcGFjaXR5IGR1cmF0aW9uLTUwMCBvcGFjaXR5LTAgZWFzZS1pbi1vdXQgaG92ZXI6b3BhY2l0eS0xMDBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZlYXR1cmVkLW1lZGlhX19jb250YWluZXIgYH0gPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmZWF0dXJlZC1tZWRpYV9fdGl0bGUgJHt0eXBlID09PSAnZ2VucmUnID8gXCJ0ZXh0LVs1cmVtXVwiIDogXCJ0ZXh0LVs3cmVtXVwiIH0gZm9udC1ib2xkIHRleHQtd2hpdGUgbWItNCBjdXJzb3ItcG9pbnRlcmB9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2NsaWNrZWRQbGF5fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgYGZlYXR1cmVkLW1lZGlhX19wbGF5aW5nICAkeyB0eXBlID09PSAnZ2VucmUnID8gXCJ0ZXh0LVsxcmVtXVwiIDogXCJ0ZXh0LVsxLjJyZW1dXCJ9IGZvbnQtYm9sZCB0ZXh0LXdoaXRlIG1iLVsuNXJlbV1gfT5cbiAgICAgICAgICAgICAgTk9XIFBMQVlJTkdcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmZWF0dXJlZC1tZWRpYV9fbG9jYXRpb24gJHsgdHlwZSA9PT0gJ2dlbnJlJyA/IFwidGV4dC1bMXJlbV1cIiA6IFwidGV4dC1bMS4ycmVtXVwifSBmb250LWxpZ2h0IHRleHQtd2hpdGUgbWItOGB9PlxuICAgICAgICAgICAgICB7bG9jYXRpb259XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIEZlYXR1cmVkIE1lZGlhIEJ1dHRvbnMgKi99XG4gICAgICAgICAgICB7aGlkZUJ1dHRvbnMoKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZUNvbnRleHQiLCJ1c2VSb3V0ZXIiLCJGZWF0dXJlZE1lZGlhIiwidHlwZSIsInRpdGxlIiwibG9jYXRpb24iLCJtZWRpYVVSTCIsImdlbnJlIiwibGlua1VSTCIsImdsb2JhbFN0YXRlIiwicm91dGVyIiwiaGlkZUJ1dHRvbnMiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiY2xpY2tlZFBsYXkiLCJpIiwicHVzaCIsInNob3dNZWRpYSIsImlmcmFtZSIsInNyYyIsImFsbG93IiwiYWxsb3dGdWxsU2NyZWVuIiwiaW1nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./UI/FeaturedMedia.js\n"));

/***/ })

});