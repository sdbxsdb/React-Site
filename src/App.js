import { Route, Switch } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavMeetupsPage from './pages/FavMeetups';

function App() {
  return (

    <div>
      <Switch>
        <Route path="/" exact >
          <AllMeetupsPage />
        </Route>
  
        <Route path="/new-meetup" >
          <NewMeetupPage />
        </Route>
  
        <Route path="/fav-meetups" >
          <FavMeetupsPage />
        </Route>
      </Switch>

    </div>

  );
}

export default App;
