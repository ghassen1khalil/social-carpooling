package tn.social.carpooling.service;

import com.restfb.Connection;
import com.restfb.DefaultFacebookClient;
import com.restfb.FacebookClient;
import com.restfb.Parameter;
import com.restfb.types.FacebookType;
import com.restfb.types.Group;
import com.restfb.types.User;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.social.facebook.api.Facebook;
import org.springframework.social.facebook.api.impl.FacebookTemplate;
import org.springframework.social.facebook.connect.FacebookConnectionFactory;
import org.springframework.social.oauth2.AccessGrant;
import org.springframework.social.oauth2.OAuth2Operations;
import org.springframework.social.oauth2.OAuth2Parameters;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class FacebookService {

    @Value("${spring.social.facebook.appId}")
    String facebookAppId;
    @Value("${spring.social.facebook.appSecret}")
    String facebookSecret;
    @Value("${facebook.access.token}")
    String facebookAccessToken;

    String accessToken;

    public String createFacebookAuthorizationURL() {
        FacebookConnectionFactory connectionFactory = new FacebookConnectionFactory(facebookAppId, facebookSecret);
        OAuth2Operations oauthOperations = connectionFactory.getOAuthOperations();
        OAuth2Parameters params = new OAuth2Parameters();
        params.setRedirectUri("http://localhost:8080/facebook");
        params.setScope("public_profile,email,user_birthday");
        return oauthOperations.buildAuthorizeUrl(params);
    }

    public void createFacebookAccessToken(String code) {
        FacebookConnectionFactory connectionFactory = new FacebookConnectionFactory(facebookAppId, facebookSecret);
        AccessGrant accessGrant = connectionFactory.getOAuthOperations().exchangeForAccess(code, "http://localhost:8080/facebook", null);
        accessToken = accessGrant.getAccessToken();
    }

    public String getName() {
        Facebook facebook = new FacebookTemplate(accessToken);
        String[] fields = {"id", "name"};
        return facebook.fetchObject("me", String.class, fields);
    }

    public void testRestFacebook() {
        FacebookClient facebookClient = new DefaultFacebookClient(facebookAccessToken);
        Connection<Group> groupConnections = facebookClient.fetchConnection("me/groups", Group.class);
        for (List<Group> groupList : groupConnections) {
            for (Group group : groupList) {
                log.debug(group.getId());
                if ("DevTest".equals(group.getName())) {
                    FacebookType response = facebookClient.publish(group.getId() + "/feed", FacebookType.class, Parameter.with("message", "Test from my app"));
                    log.debug("fb.com/" + response.getId());
                }
            }
        }

        /*User user = facebookClient.fetchObject("me", User.class);
        System.out.println("Name =" + user.getName());*/
    }
}
