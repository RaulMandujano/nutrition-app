"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/RecipeReviewCard.js":
/*!********************************************!*\
  !*** ./src/components/RecipeReviewCard.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RecipeReviewCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/index.js\");\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Card */ \"./node_modules/@mui/material/Card/index.js\");\n/* harmony import */ var _mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/CardHeader */ \"./node_modules/@mui/material/CardHeader/index.js\");\n/* harmony import */ var _mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/CardMedia */ \"./node_modules/@mui/material/CardMedia/index.js\");\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/CardContent */ \"./node_modules/@mui/material/CardContent/index.js\");\n/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/CardActions */ \"./node_modules/@mui/material/CardActions/index.js\");\n/* harmony import */ var _mui_material_Collapse__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material/Collapse */ \"./node_modules/@mui/material/Collapse/index.js\");\n/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Avatar */ \"./node_modules/@mui/material/Avatar/index.js\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/IconButton */ \"./node_modules/@mui/material/IconButton/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/colors */ \"./node_modules/@mui/material/colors/index.js\");\n/* harmony import */ var _mui_icons_material_Favorite__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/icons-material/Favorite */ \"./node_modules/@mui/icons-material/Favorite.js\");\n/* harmony import */ var _mui_icons_material_Share__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/icons-material/Share */ \"./node_modules/@mui/icons-material/Share.js\");\n/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/icons-material/ExpandMore */ \"./node_modules/@mui/icons-material/ExpandMore.js\");\n/* harmony import */ var _mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/MoreVert */ \"./node_modules/@mui/icons-material/MoreVert.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _objectWithoutProperties(source, excluded) {\n    if (source == null) return {};\n    var target = _objectWithoutPropertiesLoose(source, excluded);\n    var key, i;\n    if (Object.getOwnPropertySymbols) {\n        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n        for(i = 0; i < sourceSymbolKeys.length; i++){\n            key = sourceSymbolKeys[i];\n            if (excluded.indexOf(key) >= 0) continue;\n            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n            target[key] = source[key];\n        }\n    }\n    return target;\n}\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n    if (source == null) return {};\n    var target = {};\n    var sourceKeys = Object.keys(source);\n    var key, i;\n    for(i = 0; i < sourceKeys.length; i++){\n        key = sourceKeys[i];\n        if (excluded.indexOf(key) >= 0) continue;\n        target[key] = source[key];\n    }\n    return target;\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar ExpandMore = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)(function(props) {\n    var expand = props.expand, other = _objectWithoutProperties(props, [\n        \"expand\"\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _objectSpread({}, other), void 0, false, {\n        fileName: \"/Users/raulmandujano/Desktop/DGM 4790/nutrition-app/src/components/RecipeReviewCard.js\",\n        lineNumber: 21,\n        columnNumber: 10\n    }, _this);\n})(function(param) {\n    var theme = param.theme, expand = param.expand;\n    return {\n        transform: !expand ? \"rotate(0deg)\" : \"rotate(180deg)\",\n        marginLeft: \"auto\",\n        transition: theme.transitions.create(\"transform\", {\n            duration: theme.transitions.duration.shortest\n        })\n    };\n});\n_c = ExpandMore;\nfunction RecipeReviewCard(props) {\n    var _this1 = this;\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1__.useState(false), 2), expanded = ref[0], setExpanded = ref[1];\n    var handleExpandClick = function() {\n        setExpanded(!expanded);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        sx: {\n            width: 300\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                avatar: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    sx: {\n                        bgcolor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_8__.red[500]\n                    },\n                    \"aria-label\": \"recipe\",\n                    children: \"0\"\n                }, void 0, false, void 0, void 0),\n                action: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    \"aria-label\": \"settings\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, void 0, void 0)\n                }, void 0, false, void 0, void 0),\n                title: props.title\n            }, void 0, false, {\n                fileName: \"/Users/raulmandujano/Desktop/DGM 4790/nutrition-app/src/components/RecipeReviewCard.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                component: \"img\",\n                height: \"194\",\n                image: props.image,\n                alt: \"Paella dish\",\n                onClick: function() {\n                    return next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/recipe/\".concat(props.id));\n                }\n            }, void 0, false, {\n                fileName: \"/Users/raulmandujano/Desktop/DGM 4790/nutrition-app/src/components/RecipeReviewCard.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                    variant: \"body2\",\n                    color: \"text.secondary\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Ingredients\"\n                        }, void 0, false, {\n                            fileName: \"/Users/raulmandujano/Desktop/DGM 4790/nutrition-app/src/components/RecipeReviewCard.js\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: [\n                                props.usedIngredients.map(function(ingrediant, index) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: ingrediant.originalName\n                                    }, index, false, {\n                                        fileName: \"/Users/raulmandujano/Desktop/DGM 4790/nutrition-app/src/components/RecipeReviewCard.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 13\n                                    }, _this1);\n                                }),\n                                props.usedIngredients.map(function(ingrediant, index) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: ingrediant.original\n                                    }, index, false, {\n                                        fileName: \"/Users/raulmandujano/Desktop/DGM 4790/nutrition-app/src/components/RecipeReviewCard.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 13\n                                    }, _this1);\n                                }),\n                                props.usedIngredients.map(function(ingrediant, index) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: [\n                                            \"Aisle: \",\n                                            ingrediant.aisle\n                                        ]\n                                    }, index, true, {\n                                        fileName: \"/Users/raulmandujano/Desktop/DGM 4790/nutrition-app/src/components/RecipeReviewCard.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 13\n                                    }, _this1);\n                                })\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/raulmandujano/Desktop/DGM 4790/nutrition-app/src/components/RecipeReviewCard.js\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/raulmandujano/Desktop/DGM 4790/nutrition-app/src/components/RecipeReviewCard.js\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/raulmandujano/Desktop/DGM 4790/nutrition-app/src/components/RecipeReviewCard.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                disableSpacing: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        \"aria-label\": \"add to favorites\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Favorite__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/raulmandujano/Desktop/DGM 4790/nutrition-app/src/components/RecipeReviewCard.js\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/raulmandujano/Desktop/DGM 4790/nutrition-app/src/components/RecipeReviewCard.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        \"aria-label\": \"share\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Share__WEBPACK_IMPORTED_MODULE_15__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/raulmandujano/Desktop/DGM 4790/nutrition-app/src/components/RecipeReviewCard.js\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/raulmandujano/Desktop/DGM 4790/nutrition-app/src/components/RecipeReviewCard.js\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ExpandMore, {\n                        expand: expanded,\n                        onClick: handleExpandClick,\n                        \"aria-expanded\": expanded,\n                        \"aria-label\": \"show more\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_16__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/raulmandujano/Desktop/DGM 4790/nutrition-app/src/components/RecipeReviewCard.js\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/raulmandujano/Desktop/DGM 4790/nutrition-app/src/components/RecipeReviewCard.js\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/raulmandujano/Desktop/DGM 4790/nutrition-app/src/components/RecipeReviewCard.js\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Collapse__WEBPACK_IMPORTED_MODULE_17__[\"default\"], {\n                in: expanded,\n                timeout: \"auto\",\n                unmountOnExit: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                            paragraph: true,\n                            children: \"Method:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/raulmandujano/Desktop/DGM 4790/nutrition-app/src/components/RecipeReviewCard.js\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                            paragraph: true,\n                            children: \"Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/raulmandujano/Desktop/DGM 4790/nutrition-app/src/components/RecipeReviewCard.js\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                            paragraph: true,\n                            children: \"Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add piment\\xf3n, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/raulmandujano/Desktop/DGM 4790/nutrition-app/src/components/RecipeReviewCard.js\",\n                            lineNumber: 100,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                            paragraph: true,\n                            children: \"Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don't open.)\"\n                        }, void 0, false, {\n                            fileName: \"/Users/raulmandujano/Desktop/DGM 4790/nutrition-app/src/components/RecipeReviewCard.js\",\n                            lineNumber: 109,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                            children: \"Set aside off of the heat to let rest for 10 minutes, and then serve.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/raulmandujano/Desktop/DGM 4790/nutrition-app/src/components/RecipeReviewCard.js\",\n                            lineNumber: 117,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/raulmandujano/Desktop/DGM 4790/nutrition-app/src/components/RecipeReviewCard.js\",\n                    lineNumber: 94,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/raulmandujano/Desktop/DGM 4790/nutrition-app/src/components/RecipeReviewCard.js\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/raulmandujano/Desktop/DGM 4790/nutrition-app/src/components/RecipeReviewCard.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n};\n_s(RecipeReviewCard, \"DuL5jiiQQFgbn7gBKAyxwS/H4Ek=\");\n_c1 = RecipeReviewCard;\nvar _c, _c1;\n$RefreshReg$(_c, \"ExpandMore\");\n$RefreshReg$(_c1, \"RecipeReviewCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZWNpcGVSZXZpZXdDYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUNlO0FBQ1I7QUFDWTtBQUNGO0FBQ0k7QUFDQTtBQUNOO0FBQ0o7QUFDUTtBQUNBO0FBQ1A7QUFDYTtBQUNOO0FBQ1U7QUFDSjtBQUN2Qjs7QUFFakMsSUFBTWlCLFVBQVUsR0FBR2hCLDREQUFNLENBQUMsU0FBQ2lCLEtBQUssRUFBSztJQUNuQyxJQUFNLE1BQVEsR0FBZUEsS0FBSyxDQUExQkMsTUFBTSxFQUFLQyxLQUFLLDRCQUFLRixLQUFLO1FBQTFCQyxRQUFNO01BQXFCO0lBQ25DLHFCQUFPLDhEQUFDVixnRUFBVSxvQkFBS1csS0FBSzs7OzthQUFJLENBQUM7Q0FDbEMsQ0FBQyxDQUFDO1FBQUdDLEtBQUssU0FBTEEsS0FBSyxFQUFFRixNQUFNLFNBQU5BLE1BQU07V0FBUTtRQUN6QkcsU0FBUyxFQUFFLENBQUNILE1BQU0sR0FBRyxjQUFjLEdBQUcsZ0JBQWdCO1FBQ3RESSxVQUFVLEVBQUUsTUFBTTtRQUNsQkMsVUFBVSxFQUFFSCxLQUFLLENBQUNJLFdBQVcsQ0FBQ0MsTUFBTSxDQUFDLFdBQVcsRUFBRTtZQUNoREMsUUFBUSxFQUFFTixLQUFLLENBQUNJLFdBQVcsQ0FBQ0UsUUFBUSxDQUFDQyxRQUFRO1NBQzlDLENBQUM7S0FDSDtDQUFDLENBQUM7QUFUR1gsS0FBQUEsVUFBVTtBQVdELFNBQVNZLGdCQUFnQixDQUFDWCxLQUFLLEVBQUU7OztJQUM5QyxJQUFnQ2xCLEdBQXFCLGtCQUFyQkEsMkNBQWMsQ0FBQyxLQUFLLENBQUMsTUFBOUMrQixRQUFRLEdBQWlCL0IsR0FBcUIsR0FBdEMsRUFBRWdDLFdB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O3NDQUMxQyw4REFBQ3ZELGlFQUFVOzRCQUFDdUQsU0FBUztzQ0FBQywrRkFHdEI7Ozs7O2dDQUFhO3NDQUNiLDhEQUFDdkQsaUVBQVU7NEJBQUN1RCxTQUFTO3NDQUFDLHNmQVF0Qjs7Ozs7Z0NBQWE7c0NBQ2IsOERBQUN2RCxpRUFBVTs0QkFBQ3VELFNBQVM7c0NBQUMsK1lBT3RCOzs7OztnQ0FBYTtzQ0FDYiw4REFBQ3ZELGlFQUFVO3NDQUFDLHVFQUVaOzs7OztnQ0FBYTs7Ozs7O3dCQUVEOzs7OztvQkFDTDs7Ozs7O1lBQ04sQ0FDUDtDQUNIO0dBL0Z1Qm1CLGdCQUFnQjtBQUFoQkEsTUFBQUEsZ0JBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1JlY2lwZVJldmlld0NhcmQuanM/NzJhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XG5pbXBvcnQgQ2FyZCBmcm9tICdAbXVpL21hdGVyaWFsL0NhcmQnO1xuaW1wb3J0IENhcmRIZWFkZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9DYXJkSGVhZGVyJztcbmltcG9ydCBDYXJkTWVkaWEgZnJvbSAnQG11aS9tYXRlcmlhbC9DYXJkTWVkaWEnO1xuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ2FyZENvbnRlbnQnO1xuaW1wb3J0IENhcmRBY3Rpb25zIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ2FyZEFjdGlvbnMnO1xuaW1wb3J0IENvbGxhcHNlIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ29sbGFwc2UnO1xuaW1wb3J0IEF2YXRhciBmcm9tICdAbXVpL21hdGVyaWFsL0F2YXRhcic7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0ljb25CdXR0b24nO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5JztcbmltcG9ydCB7IHJlZCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvY29sb3JzJztcbmltcG9ydCBGYXZvcml0ZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9GYXZvcml0ZSc7XG5pbXBvcnQgU2hhcmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2hhcmUnO1xuaW1wb3J0IEV4cGFuZE1vcmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRXhwYW5kTW9yZSc7XG5pbXBvcnQgTW9yZVZlcnRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTW9yZVZlcnQnO1xuaW1wb3J0IHJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5cbmNvbnN0IEV4cGFuZE1vcmUgPSBzdHlsZWQoKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgZXhwYW5kLCAuLi5vdGhlciB9ID0gcHJvcHM7XG4gIHJldHVybiA8SWNvbkJ1dHRvbiB7Li4ub3RoZXJ9IC8+O1xufSkoKHsgdGhlbWUsIGV4cGFuZCB9KSA9PiAoe1xuICB0cmFuc2Zvcm06ICFleHBhbmQgPyAncm90YXRlKDBkZWcpJyA6ICdyb3RhdGUoMTgwZGVnKScsXG4gIG1hcmdpbkxlZnQ6ICdhdXRvJyxcbiAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd0cmFuc2Zvcm0nLCB7XG4gICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLnNob3J0ZXN0LFxuICB9KSxcbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVjaXBlUmV2aWV3Q2FyZChwcm9wcykge1xuICBjb25zdCBbZXhwYW5kZWQsIHNldEV4cGFuZGVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVFeHBhbmRDbGljayA9ICgpID0+IHtcbiAgICBzZXRFeHBhbmRlZCghZXhwYW5kZWQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENhcmQgc3g9e3sgd2lkdGg6IDMwMCB9fT5cbiAgICAgIDxDYXJkSGVhZGVyXG4gICAgICAgIGF2YXRhcj17XG4gICAgICAgICAgPEF2YXRhciBzeD17eyBiZ2NvbG9yOiByZWRbNTAwXSB9fSBhcmlhLWxhYmVsPVwicmVjaXBlXCI+XG4gICAgICAgICAgICAwXG4gICAgICAgICAgPC9BdmF0YXI+XG4gICAgICAgIH1cbiAgICAgICAgYWN0aW9uPXtcbiAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwic2V0dGluZ3NcIj5cbiAgICAgICAgICAgIDxNb3JlVmVydEljb24gLz5cbiAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgIH1cbiAgICAgICAgdGl0bGU9e3Byb3BzLnRpdGxlfVxuICAgICAgLz5cbiAgICAgIDxDYXJkTWVkaWFcbiAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcbiAgICAgICAgaGVpZ2h0PVwiMTk0XCJcbiAgICAgICAgaW1hZ2U9e3Byb3BzLmltYWdlfVxuICAgICAgICBhbHQ9XCJQYWVsbGEgZGlzaFwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKGAvcmVjaXBlLyR7cHJvcHMuaWR9YCl9XG4gICAgICAvPlxuICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgPGgyPkluZ3JlZGllbnRzPC9oMj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAge3Byb3BzLnVzZWRJbmdyZWRpZW50cy5tYXAoKGluZ3JlZGlhbnQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+e2luZ3JlZGlhbnQub3JpZ2luYWxOYW1lfTwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAge3Byb3BzLnVzZWRJbmdyZWRpZW50cy5tYXAoKGluZ3JlZGlhbnQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+e2luZ3JlZGlhbnQub3JpZ2luYWx9PC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgICB7cHJvcHMudXNlZEluZ3JlZGllbnRzLm1hcCgoaW5ncmVkaWFudCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5BaXNsZToge2luZ3JlZGlhbnQuYWlzbGV9PC9saT5cbiAgICAgICAgICApKX1cblxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgXG4gICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgPENhcmRBY3Rpb25zIGRpc2FibGVTcGFjaW5nPlxuICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiYWRkIHRvIGZhdm9yaXRlc1wiPlxuICAgICAgICAgIDxGYXZvcml0ZUljb24gLz5cbiAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwic2hhcmVcIj5cbiAgICAgICAgICA8U2hhcmVJY29uIC8+XG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgPEV4cGFuZE1vcmVcbiAgICAgICAgICBleHBhbmQ9e2V4cGFuZGVkfVxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUV4cGFuZENsaWNrfVxuICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9e2V4cGFuZGVkfVxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJzaG93IG1vcmVcIlxuICAgICAgICA+XG4gICAgICAgICAgPEV4cGFuZE1vcmVJY29uIC8+XG4gICAgICAgIDwvRXhwYW5kTW9yZT5cbiAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgICA8Q29sbGFwc2UgaW49e2V4cGFuZGVkfSB0aW1lb3V0PVwiYXV0b1wiIHVubW91bnRPbkV4aXQ+XG4gICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICA8VHlwb2dyYXBoeSBwYXJhZ3JhcGg+TWV0aG9kOjwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSBwYXJhZ3JhcGg+XG4gICAgICAgICAgICBIZWF0IDEvMiBjdXAgb2YgdGhlIGJyb3RoIGluIGEgcG90IHVudGlsIHNpbW1lcmluZywgYWRkIHNhZmZyb24gYW5kIHNldFxuICAgICAgICAgICAgYXNpZGUgZm9yIDEwIG1pbnV0ZXMuXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHBhcmFncmFwaD5cbiAgICAgICAgICAgIEhlYXQgb2lsIGluIGEgKDE0LSB0byAxNi1pbmNoKSBwYWVsbGEgcGFuIG9yIGEgbGFyZ2UsIGRlZXAgc2tpbGxldCBvdmVyXG4gICAgICAgICAgICBtZWRpdW0taGlnaCBoZWF0LiBBZGQgY2hpY2tlbiwgc2hyaW1wIGFuZCBjaG9yaXpvLCBhbmQgY29vaywgc3RpcnJpbmdcbiAgICAgICAgICAgIG9jY2FzaW9uYWxseSB1bnRpbCBsaWdodGx5IGJyb3duZWQsIDYgdG8gOCBtaW51dGVzLiBUcmFuc2ZlciBzaHJpbXAgdG8gYVxuICAgICAgICAgICAgbGFyZ2UgcGxhdGUgYW5kIHNldCBhc2lkZSwgbGVhdmluZyBjaGlja2VuIGFuZCBjaG9yaXpvIGluIHRoZSBwYW4uIEFkZFxuICAgICAgICAgICAgcGltZW50w7NuLCBiYXkgbGVhdmVzLCBnYXJsaWMsIHRvbWF0b2VzLCBvbmlvbiwgc2FsdCBhbmQgcGVwcGVyLCBhbmQgY29vayxcbiAgICAgICAgICAgIHN0aXJyaW5nIG9mdGVuIHVudGlsIHRoaWNrZW5lZCBhbmQgZnJhZ3JhbnQsIGFib3V0IDEwIG1pbnV0ZXMuIEFkZFxuICAgICAgICAgICAgc2FmZnJvbiBicm90aCBhbmQgcmVtYWluaW5nIDQgMS8yIGN1cHMgY2hpY2tlbiBicm90aDsgYnJpbmcgdG8gYSBib2lsLlxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSBwYXJhZ3JhcGg+XG4gICAgICAgICAgICBBZGQgcmljZSBhbmQgc3RpciB2ZXJ5IGdlbnRseSB0byBkaXN0cmlidXRlLiBUb3Agd2l0aCBhcnRpY2hva2VzIGFuZFxuICAgICAgICAgICAgcGVwcGVycywgYW5kIGNvb2sgd2l0aG91dCBzdGlycmluZywgdW50aWwgbW9zdCBvZiB0aGUgbGlxdWlkIGlzIGFic29yYmVkLFxuICAgICAgICAgICAgMTUgdG8gMTggbWludXRlcy4gUmVkdWNlIGhlYXQgdG8gbWVkaXVtLWxvdywgYWRkIHJlc2VydmVkIHNocmltcCBhbmRcbiAgICAgICAgICAgIG11c3NlbHMsIHR1Y2tpbmcgdGhlbSBkb3duIGludG8gdGhlIHJpY2UsIGFuZCBjb29rIGFnYWluIHdpdGhvdXRcbiAgICAgICAgICAgIHN0aXJyaW5nLCB1bnRpbCBtdXNzZWxzIGhhdmUgb3BlbmVkIGFuZCByaWNlIGlzIGp1c3QgdGVuZGVyLCA1IHRvIDdcbiAgICAgICAgICAgIG1pbnV0ZXMgbW9yZS4gKERpc2NhcmQgYW55IG11c3NlbHMgdGhhdCBkb24mYXBvczt0IG9wZW4uKVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeT5cbiAgICAgICAgICAgIFNldCBhc2lkZSBvZmYgb2YgdGhlIGhlYXQgdG8gbGV0IHJlc3QgZm9yIDEwIG1pbnV0ZXMsIGFuZCB0aGVuIHNlcnZlLlxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICBcbiAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgIDwvQ29sbGFwc2U+XG4gICAgPC9DYXJkPlxuICApO1xufSJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsIkNhcmQiLCJDYXJkSGVhZGVyIiwiQ2FyZE1lZGlhIiwiQ2FyZENvbnRlbnQiLCJDYXJkQWN0aW9ucyIsIkNvbGxhcHNlIiwiQXZhdGFyIiwiSWNvbkJ1dHRvbiIsIlR5cG9ncmFwaHkiLCJyZWQiLCJGYXZvcml0ZUljb24iLCJTaGFyZUljb24iLCJFeHBhbmRNb3JlSWNvbiIsIk1vcmVWZXJ0SWNvbiIsInJvdXRlciIsIkV4cGFuZE1vcmUiLCJwcm9wcyIsImV4cGFuZCIsIm90aGVyIiwidGhlbWUiLCJ0cmFuc2Zvcm0iLCJtYXJnaW5MZWZ0IiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZHVyYXRpb24iLCJzaG9ydGVzdCIsIlJlY2lwZVJldmlld0NhcmQiLCJ1c2VTdGF0ZSIsImV4cGFuZGVkIiwic2V0RXhwYW5kZWQiLCJoYW5kbGVFeHBhbmRDbGljayIsInN4Iiwid2lkdGgiLCJhdmF0YXIiLCJiZ2NvbG9yIiwiYXJpYS1sYWJlbCIsImFjdGlvbiIsInRpdGxlIiwiY29tcG9uZW50IiwiaGVpZ2h0IiwiaW1hZ2UiLCJhbHQiLCJvbkNsaWNrIiwicHVzaCIsImlkIiwidmFyaWFudCIsImNvbG9yIiwiaDIiLCJ1bCIsInVzZWRJbmdyZWRpZW50cyIsIm1hcCIsImluZ3JlZGlhbnQiLCJpbmRleCIsImxpIiwib3JpZ2luYWxOYW1lIiwib3JpZ2luYWwiLCJhaXNsZSIsImRpc2FibGVTcGFjaW5nIiwiYXJpYS1leHBhbmRlZCIsImluIiwidGltZW91dCIsInVubW91bnRPbkV4aXQiLCJwYXJhZ3JhcGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/RecipeReviewCard.js\n");

/***/ })

});