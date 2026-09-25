import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (event) => {
    setFormData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const formEmail = async (event) => {
    event.preventDefault();
    const { name, email, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please complete all fields.");
      return;
    }

    setIsSending(true);
    try {
      const response = await fetch("/api/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), message: message.trim() }),
      });

      if (!response.ok) {
        throw new Error("Message could not be sent.");
      }

      toast.success("Message sent successfully.");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      toast.error("Unable to send the message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="contact">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="info__contact" id="info__contact">
        <div className="contact__text">
          <h1> Let's work together and create something amazing</h1>
        </div>
        <div className="contact__link">
          <form onSubmit={formEmail}>
            <div className="form__initial">
              <input
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="Name"
                name="name"
                id="name"
                autoComplete="name"
                required
              />
              <input
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                autoComplete="email"
                required
              />
            </div>
            <textarea
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows="3"
              name="message"
              id="message"
              required
            />

            <button className="contact__email" type="submit" disabled={isSending}>
              {isSending ? "Sending..." : "Send message"}
            </button>
          </form>
        </div>
      </div>
      <div className="contact__footer">
        <span>April, 2023</span>
        <span>@hikmal</span>
      </div>
    </section>
  );
};

export default Contact;
