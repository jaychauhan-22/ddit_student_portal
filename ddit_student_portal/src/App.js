// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Fees from './components/Fees';
import ExamResult from './components/ExamResult';
import InformationMySubjects from './components/Information_MySubjects';
import SearchSubject from './components/SearchSubject';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/fees' element={<Fees/>}/>
        <Route path='/examresults' element={<ExamResult/>}/>
        <Route path='/info-mysubjects' element={<InformationMySubjects/>}/>
        <Route path='/info-searchsubjects' element={<SearchSubject/>}/>

        <Route path='/' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
