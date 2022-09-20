import { Sun } from 'phosphor-react';

import './style.css';

export function Header() {
  return (
    <header>
        <h1>devfinder</h1>
        <button>LIGHT <Sun size={18}/></button>
    </header>
  );
}