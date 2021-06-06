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
