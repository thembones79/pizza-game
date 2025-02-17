import type { GameObject } from "./GameObject";
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
