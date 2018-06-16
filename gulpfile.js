var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('styles', function() {
	return gulp.src('sass/**/*.scss')
		.pipe(sass())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(gulp.dest('css/'))
		.pipe(browserSync.reload({
			stream: true
		}))
});


gulp.task('browserSync', function() {
	browserSync.init({
		server: "."
	});
});

gulp.task('watch', ['browserSync', 'styles'], function(){
	gulp.watch('sass/**/*.scss', ['styles']);
	// Reload browser on html or js file change
	gulp.watch('*.html', browserSync.reload);
	gulp.watch('js/**/*.js', browserSync.reload);
})