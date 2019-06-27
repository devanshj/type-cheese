import { Filter } from "./filter";
import { AssertTrue, AreEqual } from "../misc";
import { Unshift, _Unshift2 } from "./unshift";
import { AssertArray } from "./assert-array";

type Todos = [
	{
		name: "abc",
		done: true
	}, {
		name: "pqr",
		done: false
	}
];

type Predicates = AssertArray<{
	[I in keyof Todos]:
		Todos[I] extends { done: boolean }
			? Todos[I]["done"] :
		I extends "length"
			? Todos[I] :
		never
}>

type CompletedTodos = Filter<Todos, Predicates>

// TODO : doesn't work for uncompleted todos, in other words doesn't work for complex & deep predicates