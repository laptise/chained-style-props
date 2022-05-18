/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["chained-style-props"] = factory();
	else
		root["chained-style-props"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ChainedTextProps = exports.ChainedBorderProps = exports.ChainedBoxProps = exports.ChainedSizeProps = exports.ChainedFlexBoxProps = exports.csp = void 0;\n/**CSP Initiator */\nclass CspInitiator {\n    get Flex() {\n        return new ChainedFlexBoxProps();\n    }\n    get Size() {\n        return new ChainedSizeProps();\n    }\n    get Box() {\n        return new ChainedBoxProps();\n    }\n    get Border() {\n        return new ChainedBorderProps();\n    }\n    get Text() {\n        return new ChainedTextProps();\n    }\n}\n/**Initiate Chained Style Properties */\nconst csp = () => new CspInitiator();\nexports.csp = csp;\nclass ChainedStylePropsCore {\n    constructor(keyProps = {}, parent = null) {\n        this.keyProps = keyProps;\n        this.parent = parent;\n    }\n    get csp() {\n        return this.getRecursive();\n    }\n    getRecursive(tree = [this]) {\n        const parent = this.parent;\n        return (parent === null || parent === void 0 ? void 0 : parent.parent) ? parent.getRecursive([...tree, this]) : tree.reduce((props, t) => (Object.assign(Object.assign({}, props), t.keyProps)), {});\n    }\n    getParent() {\n        return this.parent;\n    }\n    get Flex() {\n        return new ChainedFlexBoxProps(this.csp);\n    }\n    get Size() {\n        return new ChainedSizeProps(this.csp);\n    }\n    get Box() {\n        return new ChainedBoxProps(this.csp);\n    }\n    get Border() {\n        return new ChainedBorderProps(this.csp);\n    }\n    get Text() {\n        return new ChainedTextProps(this.csp);\n    }\n}\nclass ChainedFlexBoxProps extends ChainedStylePropsCore {\n    constructor(keyProps = {}) {\n        super(Object.assign(Object.assign({}, keyProps), { display: \"flex\" }));\n    }\n    /**Set flex direction to Row */\n    get row() {\n        this.keyProps.flexDirection = \"row\";\n        return this;\n    }\n    /**Set flex direction to Column */\n    get column() {\n        this.keyProps.flexDirection = \"column\";\n        return this;\n    }\n    /**Set gap spacing size */\n    gap(gap) {\n        this.keyProps.gap = gap;\n        return this;\n    }\n    get topAlign() {\n        if (this.keyProps.flexDirection === \"row\") {\n            this.keyProps.alignItems = \"flex-start\";\n        }\n        else if (this.keyProps.flexDirection === \"column\") {\n            this.keyProps.justifyContent = \"flex-start\";\n        }\n        return this;\n    }\n    get bottomAlign() {\n        if (this.keyProps.flexDirection === \"row\") {\n            this.keyProps.alignItems = \"flex-end\";\n        }\n        else if (this.keyProps.flexDirection === \"column\") {\n            this.keyProps.justifyContent = \"flex-end\";\n        }\n        return this;\n    }\n    get verticalCenterAlign() {\n        if (this.keyProps.flexDirection === \"row\") {\n            this.keyProps.alignItems = \"center\";\n        }\n        else if (this.keyProps.flexDirection === \"column\") {\n            this.keyProps.justifyContent = \"center\";\n        }\n        return this;\n    }\n    get horizontalCenterAlign() {\n        if (this.keyProps.flexDirection === \"row\") {\n            this.keyProps.justifyContent = \"center\";\n        }\n        else if (this.keyProps.flexDirection === \"column\") {\n            this.keyProps.alignItems = \"center\";\n        }\n        return this;\n    }\n}\nexports.ChainedFlexBoxProps = ChainedFlexBoxProps;\nclass ChainedSizeProps extends ChainedStylePropsCore {\n    constructor(keyProps = {}) {\n        super(Object.assign({}, keyProps));\n    }\n    width(px) {\n        this.keyProps.width = px;\n        return this;\n    }\n    height(px) {\n        this.keyProps.height = px;\n        return this;\n    }\n    minHeight(px) {\n        this.keyProps.minHeight = px;\n        return this;\n    }\n    minWidth(px) {\n        this.keyProps.width = px;\n        return this;\n    }\n    maxWidth(px) {\n        this.keyProps.maxWidth = px;\n        return this;\n    }\n    maxHeight(px) {\n        this.keyProps.maxHeight = px;\n        return this;\n    }\n}\nexports.ChainedSizeProps = ChainedSizeProps;\nclass ChainedBoxProps extends ChainedStylePropsCore {\n    constructor(keyProps = {}) {\n        super(Object.assign({}, keyProps));\n    }\n    padding(px) {\n        this.keyProps.padding = px;\n        return this;\n    }\n    margin(px) {\n        this.keyProps.margin = px;\n        return this;\n    }\n}\nexports.ChainedBoxProps = ChainedBoxProps;\nclass ChainedBorderProps extends ChainedStylePropsCore {\n    constructor(keyProps = {}) {\n        super(Object.assign({}, keyProps));\n    }\n    radius(px) {\n        this.keyProps.borderRadius = px;\n        return this;\n    }\n    width(px) {\n        this.keyProps.borderWidth = px;\n        return this;\n    }\n    color(v) {\n        this.keyProps.borderColor = v;\n        return this;\n    }\n    style(v) {\n        this.keyProps.borderStyle = v;\n        return this;\n    }\n    get solid() {\n        this.keyProps.borderStyle = \"solid\";\n        return this;\n    }\n    get dashed() {\n        this.keyProps.borderStyle = \"dashed\";\n        return this;\n    }\n}\nexports.ChainedBorderProps = ChainedBorderProps;\nclass ChainedTextProps extends ChainedStylePropsCore {\n    constructor(keyProps = {}) {\n        super(Object.assign({}, keyProps));\n    }\n    fontSize(value) {\n        this.keyProps.fontSize = value;\n        return this;\n    }\n    overFlow(value) {\n        this.keyProps.textOverflow = value;\n        return this;\n    }\n    whiteSpace(value) {\n        this.keyProps.whiteSpace = value;\n        return this;\n    }\n}\nexports.ChainedTextProps = ChainedTextProps;\n\n\n//# sourceURL=webpack://chained-style-props/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"](0, __webpack_exports__);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});