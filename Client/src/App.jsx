import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Profile from './Components/Profile';

function App() {
  return (
    <div>
       <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/recordings' element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App

