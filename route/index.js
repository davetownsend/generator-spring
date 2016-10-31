'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var mkdirp = require('mkdirp');

var RestGenerator = module.exports = function RestGenerator(args, options, config) {
    yeoman.generators.Base.apply(this, arguments);
};

util.inherits(RestGenerator, yeoman.generators.Base);

RestGenerator.prototype.askFor = function askFor() {
    var cb = this.async();

    var prompts = [
        {
            type: 'string',
            name: 'packageName',
            message: '(1/4) Package name:',
            default: this.config.get('packageName')
        },
        {
            type: 'string',
            name: 'viewName',
            message: '(2/4) Name for your view:',
            default: 'page'
        },
        {
            type: 'string',
            name: 'controllerName',
            message: '(3/4) Name for your controller:',
            default: 'MyController'
        },
        {
            type: 'string',
            name: 'controllerPath',
            message: '(4/4) Path to Controller:',
            default: '/hello-world'
        }
    ]

    this.prompt(prompts, function (props) {
        this.packageName = props.packageName;
        this.viewName = props.viewName;
        this.controllerName = props.controllerName;
        this.controllerPath = props.controllerPath;
        cb();
    }.bind(this));

};

RestGenerator.prototype.files = function app() {
    var packageFolder = this.packageName.replace(/\./g, '/');
    var controllersDir = 'src/main/java/' + packageFolder + '/controller';
    var viewsDir = 'src/main/resources/templates';

    mkdirp(controllersDir);
    mkdirp(viewsDir);

    this.template('Controller.java', controllersDir + '/' + this.controllerName + '.java');
    this.template('view.html', viewsDir + '/' + this.viewName + '.html');

    this.config.set('packageName', this.packageName);
};
