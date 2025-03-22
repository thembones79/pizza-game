import type { GameObject } from "./GameObject";
export type MoveType = [number, number][];

export interface ISpriteConfig {
  gameObject: GameObject;
  src: string;
  useShadow?: boolean;
  animations?: Record<string, MoveType>;
  currentAnimation?: string;
  currentAnimationFrame?: number;
  animationFrameLimit?: number;
}

export class Sprite {
  gameObject: GameObject;
  image: HTMLImageElement;
  shadow: HTMLImageElement;
  isLoaded?: boolean;
  isShadowLoaded?: boolean;
  useShadow?: boolean;
  animations: Record<string, MoveType>;
  currentAnimation: string;
  currentAnimationFrame: number;
  animationFrameLimit: number;
  animationFrameProgress: number;

  constructor(config: ISpriteConfig) {
    this.gameObject = config.gameObject;
    this.image = new Image();
    this.image.src = config.src;
    this.image.onload = () => {
      this.isLoaded = true;
    };

    this.shadow = new Image();
    this.useShadow = true;
    if (this.useShadow) {
      this.shadow.src = "./images/characters/shadow.png";
    }
    this.shadow.onload = () => {
      this.isShadowLoaded = true;
    };

    this.animations = config.animations || {
      idleDown: [[0, 0]],
      "idle-down": [[0, 0]],
      walkDown: [
        [0, 0],
        [1, 0],
        [2, 0],
        [3, 0],
      ],
      "walk-down": [
        [1, 0],
        [0, 0],
        [3, 0],
        [0, 0],
      ],
    };
    // this.currentAnimation = config.currentAnimation || "idleDown";
    this.currentAnimation = "walk-down";
    this.currentAnimationFrame = 0;

    this.animationFrameLimit = config.animationFrameLimit || 16;
    this.animationFrameProgress = this.animationFrameLimit;
  }

  get frame() {
    return this.animations[this.currentAnimation][this.currentAnimationFrame];
  }

  draw(ctx: CanvasRenderingContext2D) {
    const x = this.gameObject.x - 8;
    const y = this.gameObject.y - 18;
    this.isShadowLoaded && ctx.drawImage(this.shadow, x, y);
    this.isLoaded && ctx.drawImage(this.image, 0, 0, 32, 32, x, y, 32, 32);
  }
}
