var gulp = require('gulp');
var concat = require('gulp-concat');
var mainBowerFiles = require('gulp-main-bower-files');
var uglify = require('gulp-uglify');
var gulpFilter = require('gulp-filter');

//Arquivos para concatenar
var filesConcatMyApp = [
    "src/myApp.js",
    "src/resources/routes/*.js",
    "src/resources/directives/*.js",
    "src/resources/controllers/*.js",
];
//Arquivos que serão apenas copiados para dist
var htmlCopy = [
    "src/templates/**/*"
];

var libsCopy = [
    "src/libs/**/*"
];

///Tarefa de concatenação
gulp.task('concat-js', function () {
    gulp.src(filesConcatMyApp)
        .pipe(concat('myApp.js'))
        .pipe(gulp.dest('dist/'));
});

///Tarefas para copiar index para dist
gulp.task('copy-index', function () {
    gulp.src("src/index.html")
        .pipe(gulp.dest('dist/'));

});

///Tarefas para copiar templates para dist
gulp.task('copy-templates', function () {
    gulp.src(htmlCopy)
        .pipe(gulp.dest('dist/templates'));
});

///Tarefas para copiar libs para dist
gulp.task('copy-libs', function () {
    gulp.src(libsCopy)
        .pipe(gulp.dest('dist/libs'));

});

gulp.task('reduced-bower-libs', function () {
    var filterJS = gulpFilter('**/*.js', { restore: true });
    return gulp.src('./bower.json')
        .pipe(mainBowerFiles({
            overrides: {
                bootstrap: {
                    main: [
                        './dist/css/bootstrap.min.css',
                        './dist/css/bootstrap-theme.min.css',
                    ]
                }
            }
        }))
        .pipe(filterJS)
        .pipe(concat('myApp-libs.js'))
        .pipe(uglify())
        .pipe(filterJS.restore)
        .pipe(gulp.dest('dist/libs'));
});


// Tarefa de monitoração caso algum arquivo seja modificado
gulp.task('watch', function () {
    gulp.watch(filesConcatMyApp, ['concat-js']);
    gulp.watch(htmlCopy, ['copy-templates']);
    gulp.watch("src/index.html", ['copy-index']);
    gulp.watch(libsCopy, ['copy-libs']);
});

// Tarefa padrão quando executado o comando GULP
gulp.task('default', ["reduced-bower-libs", "concat-js", "copy-index", "copy-templates", "copy-libs", "watch"]);




