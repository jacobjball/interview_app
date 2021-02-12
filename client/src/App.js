import React from 'react';
import { render } from 'react-dom';
import { Switch, Route, BrowserRouter} from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Home from './components/Shared/Home';


const App = () => (
  <>
    <Container>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </Container>
  </>
)


export default App;
