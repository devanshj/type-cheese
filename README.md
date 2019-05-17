# type-cheese (WIP)

TypeScript types to do things like...

```typescript
import { Pow } from "type-cheese/whole-number";

type eight = Pow<2,3>;
// type eight is 8
```

```typescript
import { Filter } from "type-cheese/tuple";

type filtered = Filter<[1, 2, 3, 1], 1>;
// type filtered is [2, 3]
```

... and a lot more. Checkout code and `/examples`.
