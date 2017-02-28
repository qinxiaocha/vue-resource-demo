import Vue from 'vue'
import VueResource from 'vue-resource'
import Router from 'vue-router'
import Hello from 'components/Hello'
import ProductList from 'components/ProductList'
import Foo from 'components/Foo'
import Bar from 'components/Bar'

Vue.use(Router)
Vue.use(VueResource)
export default new Router({
  routes: [{
    path: '/',
    name: 'Hello',
    component: Hello,
    children: [{
      path: 'foo/:id',
      component: Foo
    }, {
      path: 'bar',
      component: Bar
    }]
  }, {
    path: '/product',
    name: 'product',
    component: ProductList
  }]
})
