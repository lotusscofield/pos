function printReceipt(inputs) {

  inputs = [
      {
        barcode: 'ITEM000000',
        name: '可口可乐',
        unit: '瓶',
        price: 3.00,
        count: 5
      },
      {
        barcode: 'ITEM000001',
        name: '雪碧',
        unit: '瓶',
        price: 3.00,
        count: 2
      },
      {
        barcode: 'ITEM000004',
        name: '电池',
        unit: '个',
        price: 2.00,
        count: 1
      }
    ];

  var content = [];

  inputs.forEach(function(val){
    content.push('名称：' + val.name + '，数量：' + val.count + val.unit + '，单价：' + val.price.toFixed(2)  + '(元)，小计：' + (val.count*val.price).toFixed(2)  + '(元)' + '\n');
  });

  var sum = 0;
  inputs.forEach(function(val){
    sum += val.price*val.count;
  });

  var receipt = '***<没钱赚商店>收据***' + '\n' + content + '----------------------' + '\n' + '总计：' + sum.toFixed(2) + '(元)' + '\n' + '**********************';

  console.log(receipt);

}
