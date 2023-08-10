import React from 'react';
import MainPage from './pages/Main/MainPage';
import Auth from "./pages/Auth/Auth";
import Registration from "./pages/Registration/Registration";
import {Routes, Route} from 'react-router-dom'
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import {ProfilePage} from "./pages/ProfilePage/ProfilePage";
import NotPage from "./pages/NotPage/NotPage";
import {Path} from "./constants/path";


function App() {

  return (
    <div className="App">
        <Routes>
            <Route path={Path.HOME} element={<MainPage />} />
            <Route path={Path.AUTH} element={<Auth />} />
            <Route path={Path.REGISTRATION} element={<Registration />} />
            <Route path={Path.CHANGE_PASSWORD} element={<ChangePassword />} />
            <Route path={Path.PROFILE} element={<ProfilePage />} />
            <Route path='*' element={<NotPage/>} />
        </Routes>
    </div>
  );
}

export default App;
