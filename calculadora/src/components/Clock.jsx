import React, { useState, useEffect } from 'react';
import './Clock.css'; // para o estilo opcional

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date()); // atualiza o estado a cada segundo
    }, 1000);

    return () => clearInterval(interval); // limpa o interval ao desmontar
  }, []);

  // Formata hora:minuto:segundo
  const hours = String(time.getHours()).padStart(2, '0');
  const minutes = String(time.getMinutes()).padStart(2, '0');
  const seconds = String(time.getSeconds()).padStart(2, '0');

  return (
    <div className="clock">
      {hours}:{minutes}:{seconds}
    </div>
  );
}

export default Clock;
