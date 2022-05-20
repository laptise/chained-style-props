import { CSSProperties } from "react";
import { ChainedBorderProps } from "./class/border";
import { ChainedFlexBoxProps } from "./class/flex-box";
import { ChainedSizeProps } from "./class/size";
import { ChainedTextProps } from "./class/text";

type Initiables = {
  get Flex(): InitiableFlexBox;
  get Size(): InitableSize;
  get Border(): InitiableBorder;
  get Text(): InitiableText;
};

class InitiableFlexBox extends ChainedFlexBoxProps implements Initiables {
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
}

class InitableSize extends ChainedSizeProps implements Initiables {
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
}

class InitiableBorder extends ChainedBorderProps implements Initiables {
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
}

class InitiableText extends ChainedTextProps implements Initiables {
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
}

/**CSP Initiator */
export class CspInitiator implements Initiables {
  constructor(private extend: CSSProperties) {}
  public get Flex() {
    return new InitiableFlexBox(this, this.extend);
  }
  public get Size() {
    return new InitableSize(this, this.extend);
  }
  public get Border() {
    return new InitiableBorder(this, this.extend);
  }
  public get Text() {
    return new InitiableText(this, this.extend);
  }
}
