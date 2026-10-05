function BookingConfirmation({ booking, onBackHome }) {
  return (
    <div className="confirmation">
      <div className="success-icon">✓</div>

      <h2>Booking Confirmed!</h2>

      <p className="success-message">
        Your restaurant table has been successfully booked.
      </p>

      <div className="booking-details">
        <p>
          <strong>Customer:</strong> {booking.name}
        </p>

        <p>
          <strong>Email:</strong> {booking.email}
        </p>

        <p>
          <strong>Phone:</strong> {booking.phone}
        </p>

        <p>
          <strong>Date:</strong> {booking.date}
        </p>

        <p>
          <strong>Time:</strong> {booking.time}
        </p>

        <p>
          <strong>Guests:</strong> {booking.guests}
        </p>

        <p>
          <strong>Table:</strong> Table {booking.table.id}
        </p>

        {booking.request && (
          <p>
            <strong>Special Request:</strong> {booking.request}
          </p>
        )}
      </div>

      <button onClick={onBackHome}>
        Back to Home
      </button>
    </div>
  );
}

export default BookingConfirmation;