package tn.social.carpooling.core.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document(collection = "facebook_group")
public class FacebookGroup {
    @Id
    private String id;
    private String name;
}
