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
exports.id = "pages/recipe/[recipeId]";
exports.ids = ["pages/recipe/[recipeId]"];
exports.modules = {

/***/ "./src/apis/authHeaders.js":
/*!*********************************!*\
  !*** ./src/apis/authHeaders.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    \"X-RapidAPI-Host\": \"spoonacular-recipe-food-nutrition-v1.p.rapidapi.com\",\n    \"X-RapidAPI-Key\": \"b2676f4bacmshf024e52eb9e1defp1b229djsn7b29df711424\"\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpcy9hdXRoSGVhZGVycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsaUVBQWU7SUFDWCxpQkFBaUIsRUFBRSxxREFBcUQ7SUFDeEUsZ0JBQWdCLEVBQUUsb0RBQW9EO0NBQ3pFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbnV0cml0aW9uLWFwcC8uL3NyYy9hcGlzL2F1dGhIZWFkZXJzLmpzP2RiNTAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgICdYLVJhcGlkQVBJLUhvc3QnOiAnc3Bvb25hY3VsYXItcmVjaXBlLWZvb2QtbnV0cml0aW9uLXYxLnAucmFwaWRhcGkuY29tJyxcbiAgICAnWC1SYXBpZEFQSS1LZXknOiAnYjI2NzZmNGJhY21zaGYwMjRlNTJlYjllMWRlZnAxYjIyOWRqc243YjI5ZGY3MTE0MjQnXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/apis/authHeaders.js\n");

/***/ }),

/***/ "./src/apis/getRecipe.js":
/*!*******************************!*\
  !*** ./src/apis/getRecipe.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _authHeaders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authHeaders */ \"./src/apis/authHeaders.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((recipeId)=>{\n    return fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipeId}/information`, {\n        headers: _authHeaders__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n    }).then((res)=>res.json()\n    );\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpcy9nZXRSZWNpcGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBdUM7QUFHdkMsaUVBQWUsQ0FBQ0MsUUFBUSxHQUFLO0lBQ3pCLE9BQU9DLEtBQUssQ0FBQyxDQUFDLG9FQUFvRSxFQUFFRCxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUU7UUFBQ0UsT0FBTyxFQUFFSCxvREFBVztLQUFDLENBQUMsQ0FDOUhJLElBQUksQ0FBQ0MsQ0FBQUEsR0FBRyxHQUFJQSxHQUFHLENBQUNDLElBQUksRUFBRTtJQUFBLENBQUM7Q0FDL0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9udXRyaXRpb24tYXBwLy4vc3JjL2FwaXMvZ2V0UmVjaXBlLmpzPzA4YTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF1dGhIZWFkZXJzIGZyb20gXCIuL2F1dGhIZWFkZXJzXCJcblxuXG5leHBvcnQgZGVmYXVsdCAocmVjaXBlSWQpID0+IHtcbiAgICByZXR1cm4gZmV0Y2goYGh0dHBzOi8vc3Bvb25hY3VsYXItcmVjaXBlLWZvb2QtbnV0cml0aW9uLXYxLnAucmFwaWRhcGkuY29tL3JlY2lwZXMvJHtyZWNpcGVJZH0vaW5mb3JtYXRpb25gLCB7aGVhZGVyczogYXV0aEhlYWRlcnN9KVxuICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbn0iXSwibmFtZXMiOlsiYXV0aEhlYWRlcnMiLCJyZWNpcGVJZCIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/apis/getRecipe.js\n");

/***/ }),

/***/ "./src/pages/recipe/[recipeId].js":
/*!****************************************!*\
  !*** ./src/pages/recipe/[recipeId].js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apis_getRecipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apis/getRecipe */ \"./src/apis/getRecipe.js\");\n\n\nconst RecipePage = (props)=>{\n    console.log(props);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Recipe Page\"\n    }, void 0, false, {\n        fileName: \"/Users/raulmandujano/Desktop/DGM 4790/nutrition-app/src/pages/recipe/[recipeId].js\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, undefined);\n};\nconst getServerSideProps = async (context)=>{\n    const recipe = await (0,_apis_getRecipe__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(context.query.recipeId);\n    return {\n        props: recipe\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecipePage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcmVjaXBlL1tyZWNpcGVJZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUE2QztBQUU3QyxNQUFNQyxVQUFVLEdBQUdDLENBQUFBLEtBQUssR0FBSTtJQUN4QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQyxDQUFDO0lBQ25CLHFCQUNJLDhEQUFDRyxLQUFHO2tCQUFDLGFBQVc7Ozs7O2lCQUFNLENBQ3pCO0NBQ0o7QUFHTSxNQUFNQyxrQkFBa0IsR0FBRyxPQUFNQyxPQUFPLEdBQUk7SUFDL0MsTUFBTUMsTUFBTSxHQUFHLE1BQU1SLDJEQUFTLENBQUNPLE9BQU8sQ0FBQ0UsS0FBSyxDQUFDQyxRQUFRLENBQUM7SUFDdEQsT0FBTztRQUFDUixLQUFLLEVBQUVNLE1BQU07S0FBQztDQUN6QjtBQUVELGlFQUFlUCxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9udXRyaXRpb24tYXBwLy4vc3JjL3BhZ2VzL3JlY2lwZS9bcmVjaXBlSWRdLmpzPzkwMTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldFJlY2lwZSBmcm9tICcuLi8uLi9hcGlzL2dldFJlY2lwZSc7XG5cbmNvbnN0IFJlY2lwZVBhZ2UgPSBwcm9wcyA9PiB7XG4gICAgY29uc29sZS5sb2cocHJvcHMpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+UmVjaXBlIFBhZ2U8L2Rpdj5cbiAgICApXG59XG5cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIGNvbnRleHQgPT4ge1xuICAgIGNvbnN0IHJlY2lwZSA9IGF3YWl0IGdldFJlY2lwZShjb250ZXh0LnF1ZXJ5LnJlY2lwZUlkKVxuICAgIHJldHVybiB7cHJvcHM6IHJlY2lwZX1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVjaXBlUGFnZTsiXSwibmFtZXMiOlsiZ2V0UmVjaXBlIiwiUmVjaXBlUGFnZSIsInByb3BzIiwiY29uc29sZSIsImxvZyIsImRpdiIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJyZWNpcGUiLCJxdWVyeSIsInJlY2lwZUlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/recipe/[recipeId].js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/recipe/[recipeId].js"));
module.exports = __webpack_exports__;

})();