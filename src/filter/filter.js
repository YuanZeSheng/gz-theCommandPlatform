/**
 * *@2020-5
 * *@author mikeYuan 
 */


import Vue from 'vue'

// demo   <p>{{ item.data | toFixed3 }}</p>


//  0.888888 => 0.88
Vue.filter('toFixed3', function (num) {
  if (typeof num == 'number' || num == parseFloat(num)) {
      num = parseFloat(num);
      return parseFloat(num.toFixed(3));
  } else {
      return num;
  }
});


//  
Vue.filter('toDate', function (value) {

  let date = new Date(value);
  let y = date.getFullYear();
  let MM = date.getMonth() + 1;
  MM = MM < 10 ? ('0' + MM) : MM;
  let d = date.getDate();
  d = d < 10 ? ('0' + d) : d;
  let h = date.getHours();
  h = h < 10 ? ('0' + h) : h;
  let m = date.getMinutes();
  m = m < 10 ? ('0' + m) : m;
  let s = date.getSeconds();
  s = s < 10 ? ('0' + s) : s;
  return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
});