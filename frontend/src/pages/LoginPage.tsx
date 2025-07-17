import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const nav = useNavigate();

  const handleLogin = async () => {
    const res = await api.post('/auth/login', { user, pass });
    localStorage.setItem('token', res.data.token);
    nav('/');
  };

  return (
    <div className="p-4">
      <input placeholder="User" onChange={e => setUser(e.target.value)} />
      <input placeholder="Pass" type="password" onChange={e => setPass(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
