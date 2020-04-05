const nunjucks = require("nunjucks");
const fs = require("fs");

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