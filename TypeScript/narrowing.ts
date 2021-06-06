function firstElement<Type>(arr: Type[]): Type {
  return arr[0];
}

function map<Input, Output>(
  arr: Input[],
  func: (arg: Input) => Output
): Output[] {
  return arr.map(func);
}

function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}
// -------------------------------------------------------------------------

interface ShapeProps {
  name: string;
}

function draw({ shape: ShapeProps, xPos: number = 4 }) {}
// -------------------------------------------------------------------------

interface SomeType {
  readonly prop: string;
}

function doSomething(obj: SomeType) {
  console.log("props has the value " + obj.prop);

  const asd = obj;
  asd.prop = "asd";
}
