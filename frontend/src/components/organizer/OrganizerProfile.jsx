import React from 'react'
import './organizerProfile.css'

export const OrganizerProfile = () => {
  return (
    <div id="container">
    <div id="primage"></div>
    <div id="profile">profile</div>
    <div id="innercontainer">
      <label htmlFor="Collegename">College Name:</label>
      <span id="Collegename" />
      <br />
      <br />
      <br />
      <label htmlFor="CollegeCode">College Code:</label>
      <span id="CollegeCode" />
      <br />
      <br />
      <br />
      <label htmlFor="contact">Phone Number:</label>
      <span id="contact" />
      <br />
      <br />
      <br />
      <label htmlFor="email">Email id:</label>
      <span id="email" />
      <br />
      <br />
    </div>
  </div>
  
  )
}
