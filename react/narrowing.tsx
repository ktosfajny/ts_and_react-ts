function padLeft(padding: number | string, input: string): void {
  throw new Error("not Implemented yet");
}

interface Base {
  common?: string;
}

interface v1 extends Base {
  href: string;
  target: string;
}

interface v2 extends Base {
  to: string;
}

type myType = v1 | v2;

const Asd = (props: myType) => {
  return <div></div>;
};

const DDD = () => {
  return <Asd to="" />;
};

interface notPrimitive {
  test?: () => void;
  name: string;
}

const inTest = (arg: notPrimitive) => {
  if ("test" in arg) {
  }
};

class asss {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const asd = new asss("pawel");

interface instanceOfI {
  name: string;
}

const tescik: instanceOfI = {
  name: "pawiel",
};

const logValue = (x: asss | number) => {
  if (x instanceof asss) {
  }
};

function example() {
  let x: string | number | boolean;

  x = Math.random() < 0.5;

  console.log(x);

  if (Math.random() < 0.5) {
    x = "hello";
    console.log(x);

    let x: string;
  } else {
    x = 100;
    console.log(x);
  }

  return x;
}
