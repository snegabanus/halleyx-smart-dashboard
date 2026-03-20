import { useState, useEffect } from "react";

function Orders() {

  const [orders, setOrders] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    product: "",
    quantity: 1,
    price: ""
  });

  // ✅ LOAD FROM LOCAL STORAGE
  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders"));
    if (savedOrders) {
      setOrders(savedOrders);
    }
  }, []);

  // ✅ HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    const newOrder = {
      id: Date.now(), // ✅ better unique ID
      ...formData,
      quantity: Number(formData.quantity),
      price: Number(formData.price),
      total: Number(formData.quantity) * Number(formData.price)
    };

    const updatedOrders = [...orders, newOrder];

    setOrders(updatedOrders);

    // ✅ SAVE TO LOCAL STORAGE
    localStorage.setItem("orders", JSON.stringify(updatedOrders));

    // ✅ RESET FORM
    setFormData({
      firstName: "",
      lastName: "",
      product: "",
      quantity: 1,
      price: ""
    });

    setShowForm(false);
  };

  return (
    <div className="container">

      <h1>Customer Orders</h1>

      <button onClick={() => setShowForm(true)}>
        Create Order
      </button>

      {/* ✅ FORM */}
      {showForm && (
        <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>

          <input
            placeholder="First Name"
            value={formData.firstName}
            required
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />

          <input
            placeholder="Last Name"
            value={formData.lastName}
            required
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />

          <select
            value={formData.product}
            required
            onChange={(e) =>
              setFormData({ ...formData, product: e.target.value })
            }
          >
            <option value="">Choose Product</option>
            <option>Fiber Internet 300 Mbps</option>
            <option>5G Unlimited Mobile Plan</option>
            <option>Fiber Internet 1 Gbps</option>
          </select>

          <input
            type="number"
            placeholder="Quantity"
            min="1"
            value={formData.quantity}
            onChange={(e) =>
              setFormData({ ...formData, quantity: e.target.value })
            }
          />

          <input
            type="number"
            placeholder="Unit Price"
            value={formData.price}
            required
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
          />

          <button type="submit">Submit</button>

        </form>
      )}

      {/* ✅ TABLE */}
      <table style={{ marginTop: "30px", width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Product</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.firstName} {order.lastName}</td>
              <td>{order.product}</td>
              <td>${order.total}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ✅ CLEAR BUTTON (OPTIONAL 🔥) */}
      <button
        style={{ marginTop: "20px" }}
        onClick={() => {
          localStorage.removeItem("orders");
          setOrders([]);
        }}
      >
        Clear Orders
      </button>

    </div>
  );
}

export default Orders;