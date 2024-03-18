import React from 'react'

export const OranizerDashboard = () => {
  const nav = {
    border: "2px solid black",
    padding: "20px",
    "background-color": "cadetblue"
  }
  const nav1={
    "padding-right":"750px",
    "font-size":"larger",
    "font-family": "'Trebuchet MS', 'Lucida Grande', 'Arial', sans-serif"
  }
  const nav2={
    "padding-left": "30px"
  }
  const crud_main={
    // border:"2px solid blue",
    padding:"275px 10px 275px 125px"
  }
  const crud={
    border:"2px solid blue",
    "border-radius":"10px",
    "border-radius": "10px",
    "background-color": "rgb(5, 5, 38)",
    padding:"150px 70px 150px 70px",
    color: "aliceblue",
    opacity: "0.9",
    "margin-right": "80px"

  }
  return (
    <>
      <nav style={nav}>
        <span id="nav1" style={nav1}>GradEvents</span>
        <span id="nav2" style={nav2}>EventList</span>
        <span id="nav3"  style={nav2}/>
        History
        <span id="nav4" style={nav2}>Profile</span>
      </nav>
      <div id="crud1" style={crud_main}>
        <span id="create" style={crud}>Create Event</span>
        <span id="update" style={crud}>Update Event</span>
        <span id="review" style={crud}>Review Event</span>
        <span id="delete" style={crud}>Delete Event</span>
        &nbsp;&nbsp;
      </div>
    </>

  )
}
