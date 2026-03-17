import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#333', padding: '10px' }}>
      <Link to="/employees" style={{ color: 'white', marginRight: '15px' }}>Employees</Link>
      <Link to="/organization" style={{ color: 'white' }}>Organization</Link>
    </nav>
  );
}

export default Navbar;

