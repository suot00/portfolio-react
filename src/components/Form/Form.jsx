import React, { useState } from "react";
import "./Form.css";
const Form = () => {
  const [enterName, setEnterName] = useState("");
  const [enterEmail, setEnterEmail] = useState("");
  const [enterMessage, setEnterMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console("submit");
  };
  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="form_input">
        <input
          type="text "
          placeholder="Your Name"
          value={enterName}
          onChange={(e) => setEnterName(e.target.value)}
        />
      </div>
      <div className="form_input">
        <input
          type="email "
          placeholder="Your Email"
          value={enterEmail}
          onChange={(e) => setEnterEmail(e.target.value)}
        />
      </div>

      <div className="form_input">
        <textarea
          placeholder="Write Message"
          value={enterMessage}
          onChange={(e) => setEnterMessage(e.target.value)}
        ></textarea>
      </div>
      <button className="submit_btn" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
