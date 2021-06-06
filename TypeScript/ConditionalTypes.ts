// BASE

interface Animal {
  live(): void;
}

interface Dog extends Animal {
  woof(): void;
}

// stawiamy warunek że jeśli Dog extenduje Animals to wtedy Example1 będzie typem number.
type Example1 = Dog extends Animal ? number : string;

// ----------------------------------------------------------------------------------------------------------

interface IdLabel {
  id: number /* some fields */;
}
interface NameLabel {
  name: string /* other fields */;
}

// jest funkcja która ma kilka overloads co jest uciążliwe
function createLabel(id: number): IdLabel;
function createLabel(name: string): NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel {
  throw "unimplemented";
}

// lepiej napisać taki typ z generykiem i użyc jego
type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;

function createLabelNew<T extends number | string>(idOrName: T): NameOrId<T> {
  throw "unimplemented";
}
