webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_VirtualizedList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/VirtualizedList */ "./components/VirtualizedList.tsx");
/* harmony import */ var _utils_debounce__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/debounce */ "./utils/debounce.ts");



var _this = undefined,
    _jsxFileName = "/Users/trevoratlas/projects/pathfinder-search/frontend/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;






var useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return {
    root: {
      flexGrow: 1,
      '& > *': {
        // @ts-ignore
        width: '25ch'
      }
    },
    menuButton: {
      marginRight: '1em'
    },
    title: {
      flexGrow: 1,
      display: 'none'
    },
    paper: {
      padding: '1em',
      color: '#333'
    },
    search: {
      position: 'relative',
      borderRadius: 20,
      backgroundColor: '#eee',
      '&:hover': {
        backgroundColor: '#ddd'
      },
      marginLeft: 0,
      width: '100%'
    },
    searchIcon: {
      padding: '0 1em',
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#234599'
    },
    inputRoot: {},
    inputInput: {
      padding: '1em 1em 1em 0',
      // vertical padding + font size from searchIcon
      paddingLeft: "calc(1em + 25px)",
      width: '100%'
    }
  };
});

var Index = function Index() {
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])('spells'),
      type = _useState[0],
      setType = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      query = _useState2[0],
      setQuery = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({}),
      selected = _useState3[0],
      setSelected = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      isLoading = _useState4[0],
      setIsLoading = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    setSelected: setSelected,
    results: [],
    type: type
  }),
      data = _useState5[0],
      setData = _useState5[1];

  var debouncedSearchTerm = Object(_utils_debounce__WEBPACK_IMPORTED_MODULE_7__["useDebounce"])(query, 500);

  var handleTypeChange = function handleTypeChange(event) {
    setType(event.target.value);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    (function _callee() {
      var result, _data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!debouncedSearchTerm) {
                _context.next = 18;
                break;
              }

              setIsLoading(true);
              _context.prev = 2;
              _context.next = 5;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(fetch("http://localhost:8080?query=".concat(query, "&type=").concat(type)));

            case 5:
              result = _context.sent;
              _context.next = 8;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(result.json());

            case 8:
              _data = _context.sent;
              setData({
                setSelected: setSelected,
                results: _data,
                type: type
              });
              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](2);
              setData({
                setSelected: setSelected,
                results: [],
                type: type
              });

            case 15:
              setIsLoading(false);
              _context.next = 18;
              break;

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[2, 12]], Promise);
    })();
  }, [debouncedSearchTerm, type]);
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    maxWidth: "xl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    spacing: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    md: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    m: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: classes.search,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: classes.searchIcon,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 33
    }
  }, __jsx(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 37
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["InputBase"], {
    placeholder: "Search\u2026",
    onChange: function onChange(e) {
      return setQuery(e.target.value);
    },
    classes: {
      root: classes.inputRoot,
      input: classes.inputInput
    },
    inputProps: {
      'aria-label': 'search'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 33
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["FormControl"], {
    component: "fieldset",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
    component: "legend",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 29
    }
  }, "Query Type"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["RadioGroup"], {
    "aria-label": "Query Type",
    name: "gender1",
    value: type,
    onChange: handleTypeChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["FormControlLabel"], {
    value: "feats",
    control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Radio"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 74
      }
    }),
    label: "Feats",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 33
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["FormControlLabel"], {
    value: "monsters",
    control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Radio"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 77
      }
    }),
    label: "Monsters",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 33
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["FormControlLabel"], {
    value: "spells",
    control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Radio"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 75
      }
    }),
    label: "Spells",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 33
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["FormControlLabel"], {
    value: "items",
    control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Radio"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 74
      }
    }),
    label: "Items",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 33
    }
  })))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    md: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 17
    }
  }, isLoading ? __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 25
    }
  }, "Loading ...") : data.results && data.results.length && __jsx(_components_VirtualizedList__WEBPACK_IMPORTED_MODULE_6__["VirtualizedList"], {
    itemData: data,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 28
    }
  }) || __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 27
    }
  }, "No Results")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    md: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
    className: classes.paper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 21
    }
  }, selected && Object.entries(selected).filter(function (_ref) {
    var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    return value && key && value != 'NULL' && key != 'full_text' && key != 'description_formatted';
  }).map(function (_ref3, i) {
    var _ref4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, 2),
        key = _ref4[0],
        value = _ref4[1];

    return __jsx("p", {
      key: key + i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 33
      }
    }, __jsx("strong", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 50
      }
    }, humanize(key), ":"), " ", __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 84
      }
    }, humanize(value)));
  })))));
};

var humanize = function humanize(str) {
  if (!str) return str;
  if (typeof str !== 'string') return str;
  return str.trim().replace('_', ' ');
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.23b951555456660bf244.hot-update.js.map