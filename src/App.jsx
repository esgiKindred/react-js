import logo from './logo.svg';
import './App.css';

import { Link,Outlet } from "react-router-dom";



 function App() {
  return (
      <div>
          <div className="d-flex align-items-center w-100 App-Header">
              <span className="icon">
                <i className="bi bi-list"></i>
            </span>
              <h1 className="App-Logo">Kindred</h1>
          </div>

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
