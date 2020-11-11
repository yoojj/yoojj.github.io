const gulp = require('gulp');
const concat = require('gulp-concat');
const minificss = require('gulp-minify-css');



/* gulp v3
gulp.task('default', function(){
	return gulp.src('./static/src/css/*.css')
		.pipe(minificss())
		.pipe(concat('build.css'))
		.pipe(gulp.dest('./static/dist/'));
});

gulp.task('default');
*/



/* gulp v4 */
function css() {
	return gulp
		.src('./static/src/css/*.css')
		.pipe(minificss())
		.pipe(concat('build.css'))
		.pipe(gulp.dest('./static/dist/'));
}



exports.css = css;
exports.default = gulp.series(gulp.parallel(css));
