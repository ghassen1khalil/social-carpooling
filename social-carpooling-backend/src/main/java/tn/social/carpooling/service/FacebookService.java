package tn.social.carpooling.service;

import com.restfb.Connection;
import com.restfb.DefaultFacebookClient;
import com.restfb.FacebookClient;
import com.restfb.Parameter;
import com.restfb.types.FacebookType;
import com.restfb.types.Group;
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
    @Value("${server.host}")
    String serverHost;

    /*@Value("${facebook.access.token}")
    String facebookAccessToken;*/

    //String accessToken;

    public String createFacebookAuthorizationURL() {
        FacebookConnectionFactory connectionFactory = new FacebookConnectionFactory(facebookAppId, facebookSecret);
        OAuth2Operations oauthOperations = connectionFactory.getOAuthOperations();
        OAuth2Parameters params = new OAuth2Parameters();
        params.setRedirectUri(serverHost.concat("/tn-social-carpooling/social/facebook"));
        params.setScope("public_profile,email,user_birthday");
        return oauthOperations.buildAuthorizeUrl(params);
    }

    public String createFacebookAccessToken(String code) {
        FacebookConnectionFactory connectionFactory = new FacebookConnectionFactory(facebookAppId, facebookSecret);
        AccessGrant accessGrant = connectionFactory.getOAuthOperations().exchangeForAccess(code, "http://localhost:8080/tn-social-carpooling/social/facebook", null);
        return accessGrant.getAccessToken();
    }

    public String getName(String accessToken) {
        Facebook facebook = new FacebookTemplate(accessToken);
        String[] fields = {"id", "name"};
        return facebook.fetchObject("me", String.class, fields);
    }

    public void publishToGroups(String accessToken) {
        FacebookClient facebookClient = new DefaultFacebookClient(accessToken);
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
    }
}
