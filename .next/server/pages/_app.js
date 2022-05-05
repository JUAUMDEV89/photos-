"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global */ \"./styles/global.ts\");\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jlrmd\\\\projects\\\\photos+\\\\pages\\\\_app.tsx\",\n                lineNumber: 5,\n                columnNumber: 14\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_1__.GlobalStyle, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jlrmd\\\\projects\\\\photos+\\\\pages\\\\_app.tsx\",\n                lineNumber: 6,\n                columnNumber: 14\n            }, this)\n        ]\n    }, void 0, true);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBK0M7QUFFaEMsU0FBU0MsS0FBSyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFFLEVBQUU7SUFDcEQscUJBQU87OzBCQUNFLDhEQUFDRCxTQUFTO2dCQUFFLEdBQUdDLFNBQVM7Ozs7O29CQUFJOzBCQUM1Qiw4REFBQ0gsdURBQVc7Ozs7b0JBQUc7O29CQUNkO0NBQ2IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waG90b3MvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdsb2JhbFN0eWxlIH0gZnJvbSAnLi4vc3R5bGVzL2dsb2JhbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICAgIHJldHVybiA8PlxyXG4gICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgICAgPEdsb2JhbFN0eWxlIC8+ICAgICAgICAgICBcclxuICAgICAgICAgICA8Lz5cclxufSJdLCJuYW1lcyI6WyJHbG9iYWxTdHlsZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/global.ts":
/*!**************************!*\
  !*** ./styles/global.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GlobalStyle\": () => (/* binding */ GlobalStyle)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`\r\n\r\n    :root{\r\n        --red: #e52e4d;\r\n        --blue: #5429cc;\r\n        --green: #33cc95;\r\n        --blue-light: #6933ff;\r\n        --text-title: #363f5f;\r\n        --text-body: #969cb3;\r\n        --background: 'red';\r\n        --shape: #ffffffff;\r\n    }\r\n\r\n    html{\r\n        @media(max-width: 1080px){\r\n            font-size: 93.75%; //15px \r\n        }\r\n        @media(max-width: 720px){\r\n            font-size: 87.5%; //14px\r\n        }\r\n    }\r\n\r\n    *{\r\n        margin: 0px;\r\n        padding: 0px;\r\n        box-sizing: border-box;\r\n    }\r\n\r\n    body{\r\n        background: var(--background);\r\n        -webkit-font-smoothing: antialiased;\r\n    }\r\n\r\n    border-style, input, textarea, button{\r\n        font-family: 'Roboto', sans-serif;\r\n        font-weight: 400;\r\n    }\r\n\r\n    h1, h2, h3, h4, h4, h6, strong{\r\n        font-weight: 600;\r\n    }\r\n\r\n    button{\r\n        border: none;\r\n        cursor: pointer;\r\n    }\r\n     \r\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvZ2xvYmFsLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFzRDtBQUUvQyxNQUFNQyxXQUFXLEdBQUdELGdFQUFpQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGhvdG9zLy4vc3R5bGVzL2dsb2JhbC50cz8yMDYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXHJcblxyXG4gICAgOnJvb3R7XHJcbiAgICAgICAgLS1yZWQ6ICNlNTJlNGQ7XHJcbiAgICAgICAgLS1ibHVlOiAjNTQyOWNjO1xyXG4gICAgICAgIC0tZ3JlZW46ICMzM2NjOTU7XHJcbiAgICAgICAgLS1ibHVlLWxpZ2h0OiAjNjkzM2ZmO1xyXG4gICAgICAgIC0tdGV4dC10aXRsZTogIzM2M2Y1ZjtcclxuICAgICAgICAtLXRleHQtYm9keTogIzk2OWNiMztcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICdyZWQnO1xyXG4gICAgICAgIC0tc2hhcGU6ICNmZmZmZmZmZjtcclxuICAgIH1cclxuXHJcbiAgICBodG1se1xyXG4gICAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDEwODBweCl7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOTMuNzUlOyAvLzE1cHggXHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDcyMHB4KXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA4Ny41JTsgLy8xNHB4XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICp7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB9XHJcblxyXG4gICAgYm9keXtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcclxuICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIH1cclxuXHJcbiAgICBib3JkZXItc3R5bGUsIGlucHV0LCB0ZXh0YXJlYSwgYnV0dG9ue1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG5cclxuICAgIGgxLCBoMiwgaDMsIGg0LCBoNCwgaDYsIHN0cm9uZ3tcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbntcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgIFxyXG5gOyJdLCJuYW1lcyI6WyJjcmVhdGVHbG9iYWxTdHlsZSIsIkdsb2JhbFN0eWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/global.ts\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();