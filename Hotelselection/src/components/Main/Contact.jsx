import React, { useState } from "react";
import loc from "../../assets/icons/location.svg";
import mail from "../../assets/icons/mail.svg";
import msg from "../../assets/icons/message.svg";
import phone from "../../assets/icons/phone.svg";
import rightArrow from "../../assets/icons/rightArrow.svg";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fc69669d-e02c-4a1b-8146-603816428d4c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
    console.log(data);
  };
  return (
    <div className="contact row m-0 my-5">
      <div className="contact-col col-lg-6">
        <h3 className="d-table">
          Send us a message
          <img src={msg} />
        </h3>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem a
          voluptatibus pariatur. Id assumenda aliquid pariatur officiis. Rem
          dolorem qui eveniet, totam quidem recusandae nobis, esse laboriosam
          accusantium ullam omnis. Sed, minus quidem hic similique numquam
          officiis eum animi odit?
        </p>
        <ul>
          <li className="d-table my-3">
            <img src={mail} />
            Contact@Dreamhotel.devA
          </li>
          <li className="d-table my-3">
            <img src={phone} />
            +7 956-394-2482
          </li>
          <li className="d-table my-3">
            <img src={loc} />
            Address
          </li>
        </ul>
      </div>
      <div className="contact-col col-lg-6">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="enter your name"
            required
          />
          <label>Phone number</label>
          <input
            type="text"
            name="name"
            placeholder="enter your phone number"
            required
          />
          <label>Write your message</label>
          <textarea
            rows="6"
            name="name"
            placeholder="enter your message"
            required
          ></textarea>
          <button type="submit " className="btn btn-success">
            Submit now
            <img src={rightArrow} />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
