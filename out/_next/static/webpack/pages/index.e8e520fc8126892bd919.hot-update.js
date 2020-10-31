webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PostCard */ \"./components/PostCard.tsx\");\n/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../globals */ \"./globals.ts\");\n\n\n\nvar _jsxFileName = \"/Users/entw/projects/dev.lwlx.xyz/pages/index.tsx\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar sectionStyle = {\n  width: '100%',\n  padding: '100px 3vw',\n  display: 'flex',\n  flexDirection: 'column',\n  alignItems: 'center'\n};\n\nvar Home = function Home(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    style: {\n      width: '100%'\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"title\", {\n        children: \"Introducing dev.lwlx.xyz\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      style: sectionStyle,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h2\", {\n        style: {\n          margin: '4px 0px',\n          fontSize: '34pt'\n        },\n        children: \"recent posts\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        style: {\n          display: 'grid',\n          gridTemplateColumns: \"repeat(auto-fit, minmax(300px, 1fr))\",\n          gridRowGap: '8px',\n          gridColumnGap: '8px',\n          width: '100%',\n          padding: '0px 7vw'\n        },\n        children: props.posts.map(function (post, j) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_PostCard__WEBPACK_IMPORTED_MODULE_3__[\"PostCard\"], {\n            post: post\n          }, j, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 20\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      style: _objectSpread({}, sectionStyle),\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h2\", {\n        style: {\n          textAlign: 'center',\n          fontSize: '34pt'\n        },\n        children: \"Open Source Security & Dev Blog\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n        style: {\n          textAlign: 'center',\n          maxWidth: '960px',\n          margin: 'auto',\n          lineHeight: 1.7\n        },\n        children: \"dev.lwlx.xyz is a blog focused on Cybersecurity and the occasional code project.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n        href: \"https://github.com/Lawlez/\",\n        style: {\n          cursor: 'pointer'\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n          style: {\n            padding: '10px 30px',\n            backgroundColor: _globals__WEBPACK_IMPORTED_MODULE_4__[\"globals\"].primaryColor,\n            color: 'white',\n            fontSize: '14pt',\n            border: 'none',\n            borderRadius: '8px',\n            cursor: 'pointer'\n          },\n          children: \"@Lawlez on GitHub\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 1\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n        href: \"https://twitter.com/0x0000005\",\n        style: {\n          cursor: 'pointer'\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n          style: {\n            padding: '10px 30px',\n            backgroundColor: _globals__WEBPACK_IMPORTED_MODULE_4__[\"globals\"].secondaryColor,\n            color: 'white',\n            fontSize: '14pt',\n            border: 'none',\n            borderRadius: '8px',\n            cursor: 'pointer'\n          },\n          children: \"@0x0000005 on twitter\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      style: sectionStyle,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h2\", {\n        style: {\n          margin: '4px 0px',\n          fontSize: '22pt',\n          paddingBottom: '30px'\n        },\n        children: \"this is still a work  in  progress . . .\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 111,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n        href: \"https://github.com/Lawlez/dev.lwlx.xyz\",\n        style: {\n          cursor: 'pointer'\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n          style: {\n            padding: '10px 30px',\n            backgroundColor: _globals__WEBPACK_IMPORTED_MODULE_4__[\"globals\"].primaryColor,\n            color: 'white',\n            fontSize: '14pt',\n            border: 'none',\n            borderRadius: '8px',\n            cursor: 'pointer'\n          },\n          children: \"check dev.lwlx.xyz on GitHub\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 121,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 120,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Home;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsic2VjdGlvblN0eWxlIiwid2lkdGgiLCJwYWRkaW5nIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwiSG9tZSIsInByb3BzIiwibWFyZ2luIiwiZm9udFNpemUiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiZ3JpZFJvd0dhcCIsImdyaWRDb2x1bW5HYXAiLCJwb3N0cyIsIm1hcCIsInBvc3QiLCJqIiwidGV4dEFsaWduIiwibWF4V2lkdGgiLCJsaW5lSGVpZ2h0IiwiY3Vyc29yIiwiYmFja2dyb3VuZENvbG9yIiwiZ2xvYmFscyIsInByaW1hcnlDb2xvciIsImNvbG9yIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwic2Vjb25kYXJ5Q29sb3IiLCJwYWRkaW5nQm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBRUEsSUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxPQUFLLEVBQUUsTUFEWTtBQUVuQkMsU0FBTyxFQUFFLFdBRlU7QUFHbkJDLFNBQU8sRUFBRSxNQUhVO0FBSW5CQyxlQUFhLEVBQUUsUUFKSTtBQUtuQkMsWUFBVSxFQUFFO0FBTE8sQ0FBckI7O0FBUUEsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUtQO0FBQ0osc0JBQ0U7QUFDRSxTQUFLLEVBQUU7QUFDTE4sV0FBSyxFQUFFO0FBREYsS0FEVDtBQUFBLDRCQUtFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRixlQVVFO0FBQUssV0FBSyxFQUFFRCxZQUFaO0FBQUEsOEJB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bEIsbUJBQU8sRUFBRSxXQURKO0FBRUxtQiwyQkFBZSxFQUFFQyxnREFBTyxDQUFDQyxZQUZwQjtBQUdMQyxpQkFBSyxFQUFFLE9BSEY7QUFJTGYsb0JBQVEsRUFBRSxNQUpMO0FBS0xnQixrQkFBTSxFQUFFLE1BTEg7QUFNTEMsd0JBQVksRUFBRSxLQU5UO0FBT0xOLGtCQUFNLEVBQUU7QUFQSCxXQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXhGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXFIRCxDQTNIRDs7S0FBTWQsSTs7QUE2SFNBLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IFBvc3REYXRhLCBsb2FkQmxvZ1Bvc3RzLCBsb2FkTWFya2Rvd25GaWxlIH0gZnJvbSAnLi4vbG9hZGVyJztcbmltcG9ydCB7IFBvc3RDYXJkIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Qb3N0Q2FyZCc7XG5pbXBvcnQgeyBnZW5lcmF0ZVJTUyB9IGZyb20gJy4uL3Jzc1V0aWwnO1xuaW1wb3J0IHsgZ2xvYmFscyB9IGZyb20gJy4uL2dsb2JhbHMnO1xuXG5jb25zdCBzZWN0aW9uU3R5bGUgPSB7XG4gIHdpZHRoOiAnMTAwJScsXG4gIHBhZGRpbmc6ICcxMDBweCAzdncnLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbn0gYXMgY29uc3Q7XG5cbmNvbnN0IEhvbWUgPSAocHJvcHM6IHtcbiAgaW50cm9kdWN0aW9uOiBzdHJpbmc7XG4gIGZlYXR1cmVzOiBzdHJpbmc7XG4gIHJlYWRtZTogc3RyaW5nO1xuICBwb3N0czogUG9zdERhdGFbXTtcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkludHJvZHVjaW5nIGRldi5sd2x4Lnh5ejwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdiBzdHlsZT17c2VjdGlvblN0eWxlfT5cbiAgICAgICAgPGgyXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIG1hcmdpbjogJzRweCAwcHgnLFxuICAgICAgICAgICAgZm9udFNpemU6ICczNHB0JyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgcmVjZW50IHBvc3RzXG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogJ2dyaWQnLFxuICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogYHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKWAsXG4gICAgICAgICAgICBncmlkUm93R2FwOiAnOHB4JyxcbiAgICAgICAgICAgIGdyaWRDb2x1bW5HYXA6ICc4cHgnLFxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIHBhZGRpbmc6ICcwcHggN3Z3JyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge3Byb3BzLnBvc3RzLm1hcCgocG9zdCwgaikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxQb3N0Q2FyZCBwb3N0PXtwb3N0fSBrZXk9e2p9IC8+O1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IHN0eWxlPXt7IC4uLnNlY3Rpb25TdHlsZSB9fT5cbiAgICAgICAgPGgyXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICBmb250U2l6ZTogJzM0cHQnLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBPcGVuIFNvdXJjZSBTZWN1cml0eSAmIERldiBCbG9nXG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxwXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICBtYXhXaWR0aDogJzk2MHB4JyxcbiAgICAgICAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgICAgICAgbGluZUhlaWdodDogMS43LFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBkZXYubHdseC54eXogaXMgYSBibG9nIGZvY3VzZWQgb24gQ3liZXJzZWN1cml0eSBhbmQgdGhlIG9jY2FzaW9uYWwgY29kZSBwcm9qZWN0LlxuICAgICAgICA8L3A+XG4gICAgICAgIDxici8+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vTGF3bGV6L1wiIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBhZGRpbmc6ICcxMHB4IDMwcHgnLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGdsb2JhbHMucHJpbWFyeUNvbG9yLFxuICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgICAgZm9udFNpemU6ICcxNHB0JyxcbiAgICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzhweCcsXG4gICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBATGF3bGV6IG9uIEdpdEh1YlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2E+XG48YnIgLz5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vMHgwMDAwMDA1XCIgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcGFkZGluZzogJzEwcHggMzBweCcsXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogZ2xvYmFscy5zZWNvbmRhcnlDb2xvcixcbiAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAnMTRwdCcsXG4gICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc4cHgnLFxuICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQDB4MDAwMDAwNSBvbiB0d2l0dGVyXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IHN0eWxlPXtzZWN0aW9uU3R5bGV9PlxuICAgICAgICA8aDJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgbWFyZ2luOiAnNHB4IDBweCcsXG4gICAgICAgICAgICBmb250U2l6ZTogJzIycHQnLFxuICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogJzMwcHgnLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB0aGlzIGlzIHN0aWxsIGEgd29yayAgaW4gIHByb2dyZXNzIC4gLiAuXG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vTGF3bGV6L2Rldi5sd2x4Lnh5elwiIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBhZGRpbmc6ICcxMHB4IDMwcHgnLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGdsb2JhbHMucHJpbWFyeUNvbG9yLFxuICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgICAgZm9udFNpemU6ICcxNHB0JyxcbiAgICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzhweCcsXG4gICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBjaGVjayBkZXYubHdseC54eXogb24gR2l0SHViXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBpbnRyb2R1Y3Rpb24gPSBhd2FpdCBsb2FkTWFya2Rvd25GaWxlKCdpbnRyb2R1Y3Rpb24ubWQnKTtcbiAgY29uc3QgZmVhdHVyZXMgPSBhd2FpdCBsb2FkTWFya2Rvd25GaWxlKCdmZWF0dXJlcy5tZCcpO1xuICBjb25zdCByZWFkbWVGaWxlID0gYXdhaXQgaW1wb3J0KGAuLi8keydSRUFETUUubWQnfWApO1xuICBjb25zdCByZWFkbWUgPSByZWFkbWVGaWxlLmRlZmF1bHQ7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgbG9hZEJsb2dQb3N0cygpO1xuXG4gIC8vIGNvbW1lbnQgb3V0IHRvIHR1cm4gb2ZmIFJTUyBnZW5lcmF0aW9uIGR1cmluZyBidWlsZCBzdGVwLlxuICBhd2FpdCBnZW5lcmF0ZVJTUyhwb3N0cyk7XG5cbiAgY29uc3QgcHJvcHMgPSB7XG4gICAgaW50cm9kdWN0aW9uOiBpbnRyb2R1Y3Rpb24uY29udGVudHMsXG4gICAgZmVhdHVyZXM6IGZlYXR1cmVzLmNvbnRlbnRzLFxuICAgIHJlYWRtZTogcmVhZG1lLFxuICAgIHBvc3RzLFxuICB9O1xuXG4gIHJldHVybiB7IHByb3BzIH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})