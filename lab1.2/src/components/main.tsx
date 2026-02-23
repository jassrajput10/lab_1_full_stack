import EmployeeList from './employeeList';
import EmployeeForm from './EmployeeForm';
import type { Department } from '../data';

interface MainProps {
  departments: Department[];
  setDepartments: React.Dispatch<React.SetStateAction<Department[]>>;
}

function Main({ departments, setDepartments }: MainProps) {
  return (
    <>
      <EmployeeList departments={departments} />
      <EmployeeForm departments={departments} setDepartments={setDepartments} />
    </>
  );
}

export default Main;