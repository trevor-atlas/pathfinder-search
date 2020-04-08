webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/VirtualizedList.tsx":
/*!****************************************!*\
  !*** ./components/VirtualizedList.tsx ***!
  \****************************************/
/*! exports provided: VirtualizedList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualizedList", function() { return VirtualizedList; });
/* harmony import */ var _components_ResultRenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/ResultRenderer */ "./components/ResultRenderer.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-window */ "./node_modules/react-window/dist/index.esm.js");
/* harmony import */ var react_browser_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-browser-hooks */ "./node_modules/react-browser-hooks/es/index.js");
var _jsxFileName = "/Users/trevoratlas/projects/pathfinder-search/frontend/components/VirtualizedList.tsx",
    _this = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
    root: {
      width: '100%',
      height: '100%'
    }
  });
});

function renderRow(props) {
  var index = props.index,
      style = props.style;
  var item = props.data.results[props.index];
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
    style: style,
    key: index,
    onClick: function onClick() {
      return props.data.setSelected(item);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx(_components_ResultRenderer__WEBPACK_IMPORTED_MODULE_0__["ResultRenderer"], {
    type: props.data.type,
    data: item,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }));
}

var VirtualizedList = function VirtualizedList(props) {
  var classes = useStyles();

  var _useResize = Object(react_browser_hooks__WEBPACK_IMPORTED_MODULE_5__["useResize"])(),
      width = _useResize.width,
      height = _useResize.height;

  var itemData = props.itemData;
  return __jsx("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx(react_window__WEBPACK_IMPORTED_MODULE_4__["FixedSizeList"], {
    height: height - 50,
    width: "100%",
    itemSize: 150,
    itemData: itemData,
    itemCount: itemData.results.length,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, renderRow));
};

/***/ })

})
//# sourceMappingURL=index.js.ef50c54a20f98e0385b5.hot-update.js.map