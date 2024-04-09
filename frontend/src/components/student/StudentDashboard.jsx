import React from 'react'
import './student.css'

export const StudentDashboard = () => {
  return (
<>
     <nav>
                <span id="nav1">Student Name</span>
                <span id="nav2"><a href="" id='a'>Register Events</a></span>
                <span id="nav3"><a href="" id='a'>History</a></span>
                <span id="nav4"><a href="" id='a'>Profile</a></span>
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
                                    <th>Event Name</th>
                                    <th>Event Type</th>
                                    <th>Date</th>
                                    <th>Branch</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Event 1</td>
                                    <td>Seminar</td>
                                    <td>24 May 10:00 AM</td>
                                    <td>Computer</td>
                                </tr>
                                <tr>
                                    <td>Event 2</td>
                                    <td>Hackathon</td>
                                    <td>12 April 12:00 PM</td>
                                    <td>IT</td>
                                </tr>
                                <tr>
                                    <td>Event 3</td>
                                    <td>Treasure Hunt</td>
                                    <td>28 May 11:30 AM</td>
                                    <td>Architecture</td>
                                </tr>
                                <tr>
                                    <td>Event 4</td>
                                    <td>Cultural</td>
                                    <td>23 April 10:00 AM</td>
                                    <td>Law</td>
                                </tr>
                                <tr>
                                    <td>Event 5</td>
                                    <td>Sports</td>
                                    <td>30 April 10:00 AM</td>
                                    <td>Sports</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    </>
  )
}
