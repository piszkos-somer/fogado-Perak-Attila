import React from 'react';
import { Table } from 'react-bootstrap';

function Fogado() {
  const szobak = [
    { nev: 'Szende', agyak: 4 },
    { nev: 'Szundi', agyak: 4 },
    { nev: 'Morgó', agyak: 3 },
    { nev: 'Hapci', agyak: 3 },
    { nev: 'Tudor', agyak: 4 },
    { nev: 'Vidor', agyak: 2 },
    { nev: 'Kuka', agyak: 1 },
  ];

  return (
    <div>
      <h4>A hét törpe fogadó</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Szoba neve</th>
            <th>Ágyak száma</th>
          </tr>
        </thead>
        <tbody>
          {szobak.map((szoba, index) => (
            <tr key={index}>
              <td>{szoba.nev}</td>
              <td>{szoba.agyak}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <p><strong>A házban összesen 21 fő fér el.</strong></p>
      <ul>
        <li>1. Ruhaszárító</li>
        <li>2. Saját fürdőszoba zuhanyzással</li>
        <li>3. WC (fürdőszobával egyben)</li>
      </ul>
    </div>
  );
}

export default Fogado;
