import { CSSProperties } from "react";

export abstract class ChainedPropsCore {
  constructor(protected keyProps: CSSProperties = {}, protected parent: ChainedPropsCore | null = null) {}
  /**Close Chained style props and generate style object */
  get csp() {
    return this.getRecursive();
  }
  protected getRecursive(tree: ChainedPropsCore[] = [this]): CSSProperties {
    const parent = this.parent;
    return parent?.parent ? parent.getRecursive([...tree, this]) : tree.reduce((props, t) => ({ ...props, ...t.keyProps }), {});
  }
  protected getParent() {
    return this.parent;
  }
  /**Inject style props directly*/
  public injectProps(props: CSSProperties) {
    this.keyProps = { ...this.keyProps, ...props };
    return this;
  }
}
