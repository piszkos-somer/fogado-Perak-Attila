import { useEffect, useState } from 'react';
import axios from 'axios';

function BookingForm() {
    const [bookings, setBookings] = useState([]);
  
    useEffect(() => {
      axios.get('http://localhost:3001/foglaltsag')
        .then(response => setBookings(response.data))
        .catch(error => console.error(error));
    }, []);
  
    return (
      <div>
        <h2>Foglaltsági adatok</h2>
        <table>
          <thead>
            <tr>
              <th>Vendég neve</th>
              <th>Érkezés</th>
              <th>Távozás</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td>{booking.vnev}</td>
                <td>{booking.erk}</td>
                <td>{booking.tav}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default BookingForm;