export interface SpriteConfig {
  a: string;
}
export class Sprite {
  a: string;
  constructor(config: SpriteConfig) {
    this.a = config.a;
  }
}
