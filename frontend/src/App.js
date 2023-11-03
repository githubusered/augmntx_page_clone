import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom';

import './App.css';
import Profile from './Pages/Profile/Profile';
import Profiles from './Pages/Profiles/Profiles';
import Error404 from './Components/Error404/Error404';
import Login from './Pages/Login/Login';
import Hire from './Pages/Hire/Hire';
import Main from './Pages/Main/Main';

function App() {
  return (
    <div className="App">
           <Router>
            <Switch>
              <Route path='/' exact><Main paths={`/,/profiles,/profile/:profile_url/:unique_id,/admin/auth/login,/hire`}/></Route>
              <Route path='/profiles'><Profiles /></Route>
              <Route path='/profile/:profile_url/:unique_id' ><Profile /></Route>
              <Route path='/admin/auth/login'> <Login /></Route>
              <Route path='/hire'> <Hire /></Route>
              <Route ><Error404 /></Route>
            </Switch>
           </Router>
        
    </div>
  );
}

export default App;
