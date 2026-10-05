import { useState } from "react";

function BookingForm({ selectedTable, onBookingComplete }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    request: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must contain 10 digits";
    }

    if (!formData.date) {
      newErrors.date = "Please select a date";
    }

    if (!formData.time) {
      newErrors.time = "Please select a time";
    }

    if (!formData.guests) {
      newErrors.guests = "Please enter number of guests";
    } else if (formData.guests < 1) {
      newErrors.guests = "Guests must be at least 1";
    } else if (formData.guests > selectedTable.seats) {
      newErrors.guests = `Maximum ${selectedTable.seats} guests for this table`;
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    onBookingComplete({
      ...formData,
      table: selectedTable,
    });
  };

  return (
    <div className="booking-form-container">
      <h2>Book Table {selectedTable.id}</h2>

      <p className="selected-info">
        This table can accommodate up to {selectedTable.seats} guests.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Customer Name</label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />

          {errors.name && <small>{errors.name}</small>}
        </div>

        <div className="form-group">
          <label>Email</label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />

          {errors.email && <small>{errors.email}</small>}
        </div>

        <div className="form-group">
          <label>Phone Number</label>

          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="10 digit phone number"
          />

          {errors.phone && <small>{errors.phone}</small>}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Booking Date</label>

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />

            {errors.date && <small>{errors.date}</small>}
          </div>

          <div className="form-group">
            <label>Booking Time</label>

            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
            />

            {errors.time && <small>{errors.time}</small>}
          </div>
        </div>

        <div className="form-group">
          <label>Number of Guests</label>

          <input
            type="number"
            name="guests"
            min="1"
            value={formData.guests}
            onChange={handleChange}
            placeholder="Enter number of guests"
          />

          {errors.guests && <small>{errors.guests}</small>}
        </div>

        <div className="form-group">
          <label>Special Request</label>

          <textarea
            name="request"
            value={formData.request}
            onChange={handleChange}
            placeholder="Birthday, anniversary, etc."
          ></textarea>
        </div>

        <button className="confirm-btn" type="submit">
          Confirm Booking
        </button>
      </form>
    </div>
  );
}

export default BookingForm;