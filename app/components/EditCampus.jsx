import React, { Component } from "react";
import { connect } from "react-redux";
import store, { editCampusThunk } from "../store";


const tempState = {
  name: "",
  id:""
};

class editCampus extends Component {
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
    this.setState({ id: this.props.match.params.id })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.editCampusThunk(this.state);
    this.setState(tempState);
    this.props.history.push("/campus");
  }

  render() {
    return (
      <div>
        <div className={`container`}>
          <h2 className={`text-center`}>Edit Campus Form</h2>

          <form
            onSubmit={this.handleSubmit}
            className={`col-lg-12 text-center`}
          >
            <div>
              <div className={`col-sm-6`}>
                <div className={`form-group label-floating`}>
                  <label className={`control-label`}>Name:</label>
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>
            <button className={`btn btn-success btn-round`}>
              Edit Campus
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
    editCampusThunk: student => {
      dispatch(editCampusThunk(student));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(editCampus);
