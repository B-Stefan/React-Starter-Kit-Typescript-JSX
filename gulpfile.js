'use strict';

require("babel/register");
var gulp = require("gulp");
var config = require("./config");
var requireDir = require("require-dir");

requireDir('./'+config.gulpDir);

gulp.task('default', ['clean'], function () {
    gulp.start('scripts');
});
