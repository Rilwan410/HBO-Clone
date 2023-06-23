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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Genre; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Login */ \"./components/Login.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_mainLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/mainLayout */ \"./components/mainLayout.js\");\n/* harmony import */ var _UI_FeaturedMedia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/UI/FeaturedMedia */ \"./UI/FeaturedMedia.js\");\n/* harmony import */ var _components_AuthCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/AuthCheck */ \"./components/AuthCheck.js\");\n/* harmony import */ var _UI_MediaRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/UI/MediaRow */ \"./UI/MediaRow.js\");\n/* harmony import */ var _UI_GenreNav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/UI/GenreNav */ \"./UI/GenreNav.js\");\n/* harmony import */ var _UI_Placeholder__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/UI/Placeholder */ \"./UI/Placeholder.js\");\n/* harmony import */ var _HBOProvider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/HBOProvider */ \"./HBOProvider.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n// import LazyLoad from \"react-lazyload\";\n\n\nvar __N_SSP = true;\nfunction Genre(param) {\n    let { context , featuredData , genresData  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { mediaType , genre_id  } = context;\n    const globalState = (0,_HBOProvider__WEBPACK_IMPORTED_MODULE_10__.useStateContext)();\n    const { thumbnailSizes  } = globalState;\n    function showRandomMedia() {\n        let thumbnailSize;\n        return genresData.genres.map((genre, index)=>{\n            thumbnailSize = thumbnailSizes[Math.floor(Math.random() * thumbnailSizes.length)];\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_MediaRow__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                category: mediaType,\n                title: \"genre.name\",\n                linkURL: \"movie/id\",\n                size: thumbnailSize,\n                endpoint: \"discover/\".concat(mediaType, \"?with_genres=\").concat(genre_id, \"&primary_release_year=2023&page=\").concat(index + 1, \"&api_key=1418807822dc08d848a20722bb586c6f&language=en-US%22\")\n            }, void 0, false, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/pages/[mediaType]/genre/[genre_id].js\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, this);\n        });\n    }\n    return (0,_components_AuthCheck__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_mainLayout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_GenreNav__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                mediaType: mediaType,\n                genresData: genresData,\n                featuredData: featuredData,\n                genreId: genre_id\n            }, void 0, false, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/pages/[mediaType]/genre/[genre_id].js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_FeaturedMedia__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                genre: mediaType,\n                dataID: featuredData,\n                type: \"genre\",\n                linkURL: \"/\".concat(mediaType, \"/\").concat(featuredData.id),\n                mediaURL: \"https://image.tmdb.org/t/p/original/\".concat(featuredData.backdrop_path),\n                title: \"\".concat(mediaType === \"tv\" ? featuredData.name : featuredData.title),\n                location: featuredData.overview\n            }, void 0, false, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/pages/[mediaType]/genre/[genre_id].js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            showRandomMedia()\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/pages/[mediaType]/genre/[genre_id].js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this));\n}\n_s(Genre, \"N4q9F1JTi5HNW9jxLn3sgPLhvdA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _HBOProvider__WEBPACK_IMPORTED_MODULE_10__.useStateContext\n    ];\n});\n_c = Genre;\nvar _c;\n$RefreshReg$(_c, \"Genre\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bbWVkaWFUeXBlXS9nZW5yZS9bZ2VucmVfaWRdLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNLO0FBQ0o7QUFDUztBQUNGO0FBQ0E7QUFDVjtBQUNBO0FBQ3JDLHlDQUF5QztBQUNFO0FBRUs7O0FBR2pDLFNBQVNXLE1BQU0sS0FBcUM7UUFBckMsRUFBRUMsUUFBTyxFQUFFQyxhQUFZLEVBQUVDLFdBQVUsRUFBRSxHQUFyQzs7SUFDNUIsTUFBTUMsU0FBU1osc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRWEsVUFBUyxFQUFFQyxTQUFRLEVBQUUsR0FBR0w7SUFLaEMsTUFBTU0sY0FBY1IsOERBQWVBO0lBQ25DLE1BQU0sRUFBRVMsZUFBYyxFQUFFLEdBQUdEO0lBRTNCLFNBQVNFO1FBQ1AsSUFBSUM7UUFDSixPQUFPUCxXQUFXUSxPQUFPQyxJQUFJLENBQUNDLE9BQU9DO1lBQ25DSixnQkFDRUYsY0FBYyxDQUFDTyxLQUFLQyxNQUFNRCxLQUFLRSxXQUFXVCxlQUFlVSxRQUFRO1lBQ25FLHFCQUNFLDhEQUFDdEIsb0RBQVFBO2dCQUNQdUIsVUFBVWQ7Z0JBQ1ZlLE9BQU87Z0JBQ1BDLFNBQVU7Z0JBQ1ZDLE1BQU1aO2dCQUNOYSxVQUFVLFlBQXFDakIsT0FBekJELFdBQVUsaUJBQzlCUyxPQUQ2Q1IsVUFBUyxvQ0FFdkQsT0FEQ1EsUUFBUSxHQUNUOzs7Ozs7UUFHUDtJQUNGO0lBRUEsT0FBT25CLGlFQUFTQSxlQUNkLDhEQUFDRiw4REFBVUE7OzBCQUNULDhEQUFDSSxvREFBUUE7Z0JBQ1BRLFdBQVdBO2dCQUNYRixZQUFZQTtnQkFDWkQsY0FBY0E7Z0JBQ2RzQixTQUFXbEI7Ozs7OzswQkFFYiw4REFBQ1oseURBQWFBO2dCQUNabUIsT0FBT1I7Z0JBQ1BvQixRQUFRdkI7Z0JBQ1J3QixNQUFNO2dCQUNOTCxTQUFTLElBQWlCbkIsT0FBYkcsV0FBVSxLQUFtQixPQUFoQkgsYUFBYXlCO2dCQUN2Q0MsVUFBVSx1Q0FBa0UsT0FBM0IxQixhQUFhMkI7Z0JBQzlEVCxPQUFPLEdBQStELE9BQTVEZixjQUFjLE9BQU9ILGFBQWE0QixPQUFPNUIsYUFBYWtCO2dCQUNoRVcsVUFBVTdCLGFBQWE4Qjs7Ozs7O1lBR3hCdkI7Ozs7Ozs7QUFHUDtHQWxEd0JUOztRQUNQUixrREFBU0E7UUFNSk8sMERBQWVBOzs7S0FQYkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW21lZGlhVHlwZV0vZ2VucmUvW2dlbnJlX2lkXS5qcz85NjM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMb2dpbiBmcm9tIFwiQC9jb21wb25lbnRzL0xvZ2luXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBNYWluTGF5b3V0IGZyb20gXCJAL2NvbXBvbmVudHMvbWFpbkxheW91dFwiO1xuaW1wb3J0IEZlYXR1cmVkTWVkaWEgZnJvbSBcIkAvVUkvRmVhdHVyZWRNZWRpYVwiO1xuaW1wb3J0IEF1dGhDaGVjayBmcm9tIFwiQC9jb21wb25lbnRzL0F1dGhDaGVja1wiO1xuaW1wb3J0IE1lZGlhUm93IGZyb20gXCJAL1VJL01lZGlhUm93XCI7XG5pbXBvcnQgR2VucmVOYXYgZnJvbSBcIkAvVUkvR2VucmVOYXZcIjtcbi8vIGltcG9ydCBMYXp5TG9hZCBmcm9tIFwicmVhY3QtbGF6eWxvYWRcIjtcbmltcG9ydCBQbGFjZWhvbGRlciBmcm9tIFwiQC9VSS9QbGFjZWhvbGRlclwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGVDb250ZXh0IH0gZnJvbSBcIkAvSEJPUHJvdmlkZXJcIjtcbmltcG9ydCBzaHVmZmxlQXJyYXkgZnJvbSBcIkAvY29tcG9uZW50cy91dGlsaXRpZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2VucmUoeyBjb250ZXh0LCBmZWF0dXJlZERhdGEsIGdlbnJlc0RhdGEgfSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBtZWRpYVR5cGUsIGdlbnJlX2lkIH0gPSBjb250ZXh0O1xuXG5cblxuXG4gIGNvbnN0IGdsb2JhbFN0YXRlID0gdXNlU3RhdGVDb250ZXh0KCk7XG4gIGNvbnN0IHsgdGh1bWJuYWlsU2l6ZXMgfSA9IGdsb2JhbFN0YXRlO1xuXG4gIGZ1bmN0aW9uIHNob3dSYW5kb21NZWRpYSgpIHtcbiAgICBsZXQgdGh1bWJuYWlsU2l6ZTtcbiAgICByZXR1cm4gZ2VucmVzRGF0YS5nZW5yZXMubWFwKChnZW5yZSwgaW5kZXgpID0+IHtcbiAgICAgIHRodW1ibmFpbFNpemUgPVxuICAgICAgICB0aHVtYm5haWxTaXplc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aHVtYm5haWxTaXplcy5sZW5ndGgpXTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxNZWRpYVJvd1xuICAgICAgICAgIGNhdGVnb3J5PXttZWRpYVR5cGV9XG4gICAgICAgICAgdGl0bGU9eydnZW5yZS5uYW1lJ31cbiAgICAgICAgICBsaW5rVVJMPXtgbW92aWUvaWRgfVxuICAgICAgICAgIHNpemU9e3RodW1ibmFpbFNpemV9XG4gICAgICAgICAgZW5kcG9pbnQ9e2BkaXNjb3Zlci8ke21lZGlhVHlwZX0/d2l0aF9nZW5yZXM9JHtnZW5yZV9pZH0mcHJpbWFyeV9yZWxlYXNlX3llYXI9MjAyMyZwYWdlPSR7XG4gICAgICAgICAgICBpbmRleCArIDFcbiAgICAgICAgICB9JmFwaV9rZXk9MTQxODgwNzgyMmRjMDhkODQ4YTIwNzIyYmI1ODZjNmYmbGFuZ3VhZ2U9ZW4tVVMlMjJgfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBBdXRoQ2hlY2soXG4gICAgPE1haW5MYXlvdXQ+XG4gICAgICA8R2VucmVOYXZcbiAgICAgICAgbWVkaWFUeXBlPXttZWRpYVR5cGV9XG4gICAgICAgIGdlbnJlc0RhdGE9e2dlbnJlc0RhdGF9XG4gICAgICAgIGZlYXR1cmVkRGF0YT17ZmVhdHVyZWREYXRhfVxuICAgICAgICBnZW5yZUlkID0ge2dlbnJlX2lkfVxuICAgICAgLz5cbiAgICAgIDxGZWF0dXJlZE1lZGlhXG4gICAgICAgIGdlbnJlPXttZWRpYVR5cGV9XG4gICAgICAgIGRhdGFJRD17ZmVhdHVyZWREYXRhfVxuICAgICAgICB0eXBlPXtcImdlbnJlXCJ9XG4gICAgICAgIGxpbmtVUkw9e2AvJHttZWRpYVR5cGV9LyR7ZmVhdHVyZWREYXRhLmlkfWB9XG4gICAgICAgIG1lZGlhVVJMPXtgaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3Avb3JpZ2luYWwvJHtmZWF0dXJlZERhdGEuYmFja2Ryb3BfcGF0aH1gfVxuICAgICAgICB0aXRsZT17YCR7bWVkaWFUeXBlID09PSBcInR2XCIgPyBmZWF0dXJlZERhdGEubmFtZSA6IGZlYXR1cmVkRGF0YS50aXRsZX1gfVxuICAgICAgICBsb2NhdGlvbj17ZmVhdHVyZWREYXRhLm92ZXJ2aWV3fVxuICAgICAgLz5cblxuICAgICAge3Nob3dSYW5kb21NZWRpYSgpfVxuICAgIDwvTWFpbkxheW91dD5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gIC8vIEZldGNoIGRhdGEgZnJvbSBleHRlcm5hbCBBUElcbiAgbGV0IGdlbnJlc0RhdGE7XG4gIGxldCBmZWF0dXJlZERhdGE7XG4gIHRyeSB7XG4gICAgZ2VucmVzRGF0YSA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAgIGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL2dlbnJlLyR7Y29udGV4dC5xdWVyeS5tZWRpYVR5cGV9L2xpc3Q/YXBpX2tleT0xNDE4ODA3ODIyZGMwOGQ4NDhhMjA3MjJiYjU4NmM2ZiZsYW5ndWFnZT1lbi1VUyUyMmBcbiAgICApO1xuXG4gICAgZmVhdHVyZWREYXRhID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvZGlzY292ZXIvJHtjb250ZXh0LnF1ZXJ5Lm1lZGlhVHlwZX0/cHJpbWFyeV9yZWxlYXNlX3llYXI9MjAyMyZ3aXRoX2dlbnJlcz0ke2NvbnRleHQucXVlcnkuZ2VucmVfaWR9JmFwaV9rZXk9MTQxODgwNzgyMmRjMDhkODQ4YTIwNzIyYmI1ODZjNmYmbGFuZ3VhZ2U9ZW4tVVMlMjJgXG4gICAgKTtcblxuICAgIGNvbnNvbGUubG9nKFwic3VjY2Vzc1wiLCBnZW5yZXNEYXRhLmRhdGEpO1xuICAgIGNvbnNvbGUubG9nKFwic3VjY2Vzc1wiLCBmZWF0dXJlZERhdGEuZGF0YSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coXCJlcnJvcjpcIiwgZXJyb3IpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgY29udGV4dDogY29udGV4dC5xdWVyeSxcbiAgICAgIGdlbnJlc0RhdGE6IGdlbnJlc0RhdGEuZGF0YSxcbiAgICAgIGZlYXR1cmVkRGF0YTogc2h1ZmZsZUFycmF5KGZlYXR1cmVkRGF0YS5kYXRhLnJlc3VsdHMpWzBdLFxuICAgIH0sXG4gIH07XG59XG4iXSwibmFtZXMiOlsiTG9naW4iLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIk1haW5MYXlvdXQiLCJGZWF0dXJlZE1lZGlhIiwiQXV0aENoZWNrIiwiTWVkaWFSb3ciLCJHZW5yZU5hdiIsIlBsYWNlaG9sZGVyIiwidXNlU3RhdGVDb250ZXh0IiwiR2VucmUiLCJjb250ZXh0IiwiZmVhdHVyZWREYXRhIiwiZ2VucmVzRGF0YSIsInJvdXRlciIsIm1lZGlhVHlwZSIsImdlbnJlX2lkIiwiZ2xvYmFsU3RhdGUiLCJ0aHVtYm5haWxTaXplcyIsInNob3dSYW5kb21NZWRpYSIsInRodW1ibmFpbFNpemUiLCJnZW5yZXMiLCJtYXAiLCJnZW5yZSIsImluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiY2F0ZWdvcnkiLCJ0aXRsZSIsImxpbmtVUkwiLCJzaXplIiwiZW5kcG9pbnQiLCJnZW5yZUlkIiwiZGF0YUlEIiwidHlwZSIsImlkIiwibWVkaWFVUkwiLCJiYWNrZHJvcF9wYXRoIiwibmFtZSIsImxvY2F0aW9uIiwib3ZlcnZpZXciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[mediaType]/genre/[genre_id].js\n"));

/***/ })

});