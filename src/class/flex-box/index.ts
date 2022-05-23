import { CSSProperties } from "react";
import { ChainedPropsCore } from "../core";
import { Property } from "csstype";

export class ChainedFlexBox extends ChainedPropsCore {
  constructor(keyProps: CSSProperties = {}) {
    super({ ...keyProps, display: "flex" });
  }
  /**Set flex direction */
  public direction(v: Property.FlexDirection | undefined) {
    this.keyProps.flexDirection = v;
    return this;
  }
  /**Set flex direction to Row */
  public get row() {
    this.keyProps.flexDirection = "row";
    return this;
  }
  /**Set flex direction to Column */
  get column() {
    this.keyProps.flexDirection = "column";
    return this;
  }
  /**Set gap spacing size */
  gap(gap: number) {
    this.keyProps.gap = gap;
    return this;
  }
  /**Align flex children vertical top.
   * When direction is row, "flex-start" will be set on AlignItems, otherwise on JustifyContent.
   */
  get topAlign() {
    if (this.keyProps.flexDirection === "row") {
      this.keyProps.alignItems = "flex-start";
    } else if (this.keyProps.flexDirection === "column") {
      this.keyProps.justifyContent = "flex-start";
    }
    return this;
  }
  /**Align flex children vertical bottom.
   * When direction is row, "flex-end" will be set on AlignItems, otherwise on JustifyContent.
   */
  get bottomAlign() {
    if (this.keyProps.flexDirection === "row") {
      this.keyProps.alignItems = "flex-end";
    } else if (this.keyProps.flexDirection === "column") {
      this.keyProps.justifyContent = "flex-end";
    }
    return this;
  }
  get verticalCenterAlign() {
    if (this.keyProps.flexDirection === "row") {
      this.keyProps.alignItems = "center";
    } else if (this.keyProps.flexDirection === "column") {
      this.keyProps.justifyContent = "center";
    }
    return this;
  }
  get horizontalCenterAlign() {
    if (this.keyProps.flexDirection === "row") {
      this.keyProps.justifyContent = "center";
    } else if (this.keyProps.flexDirection === "column") {
      this.keyProps.alignItems = "center";
    }
    return this;
  }
  /**Align children right in the middle */
  get centerAlign() {
    this.keyProps.justifyContent = "center";
    this.keyProps.alignItems = "center";
    return this;
  }
}
