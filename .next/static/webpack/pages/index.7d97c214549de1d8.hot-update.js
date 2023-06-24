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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FeaturedMedia; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _HBOProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/HBOProvider */ \"./HBOProvider.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction FeaturedMedia(param) {\n    let { type , title , dataID , featuredID , genre , location , mediaURL , linkURL , mediaID  } = param;\n    _s();\n    const globalState = (0,_HBOProvider__WEBPACK_IMPORTED_MODULE_1__.useStateContext)();\n    const { addToList , watchlist , setAccountOpen  } = globalState;\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // console.log(mediaID)\n    function clickedAdd() {\n        if (type === \"genre\") addToList({\n            id: dataID,\n            genre,\n            img: mediaURL\n        });\n        if (type === \"single\") addToList({\n            id: mediaID,\n            img: mediaURL,\n            genre\n        });\n        console.log(watchlist);\n    }\n    function clickedPlay() {\n        if (type === \"front\") {\n            router.push(\"/movie/460465\");\n        } else {\n            router.push(linkURL);\n        }\n    }\n    function hideButtons() {\n        if (type === \"front\") {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"feaured-media__buttons flex items-center mb-20\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"featured-media__play-btn bg-white text-black w-[50px] flex h-[50px] rounded-[50%] justify-center items-center mr-[20px] transition-[background] duration-300 ease-in-out hover:bg-[linear-gradient(328deg,rgba(94,158,255,1)0%,rgba(119,30,135,1)100%,rgba(60,38,255,1)0%,rgba(0,0,0,1)100%)] hover:text-white hover:cursor-pointer\",\n                        onClick: clickedPlay,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"fas fa-play\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                            lineNumber: 43,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"featured-media__info-btn bg-[gray] text-[.8rem] text-white font-bold w-[100px] h-[40px] flex justify-center items-center rounded-[20px] cursor-pointer\",\n                        onClick: clickedPlay,\n                        children: \"MORE INFO\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, this);\n        } else if (type === \"genre\") {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"feaured-media__buttons flex items-center mb-10 gap-[20px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"featured-media__info-btn bg-[rgba(0,0,0,0.8)] hover:bg-[rgba(0,0,0,0.6)]  duration-[.3s] transition text-[.8rem] text-white font-bold w-[100px]  h-[40px] flex justify-center items-center rounded-[20px] cursor-pointer\",\n                        onClick: clickedPlay,\n                        children: \"MORE INFO\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"featured-media__play-btn bg-white text-black w-[50px] flex h-[50px] rounded-[50%] justify-center items-center mr-[20px] transition-[background] duration-300 ease-in-out hover:bg-[linear-gradient(328deg,rgba(94,158,255,1)0%,rgba(119,30,135,1)100%,rgba(60,38,255,1)0%,rgba(0,0,0,1)100%)] hover:text-white hover:cursor-pointer\",\n                        onClick: clickedAdd,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"fas fa-add\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                            lineNumber: 66,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, this);\n        } else if (type === \"single\") {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"feaured-media__buttons flex items-center mb-10 gap-[20px]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"featured-media__play-btn bg-white text-black w-[50px] flex h-[50px] rounded-[50%] justify-center items-center mr-[20px] transition-[background] duration-[.5s] ease-in-out hover:bg-[linear-gradient(328deg,rgba(94,158,255,1)0%,rgba(119,30,135,1)100%,rgba(60,38,255,1)0%,rgba(0,0,0,1)100%)] hover:text-white hover:cursor-pointer\",\n                    onClick: clickedAdd,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: \"fas fa-add\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                        lineNumber: 77,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                    lineNumber: 73,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                lineNumber: 72,\n                columnNumber: 9\n            }, this);\n        } else return;\n    }\n    function showMedia() {\n        if (type === \"front\") {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                className: \"featured-media__video w-full h-full absolute z-1 scale-[2]\",\n                src: mediaURL,\n                allow: \"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\",\n                allowFullScreen: true\n            }, void 0, false, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                lineNumber: 87,\n                columnNumber: 9\n            }, this);\n        } else if (type === \"single\" || type === \"genre\") {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: mediaURL,\n                className: \" absolute opacity-95 w-full h-full  \"\n            }, void 0, false, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                lineNumber: 96,\n                columnNumber: 9\n            }, this);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"featured-media bg-black w-full \".concat(type === \"front\" ? \"h-screen\" : type === \"genre\" ? \"min-h-[550px] mb-[40px]\" : type === \"single\" ? \"min-h-[700px]\" : \"\", \" relative overflow-hidden\"),\n            children: [\n                showMedia(),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"featured-media__bg bg-[linear-gradient(180deg,rgba(94,158,255,0)60%,rgba(68,61,156,.8)100%)] absolute w-full h-full z-2 flex px-[50px] items-end transition-opacity duration-500 opacity-0 ease-in-out hover:opacity-100\",\n                    onClick: ()=>setAccountOpen(false),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"featured-media__container \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"featured-media__title \".concat(type === \"genre\" ? \"text-[5rem]\" : \"text-[7rem]\", \" font-bold text-white mb-4 \").concat(type === \"single\" ? \"\" : \"cursor-pointer\"),\n                                onClick: clickedPlay,\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                                lineNumber: 122,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"featured-media__playing  \".concat(type === \"genre\" ? \"text-[1rem]\" : \"text-[1.2rem]\", \" font-bold text-white mb-[.5rem]\"),\n                                children: \"NOW PLAYING\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                                lineNumber: 132,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"featured-media__location \".concat(type === \"genre\" ? \"text-[1rem]\" : \"text-[1.2rem]\", \" font-light text-white mb-8\"),\n                                children: location\n                            }, void 0, false, {\n                                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                                lineNumber: 139,\n                                columnNumber: 13\n                            }, this),\n                            hideButtons()\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                        lineNumber: 121,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n                    lineNumber: 117,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/UI/FeaturedMedia.js\",\n            lineNumber: 102,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(FeaturedMedia, \"d0KiCea01MT7i6bej8r2NQujYwI=\", false, function() {\n    return [\n        _HBOProvider__WEBPACK_IMPORTED_MODULE_1__.useStateContext,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = FeaturedMedia;\nvar _c;\n$RefreshReg$(_c, \"FeaturedMedia\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9VSS9GZWF0dXJlZE1lZGlhLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ1I7QUFFekIsU0FBU0UsY0FBYyxLQVVyQztRQVZxQyxFQUNwQ0MsS0FBSSxFQUNKQyxNQUFLLEVBQ0xDLE9BQU0sRUFDTkMsV0FBVSxFQUNWQyxNQUFLLEVBQ0xDLFNBQVEsRUFDUkMsU0FBUSxFQUNSQyxRQUFPLEVBQ1BDLFFBQU8sRUFDUixHQVZxQzs7SUFXcEMsTUFBTUMsY0FBY1osNkRBQWVBO0lBQ25DLE1BQU0sRUFBRWEsVUFBUyxFQUFFQyxVQUFTLEVBQUVDLGVBQWMsRUFBRSxHQUFHSDtJQUNqRCxNQUFNSSxTQUFTZixzREFBU0E7SUFFeEIsdUJBQXVCO0lBRXZCLFNBQVNnQjtRQUNQLElBQUlkLFNBQVMsU0FBU1UsVUFBVTtZQUFFSyxJQUFJYjtZQUFRRTtZQUFPWSxLQUFLVjtRQUFTO1FBQ25FLElBQUlOLFNBQVMsVUFBVVUsVUFBVTtZQUFFSyxJQUFJUDtZQUFTUSxLQUFLVjtZQUFVRjtRQUFNO1FBQ3JFYSxRQUFRQyxJQUFJUDtJQUNkO0lBRUEsU0FBU1E7UUFDUCxJQUFJbkIsU0FBUyxTQUFTO1lBQ3BCYSxPQUFPTyxLQUFLO1FBQ2QsT0FBTztZQUNMUCxPQUFPTyxLQUFLYjtRQUNkO0lBQ0Y7SUFFQSxTQUFTYztRQUNQLElBQUlyQixTQUFTLFNBQVM7WUFDcEIscUJBQ0UsOERBQUNzQjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUNDQyxXQUFVO3dCQUNWQyxTQUFTTDtrQ0FFVCw0RUFBQ007NEJBQUVGLFdBQVU7Ozs7Ozs7Ozs7O2tDQUVmLDhEQUFDRDt3QkFDQ0MsV0FBVTt3QkFDVkMsU0FBU0w7a0NBQ1Y7Ozs7Ozs7Ozs7OztRQUtQLE9BQU8sSUFBSW5CLFNBQVMsU0FBUztZQUMzQixxQkFDRSw4REFBQ3NCO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQ0NDLFdBQVU7d0JBQ1ZDLFNBQVNMO2tDQUNWOzs7Ozs7a0NBR0QsOERBQUNHO3dCQUNDQyxXQUFVO3dCQUNWQyxTQUFTVjtrQ0FFVCw0RUFBQ1c7NEJBQUVGLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBSXJCLE9BQU8sSUFBSXZCLFNBQVMsVUFBVTtZQUM1QixxQkFDRSw4REFBQ3NCO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFDQ0MsV0FBVTtvQkFDVkMsU0FBU1Y7OEJBRVQsNEVBQUNXO3dCQUFFRixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7O1FBSXJCLE9BQU87SUFDVDtJQUVBLFNBQVNHO1FBQ1AsSUFBSTFCLFNBQVMsU0FBUztZQUNwQixxQkFDRSw4REFBQzJCO2dCQUNDSixXQUFVO2dCQUNWSyxLQUFLdEI7Z0JBQ0x1QixPQUFNO2dCQUNOQyxlQUFlOzs7Ozs7UUFHckIsT0FBTyxJQUFJOUIsU0FBUyxZQUFZQSxTQUFTLFNBQVM7WUFDaEQscUJBQ0UsOERBQUNnQjtnQkFBSVksS0FBS3RCO2dCQUFVaUIsV0FBVTs7Ozs7O1FBRWxDO0lBQ0Y7SUFDQSxxQkFDRTtrQkFDRSw0RUFBQ0Q7WUFDQ0MsV0FBVyxrQ0FRVixPQVBDdkIsU0FBUyxVQUNMLGFBQ0FBLFNBQVMsVUFDVCw0QkFDQUEsU0FBUyxXQUNULGtCQUNBLElBQ0w7O2dCQUdBMEI7OEJBR0QsOERBQUNKO29CQUNDQyxXQUFVO29CQUNWQyxTQUFTLElBQU1aLGVBQWU7OEJBRTlCLDRFQUFDVTt3QkFBSUMsV0FBWTs7MENBQ2YsOERBQUNEO2dDQUNDQyxXQUFXLHlCQUdUdkIsT0FGQUEsU0FBUyxVQUFVLGdCQUFnQixlQUNwQywrQkFFQSxPQURDQSxTQUFTLFdBQVcsS0FBSztnQ0FFM0J3QixTQUFTTDswQ0FFUmxCOzs7Ozs7MENBRUgsOERBQUNxQjtnQ0FDQ0MsV0FBVyw0QkFFVixPQURDdkIsU0FBUyxVQUFVLGdCQUFnQixpQkFDcEM7MENBQ0Y7Ozs7OzswQ0FHRCw4REFBQ3NCO2dDQUNDQyxXQUFXLDRCQUVWLE9BREN2QixTQUFTLFVBQVUsZ0JBQWdCLGlCQUNwQzswQ0FFQUs7Ozs7Ozs0QkFJRmdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWI7R0F0SndCdEI7O1FBV0ZGLHlEQUFlQTtRQUVwQkMsa0RBQVNBOzs7S0FiRkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vVUkvRmVhdHVyZWRNZWRpYS5qcz8wY2UwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlQ29udGV4dCB9IGZyb20gXCJAL0hCT1Byb3ZpZGVyXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmVhdHVyZWRNZWRpYSh7XG4gIHR5cGUsXG4gIHRpdGxlLFxuICBkYXRhSUQsXG4gIGZlYXR1cmVkSUQsXG4gIGdlbnJlLFxuICBsb2NhdGlvbixcbiAgbWVkaWFVUkwsXG4gIGxpbmtVUkwsXG4gIG1lZGlhSUQsXG59KSB7XG4gIGNvbnN0IGdsb2JhbFN0YXRlID0gdXNlU3RhdGVDb250ZXh0KCk7XG4gIGNvbnN0IHsgYWRkVG9MaXN0LCB3YXRjaGxpc3QsIHNldEFjY291bnRPcGVuIH0gPSBnbG9iYWxTdGF0ZTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgLy8gY29uc29sZS5sb2cobWVkaWFJRClcblxuICBmdW5jdGlvbiBjbGlja2VkQWRkKCkge1xuICAgIGlmICh0eXBlID09PSBcImdlbnJlXCIpIGFkZFRvTGlzdCh7IGlkOiBkYXRhSUQsIGdlbnJlLCBpbWc6IG1lZGlhVVJMIH0pO1xuICAgIGlmICh0eXBlID09PSBcInNpbmdsZVwiKSBhZGRUb0xpc3QoeyBpZDogbWVkaWFJRCwgaW1nOiBtZWRpYVVSTCwgZ2VucmUgfSk7XG4gICAgY29uc29sZS5sb2cod2F0Y2hsaXN0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsaWNrZWRQbGF5KCkge1xuICAgIGlmICh0eXBlID09PSBcImZyb250XCIpIHtcbiAgICAgIHJvdXRlci5wdXNoKFwiL21vdmllLzQ2MDQ2NVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcm91dGVyLnB1c2gobGlua1VSTCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGlkZUJ1dHRvbnMoKSB7XG4gICAgaWYgKHR5cGUgPT09IFwiZnJvbnRcIikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWF1cmVkLW1lZGlhX19idXR0b25zIGZsZXggaXRlbXMtY2VudGVyIG1iLTIwXCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmVhdHVyZWQtbWVkaWFfX3BsYXktYnRuIGJnLXdoaXRlIHRleHQtYmxhY2sgdy1bNTBweF0gZmxleCBoLVs1MHB4XSByb3VuZGVkLVs1MCVdIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtci1bMjBweF0gdHJhbnNpdGlvbi1bYmFja2dyb3VuZF0gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IGhvdmVyOmJnLVtsaW5lYXItZ3JhZGllbnQoMzI4ZGVnLHJnYmEoOTQsMTU4LDI1NSwxKTAlLHJnYmEoMTE5LDMwLDEzNSwxKTEwMCUscmdiYSg2MCwzOCwyNTUsMSkwJSxyZ2JhKDAsMCwwLDEpMTAwJSldIGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6Y3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgb25DbGljaz17Y2xpY2tlZFBsYXl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsYXlcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZlYXR1cmVkLW1lZGlhX19pbmZvLWJ0biBiZy1bZ3JheV0gdGV4dC1bLjhyZW1dIHRleHQtd2hpdGUgZm9udC1ib2xkIHctWzEwMHB4XSBoLVs0MHB4XSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciByb3VuZGVkLVsyMHB4XSBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICBvbkNsaWNrPXtjbGlja2VkUGxheX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBNT1JFIElORk9cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJnZW5yZVwiKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXVyZWQtbWVkaWFfX2J1dHRvbnMgZmxleCBpdGVtcy1jZW50ZXIgbWItMTAgZ2FwLVsyMHB4XVwiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZlYXR1cmVkLW1lZGlhX19pbmZvLWJ0biBiZy1bcmdiYSgwLDAsMCwwLjgpXSBob3ZlcjpiZy1bcmdiYSgwLDAsMCwwLjYpXSAgZHVyYXRpb24tWy4zc10gdHJhbnNpdGlvbiB0ZXh0LVsuOHJlbV0gdGV4dC13aGl0ZSBmb250LWJvbGQgdy1bMTAwcHhdICBoLVs0MHB4XSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciByb3VuZGVkLVsyMHB4XSBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICBvbkNsaWNrPXtjbGlja2VkUGxheX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBNT1JFIElORk9cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmZWF0dXJlZC1tZWRpYV9fcGxheS1idG4gYmctd2hpdGUgdGV4dC1ibGFjayB3LVs1MHB4XSBmbGV4IGgtWzUwcHhdIHJvdW5kZWQtWzUwJV0ganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG1yLVsyMHB4XSB0cmFuc2l0aW9uLVtiYWNrZ3JvdW5kXSBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgaG92ZXI6YmctW2xpbmVhci1ncmFkaWVudCgzMjhkZWcscmdiYSg5NCwxNTgsMjU1LDEpMCUscmdiYSgxMTksMzAsMTM1LDEpMTAwJSxyZ2JhKDYwLDM4LDI1NSwxKTAlLHJnYmEoMCwwLDAsMSkxMDAlKV0gaG92ZXI6dGV4dC13aGl0ZSBob3ZlcjpjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICBvbkNsaWNrPXtjbGlja2VkQWRkfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hZGRcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcInNpbmdsZVwiKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXVyZWQtbWVkaWFfX2J1dHRvbnMgZmxleCBpdGVtcy1jZW50ZXIgbWItMTAgZ2FwLVsyMHB4XVwiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZlYXR1cmVkLW1lZGlhX19wbGF5LWJ0biBiZy13aGl0ZSB0ZXh0LWJsYWNrIHctWzUwcHhdIGZsZXggaC1bNTBweF0gcm91bmRlZC1bNTAlXSBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbXItWzIwcHhdIHRyYW5zaXRpb24tW2JhY2tncm91bmRdIGR1cmF0aW9uLVsuNXNdIGVhc2UtaW4tb3V0IGhvdmVyOmJnLVtsaW5lYXItZ3JhZGllbnQoMzI4ZGVnLHJnYmEoOTQsMTU4LDI1NSwxKTAlLHJnYmEoMTE5LDMwLDEzNSwxKTEwMCUscmdiYSg2MCwzOCwyNTUsMSkwJSxyZ2JhKDAsMCwwLDEpMTAwJSldIGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6Y3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgb25DbGljaz17Y2xpY2tlZEFkZH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYWRkXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSByZXR1cm47XG4gIH1cblxuICBmdW5jdGlvbiBzaG93TWVkaWEoKSB7XG4gICAgaWYgKHR5cGUgPT09IFwiZnJvbnRcIikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGlmcmFtZVxuICAgICAgICAgIGNsYXNzTmFtZT1cImZlYXR1cmVkLW1lZGlhX192aWRlbyB3LWZ1bGwgaC1mdWxsIGFic29sdXRlIHotMSBzY2FsZS1bMl1cIlxuICAgICAgICAgIHNyYz17bWVkaWFVUkx9XG4gICAgICAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCJcbiAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW5cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcInNpbmdsZVwiIHx8IHR5cGUgPT09IFwiZ2VucmVcIikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGltZyBzcmM9e21lZGlhVVJMfSBjbGFzc05hbWU9XCIgYWJzb2x1dGUgb3BhY2l0eS05NSB3LWZ1bGwgaC1mdWxsICBcIiAvPlxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2BmZWF0dXJlZC1tZWRpYSBiZy1ibGFjayB3LWZ1bGwgJHtcbiAgICAgICAgICB0eXBlID09PSBcImZyb250XCJcbiAgICAgICAgICAgID8gXCJoLXNjcmVlblwiXG4gICAgICAgICAgICA6IHR5cGUgPT09IFwiZ2VucmVcIlxuICAgICAgICAgICAgPyBcIm1pbi1oLVs1NTBweF0gbWItWzQwcHhdXCJcbiAgICAgICAgICAgIDogdHlwZSA9PT0gXCJzaW5nbGVcIlxuICAgICAgICAgICAgPyBcIm1pbi1oLVs3MDBweF1cIlxuICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgIH0gcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuYH1cbiAgICAgID5cbiAgICAgICAgey8qIE1lZGlhIFBsYXllciAqL31cbiAgICAgICAge3Nob3dNZWRpYSgpfVxuXG4gICAgICAgIHsvKiBGZWF0dXJlZCBNZWRpYSBEZXNjcmlwdGlvbiAqL31cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZlYXR1cmVkLW1lZGlhX19iZyBiZy1bbGluZWFyLWdyYWRpZW50KDE4MGRlZyxyZ2JhKDk0LDE1OCwyNTUsMCk2MCUscmdiYSg2OCw2MSwxNTYsLjgpMTAwJSldIGFic29sdXRlIHctZnVsbCBoLWZ1bGwgei0yIGZsZXggcHgtWzUwcHhdIGl0ZW1zLWVuZCB0cmFuc2l0aW9uLW9wYWNpdHkgZHVyYXRpb24tNTAwIG9wYWNpdHktMCBlYXNlLWluLW91dCBob3ZlcjpvcGFjaXR5LTEwMFwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWNjb3VudE9wZW4oZmFsc2UpfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmZWF0dXJlZC1tZWRpYV9fY29udGFpbmVyIGB9PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmZWF0dXJlZC1tZWRpYV9fdGl0bGUgJHtcbiAgICAgICAgICAgICAgICB0eXBlID09PSBcImdlbnJlXCIgPyBcInRleHQtWzVyZW1dXCIgOiBcInRleHQtWzdyZW1dXCJcbiAgICAgICAgICAgICAgfSBmb250LWJvbGQgdGV4dC13aGl0ZSBtYi00ICR7XG4gICAgICAgICAgICAgICAgdHlwZSA9PT0gXCJzaW5nbGVcIiA/IFwiXCIgOiBcImN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2NsaWNrZWRQbGF5fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmVhdHVyZWQtbWVkaWFfX3BsYXlpbmcgICR7XG4gICAgICAgICAgICAgICAgdHlwZSA9PT0gXCJnZW5yZVwiID8gXCJ0ZXh0LVsxcmVtXVwiIDogXCJ0ZXh0LVsxLjJyZW1dXCJcbiAgICAgICAgICAgICAgfSBmb250LWJvbGQgdGV4dC13aGl0ZSBtYi1bLjVyZW1dYH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTk9XIFBMQVlJTkdcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmZWF0dXJlZC1tZWRpYV9fbG9jYXRpb24gJHtcbiAgICAgICAgICAgICAgICB0eXBlID09PSBcImdlbnJlXCIgPyBcInRleHQtWzFyZW1dXCIgOiBcInRleHQtWzEuMnJlbV1cIlxuICAgICAgICAgICAgICB9IGZvbnQtbGlnaHQgdGV4dC13aGl0ZSBtYi04YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2xvY2F0aW9ufVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBGZWF0dXJlZCBNZWRpYSBCdXR0b25zICovfVxuICAgICAgICAgICAge2hpZGVCdXR0b25zKCl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGVDb250ZXh0IiwidXNlUm91dGVyIiwiRmVhdHVyZWRNZWRpYSIsInR5cGUiLCJ0aXRsZSIsImRhdGFJRCIsImZlYXR1cmVkSUQiLCJnZW5yZSIsImxvY2F0aW9uIiwibWVkaWFVUkwiLCJsaW5rVVJMIiwibWVkaWFJRCIsImdsb2JhbFN0YXRlIiwiYWRkVG9MaXN0Iiwid2F0Y2hsaXN0Iiwic2V0QWNjb3VudE9wZW4iLCJyb3V0ZXIiLCJjbGlja2VkQWRkIiwiaWQiLCJpbWciLCJjb25zb2xlIiwibG9nIiwiY2xpY2tlZFBsYXkiLCJwdXNoIiwiaGlkZUJ1dHRvbnMiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiaSIsInNob3dNZWRpYSIsImlmcmFtZSIsInNyYyIsImFsbG93IiwiYWxsb3dGdWxsU2NyZWVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./UI/FeaturedMedia.js\n"));

/***/ })

});