import React from "react";
import BrandCarousel from "../Components/Carousel/BrandCarousel";
import Login from "../Components/Login/Login";
import SocialLinks from "../Components/SocialLinks/SocialLinks";

const RightSideMain = () => {
  return (
    <div>
      <Login></Login>
      <SocialLinks></SocialLinks>
      <BrandCarousel></BrandCarousel>
    </div>
  );
};

export default RightSideMain;
