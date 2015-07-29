BARCODE_CUT_OFF_POINT = 10;
var allItems = loadAllItems();
var promotionInfo = loadPromotions();

function Scaner() {}


Scaner.prototype.scan = function (inputs,cart) {
  var objectItem = {};
  inputs.forEach(function(val) {
    objectItem = {
      barcode:val.split('-')[0],
      count:parseInt(val.split('-')[1] || 1)
    };
    cart.addItem(objectItem);
  });
};
