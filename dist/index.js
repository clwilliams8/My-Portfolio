(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["index.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<!DOCTYPE HTML>\r\n<!--\r\n\tEditorial by HTML5 UP\r\n\thtml5up.net | @ajlkn\r\n\tFree for personal and commercial use under the CCA 3.0 license (html5up.net/license)\r\n-->\r\n<html>\r\n    <!-- <div id=\"header\"></div> -->\r\n    ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("../../public/partials/head.html", false, "index.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
callback(null,t_1);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\r\n\t<body class=\"is-preload\">\r\n\r\n\t\t<!-- Wrapper -->\r\n\t\t\t<div id=\"wrapper\">\r\n\r\n\t\t\t\t<!-- Main -->\r\n\t\t\t\t\t<div id=\"main\">\r\n\t\t\t\t\t\t<div class=\"inner\">\r\n\r\n                            <!-- Header -->\r\n                            ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("../../public/partials/header-socialLinks.html", false, "index.njk", false, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
callback(null,t_5);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
callback(null,t_7);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\r\n\r\n\t\t\t\t\t\t\t<!-- Banner -->\r\n\t\t\t\t\t\t\t\t<section id=\"banner\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t\t\t<header>\r\n\t\t\t\t\t\t\t\t\t\t\t<h1>Hi, I'm Colton Williams</h1>\r\n\t\t\t\t\t\t\t\t\t\t\t<p>Software Developer</p>\r\n                                        </header>\r\n                                        \r\n\t\t\t\t\t\t\t\t\t\t<p>Hello world! Welcome to my domain, happy you found yourself here. \r\n                                        I'm Colton Williams.\r\n                                        </p>\r\n\r\n                                        <p>This site is a showcase of a few websites, projects, and software tools I've built and/or worked on with development teams in the industry, and ways to contact me if you ever need help\r\n                                            with anything.\r\n                                        </p>\r\n\t\t\t\t\t\t\t\t\t\t<ul class=\"actions\">\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"portfolio.html\" class=\"button big\">Check out my projects!</a></li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<span class=\"image object\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"images/christmasMe.jpg\" alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</section>\r\n\r\n\t\t\t\t\t\t\t<!-- Section -->\r\n\t\t\t\t\t\t\t\t<!-- <section>\r\n\t\t\t\t\t\t\t\t\t<header class=\"major\">\r\n\t\t\t\t\t\t\t\t\t\t<h2>Erat lacinia</h2>\r\n\t\t\t\t\t\t\t\t\t</header>\r\n\t\t\t\t\t\t\t\t\t<div class=\"features\">\r\n\t\t\t\t\t\t\t\t\t\t<article>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon fa-gem\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h3>Portitor ullamcorper</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</article>\r\n\t\t\t\t\t\t\t\t\t\t<article>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon solid fa-paper-plane\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h3>Sapien veroeros</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</article>\r\n\t\t\t\t\t\t\t\t\t\t<article>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon solid fa-rocket\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h3>Quam lorem ipsum</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</article>\r\n\t\t\t\t\t\t\t\t\t\t<article>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon solid fa-signal\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h3>Sed magna finibus</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</article>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</section> -->\r\n\r\n\t\t\t\t\t\t\t<!-- Section -->\r\n\t\t\t\t\t\t\t\t<!-- <section>\r\n\t\t\t\t\t\t\t\t\t<header class=\"major\">\r\n\t\t\t\t\t\t\t\t\t\t<h2>Ipsum sed dolor</h2>\r\n\t\t\t\t\t\t\t\t\t</header>\r\n\t\t\t\t\t\t\t\t\t<div class=\"posts\">\r\n\t\t\t\t\t\t\t\t\t\t<article>\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"image\"><img src=\"images/pic01.jpg\" alt=\"\" /></a>\r\n\t\t\t\t\t\t\t\t\t\t\t<h3>Interdum aenean</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>\r\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"actions\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\" class=\"button\">More</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t</article>\r\n\t\t\t\t\t\t\t\t\t\t<article>\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"image\"><img src=\"images/pic02.jpg\" alt=\"\" /></a>\r\n\t\t\t\t\t\t\t\t\t\t\t<h3>Nulla amet dolore</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>\r\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"actions\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\" class=\"button\">More</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t</article>\r\n\t\t\t\t\t\t\t\t\t\t<article>\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"image\"><img src=\"images/pic03.jpg\" alt=\"\" /></a>\r\n\t\t\t\t\t\t\t\t\t\t\t<h3>Tempus ullamcorper</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>\r\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"actions\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\" class=\"button\">More</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t</article>\r\n\t\t\t\t\t\t\t\t\t\t<article>\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"image\"><img src=\"images/pic04.jpg\" alt=\"\" /></a>\r\n\t\t\t\t\t\t\t\t\t\t\t<h3>Sed etiam facilis</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>\r\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"actions\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\" class=\"button\">More</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t</article>\r\n\t\t\t\t\t\t\t\t\t\t<article>\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"image\"><img src=\"images/pic05.jpg\" alt=\"\" /></a>\r\n\t\t\t\t\t\t\t\t\t\t\t<h3>Feugiat lorem aenean</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>\r\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"actions\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\" class=\"button\">More</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t</article>\r\n\t\t\t\t\t\t\t\t\t\t<article>\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"image\"><img src=\"images/pic06.jpg\" alt=\"\" /></a>\r\n\t\t\t\t\t\t\t\t\t\t\t<h3>Amet varius aliquam</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>\r\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"actions\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\" class=\"button\">More</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t</article>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</section> -->\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n                    <!-- Sidebar & Footer -->\r\n                    ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("../../public/partials/sidebar-footer.html", false, "index.njk", false, function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
callback(null,t_9);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_12,t_11) {
if(t_12) { cb(t_12); return; }
callback(null,t_11);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\r\n\t\t\t</div>\r\n\r\n        <!-- Scripts -->\r\n        ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("../../public/partials/scripts.html", false, "index.njk", false, function(t_14,t_13) {
if(t_14) { cb(t_14); return; }
callback(null,t_13);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_16,t_15) {
if(t_16) { cb(t_16); return; }
callback(null,t_15);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\r\n\t</body>\r\n</html>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
