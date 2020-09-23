(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/sidebar-footer.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<div id=\"sidebar\">\r\n    <div class=\"inner\">\r\n\r\n        <!-- Search -->\r\n            <!-- <section id=\"search\" class=\"alt\">\r\n                <form method=\"post\" action=\"#\">\r\n                    <input type=\"text\" name=\"query\" id=\"query\" placeholder=\"Search\" />\r\n                </form>\r\n            </section> -->\r\n\r\n        <!-- Menu -->\r\n            <nav id=\"menu\" class=\"main-menu-margin\" style=\"border-bottom: none;\">\r\n                <header class=\"major\">\r\n                    <h2>Menu</h2>\r\n                </header>\r\n                <ul>\r\n                    <li><a href=\"https://coltons-apps.tech/\">Home</a></li>\r\n                    <li><a href=\"/portfolio.html\">My Portfolio</a></li>\r\n                    <li><a href=\"/contact.html\">Contact</a></li>\r\n                    <!-- <li><a href=\"generic.html\">Content page</a></li> -->\r\n                    <!-- <li><a href=\"elements.html\">Elements</a></li> -->\r\n                    <!-- <li>\r\n                        <span class=\"opener\">Submenu</span>\r\n                        <ul>\r\n                            <li><a href=\"#\">Item 1</a></li>\r\n                            <li><a href=\"#\">Item 2</a></li>\r\n                            <li><a href=\"#\">Item 3</a></li>\r\n                            <li><a href=\"#\">Item 4</a></li>\r\n                        </ul>\r\n                    </li> -->\r\n                </ul>\r\n            </nav>\r\n\r\n        <!-- Section -->\r\n            <section>\r\n                <header class=\"major\">\r\n                    <h2>Get in touch</h2>\r\n                </header>\r\n                <p>Free free to shoot me and email or text if you need any work done or would like to just chat! You can also reach out to me by filling out <a href=\"/contact.html\">this form</a>.</p>\r\n                <ul class=\"contact\">\r\n                    <li class=\"icon solid fa-envelope\"><a href=\"mailto:clwilliams4545@gmail.com\">clwilliams4545@gmail.com</a></li>\r\n                    <li class=\"icon solid fa-phone\"><a href=\"tel:501-304-4100\">(501) 304-4100</a></li>\r\n                    <!-- <li class=\"icon solid fa-home\">1975 N Highway 171<br />\r\n                    Malvern, AR 72104</li> -->\r\n                </ul>\r\n            </section>\r\n        <footer id=\"footer\">\r\n            <p class=\"copyright\">&copy; Colton's Apps. All rights reserved.<br> Design: <a target=\"_blank\" href=\"https://html5up.net\">HTML5 UP</a>. Favicon: <a target=\"_blank\" href=\"https://icons8.com/\">icons8.com</a></p>\r\n        </footer>\r\n\r\n    </div>\r\n</div>";
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
