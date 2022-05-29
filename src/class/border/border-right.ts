import { CSSProperties } from "react";
import { ChainedPropsCore } from "../core";
import { Property } from "csstype";

export class ChainedBorderRight extends ChainedPropsCore {
  constructor(keyProps: CSSProperties = {}) {
    super({ ...keyProps });
  }
  /**BorderWidth */
  public width(px: number | string) {
    this.keyProps.borderRightWidth = px;
    return this;
  }
  /**BorderColor */
  public color(v: string) {
    this.keyProps.borderRightColor = v;
    return this;
  }
  /**BorderStyle */
  public style(v: Property.BorderTopStyle) {
    this.keyProps.borderRightStyle = v;
    return this;
  }
  /**BorderStyle to Solid */
  public get solid() {
    this.keyProps.borderRightStyle = "solid";
    return this;
  }
  /**BoderStyle to Dashed */
  public get dashed() {
    this.keyProps.borderRightStyle = "dashed";
    return this;
  }
}
