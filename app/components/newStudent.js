import React, { Component } from "react";
import { connect } from "react-redux";
import store, { setNewStudent } from "../store";


const tempState = {
  firstName: "",
  lastName: "",
  email: "",
  campus: 1,
  imageLocation: "../img/student/student"+(Math.ceil(Math.random()*9))+".jpg"
};

class newStudent extends Component {
  constructor(props) {
    super(props);
    this.state = tempState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.setNewStudent(this.state);
    this.props.history.push("/student");
    this.setState(tempState);
  }

  render() {
    return (
      <div>
        <div className={`container`}>
          <h2 className={`text-center`}>New Student Form</h2>

          <form
            onSubmit={this.handleSubmit}
            className={`col-lg-12 text-center`}
          >
            <div>
              <div className={`col-sm-6`}>
                <div className={`form-group label-floating`}>
                  <label className={`control-label`}>first name:</label>
                  <input
                    className="form-control"
                    type="text"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className={`col-sm-6`}>
                <div className={`form-group label-floating`}>
                  <label className={`control-label`}>last name:</label>
                  <input
                    className="form-control"
                    type="text"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className={`col-sm-6`}>
                <div className={`form-group label-floating`}>
                  <label className={`control-label`}>email:</label>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className={`col-sm-6`}>
                <div className={`form-group label-floating`}>
                  <label className={`control-label`}>campus:</label>
                  <select
                    name="campus"
                    value={this.state.campus}
                    onChange={this.handleChange}
                    className={`form-control`}
                  >
                    {this.props.campuses.map(campus => {
                      return (
                        <option key={campus.id} value={campus.id}>
                          {campus.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>
            <button className={`btn btn-success btn-round`}>
              Create New Student
            </button>
          </form>
        </div>
        <div className={`section`} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { campuses: state.campuses, students: state.students };
};

const mapDispatchToProps = dispatch => {
  return {
    setNewStudent: student => {
      dispatch(setNewStudent(student));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(newStudent);
