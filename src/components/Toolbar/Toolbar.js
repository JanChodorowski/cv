import { h, Component } from "preact";
import "./Toolbar.css";
import DrawerToggleButton from "./DrawerToggleButton";
import { Link } from "preact-router/match";
import I18n from "../../i18n/settings";
// import { connect } from "preact-redux";
// import { CHANGE_LANGUAGE } from "../../store/actions";

const toolbar = props => {
  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
          <DrawerToggleButton click={props.drawerOpenClickHandler} />
        </div>
        <div className="toolbar__logo">
          <a href="/"> LOGO</a>
        </div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
          <ul>
            <li>
              <Link activeClassName="active" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link activeClassName="active" href="/profile/me">
                my profile
              </Link>
            </li>
            <li>
              <a href="/">item 1</a>
            </li>
            <li onClick={() => I18n.changeLocale("pl")}>PL</li>
            <li onClick={() => I18n.changeLocale("en")}>EN</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};


export default toolbar;