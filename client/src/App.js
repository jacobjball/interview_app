import React from 'react';
import { render } from 'react-dom';
import { Switch, Route, BrowserRouter} from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Home from './components/Shared/Home';
import Assessments from './components/assessments/Assessments';
import AssessmentForm from './components/assessments/AssessmentForm';


const App = () => (
  <>
    <Container>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path='/assessments' component={Assessments} />
          <Route exact path='/assessmentform' component={AssessmentForm} />
        </Switch>
      </BrowserRouter>
    </Container>
  </>
)


export default App;
