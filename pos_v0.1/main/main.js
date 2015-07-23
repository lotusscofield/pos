var inputs = [
    {
      barcode: 'ITEM000000',
      name: '可口可乐',
      unit: '瓶',
      price: 3.00

    },
    {
      barcode: 'ITEM000000',
      name: '可口可乐',
      unit: '瓶',
      price: 3.00
    },
    {
      barcode: 'ITEM000000',
      name: '可口可乐',
      unit: '瓶',
      price: 3.00
    },
    {
      barcode: 'ITEM000000',
      name: '可口可乐',
      unit: '瓶',
      price: 3.00
    },
    {
      barcode: 'ITEM000000',
      name: '可口可乐',
      unit: '瓶',
      price: 3.00
    },
    {
      barcode: 'ITEM000001',
      name: '雪碧',
      unit: '瓶',
      price: 3.00
    },
    {
      barcode: 'ITEM000001',
      name: '雪碧',
      unit: '瓶',
      price: 3.00
    },
    {
      barcode: 'ITEM000004',
      name: '电池',
      unit: '个',
      price: 2.00
    }
  ];

function printReceipt(inputs) {

}

function count_same_elements(collection) {
  var result = [];
  var temp = objectify(collection);
  temp.forEach(function(item) {
    var exist_item = result.filter(function(val){
      return(item.key === val.key);
    });

    if(exist_item.length === 0) {
      result.push(item);
    } else {
      exist_item[0].count += item.count;
    }
  }) ;
  return result;
}

function objectify(collection) {
  var temp = collection.map(function(val){
    return {
      barcode: 'ITEM000000',
      name: '可口可乐',
      unit: '瓶',
      price: 3.00
    } ;
  });
}
