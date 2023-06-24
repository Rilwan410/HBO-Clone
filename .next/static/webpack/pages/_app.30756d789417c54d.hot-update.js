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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   StateContext: function() { return /* binding */ StateContext; },\n/* harmony export */   \"default\": function() { return /* binding */ HBOProvider; },\n/* harmony export */   useStateContext: function() { return /* binding */ useStateContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! local-storage */ \"./node_modules/local-storage/local-storage.js\");\n/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(local_storage__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nconst StateContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext();\nfunction useStateContext() {\n    _s();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(StateContext);\n}\n_s(useStateContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nconst thumbnailSizes = [\n    \"large-v\",\n    \"small-v\",\n    \"small-h\",\n    \"large-h\"\n];\nfunction HBOProvider(param) {\n    let { children  } = param;\n    _s1();\n    const userImage = \"https://randomuser.me/api/portraits/men/63.jpg\";\n    const [sideNav, setSideNav] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [searchModal, setSearchModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [accountOpen, setAccountOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [loadingData, setLoadingData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [watchlist, setWatchlist] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(local_storage__WEBPACK_IMPORTED_MODULE_2___default().get(\"myList\"));\n    function addToList(video) {\n        let myList;\n        accountAdd;\n        if (local_storage__WEBPACK_IMPORTED_MODULE_2___default()(\"myList\") != null) {\n            myList = local_storage__WEBPACK_IMPORTED_MODULE_2___default().get(\"myList\");\n            myList.push(video);\n            local_storage__WEBPACK_IMPORTED_MODULE_2___default().set(\"myList\", myList);\n            setWatchlist(myList);\n        } else {\n            local_storage__WEBPACK_IMPORTED_MODULE_2___default().set(\"myList\", [\n                video\n            ]);\n        }\n    }\n    function removeFromList(id) {\n        let myList = local_storage__WEBPACK_IMPORTED_MODULE_2___default()(\"myList\");\n        myList = myList.filter((items)=>{\n            return items.id != id;\n        });\n        local_storage__WEBPACK_IMPORTED_MODULE_2___default().set(\"myList\", myList);\n        setWatchlist(myList);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setLoadingData(false);\n    });\n    function createUser(e) {\n        setUser(e.target.value);\n        console.log(user);\n    }\n    const circleColors = {\n        colorOne: \"\",\n        colorTwo: \"linear-gradient(135deg,rgba(167,195,34,1)22%,rgba(15,181,174\",\n        colorThree: \"\",\n        colorFour: \"\",\n        colorFive: \"\"\n    };\n    function setBackground(e) {\n    // console.log()\n    // console.log(e.target.closest('.create-user__colors').children)\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StateContext.Provider, {\n        value: {\n            test: \"test\",\n            user,\n            userImage,\n            setUser,\n            createUser,\n            circleColors,\n            setBackground,\n            sideNav,\n            setSideNav,\n            searchModal,\n            setSearchModal,\n            accountOpen,\n            setAccountOpen,\n            loadingData,\n            setLoadingData,\n            thumbnailSizes,\n            removeFromList,\n            addToList,\n            watchlist\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/HBOProvider.js\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this);\n}\n_s1(HBOProvider, \"Im5ZpuNrlO4/FRLxdfCca0Zb3+M=\");\n_c = HBOProvider;\nvar _c;\n$RefreshReg$(_c, \"HBOProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9IQk9Qcm92aWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRDtBQUNoQztBQUN4QixNQUFNSyw2QkFBZUwsMERBQW1CTSxHQUFHO0FBRTNDLFNBQVNDOztJQUNkLE9BQU9OLGlEQUFVQSxDQUFDSTtBQUNwQjtHQUZnQkU7QUFJaEIsTUFBTUMsaUJBQWlCO0lBQUM7SUFBVztJQUFXO0lBQVc7Q0FBVTtBQUVwRCxTQUFTQyxZQUFZLEtBQVk7UUFBWixFQUFFQyxTQUFRLEVBQUUsR0FBWjs7SUFDbEMsTUFBTUMsWUFBWTtJQUNsQixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1YsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDVyxhQUFhQyxlQUFlLEdBQUdaLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ2EsTUFBTUMsUUFBUSxHQUFHZCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNlLGFBQWFDLGVBQWUsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ2lCLGFBQWFDLGVBQWUsR0FBR2xCLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ21CLFdBQVdDLGFBQWEsR0FBR3BCLCtDQUFRQSxDQUFDQyx3REFBTW9CLENBQUM7SUFFbEQsU0FBU0MsVUFBVUMsS0FBSztRQUN0QixJQUFJQztRQUdKQztRQUVBLElBQUl4QixvREFBRUEsQ0FBQyxhQUFhLE1BQU07WUFDeEJ1QixTQUFTdkIsd0RBQU1vQixDQUFDO1lBQ2hCRyxPQUFPRSxLQUFLSDtZQUNadEIsd0RBQU0wQixDQUFDLFVBQVVIO1lBQ2pCSixhQUFhSTtRQUNmLE9BQU87WUFDTHZCLHdEQUFNMEIsQ0FBQyxVQUFVO2dCQUFDSjthQUFNO1FBQzFCO0lBQ0Y7SUFFQSxTQUFTSyxlQUFlQyxFQUFFO1FBQ3hCLElBQUlMLFNBQVN2QixvREFBRUEsQ0FBQztRQUNoQnVCLFNBQVNBLE9BQU9NLE9BQU8sQ0FBQ0M7WUFDdEIsT0FBT0EsTUFBTUYsTUFBTUE7UUFDckI7UUFFQTVCLHdEQUFNMEIsQ0FBQyxVQUFVSDtRQUNqQkosYUFBYUk7SUFDZjtJQUVBekIsZ0RBQVNBLENBQUM7UUFDUm1CLGVBQWU7SUFDakI7SUFFQSxTQUFTYyxXQUFXQyxDQUFDO1FBQ25CbkIsUUFBUW1CLEVBQUVDLE9BQU9DO1FBRWpCQyxRQUFRQyxJQUFJeEI7SUFDZDtJQUVBLE1BQU15QixlQUFlO1FBQ25CQyxVQUFVO1FBQ1ZDLFVBQVU7UUFDVkMsWUFBWTtRQUNaQyxXQUFXO1FBQ1hDLFdBQVc7SUFDYjtJQUVBLFNBQVNDLGNBQWNYLENBQUM7SUFDdEIsZ0JBQWdCO0lBQ2hCLGlFQUFpRTtJQUNuRTtJQUVBLHFCQUNFLDhEQUFDL0IsYUFBYTJDO1FBQ1pWLE9BQU87WUFDTFcsTUFBTTtZQUNOakM7WUFDQUw7WUFDQU07WUFDQWtCO1lBQ0FNO1lBQ0FNO1lBQ0FuQztZQUNBQztZQUNBQztZQUNBQztZQUNBRztZQUNBQztZQUNBQztZQUNBQztZQUNBYjtZQUNBdUI7WUFDQU47WUFDQUg7UUFDRjtrQkFFQ1o7Ozs7OztBQUdQO0lBckZ3QkQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vSEJPUHJvdmlkZXIuanM/OGFhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGxzIGZyb20gXCJsb2NhbC1zdG9yYWdlXCI7XG5leHBvcnQgY29uc3QgU3RhdGVDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RhdGVDb250ZXh0KCkge1xuICByZXR1cm4gdXNlQ29udGV4dChTdGF0ZUNvbnRleHQpO1xufVxuXG5jb25zdCB0aHVtYm5haWxTaXplcyA9IFtcImxhcmdlLXZcIiwgXCJzbWFsbC12XCIsIFwic21hbGwtaFwiLCBcImxhcmdlLWhcIl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhCT1Byb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCB1c2VySW1hZ2UgPSBcImh0dHBzOi8vcmFuZG9tdXNlci5tZS9hcGkvcG9ydHJhaXRzL21lbi82My5qcGdcIjtcbiAgY29uc3QgW3NpZGVOYXYsIHNldFNpZGVOYXZdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2VhcmNoTW9kYWwsIHNldFNlYXJjaE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFthY2NvdW50T3Blbiwgc2V0QWNjb3VudE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbG9hZGluZ0RhdGEsIHNldExvYWRpbmdEYXRhXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbd2F0Y2hsaXN0LCBzZXRXYXRjaGxpc3RdID0gdXNlU3RhdGUobHMuZ2V0KFwibXlMaXN0XCIpKTtcblxuICBmdW5jdGlvbiBhZGRUb0xpc3QodmlkZW8pIHtcbiAgICBsZXQgbXlMaXN0O1xuXG5cbiAgICBhY2NvdW50QWRkXG5cbiAgICBpZiAobHMoXCJteUxpc3RcIikgIT0gbnVsbCkge1xuICAgICAgbXlMaXN0ID0gbHMuZ2V0KFwibXlMaXN0XCIpO1xuICAgICAgbXlMaXN0LnB1c2godmlkZW8pO1xuICAgICAgbHMuc2V0KFwibXlMaXN0XCIsIG15TGlzdCk7XG4gICAgICBzZXRXYXRjaGxpc3QobXlMaXN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbHMuc2V0KFwibXlMaXN0XCIsIFt2aWRlb10pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUZyb21MaXN0KGlkKSB7XG4gICAgbGV0IG15TGlzdCA9IGxzKFwibXlMaXN0XCIpO1xuICAgIG15TGlzdCA9IG15TGlzdC5maWx0ZXIoKGl0ZW1zKSA9PiB7XG4gICAgICByZXR1cm4gaXRlbXMuaWQgIT0gaWQ7XG4gICAgfSk7XG5cbiAgICBscy5zZXQoXCJteUxpc3RcIiwgbXlMaXN0KTtcbiAgICBzZXRXYXRjaGxpc3QobXlMaXN0KTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TG9hZGluZ0RhdGEoZmFsc2UpO1xuICB9KTtcblxuICBmdW5jdGlvbiBjcmVhdGVVc2VyKGUpIHtcbiAgICBzZXRVc2VyKGUudGFyZ2V0LnZhbHVlKTtcblxuICAgIGNvbnNvbGUubG9nKHVzZXIpO1xuICB9XG5cbiAgY29uc3QgY2lyY2xlQ29sb3JzID0ge1xuICAgIGNvbG9yT25lOiBcIlwiLFxuICAgIGNvbG9yVHdvOiBcImxpbmVhci1ncmFkaWVudCgxMzVkZWcscmdiYSgxNjcsMTk1LDM0LDEpMjIlLHJnYmEoMTUsMTgxLDE3NFwiLFxuICAgIGNvbG9yVGhyZWU6IFwiXCIsXG4gICAgY29sb3JGb3VyOiBcIlwiLFxuICAgIGNvbG9yRml2ZTogXCJcIixcbiAgfTtcblxuICBmdW5jdGlvbiBzZXRCYWNrZ3JvdW5kKGUpIHtcbiAgICAvLyBjb25zb2xlLmxvZygpXG4gICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQuY2xvc2VzdCgnLmNyZWF0ZS11c2VyX19jb2xvcnMnKS5jaGlsZHJlbilcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFN0YXRlQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgdGVzdDogXCJ0ZXN0XCIsXG4gICAgICAgIHVzZXIsXG4gICAgICAgIHVzZXJJbWFnZSxcbiAgICAgICAgc2V0VXNlcixcbiAgICAgICAgY3JlYXRlVXNlcixcbiAgICAgICAgY2lyY2xlQ29sb3JzLFxuICAgICAgICBzZXRCYWNrZ3JvdW5kLFxuICAgICAgICBzaWRlTmF2LFxuICAgICAgICBzZXRTaWRlTmF2LFxuICAgICAgICBzZWFyY2hNb2RhbCxcbiAgICAgICAgc2V0U2VhcmNoTW9kYWwsXG4gICAgICAgIGFjY291bnRPcGVuLFxuICAgICAgICBzZXRBY2NvdW50T3BlbixcbiAgICAgICAgbG9hZGluZ0RhdGEsXG4gICAgICAgIHNldExvYWRpbmdEYXRhLFxuICAgICAgICB0aHVtYm5haWxTaXplcyxcbiAgICAgICAgcmVtb3ZlRnJvbUxpc3QsXG4gICAgICAgIGFkZFRvTGlzdCxcbiAgICAgICAgd2F0Y2hsaXN0LFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9TdGF0ZUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJscyIsIlN0YXRlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZUNvbnRleHQiLCJ0aHVtYm5haWxTaXplcyIsIkhCT1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VySW1hZ2UiLCJzaWRlTmF2Iiwic2V0U2lkZU5hdiIsInNlYXJjaE1vZGFsIiwic2V0U2VhcmNoTW9kYWwiLCJ1c2VyIiwic2V0VXNlciIsImFjY291bnRPcGVuIiwic2V0QWNjb3VudE9wZW4iLCJsb2FkaW5nRGF0YSIsInNldExvYWRpbmdEYXRhIiwid2F0Y2hsaXN0Iiwic2V0V2F0Y2hsaXN0IiwiZ2V0IiwiYWRkVG9MaXN0IiwidmlkZW8iLCJteUxpc3QiLCJhY2NvdW50QWRkIiwicHVzaCIsInNldCIsInJlbW92ZUZyb21MaXN0IiwiaWQiLCJmaWx0ZXIiLCJpdGVtcyIsImNyZWF0ZVVzZXIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiY2lyY2xlQ29sb3JzIiwiY29sb3JPbmUiLCJjb2xvclR3byIsImNvbG9yVGhyZWUiLCJjb2xvckZvdXIiLCJjb2xvckZpdmUiLCJzZXRCYWNrZ3JvdW5kIiwiUHJvdmlkZXIiLCJ0ZXN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./HBOProvider.js\n"));

/***/ })

});