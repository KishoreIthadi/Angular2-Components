var gulp = require("gulp");
var clean = require('gulp-clean');

var runSequence = require('run-sequence');

// Copy component files *****************************************************************************

gulp.task('copy-components', () => {
    return gulp.src(
            [
                'src/jscode/components/pagination/**/*',
                'src/jscode/components/rating/**/*'
            ], {
                base: 'src/jscode/components'
            })
        .pipe(gulp.dest('dist/npm-build/components'))
});

// Copy npmpublish files *****************************************************************************

gulp.task('copy-npmpublish-files', function () {
    return gulp.src('publishfiles/npmbuildfiles/**/*')
        .pipe(gulp.dest('dist/npm-build/'));
});

// builds npm package**********************************************************************************

gulp.task('build-npm', function (done) {
    runSequence('tsc', 'copy-components', 'copy-npmpublish-files', 'remove-jscode', done);
});