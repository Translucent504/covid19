import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>env: {process.env.REACT_APP_API}</h1>
    </div>
  );
}

export default App;
