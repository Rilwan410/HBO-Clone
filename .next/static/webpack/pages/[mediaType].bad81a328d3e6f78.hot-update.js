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

/***/ "./pages/[mediaType]/index.js":
/*!************************************!*\
  !*** ./pages/[mediaType]/index.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Login */ \"./components/Login.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_mainLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/mainLayout */ \"./components/mainLayout.js\");\n/* harmony import */ var _UI_FeaturedMedia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/UI/FeaturedMedia */ \"./UI/FeaturedMedia.js\");\n/* harmony import */ var _components_AuthCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/AuthCheck */ \"./components/AuthCheck.js\");\n/* harmony import */ var _UI_MediaRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/UI/MediaRow */ \"./UI/MediaRow.js\");\n/* harmony import */ var _UI_GenreNav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/UI/GenreNav */ \"./UI/GenreNav.js\");\n/* harmony import */ var _UI_Placeholder__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/UI/Placeholder */ \"./UI/Placeholder.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_utilities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/utilities */ \"./components/utilities.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n// import LazyLoad from \"react-lazyload\";\n\n\n\nfunction Home(param) {\n    let { genresData , featuredData  } = param;\n    _s();\n    const [featuredMedia, setFeaturedMedia] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [genreData, setGenreData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { mediaType  } = router.query;\n    console.log(mediaType);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_11__[\"default\"].get().then((data)=>{\n            console.log(data);\n        });\n        axios__WEBPACK_IMPORTED_MODULE_11__[\"default\"].get().then((data2)=>{\n            console.log(data2);\n        });\n    });\n    return (0,_components_AuthCheck__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_mainLayout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_GenreNav__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/pages/[mediaType]/index.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_MediaRow__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                title: \"Movies\",\n                size: \"large-v\",\n                endpoint: \"movie/popular?\"\n            }, void 0, false, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/pages/[mediaType]/index.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/pages/[mediaType]/index.js\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this));\n} // export async function getServerSideProps() {\n //   // Fetch data from external API\n //   let genresData;\n //   let featuredData;\n //   try {\n //     genresData = await axios.get( `https://api.themoviedb.org/3/genre/${mediaType}/list?api_key=1418807822dc08d848a20722bb586c6f&language=en-US%22`);\n //     featuredData = await axios.get( `https://api.themoviedb.org/3/discover/${mediaType}?primary_release_year=2023&api_key=1418807822dc08d848a20722bb586c6f&language=en-US%22`);\n //     console.log(\"success\", genresData);\n //     console.log(\"success\", featuredData);\n //   } catch (error) {\n //     console.log(\"error:\", error);\n //   }\n //   return { props: { genreData: genresData, featuredData: featuredData } };\n // }\n_s(Home, \"aOk99VVF+V0LeIhce+3cy0nG8Us=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bbWVkaWFUeXBlXS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDSztBQUNKO0FBQ1M7QUFDRjtBQUNBO0FBQ1Y7QUFDQTtBQUNyQyx5Q0FBeUM7QUFDRTtBQUNqQjtBQUN3QjtBQUVuQyxTQUFTWSxLQUFLLEtBQTRCO1FBQTVCLEVBQUVDLFdBQVUsRUFBRUMsYUFBWSxFQUFFLEdBQTVCOztJQUMzQixNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHZCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JELE1BQU0sQ0FBQ2UsV0FBV0MsYUFBYSxHQUFHaEIsK0NBQVFBLENBQUMsRUFBRTtJQUM3QyxNQUFNaUIsU0FBU2hCLHNEQUFTQTtJQUN4QixNQUFNLEVBQUVpQixVQUFTLEVBQUUsR0FBR0QsT0FBT0U7SUFDN0JDLFFBQVFDLElBQUlIO0lBRVpuQixnREFBU0EsQ0FBQztRQUNSUyxrREFBU2MsR0FFUEMsS0FBS0MsQ0FBQUE7WUFDSEosUUFBUUMsSUFBSUc7UUFDaEI7UUFDQWhCLGtEQUFTYyxHQUVQQyxLQUFLRSxDQUFBQTtZQUNITCxRQUFRQyxJQUFJSTtRQUNoQjtJQUNGO0lBRUEsT0FBT3JCLGlFQUFTQSxlQUNkLDhEQUFDRiw4REFBVUE7OzBCQUNULDhEQUFDSSxvREFBUUE7Ozs7OzBCQUNULDhEQUFDRCxvREFBUUE7Z0JBQUNxQixPQUFPO2dCQUFVQyxNQUFNO2dCQUFXQyxVQUFVOzs7Ozs7Ozs7Ozs7QUFHNUQsRUFFQSwrQ0FBK0M7Q0FDL0Msb0NBQW9DO0NBQ3BDLG9CQUFvQjtDQUNwQixzQkFBc0I7Q0FDdEIsVUFBVTtDQUNWLHdKQUF3SjtDQUV4SixrTEFBa0w7Q0FFbEwsMENBQTBDO0NBQzFDLDRDQUE0QztDQUM1QyxzQkFBc0I7Q0FDdEIsb0NBQW9DO0NBQ3BDLE1BQU07Q0FFTiw2RUFBNkU7Q0FDN0UsSUFBSTtHQTVDb0JsQjs7UUFHUFQsa0RBQVNBOzs7S0FIRlMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW21lZGlhVHlwZV0vaW5kZXguanM/YjBkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTG9naW4gZnJvbSBcIkAvY29tcG9uZW50cy9Mb2dpblwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTWFpbkxheW91dCBmcm9tIFwiQC9jb21wb25lbnRzL21haW5MYXlvdXRcIjtcbmltcG9ydCBGZWF0dXJlZE1lZGlhIGZyb20gXCJAL1VJL0ZlYXR1cmVkTWVkaWFcIjtcbmltcG9ydCBBdXRoQ2hlY2sgZnJvbSBcIkAvY29tcG9uZW50cy9BdXRoQ2hlY2tcIjtcbmltcG9ydCBNZWRpYVJvdyBmcm9tIFwiQC9VSS9NZWRpYVJvd1wiO1xuaW1wb3J0IEdlbnJlTmF2IGZyb20gXCJAL1VJL0dlbnJlTmF2XCI7XG4vLyBpbXBvcnQgTGF6eUxvYWQgZnJvbSBcInJlYWN0LWxhenlsb2FkXCI7XG5pbXBvcnQgUGxhY2Vob2xkZXIgZnJvbSBcIkAvVUkvUGxhY2Vob2xkZXJcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBzaHVmZmxlQXJyYXkgZnJvbSBcIkAvY29tcG9uZW50cy91dGlsaXRpZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGdlbnJlc0RhdGEsIGZlYXR1cmVkRGF0YSB9KSB7XG4gIGNvbnN0IFtmZWF0dXJlZE1lZGlhLCBzZXRGZWF0dXJlZE1lZGlhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2dlbnJlRGF0YSwgc2V0R2VucmVEYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgbWVkaWFUeXBlIH0gPSByb3V0ZXIucXVlcnk7XG4gIGNvbnNvbGUubG9nKG1lZGlhVHlwZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4aW9zLmdldChcbiAgICAgXG4gICAgKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIH0pXG4gICAgYXhpb3MuZ2V0KFxuICAgICBcbiAgICApLnRoZW4oZGF0YTIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhMilcbiAgICB9KVxuICB9KTtcblxuICByZXR1cm4gQXV0aENoZWNrKFxuICAgIDxNYWluTGF5b3V0PlxuICAgICAgPEdlbnJlTmF2IC8+XG4gICAgICA8TWVkaWFSb3cgdGl0bGU9e1wiTW92aWVzXCJ9IHNpemU9e1wibGFyZ2UtdlwifSBlbmRwb2ludD17XCJtb3ZpZS9wb3B1bGFyP1wifSAvPlxuICAgIDwvTWFpbkxheW91dD5cbiAgKTtcbn1cblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbi8vICAgLy8gRmV0Y2ggZGF0YSBmcm9tIGV4dGVybmFsIEFQSVxuLy8gICBsZXQgZ2VucmVzRGF0YTtcbi8vICAgbGV0IGZlYXR1cmVkRGF0YTtcbi8vICAgdHJ5IHtcbi8vICAgICBnZW5yZXNEYXRhID0gYXdhaXQgYXhpb3MuZ2V0KCBgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9nZW5yZS8ke21lZGlhVHlwZX0vbGlzdD9hcGlfa2V5PTE0MTg4MDc4MjJkYzA4ZDg0OGEyMDcyMmJiNTg2YzZmJmxhbmd1YWdlPWVuLVVTJTIyYCk7XG5cbi8vICAgICBmZWF0dXJlZERhdGEgPSBhd2FpdCBheGlvcy5nZXQoIGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL2Rpc2NvdmVyLyR7bWVkaWFUeXBlfT9wcmltYXJ5X3JlbGVhc2VfeWVhcj0yMDIzJmFwaV9rZXk9MTQxODgwNzgyMmRjMDhkODQ4YTIwNzIyYmI1ODZjNmYmbGFuZ3VhZ2U9ZW4tVVMlMjJgKTtcblxuLy8gICAgIGNvbnNvbGUubG9nKFwic3VjY2Vzc1wiLCBnZW5yZXNEYXRhKTtcbi8vICAgICBjb25zb2xlLmxvZyhcInN1Y2Nlc3NcIiwgZmVhdHVyZWREYXRhKTtcbi8vICAgfSBjYXRjaCAoZXJyb3IpIHtcbi8vICAgICBjb25zb2xlLmxvZyhcImVycm9yOlwiLCBlcnJvcik7XG4vLyAgIH1cblxuLy8gICByZXR1cm4geyBwcm9wczogeyBnZW5yZURhdGE6IGdlbnJlc0RhdGEsIGZlYXR1cmVkRGF0YTogZmVhdHVyZWREYXRhIH0gfTtcbi8vIH1cbiJdLCJuYW1lcyI6WyJMb2dpbiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiTWFpbkxheW91dCIsIkZlYXR1cmVkTWVkaWEiLCJBdXRoQ2hlY2siLCJNZWRpYVJvdyIsIkdlbnJlTmF2IiwiUGxhY2Vob2xkZXIiLCJheGlvcyIsInNodWZmbGVBcnJheSIsIkhvbWUiLCJnZW5yZXNEYXRhIiwiZmVhdHVyZWREYXRhIiwiZmVhdHVyZWRNZWRpYSIsInNldEZlYXR1cmVkTWVkaWEiLCJnZW5yZURhdGEiLCJzZXRHZW5yZURhdGEiLCJyb3V0ZXIiLCJtZWRpYVR5cGUiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJnZXQiLCJ0aGVuIiwiZGF0YSIsImRhdGEyIiwidGl0bGUiLCJzaXplIiwiZW5kcG9pbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[mediaType]/index.js\n"));

/***/ })

});