function  Cart() {
  this.cartIItem = new CartItem(barcode, count);
}

Cart.prototype.addItem = function (collection) {//collection = [{barcode:x, count:y},  ...]
  var itemBarcode = this.barcode;
  var itemCount = this.count;
  var newCart = collection.forEach(function(val) {
    if (itemBarcode === val.barcode) {
      itemCount += val.count;
    }
  });

  this.cartItem = newCart;
  return this.cartItem;
};

Cart.prototype.getPromotedItem = function() {
  this.cartItem.getPromotedItem();
};

Cart.prototype.calculateSubtotal = function() {
  this.cartItem.calculateSubtotal();
};

CartItem.prototype.getTotal = function() {
  this.cartItem.getTotal();
};
