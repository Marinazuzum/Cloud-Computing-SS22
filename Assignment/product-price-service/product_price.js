module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');

    //To DO: Add the patterns and their corresponding functions
    this.add('role:product,cmd:getProductPrice', productPrice);

    //To DO: add the pattern functions and describe the logic inside the function
    function productPrice(args, done) {
        var productId = args.productId;
        let obj = mockData.find(o => o.product_id == productId);
        done(null, { result: obj.product_price });
    }

}