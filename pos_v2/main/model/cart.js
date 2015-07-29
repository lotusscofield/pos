function  Cart() {
  this.cartItems = [];
}

Cart.prototype.addItem = function (cartItem) {
  var result = this.cartItems;
  result.forEach(function(item) {
    if(item.barcode === cartItem.barcode) {
      item.count += cartItem.count;
    } else {
      var cartitem = new CartItem(cartItem.barcode,cartItem.count);
      result.push(cartitem);
    }
  });
  this.cartItems = result;
};

Cart.prototype.getTotal = function() {
  var total = 0;
  this.cartItems.forEach(function(item) {
    total += item.calculateSubtotal();
  });

  return total;
};
