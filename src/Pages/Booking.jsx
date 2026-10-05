import BookingForm from "../Components/bookingform";

function Booking({ selectedTable, onBookingComplete }) {
  return (
    <main id="booking">
      <BookingForm
        selectedTable={selectedTable}
        onBookingComplete={onBookingComplete}
      />
    </main>
  );
}

export default Booking;