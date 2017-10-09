![logo](logo/Gen-Spring-Logo.jpg?raw=true) 

# generator-spring [![Build Status](https://travis-ci.org/davetownsend/generator-spring.svg?branch=master)](https://travis-ci.org/davetownsend/generator-spring)

A [Yeoman](http://yeoman.io) generator for scaffolding and bootstrapping [Spring Boot](http://projects.spring.io/spring-boot/) and [Spring Cloud](http://projects.spring.io/spring-cloud/) applications. Provides the same selectable options as [Spring Initializr](http://start.spring.io), but with and interactive CLI interface so your hands can stay where they belong, on the keyboard!


## Getting Started

**Install Yeoman**

```
$ npm install -g yo
```

**Install generator-spring**

```
$ npm install -g generator-spring
```

**Initiate spring-generator!**

```
$ yo spring
```
_The interactive CLI menu will guide the way._


### Extras (Sub-generators)
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

## TODO
- Add the new Spring Cloud libs supported with Spring Boot 1.5.x
- Add support for createing a serverless (AWS) project with Spring Cloud Function. 
- Add React support. This will essentially scaffold an opinionated react SPA (webpack/es6/material-ui) as the front end.

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
