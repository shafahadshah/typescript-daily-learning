type Direction =
  "left" | "right";

type Move =
  `move-${Direction}`;

const action: Move =
  "move-left";

console.log(action);