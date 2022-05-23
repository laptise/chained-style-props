import { CSSProperties } from "react";
import { CspInitiator } from "./initiables";

/**Call CSP initiator
 * @param extend to extend CSSProperties (optional)
 * @returns {CspInitiator} Initiator that calls `ChainedClass`
 */
export const csp = (extend: CSSProperties = {}) => new CspInitiator(extend);
