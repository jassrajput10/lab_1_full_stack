
import './EmployeeList.css';  

// This is the component for Employee List
function EmployeeList() {
    const departments = [
        {
            name: "Administration",
            employees: [
                { firstName: "Zoë", lastName: "Robins" },
                { firstName: "Madeleine", lastName: "Madden" }
            ]
        },
        {
            name: "Audit",
            employees: [
                { firstName: "Josha", lastName: "Sadowski" },
                { firstName: "Kate", lastName: "Fleetwood" }
            ]
        },
        {
            name: "Banking Operations",
            employees: [
                { firstName: "Priyanka", lastName: "Bose" },
                { firstName: "Hammed", lastName: "Animashaun" },
                { firstName: "Álvaro", lastName: "Morte" },
                { firstName: "Taylor", lastName: "Napier" },
                { firstName: "Alan", lastName: "Simmonds" }
            ]
        },
        {
            name: "Communications",
            employees: [
                { firstName: "Gil", lastName: "Cardinal" },
                { firstName: "Richard J.", lastName: "Lewis" }
            ]
        },
        {
            name: "Corporate Services",
            employees: [
                { firstName: "Randy", lastName: "Bradshaw" },
                { firstName: "Tracey", lastName: "Cook" },
                { firstName: "Lubomir", lastName: "Mykytiuk" }
            ]
        },
        {
            name: "Facilities",
            employees: [
                { firstName: "Dakota", lastName: "House" },
                { firstName: "Lori Lea", lastName: "Okemah" },
                { firstName: "Renae", lastName: "Morrisseau" },
                { firstName: "Rick", lastName: "Belcourt" }
            ]
        },
        {
            name: "Financial Services",
            employees: [
                { firstName: "Selina", lastName: "Hanusa" },
                { firstName: "Buffy", lastName: "Gaudry" },
                { firstName: "Shaneen Ann", lastName: "Fox" },
                { firstName: "Allan", lastName: "Little" },
                { firstName: "Danny", lastName: "Rabbit" }
            ]
        },
        {
            name: "Human Resources",
            employees: [
                { firstName: "Jesse Ed", lastName: "Azure" },
                { firstName: "Stacy", lastName: "Da Silva" },
                { firstName: "Vladimír", lastName: "Valenta" },
                { firstName: "Samone", lastName: "Sayeses-Whitney" },
                { firstName: "Paul", lastName: "Coeur" }
            ]
        },
        {
            name: "Information Technology",
            employees: [
                { firstName: "Graham", lastName: "Greene" },
                { firstName: "Sandika", lastName: "Evergreen" },
                { firstName: "Jennifer", lastName: "Rodriguez (Software Developer)" }
            ]
        },
        {
            name: "IT Technician",
            employees: [
                { firstName: "Aiyana", lastName: "Littlebear" },
                { firstName: "Inara", lastName: "Thunderbird" },
                { firstName: "Kaya", lastName: "Runningbrook" },
                { firstName: "Elara", lastName: "Firehawk" },
                { firstName: "Siona", lastName: "Moonflower" },
                { firstName: "Kaiyu", lastName: "Greywolf" },
                { firstName: "Ayawamat", lastName: "Nightwind" },
                { firstName: "Tala", lastName: "Braveheart" },
                { firstName: "Iniko", lastName: "Stonebear" },
                { firstName: "Onatah", lastName: "Redhawk" }
            ]
        }
    ];

    // Used map to go through each department and employee, giving each a key
    return (
        <section className="employee-list">
            <h2>All Employees by Department</h2>
            {departments.map(dept => (
                <div key={dept.name}>
                    <h3>{dept.name}</h3>
                    <ul>
                        {dept.employees.map(emp => (
                            <li key={`${dept.name}-${emp.firstName}`}>
                                {emp.lastName ? `${emp.firstName} ${emp.lastName}` : emp.firstName}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
}

export default EmployeeList;