import React from 'react'
import "./events.css"

export const EventsNontechnical = () => {

  return (
    <>
    <nav>
      <span id="navbar1">Non-Technical Events</span>
    </nav>
    <div className="container">
      <div className="card">
        <img src="event 1.jpg" alt="event 1" />
        <h2>Event 1</h2>
        <p>Event date and time</p>
        <p>college name</p>
        <p>event type</p>
        <button><a href="/events/registration">Register</a></button>
      </div>
      <div className="card">
        <img src="event 2.jpg" alt="event 2" />
        <h2>Event 2</h2>
        <p>Event date and time</p>
        <p>college name</p>
        <p>event type</p>
        <button><a href="/events/registration">Register</a></button>
      </div>
      <div className="card">
        <img src="event 3.jpg" alt="event 3" />
        <h2>Event 3</h2>
        <p>Event date and time</p>
        <p>college name</p>
        <p>event type</p>
        <button><a href="/events/registration">Register</a></button>
      </div>
      <div className="card">
        <img src="event 4.jpg" alt="event 4" />
        <h2>Event 4</h2>
        <p>Event date and time</p>
        <p>college name</p>
        <p>event type</p>
        <button><a href="/events/registration">Register</a></button>
      </div>
      <div className="card">
        <img src="event 5.jpg" alt="event 5" />
        <h2>Event 5</h2>
        <p>Event date and time</p>
        <p>college name</p>
        <p>event type</p>
        <button><a href="/events/registration">Register</a></button>
      </div>
      
    </div>
  </>
  

    );
};

