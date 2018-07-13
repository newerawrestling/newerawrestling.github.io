'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', () => {
    gulp.src('_sass/app.scss')
        .pipe(sass({
            includePaths: ['node_modules'],
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(gulp.dest('css'));
});

gulp.task('build', ['sass']);

gulp.task('watch', () => {
    gulp.watch('_sass/**/*.scss', ['sass']);
});

gulp.task('default', ['build', 'watch']);
