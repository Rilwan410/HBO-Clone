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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Genre; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Login */ \"./components/Login.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_mainLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/mainLayout */ \"./components/mainLayout.js\");\n/* harmony import */ var _UI_FeaturedMedia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/UI/FeaturedMedia */ \"./UI/FeaturedMedia.js\");\n/* harmony import */ var _components_AuthCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/AuthCheck */ \"./components/AuthCheck.js\");\n/* harmony import */ var _UI_MediaRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/UI/MediaRow */ \"./UI/MediaRow.js\");\n/* harmony import */ var _UI_GenreNav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/UI/GenreNav */ \"./UI/GenreNav.js\");\n/* harmony import */ var _UI_Placeholder__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/UI/Placeholder */ \"./UI/Placeholder.js\");\n/* harmony import */ var _HBOProvider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/HBOProvider */ \"./HBOProvider.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n// import LazyLoad from \"react-lazyload\";\n\n\nvar __N_SSP = true;\nfunction Genre(param) {\n    let { context , featuredData , genre  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { mediaType  } = context;\n    const globalState = (0,_HBOProvider__WEBPACK_IMPORTED_MODULE_10__.useStateContext)();\n    const { thumbnailSizes  } = globalState;\n    function showRandomMedia() {\n        let thumbnailSize;\n        return genresData.genres.map((genre)=>{\n            thumbnailSize = thumbnailSizes[Math.floor(Math.random() * thumbnailSizes.length)];\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_MediaRow__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                category: mediaType,\n                title: genre.name,\n                linkURL: \"movie/id\",\n                size: thumbnailSize,\n                endpoint: \"discover/\".concat(mediaType, \"?with_genres=\").concat(genre.id, \"&primary_release_year=2023&api_key=1418807822dc08d848a20722bb586c6f&language=en-US%22\")\n            }, void 0, false, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/pages/[mediaType]/genre/[genre_id].js\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, this);\n        });\n    }\n    return (0,_components_AuthCheck__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_mainLayout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_FeaturedMedia__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                genre: mediaType,\n                dataID: featuredData,\n                type: \"genre\",\n                linkURL: \"\".concat(mediaType, \"/\").concat(featuredData.id),\n                ire: true,\n                mediaURL: \"https://image.tmdb.org/t/p/original/\".concat(featuredData.backdrop_path),\n                title: \"\".concat(mediaType === \"tv\" ? featuredData.name : featuredData.title),\n                location: featuredData.overview\n            }, void 0, false, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/pages/[mediaType]/genre/[genre_id].js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            showRandomMedia()\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/pages/[mediaType]/genre/[genre_id].js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this));\n}\n_s(Genre, \"N4q9F1JTi5HNW9jxLn3sgPLhvdA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _HBOProvider__WEBPACK_IMPORTED_MODULE_10__.useStateContext\n    ];\n});\n_c = Genre;\nvar _c;\n$RefreshReg$(_c, \"Genre\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bbWVkaWFUeXBlXS9nZW5yZS9bZ2VucmVfaWRdLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNLO0FBQ0o7QUFDUztBQUNGO0FBQ0E7QUFDVjtBQUNBO0FBQ3JDLHlDQUF5QztBQUNFO0FBRUs7O0FBR2pDLFNBQVNXLE1BQU0sS0FBOEI7UUFBOUIsRUFBQ0MsUUFBTyxFQUFFQyxhQUFZLEVBQUVDLE1BQUssRUFBQyxHQUE5Qjs7SUFDNUIsTUFBTUMsU0FBU1osc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRWEsVUFBUyxFQUFFLEdBQUdKO0lBRXRCLE1BQU1LLGNBQWNQLDhEQUFlQTtJQUNuQyxNQUFNLEVBQUVRLGVBQWMsRUFBRSxHQUFHRDtJQUUzQixTQUFTRTtRQUNQLElBQUlDO1FBQ0osT0FBT0MsV0FBV0MsT0FBT0MsSUFBSSxDQUFDVDtZQUM1Qk0sZ0JBQ0VGLGNBQWMsQ0FBQ00sS0FBS0MsTUFBTUQsS0FBS0UsV0FBV1IsZUFBZVMsUUFBUTtZQUNuRSxxQkFDRSw4REFBQ3BCLG9EQUFRQTtnQkFDUHFCLFVBQVVaO2dCQUNWYSxPQUFPZixNQUFNZ0I7Z0JBQ2JDLFNBQVU7Z0JBQ1ZDLE1BQU1aO2dCQUNOYSxVQUFVLFlBQXFDbkIsT0FBekJFLFdBQVUsaUJBQXdCLE9BQVRGLE1BQU1vQixJQUFHOzs7Ozs7UUFHOUQ7SUFDRjtJQUVBLE9BQU81QixpRUFBU0EsZUFDZCw4REFBQ0YsOERBQVVBOzswQkFDVCw4REFBQ0MseURBQWFBO2dCQUNaUyxPQUFPRTtnQkFDUG1CLFFBQVF0QjtnQkFDUnVCLE1BQU07Z0JBQ05MLFNBQVMsR0FBZ0JsQixPQUFiRyxXQUFVLEtBQW1CLE9BQWhCSCxhQUFhcUI7Z0JBQ3RDRyxHQUFHO2dCQUNIQyxVQUFVLHVDQUFrRSxPQUEzQnpCLGFBQWEwQjtnQkFDOURWLE9BQU8sR0FBK0QsT0FBNURiLGNBQWMsT0FBT0gsYUFBYWlCLE9BQU9qQixhQUFhZ0I7Z0JBQ2hFVyxVQUFVM0IsYUFBYTRCOzs7Ozs7WUFHeEJ0Qjs7Ozs7OztBQUdQO0dBeEN3QlI7O1FBQ1BSLGtEQUFTQTtRQUdKTywwREFBZUE7OztLQUpiQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9bbWVkaWFUeXBlXS9nZW5yZS9bZ2VucmVfaWRdLmpzPzk2MzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExvZ2luIGZyb20gXCJAL2NvbXBvbmVudHMvTG9naW5cIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IE1haW5MYXlvdXQgZnJvbSBcIkAvY29tcG9uZW50cy9tYWluTGF5b3V0XCI7XG5pbXBvcnQgRmVhdHVyZWRNZWRpYSBmcm9tIFwiQC9VSS9GZWF0dXJlZE1lZGlhXCI7XG5pbXBvcnQgQXV0aENoZWNrIGZyb20gXCJAL2NvbXBvbmVudHMvQXV0aENoZWNrXCI7XG5pbXBvcnQgTWVkaWFSb3cgZnJvbSBcIkAvVUkvTWVkaWFSb3dcIjtcbmltcG9ydCBHZW5yZU5hdiBmcm9tIFwiQC9VSS9HZW5yZU5hdlwiO1xuLy8gaW1wb3J0IExhenlMb2FkIGZyb20gXCJyZWFjdC1sYXp5bG9hZFwiO1xuaW1wb3J0IFBsYWNlaG9sZGVyIGZyb20gXCJAL1VJL1BsYWNlaG9sZGVyXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZUNvbnRleHQgfSBmcm9tIFwiQC9IQk9Qcm92aWRlclwiO1xuaW1wb3J0IHNodWZmbGVBcnJheSBmcm9tIFwiQC9jb21wb25lbnRzL3V0aWxpdGllc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHZW5yZSh7Y29udGV4dCwgZmVhdHVyZWREYXRhLCBnZW5yZX0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgbWVkaWFUeXBlIH0gPSBjb250ZXh0O1xuXG4gIGNvbnN0IGdsb2JhbFN0YXRlID0gdXNlU3RhdGVDb250ZXh0KCk7XG4gIGNvbnN0IHsgdGh1bWJuYWlsU2l6ZXMgfSA9IGdsb2JhbFN0YXRlO1xuXG4gIGZ1bmN0aW9uIHNob3dSYW5kb21NZWRpYSgpIHtcbiAgICBsZXQgdGh1bWJuYWlsU2l6ZTtcbiAgICByZXR1cm4gZ2VucmVzRGF0YS5nZW5yZXMubWFwKChnZW5yZSkgPT4ge1xuICAgICAgdGh1bWJuYWlsU2l6ZSA9XG4gICAgICAgIHRodW1ibmFpbFNpemVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRodW1ibmFpbFNpemVzLmxlbmd0aCldO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPE1lZGlhUm93XG4gICAgICAgICAgY2F0ZWdvcnk9e21lZGlhVHlwZX1cbiAgICAgICAgICB0aXRsZT17Z2VucmUubmFtZX1cbiAgICAgICAgICBsaW5rVVJMPXtgbW92aWUvaWRgfVxuICAgICAgICAgIHNpemU9e3RodW1ibmFpbFNpemV9XG4gICAgICAgICAgZW5kcG9pbnQ9e2BkaXNjb3Zlci8ke21lZGlhVHlwZX0/d2l0aF9nZW5yZXM9JHtnZW5yZS5pZH0mcHJpbWFyeV9yZWxlYXNlX3llYXI9MjAyMyZhcGlfa2V5PTE0MTg4MDc4MjJkYzA4ZDg0OGEyMDcyMmJiNTg2YzZmJmxhbmd1YWdlPWVuLVVTJTIyYH1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gQXV0aENoZWNrKFxuICAgIDxNYWluTGF5b3V0PlxuICAgICAgPEZlYXR1cmVkTWVkaWFcbiAgICAgICAgZ2VucmU9e21lZGlhVHlwZX1cbiAgICAgICAgZGF0YUlEPXtmZWF0dXJlZERhdGF9XG4gICAgICAgIHR5cGU9e1wiZ2VucmVcIn1cbiAgICAgICAgbGlua1VSTD17YCR7bWVkaWFUeXBlfS8ke2ZlYXR1cmVkRGF0YS5pZH1gfVxuICAgICAgICBpcmVcbiAgICAgICAgbWVkaWFVUkw9e2BodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC9vcmlnaW5hbC8ke2ZlYXR1cmVkRGF0YS5iYWNrZHJvcF9wYXRofWB9XG4gICAgICAgIHRpdGxlPXtgJHttZWRpYVR5cGUgPT09IFwidHZcIiA/IGZlYXR1cmVkRGF0YS5uYW1lIDogZmVhdHVyZWREYXRhLnRpdGxlfWB9XG4gICAgICAgIGxvY2F0aW9uPXtmZWF0dXJlZERhdGEub3ZlcnZpZXd9XG4gICAgICAvPlxuXG4gICAgICB7c2hvd1JhbmRvbU1lZGlhKCl9XG4gICAgPC9NYWluTGF5b3V0PlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgLy8gRmV0Y2ggZGF0YSBmcm9tIGV4dGVybmFsIEFQSVxuICBsZXQgZ2VucmVzRGF0YTtcbiAgbGV0IGZlYXR1cmVkRGF0YTtcbiAgdHJ5IHtcbiAgICBnZW5yZXNEYXRhID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvZ2VucmUvJHtjb250ZXh0LnF1ZXJ5Lm1lZGlhVHlwZX0vbGlzdD9hcGlfa2V5PTE0MTg4MDc4MjJkYzA4ZDg0OGEyMDcyMmJiNTg2YzZmJmxhbmd1YWdlPWVuLVVTJTIyYFxuICAgICk7XG5cbiAgICBmZWF0dXJlZERhdGEgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgICBgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9kaXNjb3Zlci8ke2NvbnRleHQucXVlcnkubWVkaWFUeXBlfT9wcmltYXJ5X3JlbGVhc2VfeWVhcj0yMDIzJmFwaV9rZXk9MTQxODgwNzgyMmRjMDhkODQ4YTIwNzIyYmI1ODZjNmYmbGFuZ3VhZ2U9ZW4tVVMlMjJgXG4gICAgKTtcblxuICAgIGNvbnNvbGUubG9nKFwic3VjY2Vzc1wiLCBnZW5yZXNEYXRhLmRhdGEpO1xuICAgIGNvbnNvbGUubG9nKFwic3VjY2Vzc1wiLCBmZWF0dXJlZERhdGEuZGF0YSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coXCJlcnJvcjpcIiwgZXJyb3IpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgY29udGV4dDogY29udGV4dC5xdWVyeSxcbiAgICAgIGdlbnJlc0RhdGE6IGdlbnJlc0RhdGEuZGF0YSxcbiAgICAgIGZlYXR1cmVkRGF0YTogc2h1ZmZsZUFycmF5KGZlYXR1cmVkRGF0YS5kYXRhLnJlc3VsdHMpWzBdLFxuICAgIH0sXG4gIH07XG59XG4iXSwibmFtZXMiOlsiTG9naW4iLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIk1haW5MYXlvdXQiLCJGZWF0dXJlZE1lZGlhIiwiQXV0aENoZWNrIiwiTWVkaWFSb3ciLCJHZW5yZU5hdiIsIlBsYWNlaG9sZGVyIiwidXNlU3RhdGVDb250ZXh0IiwiR2VucmUiLCJjb250ZXh0IiwiZmVhdHVyZWREYXRhIiwiZ2VucmUiLCJyb3V0ZXIiLCJtZWRpYVR5cGUiLCJnbG9iYWxTdGF0ZSIsInRodW1ibmFpbFNpemVzIiwic2hvd1JhbmRvbU1lZGlhIiwidGh1bWJuYWlsU2l6ZSIsImdlbnJlc0RhdGEiLCJnZW5yZXMiLCJtYXAiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJjYXRlZ29yeSIsInRpdGxlIiwibmFtZSIsImxpbmtVUkwiLCJzaXplIiwiZW5kcG9pbnQiLCJpZCIsImRhdGFJRCIsInR5cGUiLCJpcmUiLCJtZWRpYVVSTCIsImJhY2tkcm9wX3BhdGgiLCJsb2NhdGlvbiIsIm92ZXJ2aWV3Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[mediaType]/genre/[genre_id].js\n"));

/***/ })

});