"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./styles/layout.ts":
/*!**************************!*\
  !*** ./styles/layout.ts ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Button\": function() { return /* binding */ Button; },\n/* harmony export */   \"Grid\": function() { return /* binding */ Grid; },\n/* harmony export */   \"Header\": function() { return /* binding */ Header; },\n/* harmony export */   \"Layout\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n   width: 100%;\\n   height: calc(100vh - 5rem);\\n   background-color: var(--background);\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  margin: auto;\\n  width: 100%;\\n  \\n  height: 5rem;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding-left: 3rem;\\n  padding-right: 3rem;\\n  position: fixed;\\n  box-shadow: 0.1em 0.1em 0.1em gray;\\n\\n  h1{\\n      font-family: 'Roboto', sans-serif;\\n\\n      span{\\n          color: blueviolet;\\n      }\\n  }\\n\\n  button{\\n      width: 6rem;\\n      height: 2rem;\\n      border:none;\\n      background-color: linear-gradient(to right, red , yellow);\\n  }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n   display: flex;\\n   height: 2rem;\\n\\n   button{\\n       width: 3rem;\\n       background-color: greenyellow;\\n       color: white;\\n       border-top-right-radius: 0.5rem;\\n       border-bottom-right-radius: 0.5rem;\\n   }\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n   \\n   width: 100%;\\n   margin: auto;\\n   max-width: 1100px;\\n   display: flex;\\n   flex-wrap: wrap;\\n   grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\\n   \\n   \\n\\n   img{\\n       width: 5rem;\\n       height: 5rem;\\n\\n       margin-top: 10rem;\\n       cursor: pointer;\\n   }\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\n\nvar Layout = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject());\nvar Header = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].header(_templateObject1());\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject2());\nvar Grid = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject3());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvbGF5b3V0LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFFaEMsSUFBTUMsTUFBTSxHQUFHRCw2REFBVSxtQkFJL0IsQ0FBQztBQUVLLElBQU1HLE1BQU0sR0FBR0gsZ0VBQWEsb0JBMkJsQyxDQUFDO0FBRUssSUFBTUssTUFBTSxHQUFHTCw2REFBVSxvQkFXL0IsQ0FBQztBQUVLLElBQU1NLElBQUksR0FBR04sNkRBQVUsb0JBa0I3QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9sYXlvdXQudHM/YTUzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBMYXlvdXQgPSBzdHlsZWQuZGl2YFxyXG4gICB3aWR0aDogMTAwJTtcclxuICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNXJlbSk7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIFxyXG4gIGhlaWdodDogNXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmctbGVmdDogM3JlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAzcmVtO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3gtc2hhZG93OiAwLjFlbSAwLjFlbSAwLjFlbSBncmF5O1xyXG5cclxuICBoMXtcclxuICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG5cclxuICAgICAgc3BhbntcclxuICAgICAgICAgIGNvbG9yOiBibHVldmlvbGV0O1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICBidXR0b257XHJcbiAgICAgIHdpZHRoOiA2cmVtO1xyXG4gICAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICAgIGJvcmRlcjpub25lO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJlZCAsIHllbGxvdyk7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5kaXZgXHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIGhlaWdodDogMnJlbTtcclxuXHJcbiAgIGJ1dHRvbntcclxuICAgICAgIHdpZHRoOiAzcmVtO1xyXG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XHJcbiAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC41cmVtO1xyXG4gICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuNXJlbTtcclxuICAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdyaWQgPSBzdHlsZWQuZGl2YFxyXG4gICBcclxuICAgd2lkdGg6IDEwMCU7XHJcbiAgIG1hcmdpbjogYXV0bztcclxuICAgbWF4LXdpZHRoOiAxMTAwcHg7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyO1xyXG4gICBcclxuICAgXHJcblxyXG4gICBpbWd7XHJcbiAgICAgICB3aWR0aDogNXJlbTtcclxuICAgICAgIGhlaWdodDogNXJlbTtcclxuXHJcbiAgICAgICBtYXJnaW4tdG9wOiAxMHJlbTtcclxuICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgfVxyXG5gOyJdLCJuYW1lcyI6WyJzdHlsZWQiLCJMYXlvdXQiLCJkaXYiLCJIZWFkZXIiLCJoZWFkZXIiLCJCdXR0b24iLCJHcmlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/layout.ts\n");

/***/ })

});