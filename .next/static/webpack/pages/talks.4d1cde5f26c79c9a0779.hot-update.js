webpackHotUpdate_N_E("pages/talks",{

/***/ "./components/SideMenu/index.js":
/*!**************************************!*\
  !*** ./components/SideMenu/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_vilvaathiban_Desktop_desktop_projects_vilvaathiban_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar _jsxFileName = \"/Users/vilvaathiban/Desktop/desktop/projects/vilvaathiban/components/SideMenu/index.js\",\n    _this = undefined;\n\nfunction _templateObject3() {\n  var data = Object(_Users_vilvaathiban_Desktop_desktop_projects_vilvaathiban_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"color: #2b7a78; \\nborder-radius: 10px; \\npadding: 1rem; \\n;\", \"\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_Users_vilvaathiban_Desktop_desktop_projects_vilvaathiban_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"@media (min-width: 768px) {\\n        display: none;\\n        } \\nposition: absolute; \\ntop: 0; \\nright: 0; \\npadding-left: 2rem;\\n                \\n                padding-right: 2rem; \\npadding-top: 1rem;\\n                \\n                padding-bottom: 1rem; \\n;\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_Users_vilvaathiban_Desktop_desktop_projects_vilvaathiban_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"background: #feffff; \\nwidth: 100vw; \\nheight: 100vh; \\noverflow-y: scroll; \\nposition: fixed; \\ntop: 0; \\nleft: 0; \\ncolor: #17252A; \\ndisplay: flex; \\nflex-direction: column; \\njustify-content: space-around; \\nalign-items: center; \\nfont-size: 18px; \\nfont-weight: 700; \\nanimation: show-menu 0.25s; \\n@keyframes show-menu {\\n    0% {\\n      left: 100%; \\n}\\n    100% {\\n      left: 0; \\n}\\n  };\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nvar MenuItems = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject());\n_c = MenuItems;\nvar Close = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject2());\n_c2 = Close;\nvar Menu = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject3(), function (props) {\n  return props.active && \"color: #feffff; \\nbackground: #2b7a78; \\n;\";\n});\n_c3 = Menu;\n\nvar SideMenu = function SideMenu(_ref) {\n  var showMenu = _ref.showMenu,\n      closeMenu = _ref.closeMenu,\n      path = _ref.path;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: showMenu && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(MenuItems, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Close, {\n        onClick: function onClick() {\n          return closeMenu(false);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        href: \"/about\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Menu, {\n          active: path === '/about',\n          children: \"About\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        href: \"/talks\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Menu, {\n          active: path === '/talks',\n          children: \"Talks\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        href: \"/blogs\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Menu, {\n          active: path === '/blogs',\n          children: \"Blogs\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        href: \"/videos\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Menu, {\n          active: path === '/videos',\n          children: \"Videos\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        href: \"/projects\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Menu, {\n          active: path === '/projects',\n          children: \"Projects\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false);\n};\n\n_c4 = SideMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SideMenu);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"MenuItems\");\n$RefreshReg$(_c2, \"Close\");\n$RefreshReg$(_c3, \"Menu\");\n$RefreshReg$(_c4, \"SideMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlTWVudS9pbmRleC5qcz9iZDJlIl0sIm5hbWVzIjpbIk1lbnVJdGVtcyIsInN0eWxlZCIsImRpdiIsIkNsb3NlIiwiTWVudSIsInByb3BzIiwiYWN0aXZlIiwiU2lkZU1lbnUiLCJzaG93TWVudSIsImNsb3NlTWVudSIsInBhdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixtQkFBZjtLQUFNRixTO0FBMkJOLElBQU1HLEtBQUssR0FBR0YseURBQU0sQ0FBQ0MsR0FBVixvQkFBWDtNQUFNQyxLO0FBU04sSUFBTUMsSUFBSSxHQUFHSCx5REFBTSxDQUFDQyxHQUFWLHFCQUlOLFVBQUFHLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLE1BQU4sZ0RBQUo7QUFBQSxDQUpDLENBQVY7TUFBTUYsSTs7QUFPTixJQUFNRyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFtQztBQUFBLE1BQWhDQyxRQUFnQyxRQUFoQ0EsUUFBZ0M7QUFBQSxNQUF0QkMsU0FBc0IsUUFBdEJBLFNBQXNCO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ2xELHNCQUNFO0FBQUEsY0FDR0YsUUFBUSxpQkFDUCxxRUFBQyxTQUFEO0FBQUEsOEJBQ0UscUVBQUMsS0FBRDtBQUFPLGVBQU8sRUFBRTtBQUFBLGlCQUFNQyxTQUFTLENBQUMsS0FBRCxDQUFmO0FBQUE7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsUUFBWDtBQUFBLCtCQUNFLHFFQUFDLElBQUQ7QUFBTSxnQkFBTSxFQUFFQyxJQUFJLEtBQUksUUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFLRSxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxRQUFYO0FBQUEsK0JBQ0UscUVBQUMsSUFBRDtBQUFNLGdCQUFNLEVBQUVBLElBQUksS0FBSSxRQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRixlQVFFLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLFFBQVg7QUFBQSwrQkFDRSxxRUFBQyxJQUFEO0FBQU0sZ0JBQU0sRUFBRUEsSUFBSSxLQUFJLFFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJGLGVBV0UscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsU0FBWDtBQUFBLCtCQUNFLHFFQUFDLElBQUQ7QUFBTSxnQkFBTSxFQUFFQSxJQUFJLEtBQUksU0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEYsZUFjRSxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxXQUFYO0FBQUEsK0JBQ0UscUVBQUMsSUFBRDtBQUFNLGdCQUFNLEVBQUVBLElBQUksS0FBSSxXQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSixtQkFERjtBQXdCRCxDQXpCRDs7TUFBTUgsUTtBQTJCU0EsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZGVNZW51L2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgTWVudUl0ZW1zID0gc3R5bGVkLmRpdmBcbiAgLmJnLXB3aGl0ZTtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIC5maXhlZDtcbiAgLnRvcC0wO1xuICAubGVmdC0wO1xuICAudGV4dC1wZGFyaztcbiAgLmZsZXg7XG4gIC5mbGV4LWNvbDtcbiAgLmp1c3RpZnktYXJvdW5kO1xuICAuaXRlbXMtY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGFuaW1hdGlvbjogc2hvdy1tZW51IDAuMjVzO1xuXG4gIEBrZXlmcmFtZXMgc2hvdy1tZW51IHtcbiAgICAwJSB7XG4gICAgICBsZWZ0OiAxMDAlO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIGxlZnQ6IDA7XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBDbG9zZSA9IHN0eWxlZC5kaXZgXG4gIC5sZzogaGlkZGVuO1xuICAuYWJzb2x1dGU7XG4gIC50b3AtMDtcbiAgLnJpZ2h0LTA7XG4gIC5weC04O1xuICAucHktNDtcbmA7XG5cbmNvbnN0IE1lbnUgPSBzdHlsZWQuZGl2YFxuICAudGV4dC1zZGFyaztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLnAtNDtcbiAgJHtwcm9wcyA9PiBwcm9wcy5hY3RpdmUgJiYgYC50ZXh0LXB3aGl0ZTsgLmJnLXNkYXJrO2B9XG5gO1xuXG5jb25zdCBTaWRlTWVudSA9ICh7IHNob3dNZW51LCBjbG9zZU1lbnUsIHBhdGggfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7c2hvd01lbnUgJiYgKFxuICAgICAgICA8TWVudUl0ZW1zPlxuICAgICAgICAgIDxDbG9zZSBvbkNsaWNrPXsoKSA9PiBjbG9zZU1lbnUoZmFsc2UpfT48L0Nsb3NlPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cbiAgICAgICAgICAgIDxNZW51IGFjdGl2ZT17cGF0aD09PSAnL2Fib3V0J30+QWJvdXQ8L01lbnU+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdGFsa3NcIj5cbiAgICAgICAgICAgIDxNZW51IGFjdGl2ZT17cGF0aD09PSAnL3RhbGtzJ30+VGFsa3M8L01lbnU+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYmxvZ3NcIj5cbiAgICAgICAgICAgIDxNZW51IGFjdGl2ZT17cGF0aD09PSAnL2Jsb2dzJ30+QmxvZ3M8L01lbnU+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdmlkZW9zXCI+XG4gICAgICAgICAgICA8TWVudSBhY3RpdmU9e3BhdGg9PT0gJy92aWRlb3MnfT5WaWRlb3M8L01lbnU+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHNcIj5cbiAgICAgICAgICAgIDxNZW51IGFjdGl2ZT17cGF0aD09PSAnL3Byb2plY3RzJ30+UHJvamVjdHM8L01lbnU+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L01lbnVJdGVtcz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlTWVudTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SideMenu/index.js\n");

/***/ })

})