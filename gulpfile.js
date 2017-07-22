var gulp = require("gulp");
var concat = require('gulp-concat');

gulp.task('createDistributionScripts', function() {
  return gulp.src([      
      './node_modules/angular/angular.min.js', 
      './node_modules/angular-ui-router/release/angular-ui-router.min.js',
      './app/**/*.js',
      '!./app/**/*.spec.js'
    ])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('default', function () {
  gulp.watch('**/*.js', ['createDistributionScripts']);
});