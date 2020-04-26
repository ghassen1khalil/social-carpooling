package tn.social.carpooling.service.impl;

import com.google.common.collect.Lists;
import com.restfb.types.Group;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Service;
import tn.social.carpooling.core.model.FacebookGroup;
import tn.social.carpooling.core.model.ServiceProfile;
import tn.social.carpooling.service.FacebookService;
import tn.social.carpooling.service.mapper.GroupMapper;

import java.util.List;

@Service
@Profile(ServiceProfile.FAKE)
public class FacebookServiceImplFake implements FacebookService {

    @Override
    public String createFacebookAuthorizationURL() {
        return null;
    }

    @Override
    public String createFacebookAccessToken(String code) {
        return null;
    }

    @Override
    public String getName(String accessToken) {
        return null;
    }

    @Override
    public void publishToGroups(String accessToken) {

    }

    @Override
    public List<FacebookGroup> getUserCarpoolingGroups(String accessToken) {
        return GroupMapper.toFacebookGroupList(groupsFactory());
    }

    private List<Group> groupsFactory() {
        List<Group> carpoolingGroups = Lists.newArrayList();

        Group group1 = new Group();
        group1.setId("1");
        group1.setName("Covoiturage Quotidien Grand Tunis");
        carpoolingGroups.add(group1);

        Group group2 = new Group();
        group2.setId("2");
        group2.setName("Covoiturage Tunisie");
        carpoolingGroups.add(group2);

        Group group3 = new Group();
        group3.setId("3");
        group3.setName("Covoiturage Sfax >> Tunis >> sfax");
        carpoolingGroups.add(group3);

        Group group4 = new Group();
        group4.setId("4");
        group4.setName("Covoiturage Tunis - Sfax - Tunis");
        carpoolingGroups.add(group4);

        Group group5 = new Group();
        group5.setId("5");
        group5.setName("Covoiturage Sfax-Tunis-Sfax");
        carpoolingGroups.add(group5);

        Group group6 = new Group();
        group6.setId("6");
        group6.setName("Covoiturage Sousse-Monastir-Sfax-Tunis");
        carpoolingGroups.add(group6);

        Group group7 = new Group();
        group7.setId("7");
        group7.setName("Covoiturage Sfax-Tunis-Sfax (Place à votre choix)");
        carpoolingGroups.add(group7);

        Group group8 = new Group();
        group8.setId("8");
        group8.setName("Covoiturage Sfax-Tunis-Sfax");
        carpoolingGroups.add(group8);

        Group group9 = new Group();
        group9.setId("9");
        group9.setName("COVOITURAGE - TUNISIE");
        carpoolingGroups.add(group9);

        Group group10 = new Group();
        group10.setId("10");
        group10.setName("Covoiturage journalier Grand Tunis");
        carpoolingGroups.add(group10);

        return carpoolingGroups;


    }

}
