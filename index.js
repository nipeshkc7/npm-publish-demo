#!/usr/bin/env node

const path = require('path');
const inquirer = require('inquirer');
const axios = require('axios');

function init() {

    inquirer
        .prompt([
            // {
            //     type: "list",
            //     name: "template",
            //     message: `what template do you wanna use? `,
            //     choices: ['react', 'vue', 'angular']
            // },
            {
                type: "question",
                name: "pokemonName",
                message: "Name of pokemon",
                default: "pikachu" 
            }
        ])
        .then((answers) => {

            // const template = fs.readFileSync(path.join(__dirname, `/markdown-templates/${answers.template}`), 'utf8')
            // const content = generate(template, answers);
            // fs.writeFileSync(path.join(process.cwd(), '/README.md'), content);

            console.log('Successfully generated README.md');
        })
        .catch((error) => {
            console.error(`Error running process ${error.message}`);
        });

}

// function getTemplates() {
//     return fs.readdirSync(path.join(__dirname, '/markdown-templates'));
// }

init();
