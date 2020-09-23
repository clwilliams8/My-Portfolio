(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/header-socialLinks.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<header id=\"header\">\r\n    <a href=\"index.html\" class=\"logo\">Colton Williams</a>\r\n    <ul class=\"icons\">\r\n        <li><a target=\"_blank\" href=\"https://github.com/clwilliams8\" class=\"icon brands fab fa-github\"><span class=\"label\">Github</span></a></li>\r\n        <li><a target=\"_blank\" href=\"https://www.facebook.com/colton.williams.509994/\" class=\"icon brands fa-facebook-f\"><span class=\"label\">Facebook</span></a></li>\r\n        <li><a target=\"_blank\" href=\"https://www.linkedin.com/in/colton-williams7/\" class=\"icon brands fab fa-linkedin-in\"><span class=\"label\">LinkedIn</span></a></li>\r\n    </ul>\r\n</header>\r\n";
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
