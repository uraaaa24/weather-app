package com.example.backend.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.domain.Demo;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*") 
public class DemoController {
    
    @GetMapping("/demo")
    public Demo demo() {
        return new Demo("山田太郎");
    }
}
