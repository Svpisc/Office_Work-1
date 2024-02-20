import React, { useState, useEffect } from 'react';
import axios from 'axios';

const APIComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get('https://jsonplaceholder.typicode.com/users');
                setData(result.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();

        return () => {
            
        };
    }, []);

    return (
        <div>
            <h2>API Component</h2>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default APIComponent;
