var inputs = [
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

function printReceipt(inputs) {
  var content = [];
  inputs.forEach(function(val){
    content.push('名称：' + val.name + '，数量：' + val.count + val.unit + '，单价：' + val.price.toFixed(2)  + '(元)，小计：' + (val.count*val.price).toFixed(2)  + '(元)' + '\n');
  });

  var sum = 0;
  inputs.forEach(function(val){
    sum += val.price*val.count;
  });

  var receipt = '***<没钱赚商店>收据***' + '\n' + content + '----------------------' + '\n' + '总计：' + sum.toFixed(2) + '(元)' + '\n' + '**********************';
//由于content是由push()生成的，除第一个商品能正常输出外，后面的商品输出的“名称”前都有一个“，”不知该怎么去除。
  console.log(receipt);
}
