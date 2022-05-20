import { CSSProperties } from "react";
import { CspInitiator } from "./initiables";

export const csp = (extend: CSSProperties = {}) => new CspInitiator(extend);
