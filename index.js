#!/usr/bin/env node

const path = require('path');
const inquirer = require('inquirer');

function init() {

    inquirer
        .prompt([
            {
                type: "list",
                name: "template",
                message: `what template do you wanna use? `,
                choices: templates
            },
            {
                type: "question",
                name: "projectName",
                message: "Name of the project, default",
                default: path.basename(path.resolve())
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
