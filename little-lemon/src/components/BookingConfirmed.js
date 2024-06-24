import React from 'react';
import confirmed from "../icons_assets/confirmed.jpg"
import { Link } from 'react-router-dom';

function BookingConfirmed() {
    const formData = JSON.parse(localStorage.getItem('formData')); // Retrieve form data from local storage
    return (
        <section className='confirmed'>
            <img
            src={confirmed}
            alt='confirmed'
            />
            <h1>Booking Confirmed!</h1>
            <p>Your reservation has been <span className='green'> successfully </span> submitted.</p>
            {formData && (
                <div className='details'>
                    <h2>Reservation Details:</h2>
                    <p>Date: {formData.date}</p>
                    <p>Time: {formData.time}</p>
                    <p>Guests: {formData.guests}</p>
                    <p>Occasion: {formData.occasion}</p>
                </div>
            )}
            <Link to="/" className='home-btn'> Back to Home </Link>
        </section>
    );
}

export default BookingConfirmed;

