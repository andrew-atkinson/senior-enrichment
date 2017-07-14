import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Campus from './campus';

class CampusList extends Component {
  componentDidMount() {
    const { campuses } = this.props;
  }

  render() {
    return (
      <div>
        <div className={`container`}>
          <h2 className={`text-center`}>
            Campuses
            <NavLink
              to={`/newcampus`}
              className={`btn btn-success btn-xs btn-round`}
            >
              new campus
            </NavLink>
          </h2>

          <div className={`col-lg-12`}>
            <ul className={`list-unstyled`}>
              {this.props.campuses.map(campus => {
                return (
                  <div key={campus.id}>
                    <li>
                      <Campus {...campus}/>
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
        <div className={`section`} />
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return { campuses: state.campuses };
};

export default withRouter(connect(mapStateToProps)(CampusList));
