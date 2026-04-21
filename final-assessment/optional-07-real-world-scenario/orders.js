// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}


// Variabel yang menampung data orders (array, dimutasi langsung agar referensi tetap valid)
const orders = [];

// Menambahkan pesanan baru ke dalam orders
function addOrder(customerName, items) {
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
  const order = {
    id: generateUniqueId(),
    customerName,
    items,
    totalPrice,
    status: 'Menunggu',
  };
  orders.push(order);
}

// Memperbarui status pesanan berdasarkan orderId
function updateOrderStatus(orderId, status) {
  const order = orders.find((o) => o.id === orderId);
  if (order) {
    order.status = status;
  }
}

// Menghitung total pendapatan dari semua pesanan berstatus 'Selesai'
function calculateTotalRevenue() {
  return orders
    .filter((o) => o.status === 'Selesai')
    .reduce((sum, o) => sum + o.totalPrice, 0);
}

// Menghapus pesanan berdasarkan id
function deleteOrder(id) {
  const index = orders.findIndex((o) => o.id === id);
  if (index !== -1) {
    orders.splice(index, 1);
  }
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
