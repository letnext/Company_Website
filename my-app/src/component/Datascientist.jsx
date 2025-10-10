import React from "react";
import "./Course.css"; // ✅ universal CSS file

export default function Datascientist() {
  return (
    <div className="course-container">
      {/* Left Column */}
      <div className="course-left">
        <img src="/datascience.jpg" alt="Data Scientist" className="course-img" />
        <h2>Course Duration: 6 Months</h2>
         <h3>You'll Learn</h3>
        <ul>
          <li>
          Efficient data cleaning and transformation using Excel and Power Query



          </li>
          <li>
Advanced formulas and functions for data analysis (e.g., IF, INDEX/MATCH, XLOOKUP, array formulas)


</li>
          <li>Building and analyzing PivotTables and PivotCharts



</li>
          <li>Intro to Power Pivot and Data Models for handling large datasets



          </li>
          <li>
         Using Excel for statistical analysis (descriptive stats, regression, forecasting)



          </li>
          <li>
         Automating repetitive tasks with Macros and VBA
          </li>
          <li>
       Best practices for organizing and presenting data to stakeholders spreadsheet design
          </li>
        </ul>
        <p className="wow">Build smart devices that talk to each other.</p>

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

      {/* Right Column */}
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
