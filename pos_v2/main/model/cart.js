function  Cart() {
  this.cart = new CartItem(barcode, count);
}

Cart.prototype.addItem = function (collection) {//collection = [{barcode:x, count:y},  ...]
  var itemBarcode = this.barcode;
  var itemCount = this.count;
  var newCart = collection.forEach(function(val) {
    if (itemBarcode === val.barcode) {
      itemCount += val.count;
    }
  });

  this.cart = newCart
  return this.cart;
};

Cart.prototype.getPromotedCount = function() {
  this.cart.getPromotedCount();
};

Cart.prototype.calculateSubtotal = function() {
  this.cart.calculateSubtotal();
};

CartItem.prototype.getTotal = function() {
  this.cart.getTotal();
};
