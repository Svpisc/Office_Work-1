// SecondComponent.js
import React, { useContext } from 'react';
import DataContext from './DataContext';

const SecondComponent = () => {
  const { data } = useContext(DataContext);

  return (
    <div>
      <p>{data.message}</p>
    </div>
  );
};

export default SecondComponent;
