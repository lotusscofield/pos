function Scaner() {}

Scaner.prototype.scan = function (inputs,cart) {
  inputs.forEach(function(val) {
    var objectItem = {};
    objectItem = {
      barcode:val.split('-')[0],
      count:parseInt(val.split('-')[1] || 1)
    };
    cart.addItem(objectItem.barcode, objectItem.count);
  });
};
