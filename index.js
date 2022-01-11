#!/usr/bin/env node

const inquirer = require('inquirer');
const axios = require('axios');

async function init(){
  const answers = await inquirer
    .prompt([
      {
        type: "question",
        name: "pokemonName",
        message: "Name of pokemon",
        default: "pikachu"
      }
    ]);

  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${answers.pokemonName}`)
    console.log(res.data.types.map(type => type.type.name));
  } catch (err) {
    console.log("Pokemon not found, try again");
  }
}

init();

