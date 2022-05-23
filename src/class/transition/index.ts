import { CSSProperties } from "react";
import { ChainedPropsCore } from "../core";
import { Property } from "csstype";

export class ChainedTransition extends ChainedPropsCore {
  constructor(keyProps: CSSProperties = {}) {
    super({ ...keyProps });
  }
  public delay(v: string) {
    this.keyProps.transitionDelay = v;
    return this;
  }
  public duration(v: Property.TransitionDuration<string>) {
    this.keyProps.transitionDuration = v;
    return this;
  }
  public property(v: Property.TransitionProperty) {
    this.keyProps.transitionProperty = v;
    return this;
  }
  public timingFunction(v: Property.TransitionTimingFunction) {
    this.keyProps.transitionTimingFunction = v;
    return this;
  }
}
