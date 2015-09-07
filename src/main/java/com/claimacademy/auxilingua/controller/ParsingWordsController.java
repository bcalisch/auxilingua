package com.claimacademy.auxilingua.controller;


import com.claimacademy.auxilingua.domain.ParsingWords;
import com.claimacademy.auxilingua.service.ParsingWordsService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import java.util.List;

@RestController
public class ParsingWordsController {

    private static final Logger LOGGER = LoggerFactory.getLogger(ParsingWordsController.class);
    private final ParsingWordsService parsingWordsService;

    @Inject
    public ParsingWordsController(ParsingWordsService parsingWordsService) {
        this.parsingWordsService = parsingWordsService;
    }


    @RequestMapping(value = "/parsingplayground", method = RequestMethod.GET)
    public List<ParsingWords> listUsers() {
        LOGGER.debug("Received request to list all parsing words");
        return parsingWordsService.getList();
    }
    @RequestMapping(value = "/word", method = RequestMethod.GET)
    public ParsingWords getWord(@RequestParam String id) {
        LOGGER.debug("Received request to return a single word of ID:"+id);
        return parsingWordsService.getWord(id);
    }
}
