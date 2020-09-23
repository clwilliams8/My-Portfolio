(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/headPortfolioDetail.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<head>\r\n    <title>Colton's Portfolio</title>\r\n    <meta charset=\"utf-8\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, user-scalable=no\" />\r\n    <link rel=\"stylesheet\" href=\"../assets/css/main.css\" />\r\n    <link rel=\"stylesheet\" href=\"../assets/css/custom.css\" />\r\n    <link rel=\"shortcut icon\" type=\"image/png\" href=\"/images/favicon.png\">\r\n    <link  href=\"https://unpkg.com/nanogallery2@2.4.2/dist/css/nanogallery2.min.css\" rel=\"stylesheet\" type=\"text/css\">\r\n</head>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
