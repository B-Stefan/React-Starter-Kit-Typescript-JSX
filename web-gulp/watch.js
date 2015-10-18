import gulp from "gulp"
import config from "./../config"
import gulpDevServer from "gulp-develop-server"
import {scripts} from "./scripts"
import size from "gulp-size"
import filter from "gulp-filter"
import gCallback from "gulp-callback"


gulp.task("watch", ["build"],()=>{
    var path = ['.', config.tempDir, config.serverDir, "Main.js"];

    let server = gulpDevServer.listen({
     path: path.join("/")
    });

    let srcPath =  ['.', config.src, "**/**/*.{js,ts,tsx}"].join("/").replace("//", "/");

    gulp.watch(srcPath,()=>{
        scripts()
        .pipe(gCallback(()=>{
                gulp.start("bundle")
                server.restart((err)=>{
                    if(err){
                        server.kill();
                        throw new Error("Please restart gulp-watch")
                    }
                });
            }));
    });
    gulp.watch([config.src  + "**/**{html,hbs,tmpl}"],["inject"]);
    gulp.watch([config.src  + "**/**{css,scss,less}"], ["styles"]);
    gulp.watch([config.src  + "server/assets/img/**/**"], ["images"]);
    gulp.watch([config.src  + "server/assets/fonts/**/**"], ["fonts"]);
});