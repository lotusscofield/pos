
function printReceipt(inputs) {

  var scaner = new Scaner();
  var cart = new Cart();
  scaner.scan(inputs, cart);
  var pos = new Pos();
  pos.print(cart);
  
}
