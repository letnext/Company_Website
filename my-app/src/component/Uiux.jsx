import React from "react";
import "./Course.css"; // reuse same styling

export default function Uiux() {
  return (
    <div className="course-container">
      {/* Left Side */}
      <div className="course-left">
        <img src="/uiux1.jpg" alt="UI/UX Designer" className="course-img" />
         <h2>UI/UX Design</h2>
        <h3>You'll learn</h3>
        <ul>
          <li>
           Figma / Adobe XD

          </li>
          <li>

Wireframing & Prototyping
</li>
          <li>User Research
</li>
          <li>Design Systems

          </li>
          <li>
            Usability Testing

          </li>
        </ul>
        <p className="wow">Design meaningful and user-friendly experiences.</p>

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
        <label>Apply Here</label>
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
