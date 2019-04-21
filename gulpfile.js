var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default',function(){
	console.log('horey berhasil');
});

gulp.task('html',function(){
	console.log('imagine something userful being doen to your html here');
});

gulp.task('styles',function(){
	console.log('postCSS here');
});

gulp.task('watch',function(){
	
	watch('./app/index.html',function(){
		gulp.start('html');
	});
	
	watch('./app/assets/styles/**/*.css',function(){
		gulp.start('styles')
	});
});