BARCODE_CUT_OFF_POINT = 10;
PROMOT_CUT_POINT = 2;

var allItems = loadAllItems();
var promotionInfo = (loadPromotions())[0];

function getItem(inputs) {
  var collection = [];
  inputs.forEach(function(val) {
    if (val.indexOf('-') > -1) {
      count = parseInt(val.slice(BARCODE_CUT_OFF_POINT + 1));
    } else {count = 1;}

    collection.push({
      barcode: val.slice(0, BARCODE_CUT_OFF_POINT = 10),
      count: count
    });
  });
  return collection;
}

function countProuduct(collection) {
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

  return result;
}

function getItemInfo(collection) {
  var result = [];
  result = collection.map(function(val) {
             allItems.forEach(function(item) {
               if (val.barcode === item.barcode) {
                 val.name = item.name;
                 val.unit = item.unit;
                 val.price = item.price;
               }
             });

             return val;
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
    if (val.length !== 0)
      return val[0];
  }).map(function(val) {
    return val[0];
  });

  return promotGoods;
}

function print(collectionA, collectionB) {
  var saved = 0, totalPrice = 0;
  var content = '' + '***<没钱赚商店>收据***\n';

  collectionA.forEach(function(val) {
    var subTotal = 0;

    subTotal = val.price * val.count;

    collectionB.forEach(function(item) {
      var eachSaved = item.price * parseInt(item.count / 3);
      if (val.barcode === item.barcode) {
        subTotal = val.price * val.count - eachSaved;
      }
    });

    totalPrice += subTotal;
    content += '名称：' + val.name + '，' +
               '数量：' + val.count + val.unit + '，' +
               '单价：' + val.price.toFixed(2) + '(元)，' +
               '小计：' + subTotal.toFixed(2) + '(元)\n';
  });

  content +=   '----------------------\n' +
               '挥泪赠送商品：\n';

  collectionB.forEach(function(val) {
    var savedCount = parseInt(val.count / 3);
    saved += val.price * savedCount;
    content += '名称：' + val.name + '，数量：' + savedCount + val.unit + '\n';
  });

  content += '----------------------\n' +
             '总计：' + totalPrice.toFixed(2) + '(元)\n' +
             '节省：' + saved.toFixed(2) + '(元)\n' +
            '**********************';
  console.log(content);
}

function printReceipt(inputs) {
  var cartItem = countProuduct(getItem(inputs));
  var allCartItem = getItemInfo(cartItem);
  var promotedCartItem = getItemInfo(findPromotGoods(cartItem));

  var result = print(allCartItem, promotedCartItem);

  console.log(result);
}
