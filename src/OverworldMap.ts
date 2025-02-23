import { GameObject } from "./GameObject";
import { utils } from "./utils";

declare global {
  interface Window {
    OverworldMaps: Record<string, IOverworldMapConfig>;
  }
}

export interface IOverworldMapConfig {
  gameObjects: Record<string, GameObject>;
  lowerSrc: string;
  upperSrc: string;
}
export class OverworldMap {
  gameObjects: Record<string, GameObject>;
  lowerImage: HTMLImageElement;
  upperImage: HTMLImageElement;

  constructor(config: IOverworldMapConfig) {
    this.gameObjects = config.gameObjects;
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
        x: utils.withGrid(5),
        y: utils.withGrid(6),
      }),
      npc1: new GameObject({
        x: utils.withGrid(7),
        y: utils.withGrid(9),
        src: "./images/characters/people/npc1.png",
      }),
    },
  },
  Kitchen: {
    lowerSrc: "./images/maps/KitchenLower.png",
    upperSrc: "./images/maps/KitchenUpper.png",
    gameObjects: {
      hero: new GameObject({
        x: utils.withGrid(5),
        y: utils.withGrid(6),
      }),
      npc1: new GameObject({
        x: utils.withGrid(7),
        y: utils.withGrid(9),
        src: "./images/characters/people/npc1.png",
      }),
      npcA: new GameObject({
        x: utils.withGrid(8),
        y: utils.withGrid(8),
        src: "./images/characters/people/npc2.png",
      }),
      npcB: new GameObject({
        x: utils.withGrid(9),
        y: utils.withGrid(5),
        src: "./images/characters/people/npc3.png",
      }),
    },
  },
};
