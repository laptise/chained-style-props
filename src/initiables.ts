import { CSSProperties } from "react";
import { ChainedBorder } from "./class/border";
import { ChainedBorderBottom } from "./class/border/border-bottom";
import { ChainedBorderLeft } from "./class/border/border-left";
import { ChainedBorderRight } from "./class/border/border-right";
import { ChainedBorderTop } from "./class/border/border-top";
import { ChainedPropsCore } from "./class/core";
import { ChainedElm } from "./class/elm";
import { ChainedFlexBox } from "./class/flex-box";
import { ChainedPosition } from "./class/position";
import { ChainedSize } from "./class/size";
import { ChainedText } from "./class/text";
import { ChainedTransition } from "./class/transition";

/**Chained class with Initiator */
type Initiable<T> = T & Initiables & ChainedPropsCore;

type Initiables = {
  /**Call `ChainedFlexBox` class */
  get Flex(): Initiable<ChainedFlexBox>;
  /**Call `ChainedSize` class */
  get Size(): Initiable<ChainedSize>;
  /**Call `ChainedBorder` class */
  get Border(): Initiable<ChainedBorder>;
  /**Call `ChainedBorderTop` class */
  get BorderTop(): Initiable<ChainedBorderTop>;
  /**Call `ChainedBorderBottom` class */
  get BorderBottom(): Initiable<ChainedBorderBottom>;
  /**Call `ChainedBorderLeft` class */
  get BorderLeft(): Initiable<ChainedBorderLeft>;
  /**Call `ChainedBorderRight` class */
  get BorderRight(): Initiable<ChainedBorderRight>;
  /**Call `ChainedText` class */
  get Text(): Initiable<ChainedText>;
  /**Call `ChainedElm` class */
  get Elm(): Initiable<ChainedElm>;
  /**Call `ChainedPosition` class */
  get Position(): Initiable<ChainedPosition>;
  /**Call `ChainedTransition` class */
  get Transition(): Initiable<ChainedTransition>;
};

/**Generate mixin class */
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
      public get BorderTop() {
        return this.initiator.BorderTop.injectProps(this.keyProps) as Initiable<ChainedBorderTop>;
      }
      public get BorderBottom() {
        return this.initiator.BorderBottom.injectProps(this.keyProps) as Initiable<ChainedBorderBottom>;
      }
      public get BorderLeft() {
        return this.initiator.BorderLeft.injectProps(this.keyProps) as Initiable<ChainedBorderLeft>;
      }
      public get BorderRight() {
        return this.initiator.BorderRight.injectProps(this.keyProps) as Initiable<ChainedBorderRight>;
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
  private get _borderTop() {
    return mixinClass<ChainedBorderTop>(ChainedBorderTop);
  }
  private get _borderBottom() {
    return mixinClass<ChainedBorderBottom>(ChainedBorderBottom);
  }
  private get _borderLeft() {
    return mixinClass<ChainedBorderLeft>(ChainedBorderLeft);
  }
  private get _borderRight() {
    return mixinClass<ChainedBorderRight>(ChainedBorderRight);
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
  public get BorderTop(): Initiable<ChainedBorderTop> {
    return this._borderTop(this, this.extend);
  }
  public get BorderBottom(): Initiable<ChainedBorderBottom> {
    return this._borderBottom(this, this.extend);
  }
  public get BorderLeft(): Initiable<ChainedBorderLeft> {
    return this._borderLeft(this, this.extend);
  }
  public get BorderRight(): Initiable<ChainedBorderRight> {
    return this._borderRight(this, this.extend);
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
