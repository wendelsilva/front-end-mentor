import { Buildings, Link, MapPin, TwitterLogo } from 'phosphor-react';

import { UserProps } from './types';
import { convertDateToPtBrFormat } from '../../utils/convertDateToPtBrFormat';

import './style.css';

interface UserCardProps {
  user: UserProps;
}

export function UserCard({ user }: UserCardProps) {

  return (
    <div className="user-card">
      <header>
        <img src={user.avatar_url} alt="imagem de perfil do github do usuário" />
        <ul>
          <li className="name">{user.name}</li>
          <li className="user">@{user.login}</li>
          <li className="started">Joined {convertDateToPtBrFormat(user.created_at)}</li>
        </ul>
      </header>
      <p>{user.bio ? user.bio : "this profile has no bio"}</p>
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
            <td>{user.public_repos}</td>
            <td>{user.followers}</td>
            <td>{user.following}</td>
          </tr>
        </tbody>
      </table>
      <footer>
        <ul>
          <li>
            <MapPin size={24}/>
            {user.location ? user.location : "not available"}
          </li>
          <li>
            <TwitterLogo size={24} />
            {user.twitter_username ? user.twitter_username : "not available"}
          </li>
          <li>
            <Link size={24}/>
            {user.html_url ? <a href={user.html_url} target="_blank">{user.html_url}</a> : "not available"}
          </li>
          <li>
            <Buildings size={24} />
            {user.company ?  "@" + user.company : "not available"}
          </li>
        </ul>
      </footer>
    </div>
  );
}