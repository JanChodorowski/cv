import { h } from "preact";

import "./Backdrop.css";

const backdrop = props => {
  let classes = props.show ? "backdrop active" : "backdrop";

  return <div className={classes} onClick={props.clickHandler} />;
};

export default backdrop;
