package com.example.ipldashboard.repository;

import com.example.ipldashboard.model.Team;
import org.springframework.data.repository.CrudRepository;

import javax.persistence.Id;
//long datatype is for the id that we are trying to search
public interface TeamRepository extends CrudRepository<Team, Id> {
    Team findByTeamName(String teamName);
}
