package com.claimacademy.auxilingua.domain;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.google.common.base.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name="commonPhrase")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class CommonPhrase {

    @Id
    @NotNull
    @Column(name = "id", nullable = false, updatable = false)
    private String id;

    @NotNull
    @Size(max = 250)
    @Column(name = "latin", nullable = false)
    private String latin;

    @NotNull
    @Size(max = 250)
    @Column(name = "english", nullable = false)
    private String english;


    public CommonPhrase() {
    }

    public CommonPhrase(String id, String latin, String english) {
        this.id = id;
        this.latin = latin;
        this.english = english;
    }

    public String getId() {
        return id;
    }

    public String getLatin() {
        return latin;
    }

    public String getEnglish() {
        return english;
    }


    @Override
    public String toString() {
        return Objects.toStringHelper(this)
                .add("id", id)
                .add("latin", latin)
                .add("english", english)
                .toString();
    }
}
