
function printReceipt(inputs) {
  var cartItems = inputs.map(function(item) {
    var scaner = new Scaner();
    var cartItem = new CartItem(scaner.scan(item).barcode, scaner.scan(item).count);
    return cartItem;
  });

  var cart = new Cart();
  var temp = cartItems.map(function(cartItem) {
    return cart.addItem(cartItem);
  });

  var result = new Pos();
  result.print(cart);
}
