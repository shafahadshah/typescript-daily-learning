type Events =
  "click" | "hover";

type EventHandler =
  `on${Capitalize<Events>}`;

const handler: EventHandler =
  "onClick";

console.log(handler);