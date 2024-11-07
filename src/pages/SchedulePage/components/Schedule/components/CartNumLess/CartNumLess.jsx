import React from 'react';
import './CartNumLess.css'
export default function CartNumLess({numLess}) {
  return (
    <div className="NumeLess">
      <p className="Nume">{numLess}</p>
    </div>
  );
}
