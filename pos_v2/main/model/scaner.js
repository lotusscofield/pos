var allItems = loadAllItems();
var promotionInfo = loadPromotions();

function Scaner(inputs) {
  this.cumulate(inputs);
}

Scaner.prototype.cumulate = function (inputs) {
  var collection = [];
  inputs.map(function(val) {
    if (val.indexOf('-') > -1) {
      count = parseInt(val.slice(BARCODE_CUT_OFF_POINT + 1));
    }
    else {count = 1;}

    collection.push({
      barcode: val.slice(0, BARCODE_CUT_OFF_POINT = 10),
      count: count
  });

  allItems.barcode.forEach(function(item) {
    collection.forEach(function(val) {
      if(item.barcode === val.barcode) {
        return {
          barcode : val.barcode,
          count : count += val.count
        };
    });
  });

  return collection;
};
