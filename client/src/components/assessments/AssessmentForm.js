import React from 'react';
import { Form } from "semantic-ui-react";

class AssessmentForm extends React.Component {

  state= { name: " ", };

  handleChange = (a) => {
    this.setState({ name: a.target.value, });
  }

  handleSubmit = (a) => {
    a.preventDefault();
    this.props.addItem(this.state.name);
    this.setState({ name: "", });
  }
  

  render() {
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="AssessmentName"
          placeholder = "New Assessment"
          required
          value={this.state.name}
          onChange={this.handleChange}
          />
      </Form>
      
    )
  }
}





export default AssessmentForm;