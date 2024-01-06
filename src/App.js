import {  Routes,Route } from 'react-router-dom';
import Login from './components/Login'
import './App.css';
import Home from './components/Home';
import Details from './components/Details';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/detail/:id' element={<Details />}></Route>
      </Routes>
    </div>
  );
}

export default App;
