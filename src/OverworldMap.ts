import { GameObject, TDirection } from "./GameObject";
import { Person } from "./Person";
import { utils } from "./utils";

declare global {
  interface Window {
    OverworldMaps: Record<string, IOverworldMapConfig>;
  }
}

export interface IOverworldMapConfig {
  gameObjects: Record<string, GameObject>;
  walls: Record<string, boolean>;
  lowerSrc: string;
  upperSrc: string;
}
export class OverworldMap {
  gameObjects: Record<string, GameObject>;
  walls: Record<string, boolean>;
  lowerImage: HTMLImageElement;
  upperImage: HTMLImageElement;

  constructor(config: IOverworldMapConfig) {
    this.gameObjects = config.gameObjects;
    this.walls = config.walls || {};
    this.lowerImage = new Image();
    this.lowerImage.src = config.lowerSrc;
    this.upperImage = new Image();
    this.upperImage.src = config.upperSrc;
  }

  drawLowerImage(ctx: CanvasRenderingContext2D, cameraPerson: GameObject) {
    ctx.drawImage(
      this.lowerImage,
      utils.withGrid(10.5) - cameraPerson.x,
      utils.withGrid(6) - cameraPerson.y,
    );
  }

  drawUpperImage(ctx: CanvasRenderingContext2D, cameraPerson: GameObject) {
    ctx.drawImage(
      this.upperImage,
      utils.withGrid(10.5) - cameraPerson.x,
      utils.withGrid(6) - cameraPerson.y,
    );
  }

  isSpaceTaken(currentX: number, currentY: number, direction: TDirection) {
    const { x, y } = utils.nextPosition(currentX, currentY, direction);
    return this.walls[`${x},${y}`] || false;
  }

  addWall(x: number, y: number) {
    this.walls[`${x},${y}`] = true;
  }

  removeWall(x: number, y: number) {
    delete this.walls[`${x},${y}`];
  }

  moveWall(wasX: number, wasY: number, direction: TDirection) {
    this.removeWall(wasX, wasY);
    const { x, y } = utils.nextPosition(wasX, wasY, direction);
    this.addWall(x, y);
  }
}

window.OverworldMaps = {
  DemoRoom: {
    lowerSrc: "./images/maps/DemoLower.png",
    upperSrc: "./images/maps/DemoUpper.png",
    walls: {
      [utils.asGridCoord(7, 6)]: true,
      [utils.asGridCoord(8, 6)]: true,
      [utils.asGridCoord(7, 6)]: true,
      [utils.asGridCoord(8, 7)]: true,
    },
    gameObjects: {
      hero: new Person({
        isPlayerControlled: true,
        x: utils.withGrid(5),
        y: utils.withGrid(6),
      }),
      npc1: new Person({
        x: utils.withGrid(7),
        y: utils.withGrid(9),
        src: "./images/characters/people/npc1.png",
      }),
    },
  },
  Kitchen: {
    lowerSrc: "./images/maps/KitchenLower.png",
    upperSrc: "./images/maps/KitchenUpper.png",
    walls: {
      [utils.asGridCoord(7, 6)]: true,
      [utils.asGridCoord(8, 6)]: true,
      [utils.asGridCoord(7, 6)]: true,
      [utils.asGridCoord(8, 7)]: true,
    },
    gameObjects: {
      hero: new Person({
        isPlayerControlled: true,
        x: utils.withGrid(5),
        y: utils.withGrid(6),
      }),
      npc1: new Person({
        x: utils.withGrid(7),
        y: utils.withGrid(9),
        src: "./images/characters/people/npc1.png",
      }),
      npcA: new Person({
        x: utils.withGrid(8),
        y: utils.withGrid(8),
        src: "./images/characters/people/npc2.png",
      }),
      npcB: new Person({
        x: utils.withGrid(9),
        y: utils.withGrid(5),
        src: "./images/characters/people/npc3.png",
      }),
    },
  },
};
