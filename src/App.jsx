import { useEffect, useState } from "react";

import Header from "./Components/header";
import Home from "./Pages/Home";
import Booking from "./Pages/Booking";
import Confirmation from "./Pages/Confirmation";

import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const [selectedTable, setSelectedTable] = useState(null);

  const [booking, setBooking] = useState(null);

  const [tables, setTables] = useState([
    { id: 1, seats: 2, available: true },
    { id: 2, seats: 4, available: true },
    { id: 3, seats: 4, available: false },
    { id: 4, seats: 6, available: true },
    { id: 5, seats: 2, available: true },
    { id: 6, seats: 8, available: true },
  ]);

  useEffect(() => {
    console.log("Restaurant Table Booking App Loaded");
  }, []);

  const handleSelectTable = (table) => {
    setSelectedTable(table);
    setCurrentPage("booking");
  };

  const handleBookingComplete = (bookingDetails) => {
    setBooking(bookingDetails);

    setTables((previousTables) =>
      previousTables.map((table) =>
        table.id === bookingDetails.table.id
          ? { ...table, available: false }
          : table
      )
    );

    setCurrentPage("confirmation");
  };

  const handleBackHome = () => {
    setSelectedTable(null);
    setBooking(null);
    setCurrentPage("home");
  };

  return (
    <div className="app">
      <Header />

      {currentPage === "home" && (
        <Home
          tables={tables}
          onSelectTable={handleSelectTable}
        />
      )}

      {currentPage === "booking" && selectedTable && (
        <Booking
          selectedTable={selectedTable}
          onBookingComplete={handleBookingComplete}
        />
      )}

      {currentPage === "confirmation" && booking && (
        <Confirmation
          booking={booking}
          onBackHome={handleBackHome}
        />
      )}

      <footer>
        <p>
          © 2026 Grand Taste Restaurant | Restaurant Table Booking
        </p>
      </footer>
    </div>
  );
}

export default App;