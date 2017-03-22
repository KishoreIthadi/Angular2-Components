var gulp = require("gulp");
var clean = require('gulp-clean');
var uglify = require("gulp-uglify");

var runSequence = require('run-sequence');

// Copy component files *****************************************************************************

gulp.task('copy-components', () => {
    return gulp.src('src/jscode/components/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/npm-build/components'))
});

gulp.task('copy-components-typedefinitions', () => {
    return gulp.src('src/jscode/components/**/*.d.ts')
        .pipe(gulp.dest('dist/npm-build/components'))
});

// Copy npmpublish files *****************************************************************************

gulp.task('copy-npmpublish-files', function () {
    return gulp.src('publishfiles/npmbuildfiles/**/*')
        .pipe(gulp.dest('dist/npm-build/'));
});

// Copy readme ****************************************************************************************

gulp.task('copy-readme', function () {
    return gulp.src('readme.md')
        .pipe(gulp.dest('dist/npm-build/'));
});

// Copy readme ****************************************************************************************

gulp.task('copy-MIT', function () {
    return gulp.src('LICENSE')
        .pipe(gulp.dest('dist/npm-build/'));
});

// builds npm package**********************************************************************************

gulp.task('build-npm', function (done) {
    runSequence('tsc', 'copy-components', 'copy-components-typedefinitions', 'copy-npmpublish-files', 'remove-jscode', 'copy-readme', 'copy-MIT', done);
});