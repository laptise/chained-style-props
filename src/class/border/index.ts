import { CSSProperties } from "react";
import { ChainedPropsCore } from "../core";

export class ChainedBorderProps extends ChainedPropsCore {
  constructor(keyProps: CSSProperties = {}) {
    super({ ...keyProps });
  }
  /**BorderRaidius */
  public radius(px: number | string) {
    this.keyProps.borderRadius = px;
    return this;
  }
  /**BorderWidth */
  public width(px: number | string) {
    this.keyProps.borderWidth = px;
    return this;
  }
  /**BorderColor */
  public color(v: string) {
    this.keyProps.borderColor = v;
    return this;
  }
  /**BorderStyle */
  public style(v: string) {
    this.keyProps.borderStyle = v;
    return this;
  }
  /**BorderStyle to Solid */
  public get solid() {
    this.keyProps.borderStyle = "solid";
    return this;
  }
  /**BoderStyle to Dashed */
  public get dashed() {
    this.keyProps.borderStyle = "dashed";
    return this;
  }
}
