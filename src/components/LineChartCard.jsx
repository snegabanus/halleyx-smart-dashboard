import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data = [
    { month: "Jan", revenue: 4000 },
    { month: "Feb", revenue: 3000 },
    { month: "Mar", revenue: 5000 },
    { month: "Apr", revenue: 4780 },
    { month: "May", revenue: 5890 },
    { month: "Jun", revenue: 6390 }
];

function LineChartCard() {
    return (
        <div style={{ marginTop: "20px", background: "#1e293b", padding: "20px", borderRadius: "10px", width: "100%", overflowX: "auto" }}>
            <h3 style={{ color: "#38bdf8", marginBottom: "20px" }}>Revenue Trend (Line)</h3>
            <LineChart width={600} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="month" stroke="#cbd5e1" />
                <YAxis stroke="#cbd5e1" />
                <Tooltip
                    wrapperStyle={{ outline: "none" }}
                    contentStyle={{ backgroundColor: "#0f172a", border: "1px solid #334155", color: "#fff", borderRadius: "8px" }}
                />
                <Line type="monotone" dataKey="revenue" stroke="#38bdf8" strokeWidth={4} />
            </LineChart>
        </div>
    );
}

export default LineChartCard;
