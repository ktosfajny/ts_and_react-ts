interface MyCompProps<T> {
  data: T[];
  filter: (item: T) => void;
}

// jeśli masz plik TSX i chcesz przekazać jakiś typ i jest tylko jeden typ to trzeba dać , po tym typie (lub extendować np {} ) bo inaczej wysypie się składania. To jest hack ale działa
const MyReactComp = <T,>(props: MyCompProps<T>) => {
  return 5;
};

// jak widać jeśli zadekalrujemy komponetn jako function to nie trzeba dawać przecinka
function MyReactCompAsFunction<T>(props: MyCompProps<T>) {
  return 5;
}

// powyższy problem / case jest opisany w React TypeScript Cheatsheet:
// https://react-typescript-cheatsheet.netlify.app/docs/advanced/patterns_by_usecase
// wyszukaj "You can also use <T,>"

// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------

interface MyComp2Props<T, Y> {
  data: T[];
  filter: (item: T) => void;
  controlSum: Y;
}

// poniżej przekazywanie 2 typów.
const MyReactComp2Types = <T, Y>(props: MyComp2Props<T, Y>) => {
  return <div></div>;
};
