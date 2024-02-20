// App.js
import React from 'react';
import { DataProvider } from './DataContext';
import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';

const App = () => {
  return (
    <DataProvider>
      <div>
        <h1>First Component</h1>
        <FirstComponent />
        <hr />
        <h1>Second Component</h1>
        <SecondComponent />
      </div>
    </DataProvider>
  );
};

export default App;
