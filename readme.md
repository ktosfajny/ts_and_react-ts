# Conditional Types

// BASE

```
interface Animal {
  live(): void;
}
```

```
interface Dog extends Animal {
  woof(): void;
}
```

stawiamy warunek że jeśli Dog extenduje Animals to wtedy Example1 będzie typem number.

```
type Example1 = Dog extends Animal ? number : string;
```

---

```
interface IdLabel {
  id: number /* some fields */;
}

```

```
interface NameLabel {
  name: string /* other fields */;
}
```

jest funkcja która ma kilka overloads co jest uciążliwe

```
function createLabel(id: number): IdLabel;
function createLabel(name: string): NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel {
 throw "unimplemented";
}
```

lepiej napisać taki typ z generykiem i użyc jego

```
type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;

function createLabelNew<T extends number | string>(idOrName: T): NameOrId<T> {
  throw "unimplemented";
}
```

---

# Generics

```
interface MyCompProps<T> {
  data: T[];
  filter: (item: T) => void;
}
```

jeśli masz plik TSX i chcesz przekazać jakiś typ i jest tylko jeden typ to trzeba dać , po tym typie (lub extendować np {} ) bo inaczej wysypie się składania. Dzieje się tak dlatego, że jesteś w pliku `jsx (lub tsx)` a więc w skladni `jsx` gdzie zapis `const asd = <T>...` oznacza że zmienna `asd` to tak na prawdę jsx element a nie funkcja. Można więc zrobić jedną z 2 rzeczy:

- 1 - zadeklarować generyczny typ z przecinkiem:

```
const MyReactComp = <T,>(props: MyCompProps<T>) => {
  return 5;
};
```

- 2 - zadekalrować component jako funkcję a nie const z przypisaną funkcją:

```
function MyReactCompAsFunction<T>(props: MyCompProps<T>) {
  return 5;
}
```

// powyższy problem / case jest opisany w React TypeScript Cheatsheet:
// https://react-typescript-cheatsheet.netlify.app/docs/advanced/patterns_by_usecase
// wyszukaj "You can also use <T,>"

```
interface MyComp2Props<T, Y> {
  data: T[];
  filter: (item: T) => void;
  controlSum: Y;
}
```

poniżej przekazywanie 2 typów.

```
const MyReactComp2Types = <T, Y>(props: MyComp2Props<T, Y>) => {
  return <div></div>;
};
```

---

# keyof:

keyof tworzy nowy typ (a właściwie to literal type) z właściwości typu podanego jako argument

```
type Point = {
  x: number;
  y: number;
  aa: {
    a: string;
    b: string;
  };
};

type PointKeys = keyof Point;
```

pointedKeys to literal type który może przyjąć wartości "x" | "y" | "aa"

```
const pointedKeys: PointKeys = "aa";
```

---

# Partial:

```
interface RequiredProps {
  name: string;
  value: number;
}
```

Partial przyjmuje jako argument jakiś type/interface i tworzy nowy taki sam ale wszystkie właściwości są opcjonalne

TRZEBA przekazać dane name oraz value:

```
const requiredConst: RequiredProps = {
  name: "",
  value: 4,
};
```

z kolei jeśli użyję `Partial` z TS to zamieni wszystkie właściwości na nieobowiązkowe:

```
type NewNotRequiredProps = Partial<RequiredProps>;

const notRequiredConst: NewNotRequiredProps = {
  value: 2,
  // nie muszę przekazywac name
};

```

---

# Readonly:

```
interface SomeProps {
  id: string;
  name: string;
  value: number;
}

const changingItsPropsConst: SomeProps = {
  id: "12dc-23dssdv-43dsv-4dsdsvt54",
  name: "John",
  value: 54,
};
```

jak widać mogę zmieniać wczesniej zadeklarowane wartosci
changingItsPropsConst.name = "Myles";

tworzymy więc taki typ że jego const nie będzie mógł zmienić zadeklarowanych inicjalnie wartości

```
type ReadonlyProps = Readonly<SomeProps>;

const notChangingPops: ReadonlyProps = {
  id: "2332df-dfgf34-f43rsv-3fsdv",
  name: "Axel",
  value: 678,
};
```

// Cannot assign to 'name' because it is a read-only property.
// czyli nie można zmienić tej wartości ani żadnej innej

```
notChangingPops.name = "Michael";
notChangingPops.value = 14235345547;
notChangingPops.id = "1111-aaaa-2222-cxccc"; // Cannot assign to 'name' because it is a read-only property.
```

bonus: tylko ID readonly a reszta nie:

```
type OnlyIDReadonly = Readonly<Pick<SomeProps, "id">> & Omit<SomeProps, "id">;

const constWithOnlyIdReadonly: OnlyIDReadonly = {
id: "234-asdas-3sdf",
name: "Bjorn",
value: 23454,
};
```

jak widać tylko id nie może zostać zmienione ale np value już może

```
constWithOnlyIdReadonly.id = "nowa-wartosc";
constWithOnlyIdReadonly.value = 3453454;
```

---

# Record:

```
interface IBase {
  id: string;
  name: string;
  value: number;
  data: { name: string; order: number }[];
}

type colors = "red" | "blue" | "green";

type RecordedType = Record<colors, IBase>;
```

Użycie Record stworzy poniższy typ:

```
type RecordedType {
  red: IBase;
  blue: IBase;
  green: IBase;
}
```

---

# Required:

```
interface OptionalProps {
  name?: string;
  value?: string;
}

const optionalThing: OptionalProps = {
  name: "podaje tylko name bo i tak wszystko jest opcjonalne",
};

type RequiredType = Required<OptionalProps>;

const requiredThing: RequiredType = {
  name: "teraz muszę podać name",
  value: "Muszę też podać value bo jest wszystko obowiązkowe",
};
```

DODATEK: rozszerzenie Requried typu o dodatkowe pole :

```
type extendedRequiredType = Required<OptionalProps> & {
  id: string;
  description?: string;
};

const extendedType: extendedRequiredType = {
  id: "324-j23b-h5j45v", // dodałem id jako obowiązkowe więc muszę je podać
  name: "podaję nazwę bo nadal jest obowiązkowe",
  value: "value też jest obowiąkzowe więc podanę",
  // mogłbym jeszcze podać description ale określiłem że jest opcjonalne więc nie muszę podawać
};
```

---

# typeof oraz ReturnType:

typeof - typeof stawia się przed jakimś WYRAŻENIEM (np constem, funkcją, obiektem itd) i zwraca TYP tego elementu przed którym jest

```
interface IBaseToTypeOf {
  name: string;
  value: number;
}

const baseConst: IBaseToTypeOf = {
  name: "nazwa",
  value: 4,
};
```

można tak tworzyć nowe typy też

```
type TypeofType = typeof baseConst;
```

typeof stawia się przed czymś co jest wyrażeniem a nie typem, dlatego piszemy 'typeof baseConst' a nie 'typeof IBaseToTypeOf'

```
const typedof: typeof baseConst = {
  name: "adas",
  value: 456,
};
```

---

ReturnType przyjmuje jako argument typ jakiejś funkcji i zwraca typ który zwraca ta funkcja

```
type GetIndexFnType = (data: string[]) => number;

type K = ReturnType<GetIndexFnType>; // typ K będzie to number ponieważ funkcja GetIndexFnType zwraca number i to też zwróci ReturnType

const k: K = 4;
```

Jakaś funkcja (zwraca ona value które jest stringiem a więc funkcja getValue też zwraca string):

```
const getValue = (value: string) => {
  return value;
};
```

poniżej jest błąd ponieważ ReturnType przyjmuje TYP funkcji a nie funkcję samą w sobie

```
const test: ReturnType<getValue> = "asds";
```

jesli polączymy ReturnType z typeof to wtedy możemy tego fajnie użyć ponieważ typeof daje typ wszystkiego co się przekaże czyli też funkcji a więc dostaniemy typ tej funkcji i wtedy zadziała ReturnType bo ReturnType przyjmuje własnie typ funkcji a nie funkcję samą w sobie (jak robi to typeof)

```
const test2: ReturnType<typeof getValue> = "asds";
```

---

# React:

## `??` instead of `||`

```
interface QuestionSignProps {}

const QuestionSign = () => {
  const foo = 0;

  const test = foo ?? 5; // wyświetli 0 - jeśli foo nie jest null lub undefined to do test przypusz foo (0 nie jest null wiec zostanie przypisane 0)
  const test2 = foo || 5; // wyświetli 5 - jeśli pierwsze wyrażenie jest falsyfikowalne to przypisz drugie (0 jest falsyfikowlne więc zostanie przypisane 5)

  console.log({ test });

  return <></>;
};

export default QuestionSign;

```

## Event Handlers:

```
import {
  ChangeEvent,
  ChangeEventHandler,
  MouseEvent,
  MouseEventHandler,
} from "react";

const EventHandlers = () => {

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {};

  const handleInputChange2 = (e: ChangeEvent<HTMLInputElement>) => {};



  // zamiast typować sam argument e można nadać handleBtnclick taki typ jaki widnieje po najechaniu kursorem na `onClick` na button w metodzie return
  const handleBtnClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    console.log(e);
  };

  const handleBtnclick2 = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(e);
  };

  return (
    <>
      <input type="text" onChange={handleInputChange} />
      <input type="text" onChange={handleInputChange2} />
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      <button onClick={handleBtnClick}>KLIKNIJ MNIE</button>
      <button onClick={handleBtnclick2}>KLIKNIJ MNIE</button>
    </>
  );
};

export default EventHandlers;

```

## Refs:

```
import { useRef } from "react";

interface DomRefProps {}

const DomRef = (props: DomRefProps) => {
  // poniższa zmienna jest typu RefObject i nie mozna zmieniać jej referencji. Nie można zmieniać bo nie ma uni w <>
  const plainRefObjectRef = useRef<HTMLInputElement>(null);

  // poniższa zmienna jest typu MutableRefObject ponieważ jako arugment useRef mamy unię number | null
  const mutableIntervalRef = useRef<number | null>(null);

  // jesli ref jest typu MutableRefObject to można zmieniać .current dowolnie, dlatego też działa zmiana na btn click poniżej w return ()

  const handleBtnClick = (value: number) => {
    mutableIntervalRef.current = value;
    console.log(mutableIntervalRef);
  };

  const y = [10, 6];

  return (
    <>
      <button onClick={() => handleBtnClick(1)}>1</button>
      <button onClick={() => handleBtnClick(2)}>2</button>
      <button onClick={() => handleBtnClick(3)}>3</button>
      <button onClick={() => handleBtnClick(4)}>4</button>
      <div style={{ paddingTop: 20, border: "1px solid black" }}>
        {mutableIntervalRef.current}
      </div>
    </>
  );
};

export default DomRef;

```
