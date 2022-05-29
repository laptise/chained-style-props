import { CSSProperties } from "react";
import { ChainedPropsCore } from "../core";
import { Property } from "csstype";

export class ChainedBorderTop extends ChainedPropsCore {
  constructor(keyProps: CSSProperties = {}) {
    super({ ...keyProps });
  }
  /**BorderWidth */
  public width(px: number | string) {
    this.keyProps.borderTopWidth = px;
    return this;
  }
  /**BorderColor */
  public color(v: string) {
    this.keyProps.borderTopColor = v;
    return this;
  }
  /**BorderStyle */
  public style(v: Property.BorderTopStyle) {
    this.keyProps.borderTopStyle = v;
    return this;
  }
  /**BorderStyle to Solid */
  public get solid() {
    this.keyProps.borderTopStyle = "solid";
    return this;
  }
  /**BoderStyle to Dashed */
  public get dashed() {
    this.keyProps.borderTopStyle = "dashed";
    return this;
  }
}
