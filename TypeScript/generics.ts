interface GenericIdentityFn<Type> {
  (arg: Type): Type;
}

function identity<Type>(arg: Type): Type {
  return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;

// ------------------------------------------------

interface CompProps<T> {
  data: T[];
}

// <> przed () oznacza że  mamy parametr T wśród argumentów które przyjmie funkcja w ()
const MyComp = <T>(props: CompProps<T>) => {
  return 5;
};
