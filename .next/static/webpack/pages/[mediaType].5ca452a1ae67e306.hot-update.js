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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Login */ \"./components/Login.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_mainLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/mainLayout */ \"./components/mainLayout.js\");\n/* harmony import */ var _UI_FeaturedMedia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/UI/FeaturedMedia */ \"./UI/FeaturedMedia.js\");\n/* harmony import */ var _components_AuthCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/AuthCheck */ \"./components/AuthCheck.js\");\n/* harmony import */ var _UI_MediaRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/UI/MediaRow */ \"./UI/MediaRow.js\");\n/* harmony import */ var _UI_GenreNav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/UI/GenreNav */ \"./UI/GenreNav.js\");\n/* harmony import */ var _UI_Placeholder__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/UI/Placeholder */ \"./UI/Placeholder.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n// import LazyLoad from \"react-lazyload\";\n\nvar __N_SSP = true;\nfunction Home(param) {\n    let { genresData , featuredData , context  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { mediaType  } = context;\n    console.log(featuredData);\n    console.log(genresData);\n    console.log(mediaType);\n    return (0,_components_AuthCheck__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_mainLayout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_FeaturedMedia__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                genre: mediaType,\n                type: \"genre\",\n                mediaURL: \"https://image.tmdb.org/t/p/original/\".concat(featuredData.backdrop_path),\n                title: \"\".concat(mediaType === \"tv\" ? featuredData.name : featuredData.title),\n                location: featuredData.overview\n            }, void 0, false, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/pages/[mediaType]/index.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_MediaRow__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                title: \"Movies\",\n                size: \"large-v\",\n                endpoint: \"movie/popular?\"\n            }, void 0, false, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/pages/[mediaType]/index.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/pages/[mediaType]/index.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this));\n}\n_s(Home, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bbWVkaWFUeXBlXS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNLO0FBQ0o7QUFDUztBQUNGO0FBQ0E7QUFDVjtBQUNBO0FBQ3JDLHlDQUF5QztBQUNFOztBQUk1QixTQUFTVSxLQUFLLEtBQXFDO1FBQXJDLEVBQUVDLFdBQVUsRUFBRUMsYUFBWSxFQUFFQyxRQUFPLEVBQUUsR0FBckM7O0lBQzNCLE1BQU1DLFNBQVNYLHNEQUFTQTtJQUN4QixNQUFNLEVBQUVZLFVBQVMsRUFBRSxHQUFHRjtJQUN0QkcsUUFBUUMsSUFBSUw7SUFDWkksUUFBUUMsSUFBSU47SUFDWkssUUFBUUMsSUFBSUY7SUFFWixPQUFPVCxpRUFBU0EsZUFDZCw4REFBQ0YsOERBQVVBOzswQkFFVCw4REFBQ0MseURBQWFBO2dCQUNkYSxPQUFTSDtnQkFDUEksTUFBTTtnQkFDTkMsVUFBVSx1Q0FBa0UsT0FBM0JSLGFBQWFTO2dCQUM5REMsT0FBUyxHQUErRCxPQUE1RFAsY0FBYyxPQUFPSCxhQUFhVyxPQUFPWCxhQUFhVTtnQkFDbEVFLFVBQVlaLGFBQWFhOzs7Ozs7MEJBRTNCLDhEQUFDbEIsb0RBQVFBO2dCQUFDZSxPQUFPO2dCQUFVSSxNQUFNO2dCQUFXQyxVQUFVOzs7Ozs7Ozs7Ozs7QUFHNUQ7R0FwQndCakI7O1FBQ1BQLGtEQUFTQTs7O0tBREZPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1ttZWRpYVR5cGVdL2luZGV4LmpzP2IwZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExvZ2luIGZyb20gXCJAL2NvbXBvbmVudHMvTG9naW5cIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IE1haW5MYXlvdXQgZnJvbSBcIkAvY29tcG9uZW50cy9tYWluTGF5b3V0XCI7XG5pbXBvcnQgRmVhdHVyZWRNZWRpYSBmcm9tIFwiQC9VSS9GZWF0dXJlZE1lZGlhXCI7XG5pbXBvcnQgQXV0aENoZWNrIGZyb20gXCJAL2NvbXBvbmVudHMvQXV0aENoZWNrXCI7XG5pbXBvcnQgTWVkaWFSb3cgZnJvbSBcIkAvVUkvTWVkaWFSb3dcIjtcbmltcG9ydCBHZW5yZU5hdiBmcm9tIFwiQC9VSS9HZW5yZU5hdlwiO1xuLy8gaW1wb3J0IExhenlMb2FkIGZyb20gXCJyZWFjdC1sYXp5bG9hZFwiO1xuaW1wb3J0IFBsYWNlaG9sZGVyIGZyb20gXCJAL1VJL1BsYWNlaG9sZGVyXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgc2h1ZmZsZUFycmF5IGZyb20gXCJAL2NvbXBvbmVudHMvdXRpbGl0aWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBnZW5yZXNEYXRhLCBmZWF0dXJlZERhdGEsIGNvbnRleHQgfSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBtZWRpYVR5cGUgfSA9IGNvbnRleHQ7XG4gIGNvbnNvbGUubG9nKGZlYXR1cmVkRGF0YSk7XG4gIGNvbnNvbGUubG9nKGdlbnJlc0RhdGEpO1xuICBjb25zb2xlLmxvZyhtZWRpYVR5cGUpO1xuXG4gIHJldHVybiBBdXRoQ2hlY2soXG4gICAgPE1haW5MYXlvdXQ+XG4gICAgIFxuICAgICAgPEZlYXR1cmVkTWVkaWFcbiAgICAgIGdlbnJlID0ge21lZGlhVHlwZX1cbiAgICAgICAgdHlwZT17XCJnZW5yZVwifVxuICAgICAgICBtZWRpYVVSTD17YGh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL29yaWdpbmFsLyR7ZmVhdHVyZWREYXRhLmJhY2tkcm9wX3BhdGh9YH1cbiAgICAgICAgdGl0bGUgPSB7YCR7bWVkaWFUeXBlID09PSAndHYnID8gZmVhdHVyZWREYXRhLm5hbWUgOiBmZWF0dXJlZERhdGEudGl0bGV9YH1cbiAgICAgICAgbG9jYXRpb24gPSB7ZmVhdHVyZWREYXRhLm92ZXJ2aWV3fVxuICAgICAgLz5cbiAgICAgIDxNZWRpYVJvdyB0aXRsZT17XCJNb3ZpZXNcIn0gc2l6ZT17XCJsYXJnZS12XCJ9IGVuZHBvaW50PXtcIm1vdmllL3BvcHVsYXI/XCJ9IC8+XG4gICAgPC9NYWluTGF5b3V0PlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgLy8gRmV0Y2ggZGF0YSBmcm9tIGV4dGVybmFsIEFQSVxuICBsZXQgZ2VucmVzRGF0YTtcbiAgbGV0IGZlYXR1cmVkRGF0YTtcbiAgdHJ5IHtcbiAgICBnZW5yZXNEYXRhID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvZ2VucmUvJHtjb250ZXh0LnF1ZXJ5Lm1lZGlhVHlwZX0vbGlzdD9hcGlfa2V5PTE0MTg4MDc4MjJkYzA4ZDg0OGEyMDcyMmJiNTg2YzZmJmxhbmd1YWdlPWVuLVVTJTIyYFxuICAgICk7XG5cbiAgICBmZWF0dXJlZERhdGEgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgICBgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9kaXNjb3Zlci8ke2NvbnRleHQucXVlcnkubWVkaWFUeXBlfT9wcmltYXJ5X3JlbGVhc2VfeWVhcj0yMDIzJmFwaV9rZXk9MTQxODgwNzgyMmRjMDhkODQ4YTIwNzIyYmI1ODZjNmYmbGFuZ3VhZ2U9ZW4tVVMlMjJgXG4gICAgKTtcblxuICAgIGNvbnNvbGUubG9nKFwic3VjY2Vzc1wiLCBnZW5yZXNEYXRhLmRhdGEpO1xuICAgIGNvbnNvbGUubG9nKFwic3VjY2Vzc1wiLCBmZWF0dXJlZERhdGEuZGF0YSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coXCJlcnJvcjpcIiwgZXJyb3IpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgY29udGV4dDogY29udGV4dC5xdWVyeSxcbiAgICAgIGdlbnJlc0RhdGE6IGdlbnJlc0RhdGEuZGF0YSxcbiAgICAgIGZlYXR1cmVkRGF0YTogc2h1ZmZsZUFycmF5KGZlYXR1cmVkRGF0YS5kYXRhLnJlc3VsdHMpWzBdLFxuICAgIH0sXG4gIH07XG59XG4iXSwibmFtZXMiOlsiTG9naW4iLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIk1haW5MYXlvdXQiLCJGZWF0dXJlZE1lZGlhIiwiQXV0aENoZWNrIiwiTWVkaWFSb3ciLCJHZW5yZU5hdiIsIlBsYWNlaG9sZGVyIiwiSG9tZSIsImdlbnJlc0RhdGEiLCJmZWF0dXJlZERhdGEiLCJjb250ZXh0Iiwicm91dGVyIiwibWVkaWFUeXBlIiwiY29uc29sZSIsImxvZyIsImdlbnJlIiwidHlwZSIsIm1lZGlhVVJMIiwiYmFja2Ryb3BfcGF0aCIsInRpdGxlIiwibmFtZSIsImxvY2F0aW9uIiwib3ZlcnZpZXciLCJzaXplIiwiZW5kcG9pbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[mediaType]/index.js\n"));

/***/ })

});