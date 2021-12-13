/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/backend/gutenberg/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/backend/gutenberg/box/edit.js":
/*!*******************************************!*\
  !*** ./src/backend/gutenberg/box/edit.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./inspector */ "./src/backend/gutenberg/box/inspector.js");
/* harmony import */ var _frontend_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../frontend/index */ "./src/frontend/index.js");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */







var EditBoxComponent = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(EditBoxComponent, _Component);

  var _super = _createSuper(EditBoxComponent);

  function EditBoxComponent(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EditBoxComponent);

    _this = _super.call(this, props);
    _this.method = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["debounce"])(_this.method.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this)), 1000);
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EditBoxComponent, [{
    key: "method",
    value: function method() {
      this.initLayout();
    }
  }, {
    key: "initLayout",
    value: function initLayout() {
      var blockLoaded = false,
          blockLoadedInterval = setInterval(function () {
        if (jquery__WEBPACK_IMPORTED_MODULE_8___default()('.tiktok-feed-feed')) {
          Object(_frontend_index__WEBPACK_IMPORTED_MODULE_11__["qlttf_init"])();
          blockLoaded = true;
        }

        if (blockLoaded) {
          clearInterval(blockLoadedInterval);
        }
      }, 3000);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initLayout();
    }
  }, {
    key: "debounceOnChange",
    value: function debounceOnChange(attributes) {
      var _this2 = this;

      var debounceOnChange = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["debounce"])(function (attributes) {
        _this2.initLayout();
      }, 250);
      debounceOnChange(attributes);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.method();
    }
  }, {
    key: "render",
    value: function render() {
      var attributes = this.props.attributes;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_inspector__WEBPACK_IMPORTED_MODULE_10__["default"], this.props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "tiktok-site-render"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_9___default.a, {
        onChange: function onChange(newValue) {
          return console.log(newValue);
        },
        block: "qlttf/box",
        attributes: attributes
      }));
    }
  }]);

  return EditBoxComponent;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (EditBoxComponent);

/***/ }),

/***/ "./src/backend/gutenberg/box/index.js":
/*!********************************************!*\
  !*** ./src/backend/gutenberg/box/index.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/editor.scss */ "./src/backend/gutenberg/box/scss/editor.scss");
/* harmony import */ var _scss_editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/backend/gutenberg/box/edit.js");
/**
 * BLOCK: box
 */


var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
registerBlockType('qlttf/box', {
  title: __('WP Tiktok Feed Box', 'wp-tiktok-feed'),
  description: __('Display beautiful and responsive galleries on your website from your TikTok feed account.', 'wp-tiktok-feed'),
  icon: 'awards',
  category: 'qlttf',
  keywords: [__('qlttf', 'wp-tiktok-feed'), __('tiktok', 'wp-tiktok-feed'), __('quadlayers', 'wp-tiktok-feed')],
  attributes: qlttf_gutenberg.attributes,
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./src/backend/gutenberg/box/inspector.js":
/*!************************************************!*\
  !*** ./src/backend/gutenberg/box/inspector.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Inspector; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__);








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * WordPress dependencies
 */






/**
 * Inspector controls
 */

var Inspector = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Inspector, _Component);

  var _super = _createSuper(Inspector);

  function Inspector() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Inspector);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Inspector, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes;
      var url = qlttf_gutenberg.image_url;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_10__["InspectorControls"], {
        key: "inspector"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["PanelBody"], {
        initialOpen: true,
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('General', 'wp-tiktok-feed')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Source', 'wp-tiktok-feed'),
        value: attributes.source,
        onChange: function onChange(newValue) {
          return setAttributes({
            source: newValue
          });
        },
        options: [{
          value: 'trending',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Trending', 'wp-tiktok-feed')
        }, {
          value: 'hashtag',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Hashtag', 'wp-tiktok-feed')
        }, {
          value: 'username',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Usename', 'wp-tiktok-feed')
        }]
      }), attributes.source == 'hashtag' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["TextControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Hashtag', 'wp-tiktok-feed'),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Please enter TikTok tag', 'wp-tiktok-feed'),
        value: attributes.hashtag,
        onChange: function onChange(newValue) {
          return setAttributes({
            hashtag: newValue
          });
        }
      }), attributes.source == 'username' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["TextControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Username', 'wp-tiktok-feed'),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Please enter TikTok username', 'wp-tiktok-feed'),
        value: attributes.username,
        onChange: function onChange(newValue) {
          return setAttributes({
            username: newValue
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("ul", {
        className: "qlttf-list-videos"
      }, Object(lodash__WEBPACK_IMPORTED_MODULE_7__["map"])(['masonry', 'gallery', 'carousel', 'carousel-vertical', 'highlight', 'highlight-square'], function (key, index) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("li", {
          className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('qlttf-modal-image', attributes.layout == key && 'active', key !== 'masonry' && key !== 'gallery' && 'qlttf-premium-field'),
          onClick: function onClick() {
            return setAttributes({
              layout: key
            });
          }
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("span", null, key.replace('-', ' ')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("img", {
          src: "".concat(url, "/").concat(key, ".png")
        }));
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Limit', 'wp-tiktok-feed'),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Number of videos to display', 'wp-tiktok-feed'),
        value: attributes.limit,
        onChange: function onChange(newValue) {
          return setAttributes({
            limit: newValue
          });
        },
        min: 1,
        max: 33
      }), attributes.layout != 'carousel' && attributes.layout != 'carousel-vertical' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Columns', 'wp-tiktok-feed'),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Number of videos in a row', 'wp-tiktok-feed'),
        value: attributes.columns,
        onChange: function onChange(newValue) {
          return setAttributes({
            columns: newValue
          });
        },
        min: 1,
        max: 20
      }), (attributes.layout == 'highlight' || attributes.layout == 'highlight-square') && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["TextControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])(' highlight by tag', 'wp-tiktok-feed'),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('highlightfeeds items with this tags', 'wp-tiktok-feed'),
        value: attributes.highlight.tag,
        onChange: function onChange(newValue) {
          return setAttributes({
            highlight: _objectSpread(_objectSpread({}, attributes.highlight), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'tag', newValue))
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["TextControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])(' highlight by id', 'wp-tiktok-feed'),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])(' highlight by id', 'wp-tiktok-feed'),
        value: attributes.highlight.id,
        onChange: function onChange(newValue) {
          return setAttributes({
            highlight: _objectSpread(_objectSpread({}, attributes.highlight), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'id', newValue))
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["TextControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])(' highlight by position', 'wp-tiktok-feed'),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('highlightfeeds items in this positions', 'wp-tiktok-feed'),
        value: attributes.highlight.position,
        onChange: function onChange(newValue) {
          return setAttributes({
            highlight: _objectSpread(_objectSpread({}, attributes.highlight), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'position', newValue))
          });
        }
      }))), (attributes.layout == 'carousel' || attributes.layout == 'carousel-vertical') && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["PanelBody"], {
        initialOpen: false,
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Carousel', 'wp-tiktok-feed')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Slides per view', 'wp-tiktok-feed'),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Number of videos per slide', 'wp-tiktok-feed'),
        value: attributes.carousel.slidespv,
        onChange: function onChange(newValue) {
          return setAttributes({
            carousel: _objectSpread(_objectSpread({}, attributes.carousel), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'slidespv', newValue))
          });
        },
        min: 1,
        max: 10
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["ToggleControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Autoplay', 'wp-tiktok-feed'),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Autoplay carousel items', 'wp-tiktok-feed'),
        checked: !!attributes.carousel.autoplay,
        onChange: function onChange(newValue) {
          return setAttributes({
            carousel: _objectSpread(_objectSpread({}, attributes.carousel), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'autoplay', newValue))
          });
        }
      }), attributes.carousel.autoplay && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Autoplay Interval', 'wp-tiktok-feed'),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Moves to next picture after specified time interval', 'wp-tiktok-feed'),
        value: attributes.carousel.autoplay_interval,
        onChange: function onChange(newValue) {
          return setAttributes({
            carousel: _objectSpread(_objectSpread({}, attributes.carousel), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'autoplay_interval', newValue))
          });
        },
        min: 1,
        max: 10
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["ToggleControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Navigation', 'wp-tiktok-feed'),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Display navigation arrows', 'wp-tiktok-feed'),
        checked: !!attributes.carousel.navarrows,
        onChange: function onChange(newValue) {
          return setAttributes({
            carousel: _objectSpread(_objectSpread({}, attributes.navarrows), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'navarrows', newValue))
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["BaseControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Navigation color', 'wp-tiktok-feed'),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Change navigation arrows color', 'wp-tiktok-feed')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_10__["ColorPalette"], {
        value: attributes.carousel.navarrows_color,
        onChange: function onChange(newValue) {
          return setAttributes({
            carousel: _objectSpread(_objectSpread({}, attributes.carousel), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'navarrows_color', newValue))
          });
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["ToggleControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Pagination', 'wp-tiktok-feed'),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Display pagination dots', 'wp-tiktok-feed'),
        checked: !!attributes.carousel.pagination,
        onChange: function onChange(newValue) {
          return setAttributes({
            carousel: _objectSpread(_objectSpread({}, attributes.carousel), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'pagination', newValue))
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["BaseControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Pagination color', 'wp-tiktok-feed'),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Change pagination dotts color', 'wp-tiktok-feed')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_10__["ColorPalette"], {
        value: attributes.carousel.pagination_color,
        onChange: function onChange(newValue) {
          return setAttributes({
            carousel: _objectSpread(_objectSpread({}, attributes.carousel), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'pagination_color', newValue))
          });
        }
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["PanelBody"], {
        initialOpen: false,
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Box', 'wp-tiktok-feed')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["ToggleControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Box', 'wp-tiktok-feed'),
        className: "qlttf-premium-field",
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Display the TikTok Feed inside a customizable box', 'wp-tiktok-feed'),
        checked: !!attributes.box.display,
        onChange: function onChange(newValue) {
          return setAttributes({
            box: _objectSpread(_objectSpread({}, attributes.box), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'display', newValue))
          });
        }
      }), attributes.box.display && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Box padding', 'wp-tiktok-feed'),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Add padding to the TikTok Feed', 'wp-tiktok-feed'),
        className: "qlttf-premium-field",
        value: attributes.box.padding,
        onChange: function onChange(newValue) {
          return setAttributes({
            box: _objectSpread(_objectSpread({}, attributes.box), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'padding', newValue))
          });
        },
        min: 1,
        max: 100
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Border Radius', 'wp-tiktok-feed'),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Add radius to the TikTok Feed', 'wp-tiktok-feed'),
        className: "qlttf-premium-field",
        value: attributes.box.radius,
        onChange: function onChange(newValue) {
          return setAttributes({
            box: _objectSpread(_objectSpread({}, attributes.box), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'radius', newValue))
          });
        },
        min: 0,
        max: 100
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["BaseControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Box background', 'wp-tiktok-feed'),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Color which is displayed on box background', 'wp-tiktok-feed'),
        className: "qlttf-premium-field"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_10__["ColorPalette"], {
        value: attributes.box.background,
        onChange: function onChange(newValue) {
          return setAttributes({
            box: _objectSpread(_objectSpread({}, attributes.box), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'background', newValue))
          });
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["BaseControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Box text color', 'wp-tiktok-feed'),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Color which is displayed on box text', 'wp-tiktok-feed'),
        className: "qlttf-premium-field"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_10__["ColorPalette"], {
        value: attributes.box.text_color,
        onChange: function onChange(newValue) {
          return setAttributes({
            box: _objectSpread(_objectSpread({}, attributes.box), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'text_color', newValue))
          });
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["ToggleControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Profile', 'wp-tiktok-feed'),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Display user profile or tag info', 'wp-tiktok-feed'),
        className: "qlttf-premium-field",
        checked: !!attributes.box.profile,
        onChange: function onChange(newValue) {
          return setAttributes({
            box: _objectSpread(_objectSpread({}, attributes.box), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'profile', newValue))
          });
        }
      }), attributes.box.profile && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["TextareaControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Description', 'wp-tiktok-feed'),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Box description here', 'wp-tiktok-feed'),
        className: "qlttf-premium-field",
        value: attributes.box.desc,
        onChange: function onChange(newValue) {
          return setAttributes({
            box: _objectSpread(_objectSpread({}, attributes.box), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'desc', newValue))
          });
        }
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["PanelBody"], {
        initialOpen: false,
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Video', 'wp-tiktok-feed')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Covers', 'wp-tiktok-feed'),
        value: attributes.video.covers,
        onChange: function onChange(newValue) {
          return setAttributes({
            video: _objectSpread(_objectSpread({}, attributes.video), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'covers', newValue))
          });
        },
        options: [{
          value: 'default',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Default', 'wp-tiktok-feed')
        }, {
          value: 'origin',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Origin', 'wp-tiktok-feed')
        }, {
          value: 'dynamic',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Dynamic', 'wp-tiktok-feed')
        }]
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["ToggleControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Lazy load', 'wp-tiktok-feed'),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Defers feed video lazy', 'wp-tiktok-feed'),
        checked: !!attributes.lazy,
        onChange: function onChange(newValue) {
          return setAttributes({
            lazy: newValue
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Video spacing', 'wp-tiktok-feed'),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Add blank space between video', 'wp-tiktok-feed'),
        value: attributes.video.spacing,
        onChange: function onChange(newValue) {
          return setAttributes({
            video: _objectSpread(_objectSpread({}, attributes.video), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'spacing', newValue))
          });
        },
        min: 0,
        max: 100
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Video radius', 'wp-tiktok-feed'),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Add radius to the TikTok video', 'wp-tiktok-feed'),
        value: attributes.video.radius,
        onChange: function onChange(newValue) {
          return setAttributes({
            video: _objectSpread(_objectSpread({}, attributes.video), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'radius', newValue))
          });
        },
        min: 0,
        max: 100
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["ToggleControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Video mask', 'wp-tiktok-feed'),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Video mouseover effect', 'wp-tiktok-feed'),
        checked: !!attributes.mask.display,
        onChange: function onChange(newValue) {
          return setAttributes({
            mask: _objectSpread(_objectSpread({}, attributes.mask), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'display', newValue))
          });
        }
      }), attributes.mask.display && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["BaseControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Video mask color', 'wp-tiktok-feed'),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Color which is displayed when displayed over video', 'wp-tiktok-feed')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_10__["ColorPalette"], {
        value: attributes.mask.background,
        onChange: function onChange(newValue) {
          return setAttributes({
            mask: _objectSpread(_objectSpread({}, attributes.mask), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'background', newValue))
          });
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["ToggleControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Video mask likes', 'wp-tiktok-feed'),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Display likes count of video', 'wp-tiktok-feed'),
        checked: !!attributes.mask.digg_count,
        onChange: function onChange(newValue) {
          return setAttributes({
            mask: _objectSpread(_objectSpread({}, attributes.mask), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'digg_count', newValue))
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["ToggleControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Video mask likes', 'wp-tiktok-feed'),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Display comments count of video', 'wp-tiktok-feed'),
        checked: !!attributes.mask.comment_count,
        onChange: function onChange(newValue) {
          return setAttributes({
            mask: _objectSpread(_objectSpread({}, attributes.mask), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'comment_count', newValue))
          });
        }
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["PanelBody"], {
        initialOpen: false,
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Video Card', 'wp-tiktok-feed')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["ToggleControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Videos card', 'wp-tiktok-feed'),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Display card gallery', 'wp-tiktok-feed'),
        className: "qlttf-premium-field",
        checked: !!attributes.card.display,
        onChange: function onChange(newValue) {
          return setAttributes({
            card: _objectSpread(_objectSpread({}, attributes.card), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'display', newValue))
          });
        }
      }), attributes.card.display && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Card radius', 'wp-tiktok-feed'),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Add radius to the TikTok Feed', 'wp-tiktok-feed'),
        className: "qlttf-premium-field",
        value: attributes.card.radius,
        onChange: function onChange(newValue) {
          return setAttributes({
            card: _objectSpread(_objectSpread({}, attributes.card), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'radius', newValue))
          });
        },
        min: 0,
        max: 100
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Card font size', 'wp-tiktok-feed'),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Add font-size to the TikTok Feed', 'wp-tiktok-feed'),
        className: "qlttf-premium-field",
        value: attributes.card.font_size,
        onChange: function onChange(newValue) {
          return setAttributes({
            card: _objectSpread(_objectSpread({}, attributes.card), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'font_size', newValue))
          });
        },
        min: 0,
        max: 33
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["BaseControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Card background', 'wp-tiktok-feed'),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Color which is displayed when over video', 'wp-tiktok-feed'),
        className: "qlttf-premium-field"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_10__["ColorPalette"], {
        value: attributes.mask.background,
        onChange: function onChange(newValue) {
          return setAttributes({
            mask: _objectSpread(_objectSpread({}, attributes.mask), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'background', newValue))
          });
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["BaseControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Card text', 'wp-tiktok-feed'),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Color text', 'wp-tiktok-feed'),
        className: "qlttf-premium-field"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_10__["ColorPalette"], {
        value: attributes.mask.text_color,
        onChange: function onChange(newValue) {
          return setAttributes({
            mask: _objectSpread(_objectSpread({}, attributes.mask), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'text_color', newValue))
          });
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Card padding', 'wp-tiktok-feed'),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Add blank space between videos', 'wp-tiktok-feed'),
        value: attributes.card.padding,
        className: "qlttf-premium-field",
        onChange: function onChange(newValue) {
          return setAttributes({
            card: _objectSpread(_objectSpread({}, attributes.card), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'padding', newValue))
          });
        },
        min: 0,
        max: 100
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["ToggleControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Card info', 'wp-tiktok-feed'),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Display likes count of videos', 'wp-tiktok-feed'),
        className: "qlttf-premium-field",
        checked: !!attributes.card.info,
        onChange: function onChange(newValue) {
          return setAttributes({
            card: _objectSpread(_objectSpread({}, attributes.card), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'info', newValue))
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["ToggleControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Card comments', 'wp-tiktok-feed'),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Display comments count of videos', 'wp-tiktok-feed'),
        className: "qlttf-premium-field",
        checked: !!attributes.card.comments,
        onChange: function onChange(newValue) {
          return setAttributes({
            card: _objectSpread(_objectSpread({}, attributes.card), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'comments', newValue))
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["ToggleControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Card text', 'wp-tiktok-feed'),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Display text of videos', 'wp-tiktok-feed'),
        className: "qlttf-premium-field",
        checked: !!attributes.card.text,
        onChange: function onChange(newValue) {
          return setAttributes({
            card: _objectSpread(_objectSpread({}, attributes.card), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'text', newValue))
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Card length', 'wp-tiktok-feed'),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('limit the length of the card text', 'wp-tiktok-feed'),
        className: "qlttf-premium-field",
        value: attributes.card.length,
        onChange: function onChange(newValue) {
          return setAttributes({
            card: _objectSpread(_objectSpread({}, attributes.card), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'length', newValue))
          });
        },
        min: 0,
        max: 100
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["PanelBody"], {
        initialOpen: false,
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Video Popup', 'wp-tiktok-feed')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["ToggleControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Videos popup', 'wp-tiktok-feed'),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Display popup gallery by clicking on video', 'wp-tiktok-feed'),
        checked: !!attributes.popup.display,
        onChange: function onChange(newValue) {
          return setAttributes({
            popup: _objectSpread(_objectSpread({}, attributes.popup), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'display', newValue))
          });
        }
      }), attributes.popup.display && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["ToggleControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Videos popup profile', 'wp-tiktok-feed'),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Display user profile or tag info', 'wp-tiktok-feed'),
        checked: !!attributes.popup.profile,
        onChange: function onChange(newValue) {
          return setAttributes({
            popup: _objectSpread(_objectSpread({}, attributes.popup), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'profile', newValue))
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["ToggleControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Videos download', 'wp-tiktok-feed'),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Allow download videos', 'wp-tiktok-feed'),
        className: "qlttf-premium-field",
        checked: !!attributes.popup.download,
        onChange: function onChange(newValue) {
          return setAttributes({
            popup: _objectSpread(_objectSpread({}, attributes.popup), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'download', newValue))
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["ToggleControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Videos popup text', 'wp-tiktok-feed'),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Display text in the popup', 'wp-tiktok-feed'),
        checked: !!attributes.popup.text,
        onChange: function onChange(newValue) {
          return setAttributes({
            popup: _objectSpread(_objectSpread({}, attributes.popup), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'text', newValue))
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["ToggleControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Videos popup likes', 'wp-tiktok-feed'),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Display likes count of videos', 'wp-tiktok-feed'),
        checked: !!attributes.popup.digg_count,
        onChange: function onChange(newValue) {
          return setAttributes({
            popup: _objectSpread(_objectSpread({}, attributes.popup), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'digg_count', newValue))
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["ToggleControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Videos popup comments', 'wp-tiktok-feed'),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Display comments count of videos', 'wp-tiktok-feed'),
        checked: !!attributes.popup.comment_count,
        onChange: function onChange(newValue) {
          return setAttributes({
            popup: _objectSpread(_objectSpread({}, attributes.popup), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'comment_count', newValue))
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["ToggleControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Videos popup date', 'wp-tiktok-feed'),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Display date of videos', 'wp-tiktok-feed'),
        checked: !!attributes.popup.date_count,
        onChange: function onChange(newValue) {
          return setAttributes({
            popup: _objectSpread(_objectSpread({}, attributes.popup), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'date_count', newValue))
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["ToggleControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Video controls', 'wp-tiktok-feed'),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Display video controls', 'wp-tiktok-feed'),
        checked: !!attributes.popup.controls,
        onChange: function onChange(newValue) {
          return setAttributes({
            popup: _objectSpread(_objectSpread({}, attributes.popup), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'controls', newValue))
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["ToggleControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Video autoplay', 'wp-tiktok-feed'),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Video autoplay on modal open', 'wp-tiktok-feed'),
        checked: !!attributes.popup.autoplay,
        onChange: function onChange(newValue) {
          return setAttributes({
            popup: _objectSpread(_objectSpread({}, attributes.popup), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'autoplay', newValue))
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Videos popup align', 'wp-tiktok-feed'),
        value: attributes.popup.align,
        onChange: function onChange(newValue) {
          return setAttributes({
            popup: _objectSpread(_objectSpread({}, attributes.popup), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'align', newValue))
          });
        },
        options: [{
          value: 'left',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Left', 'wp-tiktok-feed')
        }, {
          value: 'right',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Right', 'wp-tiktok-feed')
        }, {
          value: 'bottom',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Bottom', 'wp-tiktok-feed')
        }, {
          value: 'top',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Top', 'wp-tiktok-feed')
        }]
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["PanelBody"], {
        initialOpen: false,
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Button', 'wp-tiktok-feed')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["ToggleControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('TikTok button', 'wp-tiktok-feed'),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Display the button to open TikTok site link', 'wp-tiktok-feed'),
        checked: !!attributes.button.display,
        onChange: function onChange(newValue) {
          return setAttributes({
            button: _objectSpread(_objectSpread({}, attributes.button), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'display', newValue))
          });
        }
      }), attributes.button.display && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["TextControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('TikTok button text', 'wp-tiktok-feed'),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('TikTok button text here', 'wp-tiktok-feed'),
        value: attributes.button.text,
        onChange: function onChange(newValue) {
          return setAttributes({
            button: _objectSpread(_objectSpread({}, attributes.button), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'text', newValue))
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["BaseControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('TikTok button background', 'wp-tiktok-feed'),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Color which is displayed on button background', 'wp-tiktok-feed')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_10__["ColorPalette"], {
        value: attributes.button.background,
        onChange: function onChange(newValue) {
          return setAttributes({
            button: _objectSpread(_objectSpread({}, attributes.button), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'background', newValue))
          });
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["BaseControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('TikTok button hover background', 'wp-tiktok-feed'),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Color which is displayed when hovered over button', 'wp-tiktok-feed')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_10__["ColorPalette"], {
        value: attributes.button.background_hover,
        onChange: function onChange(newValue) {
          return setAttributes({
            button: _objectSpread(_objectSpread({}, attributes.button), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'background_hover', newValue))
          });
        }
      })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["PanelBody"], {
        initialOpen: false,
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Button Load More', 'wp-tiktok-feed')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["ToggleControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('TikTok button', 'wp-tiktok-feed'),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Display the button to load more videos', 'wp-tiktok-feed'),
        className: "qlttf-premium-field",
        checked: !!attributes.button_load.display,
        onChange: function onChange(newValue) {
          return setAttributes({
            button_load: _objectSpread(_objectSpread({}, attributes.button_load), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'display', newValue))
          });
        }
      }), attributes.button_load.display && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["TextControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('TikTok button text', 'wp-tiktok-feed'),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('TikTok button text here', 'wp-tiktok-feed'),
        className: "qlttf-premium-field",
        value: attributes.button_load.text,
        onChange: function onChange(newValue) {
          return setAttributes({
            button_load: _objectSpread(_objectSpread({}, attributes.button_load), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'text', newValue))
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["BaseControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('TikTok button background', 'wp-tiktok-feed'),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Color which is displayed on button background', 'wp-tiktok-feed'),
        className: "qlttf-premium-field"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_10__["ColorPalette"], {
        value: attributes.button_load.background,
        onChange: function onChange(newValue) {
          return setAttributes({
            button_load: _objectSpread(_objectSpread({}, attributes.button_load), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'background', newValue))
          });
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["BaseControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('TikTok button hover background', 'wp-tiktok-feed'),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Color which is displayed when hovered over button', 'wp-tiktok-feed'),
        className: "qlttf-premium-field"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_10__["ColorPalette"], {
        value: attributes.button_load.background_hover,
        onChange: function onChange(newValue) {
          return setAttributes({
            button_load: _objectSpread(_objectSpread({}, attributes.button_load), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'background_hover', newValue))
          });
        }
      })))));
    }
  }]);

  return Inspector;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ }),

/***/ "./src/backend/gutenberg/box/scss/editor.scss":
/*!****************************************************!*\
  !*** ./src/backend/gutenberg/box/scss/editor.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/backend/gutenberg/index.js":
/*!****************************************!*\
  !*** ./src/backend/gutenberg/index.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _box_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./box/index */ "./src/backend/gutenberg/box/index.js");


/***/ }),

/***/ "./src/frontend/index.js":
/*!*******************************!*\
  !*** ./src/frontend/index.js ***!
  \*******************************/
/*! exports provided: qlttf_init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "qlttf_init", function() { return qlttf_init; });
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ "./src/frontend/scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
///import './scss/editor.scss';

 //(function ($) {

"use strict";

var swiper_index = 0,
    $swipers = {}; ///alert("sdsda");
// Ajax load
// ---------------------------------------------------------------------------

function qlttf_load_item_images($item, next_max_id) {
  var $wrap = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.tiktok-feed-list', $item),
      $spinner = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.tiktok-feed-spinner', $item),
      feed = $item.data('feed');
  jquery__WEBPACK_IMPORTED_MODULE_1___default.a.ajax({
    url: qlttf.ajax_url,
    type: 'post',
    timeout: 30000,
    data: {
      action: 'qlttf_load_item_images',
      next_max_id: next_max_id,
      feed: JSON.stringify(feed)
    },
    beforeSend: function beforeSend() {
      $spinner.show();
    },
    success: function success(response) {
      if (response.success !== true) {
        $wrap.append(jquery__WEBPACK_IMPORTED_MODULE_1___default()(response.data));
        $spinner.hide();
        return;
      }

      var $images = jquery__WEBPACK_IMPORTED_MODULE_1___default()(response.data);
      $wrap.append($images).trigger('qlttf.loaded', [$images]);
    },
    complete: function complete() {},
    error: function error(jqXHR, textStatus) {
      $spinner.hide();
    }
  });
}

function qlttf_init() {
  // Images
  // ---------------------------------------------------------------------------
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.tiktok-feed-feed').on('qlttf.loaded', function (e, images) {
    var $item = jquery__WEBPACK_IMPORTED_MODULE_1___default()(e.delegateTarget),
        $wrap = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.tiktok-feed-list', $item),
        $spinner = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.tiktok-feed-spinner', $item),
        $button = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.tiktok-feed-button.load', $item),
        options = $item.data('feed'),
        total = jquery__WEBPACK_IMPORTED_MODULE_1___default()(images).length,
        loaded = 0;
    $wrap.trigger('qlttf.imagesLoaded', [images]);
    /* 
         if (total) {
          $wrap.find('.tiktok-feed-video').load(function (e) {
            loaded++;
            if (loaded >= total) {
              $wrap.trigger('qlttf.imagesLoaded', [images]);
            }
          });
        } 
     */

    if (total < options.limit) {
      $spinner.hide();
      setTimeout(function () {
        $button.fadeOut();
      }, 300);
    }
  }); // Spinner
  // ---------------------------------------------------------------------------

  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.tiktok-feed-feed').on('qlttf.imagesLoaded', function (e) {
    var $item = jquery__WEBPACK_IMPORTED_MODULE_1___default()(e.delegateTarget),
        $spinner = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.tiktok-feed-spinner', $item);
    $spinner.hide();
  }); // Gallery
  // ---------------------------------------------------------------------------

  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.tiktok-feed-feed[data-feed_layout=gallery]').on('qlttf.imagesLoaded', function (e, images) {
    var $item = jquery__WEBPACK_IMPORTED_MODULE_1___default()(e.delegateTarget);
    $item.addClass('loaded');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(images).each(function (i, item) {
      setTimeout(function () {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(item).addClass('ig-image-loaded');
      }, 150 + i * 30);
    });
  }); // Carousel and Carousel Vertical
  // ---------------------------------------------------------------------------

  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.tiktok-feed-feed[data-feed_layout=carousel], .tiktok-feed-feed[data-feed_layout=carousel-vertical]').on('qlttf.imagesLoaded', function (e, images) {
    var $item = jquery__WEBPACK_IMPORTED_MODULE_1___default()(e.delegateTarget);
    $item.addClass('loaded');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(images).each(function (i, item) {
      //setTimeout(function () {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(item).addClass('ig-image-loaded'); //}, 500 + (i * 50));
    });
  });
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.tiktok-feed-feed[data-feed_layout=carousel] , .tiktok-feed-feed[data-feed_layout=carousel-vertical]').on('qlttf.imagesLoaded', function (e, images) {
    var $item = jquery__WEBPACK_IMPORTED_MODULE_1___default()(e.delegateTarget),
        $swiper = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.swiper-container', $item),
        options = $item.data('feed');
    options.carousel.slides = options.carousel.slidespv; ///  options.carousel.interval = options.carousel.autoplay_interval;

    swiper_index++;
    $swipers[swiper_index] = new Swiper($swiper, {
      //direction: 'vertical',
      //wrapperClass: 'tiktok-feed-list',
      ///slideClass: 'tiktok-feed-item',
      loop: true,
      autoHeight: true,
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 2,
      autoplay: options.carousel.autoplay ? {
        delay: parseInt(options.carousel.autoplay_interval)
      } : false,
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
        type: 'bullets'
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 1
        },
        480: {
          spaceBetween: parseInt(options.video.spacing),
          slidesPerView: Math.min(2, parseInt(options.carousel.slides))
        },
        768: {
          spaceBetween: parseInt(options.video.spacing),
          slidesPerView: Math.min(3, parseInt(options.carousel.slides))
        },
        1024: {
          spaceBetween: parseInt(options.video.spacing),
          slidesPerView: parseInt(options.carousel.slides)
        }
      }
    });
  }); /// Highigth, Highigth Square and Masonry

  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.tiktok-feed-feed[data-feed_layout=highlight] , .tiktok-feed-feed[data-feed_layout=highlight-square], .tiktok-feed-feed[data-feed_layout=masonry]').on('qlttf.imagesLoaded', function (e, images) {
    var $item = jquery__WEBPACK_IMPORTED_MODULE_1___default()(e.delegateTarget),
        $wrap = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.tiktok-feed-list', $item);

    if (!$wrap.data('masonry')) {
      $wrap.masonry({
        itemSelector: '.tiktok-feed-item',
        isResizable: true,
        isAnimated: false,
        transitionDuration: 0,
        percentPosition: true,
        columnWidth: '.tiktok-feed-item:last-child'
      });
    } else {
      $wrap.masonry('appended', images, false);
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.tiktok-feed-feed[data-feed_layout=highlight] , .tiktok-feed-feed[data-feed_layout=highlight-square], .tiktok-feed-feed[data-feed_layout=masonry]').on('layoutComplete', function (e, items) {
    var $item = jquery__WEBPACK_IMPORTED_MODULE_1___default()(e.delegateTarget);
    $item.addClass('loaded');
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(items).each(function (i, item) {
      setTimeout(function () {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(item.element).addClass('ig-image-loaded');
      }, 500 + i * 50);
    });
  }); // Popup
  // ---------------------------------------------------------------------------

  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.tiktok-feed-feed').on('qlttf.loaded', function (e) {
    var $item = jquery__WEBPACK_IMPORTED_MODULE_1___default()(e.delegateTarget),
        $wrap = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.tiktok-feed-list', $item),
        options = $item.data('feed'); // Redirect
    // -------------------------------------------------------------------------

    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.tiktok-feed-item .tiktok-feed-icon', $wrap).on('click', function (e) {
      e.stopPropagation();
    }); // Carousel
    // -------------------------------------------------------------------------

    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.tiktok-feed-item', $wrap).on('mfpOpen', function (e) {});

    if (!options.popup.display) {
      return;
    }

    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.tiktok-feed-item', $wrap).magnificPopup({
      type: 'inline',
      callbacks: {
        beforeOpen: function beforeOpen() {
          this.st.mainClass = this.st.mainClass + ' ' + 'qlttf-mfp-wrap';
        },
        elementParse: function elementParse(item) {
          var media = '',
              text = '',
              profile = '',
              counter = '',
              digg_count = '',
              controls = options.popup.controls ? ' controls' : '',
              autoplay = options.popup.autoplay ? ' autoplay' : '',
              author = item.el.data('item').author;
          media = '<div class="loader" style="height: ' + item.el.data('item').height + 'px; width: ' + item.el.data('item').width + 'px;">\n\
                      <video ' + autoplay + ' ' + controls + '>\n\
                        <source src="' + item.el.data('item').covers.video + '" type="video/mp4">\n\
                     </video></div>';
          counter = '<div class="mfp-icons">\n\
                        <div class="mfp-counter">' + (item.index + 1) + ' / ' + jquery__WEBPACK_IMPORTED_MODULE_1___default()('.tiktok-feed-item', $wrap).length + '</div>\n\
                        <a class="mfp-link" href="' + item.el.data('item').link + '" target="_blank" rel="noopener">\n\
                          <svg width="12px" height="14px" viewBox="0 0 29 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n\
                            <g id="页面1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n\
                              <g id="编组-2" transform="translate(0.979236, 0.000000)" fill-rule="nonzero">\n\
                                <path d="M10.7907645,12.33 L10.7907645,11.11 C10.3672629,11.0428887 9.93950674,11.0061284 9.51076448,10.9999786 C5.35996549,10.9912228 1.68509679,13.6810205 0.438667694,17.6402658 C-0.807761399,21.5995112 0.663505842,25.9093887 4.07076448,28.28 C1.51848484,25.5484816 0.809799545,21.5720834 2.26126817,18.1270053 C3.71273679,14.6819273 7.05329545,12.4115428 10.7907645,12.33 L10.7907645,12.33 Z" id="路径" fill="#25F4EE"></path>\n\
                                <path d="M11.0207645,26.15 C13.3415287,26.1468776 15.2491662,24.3185414 15.3507645,22 L15.3507645,1.31 L19.1307645,1.31 C19.0536068,0.877682322 19.0167818,0.439130992 19.0207645,0 L13.8507645,0 L13.8507645,20.67 C13.764798,23.0003388 11.8526853,24.846212 9.52076448,24.85 C8.82390914,24.844067 8.13842884,24.6726969 7.52076448,24.35 C8.33268245,25.4749154 9.63346203,26.1438878 11.0207645,26.15 Z" id="路径" fill="#25F4EE"></path>\n\
                                <path d="M26.1907645,8.33 L26.1907645,7.18 C24.79964,7.18047625 23.4393781,6.76996242 22.2807645,6 C23.2964446,7.18071769 24.6689622,7.99861177 26.1907645,8.33 L26.1907645,8.33 Z" id="路径" fill="#25F4EE"></path>\n\
                                <path d="M22.2807645,6 C21.1394675,4.70033161 20.5102967,3.02965216 20.5107645,1.3 L19.1307645,1.3 C19.4909812,3.23268519 20.6300383,4.93223067 22.2807645,6 L22.2807645,6 Z" id="路径" fill="#FE2C55"></path>\n\
                                <path d="M9.51076448,16.17 C7.51921814,16.1802178 5.79021626,17.544593 5.31721201,19.4791803 C4.84420777,21.4137677 5.74860956,23.4220069 7.51076448,24.35 C6.55594834,23.0317718 6.42106871,21.2894336 7.16162883,19.8399613 C7.90218896,18.3904889 9.39306734,17.4787782 11.0207645,17.48 C11.4547752,17.4854084 11.8857908,17.5527546 12.3007645,17.68 L12.3007645,12.42 C11.8769919,12.3565056 11.4492562,12.3230887 11.0207645,12.32 L10.7907645,12.32 L10.7907645,16.32 C10.3736368,16.2081544 9.94244934,16.1576246 9.51076448,16.17 Z" id="路径" fill="#FE2C55"></path>\n\
                                <path d="M26.1907645,8.33 L26.1907645,12.33 C23.61547,12.3250193 21.107025,11.5098622 19.0207645,10 L19.0207645,20.51 C19.0097352,25.7544158 14.7551919,30.0000116 9.51076448,30 C7.56312784,30.0034556 5.66240321,29.4024912 4.07076448,28.28 C6.72698674,31.1368108 10.8608257,32.0771989 14.4914706,30.6505586 C18.1221155,29.2239183 20.5099375,25.7208825 20.5107645,21.82 L20.5107645,11.34 C22.604024,12.8399663 25.1155724,13.6445013 27.6907645,13.64 L27.6907645,8.49 C27.1865925,8.48839535 26.6839313,8.43477816 26.1907645,8.33 Z" id="路径" fill="#FE2C55"></path>\n\
                                <path d="M19.0207645,20.51 L19.0207645,10 C21.1134087,11.5011898 23.6253623,12.3058546 26.2007645,12.3 L26.2007645,8.3 C24.6792542,7.97871265 23.3034403,7.17147491 22.2807645,6 C20.6300383,4.93223067 19.4909812,3.23268519 19.1307645,1.3 L15.3507645,1.3 L15.3507645,22 C15.2751521,23.8467664 14.0381991,25.4430201 12.268769,25.9772302 C10.4993389,26.5114403 8.58570942,25.8663815 7.50076448,24.37 C5.73860956,23.4420069 4.83420777,21.4337677 5.30721201,19.4991803 C5.78021626,17.564593 7.50921814,16.2002178 9.50076448,16.19 C9.934903,16.1938693 10.3661386,16.2612499 10.7807645,16.39 L10.7807645,12.39 C7.0223379,12.4536691 3.65653929,14.7319768 2.20094561,18.1976761 C0.745351938,21.6633753 1.47494493,25.6617476 4.06076448,28.39 C5.66809542,29.4755063 7.57158782,30.0378224 9.51076448,30 C14.7551919,30.0000116 19.0097352,25.7544158 19.0207645,20.51 Z" id="路径" fill="#000000"></path>\n\
                              </g>\n\
                            </g>\n\
                          </svg>\n\
                          TikTok\n\
                        </a>';

          if (options.popup.download) {
            counter += '<a class="mfp-link" href="' + item.el.data('item').download + '" target="_blank" rel="noopener">\n\
                        <i class="qlttf-icon-download"></i>Download</a>';
          }

          counter += '</div>';

          if (options.popup.profile) {
            profile = '<div class="mfp-author">\n\
                          <img src="' + author.image.small + '">\n\
                          <div>\n\
                            <span>' + author.full_name + '</span>\n\
                            <a href="' + author.link + '" title="' + author.full_name + '" target="_blank" rel="noopener">@' + author.username + '</a>\n\
                          </div>\n\
                        </div>';
          }

          if (options.popup.text) {
            text = '<div class="mfp-text">' + item.el.data('item').text + '</div>';
          }

          if (options.popup.digg_count || options.popup.comment_count || options.popup.date_count) {
            digg_count = '<div class="mfp-info">';

            if (options.popup.digg_count) {
              digg_count += '<div class="mfp-digg_count"><i class="qlttf-icon-heart"></i>' + item.el.data('item').digg_count + '</div>';
            }

            if (options.popup.date_count) {
              digg_count += '<div class="mfp-date">' + item.el.data('item').date + '</div>';
            }

            if (options.popup.comment_count) {
              digg_count += '<div class="mfp-comment_count"><i class="qlttf-icon-comment"></i>' + item.el.data('item').comment_count + '</div>';
            }

            digg_count += '</div>';
          }

          item.src = '<div class="mfp-figure ' + options.popup.align + '" style="height: ' + item.el.data('item').height + 'px;">' + media + '<div class="mfp-close"></div><div class="mfp-bottom-bar"><div class="mfp-title">' + profile + counter + text + digg_count + '</div></div></div>';
        }
      },
      gallery: {
        enabled: true
      }
    });
  }); // Init
  // ---------------------------------------------------------------------------

  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.tiktok-feed-feed').on('click', '.tiktok-feed-button.load', function (e) {
    e.preventDefault();
    var $item = jquery__WEBPACK_IMPORTED_MODULE_1___default()(e.delegateTarget);

    if (!$item.hasClass('loaded')) {
      return false;
    }

    var next_max_id = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.tiktok-feed-list .tiktok-feed-item:last-child', $item).data('item').i;
    qlttf_load_item_images($item, next_max_id);
  });
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.tiktok-feed-feed').on('test', function (e) {
    e.preventDefault();
    /*    alert("alert"); */

    var $item = jquery__WEBPACK_IMPORTED_MODULE_1___default()(e.delegateTarget);

    if (!$item.hasClass('loaded')) {
      return false;
    }

    qlttf_load_item_images($item, 0);
  });
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.tiktok-feed-feed').each(function (index, item) {
    var $item = jquery__WEBPACK_IMPORTED_MODULE_1___default()(item);

    if ($item.hasClass('loaded')) {
      return false;
    }

    qlttf_load_item_images($item, 0);
  }); // IE8
  // ---------------------------------------------------------------------------

  if (navigator.appVersion.indexOf("MSIE 8.") != -1) {
    document.body.className += ' ' + 'tiktok-gallery-ie-8';
  }

  if (navigator.appVersion.indexOf("MSIE 9.") != -1) {
    document.body.className += ' ' + 'tiktok-gallery-ie-9';
  }
}
qlttf_init(); // IE8
// ---------------------------------------------------------------------------

if (navigator.appVersion.indexOf("MSIE 8.") != -1) {
  document.body.className += ' ' + 'tiktok-gallery-ie-8';
}

if (navigator.appVersion.indexOf("MSIE 9.") != -1) {
  document.body.className += ' ' + 'tiktok-gallery-ie-9';
} //})(jQuery);

/***/ }),

/***/ "./src/frontend/scss/style.scss":
/*!**************************************!*\
  !*** ./src/frontend/scss/style.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/editor":
/*!*****************************************!*\
  !*** external {"this":["wp","editor"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["editor"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ }),

/***/ "@wordpress/server-side-render":
/*!***************************************************!*\
  !*** external {"this":["wp","serverSideRender"]} ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["serverSideRender"]; }());

/***/ }),

/***/ "jquery":
/*!**********************************!*\
  !*** external {"this":"jQuery"} ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["jQuery"]; }());

/***/ }),

/***/ "lodash":
/*!**********************************!*\
  !*** external {"this":"lodash"} ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["lodash"]; }());

/***/ })

/******/ });
//# sourceMappingURL=gutenberg.js.map