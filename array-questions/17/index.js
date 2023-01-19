function formatDate(userDate) {
  var date = new Date(userDate);
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  var time = date.getTime();
  var formattedDate =
    year + "-" + month + "-" + day + " " + hour + ":" + minute;
  return formattedDate;
}
