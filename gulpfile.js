var gulp           = require('gulp'),
		gutil          = require('gulp-util' ),
		sass           = require('gulp-sass'),
		browserSync    = require('browser-sync'),
		concat         = require('gulp-concat'),
		uglify         = require('gulp-uglify'),
		cleanCSS       = require('gulp-clean-css'),
		rename         = require('gulp-rename'),
		del            = require('del'),
		imagemin       = require('gulp-imagemin'),
		cache          = require('gulp-cache'),
		pug            = require('gulp-pug'),
		autoprefixer   = require('gulp-autoprefixer'),
		notify         = require("gulp-notify"),
		svgSprite 		 = require('gulp-svg-sprite'),
    	svgmin         = require('gulp-svgmin'),
    	cheerio        = require('gulp-cheerio'),
    	replace        = require('gulp-replace');


gulp.task('common-js', function() {
	return gulp.src([
		'src/js/common.js'
		])
	.pipe(concat('common.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('src/js'));
});

gulp.task('js', ['common-js'], function() {
	return gulp.src([
		'src/libs/jquery/dist/jquery.min.js',
		'src/libs/slick/slick.min.js',
		'src/libs/Magnific-Popup-master/dist/jquery.magnific-popup.min.js',
		'src/js/common.min.js'// Всегда в конце
		])
	.pipe(concat('scripts.min.js'))

	.pipe(gulp.dest('src/js'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'src'
		},
		notify: false
	});
});

gulp.task('sass', function() {
	return gulp.src('src/sass/**/*.sass')
	.pipe(sass({outputStyle: 'expand'}).on("error", notify.onError()))
	.pipe(rename({suffix: '.min', prefix : ''}))
	.pipe(autoprefixer(['last 15 versions']))
	.pipe(cleanCSS()) // Опционально, закомментировать при отладке
	.pipe(gulp.dest('src/css'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('pug', function() {
	return gulp.src('src/pug/*.pug')
	.pipe(pug().on("error", notify.onError()))
	.pipe(gulp.dest('src'))
});
// gulp.task('svg', function () {
//     return gulp.src('src/img/svg/*.svg')
//         .pipe(svgmin({
//             js2svg: {
//                 pretty: true
//             }
//         }))
//         .pipe(cheerio({
//             run: function ($) {
//                 $('[fill]').removeAttr('fill');
//                 $('[stroke]').removeAttr('stroke');
//                 $('[style]').removeAttr('style');
//             },
//             parserOptions: {xmlMode: true}
//         }))
//         .pipe(replace('&gt;', '>'))
//         .pipe(svgSprite({
//             mode: {
//                 symbol: {
//                     sprite: "sprite.svg"
//                 }
//             }
//         }))
//         .pipe(gulp.dest('src/img/svg/'));
// });
gulp.task('watch', ['sass', 'js', 'browser-sync', 'pug'], function() {
	gulp.watch('src/sass/**/*.sass', ['sass']);
	gulp.watch(['libs/**/*.js', 'src/js/common.js'], ['js']);
	gulp.watch('src/pug/**/**/**/*.pug', ['pug']);
    // gulp.watch('src/img/svg/*.svg', ['svg']);
	gulp.watch('src/**/*.html', browserSync.reload);
});

gulp.task('imagemin', function() {
	return gulp.src('src/img/**/*')
	.pipe(cache(imagemin()))
	.pipe(gulp.dest('dist/img')); 
});

gulp.task('build', ['removedist', 'imagemin', 'sass', 'js'], function() {

	var buildFiles = gulp.src([
		'src/*.html',
		'src/.htaccess'
		]).pipe(gulp.dest('dist'));

	var buildCss = gulp.src([
		'src/css/main.min.css'
		]).pipe(gulp.dest('dist/css'));

	var buildJs = gulp.src([
		'src/js/scripts.min.js'
		]).pipe(gulp.dest('dist/js'));

	var buildFonts = gulp.src([
		'src/fonts/**/*'
		]).pipe(gulp.dest('dist/fonts'));

});


gulp.task('removedist', function() { return del.sync('dist'); });
gulp.task('clearcache', function () { return cache.clearAll(); });

gulp.task('default', ['watch']);
