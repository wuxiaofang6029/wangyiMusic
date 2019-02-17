import React from 'react';
import { Router } from 'dva/router';
// 引入配置路由组件
import RouterView from './RouterView';

// 引入一级路由组件
import TabPage from '../views/TabPage';
// 引入二级路由组件
import DiscoverPage from '../views/tab/DiscoverPage';
// 引入三级路由
import Recom from '../views/tab/discover/recom';
import Anchor from '../views/tab/discover/anchor';


let config = {
    routes: [{
        path: '/tab',
        component: TabPage,
        children: [{
          path: '/tab/discover',
          component: DiscoverPage,
          children:[{
            path: '/tab/discover/recom',
            component: Recom
          },
          {
            path: '/tab/discover/anchor',
            component: Anchor
          }]
        },
        {
          path: '/tab/video',
          component: props=><p>{JSON.stringify(props)}</p>
        },
        {
          path: '/tab/friend',
          component: props=><p>{JSON.stringify(props)}</p>
        },
        {
          path: '/tab/my',
          component: props=><p>{JSON.stringify(props)}</p>
        },
        {
          path: '/tab/account',
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