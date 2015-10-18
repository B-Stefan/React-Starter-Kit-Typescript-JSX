import gulp from "gulp"
import config from "./../config"
import filter from "gulp-filter"
import size from "gulp-size"
import imagemin from "gulp-imagemin"
import pngquant from "pngquant"

gulp.task("images",()=>{

    let filterImgs = filter('**/*{png,jpg}',{restore: true});

    console.log(config.assetDir)
    return gulp.src([
        config.assetDir + '/img/**/*'
    ])
        .pipe(filterImgs)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(filterImgs.restore)
        .pipe(gulp.dest(config.serverPublicDir+ '/img/'))
        .pipe(size());
});

