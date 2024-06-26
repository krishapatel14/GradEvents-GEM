import React, { useEffect, useState } from 'react'
import './student.css'
import axios from 'axios';

export const StudentDashboard = () => {
    const [cookieValue, setCookieValue] = useState(null);
    const [data, setData] = useState([]);
    const [cookieValue2,setCookieValue2] =useState(null)

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
        const username = getCookie("studentName");
        if (username) {
          setCookieValue(username);
        }
        const id=getCookie('studentId')
        if(id){
            setCookieValue2(id);
        }
    },[]);
    useEffect(() => {
        if (cookieValue2) {
          let url = 'http://localhost:3001/user/eventreg/participants';
          axios.get(url, {
            params: {
              userenroll: cookieValue2
            }
          })
            .then(response => {
                console.log(response.data);
              setData(response.data); // Adjust based on the structure of the response
            })
            .catch(error => {
              console.error('Error fetching data:', error);
            });
        }
      }, [cookieValue2]);
  return (
<>
           <nav>
                <span id="nav1">{cookieValue ? cookieValue : ""}</span>
                <span id="nav2"><a href="" id='a'>Registered Events</a></span>
                <span id="nav3"><a href="/events" id='a'>Events</a></span>
                <span id="nav4"><a href="/student/profile" id='a'>Profile</a></span>
            </nav>
            <div className="container-xl">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h2>Registered <b>Events</b></h2>
                                </div>
                            </div>
                        </div>
                        <table className="table table-striped table-hover" id="myTable">
                            <thead>
                                <tr>
                                {/* <th>Type</th> */}
                                <th>Event Name</th>
                                <th>Enrollment</th>
                                <th>Event CollegeName</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item) => (
                                <tr key={item.id}>
                                    {/* <td>{item.eventType}</td> */}
                                    <td>{item.userEvent}</td>
                                    <td>{item.userenroll}</td>
                                    <td>{item.usercollege}</td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    </>
  )
}
