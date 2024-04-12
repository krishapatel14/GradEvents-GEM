import React from 'react'
import './organizerProfile.css'

export const OrganizerProfile = () => {
  return (
    <div id="containerorg">
     <div id="primage"></div>
       <div id="profile">profile</div>
        <div id="innercontainerorg">
          <label htmlFor="Collegename">College Name:</label>
          <span id="Collegename"></span>
          <br />
          <br />
          <br />
          <label htmlFor="CollegeCode1">College Code:</label>
          <span id="CollegeCode" />
          <br />
          <br />
          <br />
          <label htmlFor="contact">Phone No:</label>
          <span id="contact" />
          <br />
          <br />
          <br />
          <label htmlFor="email2">Email id:</label>
          <span id="email2" />
          <br />
          <br />
        </div>
  </div>
  
  )
}
