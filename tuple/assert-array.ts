
export type AssertArray<T> = T & {
	[Symbol.iterator]: any,
	[Symbol.unscopables]: any
}

// Insane xD
// https://github.com/sirian/ts-extra-types/blob/6fb11a279cc49fc4ce3335506579b7c7fb05bbf8/src/tuple.ts#L7-L10