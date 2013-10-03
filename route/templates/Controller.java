package <%= packageName %>.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class <%= controllerName %> {

    @RequestMapping("<%= controllerPath %>")
    public String process(@RequestParam(value = "content", required = false, defaultValue = "content") String content, Model model) {
        model.addAttribute("content", content);
        return "<%= viewName  %>";
    }

}