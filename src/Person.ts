import { GameObject, IGameObjectConfig } from "./GameObject";

export class Person extends GameObject {
  movingProgressRemaining: number;
  constructor(config: IGameObjectConfig) {
    super(config);

    this.movingProgressRemaining = 16;
  }
}
