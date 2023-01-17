export function properFoodForAnimal(anAnimal: string): string {
  let food;

  if ("dog" === anAnimal.toLowerCase()) food = "beef meat";

  if ("cat" === anAnimal.toLowerCase()) food = "fish meat";

  if ("owl" === anAnimal.toLowerCase()) food = "rat meat";

  if ("monkey" === anAnimal.toLowerCase()) food = "banana";

  if ("horse" === anAnimal.toLowerCase()) food = "corn";

  return `Animal ${anAnimal} will eat ${food}`;
}

console.log(properFoodForAnimal("dog"));
