const nunjucks = require("nunjucks");
const fs = require("fs");

// main pages
fs.writeFile("public/index.html", nunjucks.render("resources/html/index.njk"), function(err, data) {
    if (err) console.log(err);
    console.log("Compiled the Nunjucks, captain.");
});

fs.writeFile("public/generic.html", nunjucks.render("resources/html/generic.njk"), function(err, data) {
    if (err) console.log(err);
    console.log("Compiled the Nunjucks, captain.");
});

fs.writeFile("public/elements.html", nunjucks.render("resources/html/elements.njk"), function(err, data) {
    if (err) console.log(err);
    console.log("Compiled the Nunjucks, captain.");
});

fs.writeFile("public/portfolio.html", nunjucks.render("resources/html/portfolio.njk"), function(err, data) {
    if (err) console.log(err);
    console.log("Compiled the Nunjucks, captain.");
});

fs.writeFile("public/contact.html", nunjucks.render("resources/html/contact.njk"), function(err, data) {
    if (err) console.log(err);
    console.log("Compiled the Nunjucks, captain.");
});

// portfolio files
fs.writeFile("public/portfolio/hanks-mobile-app.html", nunjucks.render("resources/html/portfolio/hanks-mobile-app.njk"), function(err, data) {
    if (err) console.log(err);
    console.log("Compiled the Nunjucks, captain.");
});