// Funciones
function greet(name: string) {
    console.log("Hello, " + name.toUpperCase() + "!!");
};

// Anotación en retorno de funciones
function getFavoriteNumber(): number {
    return 26;
}

// Funciones anónimas
const names = ["Alice", "Bob", "Eve"];

names.forEach(function (s) {
    console.log(s.toUpperCase());
});

// Objetos
function printCoord(pt: { x: number; y: number }) {
    console.log("The coordinate's x value is " + pt.x );
    console.log("The coordinate's y value is " + pt.y );
}

printCoord({ x: 3, y: 7 });

// Propiedades opcionales
function printName(obj: { first: string; last?: string } ) {
    console.log(obj.first, obj.last);
}

// Ambas ok
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });

// Propiedades opcionales, comprobacion 
function printName2(obj: { first: string; last?: string }) {
    // Error
    console.log(obj.last?.toUpperCase());

    if( obj.last !== undefined ){
        console.log(obj.last.toUpperCase());
    }

    // Alternativa segura usando javascript
    console.log(obj.last?.toUpperCase());
}

// Union Type
function printId(id: number | string) {
    console.log("Your ID is:" + id);
}

// Ok
printId(101);
// Ok
printId("202");
// error
printId({ myId: 22342 });

// Narrow union types
function printId2(id: number | string) {
    if ( typeof id === "string" ) {
        console.log(id.toUpperCase());
    } else {
        console.log(id);
    }
}

// Type alias
type Point = {
    x: number;
    y: number;
};

function printCoord2(pt: Point) {
    console.log("The coord x value is " + pt.x);
    console.log("The coord y value is " + pt.y);
}

printCoord2({ x: 100, y: 100 });

// Interfaces
interface Point2 {
    x: number;
    y: number;
}

function printCoord3(pt: Point) {
    console.log("The coordinate x value is " + pt.x);
    console.log("The coordinate y value is " + pt.y);
}

printCoord3({ x: 100, y: 100 });

// Type Assertiosn 
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;

// Tipos literales 
function printText(s: string, alignment: "left" | "right" | "center") {
    console.log(s, alignment);
}

// Ok
printText("Hello", "left");
// Error
printText("Hello", "world");

function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : - 1;
}


interface Options {
    width: number;
}

function configure(x: Options | "auto" ) {
    return 0;
}

configure({ width: 100 });
configure("auto");
// Error
configure("automatic");

// Literal Inference
const obj = { counter: 0 };
if ( 1 == 1 ) {
    obj.counter = 1;
}

declare function handleRequest(url: string, method: "GET" | "POST");

const req = { url: "https://example.com", method: "GET" };
// Argument string no assignable a GET O POST
handleRequest(req.url, req.method);

// Solucion 1 
const req1 = { url: "https://example.com", method: "GET" as "GET" };
// Solucion 1 variable 2
handleRequest(req.url, req.method as "GET");

// Solucion 2 
const req2 = { url: "asdsadads", method: "GET" } as const;

// Strictnullchecks
function doSomething(x: string | null) {
    if( x === null ) {
        // no hagas nada
    } else {
        console.log("Hola");
    }
}

// Non null assertion operator
function liveDangerously(x?: number | null) {
    // no error 
    console.log(x!.toFixed());
}