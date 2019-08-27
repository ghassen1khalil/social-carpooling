package tn.social.carpooling.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tn.social.carpooling.core.model.Trip;

@RestController
@RequestMapping("/trip")
@Slf4j
public class TripController {

    @PostMapping("/save")
    public String saveTrip(@RequestBody Trip trip) {
        log.info(trip.toString());
        return "-1";
    }
}
