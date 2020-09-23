(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["portfolio/arkansas-house-of-representatives.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<!DOCTYPE HTML>\r\n<!--\r\n\tEditorial by HTML5 UP\r\n\thtml5up.net | @ajlkn\r\n\tFree for personal and commercial use under the CCA 3.0 license (html5up.net/license)\r\n-->\r\n<html>\r\n    ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("../../../public/partials/headPortfolioDetail.html", false, "portfolio/arkansas-house-of-representatives.njk", false, function(t_2,t_1) {
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
output += "\r\n\t<body class=\"is-preload\">\r\n\r\n\t\t<!-- Wrapper -->\r\n\t\t\t<div id=\"wrapper\">\r\n\r\n\t\t\t\t<!-- Main -->\r\n\t\t\t\t\t<div id=\"main\">\r\n                       \r\n\t\t\t\t\t\t<div class=\"inner\">\r\n\r\n\t\t\t\t\t\t\t<!-- Header -->\r\n                            ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("../../../public/partials/header-socialLinks.html", false, "portfolio/arkansas-house-of-representatives.njk", false, function(t_6,t_5) {
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
output += "\r\n\r\n                            <!-- Content -->\r\n                             <!-- Back button -->\r\n                                <a href=\"../portfolio.html\" class=\"button\" style=\"margin-top: 35px;\"><i class=\"fas fa-chevron-left\"></i> Back to portfolio</a>\r\n\t\t\t\t\t\t\t\t<section>\r\n\t\t\t\t\t\t\t\t\t<header class=\"main\">\r\n\t\t\t\t\t\t\t\t\t\t<h1>Arkansas House of Representatives</h1>\r\n\t\t\t\t\t\t\t\t\t</header>\r\n\r\n\t\t\t\t\t\t\t\t\t<span class=\"image main\"><img src=\"../images/portfolio/arhouse/homeDesktop.png\" alt=\"\" /></span>\r\n\r\n                                    <h2>About Arkansas House</h2>\r\n\t\t\t\t\t\t\t\t\t<p>The Arkansas House of Representatives, along with the Arkansas Senate, compose the legislative branch of state government. Combined, the two bodies form the Arkansas General Assembly. You can read more on <a href=\"https://www.arkansashouse.org/about/the-house\" target=\"_blank\">their about page</a>.</p>\r\n\r\n                                    <hr class=\"major\" />\r\n\r\n                                    <h2>About The Project</h2>\r\n                                        <!-- About us page of company here -->\r\n                                        <p><strong>Mission:</strong> Create a new design that is easier for users, and a backend administration panel, also known as a <a href=\"https://en.wikipedia.org/wiki/Content_management_system\" target=\"_blank\">Content Managment System</a>. This system is an interface to make create, read, update, and delete records from the database, and makes it easy to add new blog post, events, staff members, etc. The data the administrator saves in the backend is automatically reflected on the frontend of the website.</p>\r\n                                        <p><strong>Technologies Used:</strong> Laravel, League CSV package, PHP</p>\r\n                                        <p><strong>Links</strong>\r\n                                            <ul style=\"margin-left: 28px; margin-top: -20px;\">\r\n                                                <li style=\"padding-bottom: 7px;\"><a href=\"https://laravel.com/\" target=\"_blank\">Laravel docs</a></li>\r\n                                                <li style=\"padding-bottom: 7px;\"><a href=\"https://laracasts.com/series/laravel-6-from-scratch\" target=\"_blank\">Laracast</a></li>\r\n                                                <li style=\"padding-bottom: 7px;\"><a href=\"https://csv.thephpleague.com/\" target=\"_blank\">League CSV</a></li>\r\n                                                <li style=\"padding-bottom: 7px;\"><a href=\"https://www.php.net/docs.php\" target=\"_blank\">PHP documentation</a></li>\r\n                                            </ul>\r\n                                        </p>\r\n                                        <p><strong>Before: </strong><a target=\"_blank\" href=\"https://web.archive.org/web/20170202170624/http://www.arkansashouse.org/\">From the Web Archives</a></p>\r\n                                        <p><strong>After: </strong><a target=\"_blank\" href=\"http://www.arkansashouse.org\">Visit new live website</a></p>\r\n\r\n                                    <h2>Video Demo</h2>\r\n                                    <!-- Youtube video here -->\r\n\r\n                                    <h2>Summary</h2>\r\n                                    <!-- My testimonial here -->\r\n                                        <p>This is my first real industry project that I worked on at FLEX360. I learned how the PHP framework called <a target=\"_blank\" href=\"https://laravel.com/\">Laravel</a> works, how to create a backend admin panels, and how to create routing and controllers that prepare data and pass it to the view that the client computer uses. \r\n                                        <p>\r\n\r\n                                        <p>I also made use of a PHP package called <a target=\"_blank\" href=\"https://csv.thephpleague.com/\">league/csv</a> to get access to some nice functions that make it easy to export data as a csv file type, which just like an excel spreadsheet file. This way they could instantly export all the data on the Representatives currently elected.</p>\r\n\r\n                                        <p>I did not do any of the frontend design of this website. I created the full backend and connected the data to the frontend that you see me demostrate in the video demo above. I made mobile responsive updates to their Find My Reps Google Map tool.</p>\r\n                                    \r\n                                </section>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t<!-- Sidebar & Footer -->\r\n                ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("../../../public/partials/sidebar-footer.html", false, "portfolio/arkansas-house-of-representatives.njk", false, function(t_10,t_9) {
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
output += "\r\n\r\n\t\t\t</div>\r\n\r\n\t\t<!-- Scripts -->\r\n        ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("../../../public/partials/scripts.html", false, "portfolio/arkansas-house-of-representatives.njk", false, function(t_14,t_13) {
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
