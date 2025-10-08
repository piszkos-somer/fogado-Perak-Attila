import React from 'react';
import 'SzallasTipusok.css';

function SzallasTipusok() {
  return (
    <div className='green'>
      <h4>Falusi szálláshely fajtái</h4>
      <ul>
        <li>Vendégház: önálló épület, több szoba, konyha, fürdőszoba</li>
        <li>Falusi szálláshely: lakóházban kialakított vendégszobák</li>
        <li>Szálláshely kizárólag vendégek részére</li>
        <li>Étterem, borospince, programlehetőségek</li>
      </ul>
    </div>
  );
}

export default SzallasTipusok;
