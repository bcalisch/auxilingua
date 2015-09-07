package com.claimacademy.auxilingua.service;

import com.claimacademy.auxilingua.domain.CommonPhrase;
import com.claimacademy.auxilingua.repository.CommonPhraseRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.inject.Inject;
import javax.transaction.Transactional;
import java.util.List;

@Service
public class CommonPhraseServiceImpl implements CommonPhraseService {

    private static final Logger LOGGER = LoggerFactory.getLogger(CommonPhraseServiceImpl.class);
    private final CommonPhraseRepository repository;

    @Inject
    public CommonPhraseServiceImpl(CommonPhraseRepository repository) {
        this.repository = repository;
    }

    @Override
    public CommonPhrase save(CommonPhrase commonPhrase) {
        return null;
    }

    @Override
    @Transactional
    public List<CommonPhrase> getList() {
        LOGGER.debug("Retrieving the list of all parsing words");

        return repository.findAll();
    }

    @Override
    public CommonPhrase getPhrase(String id) {
        return repository.getOne(id);
    }
}
