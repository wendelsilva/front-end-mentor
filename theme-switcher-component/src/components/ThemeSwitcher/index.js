import { Button, Container, Switcher, Title } from './style.js';

import {BiSun, BiMoon} from 'react-icons/bi';
import { useState } from 'react';

export const ThemeSwitcher = () => {

    const [theme, setTheme] = useState('light');
    
    const handleClick = (t) => {
        setTheme(t);
    }

    return (
        <Container className={theme === 'light' ? 'light' : 'dark'}>
            <Title>Theme</Title>
            <Switcher>
                <Button onClick={() => handleClick('light')} className='light-btn'><BiSun />Light</Button>
                <Button onClick={() => handleClick('dark')} className='dark-btn'><BiMoon />Dark</Button>
            </Switcher>
        </Container>
    );
}