import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Profile from './Components/Profile';
import Login from './Components/Login';
import SignIn from './Components/Signin';
import RecordingPage from './Components/RecordingPage';

function App() {
  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/recordings' element={<Profile/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/recording' element={<RecordingPage/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App

