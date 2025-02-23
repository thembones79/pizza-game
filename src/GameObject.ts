import { Sprite } from "./Sprite";

export type TDirection = "up" | "down" | "left" | "right";

export interface IGameObjectConfig {
  x?: number;
  y?: number;
  direction?: TDirection;
  src?: string;
}

export class GameObject {
  x: number;
  y: number;
  direction: TDirection;
  sprite: Sprite;

  constructor(config: IGameObjectConfig) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.direction = config.direction || "down";
    this.sprite = new Sprite({
      gameObject: this,
      src: config.src || "./images/characters/people/hero.png",
    });
  }
  update() {}
}
