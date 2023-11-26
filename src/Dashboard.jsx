import React, { useState, useEffect } from 'react';
import CryptoCard from './CryptoCard';

const Dashboard = () => {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    fetch('https://api.coinlore.net/api/tickers/')
      .then((response) => response.json())
      .then((data) => {
        setCryptos(data.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <div className="dashboard">
      {cryptos.map((crypto) => (
        <CryptoCard key={crypto.id} crypto={crypto} />
      ))}
    </div>
  );
};

export default Dashboard;
