import { CSSProperties } from "react";
import { ChainedPropsCore } from "../core";
import { Property } from "csstype";

export class ChainedBorderBottom extends ChainedPropsCore {
  constructor(keyProps: CSSProperties = {}) {
    super({ ...keyProps });
  }
  /**BorderWidth */
  public width(px: number | string) {
    this.keyProps.borderBottomWidth = px;
    return this;
  }
  /**BorderColor */
  public color(v: string) {
    this.keyProps.borderBottomColor = v;
    return this;
  }
  /**BorderStyle */
  public style(v: Property.BorderBottomStyle) {
    this.keyProps.borderBottomStyle = v;
    return this;
  }
  /**BorderStyle to Solid */
  public get solid() {
    this.keyProps.borderBottomStyle = "solid";
    return this;
  }
  /**BoderStyle to Dashed */
  public get dashed() {
    this.keyProps.borderBottomStyle = "dashed";
    return this;
  }
}
