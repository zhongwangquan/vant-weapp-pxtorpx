const gulp = require('gulp');
const postcss = require('gulp-postcss');
const pxtorem = require('postcss-pxtransform');



// 复制文件到dist ,除了wxss文件
gulp.task('copy', function(){
    return gulp.src(["src/**/*.**","!src/**/*.scss"])  
      .pipe(gulp.dest("dist"))
})

// wxss文件中px转换成rpx，且都乘2。并复制wxss文件到dist
gulp.task('pxTorpx', function(){
  let options={
      //平台类型
      platform: 'rn',
      //设备宽度 对应iphone 6
      designWidth: 750,
    }
    let processors = [
        pxtorem(options)
    ];
      return gulp.src('src/**/*.scss')
          .pipe(postcss(processors))
          .pipe(gulp.dest('dist'));
})

// 多任务依次执行
gulp.task('default', gulp.series('copy','pxTorpx'))
