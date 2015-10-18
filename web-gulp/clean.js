'use strict';

import gulp from "gulp"
import config from "./../config"
import vinylPaths from "vinyl-paths"
import del from "del"
gulp.task('clean', function () {
    return gulp.src(config.tempDir)
        .pipe(vinylPaths(del))
});
