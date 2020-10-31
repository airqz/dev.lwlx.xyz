webpackHotUpdate_N_E("pages/blog/[blog]",{

/***/ "./components/Author.tsx":
/*!*******************************!*\
  !*** ./components/Author.tsx ***!
  \*******************************/
/*! exports provided: FollowButton, Author, AuthorLines */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FollowButton\", function() { return FollowButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Author\", function() { return Author; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AuthorLines\", function() { return AuthorLines; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fecha__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fecha */ \"./node_modules/fecha/lib/fecha.js\");\n/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../globals */ \"./globals.ts\");\n\n\n\nvar _jsxFileName = \"/Users/entw/projects/dev.lwlx.xyz/components/Author.tsx\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar FollowButton = function FollowButton() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n    href: \"/newsletter\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      style: {\n        display: 'inline-block',\n        border: \"1px solid \".concat(_globals__WEBPACK_IMPORTED_MODULE_4__[\"globals\"].accentColor),\n        borderRadius: '4px',\n        padding: '2px 10px',\n        color: _globals__WEBPACK_IMPORTED_MODULE_4__[\"globals\"].accentColor,\n        fontSize: '10pt',\n        marginBottom: '2px',\n        marginLeft: '4px'\n      },\n      children: \"Follow\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, _this);\n};\n_c = FollowButton;\nvar Author = function Author(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    style: {\n      margin: '0px',\n      padding: '0px'\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      style: {\n        display: 'flex',\n        flexDirection: 'row',\n        alignItems: 'center',\n        justifyContent: 'flex-start'\n      },\n      children: [props.post.authorPhoto && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"img\", {\n        src: props.post.authorPhoto,\n        style: {\n          width: '70px',\n          height: '70px',\n          borderRadius: '35px',\n          margin: '0px 10px 0px 0px'\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(AuthorLines, {\n        post: props.post\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 5\n  }, _this);\n};\n_c2 = Author;\nvar AuthorLines = function AuthorLines(props) {\n  var lineStyle = {\n    margin: '2px',\n    padding: 0,\n    lineHeight: 1.2,\n    fontSize: '11pt'\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n      style: _objectSpread({}, lineStyle),\n      children: props.post.author ? props.post.author : ''\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n      style: _objectSpread({\n        opacity: 0.6\n      }, lineStyle),\n      children: props.post.datePublished ? Object(fecha__WEBPACK_IMPORTED_MODULE_3__[\"format\"])(new Date(props.post.datePublished), 'MMMM Do, YYYY') : ''\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n      style: _objectSpread({}, lineStyle),\n      children: props.post.authorTwitter && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n        style: {\n          textDecoration: 'none',\n          color: _globals__WEBPACK_IMPORTED_MODULE_4__[\"globals\"].primaryColor\n        },\n        href: \"https://twitter.com/\".concat(props.post.authorTwitter),\n        children: \"@\".concat(props.post.authorTwitter)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 68,\n    columnNumber: 5\n  }, _this);\n};\n_c3 = AuthorLines;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"FollowButton\");\n$RefreshReg$(_c2, \"Author\");\n$RefreshReg$(_c3, \"AuthorLines\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdXRob3IudHN4P2MxNzUiXSwibmFtZXMiOlsiRm9sbG93QnV0dG9uIiwiZGlzcGxheSIsImJvcmRlciIsImdsb2JhbHMiLCJhY2NlbnRDb2xvciIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJjb2xvciIsImZvbnRTaXplIiwibWFyZ2luQm90dG9tIiwibWFyZ2luTGVmdCIsIkF1dGhvciIsInByb3BzIiwibWFyZ2luIiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInBvc3QiLCJhdXRob3JQaG90byIsIndpZHRoIiwiaGVpZ2h0IiwiQXV0aG9yTGluZXMiLCJsaW5lU3R5bGUiLCJsaW5lSGVpZ2h0IiwiYXV0aG9yIiwib3BhY2l0eSIsImRhdGVQdWJsaXNoZWQiLCJmb3JtYXQiLCJEYXRlIiwiYXV0aG9yVHdpdHRlciIsInRleHREZWNvcmF0aW9uIiwicHJpbWFyeUNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFTyxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ2hDLHNCQUNFO0FBQUcsUUFBSSxFQUFDLGFBQVI7QUFBQSwyQkFDRTtBQUNFLFdBQUssRUFBRTtBQUNMQyxlQUFPLEVBQUUsY0FESjtBQUVMQyxjQUFNLHNCQUFlQyxnREFBTyxDQUFDQyxXQUF2QixDQUZEO0FBR0xDLG9CQUFZLEVBQUUsS0FIVDtBQUlMQyxlQUFPLEVBQUUsVUFKSjtBQUtMQyxhQUFLLEVBQUVKLGdEQUFPLENBQUNDLFdBTFY7QUFNTEksZ0JBQVEsRUFBRSxNQU5MO0FBT0xDLG9CQUFZLEVBQUUsS0FQVDtBQVFMQyxrQkFBVSxFQUFFO0FBUlAsT0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWtCRCxDQW5CTTtLQUFNVixZO0FBcUJOLElBQU1XLE1BQW9DLEdBQUcsU0FBdkNBLE1BQXVDLENBQUNDLEtBQUQsRUFBVztBQUM3RCxzQkFDRTtBQUNFLFNBQUssRUFBRTtBQUNMQyxZQUFNLEVBQUUsS0FESDtBQUVMUCxhQUFPLEVBQUU7QUFGSixLQURUO0FBQUEsMkJBTUU7QUFDRSxXQUFLLEVBQUU7QUFDTEwsZUFBTyxFQUFFLE1BREo7QUFFTGEscUJBQWEsRUFBRSxLQUZWO0FBR0xDLGtCQUFVLEVBQUUsUUFIUDtBQUlMQyxzQkFBYyxFQUFFO0FBSlgsT0FEVDtBQUFBLGlCQVFHSixLQUFLLENBQUNLLElBQU4sQ0FBV0MsV0FBWCxpQkFDQztBQUNFLFdBQUcsRUFBRU4sS0FBSyxDQUFDSyxJQUFOLENBQVdDLFdBRGxCO0FBRUUsYUFBSyxFQUFFO0FBQ0xDLGVBQUssRUFBRSxNQURGO0FBRUxDLGdCQUFNLEVBQUUsTUFGSDtBQUdMZixzQkFBWSxFQUFFLE1BSFQ7QUFJTFEsZ0JBQU0sRUFBRTtBQUpIO0FBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRKLGVBbUJFLHFFQUFDLFdBQUQ7QUFBYSxZQUFJLEVBQUVELEtBQUssQ0FBQ0s7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE4QkQsQ0EvQk07TUFBTU4sTTtBQWlDTixJQUFNVSxXQUF5QyxHQUFHLFNBQTVDQSxXQUE0QyxDQUFDVCxLQUFELEVBQVc7QUFDbEUsTUFBTVUsU0FBUyxHQUFHO0FBQ2hCVCxVQUFNLEVBQUUsS0FEUTtBQUVoQlAsV0FBTyxFQUFFLENBRk87QUFHaEJpQixjQUFVLEVBQUUsR0FISTtBQUloQmYsWUFBUSxFQUFFO0FBSk0sR0FBbEI7QUFNQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUcsV0FBSyxvQkFBT2MsU0FBUCxDQUFSO0FBQUEsZ0JBQ0dWLEtBQUssQ0FBQ0ssSUFBTixDQUFXTyxNQUFYLEdBQ0daLEtBQUssQ0FBQ0ssSUFBTixDQUFXTyxNQURkLEdBRUc7QUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFNRTtBQUFHLFdBQUs7QUFBSUMsZUFBTyxFQUFFO0FBQWIsU0FBcUJILFNBQXJCLENBQVI7QUFBQSxnQkFDR1YsS0FBSyxDQUFDSyxJQUFOLENBQVdTLGFBQVgsR0FDR0Msb0RBQU0sQ0FBQyxJQUFJQyxJQUFKLENBQVNoQixLQUFLLENBQUNLLElBQU4sQ0FBV1MsYUFBcEIsQ0FBRCxFQUFxQyxlQUFyQyxDQURULEdBRUc7QUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkYsZUFXRTtBQUFHLFdBQUssb0JBQU9KLFNBQVAsQ0FBUjtBQUFBLGdCQUNHVixLQUFLLENBQUNLLElBQU4sQ0FBV1ksYUFBWCxpQkFDQztBQUNFLGFBQUssRUFBRTtBQUNMQyx3QkFBYyxFQUFFLE1BRFg7QUFFTHZCLGVBQUssRUFBRUosZ0RBQU8sQ0FBQzRCO0FBRlYsU0FEVDtBQUtFLFlBQUksZ0NBQXlCbkIsS0FBSyxDQUFDSyxJQUFOLENBQVdZLGFBQXBDLENBTE47QUFBQSw2QkFNTWpCLEtBQUssQ0FBQ0ssSUFBTixDQUFXWSxhQU5qQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF5QkQsQ0FoQ007TUFBTVIsVyIsImZpbGUiOiIuL2NvbXBvbmVudHMvQXV0aG9yLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdmZWNoYSc7XG5pbXBvcnQgeyBQb3N0RGF0YSB9IGZyb20gJy4uL2xvYWRlcic7XG5pbXBvcnQgeyBnbG9iYWxzIH0gZnJvbSAnLi4vZ2xvYmFscyc7XG5cbmV4cG9ydCBjb25zdCBGb2xsb3dCdXR0b24gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGEgaHJlZj1cIi9uZXdzbGV0dGVyXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7Z2xvYmFscy5hY2NlbnRDb2xvcn1gLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogJzRweCcsXG4gICAgICAgICAgcGFkZGluZzogJzJweCAxMHB4JyxcbiAgICAgICAgICBjb2xvcjogZ2xvYmFscy5hY2NlbnRDb2xvcixcbiAgICAgICAgICBmb250U2l6ZTogJzEwcHQnLFxuICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzJweCcsXG4gICAgICAgICAgbWFyZ2luTGVmdDogJzRweCcsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIEZvbGxvd1xuICAgICAgPC9kaXY+XG4gICAgPC9hPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IEF1dGhvcjogUmVhY3QuRkM8eyBwb3N0OiBQb3N0RGF0YSB9PiA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIG1hcmdpbjogJzBweCcsXG4gICAgICAgIHBhZGRpbmc6ICcwcHgnLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCcsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtwcm9wcy5wb3N0LmF1dGhvclBob3RvICYmIChcbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9e3Byb3BzLnBvc3QuYXV0aG9yUGhvdG99XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICB3aWR0aDogJzcwcHgnLFxuICAgICAgICAgICAgICBoZWlnaHQ6ICc3MHB4JyxcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMzVweCcsXG4gICAgICAgICAgICAgIG1hcmdpbjogJzBweCAxMHB4IDBweCAwcHgnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICA8QXV0aG9yTGluZXMgcG9zdD17cHJvcHMucG9zdH0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IEF1dGhvckxpbmVzOiBSZWFjdC5GQzx7IHBvc3Q6IFBvc3REYXRhIH0+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IGxpbmVTdHlsZSA9IHtcbiAgICBtYXJnaW46ICcycHgnLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgbGluZUhlaWdodDogMS4yLFxuICAgIGZvbnRTaXplOiAnMTFwdCcsXG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxwIHN0eWxlPXt7IC4uLmxpbmVTdHlsZSB9fT5cbiAgICAgICAge3Byb3BzLnBvc3QuYXV0aG9yXG4gICAgICAgICAgPyBwcm9wcy5wb3N0LmF1dGhvclxuICAgICAgICAgIDogJyd9XG4gICAgICA8L3A+XG4gICAgICA8cCBzdHlsZT17eyBvcGFjaXR5OiAwLjYsIC4uLmxpbmVTdHlsZSB9fT5cbiAgICAgICAge3Byb3BzLnBvc3QuZGF0ZVB1Ymxpc2hlZFxuICAgICAgICAgID8gZm9ybWF0KG5ldyBEYXRlKHByb3BzLnBvc3QuZGF0ZVB1Ymxpc2hlZCksICdNTU1NIERvLCBZWVlZJylcbiAgICAgICAgICA6ICcnfVxuICAgICAgPC9wPlxuICAgICAgPHAgc3R5bGU9e3sgLi4ubGluZVN0eWxlIH19PlxuICAgICAgICB7cHJvcHMucG9zdC5hdXRob3JUd2l0dGVyICYmIChcbiAgICAgICAgICA8YVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAgICAgICAgICAgY29sb3I6IGdsb2JhbHMucHJpbWFyeUNvbG9yLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGhyZWY9e2BodHRwczovL3R3aXR0ZXIuY29tLyR7cHJvcHMucG9zdC5hdXRob3JUd2l0dGVyfWB9XG4gICAgICAgICAgPntgQCR7cHJvcHMucG9zdC5hdXRob3JUd2l0dGVyfWB9PC9hPlxuICAgICAgICApfVxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Author.tsx\n");

/***/ })

})