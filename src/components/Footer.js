import React from "react";
import Styles from "./Footer.module.css";
import twitter from "./images/twitter.svg";
import instagram from "./images/instagram.svg";
import whatsapp from "./images/whatsapp.svg";
import VidPlay from "./images/Footer.svg";

const Footer = () => {
  return (
    <>
      <section className={Styles.blue}>
        <div className={Styles.footer}>
          <div className={Styles.prodname}>
            <img src={VidPlay} alt=""></img>
          </div>
          <div className={Styles.product}>
            <div className={Styles.contentDiv}>
              <p className={Styles.title}>PRODUCT</p>

              <p className={Styles.content}>How it works</p>

              <p className={Styles.content}>Request a demo</p>
              <p className={Styles.content}>Features</p>
            </div>
          </div>
          <div className={Styles.resources}>
            <div className={Styles.contentDiv}>
              <p className={Styles.title}>RESOURCES</p>
              <p className={Styles.content}>Request a demo</p>

              <p className={Styles.content}>Features</p>
            </div>
          </div>
          <div className={Styles.company}>
            <div className={Styles.contentDiv}>
              <p className={Styles.title}>COMPANY</p>
              <p className={Styles.content}>Start free trial</p>

              <p className={Styles.content}>Features</p>
            </div>
          </div>
        </div>
        <div className={Styles.lastDiv}>
          <div className={Styles.brands}>
            <img className={Styles.logos} src={twitter} alt=""></img>
            <img className={Styles.logos} src={instagram} alt=""></img>
            <img className={Styles.logos} src={whatsapp} alt=""></img>
          </div>

          <p className={Styles.lastText}>
            © 2014 - 2022 Crafted with love in Bochum.
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
