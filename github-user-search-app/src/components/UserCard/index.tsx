import { UserCardProps } from './types';

import './style.css'
import { Buildings, Link, MapPin, TwitterLogo } from 'phosphor-react';

export function UserCard({ user }: UserCardProps) {
  return (
    <div className="user-card">
      <header>
        <img src={user.avatar_url} alt="imagem de perfil do github do usuário" />
        <ul>
          <li className='name'>{user.name}</li>
          <li className='user'>@{user.login}</li>
          <li className='started'>Entrou em {user.created_at}</li>
        </ul>
      </header>
      <p>{user.bio}</p>
      <table>
        <thead>
          <tr>
            <th>Repos</th>
            <th>Followers</th>
            <th>Following</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>8</td>
            <td>3938</td>
            <td>9</td>
          </tr>
        </tbody>
      </table>
      <footer>
        <ul>
          <li>{user.location ? <><MapPin size={24}/> {user.location}</> : 'not available'}</li>
          <li>{user.twitter_username ? <><TwitterLogo size={24} /> {user.twitter_username}</> : 'not available'}</li>
          <li>{user.html_url ? <><Link size={24}/> {user.html_url}</> : 'not available'}</li>
          <li>{user.company ? <><Buildings size={24} /> @ {user.company}</> : 'not available'}</li>
        </ul>
      </footer>
    </div>
  );
}