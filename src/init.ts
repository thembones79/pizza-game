import { Overworld } from "./Overworld";
export const ggg = 0;

export function init() {
    console.log("hi there", document.querySelector(".game-container"));

    const overworld = new Overworld({
        element: document.querySelector(".game-container")!,
    });
    overworld.init();
}
