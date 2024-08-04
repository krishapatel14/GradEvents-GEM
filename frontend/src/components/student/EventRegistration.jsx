import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import "./css/eventReg.css"

export const EventRegistration = () => {

    const container = {
        "max-width": "600px",
        "height": "700px",
        " margin": " auto",
        "background-color": "#fff",
        "padding": "20px",
        "border-radius": "5px",
        "box-shadow": "0 0 10px rgba(0,0,0,0.1)",
        "text-align": "left"
    }
    const h2 = {
        "text-align": " center",
        "margin-top": "20px",
        "margin-bottom": "20px",
        // "background-color":"green",
        "color":"purple",
        "font-size": "3em",
        "line-height": "1.4",
        "font-weight": "bold"
    }
    const form = {
        "margin-bottom": "50px"

    }
    const form_div = {
        "margin-bottom": "30px"
    }
    const label = {
        "display": " block",
        "font-weight": "bold",
        "font-size":"20px"
    }
    const input = {
        "width": "100%",
        "padding": "10px",
        "border": "1px solid #ccc",
        "border-radius": " 5px",
    }
    const error = {
        "color": "red"
    }
    const button={
        "margin-top":"30px",
        "margin-left":"400px",
        "background-color":"lightblue",
        "width": "110px" ,
        "height":"40px",
        "font-size":"20px"
    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [enrollment, setEnrollment] = useState('');
    const [college, setCollege] = useState('');
    const [phone, setPhone] = useState('');


    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const currentUrl = window.location.href.toString();
        console.log(currentUrl);
        const eventStr = currentUrl.split('=')[1];
        console.log(eventStr);
        try {
            console.log('infunct');
            // const location = window.location.href;
            // const queryParams = new URLSearchParams(location);
            // const eventName = urlParams.get('eventName');
            // console.log(eventName);
            const response = await axios.post('http://localhost:3001/user/eventreg/eventregister', {
                name,
                email,
                enrollment,
                college,
                phone,
                eventStr,
            });
            // Handle response as needed
            console.log(response.data);
        } catch (error) {
            // Handle error
            console.error('Error submitting form:', error);
        }
        window.location.href='/';
    };

    return (
        <>
            <div className="container" style={container}>
                <h2 style={h2}>Event Registration</h2>
                <form id="myForm" onSubmit={handleFormSubmit} style={form}>
                    <div style={form_div}>
                        <label htmlFor="name" style={label}>name:</label>
                        <input type="text" id="name" name="name" style={input} value={name} onChange={(e)=> setName(e.target.value)} required />
                        <span className="error" id="nameError" style={error} />
                    </div>
                    <div style={form_div}>
                        <label htmlFor="email" style={label}>email:</label>
                        <input type="email" id="email" name="email" style={input} value={email} onChange={(e)=> setEmail(e.target.value)} required />
                        <span className="error" id="emailError" style={error} />
                    </div>
                    <div style={form_div}>
                        <label htmlFor="Enrollment No." style={label}>Enrollment:</label>
                        <input type="text" id="enrollment" name="enrollment" style={input} value={enrollment} onChange={(e)=> setEnrollment(e.target.value)} required />
                        <span className="error" id="enrollmentError" style={error} />
                    </div>
                    <div style={form_div}>
                        <label htmlFor="college" style={label}>college_name:</label>
                        <input type="text" id="college" name="college" style={input} value={college} onChange={(e)=> setCollege(e.target.value)} required />
                        <span className="error" id="collegeError" style={error} />
                    </div>
                    <div style={form_div}>
                        <label htmlFor="phone" style={label}>phoneNo:</label>
                        <input type="tel" id="phone" name="phone" style={input} value={phone} onChange={(e)=> setPhone(e.target.value)} required />
                        <span className="error" id="phoneError" style={error} />
                    </div>


                    <div style={form_div}>
                        <button type="submit" style={button}>Submit</button>
                    </div>
                </form>
            </div>

        </>
    )
}