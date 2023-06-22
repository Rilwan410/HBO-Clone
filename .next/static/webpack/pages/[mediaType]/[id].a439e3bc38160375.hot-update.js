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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FeaturedMedia; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _HBOProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/HBOProvider */ \"./HBOProvider.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction FeaturedMedia(param) {\n    let { type , id , statement , title , location , mediaURL , dataID , genre , mediaType , linkURL  } = param;\n    _s();\n    const globalState = (0,_HBOProvider__WEBPACK_IMPORTED_MODULE_1__.useStateContext)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    console.log(mediaType);\n    console.log(linkURL);\n    console.log(id);\n    console.log(statement);\n    console.log(dataID);\n    function clickedPlay() {\n        if (type === \"front\") {\n            router.push(\"/movie/460465\");\n        } else {\n            router.push(\"/\".concat(genre, \"/\").concat(id));\n        }\n    }\n    function hideButtons() {\n        if (type === \"front\") {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"feaured-media__buttons flex items-center mb-20\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"featured-media__play-btn bg-white text-black w-[50px] flex h-[50px] rounded-[50%] justify-center items-center mr-[20px] transition-[background] duration-300 ease-in-out hover:bg-[linear-gradient(328deg,rgba(94,158,255,1)0%,rgba(119,30,135,1)100%,rgba(60,38,255,1)0%,rgba(0,0,0,1)100%)] hover:text-white hover:cursor-pointer\",\n                        onClick: clickedPlay,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"fas fa-play\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                            lineNumber: 41,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"featured-media__info-btn bg-[gray] text-[.8rem] text-white font-bold w-[100px] h-[40px] flex justify-center items-center rounded-[20px] cursor-pointer\",\n                        onClick: clickedPlay,\n                        children: \"MORE INFO\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, this);\n        } else if (type === \"genre\") {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"feaured-media__buttons flex items-center mb-10\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"featured-media__info-btn bg-[rgba(0,0,0,0.8)] hover:bg-[rgba(0,0,0,0.6)]  duration-[.3s] transition text-[.8rem] text-white font-bold w-[100px] h-[40px] flex justify-center items-center rounded-[20px] cursor-pointer\",\n                    onClick: clickedPlay,\n                    children: \"MORE INFO\"\n                }, void 0, false, {\n                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                    lineNumber: 54,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                lineNumber: 53,\n                columnNumber: 9\n            }, this);\n        } else return;\n    }\n    function showMedia() {\n        if (type === \"front\") {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                className: \"featured-media__video w-full h-full absolute z-1 scale-[2]\",\n                src: mediaURL,\n                allow: \"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\",\n                allowFullScreen: true\n            }, void 0, false, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                lineNumber: 68,\n                columnNumber: 9\n            }, this);\n        } else if (type === \"single\" || type === \"genre\") {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: mediaURL,\n                className: \" absolute opacity-95 w-full h-full \"\n            }, void 0, false, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                lineNumber: 77,\n                columnNumber: 9\n            }, this);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"featured-media bg-black w-full \".concat(type === \"front\" ? \"h-screen\" : type === \"genre\" ? \"min-h-[550px]\" : type === \"single\" ? \"min-h-[700px]\" : \"\", \" relative overflow-hidden\"),\n            children: [\n                showMedia(),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"featured-media__bg bg-[linear-gradient(180deg,rgba(94,158,255,0)60%,rgba(68,61,156,.8)100%)] absolute w-full h-full z-2 flex px-[50px] items-end transition-opacity duration-500 opacity-0 ease-in-out hover:opacity-100\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"featured-media__container \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"featured-media__title \".concat(type === \"genre\" ? \"text-[5rem]\" : \"text-[7rem]\", \" font-bold text-white mb-4 cursor-pointer\"),\n                                onClick: clickedPlay,\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                                lineNumber: 100,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"featured-media__playing  \".concat(type === \"genre\" ? \"text-[1rem]\" : \"text-[1.2rem]\", \" font-bold text-white mb-[.5rem]\"),\n                                children: \"NOW PLAYING\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                                lineNumber: 108,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"featured-media__location \".concat(type === \"genre\" ? \"text-[1rem]\" : \"text-[1.2rem]\", \" font-light text-white mb-8\"),\n                                children: location\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                                lineNumber: 115,\n                                columnNumber: 13\n                            }, this),\n                            hideButtons()\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                        lineNumber: 99,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                    lineNumber: 98,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n            lineNumber: 83,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(FeaturedMedia, \"d0KiCea01MT7i6bej8r2NQujYwI=\", false, function() {\n    return [\n        _HBOProvider__WEBPACK_IMPORTED_MODULE_1__.useStateContext,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = FeaturedMedia;\nvar _c;\n$RefreshReg$(_c, \"FeaturedMedia\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9VSS9GZWF0dXJlZE1lZGlhLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ1I7QUFFekIsU0FBU0UsY0FBYyxLQVdyQztRQVhxQyxFQUNwQ0MsS0FBSSxFQUNKQyxHQUFFLEVBQ0ZDLFVBQVMsRUFDVEMsTUFBSyxFQUNMQyxTQUFRLEVBQ1JDLFNBQVEsRUFDUkMsT0FBTSxFQUNOQyxNQUFLLEVBQ0xDLFVBQVMsRUFDVEMsUUFBTyxFQUNSLEdBWHFDOztJQVlwQyxNQUFNQyxjQUFjYiw2REFBZUE7SUFDbkMsTUFBTWMsU0FBU2Isc0RBQVNBO0lBRXhCYyxRQUFRQyxJQUFJTDtJQUNaSSxRQUFRQyxJQUFJSjtJQUNaRyxRQUFRQyxJQUFJWjtJQUNaVyxRQUFRQyxJQUFJWDtJQUNaVSxRQUFRQyxJQUFJUDtJQUVaLFNBQVNRO1FBQ1AsSUFBSWQsU0FBUyxTQUFTO1lBQ3BCVyxPQUFPSSxLQUFLO1FBQ2QsT0FBTztZQUNMSixPQUFPSSxLQUFLLElBQWFkLE9BQVRNLE9BQU0sS0FBTSxPQUFITjtRQUMzQjtJQUNGO0lBRUEsU0FBU2U7UUFDUCxJQUFJaEIsU0FBUyxTQUFTO1lBQ3BCLHFCQUNFLDhEQUFDaUI7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFDQ0MsV0FBVTt3QkFDVkMsU0FBU0w7a0NBRVQsNEVBQUNNOzRCQUFFRixXQUFVOzs7Ozs7Ozs7OztrQ0FFZiw4REFBQ0Q7d0JBQ0NDLFdBQVU7d0JBQ1ZDLFNBQVNMO2tDQUNWOzs7Ozs7Ozs7Ozs7UUFLUCxPQUFPLElBQUlkLFNBQVMsU0FBUztZQUMzQixxQkFDRSw4REFBQ2lCO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFDQ0MsV0FBVTtvQkFDVkMsU0FBU0w7OEJBQ1Y7Ozs7Ozs7Ozs7O1FBS1AsT0FBTztJQUNUO0lBRUEsU0FBU087UUFDUCxJQUFJckIsU0FBUyxTQUFTO1lBQ3BCLHFCQUNFLDhEQUFDc0I7Z0JBQ0NKLFdBQVU7Z0JBQ1ZLLEtBQUtsQjtnQkFDTG1CLE9BQU07Z0JBQ05DLGVBQWU7Ozs7OztRQUdyQixPQUFPLElBQUl6QixTQUFTLFlBQVlBLFNBQVMsU0FBUztZQUNoRCxxQkFDRSw4REFBQzBCO2dCQUFJSCxLQUFLbEI7Z0JBQVVhLFdBQVU7Ozs7OztRQUVsQztJQUNGO0lBQ0EscUJBQ0U7a0JBQ0UsNEVBQUNEO1lBQ0NDLFdBQVcsa0NBUVYsT0FQQ2xCLFNBQVMsVUFDTCxhQUNBQSxTQUFTLFVBQ1Qsa0JBQ0FBLFNBQVMsV0FDVCxrQkFDQSxJQUNMOztnQkFHQXFCOzhCQUdELDhEQUFDSjtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0Q7d0JBQUlDLFdBQVk7OzBDQUNmLDhEQUFDRDtnQ0FDQ0MsV0FBVyx5QkFFVixPQURDbEIsU0FBUyxVQUFVLGdCQUFnQixlQUNwQztnQ0FDRG1CLFNBQVNMOzBDQUVSWDs7Ozs7OzBDQUVILDhEQUFDYztnQ0FDQ0MsV0FBVyw0QkFFVixPQURDbEIsU0FBUyxVQUFVLGdCQUFnQixpQkFDcEM7MENBQ0Y7Ozs7OzswQ0FHRCw4REFBQ2lCO2dDQUNDQyxXQUFXLDRCQUVWLE9BRENsQixTQUFTLFVBQVUsZ0JBQWdCLGlCQUNwQzswQ0FFQUk7Ozs7Ozs0QkFJRlk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNYjtHQTlId0JqQjs7UUFZRkYseURBQWVBO1FBQ3BCQyxrREFBU0E7OztLQWJGQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9VSS9GZWF0dXJlZE1lZGlhLmpzPzBjZTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGVDb250ZXh0IH0gZnJvbSBcIkAvSEJPUHJvdmlkZXJcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGZWF0dXJlZE1lZGlhKHtcbiAgdHlwZSxcbiAgaWQsXG4gIHN0YXRlbWVudCxcbiAgdGl0bGUsXG4gIGxvY2F0aW9uLFxuICBtZWRpYVVSTCxcbiAgZGF0YUlELFxuICBnZW5yZSxcbiAgbWVkaWFUeXBlLFxuICBsaW5rVVJMLFxufSkge1xuICBjb25zdCBnbG9iYWxTdGF0ZSA9IHVzZVN0YXRlQ29udGV4dCgpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zb2xlLmxvZyhtZWRpYVR5cGUpO1xuICBjb25zb2xlLmxvZyhsaW5rVVJMKTtcbiAgY29uc29sZS5sb2coaWQpO1xuICBjb25zb2xlLmxvZyhzdGF0ZW1lbnQpO1xuICBjb25zb2xlLmxvZyhkYXRhSUQpO1xuXG4gIGZ1bmN0aW9uIGNsaWNrZWRQbGF5KCkge1xuICAgIGlmICh0eXBlID09PSBcImZyb250XCIpIHtcbiAgICAgIHJvdXRlci5wdXNoKFwiL21vdmllLzQ2MDQ2NVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcm91dGVyLnB1c2goYC8ke2dlbnJlfS8ke2lkfWApO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVCdXR0b25zKCkge1xuICAgIGlmICh0eXBlID09PSBcImZyb250XCIpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhdXJlZC1tZWRpYV9fYnV0dG9ucyBmbGV4IGl0ZW1zLWNlbnRlciBtYi0yMFwiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZlYXR1cmVkLW1lZGlhX19wbGF5LWJ0biBiZy13aGl0ZSB0ZXh0LWJsYWNrIHctWzUwcHhdIGZsZXggaC1bNTBweF0gcm91bmRlZC1bNTAlXSBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbXItWzIwcHhdIHRyYW5zaXRpb24tW2JhY2tncm91bmRdIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBob3ZlcjpiZy1bbGluZWFyLWdyYWRpZW50KDMyOGRlZyxyZ2JhKDk0LDE1OCwyNTUsMSkwJSxyZ2JhKDExOSwzMCwxMzUsMSkxMDAlLHJnYmEoNjAsMzgsMjU1LDEpMCUscmdiYSgwLDAsMCwxKTEwMCUpXSBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOmN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2NsaWNrZWRQbGF5fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wbGF5XCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmZWF0dXJlZC1tZWRpYV9faW5mby1idG4gYmctW2dyYXldIHRleHQtWy44cmVtXSB0ZXh0LXdoaXRlIGZvbnQtYm9sZCB3LVsxMDBweF0gaC1bNDBweF0gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcm91bmRlZC1bMjBweF0gY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgb25DbGljaz17Y2xpY2tlZFBsYXl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgTU9SRSBJTkZPXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiZ2VucmVcIikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWF1cmVkLW1lZGlhX19idXR0b25zIGZsZXggaXRlbXMtY2VudGVyIG1iLTEwXCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmVhdHVyZWQtbWVkaWFfX2luZm8tYnRuIGJnLVtyZ2JhKDAsMCwwLDAuOCldIGhvdmVyOmJnLVtyZ2JhKDAsMCwwLDAuNildICBkdXJhdGlvbi1bLjNzXSB0cmFuc2l0aW9uIHRleHQtWy44cmVtXSB0ZXh0LXdoaXRlIGZvbnQtYm9sZCB3LVsxMDBweF0gaC1bNDBweF0gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcm91bmRlZC1bMjBweF0gY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgb25DbGljaz17Y2xpY2tlZFBsYXl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgTU9SRSBJTkZPXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9IGVsc2UgcmV0dXJuO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvd01lZGlhKCkge1xuICAgIGlmICh0eXBlID09PSBcImZyb250XCIpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxpZnJhbWVcbiAgICAgICAgICBjbGFzc05hbWU9XCJmZWF0dXJlZC1tZWRpYV9fdmlkZW8gdy1mdWxsIGgtZnVsbCBhYnNvbHV0ZSB6LTEgc2NhbGUtWzJdXCJcbiAgICAgICAgICBzcmM9e21lZGlhVVJMfVxuICAgICAgICAgIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiXG4gICAgICAgICAgYWxsb3dGdWxsU2NyZWVuXG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJzaW5nbGVcIiB8fCB0eXBlID09PSBcImdlbnJlXCIpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxpbWcgc3JjPXttZWRpYVVSTH0gY2xhc3NOYW1lPVwiIGFic29sdXRlIG9wYWNpdHktOTUgdy1mdWxsIGgtZnVsbCBcIiAvPlxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2BmZWF0dXJlZC1tZWRpYSBiZy1ibGFjayB3LWZ1bGwgJHtcbiAgICAgICAgICB0eXBlID09PSBcImZyb250XCJcbiAgICAgICAgICAgID8gXCJoLXNjcmVlblwiXG4gICAgICAgICAgICA6IHR5cGUgPT09IFwiZ2VucmVcIlxuICAgICAgICAgICAgPyBcIm1pbi1oLVs1NTBweF1cIlxuICAgICAgICAgICAgOiB0eXBlID09PSBcInNpbmdsZVwiXG4gICAgICAgICAgICA/IFwibWluLWgtWzcwMHB4XVwiXG4gICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgfSByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW5gfVxuICAgICAgPlxuICAgICAgICB7LyogTWVkaWEgUGxheWVyICovfVxuICAgICAgICB7c2hvd01lZGlhKCl9XG5cbiAgICAgICAgey8qIEZlYXR1cmVkIE1lZGlhIERlc2NyaXB0aW9uICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmVkLW1lZGlhX19iZyBiZy1bbGluZWFyLWdyYWRpZW50KDE4MGRlZyxyZ2JhKDk0LDE1OCwyNTUsMCk2MCUscmdiYSg2OCw2MSwxNTYsLjgpMTAwJSldIGFic29sdXRlIHctZnVsbCBoLWZ1bGwgei0yIGZsZXggcHgtWzUwcHhdIGl0ZW1zLWVuZCB0cmFuc2l0aW9uLW9wYWNpdHkgZHVyYXRpb24tNTAwIG9wYWNpdHktMCBlYXNlLWluLW91dCBob3ZlcjpvcGFjaXR5LTEwMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmVhdHVyZWQtbWVkaWFfX2NvbnRhaW5lciBgfT5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmVhdHVyZWQtbWVkaWFfX3RpdGxlICR7XG4gICAgICAgICAgICAgICAgdHlwZSA9PT0gXCJnZW5yZVwiID8gXCJ0ZXh0LVs1cmVtXVwiIDogXCJ0ZXh0LVs3cmVtXVwiXG4gICAgICAgICAgICAgIH0gZm9udC1ib2xkIHRleHQtd2hpdGUgbWItNCBjdXJzb3ItcG9pbnRlcmB9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2NsaWNrZWRQbGF5fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmVhdHVyZWQtbWVkaWFfX3BsYXlpbmcgICR7XG4gICAgICAgICAgICAgICAgdHlwZSA9PT0gXCJnZW5yZVwiID8gXCJ0ZXh0LVsxcmVtXVwiIDogXCJ0ZXh0LVsxLjJyZW1dXCJcbiAgICAgICAgICAgICAgfSBmb250LWJvbGQgdGV4dC13aGl0ZSBtYi1bLjVyZW1dYH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTk9XIFBMQVlJTkdcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmZWF0dXJlZC1tZWRpYV9fbG9jYXRpb24gJHtcbiAgICAgICAgICAgICAgICB0eXBlID09PSBcImdlbnJlXCIgPyBcInRleHQtWzFyZW1dXCIgOiBcInRleHQtWzEuMnJlbV1cIlxuICAgICAgICAgICAgICB9IGZvbnQtbGlnaHQgdGV4dC13aGl0ZSBtYi04YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2xvY2F0aW9ufVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBGZWF0dXJlZCBNZWRpYSBCdXR0b25zICovfVxuICAgICAgICAgICAge2hpZGVCdXR0b25zKCl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGVDb250ZXh0IiwidXNlUm91dGVyIiwiRmVhdHVyZWRNZWRpYSIsInR5cGUiLCJpZCIsInN0YXRlbWVudCIsInRpdGxlIiwibG9jYXRpb24iLCJtZWRpYVVSTCIsImRhdGFJRCIsImdlbnJlIiwibWVkaWFUeXBlIiwibGlua1VSTCIsImdsb2JhbFN0YXRlIiwicm91dGVyIiwiY29uc29sZSIsImxvZyIsImNsaWNrZWRQbGF5IiwicHVzaCIsImhpZGVCdXR0b25zIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsImkiLCJzaG93TWVkaWEiLCJpZnJhbWUiLCJzcmMiLCJhbGxvdyIsImFsbG93RnVsbFNjcmVlbiIsImltZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./UI/FeaturedMedia.js\n"));

/***/ })

});