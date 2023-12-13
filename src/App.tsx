import "./App.scss";
import { EmployeeTile } from "./components/EmployeeTiles/EmployeeTiles"
import team from "./data/TeamData"

const App = () => {
  return (
      <section className="tracker-container">
        <h1 className="page-title">Ticket Tracker</h1>
        < EmployeeTile team={team} />
      </section>

    )
}

export default App;
