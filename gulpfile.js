var gulp = require('gulp');
var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var path = require('path');

gulp.task("default", function(callback) {
    var compiler = webpack({
        entry: {
            app: ["./src/entry.js"]
        },
        output: {
            path: path.resolve(__dirname, "dist"),
            publicPath: '/assets/',
            filename: 'bundle.js'
        }
    });

    new WebpackDevServer(compiler, {})
    .listen(8080, "localhost", err => {
        if(err) {
            throw new gutil.PluginError("webpack-dev-server", err); 
        }
    });
});