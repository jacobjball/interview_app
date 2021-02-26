import React, {Component} from 'react';
import { Form } from 'semantic-ui-react';



// const Assessments =() => (
//   <h1>Assessments </h1>
  
// )

class Assessments extends Component {
  state = {name: '', assessment_type: ''}

  componentDidMount() {
    if (this.props.id) {
      const { name, assessment_type } = this.props
      this.setState({ name, assessment_type })
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
    this.props.close()
    this.setState({ name: '', assessment_type: ''})
    }

    close = () => this.setState({ open: false })

    render() {
      const { name, assessment_type } = this.state
      return(
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
          name='AssessmentName'
          value={name}
          onChange={this.handleChange}
          label='Assessment Name'
          required
          />
          <Form.Input
          name='AssessmentType'
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
