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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FeaturedMedia; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _HBOProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/HBOProvider */ \"./HBOProvider.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction FeaturedMedia(param) {\n    let { type , id , statement , title , location , mediaURL , dataID , genre , mediaType , linkURL  } = param;\n    _s();\n    const globalState = (0,_HBOProvider__WEBPACK_IMPORTED_MODULE_1__.useStateContext)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    function clickedPlay() {\n        if (type === \"front\") {\n            router.push(\"/movie/460465\");\n        } else {\n            router.push(linkURL);\n        }\n    }\n    function hideButtons() {\n        if (type === \"front\") {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"feaured-media__buttons flex items-center mb-20\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"featured-media__play-btn bg-white text-black w-[50px] flex h-[50px] rounded-[50%] justify-center items-center mr-[20px] transition-[background] duration-300 ease-in-out hover:bg-[linear-gradient(328deg,rgba(94,158,255,1)0%,rgba(119,30,135,1)100%,rgba(60,38,255,1)0%,rgba(0,0,0,1)100%)] hover:text-white hover:cursor-pointer\",\n                        onClick: clickedPlay,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"fas fa-play\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                            lineNumber: 36,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"featured-media__info-btn bg-[gray] text-[.8rem] text-white font-bold w-[100px] h-[40px] flex justify-center items-center rounded-[20px] cursor-pointer\",\n                        onClick: clickedPlay,\n                        children: \"MORE INFO\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, this);\n        } else if (type === \"genre\") {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"feaured-media__buttons flex items-center mb-10\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"featured-media__info-btn bg-[rgba(0,0,0,0.8)] hover:bg-[rgba(0,0,0,0.6)]  duration-[.3s] transition text-[.8rem] text-white font-bold w-[100px] h-[40px] flex justify-center items-center rounded-[20px] cursor-pointer\",\n                    onClick: clickedPlay,\n                    children: \"MORE INFO\"\n                }, void 0, false, {\n                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                    lineNumber: 49,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, this);\n        } else return;\n    }\n    function showMedia() {\n        if (type === \"front\") {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                className: \"featured-media__video w-full h-full absolute z-1 scale-[2]\",\n                src: mediaURL,\n                allow: \"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\",\n                allowFullScreen: true\n            }, void 0, false, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                lineNumber: 63,\n                columnNumber: 9\n            }, this);\n        } else if (type === \"single\" || type === \"genre\") {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: mediaURL,\n                className: \" absolute opacity-95 w-full h-full \"\n            }, void 0, false, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                lineNumber: 72,\n                columnNumber: 9\n            }, this);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"featured-media bg-black w-full \".concat(type === \"front\" ? \"h-screen\" : type === \"genre\" ? \"min-h-[550px]\" : type === \"single\" ? \"min-h-[700px]\" : \"\", \" relative overflow-hidden\"),\n            children: [\n                showMedia(),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"featured-media__bg bg-[linear-gradient(180deg,rgba(94,158,255,0)60%,rgba(68,61,156,.8)100%)] absolute w-full h-full z-2 flex px-[50px] items-end transition-opacity duration-500 opacity-0 ease-in-out hover:opacity-100\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"featured-media__container \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"featured-media__title \".concat(type === \"genre\" ? \"text-[5rem]\" : \"text-[7rem]\", \" font-bold text-white mb-4 cursor-pointer\"),\n                                onClick: clickedPlay,\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                                lineNumber: 95,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"featured-media__playing  \".concat(type === \"genre\" ? \"text-[1rem]\" : \"text-[1.2rem]\", \" font-bold text-white mb-[.5rem]\"),\n                                children: \"NOW PLAYING\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                                lineNumber: 103,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"featured-media__location \".concat(type === \"genre\" ? \"text-[1rem]\" : \"text-[1.2rem]\", \" font-light text-white mb-8\"),\n                                children: location\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                                lineNumber: 110,\n                                columnNumber: 13\n                            }, this),\n                            hideButtons()\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                        lineNumber: 94,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                    lineNumber: 93,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n            lineNumber: 78,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(FeaturedMedia, \"d0KiCea01MT7i6bej8r2NQujYwI=\", false, function() {\n    return [\n        _HBOProvider__WEBPACK_IMPORTED_MODULE_1__.useStateContext,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = FeaturedMedia;\nvar _c;\n$RefreshReg$(_c, \"FeaturedMedia\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9VSS9GZWF0dXJlZE1lZGlhLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ1I7QUFFekIsU0FBU0UsY0FBYyxLQVdyQztRQVhxQyxFQUNwQ0MsS0FBSSxFQUNKQyxHQUFFLEVBQ0ZDLFVBQVMsRUFDVEMsTUFBSyxFQUNMQyxTQUFRLEVBQ1JDLFNBQVEsRUFDUkMsT0FBTSxFQUNOQyxNQUFLLEVBQ0xDLFVBQVMsRUFDVEMsUUFBTyxFQUNSLEdBWHFDOztJQVlwQyxNQUFNQyxjQUFjYiw2REFBZUE7SUFDbkMsTUFBTWMsU0FBU2Isc0RBQVNBO0lBR3hCLFNBQVNjO1FBQ1AsSUFBSVosU0FBUyxTQUFTO1lBQ3BCVyxPQUFPRSxLQUFLO1FBQ2QsT0FBTztZQUNMRixPQUFPRSxLQUFLSjtRQUNkO0lBQ0Y7SUFFQSxTQUFTSztRQUNQLElBQUlkLFNBQVMsU0FBUztZQUNwQixxQkFDRSw4REFBQ2U7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFDQ0MsV0FBVTt3QkFDVkMsU0FBU0w7a0NBRVQsNEVBQUNNOzRCQUFFRixXQUFVOzs7Ozs7Ozs7OztrQ0FFZiw4REFBQ0Q7d0JBQ0NDLFdBQVU7d0JBQ1ZDLFNBQVNMO2tDQUNWOzs7Ozs7Ozs7Ozs7UUFLUCxPQUFPLElBQUlaLFNBQVMsU0FBUztZQUMzQixxQkFDRSw4REFBQ2U7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNEO29CQUNDQyxXQUFVO29CQUNWQyxTQUFTTDs4QkFDVjs7Ozs7Ozs7Ozs7UUFLUCxPQUFPO0lBQ1Q7SUFFQSxTQUFTTztRQUNQLElBQUluQixTQUFTLFNBQVM7WUFDcEIscUJBQ0UsOERBQUNvQjtnQkFDQ0osV0FBVTtnQkFDVkssS0FBS2hCO2dCQUNMaUIsT0FBTTtnQkFDTkMsZUFBZTs7Ozs7O1FBR3JCLE9BQU8sSUFBSXZCLFNBQVMsWUFBWUEsU0FBUyxTQUFTO1lBQ2hELHFCQUNFLDhEQUFDd0I7Z0JBQUlILEtBQUtoQjtnQkFBVVcsV0FBVTs7Ozs7O1FBRWxDO0lBQ0Y7SUFDQSxxQkFDRTtrQkFDRSw0RUFBQ0Q7WUFDQ0MsV0FBVyxrQ0FRVixPQVBDaEIsU0FBUyxVQUNMLGFBQ0FBLFNBQVMsVUFDVCxrQkFDQUEsU0FBUyxXQUNULGtCQUNBLElBQ0w7O2dCQUdBbUI7OEJBR0QsOERBQUNKO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDRDt3QkFBSUMsV0FBWTs7MENBQ2YsOERBQUNEO2dDQUNDQyxXQUFXLHlCQUVWLE9BRENoQixTQUFTLFVBQVUsZ0JBQWdCLGVBQ3BDO2dDQUNEaUIsU0FBU0w7MENBRVJUOzs7Ozs7MENBRUgsOERBQUNZO2dDQUNDQyxXQUFXLDRCQUVWLE9BRENoQixTQUFTLFVBQVUsZ0JBQWdCLGlCQUNwQzswQ0FDRjs7Ozs7OzBDQUdELDhEQUFDZTtnQ0FDQ0MsV0FBVyw0QkFFVixPQURDaEIsU0FBUyxVQUFVLGdCQUFnQixpQkFDcEM7MENBRUFJOzs7Ozs7NEJBSUZVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWI7R0F6SHdCZjs7UUFZRkYseURBQWVBO1FBQ3BCQyxrREFBU0E7OztLQWJGQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9VSS9GZWF0dXJlZE1lZGlhLmpzPzBjZTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGVDb250ZXh0IH0gZnJvbSBcIkAvSEJPUHJvdmlkZXJcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGZWF0dXJlZE1lZGlhKHtcbiAgdHlwZSxcbiAgaWQsXG4gIHN0YXRlbWVudCxcbiAgdGl0bGUsXG4gIGxvY2F0aW9uLFxuICBtZWRpYVVSTCxcbiAgZGF0YUlELFxuICBnZW5yZSxcbiAgbWVkaWFUeXBlLFxuICBsaW5rVVJMLFxufSkge1xuICBjb25zdCBnbG9iYWxTdGF0ZSA9IHVzZVN0YXRlQ29udGV4dCgpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuXG4gIGZ1bmN0aW9uIGNsaWNrZWRQbGF5KCkge1xuICAgIGlmICh0eXBlID09PSBcImZyb250XCIpIHtcbiAgICAgIHJvdXRlci5wdXNoKFwiL21vdmllLzQ2MDQ2NVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcm91dGVyLnB1c2gobGlua1VSTCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGlkZUJ1dHRvbnMoKSB7XG4gICAgaWYgKHR5cGUgPT09IFwiZnJvbnRcIikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWF1cmVkLW1lZGlhX19idXR0b25zIGZsZXggaXRlbXMtY2VudGVyIG1iLTIwXCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmVhdHVyZWQtbWVkaWFfX3BsYXktYnRuIGJnLXdoaXRlIHRleHQtYmxhY2sgdy1bNTBweF0gZmxleCBoLVs1MHB4XSByb3VuZGVkLVs1MCVdIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtci1bMjBweF0gdHJhbnNpdGlvbi1bYmFja2dyb3VuZF0gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IGhvdmVyOmJnLVtsaW5lYXItZ3JhZGllbnQoMzI4ZGVnLHJnYmEoOTQsMTU4LDI1NSwxKTAlLHJnYmEoMTE5LDMwLDEzNSwxKTEwMCUscmdiYSg2MCwzOCwyNTUsMSkwJSxyZ2JhKDAsMCwwLDEpMTAwJSldIGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6Y3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgb25DbGljaz17Y2xpY2tlZFBsYXl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsYXlcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZlYXR1cmVkLW1lZGlhX19pbmZvLWJ0biBiZy1bZ3JheV0gdGV4dC1bLjhyZW1dIHRleHQtd2hpdGUgZm9udC1ib2xkIHctWzEwMHB4XSBoLVs0MHB4XSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciByb3VuZGVkLVsyMHB4XSBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICBvbkNsaWNrPXtjbGlja2VkUGxheX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBNT1JFIElORk9cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJnZW5yZVwiKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXVyZWQtbWVkaWFfX2J1dHRvbnMgZmxleCBpdGVtcy1jZW50ZXIgbWItMTBcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmZWF0dXJlZC1tZWRpYV9faW5mby1idG4gYmctW3JnYmEoMCwwLDAsMC44KV0gaG92ZXI6YmctW3JnYmEoMCwwLDAsMC42KV0gIGR1cmF0aW9uLVsuM3NdIHRyYW5zaXRpb24gdGV4dC1bLjhyZW1dIHRleHQtd2hpdGUgZm9udC1ib2xkIHctWzEwMHB4XSBoLVs0MHB4XSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciByb3VuZGVkLVsyMHB4XSBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICBvbkNsaWNrPXtjbGlja2VkUGxheX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBNT1JFIElORk9cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSByZXR1cm47XG4gIH1cblxuICBmdW5jdGlvbiBzaG93TWVkaWEoKSB7XG4gICAgaWYgKHR5cGUgPT09IFwiZnJvbnRcIikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGlmcmFtZVxuICAgICAgICAgIGNsYXNzTmFtZT1cImZlYXR1cmVkLW1lZGlhX192aWRlbyB3LWZ1bGwgaC1mdWxsIGFic29sdXRlIHotMSBzY2FsZS1bMl1cIlxuICAgICAgICAgIHNyYz17bWVkaWFVUkx9XG4gICAgICAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCJcbiAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW5cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcInNpbmdsZVwiIHx8IHR5cGUgPT09IFwiZ2VucmVcIikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGltZyBzcmM9e21lZGlhVVJMfSBjbGFzc05hbWU9XCIgYWJzb2x1dGUgb3BhY2l0eS05NSB3LWZ1bGwgaC1mdWxsIFwiIC8+XG4gICAgICApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YGZlYXR1cmVkLW1lZGlhIGJnLWJsYWNrIHctZnVsbCAke1xuICAgICAgICAgIHR5cGUgPT09IFwiZnJvbnRcIlxuICAgICAgICAgICAgPyBcImgtc2NyZWVuXCJcbiAgICAgICAgICAgIDogdHlwZSA9PT0gXCJnZW5yZVwiXG4gICAgICAgICAgICA/IFwibWluLWgtWzU1MHB4XVwiXG4gICAgICAgICAgICA6IHR5cGUgPT09IFwic2luZ2xlXCJcbiAgICAgICAgICAgID8gXCJtaW4taC1bNzAwcHhdXCJcbiAgICAgICAgICAgIDogXCJcIlxuICAgICAgICB9IHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlbmB9XG4gICAgICA+XG4gICAgICAgIHsvKiBNZWRpYSBQbGF5ZXIgKi99XG4gICAgICAgIHtzaG93TWVkaWEoKX1cblxuICAgICAgICB7LyogRmVhdHVyZWQgTWVkaWEgRGVzY3JpcHRpb24gKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZWQtbWVkaWFfX2JnIGJnLVtsaW5lYXItZ3JhZGllbnQoMTgwZGVnLHJnYmEoOTQsMTU4LDI1NSwwKTYwJSxyZ2JhKDY4LDYxLDE1NiwuOCkxMDAlKV0gYWJzb2x1dGUgdy1mdWxsIGgtZnVsbCB6LTIgZmxleCBweC1bNTBweF0gaXRlbXMtZW5kIHRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi01MDAgb3BhY2l0eS0wIGVhc2UtaW4tb3V0IGhvdmVyOm9wYWNpdHktMTAwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmZWF0dXJlZC1tZWRpYV9fY29udGFpbmVyIGB9PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmZWF0dXJlZC1tZWRpYV9fdGl0bGUgJHtcbiAgICAgICAgICAgICAgICB0eXBlID09PSBcImdlbnJlXCIgPyBcInRleHQtWzVyZW1dXCIgOiBcInRleHQtWzdyZW1dXCJcbiAgICAgICAgICAgICAgfSBmb250LWJvbGQgdGV4dC13aGl0ZSBtYi00IGN1cnNvci1wb2ludGVyYH1cbiAgICAgICAgICAgICAgb25DbGljaz17Y2xpY2tlZFBsYXl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmZWF0dXJlZC1tZWRpYV9fcGxheWluZyAgJHtcbiAgICAgICAgICAgICAgICB0eXBlID09PSBcImdlbnJlXCIgPyBcInRleHQtWzFyZW1dXCIgOiBcInRleHQtWzEuMnJlbV1cIlxuICAgICAgICAgICAgICB9IGZvbnQtYm9sZCB0ZXh0LXdoaXRlIG1iLVsuNXJlbV1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBOT1cgUExBWUlOR1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZlYXR1cmVkLW1lZGlhX19sb2NhdGlvbiAke1xuICAgICAgICAgICAgICAgIHR5cGUgPT09IFwiZ2VucmVcIiA/IFwidGV4dC1bMXJlbV1cIiA6IFwidGV4dC1bMS4ycmVtXVwiXG4gICAgICAgICAgICAgIH0gZm9udC1saWdodCB0ZXh0LXdoaXRlIG1iLThgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bG9jYXRpb259XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIEZlYXR1cmVkIE1lZGlhIEJ1dHRvbnMgKi99XG4gICAgICAgICAgICB7aGlkZUJ1dHRvbnMoKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZUNvbnRleHQiLCJ1c2VSb3V0ZXIiLCJGZWF0dXJlZE1lZGlhIiwidHlwZSIsImlkIiwic3RhdGVtZW50IiwidGl0bGUiLCJsb2NhdGlvbiIsIm1lZGlhVVJMIiwiZGF0YUlEIiwiZ2VucmUiLCJtZWRpYVR5cGUiLCJsaW5rVVJMIiwiZ2xvYmFsU3RhdGUiLCJyb3V0ZXIiLCJjbGlja2VkUGxheSIsInB1c2giLCJoaWRlQnV0dG9ucyIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJpIiwic2hvd01lZGlhIiwiaWZyYW1lIiwic3JjIiwiYWxsb3ciLCJhbGxvd0Z1bGxTY3JlZW4iLCJpbWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./UI/FeaturedMedia.js\n"));

/***/ })

});