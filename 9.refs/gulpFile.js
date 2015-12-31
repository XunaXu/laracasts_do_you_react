var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var react = require('gulp-react');
/*
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
gulp.task('browserify', function(){
	return browserify('./js/app.js')
	.transform(babelify, {presets: ["es2015", "react"]}) //{stage 0} for babelify is not a valid option
	.bundle()
	.pipe(source('bundle.js'))
	.pipe(gulp.dest('js'));
});
*/

var path = {
  HTML: 'index.html',
  ALL: ['js/components/*.js','index.html'],
  JS: ['js/components/*.js'],
  DEST: 'dist/'
};


gulp.task('transform', function(){
  gulp.src(path.JS)
    .pipe(react())
    .pipe(gulp.dest(path.DEST));
});

gulp.task('js-watch', ['transform'], function(){
	browserSync.reload();
});

// use default task to launch Browsersync and watch JS files
gulp.task('serve', ['transform'], function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch("js/components/*.js", ['js-watch']);
});