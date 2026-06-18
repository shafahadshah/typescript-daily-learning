import { Command } from "commander";

const program = new Command();

program
  .command("greet <name>")
  .action((name: string) => {
    console.log(`Hello ${name}`);
  });

program.parse();