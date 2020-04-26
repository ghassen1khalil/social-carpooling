package tn.social.carpooling.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tn.social.carpooling.core.model.FacebookGroup;
import tn.social.carpooling.service.UserService;

import java.util.List;

@RestController
@Slf4j
@RequestMapping("/user")
public class UserController {

    private UserService userService;

    public UserController(UserService userService){
        this.userService = userService;
    }

    @PostMapping("groups")
    public void saveUserGroups(@RequestBody List<FacebookGroup> selectedGroups) {
        log.debug("Selected groups = {}", selectedGroups);
        userService.savePreferredUserGroups(selectedGroups);
    }
}
