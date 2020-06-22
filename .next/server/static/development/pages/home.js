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

/***/ "./components/HomeGrid.js":
/*!********************************!*\
  !*** ./components/HomeGrid.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _HomeGrid_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeGrid.module.css */ \"./components/HomeGrid.module.css\");\n/* harmony import */ var _HomeGrid_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_HomeGrid_module_css__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/jacquelineturof/Next/office-suite-app/components/HomeGrid.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst TILES = [\"Calendar\", \"Todo\", \"Analytics\", \"Countdown\", \"Notes\", \"Groups\", \"Messaging\", \"Settings\", \"Weather\"];\n\nconst Tile = ({\n  tile\n}) => __jsx(\"div\", {\n  className: [_HomeGrid_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Tile, _HomeGrid_module_css__WEBPACK_IMPORTED_MODULE_1___default.a[tile], _HomeGrid_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Background].join(' '),\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }\n}, __jsx(\"p\", {\n  className: _HomeGrid_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Title,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 9\n  }\n}, tile));\n\nconst Grid = () => __jsx(\"div\", {\n  className: _HomeGrid_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Grid,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 5\n  }\n}, TILES.map(tile => __jsx(Tile, {\n  key: tile,\n  tile: tile,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 17\n  }\n})));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Grid);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWVHcmlkLmpzPzBkMWUiXSwibmFtZXMiOlsiVElMRVMiLCJUaWxlIiwidGlsZSIsImNsYXNzZXMiLCJCYWNrZ3JvdW5kIiwiam9pbiIsIlRpdGxlIiwiR3JpZCIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBRUE7QUFFQSxNQUFNQSxLQUFLLEdBQUcsQ0FDVixVQURVLEVBRVYsTUFGVSxFQUdWLFdBSFUsRUFJVixXQUpVLEVBS1YsT0FMVSxFQU1WLFFBTlUsRUFPVixXQVBVLEVBUVYsVUFSVSxFQVNWLFNBVFUsQ0FBZDs7QUFhQSxNQUFNQyxJQUFJLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FDVDtBQUFLLFdBQVMsRUFBSyxDQUFFQywyREFBTyxDQUFDRixJQUFWLEVBQWdCRSwyREFBTyxDQUFDRCxJQUFELENBQXZCLEVBQStCQywyREFBTyxDQUFDQyxVQUF2QyxFQUFvREMsSUFBcEQsQ0FBeUQsR0FBekQsQ0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNJO0FBQUcsV0FBUyxFQUFLRiwyREFBTyxDQUFDRyxLQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQW1DSixJQUFuQyxDQURKLENBREo7O0FBTUEsTUFBTUssSUFBSSxHQUFHLE1BQ1Q7QUFBSyxXQUFTLEVBQUtKLDJEQUFPLENBQUNJLElBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FFUVAsS0FBSyxDQUFDUSxHQUFOLENBQVVOLElBQUksSUFDVixNQUFDLElBQUQ7QUFDSSxLQUFHLEVBQUtBLElBRFo7QUFFSSxNQUFJLEVBQUtBLElBRmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQURKLENBRlIsQ0FESjs7QUFXZUssbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0hvbWVHcmlkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL0hvbWVHcmlkLm1vZHVsZS5jc3MnXG5cbmNvbnN0IFRJTEVTID0gW1xuICAgIFwiQ2FsZW5kYXJcIixcbiAgICBcIlRvZG9cIixcbiAgICBcIkFuYWx5dGljc1wiLFxuICAgIFwiQ291bnRkb3duXCIsXG4gICAgXCJOb3Rlc1wiLFxuICAgIFwiR3JvdXBzXCIsXG4gICAgXCJNZXNzYWdpbmdcIixcbiAgICBcIlNldHRpbmdzXCIsXG4gICAgXCJXZWF0aGVyXCJcbl1cblxuXG5jb25zdCBUaWxlID0gKHsgdGlsZSB9KSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWUgPSB7IFsgY2xhc3Nlcy5UaWxlLCBjbGFzc2VzW3RpbGVdLCBjbGFzc2VzLkJhY2tncm91bmQgXS5qb2luKCcgJykgfT5cbiAgICAgICAgPHAgY2xhc3NOYW1lID0geyBjbGFzc2VzLlRpdGxlIH0+eyB0aWxlIH08L3A+XG4gICAgPC9kaXY+XG4pXG5cbmNvbnN0IEdyaWQgPSAoKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWUgPSB7IGNsYXNzZXMuR3JpZCB9PlxuICAgICAgICB7IFxuICAgICAgICAgICAgVElMRVMubWFwKHRpbGUgPT4gXG4gICAgICAgICAgICAgICAgPFRpbGUgXG4gICAgICAgICAgICAgICAgICAgIGtleSA9IHsgdGlsZSB9XG4gICAgICAgICAgICAgICAgICAgIHRpbGUgPSB7IHRpbGUgfSAvPilcbiAgICAgICAgfVxuICAgIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBHcmlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/HomeGrid.js\n");

/***/ }),

/***/ "./components/HomeGrid.module.css":
/*!****************************************!*\
  !*** ./components/HomeGrid.module.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"Grid\": \"HomeGrid_Grid__3B6ya\",\n\t\"Tile\": \"HomeGrid_Tile__3jHZ6\",\n\t\"Calendar\": \"HomeGrid_Calendar__38IJC\",\n\t\"Todo\": \"HomeGrid_Todo__3qoYF\",\n\t\"Analytics\": \"HomeGrid_Analytics__3tlG7\",\n\t\"Countdown\": \"HomeGrid_Countdown__2gMS8\",\n\t\"Notes\": \"HomeGrid_Notes__1aSIr\",\n\t\"Groups\": \"HomeGrid_Groups__2QBIa\",\n\t\"Messaging\": \"HomeGrid_Messaging__2dfOb\",\n\t\"Settings\": \"HomeGrid_Settings__3kvIa\",\n\t\"Weather\": \"HomeGrid_Weather__2N1eA\",\n\t\"Background\": \"HomeGrid_Background__2V8HU\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWVHcmlkLm1vZHVsZS5jc3M/OTlmZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL0hvbWVHcmlkLm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJHcmlkXCI6IFwiSG9tZUdyaWRfR3JpZF9fM0I2eWFcIixcblx0XCJUaWxlXCI6IFwiSG9tZUdyaWRfVGlsZV9fM2pIWjZcIixcblx0XCJDYWxlbmRhclwiOiBcIkhvbWVHcmlkX0NhbGVuZGFyX18zOElKQ1wiLFxuXHRcIlRvZG9cIjogXCJIb21lR3JpZF9Ub2RvX18zcW9ZRlwiLFxuXHRcIkFuYWx5dGljc1wiOiBcIkhvbWVHcmlkX0FuYWx5dGljc19fM3RsRzdcIixcblx0XCJDb3VudGRvd25cIjogXCJIb21lR3JpZF9Db3VudGRvd25fXzJnTVM4XCIsXG5cdFwiTm90ZXNcIjogXCJIb21lR3JpZF9Ob3Rlc19fMWFTSXJcIixcblx0XCJHcm91cHNcIjogXCJIb21lR3JpZF9Hcm91cHNfXzJRQklhXCIsXG5cdFwiTWVzc2FnaW5nXCI6IFwiSG9tZUdyaWRfTWVzc2FnaW5nX18yZGZPYlwiLFxuXHRcIlNldHRpbmdzXCI6IFwiSG9tZUdyaWRfU2V0dGluZ3NfXzNrdklhXCIsXG5cdFwiV2VhdGhlclwiOiBcIkhvbWVHcmlkX1dlYXRoZXJfXzJOMWVBXCIsXG5cdFwiQmFja2dyb3VuZFwiOiBcIkhvbWVHcmlkX0JhY2tncm91bmRfXzJWOEhVXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/HomeGrid.module.css\n");

/***/ }),

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_HomeGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/HomeGrid */ \"./components/HomeGrid.js\");\nvar _jsxFileName = \"/Users/jacquelineturof/Next/office-suite-app/pages/home.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst styles = {\n  container: {\n    width: '100%',\n    height: '90vh',\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'center'\n  }\n};\n\nconst home = () => __jsx(\"section\", {\n  style: styles.container,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 5\n  }\n}, __jsx(_components_HomeGrid__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 9\n  }\n}));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ob21lLmpzPzA4N2QiXSwibmFtZXMiOlsic3R5bGVzIiwiY29udGFpbmVyIiwid2lkdGgiLCJoZWlnaHQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaG9tZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQTtBQUVBLE1BQU1BLE1BQU0sR0FBRztBQUNYQyxXQUFTLEVBQUU7QUFDUEMsU0FBSyxFQUFFLE1BREE7QUFFUEMsVUFBTSxFQUFFLE1BRkQ7QUFHUEMsV0FBTyxFQUFFLE1BSEY7QUFJUEMsY0FBVSxFQUFFLFFBSkw7QUFLUEMsa0JBQWMsRUFBRTtBQUxUO0FBREEsQ0FBZjs7QUFVQSxNQUFNQyxJQUFJLEdBQUcsTUFDVDtBQUFTLE9BQUssRUFBS1AsTUFBTSxDQUFDQyxTQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0ksTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREosQ0FESjs7QUFNZU0sbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9ob21lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgR3JpZCBmcm9tICcuLi9jb21wb25lbnRzL0hvbWVHcmlkJ1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gICAgY29udGFpbmVyOiB7XG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIGhlaWdodDogJzkwdmgnLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcbiAgICB9XG59XG5cbmNvbnN0IGhvbWUgPSAoKSA9PiAoXG4gICAgPHNlY3Rpb24gc3R5bGUgPSB7IHN0eWxlcy5jb250YWluZXIgfT5cbiAgICAgICAgPEdyaWQgLz5cbiAgICA8L3NlY3Rpb24+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IGhvbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/home.js\n");

/***/ }),

/***/ 4:
/*!*****************************!*\
  !*** multi ./pages/home.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jacquelineturof/Next/office-suite-app/pages/home.js */"./pages/home.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });