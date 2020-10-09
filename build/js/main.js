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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/index.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/index.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nvar getUrl = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ../images/replay.svg */ \"./src/images/replay.svg\"));\n// Module\nexports.push([module.i, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box; }\\n\\nbody {\\n  display: flex;\\n  justify-content: center;\\n  width: 100%;\\n  height: 100vh;\\n  background-color: black;\\n  font-family: arial;\\n  border: 1px solid black; }\\n\\n.mainWrap {\\n  position: relative;\\n  display: flex;\\n  flex-direction: column;\\n  width: 100%;\\n  max-width: 800px;\\n  height: 100%;\\n  border: 1px solid gray;\\n  background-color: #e48900;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-evenly; }\\n  @media only screen and (orientation: landscape) {\\n    .mainWrap {\\n      width: 30vw; } }\\n\\n.panel {\\n  display: flex;\\n  background-color: yellowgreen;\\n  border: 5px solid rgba(0, 0, 0, 0.3);\\n  border-radius: 10px;\\n  font-family: Arial, Helvetica, sans-serif;\\n  font-weight: 700;\\n  box-shadow: 0 0 5px 5px rgba(128, 255, 0, 0.2);\\n  font-size: 3vh;\\n  padding: 3vw;\\n  margin: 3vh; }\\n  @media only screen and (orientation: landscape) {\\n    .panel {\\n      font-size: 4vh;\\n      padding: 3vh;\\n      margin: 3vh; } }\\n\\n.nextSquare {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  height: 20%;\\n  width: 20%;\\n  background-color: rgba(0, 0, 0, 0);\\n  border: 1px solid rgba(51, 51, 51, 0.3);\\n  border-radius: 10px;\\n  font-family: Arial, Helvetica, sans-serif;\\n  font-size: 3vw;\\n  font-weight: 700;\\n  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.2);\\n  margin: 3vh; }\\n\\n.playAgainBtn {\\n  width: 10vw;\\n  height: 10vw;\\n  background-color: brown;\\n  background-image: url(\" + ___CSS_LOADER_URL___0___ + \");\\n  background-size: 60%;\\n  background-position: 60% 30%;\\n  background-repeat: no-repeat;\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  border: 1px solid rgba(255, 1, 1, 0.5);\\n  border-radius: 5px; }\\n  @media only screen and (orientation: landscape) {\\n    .playAgainBtn {\\n      width: 10vh;\\n      height: 10vh; } }\\n\\n.board {\\n  height: 100%;\\n  width: 100%;\\n  background-color: transparent;\\n  border-radius: 10px;\\n  display: flex;\\n  flex-wrap: wrap; }\\n\\n.square {\\n  height: 20%;\\n  width: 20%;\\n  background-color: rgba(0, 0, 0, 0);\\n  border: 1px solid rgba(51, 51, 51, 0.1);\\n  border-radius: 10px; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/sass/index.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, needQuotes) {\n  // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n  url = url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/images/replay.svg":
/*!*******************************!*\
  !*** ./src/images/replay.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"e9018ebf433719d4cae2d0493e824f73.svg\";\n\n//# sourceURL=webpack:///./src/images/replay.svg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/index.scss */ \"./src/sass/index.scss\");\n/* harmony import */ var _sass_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _tools_boardMaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tools/boardMaker */ \"./src/tools/boardMaker.js\");\n/* harmony import */ var _tools_panelMaker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tools/panelMaker */ \"./src/tools/panelMaker.js\");\n\n\n\nObject(_tools_panelMaker__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\nvar board = new _tools_boardMaker__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/sass/index.scss":
/*!*****************************!*\
  !*** ./src/sass/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/index.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/sass/index.scss?");

/***/ }),

/***/ "./src/tools/boardMaker.js":
/*!*********************************!*\
  !*** ./src/tools/boardMaker.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _default; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar _default = function _default() {\n  var _this = this;\n\n  _classCallCheck(this, _default);\n\n  _defineProperty(this, \"resetAll\", function () {\n    location.reload();\n  });\n\n  _defineProperty(this, \"markBuddiesToRemove\", function () {\n    for (var row = 0; row < 4; row++) {\n      for (var column = 0; column < 5; column++) {\n        if (_this.squaresGoingOut[row][column] === true) {\n          var color = _this.getColor(_this.squares[row][column]);\n\n          if (_this.getColor(_this.squares[row + 1][column]) === color) {\n            _this.squaresGoingOut[row + 1][column] = true;\n            console.log('my lower row buddy goes out too!');\n          }\n        }\n      }\n    }\n\n    for (var _row = 1; _row < 5; _row++) {\n      for (var _column = 0; _column < 5; _column++) {\n        if (_this.squaresGoingOut[_row][_column] === true) {\n          var _color = _this.getColor(_this.squares[_row][_column]);\n\n          if (_this.getColor(_this.squares[_row - 1][_column]) === _color) {\n            _this.squaresGoingOut[_row - 1][_column] = true;\n            console.log('my higher row buddy goes out too!');\n          }\n        }\n      }\n    }\n\n    for (var _row2 = 0; _row2 < 5; _row2++) {\n      for (var _column2 = 0; _column2 < 4; _column2++) {\n        if (_this.squaresGoingOut[_row2][_column2] === true) {\n          var _color2 = _this.getColor(_this.squares[_row2][_column2]);\n\n          if (_this.getColor(_this.squares[_row2][_column2 + 1]) === _color2) {\n            _this.squaresGoingOut[_row2][_column2 + 1] = true;\n            console.log('my right hand side column buddy goes out too!');\n          }\n        }\n      }\n    }\n\n    for (var _row3 = 0; _row3 < 5; _row3++) {\n      for (var _column3 = 1; _column3 < 5; _column3++) {\n        if (_this.squaresGoingOut[_row3][_column3] === true) {\n          var _color3 = _this.getColor(_this.squares[_row3][_column3]);\n\n          if (_this.getColor(_this.squares[_row3][_column3 - 1]) === _color3) {\n            _this.squaresGoingOut[_row3][_column3 - 1] = true;\n            console.log('my left hand side column buddy goes out too!');\n          }\n        }\n      }\n    }\n  });\n\n  _defineProperty(this, \"markTrios\", function (row, column, direction) {\n    // console.log('direction: ', direction);\n    if (direction === 'horizontally') {\n      // console.log(`removing squares: row${row} c${column} c${column+1} c${column+2}`);\n      _this.squaresGoingOut[row][column] = true;\n      _this.squaresGoingOut[row][column + 1] = true;\n      _this.squaresGoingOut[row][column + 2] = true; // console.log(this.squaresGoingOut);\n    } else {\n      // console.log(`removing squares: column${column} r${row} r${row+1} r${row+2}`);\n      _this.squaresGoingOut[row][column] = true;\n      _this.squaresGoingOut[row + 1][column] = true;\n      _this.squaresGoingOut[row + 2][column] = true;\n    }\n  });\n\n  _defineProperty(this, \"checkIfGameOver\", function () {\n    if (_this.findAvailableSquare([0, 1, 2, 3, 4])[0] === 9) return true;\n    return false;\n  });\n\n  _defineProperty(this, \"endGame\", function () {\n    if (_this.checkIfGameOver()) {\n      _this.gameOver = true;\n      _this.panel.style.backgroundColor = 'red';\n      _this.panel.textContent = \"FINAL SCORE: \".concat(_this.score);\n    }\n  });\n\n  _defineProperty(this, \"pickColor\", function () {\n    return _this.squareColors[Math.floor(Math.random() * _this.squareColors.length)];\n  });\n\n  _defineProperty(this, \"getColor\", function (element) {\n    return window.getComputedStyle(element).getPropertyValue('background-color');\n  });\n\n  _defineProperty(this, \"areSameColor\", function (element1, element2, element3) {\n    // console.log(this.getColor(element1), this.getColor(element2));\n    if (_this.getColor(element1) === 'rgba(0, 0, 0, 0)') return false;\n    if (_this.getColor(element2) === 'rgba(0, 0, 0, 0)') return false;\n    if (_this.getColor(element3) === 'rgba(0, 0, 0, 0)') return false;\n    return _this.getColor(element1) === _this.getColor(element2) && _this.getColor(element2) === _this.getColor(element3);\n  });\n\n  _defineProperty(this, \"tallyAndClear\", function () {\n    for (var i = 0; i < 5; i++) {\n      for (var j = 0; j < 5; j++) {\n        if (_this.squaresGoingOut[i][j] === true) {\n          _this.score++;\n          _this.squaresGoingOut[i][j] = false;\n          _this.cleanSquares[i][j] = true;\n\n          var removedColor = _this.getColor(_this.squares[i][j]);\n\n          _this.emptySquare(_this.squares[i][j], removedColor);\n        }\n      }\n    }\n\n    _this.panel.textContent = \"\".concat(_this.score); // console.log('your score: ', this.score);\n\n    if (_this.checkIfGameOver()) {\n      _this.endGame();\n    }\n\n    ;\n  });\n\n  _defineProperty(this, \"checkSquaresRemoveAndScore\", function () {\n    for (var row = 0; row < 5; row++) {\n      for (var i = 0; i < 3; i++) {\n        if (_this.areSameColor(_this.squares[row][i], _this.squares[row][i + 1], _this.squares[row][i + 2])) {\n          _this.markTrios(row, i, 'horizontally');\n        } // console.log(this.areSameColor(this.squares[0][i], this.squares[0][i+1], this.squares[0][i+2]));\n\n      }\n    }\n\n    for (var column = 0; column < 5; column++) {\n      for (var _i = 0; _i < 3; _i++) {\n        if (_this.areSameColor(_this.squares[_i][column], _this.squares[_i + 1][column], _this.squares[_i + 2][column])) {\n          _this.markTrios(_i, column, 'vertically');\n        } // console.log(this.areSameColor(this.squares[0][i], this.squares[0][i+1], this.squares[0][i+2]));\n\n      }\n    }\n\n    _this.markBuddiesToRemove();\n\n    _this.tallyAndClear();\n  });\n\n  _defineProperty(this, \"displayNextColor\", function () {\n    // console.log('next: ', this.nextColor);\n    _this.nextColorSquare.style.backgroundColor = _this.nextColor;\n    _this.nextColorSquare.textContent = '';\n  });\n\n  _defineProperty(this, \"shuffle\", function (array) {\n    for (var i = array.length - 1; i > 0; i--) {\n      var j = Math.floor(Math.random() * (i + 1));\n      var _ref = [array[j], array[i]];\n      array[i] = _ref[0];\n      array[j] = _ref[1];\n      return array;\n    }\n  });\n\n  _defineProperty(this, \"findAvailableSquare\", function (randomNumbers) {\n    // console.log(randomNumbers);\n    // console.log('clean squares: ', this.cleanSquares);\n    for (var x = 0; x < 5; x++) {\n      for (var y = 0; y < 5; y++) {\n        var randomizedX = randomNumbers[x];\n        var randomizedY = randomNumbers[y];\n        if (_this.cleanSquares[randomizedX][randomizedY] === true) return [randomizedX, randomizedY];\n      }\n    }\n\n    return [9, 9]; //9 is code for no available squares found anymore\n  });\n\n  _defineProperty(this, \"ComputerAddMoreSquares\", function () {\n    if (_this.gameOver) return;\n\n    var nextComputerColor = _this.pickColor();\n\n    var unshuffled = [0, 1, 2, 3, 4];\n\n    var randomNumbers = _this.shuffle(unshuffled); // console.log('random: ', randomNumbers);\n    //wait for animations to complete\n\n\n    var availableSquare = _this.findAvailableSquare(randomNumbers); //  console.log('available', availableSquare);\n\n\n    if (availableSquare[0] === 9) {\n      _this.endGame();\n\n      return console.log('KONIEC!!!');\n    }\n\n    _this.cleanSquares[availableSquare[0]][availableSquare[1]] = false;\n\n    _this.squares[availableSquare[0]][availableSquare[1]].animate([{\n      backgroundColor: 'transparent'\n    }, {\n      backgroundColor: nextComputerColor\n    }], {\n      fill: 'forwards',\n      duration: 300,\n      iterations: 1\n    });\n\n    _this.checkSquaresRemoveAndScore();\n\n    if (_this.checkIfGameOver()) _this.endGame();\n  });\n\n  _defineProperty(this, \"fillSquare\", function (event) {\n    if (_this.gameOver) return;\n    var row = event.target.dataset.row;\n    var column = event.target.dataset.column;\n    var clickedSquare = _this.squares[row][column]; // console.log(clickedSquare);    \n\n    if (_this.getColor(clickedSquare) !== 'rgba(0, 0, 0, 0)') return;\n    _this.cleanSquares[row][column] = false;\n    clickedSquare.animate([{\n      backgroundColor: 'transparent'\n    }, {\n      backgroundColor: _this.nextColor\n    }], {\n      fill: 'forwards',\n      duration: 300,\n      iterations: 1\n    }); // need to wait 1s for all animations to finish\n\n    _this.checkSquaresRemoveAndScore();\n\n    _this.nextColor = _this.pickColor();\n\n    _this.displayNextColor();\n\n    setTimeout(function () {\n      _this.ComputerAddMoreSquares();\n    }, 700);\n  });\n\n  _defineProperty(this, \"emptySquare\", function (element, removedColor) {\n    element.animate([{\n      backgroundColor: removedColor\n    }, {\n      backgroundColor: 'transparent'\n    }, {\n      backgroundColor: removedColor\n    }, {\n      backgroundColor: 'transparent'\n    }, {\n      backgroundColor: removedColor\n    }, {\n      backgroundColor: 'transparent'\n    }, {\n      backgroundColor: removedColor\n    }, {\n      backgroundColor: 'transparent'\n    }, {\n      backgroundColor: removedColor\n    }, {\n      backgroundColor: 'transparent'\n    }, {\n      backgroundColor: removedColor\n    }, {\n      backgroundColor: 'transparent'\n    }, {\n      backgroundColor: removedColor\n    }, {\n      backgroundColor: 'transparent'\n    }, {\n      backgroundColor: removedColor\n    }, {\n      backgroundColor: 'transparent'\n    }], {\n      fill: 'forwards',\n      duration: 500,\n      iterations: 1\n    });\n  });\n\n  _defineProperty(this, \"initSquares\", function () {\n    for (var row = 0; row < 5; row++) {\n      for (var column = 0; column < 5; column++) {\n        var square = document.createElement('div');\n        square.classList.add('square');\n        square.setAttribute('data-row', \"\".concat(row));\n        square.setAttribute('data-column', \"\".concat(column));\n        square.addEventListener('click', function (e) {\n          return _this.fillSquare(e);\n        });\n\n        _this.board.appendChild(square); // console.log(row,column);\n\n\n        _this.squares[row][column] = square;\n\n        _this.replay.addEventListener('click', function () {\n          return _this.resetAll();\n        });\n      }\n    }\n  });\n\n  this.replay = document.querySelector('.playAgainBtn');\n  this.mainWrapper = document.querySelector('.mainWrap');\n  this.board = document.createElement('div');\n  this.panel = document.querySelector('.panel');\n  this.board.classList.add('board');\n  this.mainWrapper.appendChild(this.board);\n  this.squares = [[], [], [], [], []];\n  this.squaresGoingOut = [[false, false, false, false, false], [false, false, false, false, false], [false, false, false, false, false], [false, false, false, false, false], [false, false, false, false, false]];\n  this.cleanSquares = [[true, true, true, true, true], [true, true, true, true, true], [true, true, true, true, true], [true, true, true, true, true], [true, true, true, true, true]];\n  this.score = 0;\n  this.squareColors = ['darkblue', 'darkred', 'yellow', 'black', 'green']; // this.squareColors = ['darkblue', 'darkblue', 'darkblue','darkblue','darkblue'];     \n\n  this.nextColor = this.pickColor();\n  this.nextColorSquare = document.querySelector('.nextSquare');\n  this.gameOver = false;\n  this.initSquares();\n};\n\n\n\n//# sourceURL=webpack:///./src/tools/boardMaker.js?");

/***/ }),

/***/ "./src/tools/panelMaker.js":
/*!*********************************!*\
  !*** ./src/tools/panelMaker.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar panelMaker = function panelMaker() {\n  var mainWrapper = document.querySelector('.mainWrap');\n  var panel = document.createElement('div');\n  panel.classList.add('panel');\n  panel.textContent = 'YOUR SCORE';\n  var nextSquare = document.createElement('div');\n  nextSquare.classList.add('nextSquare');\n  mainWrapper.appendChild(panel);\n  mainWrapper.appendChild(nextSquare);\n  var playAgainBtn = document.createElement('div');\n  playAgainBtn.classList.add('playAgainBtn');\n  mainWrapper.appendChild(playAgainBtn);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (panelMaker);\n\n//# sourceURL=webpack:///./src/tools/panelMaker.js?");

/***/ })

/******/ });