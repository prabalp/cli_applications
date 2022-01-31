#!/usr/bin/env node

import inquirer from "inquirer";

let name;

async function askName() {
  const answers = await inquirer.prompt([
    {
      name: "user_name",
      message: "What is your name?",
      //   default: "world",
      default() {
        return "Prabal";
      },
    },
  ]);
  name = answers.user_name;
  console.log(`Hello ${name}!`);
}

await askName();

console.log("Done");
