import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Main from './components/main';
import Organization from './components/Organization';
import { employeeService } from './services/employeeService';
import type { Department } from './data';

function App() {
  const [departments, setDepartments] = useState<Department[]>([]);

  // Load initial data from service on mount
  useEffect(() => {
    const deptData = employeeService.getDepartments();
    setDepartments(deptData);
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <header>
          <h1>Pixell River Employee Directory</h1>
          <p>Welcome to our employee directory.</p>
        </header>
        
        <nav style={{ backgroundColor: '#333', padding: '10px' }}>
          <Link to="/employees" style={{ color: 'white', marginRight: '15px' }}>Employees</Link>
          <Link to="/organization" style={{ color: 'white' }}>Organization</Link>
        </nav>
        
        <main>
          <Routes>
            <Route path="/employees" element={<Main departments={departments} setDepartments={setDepartments} />} />
            <Route path="/organization" element={<Organization />} />
            <Route path="/" element={<Main departments={departments} setDepartments={setDepartments} />} />
          </Routes>
        </main>

        <footer>
          <p>Copyright Pixell River Financial {new Date().getFullYear()}.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;