import React from 'react';
import {NavLink} from 'dva/router';
import styles from './IndexPage.css';
import RouterView from '../routes/RouterView';

function TabPage(props) {
    
    return ( <div className={styles.wraper}>
      <RouterView routes={props.routes}></RouterView>

      <footer>
        <NavLink to='/tab/discover'>发现</NavLink>
        <NavLink to='/tab/video'>视频</NavLink>
        <NavLink to='/tab/friend'>朋友</NavLink>
        <NavLink to='/tab/my'>我的</NavLink>
        <NavLink to='/tab/account'>账号</NavLink>
      </footer>

        </div> );
}

export default TabPage;
