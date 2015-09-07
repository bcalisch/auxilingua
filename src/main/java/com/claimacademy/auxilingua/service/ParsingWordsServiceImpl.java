package com.claimacademy.auxilingua.service;

import com.claimacademy.auxilingua.domain.ParsingWords;
import com.claimacademy.auxilingua.repository.ParsingWordsRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.inject.Inject;
import javax.transaction.Transactional;
import java.util.List;

@Service
public class ParsingWordsServiceImpl implements ParsingWordsService {

    private static final Logger LOGGER = LoggerFactory.getLogger(ParsingWordsServiceImpl.class);
    private final ParsingWordsRepository repository;

    @Inject
    public ParsingWordsServiceImpl(ParsingWordsRepository repository) {
        this.repository = repository;
    }

    @Override
    public ParsingWords save(ParsingWords parsingWords) {
        return null;
    }

    @Override
    @Transactional
    public List<ParsingWords> getList() {
        LOGGER.debug("Retrieving the list of all parsing words");

        return repository.findAll();
    }

    @Override
    public ParsingWords getWord(String id) {
        return repository.getOne(id);
    }
}
