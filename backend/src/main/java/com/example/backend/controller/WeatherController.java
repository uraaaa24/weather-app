package com.example.backend.controller;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*") 
public class WeatherController {

    private static final String WEATHER_URL = "https://api.openweathermap.org/data/2.5";
    private static final String API_KEY     = "5efc057812bbae14ca0092c3e5edc0da";

    private RestTemplate restTemplate = new RestTemplate();

    String example = "https://api.openweathermap.org/data/2.5/weather?q=Japan&appid=5efc057812bbae14ca0092c3e5edc0da";
    
    @GetMapping("/weather")
    public String getWeather() {
        HttpEntity<?> entity = new HttpEntity<>(new HttpHeaders());
        ResponseEntity<String> response = restTemplate.exchange(example, HttpMethod.GET, entity, String.class);
        return response.getBody();
    }
}
