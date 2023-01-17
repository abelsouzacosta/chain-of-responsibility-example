import { AbstractFoodHandler } from "./AbstractFoodHandler";

export class DogFoodHandler extends AbstractFoodHandler {
  handle(anAnimal: string): string | null {
    if ("dog" === anAnimal.toLowerCase())
      return `Animal dog will eat beef meat`;

    return super.handle(anAnimal);
  }
}
