import React from "react";
import App from "./App";
import img2 from "./log.png";


function SignUp(){
    return (
        <div className="SignUp">
          <div className="SignUpBox">
            <div className="Image2">
              <img src={img2} alt="SignUpimg" className="image2" />
            </div>
            <div className="SignUpHeader">
             SIGN UP
            </div>
            <div className="inputs-login2">
              <p className="label2">
                NAME:{" "}
                <input
                  type="text"
                  className="creds"
                  placeholder="ENTER YOUR NAME"
                ></input>
              </p>

              <p className="label2">
                EMAIL:{" "}
                <input
                  type="text"
                  className="creds"
                  placeholder="ENTER YOUR EMAIL"
                ></input>
              </p>

              <p className="label2">
                PASSWORD:{" "}
                <input
                  type="password"
                  className="creds"
                  placeholder="ENTER YOUR PASSWORD"
                ></input>
              </p>
            </div>
            <div>
              <button type="submit" className="signup-button2" placeholder="Signup">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      );
    }
    
    export default SignUp;
