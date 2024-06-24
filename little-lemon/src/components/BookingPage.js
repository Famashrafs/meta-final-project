// src/components/BookingPage.js
import React, { useReducer, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';

// Define seededRandom function
const seededRandom = function(seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
};

// Define fetchAPI function
const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};

// Define submitAPI function
const submitAPI = function(formData) {
    return true;
};

const initializeTimes = () => {
    const today = new Date();
    console.log('Initializing times for today:', today);
    return fetchAPI(today);
};

const updateTimes = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            const selectedDate = new Date(action.date);
            console.log('Fetching times for date:', selectedDate);
            return fetchAPI(selectedDate);
        default:
            return state;
    }
};

function BookingPage() {
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
    const navigate = useNavigate(); // Get the navigate function

    useEffect(() => {
        dispatch({ type: 'UPDATE_TIMES', date: new Date().toISOString().split('T')[0] });
    }, []);

    const submitForm = (formData) => {
        const result = submitAPI(formData);
        if (result) {
            localStorage.setItem('formData', JSON.stringify(formData)); // Store form data in local storage
            navigate('/booking-confirmed'); // Navigate to the booking confirmed page
        } else {
            alert('Failed to submit reservation.');
        }
    };

    return (
        <div>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
        </div>
    );
}

export default BookingPage;
