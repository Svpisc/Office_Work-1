import React, { useReducer } from 'react';


const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload];
    case 'REMOVE_ITEM':
      return state.filter((item, index) => index !== action.payload);
    default:
      return state;
  }
};

const UseReducer = () => {
  
  const [items, dispatch] = useReducer(reducer, []);

  
  const addItem = () => {
    const newItem = prompt('Enter new item:');
    if (newItem) {
      dispatch({ type: 'ADD_ITEM', payload: newItem });
    }
  };

 
  const removeItem = (index) => {
    dispatch({ type: 'REMOVE_ITEM', payload: index });
  };

  return (
    <div>
      <h2>Items List</h2>
      <button onClick={addItem}>Add Item</button>
      <ul>
        
        {items.map((item, index) => (
          <li key={index}>
            {item}
            
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseReducer;
