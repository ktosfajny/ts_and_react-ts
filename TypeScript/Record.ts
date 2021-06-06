interface IBase {
  id: string;
  name: string;
  value: number;
  data: { name: string; order: number }[];
}

type colors = "red" | "blue" | "green";

type RecordedType = Record<colors, IBase>;

//// Użycie Record stworzy poniższy typ
// type RecordedType {
//   red: IBase;
//   blue: IBase;
//   green: IBase;
// }
