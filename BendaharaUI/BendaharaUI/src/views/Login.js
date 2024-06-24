import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8080/home', {
      method: 'GET',
      credentials: 'include', // Pastikan kredensial disertakan
    })
    .then(response => {
        if (response.status == 200){
            navigate("/home");
        }
        response.text();
        console.log("status: ", response.status);
    })
    .then(data => {
        console.log(data);
    })
    .catch(() => console.log('You are not authenticated'));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
      credentials: 'include',
    })
    .then(response => {
      if (response.ok) {
        navigate("/home");
      } else {
        alert('Login failed!');
      }
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
