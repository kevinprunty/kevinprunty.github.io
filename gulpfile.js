'use strict';
//Required modules for gulp
const   gulp = require('gulp'),
        g_concat = require('gulp-concat'),
        g_uglify = require('gulp-uglify'),
        lazypipe = require('lazypipe'),
        rename = require("gulp-rename");

//Constant variables
const scriptsFolder = 'scripts';



const uglify = lazypipe()
              .pipe(g_uglify)
              .pipe(rename, {
                dirname: "./",
                basename: "app",
                suffix: ".min", 
                extname: ".js"
            })
              .pipe(gulp.dest, scriptsFolder);

const concat = lazypipe()
              .pipe(g_concat)
              .pipe(gulp.dest, scriptsFolder);

//Uglify app.js file
gulp.task('uglify', function(){
        gulp.src('scripts/app.js')
        .pipe(uglify());
    
});

gulp.task('concat', function(){
    return gulp.src('scripts/sources/*')
            .pipe(concat)
            .pipe(gulp.dest, scriptsFolder/app.js);
});