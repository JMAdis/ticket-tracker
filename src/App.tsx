import { useState } from "react"
import { EmployeeTile } from "./components/EmployeeTiles/EmployeeTiles"
import team from "./data/TeamData"

const App = () => {
  return (
      <section className="tracker-container">
        <h1>Ticket Tracker</h1>
        < EmployeeTile team={team} />
      </section>

    )
}

export default App;
