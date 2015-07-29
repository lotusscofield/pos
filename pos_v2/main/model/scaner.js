var allItems = loadAllItems();
var promotionInfo = loadPromotions();

function Scaner(inputs) {}

Scaner.prototype.scan = function (inputs) {
  var collection = [];
  inputs.forEach(function(val) {
    if (val.indexOf('-') > -1) {
      count = parseInt(val.slice(BARCODE_CUT_OFF_POINT + 1));
    }
    else {count = 1;}

    collection.push({
      barcode: val.slice(0, BARCODE_CUT_OFF_POINT = 10),
      count: count
    });
  });
};

Scaner.prototype.cumulate = function (collection) {
  var result = [];
  collection.forEach(function(item) {
    var existItem = result.filter(function(val) {
      return val.barcode === item.barcode;
    });

    if (existItem.length === 0) {
      result.push(item);
    } else {
      existItem[0].count += 1;
    }
  });

  return collection;
};
