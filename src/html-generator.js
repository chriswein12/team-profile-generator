htmlGenerator = team => {

    const manager = team[0];
    console.log(manager);
    const engineers = team.filter(employee => employee.getRole() === "Engineer")
    console.log(engineers);
    const interns = team.filter(employee => employee.getRole() === "Intern")
    console.log(interns)

    const mainHTML = () => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">    
    
    
        <title>My Team</title>
    </head>
    
    <body>
        <header>
            <h1 class="text-center text-white bg-dark p-1">My Team</h1>
        </header>
        
        <main class="container">
            <div class="row">
    
            </div>
    
        </main>
    </body>
    </html>
    `
    }

}

module.exports = htmlGenerator;