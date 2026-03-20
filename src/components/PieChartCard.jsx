import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
    { name: "Fiber 1Gbps", value: 40 },
    { name: "Mobile 5G", value: 30 },
    { name: "TV Bundle", value: 20 },
    { name: "Basic Internet", value: 10 },
];

const COLORS = ["#0ea5e9", "#8b5cf6", "#14b8a6", "#f43f5e"];

function PieChartCard() {
    return (
        <div style={{ marginTop: "20px", background: "#1e293b", padding: "20px", borderRadius: "10px", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h3 style={{ color: "#38bdf8", marginBottom: "20px" }}>Product Distribution (Pie)</h3>
            <PieChart width={400} height={300}>
                <Pie
                    data={data}
                    cx={200}
                    cy={140}
                    innerRadius={70}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip
                    wrapperStyle={{ outline: "none" }}
                    contentStyle={{ backgroundColor: "#0f172a", border: "1px solid #334155", color: "#fff", borderRadius: "8px" }}
                    itemStyle={{ color: "#fff" }}
                />
                <Legend wrapperStyle={{ paddingTop: "20px" }} />
            </PieChart>
        </div>
    );
}

export default PieChartCard;
