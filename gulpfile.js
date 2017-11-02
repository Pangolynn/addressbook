'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('./src/app/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest(function(f) {
            return f.base;
        }));
});

gulp.task('default', ['sass'], function() {
	gulp.watch('./src/app/components/**/*.scss', ['sass']);
});