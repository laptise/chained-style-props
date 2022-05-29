import { CSSProperties } from "react";
import { ChainedPropsCore } from "../core";
import { Property } from "csstype";

export class ChainedBorderLeft extends ChainedPropsCore {
  constructor(keyProps: CSSProperties = {}) {
    super({ ...keyProps });
  }
  /**BorderWidth */
  public width(px: number | string) {
    this.keyProps.borderLeftWidth = px;
    return this;
  }
  /**BorderColor */
  public color(v: string) {
    this.keyProps.borderLeftColor = v;
    return this;
  }
  /**BorderStyle */
  public style(v: Property.BorderTopStyle) {
    this.keyProps.borderLeftStyle = v;
    return this;
  }
  /**BorderStyle to Solid */
  public get solid() {
    this.keyProps.borderLeftStyle = "solid";
    return this;
  }
  /**BoderStyle to Dashed */
  public get dashed() {
    this.keyProps.borderLeftStyle = "dashed";
    return this;
  }
}
