export interface GameObjectConfig {
  x: number;
  y: number;
}

export class GameObject {
  x: number;
  y: number;
  sprite: any;

  constructor(config: GameObjectConfig) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.sprite = null;
  }
}
