import { CSSProperties } from "react";
import { ChainedPropsCore } from "./base";

export class ChainedTextProps extends ChainedPropsCore {
  constructor(keyProps: CSSProperties = {}) {
    super({ ...keyProps });
  }
  public fontSize(value: number | string) {
    this.keyProps.fontSize = value;
    return this;
  }
  /** Set TextOverflow props */
  public overflow(value: any) {
    this.keyProps.textOverflow = value;
    return this;
  }
  /**Set Whitespace props */
  public whiteSpace(value: any) {
    this.keyProps.whiteSpace = value;
    return this;
  }
}
