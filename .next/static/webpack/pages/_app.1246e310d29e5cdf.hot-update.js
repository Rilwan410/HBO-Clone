"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./HBOProvider.js":
/*!************************!*\
  !*** ./HBOProvider.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   StateContext: function() { return /* binding */ StateContext; },\n/* harmony export */   \"default\": function() { return /* binding */ HBOProvider; },\n/* harmony export */   useStateContext: function() { return /* binding */ useStateContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\nconst StateContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext();\nfunction useStateContext() {\n    _s();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(StateContext);\n}\n_s(useStateContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nconst ThumbnailSize = [\n    \"large-v\",\n    \"small\"\n];\nfunction HBOProvider(param) {\n    let { children  } = param;\n    _s1();\n    const userImage = \"https://randomuser.me/api/portraits/men/63.jpg\";\n    const [sideNav, setSideNav] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [searchModal, setSearchModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [accountOpen, setAccountOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [loadingData, setLoadingData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setLoadingData(false);\n    });\n    function createUser(e) {\n        setUser(e.target.value);\n        console.log(user);\n    }\n    const circleColors = {\n        colorOne: \"\",\n        colorTwo: \"linear-gradient(135deg,rgba(167,195,34,1)22%,rgba(15,181,174\",\n        colorThree: \"\",\n        colorFour: \"\",\n        colorFive: \"\"\n    };\n    function setBackground(e) {\n    // console.log()\n    // console.log(e.target.closest('.create-user__colors').children)\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StateContext.Provider, {\n        value: {\n            test: \"test\",\n            user,\n            userImage,\n            setUser,\n            createUser,\n            circleColors,\n            setBackground,\n            sideNav,\n            setSideNav,\n            searchModal,\n            setSearchModal,\n            accountOpen,\n            setAccountOpen,\n            loadingData,\n            setLoadingData\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/HBOProvider.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s1(HBOProvider, \"2jPh4pyedpeGUFnntYJl1RVvynE=\");\n_c = HBOProvider;\nvar _c;\n$RefreshReg$(_c, \"HBOProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9IQk9Qcm92aWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBK0Q7QUFDeEQsTUFBTUksNkJBQWVKLDBEQUFtQkssR0FBRztBQUUzQyxTQUFTQzs7SUFDZCxPQUFPTCxpREFBVUEsQ0FBQ0c7QUFDcEI7R0FGZ0JFO0FBSWhCLE1BQU1DLGdCQUFnQjtJQUFDO0lBQVc7Q0FBUTtBQUUzQixTQUFTQyxZQUFZLEtBQVk7UUFBWixFQUFFQyxTQUFRLEVBQUUsR0FBWjs7SUFDbEMsTUFBTUMsWUFBWTtJQUNsQixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1QsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDVSxhQUFhQyxlQUFlLEdBQUdYLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ1ksTUFBTUMsUUFBUSxHQUFHYiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNjLGFBQWFDLGVBQWUsR0FBR2YsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDZ0IsYUFBYUMsZUFBZSxHQUFHakIsK0NBQVFBLENBQUM7SUFFL0NELGdEQUFTQSxDQUFDO1FBQ1JrQixlQUFlO0lBQ2pCO0lBRUEsU0FBU0MsV0FBV0MsQ0FBQztRQUNuQk4sUUFBUU0sRUFBRUMsT0FBT0M7UUFFakJDLFFBQVFDLElBQUlYO0lBQ2Q7SUFFQSxNQUFNWSxlQUFlO1FBQ25CQyxVQUFVO1FBQ1ZDLFVBQVU7UUFDVkMsWUFBWTtRQUNaQyxXQUFXO1FBQ1hDLFdBQVc7SUFDYjtJQUVBLFNBQVNDLGNBQWNYLENBQUM7SUFDdEIsZ0JBQWdCO0lBQ2hCLGlFQUFpRTtJQUNuRTtJQUVBLHFCQUNFLDhEQUFDbEIsYUFBYThCO1FBQ1pWLE9BQU87WUFDTFcsTUFBTTtZQUNOcEI7WUFDQUw7WUFDQU07WUFDQUs7WUFDQU07WUFDQU07WUFDQXRCO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FHO1lBQ0FDO1lBQ0FDO1lBQ0FDO1FBQ0Y7a0JBRUNYOzs7Ozs7QUFHUDtJQXREd0JEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0hCT1Byb3ZpZGVyLmpzPzhhYWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBjb25zdCBTdGF0ZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VTdGF0ZUNvbnRleHQoKSB7XG4gIHJldHVybiB1c2VDb250ZXh0KFN0YXRlQ29udGV4dCk7XG59XG5cbmNvbnN0IFRodW1ibmFpbFNpemUgPSBbJ2xhcmdlLXYnLCBcInNtYWxsXCJdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIQk9Qcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgdXNlckltYWdlID0gXCJodHRwczovL3JhbmRvbXVzZXIubWUvYXBpL3BvcnRyYWl0cy9tZW4vNjMuanBnXCI7XG4gIGNvbnN0IFtzaWRlTmF2LCBzZXRTaWRlTmF2XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NlYXJjaE1vZGFsLCBzZXRTZWFyY2hNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbYWNjb3VudE9wZW4sIHNldEFjY291bnRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2xvYWRpbmdEYXRhLCBzZXRMb2FkaW5nRGF0YV0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldExvYWRpbmdEYXRhKGZhbHNlKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gY3JlYXRlVXNlcihlKSB7XG4gICAgc2V0VXNlcihlLnRhcmdldC52YWx1ZSk7XG5cbiAgICBjb25zb2xlLmxvZyh1c2VyKTtcbiAgfVxuXG4gIGNvbnN0IGNpcmNsZUNvbG9ycyA9IHtcbiAgICBjb2xvck9uZTogXCJcIixcbiAgICBjb2xvclR3bzogXCJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLHJnYmEoMTY3LDE5NSwzNCwxKTIyJSxyZ2JhKDE1LDE4MSwxNzRcIixcbiAgICBjb2xvclRocmVlOiBcIlwiLFxuICAgIGNvbG9yRm91cjogXCJcIixcbiAgICBjb2xvckZpdmU6IFwiXCIsXG4gIH07XG5cbiAgZnVuY3Rpb24gc2V0QmFja2dyb3VuZChlKSB7XG4gICAgLy8gY29uc29sZS5sb2coKVxuICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LmNsb3Nlc3QoJy5jcmVhdGUtdXNlcl9fY29sb3JzJykuY2hpbGRyZW4pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxTdGF0ZUNvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIHRlc3Q6IFwidGVzdFwiLFxuICAgICAgICB1c2VyLFxuICAgICAgICB1c2VySW1hZ2UsXG4gICAgICAgIHNldFVzZXIsXG4gICAgICAgIGNyZWF0ZVVzZXIsXG4gICAgICAgIGNpcmNsZUNvbG9ycyxcbiAgICAgICAgc2V0QmFja2dyb3VuZCxcbiAgICAgICAgc2lkZU5hdixcbiAgICAgICAgc2V0U2lkZU5hdixcbiAgICAgICAgc2VhcmNoTW9kYWwsXG4gICAgICAgIHNldFNlYXJjaE1vZGFsLFxuICAgICAgICBhY2NvdW50T3BlbixcbiAgICAgICAgc2V0QWNjb3VudE9wZW4sXG4gICAgICAgIGxvYWRpbmdEYXRhLFxuICAgICAgICBzZXRMb2FkaW5nRGF0YSxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvU3RhdGVDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU3RhdGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlQ29udGV4dCIsIlRodW1ibmFpbFNpemUiLCJIQk9Qcm92aWRlciIsImNoaWxkcmVuIiwidXNlckltYWdlIiwic2lkZU5hdiIsInNldFNpZGVOYXYiLCJzZWFyY2hNb2RhbCIsInNldFNlYXJjaE1vZGFsIiwidXNlciIsInNldFVzZXIiLCJhY2NvdW50T3BlbiIsInNldEFjY291bnRPcGVuIiwibG9hZGluZ0RhdGEiLCJzZXRMb2FkaW5nRGF0YSIsImNyZWF0ZVVzZXIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiY2lyY2xlQ29sb3JzIiwiY29sb3JPbmUiLCJjb2xvclR3byIsImNvbG9yVGhyZWUiLCJjb2xvckZvdXIiLCJjb2xvckZpdmUiLCJzZXRCYWNrZ3JvdW5kIiwiUHJvdmlkZXIiLCJ0ZXN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./HBOProvider.js\n"));

/***/ })

});