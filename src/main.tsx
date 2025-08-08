import React from 'react';
import { createRoot } from 'react-dom/client';
import { Button } from 'zelda-ui-core';
import 'zelda-ui-core/css';

function App() {
  const [rupees, setRupees] = React.useState(150);

  return (
    <div className="zelda-app">
      <div>
        <h1>Zelda UI Test</h1>
        <p>Rupees: {rupees}</p>
        <Button onClick={() => setRupees(rupees + 50)}>Add Rupees</Button>
      </div>
    </div>
  );
}

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
