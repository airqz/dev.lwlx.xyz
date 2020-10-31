webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PostCard */ \"./components/PostCard.tsx\");\n/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../globals */ \"./globals.ts\");\n\n\n\nvar _jsxFileName = \"/Users/entw/projects/dev.lwlx.xyz/pages/index.tsx\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar sectionStyle = {\n  width: '100%',\n  padding: '100px 3vw',\n  display: 'flex',\n  flexDirection: 'column',\n  alignItems: 'center'\n};\n\nvar Home = function Home(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    style: {\n      width: '100%'\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"title\", {\n        children: \"Introducing dev.lwlx.xyz\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      style: sectionStyle,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h2\", {\n        style: {\n          margin: '4px 0px',\n          fontSize: '34pt'\n        },\n        children: \"recent posts\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        style: {\n          display: 'grid',\n          gridTemplateColumns: \"repeat(auto-fit, minmax(300px, 1fr))\",\n          gridRowGap: '8px',\n          gridColumnGap: '8px',\n          width: '100%',\n          padding: '0px 7vw'\n        },\n        children: props.posts.map(function (post, j) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_PostCard__WEBPACK_IMPORTED_MODULE_3__[\"PostCard\"], {\n            post: post\n          }, j, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 20\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      style: _objectSpread({}, sectionStyle),\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h2\", {\n        style: {\n          textAlign: 'center',\n          fontSize: '34pt'\n        },\n        children: \"about this blog\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n        style: {\n          textAlign: 'center',\n          maxWidth: '960px',\n          margin: 'auto',\n          lineHeight: 1.7\n        },\n        children: [\"dev.lwlx.xyz is a blog focused on Cybersecurity and the occasional code project.\", ' ', \"Find me on Github here: \\xA0\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n          href: \"https://github.com/Lawlez/\",\n          children: \"https://github.com/Lawlez/\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      style: sectionStyle,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h2\", {\n        style: {\n          margin: '4px 0px',\n          fontSize: '22pt',\n          paddingBottom: '30px'\n        },\n        children: \"Work  in  Progress . . .\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n        href: \"https://github.com/Lawlez/dev.lwlx.xyz\",\n        style: {\n          cursor: 'pointer'\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n          style: {\n            padding: '10px 30px',\n            backgroundColor: _globals__WEBPACK_IMPORTED_MODULE_4__[\"globals\"].primaryColor,\n            color: 'white',\n            fontSize: '14pt',\n            border: 'none',\n            borderRadius: '8px',\n            cursor: 'pointer'\n          },\n          children: \"check dev.lwlx.xyz on GitHub\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Home;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsic2VjdGlvblN0eWxlIiwid2lkdGgiLCJwYWRkaW5nIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwiSG9tZSIsInByb3BzIiwibWFyZ2luIiwiZm9udFNpemUiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiZ3JpZFJvd0dhcCIsImdyaWRDb2x1bW5HYXAiLCJwb3N0cyIsIm1hcCIsInBvc3QiLCJqIiwidGV4dEFsaWduIiwibWF4V2lkdGgiLCJsaW5lSGVpZ2h0IiwicGFkZGluZ0JvdHRvbSIsImN1cnNvciIsImJhY2tncm91bmRDb2xvciIsImdsb2JhbHMiLCJwcmltYXJ5Q29sb3IiLCJjb2xvciIsImJvcmRlciIsImJvcmRlclJhZGl1cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUVBLElBQU1BLFlBQVksR0FBRztBQUNuQkMsT0FBSyxFQUFFLE1BRFk7QUFFbkJDLFNBQU8sRUFBRSxXQUZVO0FBR25CQyxTQUFPLEVBQUUsTUFIVTtBQUluQkMsZUFBYSxFQUFFLFFBSkk7QUFLbkJDLFlBQVUsRUFBRTtBQUxPLENBQXJCOztBQVFBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFLUDtBQUNKLHNCQUNFO0FBQ0UsU0FBSyxFQUFFO0FBQ0xOLFdBQUssRUFBRTtBQURGLEtBRFQ7QUFBQSw0QkFLRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEYsZUFVRTtBQUFLLFdBQUssRUFBRUQsWUFBWjtBQUFBLDhCQUNFO0FBQ0UsYUFBSyxFQUFFO0FBQ0xRLGdCQUFNLEVBQUUsU0FESDtBQUVMQyxrQkFBUSxFQUFFO0FBRkwsU0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBU0U7QUFDRSxhQUFLLEVBQUU7QUFDTE4saUJBQU8sRUFBRSxNQURKO0FBRUxPLDZCQUFtQix3Q0FGZDtBQUdMQyxvQkFBVSxFQUFFLEtBSFA7QUFJTEMsdUJBQWEsRUFBRSxLQUpWO0FBS0xYLGVBQUssRUFBRSxNQUxGO0FBTUxDLGlCQUFPLEVBQUU7QUFOSixTQURUO0FBQUEsa0JBVUdLLEtBQUssQ0FBQ00sS0FBTixDQUFZQyxHQUFaLENBQWdCLFVBQUNDLElBQUQsRUFBT0MsQ0FBUCxFQUFhO0FBQzVCLDhCQUFPLHFFQUFDLDZEQUFEO0FBQVUsZ0JBQUksRUFBRUQ7QUFBaEIsYUFBMkJDLENBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQVA7QUFDRCxTQUZBO0FBVkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZGLGVBbUNFO0FBQUssV0FBSyxvQkFBT2hCLFlBQVAsQ0FBVjtBQUFBLDhCQUNFO0FBQ0UsYUFBSyxFQUFFO0FBQ0xpQixtQkFBUyxFQUFFLFFBRE47QUFFTFIsa0JBQVEsRUFBRTtBQUZMLFNBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQVNFO0FBQ0UsYUFBSyxFQUFFO0FBQ0xRLG1CQUFTLEVBQUUsUUFETjtBQUVMQyxrQkFBUSxFQUFFLE9BRkw7QUFHTFYsZ0JBQU0sRUFBRSxNQUhIO0FBSUxXLG9CQUFVLEVBQUU7QUFKUCxTQURUO0FBQUEsdUdBUW1GLEdBUm5GLCtDQVdFO0FBQUcsY0FBSSxFQUFDLDRCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5DRixlQThERTtBQUFLLFdBQUssRUFBRW5CLFlBQVo7QUFBQSw4QkFDRTtBQUNFLGFBQUssRUFBRTtBQUNMUSxnQkFBTSxFQUFFLFNBREg7QUFFTEMsa0JBQVEsRUFBRSxNQUZMO0FBR0xXLHVCQUFhLEVBQUU7QUFIVixTQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFVRTtBQUFHLFlBQUksRUFBQyx3Q0FBUjtBQUFpRCxhQUFLLEVBQUU7QUFBRUMsZ0JBQU0sRUFBRTtBQUFWLFNBQXhEO0FBQUEsK0JBQ0U7QUFDRSxlQUFLLEVBQUU7QUFDTG5CLG1CQUFPLEVBQUUsV0FESjtBQUVMb0IsMkJBQWUsRUFBRUMsZ0RBQU8sQ0FBQ0MsWUFGcEI7QUFHTEMsaUJBQUssRUFBRSxPQUhGO0FBSUxoQixvQkFBUSxFQUFFLE1BSkw7QUFLTGlCLGtCQUFNLEVBQUUsTUFMSDtBQU1MQyx3QkFBWSxFQUFFLEtBTlQ7QUFPTE4sa0JBQU0sRUFBRTtBQVBILFdBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBOURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMkZELENBakdEOztLQUFNZixJOztBQW1HU0EsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgUG9zdERhdGEsIGxvYWRCbG9nUG9zdHMsIGxvYWRNYXJrZG93bkZpbGUgfSBmcm9tICcuLi9sb2FkZXInO1xuaW1wb3J0IHsgUG9zdENhcmQgfSBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3RDYXJkJztcbmltcG9ydCB7IGdlbmVyYXRlUlNTIH0gZnJvbSAnLi4vcnNzVXRpbCc7XG5pbXBvcnQgeyBnbG9iYWxzIH0gZnJvbSAnLi4vZ2xvYmFscyc7XG5cbmNvbnN0IHNlY3Rpb25TdHlsZSA9IHtcbiAgd2lkdGg6ICcxMDAlJyxcbiAgcGFkZGluZzogJzEwMHB4IDN2dycsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxufSBhcyBjb25zdDtcblxuY29uc3QgSG9tZSA9IChwcm9wczoge1xuICBpbnRyb2R1Y3Rpb246IHN0cmluZztcbiAgZmVhdHVyZXM6IHN0cmluZztcbiAgcmVhZG1lOiBzdHJpbmc7XG4gIHBvc3RzOiBQb3N0RGF0YVtdO1xufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+SW50cm9kdWNpbmcgZGV2Lmx3bHgueHl6PC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8ZGl2IHN0eWxlPXtzZWN0aW9uU3R5bGV9PlxuICAgICAgICA8aDJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgbWFyZ2luOiAnNHB4IDBweCcsXG4gICAgICAgICAgICBmb250U2l6ZTogJzM0cHQnLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICByZWNlbnQgcG9zdHNcbiAgICAgICAgPC9oMj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiAnZ3JpZCcsXG4gICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBgcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpYCxcbiAgICAgICAgICAgIGdyaWRSb3dHYXA6ICc4cHgnLFxuICAgICAgICAgICAgZ3JpZENvbHVtbkdhcDogJzhweCcsXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgcGFkZGluZzogJzBweCA3dncnLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7cHJvcHMucG9zdHMubWFwKChwb3N0LCBqKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPFBvc3RDYXJkIHBvc3Q9e3Bvc3R9IGtleT17an0gLz47XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgc3R5bGU9e3sgLi4uc2VjdGlvblN0eWxlIH19PlxuICAgICAgICA8aDJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMzRwdCcsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIGFib3V0IHRoaXMgYmxvZ1xuICAgICAgICA8L2gyPlxuICAgICAgICA8cFxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgbWF4V2lkdGg6ICc5NjBweCcsXG4gICAgICAgICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDEuNyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgZGV2Lmx3bHgueHl6IGlzIGEgYmxvZyBmb2N1c2VkIG9uIEN5YmVyc2VjdXJpdHkgYW5kIHRoZSBvY2Nhc2lvbmFsIGNvZGUgcHJvamVjdC57JyAnfVxuXG4gICAgICAgICAgRmluZCBtZSBvbiBHaXRodWIgaGVyZTogJm5ic3A7XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9MYXdsZXovXCI+XG4gICAgICAgICAgICBodHRwczovL2dpdGh1Yi5jb20vTGF3bGV6L1xuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG5cblxuICAgICAgPGRpdiBzdHlsZT17c2VjdGlvblN0eWxlfT5cbiAgICAgICAgPGgyXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIG1hcmdpbjogJzRweCAwcHgnLFxuICAgICAgICAgICAgZm9udFNpemU6ICcyMnB0JyxcbiAgICAgICAgICAgIHBhZGRpbmdCb3R0b206ICczMHB4JyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgV29yayAgaW4gIFByb2dyZXNzIC4gLiAuXG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vTGF3bGV6L2Rldi5sd2x4Lnh5elwiIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBhZGRpbmc6ICcxMHB4IDMwcHgnLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGdsb2JhbHMucHJpbWFyeUNvbG9yLFxuICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgICAgZm9udFNpemU6ICcxNHB0JyxcbiAgICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzhweCcsXG4gICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBjaGVjayBkZXYubHdseC54eXogb24gR2l0SHViXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBpbnRyb2R1Y3Rpb24gPSBhd2FpdCBsb2FkTWFya2Rvd25GaWxlKCdpbnRyb2R1Y3Rpb24ubWQnKTtcbiAgY29uc3QgZmVhdHVyZXMgPSBhd2FpdCBsb2FkTWFya2Rvd25GaWxlKCdmZWF0dXJlcy5tZCcpO1xuICBjb25zdCByZWFkbWVGaWxlID0gYXdhaXQgaW1wb3J0KGAuLi8keydSRUFETUUubWQnfWApO1xuICBjb25zdCByZWFkbWUgPSByZWFkbWVGaWxlLmRlZmF1bHQ7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgbG9hZEJsb2dQb3N0cygpO1xuXG4gIC8vIGNvbW1lbnQgb3V0IHRvIHR1cm4gb2ZmIFJTUyBnZW5lcmF0aW9uIGR1cmluZyBidWlsZCBzdGVwLlxuICBhd2FpdCBnZW5lcmF0ZVJTUyhwb3N0cyk7XG5cbiAgY29uc3QgcHJvcHMgPSB7XG4gICAgaW50cm9kdWN0aW9uOiBpbnRyb2R1Y3Rpb24uY29udGVudHMsXG4gICAgZmVhdHVyZXM6IGZlYXR1cmVzLmNvbnRlbnRzLFxuICAgIHJlYWRtZTogcmVhZG1lLFxuICAgIHBvc3RzLFxuICB9O1xuXG4gIHJldHVybiB7IHByb3BzIH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})