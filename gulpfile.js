var gulp = require('gulp');
var del = require('del');
var gulpsync = require('gulp-sync')(gulp);
var less = require('gulp-less');

gulp.task('default', gulpsync.sync(['clean', 'build.less']))

gulp.task('clean', function() {
    return del.sync(['./themes.css']);
});

gulp.task('build.less', function() {
    return gulp.src(['./less/*.less'])
        .pipe(less())
        .pipe(gulp.dest('./'))
});