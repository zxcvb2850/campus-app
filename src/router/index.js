import Vue from 'vue'
import Router from 'vue-router'
import helpPage from 'components/help-page/help-page'
import newsPage from 'components/message-page/message-page'
import findPage from 'components/find-page/find-page'
import myPage from 'components/my-page/my-page'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/helpPage'
    },
    {
      path: '/helpPage',
      name: 'helpPage',
      component: helpPage
    },
    {
      path: '/newsPage',
      name: 'newsPage',
      component: newsPage
    },
    {
      path: '/findPage',
      name: 'findPage',
      component: findPage
    },
    {
      path: '/myPage',
      name: 'myPage',
      component: myPage
    }
  ],
  linkActiveClass: "active"
})
