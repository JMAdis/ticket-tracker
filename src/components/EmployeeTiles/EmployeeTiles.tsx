import { Employee } from "../../types/EmployeeInfo";
import "./EmployeeTiles.scss";
import { Counter } from "../Counter/Counter"; 

type EmployeeTileProp = {
    team: Employee[]
}

export const EmployeeTile = ({team} : EmployeeTileProp) => {
    return (
        <div className="employee-tiles-container">
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
    );
};