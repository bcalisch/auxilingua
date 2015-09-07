package com.claimacademy.auxilingua.repository;

import com.claimacademy.auxilingua.domain.CommonPhrase;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by benjamin on 9/3/15.
 */
public interface CommonPhraseRepository extends JpaRepository<CommonPhrase, String> {
}
