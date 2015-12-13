var gulp = require('gulp');
var jade = require('gulp-jade');


// Jade
gulp.task('jade', function(){
  gulp.src('./*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./'));
});

// Watch
gulp.task('watch', function(){
 gulp.watch('./*.jade',['jade']);
});


