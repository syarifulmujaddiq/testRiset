import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8080/logout', {
      method: 'POST',
      credentials: 'include',
    })
    .then(response => {
      if (response.ok) {
        navigate('/login');
      } else {
        console.log(response);
        alert('Logout failed!');
      }
    });
  }, [navigate]);

  return (
    <div>
      <h2>Logging out...</h2>
    </div>
  );
}

export default Logout;
