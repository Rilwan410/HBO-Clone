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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Login */ \"./components/Login.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_mainLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/mainLayout */ \"./components/mainLayout.js\");\n/* harmony import */ var _UI_FeaturedMedia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/UI/FeaturedMedia */ \"./UI/FeaturedMedia.js\");\n/* harmony import */ var _components_AuthCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/AuthCheck */ \"./components/AuthCheck.js\");\n/* harmony import */ var _UI_MediaRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/UI/MediaRow */ \"./UI/MediaRow.js\");\n/* harmony import */ var _UI_GenreNav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/UI/GenreNav */ \"./UI/GenreNav.js\");\n/* harmony import */ var _UI_Placeholder__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/UI/Placeholder */ \"./UI/Placeholder.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n// import LazyLoad from \"react-lazyload\";\n\nvar __N_SSP = true;\nfunction Home(param) {\n    let { genresData , featuredData , context  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { mediaType  } = context;\n    console.log(mediaType);\n    return (0,_components_AuthCheck__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_mainLayout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_GenreNav__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                mediaType: mediaType,\n                genresData: genresData,\n                featuredData: featuredData\n            }, void 0, false, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/pages/[mediaType]/index.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_MediaRow__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                title: \"Movies\",\n                size: \"large-v\",\n                endpoint: \"movie/popular?\"\n            }, void 0, false, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/pages/[mediaType]/index.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/pages/[mediaType]/index.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this));\n}\n_s(Home, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bbWVkaWFUeXBlXS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNLO0FBQ0o7QUFDUztBQUNGO0FBQ0E7QUFDVjtBQUNBO0FBQ3JDLHlDQUF5QztBQUNFOztBQUk1QixTQUFTVSxLQUFLLEtBQXFDO1FBQXJDLEVBQUVDLFdBQVUsRUFBRUMsYUFBWSxFQUFFQyxRQUFPLEVBQUUsR0FBckM7O0lBQzNCLE1BQU1DLFNBQVNYLHNEQUFTQTtJQUN4QixNQUFNLEVBQUVZLFVBQVMsRUFBRSxHQUFHRjtJQUVwQkcsUUFBUUMsSUFBSUY7SUFFZCxPQUFPVCxpRUFBU0EsZUFDZCw4REFBQ0YsOERBQVVBOzswQkFDVCw4REFBQ0ksb0RBQVFBO2dCQUFDTyxXQUFhQTtnQkFBV0osWUFBY0E7Z0JBQVlDLGNBQWdCQTs7Ozs7OzBCQUM1RSw4REFBQ0wsb0RBQVFBO2dCQUFDVyxPQUFPO2dCQUFVQyxNQUFNO2dCQUFXQyxVQUFVOzs7Ozs7Ozs7Ozs7QUFHNUQ7R0Fad0JWOztRQUNQUCxrREFBU0E7OztLQURGTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9bbWVkaWFUeXBlXS9pbmRleC5qcz9iMGQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMb2dpbiBmcm9tIFwiQC9jb21wb25lbnRzL0xvZ2luXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBNYWluTGF5b3V0IGZyb20gXCJAL2NvbXBvbmVudHMvbWFpbkxheW91dFwiO1xuaW1wb3J0IEZlYXR1cmVkTWVkaWEgZnJvbSBcIkAvVUkvRmVhdHVyZWRNZWRpYVwiO1xuaW1wb3J0IEF1dGhDaGVjayBmcm9tIFwiQC9jb21wb25lbnRzL0F1dGhDaGVja1wiO1xuaW1wb3J0IE1lZGlhUm93IGZyb20gXCJAL1VJL01lZGlhUm93XCI7XG5pbXBvcnQgR2VucmVOYXYgZnJvbSBcIkAvVUkvR2VucmVOYXZcIjtcbi8vIGltcG9ydCBMYXp5TG9hZCBmcm9tIFwicmVhY3QtbGF6eWxvYWRcIjtcbmltcG9ydCBQbGFjZWhvbGRlciBmcm9tIFwiQC9VSS9QbGFjZWhvbGRlclwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHNodWZmbGVBcnJheSBmcm9tIFwiQC9jb21wb25lbnRzL3V0aWxpdGllc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgZ2VucmVzRGF0YSwgZmVhdHVyZWREYXRhLCBjb250ZXh0IH0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgbWVkaWFUeXBlIH0gPSBjb250ZXh0O1xuIFxuICAgIGNvbnNvbGUubG9nKG1lZGlhVHlwZSk7XG5cbiAgcmV0dXJuIEF1dGhDaGVjayhcbiAgICA8TWFpbkxheW91dD5cbiAgICAgIDxHZW5yZU5hdiBtZWRpYVR5cGUgPSB7bWVkaWFUeXBlfSBnZW5yZXNEYXRhID0ge2dlbnJlc0RhdGF9IGZlYXR1cmVkRGF0YSA9IHtmZWF0dXJlZERhdGF9IC8+XG4gICAgICA8TWVkaWFSb3cgdGl0bGU9e1wiTW92aWVzXCJ9IHNpemU9e1wibGFyZ2UtdlwifSBlbmRwb2ludD17XCJtb3ZpZS9wb3B1bGFyP1wifSAvPlxuICAgIDwvTWFpbkxheW91dD5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gIC8vIEZldGNoIGRhdGEgZnJvbSBleHRlcm5hbCBBUElcbiAgbGV0IGdlbnJlc0RhdGE7XG4gIGxldCBmZWF0dXJlZERhdGE7XG4gIHRyeSB7XG4gICAgZ2VucmVzRGF0YSA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAgIGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL2dlbnJlLyR7Y29udGV4dC5xdWVyeS5tZWRpYVR5cGV9L2xpc3Q/YXBpX2tleT0xNDE4ODA3ODIyZGMwOGQ4NDhhMjA3MjJiYjU4NmM2ZiZsYW5ndWFnZT1lbi1VUyUyMmBcbiAgICApO1xuXG4gICAgZmVhdHVyZWREYXRhID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvZGlzY292ZXIvJHtjb250ZXh0LnF1ZXJ5Lm1lZGlhVHlwZX0/cHJpbWFyeV9yZWxlYXNlX3llYXI9MjAyMyZhcGlfa2V5PTE0MTg4MDc4MjJkYzA4ZDg0OGEyMDcyMmJiNTg2YzZmJmxhbmd1YWdlPWVuLVVTJTIyYFxuICAgICk7XG5cbiAgICBjb25zb2xlLmxvZyhcInN1Y2Nlc3NcIiwgZ2VucmVzRGF0YS5kYXRhKTtcbiAgICBjb25zb2xlLmxvZyhcInN1Y2Nlc3NcIiwgZmVhdHVyZWREYXRhLmRhdGEpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKFwiZXJyb3I6XCIsIGVycm9yKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGNvbnRleHQ6IGNvbnRleHQucXVlcnksXG4gICAgICBnZW5yZXNEYXRhOiBnZW5yZXNEYXRhLmRhdGEsXG4gICAgICBmZWF0dXJlZERhdGE6IHNodWZmbGVBcnJheShmZWF0dXJlZERhdGEuZGF0YS5yZXN1bHRzKVswXSxcbiAgICB9LFxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkxvZ2luIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJNYWluTGF5b3V0IiwiRmVhdHVyZWRNZWRpYSIsIkF1dGhDaGVjayIsIk1lZGlhUm93IiwiR2VucmVOYXYiLCJQbGFjZWhvbGRlciIsIkhvbWUiLCJnZW5yZXNEYXRhIiwiZmVhdHVyZWREYXRhIiwiY29udGV4dCIsInJvdXRlciIsIm1lZGlhVHlwZSIsImNvbnNvbGUiLCJsb2ciLCJ0aXRsZSIsInNpemUiLCJlbmRwb2ludCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[mediaType]/index.js\n"));

/***/ })

});