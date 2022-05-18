import { CSSProperties } from "react";
declare type CspInitiable = {
    /**Initiate with Display flex */
    get Flex(): ChainedFlexBoxProps;
    /**Initiate with Size */
    get Size(): ChainedSizeProps;
    /**Initiate with Box */
    get Box(): ChainedBoxProps;
    /**Initiate with Border */
    get Border(): ChainedBorderProps;
    /**Initiate with Text */
    get Text(): ChainedTextProps;
};
/**CSP Initiator */
declare class CspInitiator implements CspInitiable {
    get Flex(): ChainedFlexBoxProps;
    get Size(): ChainedSizeProps;
    get Box(): ChainedBoxProps;
    get Border(): ChainedBorderProps;
    get Text(): ChainedTextProps;
}
/**Initiate Chained Style Properties */
export declare const csp: () => CspInitiator;
declare abstract class ChainedStylePropsCore implements CspInitiable {
    protected keyProps: CSSProperties;
    protected parent: ChainedStylePropsCore | null;
    constructor(keyProps?: CSSProperties, parent?: ChainedStylePropsCore | null);
    get csp(): CSSProperties;
    private getRecursive;
    protected getParent(): ChainedStylePropsCore | null;
    get Flex(): ChainedFlexBoxProps;
    get Size(): ChainedSizeProps;
    get Box(): ChainedBoxProps;
    get Border(): ChainedBorderProps;
    get Text(): ChainedTextProps;
}
export declare class ChainedFlexBoxProps extends ChainedStylePropsCore {
    constructor(keyProps?: CSSProperties);
    /**Set flex direction to Row */
    get row(): this;
    /**Set flex direction to Column */
    get column(): this;
    /**Set gap spacing size */
    gap(gap: number): this;
    get topAlign(): this;
    get bottomAlign(): this;
    get verticalCenterAlign(): this;
    get horizontalCenterAlign(): this;
}
export declare class ChainedSizeProps extends ChainedStylePropsCore {
    constructor(keyProps?: CSSProperties);
    width(px: number | string): this;
    height(px: number | string): this;
    minHeight(px: number | string): this;
    minWidth(px: number | string): this;
    maxWidth(px: number | string): this;
    maxHeight(px: number | string): this;
}
export declare class ChainedBoxProps extends ChainedStylePropsCore {
    constructor(keyProps?: CSSProperties);
    padding(px: number | string): this;
    margin(px: number | string): this;
}
export declare class ChainedBorderProps extends ChainedStylePropsCore {
    constructor(keyProps?: CSSProperties);
    radius(px: number | string): this;
    width(px: number | string): this;
    color(v: string): this;
    style(v: string): this;
    get solid(): this;
    get dashed(): this;
}
export declare class ChainedTextProps extends ChainedStylePropsCore {
    constructor(keyProps?: CSSProperties);
    fontSize(value: number | string): this;
    overFlow(value: any): this;
    whiteSpace(value: any): this;
}
export {};
