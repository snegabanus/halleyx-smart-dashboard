export function getLiveMetrics() {
  return {
    revenue: "$" + (12000 + Math.floor(Math.random() * 2000)),
    orders: 1200 + Math.floor(Math.random() * 100),
    customers: 540 + Math.floor(Math.random() * 50),
    growth: "+" + (15 + Math.floor(Math.random() * 5)) + "%"
  };
}