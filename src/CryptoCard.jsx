import React from 'react';
const CryptoCard = ({ crypto }) => {
  return (
    <div className="crypto-card">
      <h3>{crypto.name}</h3>
      <p>Symbol: {crypto.symbol}</p>
      <p>Price: ${parseFloat(crypto.price_usd).toFixed(2)}</p>
      {/* Display other relevant cryptocurrency data */}
    </div>
  );
};

export default CryptoCard;
