import React from 'react'

export const OranizerDashboard = () => {
  const divStyle1 = {
    color: 'blue',
    padding: '10px',
    margin:'20px'
  };
  return (
    <div>
      <div style={divStyle1}><button>Add Event</button></div>
      <div style={divStyle1}><button>Update Event</button></div>
      <div style={divStyle1}><button>Delete Event</button></div>
      <div style={divStyle1}><button>Display Event Details</button></div>
      <div style={divStyle1}><button>Past Events history</button></div>
    </div>
  )
}
