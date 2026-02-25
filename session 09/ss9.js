let orders = ["Đơn hàng A", "Đơn hàng B", "Đơn hàng C", "Đơn hàng D", "Đơn hàng E"];
let revenues = [1500, 2800, 1200, -500, 3200];
let orderReports = [];

for (let i = 0; i < orders.length; i++) {
    let report = `${orders[i]} mang về ${revenues[i]} USD`;
    orderReports.push(report);
}

console.log(orderReports);

