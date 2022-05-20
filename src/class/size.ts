import { CSSProperties } from "react";
import { ChainedPropsCore } from "./base";

export class ChainedSizeProps extends ChainedPropsCore {
  constructor(keyProps: CSSProperties = {}) {
    super({ ...keyProps });
  }
  /**set Width prop */
  public width(px: number | string) {
    this.keyProps.width = px;
    return this;
  }
  public height(px: number | string) {
    this.keyProps.height = px;
    return this;
  }
  public minHeight(px: number | string) {
    this.keyProps.minHeight = px;
    return this;
  }
  public minWidth(px: number | string) {
    this.keyProps.width = px;
    return this;
  }
  public maxWidth(px: number | string) {
    this.keyProps.maxWidth = px;
    return this;
  }
  public maxHeight(px: number | string) {
    this.keyProps.maxHeight = px;
    return this;
  }
  public padding(px: number | string) {
    this.keyProps.padding = px;
    return this;
  }
  public margin(px: number | string) {
    this.keyProps.margin = px;
    return this;
  }
}
