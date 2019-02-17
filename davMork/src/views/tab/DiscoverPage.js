import React, { useEffect } from 'react';
import { connect } from 'dva';
import { NavLink } from 'dva/router';
import { Carousel } from 'antd-mobile';
import styles from './DiscovePage.css';
import RouterView from '../../routes/RouterView';

// 引入图片
import yuyin from '../../assets/sousuo.png';
import yinyuestatus from '../../assets/yinyuestatus.png';
import search from '../../assets/yuyin.png';

function DiscovePage(props) {
  console.log('props---', props)

  // 在hooks中使用useEffect处理异步操作
  useEffect(() => {
    props.getBanner();
  }, [])

  return (<div className={styles.content}>
    <div className={styles.main}>
    {/* 头部 */}
      <div className={styles.top}>
        <p><img src={search} /></p>
        <div className={styles.inp}>
          <input placeholder='猜你喜欢   浮生' />
          <img src={yuyin} />
        </div>
        <p><img src={yinyuestatus} /></p>
      </div>
      {/* tab切换 */}
      <div className={styles.tab}>
        <NavLink to='/tab/discover/recom'>个性推荐</NavLink>
        <NavLink to='/tab/discover/anchor'>主播电台</NavLink>
      </div>
      {/* 轮播 */}
      <div className={styles.banner}>
        <Carousel autoplay infinite>
          {
            props.discover.banner.map((item, index) => {
              return <a key={index} href={item.url ? item.url : 'javascript:void(0)'}>
                <img src={item.imageUrl} alt={item.typeTitle} />
              </a>
            })
          }
        </Carousel>
      </div>
      {/* 切换内容 */}
      <RouterView routes={props.routes}></RouterView>
    </div>

  </div>);
}

DiscovePage.propTypes = {};

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    getBanner: () => dispatch({
      type: 'discover/getBanner'
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DiscovePage);
