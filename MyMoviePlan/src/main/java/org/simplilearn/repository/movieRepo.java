package org.simplilearn.repository;

import org.simplilearn.model.movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface movieRepo extends JpaRepository<movie, Integer> {

	@Query("SELECT m FROM movie m WHERE m.title=?1")
	public movie findByName(String title);
}
