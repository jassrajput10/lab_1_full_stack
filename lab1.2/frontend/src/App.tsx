import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignedIn } from '@clerk/clerk-react';
import './App.css';
import Main from './components/Main';
import Organization from './components/Organization';
import Navbar from './components/Navbar';
import { employeeService } from './services/employeeService';
import type { Department } from './data';

function App() {
  const [departments, setDepartments] = useState<Department[]>([]);

  useEffect(() => {
    const loadDepartments = async () => {
      const deptData = await employeeService.getDepartments();
      setDepartments(deptData);
    };
    loadDepartments();
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <header>
          <h1>Pixell River Employee Directory</h1>
          <p>Welcome to our employee directory.</p>
        </header>

        <Navbar />

        <main>
          <Routes>
            <Route path="/employees" element={<Main departments={departments} setDepartments={setDepartments} />} />
            <Route path="/organization" element={
              <SignedIn>
                <Organization />
              </SignedIn>
            } />
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