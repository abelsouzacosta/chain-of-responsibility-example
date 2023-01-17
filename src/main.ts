import { handler } from "./handlers";

export function properFoodForAnimal(anAnimal: string): string | null {
  return handler.handle(anAnimal);
}
