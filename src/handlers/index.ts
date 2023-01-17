import { CatFoodHandler } from "./CatFoodHandler";
import { DogFoodHandler } from "./DogFoodHandler";
import { MonkeyFoodHandler } from "./MonkeyFoodHandler";
import { OwlFoodHandler } from "./OwlFoodHandler";
import { HorseFoodHandler } from "./HorseFoodHandler";

const catHandler = new CatFoodHandler();
const monkeyHandler = new MonkeyFoodHandler();
const owlHandler = new OwlFoodHandler();
const horseHandler = new HorseFoodHandler();

const handler = new DogFoodHandler();

handler
  .next(catHandler)
  .next(owlHandler)
  .next(monkeyHandler)
  .next(horseHandler);

export { handler };
