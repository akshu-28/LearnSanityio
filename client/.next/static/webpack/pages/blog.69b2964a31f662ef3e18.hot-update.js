/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_akshayas_Desktop_sanitylearn_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PostCard */ \"./components/PostCard.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/akshayas/Desktop/sanitylearn/client/pages/blog.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_akshayas_Desktop_sanitylearn_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n // import imageUrlBuilder from \"@sanity/image-url\";\n\n\n\nvar Blog = function Blog(_ref) {\n  _s();\n\n  var posts = _ref.posts;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      mappedPosts = _useState[0],\n      setMappedPosts = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    if (posts.length) {\n      // const imageBuilder = imageUrlBuilder(sanityClient);\n      setMappedPosts(posts.map(function (post) {\n        return _objectSpread({}, post);\n      }));\n    } else {\n      setMappedPosts([]);\n    }\n  }, [posts]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"container\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      className: \"my-5\",\n      children: \"Blog Page\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"row\",\n      children: mappedPosts && mappedPosts.length && mappedPosts.map(function (post, index) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostCard__WEBPACK_IMPORTED_MODULE_3__.default, {\n          data: post\n        }, index, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Blog, \"g1Mdnvu5jHWt4ropjKFPig817wU=\");\n\n_c = Blog;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\n\nvar _c;\n\n$RefreshReg$(_c, \"Blog\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy5qcz82MWI4Il0sIm5hbWVzIjpbIkJsb2ciLCJwb3N0cyIsInVzZVN0YXRlIiwibWFwcGVkUG9zdHMiLCJzZXRNYXBwZWRQb3N0cyIsInVzZUVmZmVjdCIsImxlbmd0aCIsIm1hcCIsInBvc3QiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUdBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWU7QUFBQTs7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7O0FBQUEsa0JBQ1lDLCtDQUFRLENBQUMsRUFBRCxDQURwQjtBQUFBLE1BQ25CQyxXQURtQjtBQUFBLE1BQ05DLGNBRE07O0FBRzFCQyxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFJSixLQUFLLENBQUNLLE1BQVYsRUFBa0I7QUFFaEI7QUFFQUYsb0JBQWMsQ0FDWkgsS0FBSyxDQUFDTSxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFVO0FBQ2xCLGlDQUNLQSxJQURMO0FBT0QsT0FSRCxDQURZLENBQWQ7QUFXRCxLQWZELE1BZU87QUFDTEosb0JBQWMsQ0FBQyxFQUFELENBQWQ7QUFDRDtBQUNGLEdBbkJRLEVBbUJOLENBQUNILEtBQUQsQ0FuQk0sQ0FBVDtBQXFCQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUEsNEJBQ0U7QUFBSSxlQUFTLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBR0U7QUFBSyxlQUFTLEVBQUMsS0FBZjtBQUFBLGdCQUNHRSxXQUFXLElBQ1ZBLFdBQVcsQ0FBQ0csTUFEYixJQUVDSCxXQUFXLENBQUNJLEdBQVosQ0FBZ0IsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsNEJBQ2QsOERBQUMseURBQUQ7QUFBVSxjQUFJLEVBQUVEO0FBQWhCLFdBQTJCQyxLQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURjO0FBQUEsT0FBaEI7QUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFhRCxDQXJDRDs7R0FBTVQsSTs7S0FBQUEsSTs7QUF3R04sK0RBQWVBLElBQWYiLCJmaWxlIjoiLi9wYWdlcy9ibG9nLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSBcIkBzYW5pdHkvaW1hZ2UtdXJsXCI7XG5pbXBvcnQgY3JlYXRlIGZyb20gXCJAc2FuaXR5L2NsaWVudFwiO1xuXG5pbXBvcnQgUG9zdENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdENhcmRcIjtcblxuY29uc3QgQmxvZyA9ICh7IHBvc3RzIH0pID0+IHtcbiAgY29uc3QgW21hcHBlZFBvc3RzLCBzZXRNYXBwZWRQb3N0c10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocG9zdHMubGVuZ3RoKSB7XG5cbiAgICAgIC8vIGNvbnN0IGltYWdlQnVpbGRlciA9IGltYWdlVXJsQnVpbGRlcihzYW5pdHlDbGllbnQpO1xuXG4gICAgICBzZXRNYXBwZWRQb3N0cyhcbiAgICAgICAgcG9zdHMubWFwKChwb3N0KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnBvc3QsXG4gICAgICAgICAgICAvLyBtYWluSW1hZ2U6IGltYWdlQnVpbGRlclxuICAgICAgICAgICAgLy8gICAuaW1hZ2UocG9zdC5tYWluSW1hZ2UpXG4gICAgICAgICAgICAvLyAgIC53aWR0aCg0NTApXG4gICAgICAgICAgICAvLyAgIC5oZWlnaHQoNTAwKSxcbiAgICAgICAgICB9O1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0TWFwcGVkUG9zdHMoW10pO1xuICAgIH1cbiAgfSwgW3Bvc3RzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cIm15LTVcIj5CbG9nIFBhZ2U8L2gxPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICB7bWFwcGVkUG9zdHMgJiZcbiAgICAgICAgICBtYXBwZWRQb3N0cy5sZW5ndGggJiZcbiAgICAgICAgICBtYXBwZWRQb3N0cy5tYXAoKHBvc3QsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8UG9zdENhcmQgZGF0YT17cG9zdH0ga2V5PXtpbmRleH0gLz5cbiAgICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG5cbiAgY29uc3QgcXVlcnkgPSBlbmNvZGVVUklDb21wb25lbnQoYCpbIF90eXBlID09IFwicG9zdFwiIF1gKTtcbiAgLy81a2x4empjalxuICAvLyBvczhya29jM1xuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9vczhya29jMy5hcGkuc2FuaXR5LmlvL3YyMDIxLTA2LTA3L2RhdGEvcXVlcnkvcHJvZHVjdGlvbj9xdWVyeT0ke3F1ZXJ5fWA7XG5cbiAgY29uc29sZS5sb2codXJsKTtcbiAgY29uc3QgY29uZmlnID0ge1xuICAgIGRhdGFzZXQ6IFwicHJvZHVjdGlvblwiLFxuICAgIHByb2plY3RJZDogXCJvczhya29jM1wiLFxuICAgIGFwaVZlcnNpb246IFwiMjAyMS0xMC0yMVwiLFxuICAgIHRva2VuOiBcInNrUk91TDVBS2d2Q0w0VDdpbXZIWWdkSWFtZnBnMVlrenFKa2JOTXYwejlzS1J1cXZCMWZZeFh1MlU5QnhIV3ViRU9IZ3d2ZDlIYVVlOEZONmx4dDZZeEY5NVZTZm5oaTdqSm5rTVE3ZGhrS1JXYUtVbHBKWUQybDZwRzVrcW90OWVVUlFmcUlzYmdFTGNpUlRuNDF5UjllZ3NWZ3MxeGM0QjdXQmNZTDl0VzFjT3gxTnNmTlwiLFxuICAgIHVzZUNkbjogZmFsc2UsXG4gIH07XG5cbiAgY29uc3QgY2xpZW50ID0gY3JlYXRlKGNvbmZpZyk7XG5cblxuXG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgdHJ5IHtcblxuICAgIGF3YWl0IGNsaWVudFxuICAgICAgLmNyZWF0ZSh7XG4gICAgICAgIF90eXBlOiBcIndhdGNobGlzdFwiLFxuICAgICAgICBzeW1ib2xOYW1lOiBcIkFrc2h1XCIsXG4gICAgICAgIGx0cDogXCIxMzAuNzFcIixcbiAgICAgICAgY3A6IFwiMC41NyVcIixcbiAgICAgICAgY2hhbmdlOiBcIiswLjc0XCIsXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgVG9kbyB3YXMgY3JlYXRlZCwgZG9jdW1lbnQgSUQgaXMgJHtyZXMuX2lkfWApO1xuICAgICAgfSk7XG5cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbXNnOiBcIkVycm9yLCBjaGVjayBjb25zb2xlXCIgfSk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS1cbiAgYXdhaXQgY2xpZW50XG4gIC5mZXRjaCgnKlsgX3R5cGUgPT0gXCJwb3N0XCIgXScpXG4gIC50aGVuKChyZXMpID0+IHtcbiAgICBjb25zb2xlLmxvZyhgVG9kbyB3YXMgY3JlYXRlZCwgZG9jdW1lbnQgSUQgaXMgJHtyZXMuX2lkfWApO1xuICB9KTtcbiAvKiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKHVybCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcbiAgY29uc3QgcG9zdHMgPSBkYXRhLnJlc3VsdDtcbiAgY29uc29sZS5sb2cocG9zdHNbMF1bXCJib2R5XCJdKTsgKi9cblxuICBpZiAoIXBvc3RzIHx8ICFwb3N0cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgcG9zdHM6IFtdLFxuICAgICAgfSxcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBwb3N0cyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQmxvZzsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blog.js\n");

/***/ })

});