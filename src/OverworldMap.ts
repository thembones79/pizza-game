import type { GameObject } from "./GameObject";
export interface OverworldMapConfig {
  gameObject: GameObject;
  lowerSrc: string;
  upperSrc: string;
}
export class OverworldMap {
  gameObject: GameObject;
  lowerSrc: string;
  upperSrc: string;

  constructor(config: OverworldMapConfig) {
    this.gameObject = config.gameObject;
    this.lowerSrc = config.lowerSrc;
    this.upperSrc = config.upperSrc;
  }
}
