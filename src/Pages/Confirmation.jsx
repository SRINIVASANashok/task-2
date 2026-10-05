import BookingConfirmation from "../Components/bookingconfirmation";

function Confirmation({ booking, onBackHome }) {
  return (
    <main>
      <BookingConfirmation
        booking={booking}
        onBackHome={onBackHome}
      />
    </main>
  );
}

export default Confirmation;