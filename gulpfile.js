const gulp = require('gulp');
const nunjucks = require('gulp-nunjucks');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass')(require('sass'));
const replace = require('gulp-replace');

/*
 --TOP LEVEL FUNCTIONS
    gulp.task - Define task
    gulp.src - Point to the files to use
    gulp.dest - point to the fodler to output
    gulp.watch - Watch files and folders for changes
*/

// Logs Message
gulp.task('message', function(done){
    console.log('Gulp is running...');
    done();
});

// Compile .njk files into html
gulp.task('copyHtml', function(){
    return gulp.src('./src/html/**')
            .pipe(nunjucks.compile())
            .pipe(gulp.dest('dist'));
});

// Compile CNAME file
gulp.task('copyCNAME', function(){
    return gulp.src('CNAME')
            .pipe(gulp.dest('dist'));
});

// Optimize Images
gulp.task('imageMin', function() {
    return gulp.src('./src/assets/images/**')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});

// Scripts - order matters: jQuery must load first
gulp.task('scripts', function() {
    return gulp.src([
        './src/assets/js/jquery.min.js',
        './src/assets/js/browser.min.js',
        './src/assets/js/breakpoints.min.js',
        './src/assets/js/util.js',
        './src/assets/js/main.js',
        './src/assets/js/nanogallery2.js'
    ])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/assets/js'));
});

// Compile Sass
gulp.task('sass', function() {
    return gulp.src('./src/assets/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/assets/css'));
});

gulp.task('css', function() {
    return gulp.src('./src/assets/sass/*.css')
        .pipe(gulp.dest('dist/assets/css'));
});

// Compile webfonts
gulp.task('webfonts', function() {
    return gulp.src('./src/assets/webfonts/*')
        .pipe(gulp.dest('dist/assets/webfonts'));
});

// Cache busting task
gulp.task('cacheBust', function() {
    const cbString = new Date().getTime();
    console.log(cbString);
    return gulp.src(['./dist/partials/*'])
            .pipe(replace(/v=\d+/g, 'v=' + cbString))
            .pipe(gulp.dest('./dist/partials/'));
});

gulp.task('default', gulp.series('message','copyHtml','imageMin','copyCNAME','scripts','sass', 'css', 'webfonts','cacheBust'));

gulp.task('watch', function(){
  gulp.watch('./src/html/**', gulp.series('copyHtml'));
  gulp.watch('CNAME', gulp.series('copyCNAME'));
  gulp.watch('./src/assets/js/*', gulp.series('scripts'));
  gulp.watch('./src/assets/images/**', gulp.series('imageMin'));
  gulp.watch('./src/assets/sass/*.scss', gulp.series('sass'));
  gulp.watch('./src/assets/webfonts/*', gulp.series('webfonts'));
});