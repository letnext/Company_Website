import React, { useState } from "react";
import "./Course.css"; // now using global course.css

export default function Fullstack() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    degree: "",
    specialization: "",
    yop: "",
    marks: "",
    collegeState: "",
    collegeName: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully ✅");
    console.log(formData);
  };

  return (
    <div className="course-container">
      {/* Left Column */}
      <div className="course-left">
        <img src="/fullstack.jpg" alt="Full Stack Developer" className="course-img" />
        <h2>Full Stack Developer</h2>
        <h3>You'll Learn</h3>
        <ul>
          <li>
           HTML, CSS, JS


          </li>
          <li>
Hosting & Domains
</li>
          <li>Frameworks (Bootstrap, React)
</li>
          <li>Git & GitHub


          </li>
          <li>
           Real Website Projects

          </li>
        </ul>
        <p className="wow">Learn to build responsive and interactive websites.</p>

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

      {/* Right Column (Form) */}
      <div className="course-right">
        <h2>Register Now</h2>
        <form onSubmit={handleSubmit} className="course-form">
          <label>Full Name*</label>
          <input type="text" name="fullName" required onChange={handleChange} />

          <label>Email ID*</label>
          <input type="email" name="email" required onChange={handleChange} />

          <label>Mobile*</label>
          <input type="tel" name="mobile" required onChange={handleChange} />

          <label>Degree*</label>
          <input type="text" name="degree" required onChange={handleChange} />

          <label>Specialization*</label>
          <input type="text" name="specialization" required onChange={handleChange} />

          <label>YOP*</label>
          <input type="number" name="yop" required onChange={handleChange} />

          <label>% of Marks*</label>
          <input type="number" name="marks" required onChange={handleChange} />

          <label>College State*</label>
          <input type="text" name="collegeState" required onChange={handleChange} />

          <label>College Name*</label>
          <input type="text" name="collegeName" required onChange={handleChange} />

          <button type="submit" className="course-submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
