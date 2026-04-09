type Direction = "left" | "right" | "up" | "down";

function move(direction: Direction) {
  console.log("Moving:", direction);
}

move("left");
// move("forward"); ❌ Error