import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Integration with Developer Code",
      text: "Developers easily integrate HIDEY’s lightweight code into their apps, adding a robust layer of security without compromising performance.",
    },
    {
      image: ChooseMeals,
      title: "User-Defined Stealth Settings",
      text: "Users personalize their security level by selecting disguise settings directly within the app, ensuring their data remains private and under their control. ",
    },
    {
      image: DeliveryMeals,
      title: "App Remains Hidden and Private",
      text: "The application masquerades as another everyday app, keeping its true functionality and your data secure and invisible.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        HIDEY combines efficiency with simplicity, offering a plug-and-play solution that enhances app privacy with minimal effort and maximum reliability.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
