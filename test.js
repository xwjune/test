/*!
 * jun-utils v1.9.0
 * 
 * Copyright 2018-present, 小巷 <xwjune@163.com>, Inc.
 * All rights reserved.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["junUtils"] = factory();
	else
		root["junUtils"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/core-js/array/from.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/core-js/array/from.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "./node_modules/_core-js@2.6.7@core-js/library/fn/array/from.js");

/***/ }),

/***/ "./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/core-js/array/is-array.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "./node_modules/_core-js@2.6.7@core-js/library/fn/array/is-array.js");

/***/ }),

/***/ "./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/core-js/get-iterator.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "./node_modules/_core-js@2.6.7@core-js/library/fn/get-iterator.js");

/***/ }),

/***/ "./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/core-js/is-iterable.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/core-js/is-iterable.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/is-iterable */ "./node_modules/_core-js@2.6.7@core-js/library/fn/is-iterable.js");

/***/ }),

/***/ "./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/core-js/number/is-nan.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/core-js/number/is-nan.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/number/is-nan */ "./node_modules/_core-js@2.6.7@core-js/library/fn/number/is-nan.js");

/***/ }),

/***/ "./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/core-js/object/assign.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/core-js/object/assign.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "./node_modules/_core-js@2.6.7@core-js/library/fn/object/assign.js");

/***/ }),

/***/ "./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/_core-js@2.6.7@core-js/library/fn/object/define-property.js");

/***/ }),

/***/ "./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "./node_modules/_core-js@2.6.7@core-js/library/fn/object/get-own-property-descriptor.js");

/***/ }),

/***/ "./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "./node_modules/_core-js@2.6.7@core-js/library/fn/object/get-own-property-symbols.js");

/***/ }),

/***/ "./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/core-js/object/keys.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/core-js/object/keys.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "./node_modules/_core-js@2.6.7@core-js/library/fn/object/keys.js");

/***/ }),

/***/ "./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/helpers/arrayWithHoles.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/helpers/arrayWithHoles.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Array$isArray = __webpack_require__(/*! ../core-js/array/is-array */ "./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/core-js/array/is-array.js");

function _arrayWithHoles(arr) {
  if (_Array$isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/helpers/arrayWithoutHoles.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/helpers/arrayWithoutHoles.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Array$isArray = __webpack_require__(/*! ../core-js/array/is-array */ "./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/core-js/array/is-array.js");

function _arrayWithoutHoles(arr) {
  if (_Array$isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/helpers/defineProperty.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/helpers/defineProperty.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _Object$defineProperty(obj, key, {
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

/***/ "./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/helpers/iterableToArray.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/helpers/iterableToArray.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Array$from = __webpack_require__(/*! ../core-js/array/from */ "./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/core-js/array/from.js");

var _isIterable = __webpack_require__(/*! ../core-js/is-iterable */ "./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/core-js/is-iterable.js");

function _iterableToArray(iter) {
  if (_isIterable(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _Array$from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/helpers/iterableToArrayLimit.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/helpers/iterableToArrayLimit.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _getIterator = __webpack_require__(/*! ../core-js/get-iterator */ "./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/core-js/get-iterator.js");

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _getIterator(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/helpers/nonIterableRest.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/helpers/nonIterableRest.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/helpers/nonIterableSpread.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/helpers/nonIterableSpread.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/helpers/objectSpread.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/helpers/objectSpread.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$getOwnPropertySymbols = __webpack_require__(/*! ../core-js/object/get-own-property-symbols */ "./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");

var _Object$keys = __webpack_require__(/*! ../core-js/object/keys */ "./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/core-js/object/keys.js");

var defineProperty = __webpack_require__(/*! ./defineProperty */ "./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/helpers/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _Object$keys(source);

    if (typeof _Object$getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(_Object$getOwnPropertySymbols(source).filter(function (sym) {
        return _Object$getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ "./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/helpers/slicedToArray.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/helpers/slicedToArray.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/helpers/toConsumableArray.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/helpers/toConsumableArray.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/fn/array/from.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/fn/array/from.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/_core-js@2.6.7@core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/es6.array.from */ "./node_modules/_core-js@2.6.7@core-js/library/modules/es6.array.from.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_core.js").Array.from;


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/fn/array/is-array.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/fn/array/is-array.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.array.is-array */ "./node_modules/_core-js@2.6.7@core-js/library/modules/es6.array.is-array.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_core.js").Array.isArray;


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/fn/get-iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/fn/get-iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/_core-js@2.6.7@core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/_core-js@2.6.7@core-js/library/modules/es6.string.iterator.js");
module.exports = __webpack_require__(/*! ../modules/core.get-iterator */ "./node_modules/_core-js@2.6.7@core-js/library/modules/core.get-iterator.js");


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/fn/is-iterable.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/fn/is-iterable.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/_core-js@2.6.7@core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/_core-js@2.6.7@core-js/library/modules/es6.string.iterator.js");
module.exports = __webpack_require__(/*! ../modules/core.is-iterable */ "./node_modules/_core-js@2.6.7@core-js/library/modules/core.is-iterable.js");


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/fn/number/is-nan.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/fn/number/is-nan.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.number.is-nan */ "./node_modules/_core-js@2.6.7@core-js/library/modules/es6.number.is-nan.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_core.js").Number.isNaN;


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/fn/object/assign.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/fn/object/assign.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.assign */ "./node_modules/_core-js@2.6.7@core-js/library/modules/es6.object.assign.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_core.js").Object.assign;


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/fn/object/define-property.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/fn/object/define-property.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "./node_modules/_core-js@2.6.7@core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/fn/object/get-own-property-descriptor.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/fn/object/get-own-property-descriptor.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-own-property-descriptor */ "./node_modules/_core-js@2.6.7@core-js/library/modules/es6.object.get-own-property-descriptor.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_core.js").Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/fn/object/get-own-property-symbols.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/fn/object/get-own-property-symbols.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/_core-js@2.6.7@core-js/library/modules/es6.symbol.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_core.js").Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/fn/object/keys.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/fn/object/keys.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.keys */ "./node_modules/_core-js@2.6.7@core-js/library/modules/es6.object.keys.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_core.js").Object.keys;


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_a-function.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_a-function.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_add-to-unscopables.js":
/*!************************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_add-to-unscopables.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_an-object.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_an-object.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_array-includes.js":
/*!********************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_array-includes.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_classof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_classof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_cof.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_cof.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_core.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_core.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_create-property.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_create-property.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_ctx.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_ctx.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_defined.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_defined.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_descriptors.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_descriptors.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_dom-create.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_dom-create.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_enum-bug-keys.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_enum-bug-keys.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_enum-keys.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_enum-keys.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_export.js":
/*!************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_export.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_fails.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_fails.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_global.js":
/*!************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_global.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_has.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_has.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_hide.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_hide.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_html.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_html.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_ie8-dom-define.js":
/*!********************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_ie8-dom-define.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_iobject.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_iobject.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_is-array-iter.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_is-array-iter.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_is-array.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_is-array.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_is-object.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_is-object.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_iter-call.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_iter-call.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_iter-create.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_iter-create.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_iter-define.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_iter-define.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_iter-detect.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_iter-detect.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_iter-step.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_iter-step.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_iterators.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_iterators.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_library.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_library.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_meta.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_meta.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_object-assign.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_object-assign.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_object-create.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_object-create.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_object-dp.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_object-dp.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_object-dps.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_object-dps.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_object-gopd.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_object-gopd.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_object-gopn-ext.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_object-gopn-ext.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_object-gopn.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_object-gopn.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_object-gops.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_object-gops.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_object-gpo.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_object-gpo.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_object-keys-internal.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_object-keys-internal.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_object-keys.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_object-keys.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_object-pie.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_object-pie.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_object-sap.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_object-sap.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_property-desc.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_property-desc.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_redefine.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_redefine.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_set-to-string-tag.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_set-to-string-tag.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_shared-key.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_shared-key.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_shared.js":
/*!************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_shared.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_string-at.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_string-at.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_to-absolute-index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_to-absolute-index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_to-integer.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_to-integer.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_to-iobject.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_to-iobject.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_to-length.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_to-length.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_to-object.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_to-object.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_to-primitive.js":
/*!******************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_to-primitive.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_uid.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_uid.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_wks-define.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_wks-define.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_wks-ext.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_wks-ext.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_wks.js");


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/_wks.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/_wks.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/core.get-iterator-method.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/core.get-iterator-method.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/core.get-iterator.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/core.get-iterator.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_an-object.js");
var get = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/_core-js@2.6.7@core-js/library/modules/core.get-iterator-method.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_core.js").getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/core.is-iterable.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/core.is-iterable.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_core.js").isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/es6.array.from.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/es6.array.from.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_ctx.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_to-object.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_is-array-iter.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_to-length.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_create-property.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/_core-js@2.6.7@core-js/library/modules/core.get-iterator-method.js");

$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_iter-detect.js")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/es6.array.is-array.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/es6.array.is-array.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_export.js");

$export($export.S, 'Array', { isArray: __webpack_require__(/*! ./_is-array */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_is-array.js") });


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/es6.array.iterator.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/es6.array.iterator.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/es6.number.is-nan.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/es6.number.is-nan.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_export.js");

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/es6.object.assign.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/es6.object.assign.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/es6.object.define-property.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/es6.object.define-property.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/es6.object.get-own-property-descriptor.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/es6.object.get-own-property-descriptor.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_to-iobject.js");
var $getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_object-gopd.js").f;

__webpack_require__(/*! ./_object-sap */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_object-sap.js")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/es6.object.keys.js":
/*!********************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/es6.object.keys.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/es6.string.iterator.js":
/*!************************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/es6.string.iterator.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/es6.symbol.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/es6.symbol.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_is-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_to-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_object-gopd.js");
var $GOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_object-gops.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/_core-js@2.6.7@core-js/library/modules/web.dom.iterable.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/_core-js@2.6.7@core-js/library/modules/web.dom.iterable.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ "./node_modules/_core-js@2.6.7@core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "./node_modules/_core-js@2.6.7@core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "./src/appUtil.js":
/*!************************!*\
  !*** ./src/appUtil.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);



/**
 * app交互
 *
 * isIos - IOS环境判断
 * isAndroid - Android环境判断
 * isMobile - 移动端【手机、平板设备】环境判断
 * isWeChat - 微信客户端判断
 * isAliPay - 支付宝客户端判断
 * isTaobao - 淘宝客户端判断
 * alipayJSBridgeReady - 监听alipay容器初始化
 * alipayTitle - 支付宝设置标题
 * alipayPopWindow - 支付宝关闭当前页面
 * alipayExitApp - 支付宝退出当前应用
 */
var App = function App() {
  var _this = this;

  _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, App);

  _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "isIos", function () {
    return /CPU.+Mac OS X/i.test(navigator.userAgent);
  });

  _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "isAndroid", function () {
    return /Android|Adr/i.test(navigator.userAgent);
  });

  _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "isMobile", function () {
    return /iPhone|iPad|iPod|Android|Mobile|SymbianOS|Windows Phone|BlackBerry|webOS/i.test(navigator.userAgent);
  });

  _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "isWeChat", function () {
    return /MicroMessenger/i.test(navigator.userAgent);
  });

  _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "isAliPay", function () {
    return /AlipayClient/i.test(navigator.userAgent);
  });

  _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "isTaobao", function () {
    return /AliApp\(TB/i.test(navigator.userAgent);
  });

  _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "alipayJSBridgeReady", function (callback) {
    if (window.AlipayJSBridge) {
      // 如果jsbridge已经注入则直接调用
      if (callback) {
        callback();
      }
    } else {
      // 如果没有注入则监听注入的事件
      document.addEventListener('AlipayJSBridgeReady', callback, false);
    }
  });

  _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "alipayTitle", function (title, subtitle) {
    _this.alipayJSBridgeReady(function () {
      window.AlipayJSBridge.call('setTitle', {
        title: title,
        subtitle: subtitle
      });
    });
  });

  _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "alipayPopWindow", function () {
    _this.alipayJSBridgeReady(function () {
      window.AlipayJSBridge.call('popWindow');
    });
  });

  _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "alipayExitApp", function () {
    _this.alipayJSBridgeReady(function () {
      window.AlipayJSBridge.call('exitApp');
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (new App());

/***/ }),

/***/ "./src/check/alipay.js":
/*!*****************************!*\
  !*** ./src/check/alipay.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return alipay; });
/* harmony import */ var _email__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email */ "./src/check/email.js");
/* harmony import */ var _phone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./phone */ "./src/check/phone.js");
/**
 * 支付宝账号校验
 * 规则：邮箱或手机号
 *
 * @param {*} value - The value to check.
 * @return {Boolean} Return `true` if validated, else `false`.
 * @example
 *
 * alipay('test@163.com');
 * // => true
 *
 * alipay('13456789012');
 * // => true
 */


function alipay(value) {
  return Object(_email__WEBPACK_IMPORTED_MODULE_0__["default"])(value) || Object(_phone__WEBPACK_IMPORTED_MODULE_1__["cellphone"])(value);
}

/***/ }),

/***/ "./src/check/email.js":
/*!****************************!*\
  !*** ./src/check/email.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return email; });
/**
 * 邮箱校验
 * 规则：登录名@主机名.域名
 *
 * @param {*} value - The value to check.
 * @return {Boolean} Return `true` if validated, else `false`.
 *
 * email('test@163.com');
 * // => true
 *
 * email('te_st@sima.vip.com');
 * // => true
 */
function email(value) {
  return /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z_-]+(\.[0-9a-zA-Z_-]+)+$/.test(value);
}

/***/ }),

/***/ "./src/check/hasChinese.js":
/*!*********************************!*\
  !*** ./src/check/hasChinese.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hasChinese; });
/**
 * 中文判断
 *
 * @param {*} value - The value to check.
 * @return {Boolean} Return `true` if validated, else `false`.
 * @example
 *
 * hasChinese('中文');
 * // => true
 *
 * hasChinese('。');
 * // => true
 */
function hasChinese(value) {
  var pattern = ["\u2000-\u206F", // 常用标点
  "\u2E80-\u2EFF", // CJK 部首补充
  "\u2F00-\u2FDF", // 康熙字典部首
  "\u2FF0-\u2FFF", // 表意文字描述符
  "\u3000-\u303F", // CJK 符号和标点
  "\u31C0-\u31EF", // CJK 笔画
  "\u3300-\u33FF", // CJK 兼容
  "\u3400-\u4DBF", // CJK 统一表意符号扩展 A
  "\u4E00-\u9FBF", // CJK 统一表意符号
  "\uF900-\uFAFF", // CJK 兼容象形文字
  "\uFE30-\uFE4F", // CJK 兼容形式
  "\uFF00-\uFFEF"];
  var regexp = new RegExp("[".concat(pattern.join(''), "]"));
  return regexp.test(value);
}

/***/ }),

/***/ "./src/check/idCard.js":
/*!*****************************!*\
  !*** ./src/check/idCard.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return idCard; });
/**
 * 身份证校验
 * 一代身份证【15位】：地址码【六位】出生日期码【六位】数字顺序码【三位】
 * 二代身份证【18位】：地址码【六位】出生日期码【八位】数字顺序码【三位】数字校验码【一位】
 *
 * 地址码 [1-9]\d{5}
 * 出生年份 [1-9]\d{3}
 * 出生月份 0[1-9]|1[0-2]
 * 出生日期 0[1-9]|[1-2]\d|3[0-1]
 *
 * @param {*} value - The value to check.
 * @return {Boolean} Return `true` if validated, else `false`.
 * @example
 *
 * idCard('330000199001017865');
 * // => true
 *
 * idCard('33000019900101786X');
 * // => true
 *
 * idCard('330000900101786');
 * // => true
 */
function idCard(value) {
  var pattern = '^[1-9]\\d{7}(0[1-9]|1[0-2])(0[1-9]|[1-2]\\d|3[0-1])\\d{3}$'; // 一代身份证

  var pattern2 = '^[1-9]\\d{5}[1-9]\\d{3}(0[1-9]|1[0-2])(0[1-9]|[1-2]\\d|3[0-1])\\d{3}(\\d|X)$'; // 二代身份证

  var regexp = new RegExp("".concat(pattern, "|").concat(pattern2), 'i');
  return regexp.test(value);
}

/***/ }),

/***/ "./src/check/index.js":
/*!****************************!*\
  !*** ./src/check/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _phone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./phone */ "./src/check/phone.js");
/* harmony import */ var _email__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./email */ "./src/check/email.js");
/* harmony import */ var _postcode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./postcode */ "./src/check/postcode.js");
/* harmony import */ var _isNull__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isNull */ "./src/check/isNull.js");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./number */ "./src/check/number.js");
/* harmony import */ var _money__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./money */ "./src/check/money.js");
/* harmony import */ var _hasChinese__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hasChinese */ "./src/check/hasChinese.js");
/* harmony import */ var _idCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./idCard */ "./src/check/idCard.js");
/* harmony import */ var _ip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ip */ "./src/check/ip.js");
/* harmony import */ var _alipay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./alipay */ "./src/check/alipay.js");
/* harmony import */ var _pwdIntensity__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pwdIntensity */ "./src/check/pwdIntensity.js");
/**
 * 校验库
 *
 * cellphone - 手机校验
 * telphone - 固定电话校验
 * phone - 电话【手机和固定电话】校验
 * email - 邮箱校验
 * postcode - 邮编校验
 * isNull - 空校验
 * isNumber - 数字校验
 * isInteger - 整数校验
 * isDecimal - 小数校验
 * money - 金额【元】判断
 * hasChinese - 中文判断
 * idCard - 身份证校验
 * ip - ip地址校验
 * alipay - 支付宝账号校验
 * pwdIntensity - 弱密码校验
 */











/* harmony default export */ __webpack_exports__["default"] = ({
  cellphone: _phone__WEBPACK_IMPORTED_MODULE_0__["cellphone"],
  telphone: _phone__WEBPACK_IMPORTED_MODULE_0__["telphone"],
  phone: _phone__WEBPACK_IMPORTED_MODULE_0__["phone"],
  email: _email__WEBPACK_IMPORTED_MODULE_1__["default"],
  postcode: _postcode__WEBPACK_IMPORTED_MODULE_2__["default"],
  isNull: _isNull__WEBPACK_IMPORTED_MODULE_3__["default"],
  isNumber: _number__WEBPACK_IMPORTED_MODULE_4__["isNumber"],
  isInteger: _number__WEBPACK_IMPORTED_MODULE_4__["isInteger"],
  isDecimal: _number__WEBPACK_IMPORTED_MODULE_4__["isDecimal"],
  money: _money__WEBPACK_IMPORTED_MODULE_5__["default"],
  hasChinese: _hasChinese__WEBPACK_IMPORTED_MODULE_6__["default"],
  idCard: _idCard__WEBPACK_IMPORTED_MODULE_7__["default"],
  ip: _ip__WEBPACK_IMPORTED_MODULE_8__["default"],
  alipay: _alipay__WEBPACK_IMPORTED_MODULE_9__["default"],
  pwdIntensity: _pwdIntensity__WEBPACK_IMPORTED_MODULE_10__["default"]
}); // todo
// 日期是否正确判断

/***/ }),

/***/ "./src/check/ip.js":
/*!*************************!*\
  !*** ./src/check/ip.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ip; });
/**
 * ip地址校验
 *
 * 分析IP地址的组成特点：0-199、200-249、250-255。
 * 这三种情况可以分开考虑:
 * 1. 250-255：特点：三位数，百位是2，十位是5，个位是0~5，用正则表达式可以写成：25[0-5]
 * 2. 200-249：特点：三位数，百位是2，十位是0~4，个位是0~9，用正则表达式可以写成：2[0-4]\d
 * 3. 0-199：这个可以继续分拆，这样写起来更加简单明了
 * 3.1. 0-9：特点：一位数，个位是0~9，用正则表达式可以写成：\d
 * 3.2. 10-99：特点：二位数，十位是1~9，个位是0~9，用正则表达式可以写成：[1-9]\d
 * 3.3. 100-199：特点：三位数，百位是1，十位是0~9，个位是0~9，用正则表达式可以写成：1\d{2}
 * 于是0-99的正则表达式可以合写为：[1-9]?\d
 * 那么0-199用正则表达式就可以写成：1\d{2}|[1-9]?\d
 * 这样0-255的正则表达式就可以写成：25[0-5]|2[0-4]\d|(1\d{2}|[1-9]?\d)
 *
 * @param {*} value - The value to check.
 * @return {Boolean} Return `true` if validated, else `false`.
 * @example
 *
 * ip('192.168.0.1');
 * // => true
 */
function ip(value) {
  var pattern = '(25[0-5]|2[0-4]\\d|(1\\d{2}|[1-9]?\\d))';
  var regexp = new RegExp("^(".concat(pattern, "\\.){3}").concat(pattern, "$"));
  return regexp.test(value);
}

/***/ }),

/***/ "./src/check/isNull.js":
/*!*****************************!*\
  !*** ./src/check/isNull.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isNull; });
/* harmony import */ var _babel_runtime_corejs2_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/toConsumableArray */ "./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);


/**
 * 空数据校验
 * 空数据集合：undefined, null, ''
 *
 * @param {*} value - The value to check.
 * @param {Array} [others=[]] - The other empty data set.
 * @return {Boolean} Return `true` if validated, else `false`.
 * @example
 *
 * isNull();
 * // => true
 *
 * isNull('null', ['null', '(null)']);
 * // => true
 */
function isNull(value) {
  var others = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var sets = [undefined, null, ''];

  if (others.length > 0) {
    sets.push.apply(sets, _babel_runtime_corejs2_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(others));
  }

  return sets.includes(value);
}

/***/ }),

/***/ "./src/check/money.js":
/*!****************************!*\
  !*** ./src/check/money.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return money; });
/**
 * 金额【元】判断
 * 规则：数字，最多两位小数
 *
 * @param {*} value - The value to check.
 * @return {Boolean} Return `true` if validated, else `false`.
 * @example
 *
 * money('-20');
 * // => true
 *
 * money('20.00');
 * // => true
 *
 * money('20.002');
 * // => false
 *
 * money('002');
 * // => false
 */
function money(value) {
  return /^-?(0|[1-9][0-9]*)(\.\d{1,2})?$/.test(value);
}

/***/ }),

/***/ "./src/check/number.js":
/*!*****************************!*\
  !*** ./src/check/number.js ***!
  \*****************************/
/*! exports provided: isNumber, isInteger, isDecimal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInteger", function() { return isInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDecimal", function() { return isDecimal; });
/**
 * 数字校验
 *
 * @param {*} value - The value to check.
 * @param {Boolean} [scientific=true] - Whether the number of scientific notation including.
 * @return {Boolean} Return `true` if validated, else `false`.
 * @example
 *
 * isNumber('20');
 * // => true
 *
 * isNumber('-20');
 * // => true
 *
 * isNumber('.2');
 * // => false
 *
 * isNumber(.2);
 * // => true
 *
 * isNumber(9.007199254740992e+21);
 * // => true
 *
 * isNumber('9.007199254740992e+21');
 * // => false
 *
 * isNumber(9.007199254740992e+21, false);
 * // => false
 */
function isNumber(value) {
  var scientific = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (typeof value === 'number') {
    return scientific ? true : !/e\+[0-9]+$/.test(value);
  }

  if (typeof value === 'string') {
    return /^-?(0|[1-9][0-9]*)(\.[0-9]+)?$/.test(value);
  }

  return false;
}
/**
 * 整数校验
 * 不兼容科学计数法数字
 *
 * @param {*} value - The value to check.
 * @return {Boolean} Return `true` if validated, else `false`.
 * @example
 *
 * isInteger('20');
 * // => true
 *
 * isInteger('-20');
 * // => true
 *
 * isInteger('0.2');
 * // => false
 *
 * isInteger('020');
 * // => false
 */

function isInteger(value) {
  return /^-?(0|[1-9][0-9]*)$/.test(value);
}
/**
 * 小数校验
 * 不兼容科学计数法数字
 *
 * @param {*} value - The value to check.
 * @return {Boolean} Return `true` if validated, else `false`.
 * @example
 *
 * isDecimal('0.2');
 * // => true
 *
 * isDecimal('-0.2');
 * // => true
 *
 * isDecimal('20');
 * // => false
 *
 * isDecimal('00.2');
 * // => false
 */

function isDecimal(value) {
  return /^-?(0|[1-9][0-9]*)\.[0-9]+$/.test(value);
}

/***/ }),

/***/ "./src/check/phone.js":
/*!****************************!*\
  !*** ./src/check/phone.js ***!
  \****************************/
/*! exports provided: cellphone, telphone, phone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cellphone", function() { return cellphone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "telphone", function() { return telphone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phone", function() { return phone; });
/**
 * 手机校验
 * 规则：11位数字，首位1
 *
 * @param {*} value - The value to check.
 * @return {Boolean} Return `true` if validated, else `false`.
 * @example
 *
 * cellphone('13456789012');
 * // => true
 */
function cellphone(value) {
  return /^1\d{10}$/.test(value);
}
/**
 * 固定电话校验
 * 规则：3-4位区号，7-8位直拨号码
 *
 * @param {*} value - The value to check.
 * @return {Boolean} Return `true` if validated, else `false`.
 * @example
 *
 * telphone('0571-85735888');
 * // => true
 *
 * telphone('057185735888');
 * // => true
 *
 * telphone('85735888');
 * // => true
 */

function telphone(value) {
  return /^(\d{3,4}-?)?\d{7,8}$/.test(value);
}
/**
 * 电话【手机和固定电话】校验
 *
 * @param {*} vlaue - The value to check.
 * @return {Boolean} Return `true` if validated, else `false`.
 * @example
 *
 * phone('057185735888');
 * // => true
 *
 * phone('13456789012');
 * // => true
 */

function phone(value) {
  return cellphone(value) || telphone(value);
}

/***/ }),

/***/ "./src/check/postcode.js":
/*!*******************************!*\
  !*** ./src/check/postcode.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postcode; });
/**
 * 邮编校验
 * 规则：6位数字
 *
 * @param {*} value - The value to check.
 * @return {Boolean} Return `true` if validated, else `false`.
 *
 * postcode('310000');
 * // => true
 */
function postcode(value) {
  return /^\d{6}$/.test(value);
}

/***/ }),

/***/ "./src/check/pwdIntensity.js":
/*!***********************************!*\
  !*** ./src/check/pwdIntensity.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pwdIntensity; });
/**
 * 弱密码校验
 *
 *（1）位数为6-32位，包括6位或32位
 *（2）包含以下任意两种或以上组成元素：
 *    ① 数字
 *    ② 大写字母
 *    ③ 小写字母
 *    ④ 符号【键盘上可以打出来的符号】
 *
 * @param {*} value - 密码
 * @return {Number} intensity - 密码强度 1-弱|2-中|3-强
 * @example
 *
 * pwdIntensity('123456');
 * // => 1
 *
 * pwdIntensity('123456abc');
 * // => 2
 *
 * pwdIntensity('123456abcABC');
 * // => 3
 */
function pwdIntensity(value) {
  if (!value) return 1; // 密码长度

  var len = value.length; // 规则满足条数

  var rule = 0;
  /* ---------- 规则一校验 ----------*/
  // 位数为6-32位，包括6位或32位；

  if (len < 6 || len > 32) return 1;
  /* ---------- 规则二校验 ----------*/
  // 数字

  if (/[0-9]/.test(value)) rule += 1; // 大写字母

  if (/[A-Z]/.test(value)) rule += 1; // 小写字母

  if (/[a-z]/.test(value)) rule += 1; // 包含以下特殊符号

  if (/[`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]/.test(value)) rule += 1;

  switch (rule) {
    case 0:
    case 1:
      // 弱：非有效密码，即没有同时满足有效定义的（1）和（2）
      return 1;

    case 2:
      // 中：有效密码，即满足了有效定义的（1），以及（2）中的任意两种组合
      return 2;

    default:
      // 强：有效密码，即满足了有效定义的（1），以及（2）中的任意三种组合或所有
      return 3;
  }
}

/***/ }),

/***/ "./src/common/cookie.js":
/*!******************************!*\
  !*** ./src/common/cookie.js ***!
  \******************************/
/*! exports provided: getCookie, setCookie, delCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delCookie", function() { return delCookie; });
/**
 * cookie操作
 *
 * getCookie - 读取cookie
 * setCookie - 创建cookie
 * delCookie - 删除cookie
 */

/**
 * 读取cookie
 *
 * @param {String} name
 * @returns {String}
 */
function getCookie(name) {
  var reg = new RegExp("(^|\\s)".concat(name, "=([^;]*)(;|$)"));
  var result;

  try {
    result = document.cookie.match(reg)[2];
    result = decodeURIComponent(result);
  } catch (e) {
    result = null;
  }

  return result;
}
/**
 * 创建cookie
 *
 * @param {String} name - cookie名称
 * @param {String} value - cookie字符串值
 * @param {Object} [options={}] - 配置
 * @param {String} [options.domain] - 域名
 * @param {String} [options.path] - 路径
 * @param {Number} [options.maxAge] - 过期时间【单位是秒】
 * @param {Date} [options.expires] - 失效时间
 * @param {Boolean} [options.httpOnly] - 程序是否可读取到cookie信息【防止XSS攻击】
 * @param {Boolean} [options.secure] - 安全标志
 * @param {String} [options.sameSite] - 跨域安全机制
 * @example
 *
 * // 一天后过期
 * setCookie('name', 'value', {
 *   maxAge: 60 * 60 * 24,
 * });
 */

function setCookie(name, value) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  if (!name) return;
  var str = "".concat(name, "=").concat(encodeURIComponent(value));

  if (options.maxAge) {
    var exp = new Date();
    exp.setTime(exp.getTime() + options.maxAge * 1000);
    options.expires = exp;
  }

  if (options.domain) {
    str += "; Domain=".concat(options.domain);
  }

  if (options.path) {
    str += "; Path=".concat(options.path);
  }

  if (options.expires) {
    str += "; Expires=".concat(options.expires.toUTCString());
  }

  if (options.httpOnly) {
    str += '; HttpOnly';
  }

  if (options.secure) {
    str += '; Secure';
  }

  if (options.sameSite) {
    if (options.sameSite.search(/^strict$/i) !== -1) {
      str += '; SameSite=Strict';
    } else if (options.sameSite.search(/^lax$/i) !== -1) {
      str += '; SameSite=Lax';
    }
  }

  document.cookie = str;
}
/**
 * 删除cookie
 *
 * @param {String} name
 */

function delCookie(name) {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var value = getCookie(name);

  if (value !== null) {
    document.cookie = "".concat(name, "=").concat(value, "; Expires=").concat(exp.toUTCString());
  }
}

/***/ }),

/***/ "./src/common/document.js":
/*!********************************!*\
  !*** ./src/common/document.js ***!
  \********************************/
/*! exports provided: getWinHeight, getWinWidth, getWinScrollHeight, getWinScrollWidth, getWinScrollTop, getWinScrollLeft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWinHeight", function() { return getWinHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWinWidth", function() { return getWinWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWinScrollHeight", function() { return getWinScrollHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWinScrollWidth", function() { return getWinScrollWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWinScrollTop", function() { return getWinScrollTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWinScrollLeft", function() { return getWinScrollLeft; });
/**
 * 文档操作
 *
 * getWinHeight - 获取窗口可视区的高度
 * getWinWidth - 获取窗口可视区的宽度
 * getWinScrollHeight - 获取窗口可视区内容的总高度
 * getWinScrollWidth - 获取窗口可视区内容的总宽度
 * getWinScrollTop - 获取窗口可视区滚动条垂直偏移
 * getWinScrollLeft - 获取窗口可视区滚动条水平偏移
 */

/**
 * 获取窗口可视区的高度
 *
 * @returns {Number}
 */
function getWinHeight() {
  return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
}
/**
 * 获取窗口可视区的宽度
 *
 * @returns {Number}
 */

function getWinWidth() {
  return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
}
/**
 * 获取窗口可视区内容的总高度
 *
 * @returns {Number}
 */

function getWinScrollHeight() {
  return document.documentElement.scrollHeight || document.body.scrollHeight;
}
/**
 * 获取窗口可视区内容的总宽度
 *
 * @returns {Number}
 */

function getWinScrollWidth() {
  return document.documentElement.scrollWidth || document.body.scrollWidth;
}
/**
 * 获取窗口可视区滚动条垂直偏移
 *
 * @returns {Number}
 */

function getWinScrollTop() {
  return document.documentElement.scrollTop || document.body.scrollTop;
}
/**
 * 获取窗口可视区滚动条水平偏移
 *
 * @returns {Number}
 */

function getWinScrollLeft() {
  return document.documentElement.scrollLeft || document.body.scrollLeft;
}

/***/ }),

/***/ "./src/common/event.js":
/*!*****************************!*\
  !*** ./src/common/event.js ***!
  \*****************************/
/*! exports provided: addEvent, removeEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEvent", function() { return addEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEvent", function() { return removeEvent; });
/**
 * 事件监听
 *
 * addEvent - 添加事件监听
 * removeEvent - 移除事件监听
 */

/**
 * 添加事件监听
 *
 * @param {Element} target - DOM元素
 * @param {String} type - 事件类型
 * @param {Function} handler - 事件触发时执行的函数
 * @param {Boolean} [useCapture=false] - 指定事件是否在捕获或冒泡阶段执行【true-捕获，false-冒泡】
 * @example
 *
 * const handler = () => {
 *   console.log('onload');
 * };
 * addEvent(window, 'load', handler);
 */
function addEvent(target, type, handler) {
  var useCapture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (target.addEventListener) {
    // DOM2.0
    target.addEventListener(type, handler, useCapture);
  } else if (target.attachEvent) {
    // IE5+
    target.attachEvent("on".concat(type), handler);
  } else {
    // DOM 0
    target["on".concat(type)] = handler;
  }
}
/**
 * 移除事件监听
 *
 * @param {Element} target - DOM元素
 * @param {String} type - 事件类型
 * @param {Function} handler - 事件触发时执行的函数
 * @param {Boolean} [useCapture=false] - 指定事件是否在捕获或冒泡阶段执行【true-捕获，false-冒泡】
 * @example
 *
 * const handler = () => {
 *   console.log('onload');
 * };
 * removeEvent(window, 'load', handler);
 */

function removeEvent(target, type, handler) {
  var useCapture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (target.removeEventListener) {
    // DOM2.0
    target.removeEventListener(type, handler, useCapture);
  } else if (target.detachEvent) {
    // IE5+
    target.detachEvent("on".concat(type), handler);
  } else {
    // DOM 0
    target["on".concat(type)] = null;
  }
}

/***/ }),

/***/ "./src/common/index.js":
/*!*****************************!*\
  !*** ./src/common/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cookie */ "./src/common/cookie.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event */ "./src/common/event.js");
/* harmony import */ var _document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./document */ "./src/common/document.js");
/* harmony import */ var _selectText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectText */ "./src/common/selectText.js");
/**
 * 通用方法
 *
 * generateUUID - 生成uuid
 * getParameter - 获取url中的参数
 * loadScript - 动态加载js
 * stopPropagation - 阻止事件冒泡
 * preventDefault - 阻止事件默认行为
 * addEvent - 添加事件监听
 * removeEvent - 移除事件监听
 * getCookie - 读取cookie
 * setCookie - 创建cookie
 * delCookie - 删除cookie
 * getWinHeight - 获取窗口可视区的高度
 * getWinWidth - 获取窗口可视区的宽度
 * getWinScrollHeight - 获取窗口可视区内容的总高度
 * getWinScrollWidth - 获取窗口可视区内容的总宽度
 * getWinScrollTop - 获取窗口可视区滚动条垂直偏移
 * getWinScrollLeft - 获取窗口可视区滚动条水平偏移
 * selectText - 选中文本
 */




/**
 * 生成uuid
 *
 * @return uuid
 * @example
 *
 * generateUUID();
 * // => cd2f4b1f-daf2-451c-a9a6-db716c1d82bb
 */

function generateUUID() {
  /* eslint-disable no-bitwise */

  /* eslint-disable no-mixed-operators */
  var d = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : r & 0x3 | 0x8).toString(16);
  });
  return uuid;
}
/**
 * 获取url中的参数
 *
 * @param {String} name - 参数名
 * @param {String} [url=window.location.search] - 链接
 * @return {String} 参数值
 * @example
 *
 * getParameter('name', 'http://www.w3school.com?name=xxx');
 * // => xxx
 *
 * getParameter('name', 'http://www.w3school.com?name=');
 * // => ''
 *
 * getParameter('name', 'http://www.w3school.com');
 * // => null
 */


function getParameter(name) {
  var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.location.search;
  var regexp = new RegExp("[?&]".concat(name, "=([^&#]*)"), 'i');
  var result = regexp.exec(url);
  return result === null ? null : decodeURIComponent(result[1]);
}
/**
 * 动态加载js
 *
 * @param {String} url - js链接地址
 * @param {Function} [callback] - 回调
 * @example
 *
 * loadScript('https://xxx.js', () => {
 *  console.log('loaded');
 * });
 */


function loadScript(url, callback) {
  var script = document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.setAttribute('charset', 'utf-8');
  script.setAttribute('src', url);
  document.getElementsByTagName('head')[0].appendChild(script);

  if (script.readyState) {
    // IE
    script.onreadystatechange = function () {
      if (/loaded|complete/.test(script.readyState)) {
        script.onreadystatechange = null;

        if (callback && typeof callback === 'function') {
          callback();
        }
      }
    };
  } else {
    script.onload = function () {
      script.onload = null;

      if (callback && typeof callback === 'function') {
        callback();
      }
    };
  }
}
/**
 * 阻止事件冒泡
 *
 * @param {Object} evt - event
 */


function stopPropagation(evt) {
  if (!evt) return;

  if (evt.stopPropagation) {
    evt.stopPropagation();
  } else {
    // IE
    window.event.cancelBubble = true;
  }
}
/**
 * 阻止事件默认行为
 *
 * @param {Object} evt - event
 */


function preventDefault(evt) {
  if (!evt) return;

  if (evt.preventDefault) {
    evt.preventDefault();
  } else {
    // IE
    window.event.returnValue = false;
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  generateUUID: generateUUID,
  getParameter: getParameter,
  loadScript: loadScript,
  stopPropagation: stopPropagation,
  preventDefault: preventDefault,
  addEvent: _event__WEBPACK_IMPORTED_MODULE_1__["addEvent"],
  removeEvent: _event__WEBPACK_IMPORTED_MODULE_1__["removeEvent"],
  getCookie: _cookie__WEBPACK_IMPORTED_MODULE_0__["getCookie"],
  setCookie: _cookie__WEBPACK_IMPORTED_MODULE_0__["setCookie"],
  delCookie: _cookie__WEBPACK_IMPORTED_MODULE_0__["delCookie"],
  getWinHeight: _document__WEBPACK_IMPORTED_MODULE_2__["getWinHeight"],
  getWinWidth: _document__WEBPACK_IMPORTED_MODULE_2__["getWinWidth"],
  getWinScrollHeight: _document__WEBPACK_IMPORTED_MODULE_2__["getWinScrollHeight"],
  getWinScrollWidth: _document__WEBPACK_IMPORTED_MODULE_2__["getWinScrollWidth"],
  getWinScrollTop: _document__WEBPACK_IMPORTED_MODULE_2__["getWinScrollTop"],
  getWinScrollLeft: _document__WEBPACK_IMPORTED_MODULE_2__["getWinScrollLeft"],
  selectText: _selectText__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/common/selectText.js":
/*!**********************************!*\
  !*** ./src/common/selectText.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return selectText; });
/**
 * 选中文本
 *
 * @param {Element} textNode
 * @param {Number} [start=0] - 起始位置
 * @param {Number} [length] - 长度
 * @example
 *
 * 鼠标停留在‘元’前面
 * <input type="text" value="12元" />
 * selectText(document.querySelector('input'), 2, 0);
 *
 * 选中所有
 * <input type="text" value="123456" />
 * selectText(document.querySelector('input'));
 */
function selectText(textNode) {
  var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var length = arguments.length > 2 ? arguments[2] : undefined;

  if (typeof length === 'undefined') {
    length = textNode.value.length;
  }

  if (textNode.setSelectionRange) {
    // 非IE
    textNode.setSelectionRange(start, start + length);
  } else if (textNode.createTextRange) {
    // IE
    var range = textNode.createTextRange();
    range.collapse(true);
    range.moveStart('character', start);
    range.moveEnd('character', length);
    range.select();
  }

  textNode.focus();
}

/***/ }),

/***/ "./src/convert/bytesToSize.js":
/*!************************************!*\
  !*** ./src/convert/bytesToSize.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return bytesToSize; });
/* harmony import */ var _check_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../check/number */ "./src/check/number.js");
/**
 * 数据容量单位换算
 *
 * @param {Number} bytes - 数据容量
 * @param {Number} [digit=1] - 保留小数位数
 * @param {String} [format='0B'] - 格式化
 * @returns {String}
 * @example
 *
 * bytesToSize(10240);
 * // => 10.0KB
 *
 * bytesToSize(1024 * 1024, 2);
 * // => 1.00MB
 *
 * bytesToSize('32g');
 * // => 0B
 */

function bytesToSize(bytes) {
  var digit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var format = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0B';

  if (!Object(_check_number__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(bytes)) {
    return format;
  }

  if (Number(bytes) === 0 || bytes < 0) {
    return '0B';
  }

  if (bytes < 1) {
    return "".concat(bytes, "B");
  }

  var k = 1024;
  var units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB', 'BB', 'NB', 'DB', 'CB'];
  var uLen = units.length;
  var i = Math.floor(Math.log(bytes) / Math.log(k));

  if (i < uLen) {
    return "".concat((bytes / Math.pow(k, i)).toFixed(digit)).concat(units[i]);
  }

  return "".concat((bytes / Math.pow(k, uLen - 1)).toFixed(digit)).concat(units[uLen - 1]);
}

/***/ }),

/***/ "./src/convert/currencyToCn.js":
/*!*************************************!*\
  !*** ./src/convert/currencyToCn.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return currencyToCn; });
/* harmony import */ var _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/slicedToArray */ "./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _check_isNull__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../check/isNull */ "./src/check/isNull.js");
/* harmony import */ var _check_number__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../check/number */ "./src/check/number.js");
/* harmony import */ var _numberToCn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./numberToCn */ "./src/convert/numberToCn.js");


/**
 * 数字金额转换为中文人民币大写
 * 最大处理数字：999999999999.99
 *
 * 中文大写金额数字到“元”为止的，在“元”之后、应写“整”(或“正”)字；
 * 在“角”之后，可以不写“整”(或“正”)字；
 * 大写金额数字有“分”的，“分”后面不写“整”(或“正”)字。
 * 阿拉伯数字小写金额数字中有“0”时，中文大写应按照汉语语言规律、金额数字构成和防止涂改的要求进行书写。举例如下：
 *   1、阿拉伯数字中间有“0”时，中文大写要写“零”字，如￥1409.50应写成人民币壹仟肆佰零玖元伍角。
 *   2、阿拉伯数字中间连续有几个“0”时，中文大写金额中间可以只写一个“零”字，如￥6007.14应写成人民币陆仟零柒元壹角肆分。
 *   3、阿拉伯金额数字万位和元位是“0”，或者数字中间连续有几个“0”，万位、元位也是“0”但千位、角位不是“0”时，中文大写金额中可以只写一个零字，也可以不写“零”字。
 *     如￥1680.32应写成人民币壹仟陆佰捌拾元零叁角贰分，或者写成人民币壹仟陆佰捌拾元叁角贰分。
 *     又如￥107000.53应写成人民币壹拾万柒仟元零伍角叁分，或者写成人民币壹拾万零柒仟元伍角叁分。
 *   4、阿拉伯金额数字角位是“0”而分位不是“0”时，中文大写金额“元”后面应写“零”字。如￥16409.02应写成人民币壹万陆仟肆佰零玖元零贰分。
 *
 * @param {Number} money - 数字金额
 * @param {String} [format='零元整'] - 格式化
 * @returns {String} 中文金额
 * @example
 *
 * currencyToCn(0);
 * // => 零元整
 *
 * currencyToCn();
 * // => 零元整
 *
 * currencyToCn('', '--');
 * // => --
 *
 * currencyToCn('1x');
 * // => 数据错误
 *
 * currencyToCn(100000000);
 * // => 壹亿元整
 *
 * currencyToCn(100000001);
 * // => 壹亿零壹元整
 *
 * currencyToCn(999999999999.99);
 * // => 玖仟玖佰玖拾玖亿玖仟玖佰玖拾玖万玖仟玖佰玖拾玖元玖角玖分
 *
 * currencyToCn(1.01);
 * // => 壹元零壹分
 *
 * currencyToCn(1.10);
 * // => 壹元壹角
 */



function currencyToCn(money) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '零元整';

  if (Object(_check_isNull__WEBPACK_IMPORTED_MODULE_1__["default"])(money)) {
    return format;
  }

  if (!Object(_check_number__WEBPACK_IMPORTED_MODULE_2__["isNumber"])(money, false) || Number(money) < 0) {
    return '数据错误';
  }

  var digits = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']; // 中文数字

  var decRadices = ['角', '分']; // 小数部分扩展单位

  var cnDollar = '元'; // 金额整数部分后面跟的字符

  var cnInteger = '整'; // 整数金额时后面跟的字符

  var cnMaxResult = '超大金额'; // 超过最大数的返回值

  var maxNum = 999999999999.99; // 最大的处理数字

  var integral = ''; // 金额整数部分

  var decimal = ''; // 金额小数部分

  var chineseStr = ''; // 返回的中文金额字符串

  money = money.toString(); // Greater than the maximum number.

  if (Number(money) > maxNum) {
    return cnMaxResult;
  }

  if (money.indexOf('.') === -1) {
    integral = money;
  } else {
    var _money$split = money.split('.');

    var _money$split2 = _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_money$split, 2);

    integral = _money$split2[0];
    decimal = _money$split2[1];
    // cut down redundant decimal digits that are after the second.
    decimal = decimal.substr(0, 2);
  } // Process integral part if it is larger than 0:


  if (Number(integral) > 0) {
    chineseStr += Object(_numberToCn__WEBPACK_IMPORTED_MODULE_3__["default"])(integral);
    chineseStr += cnDollar;
  } // Process decimal part:


  if (decimal !== '') {
    for (var i = 0, decLen = decimal.length; i < decLen; i++) {
      var d = decimal[i]; // 当前数字

      var ds = decimal.substr(-1); // 小数末尾数值

      if (d === '0') {
        // 特殊数据处理：x.0【不显示小数】、 x.00【不显示小数】、 x.10【不显示分位】
        if (ds !== '0') {
          chineseStr += digits[Number(d)];
        }
      } else {
        chineseStr += digits[Number(d)] + decRadices[i];
      }
    }
  }

  if (chineseStr === '') {
    // 0、 0.0、 0.00
    chineseStr += digits[0] + cnDollar + cnInteger;
  } else if (decimal === '' || decimal === '0' || decimal === '00') {
    // 整数、 x.0、 x.00
    chineseStr += cnInteger;
  }

  return chineseStr;
} // 0 零元整
// 0.0 零元整
// 0.00 零元整
// 0.01 零壹分
// 0.10 壹角
// 1.01 壹元零壹分
// 1.10 壹元壹角
// 1.00 壹元整
// 1.0 壹元整
// 100 壹佰元整【省略零】
// 10000 壹万元整
// 10001 壹万零壹元整【合并零】
// 100001 壹拾万零壹元整
// 10000010 壹仟万零壹拾元整
// 100000000 壹亿元整【省略中间所有零】
// 100000001 壹亿零壹元整【中间省略万】
// 999999999999.99 玖仟玖佰玖拾玖亿玖仟玖佰玖拾玖万玖仟玖佰玖拾玖元玖角玖分

/***/ }),

/***/ "./src/convert/fenToYuan.js":
/*!**********************************!*\
  !*** ./src/convert/fenToYuan.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return fenToYuan; });
/* harmony import */ var _check_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../check/number */ "./src/check/number.js");
/**
 * 分->元
 * 为防止浮点数运算精度丢失，故采用字符串形式解析
 *
 * @param {Number} money - 分
 * @param {String} [format='0.00'] - 格式化
 * @param {Boolean} [cutZero=false] - 是否去掉小数末尾多余的零
 * @returns {String} 元
 * @example
 *
 * fenToYuan(2000);
 * // => 20.00
 *
 * fenToYuan(2000, '0', true); // 去掉小数末尾多余的零
 * // => 20
 *
 * fenToYuan(2000.45); // 非正确格式，舍去小数部分
 * // => 20.00
 *
 * fenToYuan();
 * // => 0.00
 *
 * fenToYuan(null, '--');
 * // => --
 */

function fenToYuan(money) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0.00';
  var cutZero = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (!Object(_check_number__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(money, false)) {
    return format;
  }

  var str = money.toString();
  var result = '';

  if (str[0] === '-') {
    result += '-';
    str = str.substr(1);
  }

  if (str.indexOf('.') > -1) {
    // Trim decimal at the ending.
    str = str.replace(/\.[0-9]+$/, '');
  }

  var len = str.length;

  switch (len) {
    case 1:
      result += "0.0".concat(str);
      break;

    case 2:
      result += "0.".concat(str);
      break;

    default:
      result += "".concat(str.substr(0, len - 2), ".").concat(str.substr(len - 2));
  }

  if (cutZero) {
    // Cut zero at the ending.
    result = result.match(/-?[0-9]+(\.[0-9]*[1-9])?/)[0];
  }

  return result;
}

/***/ }),

/***/ "./src/convert/index.js":
/*!******************************!*\
  !*** ./src/convert/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bytesToSize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bytesToSize */ "./src/convert/bytesToSize.js");
/* harmony import */ var _fenToYuan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fenToYuan */ "./src/convert/fenToYuan.js");
/* harmony import */ var _yuanToFen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./yuanToFen */ "./src/convert/yuanToFen.js");
/* harmony import */ var _numberToCn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./numberToCn */ "./src/convert/numberToCn.js");
/* harmony import */ var _currencyToCn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./currencyToCn */ "./src/convert/currencyToCn.js");
/**
 * 数据转换
 *
 * bytesToSize - 数据容量单位换算
 * fenToYuan - 分转化成元
 * yuanToFen - 元转化为分
 * numberToCn - 阿拉伯数字转中文
 * currencyToCn - 数字金额转换为中文人民币大写
 */





/* harmony default export */ __webpack_exports__["default"] = ({
  bytesToSize: _bytesToSize__WEBPACK_IMPORTED_MODULE_0__["default"],
  fenToYuan: _fenToYuan__WEBPACK_IMPORTED_MODULE_1__["default"],
  yuanToFen: _yuanToFen__WEBPACK_IMPORTED_MODULE_2__["default"],
  numberToCn: _numberToCn__WEBPACK_IMPORTED_MODULE_3__["default"],
  currencyToCn: _currencyToCn__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/convert/numberToCn.js":
/*!***********************************!*\
  !*** ./src/convert/numberToCn.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return numberToCn; });
/* harmony import */ var _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/slicedToArray */ "./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _check_number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../check/number */ "./src/check/number.js");


/**
 * 阿拉伯数字转中文
 * 处理数字不超过1000000000000【壹万亿】
 *
 * 多位数读法原则【按照四位分级的原则】：
 * 1. 四位以内的数，按照数位顺序，从高位读起．
 * 2. 四位以上的数，先从右向左四位分级，然后从最高级起，依次读亿级、万级、个级。读出各级里的数和它们的级名。
 *    每一级的读法和个级的读法相同。
 *    亿级里的数，按照个级的数的读法来读，再在后面加上一个“亿”字；万级里的数，按照个级的数的读法来读，再在后面加上一个“万”字；
 * 3. 每级末尾不管有几个“0”，都不读；其他数位上有一个“0”或几个“0”，都只读一个零。
 *
 * @param {Number} value - 阿拉伯数字
 * @returns {String} 中文数字
 */

function numberToCn(value) {
  if (!Object(_check_number__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(value, false) || Number(value) < 0) {
    return '数据错误';
  }

  value = value.toString(); // 边界值校验【小于壹万亿】

  if (Number(value) >= 1000000000000) {
    return '超大数字';
  }

  var digits = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']; // 中文数字

  var radices = ['', '拾', '佰', '仟']; // 基本单位

  var bigRadices = ['', '万', '亿']; // 数级单位

  var point = '点';

  var _value$split = value.split('.'),
      _value$split2 = _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_value$split, 2),
      integral = _value$split2[0],
      // 整数部分
  decimal = _value$split2[1];

  var result = ''; // 返回值
  // Process integral part:

  if (Number(integral) > 0) {
    var zeroCount = 0;

    for (var i = 0, intLen = integral.length; i < intLen; i++) {
      var d = integral[i]; // 当前数字

      var p = intLen - i - 1; // 当前数字索引

      var m = p % 4; // modulo

      if (d === '0') {
        zeroCount++;
      } else {
        if (zeroCount > 0) {
          result += digits[0]; // 多个零合并显示
        }

        zeroCount = 0;
        result += digits[Number(d)] + radices[m];
      } // 数级单位处理【若当前数级值为零，数级单位不读取】


      if (m === 0 && zeroCount < 4) {
        result += bigRadices[p / 4];
        zeroCount = 0;
      }
    }
  } else {
    result += digits[0];
  } // Process decimal part:


  if (decimal !== undefined) {
    result += point;

    for (var _i = 0, decLen = decimal.length; _i < decLen; _i++) {
      var _d = decimal[_i]; // 当前数字

      result += digits[Number(_d)];
    }
  }

  return result;
}

/***/ }),

/***/ "./src/convert/yuanToFen.js":
/*!**********************************!*\
  !*** ./src/convert/yuanToFen.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return yuanToFen; });
/* harmony import */ var _check_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../check/number */ "./src/check/number.js");
/**
 * 元->分
 * 为防止浮点数运算精度丢失，故采用字符串形式解析
 *
 * @param {Number} money - 元
 * @param {String} [format='0'] - 格式化
 * @returns {String} 分
 * @example
 *
 * yuanToFen(20);
 * // => 2000
 *
 * yuanToFen(0.02);
 * // => 2
 *
 * yuanToFen(0.002);
 * // => 0
 *
 * yuanToFen();
 * // => 0
 *
 * yuanToFen(null, '--');
 * // => --
 */

function yuanToFen(money) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0';

  if (!Object(_check_number__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(money, false)) {
    return format;
  }

  var str = money.toString();
  var result = '';

  if (str.indexOf('.') > -1) {
    var strArr = str.split('.');
    var len = strArr[1].length;

    switch (len) {
      case 1:
        // 特殊数据：0.0 => 000、 0.1 => 010
        result = "".concat(strArr[0]).concat(strArr[1], "0");
        break;

      case 2:
        // 特殊数据：0.00 => 000、 0.01 => 001、 0.10 => 010
        result = str.replace('.', '');
        break;

      default:
        // 只保留两位小数
        // 特殊数据：0.000 => 000、 0.001 => 000、 0.010 => 001、 0.101 => 010
        result = "".concat(strArr[0]).concat(strArr[1].substr(0, 2));
    }
  } else {
    result = "".concat(str, "00");
  } // 特殊数据处理：000 => 0、 001 => 1、 010 => 10


  result = result.replace(/^(-?)(0{1,2})/, '$1'); // Trim zeros at the beginning.

  return result;
}

/***/ }),

/***/ "./src/crypt/index.js":
/*!****************************!*\
  !*** ./src/crypt/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_number_is_nan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/number/is-nan */ "./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/core-js/number/is-nan.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_number_is_nan__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_number_is_nan__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);




/**
 * base64加密/解密【用于暴露在url中的重要参数】
 * 索引表已做特殊处理
 *
 * encode - 加密
 * decode - 解密
 */

/* eslint-disable no-bitwise */
// 索引表
// ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/
var keyStr = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_='; // UTF-8 encoding

function utf8Encode(value) {
  var utftext = '';
  var string = value.replace(/\r\n/g, '\n');

  for (var n = 0, len = string.length; n < len; n++) {
    var c = string.charCodeAt(n);

    if (c < 128) {
      utftext += String.fromCharCode(c);
    } else if (c > 127 && c < 2048) {
      utftext += String.fromCharCode(c >> 6 | 192);
      utftext += String.fromCharCode(c & 63 | 128);
    } else {
      utftext += String.fromCharCode(c >> 12 | 224);
      utftext += String.fromCharCode(c >> 6 & 63 | 128);
      utftext += String.fromCharCode(c & 63 | 128);
    }
  }

  return utftext;
} // UTF-8 decoding


function utf8Decode(utftext) {
  var string = '';
  var i = 0;
  var c = 0;
  var c2 = 0;
  var c3 = 0;

  while (i < utftext.length) {
    c = utftext.charCodeAt(i);

    if (c < 128) {
      string += String.fromCharCode(c);
      i++;
    } else if (c > 191 && c < 224) {
      c2 = utftext.charCodeAt(i + 1);
      string += String.fromCharCode((c & 31) << 6 | c2 & 63);
      i += 2;
    } else {
      c2 = utftext.charCodeAt(i + 1);
      c3 = utftext.charCodeAt(i + 2);
      string += String.fromCharCode((c & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
      i += 3;
    }
  }

  return string;
}

var Crypt = function Crypt() {
  _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Crypt);

  _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "encode", function (value) {
    var output = '';
    var chr1;
    var chr2;
    var chr3;
    var enc1;
    var enc2;
    var enc3;
    var enc4;
    var i = 0;
    var input = utf8Encode(value);

    while (i < input.length) {
      chr1 = input.charCodeAt(i++);
      chr2 = input.charCodeAt(i++);
      chr3 = input.charCodeAt(i++);
      enc1 = chr1 >> 2;
      enc2 = (chr1 & 3) << 4 | chr2 >> 4;
      enc3 = (chr2 & 15) << 2 | chr3 >> 6;
      enc4 = chr3 & 63;

      if (_babel_runtime_corejs2_core_js_number_is_nan__WEBPACK_IMPORTED_MODULE_0___default()(chr2)) {
        enc3 = 64;
        enc4 = 64;
      } else if (_babel_runtime_corejs2_core_js_number_is_nan__WEBPACK_IMPORTED_MODULE_0___default()(chr3)) {
        enc4 = 64;
      }

      output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4);
    }

    return output;
  });

  _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "decode", function (value) {
    var output = '';
    var chr1;
    var chr2;
    var chr3;
    var enc1;
    var enc2;
    var enc3;
    var enc4;
    var i = 0;
    var input = value.replace(/[^A-Za-z0-9\-_=]/g, '');

    while (i < input.length) {
      enc1 = keyStr.indexOf(input.charAt(i++));
      enc2 = keyStr.indexOf(input.charAt(i++));
      enc3 = keyStr.indexOf(input.charAt(i++));
      enc4 = keyStr.indexOf(input.charAt(i++));
      chr1 = enc1 << 2 | enc2 >> 4;
      chr2 = (enc2 & 15) << 4 | enc3 >> 2;
      chr3 = (enc3 & 3) << 6 | enc4;
      output += String.fromCharCode(chr1);

      if (enc3 !== 64) {
        output += String.fromCharCode(chr2);
      }

      if (enc4 !== 64) {
        output += String.fromCharCode(chr3);
      }
    }

    output = utf8Decode(output);
    return output;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (new Crypt());

/***/ }),

/***/ "./src/floatUtil/index.js":
/*!********************************!*\
  !*** ./src/floatUtil/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _check_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../check/number */ "./src/check/number.js");
/**
 * 浮点数运算【解决精度问题】
 *
 * add - 加法
 * subtract - 减法
 * multiply - 乘法
 * divide - 除法
 */

/* eslint-disable no-mixed-operators */

/**
 * 通用运算
 *
 * @param {Number} arg1 - 运算数1
 * @param {Number} arg2 - 运算数2
 * @param {String} type - 运算类型【add-加法、subtract-减法、divide-除法】
 * @returns {Number} 运算结果
 */

function operation(arg1, arg2, type) {
  var r1 = arg1.toString();
  var r2 = arg2.toString();
  var result;
  var t1;
  var t2;

  try {
    t1 = r1.split('.')[1].length;
  } catch (e) {
    t1 = 0;
  }

  try {
    t2 = r2.split('.')[1].length;
  } catch (e) {
    t2 = 0;
  }

  var m = Math.pow(10, Math.max(t1, t2));
  var cm = Math.pow(10, Math.abs(t1 - t2));
  r1 = Number(r1.replace('.', ''));
  r2 = Number(r2.replace('.', ''));

  if (t1 > t2) {
    r2 *= cm;
  } else if (t1 < t2) {
    r1 *= cm;
  }

  switch (type) {
    case 'add':
      result = (r1 + r2) / m;
      break;

    case 'subtract':
      result = (r1 - r2) / m;
      break;

    case 'divide':
      result = r1 / r2;
      break;
    // no default
  }

  return result;
}
/**
 * 乘法
 *
 * @param {Number} arg1 - 运算数1
 * @param {Number} arg2 - 运算数2
 * @returns {Number} 运算结果
 */


function _multiply(arg1, arg2) {
  var r1 = arg1.toString();
  var r2 = arg2.toString();
  var m = 0;

  try {
    m += r1.split('.')[1].length;
  } catch (e) {
    m += 0;
  }

  try {
    m += r2.split('.')[1].length;
  } catch (e) {
    m += 0;
  }

  return Number(r1.replace('.', '')) * Number(r2.replace('.', '')) / Math.pow(10, m);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  /**
   * 加法
   *
   * @param {Number} arg1 - 运算数1
   * @param {Number} arg2 - 运算数2
   * @param {String} [format=''] - 格式化
   * @returns {Number|String} 运算结果
   */
  add: function add(arg1, arg2) {
    var format = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    if (Object(_check_number__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(arg1, false) && Object(_check_number__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(arg2, false)) {
      return operation(arg1, arg2, 'add');
    }

    return format;
  },

  /**
   * 减法
   *
   * @param {Number} arg1 - 运算数1
   * @param {Number} arg2 - 运算数2
   * @param {String} [format=''] - 格式化
   * @returns {Number|String} 运算结果
   */
  subtract: function subtract(arg1, arg2) {
    var format = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    if (Object(_check_number__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(arg1, false) && Object(_check_number__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(arg2, false)) {
      return operation(arg1, arg2, 'subtract');
    }

    return format;
  },

  /**
   * 乘法
   *
   * @param {Number} arg1 - 运算数1
   * @param {Number} arg2 - 运算数2
   * @param {String} [format=''] - 格式化
   * @returns {Number|String} 运算结果
   */
  multiply: function multiply(arg1, arg2) {
    var format = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    if (Object(_check_number__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(arg1, false) && Object(_check_number__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(arg2, false)) {
      return _multiply(arg1, arg2);
    }

    return format;
  },

  /**
   * 除法
   *
   * @param {Number} arg1 - 运算数1
   * @param {Number} arg2 - 运算数2
   * @param {String} [format=''] - 格式化
   * @returns {Number|String} 运算结果
   */
  divide: function divide(arg1, arg2) {
    var format = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    if (Object(_check_number__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(arg1, false) && Object(_check_number__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(arg2, false)) {
      return operation(arg1, arg2, 'divide');
    }

    return format;
  }
}); // 浮点数运算精度丢失案例
// 加法
// 0.1 + 0.2 = 0.30000000000000004
// 0.7 + 0.1 = 0.7999999999999999
// 0.2 + 0.4 = 0.6000000000000001
// 2.22 + 0.1 = 2.3200000000000003
// 减法
// 1.5 - 1.2 = 0.30000000000000004
// 0.3 - 0.2 = 0.09999999999999998
// 乘法
// 19.9 * 100 = 1989.9999999999998
// 0.7 * 180 = 125.99999999999999
// 9.7 * 100 = 969.9999999999999
// 39.7 * 100 = 3970.0000000000005
// 除法
// 0.3 / 0.1 = 2.9999999999999996
// 0.69 / 10 = 0.06899999999999999
// 11.2 / 100 = 0.11199999999999999

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: check, stringUtil, floatUtil, treeUtil, appUtil, convert, common, crypt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _check__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check */ "./src/check/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "check", function() { return _check__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _stringUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringUtil */ "./src/stringUtil/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringUtil", function() { return _stringUtil__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _floatUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./floatUtil */ "./src/floatUtil/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "floatUtil", function() { return _floatUtil__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _treeUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./treeUtil */ "./src/treeUtil/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "treeUtil", function() { return _treeUtil__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _appUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./appUtil */ "./src/appUtil.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "appUtil", function() { return _appUtil__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _convert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./convert */ "./src/convert/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convert", function() { return _convert__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common */ "./src/common/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "common", function() { return _common__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _crypt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./crypt */ "./src/crypt/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "crypt", function() { return _crypt__WEBPACK_IMPORTED_MODULE_7__["default"]; });










/***/ }),

/***/ "./src/stringUtil/filter.js":
/*!**********************************!*\
  !*** ./src/stringUtil/filter.js ***!
  \**********************************/
/*! exports provided: filterNull */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterNull", function() { return filterNull; });
/* harmony import */ var _check_isNull__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../check/isNull */ "./src/check/isNull.js");
/**
 * 空数据过滤
 *
 * @param {String} str - 字符串
 * @param {String} [format=''] - 格式化
 * @return {String} 过滤后的数据
 * @example
 *
 * filterNull('xxx');
 * // => xxx
 *
 * filterNull();
 * // =>
 *
 * filterNull(null, '--');
 * // => --
 */

function filterNull(str) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (Object(_check_isNull__WEBPACK_IMPORTED_MODULE_0__["default"])(str)) {
    return format;
  }

  return str;
}

/***/ }),

/***/ "./src/stringUtil/index.js":
/*!*********************************!*\
  !*** ./src/stringUtil/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ "./src/stringUtil/filter.js");
/**
 * 字符串操作
 *
 * filterNull - 空数据过滤
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  filterNull: _filter__WEBPACK_IMPORTED_MODULE_0__["filterNull"]
});

/***/ }),

/***/ "./src/treeUtil/index.js":
/*!*******************************!*\
  !*** ./src/treeUtil/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/objectSpread */ "./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/toConsumableArray */ "./node_modules/_@babel_runtime-corejs2@7.4.4@@babel/runtime-corejs2/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__);





/**
 * 树结构数据操作
 *
 * dataConvert - 数据转换
 * dataPick - 数据提取
 * dataFind - 数据查找
 */

/**
 * 数据转换
 * 将具有层级关系的数组转化为树结构数组
 *
 * @param {Object[]} source - 源数据【有层级关系】
 * @param {Object} attributes - 配置参数
 * @param {String} attributes.pId - 源数据父主键key
 * @param {String} [attributes.rootId] - 源数据根节点主键值，将父主键值与之相等的数据视为顶层树节点【缺省此参数，将没有父主键的数据视为顶层树节点】
 * @param {String} [attributes.id='id'] - 源数据主键key
 * @param {String} [attributes.name='name'] - 源数据名称key
 * @param {String} [attributes.tId='id'] - 树节点主键key
 * @param {String} [attributes.tName='name'] - 树节点名称key
 * @param {String} [attributes.children='children'] - 子集合key
 * @param {Array} [attributes.otherKeys=[]] - 其他key【将转化为树节点属性】
 * @return {Object[]} 树结构数据
 * @example
 *
 * const source = [
 *   { id: '330000', value: '浙江省', parentId: '100000' },
 *   { id: '330100', value: '杭州市', parentId: '330000' },
 *   { id: '330200', value: '宁波市', parentId: '330000' },
 *   { id: '320000', value: '江苏省', parentId: '100000' },
 *   { id: '320100', value: '南京市', parentId: '320000' },
 *   { id: '320200', value: '无锡市', parentId: '320000' },
 * ];
 * const attributes = { rootId: '100000', pId: 'parentId', name: 'value' };
 *
 * dataConvert(source, attributes);
 * // => [{
 *   id: '330000',
 *   name: '浙江省',
 *   children: [
 *     { id: '330100', name: '杭州市' },
 *     { id: '330200', name: '宁波市' },
 *   ]
 * }, {
 *   id: '320000',
 *   name: '江苏省',
 *   children: [
 *     { id: '320100', name: '南京市' },
 *     { id: '320200', name: '无锡市' },
 *   ]
 * }]
 */
function dataConvert() {
  var source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var rootId = attributes.rootId,
      pId = attributes.pId,
      _attributes$id = attributes.id,
      id = _attributes$id === void 0 ? 'id' : _attributes$id,
      _attributes$name = attributes.name,
      name = _attributes$name === void 0 ? 'name' : _attributes$name,
      _attributes$tId = attributes.tId,
      tId = _attributes$tId === void 0 ? 'id' : _attributes$tId,
      _attributes$tName = attributes.tName,
      tName = _attributes$tName === void 0 ? 'name' : _attributes$tName,
      _attributes$children = attributes.children,
      children = _attributes$children === void 0 ? 'children' : _attributes$children,
      _attributes$otherKeys = attributes.otherKeys,
      otherKeys = _attributes$otherKeys === void 0 ? [] : _attributes$otherKeys;

  var restData = _babel_runtime_corejs2_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default()(source); // 源数据


  var treeData = []; // 树结构数据
  // 根节点解析

  var _loop = function _loop(_i, _iLen) {
    if (restData[_i][pId] === rootId) {
      var _node;

      var node = (_node = {}, _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_node, tId, restData[_i][id]), _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_node, tName, restData[_i][name]), _node);
      otherKeys.forEach(function (key) {
        _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()(node, _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, key, restData[_i][key]));
      });
      treeData.push(node);
      restData.splice(_i, 1);
      _iLen -= 1;
      _i -= 1;
    }

    i = _i;
    iLen = _iLen;
  };

  for (var i = 0, iLen = restData.length; i < iLen; i++) {
    _loop(i, iLen);
  } // 子节点解析


  var pickChild = function pickChild(node) {
    if (restData.length !== 0) {
      for (var _i2 = 0, _iLen2 = node.length; _i2 < _iLen2; _i2++) {
        var _loop2 = function _loop2(_j, _jLen) {
          if (node[_i2][tId] === restData[_j][pId]) {
            var _child;

            if (!node[_i2][children]) {
              _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()(node[_i2], _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, children, []));
            }

            var child = (_child = {}, _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_child, tId, restData[_j][id]), _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_child, tName, restData[_j][name]), _child);
            otherKeys.forEach(function (key) {
              _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()(child, _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, key, restData[_j][key]));
            });

            node[_i2][children].push(child);

            restData.splice(_j, 1);
            _jLen -= 1;
            _j -= 1;
          }

          j = _j;
          jLen = _jLen;
        };

        for (var j = 0, jLen = restData.length; j < jLen; j++) {
          _loop2(j, jLen);
        }

        if (node[_i2][children]) {
          pickChild(node[_i2][children]);
        }
      }
    }
  };

  pickChild(treeData);
  return treeData;
}
/**
 * 数据提取
 * 根据某一属性的值提取出另一属性的值
 *
 * @param {Object[]} treeData - 源数据
 * @param {Array} values - 原始值
 * @param {Object} [attributes] - 配置参数
 * @param {String} [attributes.origin='id'] - 原始key
 * @param {String} [attributes.key='name'] - 提取key
 * @param {String} [attributes.children='children'] - 子集合key
 * @return {Array} 提取的数据
 * @example
 *
 * const treeData = [{
 *   id: '330000',
 *   name: '浙江省',
 *   children: [
 *     { id: '330100', name: '杭州市' },
 *     { id: '330200', name: '宁波市' },
 *   ],
 * }, {
 *   id: '320000',
 *   name: '江苏省',
 *   children: [
 *     { id: '320100', name: '南京市' },
 *     { id: '320200', name: '无锡市' },
 *   ],
 * }];
 *
 * dataPick(treeData, ['330000', '330100']);
 * // => ['浙江省', '杭州市']
 */


function dataPick() {
  var treeData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var values = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _attributes$origin = attributes.origin,
      origin = _attributes$origin === void 0 ? 'id' : _attributes$origin,
      _attributes$key = attributes.key,
      key = _attributes$key === void 0 ? 'name' : _attributes$key,
      _attributes$children2 = attributes.children,
      children = _attributes$children2 === void 0 ? 'children' : _attributes$children2;
  var newValues = [];

  var pick = function pick() {
    var source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    source.some(function (item) {
      if (item[origin] === values[index]) {
        newValues.push(item[key]);

        if (item[children]) {
          pick(item[children], index + 1);
        }

        return true;
      }

      return false;
    });
  };

  pick(treeData);
  return newValues;
}
/**
 * 数据查找
 *
 * @param {Object[]} treeData - 源数据
 * @param {String} value - 属性值
 * @param {Object} [attributes] - 配置参数
 * @param {String} [attributes.key='id'] - key
 * @param {String} [attributes.children='children'] - 子集合key
 * @return {Object|undefined}
 * @example
 *
 * const treeData = [{
 *   id: '330000',
 *   name: '浙江省',
 *   children: [
 *     { id: '330100', name: '杭州市' },
 *     { id: '330200', name: '宁波市' },
 *   ],
 * }, {
 *   id: '320000',
 *   name: '江苏省',
 *   children: [
 *     { id: '320100', name: '南京市' },
 *     { id: '320200', name: '无锡市' },
 *   ],
 * }];
 *
 * dataFind(treeData, '330100');
 * // => { id: '330100', name: '杭州市' }
 */


function dataFind() {
  var treeData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var value = arguments.length > 1 ? arguments[1] : undefined;
  var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _attributes$key2 = attributes.key,
      key = _attributes$key2 === void 0 ? 'id' : _attributes$key2,
      _attributes$children3 = attributes.children,
      children = _attributes$children3 === void 0 ? 'children' : _attributes$children3;
  var result;

  var find = function find(data) {
    return data.find(function (item) {
      if (item[key] === value) {
        result = _babel_runtime_corejs2_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, item);
        return true;
      }

      if (item[children] && item[children].length > 0) {
        return find(item[children]);
      }

      return false;
    });
  };

  find(treeData);
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  dataConvert: dataConvert,
  dataPick: dataPick,
  dataFind: dataFind
});

/***/ })

/******/ });
});