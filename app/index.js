'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

var SpringGenerator = module.exports = function SpringGenerator(args, options, config) {
    yeoman.generators.Base.apply(this, arguments);
};

util.inherits(SpringGenerator, yeoman.generators.Base);

SpringGenerator.prototype.askFor = function askFor() {
    var cb = this.async();

    console.log(chalk.green('\n.............DD88888888888888888,............\n' +
        '...........:888888888888888888888,...........\n' +
        '..........+88888888888888888888888+..........\n' +
        '.........,8888888888888888888888888..........\n' +
        '.........888888888888...888888888888.........\n' +
        '.......,88888887..D88...88Z..88888888,.......\n' +
        '.......8888888,...888...88D...=8888888.......\n' +
        '......D888888,..$8888...88887...8888888......\n' +
        '.....Z888888$..I88888...88888:..88888888,....\n' +
        '....D8888888...888888...88888D..,88888888....\n' +
        '....88888888,..888888..,888888...88888888....\n' +
        '....88888888,..8888888$888888D..,88888888....\n' +
        '....88888888I..Z8888888888888+..888888888....\n' +
        '.....Z8888888...O888888888888..,88888888.....\n' +
        '......88888888...,88888888D...,88888888......\n' +
        '.......88888888=.....?I+.....I88888888.......\n' +
        '.......,88888888D7.........ZD88888888,.......\n' +
        '.........888888888888888888888888888.........\n' +
        '.........,8888888888888888888888888..........\n' +
        '..........+88888888888888888888888+..........\n' +
        '...........,888888888888888888888:...........\n' +
        '.............DD888888888888888DD.............\n' +
        chalk.red('\nWelcome to the Spring Boot Generator\n\n')));

    var prompts = [
        {
            type: 'string',
            name: 'bootVersion',
            message: '(1/6) What version of Spring Boot would you like to use?',
            default: '1.0.2'
        },
        {
            type: 'string',
            name: 'packageName',
            message: '(2/6) What is your default package name?',
            default: 'com.myapp'
        },
        {
            type: 'string',
            name: 'baseName',
            message: '(3/6) What is the base name of app?',
            default: 'app'
        },
        {
            type: 'checkbox',
            name: 'starters',
            message: '(4/6) select your starters',
            choices: [
                {
                    name: 'Jetty (Tomcat will be uninstalled)',
                    value: 'jetty'
                },
                {
                    name: 'Actuator',
                    value: 'actuator'
                },
                {
                    name: 'Aop',
                    value: 'aop'
                },
                {
                    name: 'Batch',
                    value: 'batch'
                },
                {
                    name: 'Data-jpa',
                    value: 'jpa'
                },
                {
                    name: 'Integration',
                    value: 'integration'
                },
                {
                    name: 'Hateoas',
                    value: 'hateoas'
                },
                {
                    name: 'Jdbc',
                    value: 'jdbc'
                },
                {
                    name: 'Logging',
                    value: 'logging'
                },
                {
                    name: 'Security',
                    value: 'security'
                },
                {
                    name: 'Websocket',
                    value: 'websocket'
                }
            ]
        },{
            type: 'confirm',
            name: 'useSpock',
            message: '(5/6) Would you like to use Spock?',
            default: true
        },
        {
            type: 'confirm',
            name: 'useWrapper',
            message: '(6/6) Would you like to add the Gradle wrapper?',
            default: true
        }
    ];

    this.prompt(prompts, function (props) {
        this.packageName = props.packageName;
        this.baseName = props.baseName;
        this.useWrapper = props.useWrapper;
        this.bootVersion = props.bootVersion;
        this.useSpock = props.useSpock;
        this.starters = props.starters;

        var hasStarter = function (starter) { return props.starters.indexOf(starter) !== -1; };
        this.jetty = hasStarter('jetty');
        this.actuator = hasStarter('actuator');
        this.aop = hasStarter('aop');
        this.batch = hasStarter('batch');
        this.hateoas = hasStarter('hateoas');
        this.jpa = hasStarter('jpa');
        this.integration = hasStarter('integration');
        this.jdbc = hasStarter('jdbc');
        this.logging = hasStarter('logging');
        this.security = hasStarter('security');
        this.websocket = hasStarter('websocket');

        cb();
    }.bind(this));
};

SpringGenerator.prototype.app = function app() {
    var packageFolder = this.packageName.replace(/\./g, '/');
    var srcDir = 'src/main/java/' + packageFolder;
    this.mkdir(srcDir);
    this.template('build.gradle', 'build.gradle');
    this.template('Application.java', srcDir + '/Application.java');

    if(this.useSpock){
        var testDir = 'src/test/groovy/' + packageFolder;
        this.mkdir(testDir);
    }

    this.config.set('packageName', this.packageName);
    this.config.set('packageFolder', packageFolder);
};

SpringGenerator.prototype.projectfiles = function projectfiles() {

};
