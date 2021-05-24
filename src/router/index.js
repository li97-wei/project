import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: (resolve) => require(['@/components/HelloWorld'], resolve)
    },
    {
      path: '/wyy',
      name: 'wyy',
      component: (resolve) => require(['@/components/wyy'], resolve)
    },
    {
      path: '/bd',
      name: 'bd',
      component: (resolve) => require(['@/components/bd'], resolve)
    }
  ],
  // mode: "history",
  // base: "/project/"
})
