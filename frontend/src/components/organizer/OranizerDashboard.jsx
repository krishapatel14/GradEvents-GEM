import React, { useEffect, useState } from 'react'
import "./organizer.css"
import axios from 'axios';

export const OranizerDashboard = () => {
  const [data, setData] = useState([]);
  const [cookieValue, setCookieValue] = useState(null);

  useEffect(() => {
    function getCookie(name) {
      const nameEQ = name + "=";
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
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

    // Retrieve the value of the "orgName" cookie
    const username = getCookie("orgName");
    if (username) {
      setCookieValue(username);
    }
  }, []);
  useEffect(() => {
    if (cookieValue) {
      let url = 'http://localhost:3001/organizer/participants';
      axios.get(url, {
        params: {
          college: cookieValue
        }
      })
        .then(response => {
          setData(response.data); // Adjust based on the structure of the response
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  }, [cookieValue]);
  return (
    <>
     <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round"
  />
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
  />
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <>
  <nav>
    <span id="nav1">{cookieValue?cookieValue:null}</span>
    <span id="nav2"><a href='' id='a'>Manage Events</a></span>
    {/* <span id="nav3"><a href="" id='a'>History</a></span> */}
    <span id="nav4"><a href="/organizer/profile" id='a'>profile</a></span>
  </nav>
  <div className="container-xl">
    <div className="table-responsive">
      <div className="table-wrapper">
        <div className="table-title">
          <div className="row">
            <div className="col-sm-6">
              <h2>
                Manage<b>Events</b>
              </h2>
            </div>
            <div className="col-sm-6">
              <a
                href="/events/addevent"
                className="btn btn-success"
                data-toggle="modal"
              >
                <i className="material-icons"></i> <span>Add New Event</span>
              </a>
              {/* <a
                href="#deleteEventModal"
                className="btn btn-danger"
                data-toggle="modal"
              >
                <i className="material-icons"></i> <span>Delete</span>
              </a> */}
            </div>
          </div>
        </div>
        <table className="table table-striped table-hover" id="myTable">
          <thead>
            <tr>
              <th>Type</th>
              <th>Name</th>
              <th>Date</th>
              <th>College</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.eventType}</td>
                <td>{item.eventName}</td>
                <td>{item.eventDateTime}</td>
                <td>{item.college}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div id="addEventModal" className="modal fade">
    <div className="modal-dialog">
      <div className="modal-content">
        <form>
          <div className="modal-header">
            <h4 className="modal-title">Add Event</h4>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-hidden="true"
            >
              ×
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label>Event Name</label>
              <input
                type="text"
                id="addformname"
                className="form-control"
                required=""
              />
            </div>
            <div className="form-group">
              <label>Event type</label>
              <input
                type="text"
                id="addformevent"
                className="form-control"
                required=""
              />
            </div>
            <div className="form-group">
              <label>Date</label>
              <text
                className="form-control"
                id="addformdate"
                required=""
              ></text>
            </div>
            <div className="form-group">
              <label>Branch</label>
              <input
                type="text"
                id="addformbranch"
                className="form-control"
                required=""
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
  </div>
  <div id="editEventModal" className="modal fade">
    <div className="modal-dialog">
      <div className="modal-content">
        <form>
          <div className="modal-header">
            <h4 className="modal-title">Edit Event</h4>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-hidden="true"
            >
              ×
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label>Event Name</label>
              <input type="text" className="form-control" required="" />
            </div>
            <div className="form-group">
              <label>Event type</label>
              <input type="text" className="form-control" required="" />
            </div>
            <div className="form-group">
              <label>Date</label>
              <text className="form-control" required=""></text>
            </div>
            <div className="form-group">
              <label>Branch</label>
              <input type="text" className="form-control" required="" />
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
              className="btn btn-info"
              defaultValue="Save"
              onclick="myEditFunction(1)"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
  <div id="deleteEventModal" className="modal fade">
    <div className="modal-dialog">
      <div className="modal-content">
        <form>
          <div className="modal-header">
            <h4 className="modal-title">Delete Event</h4>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-hidden="true"
            >
              ×
            </button>
          </div>
          <div>
            <label
              htmlFor="delrow"
              style={{ marginRight: 5, marginTop: 10, marginLeft: 30 }}
            >
              enter event no:
            </label>
            <input id="delrow" type="text" style={{ marginTop: 10 }} />
          </div>
          <div className="modal-body">
            <p>Are you sure you want to delete these Records?</p>
            <p className="text-warning">
              <small>This action cannot be undone.</small>
            </p>
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
              className="btn btn-danger"
              defaultValue="Delete"
              onclick=" myDeleteFunction(event)"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</>

</>

    );
};

