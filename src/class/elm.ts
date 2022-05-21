import { CSSProperties } from "react";
import { ChainedPropsCore } from "./base";
import { Property } from "csstype";

export class ChainedElmProps extends ChainedPropsCore {
  constructor(keyProps: CSSProperties = {}) {
    super({ ...keyProps });
  }
  public get noPointer() {
    this.keyProps.pointerEvents = "none";
    return this;
  }
  public pointerEvents(v: Property.PointerEvents | undefined) {
    this.keyProps.pointerEvents = v;
  }
}
