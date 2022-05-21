import { CSSProperties } from "react";
import { ChainedBorderProps } from "./class/border";
import { ChainedElmProps } from "./class/elm";
import { ChainedFlexBoxProps } from "./class/flex-box";
import { ChainedSizeProps } from "./class/size";
import { ChainedTextProps } from "./class/text";

type Initiables = {
  get Flex(): FlexBox;
  get Size(): Size;
  get Border(): Border;
  get Text(): Text;
  get Elm(): Elm;
};

/**CSP Initiator */
export class CspInitiator implements Initiables {
  constructor(private extend: CSSProperties) {}
  public get Flex() {
    return new FlexBox(this, this.extend);
  }
  public get Size() {
    return new Size(this, this.extend);
  }
  public get Border() {
    return new Border(this, this.extend);
  }
  public get Text() {
    return new Text(this, this.extend);
  }
  public get Elm() {
    return new Elm(this, this.extend);
  }
}

class FlexBox extends ChainedFlexBoxProps implements Initiables {
  constructor(protected initiator: CspInitiator, extend: CSSProperties = {}) {
    super(extend);
  }
  public get Text() {
    return this.initiator.Text.injectProps(this.keyProps);
  }
  public get Border(): any {
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
}

class Size extends ChainedSizeProps implements Initiables {
  constructor(protected initiator: CspInitiator, extend: CSSProperties = {}) {
    super(extend);
  }
  public get Text() {
    return this.initiator.Text.injectProps(this.keyProps);
  }
  public get Border(): any {
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
}

class Border extends ChainedBorderProps implements Initiables {
  constructor(protected initiator: CspInitiator, extend: CSSProperties = {}) {
    super(extend);
  }
  public get Text() {
    return this.initiator.Text.injectProps(this.keyProps);
  }
  public get Border(): any {
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
}

class Text extends ChainedTextProps implements Initiables {
  constructor(protected initiator: CspInitiator, extend: CSSProperties = {}) {
    super(extend);
  }
  public get Text() {
    return this.initiator.Text.injectProps(this.keyProps);
  }
  public get Border(): any {
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
}

class Elm extends ChainedElmProps implements Initiables {
  constructor(protected initiator: CspInitiator, extend: CSSProperties = {}) {
    super(extend);
  }
  public get Text() {
    return this.initiator.Text.injectProps(this.keyProps);
  }
  public get Border(): any {
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
}
