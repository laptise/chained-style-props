"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChainedTextProps = exports.ChainedBorderProps = exports.ChainedBoxProps = exports.ChainedSizeProps = exports.ChainedFlexBoxProps = exports.csp = void 0;
/**CSP Initiator */
class CspInitiator {
    get Flex() {
        return new ChainedFlexBoxProps();
    }
    get Size() {
        return new ChainedSizeProps();
    }
    get Box() {
        return new ChainedBoxProps();
    }
    get Border() {
        return new ChainedBorderProps();
    }
    get Text() {
        return new ChainedTextProps();
    }
}
/**Initiate Chained Style Properties */
const csp = () => new CspInitiator();
exports.csp = csp;
class ChainedStylePropsCore {
    constructor(keyProps = {}, parent = null) {
        this.keyProps = keyProps;
        this.parent = parent;
    }
    get csp() {
        return this.getRecursive();
    }
    getRecursive(tree = [this]) {
        const parent = this.parent;
        return (parent === null || parent === void 0 ? void 0 : parent.parent) ? parent.getRecursive([...tree, this]) : tree.reduce((props, t) => (Object.assign(Object.assign({}, props), t.keyProps)), {});
    }
    getParent() {
        return this.parent;
    }
    get Flex() {
        return new ChainedFlexBoxProps(this.csp);
    }
    get Size() {
        return new ChainedSizeProps(this.csp);
    }
    get Box() {
        return new ChainedBoxProps(this.csp);
    }
    get Border() {
        return new ChainedBorderProps(this.csp);
    }
    get Text() {
        return new ChainedTextProps(this.csp);
    }
}
class ChainedFlexBoxProps extends ChainedStylePropsCore {
    constructor(keyProps = {}) {
        super(Object.assign(Object.assign({}, keyProps), { display: "flex" }));
    }
    /**Set flex direction to Row */
    get row() {
        this.keyProps.flexDirection = "row";
        return this;
    }
    /**Set flex direction to Column */
    get column() {
        this.keyProps.flexDirection = "column";
        return this;
    }
    /**Set gap spacing size */
    gap(gap) {
        this.keyProps.gap = gap;
        return this;
    }
    get topAlign() {
        if (this.keyProps.flexDirection === "row") {
            this.keyProps.alignItems = "flex-start";
        }
        else if (this.keyProps.flexDirection === "column") {
            this.keyProps.justifyContent = "flex-start";
        }
        return this;
    }
    get bottomAlign() {
        if (this.keyProps.flexDirection === "row") {
            this.keyProps.alignItems = "flex-end";
        }
        else if (this.keyProps.flexDirection === "column") {
            this.keyProps.justifyContent = "flex-end";
        }
        return this;
    }
    get verticalCenterAlign() {
        if (this.keyProps.flexDirection === "row") {
            this.keyProps.alignItems = "center";
        }
        else if (this.keyProps.flexDirection === "column") {
            this.keyProps.justifyContent = "center";
        }
        return this;
    }
    get horizontalCenterAlign() {
        if (this.keyProps.flexDirection === "row") {
            this.keyProps.justifyContent = "center";
        }
        else if (this.keyProps.flexDirection === "column") {
            this.keyProps.alignItems = "center";
        }
        return this;
    }
}
exports.ChainedFlexBoxProps = ChainedFlexBoxProps;
class ChainedSizeProps extends ChainedStylePropsCore {
    constructor(keyProps = {}) {
        super(Object.assign({}, keyProps));
    }
    width(px) {
        this.keyProps.width = px;
        return this;
    }
    height(px) {
        this.keyProps.height = px;
        return this;
    }
    minHeight(px) {
        this.keyProps.minHeight = px;
        return this;
    }
    minWidth(px) {
        this.keyProps.width = px;
        return this;
    }
    maxWidth(px) {
        this.keyProps.maxWidth = px;
        return this;
    }
    maxHeight(px) {
        this.keyProps.maxHeight = px;
        return this;
    }
}
exports.ChainedSizeProps = ChainedSizeProps;
class ChainedBoxProps extends ChainedStylePropsCore {
    constructor(keyProps = {}) {
        super(Object.assign({}, keyProps));
    }
    padding(px) {
        this.keyProps.padding = px;
        return this;
    }
    margin(px) {
        this.keyProps.margin = px;
        return this;
    }
}
exports.ChainedBoxProps = ChainedBoxProps;
class ChainedBorderProps extends ChainedStylePropsCore {
    constructor(keyProps = {}) {
        super(Object.assign({}, keyProps));
    }
    radius(px) {
        this.keyProps.borderRadius = px;
        return this;
    }
    width(px) {
        this.keyProps.borderWidth = px;
        return this;
    }
    color(v) {
        this.keyProps.borderColor = v;
        return this;
    }
    style(v) {
        this.keyProps.borderStyle = v;
        return this;
    }
    get solid() {
        this.keyProps.borderStyle = "solid";
        return this;
    }
    get dashed() {
        this.keyProps.borderStyle = "dashed";
        return this;
    }
}
exports.ChainedBorderProps = ChainedBorderProps;
class ChainedTextProps extends ChainedStylePropsCore {
    constructor(keyProps = {}) {
        super(Object.assign({}, keyProps));
    }
    fontSize(value) {
        this.keyProps.fontSize = value;
        return this;
    }
    overFlow(value) {
        this.keyProps.textOverflow = value;
        return this;
    }
    whiteSpace(value) {
        this.keyProps.whiteSpace = value;
        return this;
    }
}
exports.ChainedTextProps = ChainedTextProps;
