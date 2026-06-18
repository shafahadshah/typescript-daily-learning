import { Command } from "commander";

const program = new Command();

program
  .name("mycli")
  .description("My CLI Tool");

program.parse();