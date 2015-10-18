'use strict';

import gulp from "gulp"
import config from "./../config"
import transform from "babel"
import filter from "gulp-filter"
import replace from "gulp-replace"
import size from "gulp-size"
import gulpTypescript from "gulp-typescript"
import typescript from "typescript"

const tsOptions = {
    module: 'commonjs',
    typescript: typescript,
    jsx: 'react'
};

export function scripts (){
    let typescriptFilter = filter(['**/*.{ts,tsx}'], {restore:true});

    return gulp.src([ config.src + "**/*.{js,ts,tsx}"])
        .pipe(typescriptFilter)
        .pipe(gulpTypescript(tsOptions))
        .on('error', function handleError(err) {
            console.error(err.toString());
            this.emit('end');
        })
        .pipe(typescriptFilter.restore)
        .pipe(gulp.dest(config.tempDir+ '/'))
        .pipe(size())

}

gulp.task('scripts',function () {
   return scripts()
});
