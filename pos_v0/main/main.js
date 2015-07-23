function printReceipt(inputs) {
  var total_price = count_total(inputs);

  var content = '' + '***<没钱赚商店>收据***\n';

  inputs.forEach(function(val){
    content += ('名称：' + val.name + '，数量：' + val.count + val.unit + '，单价：' +
    val.price.toFixed(2)  + '(元)，小计：' + (val.count*val.price).toFixed(2)  + '(元)\n');
  });

  content += ('----------------------\n' +
              '总计：' + total_price.toFixed(2) + '(元)\n' +
              '**********************');

  console.log(content);
}

function count_total(inputs) {
  var total = 0;

  inputs.forEach(function(val){
    total += val.price*val.count;
  });

  return total;
}
