import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul>
        <div className="logo">
          <img src="/Images/Icon awesome-vr-cardboard.png" alt="" />
        </div>
        <h1 className="dys">Dystopia</h1>
        <div className="img-1">
          <img src="/Images/Mask Group 1.png" alt="" />
        </div>

        <div class="form-box">
          <h1 class="sign">Sign Up</h1>
          <h3 class="create">
            Create an account and get notification <br /> of daily news around the world
          </h3>
          <div className="google">
            <button className="google-pic">
              <img src="/Images/icons8-google.png" alt="" />

              <Link className="sign-google" to="/about">
                Sign up with google
              </Link>
            </button>
          </div>
          <div className="facebook">
            <button className="facebook-pic">
              <img src="/Images/icons8-facebook.png" alt="" />{" "}
              <Link className="sign-facebook" to="/about">
                Sign up with Facebook
              </Link>
            </button>
          </div>
          <p className="or">Or</p>
          <p className="create-acc"> create account using</p>
          <p className="mail">Email</p>
          <form action="" className="cynthia-mail">
            <input type="email" className="input-box" autoFocus placeholder="cynthiann@gmail.com" />
            <div className="create-button">
              <button className="form-button" type="submit">
                {" "}
                <Link className="form-button" to="/home">
                  Create Account
                </Link>
              </button>
            </div>
            <p class="sign-in">
              i already have an account <a href="/"> Sign in</a>
            </p>
          </form>
        </div>
      </ul>
    </div>
  );
};

export default Header;
