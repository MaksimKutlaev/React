// Contexts.js
import React from 'react';

// Создание контекста для данных пользователя с начальными значениями
export const UserContext = React.createContext({
  username: "Гость",
  setUsername: () => {}
});

// Создание контекста для темы интерфейса
export const ThemeContext = React.createContext({
  theme: "light", // light или dark
  setTheme: () => {}
});


