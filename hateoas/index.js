'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var mkdirp = require('mkdirp');

var HateoasGenerator = module.exports = function HateoasGenerator(args, options, config) {
    yeoman.generators.Base.apply(this, arguments);
};

util.inherits(HateoasGenerator, yeoman.generators.Base);

HateoasGenerator.prototype.askFor = function askFor() {
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
            name: 'representation',
            message: '(2/4) Name for your representation class:',
            default: 'MyThing'
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
        this.representation = props.representation;
        this.controllerName = props.controllerName;
        this.controllerPath = props.controllerPath;
        cb();
    }.bind(this));

};

HateoasGenerator.prototype.files = function app() {
    var packageFolder = this.packageName.replace(/\./g, '/');
    var controllersDir = 'src/main/java/' + packageFolder + '/controller';
    var domainsDir = 'src/main/java/' + packageFolder + '/domain';

    mkdirp(controllersDir);
    mkdirp(domainsDir);

    this.template('Controller.java', controllersDir + '/' + this.controllerName + '.java');
    this.template('Representation.java', domainsDir + '/' + this.representation + '.java');

    this.config.set('packageName', this.packageName);
};
