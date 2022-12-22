import React, { ChangeEvent, useState } from "react";
import "./_dish-modal.scss";
import x from "../../assets/images/x.svg";
import IDish from "../../interfaces/Dishes";
interface IProps {
  dish: IDish;
  dishToggle: () => void;
}

const DishModal = ({ dish, dishToggle }: IProps) => {
  const [dishQuantity, setDishQuontity] = useState<number>(1);
  const [chooseSide, setChooseSide] = useState<string>("");
  const [cart, setCart] = useState<Object>({
    side: chooseSide,
    changes: {
      withoutPeanuts: "",
      lessSpicy: "",
    },
  });

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name);

    // setCart([...cart, cart[name] = value])
  };
  return (
    <div className="dish-modal-container">
      <div className="dish-modal">
        <div className="dish-menu-button">
          <img
            className="dish-menu-button-img"
            src={x}
            alt="hamborger-icon"
            onClick={() => dishToggle()}
          ></img>
        </div>
        <div className="dish-modal-content">
          <img src={require(`../../${dish.image}`)} alt={dish.name}></img>
          <div className="dish-modal-details">
            <div className="dish-info">
              <h3>{dish.name}</h3>
              <p>{dish.ingredients}</p>
              <div className="dish-modal-icon">
                <img src={require(`../../${dish.icon}`)} alt={dish.name}></img>
              </div>
              <div className="dish-modal-price">
                <div className="price-line"></div>
                <span>₪&nbsp;{dish.price}</span>
                <div></div>
              </div>
            </div>
            <div className="dish-chooose">
              <div className="dish-item-choose">
                <div className="dish-title-choose">
                  <span>Choose a side</span>
                </div>
                <div className="dish-inputs">
                  <div className="dish-input-side">
                    <input
                      type="checkbox"
                      value="bread"
                      checked={chooseSide === "bread"}
                      onChange={(e) =>
                        setChooseSide(() =>
                          chooseSide === "bread" ? "" : "bread"
                        )
                      }
                    ></input>
                    <span>White bread</span>
                  </div>
                  <div className="dish-input-side">
                    <input
                      type="checkbox"
                      value="rice"
                      checked={chooseSide === "rice"}
                      onChange={(e) =>
                        setChooseSide(() =>
                          chooseSide === "rice" ? "" : "rice"
                        )
                      }
                    ></input>
                    <span>Sticky rice</span>
                  </div>
                </div>
              </div>
              <div className="dish-item-choose">
                <div className="dish-title-choose">
                  <span>Changes</span>
                </div>
                <div className="dish-inputs">
                  <div className="dish-input">
                    <input
                      type="checkbox"
                      name="withoutPeanuts"
                      onChange={(e) => handleChange(e)}
                    ></input>
                    <span>Whithout peanuts</span>
                  </div>
                  <div className="dish-input">
                    <input
                      type="checkbox"
                      name="lessSpicy"
                      onChange={(e) => handleChange(e)}
                    ></input>
                    <span>Sticky Less spicy</span>
                  </div>
                </div>
              </div>
              <div className="dish-item-choose">
                <div className="dish-title-choose">
                  <span>Quantity</span>
                </div>
                <div className="dish-quantity">
                  <button
                    className="minus"
                    onClick={() =>
                      setDishQuontity((prevstate) =>
                        prevstate > 1 ? prevstate - 1 : prevstate
                      )
                    }
                  >
                    -
                  </button>
                  <span>{dishQuantity}</span>
                  <button
                    className="pluse"
                    onClick={() =>
                      setDishQuontity((prevstate) => prevstate + 1)
                    }
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="dish-add">
                <button>Add to bag</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishModal;
