package tn.social.carpooling.service.impl;

import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Service;
import tn.social.carpooling.core.model.FacebookGroup;
import tn.social.carpooling.core.model.ServiceProfile;
import tn.social.carpooling.core.repository.FacebookGroupRepository;
import tn.social.carpooling.service.UserService;

import java.util.List;

@Service
@Profile(ServiceProfile.REAL)
@Slf4j
public class UserServiceImpl implements UserService {

    private FacebookGroupRepository facebookGroupRepository;

    public UserServiceImpl(FacebookGroupRepository facebookGroupRepository){
        this.facebookGroupRepository = facebookGroupRepository;
    }
    @Override
    public List<FacebookGroup> savePreferredUserGroups(List<FacebookGroup> facebookGroups) {
        return facebookGroupRepository.saveAll(facebookGroups);
    }
}
