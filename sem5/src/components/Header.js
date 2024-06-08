import React, { useContext } from 'react';
import { UserContext } from './Contexts';

export default function Header() {
  const { username } = useContext(UserContext);

  return <header>Привет, {username}!</header>;
}
