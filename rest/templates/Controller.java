package <%= packageName %>.controller;

import java.util.concurrent.atomic.AtomicLong;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import <%= packageName %>.domain.<%= representation %>;


@Controller
@RequestMapping("<%= controllerPath %>")
public class <%= controllerName %> {

    private final AtomicLong counter = new AtomicLong();

    @RequestMapping(method = RequestMethod.GET)
    public
    @ResponseBody
    <%= representation %> process(@RequestParam(value = "content", required = false, defaultValue = "content") String content) {
        return new <%= representation %>(counter.incrementAndGet(), content );
    }

}