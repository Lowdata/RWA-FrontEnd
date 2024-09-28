import  { useState } from "react";
import { TextField, Button } from "@mui/material";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd submit the form data to an API endpoint here
    console.log("Form submitted:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  const styles = {
    container: {
      backgroundColor: "#f0f8ff", // light blue background
      color: "#000080", // navy blue text
      padding: "40px",
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
    },
    formContainer: {
      maxWidth: "600px",
      margin: "0 auto",
      backgroundColor: "#ffffff", // white background for form
      padding: "30px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // subtle shadow effect
      borderRadius: "8px",
    },
    header: {
      fontSize: "36px",
      fontWeight: "bold",
      marginBottom: "20px",
    },
    textField: {
      marginBottom: "20px",
      width: "100%",
    },
    button: {
      backgroundColor: "#000080",
      color: "#ffffff",
      padding: "10px 20px",
      marginTop: "20px",
    },
    submittedMessage: {
      fontSize: "20px",
      color: "green",
      marginTop: "20px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h1 style={styles.header}>Contact Us</h1>
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              name="name"
              variant="outlined"
              value={form.name}
              onChange={handleChange}
              style={styles.textField}
              required
            />
            <TextField
              label="Email"
              name="email"
              variant="outlined"
              type="email"
              value={form.email}
              onChange={handleChange}
              style={styles.textField}
              required
            />
            <TextField
              label="Message"
              name="message"
              variant="outlined"
              multiline
              rows={4}
              value={form.message}
              onChange={handleChange}
              style={styles.textField}
              required
            />
            <Button type="submit" style={styles.button} variant="contained">
              Submit
            </Button>
          </form>
        ) : (
          <div style={styles.submittedMessage}>
            Thank you for your message! We will get back to you shortly.
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
