import { h } from "preact";

import I18n from "../../i18n/settings";

import Plane from "../../../assets/plane.svg";
import Location from "../../../assets/location.svg";
import Mobile from "../../../assets/mobile.svg";
import Mail from "../../../assets/mail.svg";
import Instagram from "../../../assets/instagram.svg";

import "./style.css";

const contact = () => (
  <div className="contact">
    <div className="heading">{I18n.t("contactWithMe")}</div>
    <div className="plane">
      <img src={Plane} />
    </div>

    <div className="separator" />

    <div className="contactItems">
      <div className="mobile">
        <div className="icon">
          <img src={Mobile} />
        </div>
      </div>

      <div className="phone">+48 111-111-111</div>

      <div className="mail">
        <div className="icon">
          <img src={Mail} />
        </div>
      </div>

      <div className="email">aaaaaaaaaaa.a@aaaaa.aaa</div>

      <div className="location">
        <div className="icon">
          <img src={Location} />
        </div>
      </div>

      <div className="address">
        <p>ul. Brzozowa 60 </p>
        <p> Wrocław</p>
      </div>
    </div>

    <div className="separator" />

    <div className="instagram">
      <a href="https://www.instagram.com/chodorowskijasiu/">
        <img src={Instagram} />
      </a>
    </div>
  </div>
);

export default contact;
