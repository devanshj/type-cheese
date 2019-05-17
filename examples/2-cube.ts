import { Pow } from "../whole-number";
import { AssertTrue, AreEqual } from "../misc";

type eight = Pow<2, 3>;
type works = AssertTrue<AreEqual<eight,8>>