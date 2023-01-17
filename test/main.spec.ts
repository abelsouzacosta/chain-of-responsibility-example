import { properFoodForAnimal } from "../src/main";

describe("Proper food for animal", () => {
  it("should return the correct phrase containing the proper for a dog", () => {
    let phrase = properFoodForAnimal("dog");

    expect(phrase).toBe("Animal dog will eat beef meat");
  });

  it("should return the correct phrase containing the proper for a cat", () => {
    let phrase = properFoodForAnimal("cat");

    expect(phrase).toBe("Animal cat will eat fish meat");
  });

  it("should return the correct phrase containing the proper for a owl", () => {
    let phrase = properFoodForAnimal("owl");

    expect(phrase).toBe("Animal owl will eat rat meat");
  });

  it("should return the correct phrase containing the proper for a monkey", () => {
    let phrase = properFoodForAnimal("monkey");

    expect(phrase).toBe("Animal monkey will eat banana");
  });

  it("should return the correct phrase containing the proper for a horse", () => {
    let phrase = properFoodForAnimal("horse");

    expect(phrase).toBe("Animal horse will eat corn");
  });
});
