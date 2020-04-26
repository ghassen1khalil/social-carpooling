package tn.social.carpooling.core.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import tn.social.carpooling.core.model.FacebookGroup;

@Repository
public interface FacebookGroupRepository extends MongoRepository<FacebookGroup, String> {
}
