import React from "react";
import "./Course.css"; // reuse same styling

export default function Mobile() {
  return (
    <div className="course-container">
      {/* Left Side */}
      <div className="course-left">
        <img src="/mobile.jpg" alt="Mobile App Developer" className="course-img" />
        <h2>Mobile App Developer</h2>
        <h3>You'll Learn</h3>
        <ul>
          <li>
            Flutter / React Native
          </li>
          <li>Firebase & APIs</li>
          <li>App UI/UX</li>
          <li>Play Store & App Store Deployment
          </li>
          <li>
            App Monetization
          </li>
        </ul>
        <p className="wow">Create mobile apps for Android and iOS with real-time features.</p>

<h3>Course Duration</h3>
<p className="wow"> 80 hours of course + 1 year of support & service</p>

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
        <label>APPLY HERE</label>
          <label>Full Name*</label>
          <input type="text" required />

          <label>Email*</label>
          <input type="email" required />

          <label>Phone*</label>
          <input type="tel" required />

          <label>Degree*</label>
          <input type="text" required />

          <label>Specialization</label>
          <input type="text" />

          <label>Year of Passing</label>
          <input type="text" />

          <label>% of Marks</label>
          <input type="text" />

          <label>College State</label>
          <input type="text" />

          <label>College Name</label>
          <input type="text" />

          <button type="submit" className="course-submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
