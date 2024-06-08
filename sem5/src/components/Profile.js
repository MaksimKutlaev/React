import React, { useContext } from 'react';
import { ThemeContext } from './Contexts';

export default function Profile() {
  const { theme } = useContext(ThemeContext);

  return <div>Тема интерфейса: {theme}</div>;
}
