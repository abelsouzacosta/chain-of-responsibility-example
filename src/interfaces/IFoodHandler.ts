export interface IFoodHandler {
  next(handler: IFoodHandler): IFoodHandler;

  handle(anAnimal: string): string | null;
}
