import React, { useEffect, useState } from 'react'
import "./events.css"
import axios from 'axios';

export const EventsNontechnical = () => {
  const [events, setevents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  async function fetchEvents() {
    try {
      const response = await axios.get('http://localhost:3001/event/getevents/nontechnical');
      setevents(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }  

  return (
    <>
      <nav>
      <span id="navbar1">Non-Technical Events</span>
    </nav>
    <div className="container">
    {events.map(item=>(
      <div className="card">  
        <h2>{item.eventName}</h2>
        <p>{item.eventDateTime}</p>
        <p>{item.college}</p>
        <p>{item.eventType}</p>
        <button><a href="/events/registration">Register</a></button>
      </div>
       ))}
      </div>
   
    </>
  //   <>
  //   <nav>
  //     <span id="navbar1">Non-Technical Events</span>
  //   </nav>
  //   <div className="container">
  //     <div className="card">
  //       <img src="event 1.jpg" alt="event 1" />
  //       <h2>Event 1</h2>
  //       <p>Event date and time</p>
  //       <p>college name</p>
  //       <p>event type</p>
  //       <button><a href="/events/registration">Register</a></button>
  //     </div>
  //     <div className="card">
  //       <img src="event 2.jpg" alt="event 2" />
  //       <h2>Event 2</h2>
  //       <p>Event date and time</p>
  //       <p>college name</p>
  //       <p>event type</p>
  //       <button><a href="/events/registration">Register</a></button>
  //     </div>
  //     <div className="card">
  //       <img src="event 3.jpg" alt="event 3" />
  //       <h2>Event 3</h2>
  //       <p>Event date and time</p>
  //       <p>college name</p>
  //       <p>event type</p>
  //       <button><a href="/events/registration">Register</a></button>
  //     </div>
  //     <div className="card">
  //       <img src="event 4.jpg" alt="event 4" />
  //       <h2>Event 4</h2>
  //       <p>Event date and time</p>
  //       <p>college name</p>
  //       <p>event type</p>
  //       <button><a href="/events/registration">Register</a></button>
  //     </div>
  //     <div className="card">
  //       <img src="event 5.jpg" alt="event 5" />
  //       <h2>Event 5</h2>
  //       <p>Event date and time</p>
  //       <p>college name</p>
  //       <p>event type</p>
  //       <button><a href="/events/registration">Register</a></button>
  //     </div>
      
  //   </div>
  // </>
  

    );
};

