import Parser from "./frontend/parser.ts";
import { evaluate } from "./runtime/interpreter.ts";

gspl();

function gspl() {
  const parser = new Parser();
  console.log("\nGspl v0.1");
  while (true) {
    const input = prompt(">");

    if (input?.includes("exit")) {
      Deno.exit(1);
    }

    if (input) {
      const program = parser.produceAST(input);

      const result = evaluate(program);
      console.log(result);
    }
  }
}
