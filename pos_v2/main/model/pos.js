function Pos() {}

Pos.prototype.print = function (cart) {
  var list = cart.cartItems;
  var content = '' + '***<没钱赚商店>收据***\n' +
                '打印时间：' + currentDate + '\n' +
                '----------------------\n';

  list.forEach(function(val) {
    content += '名称：' + val._name + '，' +
               '数量：' + val.count + val._unit + '，' +
               '单价：' + val._price.toFixed(2) + '(元)，' +
               '小计：' + val.calculateSubtotal().toFixed(2) + '(元)\n';
  });

  content += '----------------------\n' +
             '挥泪赠送商品：\n';

  list.forEach(function(val) {
    if(val.savedCount !== 0) {
      content += '名称：' + val._name + '，数量：' + val.savedCount + val._unit + '\n';
    }
  });

  var total = cart.getTotal();
  var save = 0;
  list.forEach(function(val) {
    var savedTotal = 0;
    savedTotal += val._price * val.savedCount;
    save +=savedTotal;
  });

  content += '----------------------\n' +
             '总计：' + total.toFixed(2) + '(元)\n' +
             '节省：' + save.toFixed(2) + '(元)\n' +
            '**********************';
  console.log(content);

};
