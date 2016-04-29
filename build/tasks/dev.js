var gulp = require('gulp');
var tools = require('periscope-tools');
var args = require('../args');

var exec = require('gulp-exec'),
  jspm = require('jspm'),
  map = require('map-stream'),
  fs = require('fs');

// source code for the tasks called in this file
// is located at: https://github.com/aurelia/tools/blob/master/src/dev.js

// updates dependencies in this folder
// from folders in the parent directory
gulp.task('update-own-deps', function() {
  tools.updateOwnDependenciesFromLocalRepositories(args.depth);
});

// quickly pulls in all of the aurelia
// github repos, placing them up one directory
// from where the command is executed,
// then runs `npm install`
// and `gulp build` for each repo
gulp.task('build-dev-env', function() {
  tools.buildDevEnv();
});

// quickly pulls in all of the aurelia
// github repos, placing them up one directory
// from where the command is executed
gulp.task('pull-dev-env', function() {
  tools.pullDevEnv();
});




var options = {
  continueOnError: false, // default = false, true means don't emit error event
  pipeStdout: false, // default = false, true means stdout is written to file.contents
  customTemplatingThing: "test" // content passed to gutil.template()
};
var reportOptions = {
  err: true, // default = true, false means don't write err
  stderr: true, // default = true, false means don't write stderr
  stdout: true // default = true, false means don't write stdout
};

var getPackageName = function(file, cb) {
  var json = JSON.parse(fs.readFileSync(file.path));
  cb(null, json.name);
};


gulp.task('update_dev_deps', ['linkpackages'], function(cb) {
  return gulp.src('../modules/*/package.json').pipe(map(getPackageName)).on('data', function(packageName) {
    exec('jspm install npm:' + packageName + ' --link -y', options);
    exec.reporter(reportOptions);
  });
});

gulp.task('linkpackages', function(callback) {
    return gulp.src('../modules/periscope_framework')
      .pipe(exec('cd <%=  file.path %> && gulp build && jspm link -y', options))
      .pipe(exec.reporter(reportOptions));
  }
);
