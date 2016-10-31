/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;


describe('spring generator', function () {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                return done(err);
            }

            this.app = helpers.createGenerator('spring:app', ['../../app']);
            done();
        }.bind(this));
    });

    it('creates expected files', function (done) {
        var expected = [
        // add files you expect to exist here.
            'build.gradle'
        ];

        helpers.mockPrompt(this.app, {
            'packageName': 'com.testme.testme',
            'baseName': 'myapp',
            'bootVersion': '0.5.0.M4',
            'starters' : []
        });
        this.app.options['skip-install'] = true;
        this.app.run({}, function () {
            helpers.assertFiles(expected);
            done();
        });
    });
});
