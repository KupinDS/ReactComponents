import React, { useState } from 'react';
import './FunctionCount.css';

function FunctionCount() {

  const [count, onCountChange] = useState(0);

  return (
    <div className="uk-card uk-card-default uk-card-body uk-width-1-4@m uk-margin-small-left">
      <h3 className="uk-card-title">Function Counter:</h3>
      <div>{count}</div>
      <button
        className="uk-button uk-button-danger uk-margin-small-top"
        onClick={() => onCountChange(count - 1)}
      >-</button>
      <button
        className="uk-button uk-button-primary uk-margin-small-top"
        onClick={() => onCountChange(count + 1)}
      >+</button>
    </div>
  );
}

export default FunctionCount;