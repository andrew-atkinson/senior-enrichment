import React, { Component } from "react";
import { connect } from "react-redux";
import store, { editStudentThunk } from "../store";

const tempState = {
  firstName: "",
  lastName: "",
  email: "",
  campus: 1,
  id: ""
};

class editStudent extends Component {
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
    this.setState({ id: this.props.match.params.id });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.editStudentThunk(this.state);
    this.props.history.push("/student");
    this.setState(tempState);
  }

  render() {
    const currentStudent = this.props.students.filter(student => {
      return student.id === +this.props.match.params.id
    })

    return (
      <div>
        <div className={`container`}>
          <h2 className={`text-center`}>Edit Student Form</h2>

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
                    placeholder={currentStudent.firstName}
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
                    placeholder={currentStudent.lastName}
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
                    placeholder={currentStudent.email}
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
                        <option key={campus.id} value={campus.id} selected={currentStudent.campus === campus.id?{selected}:null}>
                          {campus.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>
            <button className={`btn btn-success btn-round`}>
              Edit Student
            </button>
          </form>
        </div>
        <div className={`section`} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    campuses: state.campuses,
    students: state.students
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editStudentThunk: student => {
      dispatch(editStudentThunk(student));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(editStudent);
