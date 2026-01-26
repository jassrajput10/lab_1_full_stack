import EmployeeList from "./components/employeeList";

function App() {
  return (
    <div className="app">
      <header>
        <h1>Pixell River Employee Directory</h1>
        <p>Welcome to our employee directory.</p>
      </header>

      <main>
        <EmployeeList />  
      </main>

      <footer>
        <p>Copyright Pixell River Financial {new Date().getFullYear()}.</p>
      </footer>
    </div>
  );
}

export default App;