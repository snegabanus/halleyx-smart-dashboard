import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import { useState } from "react";
import DashboardConfig from "./pages/DashboardConfig";

function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <div className="app-layout">
      {/* ✅ SIDEBAR NAVIGATION */}
      <nav className="sidebar">
        <div className="sidebar-header">
          <h2>NetPulse</h2>
        </div>
        <ul className="nav-links">
          <li>
            <button 
              className={`nav-btn ${page === "dashboard" ? "active" : ""}`} 
              onClick={() => setPage("dashboard")}
            >
              📊 Dashboard
            </button>
          </li>
          <li>
            <button 
              className={`nav-btn ${page === "orders" ? "active" : ""}`} 
              onClick={() => setPage("orders")}
            >
              🛒 Orders
            </button>
          </li>
          <li>
            <button 
              className={`nav-btn ${page === "config" ? "active" : ""}`} 
              onClick={() => setPage("config")}
            >
              ⚙️ Configure Dashboard
            </button>
          </li>
        </ul>
      </nav>

      {/* ✅ MAIN CONTENT */}
      <main className="main-content">
        {page === "dashboard" && <Dashboard />}
        {page === "orders" && <Orders />}
        {page === "config" && <DashboardConfig />}
      </main>
    </div>
  );
}

export default App;