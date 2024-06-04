import logo from './logo.svg';
import './App.css';
import Box from './components/Box';
import List from './components/List';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import DetailPage from './components/DetailPage';
import ListPage from './components/ListPage';

function App() {
  const pages = [
    {id: 1, title: 'Первая страница', text: 'Текст первой страницы'},
    {id: 2, title: 'Вторая страница', text: 'Текст второй страницы'},
    {id: 3, title: 'Третья страница', text: 'Текст третьей страницы'},
  ]
  // const items = ['1', '2', '3', '4', '5', '6'];
  // const renderItem = (item, index) => {
  //   const style = {color: index%2===0 ? 'blue' : 'green'};
  //   return (
  //   <div style={style}>
  //     <p>{item} - уникальный стиль</p>
  //   </div>
  //   );
  // };
  return (
    <>
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<ListPage pages={pages} />} />
          <Route path="/pages/:id" element={<DetailPage pages={pages} />} />
        </Routes>
      </Router>
    </div>
    {/* <div>
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </Router>
    </div> */}
      {/* <div>
        <h1>Пример использования контента</h1>
        <Box>
          <p>Текст внутри</p>
        </Box>
        <Box>
          <img src="https://4tololo.ru/sites/default/files/images/20141407170353.jpg" alt="placeholder" />
        </Box>
        <Box>
          <div style={{background: 'lightblue', padding: '10px'}}>
            Другой компонет внутри Box
          </div>
        </Box>    
      </div> */}
      {/* <div> 
        <h1>
          Пример использования компонента List
          <List items={items} renderItem={renderItem} />
        </h1>
      </div> */}  
    </>
  );
}

export default App;
