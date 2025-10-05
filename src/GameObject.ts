import { Sprite } from "./Sprite";

export type TDirection = "up" | "down" | "left" | "right";
export type TDirectionUpdate = Record<TDirection, ["y" | "x", -1 | 1]>;
export type TBehavior = {
  type: "walk";
  direction: TDirection;
};

export interface IGameObjectConfig {
  isMounted?: boolean;
  x?: number;
  y?: number;
  direction?: TDirection;
  src?: string;
  isPlayerControlled?: boolean;
}

export class GameObject {
  isMounted: boolean;
  x: number;
  y: number;
  direction: TDirection;
  sprite: Sprite;

  constructor(config: IGameObjectConfig) {
    this.isMounted = false;
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.direction = config.direction || "down";
    this.sprite = new Sprite({
      gameObject: this,
      src: config.src || "./images/characters/people/hero.png",
    });
  }

  mount(map) {
    this.isMounted = true;
    map.addMap(this.x, this.y);
  }
  update(_: any) {}
}
