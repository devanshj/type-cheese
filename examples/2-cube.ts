import { Pow } from "../whole-number/pow";
import { AssertTrue } from "../utils";

type eight = Pow<2, 3>;
type works = AssertTrue<eight extends 8 ? true : false>