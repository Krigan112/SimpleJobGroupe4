'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var jade = require('gulp-jade');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');

gulp.task('sass', function () {
    gulp.src('./sass/*.sass')
        // .pipe(plumber())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        //   .pipe(plumber.stop())
        .pipe(autoprefixer({
            browsers: [
                '> 1%',
                'last 2 versions',
                'firefox >= 4',
                'safari 7',
                'safari 8',
                'IE 8',
                'IE 9',
                'IE 10',
                'IE 11'
            ],
            cascade: false
        }))
        .pipe(gulp.dest('./public/stylesheets'));
});


gulp.task('jade', function () {
    return gulp.src('./views/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('./'))
});

gulp.task('uglify', function() {
    return gulp.src('./public/javascripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public/javascripts/min'));
});

gulp.task('imagemin', function () {
    return gulp.src('./public/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./public/images/min/'));
});

gulp.task('watch', function () {
    gulp.watch('./sass/*.sass', ['sass']);
    gulp.watch('./views/*.jade', ['jade']);
    gulp.watch('./public/javascripts/*.js', ['uglify']);
});
