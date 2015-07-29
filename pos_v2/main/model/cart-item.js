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

CartItem.prototype.getPromotedItem = function() {
  var itemCount = this.count;
  var itemBarcode = this.barcode;
  var promotedItem = [];

  promotedItem = promotionInfo[barcodes].filter(function(val) {
    return itemBarcode === val.barcode;
  }).forEach(function(item) {
       item.count = item.count - parseInt(item.count / 3);
     });

  return promotedItem;
};

CartItem.prototype.calculateSubtotal = function() {
  var itemBarcode = this.barcode;
  var subTotal = this.subTotal = 0;
  getPromotedItem().forEach(function(val) {
    if (itemBarcode === val.barcode) {
      subTotal = this.getInfo(price) * this.count;
    }
  });

  if(subTotal === 0){
    subTotal = this.getInfo(price) * this.count;
  }

  return subTotal;
};

CartItem.prototype.getTotal = function() {
  var total = 0;
  calculateSubtotal();
  total += subTotal;
};
