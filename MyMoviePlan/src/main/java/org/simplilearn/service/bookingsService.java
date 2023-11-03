package org.simplilearn.service;

import java.util.List;

import org.simplilearn.model.Bookings;
import org.simplilearn.model.Users;
import org.simplilearn.repository.bookingsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class bookingsService {

	@Autowired
	private bookingsRepo repo;

	public List<Bookings> getAllBookings() {
		return repo.findAll();
	}

	public Bookings saveBooking(Bookings bk) {
		return repo.save(bk);
	}

	public List<Bookings> getAllBookingsByUsername(Users usr) {
		return repo.getAllBookingsByUser(usr.getUid());
	}
}
