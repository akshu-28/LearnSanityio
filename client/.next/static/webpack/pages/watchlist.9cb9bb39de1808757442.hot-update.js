/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/watchlist",{

/***/ "./pages/watchlist.js":
/*!****************************!*\
  !*** ./pages/watchlist.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_akshayas_Desktop_sanitylearn_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PostCard */ \"./components/PostCard.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/akshayas/Desktop/sanitylearn/client/pages/watchlist.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_akshayas_Desktop_sanitylearn_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n // import imageUrlBuilder from \"@sanity/image-url\";\n\n\n\nvar Watchlist = function Watchlist(_ref) {\n  _s();\n\n  var posts = _ref.posts;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      mappedPosts = _useState[0],\n      setMappedPosts = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    if (posts.length) {\n      // const imageBuilder = imageUrlBuilder(sanityClient);\n      setMappedPosts(posts.map(function (post) {\n        return _objectSpread({}, post);\n      }));\n    } else {\n      setMappedPosts([]);\n    }\n  }, [posts]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"container\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      className: \"my-5\",\n      children: \"Blog Page\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"row\",\n      children: mappedPosts && mappedPosts.length && mappedPosts.map(function (post, index) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostCard__WEBPACK_IMPORTED_MODULE_3__.default, {\n          data: post\n        }, index, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 25\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Watchlist, \"g1Mdnvu5jHWt4ropjKFPig817wU=\");\n\n_c = Watchlist;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Watchlist);\n\nvar _c;\n\n$RefreshReg$(_c, \"Watchlist\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd2F0Y2hsaXN0LmpzP2ZjNTIiXSwibmFtZXMiOlsiV2F0Y2hsaXN0IiwicG9zdHMiLCJ1c2VTdGF0ZSIsIm1hcHBlZFBvc3RzIiwic2V0TWFwcGVkUG9zdHMiLCJ1c2VFZmZlY3QiLCJsZW5ndGgiLCJtYXAiLCJwb3N0IiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFHQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFlO0FBQUE7O0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZOztBQUFBLGtCQUNTQywrQ0FBUSxDQUFDLEVBQUQsQ0FEakI7QUFBQSxNQUN0QkMsV0FEc0I7QUFBQSxNQUNUQyxjQURTOztBQUc3QkMsa0RBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBSUosS0FBSyxDQUFDSyxNQUFWLEVBQWtCO0FBRWQ7QUFFQUYsb0JBQWMsQ0FDVkgsS0FBSyxDQUFDTSxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFVO0FBQ2hCLGlDQUNPQSxJQURQO0FBT0gsT0FSRCxDQURVLENBQWQ7QUFXSCxLQWZELE1BZU87QUFDSEosb0JBQWMsQ0FBQyxFQUFELENBQWQ7QUFDSDtBQUNKLEdBbkJRLEVBbUJOLENBQUNILEtBQUQsQ0FuQk0sQ0FBVDtBQXFCQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUEsNEJBQ0k7QUFBSSxlQUFTLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBR0k7QUFBSyxlQUFTLEVBQUMsS0FBZjtBQUFBLGdCQUNLRSxXQUFXLElBQ1JBLFdBQVcsQ0FBQ0csTUFEZixJQUVHSCxXQUFXLENBQUNJLEdBQVosQ0FBZ0IsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsNEJBQ1osOERBQUMseURBQUQ7QUFBVSxjQUFJLEVBQUVEO0FBQWhCLFdBQTJCQyxLQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURZO0FBQUEsT0FBaEI7QUFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFhSCxDQXJDRDs7R0FBTVQsUzs7S0FBQUEsUzs7QUF3R04sK0RBQWVBLFNBQWYiLCJmaWxlIjoiLi9wYWdlcy93YXRjaGxpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tIFwiQHNhbml0eS9pbWFnZS11cmxcIjtcbmltcG9ydCBjcmVhdGUgZnJvbSBcIkBzYW5pdHkvY2xpZW50XCI7XG5cbmltcG9ydCBQb3N0Q2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0Q2FyZFwiO1xuXG5jb25zdCBXYXRjaGxpc3QgPSAoeyBwb3N0cyB9KSA9PiB7XG4gICAgY29uc3QgW21hcHBlZFBvc3RzLCBzZXRNYXBwZWRQb3N0c10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAocG9zdHMubGVuZ3RoKSB7XG5cbiAgICAgICAgICAgIC8vIGNvbnN0IGltYWdlQnVpbGRlciA9IGltYWdlVXJsQnVpbGRlcihzYW5pdHlDbGllbnQpO1xuXG4gICAgICAgICAgICBzZXRNYXBwZWRQb3N0cyhcbiAgICAgICAgICAgICAgICBwb3N0cy5tYXAoKHBvc3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnBvc3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtYWluSW1hZ2U6IGltYWdlQnVpbGRlclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAuaW1hZ2UocG9zdC5tYWluSW1hZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIC53aWR0aCg0NTApXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIC5oZWlnaHQoNTAwKSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldE1hcHBlZFBvc3RzKFtdKTtcbiAgICAgICAgfVxuICAgIH0sIFtwb3N0c10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJteS01XCI+QmxvZyBQYWdlPC9oMT5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICB7bWFwcGVkUG9zdHMgJiZcbiAgICAgICAgICAgICAgICAgICAgbWFwcGVkUG9zdHMubGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgICAgIG1hcHBlZFBvc3RzLm1hcCgocG9zdCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0Q2FyZCBkYXRhPXtwb3N0fSBrZXk9e2luZGV4fSAvPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG5cbiAgICBjb25zdCBxdWVyeSA9IGVuY29kZVVSSUNvbXBvbmVudChgKlsgX3R5cGUgPT0gXCJwb3N0XCIgXWApO1xuICAgIC8vNWtseHpqY2pcbiAgICAvLyBvczhya29jM1xuICAgIGNvbnN0IHVybCA9IGBodHRwczovL29zOHJrb2MzLmFwaS5zYW5pdHkuaW8vdjIwMjEtMDYtMDcvZGF0YS9xdWVyeS9wcm9kdWN0aW9uP3F1ZXJ5PSR7cXVlcnl9YDtcblxuICAgIGNvbnNvbGUubG9nKHVybCk7XG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgICBkYXRhc2V0OiBcInByb2R1Y3Rpb25cIixcbiAgICAgICAgcHJvamVjdElkOiBcIm9zOHJrb2MzXCIsXG4gICAgICAgIGFwaVZlcnNpb246IFwiMjAyMS0xMC0yMVwiLFxuICAgICAgICB0b2tlbjogXCJza1JPdUw1QUtndkNMNFQ3aW12SFlnZElhbWZwZzFZa3pxSmtiTk12MHo5c0tSdXF2QjFmWXhYdTJVOUJ4SFd1YkVPSGd3dmQ5SGFVZThGTjZseHQ2WXhGOTVWU2ZuaGk3akpua01RN2Roa0tSV2FLVWxwSllEMmw2cEc1a3FvdDllVVJRZnFJc2JnRUxjaVJUbjQxeVI5ZWdzVmdzMXhjNEI3V0JjWUw5dFcxY094MU5zZk5cIixcbiAgICAgICAgdXNlQ2RuOiBmYWxzZSxcbiAgICB9O1xuXG4gICAgY29uc3QgY2xpZW50ID0gY3JlYXRlKGNvbmZpZyk7XG5cblxuXG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLyogICAgIHRyeSB7XG4gICAgXG4gICAgICAgICAgICBhd2FpdCBjbGllbnRcbiAgICAgICAgICAgICAgICAuY3JlYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgX3R5cGU6IFwid2F0Y2hsaXN0XCIsXG4gICAgICAgICAgICAgICAgICAgIHN5bWJvbE5hbWU6IFwiQWtzaHVcIixcbiAgICAgICAgICAgICAgICAgICAgbHRwOiBcIjEzMC43MVwiLFxuICAgICAgICAgICAgICAgICAgICBjcDogXCIwLjU3JVwiLFxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IFwiKzAuNzRcIixcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFRvZG8gd2FzIGNyZWF0ZWQsIGRvY3VtZW50IElEIGlzICR7cmVzLl9pZH1gKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1zZzogXCJFcnJvciwgY2hlY2sgY29uc29sZVwiIH0pO1xuICAgICAgICB9ICovXG4gICAgLy8tLS0tLS0tLS0tLS0tLS1cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgY2xpZW50XG4gICAgICAgIC5mZXRjaCgnKlsgX3R5cGUgPT0gXCJ3YXRjaGxpc3RcIiBdJylcbiAgICAgICAgO1xuICAgIC8qICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2godXJsKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuICAgICBjb25zdCBwb3N0cyA9IGRhdGEucmVzdWx0O1xuICAgICBjb25zb2xlLmxvZyhwb3N0c1swXVtcImJvZHlcIl0pOyAqL1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIGNvbnN0IHBvc3RzID0gZGF0YTtcblxuICAgIGlmICghcG9zdHMgfHwgIXBvc3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICBwb3N0czogW10sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgIHBvc3RzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXYXRjaGxpc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/watchlist.js\n");

/***/ })

});