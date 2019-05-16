export type Unshift<A extends any[], X> =
((x: X, ...a: A) => void) extends ((...xa: infer XA) => void)
    ? XA
    : never;