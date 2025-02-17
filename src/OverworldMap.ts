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
}
