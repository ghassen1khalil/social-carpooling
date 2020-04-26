package tn.social.carpooling.service.mapper;

import com.google.common.collect.Lists;
import com.restfb.types.Group;
import lombok.*;
import lombok.extern.slf4j.Slf4j;
import tn.social.carpooling.core.model.FacebookGroup;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
public class GroupMapper {

    public static FacebookGroup toFacebookGroup(Group group){
        if (group == null){
            log.error("L'objet passé en paramètre est null");
        }
        return FacebookGroup.builder()
                .id(group.getId())
                .name(group.getName())
                .build();
    }

    public static List<FacebookGroup> toFacebookGroupList(List<Group> groups){
        return groups.stream().map(GroupMapper::toFacebookGroup).collect(Collectors.toList());
    }

}
