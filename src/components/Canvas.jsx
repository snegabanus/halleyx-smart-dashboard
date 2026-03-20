import { useDrop } from "react-dnd";
import { useState } from "react";
import BarChartCard from "./BarChartCard";
import LineChartCard from "./LineChartCard";
import PieChartCard from "./PieChartCard";
import OrdersTable from "./OrdersTable";

function Canvas() {

  const [widgets, setWidgets] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "WIDGET",
    drop: (item) => {
      console.log("Dropped:", item.type); // ✅ debug
      setWidgets((prev) => [...prev, item.type]);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      style={{
        minHeight: "300px",
        border: "2px dashed #38bdf8",
        padding: "20px",
        borderRadius: "10px",
        background: isOver ? "rgba(14, 165, 233, 0.2)" : "#0f172a",
        transition: "0.3s",
      }}
    >
      <h3 style={{ marginBottom: "20px" }}>Dashboard Canvas</h3>

      {/* ✅ EMPTY MESSAGE */}
      {widgets.length === 0 && (
        <p style={{ color: "#94a3b8" }}>
          Drag and drop widgets here 👇
        </p>
      )}

      {/* ✅ RENDER WIDGETS */}
      {widgets.map((w, index) => {

        // 📊 BAR CHART
        if (w === "Bar Chart") {
          return <BarChartCard key={index} />;
        }

        // 📈 LINE CHART
        if (w === "Line Chart") {
          return <LineChartCard key={index} />;
        }

        // 🥧 PIE CHART
        if (w === "Pie Chart") {
          return <PieChartCard key={index} />;
        }

        // 📋 TABLE
        if (w === "Table") {
          return (
            <div key={index} style={{ marginTop: "20px", background: "#1e293b", padding: "20px", borderRadius: "10px" }}>
              <h3 style={{ color: "#38bdf8", marginBottom: "15px" }}>Recent Orders (Table)</h3>
              <OrdersTable />
            </div>
          );
        }

        // 🔢 KPI CARD
        if (w === "KPI Card") {
          return (
            <div
              key={index}
              style={{
                background: "linear-gradient(135deg, #1e293b, #0f172a)",
                padding: "20px",
                borderRadius: "10px",
                marginTop: "20px",
                border: "1px solid #334155",
                boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
              }}
            >
              <h3 style={{ color: "#94a3b8", fontSize: "16px", marginBottom: "10px" }}>Total Revenue</h3>
              <p style={{ color: "#f8fafc", fontSize: "32px", fontWeight: "bold", margin: 0 }}>$23,540</p>
            </div>
          );
        }

        // ❌ OTHER WIDGETS
        return (
          <div
            key={index}
            style={{
              background: "#1e293b",
              padding: "15px",
              borderRadius: "10px",
              marginTop: "20px",
              border: "1px solid #334155",
              color: "#e2e8f0"
            }}
          >
            {w} (Coming Soon)
          </div>
        );

      })}
    </div>
  );
}

export default Canvas;