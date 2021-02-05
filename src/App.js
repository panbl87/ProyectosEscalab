import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Homepage />
      </BrowserRouter>
    </div>
  );
}

export default App;
