function currentDate() {
}

CurrentDate.prototype.formattedDateString = function() {
  year = dateDigitToString(currentDate.getFullYear());
  month = dateDigitToString(currentDate.getMonth() + 1);
  date = dateDigitToString(currentDate.getDate());
  hour = dateDigitToString(currentDate.getHours());
  minute = dateDigitToString(currentDate.getMinutes());
  second = dateDigitToString(currentDate.getSeconds());
  formattedDateString = year + '年' + month + '月' + date + '日 ' + hour + ':' + minute + ':' + second;

  return formattedDateString;
};
