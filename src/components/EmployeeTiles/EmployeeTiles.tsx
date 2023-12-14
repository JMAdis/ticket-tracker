import { Employee } from "../../types/EmployeeInfo";
import { Counter } from "../Counter/Counter"; 
//import SearchBox from "../SearchBox/SearchBox";
import "./EmployeeTiles.scss";

type EmployeeTileProp = {
    team: Employee[];
};

const EmployeeTile = ({team} : EmployeeTileProp) => {
/*    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (event: FormEvent<HTMLInputElement>) => {
        const cleanInput = event.currentTarget.value.toLowerCase(); 
        setSearchQuery(cleanInput);
    };

    const filteredTeam = team.filter((member) =>
        member.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

*/
    return (
        <section>
{/*            <SearchBox label="employees" searchTerm={searchQuery} handleInput={handleSearch}  />

    */}          <div className="employee-tiles-container">
                {team.map(member => (
                <section key={member.id} className="employee-tile">
                    <h1 className="employee-tile__name">{member.name}</h1>
                    <h1 className="employee-tile__role">{member.role}</h1>
                    <div className="employee-tile__counter-container">
                        <Counter />
                    </div>
                </section>
                ))}
            </div>
        </section>
    );
};

export default EmployeeTile