import gulp from "gulp"
import config from "./../config"
import filter from "gulp-filter"
import size from "gulp-size"
import sass from "gulp-sass"
import merge from "merge-stream"
gulp.task("styles",()=>{

    const sassFilter = filter(['**/*.scss'], {restore:true});
    const sassOptions = {
        style: 'expanded'
    };

    const appStyles = gulp.src([
        config.src + "**/*.{css,scss}",
    ],{ base: config.src + "/app/" });
    const assetStyles = gulp.src([
        config.assetDir+ "/css/" + "**/*.{css,scss}",
    ],{ base: config.assetDir+ "/css/" })

    return merge(appStyles,assetStyles)
        .pipe(sassFilter)
        .pipe(sass(sassOptions).on('error',function(){
            console.log.apply(null,arguments)
        }))
        .pipe(sassFilter.restore)
        .pipe(gulp.dest(config.serverPublicDir + "/css/"))
        .pipe(size())
});

