import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNewTaco } from '../store';

const tempState = {
  firstName: '',
  lastName:'',
  email: '',
  imageLocation:'',
  campus:''
};




class NewTacoForm extends Component {
  constructor (props) {
    super(props);
    this.state = blankFormState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    const value = event.target.value;
    this.setState({
      [event.target.name]: value
    });
  }

  handleSubmit (event) {
    event.preventDefault();

    this.props.createNewTaco(this.state)
    this.props.history.push('/')

    this.setState(blankFormState);
  }

  render () {
    return (
      <div>
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          <h2>Create a new taco</h2>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input
                className="form-control"
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </label>
            <hr />
            <label>
              Price:
              <input
                className="form-control"
                type="text"
                name="price"
                value={this.state.price}
                onChange={this.handleChange}
              />
            </label>
            <hr />
            <label>
              Protein:
              <input
                className="form-control"
                name="protein"
                value={this.state.protein}
                onChange={this.handleChange}
              />
            </label>
            <hr />
            <label>
              Tortilla
              <input
                className="form-control"
                name="tortilla"
                value={this.state.tortilla}
                onChange={this.handleChange}
              />
            </label>
            <hr />
            <input
              className="btn btn-success"
              type="submit"
            />
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatch = {
  createNewTaco
}


export default connect(null, mapDispatch)(NewTacoForm)


