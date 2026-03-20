import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data = [
    { name: "Jan", sales: 4000 },
    { name: "Feb", sales: 3000 },
    { name: "Mar", sales: 5000 },
    { name: "Apr", sales: 4500 },
    { name: "May", sales: 6000 },
];

function BarChartCard() {
    return (
        <div style={{ marginTop: "20px", background: "#1e293b", padding: "20px", borderRadius: "10px", width: "100%", overflowX: "auto" }}>
            <h3 style={{ color: "#38bdf8", marginBottom: "20px" }}>Monthly Sales (Bar)</h3>
            <BarChart width={600} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="name" stroke="#cbd5e1" />
                <YAxis stroke="#cbd5e1" />
                <Tooltip
                    wrapperStyle={{ outline: "none" }}
                    contentStyle={{ backgroundColor: "#0f172a", border: "1px solid #334155", color: "#fff", borderRadius: "8px" }}
                />
                <Bar dataKey="sales" fill="#38bdf8" radius={[4, 4, 0, 0]} />
            </BarChart>
        </div>
    );
}

export default BarChartCard;
