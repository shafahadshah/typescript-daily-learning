import { Command } from "commander";

const program = new Command();

program
  .command("user")
  .option("--admin")
  .action((options) => {
    console.log(options);
  });

program.parse();