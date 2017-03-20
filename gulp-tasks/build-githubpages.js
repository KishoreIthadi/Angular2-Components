var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require('gulp-rename');
var cssMinify = require('gulp-cssnano');
var clean = require('gulp-clean');

var SystemBuilder = require('systemjs-builder');

var runSequence = require('run-sequence');

// Vendor jS and CSS *************************************************************************************
gulp.task('vendor-js', () => {
    return gulp.src([
            'node_modules/core-js/client/shim.js',
            'node_modules/zone.js/dist/zone.js',
            'node_modules/systemjs/dist/system.src.js',
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/bootstrap/dist/js/bootstrap.min.js'
        ])
        .pipe(concat('vendorjs.js'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/githubpages-build/scripts/'))
});

gulp.task('vendor-css', () => {
    return gulp.src([
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/font-awesome/css/font-awesome.min.css'
        ])
        .pipe(concat('vendorcss.css'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(cssMinify())
        .pipe(gulp.dest('dist/githubpages-build/css/'))
});

// Bundle jS and CSS *************************************************************************************

// loads all the required files based on systemjs.config.js
// bundles them into bundle.js then minifying into bundle.min.js
gulp.task('build-js', () => {
    var builder = new SystemBuilder();

    return builder.loadConfig('systemjs.config.js')
        .then(() => builder.buildStatic('app', 'dist/githubpages-build/scripts/bundle.js', {
            minify: false,
            sourceMaps: true,
            encodeNames: false
        }))
        .then(() => gulp.src('dist/githubpages-build/scripts/bundle.js')
            .pipe(rename({
                suffix: '.min'
            }))
            .pipe(gulp.dest('dist/githubpages-build/scripts/'))
            .pipe(uglify())
            .pipe(gulp.dest('dist/githubpages-build/scripts/')))
        .then(() => gulp.src(['dist/githubpages-build/scripts/bundle.js'], {
                read: false
            })
            .pipe(clean()));
});

gulp.task('build-css', function () {
    return gulp.src([
            'src/css/main.css'
        ])
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(cssMinify())
        .pipe(gulp.dest('dist/githubpages-build/css/'))
});

// Copy html file* ********************************************************************************

gulp.task('copy-html', function () {
    return gulp.src('publishfiles/githubpagesfiles/index.html')
        .pipe(gulp.dest('dist/githubpages-build/'));
});

// Copy fonts *************************************************************************************

gulp.task('copy-fonts', function () {
    return gulp.src('publishfiles/githubpagesfiles/fonts/**/*')
        .pipe(gulp.dest('dist/githubpages-build/fonts'));
});

// builds github pages *****************************************************************************

gulp.task('build-githubpages', function (done) {
    runSequence('vendor-js', 'vendor-css', 'tsc', 'build-js', 'build-css', 'copy-html', 'copy-fonts', 'remove-jscode', done);
});