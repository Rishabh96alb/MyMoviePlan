package org.simplilearn.repository;

import java.util.List;

import org.simplilearn.model.Bookings;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface bookingsRepo extends JpaRepository<Bookings, Integer> {

	@Query("Select b from Bookings b where b.userId=?1")
	public List<Bookings> getAllBookingsByUser(int uid);
}
