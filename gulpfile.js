const gulp = require('gulp');
const postcss = require('gulp-postcss');
const postcssPresetEnv = require('postcss-preset-env');
const babel = require('gulp-babel');
const ts = require('gulp-typescript');
const tsconfig = require('./tsconfig.json');
const del = require('del');

function clean() {
  return del('./dist/**');
}

function buildESM() {
  const tsProject = ts(tsconfig.compilerOptions);
  return gulp
    .src(['src/**/*.{ts,tsx}'], {
      ignore: ['**/examples/**/*', '**/tests/**/*'],
    })
    .pipe(tsProject)
    .pipe(gulp.dest('dist/esm/'));
}

function buildCJS() {
  return gulp
    .src(['dist/esm/**/*.js'])
    .pipe(
      babel({
        plugins: ['@babel/plugin-transform-modules-commonjs'],
      })
    )
    .pipe(gulp.dest('dist/cjs/'));
}

function buildStyle() {
  return gulp
    .src(['./src/**/*.css'], {
      base: './src/',
      ignore: ['**/examples/**/*', '**/tests/**/*'],
    })
    .pipe(postcss([postcssPresetEnv()]))
    .pipe(gulp.dest('./dist/esm'))
    .pipe(gulp.dest('./dist/cjs'));
}

function buildDeclaration() {
  const tsProject = ts({
    ...tsconfig.compilerOptions,
    declaration: true,
    emitDeclarationOnly: true,
  });
  return gulp
    .src(['src/**/*.{ts,tsx}'], {
      ignore: ['**/examples/**/*', '**/tests/**/*'],
    })
    .pipe(tsProject)
    .pipe(gulp.dest('dist/types/'));
}

exports.default = gulp.series(
  clean,
  buildESM,
  gulp.parallel(buildDeclaration, buildCJS, buildStyle)
);
