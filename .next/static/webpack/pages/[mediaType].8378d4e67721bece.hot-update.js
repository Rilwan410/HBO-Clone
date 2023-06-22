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

/***/ "./UI/FeaturedMedia.js":
/*!*****************************!*\
  !*** ./UI/FeaturedMedia.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FeaturedMedia; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _HBOProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/HBOProvider */ \"./HBOProvider.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction FeaturedMedia(param) {\n    let { type , title , location , mediaURL , linkURL  } = param;\n    _s();\n    const globalState = (0,_HBOProvider__WEBPACK_IMPORTED_MODULE_1__.useStateContext)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    function hideButtons() {\n        if (type === \"front\") {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"feaured-media__buttons flex items-center mb-20\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"featured-media__play-btn bg-white text-black w-[50px] flex h-[50px] rounded-[50%] justify-center items-center mr-[20px] transition-[background] duration-300 ease-in-out hover:bg-[linear-gradient(328deg,rgba(94,158,255,1)0%,rgba(119,30,135,1)100%,rgba(60,38,255,1)0%,rgba(0,0,0,1)100%)] hover:text-white hover:cursor-pointer\",\n                        onClick: clickedPlay,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"fas fa-play\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                            lineNumber: 23,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                        lineNumber: 19,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"featured-media__info-btn bg-[gray] text-[.8rem] text-white font-bold w-[100px] h-[40px] flex justify-center items-center rounded-[20px] cursor-pointer\",\n                        onClick: clickedPlay,\n                        children: \"MORE INFO\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                        lineNumber: 25,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this);\n        } else if (type === \"genre\") {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"feaured-media__buttons flex items-center mb-10\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"featured-media__info-btn bg-[gray] text-[.8rem] text-white font-bold w-[100px] h-[40px] flex justify-center items-center rounded-[20px] cursor-pointer\",\n                    onClick: clickedPlay,\n                    children: \"MORE INFO\"\n                }, void 0, false, {\n                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                    lineNumber: 37,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                lineNumber: 35,\n                columnNumber: 5\n            }, this);\n        } else return;\n    }\n    function clickedPlay() {\n        router.push(\"/movie/460465\");\n    }\n    function showMedia() {\n        if (type === \"front\") {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                className: \"featured-media__video w-full h-full absolute z-1 scale-[2]\",\n                src: mediaURL,\n                allow: \"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\",\n                allowFullScreen: true\n            }, void 0, false, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, this);\n        } else if (type === \"single\" || type === \"genre\") {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: mediaURL,\n                className: \" absolute opacity-95 w-full h-full \"\n            }, void 0, false, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                lineNumber: 64,\n                columnNumber: 9\n            }, this);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"featured-media bg-black w-full \".concat(type === \"front\" ? \"h-screen\" : type === \"genre\" ? \"min-h-[550px]\" : type === \"single\" ? \"min-h-[700px]\" : \"\", \" relative overflow-hidden\"),\n            children: [\n                showMedia(),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"featured-media__bg bg-[linear-gradient(180deg,rgba(94,158,255,0)60%,rgba(68,61,156,.8)100%)] absolute w-full h-full z-2 flex px-[50px] items-end transition-opacity duration-500 opacity-0 ease-in-out hover:opacity-100\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"featured-media__container \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"featured-media__title \".concat(type === \"genre\" ? \"text-[5rem]\" : \"text-[7rem]\", \" font-bold text-white mb-4 cursor-pointer\"),\n                                onClick: clickedPlay,\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                                lineNumber: 85,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"featured-media__playing  \".concat(type === \"genre\" ? \"text-[1rem]\" : \"text-[1.2rem]\", \" font-bold text-white mb-[.5rem]\"),\n                                children: \"NOW PLAYING\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                                lineNumber: 91,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"featured-media__location \".concat(type === \"genre\" ? \"text-[1rem]\" : \"text-[1.2rem]\", \" font-light text-white mb-8\"),\n                                children: location\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                                lineNumber: 94,\n                                columnNumber: 13\n                            }, this),\n                            hideButtons()\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                        lineNumber: 84,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n            lineNumber: 73,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(FeaturedMedia, \"d0KiCea01MT7i6bej8r2NQujYwI=\", false, function() {\n    return [\n        _HBOProvider__WEBPACK_IMPORTED_MODULE_1__.useStateContext,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = FeaturedMedia;\nvar _c;\n$RefreshReg$(_c, \"FeaturedMedia\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9VSS9GZWF0dXJlZE1lZGlhLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ1I7QUFFekIsU0FBU0UsY0FBYyxLQU1yQztRQU5xQyxFQUNwQ0MsS0FBSSxFQUNKQyxNQUFLLEVBQ0xDLFNBQVEsRUFDUkMsU0FBUSxFQUNSQyxRQUFPLEVBQ1IsR0FOcUM7O0lBT3BDLE1BQU1DLGNBQWNSLDZEQUFlQTtJQUNuQyxNQUFNUyxTQUFTUixzREFBU0E7SUFHMUIsU0FBU1M7UUFDUCxJQUFHUCxTQUFTLFNBQVE7WUFDbEIscUJBQ0UsOERBQUNRO2dCQUFJQyxXQUFVOztrQ0FDZiw4REFBQ0Q7d0JBQ0NDLFdBQVU7d0JBQ1ZDLFNBQVNDO2tDQUVULDRFQUFDQzs0QkFBRUgsV0FBVTs7Ozs7Ozs7Ozs7a0NBRWYsOERBQUNEO3dCQUNDQyxXQUFVO3dCQUNWQyxTQUFTQztrQ0FDVjs7Ozs7Ozs7Ozs7O1FBS0wsT0FBTyxJQUFJWCxTQUFTLFNBQVM7WUFDN0IscUJBQ0UsOERBQUNRO2dCQUFJQyxXQUFVOzBCQUVmLDRFQUFDRDtvQkFDQ0MsV0FBVTtvQkFDVkMsU0FBU0M7OEJBQ1Y7Ozs7Ozs7Ozs7O1FBS0gsT0FBTztJQUNUO0lBRUUsU0FBU0E7UUFDUEwsT0FBT08sS0FBSztJQUNkO0lBRUEsU0FBU0M7UUFDUCxJQUFJZCxTQUFTLFNBQVM7WUFDcEIscUJBQ0UsOERBQUNlO2dCQUNDTixXQUFVO2dCQUNWTyxLQUFLYjtnQkFDTGMsT0FBTTtnQkFDTkMsZUFBZTs7Ozs7O1FBR3JCLE9BQU8sSUFBSWxCLFNBQVMsWUFBWUEsU0FBUyxTQUFTO1lBQ2hELHFCQUNFLDhEQUFDbUI7Z0JBQ0NILEtBQUtiO2dCQUNMTSxXQUFVOzs7Ozs7UUFHaEI7SUFDRjtJQUNBLHFCQUNFO2tCQUNFLDRFQUFDRDtZQUNDQyxXQUFXLGtDQUdWLE9BRkNULFNBQVMsVUFBVSxhQUFhQSxTQUFTLFVBQVcsa0JBQWtCQSxTQUFTLFdBQy9FLGtCQUFpQixJQUNsQjs7Z0JBR0FjOzhCQUdELDhEQUFDTjtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0Q7d0JBQUlDLFdBQVk7OzBDQUNmLDhEQUFDRDtnQ0FDQ0MsV0FBVyx5QkFBMkUsT0FBbERULFNBQVMsVUFBVSxnQkFBZ0IsZUFBZTtnQ0FDdEZVLFNBQVNDOzBDQUVSVjs7Ozs7OzBDQUVILDhEQUFDTztnQ0FBSUMsV0FBWSw0QkFBZ0YsT0FBbkRULFNBQVMsVUFBVSxnQkFBZ0IsaUJBQWdCOzBDQUFtQzs7Ozs7OzBDQUdwSSw4REFBQ1E7Z0NBQUlDLFdBQVcsNEJBQWdGLE9BQW5EVCxTQUFTLFVBQVUsZ0JBQWdCLGlCQUFnQjswQ0FDN0ZFOzs7Ozs7NEJBSUZLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWI7R0FyR3dCUjs7UUFPRkYseURBQWVBO1FBQ3BCQyxrREFBU0E7OztLQVJGQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9VSS9GZWF0dXJlZE1lZGlhLmpzPzBjZTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGVDb250ZXh0IH0gZnJvbSBcIkAvSEJPUHJvdmlkZXJcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGZWF0dXJlZE1lZGlhKHtcbiAgdHlwZSxcbiAgdGl0bGUsXG4gIGxvY2F0aW9uLFxuICBtZWRpYVVSTCxcbiAgbGlua1VSTCxcbn0pIHtcbiAgY29uc3QgZ2xvYmFsU3RhdGUgPSB1c2VTdGF0ZUNvbnRleHQoKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuXG5mdW5jdGlvbiBoaWRlQnV0dG9ucygpe1xuICBpZih0eXBlID09PSAnZnJvbnQnKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWF1cmVkLW1lZGlhX19idXR0b25zIGZsZXggaXRlbXMtY2VudGVyIG1iLTIwXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImZlYXR1cmVkLW1lZGlhX19wbGF5LWJ0biBiZy13aGl0ZSB0ZXh0LWJsYWNrIHctWzUwcHhdIGZsZXggaC1bNTBweF0gcm91bmRlZC1bNTAlXSBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbXItWzIwcHhdIHRyYW5zaXRpb24tW2JhY2tncm91bmRdIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBob3ZlcjpiZy1bbGluZWFyLWdyYWRpZW50KDMyOGRlZyxyZ2JhKDk0LDE1OCwyNTUsMSkwJSxyZ2JhKDExOSwzMCwxMzUsMSkxMDAlLHJnYmEoNjAsMzgsMjU1LDEpMCUscmdiYSgwLDAsMCwxKTEwMCUpXSBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOmN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgb25DbGljaz17Y2xpY2tlZFBsYXl9XG4gICAgICA+XG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wbGF5XCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJmZWF0dXJlZC1tZWRpYV9faW5mby1idG4gYmctW2dyYXldIHRleHQtWy44cmVtXSB0ZXh0LXdoaXRlIGZvbnQtYm9sZCB3LVsxMDBweF0gaC1bNDBweF0gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcm91bmRlZC1bMjBweF0gY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICBvbkNsaWNrPXtjbGlja2VkUGxheX1cbiAgICAgID5cbiAgICAgICAgTU9SRSBJTkZPXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICApXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2dlbnJlJykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhdXJlZC1tZWRpYV9fYnV0dG9ucyBmbGV4IGl0ZW1zLWNlbnRlciBtYi0xMFwiPlxuICAgIFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT1cImZlYXR1cmVkLW1lZGlhX19pbmZvLWJ0biBiZy1bZ3JheV0gdGV4dC1bLjhyZW1dIHRleHQtd2hpdGUgZm9udC1ib2xkIHctWzEwMHB4XSBoLVs0MHB4XSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciByb3VuZGVkLVsyMHB4XSBjdXJzb3ItcG9pbnRlclwiXG4gICAgICBvbkNsaWNrPXtjbGlja2VkUGxheX1cbiAgICA+XG4gICAgICBNT1JFIElORk9cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIClcbiAgfSBlbHNlIHJldHVybiBcbn1cblxuICBmdW5jdGlvbiBjbGlja2VkUGxheSgpIHtcbiAgICByb3V0ZXIucHVzaCgnL21vdmllLzQ2MDQ2NScpXG4gIH1cblxuICBmdW5jdGlvbiBzaG93TWVkaWEoKSB7XG4gICAgaWYgKHR5cGUgPT09IFwiZnJvbnRcIikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGlmcmFtZVxuICAgICAgICAgIGNsYXNzTmFtZT1cImZlYXR1cmVkLW1lZGlhX192aWRlbyB3LWZ1bGwgaC1mdWxsIGFic29sdXRlIHotMSBzY2FsZS1bMl1cIlxuICAgICAgICAgIHNyYz17bWVkaWFVUkx9XG4gICAgICAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCJcbiAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW5cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcInNpbmdsZVwiIHx8IHR5cGUgPT09IFwiZ2VucmVcIikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17bWVkaWFVUkx9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiIGFic29sdXRlIG9wYWNpdHktOTUgdy1mdWxsIGgtZnVsbCBcIlxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2BmZWF0dXJlZC1tZWRpYSBiZy1ibGFjayB3LWZ1bGwgJHtcbiAgICAgICAgICB0eXBlID09PSBcImZyb250XCIgPyBcImgtc2NyZWVuXCIgOiB0eXBlID09PSAnZ2VucmUnID8gIFwibWluLWgtWzU1MHB4XVwiIDogdHlwZSA9PT0gXCJzaW5nbGVcIiA/IFxuICAgICAgICAgICdtaW4taC1bNzAwcHhdJzogJydcbiAgICAgICAgfSByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW5gfVxuICAgICAgPlxuICAgICAgICB7LyogTWVkaWEgUGxheWVyICovfVxuICAgICAgICB7c2hvd01lZGlhKCl9XG5cbiAgICAgICAgey8qIEZlYXR1cmVkIE1lZGlhIERlc2NyaXB0aW9uICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmVkLW1lZGlhX19iZyBiZy1bbGluZWFyLWdyYWRpZW50KDE4MGRlZyxyZ2JhKDk0LDE1OCwyNTUsMCk2MCUscmdiYSg2OCw2MSwxNTYsLjgpMTAwJSldIGFic29sdXRlIHctZnVsbCBoLWZ1bGwgei0yIGZsZXggcHgtWzUwcHhdIGl0ZW1zLWVuZCB0cmFuc2l0aW9uLW9wYWNpdHkgZHVyYXRpb24tNTAwIG9wYWNpdHktMCBlYXNlLWluLW91dCBob3ZlcjpvcGFjaXR5LTEwMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmVhdHVyZWQtbWVkaWFfX2NvbnRhaW5lciBgfSA+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZlYXR1cmVkLW1lZGlhX190aXRsZSAke3R5cGUgPT09ICdnZW5yZScgPyBcInRleHQtWzVyZW1dXCIgOiBcInRleHQtWzdyZW1dXCIgfSBmb250LWJvbGQgdGV4dC13aGl0ZSBtYi00IGN1cnNvci1wb2ludGVyYH1cbiAgICAgICAgICAgICAgb25DbGljaz17Y2xpY2tlZFBsYXl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBgZmVhdHVyZWQtbWVkaWFfX3BsYXlpbmcgICR7IHR5cGUgPT09ICdnZW5yZScgPyBcInRleHQtWzFyZW1dXCIgOiBcInRleHQtWzEuMnJlbV1cIn0gZm9udC1ib2xkIHRleHQtd2hpdGUgbWItWy41cmVtXWB9PlxuICAgICAgICAgICAgICBOT1cgUExBWUlOR1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZlYXR1cmVkLW1lZGlhX19sb2NhdGlvbiAkeyB0eXBlID09PSAnZ2VucmUnID8gXCJ0ZXh0LVsxcmVtXVwiIDogXCJ0ZXh0LVsxLjJyZW1dXCJ9IGZvbnQtbGlnaHQgdGV4dC13aGl0ZSBtYi04YH0+XG4gICAgICAgICAgICAgIHtsb2NhdGlvbn1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogRmVhdHVyZWQgTWVkaWEgQnV0dG9ucyAqL31cbiAgICAgICAgICAgIHtoaWRlQnV0dG9ucygpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlQ29udGV4dCIsInVzZVJvdXRlciIsIkZlYXR1cmVkTWVkaWEiLCJ0eXBlIiwidGl0bGUiLCJsb2NhdGlvbiIsIm1lZGlhVVJMIiwibGlua1VSTCIsImdsb2JhbFN0YXRlIiwicm91dGVyIiwiaGlkZUJ1dHRvbnMiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiY2xpY2tlZFBsYXkiLCJpIiwicHVzaCIsInNob3dNZWRpYSIsImlmcmFtZSIsInNyYyIsImFsbG93IiwiYWxsb3dGdWxsU2NyZWVuIiwiaW1nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./UI/FeaturedMedia.js\n"));

/***/ })

});