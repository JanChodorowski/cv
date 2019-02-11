import { h } from "preact";

import I18n from "../../i18n/settings";
import { Link } from "preact-router/match";
import GithubLogo from "../../../assets/githubLogo.svg";
import Avatar from "../../../assets/me.png";

import "./SideDrawer.css";
import CloseDrawerButton from "./DrawerCloseButton";

const sideDrawer = props => {
  const alertNetworkMessage = () => {
    alert(I18n.t("alertNetworkMessage"));
  };

  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer show";
  }

  let plClass,
    enClass = "";
  let CVLink = "";

  if (props.locale === "en") {
    enClass = "active-lang";
    CVLink = "/CV-en.pdf";
  } else if (props.locale === "pl") {
    plClass = "active-lang";
    CVLink = "/CV-pl.pdf";
  }

  const scrollTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  return (
    <nav className={drawerClasses}>
      <CloseDrawerButton closeSideDrawer={props.closeSideDrawer} />

      <div className="avatar">
        <img src={Avatar} />
      </div>
      <div className="name">Jan Chodorowski</div>

      <div className="contact__center">
        <Link href="/contact">
          <div onClick={() => props.closeSideDrawer(true)} class="contact-me">
            {I18n.t("contactMe")}
          </div>
        </Link>
      </div>

      <div className="side-drawer_navigation-items">
        <ul>
          <li>
            <Link
              onClick={() => {
                props.closeSideDrawer(true);
                scrollTop();
              }}
              activeClassName="active-route"
              href="/"
            >
              {I18n.t("home")}
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                props.closeSideDrawer(true);
                scrollTop();
              }}
              activeClassName="active-route"
              href="/profile"
            >
              {I18n.t("profile")}
            </Link>
          </li>

          <li>
            <a href={CVLink}>CV</a>
          </li>
        </ul>
      </div>

      <div className="bottom-section">
        <a
          title={I18n.t("gitRepoLink")}
          class="github__logo"
          onClick={alertNetworkMessage}
          href="https://github.com/JanChodorowski/cv"
        >
          <img src={GithubLogo} />
        </a>

        <div className="language__switcher">
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
        </div>
      </div>
    </nav>
  );
};

export default sideDrawer;

// <li >

//             </li>
