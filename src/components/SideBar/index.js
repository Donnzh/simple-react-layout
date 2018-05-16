import React from 'react';
import './SiderBar.css';

const siderBar = (props) => {
  const siderBarClass = `app-sidebar ${(props.isHidden ? "app-sidebar-hidden" : "")}`;
  return <div className={siderBarClass}>
    <h2>SIDEBAR</h2>
  </div>
}

export default siderBar