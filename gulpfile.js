const gulp = require("gulp");
const { src, series, parallel, watch, dest } = require("gulp");
let cssMinify = require('gulp-clean-css');
let jsMinify = require('gulp-terser');
let htmlMinifier = require('gulp-html-minifier-terser')
let imgMinify = require('gulp-imagemin');

let globs = {
        htmlPath: 'project-iti/*.html',
        cssPath: 'project-iti/assets/css/**/*.css',
        jsPath: 'project-iti/assets/js/**/*.js',
        imgsPath: 'project-iti/assets/imgs/*',
    }
    // html minify
function htmlMini() {
    return src(globs.htmlPath)
        .pipe(htmlMinifier({ collapseWhitespace: true, removeComments: true }))
        .pipe(dest('dist'))
}
// css minify
function cssMini() {
    return src(globs.cssPath)

    .pipe(cssMinify({ level: { 1: { specialComments: 0 } } }))
        .pipe(dest('dist/assets/css'))
}
// img minify
function imgMini() {
    return src(globs.imgsPath)

    .pipe(imgMinify())
        .pipe(dest('dist/assets/imgs'));
}
// js minify
function jsMini() {
    return src(globs.jsPath)
        .pipe(jsMinify())
        .pipe(dest('dist/assets/js'));
}
// live server  
let browserSync = require('browser-sync');

function serve(cb) {
    browserSync({
        server: {
            baseDir: 'dist/'
        }
    });
    cb()
}

function reloadTask(done) {
    browserSync.reload()
    done()
}
//watch task
function watchTask() {
    watch(globs.htmlPath, series(htmlMini, reloadTask))
    watch(globs.jsPath, series(jsMini, reloadTask))
    watch(globs.cssPath, series(cssMini, reloadTask));
    watch(globs.imgsPath, series(imgMini, reloadTask));
}
exports.default = series(parallel(htmlMini, cssMini, jsMini, imgMini), serve, watchTask)