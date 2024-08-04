import React, { useEffect, useState } from 'react'
import './studentProfile.css'
import axios from 'axios';

export const StudentProfile = () => {
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
        const id = getCookie("studentId");
        if (id) {
          setCookieValue(id);
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
      //   });
      try {
        let url = `http://localhost:3001/user/${cookieValue}`;
        const response = await axios.get(url);
        console.log(response.data);

        // Assuming the response data is an array with a single object
        const userData = response.data[0];
        console.log('College:', userData.college);
        console.log('Name:', userData.name);
        console.log('Phone No:', userData.phoneNo);
    
        setData(userData); 
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
    
    <div id="containerstu">
  <div id="primage"></div>
  <div id="profile">profile</div>
  <div id="innercontainerstu">
    <label htmlFor="Studentname" >Student Name==</label>
    <span id="Studentname">{data.name}</span>
    <br />
    <br />
    <br />
    <label htmlFor="Collegename">College Name==</label>
    <span id="Collegename" />{data.college}
    <br />
    <br />
    <br />
    <label htmlFor="Enrollment">Enrollment no==</label>
    <span id="Enrollment" />{cookieValue}
    <br />
    <br />
    <br />
    <label htmlFor="phone2">Phone Number==</label>
    <span id="phone2" />{data.phoneNo}
    <br />
    <br />
    <br />
    <label htmlFor="email1">Email id==</label>
    <span id="email1" />{data.email}
    <br />
    <br />
  </div>
</div>

  
  )
}
