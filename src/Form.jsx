import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Form = (props) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [password, setPassword] = useState("");
  const [tel, setTel] = useState("");
  const [showPassword, setShow] = useState(false);
  const [showPasswordBtn, setShowBtn] = useState("Show");

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
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
      },
    });
    clearForm(data);
  };

  const clearForm = (data) => {
    console.log(data);
    setFirstname("");
    setLastname("");
    setEmail("");
    setCompany("");
    setPassword("");
    setTel("");
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
          <p>
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
          <p>
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
            })}

            // pattern: {
            //   value: /^[2-9]{2}\d{8}$/,
            //   message: "Invalid phone number",
            // },
            // /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/

            // /[2-9]{2}\d{8}
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

        <label>
          CAPTCHA
          <input type="text" name="captcha" />
        </label>

        <p className="note">
          By using BotXO you agree to our{" "}
          <a href="https://botxo.ai/privacy/">Privacy Policy</a>,
          <a href="https://botxo.ai/terms/"> Terms and Conditions</a>, and to
          subscribe to our Product Release Newsletter. You can unsubscribe at
          any time.
        </p>

        {props.formType === "Trial" ? (
          <button className="pink-btn trial" type="submit">
            Start Trial
          </button>
        ) : (
          <button className="pink-btn demo" type="submit">
            Book Demo
          </button>
        )}
      </form>
    </>
  );
};

export default Form;
