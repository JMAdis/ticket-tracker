import "./App.scss";
//import EmployeeTile from "./components/EmployeeTiles/EmployeeTiles";
import EmployeeSearch from "./containers/EmployeeSearch/EmployeeSearch";
import team from "./data/TeamData"
// import SearchBox from "./components/SearchBox/SearchBox";

const App = () => {
  return (
      <section className="tracker-container">
        <h1 className="page-title">Ticket Tracker</h1>
        < EmployeeSearch team={team} />
      </section>

    )
}

export default App;
