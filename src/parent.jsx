import React from 'react';
import Child from './child'
import Child2 from './child2'
const Parent = () => {
  return (
    <div className="parent">
        {/* <Child /> */}
        <Child2 />
    </div>
  );
}

export default Parent;