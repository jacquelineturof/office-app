webpackHotUpdate("static/development/pages/home.js",{

/***/ "./Assets/notes.jpg":
/*!**************************!*\
  !*** ./Assets/notes.jpg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"static/media/notes.2a0a88522d3d27168bd0faed4e669808.jpg\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Bc3NldHMvbm90ZXMuanBnPzhmZDkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBZSxvRkFBdUIsNERBQTREIiwiZmlsZSI6Ii4vQXNzZXRzL25vdGVzLmpwZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvbm90ZXMuMmEwYTg4NTIyZDNkMjcxNjhiZDBmYWVkNGU2Njk4MDguanBnXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Assets/notes.jpg\n");

/***/ }),

/***/ "./components/HomeGrid.js":
/*!********************************!*\
  !*** ./components/HomeGrid.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _HomeGrid_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeGrid.module.css */ \"./components/HomeGrid.module.css\");\n/* harmony import */ var _HomeGrid_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_HomeGrid_module_css__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/jacquelineturof/Next/office-suite-app/components/HomeGrid.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar TILES = [\"Calendar\", \"Todo\", \"Analytics\", \"Countdown\", \"Notes\"];\n\nvar Tile = function Tile(_ref) {\n  var tile = _ref.tile;\n  return __jsx(\"div\", {\n    className: [_HomeGrid_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Tile, _HomeGrid_module_css__WEBPACK_IMPORTED_MODULE_1___default.a[tile], _HomeGrid_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Background].join(' '),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 5\n    }\n  }, __jsx(\"p\", {\n    className: _HomeGrid_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }, tile));\n};\n\n_c = Tile;\n\nvar Grid = function Grid() {\n  return __jsx(\"div\", {\n    className: _HomeGrid_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Grid,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }\n  }, TILES.map(function (tile) {\n    return __jsx(Tile, {\n      key: tile,\n      tile: tile,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 17\n      }\n    });\n  }));\n};\n\n_c2 = Grid;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Grid);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Tile\");\n$RefreshReg$(_c2, \"Grid\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWVHcmlkLmpzPzBkMWUiXSwibmFtZXMiOlsiVElMRVMiLCJUaWxlIiwidGlsZSIsImNsYXNzZXMiLCJCYWNrZ3JvdW5kIiwiam9pbiIsIlRpdGxlIiwiR3JpZCIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBLElBQU1BLEtBQUssR0FBRyxDQUNWLFVBRFUsRUFFVixNQUZVLEVBR1YsV0FIVSxFQUlWLFdBSlUsRUFLVixPQUxVLENBQWQ7O0FBU0EsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU87QUFBQSxNQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxTQUNUO0FBQUssYUFBUyxFQUFLLENBQUVDLDJEQUFPLENBQUNGLElBQVYsRUFBZ0JFLDJEQUFPLENBQUNELElBQUQsQ0FBdkIsRUFBK0JDLDJEQUFPLENBQUNDLFVBQXZDLEVBQW9EQyxJQUFwRCxDQUF5RCxHQUF6RCxDQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxhQUFTLEVBQUtGLDJEQUFPLENBQUNHLEtBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBbUNKLElBQW5DLENBREosQ0FEUztBQUFBLENBQWI7O0tBQU1ELEk7O0FBTU4sSUFBTU0sSUFBSSxHQUFHLFNBQVBBLElBQU87QUFBQSxTQUNUO0FBQUssYUFBUyxFQUFLSiwyREFBTyxDQUFDSSxJQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRVFQLEtBQUssQ0FBQ1EsR0FBTixDQUFVLFVBQUFOLElBQUk7QUFBQSxXQUNWLE1BQUMsSUFBRDtBQUNJLFNBQUcsRUFBS0EsSUFEWjtBQUVJLFVBQUksRUFBS0EsSUFGYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRFU7QUFBQSxHQUFkLENBRlIsQ0FEUztBQUFBLENBQWI7O01BQU1LLEk7QUFXU0EsbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0hvbWVHcmlkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL0hvbWVHcmlkLm1vZHVsZS5jc3MnXG5cbmNvbnN0IFRJTEVTID0gW1xuICAgIFwiQ2FsZW5kYXJcIixcbiAgICBcIlRvZG9cIixcbiAgICBcIkFuYWx5dGljc1wiLFxuICAgIFwiQ291bnRkb3duXCIsXG4gICAgXCJOb3Rlc1wiXG5dXG5cblxuY29uc3QgVGlsZSA9ICh7IHRpbGUgfSkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lID0geyBbIGNsYXNzZXMuVGlsZSwgY2xhc3Nlc1t0aWxlXSwgY2xhc3Nlcy5CYWNrZ3JvdW5kIF0uam9pbignICcpIH0+XG4gICAgICAgIDxwIGNsYXNzTmFtZSA9IHsgY2xhc3Nlcy5UaXRsZSB9PnsgdGlsZSB9PC9wPlxuICAgIDwvZGl2PlxuKVxuXG5jb25zdCBHcmlkID0gKCkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lID0geyBjbGFzc2VzLkdyaWQgfT5cbiAgICAgICAgeyBcbiAgICAgICAgICAgIFRJTEVTLm1hcCh0aWxlID0+IFxuICAgICAgICAgICAgICAgIDxUaWxlIFxuICAgICAgICAgICAgICAgICAgICBrZXkgPSB7IHRpbGUgfVxuICAgICAgICAgICAgICAgICAgICB0aWxlID0geyB0aWxlIH0gLz4pXG4gICAgICAgIH1cbiAgICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgR3JpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/HomeGrid.js\n");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/HomeGrid.module.css":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./components/HomeGrid.module.css ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../Assets/calendar.jpg */ \"./Assets/calendar.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../Assets/todo.jpg */ \"./Assets/todo.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../Assets/analytics.jpg */ \"./Assets/analytics.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ../Assets/countdown.jpg */ \"./Assets/countdown.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(/*! ../Assets/notes.jpg */ \"./Assets/notes.jpg\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);\n// Module\nexports.push([module.i, \".HomeGrid_Grid__3B6ya {\\n    height: 90%;\\n    width: 90%;\\n    display: grid;\\n    grid-template-columns: repeat(3, 1fr);\\n    grid-template-rows: repeat(3, 1fr);\\n}\\n\\n.HomeGrid_Tile__3jHZ6 {\\n    height: 100%;\\n    width: 100%;\\n    color: white;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: space-around;\\n    cursor: pointer;\\n}\\n\\n.HomeGrid_Calendar__38IJC {\\n    background: linear-gradient(90deg, rgba(115,191,184,.8) 100%, rgba(221,221,221,.8) 100%), url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n\\n.HomeGrid_Todo__3qoYF {\\n    background: linear-gradient(90deg, rgba(234,115,23, .9) 100%, rgba(221,221,221, .9) 100%), url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n}\\n\\n.HomeGrid_Analytics__3tlG7 {\\n    background: linear-gradient(90deg, rgba(61,165,217,.9) 100%, rgba(221,221,221,.9) 100%), url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n}\\n\\n.HomeGrid_Countdown__2gMS8 {\\n    background: linear-gradient(90deg, rgba(254,198,1,.9) 100%, rgba(221,221,221,.9) 100%), url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\n}\\n\\n.HomeGrid_Notes__1aSIr {\\n    background: linear-gradient(90deg, rgba(61,165,217,.9) 100%, rgba(221,221,221,.9) 100%), url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \");\\n}\\n\\n.HomeGrid_Background__2V8HU {\\n    background-size: cover;\\n    background-position: center;\\n}\", \"\",{\"version\":3,\"sources\":[\"/Users/jacquelineturof/Next/office-suite-app/components/HomeGrid.module.css\"],\"names\":[],\"mappings\":\"AAAA;IACI,WAAW;IACX,UAAU;IACV,aAAa;IACb,qCAAqC;IACrC,kCAAkC;AACtC;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;IAC7B,eAAe;AACnB;;AAEA;IACI,iIAAuH;AAC3H;;AAEA;IACI,kIAAoH;AACxH;;AAEA;IACI,gIAAuH;AAC3H;;AAEA;IACI,+HAAsH;AAC1H;;AAEA;IACI,gIAAmH;AACvH;;AAEA;IACI,sBAAsB;IACtB,2BAA2B;AAC/B\",\"file\":\"HomeGrid.module.css\",\"sourcesContent\":[\".Grid {\\n    height: 90%;\\n    width: 90%;\\n    display: grid;\\n    grid-template-columns: repeat(3, 1fr);\\n    grid-template-rows: repeat(3, 1fr);\\n}\\n\\n.Tile {\\n    height: 100%;\\n    width: 100%;\\n    color: white;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: space-around;\\n    cursor: pointer;\\n}\\n\\n.Calendar {\\n    background: linear-gradient(90deg, rgba(115,191,184,.8) 100%, rgba(221,221,221,.8) 100%), url('../Assets/calendar.jpg');\\n}\\n\\n.Todo {\\n    background: linear-gradient(90deg, rgba(234,115,23, .9) 100%, rgba(221,221,221, .9) 100%), url('../Assets/todo.jpg');\\n}\\n\\n.Analytics {\\n    background: linear-gradient(90deg, rgba(61,165,217,.9) 100%, rgba(221,221,221,.9) 100%), url('../Assets/analytics.jpg');\\n}\\n\\n.Countdown {\\n    background: linear-gradient(90deg, rgba(254,198,1,.9) 100%, rgba(221,221,221,.9) 100%), url('../Assets/countdown.jpg');\\n}\\n\\n.Notes {\\n    background: linear-gradient(90deg, rgba(61,165,217,.9) 100%, rgba(221,221,221,.9) 100%), url('../Assets/notes.jpg');\\n}\\n\\n.Background {\\n    background-size: cover;\\n    background-position: center;\\n}\"]}]);\n// Exports\nexports.locals = {\n\t\"Grid\": \"HomeGrid_Grid__3B6ya\",\n\t\"Tile\": \"HomeGrid_Tile__3jHZ6\",\n\t\"Calendar\": \"HomeGrid_Calendar__38IJC\",\n\t\"Todo\": \"HomeGrid_Todo__3qoYF\",\n\t\"Analytics\": \"HomeGrid_Analytics__3tlG7\",\n\t\"Countdown\": \"HomeGrid_Countdown__2gMS8\",\n\t\"Notes\": \"HomeGrid_Notes__1aSIr\",\n\t\"Background\": \"HomeGrid_Background__2V8HU\"\n};\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWVHcmlkLm1vZHVsZS5jc3M/ZmNhZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFHQUFnRDtBQUMxRixzQ0FBc0MsbUJBQU8sQ0FBQywyR0FBbUQ7QUFDakcsb0NBQW9DLG1CQUFPLENBQUMscURBQXdCO0FBQ3BFLG9DQUFvQyxtQkFBTyxDQUFDLDZDQUFvQjtBQUNoRSxvQ0FBb0MsbUJBQU8sQ0FBQyx1REFBeUI7QUFDckUsb0NBQW9DLG1CQUFPLENBQUMsdURBQXlCO0FBQ3JFLG9DQUFvQyxtQkFBTyxDQUFDLCtDQUFxQjtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUywwQkFBMEIsa0JBQWtCLGlCQUFpQixvQkFBb0IsNENBQTRDLHlDQUF5QyxHQUFHLDJCQUEyQixtQkFBbUIsa0JBQWtCLG1CQUFtQixvQkFBb0IsNkJBQTZCLDBCQUEwQixvQ0FBb0Msc0JBQXNCLEdBQUcsK0JBQStCLGdKQUFnSixHQUFHLDJCQUEyQixpSkFBaUosR0FBRyxnQ0FBZ0MsK0lBQStJLEdBQUcsZ0NBQWdDLDhJQUE4SSxHQUFHLDRCQUE0QiwrSUFBK0ksR0FBRyxpQ0FBaUMsNkJBQTZCLGtDQUFrQyxHQUFHLE9BQU8sa0lBQWtJLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsOERBQThELGtCQUFrQixpQkFBaUIsb0JBQW9CLDRDQUE0Qyx5Q0FBeUMsR0FBRyxXQUFXLG1CQUFtQixrQkFBa0IsbUJBQW1CLG9CQUFvQiw2QkFBNkIsMEJBQTBCLG9DQUFvQyxzQkFBc0IsR0FBRyxlQUFlLDhIQUE4SCxHQUFHLFdBQVcsMkhBQTJILEdBQUcsZ0JBQWdCLDhIQUE4SCxHQUFHLGdCQUFnQiw2SEFBNkgsR0FBRyxZQUFZLDBIQUEwSCxHQUFHLGlCQUFpQiw2QkFBNkIsa0NBQWtDLEdBQUcsR0FBRztBQUNuK0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8hLi9jb21wb25lbnRzL0hvbWVHcmlkLm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIi4uL0Fzc2V0cy9jYWxlbmRhci5qcGdcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSByZXF1aXJlKFwiLi4vQXNzZXRzL3RvZG8uanBnXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gcmVxdWlyZShcIi4uL0Fzc2V0cy9hbmFseXRpY3MuanBnXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gcmVxdWlyZShcIi4uL0Fzc2V0cy9jb3VudGRvd24uanBnXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gcmVxdWlyZShcIi4uL0Fzc2V0cy9ub3Rlcy5qcGdcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5Ib21lR3JpZF9HcmlkX18zQjZ5YSB7XFxuICAgIGhlaWdodDogOTAlO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xcbn1cXG5cXG4uSG9tZUdyaWRfVGlsZV9fM2pIWjYge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5Ib21lR3JpZF9DYWxlbmRhcl9fMzhJSkMge1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMTE1LDE5MSwxODQsLjgpIDEwMCUsIHJnYmEoMjIxLDIyMSwyMjEsLjgpIDEwMCUpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG4uSG9tZUdyaWRfVG9kb19fM3FvWUYge1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjM0LDExNSwyMywgLjkpIDEwMCUsIHJnYmEoMjIxLDIyMSwyMjEsIC45KSAxMDAlKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuXFxuLkhvbWVHcmlkX0FuYWx5dGljc19fM3RsRzcge1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoNjEsMTY1LDIxNywuOSkgMTAwJSwgcmdiYSgyMjEsMjIxLDIyMSwuOSkgMTAwJSksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxufVxcblxcbi5Ib21lR3JpZF9Db3VudGRvd25fXzJnTVM4IHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI1NCwxOTgsMSwuOSkgMTAwJSwgcmdiYSgyMjEsMjIxLDIyMSwuOSkgMTAwJSksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxufVxcblxcbi5Ib21lR3JpZF9Ob3Rlc19fMWFTSXIge1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoNjEsMTY1LDIxNywuOSkgMTAwJSwgcmdiYSgyMjEsMjIxLDIyMSwuOSkgMTAwJSksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxufVxcblxcbi5Ib21lR3JpZF9CYWNrZ3JvdW5kX18yVjhIVSB7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2phY3F1ZWxpbmV0dXJvZi9OZXh0L29mZmljZS1zdWl0ZS1hcHAvY29tcG9uZW50cy9Ib21lR3JpZC5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUlBQXVIO0FBQzNIOztBQUVBO0lBQ0ksa0lBQW9IO0FBQ3hIOztBQUVBO0lBQ0ksZ0lBQXVIO0FBQzNIOztBQUVBO0lBQ0ksK0hBQXNIO0FBQzFIOztBQUVBO0lBQ0ksZ0lBQW1IO0FBQ3ZIOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLDJCQUEyQjtBQUMvQlwiLFwiZmlsZVwiOlwiSG9tZUdyaWQubW9kdWxlLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuR3JpZCB7XFxuICAgIGhlaWdodDogOTAlO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xcbn1cXG5cXG4uVGlsZSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLkNhbGVuZGFyIHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDExNSwxOTEsMTg0LC44KSAxMDAlLCByZ2JhKDIyMSwyMjEsMjIxLC44KSAxMDAlKSwgdXJsKCcuLi9Bc3NldHMvY2FsZW5kYXIuanBnJyk7XFxufVxcblxcbi5Ub2RvIHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDIzNCwxMTUsMjMsIC45KSAxMDAlLCByZ2JhKDIyMSwyMjEsMjIxLCAuOSkgMTAwJSksIHVybCgnLi4vQXNzZXRzL3RvZG8uanBnJyk7XFxufVxcblxcbi5BbmFseXRpY3Mge1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoNjEsMTY1LDIxNywuOSkgMTAwJSwgcmdiYSgyMjEsMjIxLDIyMSwuOSkgMTAwJSksIHVybCgnLi4vQXNzZXRzL2FuYWx5dGljcy5qcGcnKTtcXG59XFxuXFxuLkNvdW50ZG93biB7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyNTQsMTk4LDEsLjkpIDEwMCUsIHJnYmEoMjIxLDIyMSwyMjEsLjkpIDEwMCUpLCB1cmwoJy4uL0Fzc2V0cy9jb3VudGRvd24uanBnJyk7XFxufVxcblxcbi5Ob3RlcyB7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSg2MSwxNjUsMjE3LC45KSAxMDAlLCByZ2JhKDIyMSwyMjEsMjIxLC45KSAxMDAlKSwgdXJsKCcuLi9Bc3NldHMvbm90ZXMuanBnJyk7XFxufVxcblxcbi5CYWNrZ3JvdW5kIHtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cIl19XSk7XG4vLyBFeHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJHcmlkXCI6IFwiSG9tZUdyaWRfR3JpZF9fM0I2eWFcIixcblx0XCJUaWxlXCI6IFwiSG9tZUdyaWRfVGlsZV9fM2pIWjZcIixcblx0XCJDYWxlbmRhclwiOiBcIkhvbWVHcmlkX0NhbGVuZGFyX18zOElKQ1wiLFxuXHRcIlRvZG9cIjogXCJIb21lR3JpZF9Ub2RvX18zcW9ZRlwiLFxuXHRcIkFuYWx5dGljc1wiOiBcIkhvbWVHcmlkX0FuYWx5dGljc19fM3RsRzdcIixcblx0XCJDb3VudGRvd25cIjogXCJIb21lR3JpZF9Db3VudGRvd25fXzJnTVM4XCIsXG5cdFwiTm90ZXNcIjogXCJIb21lR3JpZF9Ob3Rlc19fMWFTSXJcIixcblx0XCJCYWNrZ3JvdW5kXCI6IFwiSG9tZUdyaWRfQmFja2dyb3VuZF9fMlY4SFVcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/HomeGrid.module.css\n");

/***/ })

})