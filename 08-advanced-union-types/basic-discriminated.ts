 // Discriminated union basics

type Circle = { kind: "circle"; radius: number };
type Square = { kind: "square"; size: number };

type Shape = Circle | Square;

function getArea(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
  return shape.size ** 2;
}

console.log(getArea({ kind: "circle", radius: 5 }));
console.log(getArea({ kind: "square", size: 4 }));