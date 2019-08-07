package tn.social.carpooling.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import tn.social.carpooling.service.FacebookService;

@RestController
@RequestMapping("/social")
public class FacebookController {

    private FacebookService facebookService;

    private FacebookController(FacebookService facebookService) {
        this.facebookService = facebookService;
    }

    @GetMapping("/dummy")
    public String dummyMethod() {
        facebookService.testRestFacebook();
        return "Hello from the other side !";
    }

    @GetMapping("/createFacebookAuthorization")
    public String createFacebookAuthorization() {
        return facebookService.createFacebookAuthorizationURL();
    }

    @GetMapping("/facebook")
    public void createFacebookAccessToken(@RequestParam("code") String code) {
        facebookService.createFacebookAccessToken(code);
    }

    @GetMapping("/getName")
    public String getNameResponse() {
        return facebookService.getName();
    }
}
