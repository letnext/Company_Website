import React from "react";
import "./Course.css"; // reuse same styling

export default function Embedded() {
  return (
    <div className="course-container">
      {/* Left Side - Course Info */}
      <div className="course-left">
        <img src="/embedded.jpg" alt="Embedded System" className="course-img" />
        <h2>Embedded System </h2>
       
        <h3>You'll Learn</h3>
        <ul>
          <li>
          Arduino, Raspberry Pi
          </li>
          <li>
Sensors & Actuators
</li>
          <li>Embedded C

</li>
          <li>loT Basics


          </li>
          <li>
          Hardware Integration


          </li>
        </ul>
        <p className="wow">Build smart devices using microcontrollers.</p>

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

      {/* Right Side - Registration Form */}
      <div className="course-right">
      <h2>Register Now</h2>
        <form className="course-form">
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
