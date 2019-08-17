package tn.social.carpooling.controller;

import lombok.extern.slf4j.Slf4j;
import org.apache.logging.log4j.util.Strings;
import org.springframework.web.bind.annotation.*;
import tn.social.carpooling.service.FacebookService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
@RequestMapping("/social")
@Slf4j
public class FacebookController {

    private FacebookService facebookService;

    private FacebookController(FacebookService facebookService) {
        this.facebookService = facebookService;
    }

    @GetMapping("/login")
    public String login() {
        return "Call login() from backend";
    }

    //TODO : gérer les exceptions !!
    @GetMapping("/createFacebookAuthorization")
    public void createFacebookAuthorization(HttpServletResponse httpServletResponse) {
        try {
            httpServletResponse.sendRedirect(facebookService.createFacebookAuthorizationURL());
        } catch (IOException e) {
            log.error(e.getMessage());
        }
    }

    @GetMapping("/facebook")
    public void createFacebookAccessToken(HttpServletRequest request, @RequestParam("code") String code) {
        request.getSession().setAttribute("accessToken", facebookService.createFacebookAccessToken(code));
        log.info((String) request.getSession().getAttribute("accessToken"));
    }

    //TODO : gérer les exceptions !!
    @GetMapping("/getName")
    public String getNameResponse(HttpServletRequest request) throws Exception{
        String accessToken = (String) request.getSession().getAttribute("accessToken");
        if (Strings.isNotBlank(accessToken) && Strings.isNotEmpty(accessToken)) {
            return facebookService.getName(accessToken);
        } else {
            throw new Exception("Token null ou vide");
        }
    }

    //TODO : gérer les exceptions !!
    @GetMapping("/publishToGroups")
    public void publishToGroups(HttpServletRequest request) throws Exception {
        String accessToken = (String) request.getSession().getAttribute("accessToken");
        if (Strings.isNotBlank(accessToken) && Strings.isNotEmpty(accessToken)) {
            facebookService.publishToGroups(accessToken);
        } else {
            throw new Exception("Token null ou vide");
        }
    }
}
