package tn.social.carpooling.service;

import org.apache.commons.lang3.StringUtils;
import org.junit.Assert;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class FacebookServiceImplTest {

    @Test
    void getUserCarpoolingGroups() {
        String groupName = "Covoiturage Sfax - Tunis";
        Assert.assertTrue(StringUtils.containsIgnoreCase(groupName, "covoiturage"));
    }
}
