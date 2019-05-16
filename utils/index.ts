export type TypeOf<T> =
    T extends { type: infer R }
        ? R
        : never;

export type AssertTrue<T extends true> = T;