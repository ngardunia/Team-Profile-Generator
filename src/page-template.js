// create the team
const generateTeam = team => {

    // create the manager html
    const generateManager = manager => {
        return `
        <div>
            <h1>${manager.getName()}</h1>
        </div>
        `;
    };

    // create the engineer html
    const generateEngineer = engineer => {
        return `
        <div>
            <h1>${engineer.getName()}</h1>
        </div>
        `;
    };

    // create the intern html
    const generateIntern = intern => {
        return `
        <div>
            <h1>${intern.getName()}</h1>
        </div>
        `;
    };

    const html = [];

    //push the team array that is passed to this function into the empty html array
    // get just the employees out of the html array that have a role of Manager
    // call the generateManager function, passing in that manager

    // same thing, but for employees that have Engineer role
    // at the end, join the array together

    // return the joined array

}

//export function to generate entire page
module.exports = team => {

    return `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="./assets/style.css">
  <title>Team Builder</title>
</head>
<body>
  <div>
    ${generateTeam(team)}
  </div>
</body>
</html>
    `;
};