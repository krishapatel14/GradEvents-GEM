import React from 'react'
import "./organizer.css"

export const OranizerDashboard = () => {

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
    <span id="nav1">New Lj Institute Of Engineering</span>
    <span id="nav2"><a href='' id='a'>Manage Events</a></span>
    <span id="nav3"><a href="" id='a'>History</a></span>
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
                href="#addEventModal"
                className="btn btn-success"
                data-toggle="modal"
              >
                <i className="material-icons"></i> <span>Add New Event</span>
              </a>
              <a
                href="#deleteEventModal"
                className="btn btn-danger"
                data-toggle="modal"
              >
                <i className="material-icons"></i> <span>Delete</span>
              </a>
            </div>
          </div>
        </div>
        <table className="table table-striped table-hover" id="myTable">
          <thead>
            <tr>
              <th>
                <span className="custom-checkbox">
                  <input type="checkbox" id="selectAll" />
                  <label htmlFor="selectAll" />
                </span>
              </th>
              <th>Event Name</th>
              <th>Event type</th>
              <th>Date</th>
              <th>Branch</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span className="custom-checkbox">
                  <input
                    type="checkbox"
                    id="checkbox1"
                    name="options[]"
                    defaultValue={1}
                  />
                  <label htmlFor="checkbox1" />
                </span>
              </td>
              <td>Event 1</td>
              <td>Seminar</td>
              <td>24 may 10am</td>
              <td>Computer</td>
              <td>
                <a href="#editEventModal" className="edit" data-toggle="modal">
                  <i
                    className="material-icons"
                    data-toggle="tooltip"
                    title="Edit"
                  >
                    
                  </i>
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <span className="custom-checkbox">
                  <input
                    type="checkbox"
                    id="checkbox2"
                    name="options[]"
                    defaultValue={1}
                  />
                  <label htmlFor="checkbox2" />
                </span>
              </td>
              <td>Event 2</td>
              <td>Hackathon</td>
              <td>12 April 12pm </td>
              <td>IT</td>
              <td>
                <a href="#editEventModal" className="edit" data-toggle="modal">
                  <i
                    className="material-icons"
                    data-toggle="tooltip"
                    title="Edit"
                  >
                    
                  </i>
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <span className="custom-checkbox">
                  <input
                    type="checkbox"
                    id="checkbox3"
                    name="options[]"
                    defaultValue={1}
                  />
                  <label htmlFor="checkbox3" />
                </span>
              </td>
              <td>Event 3</td>
              <td>Tresure Hunt</td>
              <td>28 may 11:30 am</td>
              <td>Architecture</td>
              <td>
                <a href="#editEventModal" className="edit" data-toggle="modal">
                  <i
                    className="material-icons"
                    data-toggle="tooltip"
                    title="Edit"
                  >
                    
                  </i>
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <span className="custom-checkbox">
                  <input
                    type="checkbox"
                    id="checkbox4"
                    name="options[]"
                    defaultValue={1}
                  />
                  <label htmlFor="checkbox4" />
                </span>
              </td>
              <td>Event 4</td>
              <td>cultural</td>
              <td>23 april 10 am</td>
              <td>Law</td>
              <td>
                <a href="#editEventModal" className="edit" data-toggle="modal">
                  <i
                    className="material-icons"
                    data-toggle="tooltip"
                    title="Edit"
                  >
                    
                  </i>
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <span className="custom-checkbox">
                  <input
                    type="checkbox"
                    id="checkbox5"
                    name="options[]"
                    defaultValue={1}
                  />
                  <label htmlFor="checkbox5" />
                </span>
              </td>
              <td>Event 5</td>
              <td>sports</td>
              <td>30 April 10 am</td>
              <td>sports</td>
              <td>
                <a href="#editEventModal" className="edit" data-toggle="modal">
                  <i
                    className="material-icons"
                    data-toggle="tooltip"
                    title="Edit"
                  >
                    
                  </i>
                </a>
              </td>
            </tr>
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

