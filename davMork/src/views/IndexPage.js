import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import {NavLink} from 'dva/router';
import { Carousel } from 'antd-mobile';
import styles from './IndexPage.css';
import RouterView from '../routes/RouterView';

function IndexPage(props) {
    console.log('props---', props)

    // 在hooks中使用useEffect处理异步操作
    useEffect(() => {
      console.log('1..')
        props.getBanner();
    }, [])
    
    return ( <div>
      <div className={styles.banner}>
        <Carousel>
          {
            props.index.banner.map((item, index)=> {
              return <a key={index} href={item.url ? item.url : 'javascript:void(0)'}>
                <img src={item.imageUrl} alt={item.typeTitle} />
              </a>
            })
          }
        </Carousel>
      </div>

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

IndexPage.propTypes = {};

const mapStateToProps = state=>{
  return state
}

const mapDispatchToProps = dispatch=>{
  return {
    getBanner: ()=>dispatch({
      type: 'index/getBanner'
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
