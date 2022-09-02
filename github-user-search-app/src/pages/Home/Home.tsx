import { useState } from 'react';

import { MagnifyingGlass } from 'phosphor-react'

import { Header } from '../../components/Header';
import { UserCard } from '../../components/UserCard';
import { api } from '../../lib/api';

import './style.css'

export function Home() {
  const [userName, setUserName] = useState('')
  const [haveData, setHaveData] = useState(false)
  const [userData, setUserData] = useState({})
  
  async function getUser(name: string) {
    try {
      const response = await api.get('https://api.github.com/users/' + name);
      const data = response.data
      setUserData(data);
      setHaveData(true);
    } catch {
      alert('Error: usuário não encontrado');
    }
  }

  return (
    <div className="container">
      <Header />
      <div className="user-search">
        <MagnifyingGlass size={24} color="var(--secondary-dark-color)" />
        <input
          type="text" 
          placeholder="Search Github username..." 
          value={userName} 
          onChange={e => setUserName(e.target.value)}
        />
        <button
          onClick={() => getUser(userName)}
        >
          Search
        </button>
      </div>
      {haveData ? <UserCard user={userData} /> : '' }
    </div>
  )
}
