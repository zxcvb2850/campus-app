import Vue from 'vue'
import Router from 'vue-router'
import helpPage from 'components/help-page/help-page'
import newsPage from 'components/message-page/message-page'
import findPage from 'components/find-page/find-page'
import myPage from 'components/my-page/my-page'
import helpList from 'components/help-page/help-list/help-list'
import helpDetails from 'components/help-page/help-list/help-details/help-details'
import seekList from 'components/help-page/seek-list/seek-list'
import System from 'components/system/system'
import myInfo from 'components/my-info/my-info'


Vue.use(Router)

const router = new Router({
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
          meta: {
            title: "未来生活（校园版）"
          },
          children: [
            {
              path: ':id',
              component: helpDetails,
              meta: {
                title: "帮助详情--未来生活（校园版）"
              }
            }
          ]
        },
        {
          path: 'seekList',
          name: 'seekList',
          component: seekList,
          meta: {
            title: "求助--未来生活（校园版）"
          },
          children: [
            {
              path: ':id',
              component: helpDetails,
              meta: {
                title: "求助详情--未来生活（校园版）"
              }
            }
          ]
        }
      ]
    },
    {
      path: '/newsPage',
      name: 'newsPage',
      component: newsPage,
      meta: {
        title: "消息--未来生活（校园版）"
      }
    },
    {
      path: '/findPage',
      name: 'findPage',
      component: findPage,
      meta: {
        title: "关于我们--未来生活（校园版）"
      }
    },
    {
      path: '/myPage',
      name: 'myPage',
      component: myPage,
      meta: {
        title: "我的--未来生活（校园版）"
      }
    },
    {
      path: '/system',
      name: 'system',
      component: System,
      meta: {
        title: "设置--未来生活（校园版）"
      }
    },
    {
      path: '/myInfo',
      name: '个人信息',
      component: myInfo,
      meta: {
        title: "个人信息--未来生活（校园版）"
      }
    }
  ],
  linkActiveClass: "active"
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
})

export default router
