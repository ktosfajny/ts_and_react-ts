// typeof  --- typeof stawia się przed jakimś WYRAŻENIEM (np constem, funkcją, obiektem itd) i zwraca TYP tego elementu przed któym jest

interface IBaseToTypeOf {
  name: string;
  value: number;
}

const baseConst: IBaseToTypeOf = {
  name: "nazwa",
  value: 4,
};

// można tak tworzyć nowe typy też
type TypeofType = typeof baseConst;

// typeof stawia się przed czymś co jest wyrażeniem a nie typem, dlatego piszemy 'typeof baseConst' a nie 'typeof IBaseToTypeOf'
const typedof: typeof baseConst = {
  name: "adas",
  value: 456,
};

// ----------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------

// ReturnType przyjmuje jako argument typ jakiejś funkcji i zwraca typ który zwraca ta funkcja

type GetIndexFnType = (data: string[]) => number;

type K = ReturnType<GetIndexFnType>; // typ K będzie to number ponieważ funkcja GetIndexFnType zwraca number i to też zwróci ReturnType

const k: K = 4;

// -----------------------------
// -----------------------------
// -----------------------------
// -----------------------------
// jakaś funkcja (zwraca ona value które jest stringiem a więc funkcja getValue też zwraca string)
const getValue = (value: string) => {
  return value;
};

// poniżej jest błąd ponieważ ReturnType przyjmuje TYP funkcji a nie funkcję samą w sobie
const test: ReturnType<getValue> = "asds";

// jesli polączymy ReturnType z typeof to wtedy możemy tego fajnie użyć ponieważ typeof daje typ wszystkiego co się przekaże czyli też funkcji a więc dostaniemy typ tej funkcji i wtedy zadziała ReturnType bo ReturnType przyjmuje własnie typ funkcji a nie funkcję samą w sobie (jak robi to typeof)
const test2: ReturnType<typeof getValue> = "asds";
