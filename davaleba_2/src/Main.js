import React from 'react';

const Main = ({ displayHello }) => {
  return (
    <div>
     
      <button onClick={() => displayHello('გამარჯობა მსოფლიო')}> button</button>
    </div>
  );
}

export default Main;