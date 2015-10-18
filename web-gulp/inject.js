import gulp from "gulp"
import config from "./../config"
import filter from "gulp-filter"
import size from "gulp-size"
import replace from "gulp-replace"
import {stream} from "wiredep"
import inject from "gulp-inject"

gulp.task("inject",['styles', "scripts"],()=>{

    const injectStyles = gulp.src([
        config.tempDir+ '**/**/*.css'
    ], { read: false });


    const injectOptions = {
        addRootSlash: false
    };

    const wiredepOptions = {
        bowerJson: require("./../bower.json"),
        directory: './bower_components',
        exclude: [/bootstrap\.css/, /bootstrap\.css/, /foundation\.css/]
    };

    return gulp.src([
        config.src + "**/*.{html,hbs,tmpl}"
    ],{ base: config.src })
        .pipe(inject(injectStyles, injectOptions))
        .pipe(stream(wiredepOptions))
        .pipe(replace("../../../bower_components/","/bower_components/"))
        .pipe(replace("node_modules/","/node_modules/"))
        .pipe(replace("/public/","public/"))
        .pipe(replace(config.tempDir + "/" + config.serverDir,"/"))
        .pipe(gulp.dest(config.tempDir))
});

