// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint'),
    jscs = require('gulp-jscs'),
    minifyHTML = require('gulp-minify-html'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    ngAnnotate = require('gulp-ng-annotate'),
    rename = require('gulp-rename');

var basedir = 'app/';

// Lint Task
gulp.task('lint', function() {
    return gulp.src(basedir + 'js/**/*.js')
        .pipe(jscs())
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
 });

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src(basedir + 'scss/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('dist/css'));
});

// Move our Dependent CSS
gulp.task('dependentCss', function() {
    return gulp.src([basedir + 'scss/bootstrap.min.css',
        'bower_components/responsive-nav/*.css',
        'bower_components/slick-*/**/*.css',
        'bower_components/font-*/**'])
        .pipe(gulp.dest('dist/css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src([basedir + 'js/**/*.js', '!' + basedir + 'js/**/*.test.js'])
        .pipe(gulp.dest('dist/js'));
});

// Move audio file
gulp.task('audio', function() {
    return gulp.src([basedir + 'audio/**'])
        .pipe(gulp.dest('dist/audio'));
});

// Deploy dependency JS
gulp.task('bower', function() {
    return gulp.src(['bower_components/**/*.js'])
        .pipe(gulp.dest('dist/js'));
});

//Compile HTML
gulp.task('html', function() {
    gulp.src(basedir + '/**/*.html')
        .pipe(minifyHTML({
            "empty": true
        }))
        .pipe(gulp.dest('dist'));
});

//Move images
gulp.task('images', function() {
    gulp.src(basedir + '/images/**')
        .pipe(gulp.dest('dist/images'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch(basedir + 'js/**/*.js', ['lint', 'scripts']);
    gulp.watch(basedir + 'scss/**/*.scss', ['sass']);
    gulp.watch(basedir + '**/*.html', ['html']);
    gulp.watch(basedir + 'images/**', ['images']);
    gulp.watch(basedir + 'audio/**', ['audio']);
});

// Build task
gulp.task('build', ['lint', 'sass', 'dependentCss', 'bower', 'scripts', 'html', 'images', 'audio']);

// Default Task
gulp.task('default', ['build', 'watch']);
