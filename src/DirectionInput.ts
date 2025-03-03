import { TDirection } from "./GameObject";
export interface IDirectionInputConfig {}
export class DirectionInput {
  heldDirections: string[];
  map: Record<KeyboardEvent["code"], TDirection>;
  constructor() {
    this.heldDirections = [];
    this.map = {
      ArrowUp: "up",
      ArrowDown: "down",
      ArrowLeft: "left",
      Right: "right",
      KeyW: "up",
      KeyS: "down",
      KeyA: "left",
      KeyD: "right",
    };
  }

  init() {
    document.addEventListener("keydown", (e) => {
      console.log(e.code);
    });
  }
}
