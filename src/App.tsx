import "./App.scss";
import EmployeeSearch from "./containers/EmployeeSearch/EmployeeSearch";
import team from "./data/TeamData"
import Snowfall from "react-snowfall";

const App = () => {
  return (
      <section className="tracker-container">
          <Snowfall />
        <h1 className="page-title">Ticket Tracker</h1>
        < EmployeeSearch team={team} />
      </section>

    )
}

export default App;
