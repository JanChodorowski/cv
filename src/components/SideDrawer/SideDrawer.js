import { h } from 'preact';

import "./SideDrawer.css";

const sideDrawer = props => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer show";
  }

  return (
    <div>
      <nav className={drawerClasses}>
        <div className="close__drawer-button" onClick={props.closeSideDrawer}>
          <div className="close__drawer-button__element" />
          <div className="close__drawer-button__element" />
        </div>
        <ul>
          <li>
            <a href="/">item1</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default sideDrawer;
