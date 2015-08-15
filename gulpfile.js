var gulp = require('gulp');

// Javascript
var babel = require("gulp-babel");
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

// Utility
var del = require('del');
var rename = require('gulp-rename');

var paths = {
	scripts: 'src/**/*',
};

gulp.task('build', gulp.series(
	clean,
	gulp.series(scripts)
));

gulp.task(watch);

gulp.task('default', gulp.series('build'));

function clean(done) {
	del(['build'], done);
}

function scripts() {
	return gulp.src('src/**/*.js')
		.pipe(babel())
		.pipe(gulp.dest('build'))
		.pipe(uglify())
		.pipe(rename({extname: '.min.js' }))
		.pipe(gulp.dest('build'));
}

function watch() {
	gulp.watch(paths.scripts, gulp.series(scripts));
}
