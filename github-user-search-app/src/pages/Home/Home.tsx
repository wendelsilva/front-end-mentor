import { useState } from 'react';
import { MagnifyingGlass } from 'phosphor-react';

import { Header } from '../../components/Header';
import { UserCard } from '../../components/UserCard';
import { Loading } from '../../components/Loading';
import { api } from '../../lib/api';
import { UserProps } from '../../components/UserCard/types';

import './style.css';

export function Home() {
  const [userName, setUserName] = useState('')
  const [user, setUser] = useState<UserProps>()
  const [isLoading, setIsLoading] = useState(false)
  
   async function getUser(name: string) {
    try {
      setIsLoading(true)
      const response = await api.get('/users/' + name)
      setUser(response.data)
      setIsLoading(false)
    } catch (error) {
      alert(error)
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
      {isLoading ? <Loading /> : ''}
      {user ? <UserCard user={user} /> : ''}
    </div>
  )
}
