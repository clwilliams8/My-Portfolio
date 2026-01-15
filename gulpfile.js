import gulp from 'gulp';
import { nunjucksCompile } from 'gulp-nunjucks';
import imagemin from 'gulp-imagemin';
import concat from 'gulp-concat';
import terser from 'gulp-terser';
import gulpSass from 'gulp-sass';
import * as sass from 'sass';
import replace from 'gulp-replace';

const sassCompiler = gulpSass(sass);

/*
 --TOP LEVEL FUNCTIONS
    gulp.task - Define task
    gulp.src - Point to the files to use
    gulp.dest - point to the folder to output
    gulp.watch - Watch files and folders for changes
*/

// Logs Message
function message(done) {
    console.log('Gulp is running...');
    done();
}

// Compile .njk files into html
function copyHtml() {
    return gulp.src('./src/html/**')
        .pipe(nunjucksCompile())
        .pipe(gulp.dest('dist'));
}

// Compile CNAME file
function copyCNAME() {
    return gulp.src('CNAME')
        .pipe(gulp.dest('dist'));
}

// Copy Images (with binary encoding for proper handling)
function optimizeImages() {
    return gulp.src('./src/assets/images/**', { encoding: false })
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
}

// Scripts - order matters: jQuery must load first
function scripts() {
    return gulp.src([
        './src/assets/js/jquery.min.js',
        './src/assets/js/browser.min.js',
        './src/assets/js/breakpoints.min.js',
        './src/assets/js/util.js',
        './src/assets/js/main.js',
        './src/assets/js/nanogallery2.js'
    ])
        .pipe(concat('main.js'))
        .pipe(terser())
        .pipe(gulp.dest('dist/assets/js'));
}

// Compile Sass
function compileSass() {
    return gulp.src('./src/assets/sass/*.scss')
        .pipe(sassCompiler().on('error', sassCompiler.logError))
        .pipe(gulp.dest('dist/assets/css'));
}

// Copy CSS files
function copyCss() {
    return gulp.src('./src/assets/sass/*.css')
        .pipe(gulp.dest('dist/assets/css'));
}

// Copy webfonts (with binary encoding for proper handling)
function webfonts() {
    return gulp.src('./src/assets/webfonts/*', { encoding: false })
        .pipe(gulp.dest('dist/assets/webfonts'));
}

// Cache busting task - update compiled HTML files
function cacheBust() {
    const cbString = new Date().getTime();
    console.log('Cache bust:', cbString);
    return gulp.src(['./dist/**/*.html'])
        .pipe(replace(/\?v=\d+/g, '?v=' + cbString))
        .pipe(gulp.dest('./dist/'));
}

// Watch task
function watchFiles() {
    gulp.watch('./src/html/**', copyHtml);
    gulp.watch('CNAME', copyCNAME);
    gulp.watch('./src/assets/js/*', scripts);
    gulp.watch('./src/assets/images/**', optimizeImages);
    gulp.watch('./src/assets/sass/*.scss', compileSass);
    gulp.watch('./src/assets/webfonts/*', webfonts);
}

// Define tasks
const build = gulp.series(
    message,
    copyHtml,
    optimizeImages,
    copyCNAME,
    scripts,
    compileSass,
    copyCss,
    webfonts,
    cacheBust
);

// Export tasks
export default build;
export { watchFiles as watch };
