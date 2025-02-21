import { GameObject } from "./GameObject";

declare global {
  interface Window {
    OverworldMaps: any;
  }
}

export interface OverworldMapConfig {
  gameObject: GameObject;
  lowerSrc: string;
  upperSrc: string;
}
export class OverworldMap {
  gameObject: GameObject;
  lowerImage: HTMLImageElement;
  upperImage: HTMLImageElement;

  constructor(config: OverworldMapConfig) {
    this.gameObject = config.gameObject;
    this.lowerImage = new Image();
    this.lowerImage.src = config.lowerSrc;
    this.upperImage = new Image();
    this.upperImage.src = config.upperSrc;
  }

  drawLowerImage(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(this.lowerImage, 0, 0);
  }

  drawUpperImage(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(this.upperImage, 0, 0);
  }
}

window.OverworldMaps = {
  DemoRoom: {
    lowerSrc: "./images/maps/DemoLower.png",
    upperSrc: "./images/maps/DemoUpper.png",
    gameObjects: {
      hero: new GameObject({
        x: 5,
        y: 6,
      }),
      npc1: new GameObject({
        x: 7,
        y: 9,
        src: "./images/characters/people/npc1.png",
      }),
    },
  },
  Kitchen: {
    lowerSrc: "./images/maps/KitchenLower.png",
    upperSrc: "./images/maps/KitchenDemoUpper.png",
    gameObjects: {
      hero: new GameObject({
        x: 5,
        y: 6,
      }),
      npc1: new GameObject({
        x: 7,
        y: 9,
        src: "./images/characters/people/npc1.png",
      }),
      npcA: new GameObject({
        x: 8,
        y: 8,
        src: "./images/characters/people/npc2.png",
      }),
      npcB: new GameObject({
        x: 9,
        y: 2,
        src: "./images/characters/people/npc3.png",
      }),
    },
  },
};
