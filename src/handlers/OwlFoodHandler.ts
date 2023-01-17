import { AbstractFoodHandler } from "./AbstractFoodHandler";

export class OwlFoodHandler extends AbstractFoodHandler {
  handle(anAnimal: string): string | null {
    if ("owl" === anAnimal) return `Animal owl will eat rat meat`;

    return super.handle(anAnimal);
  }
}
