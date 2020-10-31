webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PostCard */ \"./components/PostCard.tsx\");\n/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../globals */ \"./globals.ts\");\n\n\n\nvar _jsxFileName = \"/Users/entw/projects/dev.lwlx.xyz/pages/index.tsx\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar sectionStyle = {\n  width: '100%',\n  padding: '100px 3vw',\n  display: 'flex',\n  flexDirection: 'column',\n  alignItems: 'center'\n};\n\nvar Home = function Home(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    style: {\n      width: '100%'\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"title\", {\n        children: \"Introducing dev.lwlx.xyz\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      style: sectionStyle,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h2\", {\n        style: {\n          margin: '4px 0px',\n          fontSize: '34pt'\n        },\n        children: \"recent posts\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        style: {\n          display: 'grid',\n          gridTemplateColumns: \"repeat(auto-fit, minmax(300px, 1fr))\",\n          gridRowGap: '8px',\n          gridColumnGap: '8px',\n          width: '100%',\n          padding: '0px 7vw'\n        },\n        children: props.posts.map(function (post, j) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_PostCard__WEBPACK_IMPORTED_MODULE_3__[\"PostCard\"], {\n            post: post\n          }, j, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 20\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      style: _objectSpread({}, sectionStyle),\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h2\", {\n        style: {\n          textAlign: 'center',\n          fontSize: '34pt'\n        },\n        children: \"about this blog\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n        style: {\n          textAlign: 'center',\n          maxWidth: '960px',\n          margin: 'auto',\n          lineHeight: 1.7\n        },\n        children: [\"dev.lwlx.xyz is a blog focused on Cybersecurity and the occasional code project.\", ' ', \"Find me on Github here: \\xA0\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n          href: \"https://github.com/Lawlez/\",\n          children: \"https://github.com/Lawlez/\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 11\n        }, _this), \"Find me on Twitter here: \\xA0\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n          href: \"https://twitter.com/0x0000005\",\n          children: \"https://twitter.com/0x0000005\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      style: sectionStyle,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h2\", {\n        style: {\n          margin: '4px 0px',\n          fontSize: '22pt',\n          paddingBottom: '30px'\n        },\n        children: \"Work  in  Progress . . .\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n        href: \"https://github.com/Lawlez/dev.lwlx.xyz\",\n        style: {\n          cursor: 'pointer'\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n          style: {\n            padding: '10px 30px',\n            backgroundColor: _globals__WEBPACK_IMPORTED_MODULE_4__[\"globals\"].primaryColor,\n            color: 'white',\n            fontSize: '14pt',\n            border: 'none',\n            borderRadius: '8px',\n            cursor: 'pointer'\n          },\n          children: \"check dev.lwlx.xyz on GitHub\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Home;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsic2VjdGlvblN0eWxlIiwid2lkdGgiLCJwYWRkaW5nIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwiSG9tZSIsInByb3BzIiwibWFyZ2luIiwiZm9udFNpemUiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiZ3JpZFJvd0dhcCIsImdyaWRDb2x1bW5HYXAiLCJwb3N0cyIsIm1hcCIsInBvc3QiLCJqIiwidGV4dEFsaWduIiwibWF4V2lkdGgiLCJsaW5lSGVpZ2h0IiwicGFkZGluZ0JvdHRvbSIsImN1cnNvciIsImJhY2tncm91bmRDb2xvciIsImdsb2JhbHMiLCJwcmltYXJ5Q29sb3IiLCJjb2xvciIsImJvcmRlciIsImJvcmRlclJhZGl1cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUVBLElBQU1BLFlBQVksR0FBRztBQUNuQkMsT0FBSyxFQUFFLE1BRFk7QUFFbkJDLFNBQU8sRUFBRSxXQUZVO0FBR25CQyxTQUFPLEVBQUUsTUFIVTtBQUluQkMsZUFBYSxFQUFFLFFBSkk7QUFLbkJDLFlBQVUsRUFBRTtBQUxPLENBQXJCOztBQVFBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFLUDtBQUNKLHNCQUNFO0FBQ0UsU0FBSyxFQUFFO0FBQ0xOLFdBQUssRUFBRTtBQURGLEtBRFQ7QUFBQSw0QkFLRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEYsZUFVRTtBQUFLLFdBQUssRUFBRUQsWUFBWjtBQUFBLDhCQUNFO0FBQ0UsYUFBSyxFQUFFO0FBQ0xRLGdCQUFNLEVBQUUsU0FESDtBQUVMQyxrQkFBUSxFQUFFO0FBRkwsU0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBU0U7QUFDRSxhQUFLLEVBQUU7QUFDTE4saUJBQU8sRUFBRSxNQURKO0FBRUxPLDZCQUFtQix3Q0FGZDtBQUdMQyxvQkFBVSxFQUFFLEtBSFA7QUFJTEMsdUJBQWEsRUFBRSxLQUpWO0FBS0xYLGVBQUssRUFBRSxNQUxGO0FBTUxDLGlCQUFPLEVBQUU7QUFOSixTQURUO0FBQUEsa0JBVUdLLEtBQUssQ0FBQ00sS0FBTixDQUFZQyxHQUFaLENBQWdCLFVBQUNDLElBQUQsRUFBT0MsQ0FBUCxFQUFhO0FBQzVCLDhCQUFPLHFFQUFDLDZEQUFEO0FBQVUsZ0JBQUksRUFBRUQ7QUFBaEIsYUFBMkJDLENBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQVA7QUFDRCxTQUZBO0FBVkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZGLGVBbUNFO0FBQUssV0FBSyxvQkFBT2hCLFlBQVAsQ0FBVjtBQUFBLDhCQUNFO0FBQ0UsYUFBSyxFQUFFO0FBQ0xpQixtQkFBUyxFQUFFLFFBRE47QUFFTFIsa0JBQVEsRUFBRTtBQUZMLFNBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQVNFO0FBQ0UsYUFBSyxFQUFFO0FBQ0xRLG1CQUFTLEVBQUUsUUFETjtBQUVMQyxrQkFBUSxFQUFFLE9BRkw7QUFHTFYsZ0JBQU0sRUFBRSxNQUhIO0FBSUxXLG9CQUFVLEVBQUU7QUFKUCxTQURUO0FBQUEsdUdBUW1GLEdBUm5GLCtDQVdFO0FBQUcsY0FBSSxFQUFDLDRCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVhGLGdEQWdCRTtBQUFHLGNBQUksRUFBQywrQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbkNGLGVBbUVFO0FBQUssV0FBSyxFQUFFbkIsWUFBWjtBQUFBLDhCQUNFO0FBQ0UsYUFBSyxFQUFFO0FBQ0xRLGdCQUFNLEVBQUUsU0FESDtBQUVMQyxrQkFBUSxFQUFFLE1BRkw7QUFHTFcsdUJBQWEsRUFBRTtBQUhWLFNBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQVVFO0FBQUcsWUFBSSxFQUFDLHdDQUFSO0FBQWlELGFBQUssRUFBRTtBQUFFQyxnQkFBTSxFQUFFO0FBQVYsU0FBeEQ7QUFBQSwrQkFDRTtBQUNFLGVBQUssRUFBRTtBQUNMbkIsbUJBQU8sRUFBRSxXQURKO0FBRUxvQiwyQkFBZSxFQUFFQyxnREFBTyxDQUFDQyxZQUZwQjtBQUdMQyxpQkFBSyxFQUFFLE9BSEY7QUFJTGhCLG9CQUFRLEVBQUUsTUFKTDtBQUtMaUIsa0JBQU0sRUFBRSxNQUxIO0FBTUxDLHdCQUFZLEVBQUUsS0FOVDtBQU9MTixrQkFBTSxFQUFFO0FBUEgsV0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFuRUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFnR0QsQ0F0R0Q7O0tBQU1mLEk7O0FBd0dTQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyBQb3N0RGF0YSwgbG9hZEJsb2dQb3N0cywgbG9hZE1hcmtkb3duRmlsZSB9IGZyb20gJy4uL2xvYWRlcic7XG5pbXBvcnQgeyBQb3N0Q2FyZCB9IGZyb20gJy4uL2NvbXBvbmVudHMvUG9zdENhcmQnO1xuaW1wb3J0IHsgZ2VuZXJhdGVSU1MgfSBmcm9tICcuLi9yc3NVdGlsJztcbmltcG9ydCB7IGdsb2JhbHMgfSBmcm9tICcuLi9nbG9iYWxzJztcblxuY29uc3Qgc2VjdGlvblN0eWxlID0ge1xuICB3aWR0aDogJzEwMCUnLFxuICBwYWRkaW5nOiAnMTAwcHggM3Z3JyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG59IGFzIGNvbnN0O1xuXG5jb25zdCBIb21lID0gKHByb3BzOiB7XG4gIGludHJvZHVjdGlvbjogc3RyaW5nO1xuICBmZWF0dXJlczogc3RyaW5nO1xuICByZWFkbWU6IHN0cmluZztcbiAgcG9zdHM6IFBvc3REYXRhW107XG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5JbnRyb2R1Y2luZyBkZXYubHdseC54eXo8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxkaXYgc3R5bGU9e3NlY3Rpb25TdHlsZX0+XG4gICAgICAgIDxoMlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBtYXJnaW46ICc0cHggMHB4JyxcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMzRwdCcsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHJlY2VudCBwb3N0c1xuICAgICAgICA8L2gyPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6ICdncmlkJyxcbiAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IGByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSlgLFxuICAgICAgICAgICAgZ3JpZFJvd0dhcDogJzhweCcsXG4gICAgICAgICAgICBncmlkQ29sdW1uR2FwOiAnOHB4JyxcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBwYWRkaW5nOiAnMHB4IDd2dycsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtwcm9wcy5wb3N0cy5tYXAoKHBvc3QsIGopID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8UG9zdENhcmQgcG9zdD17cG9zdH0ga2V5PXtqfSAvPjtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBzdHlsZT17eyAuLi5zZWN0aW9uU3R5bGUgfX0+XG4gICAgICAgIDxoMlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgZm9udFNpemU6ICczNHB0JyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgYWJvdXQgdGhpcyBibG9nXG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxwXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICBtYXhXaWR0aDogJzk2MHB4JyxcbiAgICAgICAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgICAgICAgbGluZUhlaWdodDogMS43LFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBkZXYubHdseC54eXogaXMgYSBibG9nIGZvY3VzZWQgb24gQ3liZXJzZWN1cml0eSBhbmQgdGhlIG9jY2FzaW9uYWwgY29kZSBwcm9qZWN0LnsnICd9XG5cbiAgICAgICAgICBGaW5kIG1lIG9uIEdpdGh1YiBoZXJlOiAmbmJzcDtcbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0xhd2xlei9cIj5cbiAgICAgICAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9MYXdsZXovXG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgRmluZCBtZSBvbiBUd2l0dGVyIGhlcmU6ICZuYnNwO1xuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tLzB4MDAwMDAwNVwiPlxuICAgICAgICAgIGh0dHBzOi8vdHdpdHRlci5jb20vMHgwMDAwMDA1XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cblxuXG4gICAgICA8ZGl2IHN0eWxlPXtzZWN0aW9uU3R5bGV9PlxuICAgICAgICA8aDJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgbWFyZ2luOiAnNHB4IDBweCcsXG4gICAgICAgICAgICBmb250U2l6ZTogJzIycHQnLFxuICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogJzMwcHgnLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBXb3JrICBpbiAgUHJvZ3Jlc3MgLiAuIC5cbiAgICAgICAgPC9oMj5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9MYXdsZXovZGV2Lmx3bHgueHl6XCIgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcGFkZGluZzogJzEwcHggMzBweCcsXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogZ2xvYmFscy5wcmltYXJ5Q29sb3IsXG4gICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICBmb250U2l6ZTogJzE0cHQnLFxuICAgICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnOHB4JyxcbiAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIGNoZWNrIGRldi5sd2x4Lnh5eiBvbiBHaXRIdWJcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGludHJvZHVjdGlvbiA9IGF3YWl0IGxvYWRNYXJrZG93bkZpbGUoJ2ludHJvZHVjdGlvbi5tZCcpO1xuICBjb25zdCBmZWF0dXJlcyA9IGF3YWl0IGxvYWRNYXJrZG93bkZpbGUoJ2ZlYXR1cmVzLm1kJyk7XG4gIGNvbnN0IHJlYWRtZUZpbGUgPSBhd2FpdCBpbXBvcnQoYC4uLyR7J1JFQURNRS5tZCd9YCk7XG4gIGNvbnN0IHJlYWRtZSA9IHJlYWRtZUZpbGUuZGVmYXVsdDtcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBsb2FkQmxvZ1Bvc3RzKCk7XG5cbiAgLy8gY29tbWVudCBvdXQgdG8gdHVybiBvZmYgUlNTIGdlbmVyYXRpb24gZHVyaW5nIGJ1aWxkIHN0ZXAuXG4gIGF3YWl0IGdlbmVyYXRlUlNTKHBvc3RzKTtcblxuICBjb25zdCBwcm9wcyA9IHtcbiAgICBpbnRyb2R1Y3Rpb246IGludHJvZHVjdGlvbi5jb250ZW50cyxcbiAgICBmZWF0dXJlczogZmVhdHVyZXMuY29udGVudHMsXG4gICAgcmVhZG1lOiByZWFkbWUsXG4gICAgcG9zdHMsXG4gIH07XG5cbiAgcmV0dXJuIHsgcHJvcHMgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})