import { h, Component } from "preact";
import "./Toolbar.css";
import DrawerToggleButton from "./DrawerToggleButton";
import { Link } from "preact-router/match";
import I18n from "../../i18n/settings";
import Logo from "../../../logo.png";
import GithubLogo from "../../../githubLogo.svg";
// import { connect } from "preact-redux";
// import { CHANGE_LANGUAGE } from "../../store/actions";

const toolbar = props => {
  let plClass,
    enClass = "";

  if (props.locale === "en") {
    enClass = "active";
  } else if (props.locale === "pl") {
    plClass = "active";
  }

  const alertNetworkMessage = ()=>{
    alert(I18n.t("alertNetworkMessage"))
  }

  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
          <DrawerToggleButton click={props.drawerOpenClickHandler} />
        </div>
        <div className="toolbar__logo">
          <a href="/">
            <img src={Logo} />
          </a>
        </div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
          <ul>
            <li>
              <Link activeClassName="activeRoute" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link activeClassName="activeRoute" href="/profile/me">
                my profile
              </Link>
            </li>
          </ul>
        </div>

        <div className="toolbar__tools">
          <ul>
            <li class="contactMe">Contact Me</li>

            <li title={I18n.t("gitRepoLink")} class="github__logo">
              <a
                onClick={alertNetworkMessage}
                href="https://github.com/JanChodorowski/cv"
              >
                <img src={GithubLogo} />
              </a>
            </li>

            <li className="language__switcher">
              <span title="Język polski" className={plClass} onClick={() => I18n.changeLocale("pl")}>
                PL
              </span>
              <span title="English language" className={enClass} onClick={() => I18n.changeLocale("en")}>
                EN
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default toolbar;
