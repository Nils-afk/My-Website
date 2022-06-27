"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/repos";
exports.ids = ["pages/api/repos"];
exports.modules = {

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "(api)/./pages/api/repos.jsx":
/*!*****************************!*\
  !*** ./pages/api/repos.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst fetch = __webpack_require__(/*! isomorphic-unfetch */ \"isomorphic-unfetch\");\nlet key1 = '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';\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    let _ = await (await fetch('https://api.github.com/users/nils-afk/repos', {\n        headers: {}\n    })).json();\n    try {\n        res.send([\n            ..._\n        ]);\n    } catch  {\n        res.status(500);\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmVwb3MuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxLQUFLLENBQUNBLEtBQUssR0FBR0MsbUJBQU8sQ0FBQyw4Q0FBb0I7QUFFMUMsR0FBRyxDQUFDQyxJQUFJLEdBQUcsQ0FBMEM7QUFFckQsaUVBQU0sT0FBZ0JDLEdBQUcsRUFBRUMsR0FBRyxHQUFLLENBQUM7SUFDaEMsR0FBTSxDQUFDQyxDQUFDLEdBQUcsS0FBSyxFQUFFLEtBQUssQ0FBQ0wsS0FBSyxDQUFDLENBQTZDLDhDQUFFLENBQUM7UUFDdkVNLE9BQVcsRUFBRSxDQUFDLENBQUM7SUFDZixDQUFOLEdBQUdDLElBQUk7SUFXWixHQUFHLENBQUMsQ0FBQztRQUNHSCxHQUFHLENBQUNJLElBQUksQ0FBQyxDQUFDO2VBQUdILENBQUM7UUFBQSxDQUFDO0lBQ25CLENBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQztRQUNMRCxHQUFPLENBQUNLLE1BQU0sQ0FBQyxHQUFHO0lBQ2xCLENBQU47QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xxdS5saXZlLy4vcGFnZXMvYXBpL3JlcG9zLmpzeD8xYTIyIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZldGNoID0gcmVxdWlyZSgnaXNvbW9ycGhpYy11bmZldGNoJykgXG5cbmxldCBrZXkxID0gJ2docF9peDRCOElMWmc2MzlkSUpXZm9QUG5oZlNCVThpMXcxSWFzRVknO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbsKgwqDCoCBsZXQgXyA9IGF3YWl0IChhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9uaWxzLWFmay9yZXBvcycsIHtcbsKgwqDCoMKgwqDCoMKgIGhlYWRlcnM6IHt9XG4gICAgfSkpLmpzb24oKTsgXG4gIFxuXG4gXG4gICAgICAgIFxuICAgIFxuXG5cblxuICAgICAgICBcbiAgICBcbnRyeSB7XG4gICAgICAgIHJlcy5zZW5kKFsuLi5fXSlcbsKgwqDCoCB9IGNhdGNoIHtcbsKgwqDCoMKgwqDCoMKgIHJlcy5zdGF0dXMoNTAwKTtcbsKgwqDCoCB9XG59XG4iXSwibmFtZXMiOlsiZmV0Y2giLCJyZXF1aXJlIiwia2V5MSIsInJlcSIsInJlcyIsIl8iLCJoZWFkZXJzIiwianNvbiIsInNlbmQiLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/repos.jsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/repos.jsx"));
module.exports = __webpack_exports__;

})();