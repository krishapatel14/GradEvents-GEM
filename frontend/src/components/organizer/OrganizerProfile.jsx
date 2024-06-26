import React, { useEffect, useState } from 'react'
import './organizerProfile.css'
import axios from 'axios';

export const OrganizerProfile = () => {
  const[data,setData]=useState([])
  const [cookieValue, setCookieValue] = useState(null);
    useEffect(() => {
        // Function to retrieve the value of a cookie
        function getCookie(name) {
          const nameEQ = name + "=";
          const cookies = document.cookie.split(';');
          for(let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i];
            while (cookie.charAt(0) === ' ') {
              cookie = cookie.substring(1, cookie.length);
            }
            if (cookie.indexOf(nameEQ) === 0) {
              return cookie.substring(nameEQ.length, cookie.length);
            }
          }
          return null;
        }
        // Retrieve the value of the "username" cookie
        const email = getCookie("orgEmail");
        if (email) {
          setCookieValue(email);
        }
    },[]);
    const fetchData=async()=>{
      // let url = `http://localhost:3001/user/${cookieValue}`;
      //    await axios.get(url)
      //     .then(response => {
      //       console.log(response.data);
      //       setData(response.data); 
      //       console.log(data)
      //     })
      //     .catch(error => {
      //       console.error('Error fetching data:', error);
      //     });
      try {
        let url = `http://localhost:3001/organizer/${cookieValue}`;
        const response = await axios.get(url);
        console.log(response.data);
    
        // Assuming the response data is an array with a single object
        const orgData = response.data;
        // console.log('College:', orgData.college);
        // console.log('Name:', orgData.name);
        // console.log('Phone No:', orgData.phoneNo);
    
        setData(orgData); // Set the single object as data
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    
    }
    useEffect( () => {
      if (cookieValue) {
        fetchData()
      }
    }, [cookieValue]);
  return (
    <div id="containerorg">
     <div id="primage"></div>
       <div id="profile">profile</div>
        <div id="innercontainerorg">
          <label htmlFor="Collegename">College Name==</label>
          <span id="Collegename">{data.college}</span>
          <br />
          <br />
          <br />
          <label htmlFor="CollegeCode1">College Code==</label>
          <span id="CollegeCode" />{data.collegeCode}
          <br />
          <br />
          <br />
          <label htmlFor="phone">Phone No==</label>
          <span id="phone" />{data.phoneNo}
          <br />
          <br />
          <br />
          <label htmlFor="email2">Email id==</label>
          <span id="email2" />{cookieValue}
          <br />
          <br />
        </div>
  </div>
  
  )
}
