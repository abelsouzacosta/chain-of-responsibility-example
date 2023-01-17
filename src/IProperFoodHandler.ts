interface ProperFoodHandler {
  setNext(handler: ProperFoodHandler): ProperFoodHandler;

  handle(anAnimal: string): string;
}
