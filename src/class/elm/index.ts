import { CSSProperties } from "react";
import { ChainedPropsCore } from "../core";
import { Property } from "csstype";

export class ChainedElm extends ChainedPropsCore {
  constructor(keyProps: CSSProperties = {}) {
    super({ ...keyProps });
  }
  public get noPointer() {
    this.keyProps.pointerEvents = "none";
    return this;
  }
  public pointerEvents(v: Property.PointerEvents | undefined) {
    this.keyProps.pointerEvents = v;
    return this;
  }
  public display(v: Property.Display | undefined) {
    this.keyProps.display = v;
    return this;
  }
}
