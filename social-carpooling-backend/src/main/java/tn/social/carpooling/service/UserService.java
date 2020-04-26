package tn.social.carpooling.service;

import tn.social.carpooling.core.model.FacebookGroup;

import java.util.List;

public interface UserService {

    List<FacebookGroup> savePreferredUserGroups(List<FacebookGroup> facebookGroups);
}
