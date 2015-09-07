package com.claimacademy.auxilingua.service;

import com.claimacademy.auxilingua.domain.CommonPhrase;

import java.util.List;

/**
 * Created by benjamin on 9/3/15.
 */
public interface CommonPhraseService {
    CommonPhrase save(CommonPhrase commonPhrase);

    List<CommonPhrase> getList();

    CommonPhrase getPhrase(String id);
}
