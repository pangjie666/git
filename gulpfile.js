/*
	gulp应用
	使用的插件
	gulp-htmlmin
	gulp-less
	gulp-cssmin
	gulp-concat
	gulp-uglify
	gulp-autoprefixer
	gulp-imagemin
	gulp-clean
	gulp-load-plugins
	browser-sync
*/
'use strict';
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync').create();

var app = {
	srcPath:'src/',
	devPath:'bulid/',
	prdPath:'dist/'
};

gulp.task('html',function(){
	gulp.src(app.srcPath+'**/*.html')
	.pipe(gulp.dest(app.devPath))
	.pipe($.htmlmin({
		collapseWhitespace:true,
		removeComments:true,
		collapseBooleanAttributes:true,
		removeEmptyAttributes:true
	}))
	.pipe(gulp.dest(app.devPath))
	.pipe(browserSync.stream());
});

gulp.task('less',function(){
	gulp.src(app.srcPath+'style/itany.less')
	.pipe($.less())
	.pipe($.autoprefixer({
		browsers:['last 20 versions'],
		cascade:false,
	}))
	.pipe(gulp.dest(app.devPath+'css'))
	.pipe($.cssmin())
	.pipe(gulp.dest(app.prdPath+'css'))
	.pipe(browserSync.stream());
});

gulp.task('images',function(){
	gulp.src(app.srcPath+'images/**/*')
	.pipe($.imagemin())
	.pipe(gulp.dest(app.devPath+'images/'))
	.pipe(gulp.dest(app.prdPath+'images/'));
});

