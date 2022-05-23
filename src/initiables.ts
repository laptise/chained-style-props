import { CSSProperties } from "react";
import { ChainedBorder } from "./class/border";
import { ChainedPropsCore } from "./class/core";
import { ChainedElm } from "./class/elm";
import { ChainedFlexBox } from "./class/flex-box";
import { ChainedPosition } from "./class/position";
import { ChainedSize } from "./class/size";
import { ChainedText } from "./class/text";
import { ChainedTransition } from "./class/transition";

type Initiable<T> = T & Initiables & ChainedPropsCore;

type Initiables = {
  get Flex(): Initiable<ChainedFlexBox>;
  get Size(): Initiable<ChainedSize>;
  get Border(): Initiable<ChainedBorder>;
  get Text(): Initiable<ChainedText>;
  get Elm(): Initiable<ChainedElm>;
  get Position(): Initiable<ChainedPosition>;
  get Transition(): Initiable<ChainedTransition>;
};

function mixinClass<T extends ChainedPropsCore>(c: new (props: CSSProperties) => ChainedPropsCore) {
  const factory = (initiator: CspInitiator, extend: CSSProperties) => {
    return new (class extends c implements Initiables {
      constructor(protected initiator: CspInitiator, extend: CSSProperties = {}) {
        super(extend);
      }
      public get Text() {
        return this.initiator.Text.injectProps(this.keyProps) as Initiable<ChainedText>;
      }
      public get Border() {
        return this.initiator.Border.injectProps(this.keyProps) as Initiable<ChainedBorder>;
      }
      public get Size() {
        return this.initiator.Size.injectProps(this.keyProps) as Initiable<ChainedSize>;
      }
      public get Flex() {
        return this.initiator.Flex.injectProps(this.keyProps) as Initiable<ChainedFlexBox>;
      }
      public get Elm() {
        return this.initiator.Elm.injectProps(this.keyProps) as Initiable<ChainedElm>;
      }
      public get Position() {
        return this.initiator.Position.injectProps(this.keyProps) as Initiable<ChainedPosition>;
      }
      public get Transition() {
        return this.initiator.Transition.injectProps(this.keyProps) as Initiable<ChainedTransition>;
      }
    })(initiator, extend);
  };

  return factory as unknown as (initiator: CspInitiator, extend: CSSProperties) => Initiable<T>;
}

/**CSP Initiator */
export class CspInitiator implements Initiables {
  constructor(private extend: CSSProperties) {}
  private get _flex() {
    return mixinClass<ChainedFlexBox>(ChainedFlexBox);
  }
  private get _size() {
    return mixinClass<ChainedSize>(ChainedSize);
  }
  private get _border() {
    return mixinClass<ChainedBorder>(ChainedBorder);
  }
  private get _text() {
    return mixinClass<ChainedText>(ChainedText);
  }
  private get _elm() {
    return mixinClass<ChainedElm>(ChainedElm);
  }
  private get _position() {
    return mixinClass<ChainedPosition>(ChainedPosition);
  }
  private get _transition() {
    return mixinClass<ChainedTransition>(ChainedTransition);
  }
  public get Flex(): Initiable<ChainedFlexBox> {
    return this._flex(this, this.extend);
  }
  public get Size(): Initiable<ChainedSize> {
    return this._size(this, this.extend);
  }
  public get Border(): Initiable<ChainedBorder> {
    return this._border(this, this.extend);
  }
  public get Text(): Initiable<ChainedText> {
    return this._text(this, this.extend);
  }
  public get Elm(): Initiable<ChainedElm> {
    return this._elm(this, this.extend);
  }
  public get Position(): Initiable<ChainedPosition> {
    return this._position(this, this.extend);
  }
  public get Transition(): Initiable<ChainedTransition> {
    return this._transition(this, this.extend);
  }
}
