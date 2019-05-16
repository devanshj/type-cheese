export type Shift<A extends any[]> =
((...ab: A) => void) extends ((a: any, ...b: infer B) => void)
    ? B
    : never;