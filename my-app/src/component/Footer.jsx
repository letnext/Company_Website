import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaClock } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left - Logo & Working Hours */}
        <div className="footer-left">
          <img src="/companylogo.png" alt="Company Logo" className="footer-logo" />
          <div className="working-hours">
            <p className="footer-title">Working Hours</p>
            <p><FaClock /> Mon - Sat</p>
            <p>9.00 AM - 5.00 PM</p>
          </div>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h3>Services</h3>
          <ul>
            <li>Web Development</li>
            <li>App Development</li>
            <li>Graphic Design</li>
            <li>UI/UX Design</li>
            <li>Digital Marketing</li>
            <li>Software Testing</li>
            <li>SEO Specialist</li>
            <li>Photography</li>
            <li>Videography</li>
            <li>Social Media Handling</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="how">How It Works</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#career">Career</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>

          </ul>
        </div>

        {/* Contact Details */}
        <div className="footer-col">
          <h3>For more details</h3>
          <p><FaMapMarkerAlt /> 217,Kulavikaradu,P.VellalaPalayam,Gobi<br />Erode, Tamil Nadu 638476</p>
          <p><FaPhoneAlt /> +91 9940847940</p>
          <p><FaEnvelope /> lnt@letnexttechnologies.com</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} LetNext Technologies all rights reserved.</p>
        <div className="footer-links-bottom">
          <Link to="/terms">Terms of Use</Link> |{" "}
        <Link to="/privacy">Privacy Policy</Link>
        </div>
        <div className="social-icons">
          <a href="https://www.facebook.com/profile.php?id=61580107612289"><FaFacebookF /></a>
          <a href="https://www.instagram.com/letnext_technologies?igsh=MWF5MnZvN3pvbjF2" target="_blank" rel="noreferrer"><FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/letnexttechnologies1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  );
}
