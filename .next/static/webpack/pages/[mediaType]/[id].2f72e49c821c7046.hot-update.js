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

/***/ "./UI/FeaturedMedia.js":
/*!*****************************!*\
  !*** ./UI/FeaturedMedia.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FeaturedMedia; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _HBOProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/HBOProvider */ \"./HBOProvider.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction FeaturedMedia(param) {\n    let { type , title , location , mediaURL , linkURL  } = param;\n    _s();\n    const globalState = (0,_HBOProvider__WEBPACK_IMPORTED_MODULE_1__.useStateContext)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    function hideButtons() {\n        if (type === \"front\") {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"feaured-media__buttons flex items-center mb-20\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"featured-media__play-btn bg-white text-black w-[50px] flex h-[50px] rounded-[50%] justify-center items-center mr-[20px] transition-[background] duration-300 ease-in-out hover:bg-[linear-gradient(328deg,rgba(94,158,255,1)0%,rgba(119,30,135,1)100%,rgba(60,38,255,1)0%,rgba(0,0,0,1)100%)] hover:text-white hover:cursor-pointer\",\n                        onClick: clickedPlay,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"fas fa-play\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                            lineNumber: 23,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                        lineNumber: 19,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"featured-media__info-btn bg-[gray] text-[.8rem] text-white font-bold w-[100px] h-[40px] flex justify-center items-center rounded-[20px] cursor-pointer\",\n                        onClick: clickedPlay,\n                        children: \"MORE INFO\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                        lineNumber: 25,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this);\n        } else {\n            return;\n        }\n    }\n    function clickedPlay() {\n        router.push(\"/movie/460465\");\n    }\n    function showMedia() {\n        if (type === \"front\") {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                className: \"featured-media__video w-full h-full absolute z-1 scale-[2]\",\n                src: mediaURL,\n                allow: \"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\",\n                allowFullScreen: true\n            }, void 0, false, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, this);\n        } else if (type === \"single\") {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: mediaURL,\n                className: \" absolute opacity-95 w-full h-full \"\n            }, void 0, false, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, this);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"featured-media bg-black w-full min-h-[700px] \".concat(type === \"front\" ? \"h-screen\" : type === \"genre\" ? \"h-[]\" : \"\", \" relative overflow-hidden\"),\n            children: [\n                showMedia(),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"featured-media__bg bg-[linear-gradient(180deg,rgba(94,158,255,0)60%,rgba(68,61,156,.8)100%)] absolute w-full h-full z-2 flex px-[50px] items-end transition-opacity duration-500 opacity-0 ease-in-out hover:opacity-100\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"featured-media__container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"featured-media__title text-[7rem] font-bold text-white mb-4 cursor-pointer\",\n                                onClick: clickedPlay,\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"featured-media__playing text-[1.2rem] font-bold text-white mb-[.5rem]\",\n                                children: \"NOW PLAYING\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                                lineNumber: 80,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"featured-media__location text-[1.2rem] font-light text-white mb-8\",\n                                children: location\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                                lineNumber: 83,\n                                columnNumber: 13\n                            }, this),\n                            hideButtons()\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n            lineNumber: 63,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(FeaturedMedia, \"d0KiCea01MT7i6bej8r2NQujYwI=\", false, function() {\n    return [\n        _HBOProvider__WEBPACK_IMPORTED_MODULE_1__.useStateContext,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = FeaturedMedia;\nvar _c;\n$RefreshReg$(_c, \"FeaturedMedia\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9VSS9GZWF0dXJlZE1lZGlhLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ1I7QUFFekIsU0FBU0UsY0FBYyxLQU1yQztRQU5xQyxFQUNwQ0MsS0FBSSxFQUNKQyxNQUFLLEVBQ0xDLFNBQVEsRUFDUkMsU0FBUSxFQUNSQyxRQUFPLEVBQ1IsR0FOcUM7O0lBT3BDLE1BQU1DLGNBQWNSLDZEQUFlQTtJQUNuQyxNQUFNUyxTQUFTUixzREFBU0E7SUFHMUIsU0FBU1M7UUFDUCxJQUFHUCxTQUFTLFNBQVE7WUFDbEIscUJBQ0UsOERBQUNRO2dCQUFJQyxXQUFVOztrQ0FDZiw4REFBQ0Q7d0JBQ0NDLFdBQVU7d0JBQ1ZDLFNBQVNDO2tDQUVULDRFQUFDQzs0QkFBRUgsV0FBVTs7Ozs7Ozs7Ozs7a0NBRWYsOERBQUNEO3dCQUNDQyxXQUFVO3dCQUNWQyxTQUFTQztrQ0FDVjs7Ozs7Ozs7Ozs7O1FBS0wsT0FBTztZQUNMO1FBQ0Y7SUFDRjtJQUVFLFNBQVNBO1FBQ1BMLE9BQU9PLEtBQUs7SUFDZDtJQUVBLFNBQVNDO1FBQ1AsSUFBSWQsU0FBUyxTQUFTO1lBQ3BCLHFCQUNFLDhEQUFDZTtnQkFDQ04sV0FBVTtnQkFDVk8sS0FBS2I7Z0JBQ0xjLE9BQU07Z0JBQ05DLGVBQWU7Ozs7OztRQUdyQixPQUFPLElBQUlsQixTQUFTLFVBQVU7WUFDNUIscUJBQ0UsOERBQUNtQjtnQkFDQ0gsS0FBS2I7Z0JBQ0xNLFdBQVU7Ozs7OztRQUdoQjtJQUNGO0lBQ0EscUJBQ0U7a0JBQ0UsNEVBQUNEO1lBQ0NDLFdBQVcsZ0RBRVYsT0FEQ1QsU0FBUyxVQUFVLGFBQWFBLFNBQVMsVUFBVyxTQUFTLElBQzlEOztnQkFHQWM7OEJBR0QsOERBQUNOO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNEO2dDQUNDQyxXQUFVO2dDQUNWQyxTQUFTQzswQ0FFUlY7Ozs7OzswQ0FFSCw4REFBQ087Z0NBQUlDLFdBQVU7MENBQXdFOzs7Ozs7MENBR3ZGLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FDWlA7Ozs7Ozs0QkFJRks7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNYjtHQTFGd0JSOztRQU9GRix5REFBZUE7UUFDcEJDLGtEQUFTQTs7O0tBUkZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL1VJL0ZlYXR1cmVkTWVkaWEuanM/MGNlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZUNvbnRleHQgfSBmcm9tIFwiQC9IQk9Qcm92aWRlclwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZlYXR1cmVkTWVkaWEoe1xuICB0eXBlLFxuICB0aXRsZSxcbiAgbG9jYXRpb24sXG4gIG1lZGlhVVJMLFxuICBsaW5rVVJMLFxufSkge1xuICBjb25zdCBnbG9iYWxTdGF0ZSA9IHVzZVN0YXRlQ29udGV4dCgpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG5cbmZ1bmN0aW9uIGhpZGVCdXR0b25zKCl7XG4gIGlmKHR5cGUgPT09ICdmcm9udCcpe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXVyZWQtbWVkaWFfX2J1dHRvbnMgZmxleCBpdGVtcy1jZW50ZXIgbWItMjBcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwiZmVhdHVyZWQtbWVkaWFfX3BsYXktYnRuIGJnLXdoaXRlIHRleHQtYmxhY2sgdy1bNTBweF0gZmxleCBoLVs1MHB4XSByb3VuZGVkLVs1MCVdIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtci1bMjBweF0gdHJhbnNpdGlvbi1bYmFja2dyb3VuZF0gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IGhvdmVyOmJnLVtsaW5lYXItZ3JhZGllbnQoMzI4ZGVnLHJnYmEoOTQsMTU4LDI1NSwxKTAlLHJnYmEoMTE5LDMwLDEzNSwxKTEwMCUscmdiYSg2MCwzOCwyNTUsMSkwJSxyZ2JhKDAsMCwwLDEpMTAwJSldIGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6Y3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICBvbkNsaWNrPXtjbGlja2VkUGxheX1cbiAgICAgID5cbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsYXlcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImZlYXR1cmVkLW1lZGlhX19pbmZvLWJ0biBiZy1bZ3JheV0gdGV4dC1bLjhyZW1dIHRleHQtd2hpdGUgZm9udC1ib2xkIHctWzEwMHB4XSBoLVs0MHB4XSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciByb3VuZGVkLVsyMHB4XSBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgIG9uQ2xpY2s9e2NsaWNrZWRQbGF5fVxuICAgICAgPlxuICAgICAgICBNT1JFIElORk9cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gXG4gIH1cbn1cblxuICBmdW5jdGlvbiBjbGlja2VkUGxheSgpIHtcbiAgICByb3V0ZXIucHVzaCgnL21vdmllLzQ2MDQ2NScpXG4gIH1cblxuICBmdW5jdGlvbiBzaG93TWVkaWEoKSB7XG4gICAgaWYgKHR5cGUgPT09IFwiZnJvbnRcIikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGlmcmFtZVxuICAgICAgICAgIGNsYXNzTmFtZT1cImZlYXR1cmVkLW1lZGlhX192aWRlbyB3LWZ1bGwgaC1mdWxsIGFic29sdXRlIHotMSBzY2FsZS1bMl1cIlxuICAgICAgICAgIHNyYz17bWVkaWFVUkx9XG4gICAgICAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCJcbiAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW5cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcInNpbmdsZVwiKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPXttZWRpYVVSTH1cbiAgICAgICAgICBjbGFzc05hbWU9XCIgYWJzb2x1dGUgb3BhY2l0eS05NSB3LWZ1bGwgaC1mdWxsIFwiXG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YGZlYXR1cmVkLW1lZGlhIGJnLWJsYWNrIHctZnVsbCBtaW4taC1bNzAwcHhdICR7XG4gICAgICAgICAgdHlwZSA9PT0gXCJmcm9udFwiID8gXCJoLXNjcmVlblwiIDogdHlwZSA9PT0gJ2dlbnJlJyA/ICBcImgtW11cIiA6ICcnXG4gICAgICAgIH0gcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuYH1cbiAgICAgID5cbiAgICAgICAgey8qIE1lZGlhIFBsYXllciAqL31cbiAgICAgICAge3Nob3dNZWRpYSgpfVxuXG4gICAgICAgIHsvKiBGZWF0dXJlZCBNZWRpYSBEZXNjcmlwdGlvbiAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWF0dXJlZC1tZWRpYV9fYmcgYmctW2xpbmVhci1ncmFkaWVudCgxODBkZWcscmdiYSg5NCwxNTgsMjU1LDApNjAlLHJnYmEoNjgsNjEsMTU2LC44KTEwMCUpXSBhYnNvbHV0ZSB3LWZ1bGwgaC1mdWxsIHotMiBmbGV4IHB4LVs1MHB4XSBpdGVtcy1lbmQgdHJhbnNpdGlvbi1vcGFjaXR5IGR1cmF0aW9uLTUwMCBvcGFjaXR5LTAgZWFzZS1pbi1vdXQgaG92ZXI6b3BhY2l0eS0xMDBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmVkLW1lZGlhX19jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmVhdHVyZWQtbWVkaWFfX3RpdGxlIHRleHQtWzdyZW1dIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIG1iLTQgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtjbGlja2VkUGxheX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmVkLW1lZGlhX19wbGF5aW5nIHRleHQtWzEuMnJlbV0gZm9udC1ib2xkIHRleHQtd2hpdGUgbWItWy41cmVtXVwiPlxuICAgICAgICAgICAgICBOT1cgUExBWUlOR1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmVkLW1lZGlhX19sb2NhdGlvbiB0ZXh0LVsxLjJyZW1dIGZvbnQtbGlnaHQgdGV4dC13aGl0ZSBtYi04XCI+XG4gICAgICAgICAgICAgIHtsb2NhdGlvbn1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogRmVhdHVyZWQgTWVkaWEgQnV0dG9ucyAqL31cbiAgICAgICAgICAgIHtoaWRlQnV0dG9ucygpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlQ29udGV4dCIsInVzZVJvdXRlciIsIkZlYXR1cmVkTWVkaWEiLCJ0eXBlIiwidGl0bGUiLCJsb2NhdGlvbiIsIm1lZGlhVVJMIiwibGlua1VSTCIsImdsb2JhbFN0YXRlIiwicm91dGVyIiwiaGlkZUJ1dHRvbnMiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiY2xpY2tlZFBsYXkiLCJpIiwicHVzaCIsInNob3dNZWRpYSIsImlmcmFtZSIsInNyYyIsImFsbG93IiwiYWxsb3dGdWxsU2NyZWVuIiwiaW1nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./UI/FeaturedMedia.js\n"));

/***/ })

});