import React, { useState } from "react";
import firebase from "./firebase";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  // PhoneAuthProvider,
  // signInWithCredential,
} from "firebase/auth";

const Login = () => {
  const auth = getAuth(firebase);
  const [ph, setPh] = useState("");
  const [otp, setOtp] = useState("");
  const [vId, setViD] = useState("");
  const configureCaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, "sign-in-button", {
      size: "invisible",
      callback: (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        onSignInSubmit();
        console.log(" verfifed");
      },
      defaultCountry: "IN",
    });
  };

  const onSignInSubmit = (e) => {
    e.preventDefault();
    configureCaptcha();
    console.log(ph);
    const phoneNumber = "+91" + ph;
    const appVerifier = window.recaptchaVerifier;
    console.log(auth, phoneNumber, "vishal");
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        setViD(confirmationResult.verificationId);
        console.log("OTP has been sent");
        // ...
      })
      .catch((error) => {
        console.log("OTP has not been sent");
        // Error; SMS not sent
        // ...
      });
  };

  const onOtpSubmit = async (e) => {
    e.preventDefault();
    try {
      window.confirmationResult
        .confirm(otp)
        .then((result) => {
          // User signed in successfully.
          const user = result.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          // User couldn't sign in (bad verification code?)
          // ...
        });
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };

  return (
    <div>
      <form onSubmit={onSignInSubmit}>
        <div id="sign-in-button"> </div>
        <h3>Login</h3>
        <p>Enter phone number</p>
        <input
          type="number"
          name="phno"
          onChange={(e) => {
            setPh(e.target.value);
          }}
        />{" "}
        <button type="submit">Get Otp</button>
      </form>
      <br></br>
      <form onSubmit={onOtpSubmit}>
        <p>Enter otp number</p>
        <input
          type="number"
          name="otp"
          onChange={(e) => {
            setOtp(e.target.value);
          }}
        />{" "}
        <br></br> <br></br>
        <button type="submit">Verify Otp</button>
      </form>
    </div>
  );
};

export default Login;
