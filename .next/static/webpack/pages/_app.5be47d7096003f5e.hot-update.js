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

/***/ "./context/photosContext.tsx":
/*!***********************************!*\
  !*** ./context/photosContext.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PhotosContext\": function() { return /* binding */ PhotosContext; },\n/* harmony export */   \"PhotosProvider\": function() { return /* binding */ PhotosProvider; }\n/* harmony export */ });\n/* harmony import */ var C_Users_jlrmd_projects_photos_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_jlrmd_projects_photos_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_jlrmd_projects_photos_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api */ \"./services/api.ts\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\nvar _s = $RefreshSig$();\nvar PhotosContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({});\nfunction PhotosProvider(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), images = ref[0], setImages = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), value = ref1[0], setValue = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        function loadPhotos() {\n            return _loadPhotos.apply(this, arguments);\n        }\n        function _loadPhotos() {\n            _loadPhotos = _asyncToGenerator(C_Users_jlrmd_projects_photos_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var response;\n                return C_Users_jlrmd_projects_photos_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return _services_api__WEBPACK_IMPORTED_MODULE_3__.api.get(\"/photos/client_id=xV_KQ5oIkUZ5tB8Wk93nsIHnuMVxDjjbUX-W2Q1Cic0\");\n                        case 2:\n                            response = _ctx.sent;\n                            setImages(response.data.results);\n                        case 4:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return _loadPhotos.apply(this, arguments);\n        }\n        loadPhotos();\n    }, []);\n    function handleSearchImage() {\n        return _handleSearchImage.apply(this, arguments);\n    }\n    function _handleSearchImage() {\n        _handleSearchImage = _asyncToGenerator(C_Users_jlrmd_projects_photos_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var response;\n            return C_Users_jlrmd_projects_photos_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return _services_api__WEBPACK_IMPORTED_MODULE_3__.api.get(\"/search/photos?query=\".concat(value, \"&client_id=xV_KQ5oIkUZ5tB8Wk93nsIHnuMVxDjjbUX-W2Q1Cic0\"));\n                    case 2:\n                        response = _ctx.sent;\n                        setImages(response.data.results);\n                        console.log(response);\n                        setValue(\"\");\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _handleSearchImage.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(PhotosContext.Provider, {\n        value: {\n            images: images,\n            setImages: setImages,\n            setValue: setValue,\n            value: value\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\jlrmd\\\\projects\\\\photos+\\\\context\\\\photosContext.tsx\",\n        lineNumber: 51,\n        columnNumber: 11\n    }, this);\n}\n_s(PhotosProvider, \"Yf9O8sK3sA2egPcwuqrOEDOAPOs=\");\n_c = PhotosProvider;\nvar _c;\n$RefreshReg$(_c, \"PhotosProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L3Bob3Rvc0NvbnRleHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTJFO0FBRXJDOztBQW9CL0IsSUFBTUksYUFBYSxpQkFBR0osb0RBQWEsQ0FBQyxFQUFFLENBQXVCLENBQUM7QUFFOUQsU0FBU0ssY0FBYyxDQUFDLEtBQVksRUFBQztRQUFiLFFBQVUsR0FBVixLQUFZLENBQVZDLFFBQVE7O0lBRXJDLElBQTRCTCxHQUE0QixHQUE1QkEsK0NBQVEsQ0FBaUIsRUFBRSxDQUFDLEVBMUI1RCxNQTBCaUIsR0FBZUEsR0FBNEIsR0FBM0MsRUExQmpCLFNBMEI0QixHQUFJQSxHQUE0QixHQUFoQztJQUN4QixJQUEwQkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQTNCMUMsS0EyQmdCLEdBQWNBLElBQVksR0FBMUIsRUEzQmhCLFFBMkIwQixHQUFJQSxJQUFZLEdBQWhCO0lBRXRCQyxnREFBUyxDQUFDLFdBQUk7aUJBQ0tTLFVBQVU7bUJBQVZBLFdBQVU7O2lCQUFWQSxXQUFVO1lBQVZBLFdBQVUsR0FBekIsOEtBQTJCO29CQUNsQkMsUUFBUTs7Ozs7bUNBQVNULGtEQUFPLENBQUUsK0RBQTZELENBQUU7OzRCQUF6RlMsUUFBUSxZQUFpRjs0QkFFL0ZKLFNBQVMsQ0FBQ0ksUUFBUSxDQUFDRSxJQUFJLENBQUNDLE9BQU8sQ0FBQyxDQUFDOzs7Ozs7YUFDbkM7bUJBSmNKLFdBQVU7O1FBTXpCQSxVQUFVLEVBQUU7S0FDZixFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBRVFLLGlCQUFpQjtlQUFqQkEsa0JBQWlCOzthQUFqQkEsa0JBQWlCO1FBQWpCQSxrQkFBaUIsR0FBaEMsOEtBQWtDO2dCQUV4QkosUUFBUTs7Ozs7K0JBQVNULGtEQUFPLENBQUMsdUJBQXNCLENBQVEsTUFBc0QsQ0FBNURNLEtBQUssRUFBQyx3REFBc0QsQ0FBQyxDQUFDOzt3QkFBL0dHLFFBQVEsWUFBdUc7d0JBRXJISixTQUFTLENBQUNJLFFBQVEsQ0FBQ0UsSUFBSSxDQUFDQyxPQUFPLENBQUMsQ0FBQzt3QkFDakNFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixRQUFRLENBQUMsQ0FBQzt3QkFFdEJGLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQzs7Ozs7O1NBRWhCO2VBVGNNLGtCQUFpQjs7SUFXakMscUJBQU8sOERBQUNaLGFBQWEsQ0FBQ2UsUUFBUTtRQUFDVixLQUFLLEVBQUU7WUFDcENGLE1BQU0sRUFBTkEsTUFBTTtZQUNOQyxTQUFTLEVBQVRBLFNBQVM7WUFDVEUsUUFBUSxFQUFSQSxRQUFRO1lBQ1JELEtBQUssRUFBTEEsS0FBSztTQUNOO2tCQUNLSCxRQUFROzs7OztZQUNXO0NBQzNCO0dBbENlRCxjQUFjO0FBQWRBLEtBQUFBLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9waG90b3NDb250ZXh0LnRzeD8xNGM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QsIFNldFN0YXRlQWN0aW9uIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vc2VydmljZXMvYXBpJztcclxuXHJcbnR5cGUgcGhvdG9zUHJvcHMgPSB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgdG90YWw6IG51bWJlcjtcclxuICAgIHdpZHRoOiBudW1iZXI7XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxuICAgIHVybHM6e1xyXG4gICAgICBmdWxsOiBzdHJpbmc7XHJcbiAgICAgIHNtYWxsOiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbnR5cGUgcGhvdG9zQ29udGV4dFByb3BzID0ge1xyXG4gICAgaW1hZ2VzOiBwaG90b3NQcm9wc1tdO1xyXG4gICAgc2V0SW1hZ2VzOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxwaG90b3NQcm9wc1tdPj47XHJcbiAgICBzZXRWYWx1ZTogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248c3RyaW5nPj4gO1xyXG4gICAgdmFsdWU6IHN0cmluZztcclxufVxyXG4gIFxyXG5leHBvcnQgY29uc3QgUGhvdG9zQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgcGhvdG9zQ29udGV4dFByb3BzKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQaG90b3NQcm92aWRlcih7IGNoaWxkcmVuIH0pe1xyXG5cclxuICAgIGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSB1c2VTdGF0ZTxwaG90b3NQcm9wcyBbXT4oW10pO1xyXG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWRQaG90b3MoKXtcclxuICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQoYC9waG90b3MvY2xpZW50X2lkPXhWX0tRNW9Ja1VaNXRCOFdrOTNuc0lIbnVNVnhEampiVVgtVzJRMUNpYzBgKTtcclxuICBcclxuICAgICAgICAgICBzZXRJbWFnZXMocmVzcG9uc2UuZGF0YS5yZXN1bHRzKTtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgbG9hZFBob3RvcygpXHJcbiAgICB9LCBbXSk7IFxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVNlYXJjaEltYWdlKCl7XHJcbiAgICBcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQoYC9zZWFyY2gvcGhvdG9zP3F1ZXJ5PSR7dmFsdWV9JmNsaWVudF9pZD14Vl9LUTVvSWtVWjV0QjhXazkzbnNJSG51TVZ4RGpqYlVYLVcyUTFDaWMwYCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2V0SW1hZ2VzKHJlc3BvbnNlLmRhdGEucmVzdWx0cyk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNldFZhbHVlKCcnKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICByZXR1cm4gPFBob3Rvc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgXHJcbiAgICAgaW1hZ2VzLFxyXG4gICAgIHNldEltYWdlcyxcclxuICAgICBzZXRWYWx1ZSxcclxuICAgICB2YWx1ZVxyXG4gICB9fT5cclxuICAgICAgIHsgY2hpbGRyZW4gfVxyXG4gICA8L1Bob3Rvc0NvbnRleHQuUHJvdmlkZXI+XHJcbn0iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXBpIiwiUGhvdG9zQ29udGV4dCIsIlBob3Rvc1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJpbWFnZXMiLCJzZXRJbWFnZXMiLCJ2YWx1ZSIsInNldFZhbHVlIiwibG9hZFBob3RvcyIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsInJlc3VsdHMiLCJoYW5kbGVTZWFyY2hJbWFnZSIsImNvbnNvbGUiLCJsb2ciLCJQcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/photosContext.tsx\n");

/***/ })

});