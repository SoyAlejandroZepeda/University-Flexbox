const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');

//Registrar función para generar el archivo css
function css() {
     return gulp.src('./scss/app.scss')
               .pipe(autoprefixer({
                    overrideBrowserslist: ['last 2 versions'],
                    cascade: false
               }))
               .pipe(sass({
                    outputStyle: 'expanded', //nested, compact, compressed
               }))
               .pipe(gulp.dest('css'));
}

//Registrar un watch para actualizar el server de gulp
function watchFiles() {
     gulp.watch('./scss/*.scss', css);
     gulp.watch('index.html');
}

//Registrar funciones como tareas
gulp.task('css', css);
gulp.task('watch', gulp.parallel(watchFiles));