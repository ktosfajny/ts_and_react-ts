interface RequiredProps {
  name: string;
  value: number;
}

// Partial przyjmuje jako argument jakiś type/interface i tworzy nowy taki sam ale wszystkie właściwości są opcjonalne
type NewNotRequiredProps = Partial<RequiredProps>;

// -------- TRZEBA przekazać dane
const requiredConst: RequiredProps = {
  name: "",
  value: 4,
};

const notRequiredConst: NewNotRequiredProps = {
  value: 2,
  // teraz nie muszę przekazywać name bo jest opcjonalne
};
