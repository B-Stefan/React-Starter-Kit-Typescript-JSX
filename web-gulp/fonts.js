import gulp from "gulp"
import config from "./../config"
import filter from "gulp-filter"
import size from "gulp-size"


gulp.task("fonts",()=>{

    return gulp.src([
        config.src + '**/**/*',
    ])
        .pipe(filter('**/*{eot,svg,ttf,woff}'))
        .pipe(gulp.dest(config.serverPublicDir + '/fonts/'))
        .pipe(size());
});

