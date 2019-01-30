import { h, Component } from "preact";
import { Router } from "preact-router";

import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";

// Code-splitting is automated for routes
import Home from "./routes/home";
import Profile from "./routes/profile";
import Contact from "./routes/contact"

import I18n from "./i18n/settings";

export default class App extends Component {
  state = {
    sideDrawer: true,
    locale: "en"
  };

  localeChanged = locale => {
    this.setState({ locale }); //causes rerender
  };

  componentDidMount() {
    I18n.on("change", this.localeChanged);
  }

  openDrawer = open => {
    this.setState({ sideDrawer: open });
  };

  handleRoute = e => {
    this.currentUrl = e.url;
  };

  render() {
    // I18n.changeLocale("pl");
    // console.log("po zmianie języka");
    // console.log(I18n);

    return (
      <div id="app">
        <Toolbar
          drawerOpenClickHandler={() => this.openDrawer(true)}
          locale={this.state.locale}
        />

        <SideDrawer
          show={this.state.sideDrawer}
          closeSideDrawer={() => this.openDrawer(false)}
          locale={this.state.locale}
        />

        <Backdrop
          show={this.state.sideDrawer}
          locale={this.state.locale}
          clickHandler={() => this.openDrawer(false)}
        />

        <Router onChange={this.handleRoute}>
          <Home path="/" />
          <Profile path="/profile/" user="me" />
          <Profile path="/profile/:user" />
          <Contact path="/contact" />
        </Router>
        {/* <div>{I18n.t("test")}</div>
        <div translate="yes">translate test</div> */}
      </div>
    );
  }
}
