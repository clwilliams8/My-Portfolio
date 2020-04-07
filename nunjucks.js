const nunjucks = require("nunjucks");
const fs = require("fs");

// main pages
const mainFolder = 'resources/html/';

//compile main pages into public directory
fs.readdir(mainFolder, (err, files) => {
    files.forEach(file => {
        if (file.substring(file.length - 4, file.length) == '.njk') {
            fs.writeFile("public/" + file.substring(0, file.length - 4) + '.html', nunjucks.render("resources/html/" + file), (err, data) => {
                if (err) throw err;
                console.log("Compiled " + file.substring(0, file.length - 4) + '.html' + ", bro.");
            });
        };
    });
});

// portfolio files, compil to public
const portfolioFolder = 'resources/html/portfolio/';
fs.readdir(portfolioFolder, (err, files) => {
    files.forEach(file => {
        if (file.substring(file.length - 4, file.length) == '.njk') {
            fs.writeFile("public/portfolio/" + file.substring(0, file.length - 4) + '.html', nunjucks.render(portfolioFolder + file), (err, data) => {
                if (err) throw err;
                console.log("Porfolio " + file.substring(0, file.length - 4) + '.html' + " compiled.");
            });
        };
    });
});