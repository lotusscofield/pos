function  Cart() {
  this.cartItems = [];
}

Cart.prototype.addItem = function (barcode, count) {
  var result = this.cartItems;
  var Item = result.filter(function(item) {
    return item.barcode === barcode;
  });
    if(Item.length === 0) {
      cartitem = new CartItem(barcode, count);
      result.push(cartitem);
    }
     else {
       Item[0].count += count;
    }

  this.cartItems = result;
};

Cart.prototype.getTotal = function() {
  var total = 0;
  this.cartItems.forEach(function(item) {
    total += item.subTotal;
  });

  return total;
};
