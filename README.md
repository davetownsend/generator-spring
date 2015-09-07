# generator-spring [![Build Status](https://secure.travis-ci.org/tomaslin/generator-spring.png?branch=master)](https://travis-ci.org/tomaslin/generator-spring)

A [Yeoman](http://yeoman.io) generator for scaffolding and bootstrapping [Spring Boot](http://projects.spring.io/spring-boot/) and [Spring Cloud](http://projects.spring.io/spring-cloud/) applications. Provides the same selectable options as [Spring Initializr](http://start.spring.io), but with and interactive CLI interface so your hands can stay where they belong, on the keyboard!


## Getting Started

### Yeoman

Yeoman is a scaffolding tool for modern webapps.

**Install Yeoman**

```
$ npm install -g yo
```

### Yeoman Generators

Generators are [Node.js](https://nodejs.org) modules that serve as framework specific plugins for Yeoman.

**Install generator-spring**

```
$ npm install -g generator-spring
```

Finally, initiate the generator:

```
$ yo spring
```
The interactive CLI menu will guide the way.

### Extras

Creates a REST endpoint

```
$ yo spring:rest
```

Creates a REST endpoint with HATEOAS support *(has dependency on choosing the hateoas starter option)*

```
$ yo spring:hateoas
```

Creates an initial Thymeleaf view *(has dependency on choosing the Thyemleaf starter option)*

```
$ yo spring:route
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
