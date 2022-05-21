import { CSSProperties } from "react";
import { ChainedPropsCore } from "../core";
import { Property } from "csstype";

export class ChainedPositionProps extends ChainedPropsCore {
  constructor(keyProps: CSSProperties = {}) {
    super({ ...keyProps });
  }
  public get absolute() {
    this.keyProps.position = "absolute";
    return this;
  }
  public get relative() {
    this.keyProps.position = "relative";
    return this;
  }
  public get fixed() {
    this.keyProps.position = "fixed";
    return this;
  }
  public get inherit() {
    this.keyProps.position = "inherit";
    return this;
  }
  public get static() {
    this.keyProps.position = "static";
    return this;
  }
  public get stikcy() {
    this.keyProps.position = "sticky";
    return this;
  }
  public get revert() {
    this.keyProps.position = "revert";
    return this;
  }
  public get initial() {
    this.keyProps.position = "initial";
    return this;
  }
  public top(v: Property.Top<string | number> | undefined) {
    this.keyProps.top = v;
    return this;
  }
  public bottom(v: Property.Top<string | number> | undefined) {
    this.keyProps.bottom = v;
    return this;
  }
  public right(v: Property.Top<string | number> | undefined) {
    this.keyProps.right = v;
    return this;
  }
  public left(v: Property.Top<string | number> | undefined) {
    this.keyProps.left = v;
    return this;
  }
}
