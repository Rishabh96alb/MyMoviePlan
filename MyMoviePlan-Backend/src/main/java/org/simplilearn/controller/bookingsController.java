package org.simplilearn.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.simplilearn.model.Bookings;
import org.simplilearn.model.Users;
import org.simplilearn.service.bookingsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(allowedHeaders = "*")
@RestController
@RequestMapping("/bookings")
public class bookingsController {

	@Autowired
	bookingsService service;

	@GetMapping("/all")
	public List<Bookings> getAllBookings() {
		return service.getAllBookings();
	}

	@PostMapping("/saveBooking")
	public Map<String, String> saveBooking(@RequestBody Bookings bk) {
		Map<String, String> status = new HashMap<>();
		status.put("status", null);
		try {
			Bookings bkng = service.saveBooking(bk);
			status.replace("status", Integer.toString(bkng.getBookingId()));
		} catch (Exception e) {
			System.out.println(e);
			status.replace("status", "error");
		}
		return status;
	}

	@PostMapping("/user")
	public List<Bookings> getBookingsByUser(@RequestBody Users usr) {
		return service.getAllBookingsByUsername(usr);
	}
}
