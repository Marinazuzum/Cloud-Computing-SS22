const mockData = require('./MOCK_DATA.json');

var productId = "3";
let obj = mockData.find(o => o.product_id == productId);
console.log(obj.product_price);
