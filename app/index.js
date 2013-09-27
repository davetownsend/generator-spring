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
            message: 'What version of Spring Boot would you like to use?',
            default: '0.5.0.M4'
        },
        {
            type: 'string',
            name: 'packageName',
            message: 'What is your default package name?',
            default: 'com.myapp'
        },
        {
            type: 'string',
            name: 'baseName',
            message: 'What is the base name of app?',
            default: 'app'
        },
        {
            type: 'checkbox',
            name: 'starters',
            message: 'select your starters',
            choices: [
                {
                    name: 'Jetty (Tomcat will be unintalled)',
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
                    value: 'data-jpd'
                },
                {
                    name: 'Integration',
                    value: 'integration'
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
                    name: 'Web',
                    value: 'web'
                },
                {
                    name: 'Websocket',
                    value: 'websocket'
                }
            ]
        }
    ];

    this.prompt(prompts, function (props) {
        this.packageName = props.packageName;
        this.baseName = props.baseName;
        this.bootVersion = props.bootVersion;
        cb();
    }.bind(this));
};

SpringGenerator.prototype.app = function app() {
    var packageFolder = this.packageName.replace(/\./g, '/');
    var testDir = 'src/test/groovy/' + packageFolder;
    var srcDir = 'src/main/java/' + packageFolder;
    this.mkdir(testDir);
    this.mkdir(srcDir);
    this.template('build.gradle', 'build.gradle');
};

SpringGenerator.prototype.projectfiles = function projectfiles() {

};
