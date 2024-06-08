import React, { useState } from 'react';
import { UserContext, ThemeContext } from './components/Contexts';
import Header from './components/Header';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Apps from './components/LoadingIndicator';



function App() {
  // const [username, setUsername] = useState('Гость');
  // const [theme, setTheme] = useState('light');

  // const toggleTheme = () => {
  //   setTheme((prevTheme) => (prevTheme === 'light'? 'dark' : 'light'));
  // }
 // Использование MyComponentWithLoading в приложении
<Apps />


  // return (
  //   <div>
  //     <UserContext.Provider value={{username, setUsername}}>
  //       <ThemeContext.Provider value={{theme, setTheme}}>
  //         <div className="{theme}">
  //           <h1>Пример использования контекстов</h1>
  //           <button onClick={() => setUsername('Alex')}>change name</button>
  //           <button onClick={toggleTheme}>change theme</button>
  //           <Header />
  //           <Profile />
  //           <Footer />
  //         </div>
  //       </ThemeContext.Provider>
  //     </UserContext.Provider>
  //   </div>
  // );
}

export default App;
