var allItems = loadAllItems();
var PromotionInfo = loadPromotions();

function CartItem(barcode, count) {
  this.barcode = barcode;
  this.count = count;
  this.getInfo(name);
  this.getInfo(price);
  this.getInfo(unit);
}

CartItem.prototype.getInfo = function(val) {//val是属性的名称：name,price,unit
  var itemBarcode = this.barcode;
  if (this._val) {
    return this._val;
  }
  else {
    var Item = allItems.filter(function(item) {
      return item.barcode === itemBarcode;
    });

    this._val = Item.val[0];
    return this._val;
  }
};

CartItem.prototype.getPromotedCount = function() {
  var itemCount = this.count;
  var itemBarcode = this.barcode;
  promotionInfo[barcodes].filter(function(val) {
    return itemBarcode === val.barcode;
  }).forEach(function(item) {
       itemCount = itemCount - parseInt(itemCount / 3);
     });

  return itemCount;
};

CartItem.prototype.calculateSubtotal = function() {
  var subTotal = 0;
  getPromotedCount();
  subTotal = this.getInfo(price) * this.count;

  return subTotal;
};

CartItem.prototype.getTotal = function() {
  var total = 0;
  calculateSubtotal();
  total += subTotal;
};
