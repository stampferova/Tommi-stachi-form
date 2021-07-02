"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass")(require("sass"));

function buildStyles() {
  return gulp
    .src("./scss/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./www/css"));
}

function defaultTask(cb) {
  gulp.watch("./scss/*.scss", buildStyles);
  cb();
}

exports.default = defaultTask;
