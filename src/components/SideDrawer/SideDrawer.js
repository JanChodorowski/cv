import { h } from "preact";

import I18n from "../../i18n/settings";
// import Logo from "../../../logo.png";
import { Link } from "preact-router/match";
import GithubLogo from "../../../assets/githubLogo.svg";
import Avatar from "../../../assets/githubLogo.svg";

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

  if (props.locale === "en") {
    enClass = "active";
  } else if (props.locale === "pl") {
    plClass = "active";
  }

  return (
    <nav className={drawerClasses}>
      <CloseDrawerButton closeSideDrawer={props.closeSideDrawer} />

      <div className="avatar">
        <img src={GithubLogo} />
      </div>
      <div className="name">Jan Chodorowski</div>

      <div className="contactCenter">
        <Link href="/contact">
          <div onClick={() => props.closeSideDrawer(true)} class="contactMe">
            {I18n.t("contactMe")}
          </div>
        </Link>
      </div>

      <div className="side-drawer_navigation-items">
        <ul>
          <li>
            <Link
              onClick={() => props.closeSideDrawer(true)}
              activeClassName="activeRoute"
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => props.closeSideDrawer(true)}
              activeClassName="activeRoute"
              href="/profile/me"
            >
              my profile
            </Link>
          </li>

          <li>
            <Link onClick={() => props.closeSideDrawer(true)} href="/">
              some
            </Link>
          </li>
          <li>
            <Link onClick={() => props.closeSideDrawer(true)} href="/">
              placeholder
            </Link>
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
