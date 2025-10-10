import React from "react";
import "./Course.css"; // reuse same styling

export default function Excel() {
  return (
    <div className="course-container">
      {/* Left Side - Course Info */}
      <div className="course-left">
        <img src="/excel.jpg" alt="Excel Expert" className="course-img" />
        <h2>Microsoft Excel - Beginner to Advance</h2>
         <h3>You'll Learn</h3>
        <ul>
          <li>
          Excel interface, navigation, and formatting basic



          </li>
          <li>
Formulas and functions (SUM, IF,                
     VLOOKUP, INDEX/MATCH, etc.)

</li>
          <li>Data sorting, filtering, and validation


</li>
          <li>Charts and graphs for data visualization
,PivotTables and PivotCharts
,	Conditional formatting



          </li>
          
          <li>Introduction to Macros and basic VBA</li>
          <li>
         Best practices for data organization and spreadsheet design


          </li>
        </ul>
        <p className="wow">Build smart devices that talk to each other.
</p>

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
