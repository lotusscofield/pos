var allItems = loadAllItems();

function CartItem(barcode, count) {
  this.barcode = barcode;
  this.count = count;
  this.attachProp();
}

CartItem.prototype.attachProp = function() {
  allItems;
  if (Item.barcode === this.barcode) {
    this._name = Item.name; //优化为了不暴露属性，使得在外调用时不能随便赋值
    this._unit = Item.unit;
    this._price = Item.price;
  }
};

CartItem.prototype.calculateSubtotal = function(price, count, type) {

};

CartItem.prototype.getItemInfo = function() {
  if (this._name) {
    return this._name;
  }
  this.barcode;
  allItems;
  this._name = name;
  return this._name;
};

CartItem.prototype.getPromotionCount = function() {
  this.barcode;
  this.count;
};



CartItem.prototype.getSubTotal = function() {

}
