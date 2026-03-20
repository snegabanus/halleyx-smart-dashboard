import DraggableWidget from "../components/DraggableWidget";
import Canvas from "../components/Canvas";

function DashboardConfig() {

  return (
    <div style={{ padding: "30px" }}>

      <h1>Dashboard Configuration</h1>

      <h3>Available Widgets</h3>

      <div style={{ display: "flex" }}>

        <DraggableWidget type="Bar Chart" />
        <DraggableWidget type="Line Chart" />
        <DraggableWidget type="Pie Chart" />
        <DraggableWidget type="Table" />
        <DraggableWidget type="KPI Card" />

      </div>

      <Canvas />

    </div>
  );
}

export default DashboardConfig;