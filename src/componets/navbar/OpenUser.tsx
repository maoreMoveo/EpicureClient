import React from "react";
import x from "../../assets/images/x.svg";
import "../../assets/styles/components/navbar/_open-user.scss";
interface IProps {
  userToggle: () => void;
}
const OpenUser = ({ userToggle }: IProps) => {
  return (
    <div className="open-user">
      <div className="user-button">
        <img src={x} alt="hamborger-icon" onClick={() => userToggle()}></img>
      </div>
      <div className="user-content">
        <div className="user-info">
          <div className="user-info-header">
            <h3>Sign in</h3>
            <h2>To continue the order, please sign in</h2>
          </div>
          <div className="user-inputs">
            <div className="user-info-input">
              <span>Email adress</span>
              <input></input>
            </div>
            <div className="user-info-input">
              <span>Password</span>
              <input></input>
            </div>
          </div>
        </div>
        <div className="user-login-button">
          <button>Login</button>
          <h2>Forget password?</h2>
        </div>
        <div className="user-devide-field">
          <div></div>
          <span>or</span>
          <div></div>
        </div>
        <div className="user-signup">
          <button>Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default OpenUser;
