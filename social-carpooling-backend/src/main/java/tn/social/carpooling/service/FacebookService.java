package tn.social.carpooling.service;

import com.restfb.types.Group;
import tn.social.carpooling.core.model.FacebookGroup;

import java.util.List;

public interface FacebookService {

    String createFacebookAuthorizationURL();

    String createFacebookAccessToken(String code);

    String getName(String accessToken);

    void publishToGroups(String accessToken);

    List<FacebookGroup> getUserCarpoolingGroups(String accessToken) throws Exception;
}
