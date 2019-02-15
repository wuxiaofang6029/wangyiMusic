import React from 'react';
import { Router } from 'dva/router';
// 引入路由组件
import IndexPage from '../views/IndexPage';
// 引入配置路由组件
import RouterView from './RouterView';


let config = {
    routes: [{
      path: '/login',
      component: 'LoginPage'
    },{
        path: '/tab',
        component: IndexPage,
        children: [{
          path: 'tab/discover',
          component: props=><p>{JSON.stringify(props)}</p>
        },
        {
          path: 'tab/video',
          component: props=><p>{JSON.stringify(props)}</p>
        },
        {
          path: 'tab/friend',
          component: props=><p>{JSON.stringify(props)}</p>
        },
        {
          path: 'tab/my',
          component: props=><p>{JSON.stringify(props)}</p>
        },
        {
          path: 'tab/account',
          component: props=><p>{JSON.stringify(props)}</p>
        }]
    }, {
        path: '*',
        redirect: '/tab'
    }]
}

// 导出根路由配置
export default function RouterConfig({history}) {
  return (<Router history={history}>
    <RouterView routes={config.routes}></RouterView>
  </Router>)
}