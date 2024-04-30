import { React, useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import CreateFile from './pages/CreateFiles';
import ShowFile from './pages/ShowFile';
import EditFile from './pages/EditFile';
import DeleteFile from './pages/DeleteFile';
import Samples from './pages/Samples';
import { ThemeContext } from './contexts/ThemeContext';

const App = () => {
  //get lightmode theme from context
  const { isLightMode } = useContext(ThemeContext);

  return (
    <div className={ isLightMode ? "bg-gray-100 min-h-screen" : "bg-gray-700 min-h-screen"}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/files/create' element={<CreateFile />} />
        <Route path='/files/details/:id' element={<ShowFile />} />
        <Route path='/files/edit/:id' element={<EditFile />} />
        <Route path='/files/delete/:id' element={<DeleteFile />} />
        <Route path='/samples' element={<Samples />} />
      </Routes>
    </div>
  );
};

export default App;

