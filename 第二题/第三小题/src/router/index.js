import Vue from 'vue'
import Router from 'vue-router'
import '@/assets/css/mui.min.css'
import HelloWorld from '@/components/HelloWorld'
import grid from '@/components/grid'
import home from '@/components/home'
Vue.use(Router)

export default new Router({
  routes: [
    {
		path: '/HelloWorld',
		name: 'HelloWorld',
		component: HelloWorld
		},
		{
      path: '/',
      name: 'grid',
      component: grid
    },
    {
      path: '/',
      name: 'home',
      component: home
    },
    
  ]
})
