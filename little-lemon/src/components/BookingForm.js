// src/components/BookingForm.js
import React, { useState } from 'react';

function BookingForm({ availableTimes, dispatch, submitForm }) {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        guests: 1,
        occasion: 'Birthday',
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};

        if (!formData.date) {
            newErrors.date = 'Date is required';
        }

        if (!formData.time) {
            newErrors.time = 'Time is required';
        }

        if (formData.guests < 1 || formData.guests > 10) {
            newErrors.guests = 'Guests must be between 1 and 10';
        }

        return newErrors;
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));

        if (id === 'date') {
            const date = new Date(value);
            console.log('Dispatching date:', date);
            dispatch({ type: 'UPDATE_TIMES', date: date });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            console.log('Form Data Submitted:', formData);
            submitForm(formData); // Call submitForm function
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'grid'}}>
            <label htmlFor="date">Choose date</label>
            <input type="date" id="date" value={formData.date} onChange={handleChange} />
            {errors.date && <span style={{ color: 'red' }}>{errors.date}</span>}

            <label htmlFor="time">Choose time</label>
            <select id="time" value={formData.time} onChange={handleChange}>
                <option value="">Select a time</option>
                {availableTimes.map((time) => (
                    <option key={time} value={time}>
                        {time}
                    </option>
                ))}
            </select>
            {errors.time && <span style={{ color: 'red' }}>{errors.time}</span>}

            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                id="guests"
                placeholder="1"
                min="1"
                max="10"
                value={formData.guests}
                onChange={handleChange}
            />
            {errors.guests && <span style={{ color: 'red' }}>{errors.guests}</span>}

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={formData.occasion} onChange={handleChange}>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>

            <input type="submit" value="Make Your reservation" />
        </form>
    );
}

export default BookingForm;
