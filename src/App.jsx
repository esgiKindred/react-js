import logo from './logo.svg';
import './App.css';

import { Link,Outlet } from "react-router-dom";



 function App() {
  return (
      <div>
          <h1>Kindred</h1>
          <nav>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/campaign">Campaign</Link>
              <Link to="/mission">Mission</Link>
              <Link to="/users">Users</Link>

          </nav>
          <Outlet />
      </div>

  );
}

export default App;
