import React,{useState} from 'react'

export default function UseState1() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
  
    const [fullNameMessage, setFullNameMessage] = useState('');

  
    const handleSubmit = (event) => {
    
    event.preventDefault();
    
    const fullName = `${firstName} ${lastName}`;
    
    setFullNameMessage(`Full Name: ${fullName}`);
  };
  return (
      <>
      <h2>Enter Your Name</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>
        
        <button type="submit">Submit</button>
      </form>
      
      <div>{fullNameMessage}</div>
      </>
  );
};
