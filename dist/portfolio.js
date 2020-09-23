(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["portfolio.njk"] = (function() {
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
env.getTemplate("../../public/partials/head.html", false, "portfolio.njk", false, function(t_2,t_1) {
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
env.getTemplate("../../public/partials/header-socialLinks.html", false, "portfolio.njk", false, function(t_6,t_5) {
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
output += "\r\n\r\n\t\t\t\t\t\t\t<section>\r\n\r\n                                <header class=\"main\">\r\n                                    <h1>Portfolio</h1>\r\n                                </header>\r\n\r\n                                <!-- <span class=\"image main\"><img src=\"images/portfolioCover.jpg\" alt=\"\" /></span> -->\r\n                                <ul>\r\n                                    <li><a href=\"#idustry\">Industry projects</a></li>\r\n                                    <li><a href=\"#ios-android\">iOS / Android</a></li>\r\n                                    <li><a href=\"#personal\">Peronsal / Small Projects</a></li>\r\n                                </ul>\r\n                                <!-- Industry Projects -->\r\n\t\t\t\t\t\t\t\t<section id=\"idustry\">\r\n\t\t\t\t\t\t\t\t\t<header class=\"major\">\r\n\t\t\t\t\t\t\t\t\t\t<h2>Industry Projects</h2>\r\n\t\t\t\t\t\t\t\t\t</header>\r\n\t\t\t\t\t\t\t\t\t<div class=\"posts\">\r\n\t\t\t\t\t\t\t\t\t\t<article>\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"portfolio/arkansas-house-of-representatives.html\" class=\"image\"><img src=\"images/portfolio/arhouse/logo.png\" alt=\"\" /></a>\r\n\t\t\t\t\t\t\t\t\t\t\t<h3>Arkansas House of Representatives</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t<p>The Arkansas House of Representatives is the lower house of the Arkansas General Assembly, the state legislature of the US state of Arkansas. The House is composed of 100 members elected from an equal amount of constituencies across the state.</p>\r\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"actions block\">\r\n                                                <li><a href=\"portfolio/arkansas-house-of-representatives.html\" class=\"button\">About the project</a></li><br>\r\n                                                <li><a href=\"https://www.arkansashouse.org\" target=\"_blank\" class=\"btn-blue\">Go To arkansashouse.org</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t</article>\r\n\t\t\t\t\t\t\t\t\t\t<article>\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"portfolio/arkansas-bride.html\" class=\"image\"><img src=\"images/portfolio/bride/logo.png\" alt=\"\" /></a>\r\n\t\t\t\t\t\t\t\t\t\t\t<h3>Arkansas Bride</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t<p>\r\n                                                Since 1990, Arkansas Bride has been the No. 1 resource for Natural State brides planning their big day. It's not only the biggest bridal magazine in the state, but it is also the best online tool for soon-to-be newlyweds in search of vendors and inspiration. </p>\r\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"actions block\">\r\n                                                <li><a href=\"portfolio/arkansas-bride.html\" class=\"button\">About the project</a></li><br>\r\n                                                <li><a href=\"https://www.arkansasbride.com\" target=\"_blank\" class=\"btn-blue\">Go To arkansasbride.com</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t</article>\r\n\t\t\t\t\t\t\t\t\t\t<article>\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"portfolio/fish-n-stuff.html\" class=\"image\"><img src=\"images/portfolio/fish-n-stuff/logo.png\" alt=\"\" /></a>\r\n\t\t\t\t\t\t\t\t\t\t\t<h3>Fish 'N Stuff</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t<p>Locally owned and operated since 1987, Fish’N Stuff specializes in outfitting anglers from the beginner to the veteran bass tournament angler. If you’ve ever walked inside our store, you know why it is a fisherman’s paradise. Our goal is to help everyone catch more fish . . . no matter what kind of fish you are after.</p>\r\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"actions block\">\r\n                                                <li><a href=\"portfolio/fish-n-stuff.html\" class=\"button\">About the project</a></li><br>\r\n                                                <li><a href=\"https://fishnstuff.com/\" target=\"_blank\" class=\"btn-blue\">Go To fishnstuff.com</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t</article>\r\n\t\t\t\t\t\t\t\t\t\t<article>\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"portfolio/seaark-boats.html\" class=\"image\"><img src=\"images/portfolio/seaark/logo.png\" alt=\"\" /></a>\r\n\t\t\t\t\t\t\t\t\t\t\t<h3>Seaark Boats</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t<p>SeaArk has a long tradition of building quality constructed all-welded aluminum boats. Choosing SeaArk is choosing quality workmanship, personal customer service, and one of the best warranties offered in the aluminum boat industry.</p>\r\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"actions block\">\r\n                                                <li><a href=\"portfolio/seaark-boats.html\" class=\"button\">About the project</a></li><br>\r\n                                                <li><a href=\"https://www.seaarkboats.com/\" target=\"_blank\" class=\"btn-blue\">Go To seaarkboats.com</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t</article>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n                                </section>\r\n\r\n                                <hr style=\"margin-top: 100px;\">\r\n\r\n                                <!-- iOS / Android  Projects -->\r\n\t\t\t\t\t\t\t\t<section id=\"ios-android\">\r\n\t\t\t\t\t\t\t\t\t<header class=\"major\">\r\n\t\t\t\t\t\t\t\t\t\t<h2>iOS / Android Projects testt</h2>\r\n\t\t\t\t\t\t\t\t\t</header>\r\n\t\t\t\t\t\t\t\t\t<div class=\"posts\">\r\n\t\t\t\t\t\t\t\t\t\t<article>\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"portfolio/hanks-mobile-app.html\" class=\"image\"><img src=\"images/portfolio/hanks/Hanks-New-Logo.jpg\" alt=\"\" /></a>\r\n\t\t\t\t\t\t\t\t\t\t\t<h3>Hank's Fine Furniture (iOS & Android) </h3>\r\n                                            <!-- <p>Used a tool called <a href=\"https://www.goodbarber.com/\" target=\"_blank\">GoodBarber</a>  \r\n                                               to make most of the app, and then had to create a couple custom HTML pages. The goodbarber platform made getting the app on the App Store and Google Play\r\n                                               store easy peasy.\r\n                                            </p> -->\r\n                                            <p>Founded in 1975 by Hank Browne, Hank's Fine Furniture has grown to 15 stores in 4 states and is one of America's Top 100 Independent Furniture Retailers. From the very beginning, Hank's Fine Furniture's success has been built on offering quality furniture, bedding and accessories at excellent values. As a family-owned business, Hank's Fine Furniture has thrived because of our dedication to service after the sale. You, the customer, have been the most important part of our business for over 40 years.</p>\r\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"actions block\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"portfolio/hanks-mobile-app.html\" class=\"button\">About the project</a></li><br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"https://apps.apple.com/us/app/hanks-fine-furniture/id1486148092\" target=\"_blank\" class=\"btn-blue\">Go To Hank's Mobile App</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n                                        </article>\r\n                                        <article>\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"portfolio/attendIT.html\" class=\"image\"><img src=\"images/portfolio/attendIT/logo.png\" alt=\"\" /></a>\r\n\t\t\t\t\t\t\t\t\t\t\t<h3>AttendIT: Attendance Taking Mobile App (Android) </h3>\r\n                                            <p>During my senior year in college, I built my final Capstone project, AttendIT, with my friend Jie Lie. Software Engineering was a pre-req to this class \r\n                                               where we learned how to construct a <a target=\"_blank\" href=\"https://docs.google.com/document/d/1NmcCv_9F9DVbXRV6fQLwDnmuRb3-aihxqL8KwU8Tqis/edit?usp=sharing\">software requirements document</a>. \r\n                                               This document explains how the software was used between all the different types of users and the different object models that would need to be created and how they interacted with each other.\r\n                                            </p>\r\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"actions block\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"portfolio/attendIT.html\" class=\"button\">About the project</a></li><br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"https://github.com/clwilliams8/AttendIt-Mobile-Attendance-App\" target=\"_blank\" class=\"btn-blue\">Go To AttendIT</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n                                        </article>\r\n                                    </div>\r\n                                </section>\r\n                                \r\n                                <hr style=\"margin-top: 100px;\">\r\n                                \r\n                                <!-- Personal Projects -->\r\n\t\t\t\t\t\t\t\t<section id=\"personal\">\r\n\t\t\t\t\t\t\t\t\t<header class=\"major\">\r\n\t\t\t\t\t\t\t\t\t\t<h2 style=\"margin-top: 1.75em;\">Personal Projects</h2>\r\n\t\t\t\t\t\t\t\t\t</header>\r\n\t\t\t\t\t\t\t\t\t<div class=\"posts\">\r\n\t\t\t\t\t\t\t\t\t\t<article>\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"portfolio/opengl-3d-game.html\" class=\"image\"><img src=\"images/portfolio/opengl-3d-game/logo.png\" alt=\"\" /></a>\r\n\t\t\t\t\t\t\t\t\t\t\t<h3>OpenGL_3D_Game</h3>\r\n                                            <p>Based on <a target=\"_blank\" href=\"https://www.youtube.com/watch?v=VS8wlS9hF8E&list=PLRIWtICgwaX0u7Rf9zkZhLoLuZVfUksDP\">this youtube series</a>, I used the <a target=\"_blank\" href=\"http://legacy.lwjgl.org/\">Lighweight Java Game Library</a> to create a 3D world with a character that you control the movements of.</p>\r\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"actions block\">\r\n                                                <li><a href=\"portfolio/opengl-3d-game.html\" class=\"button\">About the project</a></li><br>\r\n                                                <li><a href=\"https://github.com/clwilliams8/OpenGL_3D_Game\" target=\"_blank\" class=\"btn-blue\">Go To OpenGL 3D Game</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t</article>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</section>\r\n\r\n                            </section>\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n                    <!-- Sidebar & Footer -->\r\n                    ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("../../public/partials/sidebar-footer.html", false, "portfolio.njk", false, function(t_10,t_9) {
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
env.getTemplate("../../public/partials/scripts.html", false, "portfolio.njk", false, function(t_14,t_13) {
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
