var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var cp          = require('child_process');
var imageop = require('gulp-image-optimization');
var notify = require('gulp-notify');
var neat = require('node-neat').includePaths;

var messages = {
    jekyllBuild: 'Running: $ jekyll build',
    jekyllRebuild: 'Re-running: $ jekyll build',
    imageOptimization: 'Optimizing images',
    sass: 'Compiling Sass'
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn('jekyll', ['build', '--drafts'], {stdio: 'inherit'})
        .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.notify(messages.jekyllRebuild);
    browserSync.reload();
});

gulp.task('images', function(cb) {
    browserSync.notify(messages.imageOptimization);
    gulp.src(['images/**/*.png','images/**/*.jpg','images/**/*.gif','images/**/*.jpeg']).pipe(notify(messages.imageOptimization)).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('_site/images')).on('end', cb).on('error', cb);
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['copy-fonts','images', 'sass', 'jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
});

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function () {
    browserSync.notify(messages.sass);   
    gulp.src(['./_scss/main.scss'])
        .pipe(sass({
            includePaths: ['./_scss'].concat(neat),
            errLogToConsole: gulp.env.watch,
            onError: browserSync.notify
        }))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('_site/css'))
        .pipe(browserSync.reload({stream: true}))
        .pipe(gulp.dest('css'))
        .pipe(notify(messages.sass));

});

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch(['_scss/*.scss'], ['sass']);
    gulp.watch(['*.yml', '*.html', '_layouts/*.html', '_posts/*', '_drafts/*'], ['jekyll-rebuild']);
});

gulp.task('copy-fonts', function(){
   gulp.src(['bower_components/font-awesome/fonts/*'])
        .pipe(gulp.dest('_site/css/fonts/'))
        .pipe(gulp.dest('css/fonts'));

   gulp.src(['bower_components/font-awesome/css/font-awesome.css'])
        .pipe(gulp.dest('_site/css/lib/'))
        .pipe(gulp.dest('css/lib'));
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);
