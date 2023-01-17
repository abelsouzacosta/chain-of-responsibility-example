import { AbstractFoodHandler } from "./AbstractFoodHandler";

export class MonkeyFoodHandler extends AbstractFoodHandler {
  handle(anAnimal: string): string | null {
    if ("monkey" === anAnimal.toLowerCase())
      return `Animal monkey will eat banana`;

    return super.handle(anAnimal);
  }
}
