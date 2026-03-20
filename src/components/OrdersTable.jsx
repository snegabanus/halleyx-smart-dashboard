import { useEffect, useState } from "react";

function OrdersTable() {

  const [orders, setOrders] = useState([]);

  // ✅ LOAD ORDERS FROM LOCAL STORAGE
  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders"));
    if (savedOrders) {
      setOrders(savedOrders);
    }
  }, []);

  return (
    <div className="section">
      <h2>Recent Orders</h2>

      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Product</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          {orders.length > 0 ? (
            orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.firstName} {order.lastName}</td>
                <td>{order.product}</td>
                <td>${order.total}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                No orders available
              </td>
            </tr>
          )}
        </tbody>
      </table>

    </div>
  );
}

export default OrdersTable;