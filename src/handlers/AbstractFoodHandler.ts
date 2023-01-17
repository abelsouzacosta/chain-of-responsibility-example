import { IFoodHandler } from "../interfaces/IFoodHandler";

export class AbstractFoodHandler implements IFoodHandler {
  private nextHandler: IFoodHandler | undefined;

  next(handler: IFoodHandler): IFoodHandler {
    this.nextHandler = handler;

    return handler;
  }

  handle(anAnimal: string): string | null {
    if (this.nextHandler) {
      return this.nextHandler.handle(anAnimal);
    }

    return null;
  }
}
