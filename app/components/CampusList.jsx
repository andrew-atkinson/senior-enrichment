import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";

class CampusList extends Component {
  componentDidMount() {
    const { campuses } = this.props;
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.campuses.map(campus => {
            return (
              <li key={campus.id}>
                {campus.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return { campuses: state.campuses };
};

export default connect(mapStateToProps)(CampusList);
