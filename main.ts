import inquirer from "inquirer"

let todos = [];

    while (true) {
        const addTask = await inquirer.prompt([
            {
                name: "todo",
                type: "input",
                message: "What do you want to add to your todos...?",
                validate: function(value) {
                    if (value.trim() !== '') {
                        return true;
                    }
                    return 'Please enter a todo item.';
                }
            },
            {
                name: "addMore",
                type: "confirm",
                message: "Do you want to add more?",
                default: false
            }
        ]);

        todos.push(addTask.todo);

        if (!addTask.addMore) {
            break;
        }
    }

    console.log("Your todos:", todos);

