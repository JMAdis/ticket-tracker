import { FormEvent, useState } from "react";
import EmployeeTile from "../../components/EmployeeTiles/EmployeeTiles";
import SearchBox from "../../components/SearchBox/SearchBox";
import { Employee } from "../../types/EmployeeInfo";

type EmployeeSearchProps = {
    team: Employee[];
}

const EmployeeSearch = ({team} : EmployeeSearchProps) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (event: FormEvent<HTMLInputElement>) => {
        const cleanInput = event.currentTarget.value.toLowerCase(); 
        setSearchQuery(cleanInput);
    };

    const filteredTeam = team.filter((member) =>
        member.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <SearchBox 
                label="employees" 
                handleInput={handleSearch}
                searchTerm={searchQuery} 
            />
            <EmployeeTile team={filteredTeam} />
        </>
        );
};

export default EmployeeSearch