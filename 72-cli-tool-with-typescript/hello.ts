import { Command } from "commander";

const program = new Command();

program
  .command("hello")
  .action(() => {
    console.log("Hello World");
  });

program.parse();