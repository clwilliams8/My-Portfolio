const gulp = require('gulp');
const nunjucks = require('gulp-nunjucks');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');

/*
 --TOP LEVEL FUNCTIONS
    gulp.task - Define task
    gulp.src - Point to the files to use
    gulp.dest - point to the fodler to output 
    gulp.watch - Watch files and folders for changes
*/

// Logs Message
gulp.task('message', async function(){
    return console.log('Gulp is running...');
});

// Compile .njk files into html
gulp.task('copyHtml', async function(){
    return gulp.src('src/html/**')
            .pipe(nunjucks.precompile())
            .pipe(gulp.dest('dist'))
});

// Compile .njk files into html
gulp.task('copyCNAME', async function(){
    return gulp.src('CNAME')
            .pipe(gulp.dest('dist'))
});

// Optimize Images
gulp.task('imageMin', async function() {
    return gulp.src('src/assets/images/**')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
});

// Scripts
gulp.task('scripts', async function() {
    return gulp.src('src/assets/js/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/assets/js'));
});

// Compile Sass
gulp.task('sass', async function() {
    return gulp.src('src/assets/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/assets/css'));
});

// Compile webfonts
gulp.task('webfonts', async function() {
    return gulp.src('src/assets/webfonts/*')
        .pipe(gulp.dest('dist/assets/webfonts'));
});

gulp.task('default', function () {
    gulp.series('message', 'copyHtml', 'copyCNAME', 'scripts', 'sass', 'webfonts')
});

// gulp.task('default', ['message','copyHtml','copyCNAME','scripts','sass','webfonts']);

// gulp.task('watch', function(){
//   gulp.watch('src/html/**', ['copyHtml']);
//   gulp.watch('CNAME', ['copyCNAME']);
//   gulp.watch('src/assets/js/*.js', ['scripts']);
//   gulp.watch('src/assets/images/**', ['imageMin']);
//   gulp.watch('src/assets/sass/*.scss', ['sass']);
//   gulp.watch('src/assets/webfonts/*', ['webfonts']);
// });