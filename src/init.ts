import { Overworld } from "./Overworld";

export function init() {
  const overworld = new Overworld({
    element: document.querySelector(".game-container")!,
  });
  overworld.init();
}
