import React from "react";
import "../styles/Page.css";
import bookmark from "./images/bookmark.svg";
import addtocart from "./images/add-to-cart.svg";
import folder from "./images/folder.svg";
import privateFolder from "./images/private.svg";
import download from "./images/download.svg";
import launch from "./images/launch.svg";
import phone from "./images/phone-book.svg";
const Card = (props) => {
  let img;
  if (props.img === "1") {
    img = <img src={phone} alt=""></img>;
  } else if (props.img === "2") {
    img = <img src={folder} alt=""></img>;
  } else if (props.img === "3") {
    img = <img src={launch} alt=""></img>;
  } else if (props.img === "4") {
    img = <img src={bookmark} alt=""></img>;
  } else if (props.img === "5") {
    img = <img src={addtocart} alt=""></img>;
  } else if (props.img === "6") {
    img = <img src={privateFolder} alt=""></img>;
  } else {
    img = <img src={download} alt=""></img>;
  }
  return (
    <>
      <div className="card" id="card">
        <div className="card-body align-start">
          <div className="centralize">
            {img}
          </div>
          <div className="card-summary">
            <p className="card-heading ">{props.heading}</p>
          </div>
          <div className="card-content">
            <p>{props.content}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
