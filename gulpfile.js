var autoprefixer = require('autoprefixer');
var browserSync  = require('browser-sync').create();
var cleancss     = require('gulp-clean-css');
var concat       = require('gulp-concat');
var del          = require('del');
var gulp         = require('gulp');
var gutil        = require('gulp-util');
var imagemin     = require('gulp-imagemin');
var notify       = require('gulp-notify');
var postcss      = require('gulp-postcss');
var rename       = require('gulp-rename');
var run          = require('gulp-run');
var runSequence  = require('run-sequence');
var sass         = require('gulp-ruby-sass');
var uglify       = require('rollup-plugin-uglify');
var rollup = require('gulp-better-rollup');
var babel = require('rollup-plugin-babel');
var sourcemaps = require('gulp-sourcemaps');
var resolve = require('rollup-plugin-node-resolve');
var commonjs = require('rollup-plugin-commonjs');

var paths = require('./_assets/gulp_config/paths');

gulp.task('build:styles:main', function() {
    return sass(paths.sassFiles + '/main.scss', {
        style: 'compressed',
        trace: true,
        loadPath: [paths.sassFiles]
    }).pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
        .pipe(cleancss())
        .pipe(gulp.dest(paths.jekyllCssFiles))
        .pipe(gulp.dest(paths.siteCssFiles))
        .pipe(browserSync.stream())
        .on('error', gutil.log);
});

gulp.task('build:styles:critical', function() {
    return sass(paths.sassFiles + '/critical.scss', {
        style: 'compressed',
        trace: true,
        loadPath: [paths.sassFiles]
    }).pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
        .pipe(cleancss())
        .pipe(gulp.dest('_includes'))
        .on('error', gutil.log);
});

gulp.task('build:styles', ['build:styles:main', 'build:styles:critical']);

gulp.task('clean:styles', function(callback) {
    del([paths.jekyllCssFiles + 'main.css',
        paths.siteCssFiles + 'main.css',
        '_includes/critical.css'
    ]);
    callback();
});

gulp.task('build:scripts', function() {
    return gulp.src([
        paths.jsFiles + paths.jsPattern,
    ])
        .pipe(sourcemaps.init())
        .pipe(rollup({
            plugins: [ babel(), commonjs(), resolve({ browser: true }), uglify() ]
        }, 'umd'))
        .pipe(sourcemaps.write(''))
        .pipe(gulp.dest(paths.jekyllJsFiles))
        .pipe(gulp.dest(paths.siteJsFiles))
        .on('error', gutil.log);
});

gulp.task('clean:scripts', function(callback) {
    del([paths.jekyllJsFiles + 'main.js', paths.siteJsFiles + 'main.js']);
    callback();
});

gulp.task('build:images', function() {
    return gulp.src(paths.imageFilesGlob)
        .pipe(imagemin())
        .pipe(gulp.dest(paths.jekyllImageFiles))
        .pipe(gulp.dest(paths.siteImageFiles))
        .pipe(browserSync.stream());
});

gulp.task('clean:images', function(callback) {
    del([paths.jekyllImageFiles, paths.siteImageFiles]);
    callback();
});

gulp.task('build:jekyll', function() {
    var shellCommand = 'bundle exec jekyll build --config _config.yml';

    return gulp.src('')
        .pipe(run(shellCommand))
        .on('error', gutil.log);
});

gulp.task('clean:jekyll', function(callback) {
    del(['_site']);
    callback();
});

gulp.task('clean', ['clean:jekyll',
    'clean:images',
    'clean:scripts',
    'clean:styles']);

gulp.task('build', function(callback) {
    runSequence('clean',
        ['build:scripts', 'build:images', 'build:styles'],
        'build:jekyll',
        callback);
});

gulp.task('build:local', function(callback) {
    runSequence('clean',
        ['build:scripts', 'build:images', 'build:styles'],
        'build:jekyll:local',
        callback);
});

gulp.task('default', ['build']);

gulp.task('build:jekyll:local', function() {
    var shellCommand = 'bundle exec jekyll build --config _config.yml,_config.dev.yml';

    return gulp.src('')
        .pipe(run(shellCommand))
        .on('error', gutil.log)
});

gulp.task('build:jekyll:watch', ['build:jekyll:local'], function(callback) {
    browserSync.reload();
    callback();
});

gulp.task('build:scripts:watch', ['build:scripts'], function(callback) {
    browserSync.reload();
    callback();
});

gulp.task('serve', ['build:local'], function() {

    browserSync.init({
        server: paths.siteDir,
        ghostMode: false, // Toggle to mirror clicks, reloads etc. (performance)
        logFileChanges: true,
        //logLevel: 'debug',
        open: true        // Toggle to automatically open page when starting.
    });

    // Watch site settings.
    gulp.watch(['_config.yml', '_plugins/**/*.rb'], ['build:jekyll:watch']);

    // Watch .scss files; changes are piped to browserSync.
    gulp.watch('_assets/styles/**/*.scss', ['build:styles']);

    // Watch .js files.
    gulp.watch('_assets/js/**/*.js', ['build:scripts:watch']);

    // Watch image files; changes are piped to browserSync.
    gulp.watch('_assets/img/**/*', ['build:images']);

    // Watch posts.
    gulp.watch('_posts/**/*.+(md|markdown|MD)', ['build:jekyll:watch']);

    // Watch drafts if --drafts flag was passed.
    if (module.exports.drafts) {
        gulp.watch('_drafts/*.+(md|markdown|MD)', ['build:jekyll:watch']);
    }

    // Watch html and markdown files.
    gulp.watch(['**/*.+(html|md|markdown|MD)', '!_site/**/*.*'], ['build:jekyll:watch']);

    // Watch RSS feed XML file.
    gulp.watch('feed.xml', ['build:jekyll:watch']);

    // Watch data files.
    gulp.watch('_data/**.*+(yml|yaml|csv|json)', ['build:jekyll:watch']);

    // Watch favicon.png.
    gulp.watch('favicon.png', ['build:jekyll:watch']);
});
