import { useState } from 'react';
import './App.css';
import Main from './components/main';  
import { initialDepartments } from './data';

function App() {
  const [departments, setDepartments] = useState(initialDepartments);

  return (
    <div className="app">
      <header>
        <h1>Pixell River Employee Directory</h1>
        <p>Welcome to our employee directory.</p>
      </header>

      <main>
        <Main departments={departments} setDepartments={setDepartments} />
      </main>

      <footer>
        <p>Copyright Pixell River Financial {new Date().getFullYear()}.</p>
      </footer>
    </div>
  );
}

export default App;