var allItems = loadAllItems();
var PromotionInfo = loadPromotions();

function CartItem(barcode, count) {
  this.barcode = barcode;
  this.count = count;
  this.getName(barcode);
  this.getPrice(barcode);
  this.getUnit(barcode);
}

CartItem.prototype.getName = function() {
  var barcode = this.barcode;
  var Item = allItems.filter(function(item) {
    return item.barcode === barcode;
  });

  this._name = Item[0].name;
};

CartItem.prototype.getPrice = function(barcode) {
  var Item = allItems.filter(function(item) {
    return item.barcode === barcode;
  });

  this._price = Item[0].price;
};

CartItem.prototype.getUnit = function(barcode) {
  var Item = allItems.filter(function(item) {
    return item.barcode === barcode;
  });

  this._unit = Item[0].unit;
};

CartItem.prototype.countPromotedItem = function() {
  var barcode = this.barcode;
  var count = this.count;
  var promotedItem = [];

  promotedItem = promotionInfo[0][barcodes].filter(function(val) {
    return barcode === val;
  });

  if(promotedItem[0] !== 0) {
    this.count = count - parseInt(count / 3);
    this.savedCount = parseInt(count / 3);
  }
};

CartItem.prototype.calculateSubtotal = function() {
  this.countPromotedItem();
  var subTotal = this._price * this.count;
  return subTotal;
};
