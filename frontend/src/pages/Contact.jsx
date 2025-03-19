import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaFacebook, FaLine} from 'react-icons/fa'; // ใช้ FontAwesome Icons
import { AiFillTikTok } from "react-icons/ai";




const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill out all fields.");
      return;
    }

    setError("");

    emailjs
      .send(
        "service_kr2oah9", // EmailJS Service ID
        "template_o3b05uq", //EmailJS Template ID
        formData,
        "pZgd8quaP6Pxn3DJr" //EmailJS Public Key
      )
      .then(
        () => {
          setIsSent(true);
          setFormData({ name: "", email: "", message: "" });
        },
        (err) => {
          setError("Failed to send the message. Please try again.");
          console.error("EmailJS Error:", err);
          console.error("Details:", err.text); 
        }
      );
  };

  return (
    <div className="contact-page">
      <title>ติดต่อเรา - Micro Agrotec</title>
      <Header />
      
      {/* ช่องทางโซเชียล */}
      <div className="social-links" style={{ textAlign: "center", marginTop: "60px" }}>
        <a 
          href="https://web.facebook.com/profile.php?id=61555246499001" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-icon">
          <FaFacebook size={30} />
        </a>
        <a 
          href="https://www.twitter.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-icon">
          <FaLine size={30} />
        </a>
        <a 
          href="https://www.instagram.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-icon">
          <AiFillTikTok size={30} />
        </a>
      </div>

      {/* ฟอร์มติดต่อ */}
      <div className="contact-form font-thai" style={{ maxWidth: "600px", margin: "30px auto", padding: "20px", backgroundColor: "#f4f7fa", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
        <h2 style={{ textAlign: "center", fontSize: "24px", color: "#333",fontWeight: "bold" }}>ติดต่อเรา</h2>
        {isSent && <p style={{ color: "green", textAlign: "center" }}>ข้อความของคุณถูกส่งแล้ว!</p>}
        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", fontWeight: "bold" }}>ชื่อ</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "16px",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", fontWeight: "bold" }}>อีเมล</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "16px",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", fontWeight: "bold" }}>ข้อความ</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "16px",
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              padding: "12px 20px",
              backgroundColor: "#007BFF",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              width: "100%",
              fontSize: "16px",
            }}
          >
            ส่งข้อความ
          </button>
        </form>
      </div>

      <Footer />
      
      <style jsx>{`
        .social-links {
          display: flex;
          justify-content: center; /* จัดให้ไอคอนอยู่ตรงกลาง */
          gap: 20px; /* ระยะห่างระหว่างไอคอน */
        }

        .social-icon {
          display: inline-block;
          transition: transform 0.3s ease, box-shadow 0.3s ease; /* การเปลี่ยนแปลงเอฟเฟกต์ที่เรียบง่าย */
        }

        .social-icon:hover {
          transform: translateY(-5px); /* ให้ไอคอนยกขึ้นเมื่อเอาเมาส์ชี้ */
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); /* เพิ่มเงาให้ไอคอน */
        }
      `}</style>
    </div>
  );
};

export default Contact;
