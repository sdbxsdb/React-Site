import { Route, Switch } from 'react-router-dom';

import AllItemsPage from './pages/AllItems';
import DonePage from './pages/Done';
import NewCalanderItem from './pages/NewCalanderItem';
import Layout from './components/layout/Layout'


function App() {
  return (

    <Layout>
      <Switch>
        <Route path="/" exact >
          <AllItemsPage />
        </Route>
  
        <Route path="/done" >
          <DonePage />
        </Route>

        <Route path="/new-item" >
          <NewCalanderItem />
        </Route>
      </Switch>

    </Layout>

  );
}

export default App;
