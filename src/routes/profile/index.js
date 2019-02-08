import { h, Component } from "preact";
import "./style.css";
import I18n from "../../i18n/settings";
import Cat from "../../../assets/cat.svg";
import JSLogo from "../../../assets/jsLogo.svg";
import Team from "../../../assets/team.svg";
import Tools from "../../../assets/tools.svg";
import Checklist from "../../../assets/checklist.svg";

export default class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <img className="top-section__icon" src={Checklist} />
        <p className="top-section__title">{I18n.t("why")}</p>
        <p className="top-section__subtitle">{I18n.t("whySub")}</p>

        <div className="content">
          <p className="p1">{I18n.t("profileP1")}</p>
          <div className=" icon1">
            <div className="icon-div round cat">
              <img src={Cat} />
            </div>
          </div>
          <p className="p2">{I18n.t("profileP2")}</p>
          <div className="icon2">
            <div className="icon-div round">
              <img className="js-icon" src={JSLogo} />
            </div>
          </div>
          <p className="p3">{I18n.t("profileP3")}</p>

          <div className="icon-div icon3">
            <img className="" src={Team} />
          </div>

          <p className="p4">{I18n.t("profileP4")}</p>

          <div className="icon-div icon4">
            <img src={Tools} />
          </div>
        </div>
      </div>
    );
  }
}
