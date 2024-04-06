'use strict';

var gulp = require('gulp');
var loadPlugins  = require('gulp-load-plugins')();
var browserSync  = require('browser-sync').create();
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');


gulp.task('servers', function() {
	browserSync.init({
		server: {
			baseDir: "./build"
		}
	});
});


gulp.task('html',function(){
	return gulp.src('dist/*.html')
		.pipe(gulp.dest('build/'))
		.on('end', browserSync.reload);
});

// gulp.task('css',function(){
// 	return gulp.src('dist/css/*.css')
// 		.pipe(gulp.dest('build/css'))
// 		.pipe(browserSync.stream());
// });

gulp.task('css', function() {
	return gulp.src('dist/css/*.css') // Path to your CSS files
		.pipe(concat('build/css/all.css')) // Combine all CSS files into one
		.pipe(cleanCSS()) // Minify the CSS
		.pipe(gulp.dest('build/css')) // Output directory for the minified CSS
    .pipe(browserSync.stream());
});


gulp.task('js', function() {
	return gulp.src('dist/js/*.js') // Path to your JavaScript files
		.pipe(concat('build/all.js')) // Combine all JavaScript files into one
		.pipe(uglify()) // Minify the JavaScript
		.pipe(gulp.dest('build/js')) // Output directory for the minified JavaScript
    .on('end', browserSync.reload);
});

// gulp.task('js',function(){
// 	return gulp.src('dist/js/*.js')
// 		.pipe(gulp.dest('build/js'))
// 		.on('end', browserSync.reload);
// });


gulp.task('fonts',function(){
	return gulp.src('dist/fonts/*')
		.pipe(gulp.dest('build/fonts/'))
		.on('end', browserSync.reload);
});



gulp.task('img',function(){
	return gulp.src('dist/images/*.{png,jpg,gif,svg}')
		.pipe(gulp.dest('build/images'));
});



gulp.task('watch', function(){
	gulp.watch('dist/*.html', gulp.series('html'));
	gulp.watch('dist/css/*.css', gulp.series('css'));
	gulp.watch('dist/js/*.js', gulp.series('js'));
	gulp.watch('dist/fonts/', gulp.series('fonts'));
	gulp.watch('dist/images/*.{png,jpg,gif,svg}', gulp.series('img'));
});


gulp.task('default', gulp.series(
	gulp.parallel('html', 'css', 'js', 'img', 'fonts'),
	gulp.parallel('watch', 'servers')
));
