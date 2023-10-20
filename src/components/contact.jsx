import { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <main id="contact">
        <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          required={true}
          minLength={3}
          value={data.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          required={true}
          minLength={3}
          value={data.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="message"
          required={true}
          minLength={3}
          value={data.message}
          onChange={handleChange}
        />
        <br />
        <button>Send</button>
      </form>
    </main>
  );
};

export default Contact;
