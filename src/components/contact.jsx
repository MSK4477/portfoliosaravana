import { useState } from "react";
import toast from "react-hot-toast";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
const Contact = () => {
  const initialState = { name: "", email: "", message: "" }
  const [data, setData] = useState(initialState);
const [disableBtn, setDisableBtn] = useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisableBtn(true);
    try {
      await addDoc(collection(db, "contacts"), 
      
        data
      );
     setData(initialState)
      toast.success("Message Sent");
      setDisableBtn(false);
    } catch (error) {
      toast.error("Error");
      console.log(error);
      setDisableBtn(false);
    }
  };

  return (
    <main id="contact">
        <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required={true}
          minLength={3}
          value={data.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required={true}
          minLength={3}
          value={data.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="Your Message"
          required={true}
          minLength={3}
          value={data.message}
          onChange={handleChange}
        />
        <br />
        <button className={disableBtn ? "disableBtn" : ""} disabled={disableBtn}>Send</button>
      </form>
    </main>
  );
};

export default Contact;
