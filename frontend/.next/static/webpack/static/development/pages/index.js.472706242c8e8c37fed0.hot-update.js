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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/Users/trevoratlas/projects/pathfinder-search/frontend/components/ResultRenderer.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var ResultRenderer = function ResultRenderer(props) {
  var data = props.data;

  switch (props.type) {
    case 'spells':
      var spell = data;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h3", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 21
        }
      }, spell.name), __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 21
        }
      }, __jsx("strong", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 24
        }
      }, "school:"), " ", spell.school, spell.subschool ? ':' + spell.subschool : ''), __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 21
        }
      }, __jsx("strong", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 24
        }
      }, "description:"), " ", spell.short_description), __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 21
        }
      }, __jsx("strong", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 24
        }
      }, "level:"), " ", spell.spellLevel));

    case 'feats':
      return __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 20
        }
      }, "feat: ", data.name);

    case 'monsters':
      return __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 20
        }
      }, "monster: ", data.name);

    case 'items':
      return __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 20
        }
      }, "item: ", data.name);

    default:
      return null;
  }
};

/***/ })

})
//# sourceMappingURL=index.js.472706242c8e8c37fed0.hot-update.js.map