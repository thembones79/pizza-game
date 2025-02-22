import { Overworld } from "./Overworld";
export const ggg = 0;

export function init() {
  const overworld = new Overworld({
    element: document.querySelector(".game-container")!,
  });
  overworld.init();
}
