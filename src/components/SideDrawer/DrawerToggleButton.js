import { h } from "preact";

import "./DrawerToggleButton.css";

const drawerToggleButton = props => (
  <button onClick={props.click} className="toggle-button">
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
  </button>
);

export default drawerToggleButton;
