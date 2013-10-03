package <%= packageName %>.controller;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.*;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import <%= packageName %>.domain.<%= representation %>;


@Controller
public class <%= controllerName %> {

	@RequestMapping("<%= controllerPath %>")
	@ResponseBody
    public HttpEntity<<%= representation %>> process(@RequestParam(value = "content", required = false, defaultValue = "content") String content) {
        
    	<%= representation %> entity = new <%= representation %>( content );
        entity.add(linkTo(methodOn(<%= controllerName %>.class).process(content)).withSelfRel());

        return new ResponseEntity<<%= representation %>>(entity, HttpStatus.OK);
    }

}