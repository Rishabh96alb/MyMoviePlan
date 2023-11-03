package org.simplilearn.repository;

import org.simplilearn.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface userRepository extends JpaRepository<Users, Integer> {

	@Query("SELECT u from Users u WHERE u.userName=?1")
	Users findByUserName(String name);

	@Query("SELECT u from Users u WHERE u.email=?1")
	Users findByEmail(String email);
}
