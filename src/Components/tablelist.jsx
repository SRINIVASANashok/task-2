function TableList({ tables, onSelectTable }) {
  return (
    <section className="tables-section">
      <h2>Available Tables</h2>

      <div className="table-grid">
        {tables.map((table) => (
          <div
            key={table.id}
            className={`table-card ${
              table.available ? "available" : "booked"
            }`}
          >
            <div className="table-icon">🪑</div>

            <h3>Table {table.id}</h3>

            <p>Seats: {table.seats}</p>

            <span>
              {table.available ? "Available" : "Booked"}
            </span>

            {table.available && (
              <button onClick={() => onSelectTable(table)}>
                Select Table
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default TableList;