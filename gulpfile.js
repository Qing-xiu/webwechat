// var gulp = require('gulp'),
// 	path = require('path'),
// 	named = require('vinyl-named'),
// 	ExtractTextPlugin = require('extract-text-webpack-plugin'),
// 	config = require('./webpack.config.js'),
// 	gutil = require('gulp-util'),
// 	webpack = require('webpack');

// var appList = ['js/app'];



// gulp.task('bundle', function(callback){
// 	webpack(config, function(err, stats){
// 		if(err) throw new gutil.PluginError('webpack', err);

// 		callback();
// 	})
// })

// gulp.task('watch', function(){
// 	return gulp.src(mapFiles(appList, 'js'))
// 		.pipe(named())
// 		.pipe(webpack(getConfig({watch:true})))
// 		.pipe(gulp.dest('build/'))
// })

// function mapFiles(list, extname){
// 	return list.map(function(app){
// 		return 'src/' + app + '.' + extname
// 	})
// }

// function getConfig(opt){
// 	var config = {
		
// 	},
// 	opt = opt || {};

// 	for(var i in opt){
// 		config[i] = opt[i]
// 	};

// 	return config;
// }