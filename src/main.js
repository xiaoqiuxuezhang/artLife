// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router';
import VueResource from 'vue-resource';
import  { ToastPlugin, LoadingPlugin, XInput, XButton,Group, Box  } from 'vux'
import Regist from './components/regist';
import Login from './components/login';
import Revise from './components/revise';
import Home from './components/home';


Vue.config.productionTip = false;


Vue.use(ToastPlugin);
Vue.use(LoadingPlugin);
Vue.use(VueResource);
Vue.use(Router);
Vue.component('x-input', XInput);
Vue.component('x-button', XButton);
Vue.component('group', Group);
Vue.component('box', Box);

const  router=new Router({
  routes:[
    {path:"/login",name:'login',component:Login},
    {path:"/regist",name:'regist',component:Regist},
    {path:"/revise",name:'revise',component:Revise},
    {path:"/home",name:'home',component:Home,
      children:[  //这里就是二级路由的配置
        {
          path: '/login',
          name: 'login',
          component: Login
        }
      ]
    },
    {path:"*",redirect:'/login'},
  ],
  mode:"history"
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
