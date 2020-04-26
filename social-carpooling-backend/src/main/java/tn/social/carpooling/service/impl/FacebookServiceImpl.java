package tn.social.carpooling.service.impl;

import com.google.common.collect.Lists;
import com.restfb.*;
import com.restfb.types.FacebookType;
import com.restfb.types.Group;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.apache.logging.log4j.util.Strings;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Profile;
import org.springframework.social.facebook.api.Facebook;
import org.springframework.social.facebook.api.impl.FacebookTemplate;
import org.springframework.social.facebook.connect.FacebookConnectionFactory;
import org.springframework.social.oauth2.AccessGrant;
import org.springframework.social.oauth2.OAuth2Operations;
import org.springframework.social.oauth2.OAuth2Parameters;
import org.springframework.stereotype.Service;
import tn.social.carpooling.core.model.FacebookGroup;
import tn.social.carpooling.core.model.ServiceProfile;
import tn.social.carpooling.service.FacebookService;
import tn.social.carpooling.service.mapper.GroupMapper;

import java.util.List;

@Service
@Slf4j
@Profile(ServiceProfile.REAL)
public class FacebookServiceImpl implements FacebookService {

    @Value("${spring.social.facebook.appId}")
    String facebookAppId;
    @Value("${spring.social.facebook.appSecret}")
    String facebookSecret;
    @Value("${app.base.url}")
    String serverHost;

    @Override
    public String createFacebookAuthorizationURL() {
        FacebookConnectionFactory connectionFactory = new FacebookConnectionFactory(facebookAppId, facebookSecret);
        OAuth2Operations oauthOperations = connectionFactory.getOAuthOperations();
        OAuth2Parameters params = new OAuth2Parameters();
        params.setRedirectUri(serverHost.concat("/tn-social-carpooling/social/facebook"));
        params.setScope("public_profile,email,user_birthday");
        return oauthOperations.buildAuthorizeUrl(params);
    }

    @Override
    public String createFacebookAccessToken(String code) {
        FacebookConnectionFactory connectionFactory = new FacebookConnectionFactory(facebookAppId, facebookSecret);
        AccessGrant accessGrant = connectionFactory.getOAuthOperations().exchangeForAccess(code, serverHost.concat("/tn-social-carpooling/social/facebook"), null);
        return accessGrant.getAccessToken();
    }

    @Override
    public String getName(String accessToken) {
        Facebook facebook = new FacebookTemplate(accessToken);
        String[] fields = {"id", "name"};
        return facebook.fetchObject("me", String.class, fields);
    }

    @Override
    public void publishToGroups(String accessToken) {
        FacebookClient facebookClient = new DefaultFacebookClient(accessToken, Version.VERSION_2_5);
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

    @Override
    public List<FacebookGroup> getUserCarpoolingGroups(String accessToken) throws Exception {
        List<Group> carpoolingGroups = Lists.newArrayList();
        if (Strings.isNotBlank(accessToken) && Strings.isNotEmpty(accessToken)) {
            FacebookClient facebookClient = new DefaultFacebookClient(accessToken, Version.VERSION_2_5);
            Connection<Group> groupConnections = facebookClient.fetchConnection("me/groups", Group.class);
            for (List<Group> groupList : groupConnections) {
                for (Group group : groupList) {
                    if (StringUtils.containsIgnoreCase(group.getName(), "covoiturage")) {
                        carpoolingGroups.add(group);
                    }
                }
            }
        } else {
            throw new Exception("Token null ou vide");
        }
        return GroupMapper.toFacebookGroupList(carpoolingGroups);
    }

}
