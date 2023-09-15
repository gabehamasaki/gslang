import Parser from "./frontend/parser.ts";
import Environment from "./runtime/environment.ts";
import { evaluate } from "./runtime/interpreter.ts";
import { RV_BOOL, RV_NULL, RV_NUMBER } from "./runtime/value.ts";

gspl();

function gspl() {
  const parser = new Parser();
  const env = new Environment();

  env.declareVar("x", RV_NUMBER(100))
  env.declareVar("true", RV_BOOL(true))
  env.declareVar("false", RV_BOOL(false))
  env.declareVar("null", RV_NULL())

  console.log("\nGspl v0.1");
  while (true) {
    const input = prompt(">");


    if (input) {
      if (input.includes("exit")) {
        process.exit(1)
      }

      const program = parser.produceAST(input);

      const result = evaluate(program, env);
      console.log(result);
    }
  }
}
