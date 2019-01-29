import { h } from "preact";

import "./DrawerCloseButton.css";

const drawerCloseButton = props => (
  <div className="close__drawer-button" onClick={props.closeSideDrawer}>
    <div className="close__drawer-button__element" />
    <div className="close__drawer-button__element" />
  </div>
);

export default drawerCloseButton;
