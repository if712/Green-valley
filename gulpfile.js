var gulp = require('gulp');
var jade = require('gulp-jade');


// Jade
gulp.task('jade', function(){
	return gulp.src('./*.jade')
  //gulp.src('./*.jade')
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest('./'));
});

// Watch
gulp.task('watch', function(){
 gulp.watch('./*.jade',['jade']);
});



// var gulp = require('gulp'),
//     jade = require('gulp-jade');

// // чтобы запустить эту задачу, наберите в командной строке gulp jade
// gulp.task('jade', function() {
//     return gulp.src('src/templates/**/*.jade')
//         .pipe(jade())
//         .pipe(gulp.dest('builds/development')); // указываем gulp куда положить скомпилированные HTML файлы
// });