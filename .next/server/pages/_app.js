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

/***/ "./context/photosContext.tsx":
/*!***********************************!*\
  !*** ./context/photosContext.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PhotosContext\": () => (/* binding */ PhotosContext),\n/* harmony export */   \"PhotosProvider\": () => (/* binding */ PhotosProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api */ \"./services/api.ts\");\n\n\n\nconst PhotosContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction PhotosProvider({ children  }) {\n    const { 0: images , 1: setImages  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { 0: value , 1: setValue  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function loadPhotos() {\n            const response = await _services_api__WEBPACK_IMPORTED_MODULE_2__.api.get(`/photos/client_id=xV_KQ5oIkUZ5tB8Wk93nsIHnuMVxDjjbUX-W2Q1Cic0`);\n            setImages(response.data.results);\n        }\n        loadPhotos();\n    }, []);\n    async function handleSearchImage() {\n        const response = await _services_api__WEBPACK_IMPORTED_MODULE_2__.api.get(`/search/photos?query=${value}&client_id=xV_KQ5oIkUZ5tB8Wk93nsIHnuMVxDjjbUX-W2Q1Cic0`);\n        setImages(response.data.results);\n        console.log(response);\n        setValue(\"\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PhotosContext.Provider, {\n        value: {\n            images,\n            setImages,\n            setValue,\n            value,\n            handleSearchImage\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\jlrmd\\\\projects\\\\photos+\\\\context\\\\photosContext.tsx\",\n        lineNumber: 52,\n        columnNumber: 11\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L3Bob3Rvc0NvbnRleHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFxRjtBQUUvQztBQXFCL0IsTUFBTUksYUFBYSxpQkFBR0osb0RBQWEsQ0FBQyxFQUFFLENBQXVCLENBQUM7QUFFOUQsU0FBU0ssY0FBYyxDQUFDLEVBQUVDLFFBQVEsR0FBRSxFQUFDO0lBRXhDLE1BQU0sRUEzQlYsR0EyQldDLE1BQU0sR0EzQmpCLEdBMkJtQkMsU0FBUyxNQUFJUCwrQ0FBUSxDQUFpQixFQUFFLENBQUM7SUFDeEQsTUFBTSxFQTVCVixHQTRCV1EsS0FBSyxHQTVCaEIsR0E0QmtCQyxRQUFRLE1BQUlULCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBRXRDQyxnREFBUyxDQUFDLElBQUk7UUFDVixlQUFlUyxVQUFVLEdBQUU7WUFDeEIsTUFBTUMsUUFBUSxHQUFHLE1BQU1ULGtEQUFPLENBQUMsQ0FBQyw2REFBNkQsQ0FBQyxDQUFDO1lBRS9GSyxTQUFTLENBQUNJLFFBQVEsQ0FBQ0UsSUFBSSxDQUFDQyxPQUFPLENBQUMsQ0FBQztTQUNuQztRQUVESixVQUFVLEVBQUU7S0FDZixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsZUFBZUssaUJBQWlCLEdBQUU7UUFFOUIsTUFBTUosUUFBUSxHQUFHLE1BQU1ULGtEQUFPLENBQUMsQ0FBQyxxQkFBcUIsRUFBRU0sS0FBSyxDQUFDLHNEQUFzRCxDQUFDLENBQUM7UUFFckhELFNBQVMsQ0FBQ0ksUUFBUSxDQUFDRSxJQUFJLENBQUNDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pDRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sUUFBUSxDQUFDLENBQUM7UUFFdEJGLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUVoQjtJQUVGLHFCQUFPLDhEQUFDTixhQUFhLENBQUNlLFFBQVE7UUFBQ1YsS0FBSyxFQUFFO1lBQ3BDRixNQUFNO1lBQ05DLFNBQVM7WUFDVEUsUUFBUTtZQUNSRCxLQUFLO1lBQ0xPLGlCQUFpQjtTQUNsQjtrQkFDS1YsUUFBUTs7Ozs7WUFDVztDQUMzQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Bob3Rvcy8uL2NvbnRleHQvcGhvdG9zQ29udGV4dC50c3g/MTRjNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBTZXRTdGF0ZUFjdGlvbiwgRGlzcGF0Y2ggfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBhcGkgfSBmcm9tICcuLi9zZXJ2aWNlcy9hcGknO1xyXG5cclxudHlwZSBwaG90b3NQcm9wcyA9IHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICB0b3RhbDogbnVtYmVyO1xyXG4gICAgd2lkdGg6IG51bWJlcjtcclxuICAgIGhlaWdodDogbnVtYmVyO1xyXG4gICAgdXJsczp7XHJcbiAgICAgIGZ1bGw6IHN0cmluZztcclxuICAgICAgc21hbGw6IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxudHlwZSBwaG90b3NDb250ZXh0UHJvcHMgPSB7XHJcbiAgICBpbWFnZXM6IHBob3Rvc1Byb3BzW107XHJcbiAgICBzZXRJbWFnZXM6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPHBob3Rvc1Byb3BzW10+PjtcclxuICAgIHNldFZhbHVlOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxzdHJpbmc+PiA7XHJcbiAgICB2YWx1ZTogc3RyaW5nO1xyXG4gICAgaGFuZGxlU2VhcmNoSW1hZ2U6ICgpPT5Qcm9taXNlPHZvaWQ+O1xyXG59XHJcbiAgXHJcbmV4cG9ydCBjb25zdCBQaG90b3NDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBwaG90b3NDb250ZXh0UHJvcHMpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBob3Rvc1Byb3ZpZGVyKHsgY2hpbGRyZW4gfSl7XHJcblxyXG4gICAgY29uc3QgW2ltYWdlcywgc2V0SW1hZ2VzXSA9IHVzZVN0YXRlPHBob3Rvc1Byb3BzIFtdPihbXSk7XHJcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gbG9hZFBob3Rvcygpe1xyXG4gICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChgL3Bob3Rvcy9jbGllbnRfaWQ9eFZfS1E1b0lrVVo1dEI4V2s5M25zSUhudU1WeERqamJVWC1XMlExQ2ljMGApO1xyXG4gIFxyXG4gICAgICAgICAgIHNldEltYWdlcyhyZXNwb25zZS5kYXRhLnJlc3VsdHMpO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICBsb2FkUGhvdG9zKClcclxuICAgIH0sIFtdKTsgXHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU2VhcmNoSW1hZ2UoKXtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChgL3NlYXJjaC9waG90b3M/cXVlcnk9JHt2YWx1ZX0mY2xpZW50X2lkPXhWX0tRNW9Ja1VaNXRCOFdrOTNuc0lIbnVNVnhEampiVVgtVzJRMUNpYzBgKTtcclxuICAgICAgICBcclxuICAgICAgICBzZXRJbWFnZXMocmVzcG9uc2UuZGF0YS5yZXN1bHRzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2V0VmFsdWUoJycpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgIHJldHVybiA8UGhvdG9zQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBcclxuICAgICBpbWFnZXMsXHJcbiAgICAgc2V0SW1hZ2VzLFxyXG4gICAgIHNldFZhbHVlLFxyXG4gICAgIHZhbHVlLFxyXG4gICAgIGhhbmRsZVNlYXJjaEltYWdlXHJcbiAgIH19PlxyXG4gICAgICAgeyBjaGlsZHJlbiB9XHJcbiAgIDwvUGhvdG9zQ29udGV4dC5Qcm92aWRlcj5cclxufSJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJhcGkiLCJQaG90b3NDb250ZXh0IiwiUGhvdG9zUHJvdmlkZXIiLCJjaGlsZHJlbiIsImltYWdlcyIsInNldEltYWdlcyIsInZhbHVlIiwic2V0VmFsdWUiLCJsb2FkUGhvdG9zIiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwicmVzdWx0cyIsImhhbmRsZVNlYXJjaEltYWdlIiwiY29uc29sZSIsImxvZyIsIlByb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/photosContext.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_photosContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/photosContext */ \"./context/photosContext.tsx\");\n/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/global */ \"./styles/global.ts\");\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_photosContext__WEBPACK_IMPORTED_MODULE_1__.PhotosProvider, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jlrmd\\\\projects\\\\photos+\\\\pages\\\\_app.tsx\",\n                lineNumber: 7,\n                columnNumber: 14\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_2__.GlobalStyle, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jlrmd\\\\projects\\\\photos+\\\\pages\\\\_app.tsx\",\n                lineNumber: 8,\n                columnNumber: 14\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\jlrmd\\\\projects\\\\photos+\\\\pages\\\\_app.tsx\",\n        lineNumber: 6,\n        columnNumber: 12\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQTBEO0FBRVg7QUFFaEMsU0FBU0UsS0FBSyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFFLEVBQUU7SUFDcEQscUJBQU8sOERBQUNKLGtFQUFjOzswQkFDYiw4REFBQ0csU0FBUztnQkFBRSxHQUFHQyxTQUFTOzs7OztvQkFBSTswQkFDNUIsOERBQUNILHVEQUFXOzs7O29CQUFHOzs7Ozs7WUFDQTtDQUMzQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Bob3Rvcy8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGhvdG9zUHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0L3Bob3Rvc0NvbnRleHQnO1xyXG5cclxuaW1wb3J0IHsgR2xvYmFsU3R5bGUgfSBmcm9tICcuLi9zdHlsZXMvZ2xvYmFsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gICAgcmV0dXJuIDxQaG90b3NQcm92aWRlcj5cclxuICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICAgICAgIDxHbG9iYWxTdHlsZSAvPiAgICAgICAgICAgXHJcbiAgICAgICAgICAgPC9QaG90b3NQcm92aWRlcj5cclxufSJdLCJuYW1lcyI6WyJQaG90b3NQcm92aWRlciIsIkdsb2JhbFN0eWxlIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./services/api.ts":
/*!*************************!*\
  !*** ./services/api.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": () => (/* binding */ api)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: `https://api.unsplash.com/`\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9hcGkudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBCO0FBRW5CLE1BQU1DLEdBQUcsR0FBR0QsbURBQVksQ0FBQztJQUM3QkcsT0FBTyxFQUFFLENBQUMseUJBQXlCLENBQUM7Q0FDdEMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGhvdG9zLy4vc2VydmljZXMvYXBpLnRzPzRiZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmV4cG9ydCBjb25zdCBhcGkgPSBheGlvcy5jcmVhdGUoe1xyXG4gICBiYXNlVVJMOiBgaHR0cHM6Ly9hcGkudW5zcGxhc2guY29tL2AsXHJcbn0pOyJdLCJuYW1lcyI6WyJheGlvcyIsImFwaSIsImNyZWF0ZSIsImJhc2VVUkwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./services/api.ts\n");

/***/ }),

/***/ "./styles/global.ts":
/*!**************************!*\
  !*** ./styles/global.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GlobalStyle\": () => (/* binding */ GlobalStyle)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`\r\n\r\n    :root{\r\n        --red: #e52e4d;\r\n        --blue: #5429cc;\r\n        --green: #33cc95;\r\n        --blue-light: #6933ff;\r\n        --text-title: #363f5f;\r\n        --text-body: #969cb3;\r\n        --background: 'red';\r\n        --shape: #ffffffff;\r\n    }\r\n\r\n    html{\r\n        @media(max-width: 1080px){\r\n            font-size: 93.75%; //15px \r\n        }\r\n        @media(max-width: 720px){\r\n            font-size: 87.5%; //14px\r\n        }\r\n    }\r\n\r\n    *{\r\n        margin: 0px;\r\n        padding: 0px;\r\n        box-sizing: border-box;\r\n    }\r\n\r\n    body{\r\n        background: var(--background);\r\n        -webkit-font-smoothing: antialiased;\r\n    }\r\n\r\n    border-style, input, textarea, button{\r\n        font-family: 'Roboto', sans-serif;\r\n        font-weight: 400;\r\n    }\r\n\r\n    h1, h2, h3, h4, h4, h6, strong, span, p{\r\n        font-family: 'Roboto', sans-serif;\r\n    }\r\n\r\n    button{\r\n        border: none;\r\n        cursor: pointer;\r\n    }\r\n     \r\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvZ2xvYmFsLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFzRDtBQUUvQyxNQUFNQyxXQUFXLEdBQUdELGdFQUFpQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGhvdG9zLy4vc3R5bGVzL2dsb2JhbC50cz8yMDYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXHJcblxyXG4gICAgOnJvb3R7XHJcbiAgICAgICAgLS1yZWQ6ICNlNTJlNGQ7XHJcbiAgICAgICAgLS1ibHVlOiAjNTQyOWNjO1xyXG4gICAgICAgIC0tZ3JlZW46ICMzM2NjOTU7XHJcbiAgICAgICAgLS1ibHVlLWxpZ2h0OiAjNjkzM2ZmO1xyXG4gICAgICAgIC0tdGV4dC10aXRsZTogIzM2M2Y1ZjtcclxuICAgICAgICAtLXRleHQtYm9keTogIzk2OWNiMztcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICdyZWQnO1xyXG4gICAgICAgIC0tc2hhcGU6ICNmZmZmZmZmZjtcclxuICAgIH1cclxuXHJcbiAgICBodG1se1xyXG4gICAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDEwODBweCl7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOTMuNzUlOyAvLzE1cHggXHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDcyMHB4KXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA4Ny41JTsgLy8xNHB4XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICp7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB9XHJcblxyXG4gICAgYm9keXtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcclxuICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIH1cclxuXHJcbiAgICBib3JkZXItc3R5bGUsIGlucHV0LCB0ZXh0YXJlYSwgYnV0dG9ue1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG5cclxuICAgIGgxLCBoMiwgaDMsIGg0LCBoNCwgaDYsIHN0cm9uZywgc3BhbiwgcHtcclxuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICAgXHJcbmA7Il0sIm5hbWVzIjpbImNyZWF0ZUdsb2JhbFN0eWxlIiwiR2xvYmFsU3R5bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/global.ts\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

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