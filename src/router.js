import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import page1 from './components/page1';
import page2 from './components/page2';
import resume from './components/resume';


const routes=[

  {path:'/page1',component:page1},
  {path:'/page2',component:page2},
  {path:'/resume',component:resume},
];

export default new Router({
  routes
})