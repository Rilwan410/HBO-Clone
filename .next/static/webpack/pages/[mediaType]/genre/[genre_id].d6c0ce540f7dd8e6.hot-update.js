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

/***/ "./pages/[mediaType]/genre/[genre_id].js":
/*!***********************************************!*\
  !*** ./pages/[mediaType]/genre/[genre_id].js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Genre; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Login */ \"./components/Login.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_mainLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/mainLayout */ \"./components/mainLayout.js\");\n/* harmony import */ var _UI_FeaturedMedia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/UI/FeaturedMedia */ \"./UI/FeaturedMedia.js\");\n/* harmony import */ var _components_AuthCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/AuthCheck */ \"./components/AuthCheck.js\");\n/* harmony import */ var _UI_MediaRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/UI/MediaRow */ \"./UI/MediaRow.js\");\n/* harmony import */ var _UI_GenreNav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/UI/GenreNav */ \"./UI/GenreNav.js\");\n/* harmony import */ var _UI_Placeholder__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/UI/Placeholder */ \"./UI/Placeholder.js\");\n/* harmony import */ var _HBOProvider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/HBOProvider */ \"./HBOProvider.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n// import LazyLoad from \"react-lazyload\";\n\n\nvar __N_SSP = true;\nfunction Genre(param) {\n    let { context , featuredData , genresData  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { mediaType , genre_id  } = context;\n    const globalState = (0,_HBOProvider__WEBPACK_IMPORTED_MODULE_10__.useStateContext)();\n    const { thumbnailSizes  } = globalState;\n    function showRandomMedia() {\n        let thumbnailSize;\n        return genresData.genres.map((genre, index)=>{\n            thumbnailSize = thumbnailSizes[Math.floor(Math.random() * thumbnailSizes.length)];\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_MediaRow__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                category: mediaType,\n                title: genre.name,\n                linkURL: \"movie/id\",\n                size: thumbnailSize,\n                endpoint: \"discover/\".concat(mediaType, \"?with_genres=\").concat(genre_id, \"&primary_release_year=2023&page=\").concat(index + 1, \"&api_key=1418807822dc08d848a20722bb586c6f&language=en-US%22\")\n            }, void 0, false, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/pages/[mediaType]/genre/[genre_id].js\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, this);\n        });\n    }\n    return (0,_components_AuthCheck__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_mainLayout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_GenreNav__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                mediaType: mediaType,\n                genresData: genresData,\n                featuredData: featuredData,\n                genreId: genre_id\n            }, void 0, false, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/pages/[mediaType]/genre/[genre_id].js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_FeaturedMedia__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                onClick: ()=>{\n                    router.push(\"\");\n                },\n                genre: mediaType,\n                dataID: featuredData,\n                type: \"genre\",\n                linkURL: \"\".concat(mediaType, \"/\").concat(featuredData.id),\n                mediaURL: \"https://image.tmdb.org/t/p/original/\".concat(featuredData.backdrop_path),\n                title: \"\".concat(mediaType === \"tv\" ? featuredData.name : featuredData.title),\n                location: featuredData.overview\n            }, void 0, false, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/pages/[mediaType]/genre/[genre_id].js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            showRandomMedia()\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/pages/[mediaType]/genre/[genre_id].js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this));\n}\n_s(Genre, \"N4q9F1JTi5HNW9jxLn3sgPLhvdA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _HBOProvider__WEBPACK_IMPORTED_MODULE_10__.useStateContext\n    ];\n});\n_c = Genre;\nvar _c;\n$RefreshReg$(_c, \"Genre\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bbWVkaWFUeXBlXS9nZW5yZS9bZ2VucmVfaWRdLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNLO0FBQ0o7QUFDUztBQUNGO0FBQ0E7QUFDVjtBQUNBO0FBQ3JDLHlDQUF5QztBQUNFO0FBRUs7O0FBR2pDLFNBQVNXLE1BQU0sS0FBcUM7UUFBckMsRUFBRUMsUUFBTyxFQUFFQyxhQUFZLEVBQUVDLFdBQVUsRUFBRSxHQUFyQzs7SUFDNUIsTUFBTUMsU0FBU1osc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRWEsVUFBUyxFQUFFQyxTQUFRLEVBQUUsR0FBR0w7SUFLaEMsTUFBTU0sY0FBY1IsOERBQWVBO0lBQ25DLE1BQU0sRUFBRVMsZUFBYyxFQUFFLEdBQUdEO0lBRTNCLFNBQVNFO1FBQ1AsSUFBSUM7UUFDSixPQUFPUCxXQUFXUSxPQUFPQyxJQUFJLENBQUNDLE9BQU9DO1lBQ25DSixnQkFDRUYsY0FBYyxDQUFDTyxLQUFLQyxNQUFNRCxLQUFLRSxXQUFXVCxlQUFlVSxRQUFRO1lBQ25FLHFCQUNFLDhEQUFDdEIsb0RBQVFBO2dCQUNQdUIsVUFBVWQ7Z0JBQ1ZlLE9BQU9QLE1BQU1RO2dCQUNiQyxTQUFVO2dCQUNWQyxNQUFNYjtnQkFDTmMsVUFBVSxZQUFxQ2xCLE9BQXpCRCxXQUFVLGlCQUM5QlMsT0FENkNSLFVBQVMsb0NBRXZELE9BRENRLFFBQVEsR0FDVDs7Ozs7O1FBR1A7SUFDRjtJQUVBLE9BQU9uQixpRUFBU0EsZUFDZCw4REFBQ0YsOERBQVVBOzswQkFDVCw4REFBQ0ksb0RBQVFBO2dCQUNQUSxXQUFXQTtnQkFDWEYsWUFBWUE7Z0JBQ1pELGNBQWNBO2dCQUNkdUIsU0FBV25COzs7Ozs7MEJBRWIsOERBQUNaLHlEQUFhQTtnQkFDZGdDLFNBQVc7b0JBQU90QixPQUFPdUIsS0FBTTtnQkFBRTtnQkFDL0JkLE9BQU9SO2dCQUNQdUIsUUFBUTFCO2dCQUNSMkIsTUFBTTtnQkFDTlAsU0FBUyxHQUFnQnBCLE9BQWJHLFdBQVUsS0FBbUIsT0FBaEJILGFBQWE0QjtnQkFDdENDLFVBQVUsdUNBQWtFLE9BQTNCN0IsYUFBYThCO2dCQUM5RFosT0FBTyxHQUErRCxPQUE1RGYsY0FBYyxPQUFPSCxhQUFhbUIsT0FBT25CLGFBQWFrQjtnQkFDaEVhLFVBQVUvQixhQUFhZ0M7Ozs7OztZQUd4QnpCOzs7Ozs7O0FBR1A7R0FuRHdCVDs7UUFDUFIsa0RBQVNBO1FBTUpPLDBEQUFlQTs7O0tBUGJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1ttZWRpYVR5cGVdL2dlbnJlL1tnZW5yZV9pZF0uanM/OTYzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTG9naW4gZnJvbSBcIkAvY29tcG9uZW50cy9Mb2dpblwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTWFpbkxheW91dCBmcm9tIFwiQC9jb21wb25lbnRzL21haW5MYXlvdXRcIjtcbmltcG9ydCBGZWF0dXJlZE1lZGlhIGZyb20gXCJAL1VJL0ZlYXR1cmVkTWVkaWFcIjtcbmltcG9ydCBBdXRoQ2hlY2sgZnJvbSBcIkAvY29tcG9uZW50cy9BdXRoQ2hlY2tcIjtcbmltcG9ydCBNZWRpYVJvdyBmcm9tIFwiQC9VSS9NZWRpYVJvd1wiO1xuaW1wb3J0IEdlbnJlTmF2IGZyb20gXCJAL1VJL0dlbnJlTmF2XCI7XG4vLyBpbXBvcnQgTGF6eUxvYWQgZnJvbSBcInJlYWN0LWxhenlsb2FkXCI7XG5pbXBvcnQgUGxhY2Vob2xkZXIgZnJvbSBcIkAvVUkvUGxhY2Vob2xkZXJcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZVN0YXRlQ29udGV4dCB9IGZyb20gXCJAL0hCT1Byb3ZpZGVyXCI7XG5pbXBvcnQgc2h1ZmZsZUFycmF5IGZyb20gXCJAL2NvbXBvbmVudHMvdXRpbGl0aWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdlbnJlKHsgY29udGV4dCwgZmVhdHVyZWREYXRhLCBnZW5yZXNEYXRhIH0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgbWVkaWFUeXBlLCBnZW5yZV9pZCB9ID0gY29udGV4dDtcblxuXG5cblxuICBjb25zdCBnbG9iYWxTdGF0ZSA9IHVzZVN0YXRlQ29udGV4dCgpO1xuICBjb25zdCB7IHRodW1ibmFpbFNpemVzIH0gPSBnbG9iYWxTdGF0ZTtcblxuICBmdW5jdGlvbiBzaG93UmFuZG9tTWVkaWEoKSB7XG4gICAgbGV0IHRodW1ibmFpbFNpemU7XG4gICAgcmV0dXJuIGdlbnJlc0RhdGEuZ2VucmVzLm1hcCgoZ2VucmUsIGluZGV4KSA9PiB7XG4gICAgICB0aHVtYm5haWxTaXplID1cbiAgICAgICAgdGh1bWJuYWlsU2l6ZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGh1bWJuYWlsU2l6ZXMubGVuZ3RoKV07XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8TWVkaWFSb3dcbiAgICAgICAgICBjYXRlZ29yeT17bWVkaWFUeXBlfVxuICAgICAgICAgIHRpdGxlPXtnZW5yZS5uYW1lfVxuICAgICAgICAgIGxpbmtVUkw9e2Btb3ZpZS9pZGB9XG4gICAgICAgICAgc2l6ZT17dGh1bWJuYWlsU2l6ZX1cbiAgICAgICAgICBlbmRwb2ludD17YGRpc2NvdmVyLyR7bWVkaWFUeXBlfT93aXRoX2dlbnJlcz0ke2dlbnJlX2lkfSZwcmltYXJ5X3JlbGVhc2VfeWVhcj0yMDIzJnBhZ2U9JHtcbiAgICAgICAgICAgIGluZGV4ICsgMVxuICAgICAgICAgIH0mYXBpX2tleT0xNDE4ODA3ODIyZGMwOGQ4NDhhMjA3MjJiYjU4NmM2ZiZsYW5ndWFnZT1lbi1VUyUyMmB9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIEF1dGhDaGVjayhcbiAgICA8TWFpbkxheW91dD5cbiAgICAgIDxHZW5yZU5hdlxuICAgICAgICBtZWRpYVR5cGU9e21lZGlhVHlwZX1cbiAgICAgICAgZ2VucmVzRGF0YT17Z2VucmVzRGF0YX1cbiAgICAgICAgZmVhdHVyZWREYXRhPXtmZWF0dXJlZERhdGF9XG4gICAgICAgIGdlbnJlSWQgPSB7Z2VucmVfaWR9XG4gICAgICAvPlxuICAgICAgPEZlYXR1cmVkTWVkaWFcbiAgICAgIG9uQ2xpY2sgPSB7KCkgPT4ge3JvdXRlci5wdXNoKGBgKX19XG4gICAgICAgIGdlbnJlPXttZWRpYVR5cGV9XG4gICAgICAgIGRhdGFJRD17ZmVhdHVyZWREYXRhfVxuICAgICAgICB0eXBlPXtcImdlbnJlXCJ9XG4gICAgICAgIGxpbmtVUkw9e2Ake21lZGlhVHlwZX0vJHtmZWF0dXJlZERhdGEuaWR9YH1cbiAgICAgICAgbWVkaWFVUkw9e2BodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC9vcmlnaW5hbC8ke2ZlYXR1cmVkRGF0YS5iYWNrZHJvcF9wYXRofWB9XG4gICAgICAgIHRpdGxlPXtgJHttZWRpYVR5cGUgPT09IFwidHZcIiA/IGZlYXR1cmVkRGF0YS5uYW1lIDogZmVhdHVyZWREYXRhLnRpdGxlfWB9XG4gICAgICAgIGxvY2F0aW9uPXtmZWF0dXJlZERhdGEub3ZlcnZpZXd9XG4gICAgICAvPlxuXG4gICAgICB7c2hvd1JhbmRvbU1lZGlhKCl9XG4gICAgPC9NYWluTGF5b3V0PlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgLy8gRmV0Y2ggZGF0YSBmcm9tIGV4dGVybmFsIEFQSVxuICBsZXQgZ2VucmVzRGF0YTtcbiAgbGV0IGZlYXR1cmVkRGF0YTtcbiAgdHJ5IHtcbiAgICBnZW5yZXNEYXRhID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvZ2VucmUvJHtjb250ZXh0LnF1ZXJ5Lm1lZGlhVHlwZX0vbGlzdD9hcGlfa2V5PTE0MTg4MDc4MjJkYzA4ZDg0OGEyMDcyMmJiNTg2YzZmJmxhbmd1YWdlPWVuLVVTJTIyYFxuICAgICk7XG5cbiAgICBmZWF0dXJlZERhdGEgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgICBgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9kaXNjb3Zlci8ke2NvbnRleHQucXVlcnkubWVkaWFUeXBlfT9wcmltYXJ5X3JlbGVhc2VfeWVhcj0yMDIzJndpdGhfZ2VucmVzPSR7Y29udGV4dC5xdWVyeS5nZW5yZV9pZH0mYXBpX2tleT0xNDE4ODA3ODIyZGMwOGQ4NDhhMjA3MjJiYjU4NmM2ZiZsYW5ndWFnZT1lbi1VUyUyMmBcbiAgICApO1xuXG4gICAgY29uc29sZS5sb2coXCJzdWNjZXNzXCIsIGdlbnJlc0RhdGEuZGF0YSk7XG4gICAgY29uc29sZS5sb2coXCJzdWNjZXNzXCIsIGZlYXR1cmVkRGF0YS5kYXRhKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhcImVycm9yOlwiLCBlcnJvcik7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBjb250ZXh0OiBjb250ZXh0LnF1ZXJ5LFxuICAgICAgZ2VucmVzRGF0YTogZ2VucmVzRGF0YS5kYXRhLFxuICAgICAgZmVhdHVyZWREYXRhOiBzaHVmZmxlQXJyYXkoZmVhdHVyZWREYXRhLmRhdGEucmVzdWx0cylbMF0sXG4gICAgfSxcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJMb2dpbiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiTWFpbkxheW91dCIsIkZlYXR1cmVkTWVkaWEiLCJBdXRoQ2hlY2siLCJNZWRpYVJvdyIsIkdlbnJlTmF2IiwiUGxhY2Vob2xkZXIiLCJ1c2VTdGF0ZUNvbnRleHQiLCJHZW5yZSIsImNvbnRleHQiLCJmZWF0dXJlZERhdGEiLCJnZW5yZXNEYXRhIiwicm91dGVyIiwibWVkaWFUeXBlIiwiZ2VucmVfaWQiLCJnbG9iYWxTdGF0ZSIsInRodW1ibmFpbFNpemVzIiwic2hvd1JhbmRvbU1lZGlhIiwidGh1bWJuYWlsU2l6ZSIsImdlbnJlcyIsIm1hcCIsImdlbnJlIiwiaW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJjYXRlZ29yeSIsInRpdGxlIiwibmFtZSIsImxpbmtVUkwiLCJzaXplIiwiZW5kcG9pbnQiLCJnZW5yZUlkIiwib25DbGljayIsInB1c2giLCJkYXRhSUQiLCJ0eXBlIiwiaWQiLCJtZWRpYVVSTCIsImJhY2tkcm9wX3BhdGgiLCJsb2NhdGlvbiIsIm92ZXJ2aWV3Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[mediaType]/genre/[genre_id].js\n"));

/***/ })

});