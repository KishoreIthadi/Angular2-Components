var gulp = require("gulp");
var clean = require('gulp-clean');

// Clean gulp build folders*********************************************************************

gulp.task('remove-jscode', function () {
    return gulp.src(['jscode'], {
            read: false
        })
        .pipe(clean())
});