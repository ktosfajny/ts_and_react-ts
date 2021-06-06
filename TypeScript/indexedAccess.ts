type Person = {
  age: number;
  name: string;
  alive: boolean;
};

// Age to teraz typ number ponieważ typ pola `age` z typu Person to number własnie
type Age = Person["age"];

const age: Age = 324;

// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------

const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];

type SingleObjectType = typeof MyArray[1];

// type SingleObjectType = {
//   name: string;
//   age: number;
// };
