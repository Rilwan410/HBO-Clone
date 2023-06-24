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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   StateContext: function() { return /* binding */ StateContext; },\n/* harmony export */   \"default\": function() { return /* binding */ HBOProvider; },\n/* harmony export */   useStateContext: function() { return /* binding */ useStateContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! local-storage */ \"./node_modules/local-storage/local-storage.js\");\n/* harmony import */ var local_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(local_storage__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nconst StateContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext();\nfunction useStateContext() {\n    _s();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(StateContext);\n}\n_s(useStateContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nconst thumbnailSizes = [\n    \"large-v\",\n    \"small-v\",\n    \"small-h\",\n    \"large-h\"\n];\nfunction HBOProvider(param) {\n    let { children  } = param;\n    _s1();\n    const userImage = \"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuuHpYdTO2AVMG7_D7XsaSc5hM_XrUdot54Q&usqp=CAU\";\n    const [sideNav, setSideNav] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [searchModal, setSearchModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [accountOpen, setAccountOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [loadingData, setLoadingData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [watchlist, setWatchlist] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(local_storage__WEBPACK_IMPORTED_MODULE_2___default().get(\"myList\"));\n    const circleColors = {\n        colorOne: \"bg-[linear-gradient(312deg,rgba(26,39,103)0%,rgba(48,20,94,1)45%,rgba(0,0,0,1)100%)]\",\n        colorTwo: \"bg-[linear-gradient(135deg,rgba(195,139,34,1)2%,rgba(15,33,181,1)71%)]\",\n        colorThree: \"bg-[linear-gradient(135deg,rgba(167,195,34,1)22%,rgba(15,181,174,1)71%)]\",\n        colorFour: \"bg-[linear-gradient(135deg,rgba(40,195,34,1)27%,rgba(104,15,181,1)71%)]\",\n        colorFive: \"bg-[linear-gradient(135deg,rgba(55,34,195,1)27%,rgba(181,15,74,1)71%)]\"\n    };\n    const [colors, setColors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(circleColors.colorOne);\n    function watchAdded() {\n        if (!accountOpen) {\n            setAccountOpen(true);\n            setTimeout(()=>{\n                setAccountOpen(false);\n            }, 10000);\n        }\n    }\n    function addToList(video) {\n        let myList;\n        if (local_storage__WEBPACK_IMPORTED_MODULE_2___default()(\"myList\") != null) {\n            myList = local_storage__WEBPACK_IMPORTED_MODULE_2___default().get(\"myList\");\n            myList.push(video);\n            local_storage__WEBPACK_IMPORTED_MODULE_2___default().set(\"myList\", myList);\n            setWatchlist(myList);\n        } else {\n            local_storage__WEBPACK_IMPORTED_MODULE_2___default().set(\"myList\", [\n                video\n            ]);\n        }\n    // watchAdded();\n    }\n    function removeFromList(id) {\n        let myList = local_storage__WEBPACK_IMPORTED_MODULE_2___default()(\"myList\");\n        myList = myList.filter((items)=>{\n            return items.id != id;\n        });\n        local_storage__WEBPACK_IMPORTED_MODULE_2___default().set(\"myList\", myList);\n        setWatchlist(myList);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setLoadingData(false);\n    });\n    function createUser(e) {\n        setUser(e.target.value);\n        local_storage__WEBPACK_IMPORTED_MODULE_2___default().set(\"user\", user);\n        console.log(user);\n    }\n    function pickColor(color) {\n        setColors(color);\n        return colors;\n    }\n    function newColor(newColor) {\n        setColors(newColor);\n    }\n    function setBackground(e) {}\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StateContext.Provider, {\n        value: {\n            user,\n            userImage,\n            setUser,\n            createUser,\n            circleColors,\n            setBackground,\n            sideNav,\n            setSideNav,\n            searchModal,\n            setSearchModal,\n            accountOpen,\n            setAccountOpen,\n            loadingData,\n            setLoadingData,\n            thumbnailSizes,\n            removeFromList,\n            addToList,\n            watchlist,\n            watchAdded,\n            pickColor,\n            newColor,\n            colors,\n            setColors\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/mymac/Documents/My Projects/hbo-clone2/HBOProvider.js\",\n        lineNumber: 100,\n        columnNumber: 5\n    }, this);\n}\n_s1(HBOProvider, \"qIHHbKUWmEDT1C1+CwjSbJoeeUc=\");\n_c = HBOProvider;\nvar _c;\n$RefreshReg$(_c, \"HBOProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9IQk9Qcm92aWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRDtBQUNoQztBQUN4QixNQUFNSyw2QkFBZUwsMERBQW1CTSxHQUFHO0FBRTNDLFNBQVNDOztJQUNkLE9BQU9OLGlEQUFVQSxDQUFDSTtBQUNwQjtHQUZnQkU7QUFJaEIsTUFBTUMsaUJBQWlCO0lBQUM7SUFBVztJQUFXO0lBQVc7Q0FBVTtBQUVwRCxTQUFTQyxZQUFZLEtBQVk7UUFBWixFQUFFQyxTQUFRLEVBQUUsR0FBWjs7SUFFbEMsTUFBTUMsWUFDSjtJQUNGLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHViwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNXLGFBQWFDLGVBQWUsR0FBR1osK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDYSxNQUFNQyxRQUFRLEdBQUdkLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ2UsYUFBYUMsZUFBZSxHQUFHaEIsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDaUIsYUFBYUMsZUFBZSxHQUFHbEIsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDbUIsV0FBV0MsYUFBYSxHQUFHcEIsK0NBQVFBLENBQUNDLHdEQUFNb0IsQ0FBQztJQUlsRCxNQUFNQyxlQUFlO1FBQ25CQyxVQUNFO1FBQ0ZDLFVBQ0U7UUFDRkMsWUFDRTtRQUNGQyxXQUNFO1FBQ0ZDLFdBQ0U7SUFDSjtJQUVBLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHN0IsK0NBQVFBLENBQUNzQixhQUFhQztJQUVsRCxTQUFTTztRQUNQLElBQUksQ0FBQ2YsYUFBYTtZQUNoQkMsZUFBZTtZQUVmZSxXQUFXO2dCQUNUZixlQUFlO1lBQ2pCLEdBQUc7UUFDTDtJQUNGO0lBRUEsU0FBU2dCLFVBQVVDLEtBQUs7UUFDdEIsSUFBSUM7UUFFSixJQUFJakMsb0RBQUVBLENBQUMsYUFBYSxNQUFNO1lBQ3hCaUMsU0FBU2pDLHdEQUFNb0IsQ0FBQztZQUNoQmEsT0FBT0MsS0FBS0Y7WUFDWmhDLHdEQUFNbUMsQ0FBQyxVQUFVRjtZQUNqQmQsYUFBYWM7UUFDZixPQUFPO1lBQ0xqQyx3REFBTW1DLENBQUMsVUFBVTtnQkFBQ0g7YUFBTTtRQUMxQjtJQUVBLGdCQUFnQjtJQUNsQjtJQUVBLFNBQVNJLGVBQWVDLEVBQUU7UUFDeEIsSUFBSUosU0FBU2pDLG9EQUFFQSxDQUFDO1FBQ2hCaUMsU0FBU0EsT0FBT0ssT0FBTyxDQUFDQztZQUN0QixPQUFPQSxNQUFNRixNQUFNQTtRQUNyQjtRQUVBckMsd0RBQU1tQyxDQUFDLFVBQVVGO1FBQ2pCZCxhQUFhYztJQUNmO0lBRUFuQyxnREFBU0EsQ0FBQztRQUNSbUIsZUFBZTtJQUNqQjtJQUVBLFNBQVN1QixXQUFXQyxDQUFDO1FBQ25CNUIsUUFBUTRCLEVBQUVDLE9BQU9DO1FBQ2pCM0Msd0RBQU1tQyxDQUFDLFFBQVF2QjtRQUNmZ0MsUUFBUUMsSUFBSWpDO0lBQ2Q7SUFHQSxTQUFTa0MsVUFBVUMsS0FBSztRQUN0Qm5CLFVBQVVtQjtRQUNWLE9BQU9wQjtJQUNUO0lBRUEsU0FBU3FCLFNBQVNBLFFBQVE7UUFHekJwQixVQUFVb0I7SUFDWDtJQUdBLFNBQVNDLGNBQWNSLENBQUMsR0FBRztJQUUzQixxQkFDRSw4REFBQ3hDLGFBQWFpRDtRQUNaUCxPQUFPO1lBQ0wvQjtZQUNBTDtZQUNBTTtZQUNBMkI7WUFDQW5CO1lBQ0E0QjtZQUNBekM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUc7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQWI7WUFDQWdDO1lBQ0FMO1lBQ0FiO1lBQ0FXO1lBQ0FpQjtZQUNBRTtZQUNBckI7WUFDQUM7UUFDRjtrQkFFQ3RCOzs7Ozs7QUFHUDtJQXZId0JEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0hCT1Byb3ZpZGVyLmpzPzhhYWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBscyBmcm9tIFwibG9jYWwtc3RvcmFnZVwiO1xuZXhwb3J0IGNvbnN0IFN0YXRlQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YXRlQ29udGV4dCgpIHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoU3RhdGVDb250ZXh0KTtcbn1cblxuY29uc3QgdGh1bWJuYWlsU2l6ZXMgPSBbXCJsYXJnZS12XCIsIFwic21hbGwtdlwiLCBcInNtYWxsLWhcIiwgXCJsYXJnZS1oXCJdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIQk9Qcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcbiAgXG4gIGNvbnN0IHVzZXJJbWFnZSA9XG4gICAgXCJodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NTdXVIcFlkVE8yQVZNRzdfRDdYc2FTYzVoTV9YclVkb3Q1NFEmdXNxcD1DQVVcIjtcbiAgY29uc3QgW3NpZGVOYXYsIHNldFNpZGVOYXZdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2VhcmNoTW9kYWwsIHNldFNlYXJjaE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFthY2NvdW50T3Blbiwgc2V0QWNjb3VudE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbG9hZGluZ0RhdGEsIHNldExvYWRpbmdEYXRhXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbd2F0Y2hsaXN0LCBzZXRXYXRjaGxpc3RdID0gdXNlU3RhdGUobHMuZ2V0KFwibXlMaXN0XCIpKTtcblxuXG5cbiAgY29uc3QgY2lyY2xlQ29sb3JzID0ge1xuICAgIGNvbG9yT25lOlxuICAgICAgXCJiZy1bbGluZWFyLWdyYWRpZW50KDMxMmRlZyxyZ2JhKDI2LDM5LDEwMykwJSxyZ2JhKDQ4LDIwLDk0LDEpNDUlLHJnYmEoMCwwLDAsMSkxMDAlKV1cIixcbiAgICBjb2xvclR3bzpcbiAgICAgIFwiYmctW2xpbmVhci1ncmFkaWVudCgxMzVkZWcscmdiYSgxOTUsMTM5LDM0LDEpMiUscmdiYSgxNSwzMywxODEsMSk3MSUpXVwiLFxuICAgIGNvbG9yVGhyZWU6XG4gICAgICBcImJnLVtsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLHJnYmEoMTY3LDE5NSwzNCwxKTIyJSxyZ2JhKDE1LDE4MSwxNzQsMSk3MSUpXVwiLFxuICAgIGNvbG9yRm91cjpcbiAgICAgIFwiYmctW2xpbmVhci1ncmFkaWVudCgxMzVkZWcscmdiYSg0MCwxOTUsMzQsMSkyNyUscmdiYSgxMDQsMTUsMTgxLDEpNzElKV1cIixcbiAgICBjb2xvckZpdmU6XG4gICAgICBcImJnLVtsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLHJnYmEoNTUsMzQsMTk1LDEpMjclLHJnYmEoMTgxLDE1LDc0LDEpNzElKV1cIixcbiAgfTtcbiAgXG4gIGNvbnN0IFtjb2xvcnMsIHNldENvbG9yc10gPSB1c2VTdGF0ZShjaXJjbGVDb2xvcnMuY29sb3JPbmUpXG4gIFxuICBmdW5jdGlvbiB3YXRjaEFkZGVkKCkge1xuICAgIGlmICghYWNjb3VudE9wZW4pIHtcbiAgICAgIHNldEFjY291bnRPcGVuKHRydWUpO1xuICAgICAgXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0QWNjb3VudE9wZW4oZmFsc2UpO1xuICAgICAgfSwgMTAwMDApO1xuICAgIH1cbiAgfVxuICBcbiAgZnVuY3Rpb24gYWRkVG9MaXN0KHZpZGVvKSB7XG4gICAgbGV0IG15TGlzdDtcbiAgICBcbiAgICBpZiAobHMoXCJteUxpc3RcIikgIT0gbnVsbCkge1xuICAgICAgbXlMaXN0ID0gbHMuZ2V0KFwibXlMaXN0XCIpO1xuICAgICAgbXlMaXN0LnB1c2godmlkZW8pO1xuICAgICAgbHMuc2V0KFwibXlMaXN0XCIsIG15TGlzdCk7XG4gICAgICBzZXRXYXRjaGxpc3QobXlMaXN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbHMuc2V0KFwibXlMaXN0XCIsIFt2aWRlb10pO1xuICAgIH1cbiAgICBcbiAgICAvLyB3YXRjaEFkZGVkKCk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVGcm9tTGlzdChpZCkge1xuICAgIGxldCBteUxpc3QgPSBscyhcIm15TGlzdFwiKTtcbiAgICBteUxpc3QgPSBteUxpc3QuZmlsdGVyKChpdGVtcykgPT4ge1xuICAgICAgcmV0dXJuIGl0ZW1zLmlkICE9IGlkO1xuICAgIH0pO1xuXG4gICAgbHMuc2V0KFwibXlMaXN0XCIsIG15TGlzdCk7XG4gICAgc2V0V2F0Y2hsaXN0KG15TGlzdCk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldExvYWRpbmdEYXRhKGZhbHNlKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gY3JlYXRlVXNlcihlKSB7XG4gICAgc2V0VXNlcihlLnRhcmdldC52YWx1ZSk7XG4gICAgbHMuc2V0KFwidXNlclwiLCB1c2VyKTtcbiAgICBjb25zb2xlLmxvZyh1c2VyKTtcbiAgfVxuXG4gIFxuICBmdW5jdGlvbiBwaWNrQ29sb3IoY29sb3IpIHtcbiAgICBzZXRDb2xvcnMoY29sb3IpXG4gICAgcmV0dXJuIGNvbG9ycztcbiAgfVxuXG4gIGZ1bmN0aW9uIG5ld0NvbG9yKG5ld0NvbG9yKSB7XG5cblxuICAgc2V0Q29sb3JzKG5ld0NvbG9yKVxuICB9XG5cblxuICBmdW5jdGlvbiBzZXRCYWNrZ3JvdW5kKGUpIHt9XG5cbiAgcmV0dXJuIChcbiAgICA8U3RhdGVDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICB1c2VyLFxuICAgICAgICB1c2VySW1hZ2UsXG4gICAgICAgIHNldFVzZXIsXG4gICAgICAgIGNyZWF0ZVVzZXIsXG4gICAgICAgIGNpcmNsZUNvbG9ycyxcbiAgICAgICAgc2V0QmFja2dyb3VuZCxcbiAgICAgICAgc2lkZU5hdixcbiAgICAgICAgc2V0U2lkZU5hdixcbiAgICAgICAgc2VhcmNoTW9kYWwsXG4gICAgICAgIHNldFNlYXJjaE1vZGFsLFxuICAgICAgICBhY2NvdW50T3BlbixcbiAgICAgICAgc2V0QWNjb3VudE9wZW4sXG4gICAgICAgIGxvYWRpbmdEYXRhLFxuICAgICAgICBzZXRMb2FkaW5nRGF0YSxcbiAgICAgICAgdGh1bWJuYWlsU2l6ZXMsXG4gICAgICAgIHJlbW92ZUZyb21MaXN0LFxuICAgICAgICBhZGRUb0xpc3QsXG4gICAgICAgIHdhdGNobGlzdCxcbiAgICAgICAgd2F0Y2hBZGRlZCxcbiAgICAgICAgcGlja0NvbG9yLFxuICAgICAgICBuZXdDb2xvcixcbiAgICAgICAgY29sb3JzLCBcbiAgICAgICAgc2V0Q29sb3JzXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1N0YXRlQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImxzIiwiU3RhdGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlQ29udGV4dCIsInRodW1ibmFpbFNpemVzIiwiSEJPUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXJJbWFnZSIsInNpZGVOYXYiLCJzZXRTaWRlTmF2Iiwic2VhcmNoTW9kYWwiLCJzZXRTZWFyY2hNb2RhbCIsInVzZXIiLCJzZXRVc2VyIiwiYWNjb3VudE9wZW4iLCJzZXRBY2NvdW50T3BlbiIsImxvYWRpbmdEYXRhIiwic2V0TG9hZGluZ0RhdGEiLCJ3YXRjaGxpc3QiLCJzZXRXYXRjaGxpc3QiLCJnZXQiLCJjaXJjbGVDb2xvcnMiLCJjb2xvck9uZSIsImNvbG9yVHdvIiwiY29sb3JUaHJlZSIsImNvbG9yRm91ciIsImNvbG9yRml2ZSIsImNvbG9ycyIsInNldENvbG9ycyIsIndhdGNoQWRkZWQiLCJzZXRUaW1lb3V0IiwiYWRkVG9MaXN0IiwidmlkZW8iLCJteUxpc3QiLCJwdXNoIiwic2V0IiwicmVtb3ZlRnJvbUxpc3QiLCJpZCIsImZpbHRlciIsIml0ZW1zIiwiY3JlYXRlVXNlciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJwaWNrQ29sb3IiLCJjb2xvciIsIm5ld0NvbG9yIiwic2V0QmFja2dyb3VuZCIsIlByb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./HBOProvider.js\n"));

/***/ })

});