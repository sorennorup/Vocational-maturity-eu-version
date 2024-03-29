var gulp = require('gulp');
var babel = require("gulp-babel");
var webpack = require('webpack');
var mocha = require('gulp-spawn-mocha');
var eslint = require('gulp-eslint');
var each = require('gulp-each');
var fc2json = require('gulp-file-contents-to-json');
var log = require('fancy-log');
var exec = require('child_process').exec;
const fs = require('fs');

var DEBUG = process.env.NODE_ENV === 'debug';
var CI = process.env.CI === 'true';

var vfsBefore = "var vfs = ";
var vfsAfter = "; if (typeof this.pdfMake !== 'undefined' && typeof this.pdfMake.addVirtualFileSystem !== 'undefined') { this.pdfMake.addVirtualFileSystem(vfs); } if (typeof module !== 'undefined') { module.exports = vfs; }";

gulp.task('buildNode', function () {
	return gulp.src('src/**/*.js')
		.pipe(babel({
			presets: [
				[
					"@babel/preset-env",
					{
						targets: {
							node: "8.9"
						},
						loose: true
					}
				]
			]
		}))
		.pipe(gulp.dest("js"));
});

gulp.task('buildBrowser', function (callback) {
	webpack(require('./webpack.config.js'), function (err, stats) {
		if (err) {
			callback(err);
			return;
		}
		log("[webpack]", stats.toString({}));
		if (stats.compilation.errors && stats.compilation.errors.length) {
			callback(stats.compilation.errors);
			return;
		}
		callback();
	});
});

gulp.task('buildWithStandardFonts', function (callback) {
	webpack(require('./webpack-standardfonts.config.js'), function (err, stats) {
		if (err) {
			callback(err);
			return;
		}
		log("[webpack]", stats.toString({}));
		if (stats.compilation.errors && stats.compilation.errors.length) {
			callback(stats.compilation.errors);
			return;
		}
		callback();
	});
});

gulp.task('test', function () {
	return gulp.src(['./tests/**/*.spec.js'])
		.pipe(mocha({
			debugBrk: DEBUG,
			R: CI ? 'spec' : 'nyan'
		}));
});

gulp.task('lint', function () {
	return gulp.src(['./src/**/*.js', './tests/**/*.js'])
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
});

gulp.task('buildFonts', function () {
	return gulp.src(['./examples/fonts/*.*'])
		.pipe(each(function (content, file, callback) {
			var newContent = Buffer.from(content).toString('base64');
			callback(null, newContent);
		}, 'buffer'))
		.pipe(fc2json('vfs_fonts.js', { flat: true }))
		.pipe(each(function (content, file, callback) {
			var newContent = vfsBefore + content + vfsAfter;
			callback(null, newContent);
		}, 'buffer'))
		.pipe(gulp.dest('build'));
});

gulp.task('watch', function () {
	gulp.watch('./src/**', ['test', 'build']);
	gulp.watch('./tests/**', ['test']);
});

gulp.task('generateExamples', function (cb) {
	var errCount = 0;
	var position = 0;
	process.chdir('examples');

	const items = fs.readdirSync('.');
	const files = items.filter(file => file.substring(file.length - 3, file.length) === '.js');

	files.forEach(function (file) {
		exec(`node ${file}`, function (err, stdout, stderr) {
			position++;
			log('FILE: ', file, ` (${position}/${files.length})`);
			log(stdout);

			if (err) {
				errCount++;
				log(stderr);
			}

			if (position === files.length) {
				if (errCount) {
					log('Errors count: ', errCount);
				}
				cb();
			}
		});
	});
});

gulp.task('build', gulp.series('buildNode', 'buildBrowser'));

gulp.task('default', gulp.series('build', 'buildFonts', 'test', 'lint'));
