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
        chalk.yellow('\nWelcome to the Spring Boot Generator\n\nLets get started!\n\n')));


    var prompts = [
        {
            type: 'string',
            name: 'bootVersion',
            message: 'Enter Spring Boot version:',
            default: '1.2.5.RELEASE'
        }, {
            type: 'string',
            name: 'packageName',
            message: 'Enter default package name:',
            default: 'com.myapp'
        }, {
            type: 'string',
            name: 'baseName',
            message: 'Enter base name of app:',
            default: 'app'
        }, {
            type: 'string',
            name: 'javaVersion',
            message: 'Enter Java version:',
            default: '1.8'
        }, {
            type: 'checkbox',
            name: 'coreWeb',
            message: 'Select Core/Web Dependencies:',
            choices: [
                {
                    name: 'Web',
                    value: 'web'
                }, {
                    name: 'Jetty (Tomcat will be uninstalled)',
                    value: 'jetty'
                }, {
                    name: 'Security',
                    value: 'security'
                }, {
                    name: 'AOP',
                    value: 'aop'
                },  {
                    name: 'Websocket',
                    value: 'websocket'
                }, {
                    name: 'Jersey (JAX-RS)',
                    value: 'jersey'
                }, {
                    name: 'Rest Repositories',
                    value: 'rest'
                }, {
                    name: 'Hypermedia (HATEOAS)',
                    value: 'hateoas'
                }, {
                    name: 'Mobile',
                    value: 'mobile'
                }
            ]
        }, {
            type: 'checkbox',
            name: 'templates',
            message: 'Select Template Engine:',
            choices: [
                {
                    name: 'Thymeleaf',
                    value: 'thymeleaf'
                }, {
                    name: 'Groovy Templates',
                    value: 'gtemplates'
                }, {
                    name: 'Mustache',
                    value: 'mustache'
                }
            ]
        }, {
            type: 'checkbox',
            name: 'data',
            message: 'Select Data support:',
            choices: [
                {
                    name: 'Jdbc',
                    value: 'jdbc'
                }, {
                    name: 'JPA',
                    value: 'jpa'
                }, {
                    name: 'MongoDB',
                    value: 'mongodb'
                }, {
                    name: 'Redis',
                    value: 'redis'
                },  {
                    name: 'Solr',
                    value: 'solr'
                }, {
                    name: 'Elasticsearch',
                    value: 'elasticsearch'
                }
            ]
        }, {
            type: 'checkbox',
            name: 'database',
            message: 'Select Database support:',
            choices: [
                {
                    name: 'H2',
                    value: 'h2'
                }, {
                    name: 'HSQLDB',
                    value: 'hsqldb'
                }, {
                    name: 'Apache Derby',
                    value: 'derby'
                }, {
                    name: 'MySQL',
                    value: 'mysql'
                }, {
                    name: 'PostgreSQL',
                    value: 'postgresql'
                }
            ]
        }, {
            type: 'checkbox',
            name: 'cloud',
            message: 'Select Spring Cloud support:',
            choices: [
                {
                    name: 'Cloud Connectors',
                    value: 'connectors'
                }, {
                    name: 'Cloud Bootstrap',
                    value: 'bootstrap'
                }, {
                    name: 'Config Client',
                    value: 'configClient'
                }, {
                    name: 'Config Server',
                    value: 'configServer'
                }, {
                    name: 'Eureka',
                    value: 'eureka'
                }, {
                    name: 'Eureka Server',
                    value: 'eurekaServer'
                }, {
                    name: 'Feign',
                    value: 'feign'
                }, {
                    name: 'Hystrix',
                    value: 'hystrix'
                }, {
                    name: 'Hystrix Dashboard',
                    value: 'hystrixDashboard'
                }, {
                    name: 'OAuth2',
                    value: 'oauth2'
                }, {
                    name: 'Ribbon',
                    value: 'ribbon'
                }, {
                    name: 'Turbine',
                    value: 'turbine'
                }, {
                    name: 'Turbine AMQP',
                    value: 'turbineAmqp'
                }, {
                    name: 'Zuul',
                    value: 'zuul'
                }, {
                    name: 'AWS',
                    value: 'aws'
                }, {
                    name: 'AWS JDBC',
                    value: 'awsJdbc'
                }, {
                    name: 'AWS Messaging',
                    value: 'awsMessaging'
                }, {
                    name: 'Cloud Bus AMQP',
                    value: 'cloudBus'
                }, {
                    name: 'Cloud Security',
                    value: 'cloudSecurity'
                }
            ]
        }, {
            type: 'checkbox',
            name: 'io',
            message: 'Select I/O support:',
            choices: [
                {
                    name: 'Batch',
                    value: 'batch'
                }, {
                    name: 'Integration',
                    value: 'integration'
                }, {
                    name: 'JMS (HornetQ)',
                    value: 'jms'
                }, {
                    name: 'AMQP',
                    value: 'amqp'
                }, {
                    name: 'Mail',
                    value: 'mail'
                }
            ]
        }, {
            type: 'checkbox',
            name: 'social',
            message: 'Select Social APIs:',
            choices: [
                {
                    name: 'Facebook',
                    value: 'facebook'
                }, {
                    name: 'LinkedIn',
                    value: 'linkedin'
                }, {
                    name: 'Twitter',
                    value: 'twitter'
                }
            ]
        }, {
            type: 'checkbox',
            name: 'ops',
            message: 'Select OPS tools:',
            choices: [
                {
                    name: 'Actuator',
                    value: 'actuator'
                }, {
                    name: 'Remote Shell',
                    value: 'remoteshell'
                }
            ]
        }, {
            type: 'confirm',
            name: 'useSpock',
            message: 'Use Spock?',
            default: true
        }, {
            type: 'string',
            name: 'groovyVersion',
            message: 'Enter Groovy version:',
            default: '2.4.4'
        }, {
            type: 'string',
            name: 'packagingType',
            message: 'Package as jar or war?',
            default: 'jar'
        }
    ];

    this.prompt(prompts, function(props) {
        this.bootVersion = props.bootVersion;
        this.packageName = props.packageName;
        this.baseName = props.baseName;
        this.javaVersion = props.javaVersion;
        this.coreWeb = props.coreWeb;
        this.templates = props.templates;
        this.data = props.data;
        this.database = props.database;
        this.cloud = props.cloud;
        this.io = props.io;
        this.social = props.social;
        this.ops = props.ops;
        this.useSpock = props.useSpock;
        this.groovyVersion = props.groovyVersion;
        this.packagingType = props.packagingType;

        // Core/Web
        var hasCoreWeb = function(coreWebStarter) {
            return props.coreWeb.indexOf(coreWebStarter) !== -1;
        };
        this.web = hasCoreWeb('web');
        this.jetty = hasCoreWeb('jetty');
        this.security = hasCoreWeb('security');
        this.aop = hasCoreWeb('aop');
        this.websocket = hasCoreWeb('websocket');
        this.jersey = hasCoreWeb('jersey');
        this.rest = hasCoreWeb('rest');
        this.hateoas = hasCoreWeb('hateoas');
        this.mobile = hasCoreWeb('mobile');

        // Template Engines
        var hasTemplate = function(templateStarter) {
            return props.templates.indexOf(templateStarter) !== -1;
        };
        this.thymeleaf = hasTemplate('thymeleaf');
        this.gtemplates = hasTemplate('gtemplates');
        this.mustache = hasTemplate('mustache');

        // Spring Data
        var hasData = function(dataStarter) {
            return props.data.indexOf(dataStarter) !== -1;
        };
        this.jdbc = hasData('jdbc');
        this.jpa = hasData('jpa');
        this.mongodb = hasData('mongodb');
        this.redis = hasData('redis');
        this.gemfire = hasData('gemfire');
        this.solr = hasData('solr');
        this.elasticsearch = hasData('elasticsearch');

        // Databases
        var hasDatabase = function(databaseStarter) {
            return props.database.indexOf(databaseStarter) !== -1;
        };
        this.h2 = hasDatabase('h2');
        this.hsqldb = hasDatabase('hsqldb');
        this.derby = hasDatabase('derby');
        this.mysql = hasDatabase('mysql');
        this.postgresql = hasDatabase('postgresql');

        // Spring Cloud
        var hasCloud = function(cloudStarter) {
            return props.cloud.indexOf(cloudStarter) !== -1;
        };
        this.connectors = hasCloud('connectors');
        this.bootstrap = hasCloud('bootstrap');
        this.configClient = hasCloud('configClient');
        this.configServer = hasCloud('configServer');
        this.eureka = hasCloud('eureka');
        this.eurekaServer = hasCloud('eurekaServer');
        this.feign = hasCloud('feign');
        this.hystrix = hasCloud('hystrix');
        this.hystrixDashboard = hasCloud('hystrixDashboard');
        this.oauth2 = hasCloud('oauth2');
        this.ribbon = hasCloud('ribbon');
        this.turbine = hasCloud('turbine');
        this.turbineAmqp = hasCloud('turbineAmqp');
        this.zuul = hasCloud('zuul');
        this.aws = hasCloud('aws');
        this.awsJdbc = hasCloud('awsJdbc');
        this.awsMessaging = hasCloud('awsMessaging');
        this.cloudBus = hasCloud('cloudBus');
        this.cloudSecurity = hasCloud('cloudSecurity');

        // I/O
        var hasIO = function(ioStarter) {
            return props.io.indexOf(ioStarter) !== -1;
        };
        this.batch = hasIO('batch');
        this.integration = hasIO('integration');
        this.jms = hasIO('jms');
        this.amqp = hasIO('amqp');
        this.mail = hasIO('mail');

        // Social
        var hasSocial = function(socialStarter) {
            return props.social.indexOf(socialStarter) !== -1;
        };
        this.facebook = hasSocial('facebook');
        this.linkedin = hasSocial('linkedin');
        this.twitter = hasSocial('twitter');

        // OPS
        var hasOps = function(opsStarter) {
            return props.ops.indexOf(opsStarter) !== -1;
        };
        this.actuator = hasOps('actuator');
        this.remoteshell = hasOps('remoteshell');

        cb();
    }.bind(this));
};

SpringGenerator.prototype.app = function app() {
    var packageFolder = this.packageName.replace(/\./g, '/');
    var srcDir = 'src/main/java/' + packageFolder;
    this.mkdir(srcDir);
    this.template('build.gradle', 'build.gradle');
    this.template('Application.java', srcDir + '/Application.java');
    if (this.useSpock) {
        var testDir = 'src/test/groovy/' + packageFolder;
        this.mkdir(testDir);
    }
    this.config.set('packageName', this.packageName);
    this.config.set('packageFolder', packageFolder);
};

SpringGenerator.prototype.projectfiles = function projectfiles() {};
