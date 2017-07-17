var gulp = require('gulp');
var browser = require('browser-sync');
var plumber = require('gulp-plumber');
var stylus = require('gulp-stylus');
var babel = require('gulp-babel');
var pug = require('gulp-pug');


gulp.task('server', function() {
    var server = {
    	server : {
    		baseDir : './'
    	}
    }

    browser.init(server)
});


gulp.task('pug', function() {
    gulp.src('./temp/*.pug')
      .pipe(pug(''))
      .pipe(gulp.dest('./'));
});


gulp.task('stylus', function() {

    var proc = {
      compress : true
    }

    gulp.src('./stylus/style.styl')
      .pipe(plumber())
      .pipe(stylus(proc))
      .pipe(gulp.dest('./css'));
});


gulp.task('babel', () => {
    return gulp.src('./src/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'));
});


gulp.task('watch', function() {
    gulp.watch('./temp/*.pug', ['pug']);
    gulp.watch('./stylus/style.styl', ['stylus']);
    gulp.watch('./src/*.js', ['babel']);
});	


gulp.task('default',['server','pug', 'stylus', 'babel', 'watch']);