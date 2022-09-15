"use strict";

const { series } = require("gulp");
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
  return gulp
    .src("./scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./dist"));
}

exports.buildStyles = buildStyles;

exports.default = series(buildStyles);
