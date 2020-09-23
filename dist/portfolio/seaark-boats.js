(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["portfolio/seaark-boats.njk"] = (function() {
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
env.getTemplate("../../../public/partials/headPortfolioDetail.html", false, "portfolio/seaark-boats.njk", false, function(t_2,t_1) {
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
env.getTemplate("../../../public/partials/header-socialLinks.html", false, "portfolio/seaark-boats.njk", false, function(t_6,t_5) {
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
output += "\r\n\r\n                            <!-- Content -->\r\n                             <!-- Back button -->\r\n                                <a href=\"../portfolio.html\" class=\"button\" style=\"margin-top: 35px;\"><i class=\"fas fa-chevron-left\"></i> Back to portfolio</a>\r\n\t\t\t\t\t\t\t\t<section>\r\n\t\t\t\t\t\t\t\t\t<header class=\"main\">\r\n\t\t\t\t\t\t\t\t\t\t<h1>Seaark Boats</h1>\r\n\t\t\t\t\t\t\t\t\t</header>\r\n\r\n\t\t\t\t\t\t\t\t\t<span class=\"image main\"><img src=\"../images/portfolio/seaark/home.png\" alt=\"\" /></span>\r\n\r\n                                    <h2>About Seaark Boats</h2>\r\n\t\t\t\t\t\t\t\t\t<p>SeaArk Boats has been in business since 1992 and joined the Correct Craft team in early 2016. Our team is comprised of over 150 men and women who know the importance of a well-built product — working together to create boats that will last a lifetime and provide families with many happy memories. All of our team members are part of our family and all are treated as such. We love working together to enrich our story and yours. Read more on their <a href=\"https://www.seaarkboats.com/about/seaark\" target=\"_blank\">about page</a>.</p>\r\n\r\n                                    <hr class=\"major\" />\r\n\r\n                                    <h2>About The Project</h2>\r\n                                        <!-- About us page of company here -->\r\n                                        <p><strong>Mission:</strong> Create iOS / Android app for company that includes coupon/loyalty program for users.</p>\r\n                                        <p><strong>Technologies Used:</strong> Goodbarber mobile app builder, Photoshop, HTML & CSS</p>\r\n                                        <p><strong>Links</strong>\r\n                                            <ul style=\"margin-left: 28px; margin-top: -20px;\">\r\n                                                <li style=\"padding-bottom: 7px;\"><a href=\"https://www.youtube.com/watch?v=c1TUW8aKSKg\" target=\"_blank\">Goodbarber video</a></li>\r\n                                                <li style=\"padding-bottom: 7px;\"><a href=\"https://helpx.adobe.com/photoshop/user-guide.html\" target=\"_blank\">Photoshop documentation</a></li>\r\n                                                <li style=\"padding-bottom: 7px;\"><a href=\"https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5\" target=\"_blank\">HTML5 documentation</a></li>\r\n                                                <li style=\"padding-bottom: 7px;\"><a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS\" target=\"_blank\">CSS documentation</a></li>\r\n                                            </ul>\r\n                                        </p>\r\n\r\n                                    <h2>Assets I created using Photoshop</h2>\r\n                                    <!-- Image gallery here -->\r\n                                    <!-- ### start of the gallery definition ### -->\r\n                                    <div id=\"nanogallery2\"\r\n                                        data-nanogallery2 = '{\r\n                                            \"thumbnailWidth\":   400px,\r\n                                            \"thumbnailHeight\":  \"auto\",\r\n                                            thumbnailGutterWidth: 100px\r\n                                            }' >\r\n                                            \r\n                                        <!-- gallery content -->\r\n                                        <a href = \"../images/portfolio/hanks/splashScreen.png\"   data-ngThumb = \"../images/portfolio/hanks/splashScreen.png\"> splashScreen.png</a>\r\n                                        <a href = \"../images/portfolio/hanks/splashScreenAndroid.png\"   data-ngThumb = \"../images/portfolio/hanks/splashScreenAndroid.png\" > splashScreenAndroid.png </a>\r\n                                        <a href = \"../images/portfolio/hanks/splashScreenIOS.png\"   data-ngThumb = \"../images/portfolio/hanks/splashScreenIOS.png\" > splashScreenIOS.png </a>\r\n                                        <a href = \"../images/portfolio/hanks/splashScreenTablet.png\"   data-ngThumb = \"../images/portfolio/hanks/splashScreenTablet.png\"> splashScreenTablet.png </a>\r\n                                        <a href = \"../images/portfolio/hanks/splashScreenTabletLandscape.png\"   data-ngThumb = \"../images/portfolio/hanks/splashScreenTabletLandscape.png\" > splashScreenTabletLandscape.png </a>\r\n                                    </div>\r\n\r\n                                    <!-- ### end of the gallery definition ### -->\r\n\r\n                                    <h2>Video Demo</h2>\r\n                                    <!-- Youtube video here -->\r\n\r\n                                    <h2>Summary</h2>\r\n                                    <!-- My testimonial here -->\r\n\r\n                                        <p>At first, I thought would be that I would need to custom code the entire application as I had done with my Capstone project in college.\r\n                                           I made a Mobile attendence taking application for highschools and colleges, that still isn't finished today. So I had no experience coding apps for iPhone, but I was ready to learn. We ended up doing research and decided to go with an app building tool because it would save time and money, \r\n                                           and Goodbarber had great looking designs. They also provided a service of going through the Review process with Apple. If you want to publish an iPhone app\r\n                                           you have to go through this review process with Apple and you may or may not get accepted into their App Store based on a number of things, included your app not having a good\r\n                                           purpose/use to users, their are similar apps. The app can't just be an advertisement, it has to provide good tools for the users, whatever that may be. And Goodbarber did all that\r\n                                           all for you as well as decreasing the time needed to be spent on design and coding.\r\n                                        </p>\r\n\r\n                                        <p>However, Goodbarber had some limitations, as any tool like this will. You don't actually have access to any source code in your Goodbarber applicatoin, all you have is an administration\r\n                                           dashboard that lets create pre-built widgets on your mobile app, and you could create your own custom ones, which I actually had to do for two pages in Hank's app. Goodbarber provides\r\n                                           what is called a Progressive Web App, which basically means it is one single application that is a Website and a mobile app with only one source code. And they had a custom widget you could create\r\n                                           with HTML / CSS which I found really cool because you didn't have to know any Java or Swift to create the page. So I created a \"Deliveries\" page and a \"Financing\" page with custom HTML code I wrote. The Deliveries page we ended up ditching because of a mobile responsive issue, but I did get\r\n                                           it working with their delivery companies API, where on the \"Deliveries\" page the user could type in their order number and see a lot of data regarding their furniture delivery order. The \"Finacning\"\r\n                                           page which more simple. It was just banner images and  buttons linking to their finacing page on the web. Overall, really fun project that we got up and running in less than 2 weeks.\r\n                                        </p>\r\n                                    \r\n                                </section>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t<!-- Sidebar & Footer -->\r\n                ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("../../../public/partials/sidebar-footer.html", false, "portfolio/seaark-boats.njk", false, function(t_10,t_9) {
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
env.getTemplate("../../../public/partials/scripts.html", false, "portfolio/seaark-boats.njk", false, function(t_14,t_13) {
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
