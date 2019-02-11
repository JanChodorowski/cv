import { h } from "preact";
import "./style.css";
import I18n from "../../i18n/settings";
import Avatar from "../../../assets/me.png";
import Graduation from "../../../assets/graduation.svg";
import Globe from "../../../assets/globe.svg";
import Computer from "../../../assets/computer.svg";
import Rise from "../../../assets/rise.svg";
import Monterail from "../../../assets/monterail.svg";

const Home = () => {
  const today = Date.now();
  const myBirthday = new Date(1992, 10, 9);
  const myAge = Math.floor((today - myBirthday) / (1000 * 60 * 60 * 24 * 365));

  return (
    <div className="home">
      <img className="avatar" src={Avatar} />
      <div className="greeting">{I18n.t("greeting")}</div>
      <div className="greeting sub">{I18n.t("greetingSub")}</div>
      <div className="content">
        <p className="p1">{I18n.t("homeP1", { age: myAge })}</p>
        <div className="icon-div icon1">
          <img src={Graduation} />
        </div>
        <p className="p2">{I18n.t("homeP2")}</p>
        <div className="icon-div globe icon2">
          <img src={Globe} />
        </div>

        <p className="p3">{I18n.t("homeP3")}</p>

        <div className="icon-div icon3">
          <img src={Computer} />
        </div>

        <p className="p4">{I18n.t("homeP4")}</p>
        <div className="icon-div icon4">
          <img src={Rise} />
        </div>
        <p className="p5">{I18n.t("homeP5")}</p>
        <div className="icon-div monterail-logo icon5">
          <img src={Monterail} />
        </div>
      </div>
    </div>
  );
};
export default Home;
