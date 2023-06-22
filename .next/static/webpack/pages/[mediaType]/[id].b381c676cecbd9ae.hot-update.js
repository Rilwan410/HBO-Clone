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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FeaturedMedia; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _HBOProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/HBOProvider */ \"./HBOProvider.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction FeaturedMedia(param) {\n    let { type , id , title , location , mediaURL , genre , linkURL  } = param;\n    _s();\n    const globalState = (0,_HBOProvider__WEBPACK_IMPORTED_MODULE_1__.useStateContext)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    function hideButtons() {\n        if (type === \"front\") {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"feaured-media__buttons flex items-center mb-20\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"featured-media__play-btn bg-white text-black w-[50px] flex h-[50px] rounded-[50%] justify-center items-center mr-[20px] transition-[background] duration-300 ease-in-out hover:bg-[linear-gradient(328deg,rgba(94,158,255,1)0%,rgba(119,30,135,1)100%,rgba(60,38,255,1)0%,rgba(0,0,0,1)100%)] hover:text-white hover:cursor-pointer\",\n                        onClick: clickedPlay,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"fas fa-play\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                            lineNumber: 25,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                        lineNumber: 21,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"featured-media__info-btn bg-[gray] text-[.8rem] text-white font-bold w-[100px] h-[40px] flex justify-center items-center rounded-[20px] cursor-pointer\",\n                        onClick: clickedPlay,\n                        children: \"MORE INFO\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                        lineNumber: 27,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this);\n        } else if (type === \"genre\") {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"feaured-media__buttons flex items-center mb-10\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"featured-media__info-btn bg-[rgba(0,0,0,0.8)] hover:bg-[rgba(0,0,0,0.6)]  duration-[.3s] transition text-[.8rem] text-white font-bold w-[100px] h-[40px] flex justify-center items-center rounded-[20px] cursor-pointer\",\n                    onClick: clickedPlay,\n                    children: \"MORE INFO\"\n                }, void 0, false, {\n                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                    lineNumber: 39,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                lineNumber: 37,\n                columnNumber: 5\n            }, this);\n        } else return;\n    }\n    console.log(linkURL);\n    function clickedPlay() {\n        if (type === \"front\") {\n            router.push(\"/movie/460465\");\n        } else {\n            router.push(\"/\".concat(genre, \"/\").concat(id));\n        }\n    }\n    function showMedia() {\n        if (type === \"front\") {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                className: \"featured-media__video w-full h-full absolute z-1 scale-[2]\",\n                src: mediaURL,\n                allow: \"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\",\n                allowFullScreen: true\n            }, void 0, false, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                lineNumber: 60,\n                columnNumber: 9\n            }, this);\n        } else if (type === \"single\" || type === \"genre\") {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: mediaURL,\n                className: \" absolute opacity-95 w-full h-full \"\n            }, void 0, false, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                lineNumber: 69,\n                columnNumber: 9\n            }, this);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"featured-media bg-black w-full \".concat(type === \"front\" ? \"h-screen\" : type === \"genre\" ? \"min-h-[550px]\" : type === \"single\" ? \"min-h-[700px]\" : \"\", \" relative overflow-hidden\"),\n            children: [\n                showMedia(),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"featured-media__bg bg-[linear-gradient(180deg,rgba(94,158,255,0)60%,rgba(68,61,156,.8)100%)] absolute w-full h-full z-2 flex px-[50px] items-end transition-opacity duration-500 opacity-0 ease-in-out hover:opacity-100\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"featured-media__container \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"featured-media__title \".concat(type === \"genre\" ? \"text-[5rem]\" : \"text-[7rem]\", \" font-bold text-white mb-4 cursor-pointer\"),\n                                onClick: clickedPlay,\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                                lineNumber: 90,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"featured-media__playing  \".concat(type === \"genre\" ? \"text-[1rem]\" : \"text-[1.2rem]\", \" font-bold text-white mb-[.5rem]\"),\n                                children: \"NOW PLAYING\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                                lineNumber: 96,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"featured-media__location \".concat(type === \"genre\" ? \"text-[1rem]\" : \"text-[1.2rem]\", \" font-light text-white mb-8\"),\n                                children: location\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                                lineNumber: 99,\n                                columnNumber: 13\n                            }, this),\n                            hideButtons()\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                        lineNumber: 89,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                    lineNumber: 88,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n            lineNumber: 78,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(FeaturedMedia, \"d0KiCea01MT7i6bej8r2NQujYwI=\", false, function() {\n    return [\n        _HBOProvider__WEBPACK_IMPORTED_MODULE_1__.useStateContext,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = FeaturedMedia;\nvar _c;\n$RefreshReg$(_c, \"FeaturedMedia\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9VSS9GZWF0dXJlZE1lZGlhLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ1I7QUFFekIsU0FBU0UsY0FBYyxLQVFyQztRQVJxQyxFQUNwQ0MsS0FBSSxFQUNKQyxHQUFFLEVBQ0ZDLE1BQUssRUFDTEMsU0FBUSxFQUNSQyxTQUFRLEVBQ1JDLE1BQUssRUFDTEMsUUFBTyxFQUNSLEdBUnFDOztJQVNwQyxNQUFNQyxjQUFjViw2REFBZUE7SUFDbkMsTUFBTVcsU0FBU1Ysc0RBQVNBO0lBRzFCLFNBQVNXO1FBQ1AsSUFBR1QsU0FBUyxTQUFRO1lBQ2xCLHFCQUNFLDhEQUFDVTtnQkFBSUMsV0FBVTs7a0NBQ2YsOERBQUNEO3dCQUNDQyxXQUFVO3dCQUNWQyxTQUFTQztrQ0FFVCw0RUFBQ0M7NEJBQUVILFdBQVU7Ozs7Ozs7Ozs7O2tDQUVmLDhEQUFDRDt3QkFDQ0MsV0FBVTt3QkFDVkMsU0FBU0M7a0NBQ1Y7Ozs7Ozs7Ozs7OztRQUtMLE9BQU8sSUFBSWIsU0FBUyxTQUFTO1lBQzdCLHFCQUNFLDhEQUFDVTtnQkFBSUMsV0FBVTswQkFFZiw0RUFBQ0Q7b0JBQ0NDLFdBQVU7b0JBQ1ZDLFNBQVNDOzhCQUNWOzs7Ozs7Ozs7OztRQUtILE9BQU87SUFDVDtJQUVBRSxRQUFRQyxJQUFJVjtJQUdWLFNBQVNPO1FBQ1QsSUFBR2IsU0FBUSxTQUFTO1lBQUNRLE9BQU9TLEtBQUs7UUFBZ0IsT0FBSztZQUFDVCxPQUFPUyxLQUFLLElBQWFoQixPQUFUSSxPQUFNLEtBQU0sT0FBSEo7UUFBSztJQUNyRjtJQUVBLFNBQVNpQjtRQUNQLElBQUlsQixTQUFTLFNBQVM7WUFDcEIscUJBQ0UsOERBQUNtQjtnQkFDQ1IsV0FBVTtnQkFDVlMsS0FBS2hCO2dCQUNMaUIsT0FBTTtnQkFDTkMsZUFBZTs7Ozs7O1FBR3JCLE9BQU8sSUFBSXRCLFNBQVMsWUFBWUEsU0FBUyxTQUFTO1lBQ2hELHFCQUNFLDhEQUFDdUI7Z0JBQ0NILEtBQUtoQjtnQkFDTE8sV0FBVTs7Ozs7O1FBR2hCO0lBQ0Y7SUFDQSxxQkFDRTtrQkFDRSw0RUFBQ0Q7WUFDQ0MsV0FBVyxrQ0FHVixPQUZDWCxTQUFTLFVBQVUsYUFBYUEsU0FBUyxVQUFXLGtCQUFrQkEsU0FBUyxXQUMvRSxrQkFBaUIsSUFDbEI7O2dCQUdBa0I7OEJBR0QsOERBQUNSO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDRDt3QkFBSUMsV0FBWTs7MENBQ2YsOERBQUNEO2dDQUNDQyxXQUFXLHlCQUEyRSxPQUFsRFgsU0FBUyxVQUFVLGdCQUFnQixlQUFlO2dDQUN0RlksU0FBU0M7MENBRVJYOzs7Ozs7MENBRUgsOERBQUNRO2dDQUFJQyxXQUFZLDRCQUFnRixPQUFuRFgsU0FBUyxVQUFVLGdCQUFnQixpQkFBZ0I7MENBQW1DOzs7Ozs7MENBR3BJLDhEQUFDVTtnQ0FBSUMsV0FBVyw0QkFBZ0YsT0FBbkRYLFNBQVMsVUFBVSxnQkFBZ0IsaUJBQWdCOzBDQUM3Rkc7Ozs7Ozs0QkFJRk07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNYjtHQTFHd0JWOztRQVNGRix5REFBZUE7UUFDcEJDLGtEQUFTQTs7O0tBVkZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL1VJL0ZlYXR1cmVkTWVkaWEuanM/MGNlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZUNvbnRleHQgfSBmcm9tIFwiQC9IQk9Qcm92aWRlclwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZlYXR1cmVkTWVkaWEoe1xuICB0eXBlLFxuICBpZCxcbiAgdGl0bGUsXG4gIGxvY2F0aW9uLFxuICBtZWRpYVVSTCxcbiAgZ2VucmUsXG4gIGxpbmtVUkwsXG59KSB7XG4gIGNvbnN0IGdsb2JhbFN0YXRlID0gdXNlU3RhdGVDb250ZXh0KCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cblxuZnVuY3Rpb24gaGlkZUJ1dHRvbnMoKXtcbiAgaWYodHlwZSA9PT0gJ2Zyb250Jyl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhdXJlZC1tZWRpYV9fYnV0dG9ucyBmbGV4IGl0ZW1zLWNlbnRlciBtYi0yMFwiPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJmZWF0dXJlZC1tZWRpYV9fcGxheS1idG4gYmctd2hpdGUgdGV4dC1ibGFjayB3LVs1MHB4XSBmbGV4IGgtWzUwcHhdIHJvdW5kZWQtWzUwJV0ganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG1yLVsyMHB4XSB0cmFuc2l0aW9uLVtiYWNrZ3JvdW5kXSBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgaG92ZXI6YmctW2xpbmVhci1ncmFkaWVudCgzMjhkZWcscmdiYSg5NCwxNTgsMjU1LDEpMCUscmdiYSgxMTksMzAsMTM1LDEpMTAwJSxyZ2JhKDYwLDM4LDI1NSwxKTAlLHJnYmEoMCwwLDAsMSkxMDAlKV0gaG92ZXI6dGV4dC13aGl0ZSBob3ZlcjpjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgIG9uQ2xpY2s9e2NsaWNrZWRQbGF5fVxuICAgICAgPlxuICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGxheVwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwiZmVhdHVyZWQtbWVkaWFfX2luZm8tYnRuIGJnLVtncmF5XSB0ZXh0LVsuOHJlbV0gdGV4dC13aGl0ZSBmb250LWJvbGQgdy1bMTAwcHhdIGgtWzQwcHhdIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHJvdW5kZWQtWzIwcHhdIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgb25DbGljaz17Y2xpY2tlZFBsYXl9XG4gICAgICA+XG4gICAgICAgIE1PUkUgSU5GT1xuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgKVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdnZW5yZScpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXVyZWQtbWVkaWFfX2J1dHRvbnMgZmxleCBpdGVtcy1jZW50ZXIgbWItMTBcIj5cbiAgICBcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJmZWF0dXJlZC1tZWRpYV9faW5mby1idG4gYmctW3JnYmEoMCwwLDAsMC44KV0gaG92ZXI6YmctW3JnYmEoMCwwLDAsMC42KV0gIGR1cmF0aW9uLVsuM3NdIHRyYW5zaXRpb24gdGV4dC1bLjhyZW1dIHRleHQtd2hpdGUgZm9udC1ib2xkIHctWzEwMHB4XSBoLVs0MHB4XSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciByb3VuZGVkLVsyMHB4XSBjdXJzb3ItcG9pbnRlclwiXG4gICAgICBvbkNsaWNrPXtjbGlja2VkUGxheX1cbiAgICA+XG4gICAgICBNT1JFIElORk9cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIClcbiAgfSBlbHNlIHJldHVybiBcbn1cblxuY29uc29sZS5sb2cobGlua1VSTClcblxuXG4gIGZ1bmN0aW9uIGNsaWNrZWRQbGF5KCkge1xuICBpZih0eXBlID09PVwiZnJvbnRcIikge3JvdXRlci5wdXNoKCcvbW92aWUvNDYwNDY1Jyl9ZWxzZXtyb3V0ZXIucHVzaChgLyR7Z2VucmV9LyR7aWR9YCl9XG4gIH1cblxuICBmdW5jdGlvbiBzaG93TWVkaWEoKSB7XG4gICAgaWYgKHR5cGUgPT09IFwiZnJvbnRcIikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGlmcmFtZVxuICAgICAgICAgIGNsYXNzTmFtZT1cImZlYXR1cmVkLW1lZGlhX192aWRlbyB3LWZ1bGwgaC1mdWxsIGFic29sdXRlIHotMSBzY2FsZS1bMl1cIlxuICAgICAgICAgIHNyYz17bWVkaWFVUkx9XG4gICAgICAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCJcbiAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW5cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcInNpbmdsZVwiIHx8IHR5cGUgPT09IFwiZ2VucmVcIikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17bWVkaWFVUkx9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiIGFic29sdXRlIG9wYWNpdHktOTUgdy1mdWxsIGgtZnVsbCBcIlxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2BmZWF0dXJlZC1tZWRpYSBiZy1ibGFjayB3LWZ1bGwgJHtcbiAgICAgICAgICB0eXBlID09PSBcImZyb250XCIgPyBcImgtc2NyZWVuXCIgOiB0eXBlID09PSAnZ2VucmUnID8gIFwibWluLWgtWzU1MHB4XVwiIDogdHlwZSA9PT0gXCJzaW5nbGVcIiA/IFxuICAgICAgICAgICdtaW4taC1bNzAwcHhdJzogJydcbiAgICAgICAgfSByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW5gfVxuICAgICAgPlxuICAgICAgICB7LyogTWVkaWEgUGxheWVyICovfVxuICAgICAgICB7c2hvd01lZGlhKCl9XG5cbiAgICAgICAgey8qIEZlYXR1cmVkIE1lZGlhIERlc2NyaXB0aW9uICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmVkLW1lZGlhX19iZyBiZy1bbGluZWFyLWdyYWRpZW50KDE4MGRlZyxyZ2JhKDk0LDE1OCwyNTUsMCk2MCUscmdiYSg2OCw2MSwxNTYsLjgpMTAwJSldIGFic29sdXRlIHctZnVsbCBoLWZ1bGwgei0yIGZsZXggcHgtWzUwcHhdIGl0ZW1zLWVuZCB0cmFuc2l0aW9uLW9wYWNpdHkgZHVyYXRpb24tNTAwIG9wYWNpdHktMCBlYXNlLWluLW91dCBob3ZlcjpvcGFjaXR5LTEwMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmVhdHVyZWQtbWVkaWFfX2NvbnRhaW5lciBgfSA+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZlYXR1cmVkLW1lZGlhX190aXRsZSAke3R5cGUgPT09ICdnZW5yZScgPyBcInRleHQtWzVyZW1dXCIgOiBcInRleHQtWzdyZW1dXCIgfSBmb250LWJvbGQgdGV4dC13aGl0ZSBtYi00IGN1cnNvci1wb2ludGVyYH1cbiAgICAgICAgICAgICAgb25DbGljaz17Y2xpY2tlZFBsYXl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBgZmVhdHVyZWQtbWVkaWFfX3BsYXlpbmcgICR7IHR5cGUgPT09ICdnZW5yZScgPyBcInRleHQtWzFyZW1dXCIgOiBcInRleHQtWzEuMnJlbV1cIn0gZm9udC1ib2xkIHRleHQtd2hpdGUgbWItWy41cmVtXWB9PlxuICAgICAgICAgICAgICBOT1cgUExBWUlOR1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZlYXR1cmVkLW1lZGlhX19sb2NhdGlvbiAkeyB0eXBlID09PSAnZ2VucmUnID8gXCJ0ZXh0LVsxcmVtXVwiIDogXCJ0ZXh0LVsxLjJyZW1dXCJ9IGZvbnQtbGlnaHQgdGV4dC13aGl0ZSBtYi04YH0+XG4gICAgICAgICAgICAgIHtsb2NhdGlvbn1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogRmVhdHVyZWQgTWVkaWEgQnV0dG9ucyAqL31cbiAgICAgICAgICAgIHtoaWRlQnV0dG9ucygpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlQ29udGV4dCIsInVzZVJvdXRlciIsIkZlYXR1cmVkTWVkaWEiLCJ0eXBlIiwiaWQiLCJ0aXRsZSIsImxvY2F0aW9uIiwibWVkaWFVUkwiLCJnZW5yZSIsImxpbmtVUkwiLCJnbG9iYWxTdGF0ZSIsInJvdXRlciIsImhpZGVCdXR0b25zIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsImNsaWNrZWRQbGF5IiwiaSIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwic2hvd01lZGlhIiwiaWZyYW1lIiwic3JjIiwiYWxsb3ciLCJhbGxvd0Z1bGxTY3JlZW4iLCJpbWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./UI/FeaturedMedia.js\n"));

/***/ })

});