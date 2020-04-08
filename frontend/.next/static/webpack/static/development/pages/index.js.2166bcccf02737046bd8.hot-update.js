webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ResultRenderer.tsx":
/*!***************************************!*\
  !*** ./components/ResultRenderer.tsx ***!
  \***************************************/
/*! exports provided: ResultRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultRenderer", function() { return ResultRenderer; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "/Users/trevoratlas/projects/pathfinder-search/frontend/components/ResultRenderer.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var ResultRenderer = function ResultRenderer(props) {
  var data = props.data;

  switch (props.type) {
    case 'spells':
      var spell = data;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["ListItemText"], {
        primary: "Brunch this weekend?",
        secondary: __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 29
          }
        }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
          component: "span",
          variant: "body2",
          color: "textPrimary",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 33
          }
        }, spell.name), __jsx("p", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 33
          }
        }, __jsx("strong", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 36
          }
        }, "school:"), " ", spell.school, spell.subschool ? ':' + spell.subschool : ''), __jsx("p", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 33
          }
        }, __jsx("strong", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 36
          }
        }, "description:"), " ", spell.short_description), __jsx("p", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 33
          }
        }, __jsx("strong", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 36
          }
        }, "level:"), " ", spell.spell_level)),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 21
        }
      }));

    case 'feats':
      return __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 20
        }
      }, "feat: ", data.name);

    case 'monsters':
      return __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 20
        }
      }, "monster: ", data.name);

    case 'items':
      return __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 20
        }
      }, "item: ", data.name);

    default:
      return null;
  }
};

/***/ })

})
//# sourceMappingURL=index.js.2166bcccf02737046bd8.hot-update.js.map