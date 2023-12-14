import { Employee } from "../../types/EmployeeInfo";
import { Counter } from "../Counter/Counter"; 
import "./EmployeeTiles.scss";

type EmployeeTileProp = {
    team: Employee[];
};

const EmployeeTile = ({team} : EmployeeTileProp) => {
    return (
        <section>
              <div className="employee-tiles-container">
                {team.map(member => (
                <section key={member.id} className="employee-tile">
                    <div className="employee-tile__info">
                        <h1 className="employee-tile__name">{member.name}</h1>
                        <h1 className="employee-tile__role">{member.role}</h1>
                    </div>
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