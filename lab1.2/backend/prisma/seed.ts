process.env.DATABASE_URL = 'postgresql://neondb_owner:npg_FSYyZe5xafz0@ep-odd-hill-amrbrpie-pooler.c-5.us-east-1.aws.neon.tech/neondb?channel_binding=require&sslmode=require';
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Create departments
  const departments = await Promise.all([
    prisma.department.upsert({ where: { name: 'Administration' }, update: {}, create: { name: 'Administration' } }),
    prisma.department.upsert({ where: { name: 'Audit' }, update: {}, create: { name: 'Audit' } }),
    prisma.department.upsert({ where: { name: 'Banking Operations' }, update: {}, create: { name: 'Banking Operations' } }),
    prisma.department.upsert({ where: { name: 'Communications' }, update: {}, create: { name: 'Communications' } }),
    prisma.department.upsert({ where: { name: 'Corporate Services' }, update: {}, create: { name: 'Corporate Services' } }),
    prisma.department.upsert({ where: { name: 'Facilities' }, update: {}, create: { name: 'Facilities' } }),
    prisma.department.upsert({ where: { name: 'Financial Services' }, update: {}, create: { name: 'Financial Services' } }),
    prisma.department.upsert({ where: { name: 'Human Resources' }, update: {}, create: { name: 'Human Resources' } }),
    prisma.department.upsert({ where: { name: 'Information Technology' }, update: {}, create: { name: 'Information Technology' } }),
    prisma.department.upsert({ where: { name: 'IT Technician' }, update: {}, create: { name: 'IT Technician' } }),
  ]);

  // Helper to find department id by name
const dept = (name: string) => departments.find((d: { id: number; name: string }) => d.name === name)!;
  // Create employees
  const employees = await Promise.all([
    prisma.employee.upsert({ where: { id: 1 }, update: {}, create: { firstName: 'Zoë', lastName: 'Robins', departmentId: dept('Administration').id } }),
    prisma.employee.upsert({ where: { id: 2 }, update: {}, create: { firstName: 'Madeleine', lastName: 'Madden', departmentId: dept('Administration').id } }),
    prisma.employee.upsert({ where: { id: 3 }, update: {}, create: { firstName: 'Josha', lastName: 'Sadowski', departmentId: dept('Audit').id } }),
    prisma.employee.upsert({ where: { id: 4 }, update: {}, create: { firstName: 'Kate', lastName: 'Fleetwood', departmentId: dept('Audit').id } }),
    prisma.employee.upsert({ where: { id: 5 }, update: {}, create: { firstName: 'Priyanka', lastName: 'Bose', departmentId: dept('Banking Operations').id } }),
    prisma.employee.upsert({ where: { id: 6 }, update: {}, create: { firstName: 'Hammed', lastName: 'Animashaun', departmentId: dept('Banking Operations').id } }),
    prisma.employee.upsert({ where: { id: 7 }, update: {}, create: { firstName: 'Álvaro', lastName: 'Morte', departmentId: dept('Banking Operations').id } }),
    prisma.employee.upsert({ where: { id: 8 }, update: {}, create: { firstName: 'Taylor', lastName: 'Napier', departmentId: dept('Banking Operations').id } }),
    prisma.employee.upsert({ where: { id: 9 }, update: {}, create: { firstName: 'Alan', lastName: 'Simmonds', departmentId: dept('Banking Operations').id } }),
    prisma.employee.upsert({ where: { id: 10 }, update: {}, create: { firstName: 'Gil', lastName: 'Cardinal', departmentId: dept('Communications').id } }),
    prisma.employee.upsert({ where: { id: 11 }, update: {}, create: { firstName: 'Richard J.', lastName: 'Lewis', departmentId: dept('Communications').id } }),
    prisma.employee.upsert({ where: { id: 12 }, update: {}, create: { firstName: 'Randy', lastName: 'Bradshaw', departmentId: dept('Corporate Services').id } }),
    prisma.employee.upsert({ where: { id: 13 }, update: {}, create: { firstName: 'Tracey', lastName: 'Cook', departmentId: dept('Corporate Services').id } }),
    prisma.employee.upsert({ where: { id: 14 }, update: {}, create: { firstName: 'Lubomir', lastName: 'Mykytiuk', departmentId: dept('Corporate Services').id } }),
    prisma.employee.upsert({ where: { id: 15 }, update: {}, create: { firstName: 'Dakota', lastName: 'House', departmentId: dept('Facilities').id } }),
    prisma.employee.upsert({ where: { id: 16 }, update: {}, create: { firstName: 'Lori Lea', lastName: 'Okemah', departmentId: dept('Facilities').id } }),
    prisma.employee.upsert({ where: { id: 17 }, update: {}, create: { firstName: 'Renae', lastName: 'Morrisseau', departmentId: dept('Facilities').id } }),
    prisma.employee.upsert({ where: { id: 18 }, update: {}, create: { firstName: 'Rick', lastName: 'Belcourt', departmentId: dept('Facilities').id } }),
    prisma.employee.upsert({ where: { id: 19 }, update: {}, create: { firstName: 'Selina', lastName: 'Hanusa', departmentId: dept('Financial Services').id } }),
    prisma.employee.upsert({ where: { id: 20 }, update: {}, create: { firstName: 'Buffy', lastName: 'Gaudry', departmentId: dept('Financial Services').id } }),
    prisma.employee.upsert({ where: { id: 21 }, update: {}, create: { firstName: 'Shaneen Ann', lastName: 'Fox', departmentId: dept('Financial Services').id } }),
    prisma.employee.upsert({ where: { id: 22 }, update: {}, create: { firstName: 'Allan', lastName: 'Little', departmentId: dept('Financial Services').id } }),
    prisma.employee.upsert({ where: { id: 23 }, update: {}, create: { firstName: 'Danny', lastName: 'Rabbit', departmentId: dept('Financial Services').id } }),
    prisma.employee.upsert({ where: { id: 24 }, update: {}, create: { firstName: 'Jesse Ed', lastName: 'Azure', departmentId: dept('Human Resources').id } }),
    prisma.employee.upsert({ where: { id: 25 }, update: {}, create: { firstName: 'Stacy', lastName: 'Da Silva', departmentId: dept('Human Resources').id } }),
    prisma.employee.upsert({ where: { id: 26 }, update: {}, create: { firstName: 'Vladimír', lastName: 'Valenta', departmentId: dept('Human Resources').id } }),
    prisma.employee.upsert({ where: { id: 27 }, update: {}, create: { firstName: 'Samone', lastName: 'Sayeses-Whitney', departmentId: dept('Human Resources').id } }),
    prisma.employee.upsert({ where: { id: 28 }, update: {}, create: { firstName: 'Paul', lastName: 'Coeur', departmentId: dept('Human Resources').id } }),
    prisma.employee.upsert({ where: { id: 29 }, update: {}, create: { firstName: 'Graham', lastName: 'Greene', departmentId: dept('Information Technology').id } }),
    prisma.employee.upsert({ where: { id: 30 }, update: {}, create: { firstName: 'Sandika', lastName: 'Evergreen', departmentId: dept('Information Technology').id } }),
    prisma.employee.upsert({ where: { id: 31 }, update: {}, create: { firstName: 'Jennifer', lastName: 'Rodriguez', departmentId: dept('Information Technology').id } }),
    prisma.employee.upsert({ where: { id: 32 }, update: {}, create: { firstName: 'Aiyana', lastName: 'Littlebear', departmentId: dept('IT Technician').id } }),
    prisma.employee.upsert({ where: { id: 33 }, update: {}, create: { firstName: 'Inara', lastName: 'Thunderbird', departmentId: dept('IT Technician').id } }),
    prisma.employee.upsert({ where: { id: 34 }, update: {}, create: { firstName: 'Kaya', lastName: 'Runningbrook', departmentId: dept('IT Technician').id } }),
    prisma.employee.upsert({ where: { id: 35 }, update: {}, create: { firstName: 'Elara', lastName: 'Firehawk', departmentId: dept('IT Technician').id } }),
    prisma.employee.upsert({ where: { id: 36 }, update: {}, create: { firstName: 'Siona', lastName: 'Moonflower', departmentId: dept('IT Technician').id } }),
    prisma.employee.upsert({ where: { id: 37 }, update: {}, create: { firstName: 'Kaiyu', lastName: 'Greywolf', departmentId: dept('IT Technician').id } }),
    prisma.employee.upsert({ where: { id: 38 }, update: {}, create: { firstName: 'Ayawamat', lastName: 'Nightwind', departmentId: dept('IT Technician').id } }),
    prisma.employee.upsert({ where: { id: 39 }, update: {}, create: { firstName: 'Tala', lastName: 'Braveheart', departmentId: dept('IT Technician').id } }),
    prisma.employee.upsert({ where: { id: 40 }, update: {}, create: { firstName: 'Iniko', lastName: 'Stonebear', departmentId: dept('IT Technician').id } }),
    prisma.employee.upsert({ where: { id: 41 }, update: {}, create: { firstName: 'Onatah', lastName: 'Redhawk', departmentId: dept('IT Technician').id } }),
  ]);

  // Create roles (these are leadership people, not in employee list — create them without a department)
  // First create a Leadership department for them
  const leadershipDept = await prisma.department.upsert({
    where: { name: 'Leadership' },
    update: {},
    create: { name: 'Leadership' }
  });

  const roleData = [
    { firstName: 'Jo-Anne', lastName: 'Sinclair', title: 'CEO/Chair of Board' },
    { firstName: 'Jackson', lastName: 'Smith', title: 'COO/VP Operations' },
    { firstName: 'Susan', lastName: 'Thomas', title: 'CFO/VP Administration' },
    { firstName: 'Richa', lastName: 'Kaur', title: 'VP Client Services' },
    { firstName: 'Josee', lastName: 'Benjamin', title: 'CIO' },
    { firstName: 'Vincent', lastName: 'Grey', title: 'VP Sales & Marketing' },
    { firstName: 'Rupa', lastName: 'Kharki', title: 'Director Financial and Audit Svcs' },
    { firstName: 'Xun', lastName: 'Kuang', title: 'Director Human Resources' },
    { firstName: 'Stien', lastName: 'Pedersen', title: 'Director Legal Services/General Counsel' },
    { firstName: 'Sandra', lastName: 'Bear', title: 'Director Information Technology' },
    { firstName: 'Gus', lastName: 'Blue', title: 'Director Information Security and CISSO' },
    { firstName: 'Sam', lastName: 'Kong', title: 'Director Accounting' },
    { firstName: 'Valentine', lastName: 'Smith', title: 'Director Physical Security' },
    { firstName: 'Mariya', lastName: 'Kaperski', title: 'Director Facilities' },
    { firstName: 'Abd al-Hamid', lastName: 'Alami', title: 'Manager, Business Continuity and Disaster Recovery' },
    { firstName: 'Victoria', lastName: 'Gray', title: 'Manager, Internal Audit' },
    { firstName: 'Cheryl', lastName: 'Guru', title: 'Chief Architect' },
    { firstName: 'Jean', lastName: 'Ngoy', title: 'Manager, Security Architecture' },
    { firstName: 'Kris', lastName: 'Gold', title: 'Solution Architect, Online Banking' },
    { firstName: 'Isaac', lastName: 'Smith', title: 'Manager, Application Solutions' },
    { firstName: 'Payton', lastName: 'Frost', title: 'Lead Developer, Online Banking' },
    { firstName: 'Samantha', lastName: 'Nettle', title: 'Manager, Operational Risk' },
    { firstName: 'Yolanda', lastName: 'Ferreira', title: 'Manager, Vendor Relations' },
    { firstName: 'Samir', lastName: 'Hassan', title: 'Manager, Purchasing' },
    { firstName: 'Yuna', lastName: 'Aikawa', title: 'Manager, Communications' },
    { firstName: 'Jonathan', lastName: 'Carberry', title: 'Manager Customer Experience and Community Eng.' },
    { firstName: 'Roland', lastName: 'Wei', title: 'Manager of Sales' },
    { firstName: 'Pran', lastName: 'Singh', title: 'Manager, Marketing' },
    { firstName: 'Linda', lastName: 'Analyst', title: 'Business Analyst, Online Banking' },
    { firstName: 'Esra', lastName: 'Sedge', title: 'Manager, Contract Management' },
    { firstName: 'Pranee', lastName: 'Tan', title: 'Manager, Compliance Management' },
    { firstName: 'Karmen', lastName: 'Spruce', title: 'Manager IT End User Service Desk' },
    { firstName: 'Haydar', lastName: 'Katirci', title: 'Manager IT End User Computing' },
    { firstName: 'Jill', lastName: 'Harkness', title: 'Manager IT Telecom and Infrastructure' },
    { firstName: 'Tim', lastName: 'Morrison', title: 'Manager, Data Center and Hosting Services' },
    { firstName: 'Aleksandr', lastName: 'Milosevic', title: 'Manager of IT Risk Management' },
    { firstName: 'Jim', lastName: 'Wingnut', title: 'Manager IT, Project Management Office' },
  ];

  for (const r of roleData) {
    const emp = await prisma.employee.upsert({
      where: { id: employees.length + roleData.indexOf(r) + 1 },
      update: {},
      create: { firstName: r.firstName, lastName: r.lastName, departmentId: leadershipDept.id }
    });
    await prisma.role.upsert({
      where: { employeeId: emp.id },
      update: {},
      create: { title: r.title, employeeId: emp.id }
    });
  }

  console.log('Database seeded successfully!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());