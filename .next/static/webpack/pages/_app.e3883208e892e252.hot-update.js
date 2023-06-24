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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   StateContext: function() { return /* binding */ StateContext; },\n/* harmony export */   \"default\": function() { return /* binding */ HBOProvider; },\n/* harmony export */   useStateContext: function() { return /* binding */ useStateContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! local-storage */ \"./node_modules/local-storage/local-storage.js\");\n/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(local_storage__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nconst StateContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext();\nfunction useStateContext() {\n    _s();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(StateContext);\n}\n_s(useStateContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nconst thumbnailSizes = [\n    \"large-v\",\n    \"small-v\",\n    \"small-h\",\n    \"large-h\"\n];\nfunction HBOProvider(param) {\n    let { children  } = param;\n    _s1();\n    const userImage = \"https://randomuser.me/api/portraits/men/63.jpg\";\n    const [sideNav, setSideNav] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [searchModal, setSearchModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [accountOpen, setAccountOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [loadingData, setLoadingData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [watchlist, setWatchlist] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(local_storage__WEBPACK_IMPORTED_MODULE_2___default().get(\"myList\"));\n    function watchAdded() {\n        if (accountOpen == false) {\n            setAccountOpen(true);\n            setTimeout(()=>{\n                setAccountOpen(false);\n            }, 3000);\n        }\n    }\n    async function addToList(video) {\n        let myList;\n        if (local_storage__WEBPACK_IMPORTED_MODULE_2___default()(\"myList\") != null) {\n            myList = local_storage__WEBPACK_IMPORTED_MODULE_2___default().get(\"myList\");\n            myList.push(video);\n            local_storage__WEBPACK_IMPORTED_MODULE_2___default().set(\"myList\", myList);\n            setWatchlist(myList);\n        } else {\n            local_storage__WEBPACK_IMPORTED_MODULE_2___default().set(\"myList\", [\n                video\n            ]);\n        }\n        watchAdded();\n    }\n    function removeFromList(id) {\n        let myList = local_storage__WEBPACK_IMPORTED_MODULE_2___default()(\"myList\");\n        myList = myList.filter((items)=>{\n            return items.id != id;\n        });\n        local_storage__WEBPACK_IMPORTED_MODULE_2___default().set(\"myList\", myList);\n        setWatchlist(myList);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setLoadingData(false);\n    });\n    function createUser(e) {\n        setUser(e.target.value);\n        console.log(user);\n    }\n    const circleColors = {\n        colorOne: \"\",\n        colorTwo: \"linear-gradient(135deg,rgba(167,195,34,1)22%,rgba(15,181,174\",\n        colorThree: \"\",\n        colorFour: \"\",\n        colorFive: \"\"\n    };\n    function setBackground(e) {\n    // console.log()\n    // console.log(e.target.closest('.create-user__colors').children)\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StateContext.Provider, {\n        value: {\n            test: \"test\",\n            user,\n            userImage,\n            setUser,\n            createUser,\n            circleColors,\n            setBackground,\n            sideNav,\n            setSideNav,\n            searchModal,\n            setSearchModal,\n            accountOpen,\n            setAccountOpen,\n            loadingData,\n            setLoadingData,\n            thumbnailSizes,\n            removeFromList,\n            addToList,\n            watchlist,\n            watchAdded\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/HBOProvider.js\",\n        lineNumber: 84,\n        columnNumber: 5\n    }, this);\n}\n_s1(HBOProvider, \"Im5ZpuNrlO4/FRLxdfCca0Zb3+M=\");\n_c = HBOProvider;\nvar _c;\n$RefreshReg$(_c, \"HBOProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9IQk9Qcm92aWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRDtBQUNoQztBQUN4QixNQUFNSyw2QkFBZUwsMERBQW1CTSxHQUFHO0FBRTNDLFNBQVNDOztJQUNkLE9BQU9OLGlEQUFVQSxDQUFDSTtBQUNwQjtHQUZnQkU7QUFJaEIsTUFBTUMsaUJBQWlCO0lBQUM7SUFBVztJQUFXO0lBQVc7Q0FBVTtBQUVwRCxTQUFTQyxZQUFZLEtBQVk7UUFBWixFQUFFQyxTQUFRLEVBQUUsR0FBWjs7SUFDbEMsTUFBTUMsWUFBWTtJQUNsQixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1YsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDVyxhQUFhQyxlQUFlLEdBQUdaLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ2EsTUFBTUMsUUFBUSxHQUFHZCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNlLGFBQWFDLGVBQWUsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ2lCLGFBQWFDLGVBQWUsR0FBR2xCLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ21CLFdBQVdDLGFBQWEsR0FBR3BCLCtDQUFRQSxDQUFDQyx3REFBTW9CLENBQUM7SUFHbEQsU0FBU0M7UUFDUCxJQUFHUCxlQUFlLE9BQU07WUFDdEJDLGVBQWU7WUFHZk8sV0FBVztnQkFDVFAsZUFBZTtZQUNqQixHQUFHO1FBQ0w7SUFHRjtJQUVBLGVBQWVRLFVBQVVDLEtBQUs7UUFDNUIsSUFBSUM7UUFFSixJQUFJekIsb0RBQUVBLENBQUMsYUFBYSxNQUFNO1lBQ3hCeUIsU0FBU3pCLHdEQUFNb0IsQ0FBQztZQUNoQkssT0FBT0MsS0FBS0Y7WUFDWnhCLHdEQUFNMkIsQ0FBQyxVQUFVRjtZQUNqQk4sYUFBYU07UUFDZixPQUFPO1lBQ0x6Qix3REFBTTJCLENBQUMsVUFBVTtnQkFBQ0g7YUFBTTtRQUMxQjtRQUdISDtJQUNDO0lBRUEsU0FBU08sZUFBZUMsRUFBRTtRQUN4QixJQUFJSixTQUFTekIsb0RBQUVBLENBQUM7UUFDaEJ5QixTQUFTQSxPQUFPSyxPQUFPLENBQUNDO1lBQ3RCLE9BQU9BLE1BQU1GLE1BQU1BO1FBQ3JCO1FBRUE3Qix3REFBTTJCLENBQUMsVUFBVUY7UUFDakJOLGFBQWFNO0lBQ2Y7SUFFQTNCLGdEQUFTQSxDQUFDO1FBQ1JtQixlQUFlO0lBQ2pCO0lBRUEsU0FBU2UsV0FBV0MsQ0FBQztRQUNuQnBCLFFBQVFvQixFQUFFQyxPQUFPQztRQUVqQkMsUUFBUUMsSUFBSXpCO0lBQ2Q7SUFFQSxNQUFNMEIsZUFBZTtRQUNuQkMsVUFBVTtRQUNWQyxVQUFVO1FBQ1ZDLFlBQVk7UUFDWkMsV0FBVztRQUNYQyxXQUFXO0lBQ2I7SUFFQSxTQUFTQyxjQUFjWCxDQUFDO0lBQ3RCLGdCQUFnQjtJQUNoQixpRUFBaUU7SUFDbkU7SUFFQSxxQkFDRSw4REFBQ2hDLGFBQWE0QztRQUNaVixPQUFPO1lBQ0xXLE1BQU07WUFDTmxDO1lBQ0FMO1lBQ0FNO1lBQ0FtQjtZQUNBTTtZQUNBTTtZQUNBcEM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUc7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQWI7WUFDQXdCO1lBQ0FMO1lBQ0FMO1lBQ0FHO1FBQ0Y7a0JBRUNmOzs7Ozs7QUFHUDtJQXBHd0JEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0hCT1Byb3ZpZGVyLmpzPzhhYWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBscyBmcm9tIFwibG9jYWwtc3RvcmFnZVwiO1xuZXhwb3J0IGNvbnN0IFN0YXRlQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YXRlQ29udGV4dCgpIHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoU3RhdGVDb250ZXh0KTtcbn1cblxuY29uc3QgdGh1bWJuYWlsU2l6ZXMgPSBbXCJsYXJnZS12XCIsIFwic21hbGwtdlwiLCBcInNtYWxsLWhcIiwgXCJsYXJnZS1oXCJdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIQk9Qcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgdXNlckltYWdlID0gXCJodHRwczovL3JhbmRvbXVzZXIubWUvYXBpL3BvcnRyYWl0cy9tZW4vNjMuanBnXCI7XG4gIGNvbnN0IFtzaWRlTmF2LCBzZXRTaWRlTmF2XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NlYXJjaE1vZGFsLCBzZXRTZWFyY2hNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbYWNjb3VudE9wZW4sIHNldEFjY291bnRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2xvYWRpbmdEYXRhLCBzZXRMb2FkaW5nRGF0YV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3dhdGNobGlzdCwgc2V0V2F0Y2hsaXN0XSA9IHVzZVN0YXRlKGxzLmdldChcIm15TGlzdFwiKSk7XG5cblxuICBmdW5jdGlvbiB3YXRjaEFkZGVkKCl7XG4gICAgaWYoYWNjb3VudE9wZW4gPT0gZmFsc2Upe1xuICAgICAgc2V0QWNjb3VudE9wZW4odHJ1ZSlcblxuXG4gICAgICBzZXRUaW1lb3V0KCgpPT4ge1xuICAgICAgICBzZXRBY2NvdW50T3BlbihmYWxzZSlcbiAgICAgIH0sIDMwMDApXG4gICAgfVxuXG4gICBcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGFkZFRvTGlzdCh2aWRlbykge1xuICAgIGxldCBteUxpc3Q7XG5cbiAgICBpZiAobHMoXCJteUxpc3RcIikgIT0gbnVsbCkge1xuICAgICAgbXlMaXN0ID0gbHMuZ2V0KFwibXlMaXN0XCIpO1xuICAgICAgbXlMaXN0LnB1c2godmlkZW8pO1xuICAgICAgbHMuc2V0KFwibXlMaXN0XCIsIG15TGlzdCk7XG4gICAgICBzZXRXYXRjaGxpc3QobXlMaXN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbHMuc2V0KFwibXlMaXN0XCIsIFt2aWRlb10pO1xuICAgIH1cbiAgICBcblxuIHdhdGNoQWRkZWQoKVxuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlRnJvbUxpc3QoaWQpIHtcbiAgICBsZXQgbXlMaXN0ID0gbHMoXCJteUxpc3RcIik7XG4gICAgbXlMaXN0ID0gbXlMaXN0LmZpbHRlcigoaXRlbXMpID0+IHtcbiAgICAgIHJldHVybiBpdGVtcy5pZCAhPSBpZDtcbiAgICB9KTtcblxuICAgIGxzLnNldChcIm15TGlzdFwiLCBteUxpc3QpO1xuICAgIHNldFdhdGNobGlzdChteUxpc3QpO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRMb2FkaW5nRGF0YShmYWxzZSk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZVVzZXIoZSkge1xuICAgIHNldFVzZXIoZS50YXJnZXQudmFsdWUpO1xuXG4gICAgY29uc29sZS5sb2codXNlcik7XG4gIH1cblxuICBjb25zdCBjaXJjbGVDb2xvcnMgPSB7XG4gICAgY29sb3JPbmU6IFwiXCIsXG4gICAgY29sb3JUd286IFwibGluZWFyLWdyYWRpZW50KDEzNWRlZyxyZ2JhKDE2NywxOTUsMzQsMSkyMiUscmdiYSgxNSwxODEsMTc0XCIsXG4gICAgY29sb3JUaHJlZTogXCJcIixcbiAgICBjb2xvckZvdXI6IFwiXCIsXG4gICAgY29sb3JGaXZlOiBcIlwiLFxuICB9O1xuXG4gIGZ1bmN0aW9uIHNldEJhY2tncm91bmQoZSkge1xuICAgIC8vIGNvbnNvbGUubG9nKClcbiAgICAvLyBjb25zb2xlLmxvZyhlLnRhcmdldC5jbG9zZXN0KCcuY3JlYXRlLXVzZXJfX2NvbG9ycycpLmNoaWxkcmVuKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8U3RhdGVDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICB0ZXN0OiBcInRlc3RcIixcbiAgICAgICAgdXNlcixcbiAgICAgICAgdXNlckltYWdlLFxuICAgICAgICBzZXRVc2VyLFxuICAgICAgICBjcmVhdGVVc2VyLFxuICAgICAgICBjaXJjbGVDb2xvcnMsXG4gICAgICAgIHNldEJhY2tncm91bmQsXG4gICAgICAgIHNpZGVOYXYsXG4gICAgICAgIHNldFNpZGVOYXYsXG4gICAgICAgIHNlYXJjaE1vZGFsLFxuICAgICAgICBzZXRTZWFyY2hNb2RhbCxcbiAgICAgICAgYWNjb3VudE9wZW4sXG4gICAgICAgIHNldEFjY291bnRPcGVuLFxuICAgICAgICBsb2FkaW5nRGF0YSxcbiAgICAgICAgc2V0TG9hZGluZ0RhdGEsXG4gICAgICAgIHRodW1ibmFpbFNpemVzLFxuICAgICAgICByZW1vdmVGcm9tTGlzdCxcbiAgICAgICAgYWRkVG9MaXN0LFxuICAgICAgICB3YXRjaGxpc3QsXG4gICAgICAgIHdhdGNoQWRkZWQsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1N0YXRlQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImxzIiwiU3RhdGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlQ29udGV4dCIsInRodW1ibmFpbFNpemVzIiwiSEJPUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXJJbWFnZSIsInNpZGVOYXYiLCJzZXRTaWRlTmF2Iiwic2VhcmNoTW9kYWwiLCJzZXRTZWFyY2hNb2RhbCIsInVzZXIiLCJzZXRVc2VyIiwiYWNjb3VudE9wZW4iLCJzZXRBY2NvdW50T3BlbiIsImxvYWRpbmdEYXRhIiwic2V0TG9hZGluZ0RhdGEiLCJ3YXRjaGxpc3QiLCJzZXRXYXRjaGxpc3QiLCJnZXQiLCJ3YXRjaEFkZGVkIiwic2V0VGltZW91dCIsImFkZFRvTGlzdCIsInZpZGVvIiwibXlMaXN0IiwicHVzaCIsInNldCIsInJlbW92ZUZyb21MaXN0IiwiaWQiLCJmaWx0ZXIiLCJpdGVtcyIsImNyZWF0ZVVzZXIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiY2lyY2xlQ29sb3JzIiwiY29sb3JPbmUiLCJjb2xvclR3byIsImNvbG9yVGhyZWUiLCJjb2xvckZvdXIiLCJjb2xvckZpdmUiLCJzZXRCYWNrZ3JvdW5kIiwiUHJvdmlkZXIiLCJ0ZXN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./HBOProvider.js\n"));

/***/ })

});