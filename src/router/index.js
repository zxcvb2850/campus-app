import Vue from 'vue'
import Router from 'vue-router'
import helpPage from 'components/help-page/help-page'
import newsPage from 'components/message-page/message-page'
import findPage from 'components/find-page/find-page'
import myPage from 'components/my-page/my-page'
import helpList from 'components/help-page/help-list/help-list'
import helpDetails from 'components/help-page/help-list/help-details/help-details'
import seekList from 'components/help-page/seek-list/seek-list'
import release from 'components/help-page/seek-list/release/release'
import System from 'components/system/system'


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
      component: helpPage,
      children: [
        {
          path: '/helpPage',
          redirect: '/helpPage/helpList'
        },
        {
          path: 'helpList',
          name: 'helpList',
          component: helpList,
          children: [
            {
              path: ':id',
              component: helpDetails
            }
          ]
        },
        {
          path: 'seekList',
          name: 'seekList',
          component: seekList,
          children: [
            {
              path: 'release',
              component: release
            }
          ]
        }
      ]
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
      component: myPage,
    },
    {
      path: '/system',
      name: 'system',
      component: System
    }
  ],
  linkActiveClass: "active"
})
