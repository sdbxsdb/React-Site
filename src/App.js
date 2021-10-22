import { Route, Switch } from 'react-router-dom';

import JanuaryPage from './pages/January';
import FebuaryPage from './pages/Febuary';
import MarchPage from './pages/March';
import Layout from './components/layout/Layout'


function App() {
  return (

    <Layout>
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

    </Layout>

  );
}

export default App;
