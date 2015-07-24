var allItems = loadAllItems();

function addInfo(inputs) {
  var temp = [], collection = [];

  inputs.forEach(function(item) {
  temp.push(allItems.filter(function(val) {
      return val.barcode === item;
    }));
  });

  collection = temp.map(function(val) {
    return val[0];
  });

  return collection;
}

function countProuduct(collection) {
  var result = [];
  collection.forEach(function(item) {
    var exist_item = result.filter(function(val) {
      return val.name === item.name;
    });

    if (exist_item.length === 0) {
      item.count = 1;
      result.push(item);
    }
    else {exist_item[0].count += 1;}
  });

  return result;
}

function print(collection) {
  var total_price = 0;
  var content = '' + '***<没钱赚商店>收据***\n';

  collection.forEach(function(val) {
    total_price += val.price * val.count;
    content +=
              '名称：' + val.name + '，' +
              '数量：' + val.count + val.unit + '，' +
              '单价：' + val.price.toFixed(2) + '(元)，' +
              '小计：' + (val.count * val.price).toFixed(2) + '(元)\n';
  });

  content += ('----------------------\n' +
              '总计：' + total_price.toFixed(2) + '(元)\n' +
              '**********************');
  console.log(content);
}

function printReceipt(inputs) {
  console.log(print(countProuduct(addInfo(inputs))));
}
