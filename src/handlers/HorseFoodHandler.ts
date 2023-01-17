import { AbstractFoodHandler } from "./AbstractFoodHandler";

export class HorseFoodHandler extends AbstractFoodHandler {
  handle(anAnimal: string): string | null {
    if ("horse" === anAnimal.toLowerCase()) return `Animal horse will eat corn`;

    return super.handle(anAnimal);
  }
}
