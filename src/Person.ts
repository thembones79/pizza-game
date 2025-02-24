import { GameObject, IGameObjectConfig, TDirectionUpdate } from "./GameObject";

export class Person extends GameObject {
  movingProgressRemaining: number;
  directionUpdate: TDirectionUpdate;

  constructor(public config: IGameObjectConfig) {
    super(config);

    this.movingProgressRemaining = 16;
    this.directionUpdate = {
      up: ["y", -1],
      down: ["y", 1],
      left: ["x", -1],
      right: ["x", 1],
    };
  }

  update(state:any){
      console.log({state})
      this.updatePosition();
  }

  updatePosition() {
    if (this.movingProgressRemaining > 0) {
      const [property, change] = this.directionUpdate[this.direction];
      this[property] += change;
      this.movingProgressRemaining -= 1;
    }
  }
}
