export type ToNumber<X extends string> = 
	X extends "0" ? 0 : 
	X extends "1" ? 1 : 
	X extends "2" ? 2 : 
	X extends "3" ? 3 : 
	X extends "4" ? 4 : 
	X extends "5" ? 5 : 
	X extends "6" ? 6 : 
	X extends "7" ? 7 : 
	X extends "8" ? 8 : 
	X extends "9" ? 9 : 
	X extends "10" ? 10 : 
	X extends "11" ? 11 : 
	X extends "12" ? 12 : 
	X extends "13" ? 13 : 
	X extends "14" ? 14 : 
	X extends "15" ? 15 : 
	X extends "16" ? 16 : 
	X extends "17" ? 17 : 
	X extends "18" ? 18 : 
	X extends "19" ? 19 : 
	X extends "20" ? 20 :
	never;

export type _ToNumber<X> = X extends string ? ToNumber<X> : never;