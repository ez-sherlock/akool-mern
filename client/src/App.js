import './assets/css/bootstrap.min.css'
import './assets/css/style.css'
import './assets/css/launch.css'
import './assets/css/app.intro.css'
import './assets/css/media.css'
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen"
import AppIntroScreen from './Screens/AppIntroScreen';
import AppsScreen from './Screens/AppsScreen';
import Navbar from './Components/Navbar';
import AppStoreScreen from './Screens/AppStoreScreen';
import LoginScreen from './Screens/LoginScreen';
import { useSelector } from 'react-redux'

const App = () => {
  const userLoggedIn = useSelector(state => state.userInfo)
  // console.log(userDetails)
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={userLoggedIn ? <AppStoreScreen /> : <HomeScreen />} />
        </Route>
        <Route path='/apps' element={<Navbar hideNavItems />}>
          <Route index element={<AppsScreen />} />
          <Route path=':id' element={<AppIntroScreen />} />
        </Route>
        <Route path='/login' element={<Navbar hideNavItems />}>
          <Route index element={<LoginScreen />} />
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
