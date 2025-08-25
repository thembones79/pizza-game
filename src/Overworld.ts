import { OverworldMap } from "./OverworldMap";
import { DirectionInput } from "./DirectionInput";

export interface IOverworldConfig {
  element: Element;
}

export class Overworld {
  element: Element;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  map: OverworldMap | null;
  directionInput?: DirectionInput;

  constructor(config: IOverworldConfig) {
    this.element = config.element;
    this.canvas = this.element.querySelector(
      ".game-canvas",
    ) as HTMLCanvasElement;
    this.ctx = this.canvas.getContext("2d")!;
    this.map = null;
  }

  startGameLoop() {
    const step = () => {
      this.drawAll();
      requestAnimationFrame(() => {
        step();
      });
    };
    step();
  }

  drawAll() {
    if (!this.map) return;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    const cameraPerson = this.map.gameObjects.hero;

    this.map.drawLowerImage(this.ctx, cameraPerson);

    Object.values(this.map.gameObjects).forEach((o) => {
      o.sprite.draw(this.ctx, cameraPerson);
      o.update({
        arrow: this.directionInput?.direction,
      });
      o.sprite.gameObject.update(this.ctx);
    });

    this.map.drawUpperImage(this.ctx, cameraPerson);
  }

  init() {
    this.map = new OverworldMap(window.OverworldMaps.Kitchen);
    this.startGameLoop();
    this.directionInput = new DirectionInput();
    this.directionInput.init();
  }
}
