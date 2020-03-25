import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import messagePlugin from '@/utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min.js'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false
Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0KkZI9p5jzMGxzy47OikCgDKuLL0mumo",
  authDomain: "financial-planning-crm.firebaseapp.com",
  databaseURL: "https://financial-planning-crm.firebaseio.com",
  projectId: "financial-planning-crm",
  storageBucket: "financial-planning-crm.appspot.com",
  messagingSenderId: "785253869708",
  appId: "1:785253869708:web:be60d6d291bf6d1de7f3a9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
});
