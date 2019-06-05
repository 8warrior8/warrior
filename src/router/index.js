import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import Test1 from '@/components/test1/test1'
import Sub1 from '@/components/test1/sub1'
import Sub2 from '@/components/test1/sub2'
import Test2 from '@/components/test2'
import Test3 from '@/components/test3'
import Test4 from '@/components/test4'
import Test5 from '@/components/test5'
import Test6 from '@/components/test6'
import Test7 from '@/components/test7'
import Test8 from '@/components/test8/test8'
import ytg from '@/components/ytg/ytg'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Main',
    component: Main
  }, {
    path: '/test1',
    name: 'Test1',
    component: Test1,
    children: [{
      path: 'sub1',
      name: 'Sub1',
      component: Sub1
    }, {
      path: 'sub2',
      name: 'Sub2',
      component: Sub2
    }]
  }, {
    path: '/test2',
    name: 'Test2',
    component: Test2
  }, {
    path: '/test3',
    name: 'Test3',
    component: Test3
  }, {
    path: '/test4',
    name: 'Test4',
    component: Test4
  }, {
    path: '/test5',
    name: 'Test5',
    component: Test5
  }, {
    path: '/test6',
    name: 'Test6',
    component: Test6
  }, {
    path: '/test7',
    name: 'Test7',
    component: Test7
  }, {
    path: '/test8',
    name: 'Test8',
    component: Test8
  }, {
    path: '/ytg',
    name: 'ytg',
    component: ytg
  }]
})
