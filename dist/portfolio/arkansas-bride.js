(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["portfolio/arkansas-bride.njk"] = (function() {
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
env.getTemplate("../../../dist/partials/headPortfolioDetail.html", false, "portfolio/arkansas-bride.njk", false, function(t_2,t_1) {
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
env.getTemplate("../../../dist/partials/header-socialLinks.html", false, "portfolio/arkansas-bride.njk", false, function(t_6,t_5) {
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
output += "\r\n\r\n                            <!-- Content -->\r\n                             <!-- Back button -->\r\n                                <a href=\"../portfolio.html\" class=\"button\" style=\"margin-top: 35px;\"><i class=\"fas fa-chevron-left\"></i> Back to portfolio</a>\r\n\t\t\t\t\t\t\t\t<section>\r\n\t\t\t\t\t\t\t\t\t<header class=\"main\">\r\n\t\t\t\t\t\t\t\t\t\t<h1>Arkansas Bride testtt</h1>\r\n\t\t\t\t\t\t\t\t\t</header>\r\n\r\n\t\t\t\t\t\t\t\t\t<span class=\"image main\"><img src=\"../images/portfolio/bride/home.png\" alt=\"\" /></span>\r\n\r\n                                    <h2>About Arkansas Bride</h2>\r\n\t\t\t\t\t\t\t\t\t<p>Since 1990, Arkansas Bride has been the No. 1 resource for Natural State brides planning their big day. It's not only the biggest bridal magazine in the state, but it is also the best online tool for soon-to-be newlyweds in search of vendors and inspiration. The magazine is published twice a year, with Spring/Summer and Fall/Winter issues. The editorial content includes a guide to 700-plus Arkansas wedding professionals, inspiring Real Weddings, styled shoots, beautiful floral and fashion shoots, and so much more! And a special supplement – Hot Springs Wedding Planner – is included inside each issue too!</p>\r\n\r\n                                    <hr class=\"major\" />\r\n\r\n                                    <h2>About The Project</h2>\r\n                                        <!-- About us page of company here -->\r\n                                        <p><strong>Mission:</strong> Use a more modern mobile first design since most users are coming to the site via mobile device, and create a system for advertisers to update their listings. </p>\r\n                                        <p><strong>Technologies Used:</strong> Laravel's Notification system, Tailwindcss</p>\r\n                                        <p><strong>Links</strong>\r\n                                            <ul style=\"margin-left: 28px; margin-top: -20px;\">\r\n                                                <li style=\"padding-bottom: 7px;\"><a href=\"https://laravel.com/docs/7.x/notifications\" target=\"_blank\">Laravel Notifications</a></li>\r\n                                                <li style=\"padding-bottom: 7px;\"><a href=\"https://tailwindcss.com/\" target=\"_blank\">Tailwindcss documentation</a></li>\r\n                                            </ul>\r\n                                        </p>\r\n\r\n                                        <p><strong>Before: </strong><a target=\"_blank\" href=\"https://web.archive.org/web/20190327131256/https://www.arkansasbride.com/\">From the Web Archives</a></p>\r\n                                        <p><strong>After: </strong><a target=\"_blank\" href=\"http://www.arkansasbride.com/\">Visit new live website</a></p>\r\n\r\n                                    <h2>Gallery</h2>\r\n                                    <!-- Image gallery here -->\r\n                                    <!-- ### start of the gallery definition ### -->\r\n                                    <div id=\"nanogallery2\"\r\n                                        data-nanogallery2 = '{\r\n                                            \"thumbnailWidth\":   400px,\r\n                                            \"thumbnailHeight\":  \"auto\",\r\n                                            thumbnailGutterWidth: 100px\r\n                                            }' >\r\n                                            \r\n                                        <!-- gallery content -->\r\n                                        <a href = \"../images/portfolio/hanks/splashScreen.png\"   data-ngThumb = \"../images/portfolio/hanks/splashScreen.png\"> splashScreen.png</a>\r\n                                        <a href = \"../images/portfolio/hanks/splashScreenAndroid.png\"   data-ngThumb = \"../images/portfolio/hanks/splashScreenAndroid.png\" > splashScreenAndroid.png </a>\r\n                                        <a href = \"../images/portfolio/hanks/splashScreenIOS.png\"   data-ngThumb = \"../images/portfolio/hanks/splashScreenIOS.png\" > splashScreenIOS.png </a>\r\n                                        <a href = \"../images/portfolio/hanks/splashScreenTablet.png\"   data-ngThumb = \"../images/portfolio/hanks/splashScreenTablet.png\"> splashScreenTablet.png </a>\r\n                                        <a href = \"../images/portfolio/hanks/splashScreenTabletLandscape.png\"   data-ngThumb = \"../images/portfolio/hanks/splashScreenTabletLandscape.png\" > splashScreenTabletLandscape.png </a>\r\n                                    </div>\r\n                                    <!-- ### end of the gallery definition ### -->\r\n\r\n                                    <h2>Video Demo</h2>\r\n                                    <!-- Youtube video here -->\r\n\r\n                                    <h2>Summary</h2>\r\n                                    <!-- My testimonial here -->\r\n                                        <p>This was the first industry project I did full stack, backend and frontend of the application, with my senior software engineer at FLEX360.\r\n                                            Before this project, our team used Bootstrap for the frontend design, but we wanted to try to Tailwindcss out because it is a utility first css framework,\r\n                                            where Bootstrap comes with pre-build components that you end up having to override literally every class anyways.\r\n                                        <p>\r\n\r\n                                        <p>Before this upgrade, the Arkansas Bride team would update the Vendor listings manually as request come to them via email or telephone call from a vendor.\r\n                                            In this project, we built a system that let the vendors update their listings from the website. We did it by using Laravel's built in <a href=\"https://laravel.com/docs/7.x/authentication\" target=\"_blank\">Authentication class</a>,\r\n                                            and created a new user model called a Vendor. This Vendor class used the <a href=\"https://laravel.com/docs/7.x/notifications#using-the-notifiable-trait\" target=\"_blank\">Notifiable trait</a>, which allows us to setup custom events that fire off certain Notifications to the Vendors email. \r\n                                        </p>\r\n\r\n                                        <p>So in simple terms, a Vendor would request a login link that required no password. There was about 800 vendors in total and we wanted the process to be as simple as possible for them. So the login link didn't required\r\n                                            a password. Instead it has special parameters that our server could read and each login link requested would expire after a certain amount of time. Once inside the admin, the vendor could update their listings data. On save,\r\n                                            the listing would be copied as a \"Revision\", and members of the Arkansas Bride team would be Notified by Laravel's Notification system. The Bride team then reviews the revision for typos and can approve or reject the changes.\r\n                                            If they approved the changes, the revision in the database would have all its data copied into the real listing, and then the revision would be deleted. Their live production data is fully updated, so we send the Vendor another \r\n                                            notication letting them know that their Vendor Listing is updated live on the website and will be published in the print magazine. The same data from the website listings is used in the vendors listing in the magazine. \r\n                                        </p>\r\n\r\n                                        <p>This was quite a challenge for me to get all these moving parts hooked up correctly, and lots of testing was needed to make sure the system would work at a production scale with 100s of folks updating their info automatically rather than over the phone.\r\n                                            But we got it done! And the new Vendor Listing design looks much better I think! It was a super fun project.\r\n                                        </p>\r\n                                    \r\n                                </section>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t<!-- Sidebar & Footer -->\r\n                ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("../../../dist/partials/sidebar-footer.html", false, "portfolio/arkansas-bride.njk", false, function(t_10,t_9) {
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
env.getTemplate("../../../dist/partials/scripts.html", false, "portfolio/arkansas-bride.njk", false, function(t_14,t_13) {
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
