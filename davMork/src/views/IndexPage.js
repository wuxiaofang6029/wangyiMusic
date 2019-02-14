import React, { useState } from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

function IndexPage() {
  let [count, setCount] = useState(100);
  
  return (
    <div>
      <button onClick={()=> setCount(count+1)}>+</button>
      <p>{count}</p>
      <button onClick={()=> setCount(count-1)}>-</button>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);