import RevenueChart from "../components/RevenueChart";
import OrdersTable from "../components/OrdersTable";
import Insights from "../components/Insights";
import { useState, useEffect } from "react";
import { getLiveMetrics } from "../utils/liveData";

function Dashboard({ setPage }) {

  const [metrics, setMetrics] = useState(getLiveMetrics());
  const [filter, setFilter] = useState("All Time");

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(getLiveMetrics());
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main">

      <h1>Telecom Analytics Dashboard</h1>

      {/* ✅ DATE FILTER */}
      <div style={{ marginBottom: "20px" }}>
        <label>Show data for: </label>

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>All Time</option>
          <option>Today</option>
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
          <option>Last 90 Days</option>
        </select>
      </div>



      {/* ✅ KPI CARDS */}
      <div className="cards">

        <div className="card">
          <h3>Total Revenue</h3>
          <p>{metrics.revenue}</p>
        </div>

        <div className="card">
          <h3>Total Orders</h3>
          <p>{metrics.orders}</p>
        </div>

        <div className="card">
          <h3>Customers</h3>
          <p>{metrics.customers}</p>
        </div>

        <div className="card">
          <h3>Growth</h3>
          <p>{metrics.growth}</p>
        </div>

      </div>

      {/* ✅ CHART SECTION */}
      <div className="section">
        <RevenueChart />
      </div>

      {/* ✅ TABLE SECTION */}
      <div className="section">
        <OrdersTable />
      </div>

      {/* ✅ INSIGHTS */}
      <div className="section">
        <Insights />
      </div>

    </div>
  );
}

export default Dashboard;