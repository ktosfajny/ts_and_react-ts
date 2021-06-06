const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;

const asd = ("asdas" as unknown) as number;
const MyTestCanbas = <HTMLCanvasElement>document.getElementById("main_canvas");

let changingString = "hello world";
changingString = "Ola Mundo";

const constantString = "Hello World";

////////////////constantString = "asd";

function printText(s: string, alignment: "left" | "right" | "center") {}

printText("asd", "center");

let asdd: null;

function doSomething(x: string | null) {
  if (x === null) {
  } else {
    console.log("hello", +x.toUpperCase());
  }
}

doSomething(asdd);

function liveDangerously(x?: string) {
  console.log(x.fixed());
}
