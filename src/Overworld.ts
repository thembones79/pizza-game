import { GameObject } from "./GameObject";

export interface OverworldConfig {
  element: Element;
}

export class Overworld {
  element: Element;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  constructor(config: OverworldConfig) {
    this.element = config.element;
    this.canvas = this.element.querySelector(
      ".game-canvas",
    ) as HTMLCanvasElement;
    this.ctx = this.canvas.getContext("2d")!;
    this.map=null;
  }

  startGameLoop() {
    const step = () => {
      requestAnimationFrame(() => {
        step();
      });
    };
  }

  init() {
      this.startGameLoop();
    const image = new Image();
    image.onload = () => {
      this.ctx.drawImage(image, 0, 0);
    };
    image.src = "./images/maps/DemoLower.png";

    const hero = new GameObject({
      x: 5,
      y: 6,
    });

    const npc1 = new GameObject({
      x: 7,
      y: 9,
      src: "./images/characters/people/npc1.png",
    });

    setTimeout(() => {
      hero.sprite.draw(this.ctx);
      npc1.sprite.draw(this.ctx);
    }, 1000);
  }
}
