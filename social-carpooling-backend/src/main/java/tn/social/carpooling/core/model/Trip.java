package tn.social.carpooling.core.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Trip {

    private long id;
    private LocalDate date;
    private String time;
    private String from;
    private String destination;
    private short availablePlaces;
    private String rdv;
}
