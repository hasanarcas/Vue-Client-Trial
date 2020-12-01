import Vue from 'vue'
import App from './App.vue'
import axios from "axios"
import VueRouter from "vue-router"
import Routes from "./routes.js"
Vue.prototype.$http = axios;
Vue.use(VueRouter);
const router = new VueRouter({
  routes: Routes,
  mode:"history"
});


//---------------------- Custom directives --------------------------------
Vue.directive("theme",{     //globally
  bind(el,binding,vnode){
  if(binding.value == "wide"){
    el.style.maxWidth = "1200px";
  }else if(binding.value== "narrow"){
    el.style.maxWidth="560px";
  }
  if(binding.arg == "column"){
    el.style.background = "#ddd";
    el.style.padding ="20px";
  }
}
});
//---------------------------------------------------------------

//----------------- filters -------------------------------------

Vue.filter("snippet",function(value){ //globally 
  return value.slice(0,100) + "..."
});

//----------------------------------------------------------
export const bus = new Vue(); //create a event bus
new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
