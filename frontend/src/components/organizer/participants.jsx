import React, { useEffect, useState } from 'react'
import "../events/events.css"
import axios from 'axios';

export const Participants = () => {
  const [events, setevents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);
  function getEventName(url) {
    const urlParts = url.split('?');
    if (urlParts.length > 1) {
      const queryParams = urlParts[1].split('&');
      for (let param of queryParams) {
        const [key, value] = param.split('=');
        if (key === 'eventName') {
          return value;
        }
      }
    }
    return null;
  }
  async function fetchEvents() {
    let url=window.location.href;
    let eventName=getEventName(url);
    eventName.replace("-"," ");
    console.log(eventName);
    try {
      const response = await axios.get(`http://localhost:3001/user/eventreg/getevents/${eventName}`);
      setevents(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }  
  return (
    <>
    <nav>
    <span id="navbar1">Participants</span>
  </nav>
  <div className="container">
  {events.map(item=>(
    <div className="card">  
      {/* students in particular event */}
      <h2>{item.username}</h2>
      <p>{item.useremail}</p>
      <p>{item.userenroll}</p>
      <p>{item.usercollege}</p>
      <p>{item.usercontact}</p>
    </div>
     ))}
  </div>
  </>
    );
};