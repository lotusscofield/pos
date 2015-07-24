BARCODE_CUT_OFF_POINT = 10;
PROMOT_CUT_POINT = 2;

var allItems = loadAllItems();
var promotionInfo = (loadPromotions())[0];

function addInfo(inputs) {
  var temp = [], collection = [];

  inputs.forEach(function(item) {
    temp.push(allItems.filter(function(val) {
      return val.barcode === item.slice(0, BARCODE_CUT_OFF_POINT);
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
    var existItem = result.filter(function(val) {
      return val.name === item.name;
    });

    if (existItem.length === 0) {
      item.count = 1;
      result.push(item);
    }
    else {existItem[0].count += 1;}
  });

  return result;
}

function findPromotGoods(collection) {
  var temp = [], promotGoods = [];
  promotionInfo.barcodes.forEach(function(val) {
    temp.push(collection.filter(function(item) {
      return item.barcode === val;
    }));
  });

  promotGoods = temp.filter(function(val) {
    if(val.length !== 0)
      return val[0];
  });

  return promotGoods = promotGoods.map(function(val) {
      return val[0];
  });
}

function print(collectionA, weight) {
  var realTotalPrice = 0, goodsPrice = 0, saved = 0, promotedTotalPrice = 0;
  var collectionB = findPromotGoods(collectionA);
  var content = '' + '***<没钱赚商店>收据***\n';

  collectionA.forEach(function(val) {
    realTotalPrice += val.price * val.count;

    if (collectionB.filter(function(item) {return val === item;}) !== 0) {
      goodsPrice = val.price * (val.count - parseInt(val.count / 3));
    } else {
        goodsPrice = weight * val.price;
      } //else {
    //   goodsPrice = val.price * val.count;
    // }

    promotedTotalPrice += goodsPrice;
    content +='名称：' + val.name + '，数量：' + (val.count === 1 ? val.count : weight) + val.unit + '，' +
              '单价：' + val.price.toFixed(2) + '(元)，' + '小计：' + goodsPrice.toFixed(2) + '(元)\n';
  });

  content +=  '----------------------\n' +
              '挥泪赠送商品：\n';

  collectionB.forEach(function(val) {
    saved += val.price * parseInt(val.count / 3);
    content +='名称：' + val.name + '，数量：' + parseInt(val.count / 3) + val.unit + '\n';
  });

  content +=  '----------------------\n' +
              '总计：' + promotedTotalPrice.toFixed(2) + '(元)\n' +
              '节省：' + saved.toFixed(2) + '(元)\n' +
              '**********************';
  console.log(content);
}

function printReceipt(inputs) {
  var weight = 0;
  inputs.forEach(function(item) {
    if (item.indexOf('-') > -1)
    return weight = item.slice(BARCODE_CUT_OFF_POINT - item.length + 1);
  });

  var collectianA = countProuduct(addInfo(inputs));

  console.log(print(collectianA, weight));
}
