'use strict';

const gulp = require('gulp'),
    path = require('path'),
    $ = require('gulp-load-plugins')();

const destPath = path.join(__dirname, 'dist');
const publicPath = path.join(__dirname, 'src/client/public');
const glob = {
    css: {
        src: path.join(publicPath, 'scss', '**/*.scss'),
        dest: path.join(destPath, 'css')
    },
    js: {
        src: path.join(publicPath, 'js', '**/*.js'),
        dest: path.join(destPath, 'js')
    },
    html: {
        src: path.join(__dirname, 'src/server/views', '**/*.html'),
        dest: path.join(destPath, 'html')
    }
}

gulp.task('default', ['watch']);

gulp.task('html', () => {
    return gulp
        .src(glob.html.src)
        .pipe(gulp.dest(glob.html.dest))
        .pipe($.livereload());
})

gulp.task('js', () => {
    return gulp
        .src(glob.js.src)
        .pipe(gulp.dest(glob.js.dest))
        .pipe($.livereload());
});

gulp.task('sass', () => {
    return gulp
        .src(glob.css.src)
        .pipe($.sass())
        .pipe(gulp.dest(glob.css.dest))
        .pipe($.livereload());
});

gulp.task('watch', ['js', 'sass', 'html'], () => {
    $.livereload.listen();
    gulp.watch(glob.css.src, ['sass']);
    gulp.watch(glob.html.src, ['html']);
    gulp.watch(glob.js.src, ['js']);
});