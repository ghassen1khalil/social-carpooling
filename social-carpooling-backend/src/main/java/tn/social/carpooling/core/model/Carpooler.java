package tn.social.carpooling.core.model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Getter
@Setter
@Document(collection = "carpooler")
public class Carpooler {
    private String username;
    private String email;
    private List<FacebookGroup> preferredCarpoolingGroups;
}
