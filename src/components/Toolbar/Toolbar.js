import { h, Component } from "preact";
import "./Toolbar.css";
import DrawerToggleButton from "./DrawerToggleButton";
import { Link } from "preact-router/match";
import I18n from "../../i18n/settings";
import Logo from "../../../assets/logo.png";
import GithubLogo from "../../../assets/githubLogo.svg";

const toolbar = props => {
  let plClass,
    enClass = "";

  if (props.locale === "en") {
    enClass = "active-lang";
  } else if (props.locale === "pl") {
    plClass = "active-lang";
  }

  const alertNetworkMessage = () => {
    alert(I18n.t("alertNetworkMessage"));
  };

  const scrollTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

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
              <Link
                onClick={() => scrollTop()}
                activeClassName="active-route"
                href="/"
              >
                {I18n.t("home")}
              </Link>
            </li>
            <li>
              <Link
                onClick={() => scrollTop()}
                activeClassName="active-route"
                href="/profile"
              >
                 {I18n.t("profile")}
              </Link>
            </li>
          </ul>
        </div>

        <div className="toolbar__tools">
          <ul>
            <Link href="/contact">
              <li class="contact-me">{I18n.t("contactMe")} </li>
            </Link>

            <li title={I18n.t("gitRepoLink")} class="github__logo">
              <a
                onClick={alertNetworkMessage}
                href="https://github.com/JanChodorowski/cv"
              >
                <img src={GithubLogo} />
              </a>
            </li>

            <li className="language__switcher">
              <span
                title="Język polski"
                className={plClass}
                onClick={() => I18n.changeLocale("pl")}
              >
                PL
              </span>
              <span
                title="English language"
                className={enClass}
                onClick={() => I18n.changeLocale("en")}
              >
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
