import { AbstractFoodHandler } from "./AbstractFoodHandler";

export class CatFoodHandler extends AbstractFoodHandler {
  handle(anAnimal: string): string | null {
    if ("cat" === anAnimal.toLowerCase())
      return `Animal cat will eat fish meat`;

    return super.handle(anAnimal);
  }
}
