export interface Employee {
  firstName: string;
  lastName?: string;
}

export interface Department {
  name: string;
  employees: Employee[];
}

export interface Role {
  person: string;
  role: string;
}

// Initial data - will be used by repository
export const initialDepartments: Department[] = [
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

export const leadershipRoles: Role[] = [
  { person: "Jo-Anne Sinclair", role: "CEO/Chair of Board" },
  { person: "Jackson Smith", role: "COO/VP Operations" },
  { person: "Susan Thomas", role: "CFO/VP Administration" },
  { person: "Richa Kaur", role: "VP Client Services" },
  { person: "Josee Benjamin", role: "CIO" },
  { person: "Vincent Grey", role: "VP Sales & Marketing" },
  { person: "Rupa Kharki", role: "Director Financial and Audit Svcs" },
  { person: "Xun Kuang", role: "Director Human Resources" },
  { person: "Stien Pedersen", role: "Director Legal Services/General Counsel" },
  { person: "Sandra Bear", role: "Director Information Technology" },
  { person: "Gus Blue", role: "Director Information Security and CISSO" },
  { person: "Sam Kong", role: "Director Accounting" },
  { person: "Valentine Smith", role: "Director Physical Security" },
  { person: "Mariya Kaperski", role: "Director Facilities" },
  { person: "Abd al-Hamid Alami", role: "Manager, Business Continuity and Disaster Recovery" },
  { person: "Victoria Gray", role: "Manager, Internal Audit" },
  { person: "Cheryl Guru", role: "Chief Architect" },
  { person: "Jean Ngoy", role: "Manager, Security Architecture" },
  { person: "Kris Gold", role: "Solution Architect, Online Banking" },
  { person: "Isaac Smith", role: "Manager, Application Solutions" },
  { person: "Payton Frost", role: "Lead Developer, Online Banking" },
  { person: "Samantha Nettle", role: "Manager, Operational Risk" },
  { person: "Yolanda Ferreira", role: "Manager, Vendor Relations" },
  { person: "Samir Hassan", role: "Manager, Purchasing" },
  { person: "Yuna Aikawa", role: "Manager, Communications" },
  { person: "Jonathan Carberry", role: "Manager Customer Experience and Community Eng." },
  { person: "Roland Wei", role: "Manager of Sales" },
  { person: "Pran Singh", role: "Manager, Marketing" },
  { person: "Linda Analyst", role: "Business Analyst, Online Banking" },
  { person: "Esra Sedge", role: "Manager, Contract Management" },
  { person: "Pranee Tan", role: "Manager, Compliance Management" },
  { person: "Karmen Spruce", role: "Manager IT End User Service Desk" },
  { person: "Haydar Katirci", role: "Manager IT End User Computing" },
  { person: "Jill Harkness", role: "Manager IT Telecom and Infrastructure" },
  { person: "Tim Morrison", role: "Manager, Data Center and Hosting Services" },
  { person: "Aleksandr Milosevic", role: "Manager of IT Risk Management" },
  { person: "Jim Wingnut", role: "Manager IT, Project Management Office" },
  { person: "Vacant", role: "Left Vacant for future expansion" },
  { person: "Vacant", role: "Left Vacant for future expansion" },
  { person: "Vacant", role: "Left Vacant for future expansion" },
  { person: "Vacant", role: "Left Vacant for future expansion" },
  { person: "Vacant", role: "Left Vacant for future expansion" },
  { person: "Vacant", role: "Left Vacant for future expansion" }
];