import React from "react";
import "./Course.css"; // reuse same styling

export default function Blockchain() {
  return (
    <div className="course-container">
      {/* Left Side - Course Info */}
      <div className="course-left">
        <img src="/blockchain.jpg" alt="Blockchain" className="course-img" />
        <h2>Blockchain Management</h2>

        <h3>You'll Learn</h3>
        <ul>
          <li>
            Fundamentals of blockchain and distributed ledger technology


          </li>
          <li>
            Cryptographic principles behind blockchain security
          </li>
          <li>Consensus mechanisms (Proof of Work, Proof of Stake, etc.)

          </li>
          <li>Smart contracts and decentralized applications (DApps)


          </li>
          <li>
            Use cases in finance, supply chain, healthcare, and government

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
