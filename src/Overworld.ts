import { OverworldMap } from "./OverworldMap";

export interface IOverworldConfig {
  element: Element;
}

export class Overworld {
  element: Element;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  map: OverworldMap | null;

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

    this.map.drawLowerImage(this.ctx);

    Object.values(this.map.gameObjects).forEach((o) => {
      // o.x += 1;
      o.sprite.draw(this.ctx);
      o.sprite.gameObject.update(this.ctx);
    });

    this.map.drawUpperImage(this.ctx);
  }

  init() {
    this.map = new OverworldMap(window.OverworldMaps.Kitchen);
    this.startGameLoop();
  }
}
