import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 3000 },
  { month: "Mar", revenue: 5000 },
  { month: "Apr", revenue: 4780 },
  { month: "May", revenue: 5890 },
  { month: "Jun", revenue: 6390 }
];

function RevenueChart() {
  return (
    <div style={{ marginTop: "40px" }}>
      <h2>Revenue Trend</h2>

      <LineChart width={700} height={300} data={data}>
        <CartesianGrid stroke="#444" />
        <XAxis dataKey="month" stroke="#fff"/>
        <YAxis stroke="#fff"/>
        <Tooltip />
        <Line type="monotone" dataKey="revenue" stroke="#38bdf8" strokeWidth={3}/>
      </LineChart>

    </div>
  );
}

export default RevenueChart;