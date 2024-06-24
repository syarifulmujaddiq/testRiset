import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {

  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/home', {
      method: 'GET',
      credentials: 'include', // Pastikan kredensial disertakan
    })
    .then(response => {
        if (response.status == 401){
            navigate("/login");
        }

        // console.log(response.text());
        console.log("status: ", response.status);
        return response.text();
    })
    .then(data => {
        setMessage(data);
        console.log(data);
    })
    .catch(() => setMessage('You are not authenticated'));
  }, []);

  return (
    <div>
      <h2>Home</h2>
      <p>{message}</p>
    </div>
  );
}

export default Home;
