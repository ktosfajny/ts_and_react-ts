// keyof tworzy nowy typ (a właściwie to literal type) z właściwości typu podanego jako argument

type Point = {
  x: number;
  y: number;
  aa: {
    a: string;
    b: string;
  };
};

type PointKeys = keyof Point;

// pointedKeys to literal type który może przyjąć wartości "x" | "y" | "aa"
const pointedKeys: PointKeys = "aa";
