package br.com.elderxavier.controller;

import java.util.Map;
//import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AdminController {

    // inject via application.properties
    //@Value("${db.host.core:test}")
    private String message = "Hello World";

    @RequestMapping("/welcome")
    public String welcome(Map<String, Object> model) {
        model.put("message", this.message);
        return "welcome";
    }
    
    @RequestMapping("/")
    public String index() {        
        //return "index";
        return "redirect:/admin/index.html";
    }
    
    /*@RequestMapping("/dist/{resources}")
    public String resources(@PathVariable("resources") String resources) {        
        return "dist/"+ resources;
    }*/
}
