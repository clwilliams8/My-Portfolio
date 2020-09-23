(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/scripts.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<script src=\"assets/main.js\"></script>\r\n<script  type=\"text/javascript\" src=\"https://unpkg.com/nanogallery2@2.4.2/dist/jquery.nanogallery2.min.js\"></script>\r\n\r\n<script>\r\n    function goBack() {\r\n      window.history.back();\r\n    }\r\n</script>";
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
