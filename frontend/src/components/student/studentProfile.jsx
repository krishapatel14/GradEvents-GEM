import React from 'react'
import './studentProfile.css'

export const StudentProfile = () => {
  return (
    <div id="containerstu">
  <div id="primage"></div>
  <div id="profile">profile</div>
  <div id="innercontainerstu">
    <label htmlFor="Studentname">Student Name:</label>
    <span id="Studentname"></span>
    <br />
    <br />
    <br />
    <label htmlFor="Collegename">College Name:</label>
    <span id="Collegename" />
    <br />
    <br />
    <br />
    <label htmlFor="Enrollment">Enrollment no:</label>
    <span id="Enrollment" />
    <br />
    <br />
    <br />
    <label htmlFor="contact">Phone Number:</label>
    <span id="contact" />
    <br />
    <br />
    <br />
    <label htmlFor="email1">Email id:</label>
    <span id="email1" />
    <br />
    <br />
  </div>
</div>

  
  )
}
