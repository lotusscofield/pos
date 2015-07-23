function printReceipt(inputs) {
  printReceipt(result);
  count_each_product(inputs);
}

function count_each_product(obj) {
  var result = [];

  obj.forEach(function(item) {
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

function printReceipt(result) {
  var total_price = 0;
  var content = '' + '***<没钱赚商店>收据***\n';

  result.forEach(function(val){
    total_price += val.price*val.count;
    content +=
      '名称：' + val.name + ',' +
      '数量：' + val.count + val.unit + ',' +
      '单价：' +val.price.toFixed(2)  + '(元)，' +
      '小计：' + (val.count*val.price).toFixed(2)  + '(元)\n';
  });

  content += ('----------------------\n' +
              '总计：' + total_price.toFixed(2) + '(元)\n' +
              '**********************');
  console.log(content);
}
