import React, { useContext } from 'react';
import { ThemeContext } from './Contexts';

export default function Footer() {
  const { theme } = useContext(ThemeContext);

  return <footer className={theme}>© 2024 Все права защищены.</footer>;
}
