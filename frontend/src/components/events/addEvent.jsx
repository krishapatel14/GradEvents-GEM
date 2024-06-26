import React, { useState } from 'react'
import './addevents.css'
import axios from 'axios'

export const AddEvent = () => {
  const [eventName, seteventName] = useState("")
  const [eventType, seteventType] = useState("")
  const [college, setcollege] = useState("")
  const [eventDateTime,seteventdatetime]=useState(new Date())
  const[cordinatorName,setcordinatorname]=useState("")
  const[contactEmail,setcontactemail]=useState("")


    const handleSubmit=async(event)=>{
      event.preventDefault();
      await axios.post('http://localhost:3001/event/addevent',{eventName,eventType,college,eventDateTime,cordinatorName,contactEmail})
      .then(res=>{
        console.log(res.data);
      }).catch(err=>console.log(err));
      window.location.href='/organizer';
    }
  return (

    <div className="modal-dialog">
      <div className="modal-content">
        <form id='addEvent' onSubmit={handleSubmit} >
          <div className="modal-header">
            <h4 className="modal-title">Add Event</h4>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label>Event Name</label>
              <input
                type="text"
                id="addformname"
                className="form-control"
                required=""
                onChange={(e)=>seteventName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Event Type:</label>
              <br />
              <select name="eventType" id="selectForm" onChange={(e)=>seteventType(e.target.value)} className='select-control'>
                <option value="">-- Select type of event</option>
                <option value="seminar">Seminar/Workshop</option>
                <option value="technical">Technical</option>
                <option value="cultural">Cultural</option>
                <option value="nontechnical">Non-Technical</option>
                <option value="other">Other</option>
              </select>
              {/* <input
                type="text"
                id="addformevent"
                className="form-control"
                required=""
                onChange={(e)=>seteventType(e.target.value)}
              /> */}
            </div>
            <div className="form-group">
              <label>Date</label>
              <input
              type="datetime-local"
                className="form-control"
                id="addformdate"
                required=""
                onChange={(e)=>seteventdatetime(e.target.value)}

              ></input>
            </div>
            <div className="form-group">
              <label>College</label>
              <input
                type="text"
                id="addformbranch"
                className="form-control"
                required=""
                onChange={(e)=>setcollege(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Cordinator Name</label>
              <input
                type="text"
                id="addformname"
                className="form-control"
                required=""
                onChange={(e)=>setcordinatorname(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Contact email</label>
              <input
                type="email"
                id="addformname"
                className="form-control"
                required=""
                onChange={(e)=>setcontactemail(e.target.value)}
              />
            </div>
          </div>
          <div className="modal-footer">
            <input
              type="button"
              className="btn btn-default"
              data-dismiss="modal"
              defaultValue="Cancel"
            />
            <input
              type="submit"
              className="btn btn-success"
              onclick="myCreateFunction(event)"
              defaultValue="Add"
            />
          </div>
        </form>
      </div>
     </div>

  )
}
