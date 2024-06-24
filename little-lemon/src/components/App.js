import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "../App.css";
import Header from "./Header";
import Landing from "./Landing";
import BookingPage from "./BookingPage";
import BookingConfirmed from "./BookingConfirmed"

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/booking-confirmed" element={<BookingConfirmed />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
