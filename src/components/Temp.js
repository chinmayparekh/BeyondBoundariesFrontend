import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Temp = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:6969/file')
      .then(response => {
        console.log( response.data); // Output the response data to the console
        setData(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {data ? (
        <p>{data}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Temp;