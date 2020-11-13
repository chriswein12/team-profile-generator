htmlGenerator = team => {

    const manager = team[0];
    console.log(manager);
    const engineers = team.filter(employee => employee.getRole() === "Engineer")
    console.log(engineers);
    const interns = team.filter(employee => employee.getRole() === "Intern")
    console.log(interns)

    const mainHtml = mainHTML(manager);
    const engineerHtml = engineerHTML(engineers);
    const internHtml = internHTML(interns);
    const endHtml = endHTML();

    const fullHtml = [mainHtml, engineerHtml, internHtml, endHtml]

    return fullHtml.join("");

}

const mainHTML = manager => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">    
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">    
        <title>My Team</title>
    </head>
    
    <body>
        <header class="mb-5">
            <h1 class="text-center text-white bg-dark p-4">My Team</h1>
        </header>
        
        <main class="container">
            <div class="row justify-content-center">
                <div class="col-md-4">
                    <div class="card shadow mb-4">
                        <div class="card-header bg-dark text-white">
                        <h2 class="h3 card-title font-weight-bold">${manager.name}</h2>
                        <h3 class="h4 card-subtitle mb-2"><i class="fas fa-mug-hot"></i>${manager.getRole()}</h3>
                        </div>
                        <div class="card-body bg-light">
                            <ul class="list-group list-group-flush border rounded-lg">
                                <li class="list-group-item">ID: ${manager.id}</li>
                                <li class="list-group-item">Email: ${manager.email}</li>
                                <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
                            </ul>
                        </div>
                    </div>
                </div>
    `
}

const engineerHTML = engineers => {
    if (engineers) {
        engineerHtmlArray = []
        
        for (i=0; i<engineers.length; i++) {
        engineerHtmlArray.push(`
        <div class="col-md-4">
            <div class="card shadow">
                <div class="card-header bg-dark text-white">
                <h2 class="h3 card-title font-weight-bold">${engineers[i].name}</h2>
                <h3 class="h4 card-subtitle mb-2"><i class="fas fa-glasses"></i>${engineers[i].getRole()}</h3>
                </div>
                <div class="card-body bg-light">
                    <ul class="list-group list-group-flush border rounded-lg">
                        <li class="list-group-item">ID: ${engineers[i].id}</li>
                        <li class="list-group-item">Email: ${engineers[i].email}</li>
                        <li class="list-group-item">GitHub: <a href="https://github.com/${engineers[i].github}" target="_blank">${engineers[i].github}</a></li>
                    </ul>
                </div>
            </div>
        </div>
        `
        )};

        return engineerHtmlArray.join("");

    } else {
        return "";
    }
}

const internHTML = interns => {
    if (interns) {
        internHtmlArray = []
        
        for (i=0; i<interns.length; i++) {
        internHtmlArray.push(`
        <div class="col-md-4">
            <div class="card shadow">
                <div class="card-header bg-dark text-white">
                <h2 class="h3 card-title font-weight-bold">${interns[i].name}</h2>
                <h3 class="h4 card-subtitle mb-2"><i class="fas fa-user-graduate"></i>${interns[i].getRole()}</h3>
                </div>
                <div class="card-body bg-light">
                    <ul class="list-group list-group-flush border rounded-lg">
                        <li class="list-group-item">ID: ${interns[i].id}</li>
                        <li class="list-group-item">Email: ${interns[i].email}</li>
                        <li class="list-group-item">School: ${interns[i].school}</li>
                    </ul>
                </div>
            </div>
        </div>
        `
        )};

        return internHtmlArray.join("");

    } else {
        return "";
    }
}

const endHTML = () => {
    return `
    </div>
    </main>
</body>
</html>
`
} 

module.exports = htmlGenerator;