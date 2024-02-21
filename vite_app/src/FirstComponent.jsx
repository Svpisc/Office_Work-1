import React, { useContext } from 'react';
import DataContext from './DataContext';
import SecondComponent from './SecondComponent'

const FirstComponent = () => {
  const { data } = useContext(DataContext);
  return (
    <div>
      Your first component's content
      <p>{data.message}</p>
    </div>
  );
};

export default FirstComponent;



