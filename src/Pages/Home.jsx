import TableList from "../Components/tablelist";

function Home({ tables, onSelectTable }) {
  return (
    <main id="home">
      <section className="hero">
        <div>
          <p className="welcome">WELCOME TO</p>

          <h1>Grand Taste Restaurant</h1>

          <p>
            Reserve your table and enjoy a wonderful dining
            experience with your friends and family.
          </p>

          <a href="#tables" className="hero-btn">
            View Tables
          </a>
        </div>

        <div className="hero-image">
          🍽️
        </div>
      </section>

      <div id="tables">
        <TableList
          tables={tables}
          onSelectTable={onSelectTable}
        />
      </div>
    </main>
  );
}

export default Home;