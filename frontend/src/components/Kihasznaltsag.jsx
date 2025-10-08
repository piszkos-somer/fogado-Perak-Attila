import { useEffect, useState, React } from 'react';
import { Table } from 'react-bootstrap';
import './Kihasznaltsag.css';

function Kihasznaltsag() {

        const [rooms, setRooms] = useState([]);
       
        useEffect(() => {
          axios.get('http://localhost:5173/hettorpe')
            .then(response => setRooms(response.data))
            .catch(error => console.error(error));
        }, []);
       
        return (
          <div>
            <h2>Szobák listája</h2>
            <table>
              <thead>
                <tr>
                  <th>Szoba neve</th>
                  <th>Ágyak száma</th>
                </tr>
              </thead>
              <tbody>
                {rooms.map((room, index) => (
                  <tr key={index}>
                    <td>{room.sznev}</td>
                    <td>{room.agy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
export default Kihasznaltsag;
