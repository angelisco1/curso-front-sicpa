import Vue from 'vue';

Vue.filter('conSimbolo', (val, lang) => {
  let simbolo = '€';
  if (lang === 'us') {
    simbolo = '$';
  }
  return val + simbolo;
})