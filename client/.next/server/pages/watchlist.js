/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/watchlist";
exports.ids = ["pages/watchlist"];
exports.modules = {

/***/ "./pages/watchlist.js":
/*!****************************!*\
  !*** ./pages/watchlist.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/akshayas/Desktop/sanitylearn/client/pages/watchlist.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n // import imageUrlBuilder from \"@sanity/image-url\";\n\n\n\nconst Watchlist = ({\n  posts\n}) => {\n  const {\n    0: mappedPosts,\n    1: setMappedPosts\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {\n    if (posts.length) {\n      // const imageBuilder = imageUrlBuilder(sanityClient);\n      setMappedPosts(posts.map(post => {\n        return _objectSpread({}, post);\n      }));\n    } else {\n      setMappedPosts([]);\n    }\n  }, [posts]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"container\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      className: \"my-5\",\n      children: \"Blog Page\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"row\",\n      children: mappedPosts && mappedPosts.length && mappedPosts.map((post, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        className: \"my-5\",\n        children: post[\"symbolName\"]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 25\n      }, undefined))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 9\n  }, undefined);\n};\n\nconst getServerSideProps = async context => {\n  const query = encodeURIComponent(`*[ _type == \"post\" ]`); //5klxzjcj\n  // os8rkoc3\n\n  const url = `https://os8rkoc3.api.sanity.io/v2021-06-07/data/query/production?query=${query}`;\n  console.log(url);\n  const config = {\n    dataset: \"production\",\n    projectId: \"os8rkoc3\",\n    apiVersion: \"2021-10-21\",\n    token: \"skROuL5AKgvCL4T7imvHYgdIamfpg1YkzqJkbNMv0z9sKRuqvB1fYxXu2U9BxHWubEOHgwvd9HaUe8FN6lxt6YxF95VSfnhi7jJnkMQ7dhkKRWaKUlpJYD2l6pG5kqot9eURQfqIsbgELciRTn41yR9egsVgs1xc4B7WBcYL9tW1cOx1NsfN\",\n    useCdn: false\n  };\n  const client = _sanity_client__WEBPACK_IMPORTED_MODULE_3___default()(config); //-----------------------\n\n  const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().post('https://os8rkoc3.api.sanity.io/v1/auth/token', {\n    email: \"email\",\n    password: \"password\"\n  }, {\n    headers: {\n      'Content-Type': 'application/json'\n    }\n  });\n\n  if (response.status === 200) {\n    const accessToken = response.data.accessToken;\n    return accessToken;\n  } else {\n    throw new Error('Failed to login');\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Watchlist);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYW5pdHluZXh0YmxvZy8uL3BhZ2VzL3dhdGNobGlzdC5qcz9mYzUyIl0sIm5hbWVzIjpbIldhdGNobGlzdCIsInBvc3RzIiwibWFwcGVkUG9zdHMiLCJzZXRNYXBwZWRQb3N0cyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwibGVuZ3RoIiwibWFwIiwicG9zdCIsImluZGV4IiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInF1ZXJ5IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwidXJsIiwiY29uc29sZSIsImxvZyIsImNvbmZpZyIsImRhdGFzZXQiLCJwcm9qZWN0SWQiLCJhcGlWZXJzaW9uIiwidG9rZW4iLCJ1c2VDZG4iLCJjbGllbnQiLCJjcmVhdGUiLCJyZXNwb25zZSIsImF4aW9zIiwiZW1haWwiLCJwYXNzd29yZCIsImhlYWRlcnMiLCJzdGF0dXMiLCJhY2Nlc3NUb2tlbiIsImRhdGEiLCJFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDQTs7QUFHQSxNQUFNQSxTQUFTLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZTtBQUM3QixRQUFNO0FBQUEsT0FBQ0MsV0FBRDtBQUFBLE9BQWNDO0FBQWQsTUFBZ0NDLCtDQUFRLENBQUMsRUFBRCxDQUE5QztBQUVBQyxrREFBUyxDQUFDLE1BQU07QUFDWixRQUFJSixLQUFLLENBQUNLLE1BQVYsRUFBa0I7QUFFZDtBQUVBSCxvQkFBYyxDQUNWRixLQUFLLENBQUNNLEdBQU4sQ0FBV0MsSUFBRCxJQUFVO0FBQ2hCLGlDQUNPQSxJQURQO0FBT0gsT0FSRCxDQURVLENBQWQ7QUFXSCxLQWZELE1BZU87QUFDSEwsb0JBQWMsQ0FBQyxFQUFELENBQWQ7QUFDSDtBQUNKLEdBbkJRLEVBbUJOLENBQUNGLEtBQUQsQ0FuQk0sQ0FBVDtBQXFCQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUEsNEJBQ0k7QUFBSSxlQUFTLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUdJO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQSxnQkFDS0MsV0FBVyxJQUNSQSxXQUFXLENBQUNJLE1BRGYsSUFFR0osV0FBVyxDQUFDSyxHQUFaLENBQWdCLENBQUNDLElBQUQsRUFBT0MsS0FBUCxrQkFDWjtBQUFJLGlCQUFTLEVBQUMsTUFBZDtBQUFBLGtCQUFzQkQsSUFBSSxDQUFDLFlBQUQ7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESjtBQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFhSCxDQXJDRDs7QUF1Q08sTUFBTUUsa0JBQWtCLEdBQUcsTUFBT0MsT0FBUCxJQUFtQjtBQUVqRCxRQUFNQyxLQUFLLEdBQUdDLGtCQUFrQixDQUFFLHNCQUFGLENBQWhDLENBRmlELENBR2pEO0FBQ0E7O0FBQ0EsUUFBTUMsR0FBRyxHQUFJLDBFQUF5RUYsS0FBTSxFQUE1RjtBQUVBRyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBLFFBQU1HLE1BQU0sR0FBRztBQUNYQyxXQUFPLEVBQUUsWUFERTtBQUVYQyxhQUFTLEVBQUUsVUFGQTtBQUdYQyxjQUFVLEVBQUUsWUFIRDtBQUlYQyxTQUFLLEVBQUUsc0xBSkk7QUFLWEMsVUFBTSxFQUFFO0FBTEcsR0FBZjtBQVFBLFFBQU1DLE1BQU0sR0FBR0MscURBQU0sQ0FBQ1AsTUFBRCxDQUFyQixDQWhCaUQsQ0FpQmpEOztBQUNBLFFBQU1RLFFBQVEsR0FBRyxNQUFNQyxpREFBQSxDQUNuQiw4Q0FEbUIsRUFFbkI7QUFDSUMsU0FBSyxFQUFFLE9BRFg7QUFFSUMsWUFBUSxFQUFFO0FBRmQsR0FGbUIsRUFNbkI7QUFDSUMsV0FBTyxFQUFFO0FBQ0wsc0JBQWdCO0FBRFg7QUFEYixHQU5tQixDQUF2Qjs7QUFhQSxNQUFJSixRQUFRLENBQUNLLE1BQVQsS0FBb0IsR0FBeEIsRUFBNkI7QUFDekIsVUFBTUMsV0FBVyxHQUFHTixRQUFRLENBQUNPLElBQVQsQ0FBY0QsV0FBbEM7QUFDQSxXQUFPQSxXQUFQO0FBQ0gsR0FIRCxNQUdPO0FBQ0gsVUFBTSxJQUFJRSxLQUFKLENBQVUsaUJBQVYsQ0FBTjtBQUNIO0FBSUosQ0F4Q007QUEwQ1AsK0RBQWVqQyxTQUFmIiwiZmlsZSI6Ii4vcGFnZXMvd2F0Y2hsaXN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSBcIkBzYW5pdHkvaW1hZ2UtdXJsXCI7XG5pbXBvcnQgY3JlYXRlIGZyb20gXCJAc2FuaXR5L2NsaWVudFwiO1xuXG5cbmNvbnN0IFdhdGNobGlzdCA9ICh7IHBvc3RzIH0pID0+IHtcbiAgICBjb25zdCBbbWFwcGVkUG9zdHMsIHNldE1hcHBlZFBvc3RzXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChwb3N0cy5sZW5ndGgpIHtcblxuICAgICAgICAgICAgLy8gY29uc3QgaW1hZ2VCdWlsZGVyID0gaW1hZ2VVcmxCdWlsZGVyKHNhbml0eUNsaWVudCk7XG5cbiAgICAgICAgICAgIHNldE1hcHBlZFBvc3RzKFxuICAgICAgICAgICAgICAgIHBvc3RzLm1hcCgocG9zdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4ucG9zdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1haW5JbWFnZTogaW1hZ2VCdWlsZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIC5pbWFnZShwb3N0Lm1haW5JbWFnZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgLndpZHRoKDQ1MClcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgLmhlaWdodCg1MDApLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0TWFwcGVkUG9zdHMoW10pO1xuICAgICAgICB9XG4gICAgfSwgW3Bvc3RzXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm15LTVcIj5CbG9nIFBhZ2U8L2gxPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIHttYXBwZWRQb3N0cyAmJlxuICAgICAgICAgICAgICAgICAgICBtYXBwZWRQb3N0cy5sZW5ndGggJiZcbiAgICAgICAgICAgICAgICAgICAgbWFwcGVkUG9zdHMubWFwKChwb3N0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm15LTVcIj57cG9zdFtcInN5bWJvbE5hbWVcIl19PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuXG4gICAgY29uc3QgcXVlcnkgPSBlbmNvZGVVUklDb21wb25lbnQoYCpbIF90eXBlID09IFwicG9zdFwiIF1gKTtcbiAgICAvLzVrbHh6amNqXG4gICAgLy8gb3M4cmtvYzNcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9vczhya29jMy5hcGkuc2FuaXR5LmlvL3YyMDIxLTA2LTA3L2RhdGEvcXVlcnkvcHJvZHVjdGlvbj9xdWVyeT0ke3F1ZXJ5fWA7XG5cbiAgICBjb25zb2xlLmxvZyh1cmwpO1xuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgICAgZGF0YXNldDogXCJwcm9kdWN0aW9uXCIsXG4gICAgICAgIHByb2plY3RJZDogXCJvczhya29jM1wiLFxuICAgICAgICBhcGlWZXJzaW9uOiBcIjIwMjEtMTAtMjFcIixcbiAgICAgICAgdG9rZW46IFwic2tST3VMNUFLZ3ZDTDRUN2ltdkhZZ2RJYW1mcGcxWWt6cUprYk5NdjB6OXNLUnVxdkIxZll4WHUyVTlCeEhXdWJFT0hnd3ZkOUhhVWU4Rk42bHh0Nll4Rjk1VlNmbmhpN2pKbmtNUTdkaGtLUldhS1VscEpZRDJsNnBHNWtxb3Q5ZVVSUWZxSXNiZ0VMY2lSVG40MXlSOWVnc1ZnczF4YzRCN1dCY1lMOXRXMWNPeDFOc2ZOXCIsXG4gICAgICAgIHVzZUNkbjogZmFsc2UsXG4gICAgfTtcblxuICAgIGNvbnN0IGNsaWVudCA9IGNyZWF0ZShjb25maWcpO1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAgICdodHRwczovL29zOHJrb2MzLmFwaS5zYW5pdHkuaW8vdjEvYXV0aC90b2tlbicsXG4gICAgICAgIHtcbiAgICAgICAgICAgIGVtYWlsOiBcImVtYWlsXCIsXG4gICAgICAgICAgICBwYXNzd29yZDogXCJwYXNzd29yZFwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gcmVzcG9uc2UuZGF0YS5hY2Nlc3NUb2tlbjtcbiAgICAgICAgcmV0dXJuIGFjY2Vzc1Rva2VuO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGxvZ2luJyk7XG4gICAgfVxuXG5cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgV2F0Y2hsaXN0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/watchlist.js\n");

/***/ }),

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@sanity/client");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/watchlist.js"));
module.exports = __webpack_exports__;

})();