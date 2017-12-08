'use strict';
const gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    lazypipe = require('lazypipe'),
    rename = require("gulp-rename");

const uglify = lazypipe()
              .pipe(uglify())
              .pipe(dest('scripts'));

const concat = lazypipe()
              .pipe(concat())
