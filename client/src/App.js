import React, { Component, } from 'react';
import AssessmentForm from './components/assessments/AssessmentForm';
import AssessmentList from './components/assessments/AssessmentList';
import { Container, } from "semantic-ui-react";

class App extends Component {
 state = { assessments: [], };

 componentDidMount() {
   // TODO make a call to our rails server to get Items
 }

 addItem = (name) => {
   // TODO make api call to rails server to add item
   // TODO update state
 }

 updateTodo = (id) => {
   // TODO make api call to update todo
   // TODO update state
 }

 deleteTodo = (id) => {
   // TODO make api call to delete todo
   // TODO remove it from state
 }

 render() {
   return (
     <Container style={{ padding: "30px 0", }}>
       <AssessmentForm addItem={this.addItem} />
       <br />
       <br />
       <AssessmentList
         assessments={this.state.assessments}
         updateAssessment={this.updateAssessment}
         deleteAssessment={this.deleteAssessment}
       />
     </Container>
   );
 }
}

export default App;
