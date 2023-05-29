// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Fees from './components/Fees';
import ExamResult from './components/ExamResult';
import InformationMySubjects from './components/Information_MySubjects';
import SearchSubject from './components/SearchSubject';
import InternalResult from './components/InternalResult';
import ExternalResult from './components/ExternalResult';
import AdminLogin from './components/admincomponents/admin-login';
import AdminHome from './components/admincomponents/admin-home';
import AdminStudentinfo from './components/admincomponents/admin-studentinfo';
import AdminStudentsAdd from './components/admincomponents/admin-students-add';
import AdminStudentsUpdate from './components/admincomponents/admin-students-update';

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
        <Route path='/examresults/internal-result' element={<InternalResult/>}/>
        <Route path='/examresults/external-result' element={<ExternalResult/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/admin-home' element={<AdminHome/>}/>
        <Route path='/admin-login' element={<AdminLogin/>}/>
        <Route path='/admin-studentinfo' element={<AdminStudentinfo/>}/>
        <Route path='/admin/students/add' element={<AdminStudentsAdd/>}/>
        <Route path='/admin/students/update' element={<AdminStudentsUpdate/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
