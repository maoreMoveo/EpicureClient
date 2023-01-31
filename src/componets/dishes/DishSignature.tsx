import React from "react";
import "./_dish-signature.scss";
import spicyIcon from "../../assets/images/spicy-icon.svg";
import vegetarianIcon from "../../assets/images/vegetarian-icon.svg";
import veganIcon from "../../assets/images/vegan-icon.svg";
const DishSignature = () => {
  return (
    <div className="dish-signature">
      <div className="dish-title-signature"></div>
      <h2>THE MEANING OF OUR ICONS:</h2>
      <div className="dish-options">
        <div>
          <img
            src="https://res.cloudinary.com/dmfrv13ie/image/upload/v1672142001/Epicure/icons/spicy-icon_e7lbbi.svg"
            alt="spicy-icon"
          ></img>
          <h2>Spicy</h2>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dmfrv13ie/image/upload/v1672142001/Epicure/icons/vegetarian-icon_rd5bpy.svg
"
            alt="vegenarian-icon"
          ></img>
          <h2>Vegitarian</h2>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dmfrv13ie/image/upload/v1674735276/Epicure/icons/vegan-icon_e7jo7v_uggvhw.svg"
            alt="vegan-icon"
          ></img>
          <h2>Vegan</h2>
        </div>
      </div>
    </div>
  );
};
 export default DishSignature;
