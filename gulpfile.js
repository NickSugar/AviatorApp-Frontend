var gulp = require('gulp');
var packageJson = require('./package.json');
var path = require('path');

gulp.task('default', function(callback) {
  var path = require('path');
  var swPrecache = require('sw-precache');
  var rootDir = 'public';

  swPrecache.write(`${rootDir}/service-worker.js`, {
    staticFileGlobs: [
      rootDir + '/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff}'
    ],
    runtimeCaching: [{
      urlPattern: /min\.js/,
      handler: 'cacheFirst'
    },
    {
      urlPattern: /fonts/,
      handler: 'cacheFirst'
    },
    {
      urlPattern: /min\.css/,
      handler: 'cacheFirst'
    },
    {
      urlPattern: /Material\+Icons/,
      handler: 'cacheFirst'
    }],
    stripPrefix: rootDir
  }, callback);
});
