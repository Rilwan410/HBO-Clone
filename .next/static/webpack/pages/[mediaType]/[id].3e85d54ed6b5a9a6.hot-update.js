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

/***/ "./pages/[mediaType]/[id].js":
/*!***********************************!*\
  !*** ./pages/[mediaType]/[id].js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ SingleMedia; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _UI_MediaRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/UI/MediaRow */ \"./UI/MediaRow.js\");\n/* harmony import */ var _UI_FeaturedMedia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/UI/FeaturedMedia */ \"./UI/FeaturedMedia.js\");\n/* harmony import */ var _components_mainLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/mainLayout */ \"./components/mainLayout.js\");\n/* harmony import */ var _UI_CastInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/UI/CastInfo */ \"./UI/CastInfo.js\");\n/* harmony import */ var _components_AuthCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/AuthCheck */ \"./components/AuthCheck.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _UI_Placeholder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/UI/Placeholder */ \"./UI/Placeholder.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n// import LazyLoad from \"react-lazyload\";\nconst statement = \"this sucks balls\";\nvar __N_SSP = true;\nfunction SingleMedia() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const { id , mediaType  } = router.query;\n    console.log(router);\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_9__[\"default\"].get(\"https://api.themoviedb.org/3/\".concat(mediaType, \"/\").concat(id, \"%7D?api_key=1418807822dc08d848a20722bb586c6f\")).then((success)=>{\n            console.log(success);\n            setData(success.data);\n        }).catch((error)=>{\n            console.log(\"FAIL:\", error);\n        });\n    }, [\n        id\n    ]);\n    return (0,_components_AuthCheck__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_mainLayout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_FeaturedMedia__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                statement: \"this sucks balls\",\n                id: id,\n                linkURL: \"\".concat(mediaType, \"/id\"),\n                title: mediaType === \"movie\" ? data.title : data.name,\n                location: mediaType === \"tv\" ? data.overview : data.tagline,\n                mediaURL: \"https://image.tmdb.org/t/p/original/\".concat(data.backdrop_path),\n                type: \"single\"\n            }, void 0, false, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/pages/[mediaType]/[id].js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_MediaRow__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                title: \"Similar Searches\",\n                size: \"small-v\",\n                endpoint: \"\".concat(mediaType, \"/\").concat(id, \"/similar?\"),\n                mediaType: mediaType\n            }, void 0, false, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/pages/[mediaType]/[id].js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_CastInfo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                mediaID: id,\n                mediaType: mediaType\n            }, void 0, false, {\n                fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/pages/[mediaType]/[id].js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/pages/[mediaType]/[id].js\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this));\n}\n_s(SingleMedia, \"CE4bb1OrJK230QipCdW5J54W3ks=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = SingleMedia;\nvar _c;\n$RefreshReg$(_c, \"SingleMedia\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bbWVkaWFUeXBlXS9baWRdLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXFDO0FBQ1U7QUFDRTtBQUNaO0FBQ1U7QUFDUDtBQUNJO0FBQ2xCO0FBQ2lCO0FBQzNDLHlDQUF5QztBQUN6QyxNQUFNVSxZQUFXOztBQUVGLFNBQVNDOztJQUN0QixNQUFNQyxTQUFTUCxzREFBU0E7SUFDeEIsTUFBTSxFQUFFUSxHQUFFLEVBQUVDLFVBQVMsRUFBRSxHQUFHRixPQUFPRztJQUVqQ0MsUUFBUUMsSUFBSUw7SUFFWixNQUFNLENBQUNNLE1BQU1DLFFBQVEsR0FBR1osK0NBQVFBLENBQUMsRUFBRTtJQUNuQ0QsZ0RBQVNBLENBQUM7UUFDUkUsaURBQ01ZLENBQ0YsZ0NBQTZDUCxPQUFiQyxXQUFVLEtBQU0sT0FBSEQsSUFBRyxpREFFakRRLEtBQUssQ0FBQ0M7WUFDTE4sUUFBUUMsSUFBSUs7WUFDWkgsUUFBUUcsUUFBUUo7UUFDbEIsR0FDQ0ssTUFBTSxDQUFDQztZQUNOUixRQUFRQyxJQUFJLFNBQVNPO1FBQ3ZCO0lBQ0osR0FBRztRQUFDWDtLQUFHO0lBRVAsT0FBT1QsaUVBQVNBLGVBQ2QsOERBQUNGLDhEQUFVQTs7MEJBQ1QsOERBQUNELHlEQUFhQTtnQkFDZFMsV0FBYTtnQkFDWEcsSUFBTUE7Z0JBQ05ZLFNBQVMsR0FBYSxPQUFWWCxXQUFVO2dCQUN0QlksT0FBT1osY0FBYyxVQUFVSSxLQUFLUSxRQUFRUixLQUFLUztnQkFDakRDLFVBQVVkLGNBQWMsT0FBT0ksS0FBS1csV0FBV1gsS0FBS1k7Z0JBQ3BEQyxVQUFVLHVDQUEwRCxPQUFuQmIsS0FBS2M7Z0JBQ3REQyxNQUFLOzs7Ozs7MEJBUVAsOERBQUNqQyxvREFBUUE7Z0JBQ1AwQixPQUFPO2dCQUNQUSxNQUFNO2dCQUNOQyxVQUFVLEdBQWdCdEIsT0FBYkMsV0FBVSxLQUFNLE9BQUhELElBQUc7Z0JBQzdCQyxXQUFXQTs7Ozs7OzBCQUdiLDhEQUFDWCxvREFBUUE7Z0JBQUNpQyxTQUFTdkI7Z0JBQUlDLFdBQVdBOzs7Ozs7Ozs7Ozs7QUFHeEM7R0FoRHdCSDs7UUFDUE4sa0RBQVNBOzs7S0FERk0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW21lZGlhVHlwZV0vW2lkXS5qcz9mZjE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZWRpYVJvdyBmcm9tIFwiQC9VSS9NZWRpYVJvd1wiO1xuaW1wb3J0IEZlYXR1cmVkTWVkaWEgZnJvbSBcIkAvVUkvRmVhdHVyZWRNZWRpYVwiO1xuaW1wb3J0IE1haW5MYXlvdXQgZnJvbSBcIkAvY29tcG9uZW50cy9tYWluTGF5b3V0XCI7XG5pbXBvcnQgQ2FzdEluZm8gZnJvbSBcIkAvVUkvQ2FzdEluZm9cIjtcbmltcG9ydCBBdXRoQ2hlY2sgZnJvbSBcIkAvY29tcG9uZW50cy9BdXRoQ2hlY2tcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IFBsYWNlaG9sZGVyIGZyb20gXCJAL1VJL1BsYWNlaG9sZGVyXCI7XG4vLyBpbXBvcnQgTGF6eUxvYWQgZnJvbSBcInJlYWN0LWxhenlsb2FkXCI7XG5jb25zdCBzdGF0ZW1lbnQgPVwidGhpcyBzdWNrcyBiYWxsc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbmdsZU1lZGlhKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBpZCwgbWVkaWFUeXBlIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgY29uc29sZS5sb2cocm91dGVyKVxuXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheGlvc1xuICAgICAgLmdldChcbiAgICAgICAgYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvJHttZWRpYVR5cGV9LyR7aWR9JTdEP2FwaV9rZXk9MTQxODgwNzgyMmRjMDhkODQ4YTIwNzIyYmI1ODZjNmZgXG4gICAgICApXG4gICAgICAudGhlbigoc3VjY2VzcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhzdWNjZXNzKTtcbiAgICAgICAgc2V0RGF0YShzdWNjZXNzLmRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJGQUlMOlwiLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfSwgW2lkXSk7XG5cbiAgcmV0dXJuIEF1dGhDaGVjayhcbiAgICA8TWFpbkxheW91dD5cbiAgICAgIDxGZWF0dXJlZE1lZGlhXG4gICAgICBzdGF0ZW1lbnQgPSB7XCJ0aGlzIHN1Y2tzIGJhbGxzXCJ9XG4gICAgICAgIGlkID0ge2lkfVxuICAgICAgICBsaW5rVVJMPXtgJHttZWRpYVR5cGV9L2lkYH1cbiAgICAgICAgdGl0bGU9e21lZGlhVHlwZSA9PT0gXCJtb3ZpZVwiID8gZGF0YS50aXRsZSA6IGRhdGEubmFtZX1cbiAgICAgICAgbG9jYXRpb249e21lZGlhVHlwZSA9PT0gXCJ0dlwiID8gZGF0YS5vdmVydmlldyA6IGRhdGEudGFnbGluZX1cbiAgICAgICAgbWVkaWFVUkw9e2BodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC9vcmlnaW5hbC8ke2RhdGEuYmFja2Ryb3BfcGF0aH1gfVxuICAgICAgICB0eXBlPVwic2luZ2xlXCJcbiAgICAgIC8+XG4gICAgICB7LyogPExhenlMb2FkXG4gICAgICAgIG9mZnNldD17LTQwMH1cbiAgICAgICAgcGxhY2Vob2xkZXI9e1xuICAgICAgICAgIDxQbGFjZWhvbGRlciBzaXplPXtcInNtYWxsLXZcIn0gdGl0bGU9e1wiU2ltaWxhciBTZWFyY2hlc1wifSAvPlxuICAgICAgICB9XG4gICAgICA+ICovfVxuICAgICAgPE1lZGlhUm93XG4gICAgICAgIHRpdGxlPXtcIlNpbWlsYXIgU2VhcmNoZXNcIn1cbiAgICAgICAgc2l6ZT17XCJzbWFsbC12XCJ9XG4gICAgICAgIGVuZHBvaW50PXtgJHttZWRpYVR5cGV9LyR7aWR9L3NpbWlsYXI/YH1cbiAgICAgICAgbWVkaWFUeXBlPXttZWRpYVR5cGV9XG4gICAgICAvPlxuICAgICAgey8qIDwvTGF6eUxvYWQ+ICovfVxuICAgICAgPENhc3RJbmZvIG1lZGlhSUQ9e2lkfSBtZWRpYVR5cGU9e21lZGlhVHlwZX0gLz5cbiAgICA8L01haW5MYXlvdXQ+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICAvLyBQYXNzIGRhdGEgdG8gdGhlIHBhZ2UgdmlhIHByb3BzXG4gIHJldHVybiB7IHByb3BzOiB7IHBhcmFtczogY29udGV4dC5wYXJhbXMgfSB9O1xufVxuIl0sIm5hbWVzIjpbIk1lZGlhUm93IiwiRmVhdHVyZWRNZWRpYSIsIk1haW5MYXlvdXQiLCJDYXN0SW5mbyIsIkF1dGhDaGVjayIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJQbGFjZWhvbGRlciIsInN0YXRlbWVudCIsIlNpbmdsZU1lZGlhIiwicm91dGVyIiwiaWQiLCJtZWRpYVR5cGUiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwic2V0RGF0YSIsImdldCIsInRoZW4iLCJzdWNjZXNzIiwiY2F0Y2giLCJlcnJvciIsImxpbmtVUkwiLCJ0aXRsZSIsIm5hbWUiLCJsb2NhdGlvbiIsIm92ZXJ2aWV3IiwidGFnbGluZSIsIm1lZGlhVVJMIiwiYmFja2Ryb3BfcGF0aCIsInR5cGUiLCJzaXplIiwiZW5kcG9pbnQiLCJtZWRpYUlEIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[mediaType]/[id].js\n"));

/***/ })

});