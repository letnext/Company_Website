import React from "react";
import "./Course.css"; // reuse same styling

export default function Mlengineer() {
  return (
    <div className="course-container">
      {/* Left Side */}
      <div className="course-left">
        <img src="/ml.jpg" alt="Machine Learning Engineer" className="course-img" />
        <h2>Machine Learning Engineer</h2>
       
        <h3>You'll Learn</h3>
        <ul>
          <li>
         Python & ML Libraries



          </li>
          <li>
Supervised/Unsupervised Learning

</li>
          <li>Neural Networks

</li>
          <li>
NLP & Computer Vision



          </li>
          <li>
          Real Al Projects


          </li>
        </ul>
        <p className="wow">Teach machines to think, learn, and predict outcomes.</p>

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
