import { CSSProperties } from "react";
import { ChainedBorderProps } from "./class/border";
import { ChainedElmProps } from "./class/elm";
import { ChainedFlexBoxProps } from "./class/flex-box";
import { ChainedPositionProps } from "./class/position";
import { ChainedSizeProps } from "./class/size";
import { ChainedTextProps } from "./class/text";

type Initiables = {
  get Flex(): FlexBox;
  get Size(): Size;
  get Border(): Border;
  get Text(): Text;
  get Elm(): Elm;
  get Position(): Position;
};

/**CSP Initiator */
export class CspInitiator implements Initiables {
  constructor(private extend: CSSProperties) {}
  public get Flex(): FlexBox {
    return new FlexBox(this, this.extend);
  }
  public get Size(): Size {
    return new Size(this, this.extend);
  }
  public get Border(): Border {
    return new Border(this, this.extend);
  }
  public get Text(): Text {
    return new Text(this, this.extend);
  }
  public get Elm(): Elm {
    return new Elm(this, this.extend);
  }
  public get Position(): Position {
    return new Position(this, this.extend);
  }
}

class FlexBox extends ChainedFlexBoxProps implements Initiables {
  constructor(protected initiator: CspInitiator, extend: CSSProperties = {}) {
    super(extend);
  }
  public get Text() {
    return this.initiator.Text.injectProps(this.keyProps);
  }
  public get Border() {
    return this.initiator.Border.injectProps(this.keyProps);
  }
  public get Size() {
    return this.initiator.Size.injectProps(this.keyProps);
  }
  public get Flex() {
    return this.initiator.Flex.injectProps(this.keyProps);
  }
  public get Elm() {
    return this.initiator.Elm.injectProps(this.keyProps);
  }
  public get Position() {
    return this.initiator.Position.injectProps(this.keyProps);
  }
}

class Size extends ChainedSizeProps implements Initiables {
  constructor(protected initiator: CspInitiator, extend: CSSProperties = {}) {
    super(extend);
  }
  public get Text() {
    return this.initiator.Text.injectProps(this.keyProps);
  }
  public get Border() {
    return this.initiator.Border.injectProps(this.keyProps);
  }
  public get Size() {
    return this.initiator.Size.injectProps(this.keyProps);
  }
  public get Flex() {
    return this.initiator.Flex.injectProps(this.keyProps);
  }
  public get Elm() {
    return this.initiator.Elm.injectProps(this.keyProps);
  }
  public get Position() {
    return this.initiator.Position.injectProps(this.keyProps);
  }
}

class Border extends ChainedBorderProps implements Initiables {
  constructor(protected initiator: CspInitiator, extend: CSSProperties = {}) {
    super(extend);
  }
  public get Text() {
    return this.initiator.Text.injectProps(this.keyProps);
  }
  public get Border() {
    return this.initiator.Border.injectProps(this.keyProps);
  }
  public get Size() {
    return this.initiator.Size.injectProps(this.keyProps);
  }
  public get Flex() {
    return this.initiator.Flex.injectProps(this.keyProps);
  }
  public get Elm() {
    return this.initiator.Elm.injectProps(this.keyProps);
  }
  public get Position() {
    return this.initiator.Position.injectProps(this.keyProps);
  }
}

class Text extends ChainedTextProps implements Initiables {
  constructor(protected initiator: CspInitiator, extend: CSSProperties = {}) {
    super(extend);
  }
  public get Text() {
    return this.initiator.Text.injectProps(this.keyProps);
  }
  public get Border() {
    return this.initiator.Border.injectProps(this.keyProps);
  }
  public get Size() {
    return this.initiator.Size.injectProps(this.keyProps);
  }
  public get Flex() {
    return this.initiator.Flex.injectProps(this.keyProps);
  }
  public get Elm() {
    return this.initiator.Elm.injectProps(this.keyProps);
  }
  public get Position() {
    return this.initiator.Position.injectProps(this.keyProps);
  }
}

class Elm extends ChainedElmProps implements Initiables {
  constructor(protected initiator: CspInitiator, extend: CSSProperties = {}) {
    super(extend);
  }
  public get Text() {
    return this.initiator.Text.injectProps(this.keyProps);
  }
  public get Border() {
    return this.initiator.Border.injectProps(this.keyProps);
  }
  public get Size() {
    return this.initiator.Size.injectProps(this.keyProps);
  }
  public get Flex() {
    return this.initiator.Flex.injectProps(this.keyProps);
  }
  public get Elm() {
    return this.initiator.Elm.injectProps(this.keyProps);
  }
  public get Position() {
    return this.initiator.Position.injectProps(this.keyProps);
  }
}

class Position extends ChainedPositionProps implements Initiables {
  constructor(protected initiator: CspInitiator, extend: CSSProperties = {}) {
    super(extend);
  }
  public get Text() {
    return this.initiator.Text.injectProps(this.keyProps);
  }
  public get Border() {
    return this.initiator.Border.injectProps(this.keyProps);
  }
  public get Size() {
    return this.initiator.Size.injectProps(this.keyProps);
  }
  public get Flex() {
    return this.initiator.Flex.injectProps(this.keyProps);
  }
  public get Elm() {
    return this.initiator.Elm.injectProps(this.keyProps);
  }
  public get Position() {
    return this.initiator.Position.injectProps(this.keyProps);
  }
}
