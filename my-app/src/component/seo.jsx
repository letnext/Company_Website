import React from "react";
import "./Course.css"; // ✅ universal CSS for all courses

export default function Seo() {
  return (
    <div className="course-container">
      {/* Left Side */}
      <div className="course-left">
        <img src="/seo1.jpg" alt="SEO" className="course-img" />
         <h2>Digital Marketing</h2>
        <h3>You'll Learn</h3>
        <ul>
          <li>
            SEO & SEM

          </li>
          <li>
Meta & Google Ads
</li>
          <li>Social Media Strategy</li>
          <li>Email & Influencer Marketing

          </li>
          <li>
            App Monetization
          </li>
        </ul>
        <p className="wow">Create mobile apps for Android and iOS with real-time features.</p>

<h3>Course Duration</h3>
<p className="wow">80 hours of course + 1 year of support

& services
</p>

<h3>Services</h3>
<ul>
  <li>Live Classes with expert mentors</li>
  <li>Real Projects &amp; Portfolio Building</li>
  <li>Certificate on Completion</li>
  <li>Both Online &amp; Offline Available - based on student needs</li>
</ul>
      </div>

      {/* Right Side */}
      <div className="course-right">
      <h2>Register Now</h2>
        <form className="course-form">
          <label>Full Name*</label>
          <input type="text" placeholder="Enter your full name" required />

          <label>Email ID*</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Mobile*</label>
          <input type="tel" placeholder="Enter your mobile number" required />

          <label>Degree*</label>
          <input type="text" placeholder="Enter your degree" required />

          <label>Specialization*</label>
          <input type="text" placeholder="Enter specialization" required />

          <label>YOP (Year of Passing)*</label>
          <input type="text" placeholder="Enter year of passing" required />

          <label>% of Marks*</label>
          <input type="text" placeholder="Enter your percentage" required />

          <label>College State*</label>
          <input type="text" placeholder="Enter state" required />

          <label>College Name*</label>
          <input type="text" placeholder="Enter college name" required />

          <button type="submit" className="course-submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
