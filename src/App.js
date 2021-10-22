import { Route, Switch } from 'react-router-dom';

import JanuaryPage from './pages/January';
import FebuaryPage from './pages/Febuary';
import MarchPage from './pages/March';
import MainNav from './components/layout/MainNav';

function App() {
  return (

    <div>
      <MainNav />
      <Switch>
        <Route path="/" exact >
          <JanuaryPage />
        </Route>
  
        <Route path="/feb" >
          <FebuaryPage />
        </Route>
  
        <Route path="/march" >
          <MarchPage />
        </Route>
      </Switch>

    </div>

  );
}

export default App;
