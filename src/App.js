import { Route, Switch } from 'react-router-dom';

import AllItemsPage from './pages/AllItems';
import JanuaryPage from './pages/January';
import FebuaryPage from './pages/Febuary';
import MarchPage from './pages/March';
import NewCalanderItem from './pages/NewCalanderItem';
import Layout from './components/layout/Layout'


function App() {
  return (

    <Layout>
      <Switch>
        <Route path="/" exact >
          <AllItemsPage />
        </Route>
  
        <Route path="/jan" >
          <JanuaryPage />
        </Route>

        <Route path="/feb" >
          <FebuaryPage />
        </Route>
  
        <Route path="/march" >
          <MarchPage />
        </Route>

        <Route path="/new-item" >
          <NewCalanderItem />
        </Route>
      </Switch>

    </Layout>

  );
}

export default App;
