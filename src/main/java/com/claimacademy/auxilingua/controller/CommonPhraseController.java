package com.claimacademy.auxilingua.controller;

import com.claimacademy.auxilingua.domain.CommonPhrase;
import com.claimacademy.auxilingua.service.CommonPhraseService;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.inject.Inject;
import java.util.List;

@RestController
public class CommonPhraseController {
    private static final org.slf4j.Logger LOGGER = LoggerFactory.getLogger(ParsingWordsController.class);
    private final CommonPhraseService commonPhraseService;

    @Inject
    public CommonPhraseController(CommonPhraseService commonPhraseService){
        this.commonPhraseService = commonPhraseService;
    }

    @RequestMapping(value = "/commonphrases", method = RequestMethod.GET)
    public List<CommonPhrase> listUsers() {
        LOGGER.debug("Received request to list all parsing words");
        return commonPhraseService.getList();
    }
    @RequestMapping(value = "/phrase", method = RequestMethod.GET)
    public CommonPhrase getWord(@RequestParam String id) {
        LOGGER.debug("Received request to return a single word of ID:"+id);
        return commonPhraseService.getPhrase(id);
    }

}
