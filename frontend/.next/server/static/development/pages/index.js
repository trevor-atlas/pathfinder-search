module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ResultRenderer.tsx":
/*!***************************************!*\
  !*** ./components/ResultRenderer.tsx ***!
  \***************************************/
/*! exports provided: ResultRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultRenderer", function() { return ResultRenderer; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/trevoratlas/projects/pathfinder-search/frontend/components/ResultRenderer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const ResultRenderer = props => {
  const {
    data
  } = props;

  switch (props.type) {
    case 'spells':
      const spell = data;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["ListItemText"], {
        primary: spell.name,
        secondary: __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 29
          }
        }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
          component: "span",
          variant: "body2",
          color: "textPrimary",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 33
          }
        }, spell.short_description), __jsx("p", {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 33
          }
        }, __jsx("strong", {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 36
          }
        }, "school:"), " ", spell.school, spell.subschool ? ':' + spell.subschool : '', __jsx("br", {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 119
          }
        }), __jsx("strong", {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 33
          }
        }, "level:"), " ", spell.spell_level)),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 21
        }
      }));

    case 'feats':
      return __jsx("p", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 20
        }
      }, "feat: ", data.name);

    case 'monsters':
      return __jsx("p", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 20
        }
      }, "monster: ", data.name);

    case 'items':
      return __jsx("p", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 20
        }
      }, "item: ", data.name);

    default:
      return null;
  }
};

/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-window */ "react-window");
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_window__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_browser_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-browser-hooks */ "react-browser-hooks");
/* harmony import */ var react_browser_hooks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_browser_hooks__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/trevoratlas/projects/pathfinder-search/frontend/components/VirtualizedList.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
  root: {
    width: '100%',
    height: '100%'
  }
}));

function renderRow(props) {
  const {
    index,
    style
  } = props;
  const item = props.data.results[props.index];
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
    button: true,
    style: style,
    key: index,
    onClick: () => props.data.setSelected(item),
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
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }));
}

const VirtualizedList = props => {
  const classes = useStyles();
  const {
    width,
    height
  } = Object(react_browser_hooks__WEBPACK_IMPORTED_MODULE_5__["useResize"])();
  const {
    itemData
  } = props;
  return __jsx("div", {
    className: classes.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx(react_window__WEBPACK_IMPORTED_MODULE_4__["FixedSizeList"], {
    height: height - 50,
    width: "100%",
    itemSize: 150,
    itemData: itemData,
    itemCount: itemData.results.length,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, renderRow));
};

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/Search */ "@material-ui/icons/Search");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_VirtualizedList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/VirtualizedList */ "./components/VirtualizedList.tsx");
/* harmony import */ var _utils_debounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/debounce */ "./utils/debounce.ts");
var _jsxFileName = "/Users/trevoratlas/projects/pathfinder-search/frontend/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;






const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
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
    paddingLeft: `calc(1em + 25px)`,
    width: '100%'
  }
}));

const Index = () => {
  const classes = useStyles();
  const {
    0: type,
    1: setType
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('spells');
  const {
    0: query,
    1: setQuery
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('');
  const {
    0: selected,
    1: setSelected
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null);
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    setSelected,
    results: [],
    type
  });
  const debouncedSearchTerm = Object(_utils_debounce__WEBPACK_IMPORTED_MODULE_5__["useDebounce"])(query, 500);

  const handleTypeChange = event => {
    setType(event.target.value);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    (async () => {
      if (debouncedSearchTerm) {
        setIsLoading(true);

        try {
          const result = await fetch(`http://localhost:8080?query=${query}&type=${type}`);
          const data = await result.json();
          setData({
            setSelected,
            results: data,
            type
          });
        } catch (err) {
          setData({
            setSelected,
            results: [],
            type
          });
        }

        setIsLoading(false);
      } else {}
    })();
  }, [debouncedSearchTerm, type]);
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Container"], {
    maxWidth: "xl",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
    container: true,
    spacing: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
    item: true,
    xs: 12,
    md: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    m: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: classes.search,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: classes.searchIcon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 33
    }
  }, __jsx(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 37
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["InputBase"], {
    placeholder: "Search\u2026",
    onChange: e => setQuery(e.target.value),
    classes: {
      root: classes.inputRoot,
      input: classes.inputInput
    },
    inputProps: {
      'aria-label': 'search'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 33
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["FormControl"], {
    component: "fieldset",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["FormLabel"], {
    component: "legend",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 29
    }
  }, "Query Type"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["RadioGroup"], {
    "aria-label": "Query Type",
    name: "gender1",
    value: type,
    onChange: handleTypeChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["FormControlLabel"], {
    color: "primary",
    value: "feats",
    control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Radio"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 90
      }
    }),
    label: "Feats",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 33
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["FormControlLabel"], {
    color: "primary",
    value: "monsters",
    control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Radio"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 93
      }
    }),
    label: "Monsters",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 33
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["FormControlLabel"], {
    color: "primary",
    value: "spells",
    control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Radio"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 91
      }
    }),
    label: "Spells",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 33
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["FormControlLabel"], {
    color: "primary",
    value: "items",
    control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Radio"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 90
      }
    }),
    label: "Items",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 33
    }
  })))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
    item: true,
    xs: 12,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 17
    }
  }, isLoading ? __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 25
    }
  }, "Loading ...") : data.results && data.results.length && __jsx(_components_VirtualizedList__WEBPACK_IMPORTED_MODULE_4__["VirtualizedList"], {
    itemData: data,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 28
    }
  }) || __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 27
    }
  }, "No Results")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
    item: true,
    xs: 12,
    md: 7,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 17
    }
  }, selected && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Paper"], {
    className: classes.paper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 34
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 25
    }
  }, selected.name), Object.entries(selected).filter(([key, value]) => value && key && value != 'NULL' && key != 'full_text' && key != 'description_formatted' && key != 'name' && key != 'fulltext').map(([key, value], i) => {
    return __jsx("p", {
      key: key + i,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 33
      }
    }, __jsx("strong", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 50
      }
    }, humanize(key), ":"), " ", __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 84
      }
    }, humanize(value)));
  })))));
};

const humanize = str => {
  if (!str) return str;
  if (typeof str !== 'string') return str;
  return str.trim().replace('_', ' ');
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./utils/debounce.ts":
/*!***************************!*\
  !*** ./utils/debounce.ts ***!
  \***************************/
/*! exports provided: useDebounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDebounce", function() { return useDebounce; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // Our hook

function useDebounce(value, delay) {
  // State and setters for debounced value
  const {
    0: debouncedValue,
    1: setDebouncedValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(value);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // Set debouncedValue to value (passed in) after the specified delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay); // Return a cleanup function that will be called every time ...
    // ... useEffect is re-called. useEffect will only be re-called ...
    // ... if value changes (see the inputs array below).
    // This is how we prevent debouncedValue from changing if value is ...
    // ... changed within the delay period. Timeout gets cleared and restarted.
    // To put it in context, if the user is typing within our app's ...
    // ... search box, we don't want the debouncedValue to update until ...
    // ... they've stopped typing for more than 500ms.

    return () => {
      clearTimeout(handler);
    };
  }, // Only re-call effect if value changes
  // You could also add the "delay" var to inputs array if you ...
  // ... need to be able to change that dynamically.
  [value]);
  return debouncedValue;
}

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/trevoratlas/projects/pathfinder-search/frontend/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/icons/Search":
/*!********************************************!*\
  !*** external "@material-ui/icons/Search" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Search");

/***/ }),

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/styles");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-browser-hooks":
/*!**************************************!*\
  !*** external "react-browser-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-browser-hooks");

/***/ }),

/***/ "react-window":
/*!*******************************!*\
  !*** external "react-window" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-window");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map