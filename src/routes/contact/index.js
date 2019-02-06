import { h } from "preact";

import I18n from "../../i18n/settings";

import Plane from "../../../assets/plane.svg";
import Location from "../../../assets/location.svg";
import Mobile from "../../../assets/mobile.svg";
import Mail from "../../../assets/mail.svg";
import Instagram from "../../../assets/instagram.svg";

import "./style.css";

const contact = () => {
  const alertNetworkMessage = () => {
    alert(I18n.t("alertNetworkMessage"));
  };

  return (
    <div className="contact">
      <div className="top-section">
        <div className="plane">
          <div className="plane__circle">
            <img src={Plane} />
          </div>
        </div>

        <div className="heading">
          <span>{I18n.t("contactWithMe")}</span>
        </div>
      </div>
      {/* <div className="spacer"> test</div> */}
      <div className="contact__items">
        <div>
          <div className="icon">
            <img src={Mobile} />
          </div>
        </div>
        <div>+48 111-111-111</div>

        <div>
          <div className="icon">
            <img src={Mail} />
          </div>
        </div>

        <div>aaaaaaaaaaa.a@aaaaa.aaa</div>

        <div>
          <div className="icon">
            <img src={Location} />
          </div>
        </div>
        <div>
          <p>ul. Brzozowa 60</p>
          <p>Wrocław</p>
        </div>
      </div>

      <div className="bottom-section">
        <div onClick={alertNetworkMessage} className="instagram">
          <a href="https://www.instagram.com/chodorowskijasiu/">
            <img src={Instagram} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default contact;
