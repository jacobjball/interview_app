import React, {Component} from 'react';
import { Form } from 'semantic-ui-react';

class Assessments extends Component {
  state = {assessment_name: '', assessment_type: ''}

  componentDidMount() {
    if (this.props.id) {
      const { assessment_name, assessment_type } = this.props
      this.setState({ assessment_name, assessment_type })
    }
  }

  handleChange = (a) => {
    const { name, value } = a.target
    this.setState({ [name]: value })
  }

  handleSubmit = (a) => {
    a.preventDefault()
    if (this.props.id) {
      const { id, history } = this.props
      this.props.updateName(id, this.state, history)
      this.props.toggleUpdate()
    }
    this.setState({ assessment_name: '', assessment_type: ''})
    }

    close = () => this.setState({ open: false })
  

    render() {
      const { assessment_name, assessment_type } = this.state
      return(
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
          name='assessment_name'
          value={assessment_name}
          onChange={this.handleChange}
          label='Assessment Name'
          required
          />
          <Form.Input
          name='assessment_type'
          value={assessment_type}
          onChange={this.handleChange}
          label='Assessment Type'
          required
          />

          
          <Form.Button>Submit</Form.Button>
        </Form>
      )
    }
  }

export default Assessments;
