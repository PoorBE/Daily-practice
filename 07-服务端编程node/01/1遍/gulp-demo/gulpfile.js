//引入gulp
const gulp = require('gulp');
//提取公共部分插件
const fileinclude = require('gulp-file-include');
//压缩html插件
const htmlmin = require('gulp-htmlmin');
//less转换插件
const less = require('gulp-less')
    //压缩css插件
const csso = require('gulp-csso');
//js转换插件
const babel = require('gulp-babel');
//js压缩插件
const uglify = require('gulp-uglify')
    //设置任务

gulp.task('first', () => {
        console.log('人生第一个');
        //读取文件
        gulp.src('./src/css/base.css').pipe(gulp.dest('./dist/css'));
    })
    //html任务1.抽取2.压缩html
gulp.task('htmlmin', () => {
        gulp.src('./src/*.html')
            //使用
            .pipe(fileinclude()) //先提取公共样式
            .pipe(htmlmin({ collapseWhitespace: true })) //再压缩html
            .pipe(gulp.dest('./dist'))
    })
    //css任务1.less语法转换2.压缩css
gulp.task('cssmin', () => {
        gulp.src(['./src/css/*.less', './src/css/*.css'])
            //less语法转换为css语法
            .pipe(less())
            //压缩css
            .pipe(csso())
            .pipe(gulp.dest('./dist/css'))
    })
    //js任务1.jsES6转换为ES5   2.压缩js
gulp.task('jsmin', () => {
        gulp.src('./src/js/*.js')
            .pipe(babel({
                presets: ['@babel/env']
            }))
            .pipe(uglify())
            .pipe(gulp.dest('./dist/js'))
    })
    //复制文件夹
gulp.task('copy', () => {
        gulp.src('./src/images/*')
            .pipe(gulp.dest('./dist/images'));
        gulp.src('./src/lib/**') //两层文件夹，所以两个*
            .pipe(gulp.dest('./dist/lib'));
    })
    //构建任务
gulp.task('default', ['htmlmin', 'cssmin', 'jsmin', 'copy']);