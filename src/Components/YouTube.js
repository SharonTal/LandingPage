import React from "react";

const YoutTube = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">{"About Us".toUpperCase()}</h1>
        <iframe
          className="youtube"
          src="https://www.youtube.com/embed/XbSD95JXJyY"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    </div>
  );
};

export default YoutTube;
