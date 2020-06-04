import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Checkmark from "./Images/orange.svg";

let Recaptcha = require("react-recaptcha");

let callback = function () {
  console.log("Done");
};

const Form = (props) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [password, setPassword] = useState("");
  const [tel, setTel] = useState("");
  const [showPassword, setShow] = useState(false);
  const [showPasswordBtn, setShowBtn] = useState("Show");
  const [reCaptchaResponse, setreCaptchaResponse] = useState(false);

  //fetching all the current users whi have an account and store it
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(
      "https://kea3rdsemester-91fd.restdb.io/rest/" +
        "botxo?fetchchildren=true",
      {
        method: "get",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "x-apikey": "5d887df9fd86cb75861e2626",
          "cache-control": "no-cache",
        },
      }
    )
      .then((e) => e.json())
      .then((e) => setUsers(e));
  }, []);

  //checking if the user is already stocked in the DB
  function isMember(a, obj) {
    var i = a.length;
    while (i--) {
      if (a[i].email === obj) {
        return true;
      }
    }
    return false;
  }

  const { register, handleSubmit, errors } = useForm();

  //check recaptcha validation
  function verifyCallback() {
    setreCaptchaResponse(true);
  }

  const onSubmit = (data) => {
    //check if the user already have an account
    if (isMember(users, email)) {
      alert("You already signed up for a free trial.");
      setSubmit(false);
    } else {
      const user = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        company: company,
        password: password,
        tel: tel,
        from: props.formType,
      };
      fetch("https://kea3rdsemester-91fd.restdb.io/rest/botxo", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
          "x-apikey": "5d887df9fd86cb75861e2626",
          "cache-control": "no-cache",
        },
      })
        .then(clearForm(data))
        .then(setSubmit(true));
    }
  };

  const [submit, setSubmit] = useState(false);

  if (submit) {
    return (
      <div className="thank-msg">
        <img src={Checkmark} alt="Thank you!" />
        <h1
          className="form-headline"
          style={{
            fontSize: "2em",
            fontWeight: "bold",
          }}
        >
          Thank you for filling out your information!
        </h1>
        {props.formType === "Trial" ? (
          <p>
            We’ve sent you an email with your credentials to access the platform
            at the email address you provided.
            <br /> Please enjoy your free trial, and let us know if there’s
            anything else we can help you with.
          </p>
        ) : (
          <p>We will contact you as soon as possible!</p>
        )}
        <p>The BotXO Team</p>
      </div>
    );
  }

  const clearForm = (data) => {
    console.log(data);
    setFirstname("");
    setLastname("");
    setEmail("");
    setCompany("");
    setPassword("");
    setTel("");
    setreCaptchaResponse(false);
  };

  const showIt = (e) => {
    if (e.target.value === "Show") {
      setShowBtn("Hide");
      setShow(true);
    } else {
      setShowBtn("Show");
      setShow(false);
    }
  };

  return (
    <>
      {props.formType === "Trial" ? (
        <>
          <h1
            className="form-headline"
            style={{
              textAlign: "center",
              fontSize: "2em",
              fontWeight: "bold",
            }}
          >
            Sign up for a free trial
          </h1>
          <p className="form-description">
            The DIY option. Get free access to our platform and all its features
            for 14 days, no credit card required. Start building your first
            chatbot with the help of our tutorials
          </p>
        </>
      ) : (
        <>
          <h1
            className="form-headline"
            style={{
              textAlign: "center",
              fontSize: "2em",
              fontWeight: "bold",
            }}
          >
            Book a Demo
          </h1>
          <p className="form-description">
            The guided tour. Have one of our humans show you our platform’s
            capabilities, how it can fit your business and how to integrate it
            with your CRM and business systems.
          </p>
        </>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="fullname">
          <label className="firstname">
            FIRST NAME
            <input
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              type="text"
              name="firstName"
              ref={register({ required: true })}
            />
            {errors.firstName && (
              <p className="errorMsg">First name is required</p>
            )}
          </label>

          <label className="lastname">
            LAST NAME
            <input
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              type="text"
              name="lastName"
              ref={register({ required: true })}
            />
            {errors.lastName && (
              <p className="errorMsg">Last name is required</p>
            )}
          </label>
        </div>

        <label>
          WORK EMAIL
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="workEmail"
            ref={register({
              required: "Work email is required",
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.workEmail && (
            <p className="errorMsg">{errors.workEmail.message}</p>
          )}
        </label>

        <label>
          COMPANY NAME
          <input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            type="text"
            name="company"
            ref={register({ required: true })}
          />
          {errors.company && (
            <p className="errorMsg">Company name is required</p>
          )}
        </label>

        <label className="phone">
          PHONE NUMBER
          <input
            value={tel}
            onChange={(e) => setTel(e.target.value)}
            type="text"
            name="phone"
            ref={register({
              required: "Phone number is required",
              pattern: {
                value: /^[2-9]{2}\d{8}$/,
                message: "Invalid phone number. Format: 45XXXXXXXX",
              },
            })}
          />
          {errors.phone && <p className="errorMsg">{errors.phone.message}</p>}
        </label>

        {props.formType === "Trial" ? (
          <div className="password">
            <label>
              PASSWORD
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                name="password"
                ref={register({ required: true })}
              />
            </label>
            <input
              type="button"
              value={showPasswordBtn}
              className="show"
              onClick={showIt}
            />
            {errors.password && <p className="errorMsg">Create a password</p>}
          </div>
        ) : (
          <></>
        )}

        <div className="recaptcha">
          <Recaptcha
            sitekey="6Le3OPwUAAAAAAUl7MH2lBijB2A86SmJjgwuUCDM"
            render="explicit"
            onloadCallback={callback}
            verifyCallback={verifyCallback}
          />
          {reCaptchaResponse ? (
            <></>
          ) : (
            <p className="errorMsg">reCpatcha validation required</p>
          )}
        </div>

        <p className="note">
          By using BotXO you agree to our{" "}
          <a href="https://botxo.ai/privacy/">Privacy Policy</a>,
          <a href="https://botxo.ai/terms/"> Terms and Conditions</a>, and to
          subscribe to our Product Release Newsletter. You can unsubscribe at
          any time.
        </p>

        <button className="pink-btn trial" type="submit">
          {props.formType === "Trial" ? "Start Trial" : "Book Demo"}
        </button>
      </form>
    </>
  );
};

export default Form;
