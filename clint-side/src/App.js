import logo from './logo.svg';
import './App.css';
import FrontPage from './component/FrontPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Table from './component/Table';
import ShowDesc from './component/ShowDesc';
import AddTopic from './component/AddTopic';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
     <Route path='/' element={ <FrontPage/> }/>
     <Route path="/topic" element={ <Table/> }/>
     <Route path="/desc" element={ <ShowDesc/> }/>
     <Route path="/addTopic" element={ <AddTopic/> }/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
