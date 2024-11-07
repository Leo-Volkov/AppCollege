import React from 'react';
import './CartNumLess.css'
export default function CartNumLess({numLess}) {
  return (
    <div className="NumeLess">
      <div className="Nume">{numLess}</div>
    </div>
  );
}
