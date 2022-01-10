#!/usr/bin/env node

const inquirer = require('inquirer');
const axios = require('axios');

console.log("Hello npm user!");
inquirer
  .prompt([
    {
      type: "question",
      name: "pokemonName",
      message: "Name of pokemon",
      default: "pikachu"
    }
  ])
  .then(async (answers) => {
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${answers.pokemonName}`)
      console.log(res.data.types.map(type => type.type.name));
    } catch (err) {
      console.log("Pokemon not found, try again");
    }
  })
  .catch((error) => {
    console.error(`Error running process ${error.message}`);
  });
