import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

for (let i = 0; i < 10; i++) {
  console.log(i);
}

const firstname = "Arno";
const name = "Hemeleers"
console.log(firstname);

