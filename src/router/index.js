import Vue from 'vue'
import Router from 'vue-router'
import helpPage from 'components/help-page/help-page'
import newsPage from 'components/message-page/message-page'
import findPage from 'components/find-page/find-page'
import myPage from 'components/my-page/my-page'
import Dynamic from 'components/my-page/dynamic/dynamic'
import Schedule from 'components/my-page/schedule/schedule'
import helpList from 'components/help-page/help-list/help-list'
import helpDetails from 'components/help-page/help-list/help-details/help-details'
import seekList from 'components/help-page/seek-list/seek-list'
import release from 'components/help-page/seek-list/release/release'


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
      children: [
        {
          path: '/myPage',
          redirect: '/myPage/dynamic'
        },
        {
          path: 'dynamic',
          component: Dynamic
        },
        {
          path: 'schedule',
          component: Schedule
        }
      ]
    }
  ],
  linkActiveClass: "active"
})
