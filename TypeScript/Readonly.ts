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

// jak widać mogę zmieniać wczesniej zadeklarowane wartosci
changingItsPropsConst.name = "Myles";

// --------------------------------------------------------
// --------------------------------------------------------
// --------------------------------------------------------
// tworzymy taki typ że jego const nie będzie mógł zmienić zadeklarowanych inicjalnie wartości
type ReadonlyProps = Readonly<SomeProps>;

const notChangingPops: ReadonlyProps = {
  id: "2332df-dfgf34-f43rsv-3fsdv",
  name: "Axel",
  value: 678,
};

// Cannot assign to 'name' because it is a read-only property.
// czyli nie można zmienić tej wartości ani żadnej innej
notChangingPops.name = "Michael";
notChangingPops.value = 14235345547;
notChangingPops.id = "1111-aaaa-2222-cxccc";

//
//
//
// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------
// bonus: tylko ID readonly a reszta nie
type OnlyIDReadonly = Readonly<Pick<SomeProps, "id">> & Omit<SomeProps, "id">;

const constWithOnlyIdReadonly: OnlyIDReadonly = {
  id: "234-asdas-3sdf",
  name: "Bjorn",
  value: 23454,
};

// jak widać tylko id nie może zostać zmienione ale np value już może
constWithOnlyIdReadonly.id = "nowa-wartosc";
constWithOnlyIdReadonly.value = 3453454;
