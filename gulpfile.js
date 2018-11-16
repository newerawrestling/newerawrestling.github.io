'use strict';

let gulp = require('gulp');
let sass = require('gulp-sass');

let config = {
    sass: {
        includePaths: ['node_modules'],
        outputStyle: 'compressed'
    }
};

gulp.task('sass', () => {
    return gulp.src('_sass/app.scss')
        .pipe(sass(config.sass).on('error', sass.logError))
        .pipe(gulp.dest('css'));
});

gulp.task('build', gulp.series('sass'));

gulp.task('watch', () => {
    return gulp.watch('_sass/**/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series('build', 'watch'));
