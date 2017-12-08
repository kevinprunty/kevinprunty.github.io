'use strict';
//Required modules for gulp
const   gulp = require('gulp'),
        g_concat = require('gulp-concat'),
        g_uglify = require('gulp-uglify'),
        lazypipe = require('lazypipe'),
        rename = require("gulp-rename"),
        clean = require("gulp-clean");

//Constant variables
const scriptsFolder = 'scripts';
const appFile = 'scripts/app.js';



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
              .pipe(g_concat, "app.js")
              .pipe(rename, {
                  dirname: "./",
                  basename: "app",
                  extname: ".js"
              })
              .pipe(gulp.dest, scriptsFolder);



//Clean pipe
gulp.task('clean', function(){
    return gulp.src('scripts/app*.js', {read: false}).pipe(clean());  
});

//Concat source files
gulp.task('concat', ['clean'], function(){
    return gulp.src('scripts/sources/*.js')
            .pipe(concat());
});

//Uglify app.js file
gulp.task('uglify', ['concat'], function(){
    gulp.src(appFile)
        .pipe(uglify());
    
});

gulp.task('default', ['uglify']);

